import { createRef, useState } from 'react'

export default function MessageBox() {
  const user = 'me'
  const [msg, setMessage] = useState('hello')
  const [msgLog, setMessageLog] = useState([
    { timestamp: Date.now() - 1000, sender: 'who', msg: 'hello' },
    { timestamp: Date.now(), sender: 'me', msg: 'hello' },
  ])
  const msgLogBox = createRef<HTMLDivElement>()
  const addMessage = () => {
    setMessageLog(msgLog.concat({ timestamp: Date.now(), sender: user, msg }))
    setMessage('')
    msgLogBox.current?.scrollTo({ top: msgLogBox.current.scrollHeight })
  }
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
        <textarea style={{ flexGrow: 1 }} rows={10} value={msg} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="button" onClick={addMessage}>보내기</button>
      </div>
    </div>
  )
}