import{r as R,b as d,L as c,B as P,R as E,d as a,e as O}from"./vendor.3dc33d0f.js";const L=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}};L();var f={},m=R.exports;f.createRoot=m.createRoot,f.hydrateRoot=m.hydrateRoot;const S="modulepreload",y={},b="/plan-i-prototype/",_=function(o,l){return!l||l.length===0?o():Promise.all(l.map(t=>{if(t=`${b}${t}`,t in y)return;y[t]=!0;const e=t.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${n}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":S,e||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),e)return new Promise((v,x)=>{s.addEventListener("load",v),s.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>o())};var A="/plan-i-prototype/assets/logo.ecc203fb.svg",u={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=d.exports,j=Symbol.for("react.element"),k=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,w=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function g(i,o,l){var t,e={},n=null,s=null;l!==void 0&&(n=""+l),o.key!==void 0&&(n=""+o.key),o.ref!==void 0&&(s=o.ref);for(t in o)N.call(o,t)&&!B.hasOwnProperty(t)&&(e[t]=o[t]);if(i&&i.defaultProps)for(t in o=i.defaultProps,o)e[t]===void 0&&(e[t]=o[t]);return{$$typeof:j,type:i,key:n,ref:s,props:e,_owner:w.current}}p.Fragment=k;p.jsx=g;p.jsxs=g;u.exports=p;const r=u.exports.jsx,h=u.exports.jsxs,q=u.exports.Fragment;function C(){return r("div",{className:"App",children:h("header",{className:"App-header",children:[r("img",{src:A,className:"App-logo",alt:"logo"}),h("p",{children:[r(c,{to:"/a",children:"PageA"})," | ",r(c,{to:"/b",children:"PageB"})," | ",r(c,{to:"/schedule",children:"Schedule"})," | ",r(c,{to:"/chat",children:"Chat"})]})]})})}function I(){return r("div",{children:"PageA"})}function F(){return r("div",{children:"PageB"})}function T(){const i=d.exports.lazy(()=>_(()=>import("./Schedule.6b1b3ec8.js"),["assets/Schedule.6b1b3ec8.js","assets/Schedule.f1fa4c23.css","assets/localforage.97259168.js","assets/vendor.3dc33d0f.js","assets/luxon.c9b36ce7.js","assets/@fullcalendar/core.5424d18e.js","assets/@fullcalendar/core.e1767599.css","assets/@fullcalendar/timegrid.2a65d2c0.js","assets/@fullcalendar/timegrid.7f58dde3.css","assets/@fullcalendar/daygrid.9d23094f.js","assets/@fullcalendar/daygrid.36ef3dd5.css","assets/@fullcalendar/list.19e07833.js","assets/@fullcalendar/list.4bdba339.css"])),o=d.exports.lazy(()=>_(()=>import("./Chat.3592b713.js"),["assets/Chat.3592b713.js","assets/Chat.8aa37e0f.css","assets/vendor.3dc33d0f.js","assets/hangul-search-js.3f36a4c6.js"]));return r(P,{basename:"/plan-i-prototype/",children:r(d.exports.Suspense,{children:h(E,{children:[r(a,{path:"/",element:r(C,{})}),r(a,{path:"/a",element:r(I,{})}),r(a,{path:"/b",element:r(F,{})}),r(a,{path:"/schedule",element:r(i,{})}),r(a,{path:"/chat",element:r(o,{})}),r(a,{path:"*",element:r("main",{style:{padding:"1rem"},children:r("p",{children:"There's nothing here!"})})})]})})})}f.createRoot(document.getElementById("root")).render(r(O.StrictMode,{children:r(T,{})}));export{q as F,r as a,h as j};
