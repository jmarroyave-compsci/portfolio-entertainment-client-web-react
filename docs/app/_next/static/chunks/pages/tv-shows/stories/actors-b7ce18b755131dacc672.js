(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6710],{25662:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});t(67294);var n=t(43332),i=t(55476),o=(t(59231),t(39698)),a=t(82356),c=t(85893);function s(e){var r=e.tiny,t=e.format;switch(t=r?"tiny":t){case"list":return function(e){var r=e.id,t=e.name,n=e.as;return(0,c.jsx)(o.xs,{width:"220px",height:"125px",children:(0,c.jsxs)(i.Z,{id:r,children:[(0,c.jsx)("div",{children:(0,c.jsx)(o.Dx,{children:null!==t&&void 0!==t?t:"?"})}),n&&(0,c.jsx)("div",{children:(0,c.jsxs)(o.x4,{children:["as ",n.replace(/[\[\]\'\"]/g,"")]})})]})},r)}(e);case"tiny":return function(e){var r=e.id,t=e.name,n=e.releaseYear;return(0,c.jsx)(i.Z,{id:r,children:(0,c.jsx)(a.Z,{value:t,title:n})})}(e);case"card":default:return function(e){var r=e.id,t=e.name,o=e.text;e.box;return(0,c.jsx)(i.Z,{box:!0,id:r,entity:t,children:(0,c.jsx)(n.Z,{title:t,text:o})},r)}(e)}}},55476:function(e,r,t){"use strict";t(67294);var n=t(89260),i=t(85893);r.Z=function(e){var r=e.id,t=(e.entity,e.children),o=e.box;return r?(0,i.jsx)(n.Z,{box:o,border:!1,to:"/people/".concat(r),children:t}):t}},2295:function(e,r,t){"use strict";var n=t(4942),i=(t(67294),t(50367)),o=t(58862),a=t(34769),c=t(20780),s=t(85893);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=e.data,t=(e.loading,e.type),n=e.filter;if(!r||0==r.length)return(0,s.jsx)("div",{});var u=e.tiny?r.slice(0,3):r;u=n?u.filter(n):u;var p=(0,s.jsxs)(o.DK,{children:[t,(0,s.jsxs)(o.x4,{children:[" [",u.length,"]"]})]});return(0,s.jsxs)(i.RQ,{children:[!e.tiny&&p,e.tiny&&u.map((function(e,r){return(0,s.jsx)("div",{children:(0,s.jsx)(c.Z,l({format:"tiny"},e.id))},r)})),!e.tiny&&(0,s.jsx)(a.Z,{data:u,item:function(e){return(0,s.jsx)(c.Z,l(l({format:"list"},e),e.id))}}),e.tiny&&r.length>u.length&&(0,s.jsxs)(o.x4,{children:["and ",r.length-u.length," more"]})]})}},8424:function(e,r,t){"use strict";t.d(r,{Z:function(){return M}});var n,i=t(4942),o=(t(67294),t(55619)),a={automata:{name:"stories_actors"},page:{title:"Actors",description:"",url:function(e){var r=e.entity;return"/".concat(r,"/stories/actors")}},banner:{showData:!1}},c=t(15861),s=t(87757),u=t.n(s),l=t(24268),p=t(16161),f=t(11163),d=t(30168),j=t(54397),g=t(74273),O=t(61878);function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var h,v=(0,j.Ps)(n||(n=(0,d.Z)(["\n  ","\n  query GetData($page: Int)\n  {\n    storiesPeopleActors(page: $page){\n      id\n      name\n      acted {\n        id{\n          ...MovieInfoTiny\n        } \n      }      \n    }\n  }\n"])),O.Ne);function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var w=a.automata.name,P=(0,l.hg)("".concat(w,"/fetchData"),function(){var e=(0,c.Z)(u().mark((function e(r,t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(D(r)),e.next=3,n=r.page,(0,g.h)(v,{page:n},(function(e){return y(y({},e),{},{data:e.data.storiesPeopleActors})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n}),e)})));return function(r,t){return e.apply(this,arguments)}}()),Z=(0,l.oM)({name:w,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=m(m({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&f.default.push("".concat(a.page.url(e.params),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(h={},(0,i.Z)(h,P.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(h,P.fulfilled,(function(e,r){var t=r.payload,n=t.loading,i=t.error,o=t.data;e.data=o,e.loading=n,e.error=i})),(0,i.Z)(h,P.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),h)});p.h.reducerManager.add(w,Z.reducer);Z.reducer;var D=Z.actions.setParams,E=t(25662),k=t(2295),S=t(85893);function _(e){var r=e.id,t=e.name,n=e.acted;return(0,S.jsx)(E.Z,{id:r,name:t,text:(0,S.jsx)(k.Z,{tiny:!0,data:n})})}var C=t(45688);function N(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function I(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?N(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function R(e){return(0,S.jsx)(o.Z,{params:e,config:a,fetch:function(e){return P(I({},e))},item:function(e){return(0,S.jsx)(_,I({full:!0},e))},customDescription:(0,S.jsx)(C.C,{tag:"actor"}),customUrl:function(e){return a.page.url(e.entity)}})}function q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?q(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var M=function(e){return(0,S.jsx)(R,A(A({},e),{},{render:"list"}))}},34769:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var n=t(67294),i=t(29602),o=t(26447),a=t(62448),c=t(79895),s=t(28973),u=t(85893),l=(0,i.ZP)("div")((function(){return{padding:"1rem",marginBottom:"0rem",backgroundColor:"transparent"}}));function p(e){var r=e.skeleton,t=e.data,i=e.item,c=e.noPaging,s=void 0===c||c,p=e.pageSize,d=e.loading,j=e.onPageChange,g=e.page,O=e.url,b=(0,n.useRef)(null);t=t&&t.length>0?t:[1,2,3,4];var y=(0,u.jsx)(l,{children:(0,u.jsxs)(o.Z,{direction:"row",style:{overflowX:"auto"},children:[(0,u.jsx)("div",{ref:b}),t.map((function(e,t){return(0,u.jsx)("div",{style:{width:"100%"},children:d?r||(0,u.jsx)(f,{}):i?i(e):null},t)}))]})});return s||(y=(0,u.jsx)(a.Z,{pageSize:p,data:t,url:O,onPageChange:function(e){b.current.scrollIntoView(!1),j&&j(e)},page:g,loading:d,children:y})),y}function f(){return(0,u.jsx)(c.Z,{style:{width:"200px",backgroundColor:"transparent",flexGrow:1,padding:"1rem",margin:"0.5rem"},children:(0,u.jsxs)(o.Z,{spacing:1,children:[(0,u.jsx)(s.Z,{variant:"text",width:"20%"}),(0,u.jsx)(s.Z,{variant:"text"}),(0,u.jsx)(s.Z,{variant:"text",width:"60%"})]})})}},92970:function(e,r,t){"use strict";t.r(r);t(67294);var n=t(11163),i=t(8424),o=t(85893);r.default=function(e){var r=(0,n.useRouter)(),t=(r&&r.query?r.query:[]).page;return t=t?parseInt(t):1,(0,o.jsx)(i.Z,{page:t,entity:"tv-shows",breadcrumbs:"/tv-shows/stories/actors"})}},97101:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tv-shows/stories/actors",function(){return t(92970)}])}},function(e){e.O(0,[6499,5685,5218,3128,4471,4197,4999,6627,5688,9774,2888,179],(function(){return r=97101,e(e.s=r);var r}));var r=e.O();_N_E=r}]);