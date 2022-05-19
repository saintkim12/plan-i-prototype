import 'bulma'
import 'sweetalert2/src/sweetalert2.scss'
import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import withDocumentTitle from '/src/hooks/withDocumentTitle'
import Main from '/src/routes/Main'
import { initToken } from '/src/store/token'
import { useAppDispatch } from '/src/store'

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-y: hidden;
    overflow-x: hidden;
  }
  body {
    min-height: 100vh;
  }
  #root {
    overflow-y: auto;
  }
`

// HMR을 위해 App은 functional 구조로 작성되어야 함
// https://github.com/vitejs/vite/issues/1747
export default function App() {
  const Login = lazy(() => import('/src/routes/Login'))
  const Dashboard = lazy(() => import('/src/routes/Dashboard'))
  const Schedule = lazy(() => import('/src/routes/Schedule'))
  const Chat = lazy(() => import('/src/routes/Chat'))

  const ApplicantMain = lazy(() => import('/src/routes/ApplicantMain'))

  const LoginPopup = lazy(() => import('/src/routes/LoginPopup'))

  const documentTitle = withDocumentTitle()
  /* Redux state 초기화 */
  const dispatch = useAppDispatch()
  useEffect(() => {
    /* Title 설정 */
    documentTitle.setBaseTitle()
    /* Google Token 정보 초기화 */
    dispatch((initToken()))
  }, [])
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Suspense>
          <Routes>
            {/* admin */}
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/chat' element={<Chat />} />
            {/* interviewer */}
            
            {/* applicant */}
            <Route path='/applicant' element={<ApplicantMain />} />

            {/* hidden pages */}
            <Route path='/popup/login' element={<LoginPopup />} />
            {/* hidden pages */}
            <Route
              path='*'
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}
