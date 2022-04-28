import { useCallback, useEffect, useRef, useState } from 'react'
import { createSearch } from 'hangul-search-js'

const search = createSearch([
  '일정확인',
  '일정변경',
])
type Message = { timestamp: number, sender: string, msg: string }
export default function MessageBox() {
  const user = 'me'
  const BOT = 'system'
  const [msg, setMessage] = useState('hello')
  const [msgLog, setMessageLog] = useState<Message[]>([
    { timestamp: Date.now(), sender: 'me', msg: 'hello' },
    { timestamp: Date.now() - 1000, sender: BOT, msg: 'hello' },
  ])
  const msgLogBox = useRef<HTMLDivElement>(null)
  const addMessage = async () => {
    if (!msg) return
    const newMessage: Message = { timestamp: Date.now(), sender: user, msg }
    setMessageLog(arr => [...arr, newMessage])
    // setMessageLog(newMsgLog)
    setMessage('')
    // msgLogBox.current?.scrollTo({ top: msgLogBox.current.scrollHeight })
    return newMessage
  }
  const responseAuto = (newMessage?: Message) => new Promise<Message>(resolve => {
    console.log('responseAuto', newMessage)
    if (!newMessage) return
    const lastMessage = newMessage
    if (!lastMessage || lastMessage.sender === BOT) return
    window.setTimeout(() => {
      const botMsg: Message = { timestamp: Date.now(), sender: BOT, msg: JSON.stringify(search(lastMessage.msg)) }
      setMessageLog(arr => [...arr, botMsg])
      // window.setTimeout(() => msgLogBox.current?.scrollTo({ top: msgLogBox.current.scrollHeight }), 10)
      resolve(botMsg)
    }, 500)
  })

  return (
    <div style={{ width: '50vw', marginLeft: '25vw' }}>
      <div ref={msgLogBox} style={{ height: '70vh', overflowY: 'auto' }}>
        {msgLog.map(({ sender, msg, timestamp }, key) => (
          <p key={key} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px', textAlign: sender === user ? 'right' : 'left' }}>
            {msg}
            <span style={{ color: '#aaa', fontSize: '.5rem', marginLeft: '2px' }}>{new Date(timestamp).toISOString()}</span>
          </p>
          // <p style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px', textAlign: 'right' }}>hello</p>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <textarea style={{ flexGrow: 1 }} rows={10} value={msg} onChange={(e) => setMessage(e.target.value)}
         onKeyDown={(e) => e.key === 'Enter' && !e.ctrlKey && (() => { e.preventDefault(); addMessage().then(responseAuto) })()}
        ></textarea>
        <button type="button" onClick={() => addMessage().then(responseAuto)}>보내기</button>
      </div>
    </div>
  )
}