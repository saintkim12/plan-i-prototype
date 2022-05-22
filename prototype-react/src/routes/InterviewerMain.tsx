import { useMemo, useState } from 'react'
import styled from 'styled-components'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import TitleLogo from '/src/components/TitleLogo'
import { StyledWrapper } from '/src/components/Wrapper'
import ToggleSwitch from '/src/components/ToggleSwitch'
import IconSquareRoundedOutline from '~icons/mdi/square-rounded-outline'
import IconSquareRounded from '~icons/mdi/square-rounded'
import { isEqual } from 'lodash/fp'

const Wrapper = StyledWrapper`
  background-color: #fff;
`
const IconWrapper = styled(({ className, children, ...props }: { className?: string, children?: any }) =>
  <span className={`${className} icon`} {...props}>{children}</span>
)`vertical-align: bottom;`
const SquareStyleCheckbox = ({ checked, ...props }: { checked?: boolean }) => (
  <IconWrapper {...props}>
    { checked ? <IconSquareRounded /> : <IconSquareRoundedOutline /> }
  </IconWrapper>
)

const InterviewerListBox = ({ checked, itemList, ...props }: { checked?: string[], itemList?: string[] }) => {
  const [checkedList, setCheckedList] = useState(checked ?? [])
  const onHandleClick = (item: string) => {
    if (checkedList.includes(item)) setCheckedList(list => list.filter(v => v !== item).slice().sort())
    else setCheckedList(list => list.concat(item).slice().sort())
  }
  const isAllChecked = useMemo(() => {
    return Array.isArray(itemList)
      && (itemList ?? []).length > 0
      && checkedList.length > 0
      && isEqual(checkedList.slice().sort())(itemList.slice().sort())
  }, [checkedList])
  const onHandleAllClick = () => {
    // console.log('isAllChecked', isAllChecked, itemList?.slice?.().sort?.())
    if (!Array.isArray(itemList) || isAllChecked) setCheckedList([])
    else setCheckedList(itemList.slice().sort())
  }

  return (
    <>
      <p className="is-clickable" onClick={() => onHandleAllClick()}>
        <SquareStyleCheckbox checked={isAllChecked} />
        <span>모든 면접 가능 일정 보기</span>
      </p>
      <ul className="pl-4">
        {(itemList ?? []).map((item) => (
          <li key={item} className="is-clickable" onClick={() => onHandleClick(item)}>
            <SquareStyleCheckbox checked={checkedList.includes(item)} />
            <span>{ item }</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default function InterviewerMain() {
  const MySwal = withReactContent(Swal)
  const onHandleSubmit = () => {
    return MySwal.fire({
      text: '제출이 완료되었습니다.',
      icon: 'success',
    })
  }
  return (
    <Wrapper className="container is-fluid pt-1">
      <div className="columns" style={{ height: 'inherit' }}>
        <div className="column is-3">
          <TitleLogo className="mt-5 py-3" />
          <div className="py-3">
            <p className="title is-size-4 mb-0"><span>Hanna</span>님의</p>
            <p className="title is-size-4">공유 캘린더입니다.</p>
            
          </div>
          <div className="mt-3 py-3">
            <p className="title is-size-5 mb-3">ON_OFF 처리할 일정을 선택해주세요.</p>
            <p className="is-size-6 mb-2">제출된 일정으로 공통일정이 추출됩니다.</p>
            <ToggleSwitch size="sm" color="gray" />
          </div>
          <div className="box">
            <InterviewerListBox
              checked={[]}
              itemList={['Hanna', 'Jiseok', 'Bian']}
            />
          </div>
        </div>
        <div className="column is-9 is-relative">
          {/* <div className="tabs mt-5"> */}
            {/* <ul> */}
              {/* <li className="is-active"><a>면접일정 선택</a></li> */}
              {/* <li><a>면접정보</a></li> */}
              {/* <li><a>면접후기</a></li> */}
            {/* </ul> */}
          {/* </div> */}
          {/* <div className="is-flex is-justify-content-flex-end"> */}
            {/* <button className="button is-small">Create Contents</button> */}
            {/* <button className="button is-small is-success">Create Placement</button> */}
          {/* </div> */}
          {/* <hr /> */}
          {/* <div className="is-flex is-justify-content-space-between"> */}
            {/* <div className="is-flex is-align-items-center"> */}
              {/* <span className="icon is-clickable"> */}                {/* <IconArrowAll /> */}{/* </span> */}
              <span>{/* <span> */}</span>
                {/* 원하는 면접일을 선택해주세요. 빠르게 선택할 수록 좋습니다. */}
              {/* </span> */}
            {/* </div> */}
            {/* <div className="is-flex"> */}
              {/* <div className="field"> */}
                {/* <div className="control has-icons-left"> */}
                  {/* <input type="text" className="input is-small is-inline" placeholder="Search..." /> */}
                  {/* <span className="icon is-small is-left"> */}                    {/* <IconMagnify /> */}{/* </span> */}
                <span>{/* </div> */}</span>
              {/* </div> */}
              {/* <div className="field"> */}
                {/* <button className="button is-small px-1 is-dark">All</button> */}
                {/* <button className="button is-small px-1"><IconAndroid /></button> */}
                {/* <button className="button is-small px-1"><IconApple /></button> */}
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
          {/* <div className="columns"> */}
            {/* <DateBox title={'5/9 (월)'}> */}
              {/* <TimeItem selected={true}>오전 11시 ~ 12시</TimeItem> */}
              {/* <TimeItem selected={false}>오후 5시 ~ 6시</TimeItem> */}
            {/* </DateBox> */}
            {/* <DateBox title={'5/10 (화)'}> */}
              {/* <TimeItem selected={false}>오후 1시 ~ 2시</TimeItem> */}
            {/* </DateBox> */}
            {/* <DateBox title={'5/11 (수)'}> */}
              {/* <TimeItem selected={false}>오전 10시 ~ 11시</TimeItem> */}
              {/* <TimeItem selected={false}>오전 11시 ~ 12시</TimeItem> */}
            {/* </DateBox> */}
            {/* <DateBox title={'5/11 (목)'}> */}
              {/* <TimeItem selected={false}>오후 2시 ~ 3시</TimeItem> */}
            {/* </DateBox> */}
            {/* <DateBox title={'5/12 (금)'}> */}
              {/* <TimeItem selected={false}>오후 3시 ~ 4시</TimeItem> */}
            {/* </DateBox> */}
          {/* </div> */}
          <div className="is-flex is-justify-content-flex-end" style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
            <button className="button is-dark" onClick={onHandleSubmit}>제출하기</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}