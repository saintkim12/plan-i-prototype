import styled from 'styled-components'
import LogoDark from '/src/assets/title-logo-dark.png'
import { useLocation, useNavigate } from 'react-router-dom'
import IconMenu from '~icons/mdi/menu'
import IconCardPlusOutline from '~icons/mdi/card-plus-outline'
import IconFlag from '~icons/mdi/flag'
import IconDiamondStone from '~icons/mdi/diamond-stone'
import IconDatabase from '~icons/mdi/database'
import IconCardBulleted from '~icons/mdi/card-bulleted'

const BaseLnbMenu = styled(({ className, ...props }: any) => {
  const navigate = useNavigate()
  const location = useLocation()
  const menuList = [
    { id: 'a', icon: <IconMenu style={{ verticalAlign: 'bottom', }} />, label: '기업정보', onClick: () => navigate('/dashboard') },
    { id: 'b', icon: <IconCardPlusOutline style={{ verticalAlign: 'bottom', }} />, label: '면접관등록', onClick: () => navigate('/dashboard') },      
    { id: 'dashboard', icon: <IconFlag style={{ verticalAlign: 'bottom', }} />, label: '대시보드', onClick: () => navigate('/dashboard') },
    { id: 'd', icon: <IconDiamondStone style={{ verticalAlign: 'bottom', }} />, label: '포지션생성', onClick: () => navigate('/dashboard') },
    { id: 'e', icon: <IconDatabase style={{ verticalAlign: 'bottom', }} />, label: '데이터분석', onClick: () => navigate('/dashboard') },
    { id: 'f', icon: <IconCardBulleted style={{ verticalAlign: 'bottom', }} />, label: '면접자Pool', onClick: () => navigate('/dashboard') },
  ]
  return (
    <aside className={`${className}`} {...props}>
      <a
        className="is-flex is-justify-content-center py-2 has-background-grey-darker"
        style={{ background: 'white' }}
        onClick={() => navigate('/')}
      >
        {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
        <img src="https://via.placeholder.com/36" className="" />
        <img src={LogoDark} className="" style={{ height: '1.2em', margin: 'auto .8rem' }} />
      </a>
      <nav className="menu">
        <ul className="menu-list">
          {menuList.map(({ id, label, onClick, ...item }) => (
            <li key={id}>
              <a className={`${`/${id}` === location.pathname ? 'is-active' : ''}`} onClick={() => onClick && onClick()}>
                { item.icon || '' }
                { label }
              </a>
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
  background: #f4f4f4;
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    // flex: 0 0 80px;
    flex: 0 0 200px;
  }
  @media screen and (min-width: 769px) {
    flex: 0 0 200px;
    height: 100%;
  }
  .menu {
    padding-top: 1rem;
  }
  a {
    color: #727c8f;
  }
  a.is-active {
    color: #000;
    background-color: #e8e8e8;
  }
  a:hover {
    color: #fff;
    background-color: #262930;
  }
  .menu-label {
    padding-left: 0.5rem;
  }
  .menu-list li > a > svg {
    margin-right: .4rem;
  } 
`

// export { BaseLnbMenu }
export default LnbMenu
