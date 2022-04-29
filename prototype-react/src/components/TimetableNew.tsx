import '@fullcalendar/react/dist/vdom' /* https://github.com/fullcalendar/fullcalendar-vue/issues/152 */
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function TimetableNew({ eventList }: { eventList: any[] }) {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />
  )
}
