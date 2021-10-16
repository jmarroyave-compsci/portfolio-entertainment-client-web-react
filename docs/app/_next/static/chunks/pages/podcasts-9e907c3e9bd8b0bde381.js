(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[539],{77173:function(e,t,r){"use strict";r.r(t);var n=r(67294),i=r(93942),a=r(73981),o=r(11163),s=r(42671),c=r(66122),d=r(85893);t.default=function(e){var t=(0,i.I0)();(0,o.useRouter)();return(0,n.useEffect)((function(){t((0,a.Y)({breadcrumbs:[{name:"podcasts"}]})),t((0,c.rQ)({renderer:"grid"}))}),[]),(0,d.jsx)(s.Z,{})}},73981:function(e,t,r){"use strict";r.d(t,{Y:function(){return n}});var n=r(90241).t.actions.setPage},70360:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(4942),i=(r(67294),r(26447)),a=r(60361),o=r(99601),s=r(76085),c=r(92275),d=r(29602),u=r(15671),l=r(43144),p=[{id:"movies",title:"Movies",url:"/movies",tags:["tv","awards"]},{id:"awards",title:"Awards",url:"/stories/awards",tags:["movies","people","tv"]},{id:"people",title:"People",url:"/people",tags:["awards"]},{id:"podcasts",title:"Podcasts",url:"/podcasts",tags:["podcast_music"]},{id:"podcast_music",title:"Music Podcasts",url:"/podcasts/stories/music",tags:["podcasts"]}],f=new(function(){function e(){(0,u.Z)(this,e)}return(0,l.Z)(e,[{key:"getBy",value:function(e){var t=[];return p.forEach((function(r){r.id!==e&&r.tags.includes(e)&&t.push(r)})),t}}]),e}()),g=r(36501),m=r(515),h=r(85893),j=(0,d.ZP)("div")({padding:"0.85rem"}),x=(0,d.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem"}),v=(0,d.ZP)("div")({fontSize:"0.9rem"}),b=function(e){var t=e.filter,r=f.getBy(t);return(0,h.jsx)(g.Z,{children:(0,h.jsxs)(j,{children:[(0,h.jsx)(x,{children:"Stories"}),r.map((function(e,t){return(0,h.jsx)(v,{children:(0,h.jsx)(m.Z,{href:e.url,children:e.title})},t)}))]})})};function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e){var t=e.banner,r=e.mainCol,n=e.rightCol,d=e.id;return(0,h.jsxs)(i.Z,{children:[t&&(0,h.jsx)("div",{style:{marginBottom:"1rem"},children:(0,h.jsx)(o.Z,{compact:!0,className:"section-0",children:t})}),(0,h.jsx)(a.Z,{children:(0,h.jsxs)(s.Z,{className:"page-module",fill:!0,children:[(0,h.jsx)(c.Z,{xs:12,sm:12,md:9,lg:10,style:{paddingRight:"1rem"},children:r}),(0,h.jsxs)(c.Z,{xs:12,sm:12,md:3,lg:2,style:{paddingRight:"1rem"},children:[(0,h.jsx)(b,y(y({},e),{},{filter:d})),n]})]})})]})}},85122:function(e,t){"use strict";t.Z={automata:{name:"stories_podcasts"},page:{title:"Podcasts",description:"a dashboard with information from over 30K podcasts, their categories and language distribution",url:function(){return"/podcasts"}},banner:{showData:!1}}},66122:function(e,t,r){"use strict";r.d(t,{rQ:function(){return b}});var n,i=r(4942),a=r(15861),o=r(87757),s=r.n(o),c=r(24268),d=r(16161),u=r(11163),l=r(30168),p=r(54397),f=r(8300);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h,j=(0,p.Ps)(n||(n=(0,l.Z)(["\n  query GetData\n  {\n    dashboardPodcasts {\n      category\n      language\n      country\n      total\n      yearCreated\n    }\n\n  }\n"]))),x=r(85122),v=x.Z.automata.name,b=(0,c.hg)("".concat(v,"/fetchData"),function(){var e=(0,a.Z)(s().mark((function e(t,r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.dispatch(y(t)),"banner"===t.renderer){e.next=7;break}return e.next=4,(0,f.h)(j,{},(function(e){return m(m({},e),{},{data:e.data.dashboardPodcasts})}));case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0={data:null,loading:!1,error:null};case 8:return e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),Z=(0,c.oM)({name:v,initialState:{params:{renderer:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=t.payload,"banner"!==e.params.renderer&&e.params.page>1&&u.default.push("".concat(x.Z.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(h={},(0,i.Z)(h,b.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(h,b.fulfilled,(function(e,t){var r=t.payload,n=r.loading,i=r.error,a=r.data;e.data=a,e.loading=n,e.error=i})),h)});d.h.reducerManager.add(v,Z.reducer);Z.reducer;var y=Z.actions.setParams},42671:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(4942),i=(r(67294),r(58248)),a=r(42702),o=r(93942),s=r(85122),c=(r(66122),r(76085)),d=r(92275),u=r(22310),l=r(65846),p=r(26447),f=r(63515),g=r(85893);var m=function(e){var t=e.data,r=e.loading,n=(e.route,t||{}),i=n.total,a=n.category,o=n.language,s=n.yearCreated,m=n.country,h=function(e,t,n){return(0,g.jsx)(d.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"},children:(0,g.jsx)(l.Z,{loading:r,title:e,data:t||{},ranges:n})})};return(0,g.jsxs)(p.Z,{spacing:2,children:[(0,g.jsx)(f.Dx,{children:"general"}),(0,g.jsx)(c.Z,{justifyContent:"center",fill:!0,children:function(e,t,n){return(0,g.jsx)(d.Z,{xs:12,sm:6,md:6,lg:3,style:{paddingRight:"1rem"},children:(0,g.jsx)(u.Z,{loading:r,title:e,data:t?t.toString():t,icon:n})})}("podcasts",i,"podcasts")}),(0,g.jsx)(f.Dx,{children:"segments"}),(0,g.jsxs)(c.Z,{justifyContent:"center",fill:!0,children:[h("category",a,[10,100,250]),h("language",o,[10,100]),h("country",m,[10,100]),h("created",s,[])]})]})};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e){(0,o.I0)();var t=(0,o.v9)((function(e){return e[s.Z.automata.name]}));return t?(0,g.jsx)(i.Z,{xs:(0,g.jsx)(a.Z,{type:t.params.renderer,title:s.Z.page.title,description:s.Z.page.description,url:s.Z.page.url(t.params.entity),data:t.data,dashboard:(0,g.jsx)(m,{data:t.data,loading:t.loading}),loading:t.loading,params:j({},t.params)})}):(0,g.jsx)("div",{})}},68220:function(e,t,r){"use strict";r.d(t,{RQ:function(){return i},ck:function(){return a},xs:function(){return o},X:function(){return s}});r(67294);var n=r(29602),i=(0,n.ZP)("div")({padding:"0 0 1rem 0"}),a=(0,n.ZP)("div")({padding:"0 0 0.5rem 0"}),o=(0,n.ZP)("div")({padding:"0 0 0.5rem 0"}),s=(0,n.ZP)("div")({padding:"1rem 1rem 4rem 1rem"})},96035:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});r(67294);var n=r(26447),i=r(515),a=r(29602),o=(0,a.ZP)("h2")({padding:"1rem 0",margin:0}),s=(0,a.ZP)("div")({fontSize:"1rem"}),c=(0,a.ZP)("div")({paddingTop:"2rem"}),d=r(32478),u=r(85893),l=function(e,t,r){return(0,u.jsx)(d.Z,{data:t,renderItem:r})},p=function(e){var t=e.title,r=e.description,a=e.carousel,d=e.footer,p=e.hero,f=e.actions,g=e.data,m=e.item,h=e.showData;return(0,u.jsxs)(n.Z,{children:[(0,u.jsx)(o,{children:t}),r&&""!==r.trim()&&(0,u.jsx)(s,{children:r}),!p&&a,!p&&!0===h&&!a&&l("carousel",g,m),!p&&(0,u.jsxs)(c,{children:[f&&f.map((function(e,t){return(0,u.jsx)(i.Z,{border:!0,href:e.url,children:e.title},t)})),d]})]})}},32478:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});r(67294);var n=r(29602),i=r(86529),a=(r(70338),r(28973)),o=r(26447),s=r(36501),c=r(85893),d=(0,n.ZP)("div")({padding:"1rem 0"}),u=(0,n.ZP)("div")({padding:"0.5rem"});function l(e){var t=e.data,r=e.loading;return r=r||!t||!t.length,t=t&&t.length&&t.length>0?t:[1,2,3,4,5],(0,c.jsx)(d,{children:(0,c.jsx)(i.default,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,centerMode:!1,className:"",containerClass:"container-with-dots",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30}},showDots:!1,sliderClass:"",slidesToSlide:1,swipeable:!0,children:t.map((function(t,n){return(0,c.jsx)(u,{children:r?(0,c.jsx)(p,{}):e.renderItem?e.renderItem(t):f(t)},n)}))})})}function p(){return(0,c.jsx)(s.Z,{style:{padding:"0.5rem"},children:(0,c.jsxs)(o.Z,{spacing:1,children:[(0,c.jsx)(a.Z,{variant:"text",width:"80%"}),(0,c.jsx)(a.Z,{variant:"rectangular",height:118}),(0,c.jsx)(a.Z,{variant:"text"})]})})}function f(e){e.id;var t=e.description,r=e.title;e.image,e.link;return(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:r}),(0,c.jsx)("span",{children:t})]})}},67616:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});r(67294);var n=r(76085),i=r(92275),a=r(79895),o=r(26447),s=r(28973),c=r(9482),d=r(68220),u=r(85893);function l(e){var t=e.data,r=e.loading,a=e.url,o=e.skeleton,s=e.item,l=e.onPageChange,f=e.page;return r=r||!t||0==t.length,t=t&&t.length>0?t:[1,2,3,4,5],console.log(t),(0,u.jsx)(d.RQ,{children:(0,u.jsx)(c.Z,{data:t,url:a,onPageChange:l,page:f,loading:r,children:(0,u.jsx)(n.Z,{justifyContent:"center",fill:!0,style:{width:"100%"},children:t.map((function(e,t){return(0,u.jsx)(i.Z,{xs:12,sm:6,md:6,lg:4,children:(0,u.jsx)(d.xs,{children:r?o||(0,u.jsx)(p,{}):s?s(e):null})},t)}))})})})}function p(){return(0,u.jsx)(a.Z,{style:{padding:"0.5rem"},children:(0,u.jsxs)(o.Z,{spacing:1,children:[(0,u.jsx)(s.Z,{variant:"text",width:"80%"}),(0,u.jsx)(s.Z,{variant:"rectangular",height:240}),(0,u.jsx)(s.Z,{variant:"text"})]})})}},9482:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});r(67294);var n=r(29602),i=r(11163),a=r(26447),o=r(72642),s=r(85893),c=(0,n.ZP)("h3")({marginTop:0});function d(e){var t=(0,i.useRouter)(),r=e||{},n=r.children,d=r.route,u=r.loading,l=r.data,p=r.url,f=r.skeleton,g=r.onPageChange,m=r.page;m=(m=m||(d&&d.page?d.page:null))?parseInt(m):1;var h=function(e){if(window.scrollTo(0,0),g)g(e);else{var r="".concat(p,"/").concat(e);t.push(r)}},j=l&&l.length<10,x=1==m;return(0,s.jsx)(s.Fragment,{children:l&&l.length>0?(0,s.jsxs)(a.Z,{spacing:2,children:[n,(0,s.jsxs)(a.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,s.jsx)(o.Z,{variant:"outlined",disabled:x,onClick:function(){return h(m-1)},children:"Back"}),(0,s.jsx)(o.Z,{variant:"outlined",disabled:j,onClick:function(){return h(m+1)},children:"Next"})]})]}):(0,s.jsx)(c,{children:u?f||"loading":"No results"})})}},60361:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});r(67294);var n=r(26447),i=r(85893);function a(e){var t=e.noPadding;return(0,i.jsx)(n.Z,{sx:{padding:t?{}:{xs:"0rem 2rem 3rem 2rem",sm:"0rem 2rem 3rem 2rem",lg:"0rem 4rem 3rem 4rem"},fontSize:"1rem"},children:e.children})}},99601:function(e,t,r){"use strict";var n=r(15671),i=r(43144),a=r(60136),o=r(82963),s=r(61120),c=r(67294),d=r(58248),u=r(33875),l=r(1267),p=r(11053),f=r(85893);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var i=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var m=function(e){(0,a.Z)(r,e);var t=g(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.cover,n=(e.padding,e.children),i=(e.hero,e.rounded),a=(e.compact,!0===r?"100vh":"inherit");return i=!0===i,(0,f.jsx)(d.Z,{xs:this.renderSection("xs",n,t,a,i),sm:this.renderSection("sm",n,t,a,i),md:this.renderSection("md",n,t,a,i)})}},{key:"renderSection",value:function(e,t,r,n,i){var a=this.getStyle(r),o={boxSizing:"border-box",width:"100%",height:n,padding:this.getPadding(e),borderRadius:i?"0.5rem 0.5rem 0 0":0,background:a.background,color:a.color};return(0,f.jsx)(l.Z,{from:"/core/ui/section",children:(0,f.jsx)("div",{className:"com-layout-section",children:(0,f.jsx)("div",{className:"".concat(r),style:o,children:t})})})}},{key:"getPadding",value:function(e){var t=this.props.compact,r={xs:{top:1.5,bottom:3,left:1.5,right:1.5},sm:{top:2,bottom:4,left:3,right:3},md:{top:3,bottom:2.5,left:2.5,right:2.5}}[e];return"".concat(r.top,"rem ").concat(r.right,"rem ").concat(t?r.top:r.bottom,"rem ").concat(r.left,"rem")}},{key:"getStyle",value:function(e){switch(e){case"section-0":return{background:"linear-gradient(60deg, ".concat(p.Z.palette.primary.dark," 0%, #000 150%)"),color:p.Z.palette.primary.contrastText};case"section-1":return{background:"linear-gradient(60deg, ${theme.palette.primary.light} 0%, rgba(85,85,85,1) 100%)",color:"black"};case"section-2":return{background:"linear-gradient(180deg, rgba(215,215,215,1) 0%, rgba(255,245,245,1) 125%)",color:"#444"};case"section-3":return{background:"linear-gradient(180deg, #fff 0%, rgba(215,215,215,1) 100%)",color:"#333"};default:return""!=e&&console.log(e),{background:"#f0f0f0",color:"black"}}}}]),r}(c.Component);t.Z=(0,u.Z)(m)},20111:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/podcasts",function(){return r(77173)}])}},function(e){e.O(0,[146,218,467,184,832,774,888,179],(function(){return t=20111,e(e.s=t);var t}));var t=e.O();_N_E=t}]);