/*! For license information please see 7735.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[7735,5298],{60122:(e,t,r)=>{r.d(t,{x:()=>i});var a=r(24909),o=r(67294),n=r(24273);function i(){var e=o.useContext((0,n.K)()).client;return __DEV__?(0,a.kG)(e,"No Apollo Client instance can be found. Please ensure that you have called `ApolloProvider` higher up in your tree."):(0,a.kG)(e,33),e}},10770:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(87462),o=r(42982),n=r(45987),i=r(67294),l=(r(59864),r(45697),r(86010)),s=r(14670),c=r(22318),d=r(59693);const u=(0,r(25209).Z)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var p=r(32467);const m=(0,s.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,d._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,r=(0,n.Z)(e,["classes"]);return i.createElement(p.Z,(0,a.Z)({component:"li",className:t.root,focusRipple:!0},r),i.createElement(u,{className:t.icon}))}));var f=i.forwardRef((function(e,t){var r=e.children,s=e.classes,d=e.className,u=e.component,p=void 0===u?"nav":u,f=e.expandText,h=void 0===f?"Show path":f,g=e.itemsAfterCollapse,y=void 0===g?1:g,v=e.itemsBeforeCollapse,b=void 0===v?1:v,Z=e.maxItems,x=void 0===Z?8:Z,k=e.separator,w=void 0===k?"/":k,E=(0,n.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),S=i.useState(!1),P=S[0],C=S[1],$=i.Children.toArray(r).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:s.li,key:"child-".concat(t)},e)}));return i.createElement(c.Z,(0,a.Z)({ref:t,component:p,color:"textSecondary",className:(0,l.Z)(s.root,d)},E),i.createElement("ol",{className:s.ol},function(e,t,r){return e.reduce((function(a,o,n){return n<e.length-1?a=a.concat(o,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(n),className:t},r)):a.push(o),a}),[])}(P||x&&$.length<=x?$:function(e){return b+y>=e.length?e:[].concat((0,o.Z)(e.slice(0,b)),[i.createElement(m,{"aria-label":h,key:"ellipsis",onClick:function(e){C(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],(0,o.Z)(e.slice(e.length-y,e.length)))}($),s.separator,w)))}));const h=(0,s.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},79895:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(45987),o=r(87462),n=r(67294),i=(r(45697),r(86010)),l=r(14670),s=n.forwardRef((function(e,t){var r=e.classes,l=e.className,s=e.component,c=void 0===s?"div":s,d=e.square,u=void 0!==d&&d,p=e.elevation,m=void 0===p?1:p,f=e.variant,h=void 0===f?"elevation":f,g=(0,a.Z)(e,["classes","className","component","square","elevation","variant"]);return n.createElement(c,(0,o.Z)({className:(0,i.Z)(r.root,l,"outlined"===h?r.outlined:r["elevation".concat(m)],!u&&r.rounded),ref:t},g))}));const c=(0,l.Z)((function(e){var t={};return e.shadows.forEach((function(e,r){t["elevation".concat(r)]={boxShadow:e}})),(0,o.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(s)},22318:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(87462),o=r(45987),n=r(67294),i=(r(45697),r(86010)),l=r(14670),s=r(93871),c={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=n.forwardRef((function(e,t){var r=e.align,l=void 0===r?"inherit":r,d=e.classes,u=e.className,p=e.color,m=void 0===p?"initial":p,f=e.component,h=e.display,g=void 0===h?"initial":h,y=e.gutterBottom,v=void 0!==y&&y,b=e.noWrap,Z=void 0!==b&&b,x=e.paragraph,k=void 0!==x&&x,w=e.variant,E=void 0===w?"body1":w,S=e.variantMapping,P=void 0===S?c:S,C=(0,o.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),$=f||(k?"p":P[E]||c[E])||"span";return n.createElement($,(0,a.Z)({className:(0,i.Z)(d.root,u,"inherit"!==E&&d[E],"initial"!==m&&d["color".concat((0,s.Z)(m))],Z&&d.noWrap,v&&d.gutterBottom,k&&d.paragraph,"inherit"!==l&&d["align".concat((0,s.Z)(l))],"initial"!==g&&d["display".concat((0,s.Z)(g))]),ref:t},C))}));const u=(0,l.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},59062:(e,t,r)=>{r.d(t,{Z:()=>P});var a=r(63366),o=r(87462),n=r(67294),i=(r(45697),r(86010)),l=r(71993),s=r(25258),c=r(98216),d=r(5609),u=r(91380),p=r(15773);function m(e){return(0,p.Z)("MuiCircularProgress",e)}(0,r(88858).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f=r(85893);const h=["className","color","disableShrink","size","style","thickness","value","variant"];let g,y,v,b,Z=e=>e;const x=(0,s.F4)(g||(g=Z`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),k=(0,s.F4)(y||(y=Z`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),w=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,o.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:t.palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,s.iv)(v||(v=Z`
      animation: ${0} 1.4s linear infinite;
    `),x))),E=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),S=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,o.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,s.iv)(b||(b=Z`
      animation: ${0} 1.4s ease-in-out infinite;
    `),k))),P=n.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:n,color:s="primary",disableShrink:u=!1,size:p=40,style:g,thickness:y=3.6,value:v=0,variant:b="indeterminate"}=r,Z=(0,a.Z)(r,h),x=(0,o.Z)({},r,{color:s,disableShrink:u,size:p,thickness:y,value:v,variant:b}),k=(e=>{const{classes:t,variant:r,color:a,disableShrink:o}=e,n={root:["root",r,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,o&&"circleDisableShrink"]};return(0,l.Z)(n,m,t)})(x),P={},C={},$={};if("determinate"===b){const e=2*Math.PI*((44-y)/2);P.strokeDasharray=e.toFixed(3),$["aria-valuenow"]=Math.round(v),P.strokeDashoffset=`${((100-v)/100*e).toFixed(3)}px`,C.transform="rotate(-90deg)"}return(0,f.jsx)(w,(0,o.Z)({className:(0,i.Z)(k.root,n),style:(0,o.Z)({width:p,height:p},C,g),ownerState:x,ref:t,role:"progressbar"},$,Z,{children:(0,f.jsx)(E,{className:k.svg,ownerState:x,viewBox:"22 22 44 44",children:(0,f.jsx)(S,{className:k.circle,style:P,ownerState:x,cx:44,cy:44,r:(44-y)/2,fill:"none",strokeWidth:y})})}))}))},93268:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294),o=r(20735);function n(e){return a.createElement(o.Z,null,e.children)}},18319:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(83037).default},61142:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(67294),o=r(80383),n=r(81648),i=r(87125),l=r(93775),s=r(20735);const c=function(e={}){const{data:t,loading:r,route:c}=e,{total:d,profession:u,yearBirth:p}=t||{},m=(e,t,o)=>a.createElement(n.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"}},a.createElement(l.default,{loading:r,title:e,data:t||{},ranges:o}));return a.createElement(s.Z,{spacing:2},a.createElement("h1",null,"general"),a.createElement(o.Z,{justifyContent:"center",fill:!0},((e,t,o)=>a.createElement(n.Z,{xs:12,sm:6,md:4,lg:3,style:{paddingRight:"1rem"}},a.createElement(i.default,{loading:r,title:"people",data:t?t.toString():t,icon:"people"})))(0,d)),a.createElement("h1",null,"segments"),a.createElement(o.Z,{justifyContent:"center",fill:!0},m("profession",u,[1e3,5e4,1e5]),m("birth year",p,[50,100,1e3,2500,5e3,6e3,7e3])))}},91990:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(82842).default},17202:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var a=r(67294),o=r(93268),n=r(80383),i=r(81648),l=r(61142),s=r(61400);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}const d=function(e){return a.createElement(o.Z,null,a.createElement(n.Z,{className:"page-module",fill:!0},a.createElement(i.Z,{xs:12,sm:12,md:9,lg:10,style:{paddingRight:"1rem"}},a.createElement(l.default,e)),a.createElement(i.Z,{xs:12,sm:12,md:3,lg:2,style:{paddingRight:"1rem"}},a.createElement(s.default,c({},e,{filter:"people"})))))}},92644:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(67294),o=r(93268),n=r(61142),i=r(61400);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}const s=function(e){return a.createElement(o.Z,null,a.createElement(n.default,e),a.createElement(i.default,l({},e,{filter:"people"})))}},82842:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var a=r(67294),o=r(83347),n=r(92644),i=r(17202);function l(e){return a.createElement(o.Z,{xs:a.createElement(n.default,e),md:a.createElement(i.default,e)})}},61400:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var a=r(67294),o=r(91380),n=r(75298),i=r(36501),l=r(97236);const s=(0,o.ZP)("div")({padding:"0.85rem"}),c=(0,o.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem"}),d=(0,o.ZP)("div")({fontSize:"0.9rem"}),u=function(e){const{filter:t}=e,r=n.default.getBy(t);return a.createElement(i.Z,null,a.createElement(s,null,a.createElement(c,null,"Stories"),r.map(((e,t)=>a.createElement(d,{key:t},a.createElement(l.Z,{href:e.url},e.title))))))}},75298:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});const a=[{id:"movies",title:"Movies",url:"/movies",tags:["tv","awards"]},{id:"awards",title:"Awards",url:"/stories/awards",tags:["movies","people","tv"]},{id:"people",title:"People",url:"/people",tags:["awards"]},{id:"podcasts",title:"Podcasts",url:"/podcasts",tags:["podcasts"]},{id:"podcast_music",title:"Music Podcasts",url:"/podcasts/stories/music",tags:["podcasts"]},{id:"tv",title:"TV",url:"/tv",tags:["movies","awards"]}],o=new class{constructor(){}getBy(e){const t=[];return a.forEach((r=>{r.id!==e&&r.tags.includes(e)&&t.push(r)})),t}}},98997:(e,t,r)=>{r.r(t),r.d(t,{QRY_DASHBOARD:()=>s,default:()=>c});var a=r(67294),o=r(18319),n=r(91990),i=r(54397),l=r(70846);const s=i.Ps`
  query getDashboard 
{
  dashboardPeople {
    alive
    profession
    total
    yearBirth
  }
}
  `;function c(e){var{loading:t,error:r,data:i}=(0,l.a)(s);const c={loading:t,error:r,data:i=i?i.dashboardPeople:{},breadcrumbs:[{name:"people"}]};return a.createElement(o.default,c,a.createElement(n.default,c))}},69921:(e,t)=>{var r=60103,a=60106,o=60107,n=60108,i=60114,l=60109,s=60110,c=60112,d=60113,u=60120,p=60115,m=60116,f=60121,h=60122,g=60117,y=60129,v=60131;if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for;r=b("react.element"),a=b("react.portal"),o=b("react.fragment"),n=b("react.strict_mode"),i=b("react.profiler"),l=b("react.provider"),s=b("react.context"),c=b("react.forward_ref"),d=b("react.suspense"),u=b("react.suspense_list"),p=b("react.memo"),m=b("react.lazy"),f=b("react.block"),h=b("react.server.block"),g=b("react.fundamental"),y=b("react.debug_trace_mode"),v=b("react.legacy_hidden")}function Z(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case i:case n:case d:case u:return e;default:switch(e=e&&e.$$typeof){case s:case c:case m:case p:case l:return e;default:return t}}case a:return t}}}var x=l,k=r,w=c,E=o,S=m,P=p,C=a,$=i,M=n,R=d;t.ContextConsumer=s,t.ContextProvider=x,t.Element=k,t.ForwardRef=w,t.Fragment=E,t.Lazy=S,t.Memo=P,t.Portal=C,t.Profiler=$,t.StrictMode=M,t.Suspense=R,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return Z(e)===s},t.isContextProvider=function(e){return Z(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return Z(e)===c},t.isFragment=function(e){return Z(e)===o},t.isLazy=function(e){return Z(e)===m},t.isMemo=function(e){return Z(e)===p},t.isPortal=function(e){return Z(e)===a},t.isProfiler=function(e){return Z(e)===i},t.isStrictMode=function(e){return Z(e)===n},t.isSuspense=function(e){return Z(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===i||e===y||e===n||e===d||e===u||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===l||e.$$typeof===s||e.$$typeof===c||e.$$typeof===g||e.$$typeof===f||e[0]===h)},t.typeOf=Z},59864:(e,t,r)=>{e.exports=r(69921)}}]);