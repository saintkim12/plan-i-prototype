import { Component } from 'react'
import styled from 'styled-components'
import distinctColors from 'distinct-colors'
import ScheduleCalendar from '/src/components/ScheduleCalendar'
import { EventItem, getGoogleCalendarEvents, GoogleLoginButton } from '/src/components/GoogleAuthentication'
import { flow } from 'lodash/fp'
// import Wrapper from '/src/components/Wrapper'

type CalendarItemValue = {
  username: string
  calendarId: string
  type: 'google' | 'raw'
  color: any
}
export type InterviewInfo = {
  businessHours: { startTime: string, endTime: string }
}
interface ComponentProps {
  initSelected?: string[]
}
interface ComponentState {
  itemList: { value: CalendarItemValue, text: string }[]
  selectedItem: string[]
  eventList: any[]
  interviewInfo: InterviewInfo 
}


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

type InterviewerSelectBoxComponentProps = { itemName?: string, itemList: ComponentState['itemList'], selectedItem: ComponentState['selectedItem'], updateSelectedItem: (arg: string[] | ((arr: string[]) => string[])) => void }
class InterviewerSelectBoxComponent extends Component<InterviewerSelectBoxComponentProps> {
  itemName: string = 'selectedList'
  constructor(props: InterviewerSelectBoxComponentProps) {
    super(props)
    const { itemName } = props
    this.itemName = itemName ?? this.itemName
  }
  toggleAllItems(checked: boolean) {
    console.log('checked', checked)
    if (checked) {
      this.props.updateSelectedItem(this.props.itemList.map(({ value: { calendarId: value } }) => value))
    } else {
      this.props.updateSelectedItem([])
    }
  }
  toggleItem(value: string, checked: boolean) {
    console.log(value, checked)
    if (checked) {
      this.props.updateSelectedItem(arr => [...arr, value])
    } else {
      this.props.updateSelectedItem(arr => [...arr].filter($value => $value !== value))
    }
  }
  render() {
    const { itemList, selectedItem, updateSelectedItem, ...styleProps } = this.props
    const itemName = this.itemName
    const toggleAllItems = this.toggleAllItems.bind(this)
    const toggleItem = this.toggleItem.bind(this)
    return (
      <div {...styleProps}>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            onChange={(e) => toggleAllItems(e.target.checked)} />
            모든 면접 가능 일정 보기
          </label>
        <div className="ml-4">
          { itemList.map(({ text, value: { calendarId: value, color } }) => <p key={value}>
            <label>
              <input
                type="checkbox"
                className="checkbox"
                name={itemName}
                value={value}
                checked={selectedItem.includes(value)}
                onChange={(e) => toggleItem(value, e.target.checked)} />
              <span className="ml-1" style={{ color }}>■</span>
              <span className="ml-1">{text}</span>
            </label>
          </p>) }
        </div>
      </div>
    )
  }
}
const InterviewerSelectBox = styled(InterviewerSelectBoxComponent)`
`
/*
const InterviewerSelectBoxHooks = styled(
  ({ itemName = 'selectedList', initSelected = [], ...props }: { itemName?: string, initSelected?: string[] }) => {
  const [itemList] = useState([
    { value: 'AAA', text: 'AAA' },
    { value: 'BBB', text: 'BBB' },
    { value: 'CCC', text: 'CCC' },
    { value: 'DDD', text: 'DDD' },
    { value: 'EEE', text: 'EEE' },
  ])
  const [selectedItem, updateSelectedItem] = useState([...initSelected])
  const toggleAllItems = useCallback((checked: boolean) => {
    console.log('checked', checked)
    if (checked) {
      updateSelectedItem(itemList.map(({ value }) => value))
    } else {
      updateSelectedItem([])
    }
  }, [selectedItem])
  const toggleItem = useCallback((value: string, checked: boolean) => {
    console.log(value, checked)
    if (checked) {
      updateSelectedItem(arr => [...arr, value])
    } else {
      updateSelectedItem(arr => [...arr].filter($value => $value !== value))
    }
  }, [selectedItem])
  return (
    <div {...props}>
      <label>
        <input
          type="checkbox"
          className="checkbox"
          onChange={(e) => toggleAllItems(e.target.checked)} />
          전체체크
        </label>
      <div className="ml-4">
        { itemList.map(({ text, value }) => <p key={value}>
          <label>
            <input
              type="checkbox"
              className="checkbox"
              name={itemName}
              value={value}
              checked={selectedItem.includes(value)}
              onChange={(e) => toggleItem(value, e.target.checked)} />
            {text}
          </label>
        </p>) }
      </div>
    </div>
  )
})``
*/
// export default function Schedule() {
export default class Schedule extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
    const initSelected = this.props.initSelected ?? []
    this.state = {
      itemList: flow(
        list => [list, distinctColors({ count: list.length }).map(c => c.css())],
        ([list, colors]: [ComponentState['itemList'], string[]]) => list.map(({ value, ...item }, idx) => ({ ...item, value: ({ ...value, color: colors[idx] } as CalendarItemValue) }))
      )([
        {
          value: {
            username: 'kiparseo@gmail.com',
            calendarId: 'kiparseo@gmail.com',
            type: 'google',
          },
          text: 'kiparseo@gmail.com'
        },
        {
          value: {
            username: 'saintkim1232@gmail.com',
            calendarId: 'saintkim1232@gmail.com',
            type: 'google',
          },
          text: 'saintkim1232@gmail.com'
        },
      ]),
      selectedItem: [...initSelected],
      eventList: [],
      interviewInfo: {
        businessHours: {
          startTime: '09:00',
          endTime: '18:00',
        }
      }
    }
  }
  async updateSelectedItem(arg: string[] | ((arr: string[]) => string[])) {
    const selectedItem = (typeof arg === 'function') ? arg(this.state.selectedItem) : arg
    this.setState((state) => ({ ...state, selectedItem }))
    const eventList: any[] = await Promise.allSettled([
      // google
      ...this.state.itemList.filter(({ value }) => selectedItem.includes(value.calendarId) && value?.type === 'google')
        .map(({ value: { calendarId, color } }) => getGoogleCalendarEvents(calendarId, null, { color }))
    ]).then(results => results.filter(result => result.status === 'fulfilled').flatMap(result => (result as PromiseFulfilledResult<EventItem[]>).value))
    this.setState((state) => ({ ...state, selectedItem, eventList }))
  }
  render() {
    const itemList = this.state.itemList
    const selectedItem = this.state.selectedItem
    const eventList = this.state.eventList
    const interviewInfo = this.state.interviewInfo
    const updateSelectedItem = this.updateSelectedItem.bind(this)
    return (
      <>
        <Wrapper className="container is-fluid pt-1">
          <div className="columns" style={{ height: 'inherit' }}>
            <div className="column is-3">
              <div className="pt-1" style={{ marginTop: `${'40px'}`}}>
                <p className="subtitle">OOO's Calendar</p>
                <div>
                  뭐라뭐라
                  {/* 선택된 항목은 {selectedItem.join(',')}임 */}
                </div>
              </div>
              <InterviewerSelectBox
                itemList={itemList}
                selectedItem={selectedItem}
                updateSelectedItem={updateSelectedItem}
              />
            </div>
            <div className="column is-9">
              <div className="is-flex is-justify-content-flex-end mb-1" style={{ height: `calc(${'40px'})` }}>
                <GoogleLoginButton />
                <button className="button is-normal">연동</button>
                <button className="button is-normal">연동</button>
              </div>
              <div style={{ border: '1px solid #ddd', height: `calc(100% - ${'40px'} - ${'40px'})`, overflowY: 'auto' }}>
                <ScheduleCalendar
                  locale="ko-KR"
                  option={{ initialDate: '2022-04-26' }}
                  eventList={eventList}
                  interviewInfo={interviewInfo}
                />
              </div>
              <div className="is-flex is-justify-content-flex-end mt-1" style={{ height: `calc(${'40px'})` }}>
                <button className="button is-primary">제출하기</button>
              </div>
            </div>
          </div>
        </Wrapper>
        
      </>
    )
  }
}
