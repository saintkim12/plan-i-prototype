import { Component } from 'react'
import styled from 'styled-components'
import ScheduleCalendar from '/src/components/ScheduleCalendar'
// import Wrapper from '/src/components/Wrapper'

interface ComponentProps {
  initSelected?: string[]
}
interface ComponentState {
  itemList: { value: string, text: string }[]
  selectedItem: string[]
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
      this.props.updateSelectedItem(this.props.itemList.map(({ value }) => value))
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
      itemList: [
        { value: 'AAA', text: 'AAA' },
        { value: 'BBB', text: 'BBB' },
        { value: 'CCC', text: 'CCC' },
        { value: 'DDD', text: 'DDD' },
        { value: 'EEE', text: 'EEE' },
      ],
      selectedItem: [...initSelected],
    }
  }
  updateSelectedItem(arg: string[] | ((arr: string[]) => string[])) {
    if (typeof arg === 'function') {
      // this.setState({ selectedItem: arg(this.selectedItem) }, function() { console.log('selectedItem', selectedItem) })
      // console.log('fn', arg(this.state.selectedItem))
      this.setState((state: { selectedItem: string[] }) => ({ ...state, selectedItem: arg(state.selectedItem) }))
    } else {
      this.setState((state: { selectedItem: string[] }) => ({ ...state, selectedItem: arg }))
    }
  }
  render() {
    const itemList = this.state.itemList
    const selectedItem = this.state.selectedItem
    const updateSelectedItem = this.updateSelectedItem.bind(this)
    return (
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
              <button className="button is-normal">연동</button>
              <button className="button is-normal">연동</button>
              <button className="button is-normal">연동</button>
            </div>
            <div style={{ border: '1px solid #ddd', height: `calc(100% - ${'40px'} - ${'40px'})`, overflowY: 'auto' }}>
              <ScheduleCalendar locale="ko-KR" />
            </div>
            <div className="is-flex is-justify-content-flex-end mt-1" style={{ height: `calc(${'40px'})` }}>
              <button className="button is-primary">제출하기</button>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}
