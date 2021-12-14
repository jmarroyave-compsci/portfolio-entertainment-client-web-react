"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9471],{42145:function(n,e,r){var t=r(4942),a=(r(67294),r(83574)),i=r(50789),o=r(34769),c=r(85893);function s(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function u(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){(0,t.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}e.Z=function(n){var e=n.type,r=n.format;switch(void 0===r?"grid":r){case"hlist":return(0,c.jsx)(o.Z,u(u({},n),{},{item:function(n){return(0,c.jsx)(a.Z,u(u({format:"list"},n),{},{type:e}))}}));case"grid":default:return(0,c.jsx)(i.Z,u(u({},n),{},{item:function(n){return(0,c.jsx)(a.Z,u(u({},n),{},{type:e}))}}))}}},91200:function(n,e,r){r.d(e,{Ez:function(){return p},AK:function(){return l},iY:function(){return m}});var t,a,i,o=r(30168),c=r(4942),s=r(54397),u=r(42535);function d(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function f(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){(0,c.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var p=function(n){var e=n.page,r=n.op,t=n.qryName,a=void 0===t?"":t;return(0,u.h)(g({qryName:a}),{page:e,field:JSON.stringify(r)},(function(n){return f(f({},n),{},{data:n.data.podcasts})}))},g=function(n){var e=n.qryName;return(0,s.Ps)(t||(t=(0,o.Z)(["\n  query podcasts_","($page: Int, $field: String)\n  {\n    podcasts(page: $page, field: $field){\n      id: _id\n      title\n      author\n    }\n  }\n"])),e)},l=function(){return(0,u.h)(y(),{},(function(n){return f(f({},n),{},{data:n.data.dashboardPodcasts})}))},y=function(){return(0,s.Ps)(a||(a=(0,o.Z)(["\nquery dashboard_podcasts\n  {\n    dashboardPodcasts {\n      total\n      author\n      countries\n      languages\n      category\n      subcategory\n    }\n  }\n"])))},m=function(n){var e=n.id,r=n.qryName,t=void 0===r?"":r;return(0,u.h)(b({qryName:t}),{id:e},(function(n){return f(f({},n),{},{data:n.data.podcast})}))},b=function(n){n.qryName;return(0,s.Ps)(i||(i=(0,o.Z)(["\nquery podcast($id: String!)\n{\n  podcast(id: $id){\n    id: _id \n    title\n    subtitle\n    feedUrl\n    description\n    summary\n    author\n    link\n    language\n    image{\n      poster\n    }\n    category\n    subcategory\n    createdDate\n  }\n}\n"])))}},88654:function(n,e,r){r.d(e,{Ez:function(){return l},iY:function(){return m},AK:function(){return v}});var t,a,i,o=r(30168),c=r(4942),s=r(54397),u=r(42535),d=r(75679),f=r(85639);function p(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function g(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){(0,c.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var l=function(n){var e=n.page,r=n.op,t=n.qryName,a=void 0===t?"":t;return(0,u.h)(y({qryName:a}),{page:e,field:JSON.stringify(r)},(function(n){return g(g({},n),{},{data:n.data.tvShows})}))},y=function(n){var e=n.qryName;return(0,s.Ps)(t||(t=(0,o.Z)(["\n  query tv_shows_","($page: Int, $field: String)\n  {\n    tvShows(page: $page, field: $field){\n      id: _id\n      title\n    }\n  }\n"])),e)},m=function(n){var e=n.id,r=n.qryName,t=void 0===r?"":r;return(0,u.h)(b({qryName:t}),{id:e},(function(n){return g(g({},n),{},{data:n.data.tvShow})}))},b=function(n){n.qryName;return(0,s.Ps)(a||(a=(0,o.Z)(["\n","\n","\nquery tv_show($id:String!) {\n  tvShow(id: $id){\n    id: _id\n    title\n    countries\n    type\n    genres\n    duration\n    ratings {\n      averageRating\n      name\n    }\n    releaseYear\n    classification\n    streamBy {\n      name\n      yearAdded\n    }\n    produced{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    directed{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    cast {\n      id{\n        ...PersonTinyFragment\n      } \n      as\n    }\n    written{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    crew{\n      id{\n        ...PersonTinyFragment\n      } \n      as\n      cat\n      job\n    }    \n    awards {\n      category\n      festival{\n        ...MovieFestivalTinyFragment\n      }\n      won\n      year\n    }\n    image {\n      poster\n    }\n    boxOffice\n    production\n    language\n    plot\n    remakes{\n      title\n      releaseYear\n      directed{\n        id{\n          ...PersonTinyFragment\n        } \n      }\n    }\n\n  }\n}\n"])),f.B9,d.T4)},v=function(n){var e=n.dataEntity,r=n.qryName;return(0,u.h)(O({ENTITY:e,qryName:r}),{},(function(n){return g(g({},n),{},{data:n.data.dashboardTVShows})}))},O=function(n){n.ENTITY,n.qryName;return(0,s.Ps)(i||(i=(0,o.Z)(["\n  query dashboard_tv_shows\n  {\n    dashboardTVShows {\n      total\n      type\n      releaseDecade\n      duration\n      genres\n      awards\n      countries\n      ratings\n      production\n      boxOffice\n      cast\n      directors\n      producers\n      writers\n    }\n  }\n"])))}},77585:function(n,e,r){r.d(e,{Ez:function(){return l},iY:function(){return m},AK:function(){return v}});var t,a,i,o=r(30168),c=r(4942),s=r(54397),u=r(42535),d=r(75679),f=r(85639);function p(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function g(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){(0,c.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var l=function(n){var e=n.page,r=n.op,t=n.qryName,a=void 0===t?"":t;return(0,u.h)(y({qryName:a}),{page:e,field:JSON.stringify(r)},(function(n){return g(g({},n),{},{data:n.data.videoGames})}))},y=function(n){var e=n.qryName;return(0,s.Ps)(t||(t=(0,o.Z)(["\n  query video_games_","($page: Int, $field: String)\n  {\n    videoGames(page: $page, field: $field){\n      id: _id\n      title\n    }\n  }\n"])),e)},m=function(n){var e=n.id,r=n.qryName,t=void 0===r?"":r;return(0,u.h)(b({qryName:t}),{id:e},(function(n){return g(g({},n),{},{data:n.data.videoGame})}))},b=function(n){n.qryName;return(0,s.Ps)(a||(a=(0,o.Z)(["\n","\n","\nquery video_game($id:String!) {\n  videoGame(id: $id){\n    id: _id\n    title\n    countries\n    type\n    genres\n    duration\n    ratings {\n      averageRating\n      name\n    }\n    releaseYear\n    classification\n    streamBy {\n      name\n      yearAdded\n    }\n    produced{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    directed{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    cast {\n      id{\n        ...PersonTinyFragment\n      } \n      as\n    }\n    written{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    crew{\n      id{\n        ...PersonTinyFragment\n      } \n      as\n      cat\n      job\n    }    \n    awards {\n      category\n      festival{\n        ...MovieFestivalTinyFragment\n      }\n      won\n      year\n    }\n    image {\n      poster\n    }\n    boxOffice\n    production\n    language\n    plot\n    remakes{\n      title\n      releaseYear\n      directed{\n        id{\n          ...PersonTinyFragment\n        } \n      }\n    }\n\n  }\n}\n"])),f.B9,d.T4)},v=function(n){var e=n.dataEntity,r=n.qryName;return(0,u.h)(O({ENTITY:e,qryName:r}),{},(function(n){return g(g({},n),{},{data:n.data.dashboardVideoGames})}))},O=function(n){n.ENTITY,n.qryName;return(0,s.Ps)(i||(i=(0,o.Z)(["\n  query dashboard_video_games\n  {\n    dashboardVideoGames {\n      total\n      type\n      releaseDecade\n      duration\n      genres\n      awards\n      countries\n      ratings\n      production\n      boxOffice\n      cast\n      directors\n      producers\n      writers\n    }\n  }\n"])))}},77078:function(n,e,r){r.d(e,{rQ:function(){return b}});var t,a=r(4942),i=r(15861),o=r(87757),c=r.n(o),s=r(24268),u=r(80105),d=(r(11163),r(75679)),f=r(23731),p=r(88654),g=r(77585),l=r(91200),y=r(85639),m="dashboard",b=(0,s.hg)("".concat(m,"/fetchData"),function(){var n=(0,i.Z)(c().mark((function n(e,r){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.dispatch(O(e)),e.qryName="dashboard_click",n.t0=e.type,n.next="person"===n.t0?5:"movie"===n.t0?8:"tvShow"===n.t0?11:"videoGame"===n.t0?14:"movieFestival"===n.t0?17:"podcast"===n.t0?20:23;break;case 5:return n.next=7,d.Ez(e);case 7:return n.abrupt("return",n.sent);case 8:return n.next=10,f.Ez(e);case 10:return n.abrupt("return",n.sent);case 11:return n.next=13,p.Ez(e);case 13:return n.abrupt("return",n.sent);case 14:return n.next=16,g.Ez(e);case 16:return n.abrupt("return",n.sent);case 17:return n.next=19,y.Ez(e);case 19:return n.abrupt("return",n.sent);case 20:return n.next=22,l.Ez(e);case 22:return n.abrupt("return",n.sent);case 23:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()),v=(0,s.oM)({name:m,initialState:{params:{page:null},data:null,loading:!1,error:null},reducers:{setParams:function(n,e){n.params.page=e.payload.page}},extraReducers:(t={},(0,a.Z)(t,b.pending,(function(n,e){n.data=null,n.loading=!0,n.error=""})),(0,a.Z)(t,b.fulfilled,(function(n,e){var r=e.payload,t=r.loading,a=r.error,i=r.data;n.data=i,n.loading=t,n.error=a})),(0,a.Z)(t,b.rejected,(function(n,e){var r=e.error;n.data=[],n.loading=!1,n.error=r})),t)});u.h.reducerManager.add(m,v.reducer);v.reducer;var O=v.actions.setParams},34769:function(n,e,r){r.d(e,{Z:function(){return f}});var t=r(67294),a=r(29602),i=r(26447),o=r(62448),c=r(36501),s=r(28973),u=r(85893),d=(0,a.ZP)("div")((function(){return{padding:"1rem",marginBottom:"0rem",backgroundColor:"transparent"}}));function f(n){var e=n.skeleton,r=n.data,a=n.item,c=n.noPaging,s=void 0===c||c,f=n.pageSize,g=n.loading,l=n.onPageChange,y=n.page,m=n.url,b=(0,t.useRef)(null);r=r||[1,2,3,4];var v=(0,u.jsx)(d,{children:(0,u.jsxs)(i.Z,{direction:"row",style:{overflowX:"auto"},children:[(0,u.jsx)("div",{ref:b}),r.map((function(n,r){return(0,u.jsx)("div",{style:{width:"100%"},children:g?e||(0,u.jsx)(p,{}):a?a(n):null},r)}))]})});return s||(v=(0,u.jsx)(o.Z,{pageSize:f,data:r,url:m,onPageChange:function(n){b.current.scrollIntoView(!1),l&&l(n)},page:y,loading:g,children:v})),v}function p(){return(0,u.jsx)(c.Z,{style:{width:"200px",backgroundColor:"transparent",flexGrow:1,padding:"1rem",margin:"0.5rem"},children:(0,u.jsxs)(i.Z,{spacing:1,children:[(0,u.jsx)(s.Z,{variant:"text",width:"20%"}),(0,u.jsx)(s.Z,{variant:"text"}),(0,u.jsx)(s.Z,{variant:"text",width:"60%"})]})})}}}]);