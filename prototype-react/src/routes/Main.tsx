import cond from 'lodash/fp/cond'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '/src/store'

interface ComponentProps {}

export default function Main(props: ComponentProps) {
  // token이 로딩되었는지 여부
  const loaded = useAppSelector(state => state?.token?.loaded)
  // token이 유효한지 여부
  const isTokenValid = useAppSelector(state => state?.token?.valid ?? false)
  return cond([
    [() => !loaded, () => <></>],
    [() => isTokenValid, () => <Navigate to="/dashboard" replace={true} />],
    [() => true, () => <Navigate to="/login" replace={true} />],
  ])()
}
