var L=Object.defineProperty,N=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var g=(t,i,a)=>i in t?L(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a,u=(t,i)=>{for(var a in i||(i={}))h.call(i,a)&&g(t,a,i[a]);if(n)for(var a of n(i))C.call(i,a)&&g(t,a,i[a]);return t},d=(t,i)=>N(t,D(i));var r=(t,i)=>{var a={};for(var s in t)h.call(t,s)&&i.indexOf(s)<0&&(a[s]=t[s]);if(t!=null&&n)for(var s of n(t))i.indexOf(s)<0&&C.call(t,s)&&(a[s]=t[s]);return a};import{u as T,r as l}from"./vendor.a5446ca3.js";import{s as m}from"./styled-components.af953570.js";import{u as v,C as f,L as A,T as k,s as F,i as G,w as S,g as E,a as H,f as j}from"./index.9558b4c9.js";import{b as c,j as o}from"./react-redux.e36c2f7f.js";import"./@reduxjs/toolkit.411cf859.js";import"./luxon.c9b36ce7.js";import"./localforage.bbc47bd3.js";/* empty css              */const W=m.div`
  height: 30vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 40vmin;
  }
`,P=m.div`
  width: 40vw;
  min-width: 480px;
  max-width: 540px;
`,U=m.div`
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
`,B=s=>{var e=s,{className:t,children:i}=e,a=r(e,["className","children"]);return o("button",d(u({className:`${t} button is-fullwidth my-2`},a),{children:i}))},x=s=>{var e=s,{className:t,children:i}=e,a=r(e,["className","children"]);return o(B,d(u({className:`${t} is-success`},a),{children:i}))},$=({onHandleLogin:t})=>{const i="google";return c(P,{className:"box p-5",children:[o(k,{className:"pt-2 pb-2"}),c(U,{children:[o("input",{type:"text",className:"input is-fullwidth my-2",placeholder:"Email",disabled:!0}),o("input",{type:"password",className:"input is-fullwidth my-2",placeholder:"Password",disabled:!0}),o(x,{onClick:async()=>{await j();const e={id:"test",name:"test",email:"test@test.com",picture:""};t({type:i,id:e==null?void 0:e.id,username:e==null?void 0:e.name,email:e==null?void 0:e.email,imgSrc:e==null?void 0:e.picture})},children:"\uB85C\uADF8\uC778"}),o(B,{disabled:!0,children:"\uD68C\uC6D0\uAC00\uC785"}),o("hr",{}),o(x,{onClick:async()=>{await E();const e=await H();t({type:i,id:e==null?void 0:e.id,username:e==null?void 0:e.name,email:e==null?void 0:e.email,imgSrc:e==null?void 0:e.picture})},children:"Google\uB85C \uB85C\uADF8\uC778"})]})]})};function Y(){const t=T(),i=v(),[a,s]=l.exports.useState(!1),[e,w]=l.exports.useState(void 0);l.exports.useMemo(()=>!!(e!=null&&e.email),[e]);const b=async p=>{await Promise.all([F(p),i(G())]),w(p),s(!0)};S().updateTitle("\uB85C\uADF8\uC778");const y="/dashboard";return l.exports.useEffect(()=>{a&&t(y,{replace:!0})},[a]),c(f,{className:"container is-fluid",children:[c(W,{children:[o(A,{className:"pb-3"}),o("h1",{className:"title pb-3",children:"\uBC18\uAC11\uC2B5\uB2C8\uB2E4"}),o("p",{className:"subtitle",children:"\uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."})]}),o($,{onHandleLogin:b})]})}export{Y as default};
