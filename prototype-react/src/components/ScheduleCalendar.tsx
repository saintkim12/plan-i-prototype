import '@fullcalendar/react/dist/vdom' /* https://github.com/fullcalendar/fullcalendar-vue/issues/152 */
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid'
import { Component } from 'react'

interface ComponentProps {
  locale?: 'ko-KR' | 'en-US'
  option?: Record<string, any>
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
        left: 'title',
        center: '',
        right: 'prev,next today',
      },
      // initialDate: '2022-04-26',
    }
    return (
      <FullCalendar {...{ ...fullCalendarOptions, ...this.props.option }} />
    )
  }
}
