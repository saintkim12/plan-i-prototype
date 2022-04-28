import 'bulma'
import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from '/src/routes/Main'
// import Schedule from '/src/routes/Schedule'
// import Chat from '/src/routes/Chat'
import { Suspense, lazy } from 'react'

function App() {
  const Login = lazy(() => import('/src/routes/Login'))
  const Schedule = lazy(() => import('/src/routes/Schedule'))
  const Chat = lazy(() => import('/src/routes/Chat'))
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Suspense>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
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
