import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch } from '/src/store'
import { removeToken } from '/src/store/token'

const BaseNavBar = styled(({ className, ...props }: any) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const onHandleLogout = async () => {
    await dispatch(removeToken())
    navigate('/')
  }
  return (
    <nav className={`${className} navbar has-background-grey-darker`} role="navigation" aria-label="main navigation" {...props}>
      {/* <div className="navbar-brand"> */}
        {/* <a className="navbar-item" href="https://bulma.io"> */}
          {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
        {/* </a> */}

        {/* <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"> */}
          {/* <span aria-hidden="true"></span> */}
          {/* <span aria-hidden="true"></span> */}
          {/* <span aria-hidden="true"></span> */}
        {/* </a> */}
      {/* </div> */}

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item has-background-black-ter has-text-white px-6">대시보드</a>
        </div>
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

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {/* <a className="button is-primary"> */}
                {/* <strong>Sign up</strong> */}
              {/* </a> */}
              <button className="button is-small has-background-grey-dark has-text-grey-lighter" disabled>Settings</button>
              <button className="button is-small has-background-grey-dark has-text-grey-lighter" disabled>Tools</button>
              <input className="input is-small is-inline has-background-grey-dark has-text-grey-lighter mb-2 mr-2" disabled />
              <button className="button is-small has-background-grey-dark has-text-grey-lighter" onClick={onHandleLogout}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      {/* </div> */}
    </nav>
  )
})

const NavBar = BaseNavBar`
  /* scss here */
`
// export { BaseNavBar }
export default NavBar
