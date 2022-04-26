import localForage from 'localforage'
import flow from 'lodash/fp/flow'
import { useEffect, useMemo, useState } from 'react'
import Timetable from '/src/components/Timetable'
const CLIENT_ID = import.meta.env.VITE_GOOGLE_API_CLIENT_ID
const REDIRECT_URI = import.meta.env.VITE_GOOGLE_API_REDIRECT_URI
const API_KEY = import.meta.env.VITE_GOOGLE_API_API_KEY
function loginToGoogle() {
  location.href = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({
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
  })}`
}

function getEvents<T extends OAuth2BasedToken>(token: T | null, option?: { username?: string, calendarId?: string, timeZone?: 'Asia/Seoul' | 'Asia/Tokyo', timeMin?: string, timeMax?: string }) {
  if (!token) return Promise.resolve([])
  const calendarId = option?.calendarId
  if (!calendarId) return Promise.resolve([])
  const username = option?.username
  const timeZone = option?.timeZone ?? 'Asia/Seoul'
  const timeMin = flow(s => s ? `${s}:00Z` : '')(option?.timeMin as string)
  const timeMax = flow(s => s ? `${s}:00Z` : '')(option?.timeMax as string)
  console.log('timeMin', timeMin, 'timeMax', timeMax)
  
  return fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?${new URLSearchParams({
    key: API_KEY,
    timeZone: timeZone,
    timeMin: timeMin,
    timeMax: timeMax,
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
    type GoogleCalendarEventTime = { dateTime: string, timeZone: string }
    type GoogleCalendarEventItem = {
      id: string, summary: string, start: GoogleCalendarEventTime, end: GoogleCalendarEventTime, [key: string]: any
    }
    type EventItem = {
      username: string, id: string, title: string, start: string, end: string
    }
    // console.log('data', data)
    const items: GoogleCalendarEventItem[] = data?.items ?? []
    return items.map((o: GoogleCalendarEventItem) => ({ username: username, id: o.id, title: o.summary, start: o.start.dateTime, end: o.end.dateTime } as EventItem))
  })
}

interface OAuth2BasedToken {
  accessToken: string
  tokenType: string
  expiresIn: number
  scope: string[]
}
interface CustomToken {
  createdIn: number
}

export default function Schedule({ $interviewerList = [] }) {
  const [interviewerList, setInterviewerList] = useState<{ username: string, calendarList: { type: string, id: string }[] }[]>([])

  /** test */
  const [$testInterviewInput, $setTestInterviewInput] = useState('tester/saintkim1232@gmail.com,tester2/kiparseo@gmail.com')
  useEffect(() => {
    setInterviewerList(
      Array.from($testInterviewInput.split(',')).map(s => s.trim()).filter(s => !!s).map(s => s.split('/')).map(([username, id]) => ({ username, calendarList: [{ type: 'google', id }] }))
    )
  }, [$testInterviewInput])
  /** test */

  const [token, setToken] = useState<(OAuth2BasedToken & CustomToken) | null>(null)
  const [timeMin, setTimeMin] = useState('2022-01-01T00:00')
  const [timeMax, setTimeMax] = useState('2022-12-31T23:59')
  const [eventList, setEventList] = useState<any[]>([])
  const accessToken = useMemo(() => token?.accessToken, [token])

  function loadEventList() {
    console.log('loadEventList')
    const googleCalendarIdList: { username: string, calendarId: string }[] = interviewerList.flatMap(({ username, calendarList }) => calendarList.filter(({ type }) => type === 'google').map(({ id }) => ({ username, calendarId: id })))
    return Promise.allSettled(
      googleCalendarIdList.map(({ username, calendarId }) => getEvents(token, { username, calendarId, timeMin, timeMax }))
    ).then((results) => {
      return results.filter(r => r.status === 'fulfilled').map(r => (r as PromiseFulfilledResult<typeof eventList>).value)
        .flatMap(m => m)
    }).then(setEventList)
    // getEvents(token, { timeMin, timeMax }).then(setEventList)
  }

  useEffect(() => {
    /*
      #access_token=${token}
      &token_type=Bearer
      &expires_in=3599
      &scope=https://www.googleapis.com/auth/calendar.readonly%20https://www.googleapis.com/auth/calendar.events%20https://www.googleapis.com/auth/calendar%20https://www.googleapis.com/auth/calendar.events.readonly
    */
    try {
      console.log('hash', window.location.hash)
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
        setToken(paramToToken)
        window.history.replaceState(null, '', window.location.pathname)
        localForage.setItem('token', paramToToken)
      } else {
        ;(async() => {
          const localData: typeof token = await localForage.getItem('token')
          console.log('localData', localData)
          if (localData?.accessToken) {
            setToken(localData)
          }
        })()
      }
    } catch(e) {
      console.error(e)
    }
  }, [])
  return (
    <>
      <div>
        <button onClick={loginToGoogle}>loginToGoogle</button>
        <input
          type="text"
          style={{ width:'800px' }}
          placeholder="username/calendarId(gmailAddress)..."
          value={$testInterviewInput}
          onInput={e => $setTestInterviewInput((e.target as HTMLInputElement).value)}
        />
        <div>
          <input type="datetime-local" value={timeMin} onChange={({ target: { value } }) => setTimeMin(value)} />
          <input type="datetime-local" value={timeMax} onChange={({ target: { value } }) => setTimeMax(value)} />
          <button onClick={loadEventList}>loadEventList</button>
        </div>
      </div>
      <div>
        <label>access_token: <span>{accessToken ?? 'no token'}</span></label>
      </div>
      <div>
        <Timetable>
          {JSON.stringify(eventList)}
        </Timetable>
      </div>
    </>
  )
}
