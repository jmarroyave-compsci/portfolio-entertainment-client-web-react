(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9603],{42341:function(e,r,t){"use strict";t(67294);var n=t(89260),i=t(85893);r.Z=function(e){var r=e.id,t=e.children,c=e.box;return(0,i.jsx)(n.Z,{box:c,to:"/movies/festivals/".concat(r),children:t})}},49896:function(e,r,t){"use strict";t(67294);var n=t(89260),i=t(85893);r.Z=function(e){var r=e.id,t=(e.entity,e.children),c=e.box;return r?(0,i.jsx)(n.Z,{box:c,border:!1,to:"/movies/".concat(r),children:t}):t}},55476:function(e,r,t){"use strict";t(67294);var n=t(89260),i=t(85893);r.Z=function(e){var r=e.id,t=(e.entity,e.children),c=e.box;return r?(0,i.jsx)(n.Z,{box:c,border:!1,to:"/people/".concat(r),children:t}):t}},44898:function(e,r,t){"use strict";t(67294);var n=t(89260),i=t(85893);r.Z=function(e){var r=e.id,t=(e.entity,e.children),c=e.box;return(0,i.jsx)(n.Z,{box:c,border:!0,to:"/podcasts/".concat(r),children:t})}},62226:function(e,r,t){"use strict";t(67294);var n=t(89260),i=t(85893);r.Z=function(e){var r=e.id,t=(e.entity,e.children),c=e.box;return(0,i.jsx)(n.Z,{box:c,border:!1,to:"/tv-shows/".concat(r),children:t})}},11106:function(e,r,t){"use strict";t(67294);var n=t(89260),i=t(85893);r.Z=function(e){var r=e.id,t=(e.entity,e.children),c=e.box;return(0,i.jsx)(n.Z,{box:c,border:!1,to:"/video-games/".concat(r),children:t})}},62448:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});t(67294);var n=t(11163),i=t(14308),c=t(72642),o=t(50367),a=t(58862),s=t(85893);function l(e){var r=(0,n.useRouter)(),t=e||{},l=t.children,d=t.route,u=t.loading,p=t.data,m=t.url,f=t.skeleton,h=t.onPageChange,j=t.page,y=t.pageSize,g=void 0===y?10:y;j=(j=j||(d&&d.page?d.page:null))?parseInt(j):1;var b=function(e){if(h&&h(e),m){var t="".concat(m,"/").concat(e);r.push(t)}},x=p&&p.length<g,v=1==j;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.RQ,{children:p&&p.length>0?(0,s.jsxs)(i.Z,{spacing:2,children:[l,(0,s.jsxs)(i.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,s.jsx)(c.Z,{variant:"outlined",disabled:v,onClick:function(){return b(j-1)},children:"Back"}),(0,s.jsx)(c.Z,{variant:"outlined",disabled:x,onClick:function(){return b(j+1)},children:"Next"})]})]}):(0,s.jsx)(a.Dx,{children:u?f||"loading":"No results"})})})}},14308:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var n=t(4942),i=(t(67294),t(26447)),c=t(85893);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e){return(0,c.jsx)(i.Z,a(a({},e),{},{children:e.children}))}},70357:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});t(67294);var n=t(14308),i=t(85893);function c(e){var r=e.noPadding;return(0,i.jsx)(n.Z,{sx:{padding:r?{}:{xs:"0rem 2rem 3rem 2rem",sm:"0rem 2rem 3rem 2rem",lg:"0rem 4rem 3rem 4rem"},fontSize:"1rem"},children:e.children})}},40915:function(e,r,t){"use strict";var n=t(67294),i=t(90908),c=t(71508),o=t(2734),a=t(85893),s=function(e,r){var t=r.compact,n={xs:{top:1.5,bottom:3,left:1.5,right:1.5},sm:{top:2,bottom:4,left:3,right:3},md:{top:3,bottom:2.5,left:2.5,right:2.5}}[e];return"".concat(n.top,"rem ").concat(n.right,"rem ").concat(t?n.top:n.bottom,"rem ").concat(n.left,"rem")},l=function(e,r){var t="light"===r.palette.mode?r.palette.primary.light:r.palette.primary.dark,n="dark"===r.palette.mode?r.palette.primary.light:r.palette.primary.dark;switch(e){case"section-0":return{background:"linear-gradient(60deg, ".concat(r.palette.primary.main," 75%, ").concat(r.palette.common.black," 150%)"),color:r.palette.primary.contrastText};case"section-1":return{background:"linear-gradient(60deg, ".concat(r.palette.primary.main," 5%, ").concat(r.palette.common.black," 100%)"),color:r.palette.primary.contrastText};case"section-dark":return{background:"linear-gradient(180deg, ".concat(n," 0%, ").concat(r.palette.background.paper," 125%)"),color:r.palette.getContrastText(n)};case"section-3":return{background:"linear-gradient(180deg, ".concat(t," 50%, ").concat(r.palette.common.white," 190%)"),color:r.palette.getContrastText(t)};default:return{background:"inherit",color:"inherit"}}};r.Z=function(e){var r=(0,o.Z)(),t=e.className,d=e.cover,u=(e.padding,e.children),p=(e.hero,e.rounded),m=(e.compact,(0,n.useMemo)((function(){return l(t,r)}),[])),f=!0===d?"100vh":"inherit";return p=!0===p,(0,a.jsx)(i.Z,{from:"/core/ui/section",children:(0,a.jsx)(c.Z,{className:"com-layout-section ".concat(t),sx:{padding:{xs:s("xs",e),sm:s("sm",e),md:s("md",e)},boxSizing:"border-box",width:"100%",height:f,borderRadius:p?"0.5rem 0.5rem 0 0":0,background:m.background,color:m.color},children:u})})}},48724:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});t(67294);var n=t(29602),i=t(71267),c=t(85893);function o(e){var r=e.text,t=e.color,n=e.variant,o=e.onClick;return(0,c.jsx)(a,{children:(0,c.jsx)(i.Z,{variant:n,color:t,size:"small",label:r,onClick:o})})}o.defaultProps={onClick:null,text:"",color:"primary",variant:"default"};var a=(0,n.ZP)("div")({display:"inline-block",margin:"0",marginRight:"0.25rem",marginBottom:"0.25rem"})},14763:function(e,r,t){"use strict";t.d(r,{Z:function(){return v}});var n=t(4942),i=(t(67294),t(14308)),c=t(70357),o=t(40915),a=t(52651),s=t(23275),l=t(29602),d=t(49616),u=t(36501),p=t(89260),m=t(85893),f=(0,l.ZP)("div")((function(e){var r=e.theme;e.img;return{color:r.palette.text.primary,backgroundColor:r.palette.background.paper,padding:"1rem"}})),h=(0,l.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem",color:"inherit"}),j=(0,l.ZP)("div")({fontSize:"0.9rem",color:"inherit"}),y=function(e){var r=e.filter,t=e.breadcrumbs,n=(0,d.ih)(r,t);return(0,m.jsx)(u.Z,{children:(0,m.jsxs)(f,{children:[(0,m.jsx)(h,{children:"See also"}),n.slice(0,5).map((function(e,r){return(0,m.jsx)(j,{children:(0,m.jsx)(p.Z,{href:e.url,children:e.title})},r)}))]})})},g=t(50367);function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e){var r=e.banner,t=e.mainCol,n=e.rightCol,l=e.id,d=!!e.noPadding&&e.noPadding;return(0,m.jsxs)(i.Z,{children:[r&&(0,m.jsx)("div",{style:{marginBottom:"2rem"},children:(0,m.jsx)(o.Z,{compact:!0,className:"section-0",children:r})}),(0,m.jsx)(c.Z,{noPadding:d,children:(0,m.jsxs)(a.Z,{className:"page-module",fill:!0,children:[(0,m.jsx)(s.Z,{xs:12,sm:12,md:9,lg:10,children:(0,m.jsx)(g.X,{children:t})}),(0,m.jsx)(s.Z,{xs:12,sm:12,md:3,lg:2,children:(0,m.jsxs)("div",{style:{paddingLeft:"1rem",paddingRight:"0.5rem"},children:[(0,m.jsx)(y,x(x({},e),{},{filter:l,breadcrumbs:e.breadcrumbs})),n]})})]})})]})}},50367:function(e,r,t){"use strict";t.d(r,{RQ:function(){return u},X:function(){return h},ck:function(){return f}});var n=t(4942),i=(t(67294),t(29602)),c=t(36501),o=t(85893);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e){return(0,o.jsx)(c.Z,s(s({},e),{},{children:e.children}))}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var u=(0,i.ZP)("div")({margin:"0 0 2rem 0",padding:0,width:"100%"}),p=(0,i.ZP)("div")((function(e){return{margin:"0",padding:"0 1rem 1rem 0",display:"flex",flexGrow:1,overflow:"hidden",width:"100%",color:e.theme.palette.text.primary,backgroundColor:"transparent"}})),m=(0,i.ZP)("div")((function(e){return{display:"flex",flexGrow:1,width:"100%"}})),f=function(e){var r=!e.paper||e.paper,t=(0,o.jsx)(m,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e));return r&&(t=(0,o.jsx)(l,{sx:{display:"flex",flexGrow:1,margin:"0.1rem",width:"100%"},children:t})),(0,o.jsx)(p,{children:t})},h=(0,i.ZP)("div")({padding:"0rem 0rem 4rem 0rem"})},58862:function(e,r,t){"use strict";t.d(r,{Zh:function(){return i},Dx:function(){return c},DK:function(){return o},Qy:function(){return a},GH:function(){return s},nv:function(){return l},x4:function(){return d},oA:function(){return u},VY:function(){return p}});t(67294);var n=t(29602),i=(0,n.ZP)("div")({padding:"1rem"}),c=(0,n.ZP)("h2")({fontSize:"2.5rem",lineHeight:"2.5rem",padding:"0",margin:"0 0 0.75rem 0"}),o=(0,n.ZP)("h3")({fontSize:"1.8rem",lineHeight:"2rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),a=(0,n.ZP)("div")({fontSize:"0.7rem",lineHeight:"0.7rem",textTransform:"uppercase",fontWeight:"400",margin:"0 0 0 0",padding:"0"}),s=(0,n.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:"0 0 0.5rem 0"}),l=(0,n.ZP)("div")({margin:0,marginBottom:"1rem"}),d=(0,n.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}),u=(0,n.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),p=(0,n.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})},25222:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return ae}});var n=t(67294),i=t(11163),c=t(4942),o=t(93942),a=t(47906),s=t(35283),l=t(19016),d=t(14763),u=t(29602),p=t(14308),m=t(32116),f=t(62448),h=t(28973),j=t(50367),y=t(85893);function g(e){return(0,y.jsx)(j.X,{children:(0,y.jsxs)(p.Z,{spacing:1,divider:(0,y.jsx)(m.Z,{flexItem:!0}),children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(h.Z,{variant:"text",style:{width:"25%"}}),(0,y.jsx)(h.Z,{variant:"text",style:{width:"60%"}})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(h.Z,{variant:"text",style:{width:"25%"}}),(0,y.jsx)(h.Z,{variant:"text",style:{width:"60%"}})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(h.Z,{variant:"text",style:{width:"25%"}}),(0,y.jsx)(h.Z,{variant:"text",style:{width:"60%"}})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(h.Z,{variant:"text",style:{width:"25%"}}),(0,y.jsx)(h.Z,{variant:"text",style:{width:"60%"}})]})]})})}var b=t(62226),x=t(11106),v=t(55476),O=t(49896),P=t(44898),Z=t(42341),w=(t(48724),t(23709)),E=t(26447),D=t(50542),T=t(14212),F=t(58862),k=t(98722),S=t(72478),I=t(89149),C=t(72642),_=t(60181),N=t(23508);function R(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function B(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?R(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var A={entities:[],filterByTimeFrame:!1,year:(new Date).getFullYear(),timeFrame:1,timeFrameNotes:""},z=function(e){return!e.filterByTimeFrame||parseInt(e.year)<1800||isNaN(parseInt(e.year))||isNaN(parseInt(e.timeFrame))?" no time frame filter ":"from ".concat(parseInt(e.year)-parseInt(e.timeFrame)," to ").concat(parseInt(e.year)+parseInt(e.timeFrame))};function M(e,r){var t;switch(r.type){case"INIT":return B(B({},e),{},{entities:r.payload.entities?r.payload.entities:e.entities,year:r.payload.year?r.payload.year:e.year,timeFrame:r.payload.timeFrame?r.payload.timeFrame:e.timeFrame});case"ENTITIES_CHANGED":var n=r.payload.name,i=[];return i=e.entities.indexOf(n)<0?e.entities.concat([n]):e.entities.filter((function(e){return e!=n})),B(B({},e),{},{entities:i});case"TOGGLE_FILTER_BY_TIMEFRAME":return B(B({},e),{},{filterByTimeFrame:!e.filterByTimeFrame});case"FIELD_CHANGED":return B(B({},e),{},(0,c.Z)({},r.payload.name,r.payload.value));case"UPDATE_TIMEFRAME_NOTES":return B(B({},e),{},{timeFrameNotes:z(e)});case"SUBMIT":return B({},e);default:throw new Error("operation ".concat(null===(t=r.type)||void 0===t?void 0:t.toUpperCase()," not implemented"))}}function H(e){var r=(0,n.useState)(!1),t=r[0],i=r[1],c=(0,n.useReducer)(M,A),o=c[0],a=c[1],s=e.params,l=e.onFiltersChanged,d=(0,k.uc)();return(0,n.useEffect)((function(){a({type:"INIT",payload:s}),a({type:"UPDATE_TIMEFRAME_NOTES"})}),[s]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(C.Z,{onClick:function(){return i(!t)},endIcon:t?(0,y.jsx)(_.Z,{}):(0,y.jsx)(N.Z,{}),children:"Filters"}),(0,y.jsx)("div",{style:{display:!1===t?"none":"block"},children:(0,y.jsxs)(w.Z,{children:[(0,y.jsxs)(j.RQ,{children:[(0,y.jsx)(F.x4,{children:"entities"}),(0,y.jsx)(E.Z,{spacing:2,direction:"row",style:{width:"100%",overflowX:"auto"},children:d.map((function(e,r){return(0,y.jsx)(D.Z,{control:(0,y.jsx)(I.Z,{}),label:e.name,labelPlacement:"end",name:e.value,checked:o.entities.includes(e.value),size:"small",onChange:function(e){return a({type:"ENTITIES_CHANGED",payload:e.target})}},r)}))})]}),(0,y.jsxs)(j.RQ,{children:[(0,y.jsxs)(F.x4,{children:[(0,y.jsx)("span",{children:"time frame "}),(0,y.jsx)(T.Z,{size:"small",checked:o.filterByTimeFrame,onChange:function(e){a({type:"TOGGLE_FILTER_BY_TIMEFRAME",payload:e.target}),a({type:"UPDATE_TIMEFRAME_NOTES"})}})]}),(0,y.jsxs)(E.Z,{direction:"row",spacing:2,style:{width:"100%",overflowX:"auto"},children:[(0,y.jsx)("div",{children:(0,y.jsx)(S.Z,{id:"year",margin:"normal",disabled:!o.filterByTimeFrame,label:"year",name:"year",value:o.year,onChange:function(e){a({type:"FIELD_CHANGED",payload:e.target}),a({type:"UPDATE_TIMEFRAME_NOTES"})},size:"small",inputProps:{inputMode:"numeric",pattern:"[0-9]*"}})}),(0,y.jsx)("div",{children:(0,y.jsx)(S.Z,{id:"time-frame",margin:"normal",disabled:!o.filterByTimeFrame,label:"window",name:"timeFrame",value:o.timeFrame,onChange:function(e){a({type:"FIELD_CHANGED",payload:e.target}),a({type:"UPDATE_TIMEFRAME_NOTES"})},size:"small",inputProps:{inputMode:"numeric",pattern:"[0-9]*"}})})]}),(0,y.jsx)(F.oA,{children:o.timeFrameNotes})]}),(0,y.jsx)(j.RQ,{children:(0,y.jsx)(C.Z,{variant:"outlined",onClick:function(){var e=B(B({},s),{},{entities:o.entities,year:o.filterByTimeFrame?o.year:null,timeFrame:o.filterByTimeFrame?o.timeFrame:null});l(e)},children:"Filter"})})]})})]})}function G(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?G(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var q=(0,u.ZP)("div")({marginBottom:"4rem"}),L=(0,u.ZP)("div")({paddingBottom:"1rem"}),U=(0,u.ZP)("div")({paddingBottom:"2rem"}),X=(0,u.ZP)("span")({fontWeight:"bold"}),Y=(0,u.ZP)("div")({}),V=(0,u.ZP)("div")({}),W=(0,u.ZP)("div")({fontSize:"0.65rem",lineHeight:"1rem",textTransform:"uppercase"}),K=(0,u.ZP)("h3")({marginTop:0}),J=(0,u.ZP)("div")({marginTop:0,fontSize:"0.85rem",lineHeight:"1rem"});function $(e){var r=e.r;switch(r.type){case"movie":return(0,y.jsxs)(V,{children:[(0,y.jsx)(W,{children:"Movie"}),(0,y.jsx)(K,{children:(0,y.jsx)(O.Z,{id:r.entityId,entity:r.entity,children:r.entity})}),r.desc&&(0,y.jsx)(J,{children:r.desc})]});case"people":case"person":return(0,y.jsxs)(V,{children:[(0,y.jsx)(W,{children:"Person"}),(0,y.jsx)(K,{children:(0,y.jsx)(v.Z,{id:r.entityId,entity:r.entity,children:r.entity})}),r.desc&&(0,y.jsx)(J,{children:r.desc})]});case"podcast":case"podcasts":return(0,y.jsxs)(V,{children:[(0,y.jsx)(W,{children:"Podcast"}),(0,y.jsx)(K,{children:(0,y.jsx)(P.Z,{id:r.entityId,entity:r.entity,children:r.entity})}),r.desc&&(0,y.jsx)(J,{children:r.desc})]});case"video_game":return(0,y.jsxs)(V,{children:[(0,y.jsx)(W,{children:"Video Game"}),(0,y.jsx)(K,{children:(0,y.jsx)(x.Z,{id:r.entityId,entity:r.entity,children:r.entity})}),r.desc&&(0,y.jsx)(J,{children:r.desc})]});case"tv_show":return(0,y.jsxs)(V,{children:[(0,y.jsx)(W,{children:"TV Show"}),(0,y.jsx)(K,{children:(0,y.jsx)(b.Z,{id:r.entityId,entity:r.entity,children:r.entity})}),r.desc&&(0,y.jsx)(J,{children:r.desc})]});case"festival":return(0,y.jsxs)(V,{children:[(0,y.jsx)(W,{children:"Festival"}),(0,y.jsx)(K,{children:(0,y.jsx)(Z.Z,{id:r.entityId,entity:r.entity,children:r.entity})}),r.desc&&(0,y.jsx)(J,{children:r.desc})]})}return"ERROR: type ".concat(r.type)}var ee=function(e){var r=e.data,t=(e.loading,e.qry,e.onPageChanged,e.params);return(0,y.jsxs)(q,{children:[(0,y.jsx)(L,{children:(0,y.jsxs)("div",{children:["search results for: ",(0,y.jsx)(X,{children:t.qry})]})}),(0,y.jsx)(U,{children:(0,y.jsx)(H,{params:t,onFiltersChanged:function(r){e.onFiltersChanged(r)}})}),(0,y.jsx)(Y,{children:(0,y.jsx)(f.Z,Q(Q({},e),{},{onPageChanged:!0,skeleton:(0,y.jsx)(g,{}),children:(0,y.jsx)(p.Z,{divider:(0,y.jsx)(m.Z,{flexItem:!0}),spacing:2,children:r&&r.map((function(e,r){return(0,y.jsx)($,{r:e},r)}))})}))})]})};function re(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function te(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?re(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):re(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ne(e){var r=(0,o.I0)(),t=(0,o.v9)((function(e){return e[a.Z.automata.name]}));return(0,n.useEffect)((function(){e.breadcrumbs&&r((0,l.YA)({breadcrumbs:e.breadcrumbs}))}),[e.breadcrumbs]),(0,n.useEffect)((function(){r((0,s.rQ)({qry:e.query,page:e.page}))}),[]),t?(0,y.jsx)(d.Z,{mainCol:(0,y.jsx)(ee,te(te(te(te({params:t.params},e),t),t.results),{},{onPageChange:function(e){return r((0,s.rQ)(te(te({},t.params),{},{page:e})))},onFiltersChanged:function(e){return r((0,s.rQ)(te({},e)))}}))}):(0,y.jsx)("div",{})}function ie(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ce(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ie(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var oe=function(e){return(0,y.jsx)(ne,ce(ce({},e),{},{render:"page"}))},ae=function(e){var r=(0,i.useRouter)(),t=r.query?r.query:{},n=t.q,c=t.page;return(0,y.jsx)(oe,{query:n,page:c,breadcrumbs:"/search"})}},48169:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return t(25222)}])}},function(e){e.O(0,[6499,3201,9774,2888,179],(function(){return r=48169,e(e.s=r);var r}));var r=e.O();_N_E=r}]);