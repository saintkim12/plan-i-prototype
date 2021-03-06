import 'bulma'
import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import withDocumentTitle from '/src/hooks/withDocumentTitle'
import { initToken } from '/src/store/token'
import { useAppDispatch } from '/src/store'
import Main from '/src/routes/Main'
import DemoMain from '/src/routes/DemoMain'
import PageNotFound from '/src/routes/PageNotFound'

/* styled component */
const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
    overflow-y: hidden;
  }
  body {
    min-height: 100vh;
  }
  #root {
    overflow-y: auto;
  }
`

/* react component */
// HMR을 위해 App은 functional 구조로 작성되어야 함
// https://github.com/vitejs/vite/issues/1747
export default function App() {
  const Login = lazy(() => import('/src/routes/Login'))
  const Dashboard = lazy(() => import('/src/routes/Dashboard'))
  const Schedule = lazy(() => import('/src/routes/Schedule'))
  const Chat = lazy(() => import('/src/routes/Chat'))

  const InterviewerMain = lazy(() => import('/src/routes/InterviewerMain'))

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
            {/* FIXME: 데모에서만 사용할 메인 */}
            <Route path='/' element={<DemoMain />} />
            
            {/* admin */}
            {/* <Route path='/' element={<Main />} /> */}
            <Route path='/main' element={<Main />} />

            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/chat' element={<Chat />} />
            {/* interviewer */}
            <Route path='/interviewer' element={<InterviewerMain />} />
            
            {/* applicant */}
            <Route path='/applicant' element={<ApplicantMain />} />

            {/* hidden pages */}
            <Route path='/popup/login' element={<LoginPopup />} />
            {/* Other pages */}
            <Route
              path='*'
              element={<PageNotFound />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}
