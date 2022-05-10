import { Component } from 'react'
import { DateTime } from 'luxon'
import localForage from 'localforage'
import { flow } from 'lodash/fp'
import { EventInput } from '@fullcalendar/react'

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

export async function getToken() {
  return await localForage.getItem('token') as (ComponentState['token'] | null)
}

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

type GoogleCalendarEventTime = { dateTime: string, timeZone: string }
type GoogleCalendarEventItem = { id: string, summary: string, start: GoogleCalendarEventTime, end: GoogleCalendarEventTime, [key: string]: any }
export type EventItem = { username: string, id: string, title: string, start: string, end: string, color?: string }
type GetEventOption = { username?: string, timeZone?: 'Asia/Seoul' | 'Asia/Tokyo', timeMin?: string, timeMax?: string, color?: string }
export async function getGoogleCalendarEvents<T extends GoogleOAuth2Token>(calendarId: string, optToken: T | null, option?: GetEventOption) {
  // const CLIENT_ID = import.meta.env.VITE_GOOGLE_API_CLIENT_ID
  // const REDIRECT_URI = import.meta.env.VITE_GOOGLE_API_REDIRECT_URI
  const API_KEY = import.meta.env.VITE_GOOGLE_API_API_KEY
  
  const token = optToken ?? (await getToken())
  if (!token) return Promise.resolve([])
  if (!calendarId) return Promise.resolve([])
  const username = option?.username
  const color = option?.color
  const timeZone = option?.timeZone ?? 'Asia/Seoul'
  const timeMin = flow(s => s ? `${s}:00Z` : '')(option?.timeMin as string)
  const timeMax = flow(s => s ? `${s}:00Z` : '')(option?.timeMax as string)
  console.log('timeMin', timeMin, 'timeMax', timeMax)
    
  return fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?${new URLSearchParams({
    key: API_KEY,
    timeZone: timeZone,
    ...(timeMin && { timeMin }),
    ...(timeMax && { timeMax }),
  }).toString()}`, {
    method: 'get',
    headers: {
      'Authorization': `${token.tokenType} ${token.accessToken}`,
      'Content-Type': 'application/json;charset=UTF-8',
    }
  }).then(r => r.json()).then(data => {
    /*
      * accessRole: "owner"
      * defaultRemindars: [{…}]
      * etag: "\"p32sfdp6vtaofe0g\""
      * items: (19) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
      *    created: "2022-04-26T03:32:20.000Z"
      *    creator: {email: 'kiparseo@gmail.com', self: true}
      *    end: {dateTime: '2022-04-26T10:45:00+09:00', timeZone: 'Asia/Seoul'}
      *    etag: "\"3301888799612000\""
      *    eventType: "default"
      *    htmlLink: "https://www.google.com/calendar/event?eid=MDczMG9kMjc2dGVnNmFmcnFyM2NnMXN2YTIga2lwYXJzZW9AbQ"
      *    iCalUID: "0730od276teg6afrqr3cg1sva2@google.com"
      *    id: "*"
      *    kind: "calendar#event"
      *    organizer: {email: 'kiparseo@gmail.com', self: true}
      *    remindars: {useDefault: true}
      *    sequence: 2
      *    start: {dateTime: '2022-04-26T09:45:00+09:00', timeZone: 'Asia/Seoul'}
      *    status: "confirmed"
      *    summary: "대충만든일정"
      *    updated: "2022-04-26T03:39:59.806Z"
      * kind: "calendar#events"
      * nextSyncToken: "*"
      * summary: "kiparseo@gmail.com"
      * timeZone: "Asia/Seoul"
      * updated: "2022-04-26T03:56:04.147Z"
      */
    // console.log('data', data)
    const items: GoogleCalendarEventItem[] = data?.items ?? []
    return items.map((o: GoogleCalendarEventItem) => ({ username: username, id: o.id, title: o.summary, start: o.start.dateTime, end: o.end.dateTime, ...(color && { color }) } as EventItem))
  })
  // }
}

interface ComponentProps { children?: React.ReactNode }
interface ComponentState { token: GoogleToken }
export class GoogleLoginButton extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
  }
  async componentDidMount() {
    const localData: ComponentState['token'] | null = await getToken()
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