(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1174],{50789:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(4942),o=n(67294),i=n(52651),a=n(23275),c=n(79895),s=n(14308),l=n(28973),u=n(62448),d=n(50367),p=n(12666),f=n(85893);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={transition:"opacity ".concat(1300,"ms ease-in-out"),opacity:0},m={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function v(e){var t=e.animations,n=void 0===t||t,r=e.data,c=e.loading,s=e.url,l=e.skeleton,g=e.item,v=e.onPageChange,h=e.page,y=e.pageSize,x=e.xs,P=void 0===x?12:x,w=e.sm,D=void 0===w?6:w,Z=e.md,k=void 0===Z?6:Z,E=e.lg,C=void 0===E?4:E,S=e.noPaging,N=void 0!==S&&S,_=e.noPadding,T=(0,o.useRef)(null);r=r&&r.length>0?r:[1,2,3,4,5,6];var R=function(e){return _?e:(0,f.jsx)(d.ck,{children:e})},I=function(e){return n?(0,f.jsx)(p.ZP,{in:!0,timeout:1300,children:function(t){return(0,f.jsx)("div",{style:j(j(j({},b),m[t]),{},{width:"100%"}),children:e})}}):e},F=function(e){return(0,f.jsx)(a.Z,{xs:P,sm:D,md:k,lg:C,children:R(c?l||(0,f.jsx)(O,{}):g?I(g(e.data)):null)})},z=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{ref:T}),(0,f.jsx)(i.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:r.map((function(t,n){return(0,f.jsx)(o.Fragment,{children:(0,f.jsx)(F,{data:t,params:e})},n)}))})]});return N||(z=(0,f.jsx)(u.Z,{pageSize:y,data:r,url:s,onPageChange:function(e){T.current.scrollIntoView(!1),v&&v(e)},page:h,loading:c,children:z})),(0,f.jsx)(d.RQ,{children:z})}function O(){return(0,f.jsx)(c.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,f.jsxs)(s.Z,{spacing:1,children:[(0,f.jsx)(l.Z,{variant:"text",width:"80%"}),(0,f.jsx)(l.Z,{variant:"rectangular",height:100}),(0,f.jsx)(l.Z,{variant:"text",width:"50%"}),(0,f.jsx)(l.Z,{variant:"text",width:"40%"}),(0,f.jsx)(l.Z,{variant:"text",width:"70%"})]})})}},62448:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});n(67294);var r=n(11163),o=n(14308),i=n(72642),a=n(50367),c=n(58862),s=n(85893);function l(e){var t=(0,r.useRouter)(),n=e||{},l=n.children,u=n.route,d=n.loading,p=n.data,f=n.url,g=n.skeleton,j=n.onPageChange,b=n.page,m=n.pageSize,v=void 0===m?10:m;b=(b=b||(u&&u.page?u.page:null))?parseInt(b):1;var O=function(e){if(j&&j(e),f){var n="".concat(f,"/").concat(e);t.push(n)}},h=p&&p.length<v,y=1==b;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.RQ,{children:p&&p.length>0?(0,s.jsxs)(o.Z,{spacing:2,children:[l,(0,s.jsxs)(o.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,s.jsx)(i.Z,{variant:"outlined",disabled:y,onClick:function(){return O(b-1)},children:"Back"}),(0,s.jsx)(i.Z,{variant:"outlined",disabled:h,onClick:function(){return O(b+1)},children:"Next"})]})]}):(0,s.jsx)(c.Dx,{children:d?g||"loading":"No results"})})})}},55619:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(4942),o=n(67294),i=n(11163),a=n(93942),c=n(19016),s=n(25810),l=n(14763),u=n(50789),d=(n(14308),n(529)),p=n(85893);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){var t,n,r,l,u=(0,a.I0)(),d=(0,i.useRouter)(),f=e.config,j=(0,o.useState)(""),m=j[0],v=j[1],O=(0,a.v9)((function(e){return e[f.automata.name]})),h=null!==(t=e.params.render)&&void 0!==t?t:null,y=g(g({},e.params),{},{renderer:null!==(n=e.params.renderer)&&void 0!==n?n:h});O=e.data?{data:e.data,params:{page:e.params.page}}:O;(0,o.useEffect)((function(){O&&(u((0,c.K4)({status:O.loading,sender:f.automata.name})),console.log(f.automata.name,O))}),[O]),(0,o.useEffect)((function(){y.breadcrumbs&&u((0,c.YA)({breadcrumbs:"function"===typeof y.breadcrumbs?y.breadcrumbs(O):y.breadcrumbs}))}),[y.breadcrumbs,O]);var x=function(t){e.fetch&&(e.data?e.fetch(g({},t)):u(e.fetch(g({},t))))};return(0,o.useEffect)((function(){null!==d&&void 0!==d&&d.isReady&&("banner"!==h||f.banner.showData)&&x(y)}),[null===d||void 0===d?void 0:d.isReady,y.id]),h&&"grid"!=h?((0,o.useEffect)((function(){""!=m&&u((0,c.PV)({message:m}))}),[m]),(0,p.jsx)(b,{config:e.config,render:h,state:O,loading:!(null!==d&&void 0!==d&&d.isReady)||!O||"detail"===h&&null==O.data||"list"==h&&0===(null===(r=O.data)||void 0===r?void 0:r.length)||O.loading||(null===(l=O)||void 0===l?void 0:l.error),setErrorMessage:v,fetch:x,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:y})):(0,p.jsx)(s.C,{from:f.page.title,data:"render property wasn't set"})}function b(e){(0,a.I0)();var t,n,r=e.config,o=e.item,i=e.mainCol,c=e.state,u=e.render,d=e.params,f=e.fetch,j=e.setErrorMessage,b=e.loading,O=r.page.title;if(!b&&c){var h;if("detail"===u&&null===c.data&&(j("this is a demo version, this record was filtered out to reduce the database size"),b=!0),"list"===u)0===(null===(h=c.data)||void 0===h?void 0:h.length)&&(j("data not found"),b=!0);c.error&&(j(c.error.message),b=!0)}var y=(0,p.jsx)(m,g({},e));return(0,p.jsxs)(p.Fragment,{children:[c&&c.error&&(0,p.jsx)(s.C,{from:O,data:c.error.message}),"banner"===u&&y,"list"===u&&(0,p.jsx)(l.Z,g(g({},e),{},{id:r.automata.name,banner:y,mainCol:b&&e.skeleton?e.skeleton:(0,p.jsx)(v,g({},e))})),"page"===u&&(0,p.jsx)(l.Z,g(g({},e),{},{id:r.automata.name,banner:y,mainCol:i?(0,p.jsx)(p.Fragment,{children:b&&e.skeleton?e.skeleton:i({data:null!==(t=null===c||void 0===c?void 0:c.data)&&void 0!==t?t:null,loading:b,params:d,fetch:f,item:o})}):(0,p.jsx)(s.C,{from:O,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===u&&(0,p.jsx)(l.Z,g(g({},e),{},{id:r.automata.name,mainCol:i?(0,p.jsx)(p.Fragment,{children:b&&e.skeleton?e.skeleton:i({data:null!==(n=null===c||void 0===c?void 0:c.data)&&void 0!==n?n:null,loading:b})}):(0,p.jsx)(s.C,{from:O,data:"main component missing, not found in mainCol or detail prop"})}))]})}function m(e){var t,n,r,o,i,a,c,s,l=e.config,u=e.state,f=null!==(t=null===(n=l.banner)||void 0===n?void 0:n.showData)&&void 0!==t&&t,g=e.customTitle?e.customTitle:null!==(r=null===(o=l.page)||void 0===o?void 0:o.title)&&void 0!==r?r:"NO TITLE",j=e.customDescription?e.customDescription:null!==(i=null===(a=l.page)||void 0===a?void 0:a.description)&&void 0!==i?i:"NO DESCRIPTION",b=null===(c=l.page)||void 0===c?void 0:c.url;return(0,p.jsx)(d.Z,{showData:f,loading:e.loading,title:g,description:j,data:null===u||void 0===u?void 0:u.data,item:e.item,actions:[{url:b(null!==(s=null===u||void 0===u?void 0:u.params)&&void 0!==s?s:{}),title:"See all"}],hero:"banner"!==e.render})}function v(e){var t,n,r=e.loading,o=e.state,i=e.fetch,a=e.item;return(0,p.jsx)(u.Z,{loading:r,page:null!==(t=null===o||void 0===o?void 0:o.params.page)&&void 0!==t?t:null,data:null!==(n=null===o||void 0===o?void 0:o.data)&&void 0!==n?n:null,onPageChange:function(e){i(g(g({},o.params),{},{page:e}))},item:a})}},12870:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return P},default:function(){return w}});var r=n(4942),o=(n(67294),n(55619)),i={automata:{name:"about-project-blog-post"},page:{title:"the Post",url:function(){return"/about/project/log/posts/"}},banner:{showData:!1}},a=n(45987),c=n(94226),s=n(84283),l=n(92657),u=n(85893),d=["node","inline","className","children"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.content,n={code:function(e){e.node;var t=e.inline,n=e.className,r=e.children,o=(0,a.Z)(e,d),i=/language-(\w+)/.exec(n||"");return!t&&i?(0,u.jsx)(l.Z,f({style:s.$E,PreTag:"div",language:i[1],children:String(r).replace(/\n$/,"")},o)):(0,u.jsx)("code",f(f({className:n||""},o),{},{children:r}))}};return(0,u.jsx)("div",{className:"markdown-body",children:(0,u.jsx)(c.Z,{components:n,children:t})})};n(58862);var j=function(e){var t=e.article;return(0,u.jsx)(g,{content:t.content})};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){var t=e.article;return(0,u.jsx)(o.Z,{config:i,params:e,customTitle:t.meta.title,customDescription:"sprint ".concat(t.meta.sprint," - day ").concat(t.meta.day),mainCol:function(){return(0,u.jsx)(j,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}})}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){return(0,u.jsx)(m,O(O({},e),{},{render:"page"}))};n(11163);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=!0,w=function(e){return(0,u.jsx)(h,x(x({},e),{},{breadcrumbs:"/about/project/log/".concat(e.article.meta.slug)}))}},87466:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/project/log/posts/[index]",function(){return n(12870)}])}},function(e){e.O(0,[6499,5685,1861,4197,9774,2888,179],(function(){return t=87466,e(e.s=t);var t}));var t=e.O();_N_E=t}]);