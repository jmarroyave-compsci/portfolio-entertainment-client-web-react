(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1381],{91200:function(t,e,n){"use strict";n.d(e,{Ez:function(){return f},AK:function(){return g},iY:function(){return h}});var r,i,a,o=n(30168),c=n(4942),u=n(54397),s=n(42535);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){(0,c.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=function(t){var e=t.page,n=t.op,r=t.qryName,i=void 0===r?"":r;return(0,s.h)(p({qryName:i}),{page:e,field:JSON.stringify(n)},(function(t){return d(d({},t),{},{data:t.data.podcasts})}))},p=function(t){var e=t.qryName;return(0,u.Ps)(r||(r=(0,o.Z)(["\n  query podcasts_","($page: Int, $field: String)\n  {\n    podcasts(page: $page, field: $field){\n      id: _id\n      title\n      author\n    }\n  }\n"])),e)},g=function(){return(0,s.h)(m(),{},(function(t){return d(d({},t),{},{data:t.data.dashboardPodcasts})}))},m=function(){return(0,u.Ps)(i||(i=(0,o.Z)(["\nquery dashboard_podcasts\n  {\n    dashboardPodcasts {\n      total\n      author\n      countries\n      languages\n      category\n      subcategory\n    }\n  }\n"])))},h=function(t){var e=t.id,n=t.qryName,r=void 0===n?"":n;return(0,s.h)(v({qryName:r}),{id:e},(function(t){return d(d({},t),{},{data:t.data.podcast})}))},v=function(t){t.qryName;return(0,u.Ps)(a||(a=(0,o.Z)(["\nquery podcast($id: String!)\n{\n  podcast(id: $id){\n    id: _id \n    title\n    subtitle\n    feedUrl\n    description\n    summary\n    author\n    link\n    language\n    image{\n      poster\n    }\n    category\n    subcategory\n    createdDate\n  }\n}\n"])))}},88704:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});n(67294);var r=n(43332),i=n(44898),a=n(39698),o=n(82356),c=n(85893);function u(t){var e=t.tiny,n=t.format;switch(n=e?"tiny":n){case"list":return function(t){var e=t.id,n=t.title,r=t.as;return(0,c.jsx)(a.xs,{width:"220px",height:"125px",children:(0,c.jsxs)(i.Z,{id:e,children:[(0,c.jsx)(a.Dx,{children:null!==n&&void 0!==n?n:"?"}),r&&(0,c.jsx)("div",{children:(0,c.jsxs)(a.x4,{children:["as ",r.replace(/[\[\]\'\"]/g,"")]})})]})},e)}(t);case"tiny":return function(t){var e;return(0,c.jsx)(i.Z,{id:t.id,children:(0,c.jsx)(o.Z,{value:null!==(e=null===t||void 0===t?void 0:t.title)&&void 0!==e?e:"?"})})}(t);case"card":default:return function(t){var e=t.id,n=t.title,a=t.author,o=t.image;t.box;return(0,c.jsx)(i.Z,{box:!0,id:e,entity:name,style:{width:"100%"},children:(0,c.jsx)(r.Z,{image:null===o||void 0===o?void 0:o.poster,title:n,subtitle:a})})}(t)}}},44898:function(t,e,n){"use strict";n(67294);var r=n(89260),i=n(85893);e.Z=function(t){var e=t.id,n=(t.entity,t.children),a=t.box;return(0,i.jsx)(r.Z,{box:a,border:!0,to:"/podcasts/".concat(e),children:n})}},82356:function(t,e,n){"use strict";n(67294);var r=n(58862),i=n(27159),a=n(85893);e.Z=function(t){var e=t.data,n=t.value,o=t.title,c=t.format,u=t.sufix;if(!(e=e||n)||null==e||0==e.length||"N/A"==e)return null;switch(n=e,c){case"date":n=(0,a.jsx)(i.Z,{value:e,format:"DD/MM/YYYY"});break;case"year":n=(0,a.jsx)(i.Z,{value:e,format:"YYYY"})}return(0,a.jsxs)("div",{children:[(0,a.jsx)(r.Qy,{children:o}),(0,a.jsxs)(r.GH,{children:[n," ",u]})]})}},39848:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}});var r,i=n(4942),a=(n(67294),n(55619)),o={automata:{name:"stories_podcasts_music"},page:{title:"Music Podcasts",description:"",url:function(){return"/podcasts/stories/music"}},banner:{showData:!0}},c=n(15861),u=n(87757),s=n.n(u),l=n(24268),d=n(80105),f=n(11163),p=n(91200);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h=o.automata.name,v=(0,l.hg)("".concat(h,"/fetchData"),function(){var t=(0,c.Z)(s().mark((function t(e,n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.dispatch(j(e)),e.op={op:"eq",field:"category",value:"music"},e.qryName="category_music",t.next=5,p.Ez(e);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),y=(0,l.oM)({name:h,initialState:{params:{renderer:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(t,e){t.params=m(m({},t.params),e.payload),"banner"!=t.params.renderer&&1!=t.params.page&&f.default.push("".concat(o.page.url(),"/?page=").concat(t.params.page),null,{shallow:!0})}},extraReducers:(r={},(0,i.Z)(r,v.pending,(function(t,e){t.data=null,t.loading=!0,t.error=""})),(0,i.Z)(r,v.fulfilled,(function(t,e){var n=e.payload,r=n.loading,i=n.error,a=n.data;t.data=a,t.loading=r,t.error=i})),(0,i.Z)(r,v.rejected,(function(t,e){var n=e.error;t.data=[],t.loading=!1,t.error=n})),r)});d.h.reducerManager.add(h,y.reducer);y.reducer;var j=y.actions.setParams,b=n(88704),x=n(85893);function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t){return(0,x.jsx)(a.Z,{params:t,config:o,fetch:function(t){return v(Z({},t))},item:function(t){return(0,x.jsx)(b.Z,Z({full:!0},t))}})}},50789:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var r=n(4942),i=n(67294),a=n(52651),o=n(23275),c=n(36501),u=n(14308),s=n(28973),l=n(62448),d=n(50367),f=n(12666),p=n(85893);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h={transition:"opacity ".concat(1300,"ms ease-in-out"),opacity:0},v={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function y(t){var e=t.animations,n=void 0===e||e,r=t.data,c=t.loading,u=t.url,s=t.skeleton,g=t.item,y=t.onPageChange,b=t.page,x=t.pageSize,O=t.xs,Z=void 0===O?12:O,w=t.sm,P=void 0===w?6:w,D=t.md,E=void 0===D?6:D,k=t.lg,S=void 0===k?4:k,C=t.noPaging,R=void 0!==C&&C,N=t.noPadding,_=(0,i.useRef)(null);r=r&&r.length>0?r:[1,2,3,4,5,6];var Y=function(t){return N?t:(0,p.jsx)(d.ck,{children:t})},T=function(t){return n?(0,p.jsx)(f.ZP,{in:!0,timeout:1300,children:function(e){return(0,p.jsx)("div",{style:m(m(m({},h),v[e]),{},{width:"100%"}),children:t})}}):t},A=function(t){return(0,p.jsx)(o.Z,{xs:Z,sm:P,md:E,lg:S,children:Y(c?s||(0,p.jsx)(j,{}):g?T(g(t.data)):null)})},H=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{ref:_}),(0,p.jsx)(a.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:r.map((function(e,n){return(0,p.jsx)(i.Fragment,{children:(0,p.jsx)(A,{data:e,params:t})},n)}))})]});return R||(H=(0,p.jsx)(l.Z,{pageSize:x,data:r,url:u,onPageChange:function(t){_.current.scrollIntoView(!1),y&&y(t)},page:b,loading:c,children:H})),(0,p.jsx)(d.RQ,{children:H})}function j(){return(0,p.jsx)(c.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,p.jsxs)(u.Z,{spacing:1,children:[(0,p.jsx)(s.Z,{variant:"text",width:"80%"}),(0,p.jsx)(s.Z,{variant:"rectangular",height:100}),(0,p.jsx)(s.Z,{variant:"text",width:"50%"}),(0,p.jsx)(s.Z,{variant:"text",width:"40%"}),(0,p.jsx)(s.Z,{variant:"text",width:"70%"})]})})}},62448:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});n(67294);var r=n(11163),i=n(14308),a=n(72642),o=n(50367),c=n(58862),u=n(85893);function s(t){var e=(0,r.useRouter)(),n=t||{},s=n.children,l=n.route,d=n.loading,f=n.data,p=n.url,g=n.skeleton,m=n.onPageChange,h=n.page,v=n.pageSize,y=void 0===v?10:v;h=(h=h||(l&&l.page?l.page:null))?parseInt(h):1;var j=function(t){if(m&&m(t),p){var n="".concat(p,"/").concat(t);e.push(n)}},b=f&&f.length<y,x=1==h;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(o.RQ,{children:f&&f.length>0?(0,u.jsxs)(i.Z,{spacing:2,children:[s,(0,u.jsxs)(i.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,u.jsx)(a.Z,{variant:"outlined",disabled:x,onClick:function(){return j(h-1)},children:"Back"}),(0,u.jsx)(a.Z,{variant:"outlined",disabled:b,onClick:function(){return j(h+1)},children:"Next"})]})]}):(0,u.jsx)(c.Dx,{children:d?g||"loading":"No results"})})})}},43332:function(t,e,n){"use strict";n(67294);var r=n(65295),i=n(18515),a=n(42643),o=n(54962),c=n(49161),u=n(2658),s=n(360),l=n(9092),d=n(14563),f=n(44290),p=n(85893),g=(0,f.Z)((function(t){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),m="".concat(l.Z.APP.BASE_PATH).concat(l.Z.DEFAULTS.IMAGE_PLACEHOLDER),h=function(t){return t.target.src=m};e.Z=function(t){var e,n=g(),f=t.title,m=t.subtitle,v=t.text,y=t.image,j=t.imageHeight,b=void 0===j?180:j,x=t.noImage,O=t.actions,Z=0;m=m||"";return x=!!x,y=y||l.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,p.jsxs)(r.Z,{style:{flexGrow:1,width:"100%"},children:[(0,p.jsx)(i.Z,{sx:{width:"100%"},classes:{content:n.headerContent,root:n.headerRoot},title:(0,p.jsx)(d.Z,{title:f||"",placement:"bottom-start",children:(0,p.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,p.jsx)(u.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:f})})}),subheader:m}),!x&&(0,p.jsx)(o.Z,{height:b||null,image:null!==(e=y)&&void 0!==e&&e.startsWith("/")?"".concat(l.Z.APP.BASE_PATH).concat(y):y,component:"img",onError:h}),v&&(0,p.jsx)(a.Z,{children:(0,s.HD)(v)?(0,p.jsx)(u.Z,{variant:"body2",color:"text.secondary",component:"div",children:v}):v}),O&&O.length>0&&(0,p.jsx)(c.Z,{children:O.map((function(t){return(0,p.jsx)("div",{children:t},Z++)}))})]})}},27159:function(t,e,n){"use strict";var r=n(15671),i=n(43144),a=n(60136),o=n(6215),c=n(61120),u=n(67294),s=n(53651),l=n(65710),d=n(85893);function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,c.Z)(t);if(e){var i=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var p=function(t){(0,a.Z)(n,t);var e=f(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,i.Z)(n,[{key:"getDate",value:function(t){if(!t||null==t||""===t||0==t.length)return null;if(t instanceof Date)return t;try{var e=Number(t);return Number.isInteger(e)?new Date(e):new Date(t)}catch(n){return null}}},{key:"toString",value:function(t,e,n){switch(n){case"ago":return(0,s.Z)(e,new Date);case"DD/MM/YYYY":return(0,l.Z)(e,"dd/MM/yyyy");case"YYYY":return e.getFullYear();default:return(0,l.Z)(e,n)}}},{key:"render",value:function(){var t=this.props,e=t.lang,n=t.value,r=t.className,i=t.format;e=e||"en",i=i||"ago";var a=this.getDate(n);if(null==a)return(0,d.jsx)("span",{});var o=this.toString(e,a,i);return(0,d.jsx)("span",{className:r,children:o})}}]),n}(u.Component);e.Z=p},55619:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var r=n(4942),i=n(67294),a=n(11163),o=n(39704),c=n(19016),u=n(25810),s=n(14763),l=n(50789),d=(n(14308),n(529)),f=n(85893);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t){var e,n,r,s,l,d,p,m,v=(0,o.I0)(),y=(0,a.useRouter)(),j=t.config,b=(0,i.useState)(""),x=b[0],O=b[1],Z=(0,o.v9)((function(t){return t[j.automata.name]})),w=null!==(e=t.params.render)&&void 0!==e?e:null,P=g(g({},t.params),{},{renderer:null!==(n=t.params.renderer)&&void 0!==n?n:w});Z=t.data?{data:t.data,params:{page:t.params.page}}:Z;(0,i.useEffect)((function(){Z&&!t.data&&v((0,c.K4)({status:Z.loading,sender:j.automata.name}))}),[Z]),(0,i.useEffect)((function(){P.breadcrumbs&&v((0,c.YA)({breadcrumbs:"function"===typeof P.breadcrumbs?P.breadcrumbs(Z):P.breadcrumbs}))}),[P.breadcrumbs,Z]);var D=function(e){t.fetch&&(t.data?t.fetch(g({},e)):v(t.fetch(g({},e))))};return(0,i.useEffect)((function(){null!==y&&void 0!==y&&y.isReady&&("banner"!==w||j.banner.showData)&&(t.data||D(P))}),[null===y||void 0===y?void 0:y.isReady,P.id]),w&&"grid"!=w?((0,i.useEffect)((function(){""!=x&&v((0,c.PV)({message:x}))}),[x]),(0,f.jsx)(h,{config:t.config,render:w,state:Z,loading:!(null!==y&&void 0!==y&&y.isReady)||!Z||null===Z||(null===(r=Z)||void 0===r?void 0:r.loading),forceLoading:"detail"===w&&0==(null===(s=Z)||void 0===s||null===(l=s.data)||void 0===l?void 0:l.length)||"list"==w&&0===(null===(d=Z)||void 0===d||null===(p=d.data)||void 0===p?void 0:p.length)||(null===(m=Z)||void 0===m?void 0:m.error),setErrorMessage:O,fetch:D,item:t.item,customDescription:t.customDescription,customTitle:t.customTitle,mainCol:t.mainCol||t.dashboard||t.detail,skeleton:t.skeleton,params:P})):(0,f.jsx)(u.C,{from:j.page.title,data:"render property wasn't set"})}function h(t){(0,o.I0)();var e,n,r=t.config,i=t.item,a=t.mainCol,c=t.state,l=t.render,d=t.params,p=t.fetch,m=t.setErrorMessage,h=t.loading||t.forceLoading,j=r.page.title;if(0==t.loading&&c){var b,x;if("detail"===l)null!==c.data&&0!=(null===(b=c.data)||void 0===b?void 0:b.length)||(m("this is a demo version, this record was filtered out to reduce the database size"),h=!0);if("list"===l)0===(null===(x=c.data)||void 0===x?void 0:x.length)&&(m("data not found"),h=!0);c.error&&(m(c.error.message),h=!0)}var O=(0,f.jsx)(v,g({},t));return(0,f.jsxs)(f.Fragment,{children:[c&&c.error&&(0,f.jsx)(u.C,{from:j,data:c.error.message}),"banner"===l&&O,"list"===l&&(0,f.jsx)(s.Z,g(g({},t),{},{id:r.automata.name,banner:O,mainCol:h&&t.skeleton?t.skeleton:(0,f.jsx)(y,g({},t))})),"page"===l&&(0,f.jsx)(s.Z,g(g({},t),{},{id:r.automata.name,banner:O,mainCol:a?(0,f.jsx)(f.Fragment,{children:h&&t.skeleton?t.skeleton:a({data:null!==(e=null===c||void 0===c?void 0:c.data)&&void 0!==e?e:null,loading:h,params:d,fetch:p,item:i})}):(0,f.jsx)(u.C,{from:j,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===l&&(0,f.jsx)(s.Z,g(g({},t),{},{id:r.automata.name,mainCol:a?(0,f.jsx)(f.Fragment,{children:h&&t.skeleton?t.skeleton:a({data:null!==(n=null===c||void 0===c?void 0:c.data)&&void 0!==n?n:null,loading:h})}):(0,f.jsx)(u.C,{from:j,data:"main component missing, not found in mainCol or detail prop"})}))]})}function v(t){var e,n,r,i,a,o,c,u,s,l,p=t.config,g=t.state,m=null!==(e=null===(n=p.banner)||void 0===n?void 0:n.showData)&&void 0!==e&&e,h=t.customTitle?"function"===typeof t.customTitle?g?t.customTitle(null!==(r=null===g||void 0===g?void 0:g.params)&&void 0!==r?r:{}):"":t.customTitle:null!==(i=null===(a=p.page)||void 0===a?void 0:a.title)&&void 0!==i?i:"NO TITLE",v=t.customDescription?"function"===typeof t.customDescription?g?t.customDescription(null!==(o=null===g||void 0===g?void 0:g.params)&&void 0!==o?o:{}):"":t.customDescription:null!==(c=null===(u=p.page)||void 0===u?void 0:u.description)&&void 0!==c?c:"NO DESCRIPTION",y=null===(s=p.page)||void 0===s?void 0:s.url;return(0,f.jsx)(d.Z,{showData:m,loading:t.loading,title:h,description:v,data:null===g||void 0===g?void 0:g.data,item:t.item,actions:[{url:y(null!==(l=null===g||void 0===g?void 0:g.params)&&void 0!==l?l:{}),title:"See all"}],hero:"banner"!==t.render})}function y(t){var e,n,r=t.loading,i=t.state,a=t.fetch,o=t.item;return(0,f.jsx)(l.Z,{loading:r,page:null!==(e=null===i||void 0===i?void 0:i.params.page)&&void 0!==e?e:null,data:null!==(n=null===i||void 0===i?void 0:i.data)&&void 0!==n?n:null,onPageChange:function(t){a(g(g({},i.params),{},{page:t}))},item:o})}},39698:function(t,e,n){"use strict";n.d(e,{Ct:function(){return h},xs:function(){return j},x4:function(){return x},Dx:function(){return b},u:function(){return m}});var r=n(67294),i=n(29602),a=n(15671),o=n(43144),c=n(60136),u=n(6215),s=n(61120),l=n(36501),d=n(85893);function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,s.Z)(t);if(e){var i=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}r.Component;var p=n(32583),g=n(14563),m=function(t){var e=t.children,n=t.content;return n&&null!=n&&"?"!==n?(0,d.jsx)(g.Z,{title:n,placement:"bottom-start",children:e}):e},h=function(t){var e=t.children,n=t.content;return n&&null!=n&&0!=n?(0,d.jsx)(p.Z,{badgeContent:n,color:"primary",children:e}):e},v=(0,i.ZP)("div")((function(t){var e=t.theme,n=t.width,r=t.height;return{backgroundColor:e.palette.action.selected,margin:"0 1rem 1rem 0",padding:0,display:"flex",color:e.palette.text.primary,alignItems:"center",minWidth:n,maxWidth:n,minHeight:r,maxHeight:r,borderRadius:"5px"}})),y=(0,i.ZP)("div")((function(t){var e=t.theme;t.width;return{backgroundColor:"transparent",color:e.palette.text.primary,padding:"0.7rem",display:"block",flexGrow:1,margin:"0.1rem",width:"100%"}})),j=function(t){var e=t.width,n=void 0===e?"300px":e,r=t.height,i=void 0===r?"300px":r;return(0,d.jsx)(v,{width:n,height:i,children:(0,d.jsx)(y,{children:t.children})})},b=(0,i.ZP)("h2")({fontSize:"1.3rem",lineHeight:"1.5rem",padding:0,margin:0,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}),x=((0,i.ZP)("h3")({fontSize:"1.1rem",lineHeight:"1.3rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),(0,i.ZP)("div")({margin:0,marginBottom:"1rem"}),(0,i.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}));(0,i.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),(0,i.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})},58127:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});n(67294);var r=n(11163),i=n(4942),a=n(39848),o=n(85893);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s=function(t){return(0,o.jsx)(a.Z,u(u({},t),{},{render:"list"}))},l=function(t){var e=(0,r.useRouter)(),n=e&&e.query?e.query:[],i=(n.year,n.page);return i=i?parseInt(i):1,(0,o.jsx)(s,{breadcrumbs:"/podcasts/stories/music",page:i})}},28454:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/podcasts/stories/music",function(){return n(58127)}])}},function(t){t.O(0,[7146,4290,5218,8493,4197,9774,2888,179],(function(){return e=28454,t(t.s=e);var e}));var e=t.O();_N_E=e}]);