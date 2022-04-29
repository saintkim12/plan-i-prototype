import logo from '/src/logo.svg'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from '/src/components/Wrapper'
import { Component } from 'react'

const Logo = styled(({ ...props }) => (<img {...props} src={logo} alt="logo" />))`
  /* from App.css */
  height: 40vmin;
  pointer-events: none;
  
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

const LinkButton = styled(({ className, children, to, ...props }) => {
  const navigate = useNavigate()
  return <button
    className={`${className} button is-info is-fullwidth`}
    {...props}
    onClick={() => navigate(to)}
  >{children}</button>
})`/* button css here */`

export default class Main extends Component {
  render() {
    return (
      <Wrapper className="container is-fluid">
        <Logo />
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
}
