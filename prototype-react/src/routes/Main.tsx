// import styled from 'styled-components'
import { cond } from 'lodash/fp'
import { useMemo } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../store'

interface ComponentProps {

}
export default function Main(props: ComponentProps) {
  const loaded = useAppSelector(state => state?.token?.loaded)
  const isTokenValid = useAppSelector(state => state?.token?.valid ?? false)
  return cond([
    [() => !loaded, () => <></>],
    [() => isTokenValid, () => <Navigate to="/dashboard" replace={true} />],
    [() => !isTokenValid, () => <Navigate to="/login" replace={true} />],
  ])()
}
