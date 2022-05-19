import styled from 'styled-components'
import { StyledWrapper } from '/src/components/Wrapper'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import LogoLight from '/src/assets/logo-light.png'
import TitleLight from '/src/assets/title-light.png'
import IconMagnify from '~icons/mdi/magnify'
import IconArrowAll from '~icons/mdi/arrow-all'
import IconAndroid from '~icons/mdi/android'
import IconApple from '~icons/mdi/apple'
import IconCog from '~icons/mdi/cog'

const Wrapper = StyledWrapper`
  background-color: #fff;
`

const DateBox = ({ title, children, ...props }: { title: string, children: any }) => (
  <div className="column is-2"  {...props}>
    <article className="message">
      <div className="message-header">
        <p>{ title }</p>
        {/* <button className="delete" aria-label="delete"></button> */}
        <span className="icon is-small is-clickable"><IconCog /></span>
      </div>
      <div className="message-body px-2 py-2">
        { children }
      </div>
    </article>
  </div>
)

const TimeItem = ({ selected, children, ...props }: { selected?: boolean, children: any }) => {
  return (
    <div className={`card is-clickable p-3 my-2 ${selected ? 'has-background-link has-text-white' : ''}`}>
      <article className="media">
        <div className="media-content">
          <div className="content">
            <div className="is-flex is-justify-content-space-between is-align-items-center py-3">
              <span>{ children }</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default function ApplicantMain() {
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
          <div className="mt-5 py-3">
            <img src={LogoLight} />
            <img src={TitleLight} />
          </div>
          <div className="py-3">
            <p className="subtitle">홍길동님 반갑습니다. </p>
            <p className="subtitle is-size-6">PLANIN과의 면접 과정이 서로에게 유익한 시간으로 남기를 바랍니다.</p>
            <p className="subtitle is-size-6">저희도 최선을 다해 준비하도록 하겠습니다. </p>
          </div>
          <div className="mt-3 py-3">
            <p className="title is-size-5 mb-3">면접자 정보</p>
            <p className="is-size-6 mb-2">홍길동</p>
            <p className="is-size-6 mb-0">Backend 개발자</p>
            <p className="is-size-6 mb-0">010-3452-3452</p>
            <p className="is-size-6 mb-0">ssef@gmail.com</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/433x265" />
          </div>
        </div>
        <div className="column is-9 is-relative">
          <div className="tabs mt-5">
            <ul>
              <li className="is-active"><a>면접일정 선택</a></li>
              <li><a>면접정보</a></li>
              <li><a>면접후기</a></li>
            </ul>
          </div>
          <div className="is-flex is-justify-content-flex-end">
            <button className="button is-small">Create Contents</button>
            <button className="button is-small is-success">Create Placement</button>
          </div>
          <hr />
          <div className="is-flex is-justify-content-space-between">
            <div className="is-flex is-align-items-center">
              <span className="icon is-clickable">
                <IconArrowAll />
              </span>
              <span>
                원하는 면접일을 선택해주세요. 빠르게 선택할 수록 좋습니다.
              </span>
            </div>
            <div className="is-flex">
              <div className="field">
                <div className="control has-icons-left">
                  <input type="text" className="input is-small is-inline" placeholder="Search..." />
                  <span className="icon is-small is-left">
                    <IconMagnify />
                  </span>
                </div>
              </div>
              <div className="field">
                <button className="button is-small px-1 is-dark">All</button>
                <button className="button is-small px-1"><IconAndroid /></button>
                <button className="button is-small px-1"><IconApple /></button>
              </div>
            </div>
          </div>
          <div className="columns">
            <DateBox title={'5/9 (월)'}>
              <TimeItem selected={true}>오전 11시 ~ 12시</TimeItem>
              <TimeItem selected={false}>오후 5시 ~ 6시</TimeItem>
            </DateBox>
            <DateBox title={'5/10 (화)'}>
              <TimeItem selected={false}>오후 1시 ~ 2시</TimeItem>
            </DateBox>
            <DateBox title={'5/11 (수)'}>
              <TimeItem selected={false}>오전 10시 ~ 11시</TimeItem>
              <TimeItem selected={false}>오전 11시 ~ 12시</TimeItem>
            </DateBox>
            <DateBox title={'5/11 (목)'}>
              <TimeItem selected={false}>오후 2시 ~ 3시</TimeItem>
            </DateBox>
            <DateBox title={'5/12 (금)'}>
              <TimeItem selected={false}>오후 3시 ~ 4시</TimeItem>
            </DateBox>
          </div>
          <div className="is-flex is-justify-content-flex-end" style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
            <button className="button is-dark" onClick={onHandleSubmit}>제출하기</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}