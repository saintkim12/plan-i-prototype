import { Component } from 'react'
import { DateTime } from 'luxon'
import localForage from 'localforage'
import { flow } from 'lodash/fp'

interface GoogleOAuth2Token {
  accessToken: string
  tokenType: string
  expiresIn: number
  scope: string[]
}
interface CustomToken {
  createdIn: number
}
type GoogleToken = GoogleOAuth2Token & CustomToken

export async function storeToken(hash: string) {
  try {
    console.log('hash', hash)
    const params = flow(
      s => s.replace(/^#/, ''),
      s => new URLSearchParams(s),
      p => [...p.entries()],
      Object.fromEntries
    )(window.location.hash)
    console.log('params', params)
    if (params.access_token && params.token_type && params.expires_in && params.scope) {
      const paramToToken = {
        accessToken: params.access_token,
        tokenType: params.token_type,
        expiresIn: Number(params.expires_in) * 1000,
        scope: params.scope.split(' '),
        createdIn: Date.now(),
      }
      // window.history.replaceState(null, '', window.location.pathname)
      await localForage.setItem('token', paramToToken)
    }
    return true
  } catch(e) {
    console.error(e)
    return false
  }
}

interface ComponentProps { children?: React.ReactNode }
interface ComponentState { token: GoogleToken }
export class GoogleLoginButton extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
  }
  async componentDidMount() {
    const localData: ComponentState['token'] | null = await localForage.getItem('token')
    if (localData) {
      this.setToken(localData)
    }
  }
  async setToken(token: ComponentState['token'] | null) {
    this.setState((state) => {
      return { ...state, token: JSON.parse(JSON.stringify(token)) }
    })
  }
  onTryLogin() {
    const CLIENT_ID = import.meta.env.VITE_GOOGLE_API_CLIENT_ID
    const REDIRECT_URI = import.meta.env.VITE_GOOGLE_API_REDIRECT_URI
    // const API_KEY = import.meta.env.VITE_GOOGLE_API_API_KEY
    return new Promise((resolve, reject) => {
      const popupWindow = window.open(`https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({
        'client_id': CLIENT_ID,
        'redirect_uri': REDIRECT_URI,
        'response_type': 'token',
        'include_granted_scopes': 'true',
        'scope': [
          'https://www.googleapis.com/auth/calendar',
          'https://www.googleapis.com/auth/calendar.events',
          'https://www.googleapis.com/auth/calendar.events.readonly',
          'https://www.googleapis.com/auth/calendar.readonly',
        ].join(' ')
      })}`, '_blank')
      if (!popupWindow) {
        reject(new Error('popupWindow is not defined'))
        return
      }
      popupWindow.onbeforeunload = () => {
        console.log('popup maybe closed')
        resolve(true)
      }
    }).then(async () => {
      const localData: ComponentState['token'] | null = await localForage.getItem('token')
      this.setToken(localData)
    })
  }
  render() {
    const onTryLogin = this.onTryLogin.bind(this)
    const hasChildren = !!this.props?.children
    // const accessToken = this.state?.token?.accessToken
    const isTokenValid = ((token) => {
      return token?.accessToken && token?.createdIn && token?.expiresIn
        && (DateTime.fromMillis(token.createdIn).plus({ milliseconds: token.expiresIn }).diffNow().toMillis() > 0)
    })(this.state?.token)
    return (
      <button className="button is-normal" onClick={onTryLogin}>
        {hasChildren ? this.props?.children : (isTokenValid ? 'Retry Sign in to Google' : 'Sign in to Google')}
      </button>
    )
  }
}
