/*! For license information please see 9457.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[9457],{91534:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(83347),o=r(86688),c=r(72797);class l extends a.Component{render(){const{className:e,cover:t,padding:r,children:o,hero:c}=this.props,l=!0===t?"100vh":"inherit";return a.createElement(n.Z,{xs:this.renderSection(o,e,l,"2rem 0rem"),sm:this.renderSection(o,e,l,"3rem 0rem"),md:this.renderSection(o,e,l,"4rem 2.5rem")})}renderSection(e,t,r,n){return a.createElement(c.Z,{from:"/core/ui/section"},a.createElement("div",{className:"com-layout-section"},a.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:n}},e)))}}const i=(0,o.Z)(l)},25091:(e,t,r)=>{var a=r(67294),n=r(45697),o=r.n(n),c=r(24561);class l extends a.Component{render(){var{data:e,type:t,grow:r}=this.props;switch(t){case"title":case"=":case"+":e=[[["="]]];break;case"text-1-line":e=[[["=="]]];break;case"square":e=[[["-","100","100"]]];break;case"rect4:3":e=[[["-","100","75"]]]}e=this.renderPlaceholders(e);const n=r?{}:{width:e.width,height:e.height};return a.createElement(c.ZP,{style:n,height:e.height,width:e.width,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#bcbcbc"},e.phs.map((e=>e)))}renderPlaceholders(e){for(var t,r,n=0,o=[],c=0,l=0,i=0;i<e.length;i++){for(var s=e[i],d=0,u=0,f=0,m=0;m<s.length;m++){switch((t=s[m])[1]=parseInt(t[1]),t[2]=parseInt(t[2]),t[0]){case"o":r=a.createElement("rect",{key:l++,x:d,y:c,rx:"0",ry:"0",width:t[1],height:t[2]}),d+=t[1]+(i+1<e.length&&i>0?4:0),u=t[2];break;case"=":case"==":r=a.createElement("rect",{key:l++,x:d,y:c,rx:"0",ry:"0",width:100*t[0].length,height:20}),d+=100*t[0].length+(i+1<e.length&&i>0?4:0),u=20;break;default:r=a.createElement("rect",{key:l++,x:d,y:c,rx:"0",ry:"0",width:t[1],height:t[2]}),d+=t[1]+(i+1<e.length&&i>0?4:0),u=t[2]}n=d>n?d:n,f=u>f?u:f,o.push(r)}c+=f+(m+1<s.length&&m>0?4:0)}return{height:c,width:n,phs:o}}}l.propTypes={data:o().array,type:o().string,grow:o().bool},l.defaultProps={type:"custom",grow:!0}},18319:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(39398).default},76851:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var a=r(67294),n=r(80383),o=r(81648);r(25091),r(87125),r(93775);class c extends a.Component{render(){const{data:e,loading:t}=this.props,{}=e||{};return a.createElement("div",{style:{width:"100%"}},a.createElement(n.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},a.createElement(o.Z,{xs:12,sm:12,md:12},a.createElement(n.Z,{justifyContent:"center",fill:!0}))))}}const l=c},54028:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(30809).default},27774:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(67294),n=r(91534),o=r(80383),c=r(81648),l=r(76851);const i=function(e){const{data:t,loading:r}=e;return a.createElement(o.Z,{className:"page-module",fill:!0},a.createElement(c.Z,{fill:!0},a.createElement(n.Z,{className:"section-0"},a.createElement(l.default,{data:t?t.dashboard:null,loading:r}))))}},30809:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(67294),n=r(83347),o=r(27774);function c(e){return a.createElement(n.Z,{xs:a.createElement(o.default,e)})}},56394:(e,t,r)=>{r.r(t),r.d(t,{QRY_DASHBOARD:()=>l,default:()=>i});var a=r(67294),n=r(18319),o=r(54028),c=r(5977);const l=r(54397).Ps`
  query getDashboard{ 
    dashboard {
      countries
      genres
      movies
      types
      yearsAdded
      yearsReleased
    }
  }`;function i(e){const t={route:(0,c.UO)(),breadcrumbs:[{name:"awards",url:"/awards"},{name:"oscars"}]};return a.createElement(n.default,t,a.createElement(o.default,t))}},24561:(e,t,r)=>{r.d(t,{ZP:()=>i});var a=r(67294),n=function(){return n=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)},o=function(e){var t=e.animate,r=e.backgroundColor,o=e.backgroundOpacity,c=e.baseUrl,l=e.children,i=e.foregroundColor,s=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,f=e.interval,m=e.rtl,p=e.speed,h=e.style,y=e.title,g=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),b=u||Math.random().toString(36).substring(6),E=b+"-diff",v=b+"-animated-diff",w=b+"-aria",x=m?{transform:"scaleX(-1)"}:null,O="0; "+f+"; 1",k=p+"s";return(0,a.createElement)("svg",n({"aria-labelledby":w,role:"img",style:n(n({},h),x)},g),y?(0,a.createElement)("title",{id:w},y):null,(0,a.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+E+")",style:{fill:"url("+c+"#"+v+")"}}),(0,a.createElement)("defs",null,(0,a.createElement)("clipPath",{id:E},l),(0,a.createElement)("linearGradient",{id:v},(0,a.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:o},t&&(0,a.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:O,dur:k,repeatCount:"indefinite"})),(0,a.createElement)("stop",{offset:"50%",stopColor:i,stopOpacity:s},t&&(0,a.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:O,dur:k,repeatCount:"indefinite"})),(0,a.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:o},t&&(0,a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:O,dur:k,repeatCount:"indefinite"})))))};o.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?(0,a.createElement)(o,n({},e)):(0,a.createElement)(l,n({},e))},l=function(e){return(0,a.createElement)(c,n({viewBox:"0 0 476 124"},e),(0,a.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,a.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const i=c},69921:(e,t)=>{var r=60103,a=60106,n=60107,o=60108,c=60114,l=60109,i=60110,s=60112,d=60113,u=60120,f=60115,m=60116,p=60121,h=60122,y=60117,g=60129,b=60131;if("function"==typeof Symbol&&Symbol.for){var E=Symbol.for;r=E("react.element"),a=E("react.portal"),n=E("react.fragment"),o=E("react.strict_mode"),c=E("react.profiler"),l=E("react.provider"),i=E("react.context"),s=E("react.forward_ref"),d=E("react.suspense"),u=E("react.suspense_list"),f=E("react.memo"),m=E("react.lazy"),p=E("react.block"),h=E("react.server.block"),y=E("react.fundamental"),g=E("react.debug_trace_mode"),b=E("react.legacy_hidden")}var v=s,w=f;t.ForwardRef=v,t.Memo=w,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===g||e===o||e===d||e===u||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===f||e.$$typeof===l||e.$$typeof===i||e.$$typeof===s||e.$$typeof===y||e.$$typeof===p||e[0]===h)},t.typeOf=function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case n:case c:case o:case d:case u:return e;default:switch(e=e&&e.$$typeof){case i:case s:case m:case f:case l:return e;default:return t}}case a:return t}}}},59864:(e,t,r)=>{e.exports=r(69921)}}]);