"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3537],{16266:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(4942),i=(r(67294),r(20780)),o=r(25662),a=r(88704),c=r(43332),u=r(42341),s=r(85893);function l(e){var t=e.id,r=e.name;e.box;return(0,s.jsx)(u.Z,{box:!0,id:t,entity:r,children:(0,s.jsx)(c.Z,{title:r})})}function d(e){var t=e.id,r=e.name;e.box;return(0,s.jsx)(u.Z,{box:!0,id:t,entity:r,children:(0,s.jsx)(c.Z,{title:r})})}var f=r(25810);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(e){e.id;var t=e.type;switch(e.children,e.box,t){case"movie":return(0,s.jsx)(i.Z,g({},e));case"person":return(0,s.jsx)(o.Z,g({},e));case"podcast":return(0,s.jsx)(a.Z,g({},e));case"tv-show":return(0,s.jsx)(l,g({},e));case"video-game":return(0,s.jsx)(d,g({},e))}return(0,s.jsx)(f.C,{from:"Entity Item",data:"ENTITY ".concat(t," NOT FOUND")})}},42341:function(e,t,r){r(67294);var n=r(89260),i=r(85893);t.Z=function(e){var t=e.id,r=e.children,o=e.box;return(0,i.jsx)(n.Z,{box:o,to:"/movies/festivals/".concat(t),children:r})}},23731:function(e,t,r){r.d(t,{E:function(){return l}});var n,i=r(30168),o=r(4942),a=r(54397),c=r(74273);r(61878);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e){var t=e.page,r=e.op;return(0,c.h)(d,{page:t,field:JSON.stringify(r)},(function(e){return s(s({},e),{},{data:e.data.movies})}))},d=(0,a.Ps)(n||(n=(0,i.Z)(["\n  query GetItems($page: Int, $field: String)\n  {\n    movies(page: $page, field: $field){\n      id\n      title\n    }\n  }\n"])))},25662:function(e,t,r){r.d(t,{Z:function(){return u}});r(67294);var n=r(43332),i=r(55476),o=(r(59231),r(39698)),a=r(82356),c=r(85893);function u(e){var t=e.tiny,r=e.format;switch(r=t?"tiny":r){case"list":return function(e){var t=e.id,r=e.name,n=e.as;return(0,c.jsx)(o.xs,{width:"220px",height:"125px",children:(0,c.jsxs)(i.Z,{id:t,children:[(0,c.jsx)("div",{children:(0,c.jsx)(o.Dx,{children:null!==r&&void 0!==r?r:"?"})}),n&&(0,c.jsx)("div",{children:(0,c.jsxs)(o.x4,{children:["as ",n.replace(/[\[\]\'\"]/g,"")]})})]})},t)}(e);case"tiny":return function(e){var t=e.id,r=e.name,n=e.releaseYear;return(0,c.jsx)(i.Z,{id:t,children:(0,c.jsx)(a.Z,{value:r,title:n})})}(e);case"card":default:return function(e){var t=e.id,r=e.name,o=e.text;e.box;return(0,c.jsx)(i.Z,{box:!0,id:t,entity:r,children:(0,c.jsx)(n.Z,{title:r,text:o})},t)}(e)}}},55476:function(e,t,r){r(67294);var n=r(89260),i=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),o=e.box;return t?(0,i.jsx)(n.Z,{box:o,border:!1,to:"/people/".concat(t),children:r}):r}},88704:function(e,t,r){r.d(t,{Z:function(){return a}});r(67294);var n=r(43332),i=r(44898),o=(r(59231),r(85893));function a(e){var t=e.id,r=e.title,a=(e.awards,e.full,e.image),c=e.description;e.box;return(0,o.jsx)(i.Z,{box:!0,id:t,entity:name,style:{width:"100%"},children:(0,o.jsx)(n.Z,{image:null===a||void 0===a?void 0:a.poster,text:c,title:r})})}},44898:function(e,t,r){r(67294);var n=r(89260),i=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),o=e.box;return(0,i.jsx)(n.Z,{box:o,border:!0,to:"/podcasts/".concat(t),children:r})}},79445:function(e,t,r){r.d(t,{Z:function(){return q}});var n=r(67294),i=r(4942),o=r(16266),a=r(50789),c=r(34769),u=r(85893);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d,f=function(e){var t=e.type,r=e.format;switch(void 0===r?"grid":r){case"hlist":return(0,u.jsx)(c.Z,l(l({},e),{},{item:function(e){return(0,u.jsx)(o.Z,l(l({format:"list"},e),{},{type:t}))}}));case"grid":default:return(0,u.jsx)(a.Z,l(l({},e),{},{item:function(e){return(0,u.jsx)(o.Z,l(l({},e),{},{type:t}))}}))}},p=r(15861),g=r(87757),j=r.n(g),v=r(24268),b=r(16161),h=(r(11163),r(30168)),x=r(54397),y=r(74273);r(61878);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z,w=function(e){var t=e.page,r=e.op;return(0,y.h)(P,{page:t,field:JSON.stringify(r)},(function(e){return m(m({},e),{},{data:e.data.people})}))},P=(0,x.Ps)(d||(d=(0,h.Z)(["\n  query GetItems($page: Int, $field: String)\n  {\n    people(page: $page, field: $field){\n      id\n      name\n    }\n  }\n"]))),D=r(23731),E="dashboard",S=(0,v.hg)("".concat(E,"/fetchData"),function(){var e=(0,p.Z)(j().mark((function e(t,r){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.dispatch(C(t)),e.t0=t.type,e.next="person"===e.t0?4:"movie"===e.t0?7:10;break;case 4:return e.next=6,w(t);case 6:return e.abrupt("return",e.sent);case 7:return e.next=9,D.E(t);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),k=(0,v.oM)({name:E,initialState:{params:{page:null},data:null,loading:!1,error:null},reducers:{setParams:function(e,t){e.params.page=t.payload.page}},extraReducers:(Z={},(0,i.Z)(Z,S.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(Z,S.fulfilled,(function(e,t){var r=t.payload,n=r.loading,i=r.error,o=r.data;e.data=o,e.loading=n,e.error=i})),(0,i.Z)(Z,S.rejected,(function(e,t){var r=t.error;e.data=[],e.loading=!1,e.error=r})),Z)});b.h.reducerManager.add(E,k.reducer);k.reducer;var C=k.actions.setParams,I=r(93942),$=r(19016);function N(e){var t=(0,I.I0)(),r=(0,I.v9)((function(e){return e.dashboard})),i=e.query,o=function(e){return{op:i.op,type:i.type,page:e}},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return t(S(o(e)))};return(0,n.useEffect)((function(){null!=i&&a()}),[i]),(0,n.useEffect)((function(){null!=i&&null!=r&&t((0,$.wg)({title:i.title,children:(0,u.jsx)(f,{page:r.params.page,loading:r.loading,data:r.data,type:i.type,format:"hlist",onPageChange:function(e){return a(e)},pageSize:4,noPaging:!1})}))}),[r]),(0,n.useEffect)((function(){r&&t((0,$.K4)({status:r.loading,sender:"dashboard"}))}),[null===r||void 0===r?void 0:r.loading]),null}N.propTypes={};var q=N},89441:function(e,t,r){r.d(t,{K:function(){return c},q:function(){return u}});r(67294);var n=r(23275),i=r(92401),o=r(96474),a=r(85893),c=function(e,t,r,o){return(0,a.jsx)(n.Z,{xs:12,sm:6,md:6,lg:3,style:{paddingRight:"1rem"},children:(0,a.jsx)(i.Z,{loading:e,title:t,data:r?r.toString():r,icon:o})})},u=function(e,t,r,i){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"-";return(0,a.jsx)(n.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"},children:(0,a.jsx)(o.Z,{interactive:+("-"!=u),onClick:function(e){return c(e,t,u)},loading:e,title:t,data:r||{},ranges:i})})}},34769:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(67294),i=r(29602),o=r(26447),a=r(62448),c=r(79895),u=r(28973),s=r(85893),l=(0,i.ZP)("div")((function(){return{padding:"1rem",marginBottom:"0rem",backgroundColor:"transparent"}}));function d(e){var t=e.skeleton,r=e.data,i=e.item,c=e.noPaging,u=void 0===c||c,d=e.pageSize,p=e.loading,g=e.onPageChange,j=e.page,v=e.url,b=(0,n.useRef)(null);r=r&&r.length>0?r:[1,2,3,4];var h=(0,s.jsx)(l,{children:(0,s.jsxs)(o.Z,{direction:"row",style:{overflowX:"auto"},children:[(0,s.jsx)("div",{ref:b}),r.map((function(e,r){return(0,s.jsx)("div",{style:{width:"100%"},children:p?t||(0,s.jsx)(f,{}):i?i(e):null},r)}))]})});return u||(h=(0,s.jsx)(a.Z,{pageSize:d,data:r,url:v,onPageChange:function(e){b.current.scrollIntoView(!1),g&&g(e)},page:j,loading:p,children:h})),h}function f(){return(0,s.jsx)(c.Z,{style:{width:"200px",backgroundColor:"transparent",flexGrow:1,padding:"1rem",margin:"0.5rem"},children:(0,s.jsxs)(o.Z,{spacing:1,children:[(0,s.jsx)(u.Z,{variant:"text",width:"20%"}),(0,s.jsx)(u.Z,{variant:"text"}),(0,s.jsx)(u.Z,{variant:"text",width:"60%"})]})})}}}]);