import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '/src/store'
import NavBar from '/src/components/NavBar'
import LnbMenu from '/src/components/LnbMenu'
import { Wrapper } from '/src/components/Wrapper'
import withDocumentTitle from '/src/hooks/withDocumentTitle'
import IconMagnify from '~icons/mdi/magnify'
import IconArrowAll from '~icons/mdi/arrow-all'
import IconCog from '~icons/mdi/cog'
import IconAndroid from '~icons/mdi/android'
import IconMenuDown from '~icons/mdi/menu-down'

const InsideModal = styled(({ show = false, children, ...props }: { show?: boolean, children: any }) => {
  const style = {
    ...(show !== true) && { display: 'none' }
  }
  return (
    <div className="inside-modal" style={style} {...props}>
      <div className="is-overlay"></div>
      <div className="modal-content">
        <div className="card">
          <div className="card-content">
            <div className="content">{ children }</div>
          </div>
        </div>
      </div>
    </div>
  )
})`
  height: inherit;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  .is-overlay {
    height: inherit;
    background: #bbbbbb88;
  }
`
const ModalPositionManage = ({ show, form, updateForm, close }: { show?: boolean, form: any, updateForm: (key: string, value: any) => void, close: () => void }) => {
  return (
    <InsideModal show={show}>
      <div className="field">
        <label className="label">포지션명</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" value={form.input01} onChange={(e) => updateForm('input01', e.target.value)} />
        </div>
      </div>
      <div className="field">
        <label className="label">Working Hours 켜기</label>
        <label className="radio">
          <input type="radio" name="radio01" value="radio01" checked={form.radio01} onChange={(e) => updateForm('radio01', e.target.value)} /> 9AM ~ 6PM
        </label>
      </div>
      <div className="field">
        <label className="label">면접관 선택</label>
        <div className="columns">
          <div className="column is-8">
            <label className="checkbox">
              <input type="checkbox" name="check01" value="check01-01" checked={form.check01.includes('check01-01')} onChange={(e) => updateForm('check01', form.check01.concat(e.target.value))} /> 차승민
            </label>
            <label className="checkbox">
              <input type="checkbox" name="check01" value="check01-02" checked={form.check01.includes('check01-02')} onChange={(e) => updateForm('check01', form.check01.concat(e.target.value))} /> 이진현
            </label>
          </div>
          <div className="column is-4">
            <div className="control">
              <div className="select is-small is-fullwidth">
                <select>
                  <option value="1">@김지석</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">면접자등록</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" value={form.input02} onChange={(e) => updateForm('input02', e.target.value)} />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Text input" value={form.input03} onChange={(e) => updateForm('input03', e.target.value)} />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Text input" value={form.input04} onChange={(e) => updateForm('input04', e.target.value)} />
        </div>
      </div>

      <div className="field is-grouped is-justify-content-center">
        <div className="control">
          <button className="button is-primary" onClick={() => close()}>확인</button>
        </div>
      </div>
    </InsideModal>
  )
}

