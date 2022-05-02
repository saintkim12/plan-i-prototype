import { Component } from 'react'
import styled from 'styled-components'
// import Wrapper from '/src/components/Wrapper'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`
export default class Schedule extends Component {
  render() {
    return (
      <Wrapper className="container is-fluid pt-1">
        <div className="columns" style={{ height: 'inherit' }}>
          <div className="column is-3">
            <div className="pt-1" style={{ marginTop: `${'40px'}`}}>
              <p className="subtitle">OOO's Calendar</p>
              <div>
                뭐라뭐라
              </div>
            </div>
            <div>
              <label><input type="checkbox" className="checkbox" />전체체크</label>
              <div className="ml-2">
                <label><input type="checkbox" className="checkbox" />AAA</label>
                <label><input type="checkbox" className="checkbox" />BBB</label>
                <label><input type="checkbox" className="checkbox" />CCC</label>
                <label><input type="checkbox" className="checkbox" />DDD</label>
                <label><input type="checkbox" className="checkbox" />EEE</label>
              </div>
            </div>
          </div>
          <div className="column is-9">
            <div className="is-flex is-justify-content-flex-end mb-1" style={{ height: `calc(${'40px'})` }}>
              <button className="button is-normal">연동</button>
              <button className="button is-normal">연동</button>
              <button className="button is-normal">연동</button>
            </div>
            <div style={{ border: '1px solid #ddd', height: `calc(100% - ${'40px'} - ${'40px'})` }}>Calendar</div>
            <div className="is-flex is-justify-content-flex-end mt-1" style={{ height: `calc(${'40px'})` }}>
              <button className="button is-primary">제출하기</button>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}
