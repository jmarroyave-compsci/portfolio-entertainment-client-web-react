/*! For license information please see 6623.js.LICENSE.txt */
(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[6623,3179,371],{60122:(e,t,r)=>{"use strict";r.d(t,{x:()=>i});var o=r(24909),a=r(67294),n=r(24273);function i(){var e=a.useContext((0,n.K)()).client;return __DEV__?(0,o.kG)(e,"No Apollo Client instance can be found. Please ensure that you have called `ApolloProvider` higher up in your tree."):(0,o.kG)(e,33),e}},95318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},20862:(e,t,r)=>{var o=r(50008).default;function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var s=i?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(n,l,s):n[l]=e[l]}return n.default=e,r&&r.set(e,n),n},e.exports.default=e.exports,e.exports.__esModule=!0},50008:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},10770:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var o=r(87462),a=r(42982),n=r(45987),i=r(67294),l=(r(59864),r(45697),r(86010)),s=r(14670),c=r(22318),u=r(59693);const d=(0,r(25209).Z)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var p=r(32467);const v=(0,s.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,u._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,r=(0,n.Z)(e,["classes"]);return i.createElement(p.Z,(0,o.Z)({component:"li",className:t.root,focusRipple:!0},r),i.createElement(d,{className:t.icon}))}));var f=i.forwardRef((function(e,t){var r=e.children,s=e.classes,u=e.className,d=e.component,p=void 0===d?"nav":d,f=e.expandText,h=void 0===f?"Show path":f,m=e.itemsAfterCollapse,y=void 0===m?1:m,g=e.itemsBeforeCollapse,b=void 0===g?1:g,Z=e.maxItems,x=void 0===Z?8:Z,k=e.separator,w=void 0===k?"/":k,S=(0,n.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=i.useState(!1),R=C[0],M=C[1],P=i.Children.toArray(r).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:s.li,key:"child-".concat(t)},e)}));return i.createElement(c.Z,(0,o.Z)({ref:t,component:p,color:"textSecondary",className:(0,l.Z)(s.root,u)},S),i.createElement("ol",{className:s.ol},function(e,t,r){return e.reduce((function(o,a,n){return n<e.length-1?o=o.concat(a,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(n),className:t},r)):o.push(a),o}),[])}(R||x&&P.length<=x?P:function(e){return b+y>=e.length?e:[].concat((0,a.Z)(e.slice(0,b)),[i.createElement(v,{"aria-label":h,key:"ellipsis",onClick:function(e){M(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],(0,a.Z)(e.slice(e.length-y,e.length)))}(P),s.separator,w)))}));const h=(0,s.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},17812:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var o=r(87462),a=r(45987),n=r(67294),i=(r(45697),r(86010)),l=r(14670),s=r(59693),c=r(32467),u=r(93871),d=n.forwardRef((function(e,t){var r=e.edge,l=void 0!==r&&r,s=e.children,d=e.classes,p=e.className,v=e.color,f=void 0===v?"default":v,h=e.disabled,m=void 0!==h&&h,y=e.disableFocusRipple,g=void 0!==y&&y,b=e.size,Z=void 0===b?"medium":b,x=(0,a.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return n.createElement(c.Z,(0,o.Z)({className:(0,i.Z)(d.root,p,"default"!==f&&d["color".concat((0,u.Z)(f))],m&&d.disabled,"small"===Z&&d["size".concat((0,u.Z)(Z))],{start:d.edgeStart,end:d.edgeEnd}[l]),centerRipple:!0,focusRipple:!g,disabled:m,ref:t},x),n.createElement("span",{className:d.label},s))}));const p=(0,l.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,s.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,s.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,s.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(d)},79895:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var o=r(45987),a=r(87462),n=r(67294),i=(r(45697),r(86010)),l=r(14670),s=n.forwardRef((function(e,t){var r=e.classes,l=e.className,s=e.component,c=void 0===s?"div":s,u=e.square,d=void 0!==u&&u,p=e.elevation,v=void 0===p?1:p,f=e.variant,h=void 0===f?"elevation":f,m=(0,o.Z)(e,["classes","className","component","square","elevation","variant"]);return n.createElement(c,(0,a.Z)({className:(0,i.Z)(r.root,l,"outlined"===h?r.outlined:r["elevation".concat(v)],!d&&r.rounded),ref:t},m))}));const c=(0,l.Z)((function(e){var t={};return e.shadows.forEach((function(e,r){t["elevation".concat(r)]={boxShadow:e}})),(0,a.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(s)},22318:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var o=r(87462),a=r(45987),n=r(67294),i=(r(45697),r(86010)),l=r(14670),s=r(93871),c={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=n.forwardRef((function(e,t){var r=e.align,l=void 0===r?"inherit":r,u=e.classes,d=e.className,p=e.color,v=void 0===p?"initial":p,f=e.component,h=e.display,m=void 0===h?"initial":h,y=e.gutterBottom,g=void 0!==y&&y,b=e.noWrap,Z=void 0!==b&&b,x=e.paragraph,k=void 0!==x&&x,w=e.variant,S=void 0===w?"body1":w,C=e.variantMapping,R=void 0===C?c:C,M=(0,a.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),P=f||(k?"p":R[S]||c[S])||"span";return n.createElement(P,(0,o.Z)({className:(0,i.Z)(u.root,d,"inherit"!==S&&u[S],"initial"!==v&&u["color".concat((0,s.Z)(v))],Z&&u.noWrap,g&&u.gutterBottom,k&&u.paragraph,"inherit"!==l&&u["align".concat((0,s.Z)(l))],"initial"!==m&&u["display".concat((0,s.Z)(m))]),ref:t},M))}));const d=(0,l.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},41120:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var o=r(87462),a=r(63746),n=r(99700);const i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,a.Z)(e,(0,o.Z)({defaultTheme:n.Z},t))}},82568:(e,t,r)=>{"use strict";function o(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return null==t?e:function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];e.apply(this,o),t.apply(this,o)}}),(function(){}))}r.d(t,{Z:()=>o})},79437:(e,t,r)=>{"use strict";function o(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];var i=this,l=function(){e.apply(i,a)};clearTimeout(t),t=setTimeout(l,r)}return o.clear=function(){clearTimeout(t)},o}r.d(t,{Z:()=>o})},72640:(e,t,r)=>{"use strict";r.r(t),r.d(t,{capitalize:()=>o.Z,createChainedFunction:()=>a.Z,createSvgIcon:()=>n.Z,debounce:()=>i.Z,deprecatedPropType:()=>l,isMuiElement:()=>s.Z,ownerDocument:()=>c.Z,ownerWindow:()=>u.Z,requirePropFactory:()=>d,setRef:()=>p.Z,unstable_useId:()=>g,unsupportedProp:()=>v,useControlled:()=>h,useEventCallback:()=>m.Z,useForkRef:()=>y.Z,useIsFocusVisible:()=>b.Z});var o=r(93871),a=r(82568),n=r(25209),i=r(79437);function l(e,t){return function(){return null}}var s=r(83711),c=r(30626),u=r(80713);function d(e){return function(){return null}}var p=r(34236);function v(e,t,r,o,a){return null}var f=r(67294);function h(e){var t=e.controlled,r=e.default,o=(e.name,e.state,f.useRef(void 0!==t).current),a=f.useState(r),n=a[0],i=a[1];return[o?t:n,f.useCallback((function(e){o||i(e)}),[])]}var m=r(55192),y=r(17294);function g(e){var t=f.useState(e),r=t[0],o=t[1],a=e||r;return f.useEffect((function(){null==r&&o("mui-".concat(Math.round(1e5*Math.random())))}),[r]),a}var b=r(24896)},83711:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(67294);function a(e,t){return o.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},30626:(e,t,r)=>{"use strict";function o(e){return e&&e.ownerDocument||document}r.d(t,{Z:()=>o})},80713:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(30626);function a(e){return(0,o.Z)(e).defaultView||window}},48884:(e,t,r)=>{"use strict";var o=r(95318),a=r(20862);t.Z=void 0;var n=a(r(67294)),i=(0,o(r(2108)).default)(n.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.Z=i},2108:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=r(72640)},59062:(e,t,r)=>{"use strict";r.d(t,{Z:()=>R});var o=r(63366),a=r(87462),n=r(67294),i=(r(45697),r(86010)),l=r(71993),s=r(25258),c=r(98216),u=r(5609),d=r(91380),p=r(15773);function v(e){return(0,p.Z)("MuiCircularProgress",e)}(0,r(88858).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f=r(85893);const h=["className","color","disableShrink","size","style","thickness","value","variant"];let m,y,g,b,Z=e=>e;const x=(0,s.F4)(m||(m=Z`
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
`)),w=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:t.palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,s.iv)(g||(g=Z`
      animation: ${0} 1.4s linear infinite;
    `),x))),S=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),C=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,s.iv)(b||(b=Z`
      animation: ${0} 1.4s ease-in-out infinite;
    `),k))),R=n.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiCircularProgress"}),{className:n,color:s="primary",disableShrink:d=!1,size:p=40,style:m,thickness:y=3.6,value:g=0,variant:b="indeterminate"}=r,Z=(0,o.Z)(r,h),x=(0,a.Z)({},r,{color:s,disableShrink:d,size:p,thickness:y,value:g,variant:b}),k=(e=>{const{classes:t,variant:r,color:o,disableShrink:a}=e,n={root:["root",r,`color${(0,c.Z)(o)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,a&&"circleDisableShrink"]};return(0,l.Z)(n,v,t)})(x),R={},M={},P={};if("determinate"===b){const e=2*Math.PI*((44-y)/2);R.strokeDasharray=e.toFixed(3),P["aria-valuenow"]=Math.round(g),R.strokeDashoffset=`${((100-g)/100*e).toFixed(3)}px`,M.transform="rotate(-90deg)"}return(0,f.jsx)(w,(0,a.Z)({className:(0,i.Z)(k.root,n),style:(0,a.Z)({width:p,height:p},M,m),ownerState:x,ref:t,role:"progressbar"},P,Z,{children:(0,f.jsx)(S,{className:k.svg,ownerState:x,viewBox:"22 22 44 44",children:(0,f.jsx)(C,{className:k.circle,style:R,ownerState:x,cx:44,cy:44,r:(44-y)/2,fill:"none",strokeWidth:y})})}))}))},36501:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var o=r(63366),a=r(87462),n=r(67294),i=(r(45697),r(86010)),l=r(71993),s=r(94581),c=r(91380),u=r(5609),d=r(15773);function p(e){return(0,d.Z)("MuiPaper",e)}(0,r(88858).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var v=r(85893);const f=["className","component","elevation","square","variant"],h=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},m=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t[`elevation${r.elevation}`]]}})((({theme:e,ownerState:t})=>(0,a.Z)({backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${e.palette.divider}`},"elevation"===t.variant&&(0,a.Z)({boxShadow:e.shadows[t.elevation]},"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",h(t.elevation))}, ${(0,s.Fq)("#fff",h(t.elevation))})`})))),y=n.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiPaper"}),{className:n,component:s="div",elevation:c=1,square:d=!1,variant:h="elevation"}=r,y=(0,o.Z)(r,f),g=(0,a.Z)({},r,{component:s,elevation:c,square:d,variant:h}),b=(e=>{const{square:t,elevation:r,variant:o,classes:a}=e,n={root:["root",o,!t&&"rounded","elevation"===o&&`elevation${r}`]};return(0,l.Z)(n,p,a)})(g);return(0,v.jsx)(m,(0,a.Z)({as:s,ownerState:g,className:(0,i.Z)(b.root,n),ref:t},y))}))},94184:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===n)if(r.toString===Object.prototype.toString)for(var l in r)o.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},73727:(e,t,r)=>{"use strict";r.d(t,{VK:()=>u,OL:()=>b});var o=r(5977),a=r(51721),n=r(67294),i=r(37531),l=(r(45697),r(87462)),s=r(63366),c=r(2177),u=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).history=(0,i.lX)(t.props),t}return(0,a.Z)(t,e),t.prototype.render=function(){return n.createElement(o.F0,{history:this.history,children:this.props.children})},t}(n.Component);n.Component;var d=function(e,t){return"function"==typeof e?e(t):e},p=function(e,t){return"string"==typeof e?(0,i.ob)(e,null,null,t):e},v=function(e){return e},f=n.forwardRef;void 0===f&&(f=v);var h=f((function(e,t){var r=e.innerRef,o=e.navigate,a=e.onClick,i=(0,s.Z)(e,["innerRef","navigate","onClick"]),c=i.target,u=(0,l.Z)({},i,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),o())}});return u.ref=v!==f&&t||r,n.createElement("a",u)})),m=f((function(e,t){var r=e.component,a=void 0===r?h:r,u=e.replace,m=e.to,y=e.innerRef,g=(0,s.Z)(e,["component","replace","to","innerRef"]);return n.createElement(o.s6.Consumer,null,(function(e){e||(0,c.Z)(!1);var r=e.history,o=p(d(m,e.location),e.location),s=o?r.createHref(o):"",h=(0,l.Z)({},g,{href:s,navigate:function(){var t=d(m,e.location),o=(0,i.Ep)(e.location)===(0,i.Ep)(p(t));(u||o?r.replace:r.push)(t)}});return v!==f?h.ref=t||y:h.innerRef=y,n.createElement(a,h)}))})),y=function(e){return e},g=n.forwardRef;void 0===g&&(g=y);var b=g((function(e,t){var r=e["aria-current"],a=void 0===r?"page":r,i=e.activeClassName,u=void 0===i?"active":i,v=e.activeStyle,f=e.className,h=e.exact,b=e.isActive,Z=e.location,x=e.sensitive,k=e.strict,w=e.style,S=e.to,C=e.innerRef,R=(0,s.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return n.createElement(o.s6.Consumer,null,(function(e){e||(0,c.Z)(!1);var r=Z||e.location,i=p(d(S,r),r),s=i.pathname,M=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),P=M?(0,o.LX)(r.pathname,{path:M,exact:h,sensitive:x,strict:k}):null,N=!!(b?b(P,r):P),E="function"==typeof f?f(N):f,_="function"==typeof w?w(N):w;N&&(E=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(E,u),_=(0,l.Z)({},_,v));var z=(0,l.Z)({"aria-current":N&&a||null,className:E,style:_,to:i},R);return y!==g?z.ref=t||C:z.innerRef=C,n.createElement(m,z)}))}))}}]);