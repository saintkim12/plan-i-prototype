import{_ as R,a4 as ve,e as W,c as l,d as S,g as Y,V as _,S as he,a as me,N as re,a5 as U,r as Q,Y as q,P as ne,M as ge,F as L,j as O,K as X,f as ye,D as Se,l as Re,a6 as Ce,a7 as xe,q as be,B as we,t as De,a8 as z,a9 as ke,L as Ee,w as Te,A as Ne,aa as Me,ab as Pe,H as D,C as k,ac as Ie,b as He,W as We,G as j,R as oe,I as x,s as Le,ad as V,O as Ae,Q as Fe,T as Be,ae as Ge,a2 as Z,af as M,ag as A,o as Oe,ah as ze,m as ae,ai as Ue,aj as qe,ak as je}from"../fullcalendar.73329d1f.js";import{D as Ve}from"./daygrid.443364c4.js";/*!
FullCalendar v5.10.2
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/var Ke=function(o){R(n,o);function n(){return o!==null&&o.apply(this,arguments)||this}return n.prototype.getKeyInfo=function(){return{allDay:{},timed:{}}},n.prototype.getKeysForDateSpan=function(e){return e.allDay?["allDay"]:["timed"]},n.prototype.getKeysForEventDef=function(e){return e.allDay?ve(e)?["timed","allDay"]:["allDay"]:["timed"]},n}(Me),Ye=W({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"short"});function ie(o){var n=["fc-timegrid-slot","fc-timegrid-slot-label",o.isLabeled?"fc-scrollgrid-shrink":"fc-timegrid-slot-minor"];return l(Pe.Consumer,null,function(e){if(!o.isLabeled)return l("td",{className:n.join(" "),"data-time":o.isoTimeStr});var r=e.dateEnv,t=e.options,i=e.viewApi,a=t.slotLabelFormat==null?Ye:Array.isArray(t.slotLabelFormat)?W(t.slotLabelFormat[0]):W(t.slotLabelFormat),s={level:0,time:o.time,date:r.toDate(o.date),view:i,text:r.format(o.date,a)};return l(q,{hookProps:s,classNames:t.slotLabelClassNames,content:t.slotLabelContent,defaultContent:_e,didMount:t.slotLabelDidMount,willUnmount:t.slotLabelWillUnmount},function(d,c,u,f){return l("td",{ref:d,className:n.concat(c).join(" "),"data-time":o.isoTimeStr},l("div",{className:"fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"},l("div",{className:"fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",ref:u},f)))})})}function _e(o){return o.text}var Qe=function(o){R(n,o);function n(){return o!==null&&o.apply(this,arguments)||this}return n.prototype.render=function(){return this.props.slatMetas.map(function(e){return l("tr",{key:e.key},l(ie,S({},e)))})},n}(D),Xe=W({week:"short"}),Ze=5,$e=function(o){R(n,o);function n(){var e=o!==null&&o.apply(this,arguments)||this;return e.allDaySplitter=new Ke,e.headerElRef=k(),e.rootElRef=k(),e.scrollerElRef=k(),e.state={slatCoords:null},e.handleScrollTopRequest=function(r){var t=e.scrollerElRef.current;t&&(t.scrollTop=r)},e.renderHeadAxis=function(r,t){t===void 0&&(t="");var i=e.context.options,a=e.props.dateProfile,s=a.renderRange,d=Ie(s.start,s.end),c=d===1?He(e.context,s.start,"week"):{};return i.weekNumbers&&r==="day"?l(We,{date:s.start,defaultFormat:Xe},function(u,f,p,v){return l("th",{ref:u,"aria-hidden":!0,className:["fc-timegrid-axis","fc-scrollgrid-shrink"].concat(f).join(" ")},l("div",{className:"fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",style:{height:t}},l("a",S({ref:p,className:"fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner"},c),v)))}):l("th",{"aria-hidden":!0,className:"fc-timegrid-axis"},l("div",{className:"fc-timegrid-axis-frame",style:{height:t}}))},e.renderTableRowAxis=function(r){var t=e.context,i=t.options,a=t.viewApi,s={text:i.allDayText,view:a};return l(q,{hookProps:s,classNames:i.allDayClassNames,content:i.allDayContent,defaultContent:Je,didMount:i.allDayDidMount,willUnmount:i.allDayWillUnmount},function(d,c,u,f){return l("td",{ref:d,"aria-hidden":!0,className:["fc-timegrid-axis","fc-scrollgrid-shrink"].concat(c).join(" ")},l("div",{className:"fc-timegrid-axis-frame fc-scrollgrid-shrink-frame"+(r==null?" fc-timegrid-axis-frame-liquid":""),style:{height:r}},l("span",{className:"fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",ref:u},f)))})},e.handleSlatCoords=function(r){e.setState({slatCoords:r})},e}return n.prototype.renderSimpleLayout=function(e,r,t){var i=this,a=i.context,s=i.props,d=[],c=Y(a.options);return e&&d.push({type:"header",key:"header",isSticky:c,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),r&&(d.push({type:"body",key:"all-day",chunk:{content:r}}),d.push({type:"body",key:"all-day-divider",outerContent:l("tr",{role:"presentation",className:"fc-scrollgrid-section"},l("td",{className:"fc-timegrid-divider "+a.theme.getClass("tableCellShaded")}))})),d.push({type:"body",key:"body",liquid:!0,expandRows:Boolean(a.options.expandRows),chunk:{scrollerElRef:this.scrollerElRef,content:t}}),l(_,{viewSpec:a.viewSpec,elRef:this.rootElRef},function(u,f){return l("div",{className:["fc-timegrid"].concat(f).join(" "),ref:u},l(he,{liquid:!s.isHeightAuto&&!s.forPrint,collapsibleWidth:s.forPrint,cols:[{width:"shrink"}],sections:d}))})},n.prototype.renderHScrollLayout=function(e,r,t,i,a,s,d){var c=this,u=this.context.pluginHooks.scrollGridImpl;if(!u)throw new Error("No ScrollGrid implementation");var f=this,p=f.context,v=f.props,y=!v.forPrint&&Y(p.options),m=!v.forPrint&&me(p.options),h=[];e&&h.push({type:"header",key:"header",isSticky:y,syncRowHeights:!0,chunks:[{key:"axis",rowContent:function(g){return l("tr",{role:"presentation"},c.renderHeadAxis("day",g.rowSyncHeights[0]))}},{key:"cols",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),r&&(h.push({type:"body",key:"all-day",syncRowHeights:!0,chunks:[{key:"axis",rowContent:function(g){return l("tr",{role:"presentation"},c.renderTableRowAxis(g.rowSyncHeights[0]))}},{key:"cols",content:r}]}),h.push({key:"all-day-divider",type:"body",outerContent:l("tr",{role:"presentation",className:"fc-scrollgrid-section"},l("td",{colSpan:2,className:"fc-timegrid-divider "+p.theme.getClass("tableCellShaded")}))}));var C=p.options.nowIndicator;return h.push({type:"body",key:"body",liquid:!0,expandRows:Boolean(p.options.expandRows),chunks:[{key:"axis",content:function(g){return l("div",{className:"fc-timegrid-axis-chunk"},l("table",{"aria-hidden":!0,style:{height:g.expandRows?g.clientHeight:""}},g.tableColGroupNode,l("tbody",null,l(Qe,{slatMetas:s}))),l("div",{className:"fc-timegrid-now-indicator-container"},l(re,{unit:C?"minute":"day"},function(w){var E=C&&d&&d.safeComputeTop(w);return typeof E=="number"?l(U,{isAxis:!0,date:w},function(T,P,I,N){return l("div",{ref:T,className:["fc-timegrid-now-indicator-arrow"].concat(P).join(" "),style:{top:E}},N)}):null})))}},{key:"cols",scrollerElRef:this.scrollerElRef,content:t}]}),m&&h.push({key:"footer",type:"footer",isSticky:!0,chunks:[{key:"axis",content:Q},{key:"cols",content:Q}]}),l(_,{viewSpec:p.viewSpec,elRef:this.rootElRef},function(g,w){return l("div",{className:["fc-timegrid"].concat(w).join(" "),ref:g},l(u,{liquid:!v.isHeightAuto&&!v.forPrint,collapsibleWidth:!1,colGroups:[{width:"shrink",cols:[{width:"shrink"}]},{cols:[{span:i,minWidth:a}]}],sections:h}))})},n.prototype.getAllDayMaxEventProps=function(){var e=this.context.options,r=e.dayMaxEvents,t=e.dayMaxEventRows;return(r===!0||t===!0)&&(r=void 0,t=Ze),{dayMaxEvents:r,dayMaxEventRows:t}},n}(j);function Je(o){return o.text}var et=function(){function o(n,e,r){this.positions=n,this.dateProfile=e,this.slotDuration=r}return o.prototype.safeComputeTop=function(n){var e=this.dateProfile;if(Ge(e.currentRange,n)){var r=Z(n),t=n.valueOf()-r.valueOf();if(t>=M(e.slotMinTime)&&t<M(e.slotMaxTime))return this.computeTimeTop(A(t))}return null},o.prototype.computeDateTop=function(n,e){return e||(e=Z(n)),this.computeTimeTop(A(n.valueOf()-e.valueOf()))},o.prototype.computeTimeTop=function(n){var e=this,r=e.positions,t=e.dateProfile,i=r.els.length,a=(n.milliseconds-M(t.slotMinTime))/M(this.slotDuration),s,d;return a=Math.max(0,a),a=Math.min(i,a),s=Math.floor(a),s=Math.min(s,i-1),d=a-s,r.tops[s]+r.getHeight(s)*d},o}(),tt=function(o){R(n,o);function n(){return o!==null&&o.apply(this,arguments)||this}return n.prototype.render=function(){var e=this,r=e.props,t=e.context,i=t.options,a=r.slatElRefs;return l("tbody",null,r.slatMetas.map(function(s,d){var c={time:s.time,date:t.dateEnv.toDate(s.date),view:t.viewApi},u=["fc-timegrid-slot","fc-timegrid-slot-lane",s.isLabeled?"":"fc-timegrid-slot-minor"];return l("tr",{key:s.key,ref:a.createRef(s.key)},r.axis&&l(ie,S({},s)),l(q,{hookProps:c,classNames:i.slotLaneClassNames,content:i.slotLaneContent,didMount:i.slotLaneDidMount,willUnmount:i.slotLaneWillUnmount},function(f,p,v,y){return l("td",{ref:f,className:u.concat(p).join(" "),"data-time":s.isoTimeStr},y)}))}))},n}(D),rt=function(o){R(n,o);function n(){var e=o!==null&&o.apply(this,arguments)||this;return e.rootElRef=k(),e.slatElRefs=new oe,e}return n.prototype.render=function(){var e=this,r=e.props,t=e.context;return l("div",{ref:this.rootElRef,className:"fc-timegrid-slots"},l("table",{"aria-hidden":!0,className:t.theme.getClass("table"),style:{minWidth:r.tableMinWidth,width:r.clientWidth,height:r.minHeight}},r.tableColGroupNode,l(tt,{slatElRefs:this.slatElRefs,axis:r.axis,slatMetas:r.slatMetas})))},n.prototype.componentDidMount=function(){this.updateSizing()},n.prototype.componentDidUpdate=function(){this.updateSizing()},n.prototype.componentWillUnmount=function(){this.props.onCoords&&this.props.onCoords(null)},n.prototype.updateSizing=function(){var e=this,r=e.context,t=e.props;if(t.onCoords&&t.clientWidth!==null){var i=this.rootElRef.current;i.offsetHeight&&t.onCoords(new et(new ne(this.rootElRef.current,nt(this.slatElRefs.currentMap,t.slatMetas),!1,!0),this.props.dateProfile,r.options.slotDuration))}},n}(D);function nt(o,n){return n.map(function(e){return o[e.key]})}function H(o,n){var e=[],r;for(r=0;r<n;r+=1)e.push([]);if(o)for(r=0;r<o.length;r+=1)e[o[r].col].push(o[r]);return e}function $(o,n){var e=[];if(o){for(var r=0;r<n;r+=1)e[r]={affectedInstances:o.affectedInstances,isEvent:o.isEvent,segs:[]};for(var t=0,i=o.segs;t<i.length;t++){var a=i[t];e[a.col].segs.push(a)}}else for(var r=0;r<n;r+=1)e[r]=null;return e}var ot=function(o){R(n,o);function n(){var e=o!==null&&o.apply(this,arguments)||this;return e.rootElRef=k(),e}return n.prototype.render=function(){var e=this,r=this.props;return l(ge,{allDayDate:null,moreCnt:r.hiddenSegs.length,allSegs:r.hiddenSegs,hiddenSegs:r.hiddenSegs,alignmentElRef:this.rootElRef,defaultContent:at,extraDateSpan:r.extraDateSpan,dateProfile:r.dateProfile,todayRange:r.todayRange,popoverContent:function(){return le(r.hiddenSegs,r)}},function(t,i,a,s,d,c,u,f){return l("a",{ref:function(p){X(t,p),X(e.rootElRef,p)},className:["fc-timegrid-more-link"].concat(i).join(" "),style:{top:r.top,bottom:r.bottom},onClick:d,title:c,"aria-expanded":u,"aria-controls":f},l("div",{ref:a,className:"fc-timegrid-more-link-inner fc-sticky"},s))})},n}(D);function at(o){return o.shortText}function it(o,n,e){var r=new Oe;n!=null&&(r.strictOrder=n),e!=null&&(r.maxStackCnt=e);var t=r.addSegs(o),i=ze(t),a=st(r);a=ut(a,1);var s=ft(a);return{segRects:s,hiddenGroups:i}}function st(o){var n=o.entriesByLevel,e=K(function(r,t){return r+":"+t},function(r,t){var i=ct(o,r,t),a=J(i,e),s=n[r][t];return[S(S({},s),{nextLevelNodes:a[0]}),s.thickness+a[1]]});return J(n.length?{level:0,lateralStart:0,lateralEnd:n[0].length}:null,e)[0]}function J(o,n){if(!o)return[[],0];for(var e=o.level,r=o.lateralStart,t=o.lateralEnd,i=r,a=[];i<t;)a.push(n(e,i)),i+=1;return a.sort(lt),[a.map(dt),a[0][1]]}function lt(o,n){return n[1]-o[1]}function dt(o){return o[0]}function ct(o,n,e){for(var r=o.levelCoords,t=o.entriesByLevel,i=t[n][e],a=r[n]+i.thickness,s=r.length,d=n;d<s&&r[d]<a;d+=1);for(;d<s;d+=1){for(var c=t[d],u=void 0,f=qe(c,i.span.start,je),p=f[0]+f[1],v=p;(u=c[v])&&u.span.start<i.span.end;)v+=1;if(p<v)return{level:d,lateralStart:p,lateralEnd:v}}return null}function ut(o,n){var e=K(function(r,t,i){return ae(r)},function(r,t,i){var a=r.nextLevelNodes,s=r.thickness,d=s+i,c=s/d,u,f=[];if(!a.length)u=n;else for(var p=0,v=a;p<v.length;p++){var y=v[p];if(u===void 0){var m=e(y,t,d);u=m[0],f.push(m[1])}else{var m=e(y,u,0);f.push(m[1])}}var h=(u-t)*c;return[u-h,S(S({},r),{thickness:h,nextLevelNodes:f})]});return o.map(function(r){return e(r,0,0)[1]})}function ft(o){var n=[],e=K(function(t,i,a){return ae(t)},function(t,i,a){var s=S(S({},t),{levelCoord:i,stackDepth:a,stackForward:0});return n.push(s),s.stackForward=r(t.nextLevelNodes,i+t.thickness,a+1)+1});function r(t,i,a){for(var s=0,d=0,c=t;d<c.length;d++){var u=c[d];s=Math.max(e(u,i,a),s)}return s}return r(o,0,0),n}function K(o,n){var e={};return function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=o.apply(void 0,r);return i in e?e[i]:e[i]=n.apply(void 0,r)}}function ee(o,n,e,r){e===void 0&&(e=null),r===void 0&&(r=0);var t=[];if(e)for(var i=0;i<o.length;i+=1){var a=o[i],s=e.computeDateTop(a.start,n),d=Math.max(s+(r||0),e.computeDateTop(a.end,n));t.push({start:Math.round(s),end:Math.round(d)})}return t}function pt(o,n,e,r){for(var t=[],i=[],a=0;a<o.length;a+=1){var s=n[a];s?t.push({index:a,thickness:1,span:s}):i.push(o[a])}for(var d=it(t,e,r),c=d.segRects,u=d.hiddenGroups,f=[],p=0,v=c;p<v.length;p++){var y=v[p];f.push({seg:o[y.index],rect:y})}for(var m=0,h=i;m<h.length;m++){var C=h[m];f.push({seg:C,rect:null})}return{segPlacements:f,hiddenGroups:u}}var vt=W({hour:"numeric",minute:"2-digit",meridiem:!1}),se=function(o){R(n,o);function n(){return o!==null&&o.apply(this,arguments)||this}return n.prototype.render=function(){var e=["fc-timegrid-event","fc-v-event"];return this.props.isShort&&e.push("fc-timegrid-event-short"),l(ye,S({},this.props,{defaultTimeFormat:vt,extraClassNames:e}))},n}(D),ht=function(o){R(n,o);function n(){return o!==null&&o.apply(this,arguments)||this}return n.prototype.render=function(){var e=this.props;return l(Se,{date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,extraHookProps:e.extraHookProps},function(r,t){return t&&l("div",{className:"fc-timegrid-col-misc",ref:r},t)})},n}(D),mt=function(o){R(n,o);function n(){var e=o!==null&&o.apply(this,arguments)||this;return e.sortEventSegs=x(Le),e}return n.prototype.render=function(){var e=this,r=this,t=r.props,i=r.context,a=i.options.selectMirror,s=t.eventDrag&&t.eventDrag.segs||t.eventResize&&t.eventResize.segs||a&&t.dateSelectionSegs||[],d=t.eventDrag&&t.eventDrag.affectedInstances||t.eventResize&&t.eventResize.affectedInstances||{},c=this.sortEventSegs(t.fgEventSegs,i.options.eventOrder);return l(Re,{elRef:t.elRef,date:t.date,dateProfile:t.dateProfile,todayRange:t.todayRange,extraHookProps:t.extraHookProps},function(u,f,p){return l("td",S({ref:u,role:"gridcell",className:["fc-timegrid-col"].concat(f,t.extraClassNames||[]).join(" ")},p,t.extraDataAttrs),l("div",{className:"fc-timegrid-col-frame"},l("div",{className:"fc-timegrid-col-bg"},e.renderFillSegs(t.businessHourSegs,"non-business"),e.renderFillSegs(t.bgEventSegs,"bg-event"),e.renderFillSegs(t.dateSelectionSegs,"highlight")),l("div",{className:"fc-timegrid-col-events"},e.renderFgSegs(c,d,!1,!1,!1)),l("div",{className:"fc-timegrid-col-events"},e.renderFgSegs(s,{},Boolean(t.eventDrag),Boolean(t.eventResize),Boolean(a))),l("div",{className:"fc-timegrid-now-indicator-container"},e.renderNowIndicator(t.nowIndicatorSegs)),l(ht,{date:t.date,dateProfile:t.dateProfile,todayRange:t.todayRange,extraHookProps:t.extraHookProps})))})},n.prototype.renderFgSegs=function(e,r,t,i,a){var s=this.props;return s.forPrint?le(e,s):this.renderPositionedFgSegs(e,r,t,i,a)},n.prototype.renderPositionedFgSegs=function(e,r,t,i,a){var s=this,d=this.context.options,c=d.eventMaxStack,u=d.eventShortHeight,f=d.eventOrderStrict,p=d.eventMinHeight,v=this.props,y=v.date,m=v.slatCoords,h=v.eventSelection,C=v.todayRange,g=v.nowDate,w=t||i||a,E=ee(e,y,m,p),T=pt(e,E,f,c),P=T.segPlacements,I=T.hiddenGroups;return l(L,null,this.renderHiddenGroups(I,e),P.map(function(N){var F=N.seg,b=N.rect,B=F.eventRange.instance.instanceId,de=w||Boolean(!r[B]&&b),ce=G(b&&b.span),ue=!w&&b?s.computeSegHStyle(b):{left:0,right:0},fe=Boolean(b)&&b.stackForward>0,pe=Boolean(b)&&b.span.end-b.span.start<u;return l("div",{className:"fc-timegrid-event-harness"+(fe?" fc-timegrid-event-harness-inset":""),key:B,style:S(S({visibility:de?"":"hidden"},ce),ue)},l(se,S({seg:F,isDragging:t,isResizing:i,isDateSelecting:a,isSelected:B===h,isShort:pe},O(F,C,g))))}))},n.prototype.renderHiddenGroups=function(e,r){var t=this.props,i=t.extraDateSpan,a=t.dateProfile,s=t.todayRange,d=t.nowDate,c=t.eventSelection,u=t.eventDrag,f=t.eventResize;return l(L,null,e.map(function(p){var v=G(p.span),y=gt(p.entries,r);return l(ot,{key:Ce(xe(y)),hiddenSegs:y,top:v.top,bottom:v.bottom,extraDateSpan:i,dateProfile:a,todayRange:s,nowDate:d,eventSelection:c,eventDrag:u,eventResize:f})}))},n.prototype.renderFillSegs=function(e,r){var t=this,i=t.props,a=t.context,s=ee(e,i.date,i.slatCoords,a.options.eventMinHeight),d=s.map(function(c,u){var f=e[u];return l("div",{key:be(f.eventRange),className:"fc-timegrid-bg-harness",style:G(c)},r==="bg-event"?l(we,S({seg:f},O(f,i.todayRange,i.nowDate))):De(r))});return l(L,null,d)},n.prototype.renderNowIndicator=function(e){var r=this.props,t=r.slatCoords,i=r.date;return t?e.map(function(a,s){return l(U,{isAxis:!1,date:i,key:s},function(d,c,u,f){return l("div",{ref:d,className:["fc-timegrid-now-indicator-line"].concat(c).join(" "),style:{top:t.computeDateTop(a.start,i)}},f)})}):null},n.prototype.computeSegHStyle=function(e){var r=this.context,t=r.isRtl,i=r.options,a=i.slotEventOverlap,s=e.levelCoord,d=e.levelCoord+e.thickness,c,u;a&&(d=Math.min(1,s+(d-s)*2)),t?(c=1-d,u=s):(c=s,u=1-d);var f={zIndex:e.stackDepth+1,left:c*100+"%",right:u*100+"%"};return a&&!e.stackForward&&(f[t?"marginLeft":"marginRight"]=10*2),f},n}(D);function le(o,n){var e=n.todayRange,r=n.nowDate,t=n.eventSelection,i=n.eventDrag,a=n.eventResize,s=(i?i.affectedInstances:null)||(a?a.affectedInstances:null)||{};return l(L,null,o.map(function(d){var c=d.eventRange.instance.instanceId;return l("div",{key:c,style:{visibility:s[c]?"hidden":""}},l(se,S({seg:d,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:c===t,isShort:!1},O(d,e,r))))}))}function G(o){return o?{top:o.start,bottom:-o.end}:{top:"",bottom:""}}function gt(o,n){return o.map(function(e){return n[e.index]})}var yt=function(o){R(n,o);function n(){var e=o!==null&&o.apply(this,arguments)||this;return e.splitFgEventSegs=x(H),e.splitBgEventSegs=x(H),e.splitBusinessHourSegs=x(H),e.splitNowIndicatorSegs=x(H),e.splitDateSelectionSegs=x(H),e.splitEventDrag=x($),e.splitEventResize=x($),e.rootElRef=k(),e.cellElRefs=new oe,e}return n.prototype.render=function(){var e=this,r=this,t=r.props,i=r.context,a=i.options.nowIndicator&&t.slatCoords&&t.slatCoords.safeComputeTop(t.nowDate),s=t.cells.length,d=this.splitFgEventSegs(t.fgEventSegs,s),c=this.splitBgEventSegs(t.bgEventSegs,s),u=this.splitBusinessHourSegs(t.businessHourSegs,s),f=this.splitNowIndicatorSegs(t.nowIndicatorSegs,s),p=this.splitDateSelectionSegs(t.dateSelectionSegs,s),v=this.splitEventDrag(t.eventDrag,s),y=this.splitEventResize(t.eventResize,s);return l("div",{className:"fc-timegrid-cols",ref:this.rootElRef},l("table",{role:"presentation",style:{minWidth:t.tableMinWidth,width:t.clientWidth}},t.tableColGroupNode,l("tbody",{role:"presentation"},l("tr",{role:"row"},t.axis&&l("td",{"aria-hidden":!0,className:"fc-timegrid-col fc-timegrid-axis"},l("div",{className:"fc-timegrid-col-frame"},l("div",{className:"fc-timegrid-now-indicator-container"},typeof a=="number"&&l(U,{isAxis:!0,date:t.nowDate},function(m,h,C,g){return l("div",{ref:m,className:["fc-timegrid-now-indicator-arrow"].concat(h).join(" "),style:{top:a}},g)})))),t.cells.map(function(m,h){return l(mt,{key:m.key,elRef:e.cellElRefs.createRef(m.key),dateProfile:t.dateProfile,date:m.date,nowDate:t.nowDate,todayRange:t.todayRange,extraHookProps:m.extraHookProps,extraDataAttrs:m.extraDataAttrs,extraClassNames:m.extraClassNames,extraDateSpan:m.extraDateSpan,fgEventSegs:d[h],bgEventSegs:c[h],businessHourSegs:u[h],nowIndicatorSegs:f[h],dateSelectionSegs:p[h],eventDrag:v[h],eventResize:y[h],slatCoords:t.slatCoords,eventSelection:t.eventSelection,forPrint:t.forPrint})})))))},n.prototype.componentDidMount=function(){this.updateCoords()},n.prototype.componentDidUpdate=function(){this.updateCoords()},n.prototype.updateCoords=function(){var e=this.props;e.onColCoords&&e.clientWidth!==null&&e.onColCoords(new ne(this.rootElRef.current,St(this.cellElRefs.currentMap,e.cells),!0,!1))},n}(D);function St(o,n){return n.map(function(e){return o[e.key]})}var Rt=function(o){R(n,o);function n(){var e=o!==null&&o.apply(this,arguments)||this;return e.processSlotOptions=x(Ct),e.state={slatCoords:null},e.handleRootEl=function(r){r?e.context.registerInteractiveComponent(e,{el:r,isHitComboAllowed:e.props.isHitComboAllowed}):e.context.unregisterInteractiveComponent(e)},e.handleScrollRequest=function(r){var t=e.props.onScrollTopRequest,i=e.state.slatCoords;if(t&&i){if(r.time){var a=i.computeTimeTop(r.time);a=Math.ceil(a),a&&(a+=1),t(a)}return!0}return!1},e.handleColCoords=function(r){e.colCoords=r},e.handleSlatCoords=function(r){e.setState({slatCoords:r}),e.props.onSlatCoords&&e.props.onSlatCoords(r)},e}return n.prototype.render=function(){var e=this,r=e.props,t=e.state;return l("div",{className:"fc-timegrid-body",ref:this.handleRootEl,style:{width:r.clientWidth,minWidth:r.tableMinWidth}},l(rt,{axis:r.axis,dateProfile:r.dateProfile,slatMetas:r.slatMetas,clientWidth:r.clientWidth,minHeight:r.expandRows?r.clientHeight:"",tableMinWidth:r.tableMinWidth,tableColGroupNode:r.axis?r.tableColGroupNode:null,onCoords:this.handleSlatCoords}),l(yt,{cells:r.cells,axis:r.axis,dateProfile:r.dateProfile,businessHourSegs:r.businessHourSegs,bgEventSegs:r.bgEventSegs,fgEventSegs:r.fgEventSegs,dateSelectionSegs:r.dateSelectionSegs,eventSelection:r.eventSelection,eventDrag:r.eventDrag,eventResize:r.eventResize,todayRange:r.todayRange,nowDate:r.nowDate,nowIndicatorSegs:r.nowIndicatorSegs,clientWidth:r.clientWidth,tableMinWidth:r.tableMinWidth,tableColGroupNode:r.tableColGroupNode,slatCoords:t.slatCoords,onColCoords:this.handleColCoords,forPrint:r.forPrint}))},n.prototype.componentDidMount=function(){this.scrollResponder=this.context.createScrollResponder(this.handleScrollRequest)},n.prototype.componentDidUpdate=function(e){this.scrollResponder.update(e.dateProfile!==this.props.dateProfile)},n.prototype.componentWillUnmount=function(){this.scrollResponder.detach()},n.prototype.queryHit=function(e,r){var t=this.context,i=t.dateEnv,a=t.options,s=this.colCoords,d=this.props.dateProfile,c=this.state.slatCoords,u=this.processSlotOptions(this.props.slotDuration,a.snapDuration),f=u.snapDuration,p=u.snapsPerSlot,v=s.leftToIndex(e),y=c.positions.topToIndex(r);if(v!=null&&y!=null){var m=this.props.cells[v],h=c.positions.tops[y],C=c.positions.getHeight(y),g=(r-h)/C,w=Math.floor(g*p),E=y*p+w,T=this.props.cells[v].date,P=z(d.slotMinTime,ke(f,E)),I=i.add(T,P),N=i.add(I,f);return{dateProfile:d,dateSpan:S({range:{start:I,end:N},allDay:!1},m.extraDateSpan),dayEl:s.els[v],rect:{left:s.lefts[v],right:s.rights[v],top:h,bottom:h+C},layer:0}}return null},n}(j);function Ct(o,n){var e=n||o,r=V(o,e);return r===null&&(e=o,r=1),{snapDuration:e,snapsPerSlot:r}}var xt=function(o){R(n,o);function n(){return o!==null&&o.apply(this,arguments)||this}return n.prototype.sliceRange=function(e,r){for(var t=[],i=0;i<r.length;i+=1){var a=Ee(e,r[i]);a&&t.push({start:a.start,end:a.end,isStart:a.start.valueOf()===e.start.valueOf(),isEnd:a.end.valueOf()===e.end.valueOf(),col:i})}return t},n}(Ae),bt=function(o){R(n,o);function n(){var e=o!==null&&o.apply(this,arguments)||this;return e.buildDayRanges=x(wt),e.slicer=new xt,e.timeColsRef=k(),e}return n.prototype.render=function(){var e=this,r=this,t=r.props,i=r.context,a=t.dateProfile,s=t.dayTableModel,d=i.options.nowIndicator,c=this.buildDayRanges(s,a,i.dateEnv);return l(re,{unit:d?"minute":"day"},function(u,f){return l(Rt,S({ref:e.timeColsRef},e.slicer.sliceProps(t,a,null,i,c),{forPrint:t.forPrint,axis:t.axis,dateProfile:a,slatMetas:t.slatMetas,slotDuration:t.slotDuration,cells:s.cells[0],tableColGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,clientWidth:t.clientWidth,clientHeight:t.clientHeight,expandRows:t.expandRows,nowDate:u,nowIndicatorSegs:d&&e.slicer.sliceNowDate(u,i,c),todayRange:f,onScrollTopRequest:t.onScrollTopRequest,onSlatCoords:t.onSlatCoords}))})},n}(j);function wt(o,n,e){for(var r=[],t=0,i=o.headerDates;t<i.length;t++){var a=i[t];r.push({start:e.add(a,n.slotMinTime),end:e.add(a,n.slotMaxTime)})}return r}var te=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}];function Dt(o,n,e,r,t){for(var i=new Date(0),a=o,s=A(0),d=e||kt(r),c=[];M(a)<M(n);){var u=t.add(i,a),f=V(s,d)!==null;c.push({date:u,time:a,key:u.toISOString(),isoTimeStr:Ue(u),isLabeled:f}),a=z(a,r),s=z(s,r)}return c}function kt(o){var n,e,r;for(n=te.length-1;n>=0;n-=1)if(e=A(te[n]),r=V(e,o),r!==null&&r>1)return e;return o}var Et=function(o){R(n,o);function n(){var e=o!==null&&o.apply(this,arguments)||this;return e.buildTimeColsModel=x(Tt),e.buildSlatMetas=x(Dt),e}return n.prototype.render=function(){var e=this,r=this.context,t=r.options,i=r.dateEnv,a=r.dateProfileGenerator,s=this.props,d=s.dateProfile,c=this.buildTimeColsModel(d,a),u=this.allDaySplitter.splitProps(s),f=this.buildSlatMetas(d.slotMinTime,d.slotMaxTime,t.slotLabelInterval,t.slotDuration,i),p=t.dayMinWidth,v=!p,y=p,m=t.dayHeaders&&l(Te,{dates:c.headerDates,dateProfile:d,datesRepDistinctDays:!0,renderIntro:v?this.renderHeadAxis:null}),h=t.allDaySlot!==!1&&function(g){return l(Ve,S({},u.allDay,{dateProfile:d,dayTableModel:c,nextDayThreshold:t.nextDayThreshold,tableMinWidth:g.tableMinWidth,colGroupNode:g.tableColGroupNode,renderRowIntro:v?e.renderTableRowAxis:null,showWeekNumbers:!1,expandRows:!1,headerAlignElRef:e.headerElRef,clientWidth:g.clientWidth,clientHeight:g.clientHeight,forPrint:s.forPrint},e.getAllDayMaxEventProps()))},C=function(g){return l(bt,S({},u.timed,{dayTableModel:c,dateProfile:d,axis:v,slotDuration:t.slotDuration,slatMetas:f,forPrint:s.forPrint,tableColGroupNode:g.tableColGroupNode,tableMinWidth:g.tableMinWidth,clientWidth:g.clientWidth,clientHeight:g.clientHeight,onSlatCoords:e.handleSlatCoords,expandRows:g.expandRows,onScrollTopRequest:e.handleScrollTopRequest}))};return y?this.renderHScrollLayout(m,h,C,c.colCnt,p,f,this.state.slatCoords):this.renderSimpleLayout(m,h,C)},n}($e);function Tt(o,n){var e=new Fe(o.renderRange,n);return new Be(e,!1)}var Nt={allDaySlot:Boolean},Mt=Ne({initialView:"timeGridWeek",optionRefiners:Nt,views:{timeGrid:{component:Et,usesMinMaxTime:!0,allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0},timeGridDay:{type:"timeGrid",duration:{days:1}},timeGridWeek:{type:"timeGrid",duration:{weeks:1}}}}),Ht=Mt;export{Ht as t};