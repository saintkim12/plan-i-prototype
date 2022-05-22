var x=Object.defineProperty,N=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var p=(e,t,i)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,l=(e,t)=>{for(var i in t||(t={}))h.call(t,i)&&p(e,i,t[i]);if(u)for(var i of u(t))g.call(t,i)&&p(e,i,t[i]);return e},r=(e,t)=>N(e,f(t));var d=(e,t)=>{var i={};for(var s in e)h.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(e!=null&&u)for(var s of u(e))t.indexOf(s)<0&&g.call(e,s)&&(i[s]=e[s]);return i};import{r as y,N as L}from"./vendor.99fbd8bd.js";import{s as m}from"./styled-components.c5e6daad.js";import{s as D,f as T,C as v,L as A,w as F,g as j,a as E}from"./index.4816e40b.js";import{T as G}from"./title-light.6db1dac2.js";import{j as a,b as c}from"./react-redux.d536aec5.js";import"./@reduxjs/toolkit.411cf859.js";import"./luxon.c9b36ce7.js";import"./localforage.4f2affd0.js";/* empty css              */const S=m(e=>c("div",r(l({},e),{children:[a("img",{src:A,className:"pb-3"}),a("h1",{className:"title pb-3",children:"\uBC18\uAC11\uC2B5\uB2C8\uB2E4"}),a("p",{className:"subtitle",children:"\uC544\uC774\uB514\uC640 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."})]})))`
  height: 30vmin;
  @media screen and (max-width: 768px) {
    height: 40vmin;
  }
`,b=m(s=>{var n=s,{className:e,children:t}=n,i=d(n,["className","children"]);return a("button",r(l({className:`${e} button is-fullwidth my-2`},i),{children:t}))})``,C=m(s=>{var n=s,{className:e,children:t}=n,i=d(n,["className","children"]);return a(b,r(l({className:`${e} is-success`},i),{children:t}))})``,$=m(s=>{var n=s,{className:e,handleLogin:t}=n,i=d(n,["className","handleLogin"]);const B="google",w=async()=>{await j();const o=await E();t({type:B,id:o==null?void 0:o.id,username:o==null?void 0:o.name,email:o==null?void 0:o.email,imgSrc:o==null?void 0:o.picture})};return c("div",r(l({className:`box p-5 ${e}`},i),{children:[a("div",{className:"pt-2 pb-2",children:a("img",{src:G})}),c("div",{className:"button-wrap",children:[a("input",{type:"text",className:"input is-fullwidth my-2",placeholder:"Email",disabled:!0}),a("input",{type:"password",className:"input is-fullwidth my-2",placeholder:"Password",disabled:!0}),a(C,{disabled:!0,children:"\uB85C\uADF8\uC778"}),a(b,{disabled:!0,children:"\uD68C\uC6D0\uAC00\uC785"}),a("hr",{}),a(C,{onClick:w,children:"Google\uB85C \uB85C\uADF8\uC778"})]})]}))})`
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
`;class O extends y.exports.Component{constructor(t){super(t),this.state={logined:!1},F().updateTitle("\uB85C\uADF8\uC778")}get authenticated(){var t;return!!((t=this.state.authenticateInfo)!=null&&t.email)}async handleLogin(t){console.log("userInfo",t),await D(t),this.setState(i=>r(l({},i),{authenticateInfo:t,logined:!0}))}render(){const t="/dashboard";return T.cond([[()=>this.state.logined,()=>a(L,{to:t})],[()=>!0,()=>c(v,{className:"container is-fluid",children:[a(S,{}),a($,{handleLogin:this.handleLogin.bind(this)})]})]])()}}export{O as default};
