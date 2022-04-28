import './message-box.scss'
import { useRef, useState } from 'react'
import { createSearch } from 'hangul-search-js'
// import stringSimilarity from 'kor-string-similarity'

type Message = { timestamp: number, sender: string, msg: string }

const search = createSearch([
  '일정확인',
  '일정변경',
])
export default function MessageBox() {
  const USER = 'me'
  const BOT = 'system'

  const [msg, setMessage] = useState('hello')
  const [msgLog, setMessageLog] = useState<Message[]>([
    { timestamp: Date.now(), sender: 'me', msg: 'hello' },
    { timestamp: Date.now() - 1000, sender: BOT, msg: 'hello' },
  ])
  const msgLogBox = useRef<HTMLDivElement>(null)

  const addMessage = async (msg: Message['msg'], sender: Message['sender']) => {
    if (!msg) return
    const newMessage: Message = { timestamp: Date.now(), sender, msg }
    setMessageLog(arr => [...arr, newMessage])
    // setMessageLog(newMsgLog)
    if (sender === USER) {
      setMessage('')
    }
    // msgLogBox.current?.scrollTo({ top: msgLogBox.current.scrollHeight })
    await new Promise(resolve => window.setTimeout(resolve, 10))
    msgLogBox.current?.scrollTo({ top: msgLogBox.current.scrollHeight })
    return newMessage
  }
  const botResponse = async (message?: Message) => {
    if (!message) return
    // console.log('stringSimilarity.arrangeBySimilarity', message.msg, stringSimilarity.arrangeBySimilarity(message.msg, [
    //   '일정확인',
    //   '일정변경',
    // ]))
    await new Promise(resolve => window.setTimeout(resolve, 1000))
    return addMessage(JSON.stringify(search(message.msg, { exact: true, order: true })), BOT)
  }

  return (
    <div className="message-box">
      <div ref={msgLogBox} style={{ height: '70vh', overflowY: 'auto' }}>
        {msgLog.map(({ sender, msg, timestamp }, key) => (
          <p key={key} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px', marginTop: '10px', marginBottom: '10px', textAlign: sender === USER ? 'right' : 'left' }}>
            {msg}
            <span style={{ color: '#aaa', fontSize: '.5rem', marginLeft: '2px' }}>{new Date(timestamp).toISOString()}</span>
          </p>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <textarea className="textarea" style={{ flexGrow: 1, maxWidth: 'inherit', minWidth: 'inherit' }} rows={7} value={msg} onChange={(e) => setMessage(e.target.value)}
         onKeyDown={(e) => e.key === 'Enter' && !e.ctrlKey && (() => { e.preventDefault(); addMessage(msg, USER).then(botResponse) })()}
        ></textarea>
        <button type="button" className="button is-dark is-outlined" style={{ height: 'auto' }} onClick={() => addMessage(msg, USER).then(botResponse)}>보내기</button>
      </div>
    </div>
  )
}