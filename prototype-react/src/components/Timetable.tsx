import './timetable.scss'
import '@fullcalendar/core/vdom' /* https://github.com/fullcalendar/fullcalendar-vue/issues/152 */
import { Calendar, EventInput } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import flow from 'lodash/fp/flow'
import pick from 'lodash/fp/pick'
import sortedUniq from 'lodash/fp/sortedUniq'
import uniq from 'lodash/fp/uniq'
import { DateTime } from 'luxon'


export default function Timetable({ eventList }: { eventList: any[] }) {
  const timeMin = '2022-04-21T00:00'
  const timeMax = '2022-05-01T00:00'
  const workWeekdays = [1, 2, 3, 4, 5]
  const workStartTime = '08:00'
  const workEndTime = '18:00'
  const interviewingMinutes = 60
  
  const isInWorkTime = (dt: DateTime) => {
    const pickTimeValue = pick(['hour', 'minute']) as (dt: DateTime) => { hour: number, minute: number }
    return workWeekdays.includes(dt.weekday)
      && (dt.set({ ...pickTimeValue(DateTime.fromISO(`1970-01-01T${workStartTime}`)), second: 0 }).toMillis() <= dt.toMillis())
      && (dt.set({ ...pickTimeValue(DateTime.fromISO(`1970-01-01T${workEndTime}`)), second: 0 }).toMillis() > dt.toMillis())
  }

  const calendarWrapRef = useRef<HTMLDivElement>(null)
  // const [calendar, setCalendar] = useState<Calendar>()
  const calendarRef = useRef<Calendar | undefined>()
  const users = useMemo<string[]>(() => flow((l: any[]) => l.map(({ username }) => (username as string)), uniq)(eventList), [eventList])
  const [selectedTimeList, $setSelectedTimeList] = useState<string[]>([])
  const toggleSelectTime = useCallback((time: string) => {
    const $selectedTimeList = flow(
      l => l.findIndex(($time: string) => $time === time) >= 0 ? l.filter(($time: string) => $time !== time) : l.concat(time),
      l => l.filter((s?: string) => !!s?.trim?.()),
      sortedUniq,
    )(selectedTimeList)
    $setSelectedTimeList($selectedTimeList)
  }, [selectedTimeList])
  const selectableTimeList = useMemo<{ id: string, start: string, end: string, isNotInWorkTime?: boolean }[]>(() => {
    const gapMillis = interviewingMinutes * 60000
    const times = flow(
      ([dtStart, dtEnd]: [DateTime, DateTime]) => {
        const diff = dtEnd.toMillis() - dtStart.toMillis()
        console.log('diff', diff, diff / gapMillis)

        const isBetweenEvents = flow(
          (l: typeof eventList) => l.map(({ start, end }) => [DateTime.fromISO(start), DateTime.fromISO(end)]),
          l => (dt: DateTime) => !!l.find(([$dtStart, $dtEnd]) => $dtStart.toMillis() <= dt.toMillis() && $dtEnd.toMillis() >= dt.toMillis())
        )(eventList)
        
        return [...Array(Math.round(diff / gapMillis)).keys()].map(i => dtStart.plus({ milliseconds: i * gapMillis }))
          .filter((dt, idx, arr) => dt.toMillis() >= dtStart.toMillis()
            && (arr[idx + 1]?.toMillis?.() ?? dtEnd.toMillis()) <= dtEnd.toMillis()
          )
          // .map((dt, idx, arr) => ({ start: dt.toISO(), end: (arr[idx + 1] ?? dtEnd).toISO?.(), isNotInWorkTime: !isInWorkTime(dt) }))
          .map((dt, idx, arr) => ({ start: dt, end: (idx + 1 < arr.length ? arr[idx + 1] : dtEnd) }))
          .filter((({ start, end }) => {
            return (!isBetweenEvents(start) && !isBetweenEvents(end))
          }))
          .map((({ start, end }) => ({ id: start.toISO(), start: start.toISO(), end: end.toISO(), isNotInWorkTime: !isInWorkTime(start) })))
      }
    )([DateTime.fromISO(timeMin), DateTime.fromISO(timeMax)])
    console.log('times', times)
    return times
  }, [eventList])
  useEffect(() => {
    console.log('useEffect', calendarRef.current)
    if (!calendarRef.current && calendarWrapRef.current) {
      const $calendar = new Calendar(calendarWrapRef.current, {
        locale: 'ko-KR',
        plugins: [timeGridPlugin, listPlugin],
        initialView: 'timeGridWeek',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek,timeGridDay,listWeek',
        },
        businessHours: {
          startTime: workStartTime, // 8am
          endTime: workEndTime, // 6pm
        },
        events: [
          // 일정이 있는 시간
          ...eventList.map(({ username, id, title, start, end }) => ({
            id,
            title,
            start,
            end,
          })),
          // 일정이 없는 시간
          ...selectableTimeList
            .map(({ id, start, end, isNotInWorkTime = false }) => ({
              id,
              start,
              end,
              title: selectedTimeList.includes(id) ? '선택됨' : '이 시간을 선택',
              classNames: [
                'plan-item',
                ...(isNotInWorkTime ? ['hidden-item'] : []),
                ...(selectedTimeList.includes(id) ? ['is-selected'] : []),
              ],
              // textColor: '#888',
            } as EventInput))
        ],
        eventClick: ({ jsEvent: e, el, event, ...args }) => {
          e.preventDefault()
          
        //   console.log('args', args)
          if (el.classList.contains('plan-item')) {
            // args.view.calendar.unselect()
            toggleSelectTime(event.id)
        //     // const toBeSelected = !el.classList.contains('is-selected')
        //     // console.log('toBeSelected', event.id, toBeSelected)
        //     // if (toBeSelected) {
        //     //   el.classList.add('is-selected')
        //     //   // args.view.title
        //     // } else {
        //     //   el.classList.remove('is-selected')
        //     //   // args.view.calendar.getEventById('').title = ''// fullCalendar = '이 시간을 선택'
        //     // }
          }
        //   //   // window.setTimeout(() => {
        // //   // }, 1000)
        },
        // selectable: false,
        // select: (args) => {
        //   args.view.calendar.unselect()
        //   if (el.classList.contains('plan-item')) {
        //     args.view.calendar.unselect()
        //     toggleSelectTime(event.id)
        //   }
        // },
      })
      $calendar.render()
      calendarRef.current = $calendar
      // return () => $calendar.destroy()
    }
  }, [calendarWrapRef, eventList])
  return (
    <div>
      <div>{selectedTimeList.map((s) => <span key={s}>{s}</span>)}</div>
      <div ref={calendarWrapRef} style={{ maxHeight: '500px' }}></div>
    </div>
  )
}
