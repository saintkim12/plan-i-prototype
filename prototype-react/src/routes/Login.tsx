import { mdiCheck, mdiEmail, mdiLock } from '@mdi/js'
import Icon from '@mdi/react'
import { Component } from 'react'
import Wrapper from '/src/components/Wrapper'

export default class Login extends Component {
  render() {
    return (
      <Wrapper className="columns">
        <div className="column is-8">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" />
              <span className="icon is-small is-left">
                {/* <i className="fas fa-envelope"></i> */}
                <Icon path={mdiEmail} size={'24'} />
              </span>
              <span className="icon is-small is-right">
                {/* <i className="fas fa-check"></i> */}
                <Icon path={mdiCheck} size={'24'} />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-small is-left">
                {/* <i className="fas fa-lock"></i> */}
                <Icon path={mdiLock} size={'24'} />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control is-flex is-justify-content-space-between">
              <button className="button is-info is-fullwidth mr-1">
                Sign up
              </button>
              <button className="button is-success is-fullwidth ml-1">
                Login
              </button>
            </p>
          </div>
        </div>
      </Wrapper>
    )
  }
}
