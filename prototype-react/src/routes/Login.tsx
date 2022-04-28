import Wrapper from '/src/components/Wrapper'

export default function Login() {
  return (
    <Wrapper className="container is-fluid">
      <div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email" />
            {/* <span className="icon is-small is-left"> */}
              {/* <i className="fas fa-envelope"></i> */}
            {/* </span> */}
            {/* <span className="icon is-small is-right"> */}
              {/* <i className="fas fa-check"></i> */}
            {/* </span> */}
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Password" />
            {/* <span className="icon is-small is-left"> */}
              {/* <i className="fas fa-lock"></i> */}
            {/* </span> */}
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
