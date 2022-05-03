import '@fullcalendar/react/dist/vdom' /* https://github.com/fullcalendar/fullcalendar-vue/issues/152 */
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid'
import { Component, createRef } from 'react'

interface ComponentProps {
  locale?: 'ko-KR' | 'en-US'
}
interface ComponentState {}
export default class ScheduleCalendar extends Component<ComponentProps, ComponentState> {
  // fullCalendarRef

  constructor(props: ComponentProps) {
    super(props)
    // this.fullCalendarRef = createRef(null)
  }
  render() {
    const fullCalendarOptions = {
      plugins: [timeGridPlugin],
      initialView: 'timeGridWeek',
      height: '100%',
      locale: (this.props.locale ?? 'en-US') as ComponentProps['locale'],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        // right: 'timeGridWeek,timeGridDay,listWeek',
        right: 'timeGridWeek,timeGridDay',
      },
    }
    return (
      <FullCalendar {...fullCalendarOptions} />
    )
  }
}
