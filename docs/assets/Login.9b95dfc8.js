var y=Object.defineProperty,v=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var x=(t,e,i)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,l=(t,e)=>{for(var i in e||(e={}))B.call(e,i)&&x(t,i,e[i]);if(r)for(var i of r(e))b.call(e,i)&&x(t,i,e[i]);return t},u=(t,e)=>v(t,D(e));var c=(t,e)=>{var i={};for(var a in t)B.call(t,a)&&e.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&r)for(var a of r(t))e.indexOf(a)<0&&b.call(t,a)&&(i[a]=t[a]);return i};import{u as L,r as d}from"./vendor.99fbd8bd.js";import{s as p}from"./styled-components.c5e6daad.js";import{u as T,C as A,L as E,w as F,s as S,i as j,g as G,a as $}from"./index.62d43b71.js";import{T as k}from"./title-light.6db1dac2.js";import{b as m,j as s}from"./react-redux.d536aec5.js";import"./@reduxjs/toolkit.411cf859.js";import"./luxon.c9b36ce7.js";import"./localforage.4f2affd0.js";/* empty css              */const P=p(t=>m("div",u(l({},t),{children:[s("img",{src:E,className:"pb-3"}),s("h1",{className:"title pb-3",children:"\uBC18\uAC11\uC2B5\uB2C8\uB2E4"}),s("p",{className:"subtitle",children:"\uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."})]})))`
  height: 30vmin;
  @media screen and (max-width: 768px) {
    height: 40vmin;
  }
`,f=p(a=>{var n=a,{className:t,children:e}=n,i=c(n,["className","children"]);return s("button",u(l({className:`${t} button is-fullwidth my-2`},i),{children:e}))})``,w=p(a=>{var n=a,{className:t,children:e}=n,i=c(n,["className","children"]);return s(f,u(l({className:`${t} is-success`},i),{children:e}))})``,U=p(a=>{var n=a,{className:t,handleLogin:e}=n,i=c(n,["className","handleLogin"]);const h="google",C=async()=>{await G();const o=await $();e({type:h,id:o==null?void 0:o.id,username:o==null?void 0:o.name,email:o==null?void 0:o.email,imgSrc:o==null?void 0:o.picture})};return m("div",u(l({className:`box p-5 ${t}`},i),{children:[s("div",{className:"pt-2 pb-2",children:s("img",{src:k})}),m("div",{className:"button-wrap",children:[s("input",{type:"text",className:"input is-fullwidth my-2",placeholder:"Email",disabled:!0}),s("input",{type:"password",className:"input is-fullwidth my-2",placeholder:"Password",disabled:!0}),s(w,{disabled:!0,children:"\uB85C\uADF8\uC778"}),s(f,{disabled:!0,children:"\uD68C\uC6D0\uAC00\uC785"}),s("hr",{}),s(w,{onClick:C,children:"Google\uB85C \uB85C\uADF8\uC778"})]})]}))})`
  width: 40vw;
  min-width: 480px;
  max-width: 540px;
  .button-wrap {
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
  }
`;function V(){const t=L(),e=T(),[i,a]=d.exports.useState(!1),[n,h]=d.exports.useState(void 0);F().updateTitle("\uB85C\uADF8\uC778"),d.exports.useMemo(()=>!!(n!=null&&n.email),[n]);const o=async g=>{console.log("userInfo",g),await Promise.all([S(g),e(j())]),h(g),a(!0)},N="/dashboard";return d.exports.useEffect(()=>{i&&t(N,{replace:!0})},[i]),m(A,{className:"container is-fluid",children:[s(P,{}),s(U,{handleLogin:o})]})}export{V as default};
