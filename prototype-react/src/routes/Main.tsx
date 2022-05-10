// import styled from 'styled-components'
import { Component } from 'react'
import { Navigate } from 'react-router-dom'

interface ComponentProps {

}
export default class Main extends Component<ComponentProps> {
  checkLogined() {
    return true
  }
  render() {
    // const navigate = this.props.navigate
    if (this.checkLogined()) {
      // navigate('/dashboard')
      return <Navigate to="/dashboard" />
    } else {
      // navigate('/login')
      return <Navigate to="/login" />
    }
  }
}
// export default function WrappedMain(props: ComponentProps) {
//   const history = useLo();
//   return <Main {...{ navigate }} {...props} />
// }
