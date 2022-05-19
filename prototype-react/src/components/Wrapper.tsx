import styled from 'styled-components'

const baseCss = `
  height: 100vh;
  min-height: 100vh;
  background-color: #E5E5E5;
`
const childCenter = `
  /* child h-center */
  text-align: center;
  margin: auto;
`
const parentCenter = `
  display: flex;
  /* v-center */
  flex-direction: column;
  align-items: center;
  /* h-center */
  justify-content: center;
`
const BaseWrapper = styled.div`
  ${baseCss}
`
const CenteredWrapper = styled.div`
  ${baseCss}
  ${childCenter}
  ${parentCenter}
`

export { BaseWrapper as Wrapper }
export const StyledWrapper = styled(({ children, ...props }: any) => (<BaseWrapper {...props}>{children}</BaseWrapper>))
export default CenteredWrapper
