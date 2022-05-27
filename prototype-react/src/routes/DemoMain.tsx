import { useNavigate } from 'react-router-dom'
import withDocumentTitle from '/src/hooks/withDocumentTitle'
import Wrapper from '/src/components/Wrapper'
import { Logo } from '/src/components/TitleLogo'

export default function DemoMain() {
  const navigate = useNavigate()
  /* document title 설정 */
  const documentTitle = withDocumentTitle()
  documentTitle.updateTitle('데모 메인')
  return (
    <Wrapper>
      <Logo className="py-4" />
      <a className="title mb-3" onClick={() => navigate('/main')}>채용담당자</a>
      <a className="title mb-3" onClick={() => navigate('/interviewer')}>면접관</a>
      <a className="title mb-3" onClick={() => navigate('/applicant')}>면접자</a>
    </Wrapper>
  )
}