"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1418],{59231:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(67294),i=t(29602),o=t(74035),a=t(58862),c=t(82356),d=(t(52651),t(23275),t(74288),t(89260)),l=t(57435),s=t(87550),u=t(39660),p=t(21314),f=t(56775),h=t(72162),m=t(65148),y=t(54123),v=t(85893),g=(0,i.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),w=(0,i.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),j=(0,i.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),b=(0,i.ZP)("div")({fontSize:"1.30rem",lineHeight:"1.4rem"}),O=(0,i.ZP)("div")({textTransform:"uppercase",margin:"0.5rem 0 0.5rem 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem"}),x=(0,i.ZP)("div")({paddingLeft:"1rem"}),P=function(e){var n=e.year,t=e.children;return(0,v.jsx)(d.Z,{href:"/movies/stories/awards?year=".concat(n),children:t})};function Z(e){var n=e.data,t=[],i={};return n&&0!=n.length?((0,r.useMemo)((function(){(t=(t=n.slice(0)).sort((function(e,n){var t,r,i,o;return e.year!=n.year?e.year<n.year?1:-1:(null===e||void 0===e||null===(t=e.festival)||void 0===t?void 0:t.name)!=(null===n||void 0===n||null===(r=n.festival)||void 0===r?void 0:r.name)?(null===e||void 0===e||null===(i=e.festival)||void 0===i?void 0:i.name)<(null===n||void 0===n||null===(o=n.festival)||void 0===o?void 0:o.name)?-1:1:e.category<n.category?-1:1}))).forEach((function(e){var n,t,r=null!==(n=null===(t=e.festival)||void 0===t?void 0:t.name)&&void 0!==n?n:"festival name";i[e.year]||(i[e.year]={}),i[e.year][r]||(i[e.year][r]={id:e.festival.id}),i[e.year][r][e.category]||(i[e.year][r][e.category]={won:e.won})}))}),[n]),!0===e.mini?function(e,n){var t=e.year,r=e.all,i=r?n.length:2;t=parseInt(t);var o=function(e){return!t||e.year==t};return(0,v.jsxs)(g,{children:[n&&n.length>0&&n.slice(0,i).map((function(e,n){var t,r;return o(e)&&(0,v.jsx)("div",{children:(0,v.jsx)(P,{year:e.year,children:(0,v.jsxs)(w,{children:[e.year," - ",(null!==(t=null===(r=e.festival)||void 0===r?void 0:r.name)&&void 0!==t?t:"festival name").toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})})},n)})),!r&&n&&n.length>i&&(0,v.jsx)(w,{children:(0,v.jsx)(w,{children:(0,v.jsxs)(j,{children:["and ",n.length-i," more"]})})})]})}(e,t):function(e,n){return(0,v.jsxs)(o.RQ,{children:[(0,v.jsx)(a.DK,{children:"awards"}),(0,v.jsx)(s.Z,{children:n&&Object.keys(n).reverse().map((function(e,t){return(0,v.jsxs)(u.Z,{children:[(0,v.jsx)(y.Z,{style:{flex:0},color:"text.secondary",children:(0,v.jsx)(P,{year:e,children:(0,v.jsx)(b,{children:e})})}),(0,v.jsxs)(p.Z,{children:[(0,v.jsx)(m.Z,{}),t+1<Object.keys(n).length&&(0,v.jsx)(f.Z,{})]}),(0,v.jsx)(h.Z,{children:Object.keys(n[e]).map((function(t){return(0,v.jsxs)("div",{children:[(0,v.jsx)(l.Z,{entity:"movies",year:e,id:n[e][t].id,children:(0,v.jsx)(O,{children:t})}),Object.keys(n[e][t]).filter((function(e){return"id"!==e})).map((function(r){return(0,v.jsx)(x,{children:(0,v.jsx)(c.Z,{title:!1===n[e][t][r].won?"nominee":"winner",value:r})},r)}))]},n[e][t].id)}))})]},e)}))})]})}(0,i)):(0,v.jsx)("div",{})}},57435:function(e,n,t){t(67294);var r=t(89260),i=t(85893);n.Z=function(e){var n=e.box,t=e.id,o=e.year,a=e.entity,c=e.children;return(0,i.jsx)(r.Z,{box:n,to:"/".concat(a,"/stories/awards/").concat(t,"/").concat(o),children:c})}},49896:function(e,n,t){t(67294);var r=t(89260),i=t(85893);n.Z=function(e){var n=e.id,t=(e.entity,e.children),o=e.box;return n?(0,i.jsx)(r.Z,{box:o,border:!1,to:"/movies/".concat(n),children:t}):t}},75679:function(e,n,t){t.d(n,{T4:function(){return y},AK:function(){return w},iY:function(){return b},Ez:function(){return v}});var r,i,o,a,c,d=t(4942),l=t(30168),s=t(54397),u=t(42535),p=(0,s.Ps)(r||(r=(0,l.Z)(["\nfragment EntityTinyFragment on Entity {\n  id: _id\n  title\n}\n"]))),f=t(85639);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y=(0,s.Ps)(i||(i=(0,l.Z)(["\nfragment PersonTinyFragment on Person {\n  id: _id\n  name\n}\n"]))),v=function(e){var n=e.page,t=e.op,r=e.qryName,i=void 0===r?"":r,o=e.withDirected,a=void 0===o||o,c=e.withActed,d=void 0!==c&&c,l=e.withWrote,s=void 0!==l&&l,p=e.withProduced,f=void 0!==p&&p,h=e.withActedWith,y=void 0!==h&&h,v=e.withDirectedTo,w=void 0!==v&&v,j=e.withDirectedBy,b=void 0!==j&&j;return(0,u.h)(g({qryName:i}),{page:n,withActed:d,withDirected:null!==a&&void 0!==a&&a,withProduced:f,withWrote:s,withActedWith:y,withDirectedBy:b,withDirectedTo:w,field:JSON.stringify(t)},(function(e){return m(m({},e),{},{data:e.data.people})}))},g=function(e){var n=e.qryName;e.withActed,e.withDirected,e.withProduced,e.withWrote,e.withDirectedTo,e.withDirectedBy,e.withActedWith;return(0,s.Ps)(o||(o=(0,l.Z)(["\n  ","\n  ","\n  query people_","($page: Int, $field: String, $withActed: Boolean!, $withProduced: Boolean!, $withDirected: Boolean!, $withWrote: Boolean!)\n  {\n    people(page: $page, field: $field, withActed: $withActed, withWrote: $withWrote, withDirected: $withDirected, withProduced: $withProduced){\n      ...PersonTinyFragment\n      directed @include(if: $withDirected){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n      acted @include(if: $withActed){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n      produced @include(if: $withProduced){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n      wrote @include(if: $withWrote){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n    }\n  }\n"])),p,y,n)},w=function(){return(0,u.h)(j(),{},(function(e){return m(m({},e),{},{data:e.data.dashboardPeople})}))},j=function(){return(0,s.Ps)(a||(a=(0,l.Z)(["\n  query dashboard_people\n  {\n    dashboardPeople {\n      total\n      birthYear\n      birthDecade\n      professionsPerPerson\n      professions\n      professionsByDecade\n      awards\n      directors\n      producers\n      actors\n      writers\n    }\n  }\n"])))},b=function(e){var n=e.id,t=e.qryName,r=void 0===t?"":t;return(0,u.h)(O({qryName:r}),{id:n},(function(e){return m(m({},e),{},{data:e.data.person})}))},O=function(e){e.qryName;return(0,s.Ps)(c||(c=(0,l.Z)(["\n","\n","\n","\nquery person($id:String!) {\n  person(id: $id){\n    id: _id\n    name\n    birthYear\n    deathYear\n    profession\n    awards {\n      category\n      festival{\n        ...MovieFestivalTinyFragment\n      }\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    produced{\n      id{\n        ...EntityTinyFragment\n      } \n    }\n    directed{\n      id{\n        ...EntityTinyFragment\n      } \n    }\n    acted {\n      id{\n        ...EntityTinyFragment\n      } \n      as\n    }\n    wrote{\n      id{\n        ...EntityTinyFragment\n      } \n    }\n    crew{\n      id{\n        ...EntityTinyFragment\n      } \n      as\n      cat\n      job\n    }    \n    directedTo{\n      p{\n        ...PersonTinyFragment\n      }\n      n\n    }\n    directedBy{\n      p{\n        ...PersonTinyFragment\n      }\n      n\n    }\n    actedWith{\n      p{\n        ...PersonTinyFragment\n      }\n      n\n    }    \n  }\n}\n"])),y,f.B9,p)}},11388:function(e,n,t){t.d(n,{Z:function(){return U}});var r,i=t(4942),o=t(67294),a=t(55619),c={automata:{name:"stories-remakes"},page:{title:"Remakes",description:"",url:function(e){var n=e.entity;return"/".concat(n,"/stories/remakes")}},banner:{showData:!0,renderer:"marquee"}},d=t(15861),l=t(87757),s=t.n(l),u=t(24268),p=t(80105),f=t(11163),h=t(30168),m=t(54397),y=t(42535),v=t(75679);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j,b=function(e){var n=e.page,t=e.entity,r=e.extended,i=e.limit;return(0,y.h)(O({ENTITY:t.replace(/-/g,"_")}),{page:n,extended:r,limit:i},(function(e){return w(w({},e),{},{data:e.data.storyRemakes})}))},O=function(e){var n=e.ENTITY;return(0,m.Ps)(r||(r=(0,h.Z)(["\n","\nquery ","_remakes($page: Int, $limit: Int, $extended: Boolean){\n  storyRemakes(page: $page, limit : $limit, extended : $extended){\n    name\n    count\n    recs{\n      id: _id\n      releaseYear\n      directed{\n        id{\n          ...PersonTinyFragment\n        } \n      }\n    }\n  }\n}\n"])),v.T4,n)},x=t(1015);function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var T=c.automata.name,D=(0,u.hg)("".concat(T,"/fetchTopic"),function(){var e=(0,d.Z)(s().mark((function e(n,t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.S)(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),E=(0,u.hg)("".concat(T,"/fetchData"),function(){var e=(0,d.Z)(s().mark((function e(n,t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.dispatch(S(n));case 2:return n.extended="banner"!==n.renderer,n.limit="banner"===n.renderer?100:10,e.next=6,b(n);case 6:return r=e.sent,"banner"===n.renderer&&(r.data=[{words:r.data}]),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),k=(0,u.oM)({name:T,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null,topic:{data:null,loading:!0,error:null}},reducers:{setParams:function(e,n){e.params=Z(Z({},e.params),n.payload),"banner"!=e.params.renderer&&1!=e.params.page&&f.default.push("".concat(c.page.url(e.params),"?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(j={},(0,i.Z)(j,E.pending,(function(e,n){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(j,E.fulfilled,(function(e,n){var t=n.payload,r=t.loading,i=t.error,o=t.data;e.data=o,e.loading=r,e.error=i})),(0,i.Z)(j,E.rejected,(function(e,n){var t=n.error;e.data=[],e.loading=!1,e.error=t})),(0,i.Z)(j,D.pending,(function(e,n){e.topic.data=null,e.topic.loading=!0,e.topic.error=""})),(0,i.Z)(j,D.fulfilled,(function(e,n){var t=n.payload,r=t.loading,i=t.error,o=t.data;e.topic.data=o,e.topic.loading=r,e.topic.error=i})),(0,i.Z)(j,D.rejected,(function(e,n){var t=n.error;e.topic.data=[],e.topic.loading=!1,e.topic.error=t})),j)});p.h.reducerManager.add(T,k.reducer);k.reducer;var S=k.actions.setParams,C=t(43332),$=t(49896),A=(t(59231),t(19888),t(82356)),F=t(85893);function _(e){var n=e.image,t=e.name,r=(e.count,e.recs);return(0,F.jsx)(C.Z,{image:n?n.poster:n,text:(0,F.jsx)("div",{children:r&&r.slice(0,3).map((function(e,n){var t,r,i;return null!==(t=e.directed[0])&&void 0!==t&&t.id?(0,F.jsx)(A.Z,{title:e.releaseYear,value:(0,F.jsx)(H,{id:e.id,children:null===(r=e.directed[0])||void 0===r||null===(i=r.id)||void 0===i?void 0:i.name},n)},n):(0,F.jsx)(A.Z,{title:"\xa0",value:(0,F.jsx)(H,{id:e.id,children:e.releaseYear},n)},n)}))}),title:t})}function H(e){var n=e.id,t=e.children;return n?(0,F.jsx)($.Z,{id:n,children:(0,F.jsx)("div",{children:t})}):t}var I=t(39704),N=(t(2535),t(74035),t(26989)),R=t(23620);function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?W(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var L={showLines:!0,showTimeline:!1,topic:""};function q(e,n){var t;switch(n.type){case"INIT":return B(B({},e),{},{showLines:!0,showTimeline:!1,topic:""});case"SELECT_WORD":return B(B({},e),{},{showLines:!1,showTimeline:!0,topic:n.payload.topic});case"EXIT_TIMELINE":return B(B({},e),{},{showLines:!0,showTimeline:!1,topic:""});default:throw new Error("operation ".concat(null===(t=n.type)||void 0===t?void 0:t.toUpperCase()," not implemented"))}}var z=function(e){var n=e.props,t=n.words,r=(n.genre,n.year,(0,o.useReducer)(q,L)),i=r[0],a=r[1];return(0,F.jsxs)("div",{children:[(0,F.jsx)(R.Z,{data:t,onTopicClick:function(n){e.onTopicClick&&e.onTopicClick(n),a({type:"SELECT_WORD",payload:{topic:n}})},wordName:function(e){return e.name},wordCount:function(e){return e.count}}),(0,F.jsx)("br",{}),i.topic&&(0,F.jsx)(N.Z,{topic:i.topic,data:e.topicData,onExit:function(e){a({type:"EXIT_TIMELINE"})}})]})},Y=function(e){var n=(0,I.I0)(),t=(0,I.v9)((function(e){return e["stories-remakes"]}));e.max,e.min,e.words;return(0,F.jsx)("div",{style:{padding:"1rem",width:"100%"},children:(0,F.jsx)(z,{onTopicClick:function(t){t=t.toLowerCase().replace(/ /g,","),e.onTopicClick&&e.onTopicClick(t),n(D({entity:"movie",topic:t}))},props:e,topicData:t})})};function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function U(e){return(0,F.jsx)(a.Z,{params:e,config:c,fetch:function(e){return E(G({},e))},item:function(n){return"banner"===e.render?(0,F.jsx)(Y,G({},n)):(0,F.jsx)(_,G({full:!0},n))}})}},41418:function(e,n,t){var r=t(4942),i=(t(67294),t(11388)),o=t(85893);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){return(0,o.jsx)(i.Z,c(c({},e),{},{render:"list"}))}},19888:function(e,n,t){t.d(n,{Rx:function(){return a},T5:function(){return c},et:function(){return d}});var r=t(92077),i=t.n(r),o=t(24417),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0a";return i()(Number(e)).format(n)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o.default.toSentenceCase(e)},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o.default.toHeaderCase(e)}},43332:function(e,n,t){t(67294);var r=t(65295),i=t(18515),o=t(42643),a=t(54962),c=t(49161),d=t(2658),l=t(360),s=t(9092),u=t(14563),p=t(44290),f=t(85893),h=(0,p.Z)((function(e){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),m="".concat(s.Z.APP.BASE_PATH).concat(s.Z.DEFAULTS.IMAGE_PLACEHOLDER),y=function(e){return e.target.src=m};n.Z=function(e){var n,t=h(),p=e.title,m=e.subtitle,v=e.text,g=e.image,w=e.imageHeight,j=void 0===w?180:w,b=e.noImage,O=e.actions,x=0;m=m||"";return b=!!b,g=g||s.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,f.jsxs)(r.Z,{style:{flexGrow:1,width:"100%"},children:[(0,f.jsx)(i.Z,{sx:{width:"100%"},classes:{content:t.headerContent,root:t.headerRoot},title:(0,f.jsx)(u.Z,{title:p||"",placement:"bottom-start",children:(0,f.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,f.jsx)(d.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:p})})}),subheader:(0,f.jsx)(u.Z,{title:m||"",placement:"bottom-start",children:(0,f.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,f.jsx)(d.Z,{noWrap:!0,style:{display:"inline-block",width:"100%"},children:m})})})}),!b&&(0,f.jsx)(a.Z,{height:j||null,image:null!==(n=g)&&void 0!==n&&n.startsWith("/")?"".concat(s.Z.APP.BASE_PATH).concat(g):g,component:"img",onError:y}),v&&(0,f.jsx)(o.Z,{children:(0,l.HD)(v)?(0,f.jsx)(d.Z,{variant:"body2",color:"text.secondary",component:"div",children:v}):v}),O&&O.length>0&&(0,f.jsx)(c.Z,{children:O.map((function(e){return(0,f.jsx)("div",{children:e},x++)}))})]})}},88888:function(e,n,t){var r=t(15671),i=t(43144),o=t(60136),a=t(6215),c=t(61120),d=t(67294),l=t(36501),s=t(85893);function u(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,c.Z)(e);if(n){var i=(0,c.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,a.Z)(this,t)}}var p=function(e){(0,o.Z)(t,e);var n=u(t);function t(){return(0,r.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.className,r=e.elevation,i=e.style;return i=i||{},e.fill&&(i.width="100%"),(0,s.jsx)(l.Z,{className:t,style:i,elevation:r,children:n})}}]),t}(d.Component);n.Z=p},74288:function(e,n,t){t(67294),t(85893)},2535:function(e,n,t){t.d(n,{u:function(){return c},Ct:function(){return d},xs:function(){return u},Dx:function(){return p},x4:function(){return f}});t(67294);var r=t(29602),i=(t(88888),t(32583)),o=t(14563),a=t(85893),c=function(e){var n=e.children,t=e.content;return t&&null!=t&&"?"!==t?(0,a.jsx)(o.Z,{title:t,placement:"bottom-start",children:n}):n},d=function(e){var n=e.children,t=e.content;return t&&null!=t&&0!=t?(0,a.jsx)(i.Z,{badgeContent:t,color:"primary",children:n}):n},l=(0,r.ZP)("div")((function(e){var n=e.theme,t=e.width,r=e.height;return{backgroundColor:n.palette.action.selected,margin:"0 1rem 1rem 0",padding:0,display:"flex",color:n.palette.text.primary,alignItems:"center",minWidth:t,maxWidth:"100%",minHeight:r,maxHeight:r,borderRadius:"5px"}})),s=(0,r.ZP)("div")((function(e){var n=e.theme;e.width;return{backgroundColor:"transparent",color:n.palette.text.primary,padding:"0.7rem",display:"block",flexGrow:1,margin:"0.1rem",width:"100%"}})),u=function(e){var n=e.width,t=void 0===n?"300px":n,r=e.height,i=void 0===r?"300px":r;return(0,a.jsx)(l,{width:t,height:i,children:(0,a.jsx)(s,{children:e.children})})},p=(0,r.ZP)("h2")({fontSize:"1.3rem",lineHeight:"1.5rem",padding:0,margin:0,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}),f=((0,r.ZP)("h3")({fontSize:"1.1rem",lineHeight:"1.3rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),(0,r.ZP)("div")({margin:0,marginBottom:"1rem"}),(0,r.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}));(0,r.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),(0,r.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})}}]);