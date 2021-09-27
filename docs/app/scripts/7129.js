"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[7129,6249,766,4931],{93871:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(60288);function a(e){if("string"!=typeof e)throw new Error((0,r.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},86688:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(72797);r.Component;const i=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(a.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},36776:(e,t,n)=>{n.d(t,{Z:()=>r});const r={links_disabled:!1}},80383:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86688),i=n(41749);class l extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:a,alignItems:l,style:o,flex:s}=this.props,t=t||0;return o=o||{},s&&(o.display="flex"),r.createElement(i.Z,{container:!0,direction:e,justifyContent:a,alignItems:l,className:n,spacing:t,style:o},this.props.children)}}const o=(0,a.Z)(l)},81648:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86688),i=n(41749);class l extends r.Component{render(){var{visible:e,className:t,xs:n,sm:a,md:l,style:o,fill:s,flex:c,center:d}=this.props;e=e||!0;var m={...o};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,s&&(m.width="100%"),c&&(m.flex=1),e&&r.createElement(i.Z,{className:t,item:!0,xs:n,sm:a,md:l,style:m},this.props.children)}}const o=(0,a.Z)(l)},83347:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(12613),i=n(86688);class l extends r.Component{render(){var{xs:e,sm:t,md:n,lg:i,xl:l}=this.props;return e=e||null,t=t||e,n=n||t,i=i||n,l=l||i,r.createElement("div",{style:{width:"100%"}},r.createElement(a.Z,{only:["sm","md","lg","xl"]},e),r.createElement(a.Z,{only:["xs","md","lg","xl"]},t),r.createElement(a.Z,{only:["xs","sm","lg","xl"]},n),r.createElement(a.Z,{only:["xs","sm","md","xl"]},i),r.createElement(a.Z,{only:["xs","sm","md","lg"]},l))}}const o=(0,i.Z)(l)},91534:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(83347),i=n(86688),l=n(72797);class o extends r.Component{render(){const{className:e,cover:t,padding:n,children:i,hero:l}=this.props,o=!0===t?"100vh":"inherit";return r.createElement(a.Z,{xs:this.renderSection(i,e,o,"2rem 0rem"),sm:this.renderSection(i,e,o,"3rem 0rem"),md:this.renderSection(i,e,o,"4rem 2.5rem")})}renderSection(e,t,n,a){return r.createElement(l.Z,{from:"/core/ui/section"},r.createElement("div",{className:"com-layout-section"},r.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:n,padding:a}},e)))}}const s=(0,i.Z)(o)},87558:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(73727),i=n(36776);class l extends r.Component{render(){var{children:e,className:t,to:n,href:l,style:o,external:s}=this.props;if(e=(n=(n=n||l)||"http://localhost")?e:"NO LINK DEFINED",o=o||{},n&&"string"!=typeof n)return"INVALID URL";const c=!((s=!0===s)||n&&0===n.indexOf("http")),d=c?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==c&&0==i.Z.links_disabled?r.createElement(a.OL,{className:t,to:n,style:o},e):r.createElement("a",{className:t,href:n,style:o,target:d},e)}}const o=l},76249:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294),a=n(87558);const i=function(e){const{id:t,entity:n,children:i}=e;return r.createElement(a.Z,{border:!1,to:`/movie/${t}/${encodeURIComponent(n)}`},i)}},20766:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294),a=n(87558);const i=function(e){const{id:t,entity:n,children:i}=e;return r.createElement(a.Z,{border:!1,to:`/person/${t}/${encodeURIComponent(n)}`},i)}},74931:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294),a=n(87558);const i=function(e){const{id:t,entity:n,children:i}=e;return r.createElement(a.Z,{border:!1,to:`/podcast/${t}/${encodeURIComponent(n)}`},i)}},8445:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),a=(n(91534),n(80383)),i=n(81648),l=n(79601);const o=function(e){const{qry:t}=e;return r.createElement(a.Z,{className:"page-module",fill:!0},r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement("h1",null,"Search results for: ",t)),r.createElement(i.Z,{fill:!0},r.createElement(l.default,e)))}},79601:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(67294),a=n(80383),i=n(81648),l=n(20766),o=n(76249),s=n(74931);function c(e){const{r:t}=e;switch(t.type){case"movie":return r.createElement(o.default,{id:t.entityId,entity:t.entity},r.createElement("h3",null,t.entity));case"person":return r.createElement(l.default,{id:t.entityId,entity:t.entity},r.createElement("h3",null,t.entity));case"podcast":return r.createElement(s.default,{id:t.entityId,entity:t.entity},r.createElement("h3",null,t.entity))}return`ERROR: type ${t.type}`}const d=function(e){const{data:t,loading:n}=e;return r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t&&t.map(((e,t)=>r.createElement(i.Z,{key:t,xs:12,sm:12,md:12},r.createElement(c,{r:e})))))}},86010:(e,t,n)=>{function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})},73727:(e,t,n)=>{n.d(t,{OL:()=>v});var r=n(5977),a=(n(51721),n(67294)),i=n(37531),l=(n(45697),n(87462)),o=n(63366),s=n(2177);a.Component,a.Component;var c=function(e,t){return"function"==typeof e?e(t):e},d=function(e,t){return"string"==typeof e?(0,i.ob)(e,null,null,t):e},m=function(e){return e},u=a.forwardRef;void 0===u&&(u=m);var f=u((function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,s=(0,o.Z)(e,["innerRef","navigate","onClick"]),c=s.target,d=(0,l.Z)({},s,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return d.ref=m!==u&&t||n,a.createElement("a",d)})),p=u((function(e,t){var n=e.component,p=void 0===n?f:n,h=e.replace,y=e.to,v=e.innerRef,E=(0,o.Z)(e,["component","replace","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,s.Z)(!1);var n=e.history,r=d(c(y,e.location),e.location),o=r?n.createHref(r):"",f=(0,l.Z)({},E,{href:o,navigate:function(){var t=c(y,e.location),r=(0,i.Ep)(e.location)===(0,i.Ep)(d(t));(h||r?n.replace:n.push)(t)}});return m!==u?f.ref=t||v:f.innerRef=v,a.createElement(p,f)}))})),h=function(e){return e},y=a.forwardRef;void 0===y&&(y=h);var v=y((function(e,t){var n=e["aria-current"],i=void 0===n?"page":n,m=e.activeClassName,u=void 0===m?"active":m,f=e.activeStyle,v=e.className,E=e.exact,Z=e.isActive,g=e.location,x=e.sensitive,C=e.strict,N=e.style,b=e.to,R=e.innerRef,w=(0,o.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,s.Z)(!1);var n=g||e.location,o=d(c(b,n),n),m=o.pathname,I=m&&m.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=I?(0,r.LX)(n.pathname,{path:I,exact:E,sensitive:x,strict:C}):null,A=!!(Z?Z(k,n):k),$="function"==typeof v?v(A):v,S="function"==typeof N?N(A):N;A&&($=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}($,u),S=(0,l.Z)({},S,f));var L=(0,l.Z)({"aria-current":A&&i||null,className:$,style:S,to:o},w);return h!==y?L.ref=t||R:L.innerRef=R,a.createElement(p,L)}))}))}}]);