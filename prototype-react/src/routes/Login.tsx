import { useEffect, useMemo, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '/src/assets/logo-light.png'
import TitleLight from '/src/assets/title-light.png'
import { cond } from 'lodash/fp'
import Wrapper from '/src/components/Wrapper'
import { getGoogleUserInfo, googleLogin } from '/src/components/GoogleAuthentication'
import { setUserInfo, UserInfo } from '/src/components/storage'
import withDocumentTitle from '/src/hooks/withDocumentTitle'
import { useAppDispatch } from '/src/store'
import { initToken } from '/src/store/token'

const TitleBox = styled((props) => {
  return (
    <div {...props}>
      <img src={Logo} className="pb-3" />
      <h1 className="title pb-3">반갑습니다</h1>
      <p className="subtitle">아이디와 비밀번호를 입력해주세요.</p>
    </div>
  )
})`
  height: 30vmin;
  @media screen and (max-width: 768px) {
    height: 40vmin;
  }
`
const DefaultButton = styled(({ className, children, ...props }) => {
  return (<button className={`${className} button is-fullwidth my-2`} {...props}>{children}</button>)
})``
const SuccessButton = styled(({ className, children, ...props }) => {
  return (<DefaultButton className={`${className} is-success`} {...props}>{children}</DefaultButton>)
})``

const LoginButtonBox = styled(({ className, handleLogin, ...props }: { className?: string, handleLogin: (userInfo: UserInfo) => Promise<any> }) => {
  const loginType = 'google'
  const onHandleGoogleLogin = async () => {
    await googleLogin()
    const userInfo = await getGoogleUserInfo()
    handleLogin({
      type: loginType,
      id: userInfo?.id,
      username: userInfo?.name,
      email: userInfo?.email,
      imgSrc: userInfo?.picture,
    })
  }
  return (
    <div className={`box p-5 ${className}`} {...props}>
      <div className="pt-2 pb-2">
        <img src={TitleLight} />
      </div>
      <div className="button-wrap">
        <input type="text" className="input is-fullwidth my-2" placeholder="Email" disabled={true} />
        <input type="password" className="input is-fullwidth my-2" placeholder="Password" disabled={true} />
        <SuccessButton disabled={true}>로그인</SuccessButton>
        <DefaultButton disabled={true}>회원가입</DefaultButton>
        <hr />
        <SuccessButton onClick={onHandleGoogleLogin}>Google로 로그인</SuccessButton>
        {/* <LoginButton disabled={true}>Naver로 로그인</LoginButton> */}
        {/* <LoginButton disabled={true}>Outlook으로 로그인</LoginButton> */}
      </div>
    </div>
  )
})`
  width: 40vw;
  min-width: 480px;
  max-width: 540px;
  .button-wrap {
    min-height: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    // padding-top: 0.5rem;
    // padding-bottom: 1rem;
    & > hr {
      width: 100%;
      border-bottom: 1px solid #ccc;
    }
  }
`

interface ComponentState {
  logined: boolean
  authenticateInfo?: UserInfo
}
export default function Login() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [logined, setLogined] = useState<ComponentState['logined']>(false/* FIXME: 임시 */)
  const [authenticateInfo, setAuthenticateInfo] = useState<ComponentState['authenticateInfo']>(undefined/* FIXME: 임시 */)
  const documentTitle = withDocumentTitle()
  documentTitle.updateTitle('로그인')
  const authenticated = useMemo(() => !!authenticateInfo?.email, [authenticateInfo])
  const handleLogin = async (userInfo: UserInfo) => {
    console.log('userInfo', userInfo)
    await Promise.all([
      setUserInfo(userInfo),
      dispatch((initToken())),
    ])
    // this.setState(state => ({ ...state, authenticateInfo: userInfo }))
    // this.setState(state => ({ ...state, logined: true }))
    setAuthenticateInfo(userInfo)
    setLogined(true)
  }

  /* FIXME: 임시 */
  const redirectTo = '/dashboard'
  useEffect(() => {
    if (logined) navigate(redirectTo, { replace: true })
  }, [logined])
  // [() => authenticated, (info: ComponentState['authenticateInfo']) => (
  //   <Wrapper className="container is-fluid">
  //     <TitleBox />
  //     <div className="box p-5">
  //       <div className="is-flex is-justify-content-center mb-3">
  //         <figure className="image is-128x128">
  //           <img className="is-rounded" src={info?.imgSrc ?? 'https://bulma.io/images/placeholders/128x128.png'} />
  //         </figure>
  //       </div>
  //       <p>반갑습니다. {info?.username} 님!</p>
  //       <p>해당 계정으로 로그인을 진행할까요?</p>
  //       <div className="is-size-6">
  //         <p><label>유형</label>: {info?.type}</p>
  //         <p><label>사용자</label>: {info?.username}</p>
  //         <p><label>이메일</label>: {info?.email}</p>
  //       </div>
  //     </div>
  //   </Wrapper>
  // )],
  return (
    <Wrapper className="container is-fluid">
      <TitleBox />
      <LoginButtonBox handleLogin={handleLogin} />
      {/* <Logo /> */}
      {/* <div className="columns is-mobile is-multiline"> */}
        {/* <div className="column is-full"> */}
          {/* <LinkButton to="/login">Sign in</LinkButton> */}
        {/* </div> */}
        {/* <div className="column is-full"> */}
          {/* <LinkButton to="/schedule">캘린더</LinkButton> */}
        {/* </div> */}
        {/* <div className="column is-full"> */}
          {/* <LinkButton to="/chat">채팅</LinkButton> */}
        {/* </div> */}
      {/* </div> */}
    </Wrapper>
  )
}
