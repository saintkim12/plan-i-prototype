import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Logo, Title } from '/src/components/TitleLogo'
import Wrapper from '/src/components/Wrapper'
import withDocumentTitle from '/src/hooks/withDocumentTitle'
import { useAppDispatch } from '/src/store'
import { initToken } from '/src/store/token'
import { getGoogleUserInfo, googleLogin } from '/src/components/GoogleAuthentication'
import { setUserInfo, UserInfo } from '/src/components/storage'

/**
 * 상단 텍스트 구역
 */
const TitleBox = styled.div`
  height: 30vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 40vmin;
  }
`
/**
 * 로그인 박스 구역
 */
const LoginBoxWrapper = styled.div`
  width: 40vw;
  min-width: 480px;
  max-width: 540px;
`
const LoginButtonWrapper = styled.div`
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
`

const DefaultButton = ({ className, children, ...props }: any) => {
  return (<button className={`${className} button is-fullwidth my-2`} {...props}>{children}</button>)
}
const SuccessButton = ({ className, children, ...props }: any) => {
  return (<DefaultButton className={`${className} is-success`} {...props}>{children}</DefaultButton>)
}

/**
 * @returns 로그인 박스 컴포넌트
 */
const LoginBox = ({ onHandleLogin }: { onHandleLogin: (userInfo: UserInfo) => Promise<any> }) => {
  // 로그인 유형
  // FIXME: 현재 구글로 고정
  const loginType = 'google'
  // 구글 로그인 시 이벤트 처리
  const onHandleGoogleLogin = async () => {
    // Google OAuth2 로그인 처리(팝업)
    await googleLogin()
    // storage에 저장된 로그인 정보를 조회
    const userInfo = await getGoogleUserInfo()
    // 로그인 후 이벤트 처리
    onHandleLogin({
      type: loginType,
      id: userInfo?.id,
      username: userInfo?.name,
      email: userInfo?.email,
      imgSrc: userInfo?.picture,
    })
  }
  return (
    <LoginBoxWrapper className={`box p-5`}>
      <Title className="pt-2 pb-2" />
      <LoginButtonWrapper>
        <input type="text" className="input is-fullwidth my-2" placeholder="Email" disabled={true} />
        <input type="password" className="input is-fullwidth my-2" placeholder="Password" disabled={true} />
        <SuccessButton disabled={true}>로그인</SuccessButton>
        <DefaultButton disabled={true}>회원가입</DefaultButton>
        <hr />
        <SuccessButton onClick={onHandleGoogleLogin}>Google로 로그인</SuccessButton>
        {/* <LoginButton disabled={true}>Naver로 로그인</LoginButton> */}
        {/* <LoginButton disabled={true}>Outlook으로 로그인</LoginButton> */}
      </LoginButtonWrapper>
    </LoginBoxWrapper>
  )
}

interface ComponentState {
  logined: boolean
  authenticateInfo?: UserInfo
}
export default function Login() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  // 로그인이 되었는지 여부, 기본 false(로그인이 되면 화면이 전환되도록 처리 )
  const [logined, setLogined] = useState<ComponentState['logined']>(false)
  // 인증 정보 여부
  const [authenticateInfo, setAuthenticateInfo] = useState<ComponentState['authenticateInfo']>(undefined)
  // 인증되었는지 여부
  const authenticated = useMemo(() => !!authenticateInfo?.email, [authenticateInfo])
  /**
   * 로그인 후 이벤트 처리
   * @param userInfo 
   */
  const onHandleLogin = async (userInfo: UserInfo) => {
    // console.log('userInfo', userInfo)
    await Promise.all([
      // storage에 사용자 정보 업데이트
      setUserInfo(userInfo),
      // token 초기화
      dispatch((initToken())),
    ])
    // state에 인증 정보를 설정
    setAuthenticateInfo(userInfo)
    // 로그인 되었다 표시, useEffect에 의해 이벤트가 실행
    setLogined(true)
  }
  
  /* document title 설정 */
  const documentTitle = withDocumentTitle()
  documentTitle.updateTitle('로그인')

  // 로그인 후 이동할 페이지 지정
  const redirectTo = '/dashboard' /* FIXME: 임시 */
  useEffect(() => {
    if (logined) navigate(redirectTo, { replace: true })
  }, [logined])

  return (
    <Wrapper className="container is-fluid">
      <TitleBox>
        <Logo className="pb-3" />
        <h1 className="title pb-3">반갑습니다</h1>
        <p className="subtitle">아이디와 비밀번호를 입력해주세요.</p>
      </TitleBox>
      <LoginBox onHandleLogin={onHandleLogin} />
    </Wrapper>
  )
}
