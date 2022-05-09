import '@fullcalendar/react/dist/vdom' /* https://github.com/fullcalendar/fullcalendar-vue/issues/152 */
import FullCalendar, { EventApi } from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid'
import { Component, createRef } from 'react'
// import { differenceWith } from 'lodash/fp'

interface ComponentProps {
  locale?: 'ko-KR' | 'en-US'
  option?: Record<string, any>
  eventList?: any[]
}
interface ComponentState {}
export default class ScheduleCalendar extends Component<ComponentProps, ComponentState> {
  private fullCalendarRef: React.RefObject<FullCalendar>

  constructor(props: ComponentProps) {
    super(props)
    this.fullCalendarRef = createRef()
  }
  render() {
    const eventList = this.props?.eventList ?? []
    console.log('eventList.length', eventList.length)
    console.log('this.fullCalendarRef', this.fullCalendarRef)
    const fullCalendarOptions = {
      plugins: [timeGridPlugin],
      initialView: 'timeGridWeek',
      height: '100%',
      locale: (this.props.locale ?? 'en-US') as ComponentProps['locale'],
      headerToolbar: {
        left: 'title',
        center: '',
        right: 'prev,next today',
      },
      // initialDate: '2022-04-26',
      events: eventList,
    }
    return (
      <FullCalendar ref={this.fullCalendarRef} {...{ ...fullCalendarOptions, ...this.props.option }} />
    )
  }
}
