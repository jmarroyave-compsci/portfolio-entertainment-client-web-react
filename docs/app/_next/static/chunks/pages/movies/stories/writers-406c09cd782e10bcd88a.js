(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1441],{20780:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});t(67294);var n=t(43332),i=t(49896),a=t(59231),o=t(39698),c=t(82356),s=t(85893);function u(e){var r=e.tiny,t=e.format;switch(t=r?"tiny":t){case"list":return function(e){var r=e.id,t=e.title,n=e.releaseYear,a=e.as;return(0,s.jsx)(o.u,{content:t,children:(0,s.jsx)(o.xs,{width:"220px",height:"125px",children:(0,s.jsxs)(i.Z,{id:r,children:[(0,s.jsx)(o.x4,{children:null!==n&&void 0!==n?n:"?"}),(0,s.jsx)(o.u,{children:(0,s.jsx)(o.Dx,{children:null!==t&&void 0!==t?t:"?"})}),a&&(0,s.jsx)("div",{children:(0,s.jsxs)(o.x4,{children:["as ",a.replace(/[\[\]\'\"]/g,"")]})})]})},r)})}(e);case"tiny":return function(e){var r,t;return(0,s.jsx)(o.u,{content:title,children:(0,s.jsx)(i.Z,{id:e.id,children:(0,s.jsx)(c.Z,{title:null!==(r=null===e||void 0===e?void 0:e.releaseYear)&&void 0!==r?r:"?",value:null!==(t=null===e||void 0===e?void 0:e.title)&&void 0!==t?t:"?"})})})}(e);case"card":default:return function(e){var r=e.full,t=e.releaseYear,c=e.all,u=e.id,l=e.title,d=e.awards,p=e.image;return(0,s.jsx)(o.u,{content:l,children:(0,s.jsx)(i.Z,{box:!0,id:u,children:(0,s.jsx)(n.Z,{image:p?p.poster:p,text:d?(0,s.jsx)(a.Z,{mini:!r,data:d,year:year,all:c}):null,title:l,subtitle:t})})})}(e)}}},2295:function(e,r,t){"use strict";var n=t(4942),i=(t(67294),t(50367)),a=t(58862),o=t(34769),c=t(20780),s=t(39698),u=t(85893);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=e.data,t=(e.loading,e.type),n=e.filter;if(!r||0==r.length)return(0,u.jsx)("div",{});var l=e.tiny?r.slice(0,3):r;l=n?l.filter(n):l;var p=t?(0,u.jsx)(a.DK,{children:(0,u.jsx)(s.Ct,{content:r.length,children:t})}):"";return(0,u.jsxs)(i.RQ,{children:[!e.tiny&&p,e.tiny&&l.map((function(e,r){return(0,u.jsx)("div",{children:(0,u.jsx)(c.Z,d({format:"tiny"},e.id))},r)})),!e.tiny&&(0,u.jsx)(o.Z,{data:l,item:function(e){return(0,u.jsx)(c.Z,d(d({format:"list"},e),e.id))}}),e.tiny&&r.length>l.length&&(0,u.jsxs)(a.x4,{children:["and ",r.length-l.length," more"]})]})}},89677:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var n,i=t(4942),a=(t(67294),t(55619)),o={automata:{name:"stories_writers"},page:{title:"Writers",description:"",url:function(e){var r=e.entity;return"/".concat(r,"/stories/writers")}},banner:{showData:!1}},c=t(15861),s=t(87757),u=t.n(s),l=t(24268),d=t(80105),p=t(11163),f=t(75679);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var h=o.automata.name,y=(0,l.hg)("".concat(h,"/fetchData"),function(){var e=(0,c.Z)(u().mark((function e(r,t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(b(r)),r.op={op:"eq",field:"profession",value:"writer"},r.withWrote=!0,r.withDirected=!1,r.qryName="writers",e.next=7,f.Ez(r);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),O=(0,l.oM)({name:h,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=g(g({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&p.default.push("".concat(o.page.url(e.params),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(n={},(0,i.Z)(n,y.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(n,y.fulfilled,(function(e,r){var t=r.payload,n=t.loading,i=t.error,a=t.data;e.data=a,e.loading=n,e.error=i})),(0,i.Z)(n,y.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),n)});d.h.reducerManager.add(h,O.reducer);O.reducer;var b=O.actions.setParams,v=t(25662),x=t(2295),m=t(85893);function w(e){var r=e.id,t=e.name,n=e.wrote;return(0,m.jsx)(v.Z,{id:r,name:t,text:(0,m.jsx)(x.Z,{tiny:!0,data:n})})}var P=t(45688);function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function E(e){return(0,m.jsx)(a.Z,{params:e,config:o,fetch:function(e){return y(D({},e))},item:function(e){return(0,m.jsx)(w,D({full:!0},e))},customDescription:(0,m.jsx)(P.C,{tag:"writer"}),customUrl:function(e){return o.page.url(e.entity)}})}function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var S=function(e){return(0,m.jsx)(E,k(k({},e),{},{render:"list"}))}},34769:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(67294),i=t(29602),a=t(26447),o=t(62448),c=t(36501),s=t(28973),u=t(85893),l=(0,i.ZP)("div")((function(){return{padding:"1rem",marginBottom:"0rem",backgroundColor:"transparent"}}));function d(e){var r=e.skeleton,t=e.data,i=e.item,c=e.noPaging,s=void 0===c||c,d=e.pageSize,f=e.loading,j=e.onPageChange,g=e.page,h=e.url,y=(0,n.useRef)(null);t=t||[1,2,3,4];var O=(0,u.jsx)(l,{children:(0,u.jsxs)(a.Z,{direction:"row",style:{overflowX:"auto"},children:[(0,u.jsx)("div",{ref:y}),t.map((function(e,t){return(0,u.jsx)("div",{style:{width:"100%"},children:f?r||(0,u.jsx)(p,{}):i?i(e):null},t)}))]})});return s||(O=(0,u.jsx)(o.Z,{pageSize:d,data:t,url:h,onPageChange:function(e){y.current.scrollIntoView(!1),j&&j(e)},page:g,loading:f,children:O})),O}function p(){return(0,u.jsx)(c.Z,{style:{width:"200px",backgroundColor:"transparent",flexGrow:1,padding:"1rem",margin:"0.5rem"},children:(0,u.jsxs)(a.Z,{spacing:1,children:[(0,u.jsx)(s.Z,{variant:"text",width:"20%"}),(0,u.jsx)(s.Z,{variant:"text"}),(0,u.jsx)(s.Z,{variant:"text",width:"60%"})]})})}},70077:function(e,r,t){"use strict";t.r(r);t(67294);var n=t(11163),i=t(89677),a=t(85893);r.default=function(e){var r=(0,n.useRouter)(),t=(r&&r.query?r.query:[]).page;return t=t?parseInt(t):1,(0,a.jsx)(i.Z,{page:t,entity:"movies",breadcrumbs:"/movies/stories/writers"})}},72852:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/writers",function(){return t(70077)}])}},function(e){e.O(0,[7146,4290,5218,8493,4471,4197,7338,7923,5683,9774,2888,179],(function(){return r=72852,e(e.s=r);var r}));var r=e.O();_N_E=r}]);