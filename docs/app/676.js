"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[676,3153,2400,6688,4006,6942],{36776:(e,t,n)=>{n.d(t,{Z:()=>r});const r={links_disabled:!1}},87558:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(67294),o=n(73727),a=n(36776);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(b,e);var t,n,c,p,m=(c=b,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(c);if(p){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function b(){return i(this,b),m.apply(this,arguments)}return t=b,(n=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,c=e.to,i=e.href,l=e.style,s=e.external;if(t=(c=(c=c||i)||"http://localhost")?t:"NO LINK DEFINED",l=l||{},c&&"string"!=typeof c)return"INVALID URL";var u=!((s=!0===s)||c&&0===c.indexOf("http")),f=u?"_self":"_blank";return 0==(0===c.indexOf("#"))&&1==u&&0==a.Z.links_disabled?r.createElement(o.OL,{className:n,to:c,style:l},t):r.createElement("a",{className:n,href:c,style:l,target:f},t)}}])&&l(t.prototype,n),b}(r.Component)},82685:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o=function(e){var t=e.version;return r.createElement("div",{className:"version"},"v.",t)}},62400:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var r=n(67294),o=n(38117),a=n(6942),c=n(56688),i=n(1565),l=n(80383),s=n(81648),u=n(87558);const f=function(e){var t=e.links,n=0;return r.createElement(l.Z,{spacing:1,className:"mod-footer"},t.map((function(e){return r.createElement(s.Z,{key:n++,xs:12,sm:6,md:4},r.createElement("h3",{className:"section"},e.name),r.createElement(l.Z,{spacing:1},e.items.map((function(e){return r.createElement(s.Z,{key:n++,xs:6,sm:12},r.createElement(u.Z,{border:!1,className:"link",to:e.link},e.name))}))))})))},p=function(e){var t=e.size,n=e.links;switch(t){case"sm":t="sm";break;default:t="lg"}return r.createElement("div",{className:"mod-social-icons ".concat(t," layout-align-center-center layout-column flex")},n.map((function(e,n){return e.enable&&r.createElement("a",{key:n,href:e.url},r.createElement("span",{className:"fa-stack fa-".concat(t)},r.createElement("i",{className:"fa fa-square-o fa-stack-2x"}),r.createElement("i",{className:"fa fa-".concat(e.icon," fa-stack-1x"),style:{color:e.color}})))})))};var m,b=n(82685),y=n(83347);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g,O,_=i.ZP.div(m||(g=["\n    background: #333;\n    background: linear-gradient(90deg, #333 0%, rgba(0,0,0,1) 100%);\n    color: white;\n    padding: 1rem;\n"],O||(O=g.slice(0)),m=Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(O)}}))));const j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(i,e);var t,n,o,a,c=(o=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(o);if(a){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function i(){return h(this,i),c.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.socialNetworksLinks,n=e.footerLinks,o=e.version;return r.createElement(y.Z,{xs:this.renderSection(t,n,o,"1.5rem"),sm:this.renderSection(t,n,o,"2rem"),md:this.renderSection(t,n,o,"3rem")})}},{key:"renderSection",value:function(e,t,n,o){return r.createElement(_,null,r.createElement(l.Z,{spacing:0,fill:!0,className:"footer",style:{padding:o}},r.createElement(s.Z,{fill:!0},r.createElement(f,{links:t})),r.createElement(s.Z,{fill:!0,center:!0,style:{paddingTop:"1rem"}},r.createElement(p,{links:e})),r.createElement(s.Z,{fill:!0,center:!0},r.createElement(b.Z,{version:n}))))}}])&&v(t.prototype,n),i}(r.Component);function N(){return r.createElement(j,{version:o.default.VERSION,footerLinks:c.default,socialNetworksLinks:a.default})}},20676:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n(62400).default},56688:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(14006);const o=[{name:"jmarroyave",items:[{name:"blog",link:r.default.blog}]},{name:"labs",items:[{name:"stackoverflow",link:r.default.labs_trends},{name:"mlb",link:r.default.labs_mlb},{name:"search",link:r.default.labs_search}]},{name:"knowledge base",items:[{name:"android",link:r.default.kb_android}]}]},14006:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.app="https://jmarroyave.herokuapp.com",this.blog="".concat(this.app,"/blog"),this.labs_trends="".concat(this.app,"/labs/labs-trends"),this.labs_search="".concat(this.app,"/labs/labs-search"),this.labs_mlb="".concat(this.app,"/labs/labs-mlb"),this.kb_android="".concat(this.app,"/kb/android"),this.trends_proto="https://jmarroyave-apps-stackoverflow.herokuapp.com",this.cv_pdf="/res/files/cv-jmarroyave.pdf"}},6942:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=[{enable:!0,url:"https://facebook.com/jmarroyave",icon:"facebook",color:"#3b5998"},{enable:!0,url:"https://www.linkedin.com/in/jmarroyave",icon:"linkedin",color:"#0077B5"},{enable:!0,url:"https://github.com/jmarroyave",icon:"github",color:"#000"},{enable:!0,url:"mailto:jmarroyave.compsci@gmail.com",icon:"envelope-o",color:"#000"}]}}]);