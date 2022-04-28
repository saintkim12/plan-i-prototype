// import logo from '/src/logo.svg'
// import '/src/App.scss'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import logo from '/src/logo.svg'
import Wrapper from '/src/components/Wrapper'
const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
const LinkButton = styled(({ className, children, to }) => {
  const navigate = useNavigate()
  return <button
    className={`${className} button is-info is-fullwidth`}
    onClick={() => navigate(to)}>{children}</button>
})``

export default function Main() {
  return (
    <Wrapper className="container is-fluid">
      <Logo src={logo} alt="logo" />
      {/* <p> */}
        {/* <Link to="/a">PageA</Link> */}
        {/* {' | '} */}
        {/* <Link to="/b">PageB</Link> */}
        {/* {' | '} */}
        {/* <Link to="/schedule">Schedule</Link> */}
        {/* {' | '} */}
        {/* <Link to="/chat">Chat</Link> */}
      {/* </p> */}
      <div className="columns is-mobile is-multiline">
        <div className="column is-full">
          <LinkButton to="/login">Sign in</LinkButton>
        </div>
        <div className="column is-full">
          <LinkButton to="/schedule">캘린더</LinkButton>
        </div>
        <div className="column is-full">
          <LinkButton to="/chat">채팅</LinkButton>
        </div>
      </div>
    </Wrapper>
  )
}