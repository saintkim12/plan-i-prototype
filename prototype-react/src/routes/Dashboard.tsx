import { useNavigate } from 'react-router-dom'
// import { Wrapper } from '/src/components/Wrapper'
import Wrapper from '/src/components/Wrapper'

interface ComponentProps {}

export default function Dashboard(props: ComponentProps) {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <h1 className="title">Dashboard</h1>
      <button className="button" onClick={() => navigate('/schedule')}>Schedule</button>
    </Wrapper>
  )
}
