/*! For license information please see 4805.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[4805],{91534:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(83347),c=r(86688),s=r(72797);class l extends a.Component{render(){const{className:e,cover:t,padding:r,children:c,hero:s}=this.props,l=!0===t?"100vh":"inherit";return a.createElement(n.Z,{xs:this.renderSection(c,e,l,"2rem 0rem"),sm:this.renderSection(c,e,l,"3rem 0rem"),md:this.renderSection(c,e,l,"4rem 2.5rem")})}renderSection(e,t,r,n){return a.createElement(s.Z,{from:"/core/ui/section"},a.createElement("div",{className:"com-layout-section"},a.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:n}},e)))}}const o=(0,c.Z)(l)},18319:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(39398).default},61598:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(67294),n=r(80383),c=r(81648),s=r(87125),l=r(93775);class o extends a.Component{render(){const{data:e,loading:t}=this.props,{total:r,awards:o,classification:i,country:d,genre:m,type:f,rating:u,yearReleased:y,streamBy:p}=e||{},g=(e,r,n)=>a.createElement(c.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"}},a.createElement(l.default,{loading:t,title:e,data:r||{},ranges:n}));return a.createElement("div",{style:{width:"100%"}},a.createElement(n.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},a.createElement(c.Z,{xs:12,sm:12,md:12},a.createElement(n.Z,{justifyContent:"center",fill:!0},((e,r,n)=>a.createElement(c.Z,{xs:12,sm:6,md:4,lg:3,style:{paddingRight:"1rem"}},a.createElement(s.default,{loading:t,title:"movies",data:r?r.toString():r,icon:"local_movies"})))(0,r))),a.createElement(c.Z,{xs:12,sm:12,md:12},a.createElement(n.Z,{justifyContent:"center",fill:!0},g("awards",o,[1,5,10,20,30,70,100,250]),g("classification",i,[]),g("countries",d,[1,5,10,20,30,70,100,250]),g("genres",m,[100,250]),g("stream by",p,[]),g("types",f,[]),g("rated by",u,[]),g("years released",y,[10,25,50])))))}}const i=o},41421:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(21985).default},87701:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var a=r(67294),n=r(91534),c=r(80383),s=r(81648),l=r(61598);const o=function(e){return a.createElement(c.Z,{className:"page-module",fill:!0},a.createElement(s.Z,{fill:!0},a.createElement(n.Z,{className:"section-0"},a.createElement(l.default,e))))}},21985:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(67294),n=r(83347),c=r(87701);function s(e){return a.createElement(n.Z,{xs:a.createElement(c.default,e)})}},72692:(e,t,r)=>{r.r(t),r.d(t,{QRY_DASHBOARD:()=>o,default:()=>i});var a=r(67294),n=r(18319),c=r(41421),s=r(54397),l=r(70846);const o=s.Ps`
  query getDashboard 
{
  dashboardMovies {
    awards
    classification
    country
    genre
    rating
    streamBy
    total
    type
    yearReleased
  }
}
`;function i(e){var{loading:t,error:r,data:s}=(0,l.a)(o);const i={loading:t,error:r,data:s=s?s.dashboardMovies:{},breadcrumbs:[{name:"movies"}]};return a.createElement(n.default,i,a.createElement(c.default,i))}},69921:(e,t)=>{var r=60103,a=60106,n=60107,c=60108,s=60114,l=60109,o=60110,i=60112,d=60113,m=60120,f=60115,u=60116,y=60121,p=60122,g=60117,h=60129,E=60131;if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for;r=b("react.element"),a=b("react.portal"),n=b("react.fragment"),c=b("react.strict_mode"),s=b("react.profiler"),l=b("react.provider"),o=b("react.context"),i=b("react.forward_ref"),d=b("react.suspense"),m=b("react.suspense_list"),f=b("react.memo"),u=b("react.lazy"),y=b("react.block"),p=b("react.server.block"),g=b("react.fundamental"),h=b("react.debug_trace_mode"),E=b("react.legacy_hidden")}var v=i,$=f;t.ForwardRef=v,t.Memo=$,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===s||e===h||e===c||e===d||e===m||e===E||"object"==typeof e&&null!==e&&(e.$$typeof===u||e.$$typeof===f||e.$$typeof===l||e.$$typeof===o||e.$$typeof===i||e.$$typeof===g||e.$$typeof===y||e[0]===p)},t.typeOf=function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case n:case s:case c:case d:case m:return e;default:switch(e=e&&e.$$typeof){case o:case i:case u:case f:case l:return e;default:return t}}case a:return t}}}},59864:(e,t,r)=>{e.exports=r(69921)}}]);