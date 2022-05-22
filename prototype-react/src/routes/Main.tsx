// import styled from 'styled-components'
import { cond } from 'lodash/fp'
import { useMemo } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../store'

interface ComponentProps {

}
export default function Main(props: ComponentProps) {
  const token = useAppSelector(state => state?.token?.token)
  const loaded = useAppSelector(state => state?.token?.loaded)
  const isTokenValid = useMemo(() => {
    if (!token) return false
    const { accessToken, createdIn, expiresIn } = token
    const valid = accessToken && (Date.now() <= createdIn + expiresIn)
    return !!valid
  }, [token])
  return cond([
    [() => !loaded, () => <></>],
    [() => isTokenValid, () => <Navigate to="/dashboard" replace={true} />],
    [() => !isTokenValid, () => <Navigate to="/login" replace={true} />],
  ])()
}
