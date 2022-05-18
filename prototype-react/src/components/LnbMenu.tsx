import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import IconAccessibility from '~icons/carbon/accessibility'
import IconAccountBox from '~icons/mdi/account-box'

const BaseLnbMenu = styled(({ className, ...props }: any) => {
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
      <IconAccessibility />
      <IconAccountBox style={{ fontSize: '2em', color: 'red' }}/>
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
})

const LnbMenu = BaseLnbMenu`
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

// export { BaseLnbMenu }
export default LnbMenu
