import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper } from '/src/components/Wrapper'

const NavBar = styled(({ className, ...props }: any) => {
  return (
    <nav className={`${className} navbar`} role="navigation" aria-label="main navigation" {...props}>
      <div className="navbar-brand">
        {/* <a className="navbar-item" href="https://bulma.io"> */}
          {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
        {/* </a> */}

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      {/* <div id="navbarBasicExample" className="navbar-menu"> */}
        {/* <div className="navbar-start"> */}
          {/* <a className="navbar-item"> */}
            {/* Home */}
          {/* </a> */}

          {/* <a className="navbar-item"> */}
            {/* Documentation */}
          {/* </a> */}

          {/* <div className="navbar-item has-dropdown is-hoverable"> */}
            {/* <a className="navbar-link"> */}
              {/* More */}
            {/* </a> */}

            {/* <div className="navbar-dropdown"> */}
              {/* <a className="navbar-item"> */}
                {/* About */}
              {/* </a> */}
              {/* <a className="navbar-item"> */}
                {/* Jobs */}
              {/* </a> */}
              {/* <a className="navbar-item"> */}
                {/* Contact */}
              {/* </a> */}
              {/* <hr className="navbar-divider" /> */}
              {/* <a className="navbar-item"> */}
                {/* Report an issue */}
              {/* </a> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}

        {/* <div className="navbar-end"> */}
          {/* <div className="navbar-item"> */}
            {/* <div className="buttons"> */}
              {/* <a className="button is-primary"> */}
                {/* <strong>Sign up</strong> */}
              {/* </a> */}
              {/* <a className="button is-light"> */}
                {/* Log in */}
              {/* </a> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </nav>
  )
})``
const LnbMenu = styled(({ className, ...props }: any) => {
  const navigate = useNavigate()
  const menuList = [
    { id: 'dashboard', label: '대시보드', onClick: () => navigate('/dashboard') },
    { id: 'menu02', label: '포지션생성', onClick: () => navigate('/menu02') },
    { id: 'menu03', label: '면접관추가', onClick: () => navigate('/menu03') },
    { id: 'menu04', label: '회사정보', onClick: () => navigate('/menu04') },
    { id: 'schedule', label: '면접캘린더', onClick: () => navigate('/schedule') },
    { id: 'menu06', label: '데이터분석', onClick: () => navigate('/menu06') },
  ]
  return (
    <aside className={`${className}`} {...props}>
      <a
        className="is-flex is-justify-content-center py-3"
        style={{ background: 'white' }}
        onClick={() => navigate('/')}
      >
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>
      <nav className="menu">
        <ul className="menu-list">
          {menuList.map(({ id, label, onClick }) => (
            <li key={id}>
              <a onClick={() => onClick && onClick()}>{ label }</a>
            </li>
          ))}
        </ul>
        {/* <p className="menu-label"> */}
          {/* General */}
        {/* </p> */}
        {/* <ul className="menu-list"> */}
          {/* <li><a className="is-active">Dashboard</a></li> */}
          {/* <li><a>Customers</a></li> */}
        {/* </ul> */}
        {/* <p className="menu-label"> */}
          {/* Administration */}
        {/* </p> */}
        {/* <ul className="menu-list"> */}
          {/* <li><a>Team Settings</a></li> */}
          {/* <li> */}
            {/* <a className="">Manage Your Team</a> */}
            {/* <ul> */}
              {/* <li><a>Members</a></li> */}
              {/* <li><a>Plugins</a></li> */}
              {/* <li><a>Add a member</a></li> */}
            {/* </ul> */}
          {/* </li> */}
          {/* <li><a>Invitations</a></li> */}
          {/* <li><a>Cloud Storage Environment Settings</a></li> */}
          {/* <li><a>Authentication</a></li> */}
        {/* </ul> */}
        {/* <p className="menu-label"> */}
          {/* Transactions */}
        {/* </p> */}
        {/* <ul className="menu-list"> */}
          {/* <li><a>Payments</a></li> */}
          {/* <li><a>Transfers</a></li> */}
          {/* <li><a>Balance</a></li> */}
        {/* </ul> */}
      </nav>
    </aside>
  )
})`
  background: #123142;
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    // width: 80px;
    flex: 0 0 80px;
  }
  @media screen and (min-width: 769px) {
    // width: 140px;
    flex: 0 0 140px;
    height: 100%;
  }
  .menu {
    padding-top: .5rem;
  }
  a {
    color: #727c8f;
  }
  a:hover {
    color: #fff;
    background-color: #262930;
  }
  .menu-label {
    padding-left: 0.5rem;
  }
`

const PageDashboard = styled(({ className, ...props }: any) => {
  const PositionBox = ({ title, children }: { title: string, children: any }) => (
    <article className="message">
      <div className="message-header">
        <p>{ title }</p>
        {/* <button className="delete" aria-label="delete"></button> */}
      </div>
      <div className="message-body p-0">
        { children }
      </div>
    </article>
  )
  type ApplicantItemProps = { id: string, selected?: boolean, name: string, email: string, tel: string }
  const ApplicantItem = ({ selected, name, email, tel }: ApplicantItemProps) => (
    <div className={`box is-clickable py-1 my-1 ${selected ? 'has-background-link has-text-white' : ''}`}>
      <article className="media">
        <div className="media-left">
          <strong>{ name }</strong>
        </div>
        <div className="media-content">
          <div className="content">
            <div>email: { email }</div>
            <div>tel: { tel }</div>
          </div>
        </div>
      </article>
    </div>
  )
  return (
    <main className={`p-2 ${className}`} {...props}>
      <div className="tabs">
        <ul>
          <li className="is-active"><a>1차면접</a></li>
          <li><a>2차면접</a></li>
          <li><a>채용완료</a></li>
        </ul>
      </div>
      <div className="box">
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
      <div className="box">
        <div className="columns">
          <div className="column is-4">
            <span className="tag is-large title">서유리</span>
            <div>email: aaa@gmail.com</div>
            <div>tel: 010-1234-1234</div>
            <div><label className="label is-inline-block mb-0">면접일: </label><span>2022-01-01</span></div>
            <div><label className="label is-inline-block mb-0">면접관: </label><span>aaa, bbb</span></div>
            <div><label className="label is-inline-block mb-0">이력서: </label><span>abcd.pdf</span></div>
          </div>
          <div className="column is-4">
            <div><label className="label is-inline-block mb-0">면접요청일자: </label><span></span></div>
            <div>
              <label className="label is-inline-block mb-0">면접현황: </label>
              <div className="select is-small">
                <select>
                  <option>1차 면접 중</option>
                </select>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="box p-1 has-background-grey-lighter">
              <label className="label">Memo</label>
              <textarea className="textarea has-fixed-size" style={{ background: 'transparent' }}></textarea>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
})`
  height: calc(100vh - 56px);
  overflow-x: hidden;
  overflow-y: auto;
`

interface ComponentProps {}

export default function Dashboard(props: ComponentProps) {
  return (
    <Wrapper className="is-flex is-justify-content-flex-start" style={{ height: 'inherit' }}>
      <LnbMenu />
      {/* <h1 className="title">Dashboard</h1> */}
      {/* <button className="button" onClick={() => navigate('/schedule')}>Schedule</button> */}
      {/* <PageDashboard /> */}
      <div style={{ flexGrow: 1, height: '100%' }}>
        <NavBar />
        <PageDashboard />
      </div>
    </Wrapper>
  )
}
