(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4054],{2295:function(e,t,r){"use strict";var n=r(4942),a=(r(67294),r(50367)),i=r(58862),o=r(34769),c=r(20780),s=r(85893);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.data,r=(e.loading,e.type),n=e.filter;if(!t||0==t.length)return(0,s.jsx)("div",{});var u=e.tiny?t.slice(0,3):t;u=n?u.filter(n):u;var d=(0,s.jsxs)(i.DK,{children:[r,(0,s.jsxs)(i.x4,{children:[" [",u.length,"]"]})]});return(0,s.jsxs)(a.RQ,{children:[!e.tiny&&d,e.tiny&&u.map((function(e,t){return(0,s.jsx)("div",{children:(0,s.jsx)(c.Z,l({format:"tiny"},e.id))},t)})),!e.tiny&&(0,s.jsx)(o.Z,{data:u,item:function(e){return(0,s.jsx)(c.Z,l(l({format:"list"},e),e.id))}}),e.tiny&&t.length>u.length&&(0,s.jsxs)(i.x4,{children:["and ",t.length-u.length," more"]})]})}},34769:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(67294),a=r(29602),i=r(26447),o=r(62448),c=r(79895),s=r(28973),u=r(85893),l=(0,a.ZP)("div")((function(){return{padding:"1rem",marginBottom:"0rem",backgroundColor:"transparent"}}));function d(e){var t=e.skeleton,r=e.data,a=e.item,c=e.noPaging,s=void 0===c||c,d=e.pageSize,f=e.loading,j=e.onPageChange,g=e.page,h=e.url,O=(0,n.useRef)(null);r=r&&r.length>0?r:[1,2,3,4];var b=(0,u.jsx)(l,{children:(0,u.jsxs)(i.Z,{direction:"row",style:{overflowX:"auto"},children:[(0,u.jsx)("div",{ref:O}),r.map((function(e,r){return(0,u.jsx)("div",{style:{width:"100%"},children:f?t||(0,u.jsx)(p,{}):a?a(e):null},r)}))]})});return s||(b=(0,u.jsx)(o.Z,{pageSize:d,data:r,url:h,onPageChange:function(e){O.current.scrollIntoView(!1),j&&j(e)},page:g,loading:f,children:b})),b}function p(){return(0,u.jsx)(c.Z,{style:{width:"200px",backgroundColor:"transparent",flexGrow:1,padding:"1rem",margin:"0.5rem"},children:(0,u.jsxs)(i.Z,{spacing:1,children:[(0,u.jsx)(s.Z,{variant:"text",width:"20%"}),(0,u.jsx)(s.Z,{variant:"text"}),(0,u.jsx)(s.Z,{variant:"text",width:"60%"})]})})}},14023:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Y}});r(67294);var n=r(11163),a=r(4942),i=r(55619),o={automata:{name:"page_person"},page:{url:function(e){var t=e.id;return"/people/".concat(t)}}},c=(r(70357),r(52651),r(23275),r(28388)),s=r(59231),u=(r(27159),r(48724)),l=r(12868),d=r(14308),p=r(29602),f=r(85893);(0,p.ZP)("h1")({margin:0});function j(e){var t=e.data;return t?(0,f.jsx)(d.Z,{direction:"row",children:t.map((function(e,t){return(0,f.jsx)(u.Z,{text:e},t)}))}):(0,f.jsx)("div",{})}var g=r(59067),h=r(2295),O=r(50367),b=r(58862),x=r(82356);var y=function(e){var t=e.data;return e.loading,t=t||{},(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(l.Z,{src:t.image?t.image.poster:null}),(0,f.jsx)(j,{data:t.profession}),(0,f.jsx)(g.Z,{text:t.name}),(0,f.jsxs)(O.RQ,{children:[(0,f.jsx)(b.DK,{children:"General information"}),(0,f.jsx)(x.Z,{title:"Birth",data:t.birthYear}),(0,f.jsx)(x.Z,{title:"Death",data:t.deathYear})]}),(0,f.jsx)(c.Z,{data:t}),(0,f.jsx)(s.Z,{data:t?t.awards:null}),(0,f.jsx)(h.Z,{type:"acted",data:t.acted}),(0,f.jsx)(h.Z,{type:"directed",data:t.directed}),(0,f.jsx)(h.Z,{type:"produced",data:t.produced}),(0,f.jsx)(h.Z,{type:"wrote",data:t.wrote})]})},v=r(28973);function m(e){return(0,f.jsx)(O.X,{children:(0,f.jsxs)(d.Z,{spacing:1,children:[(0,f.jsx)(v.Z,{variant:"rectangular",height:300}),(0,f.jsx)(v.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,f.jsx)(v.Z,{variant:"text",style:{width:"40%"}}),(0,f.jsx)(v.Z,{variant:"text",style:{width:"25%"}}),(0,f.jsx)(v.Z,{variant:"text",style:{width:"25%"}}),(0,f.jsx)(v.Z,{variant:"text",style:{width:"25%"}})]})})}var w,Z=r(15861),P=r(87757),D=r.n(P),k=r(24268),E=r(16161),_=r(61878);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=o.automata.name,R=(0,k.hg)("".concat(N,"/fetchData"),function(){var e=(0,Z.Z)(D().mark((function e(t,r){return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(B(t)),e.next=3,_.rQ(t.id);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),X=(0,k.oM)({name:N,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=C(C({},e.params),t.payload),"banner"!=e.params.renderer&&1!=e.params.page&&n.default.push("".concat(o.page.url(e.params)),null,{shallow:!0})}},extraReducers:(w={},(0,a.Z)(w,R.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(w,R.fulfilled,(function(e,t){var r=t.payload,n=r.loading,a=r.error,i=r.data;e.data=i,e.loading=n,e.error=a})),(0,a.Z)(w,R.rejected,(function(e,t){var r=t.error;e.data=[],e.loading=!1,e.error=r})),w)});E.h.reducerManager.add(N,X.reducer);X.reducer;var B=X.actions.setParams;function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e){return(0,f.jsx)(i.Z,{params:z(z({},e),{},{breadcrumbs:function(t){var r,n;return"".concat(e.breadcrumbs,"/").concat(null!==(r=null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.name)&&void 0!==r?r:"loading")}}),config:o,fetch:function(e){return R(z({},e))},detail:function(e){return(0,f.jsx)(y,{data:e.data})},skeleton:(0,f.jsx)(m,{})})}function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=function(e){return(0,f.jsx)(G,M(M({},e),{},{render:"detail"}))},Y=function(e){var t,r,a=(0,n.useRouter)(),i=e.id?e.id:null!==(t=null===(r=a.query)||void 0===r?void 0:r.person)&&void 0!==t?t:"";return(0,f.jsx)(T,{breadcrumbs:"/people",id:i})}},54317:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people/[person]",function(){return r(14023)}])}},function(e){e.O(0,[6499,5685,5218,3128,4471,1216,4197,4999,6627,5863,9774,2888,179],(function(){return t=54317,e(e.s=t);var t}));var t=e.O();_N_E=t}]);