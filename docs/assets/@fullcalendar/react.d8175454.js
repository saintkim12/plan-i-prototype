import{_ as p,a4 as c,a5 as m,a6 as u,d,a7 as x}from"./core.b406b53c.js";import{r as e,a as o}from"../vendor.d5a3e04d.js";(typeof globalThis!="undefined"?globalThis:window).FullCalendarVDom={Component:e.exports.Component,createElement:e.exports.createElement,render:o.exports.render,createRef:e.exports.createRef,Fragment:e.exports.Fragment,createContext:e.exports.createContext,createPortal:o.exports.createPortal,flushSync:f,unmountComponentAtNode:o.exports.unmountComponentAtNode};function f(r){r()}var C=function(r){p(n,r);function n(){var t=r!==null&&r.apply(this,arguments)||this;return t._calendarApi=new x,t}return n.prototype.render=function(){return e.exports.createElement(c,{optionOverrides:this.props,calendarApi:this._calendarApi},function(t){return e.exports.createElement(m,{options:t.calendarOptions,theme:t.theme,emitter:t.emitter},function(a,s,l,i){return e.exports.createElement("div",{className:a.join(" "),style:{height:s}},e.exports.createElement(u,d({isHeightAuto:l,forPrint:i},t)))})})},n.prototype.getApi=function(){return this._calendarApi},n}(e.exports.Component),A=C;export{A as F};