import styled from 'styled-components'

const StyledElement = styled.div`
  border: 1px solid #bbb;
  height: calc(100% - 36px);
  border-radius: .5rem;
  position: relative;
  
  .header {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-radius: inherit;
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
    height: 60px;
    background: #444;
    color: #fff;
    font-size: 1.3rem;
    button {
      margin: 0 .3rem;
    }
  }
  .body {
    height: calc(100% - 60px);
    display: grid;
    grid-template-rows: 80px 1fr;
    grid-template-columns: 120px 1fr;
    & > div {
      border: 1px solid #bbb;
    }
    .calendar-top {
      & > div { &:not(:last-child) { border-right: 1px solid #bbb; } }
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
    .calendar-left {
      & > div { &:not(:last-child) { border-bottom: 1px solid #bbb; } }
      display: grid;
      grid-template-rows: repeat(12, 1fr);
    }
    .calendar-body {
      & > div {
        &:not(:last-child) { border-right: 1px solid #bbb; }
        &:not(:last-child) { border-bottom: 1px solid #bbb; }
      }
      display: grid;
      grid-template-rows: repeat(12, 1fr);
      grid-template-columns: repeat(5, 1fr);
    }
  }
`

export default function InterviewCalender() {
  return (
    <StyledElement>
      <div className="header">
        <span>2022년 5월</span>
        <button className="prev">&lt;</button>
        <button className="next">&gt;</button>
      </div>
      <div className="body">
        <div className="dummy">{/* dummy */}</div>
        <div className="calendar-top">
          {/* top */}
          {[...Array(5).keys()].map(() => <div></div>)}
        </div>
        <div className="calendar-left">
          {/* left */}
          {[...Array(12).keys()].map(() => <div></div>)}
        </div>
        <div className="calendar-body">
          {/* body */}
          {[...Array(5).keys()].map(() =>
            [...Array(12).keys()].map(() => <div></div>)
          )}
        </div>
      </div>
    </StyledElement>
  )
}