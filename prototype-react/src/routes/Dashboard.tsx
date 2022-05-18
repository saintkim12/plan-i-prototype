import styled from 'styled-components'
import NavBar from '/src/components/NavBar'
import LnbMenu from '/src/components/LnbMenu'
import { Wrapper } from '/src/components/Wrapper'

const PageDashboard = styled(({ className, ...props }: any) => {
  const PositionBox = ({ title, children }: { title: string, children: any }) => (
    <article className="message">
      <div className="message-header">
        <p>{ title }</p>
        {/* <button className="delete" aria-label="delete"></button> */}
      </div>
      <div className="message-body p-0">
        { children }
      </div>
    </article>
  )
  type ApplicantItemProps = { id: string, selected?: boolean, name: string, email: string, tel: string }
  const ApplicantItem = ({ selected, name, email, tel }: ApplicantItemProps) => (
    <div className={`box is-clickable py-1 my-1 ${selected ? 'has-background-link has-text-white' : ''}`}>
      <article className="media">
        <div className="media-left">
          <strong>{ name }</strong>
        </div>
        <div className="media-content">
          <div className="content">
            <div>email: { email }</div>
            <div>tel: { tel }</div>
          </div>
        </div>
      </article>
    </div>
  )
  return (
    <main className={`p-2 ${className}`} {...props}>
      <div className="tabs">
        <ul>
          <li className="is-active"><a>1차면접</a></li>
          <li><a>2차면접</a></li>
          <li><a>채용완료</a></li>
        </ul>
      </div>
      <div className="box">
        <div className="columns">
          <div className="column is-3">
            <PositionBox title="디자이너">
              <ApplicantItem id={"01"} name={'서유리'} email={'aaa@gmail.com'} tel={'010-1234-1234'} selected={true} />
              <ApplicantItem id={"02"} name={'박지민'} email={'bbb@gmail.com'} tel={'010-1234-1234'} />
              <ApplicantItem id={"03"} name={'서유리'} email={'aaa@gmail.com'} tel={'010-1234-1234'} />
              <ApplicantItem id={"04"} name={'박지민'} email={'bbb@gmail.com'} tel={'010-1234-1234'} />
            </PositionBox>
          </div>
          <div className="column is-3">
            <PositionBox title="프론트개발자">
              <ApplicantItem id={"05"} name={'이지은'} email={'aaa@gmail.com'} tel={'010-1234-1234'} />
              <ApplicantItem id={"06"} name={'최보미'} email={'bbb@gmail.com'} tel={'010-1234-1234'} />
              <ApplicantItem id={"07"} name={'이지은'} email={'aaa@gmail.com'} tel={'010-1234-1234'} />
              <ApplicantItem id={"08"} name={'최보미'} email={'bbb@gmail.com'} tel={'010-1234-1234'} />
            </PositionBox>
          </div>
          <div className="column is-3">
            <PositionBox title="홍보담당자">
              <ApplicantItem id={"09"} name={'서유리'} email={'aaa@gmail.com'} tel={'010-1234-1234'} />
              <ApplicantItem id={"10"} name={'박지민'} email={'bbb@gmail.com'} tel={'010-1234-1234'} />
            </PositionBox>
          </div>
          <div className="column is-3">
            <PositionBox title="개발PM">
              <ApplicantItem id={"11"} name={'이지은'} email={'aaa@gmail.com'} tel={'010-1234-1234'} />
              <ApplicantItem id={"12"} name={'최보미'} email={'bbb@gmail.com'} tel={'010-1234-1234'} />
            </PositionBox>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="columns">
          <div className="column is-4">
            <span className="tag is-large title">서유리</span>
            <div>email: aaa@gmail.com</div>
            <div>tel: 010-1234-1234</div>
            <div><label className="label is-inline-block mb-0">면접일: </label><span>2022-01-01</span></div>
            <div><label className="label is-inline-block mb-0">면접관: </label><span>aaa, bbb</span></div>
            <div><label className="label is-inline-block mb-0">이력서: </label><span>abcd.pdf</span></div>
          </div>
          <div className="column is-4">
            <div><label className="label is-inline-block mb-0">면접요청일자: </label><span></span></div>
            <div>
              <label className="label is-inline-block mb-0">면접현황: </label>
              <div className="select is-small">
                <select>
                  <option>1차 면접 중</option>
                </select>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="box p-1 has-background-grey-lighter">
              <label className="label">Memo</label>
              <textarea className="textarea has-fixed-size" style={{ background: 'transparent' }}></textarea>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
})`
  height: calc(100vh - 56px);
  overflow-x: hidden;
  overflow-y: auto;
`

interface ComponentProps {}

export default function Dashboard(props: ComponentProps) {
  return (
    <Wrapper className="is-flex is-justify-content-flex-start" style={{ height: 'inherit' }}>
      <LnbMenu />
      <div style={{ flexGrow: 1, height: '100%' }}>
        <NavBar />
        <PageDashboard />
      </div>
    </Wrapper>
  )
}
