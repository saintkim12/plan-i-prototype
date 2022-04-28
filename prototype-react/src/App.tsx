import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from '/src/routes/Main'
// import Schedule from '/src/routes/Schedule'
// import Chat from '/src/routes/Chat'
import { Suspense, lazy } from 'react'


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
  const Schedule = lazy(() => import('/src/routes/Schedule'))
  const Chat = lazy(() => import('/src/routes/Chat'))
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Suspense>
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
      </Suspense>
    </BrowserRouter>
  )
}

export default App
