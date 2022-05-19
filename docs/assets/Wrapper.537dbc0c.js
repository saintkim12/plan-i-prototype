var m=Object.defineProperty,g=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var c=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))i.call(t,r)&&c(e,r,t[r]);return e},l=(e,t)=>g(e,v(t));var d=(e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&s)for(var n of s(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r};import{s as a}from"./styled-components.c5e6daad.js";import{j as f}from"./react-redux.d536aec5.js";const h=`
  height: 100vh;
  min-height: 100vh;
  background-color: #E5E5E5;
`,x=`
  /* child h-center */
  text-align: center;
  margin: auto;
`,W=`
  display: flex;
  /* v-center */
  flex-direction: column;
  align-items: center;
  /* h-center */
  justify-content: center;
`,u=a.div`
  ${h}
`,y=a.div`
  ${h}
  ${x}
  ${W}
`,E=a(r=>{var n=r,{children:e}=n,t=d(n,["children"]);return f(u,l(p({},t),{children:e}))});var b=y;export{u as B,E as S,b as W};
