import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from '/src/routes/Main'
import Schedule from '/src/routes/Schedule'
import Chat from '/src/routes/Chat'


function PageA() {
  return (
    <div>
      PageA
    </div>
  )
}
function PageB() {
  return (
    <div>
      PageB
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/a" element={<PageA />} />
        <Route path="/b" element={<PageB />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/chat" element={<Chat />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
