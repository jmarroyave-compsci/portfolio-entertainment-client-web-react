/*! For license information please see 7700.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[7700],{91534:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294),n=r(83347),c=r(86688),o=r(72797);class l extends a.Component{render(){const{className:e,cover:t,padding:r,children:c,hero:o}=this.props,l=!0===t?"100vh":"inherit";return a.createElement(n.Z,{xs:this.renderSection(c,e,l,"2rem 0rem"),sm:this.renderSection(c,e,l,"3rem 0rem"),md:this.renderSection(c,e,l,"4rem 2.5rem")})}renderSection(e,t,r,n){return a.createElement(o.Z,{from:"/core/ui/section"},a.createElement("div",{className:"com-layout-section"},a.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:n}},e)))}}const s=(0,c.Z)(l)},18319:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(39398).default},59221:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(67294),n=r(80383),c=r(81648),o=r(87125),l=r(93775);const s=function(e){const{data:t,loading:r,route:s}=e,{total:i,profession:d,yearBirth:m}=t,f=(e,t,r)=>a.createElement(c.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"}},a.createElement(l.default,{title:e,data:t||{},ranges:r}));return a.createElement("div",{style:{width:"100%"}},a.createElement(n.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},a.createElement(c.Z,{xs:12,sm:12,md:12},a.createElement(n.Z,{justifyContent:"center",fill:!0},((e,t,r)=>a.createElement(c.Z,{xs:12,sm:6,md:4,lg:3,style:{paddingRight:"1rem"}},a.createElement(o.default,{title:"people",data:t?t.toString():t,icon:"people"})))(0,i))),a.createElement(c.Z,{xs:12,sm:12,md:12},a.createElement(n.Z,{justifyContent:"center",fill:!0},f("profession",d,[]),f("birth year",m,[])))))}},281:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(33238).default},2075:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(67294),n=r(91534),c=r(80383),o=r(81648),l=r(59221);const s=function(e){return a.createElement(c.Z,{className:"page-module",fill:!0},a.createElement(o.Z,{fill:!0},a.createElement(n.Z,{className:"section-0"},a.createElement(l.default,e))))}},33238:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var a=r(67294),n=r(83347),c=r(2075);function o(e){return a.createElement(n.Z,{xs:a.createElement(c.default,e)})}},41423:(e,t,r)=>{r.r(t),r.d(t,{QRY_DASHBOARD:()=>s,default:()=>i});var a=r(67294),n=r(18319),c=r(281),o=r(54397),l=r(70846);const s=o.Ps`
  query getDashboard 
{
  dashboardPeople {
    alive
    profession
    total
    yearBirth
  }
}
  `;function i(e){var{loading:t,error:r,data:o}=(0,l.a)(s);const i={loading:t,error:r,data:o=o?o.dashboardPeople:{},breadcrumbs:[{name:"people"}]};return a.createElement(n.default,i,a.createElement(c.default,i))}},69921:(e,t)=>{var r=60103,a=60106,n=60107,c=60108,o=60114,l=60109,s=60110,i=60112,d=60113,m=60120,f=60115,u=60116,p=60121,y=60122,h=60117,g=60129,E=60131;if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for;r=b("react.element"),a=b("react.portal"),n=b("react.fragment"),c=b("react.strict_mode"),o=b("react.profiler"),l=b("react.provider"),s=b("react.context"),i=b("react.forward_ref"),d=b("react.suspense"),m=b("react.suspense_list"),f=b("react.memo"),u=b("react.lazy"),p=b("react.block"),y=b("react.server.block"),h=b("react.fundamental"),g=b("react.debug_trace_mode"),E=b("react.legacy_hidden")}var $=i,v=f;t.ForwardRef=$,t.Memo=v,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===o||e===g||e===c||e===d||e===m||e===E||"object"==typeof e&&null!==e&&(e.$$typeof===u||e.$$typeof===f||e.$$typeof===l||e.$$typeof===s||e.$$typeof===i||e.$$typeof===h||e.$$typeof===p||e[0]===y)},t.typeOf=function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case n:case o:case c:case d:case m:return e;default:switch(e=e&&e.$$typeof){case s:case i:case u:case f:case l:return e;default:return t}}case a:return t}}}},59864:(e,t,r)=>{e.exports=r(69921)}}]);