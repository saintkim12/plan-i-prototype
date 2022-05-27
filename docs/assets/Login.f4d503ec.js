var y=Object.defineProperty,L=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var g=(t,i,s)=>i in t?y(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,c=(t,i)=>{for(var s in i||(i={}))h.call(i,s)&&g(t,s,i[s]);if(n)for(var s of n(i))C.call(i,s)&&g(t,s,i[s]);return t},r=(t,i)=>L(t,N(i));var d=(t,i)=>{var s={};for(var e in t)h.call(t,e)&&i.indexOf(e)<0&&(s[e]=t[e]);if(t!=null&&n)for(var e of n(t))i.indexOf(e)<0&&C.call(t,e)&&(s[e]=t[e]);return s};import{u as D,r as l}from"./vendor.a5446ca3.js";import{s as p}from"./styled-components.af953570.js";import{u as T,C as v,L as A,T as E,s as F,i as G,w as S,g as j,a as H}from"./index.69b8bba8.js";import{b as u,j as a}from"./react-redux.e36c2f7f.js";import"./@reduxjs/toolkit.411cf859.js";import"./luxon.c9b36ce7.js";import"./localforage.bbc47bd3.js";/* empty css              */const W=p.div`
  height: 30vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 40vmin;
  }
`,k=p.div`
  width: 40vw;
  min-width: 480px;
  max-width: 540px;
`,P=p.div`
  min-height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  // padding-top: 0.5rem;
  // padding-bottom: 1rem;
  & > hr {
    width: 100%;
    border-bottom: 1px solid #ccc;
  }
`,B=e=>{var o=e,{className:t,children:i}=o,s=d(o,["className","children"]);return a("button",r(c({className:`${t} button is-fullwidth my-2`},s),{children:i}))},x=e=>{var o=e,{className:t,children:i}=o,s=d(o,["className","children"]);return a(B,r(c({className:`${t} is-success`},s),{children:i}))},U=({onHandleLogin:t})=>{const i="google";return u(k,{className:"box p-5",children:[a(E,{className:"pt-2 pb-2"}),u(P,{children:[a("input",{type:"text",className:"input is-fullwidth my-2",placeholder:"Email",disabled:!0}),a("input",{type:"password",className:"input is-fullwidth my-2",placeholder:"Password",disabled:!0}),a(x,{disabled:!0,children:"\uB85C\uADF8\uC778"}),a(B,{disabled:!0,children:"\uD68C\uC6D0\uAC00\uC785"}),a("hr",{}),a(x,{onClick:async()=>{await j();const e=await H();t({type:i,id:e==null?void 0:e.id,username:e==null?void 0:e.name,email:e==null?void 0:e.email,imgSrc:e==null?void 0:e.picture})},children:"Google\uB85C \uB85C\uADF8\uC778"})]})]})};function X(){const t=D(),i=T(),[s,e]=l.exports.useState(!1),[o,b]=l.exports.useState(void 0);l.exports.useMemo(()=>!!(o!=null&&o.email),[o]);const w=async m=>{await Promise.all([F(m),i(G())]),b(m),e(!0)};S().updateTitle("\uB85C\uADF8\uC778");const f="/dashboard";return l.exports.useEffect(()=>{s&&t(f,{replace:!0})},[s]),u(v,{className:"container is-fluid",children:[u(W,{children:[a(A,{className:"pb-3"}),a("h1",{className:"title pb-3",children:"\uBC18\uAC11\uC2B5\uB2C8\uB2E4"}),a("p",{className:"subtitle",children:"\uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."})]}),a(U,{onHandleLogin:w})]})}export{X as default};
