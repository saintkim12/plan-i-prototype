import { useState } from 'react'
import logo from '/src/logo.svg'
import '/src/App.scss'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Link to="/a">PageA</Link>
          {' | '}
          <Link to="/b">PageB</Link>
          {' | '}
          <Link to="/schedule">Schedule</Link>
          {' | '}
          <Link to="/chat">Chat</Link>
        </p>
      </header>
    </div>
  )
}