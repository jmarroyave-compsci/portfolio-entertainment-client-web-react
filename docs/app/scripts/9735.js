"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[9735],{36776:(e,t,n)=>{n.d(t,{Z:()=>r});const r={links_disabled:!1}},87558:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(73727),i=n(36776);class o extends r.Component{render(){var{children:e,className:t,to:n,href:o,style:c,external:l}=this.props;if(e=(n=(n=n||o)||"http://localhost")?e:"NO LINK DEFINED",c=c||{},n&&"string"!=typeof n)return"INVALID URL";const s=!((l=!0===l)||n&&0===n.indexOf("http")),f=s?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==s&&0==i.Z.links_disabled?r.createElement(a.OL,{className:t,to:n,style:c},e):r.createElement("a",{className:t,href:n,style:c,target:f},e)}}const c=o},79735:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r}),n(67294),n(87558);const r=PersonLinkComponent},73727:(e,t,n)=>{n.d(t,{OL:()=>y});var r=n(5977),a=(n(51721),n(67294)),i=n(37531),o=(n(45697),n(87462)),c=n(63366),l=n(2177);a.Component,a.Component;var s=function(e,t){return"function"==typeof e?e(t):e},f=function(e,t){return"string"==typeof e?(0,i.ob)(e,null,null,t):e},u=function(e){return e},v=a.forwardRef;void 0===v&&(v=u);var p=v((function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,l=(0,c.Z)(e,["innerRef","navigate","onClick"]),s=l.target,f=(0,o.Z)({},l,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return f.ref=u!==v&&t||n,a.createElement("a",f)})),m=v((function(e,t){var n=e.component,m=void 0===n?p:n,d=e.replace,h=e.to,y=e.innerRef,C=(0,c.Z)(e,["component","replace","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,l.Z)(!1);var n=e.history,r=f(s(h,e.location),e.location),c=r?n.createHref(r):"",p=(0,o.Z)({},C,{href:c,navigate:function(){var t=s(h,e.location),r=(0,i.Ep)(e.location)===(0,i.Ep)(f(t));(d||r?n.replace:n.push)(t)}});return u!==v?p.ref=t||y:p.innerRef=y,a.createElement(m,p)}))})),d=function(e){return e},h=a.forwardRef;void 0===h&&(h=d);var y=h((function(e,t){var n=e["aria-current"],i=void 0===n?"page":n,u=e.activeClassName,v=void 0===u?"active":u,p=e.activeStyle,y=e.className,C=e.exact,g=e.isActive,N=e.location,Z=e.sensitive,k=e.strict,E=e.style,R=e.to,b=e.innerRef,x=(0,c.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,l.Z)(!1);var n=N||e.location,c=f(s(R,n),n),u=c.pathname,L=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),w=L?(0,r.LX)(n.pathname,{path:L,exact:C,sensitive:Z,strict:k}):null,D=!!(g?g(w,n):w),K="function"==typeof y?y(D):y,O="function"==typeof E?E(D):E;D&&(K=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(K,v),O=(0,o.Z)({},O,p));var _=(0,o.Z)({"aria-current":D&&i||null,className:K,style:O,to:c},x);return d!==h?_.ref=t||b:_.innerRef=b,a.createElement(m,_)}))}))}}]);