import { useMemo, useState } from 'react'
import styled from 'styled-components'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { isEqual } from 'lodash/fp'
import TitleLogo from '/src/components/TitleLogo'
import { StyledWrapper } from '/src/components/Wrapper'
import ToggleSwitch from '/src/components/ToggleSwitch'
import InterviewCalender from '/src/components/InterviewCalender'
import IconSquareRoundedOutline from '~icons/mdi/square-rounded-outline'
import IconSquareRounded from '~icons/mdi/square-rounded'

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
          <InterviewCalender />
          <div className="is-flex is-justify-content-flex-end" style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
            <button className="button is-dark" onClick={onHandleSubmit}>제출하기</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}