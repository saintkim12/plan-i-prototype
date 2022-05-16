import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper } from '/src/components/Wrapper'
// import Wrapper from '/src/components/Wrapper'

const NavBar = styled(({ className, ...props }: any) => {
  return (
    <nav className={`${className} navbar`} role="navigation" aria-label="main navigation" {...props}>
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Home
          </a>

          <a className="navbar-item">
            Documentation
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                About
              </a>
              <a className="navbar-item">
                Jobs
              </a>
              <a className="navbar-item">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
})``
const LnbMenu = styled(({ className, ...props }: any) => {
  return (
    <aside className={`${className} column is-2`} {...props}>
      <nav className="menu">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li><a className="is-active">Dashboard</a></li>
          <li><a>Customers</a></li>
        </ul>
        <p className="menu-label">
          Administration
        </p>
        <ul className="menu-list">
          <li><a>Team Settings</a></li>
          <li>
            <a className="">Manage Your Team</a>
            <ul>
              <li><a>Members</a></li>
              <li><a>Plugins</a></li>
              <li><a>Add a member</a></li>
            </ul>
          </li>
          <li><a>Invitations</a></li>
          <li><a>Cloud Storage Environment Settings</a></li>
          <li><a>Authentication</a></li>
        </ul>
        <p className="menu-label">
          Transactions
        </p>
        <ul className="menu-list">
          <li><a>Payments</a></li>
          <li><a>Transfers</a></li>
          <li><a>Balance</a></li>
        </ul>
      </nav>
    </aside>
  )
})`
  background: #2e323a;
  min-height: 100vh;
  // FIXME: scroll 관련 처리 필요
  padding-left: .75rem;
  padding-top: .75em;
  padding-right: 0;
  padding-bottom: 0;
  .menu {
    padding-top: .25rem;
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

const PageDashboard = styled((props: any) => {
  return (
    <main className="column">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <div className="title">Dashboard</div>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button type="button" className="button is-small">
              March 8, 2017 - April 6, 2017
            </button>
          </div>
        </div>
      </div>
      
      <div className="columns is-multiline">
        <div className="column">
          <div className="box">
            <div className="heading">Top Seller Total</div>
            <div className="title">56,950</div>
            <div className="level">
              <div className="level-item">
                <div className="">
                  <div className="heading">Sales $</div>
                  <div className="title is-5">250,000</div>
                </div>
              </div>
              <div className="level-item">
                <div className="">
                  <div className="heading">Overall $</div>
                  <div className="title is-5">750,000</div>
                </div>
              </div>
              <div className="level-item">
                <div className="">
                  <div className="heading">Sales %</div>
                  <div className="title is-5">25%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="heading">Revenue / Expenses</div>
            <div className="title">55% / 45%</div>
            <div className="level">
              <div className="level-item">
                <div className="">
                  <div className="heading">Rev Prod $</div>
                  <div className="title is-5">30%</div>
                </div>
              </div>
              <div className="level-item">
                <div className="">
                  <div className="heading">Rev Serv $</div>
                  <div className="title is-5">25%</div>
                </div>
              </div>
              <div className="level-item">
                <div className="">
                  <div className="heading">Exp %</div>
                  <div className="title is-5">45%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="heading">Feedback Activity</div>
            <div className="title">78% &uarr;</div>
            <div className="level">
              <div className="level-item">
                <div className="">
                  <div className="heading">Positive</div>
                  <div className="title is-5">1560</div>
                </div>
              </div>
              <div className="level-item">
                <div className="">
                  <div className="heading">Negative</div>
                  <div className="title is-5">368</div>
                </div>
              </div>
              <div className="level-item">
                <div className="">
                  <div className="heading">Pos/Neg %</div>
                  <div className="title is-5">77% / 23%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="heading">Orders / Returns</div>
            <div className="title">75% / 25%</div>
            <div className="level">
              <div className="level-item">
                <div className="">
                  <div className="heading">Orders $</div>
                  <div className="title is-5">425,000</div>
                </div>
              </div>
              <div className="level-item">
                <div className="">
                  <div className="heading">Returns $</div>
                  <div className="title is-5">106,250</div>
                </div>
              </div>
              <div className="level-item">
                <div className="">
                  <div className="heading">Success %</div>
                  <div className="title is-5">+ 28,5%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="columns is-multiline">
        <div className="column is-6">
          <div className="panel">
            <p className="panel-heading">
              Expenses: Daily - $700
            </p>
            <div className="panel-block">
              <figure className="image is-16x9">
                <img src="https://placehold.it/1280x720" />
              </figure>
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="panel">
            <p className="panel-heading">
              Refunds: Daily - $200
            </p>
            <div className="panel-block">
              <figure className="image is-16x9">
                <img src="https://placehold.it/1280x720" />
              </figure>
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="panel">
            <p className="panel-heading">
              Something
            </p>
            <div className="panel-block">
              <figure className="image is-16x9">
                <img src="https://placehold.it/1280x720" />
              </figure>
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="panel">
            <p className="panel-heading">
              Something Else
            </p>
            <div className="panel-block">
              <figure className="image is-16x9">
                <img src="https://placehold.it/1280x720" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
})``

interface ComponentProps {}

export default function Dashboard(props: ComponentProps) {
  const navigate = useNavigate()
  return (
    <Wrapper style={{ marginTop: '.75rem' }}>
      {/* <NavBar /> */}

      <div className="section p-0">
        <div className="columns">
          <LnbMenu />
          
          {/* <h1 className="title">Dashboard</h1> */}
          {/* <button className="button" onClick={() => navigate('/schedule')}>Schedule</button> */}
          <PageDashboard />
        </div>
      </div>
    </Wrapper>
  )
}
