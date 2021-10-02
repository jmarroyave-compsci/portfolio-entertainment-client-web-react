/*! For license information please see 1400.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[1400,5298],{36501:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(63366),o=n(87462),a=n(67294),i=(n(45697),n(86010)),l=n(71993),s=n(94581),c=n(91380),u=n(5609),d=n(15773);function f(e){return(0,d.Z)("MuiPaper",e)}(0,n(88858).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var v=n(85893);const p=["className","component","elevation","square","variant"],m=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},h=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>(0,o.Z)({backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${e.palette.divider}`},"elevation"===t.variant&&(0,o.Z)({boxShadow:e.shadows[t.elevation]},"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",m(t.elevation))}, ${(0,s.Fq)("#fff",m(t.elevation))})`})))),y=a.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiPaper"}),{className:a,component:s="div",elevation:c=1,square:d=!1,variant:m="elevation"}=n,y=(0,r.Z)(n,p),Z=(0,o.Z)({},n,{component:s,elevation:c,square:d,variant:m}),g=(e=>{const{square:t,elevation:n,variant:r,classes:o}=e,a={root:["root",r,!t&&"rounded","elevation"===r&&`elevation${n}`]};return(0,l.Z)(a,f,o)})(Z);return(0,v.jsx)(h,(0,o.Z)({as:s,ownerState:Z,className:(0,i.Z)(g.root,a),ref:t},y))}))},71993:(e,t,n)=>{function r(e,t,n){const r={};return Object.keys(e).forEach((o=>{r[o]=e[o].reduce(((e,r)=>(r&&(n&&n[r]&&e.push(n[r]),e.push(t(r))),e)),[]).join(" ")})),r}n.d(t,{Z:()=>r})},15773:(e,t,n)=>{n.d(t,{Z:()=>o});const r={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function o(e,t){return r[t]||`${e}-${t}`}},88858:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(15773);function o(e,t){const n={};return t.forEach((t=>{n[t]=(0,r.Z)(e,t)})),n}},71713:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(83528),o=n(35754);const a=(0,r.Z)(),i=function(e=a){return(0,o.Z)(e)}},35754:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const o=r.createContext(null),a=function(e=null){const t=r.useContext(o);return t&&(n=t,0!==Object.keys(n).length)?t:e;var n}},5609:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(87462),o=n(71713);var a=n(15423);function i({props:e,name:t}){return function({props:e,name:t,defaultTheme:n}){const a=function(e){const{theme:t,name:n,props:o}=e;if(!(t&&t.components&&t.components[n]&&t.components[n].defaultProps))return o;const a=(0,r.Z)({},o),i=t.components[n].defaultProps;let l;for(l in i)void 0===a[l]&&(a[l]=i[l]);return a}({theme:(0,o.Z)(n),name:t,props:e});return a}({props:e,name:t,defaultTheme:a.Z})}},36776:(e,t,n)=>{n.d(t,{Z:()=>r});const r={links_disabled:!1}},87558:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),o=n(73727),a=n(36776);class i extends r.Component{render(){var{children:e,className:t,to:n,href:i,style:l,external:s}=this.props;if(e=(n=(n=n||i)||"http://localhost")?e:"NO LINK DEFINED",l=l||{},n&&"string"!=typeof n)return"INVALID URL";const c=!((s=!0===s)||n&&0===n.indexOf("http")),u=c?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==c&&0==a.Z.links_disabled?r.createElement(o.OL,{className:t,to:n,style:l},e):r.createElement("a",{className:t,href:n,style:l,target:u},e)}}const l=i},97236:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(87558);n(36776);class a extends r.Component{render(){var{children:e,className:t,to:n,href:a,border:i,style:l,external:s}=this.props;return e=(n=(n=n||a)||"http://localhost")?e:"NO LINK DEFINED",i=!0===i||"true"===i?"text-link":"",(l=l||{}).padding=l.padding?l.padding:"0.5rem 0.75rem",t=`${i} ${t||""}`,s=!0===s,r.createElement(o.Z,{className:t,to:n,style:l,external:s},e)}}const i=a},61400:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(67294),o=n(91380),a=n(75298),i=n(36501),l=n(97236);const s=(0,o.ZP)("div")({padding:"0.85rem"}),c=(0,o.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem"}),u=(0,o.ZP)("div")({fontSize:"0.9rem"}),d=function(e){const{filter:t}=e,n=a.default.getBy(t);return r.createElement(i.Z,null,r.createElement(s,null,r.createElement(c,null,"Stories"),n.map(((e,t)=>r.createElement(u,{key:t},r.createElement(l.Z,{href:e.url},e.title))))))}},75298:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const r=[{id:"movies",title:"Movies",url:"/movies",tags:["tv","awards"]},{id:"awards",title:"Awards",url:"/stories/awards",tags:["movies","people","tv"]},{id:"people",title:"People",url:"/people",tags:["awards"]},{id:"podcasts",title:"Podcasts",url:"/podcasts",tags:["podcasts"]},{id:"podcast_music",title:"Music Podcasts",url:"/podcasts/stories/music",tags:["podcasts"]},{id:"tv",title:"TV",url:"/tv",tags:["movies","awards"]}],o=new class{constructor(){}getBy(e){const t=[];return r.forEach((n=>{n.id!==e&&n.tags.includes(e)&&t.push(n)})),t}}},86010:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})},73727:(e,t,n)=>{n.d(t,{VK:()=>u,OL:()=>g});var r=n(5977),o=n(51721),a=n(67294),i=n(37531),l=(n(45697),n(87462)),s=n(63366),c=n(2177),u=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=(0,i.lX)(t.props),t}return(0,o.Z)(t,e),t.prototype.render=function(){return a.createElement(r.F0,{history:this.history,children:this.props.children})},t}(a.Component);a.Component;var d=function(e,t){return"function"==typeof e?e(t):e},f=function(e,t){return"string"==typeof e?(0,i.ob)(e,null,null,t):e},v=function(e){return e},p=a.forwardRef;void 0===p&&(p=v);var m=p((function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,i=(0,s.Z)(e,["innerRef","navigate","onClick"]),c=i.target,u=(0,l.Z)({},i,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return u.ref=v!==p&&t||n,a.createElement("a",u)})),h=p((function(e,t){var n=e.component,o=void 0===n?m:n,u=e.replace,h=e.to,y=e.innerRef,Z=(0,s.Z)(e,["component","replace","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,c.Z)(!1);var n=e.history,r=f(d(h,e.location),e.location),s=r?n.createHref(r):"",m=(0,l.Z)({},Z,{href:s,navigate:function(){var t=d(h,e.location),r=(0,i.Ep)(e.location)===(0,i.Ep)(f(t));(u||r?n.replace:n.push)(t)}});return v!==p?m.ref=t||y:m.innerRef=y,a.createElement(o,m)}))})),y=function(e){return e},Z=a.forwardRef;void 0===Z&&(Z=y);var g=Z((function(e,t){var n=e["aria-current"],o=void 0===n?"page":n,i=e.activeClassName,u=void 0===i?"active":i,v=e.activeStyle,p=e.className,m=e.exact,g=e.isActive,b=e.location,E=e.sensitive,w=e.strict,k=e.style,x=e.to,N=e.innerRef,_=(0,s.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,c.Z)(!1);var n=b||e.location,i=f(d(x,n),n),s=i.pathname,R=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=R?(0,r.LX)(n.pathname,{path:R,exact:m,sensitive:E,strict:w}):null,P=!!(g?g(C,n):C),M="function"==typeof p?p(P):p,O="function"==typeof k?k(P):k;P&&(M=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(M,u),O=(0,l.Z)({},O,v));var S=(0,l.Z)({"aria-current":P&&o||null,className:M,style:O,to:i},_);return y!==Z?S.ref=t||N:S.innerRef=N,a.createElement(h,S)}))}))},75251:(e,t,n)=>{var r=n(67294),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:i.current}}t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)}}]);