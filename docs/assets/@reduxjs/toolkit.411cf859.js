function j(e){for(var r=arguments.length,t=Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(t.length?" "+t.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function x(e){return!!e&&!!e[w]}function C(e){return!!e&&(function(r){if(!r||typeof r!="object")return!1;var t=Object.getPrototypeOf(r);if(t===null)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||typeof n=="function"&&Function.toString.call(n)===Xe}(e)||Array.isArray(e)||!!e[je]||!!e.constructor[je]||ce(e)||le(e))}function N(e,r,t){t===void 0&&(t=!1),F(e)===0?(t?Object.keys:W)(e).forEach(function(n){t&&typeof n=="symbol"||r(n,e[n],e)}):e.forEach(function(n,i){return r(i,n,e)})}function F(e){var r=e[w];return r?r.i>3?r.i-4:r.i:Array.isArray(e)?1:ce(e)?2:le(e)?3:0}function k(e,r){return F(e)===2?e.has(r):Object.prototype.hasOwnProperty.call(e,r)}function qe(e,r){return F(e)===2?e.get(r):e[r]}function xe(e,r,t){var n=F(e);n===2?e.set(r,t):n===3?(e.delete(r),e.add(t)):e[r]=t}function Ce(e,r){return e===r?e!==0||1/e==1/r:e!=e&&r!=r}function ce(e){return Be&&e instanceof Map}function le(e){return Ge&&e instanceof Set}function M(e){return e.o||e.t}function se(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var r=Ne(e);delete r[w];for(var t=W(r),n=0;n<t.length;n++){var i=t[n],o=r[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),r)}function de(e,r){return r===void 0&&(r=!1),ve(e)||x(e)||!C(e)||(F(e)>1&&(e.set=e.add=e.clear=e.delete=Le),Object.freeze(e),r&&N(e,function(t,n){return de(n,!0)},!0)),e}function Le(){j(2)}function ve(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function A(e){var r=fe[e];return r||j(18,e),r}function Ke(e,r){fe[e]||(fe[e]=r)}function ie(){return U}function Z(e,r){r&&(A("Patches"),e.u=[],e.s=[],e.v=r)}function B(e){ue(e),e.p.forEach(Ue),e.p=null}function ue(e){e===U&&(U=e.l)}function be(e){return U={p:[],l:U,h:e,m:!0,_:0}}function Ue(e){var r=e[w];r.i===0||r.i===1?r.j():r.O=!0}function Y(e,r){r._=r.p.length;var t=r.p[0],n=e!==void 0&&e!==t;return r.h.g||A("ES5").S(r,e,n),n?(t[w].P&&(B(r),j(4)),C(e)&&(e=G(r,e),r.l||X(r,e)),r.u&&A("Patches").M(t[w].t,e,r.u,r.s)):e=G(r,t,[]),B(r),r.u&&r.v(r.u,r.s),e!==Me?e:void 0}function G(e,r,t){if(ve(r))return r;var n=r[w];if(!n)return N(r,function(o,f){return ge(e,n,r,o,f,t)},!0),r;if(n.A!==e)return r;if(!n.P)return X(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=n.i===4||n.i===5?n.o=se(n.k):n.o;N(n.i===3?new Set(i):i,function(o,f){return ge(e,n,i,o,f,t)}),X(e,i,!1),t&&e.u&&A("Patches").R(n,t,e.u,e.s)}return n.o}function ge(e,r,t,n,i,o){if(x(i)){var f=G(e,i,o&&r&&r.i!==3&&!k(r.D,n)?o.concat(n):void 0);if(xe(t,n,f),!x(f))return;e.m=!1}if(C(i)&&!ve(i)){if(!e.h.F&&e._<1)return;G(e,i),r&&r.A.l||X(e,i)}}function X(e,r,t){t===void 0&&(t=!1),e.h.F&&e.m&&de(r,t)}function ee(e,r){var t=e[w];return(t?M(t):e)[r]}function me(e,r){if(r in e)for(var t=Object.getPrototypeOf(e);t;){var n=Object.getOwnPropertyDescriptor(t,r);if(n)return n;t=Object.getPrototypeOf(t)}}function R(e){e.P||(e.P=!0,e.l&&R(e.l))}function re(e){e.o||(e.o=se(e.t))}function ae(e,r,t){var n=ce(r)?A("MapSet").N(r,t):le(r)?A("MapSet").T(r,t):e.g?function(i,o){var f=Array.isArray(i),c={i:f?1:0,A:o?o.A:ie(),P:!1,I:!1,D:{},l:o,t:i,k:null,o:null,j:null,C:!1},u=c,a=z;f&&(u=[c],a=K);var l=Proxy.revocable(u,a),d=l.revoke,s=l.proxy;return c.k=s,c.j=d,s}(r,t):A("ES5").J(r,t);return(t?t.A:ie()).p.push(n),n}function ze(e){return x(e)||j(22,e),function r(t){if(!C(t))return t;var n,i=t[w],o=F(t);if(i){if(!i.P&&(i.i<4||!A("ES5").K(i)))return i.t;i.I=!0,n=we(t,o),i.I=!1}else n=we(t,o);return N(n,function(f,c){i&&qe(i.t,f)===c||xe(n,f,r(c))}),o===3?new Set(n):n}(e)}function we(e,r){switch(r){case 2:return new Map(e);case 3:return Array.from(e)}return se(e)}function Ve(){function e(o,f){var c=i[o];return c?c.enumerable=f:i[o]=c={configurable:!0,enumerable:f,get:function(){var u=this[w];return z.get(u,o)},set:function(u){var a=this[w];z.set(a,o,u)}},c}function r(o){for(var f=o.length-1;f>=0;f--){var c=o[f][w];if(!c.P)switch(c.i){case 5:n(c)&&R(c);break;case 4:t(c)&&R(c)}}}function t(o){for(var f=o.t,c=o.k,u=W(c),a=u.length-1;a>=0;a--){var l=u[a];if(l!==w){var d=f[l];if(d===void 0&&!k(f,l))return!0;var s=c[l],p=s&&s[w];if(p?p.t!==d:!Ce(s,d))return!0}}var h=!!f[w];return u.length!==W(f).length+(h?0:1)}function n(o){var f=o.k;if(f.length!==o.t.length)return!0;var c=Object.getOwnPropertyDescriptor(f,f.length-1);if(c&&!c.get)return!0;for(var u=0;u<f.length;u++)if(!f.hasOwnProperty(u))return!0;return!1}var i={};Ke("ES5",{J:function(o,f){var c=Array.isArray(o),u=function(l,d){if(l){for(var s=Array(d.length),p=0;p<d.length;p++)Object.defineProperty(s,""+p,e(p,!0));return s}var h=Ne(d);delete h[w];for(var v=W(h),y=0;y<v.length;y++){var b=v[y];h[b]=e(b,l||!!h[b].enumerable)}return Object.create(Object.getPrototypeOf(d),h)}(c,o),a={i:c?5:4,A:f?f.A:ie(),P:!1,I:!1,D:{},l:f,t:o,k:u,o:null,O:!1,C:!1};return Object.defineProperty(u,w,{value:a,writable:!0}),u},S:function(o,f,c){c?x(f)&&f[w].A===o&&r(o.p):(o.u&&function u(a){if(a&&typeof a=="object"){var l=a[w];if(l){var d=l.t,s=l.k,p=l.D,h=l.i;if(h===4)N(s,function(m){m!==w&&(d[m]!==void 0||k(d,m)?p[m]||u(s[m]):(p[m]=!0,R(l)))}),N(d,function(m){s[m]!==void 0||k(s,m)||(p[m]=!1,R(l))});else if(h===5){if(n(l)&&(R(l),p.length=!0),s.length<d.length)for(var v=s.length;v<d.length;v++)p[v]=!1;else for(var y=d.length;y<s.length;y++)p[y]=!0;for(var b=Math.min(s.length,d.length),g=0;g<b;g++)s.hasOwnProperty(g)||(p[g]=!0),p[g]===void 0&&u(s[g])}}}}(o.p[0]),r(o.p))},K:function(o){return o.i===4?t(o):n(o)}})}var Oe,U,pe=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",Be=typeof Map!="undefined",Ge=typeof Set!="undefined",Pe=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",Me=pe?Symbol.for("immer-nothing"):((Oe={})["immer-nothing"]=!0,Oe),je=pe?Symbol.for("immer-draftable"):"__$immer_draftable",w=pe?Symbol.for("immer-state"):"__$immer_state",Xe=""+Object.prototype.constructor,W=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Ne=Object.getOwnPropertyDescriptors||function(e){var r={};return W(e).forEach(function(t){r[t]=Object.getOwnPropertyDescriptor(e,t)}),r},fe={},z={get:function(e,r){if(r===w)return e;var t=M(e);if(!k(t,r))return function(i,o,f){var c,u=me(o,f);return u?"value"in u?u.value:(c=u.get)===null||c===void 0?void 0:c.call(i.k):void 0}(e,t,r);var n=t[r];return e.I||!C(n)?n:n===ee(e.t,r)?(re(e),e.o[r]=ae(e.A.h,n,e)):n},has:function(e,r){return r in M(e)},ownKeys:function(e){return Reflect.ownKeys(M(e))},set:function(e,r,t){var n=me(M(e),r);if(n!=null&&n.set)return n.set.call(e.k,t),!0;if(!e.P){var i=ee(M(e),r),o=i==null?void 0:i[w];if(o&&o.t===t)return e.o[r]=t,e.D[r]=!1,!0;if(Ce(t,i)&&(t!==void 0||k(e.t,r)))return!0;re(e),R(e)}return e.o[r]===t&&typeof t!="number"&&(t!==void 0||r in e.o)||(e.o[r]=t,e.D[r]=!0,!0)},deleteProperty:function(e,r){return ee(e.t,r)!==void 0||r in e.t?(e.D[r]=!1,re(e),R(e)):delete e.D[r],e.o&&delete e.o[r],!0},getOwnPropertyDescriptor:function(e,r){var t=M(e),n=Reflect.getOwnPropertyDescriptor(t,r);return n&&{writable:!0,configurable:e.i!==1||r!=="length",enumerable:n.enumerable,value:t[r]}},defineProperty:function(){j(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){j(12)}},K={};N(z,function(e,r){K[e]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}}),K.deleteProperty=function(e,r){return K.set.call(this,e,r,void 0)},K.set=function(e,r,t){return z.set.call(this,e[0],r,t,e[0])};var $e=function(){function e(t){var n=this;this.g=Pe,this.F=!0,this.produce=function(i,o,f){if(typeof i=="function"&&typeof o!="function"){var c=o;o=i;var u=n;return function(v){var y=this;v===void 0&&(v=c);for(var b=arguments.length,g=Array(b>1?b-1:0),m=1;m<b;m++)g[m-1]=arguments[m];return u.produce(v,function(S){var _;return(_=o).call.apply(_,[y,S].concat(g))})}}var a;if(typeof o!="function"&&j(6),f!==void 0&&typeof f!="function"&&j(7),C(i)){var l=be(n),d=ae(n,i,void 0),s=!0;try{a=o(d),s=!1}finally{s?B(l):ue(l)}return typeof Promise!="undefined"&&a instanceof Promise?a.then(function(v){return Z(l,f),Y(v,l)},function(v){throw B(l),v}):(Z(l,f),Y(a,l))}if(!i||typeof i!="object"){if((a=o(i))===void 0&&(a=i),a===Me&&(a=void 0),n.F&&de(a,!0),f){var p=[],h=[];A("Patches").M(i,a,p,h),f(p,h)}return a}j(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(a){for(var l=arguments.length,d=Array(l>1?l-1:0),s=1;s<l;s++)d[s-1]=arguments[s];return n.produceWithPatches(a,function(p){return i.apply(void 0,[p].concat(d))})};var f,c,u=n.produce(i,o,function(a,l){f=a,c=l});return typeof Promise!="undefined"&&u instanceof Promise?u.then(function(a){return[a,f,c]}):[u,f,c]},typeof(t==null?void 0:t.useProxies)=="boolean"&&this.setUseProxies(t.useProxies),typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze)}var r=e.prototype;return r.createDraft=function(t){C(t)||j(8),x(t)&&(t=ze(t));var n=be(this),i=ae(this,t,void 0);return i[w].C=!0,ue(n),i},r.finishDraft=function(t,n){var i=t&&t[w],o=i.A;return Z(o,n),Y(void 0,o)},r.setAutoFreeze=function(t){this.F=t},r.setUseProxies=function(t){t&&!Pe&&j(20),this.g=t},r.applyPatches=function(t,n){var i;for(i=n.length-1;i>=0;i--){var o=n[i];if(o.path.length===0&&o.op==="replace"){t=o.value;break}}i>-1&&(n=n.slice(i+1));var f=A("Patches").$;return x(t)?f(t,n):this.produce(t,function(c){return f(c,n)})},e}(),P=new $e,Je=P.produce;P.produceWithPatches.bind(P);P.setAutoFreeze.bind(P);P.setUseProxies.bind(P);P.applyPatches.bind(P);P.createDraft.bind(P);P.finishDraft.bind(P);var V=Je;function He(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Ee(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Ae(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ee(Object(t),!0).forEach(function(n){He(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ee(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function O(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var _e=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),te=function(){return Math.random().toString(36).substring(7).split("").join(".")},$={INIT:"@@redux/INIT"+te(),REPLACE:"@@redux/REPLACE"+te(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+te()}};function Qe(e){if(typeof e!="object"||e===null)return!1;for(var r=e;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r}function Te(e,r,t){var n;if(typeof r=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(O(0));if(typeof r=="function"&&typeof t=="undefined"&&(t=r,r=void 0),typeof t!="undefined"){if(typeof t!="function")throw new Error(O(1));return t(Te)(e,r)}if(typeof e!="function")throw new Error(O(2));var i=e,o=r,f=[],c=f,u=!1;function a(){c===f&&(c=f.slice())}function l(){if(u)throw new Error(O(3));return o}function d(v){if(typeof v!="function")throw new Error(O(4));if(u)throw new Error(O(5));var y=!0;return a(),c.push(v),function(){if(!!y){if(u)throw new Error(O(6));y=!1,a();var g=c.indexOf(v);c.splice(g,1),f=null}}}function s(v){if(!Qe(v))throw new Error(O(7));if(typeof v.type=="undefined")throw new Error(O(8));if(u)throw new Error(O(9));try{u=!0,o=i(o,v)}finally{u=!1}for(var y=f=c,b=0;b<y.length;b++){var g=y[b];g()}return v}function p(v){if(typeof v!="function")throw new Error(O(10));i=v,s({type:$.REPLACE})}function h(){var v,y=d;return v={subscribe:function(g){if(typeof g!="object"||g===null)throw new Error(O(11));function m(){g.next&&g.next(l())}m();var S=y(m);return{unsubscribe:S}}},v[_e]=function(){return this},v}return s({type:$.INIT}),n={dispatch:s,subscribe:d,getState:l,replaceReducer:p},n[_e]=h,n}function Ze(e){Object.keys(e).forEach(function(r){var t=e[r],n=t(void 0,{type:$.INIT});if(typeof n=="undefined")throw new Error(O(12));if(typeof t(void 0,{type:$.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(O(13))})}function Ye(e){for(var r=Object.keys(e),t={},n=0;n<r.length;n++){var i=r[n];typeof e[i]=="function"&&(t[i]=e[i])}var o=Object.keys(t),f;try{Ze(t)}catch(c){f=c}return function(u,a){if(u===void 0&&(u={}),f)throw f;for(var l=!1,d={},s=0;s<o.length;s++){var p=o[s],h=t[p],v=u[p],y=h(v,a);if(typeof y=="undefined")throw a&&a.type,new Error(O(14));d[p]=y,l=l||y!==v}return l=l||o.length!==Object.keys(u).length,l?d:u}}function J(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.length===0?function(n){return n}:r.length===1?r[0]:r.reduce(function(n,i){return function(){return n(i.apply(void 0,arguments))}})}function er(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){return function(){var i=n.apply(void 0,arguments),o=function(){throw new Error(O(15))},f={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},c=r.map(function(u){return u(f)});return o=J.apply(void 0,c)(i.dispatch),Ae(Ae({},i),{},{dispatch:o})}}}function ke(e){var r=function(n){var i=n.dispatch,o=n.getState;return function(f){return function(c){return typeof c=="function"?c(i,o,e):f(c)}}};return r}var We=ke();We.withExtraArgument=ke;var Se=We,rr=globalThis&&globalThis.__extends||function(){var e=function(r,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},e(r,t)};return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),tr=globalThis&&globalThis.__generator||function(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,f;return f={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function c(a){return function(l){return u([a,l])}}function u(a){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,i&&(o=a[0]&2?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return t.label++,{value:a[1],done:!1};case 5:t.label++,i=a[1],a=[0];continue;case 7:a=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){t.label=a[1];break}if(a[0]===6&&t.label<o[1]){t.label=o[1],o=a;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(a);break}o[2]&&t.ops.pop(),t.trys.pop();continue}a=r.call(e,t)}catch(l){a=[6,l],i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},H=globalThis&&globalThis.__spreadArray||function(e,r){for(var t=0,n=r.length,i=e.length;t<n;t++,i++)e[i]=r[t];return e},nr=Object.defineProperty,or=Object.defineProperties,ir=Object.getOwnPropertyDescriptors,Re=Object.getOwnPropertySymbols,ur=Object.prototype.hasOwnProperty,ar=Object.prototype.propertyIsEnumerable,De=function(e,r,t){return r in e?nr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},D=function(e,r){for(var t in r||(r={}))ur.call(r,t)&&De(e,t,r[t]);if(Re)for(var n=0,i=Re(r);n<i.length;n++){var t=i[n];ar.call(r,t)&&De(e,t,r[t])}return e},ne=function(e,r){return or(e,ir(r))},fr=function(e,r,t){return new Promise(function(n,i){var o=function(u){try{c(t.next(u))}catch(a){i(a)}},f=function(u){try{c(t.throw(u))}catch(a){i(a)}},c=function(u){return u.done?n(u.value):Promise.resolve(u.value).then(o,f)};c((t=t.apply(e,r)).next())})},cr=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?J:J.apply(null,arguments)};function lr(e){if(typeof e!="object"||e===null)return!1;var r=Object.getPrototypeOf(e);if(r===null)return!0;for(var t=r;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return r===t}var sr=function(e){rr(r,e);function r(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=e.apply(this,t)||this;return Object.setPrototypeOf(i,r.prototype),i}return Object.defineProperty(r,Symbol.species,{get:function(){return r},enumerable:!1,configurable:!0}),r.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},r.prototype.prepend=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.length===1&&Array.isArray(t[0])?new(r.bind.apply(r,H([void 0],t[0].concat(this)))):new(r.bind.apply(r,H([void 0],t.concat(this))))},r}(Array);function dr(e){return typeof e=="boolean"}function vr(){return function(r){return pr(r)}}function pr(e){e===void 0&&(e={});var r=e.thunk,t=r===void 0?!0:r;e.immutableCheck,e.serializableCheck;var n=new sr;return t&&(dr(t)?n.push(Se):n.push(Se.withExtraArgument(t.extraArgument))),n}var hr=!0;function Ar(e){var r=vr(),t=e||{},n=t.reducer,i=n===void 0?void 0:n,o=t.middleware,f=o===void 0?r():o,c=t.devTools,u=c===void 0?!0:c,a=t.preloadedState,l=a===void 0?void 0:a,d=t.enhancers,s=d===void 0?void 0:d,p;if(typeof i=="function")p=i;else if(lr(i))p=Ye(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=f;typeof h=="function"&&(h=h(r));var v=er.apply(void 0,h),y=J;u&&(y=cr(D({trace:!hr},typeof u=="object"&&u)));var b=[v];Array.isArray(s)?b=H([v],s):typeof s=="function"&&(b=s(b));var g=y.apply(void 0,b);return Te(p,l,g)}function I(e,r){function t(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];if(r){var o=r.apply(void 0,n);if(!o)throw new Error("prepareAction did not return an object");return D(D({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:n[0]}}return t.toString=function(){return""+e},t.type=e,t.match=function(n){return n.type===e},t}function Fe(e){var r={},t=[],n,i={addCase:function(o,f){var c=typeof o=="string"?o:o.type;if(c in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[c]=f,i},addMatcher:function(o,f){return t.push({matcher:o,reducer:f}),i},addDefaultCase:function(o){return n=o,i}};return e(i),[r,t,n]}function yr(e){return typeof e=="function"}function br(e,r,t,n){t===void 0&&(t=[]);var i=typeof r=="function"?Fe(r):[r,t,n],o=i[0],f=i[1],c=i[2],u;if(yr(e))u=function(){return V(e(),function(){})};else{var a=V(e,function(){});u=function(){return a}}function l(d,s){d===void 0&&(d=u());var p=H([o[s.type]],f.filter(function(h){var v=h.matcher;return v(s)}).map(function(h){var v=h.reducer;return v}));return p.filter(function(h){return!!h}).length===0&&(p=[c]),p.reduce(function(h,v){if(v)if(x(h)){var y=h,b=v(y,s);return typeof b=="undefined"?h:b}else{if(C(h))return V(h,function(g){return v(g,s)});var b=v(h,s);if(typeof b=="undefined"){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return b}return h},d)}return l.getInitialState=u,l}function gr(e,r){return e+"/"+r}function _r(e){var r=e.name;if(!r)throw new Error("`name` is a required option for createSlice");var t=typeof e.initialState=="function"?e.initialState:V(e.initialState,function(){}),n=e.reducers||{},i=Object.keys(n),o={},f={},c={};i.forEach(function(l){var d=n[l],s=gr(r,l),p,h;"reducer"in d?(p=d.reducer,h=d.prepare):p=d,o[l]=p,f[s]=p,c[l]=h?I(s,h):I(s)});function u(){var l=typeof e.extraReducers=="function"?Fe(e.extraReducers):[e.extraReducers],d=l[0],s=d===void 0?{}:d,p=l[1],h=p===void 0?[]:p,v=l[2],y=v===void 0?void 0:v,b=D(D({},s),f);return br(t,b,h,y)}var a;return{name:r,reducer:function(l,d){return a||(a=u()),a(l,d)},actions:c,caseReducers:o,getInitialState:function(){return a||(a=u()),a.getInitialState()}}}var mr="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",wr=function(e){e===void 0&&(e=21);for(var r="",t=e;t--;)r+=mr[Math.random()*64|0];return r},Or=["name","message","stack","code"],oe=function(){function e(r,t){this.payload=r,this.meta=t}return e}(),Ie=function(){function e(r,t){this.payload=r,this.meta=t}return e}(),Pr=function(e){if(typeof e=="object"&&e!==null){for(var r={},t=0,n=Or;t<n.length;t++){var i=n[t];typeof e[i]=="string"&&(r[i]=e[i])}return r}return{message:String(e)}};function Sr(e,r,t){var n=I(e+"/fulfilled",function(u,a,l,d){return{payload:u,meta:ne(D({},d||{}),{arg:l,requestId:a,requestStatus:"fulfilled"})}}),i=I(e+"/pending",function(u,a,l){return{payload:void 0,meta:ne(D({},l||{}),{arg:a,requestId:u,requestStatus:"pending"})}}),o=I(e+"/rejected",function(u,a,l,d,s){return{payload:d,error:(t&&t.serializeError||Pr)(u||"Rejected"),meta:ne(D({},s||{}),{arg:l,requestId:a,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),f=typeof AbortController!="undefined"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){}}}return u.prototype.abort=function(){},u}();function c(u){return function(a,l,d){var s=t!=null&&t.idGenerator?t.idGenerator(u):wr(),p=new f,h,v=new Promise(function(m,S){return p.signal.addEventListener("abort",function(){return S({name:"AbortError",message:h||"Aborted"})})}),y=!1;function b(m){y&&(h=m,p.abort())}var g=function(){return fr(this,null,function(){var m,S,_,q,L,ye;return tr(this,function(T){switch(T.label){case 0:return T.trys.push([0,4,,5]),q=(m=t==null?void 0:t.condition)==null?void 0:m.call(t,u,{getState:l,extra:d}),Er(q)?[4,q]:[3,2];case 1:q=T.sent(),T.label=2;case 2:if(q===!1)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return y=!0,a(i(s,u,(S=t==null?void 0:t.getPendingMeta)==null?void 0:S.call(t,{requestId:s,arg:u},{getState:l,extra:d}))),[4,Promise.race([v,Promise.resolve(r(u,{dispatch:a,getState:l,extra:d,requestId:s,signal:p.signal,rejectWithValue:function(E,Q){return new oe(E,Q)},fulfillWithValue:function(E,Q){return new Ie(E,Q)}})).then(function(E){if(E instanceof oe)throw E;return E instanceof Ie?n(E.payload,s,u,E.meta):n(E,s,u)})])];case 3:return _=T.sent(),[3,5];case 4:return L=T.sent(),_=L instanceof oe?o(null,s,u,L.payload,L.meta):o(L,s,u),[3,5];case 5:return ye=t&&!t.dispatchConditionRejection&&o.match(_)&&_.meta.condition,ye||a(_),[2,_]}})})}();return Object.assign(g,{abort:b,requestId:s,arg:u,unwrap:function(){return g.then(jr)}})}}return Object.assign(c,{pending:i,rejected:o,fulfilled:n,typePrefix:e})}function jr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Er(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var he="listenerMiddleware";I(he+"/add");I(he+"/removeAll");I(he+"/remove");Ve();export{_r as a,Ar as b,Sr as c};
