// import './timetable.scss'
// import '@fullcalendar/core/vdom' /* https://github.com/fullcalendar/fullcalendar-vue/issues/152 */
import '@fullcalendar/react/dist/vdom' /* https://github.com/fullcalendar/fullcalendar-vue/issues/152 */
import FullCalendar from '@fullcalendar/react' // must go before plugins
import { Calendar, EventInput } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { flow, pick, sortedUniq, uniq } from 'lodash/fp'
import { DateTime } from 'luxon'
import styled from 'styled-components'


const FullCalendarWrapper = styled.div`
  max-height: 500px;
  & > *:first-child {
    height: 500px;
  }

  .plan-item {
    &, &.fc-v-event {
      background-color: #ffffff44;
      border-color: #333;
      user-select: none;
      // pointer-events: none;
      * {
        color: #888;
      }
    }
    &.is-selected {
      background-color: #ddd;
    }
    &.hidden-item {
      display: none;
    }
  }

  & {
    // 기본 select css를 제거(eventClick 활성화시 작동)
    .fc-event-selected:after, .fc-event:focus:after {
      background: unset;
    }
  }
`
let selectedTimeList: string[]
export default function Timetable({ eventList, selectedTimeList: $initSelectedTimeList }: { eventList: any[], selectedTimeList?: string[] }) {
  const optSelectedTimeList = [...Array.isArray($initSelectedTimeList) ? $initSelectedTimeList : []]
  if (!selectedTimeList) selectedTimeList = [...optSelectedTimeList]
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

  const users = useMemo<string[]>(() => flow((l: any[]) => l.map(({ username }) => (username as string)), uniq)(eventList), [eventList])
  // const [selectedTimeList, setSelectedTimeList] = useState<string[]>([...optSelectedTimeList])
  // const [state, setState] = useState<{ selectedTimeList: string[] }>({ selectedTimeList: [...optSelectedTimeList] })
  // const updateSelectedTimeList = useCallback((insert: boolean, time: string) => {
  //   const selectedTimeList = sortedUniq(insert ? state.selectedTimeList.concat(time) : state.selectedTimeList.filter($time => $time !== time))
  // }, [])
  const updateSelectedTimeList = (insert: boolean, time: string) => {
    selectedTimeList = sortedUniq(insert ? selectedTimeList.concat(time) : selectedTimeList.filter($time => $time !== time))
  }
  //   '2022-04-25T10:00:00.000+09:00'
  // ])
  // const toggleSelectTime = useCallback((time: string) => {
  //   const $selectedTimeList = flow(
  //     l => l.findIndex(($time: string) => $time === time) >= 0 ? l.filter(($time: string) => $time !== time) : l.concat(time),
  //     l => l.filter((s?: string) => !!s?.trim?.()),
  //     sortedUniq,
  //   )(selectedTimeList)
  //   $setSelectedTimeList($selectedTimeList)
  // }, [selectedTimeList])
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
  const events = [
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
        title: optSelectedTimeList.includes(id) ? '선택됨' : '이 시간을 선택',
        // title: '이 시간을 선택',
        classNames: [
          'plan-item',
          ...(isNotInWorkTime ? ['hidden-item'] : []),
          ...(optSelectedTimeList.includes(id) ? ['is-selected'] : []),
        ],
        // textColor: '#888',
      } as EventInput))
  ]
  return (
    <div>
      {/* <div>{selectedTimeList.map((s) => <span key={s}>{s}</span>)}</div> */}
      <FullCalendarWrapper>
        <FullCalendar
          {...{
            locale: 'ko-KR',
            plugins: [timeGridPlugin, listPlugin],
            initialView: 'timeGridWeek',
            initialDate: '2022-04-26',
            headerToolbar: {
              left: 'prev,next today',
              center: 'title',
              right: 'timeGridWeek,timeGridDay,listWeek',
            },
            businessHours: {
              startTime: workStartTime, // 8am
              endTime: workEndTime, // 6pm
            },
            events,
            eventClick: ({ jsEvent: e, el, event, ...args }) => {
              e.preventDefault()
              if (el.classList.contains('plan-item')) {
                // toggleSelectTime(event.id)
                if (el.classList.contains('is-selected')) {
                  el.classList.remove('is-selected')
                  el.querySelector('.fc-event-title.fc-sticky')!.textContent = '이 시간을 선택'
                  updateSelectedTimeList(false, event.id)
                } else {
                  el.classList.add('is-selected')
                  el.querySelector('.fc-event-title.fc-sticky')!.textContent = '선택됨'
                  updateSelectedTimeList(true, event.id)
                }
                console.log('selectedTimeList', selectedTimeList)
              }
            },
          }}
        ></FullCalendar>
      </FullCalendarWrapper>
    </div>
  )
}