const PageDashboard = styled(({ className, ...props }: any) => {
  const PositionBox = ({ title, children }: { title: string, children: any }) => (
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
  )
  type ApplicantItemProps = { id: string, selected?: boolean, name: string, email: string, tel: string, icon?: React.ReactElement }
  const ApplicantItem = ({ selected, name, email, tel, ...props }: ApplicantItemProps) => {
    const NameWrapper = ({ children }: { children: any }) => (<div className="is-flex is-align-items-center is-justify-content-space-between">{ children }</div>)
    return (
      <div className={`card is-clickable p-3 my-2 ${selected ? 'has-background-link has-text-white' : ''}`}>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <NameWrapper>
                <div>
                  <span className="icon is-small mr-2">
                    { props.icon ? props.icon : <IconAndroid className="has-text-primary" /> }
                  </span>
                  <strong>{ name }</strong>
                </div>
                <div>
                  <IconMenuDown />
                </div>
              </NameWrapper>
              <div className="is-flex is-justify-content-space-between">
                <div>
                  <div>{ email }</div>
                  <div>{ tel }</div>
                </div>
                <div className="is-fullheight">
                  <button className="is-block button is-primary is-small" style={{ height: '100%' }}>
                    <span className="is-block">05/19</span>
                    <span className="is-block">14:00</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }

  /* modal 보이기, 감추기 처리 */
  const [showModalPositionManage, setShowModalPositionManage] = useState(false)
  const toggleModalPositionManage = useCallback(() => {
    setShowModalPositionManage(!showModalPositionManage)
  }, [showModalPositionManage])
  
  /* 선택한 항목 form 처리 */
  const [form, setForm] = useState({
    input01: 'Backend 개발자',
    radio01: 'radio01',
    check01: ['check01-01'],
    input02: '홍길동',
    input03: 'sdlfjei56@gmail.com',
    input04: '010-3456-2464',
  })
  const updateForm = (key: string, value: any) => {
    setForm(oldForm => ({ ...oldForm, [key]: value }))
  }

  return (
    <main className={`p-2 ${className}`} {...props}>
      <p className="pt-2 subtitle">현재 진행 중인 전체 포지션을 보여줍니다.</p>
      <div className="is-flex is-justify-content-space-between">
        <div className="is-flex is-align-items-center">
          <span className="icon is-clickable">
            <IconArrowAll />
          </span>
        </div>
        <div className="is-flex">
          <div className="field mr-2">
            <button className="button is-small" onClick={toggleModalPositionManage}>포지션생성</button>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <input type="text" className="input is-small is-inline" placeholder="Search..." />
              <span className="icon is-small is-left">
                <IconMagnify />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="tabs"> */}
        {/* <ul> */}
          {/* <li className="is-active"><a>1차면접</a></li> */}
          {/* <li><a>2차면접</a></li> */}
          {/* <li><a>채용완료</a></li> */}
        {/* </ul> */}
      {/* </div> */}
      <div>
        <div className="columns">
          <div className="column is-3">
            <PositionBox title="디자이너">
              <ApplicantItem id={"01"} name={'서유리'} email={'aaa@gmail.com'} tel={'010-1234-1234'} selected={true} />
              <ApplicantItem id={"02"} name={'박지민'} email={'bbb@gmail.com'} tel={'010-1234-1234'} />
              <ApplicantItem id={"03"} name={'서유리'} email={'aaa@gmail.com'} tel={'010-1234-1234'} />
              <ApplicantItem id={"04"} name={'박지민'} email={'bbb@gmail.com'} tel={'010-1234-1234'} />
            </PositionBox>
          </div>
          <div className="column is-3">
            <PositionBox title="프론트개발자">
              <ApplicantItem id={"05"} name={'이지은'} email={'aaa@gmail.com'} tel={'010-1234-1234'} />
              <ApplicantItem id={"06"} name={'최보미'} email={'bbb@gmail.com'} tel={'010-1234-1234'} />
              <ApplicantItem id={"07"} name={'이지은'} email={'aaa@gmail.com'} tel={'010-1234-1234'} />
              <ApplicantItem id={"08"} name={'최보미'} email={'bbb@gmail.com'} tel={'010-1234-1234'} />
            </PositionBox>
          </div>
          <div className="column is-3">
            <PositionBox title="홍보담당자">
              <ApplicantItem id={"09"} name={'서유리'} email={'aaa@gmail.com'} tel={'010-1234-1234'} />
              <ApplicantItem id={"10"} name={'박지민'} email={'bbb@gmail.com'} tel={'010-1234-1234'} />
            </PositionBox>
          </div>
          <div className="column is-3">
            <PositionBox title="개발PM">
              <ApplicantItem id={"11"} name={'이지은'} email={'aaa@gmail.com'} tel={'010-1234-1234'} />
              <ApplicantItem id={"12"} name={'최보미'} email={'bbb@gmail.com'} tel={'010-1234-1234'} />
            </PositionBox>
          </div>
        </div>
      </div>
      <ModalPositionManage show={showModalPositionManage} form={form} updateForm={updateForm} close={toggleModalPositionManage} />
    </main>
  )
})`
  height: calc(100vh - 52px);
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
`

interface ComponentProps {}

export default function Dashboard(props: ComponentProps) {
  const navigate = useNavigate()
  const documentTitle = withDocumentTitle()
  documentTitle.updateTitle('대시보드')

  /* 최초 접근 시 로그인 정보가 없으면 로그인 페이지로 redirect 처리 */
  // const token = useAppSelector(state => state?.token?.token)
  const loaded = useAppSelector(state => state?.token?.loaded)
  const isTokenValid = useAppSelector(state => state?.token?.valid ?? false)
  useEffect(() => {
    if (loaded && !isTokenValid) navigate('/login', { replace: true })
  }, [loaded])

  return !isTokenValid ? <></> : (
    <Wrapper className="is-flex is-justify-content-flex-start" style={{ height: 'inherit' }}>
      <LnbMenu />
      <div style={{ flexGrow: 1, height: '100%' }}>
        <NavBar />
        <PageDashboard />
      </div>
    </Wrapper>
  )
}
