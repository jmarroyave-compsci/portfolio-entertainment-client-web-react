(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[173],{2642:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(1048),i=r(2793),o=r(7294),a=(r(5697),r(6010)),s=r(7463),c=r(1796),l=r(9602),d=r(6122),u=r(5116),p=r(8216),f=r(1420);function h(e){return(0,f.Z)("MuiButton",e)}var m=(0,r(1271).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),g=r(5893);const b=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>(0,i.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),v=(0,l.ZP)(u.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,p.Z)(r.color)}`],t[`size${(0,p.Z)(r.size)}`],t[`${r.variant}Size${(0,p.Z)(r.size)}`],"inherit"===r.color&&t.colorInherit,r.disableElevation&&t.disableElevation,r.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>(0,i.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${e.palette[t.color].main}`,backgroundColor:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.palette[t.color].dark,"@media (hover: none)":{backgroundColor:e.palette[t.color].main}}),"&:active":(0,i.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[8]}),[`&.${m.focusVisible}`]:(0,i.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[6]}),[`&.${m.disabled}`]:(0,i.Z)({color:e.palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===t.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main,border:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${m.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${m.disabled}`]:{boxShadow:"none"}})),j=(0,l.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.startIcon,t[`iconSize${(0,p.Z)(r.size)}`]]}})((({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e)))),x=(0,l.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.endIcon,t[`iconSize${(0,p.Z)(r.size)}`]]}})((({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e))));var O=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiButton"}),{children:o,color:c="primary",component:l="button",disabled:u=!1,disableElevation:f=!1,disableFocusRipple:m=!1,endIcon:y,focusVisibleClassName:O,fullWidth:Z=!1,size:w="medium",startIcon:P,type:S,variant:z="text"}=r,k=(0,n.Z)(r,b),C=(0,i.Z)({},r,{color:c,component:l,disabled:u,disableElevation:f,disableFocusRipple:m,fullWidth:Z,size:w,type:S,variant:z}),D=(e=>{const{color:t,disableElevation:r,fullWidth:n,size:o,variant:a,classes:c}=e,l={root:["root",a,`${a}${(0,p.Z)(t)}`,`size${(0,p.Z)(o)}`,`${a}Size${(0,p.Z)(o)}`,"inherit"===t&&"colorInherit",r&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,p.Z)(o)}`],endIcon:["endIcon",`iconSize${(0,p.Z)(o)}`]},d=(0,s.Z)(l,h,c);return(0,i.Z)({},c,d)})(C),I=P&&(0,g.jsx)(j,{className:D.startIcon,ownerState:C,children:P}),E=y&&(0,g.jsx)(x,{className:D.endIcon,ownerState:C,children:y});return(0,g.jsxs)(v,(0,i.Z)({ownerState:C,component:l,disabled:u,focusRipple:!m,focusVisibleClassName:(0,a.Z)(D.focusVisible,O),ref:t,type:S},k,{classes:D,children:[I,o,E]}))}))},6481:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var n=r(4942),i=r(885),o=r(7294),a=r(4419),s=r(7090),c=r(361),l=r(1163),d=r(6085),u=r(2275),p=r(6447),f=r(2848),h=r(7338),m=r(5893);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e){var t=e.onChange,r=(0,o.useMemo)((function(){return[{label:"Movies",id:"movies"}]}),[]),n=(0,o.useMemo)((function(){return function(){for(var e=[],t=(new Date).getFullYear();t>1920;t--)e.push({label:t.toString(),id:t.toString()});return e}()}),[]),i=(0,o.useState)(r.find((function(t){return t.id==e.entity}))),a=i[0],s=i[1],c=(0,o.useState)(n.find((function(t){return t.id==e.year}))),l=c[0],d=c[1],u=function(e,r){t&&t(e.id,r.id)};return(0,m.jsxs)(p.Z,{spacing:2,children:[(0,m.jsx)(h.Z,{disableClearable:!0,options:r,value:a,onChange:function(e,t){u(l,t),s(t)},sx:{width:300},renderInput:function(e){return(0,m.jsx)(f.Z,b(b({},e),{},{label:"From"}))}}),(0,m.jsx)(h.Z,{disableClearable:!0,options:n,value:l,onChange:function(e,t){u(t,a),d(t)},sx:{width:300},renderInput:function(e){return(0,m.jsx)(f.Z,b(b({},e),{},{label:"Year"}))}})]})}var v=r(9602),j=r(1531),x=r(9895),O=r(8973);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var w=(0,v.ZP)("div")({padding:"0.5rem"}),P=(0,v.ZP)("div")({padding:"0.5rem"});function S(e){var t=e.data,r=e.loading,n=e.year,i=e.all;return r=r||!t||0==t.length,t=t&&t.length>0?t:[1,2,3,4,5],(0,m.jsx)(w,{children:(0,m.jsx)(d.Z,{justifyContent:"center",fill:!0,style:{width:"100%"},children:t.map((function(e,t){return(0,m.jsx)(u.Z,{xs:12,sm:6,md:6,lg:4,children:(0,m.jsx)(P,{children:r?(0,m.jsx)(z,{}):(0,m.jsx)(k,{data:e,year:n,all:i})})},t)}))})})}function z(){return(0,m.jsx)(x.Z,{style:{padding:"0.5rem"},children:(0,m.jsxs)(p.Z,{spacing:1,children:[(0,m.jsx)(O.Z,{variant:"text",width:"80%"}),(0,m.jsx)(O.Z,{variant:"rectangular",height:40})]})})}function k(e){return(0,m.jsx)(j.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}var C=r(9151),D=r(9482),I=r(2752);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=(0,C.Z)((function(e){var t=(0,l.useRouter)(),r=e.data,n=(e.loading,e.route);n=n||{};var i=(0,o.useState)(e.route&&e.route.year?e.route.year:(new Date).getFullYear()),a=i[0],s=i[1],c=(0,o.useState)(e.route&&e.route.entity?e.route.entity:"movies"),d=c[0],u=c[1];return e.route&&e.route.page&&e.route.page,(0,m.jsxs)(p.Z,{children:[(0,m.jsx)(I.Z,{hero:!0}),(0,m.jsx)(y,{year:a,entity:d,onChange:function(e,r){s(e),u(r),t.push("/stories/awards/".concat(e,"/").concat(r)),window.scrollTo(0,0)}}),(0,m.jsx)(D.Z,R(R({},e),{},{url:"/stories/awards/".concat(a,"/").concat(d),children:(0,m.jsx)(S,{data:r,year:a,all:!0})}))]})})),T=r(3925);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=function(e){return(0,m.jsxs)(c.Z,{children:[(0,m.jsx)($,M({},e)),(0,m.jsx)(T.Z,M(M({},e),{},{filter:"awards"}))]})};function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W=function(e){return(0,m.jsx)(c.Z,{children:(0,m.jsxs)(d.Z,{className:"page-module",fill:!0,children:[(0,m.jsx)(u.Z,{xs:12,sm:12,md:9,lg:10,style:{paddingRight:"1rem"},children:(0,m.jsx)($,_({},e))}),(0,m.jsx)(u.Z,{xs:12,sm:12,md:3,lg:2,style:{paddingRight:"1rem"},children:(0,m.jsx)(T.Z,_(_({},e),{},{filter:"awards"}))})]})})};function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e){return(0,m.jsx)(s.Z,{xs:(0,m.jsx)(B,V({},e)),md:(0,m.jsx)(W,V({},e))})}function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=function(e){var t=(0,l.useRouter)(),r=t&&t.query&&t.query.index?t.query.index:[],n=(0,i.Z)(r,3),o=n[0],s=n[1],c=n[2],d={page:c=c?parseInt(c):1,entity:s,year:o},u=G(G({},e),{},{route:d});return u.breadcrumbs=[{name:"stories",url:"/stories"},{name:"awards"}],(0,m.jsx)(a.Z,G(G({},u),{},{children:(0,m.jsx)(L,G({},u))}))}},8329:function(e,t,r){"use strict";r(7294);var n=r(9983),i=r(5893);t.Z=function(e){var t=e.id,r=e.entity,o=e.children;return(0,i.jsx)(n.Z,{border:!1,to:"/movies/".concat(t,"/").concat(encodeURIComponent(r)),children:o})}},8498:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});r(7294);var n=r(9602),i=(r(6085),r(2275),r(1189),r(5893)),o=(0,n.ZP)("div")({marginTop:"1rem"}),a=(0,n.ZP)("div")({}),s=(0,n.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),c=(0,n.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),l=(0,n.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),d=(0,n.ZP)("h4")({margin:0}),u=(0,n.ZP)("div")({margin:"1rem 0 0 0",padding:"0",fontSize:"1rem",lineHeight:"1rem"}),p=(0,n.ZP)("div")({textTransform:"uppercase",margin:"1rem 0 0 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem",fontWeight:400}),f=(0,n.ZP)("div")({fontSize:"0.85rem",lineHeight:"0.95rem"}),h=(0,n.ZP)("div")({fontSize:"0.5rem",lineHeight:"0.6rem",textTransform:"uppercase",paddingTop:"0.5rem"});function m(e){var t=e.data;return t&&0!=t.length?!0===e.mini?function(e,t){var r=e.year,n=e.all,o=n?t.length:2;r=parseInt(r);var a=function(e){return!r||e.year==r};return(0,i.jsxs)(s,{children:[t&&t.length>0&&t.slice(0,o).map((function(e,t){return a(e)&&(0,i.jsx)("div",{children:(0,i.jsxs)(c,{children:[e.year," - ",e.name.toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})},t)})),!n&&t&&t.length>o&&(0,i.jsx)(c,{children:(0,i.jsx)(c,{children:(0,i.jsxs)(l,{children:["and ",t.length-o," more"]})})})]})}(e,t):function(e,t){var r=null,n=null,s=(e.year,function(e){return r&&r==e.year?null:(r=e.year,n=null,(0,i.jsx)(u,{children:e.year}))}),c=function(e){return n&&n==e.name?null:(n=e.name,(0,i.jsx)(p,{children:e.name}))};return(0,i.jsxs)(o,{children:[(0,i.jsx)(d,{children:"awards"}),t&&t.length>0&&t.map((function(e,t){return(0,i.jsxs)("div",{children:[s(e),c(e),(0,i.jsxs)(a,{children:[(0,i.jsx)(h,{children:"false"===e.won||!1===e.won?"nominee":"winner"}),(0,i.jsx)(f,{children:e.category})]})]},t)}))]})}(e,t):null}},2752:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});r(7294);var n=r(9602),i=r(6085),o=r(2275),a=r(515),s=r(2478),c=r(1531),l=r(5893);function d(e){var t=e.data;e.loading;return(0,l.jsx)(s.Z,{data:t,renderItem:function(e){return(0,l.jsx)(c.Z,{data:e})}})}var u=r(9151),p=(0,n.ZP)("h1")({padding:0,margin:"1rem 0 2rem 0"}),f=(0,n.ZP)("div")({fontSize:"1rem"}),h=(0,n.ZP)("div")({paddingTop:"2rem"}),m=(0,u.Z)((function(e){var t=e.data,r=(e.loading,e.year),n=e.hero;return(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsxs)(i.Z,{justifyContent:"center",fill:!0,style:{width:"100%"},children:[(0,l.jsx)(o.Z,{xs:12,sm:12,md:12,children:(0,l.jsx)(p,{children:"Awards"})}),(0,l.jsx)(o.Z,{xs:12,sm:12,md:12,children:(0,l.jsx)(f,{children:"search and visualize the award's information from the Oscars, Golden Globes and Emmys"})}),!n&&(0,l.jsx)(o.Z,{xs:12,sm:12,md:12,children:(0,l.jsx)(d,{data:t})}),!n&&(0,l.jsx)(o.Z,{xs:12,sm:12,md:12,children:(0,l.jsx)(h,{children:(0,l.jsx)(a.Z,{border:!0,href:"/stories/awards/".concat(r),children:" See more"})})})]})})}))},9151:function(e,t,r){"use strict";var n,i=r(4942),o=r(168),a=(r(7294),r(4397)),s=r(846),c=r(5893);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=(0,a.Ps)(n||(n=(0,o.Z)(["\nquery get($entity:String, $year: Int, $page: Int) {\n  storiesAwards(entity: $entity, year: $year, page: $page){\n    id\n    title\n    link\n    awards {\n      category\n      name\n      won\n      year\n    }\n    image {\n      poster\n    }\n  }\n}\n"])));t.Z=function(e){return function(t){var r=t.route,n=(r=r||{}).entity?r.entity:"movies",i=r.year?r.year:t.year?t.year:(new Date).getFullYear(),o=r.page?r.page:1,a=t.data?{}:(0,s.a)(u,{variables:{entity:n,year:parseInt(i),page:parseInt(o)}}),l=t.data?t.data:a.data?a.data.storiesAwards:null;return(0,c.jsx)(e,d(d(d({},t),a),{},{data:l}))}}},1531:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});r(7294);var n=r(2498),i=r(8329),o=r(8498),a=r(5893);function s(e){var t=e.full,r=e.year,s=e.all,c=e.data,l=c.id,d=c.title,u=c.awards,p=c.image;return(0,a.jsx)(n.Z,{image:p?p.poster:p,imageHeight:100,text:(0,a.jsx)(o.Z,{mini:!t,data:u,year:r,all:s}),title:d,actions:[(0,a.jsx)(i.Z,{id:l,entity:d,children:"Go"})]})}},2478:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});r(7294);var n=r(9602),i=r(6529),o=(r(338),r(8973)),a=r(6447),s=r(6501),c=r(5893),l=(0,n.ZP)("div")({padding:"1rem 0"}),d=(0,n.ZP)("div")({padding:"0.5rem"});function u(e){var t=e.data,r=e.loading;return r=r||!t||!t.length,t=t&&t.length&&t.length>0?t:[1,2,3,4,5],(0,c.jsx)(l,{children:(0,c.jsx)(i.default,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,centerMode:!1,className:"",containerClass:"container-with-dots",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30}},showDots:!1,sliderClass:"",slidesToSlide:1,swipeable:!0,children:t.map((function(t,n){return(0,c.jsx)(d,{children:r?(0,c.jsx)(p,{}):e.renderItem?e.renderItem(t):f(t)},n)}))})})}function p(){return(0,c.jsx)(s.Z,{style:{padding:"0.5rem"},children:(0,c.jsxs)(a.Z,{spacing:1,children:[(0,c.jsx)(o.Z,{variant:"text",width:"80%"}),(0,c.jsx)(o.Z,{variant:"rectangular",height:118}),(0,c.jsx)(o.Z,{variant:"text"})]})})}function f(e){e.id;var t=e.description,r=e.title;e.image,e.link;return(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:r}),(0,c.jsx)("span",{children:t})]})}},9482:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});r(7294);var n=r(9602),i=r(1163),o=r(6447),a=r(2642),s=r(5893),c=(0,n.ZP)("h3")({marginTop:0});function l(e){var t=(0,i.useRouter)(),r=e.children,n=e.route,l=e.loading,d=e.data,u=e.url,p=e.skeleton,f=n.page;f=f?parseInt(f):1;var h=function(e){var r="".concat(u,"/").concat(e);t.push(r),window.scrollTo(0,0)},m=d&&d.length<10,g=1==f;return(0,s.jsx)(s.Fragment,{children:d&&d.length>0?(0,s.jsxs)(o.Z,{spacing:2,children:[r,(0,s.jsxs)(o.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,s.jsx)(a.Z,{variant:"outlined",disabled:g,onClick:function(){return h(f-1)},children:"Back"}),(0,s.jsx)(a.Z,{variant:"outlined",disabled:m,onClick:function(){return h(f+1)},children:"Next"})]})]}):(0,s.jsx)(c,{children:l?p||"loading":"No results"})})}},3925:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});r(7294);var n=r(9602),i=r(5671),o=r(3144),a=[{id:"movies",title:"Movies",url:"/movies",tags:["tv","awards"]},{id:"awards",title:"Awards",url:"/stories/awards",tags:["movies","people","tv"]},{id:"people",title:"People",url:"/people",tags:["awards"]},{id:"podcasts",title:"Podcasts",url:"/podcasts",tags:["podcast_music"]},{id:"podcast_music",title:"Music Podcasts",url:"/podcasts/stories/music",tags:["podcasts"]}],s=new(function(){function e(){(0,i.Z)(this,e)}return(0,o.Z)(e,[{key:"getBy",value:function(e){var t=[];return a.forEach((function(r){r.id!==e&&r.tags.includes(e)&&t.push(r)})),t}}]),e}()),c=r(6501),l=r(515),d=r(5893),u=(0,n.ZP)("div")({padding:"0.85rem"}),p=(0,n.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem"}),f=(0,n.ZP)("div")({fontSize:"0.9rem"}),h=function(e){var t=e.filter,r=s.getBy(t);return(0,d.jsx)(c.Z,{children:(0,d.jsxs)(u,{children:[(0,d.jsx)(p,{children:"Stories"}),r.map((function(e,t){return(0,d.jsx)(f,{children:(0,d.jsx)(l.Z,{href:e.url,children:e.title})},t)}))]})})}},2498:function(e,t,r){"use strict";var n=r(5671),i=r(3144),o=r(136),a=r(2963),s=r(1120),c=r(7294),l=r(4670),d=r(8463),u=r(1907),p=r(9912),f=r(951),h=r(4697),m=r(2318),g=r(5893);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var i=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var y=function(e){(0,o.Z)(r,e);var t=b(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.classes,r=e.title,n=e.text,i=e.image,o=e.className,a=e.style,s=e.actions,c=e.imageHeight,l=e.noImage,b=0;return(a=a||{}).display="flex",a.flexDirection="column",i=i||"https://dummyimage.com/${(imageHeight) ? imageHeight : 300}",(0,g.jsxs)(d.Z,{className:o,style:a,children:[(0,g.jsx)(h.Z,{title:(0,g.jsx)(m.Z,{noWrap:!0,variant:"h6",component:"h4",children:r}),style:{display:"block",overflow:"hidden"}}),!l&&(0,g.jsx)(f.Z,{className:t.media,height:c||null,image:i}),n&&""!==n.trim&&(0,g.jsx)(p.Z,{style:{flex:1},children:n}),(0,g.jsx)(u.Z,{children:s&&s.map((function(e){return(0,g.jsx)("div",{children:e},b++)}))})]})}}]),r}(c.Component);t.Z=(0,l.Z)((function(e){return{media:{height:0,paddingTop:"56.25%",backgroundColor:"#efefef"}}}))(y)},361:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});r(7294);var n=r(6447),i=r(5893);function o(e){var t=e.noPadding;return(0,i.jsx)(n.Z,{sx:{padding:t?{}:{xs:"0rem 2rem 3rem 2rem",sm:"0rem 2rem 3rem 2rem",lg:"0rem 4rem 3rem 4rem"},fontSize:"1rem"},children:e.children})}},1189:function(e,t,r){"use strict";r(7294),r(5893)},8557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stories/awards/[[...index]]",function(){return r(6481)}])}},function(e){e.O(0,[34,846,891,419,774,888,179],(function(){return t=8557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);