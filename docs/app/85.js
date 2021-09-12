"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[85,8501,3153,7739],{18319:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n(68020).default},37714:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(67294),o=n(83347),c=n(86688),a=n(72797);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(d,e);var t,n,c,i,y=(c=d,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(c);if(i){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function d(){return u(this,d),y.apply(this,arguments)}return t=d,(n=[{key:"render",value:function(){var e=this.props,t=e.className,n=e.cover,c=(e.padding,e.children),a=(e.hero,!0===n?"100vh":"inherit");return r.createElement(o.Z,{xs:this.renderSection(c,t,a,"2rem 0rem"),sm:this.renderSection(c,t,a,"3rem 0rem"),md:this.renderSection(c,t,a,"4rem 2.5rem")})}},{key:"renderSection",value:function(e,t,n,o){return r.createElement(a.Z,{from:"/core/ui/section"},r.createElement("div",{className:"com-layout-section"},r.createElement("div",{className:"".concat(t),style:{boxSizing:"border-box",width:"100%",height:n,padding:o}},e)))}}])&&l(t.prototype,n),d}(r.Component);const d=(0,c.Z)(y);var m=n(80383),b=n(81648),h=n(335),v=n(13442);const E=function(e){var t=e.data,n=e.loading;return r.createElement(m.Z,{className:"page-module",fill:!0},r.createElement(b.Z,{fill:!0},r.createElement(d,{className:"section-hero-dark"},r.createElement(h.default,null))),r.createElement(b.Z,{fill:!0},r.createElement(d,{className:"section-0"},r.createElement(v.default,{data:t?t.dashboard:null,loading:n}))))}},69817:(e,t,n)=>{n.r(t),n.d(t,{QRY_DASHBOARD:()=>p,default:()=>y});var r,o,c,a=n(67294),i=n(83347),u=n(18319),l=n(37714),f=n(54397),s=n(70846),p=(0,f.Ps)(r||(o=["\n  query getDashboard{ \n    dashboard {\n      actors\n      countries\n      directors\n      genres\n      lastUpdate\n      movies\n      people\n      types\n      yearsAdded\n      yearsReleased\n    }\n  }"],c||(c=o.slice(0)),r=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(c)}}))));function y(e){var t=(0,s.a)(p),n=t.loading,r=t.error,o=t.data,c=e.page;return e.trends,a.createElement(u.default,null,a.createElement(i.Z,{xs:a.createElement(l.default,{page:c,data:o,loading:n,error:r})}))}},335:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(67294),o=n(80383),c=n(81648);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(d,e);var t,n,a,p,y=(a=d,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(a);if(p){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function d(){return i(this,d),y.apply(this,arguments)}return t=d,(n=[{key:"render",value:function(){return r.createElement(o.Z,{flex:!0,justify:"center",fill:!0},r.createElement(c.Z,{xs:12,fill:!0},r.createElement("div",{className:"section-title"},"on TV"),r.createElement("br",null),r.createElement("div",{className:"section-text"},"Netflix data")))}}])&&u(t.prototype,n),d}(r.Component)}}]);