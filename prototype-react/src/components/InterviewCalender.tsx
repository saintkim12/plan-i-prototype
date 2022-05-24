import { DateTime } from 'luxon'
import { useMemo, useState } from 'react'
import styled from 'styled-components'

const vars = {
  weekWidth: '1fr',
  timeHeight: '47px',
  timeLeftHeight: '55.7px',
  timeLabelTop: '-12px',
}
const StyledElement = styled.div`
  border: 1px solid #bbb;
  border-right: none;
  height: calc(100% - 36px);
  border-radius: 0.5rem;
  position: relative;
  overflow-y: hidden;

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
      margin: 0 0.3rem;
    }
  }
  .body {
    height: calc(100% - 60px);
    display: grid;
    grid-template-rows: 80px 1fr;
    grid-template-columns: 120px 1fr;
    & > div {
      /* border: 1px solid #bbb; */
    }
    .calendar-top {
      border-top: 1px solid #bbb;
      border-left: 1px solid #bbb;
      & > div {
        /* &:not(:last-child) { border-right: 1px solid #bbb; } */
        border-bottom: 1px solid #bbb;
        border-right: 1px solid #bbb;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      display: grid;
      grid-template-columns: repeat(5, ${vars.weekWidth});
    }
    .calendar-left {
      /* border-top: 1px solid transparent; */
      /* border-left: 1px solid transparent; */
      & > div {
        &:first-child { border-top: 1px solid #bbb; }
        // &:not(:last-child) { border-bottom: 1px solid #bbb; }
        border-bottom: 1px solid #bbb;
        /* border-right: 1px solid #bbb; */
        span {
          position: relative;
          top: ${vars.timeLabelTop};
          background: white;
        }
      }
      display: grid;
      grid-template-rows: repeat(12, ${vars.timeHeight});
      overflow-x: hidden;
      overflow-y: hidden;
      margin-left: -1px;
    }
    .calendar-body {
      /* border-top: 1px solid transparent; */
      border-left: 1px solid #bbb;
      & > div {
        /* border: 1px solid #bbb; */
        border-bottom: 1px solid #bbb;
        border-right: 1px solid #bbb;
        /* &:not(:last-child) { border-right: 1px solid #bbb; }
        &:not(:last-child) { border-bottom: 1px solid #bbb; } */
      }
      display: grid;
      grid-template-columns: repeat(5, ${vars.weekWidth});
      grid-template-rows: repeat(12, ${vars.timeHeight});
    }
  }
`

export default function InterviewCalender() {
  const [targetDay, setTargetDay] = useState(DateTime.now())
  const targetWeekFirstday = useMemo(() => targetDay.plus({ days: -(targetDay.weekday) }), [targetDay])
  const toPrevWeek = () => setTargetDay(targetDay.plus({ days: -7 }))
  const toNextWeek = () => setTargetDay(targetDay.plus({ days: 7 }))
  return (
    <StyledElement>
      <div className='header'>
        <span>{targetDay.toFormat('yyyy년 MM월')}</span>
        <button className="prev" onClick={() => toPrevWeek()}>&lt;</button>
        <button className="next" onClick={() => toNextWeek()}>&gt;</button>
      </div>
      <div className='body'>
        <div className='dummy'>{/* dummy */}</div>
        <div className='calendar-top'>
          {/* top */}
          {[...Array(7).keys()]
            .map((idx) => targetWeekFirstday.plus({ days: idx }))
            .filter(dt => [1, 2, 3, 4, 5].includes(dt.weekday))
            .map((dt, key) => (
            <div key={`${key}`}>
              <span>{dt.setLocale('ko').toFormat('dd일 (EEE)')}</span>
            </div>
          ))}
        </div>
        <div className='calendar-left'>
          {/* left */}
          {[...Array(13).keys()].map((key) => (
            <div key={`${key}`}>
              <span>{DateTime.fromISO('1970-01-01T08').plus({ hours: key }).setLocale('ko').toFormat('a hh시')}</span>
            </div>
          ))}
        </div>
        <div className='calendar-body'>
          {/* body */}
          {[...Array(5).keys()].map((row) => [...Array(12).keys()].map((col) => (
            <div key={`${row}/${col}`}>
              <span>{/* 일정1 */}</span>
            </div>
          )))}
        </div>
      </div>
    </StyledElement>
  )
}
