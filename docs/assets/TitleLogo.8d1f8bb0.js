var e=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var a=(o,i)=>{var r={};for(var t in o)p.call(o,t)&&i.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&e)for(var t of e(o))i.indexOf(t)<0&&L.call(o,t)&&(r[t]=o[t]);return r};import{f as d,L as g}from"./index.4816e40b.js";import{T as c}from"./logo-dark.efc04044.js";import{T as l}from"./title-light.6db1dac2.js";import{b as j,j as f}from"./react-redux.d536aec5.js";function b(r){var t=r,{className:o}=t,i=a(t,["className"]);var m;const h=(m=i.theme)!=null?m:"light",[n,T]=d.cond([[s=>s==="dark",()=>[c,c]],[s=>s==="light",()=>[g,l]],[()=>!0,()=>[g,l]]])(h);return j("div",{className:`${o}`,children:[f("img",{src:n}),f("img",{src:T})]})}export{b as T};
