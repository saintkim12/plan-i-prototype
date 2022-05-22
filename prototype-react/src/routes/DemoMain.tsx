import { useNavigate } from 'react-router-dom'
import withDocumentTitle from '/src/hooks/withDocumentTitle'
import LogoLight from '/src/assets/logo-light.png'
import Wrapper from '/src/components/Wrapper'

export default function DemoMain() {
  const navigate = useNavigate()
  const documentTitle = withDocumentTitle()
  documentTitle.updateTitle('데모 메인')
  return (
    <Wrapper>
      <div className="image py-4">
        <img src={LogoLight} />
      </div>
      <a className="title mb-3" onClick={() => navigate('/main')}>채용담당자</a>
      <a className="title mb-3" onClick={() => navigate('/interviewer')}>면접관</a>
      <a className="title mb-3" onClick={() => navigate('/applicant')}>면접자</a>
    </Wrapper>
  )
}