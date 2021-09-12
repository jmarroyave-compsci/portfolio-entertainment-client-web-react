"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[8800,7271],{7271:(t,e,r)=>{r.r(e),r.d(e,{default:()=>y});var n=r(67294),o=r(45697),a=r.n(o),i=r(87638),u=r.n(i),c=r(24417);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(l,t);var e,r,o,a,i=(o=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(o);if(a){var r=d(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return p(this,t)});function l(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=i.call(this,t)).state={width:100,data:{},dataRef:null},e.ref=n.createRef(),e}return e=l,(r=[{key:"componentDidUpdate",value:function(){var t=this.ref.current?this.ref.current.offsetWidth:this.state.width;t!==this.state.width&&this.setState({width:t});var e=this.props.data;JSON.stringify(this.props.data)!==JSON.stringify(this.state.dataRef)&&this.setState({data:this.parseMapToData(this.props.title,e),dataRef:e})}},{key:"render",value:function(){var t=this.props,e=t.loading,r=t.error,o=(t.title,this.state),a=o.data,i=o.width;return e||!a.children?n.createElement("p",null,"Loading..."):r?n.createElement("p",null,"Error ",r.toString()):a?n.createElement("div",{id:"___",ref:this.ref},n.createElement(u(),{id:"myTreeMap",width:i,height:(.5*i).toFixed(0),data:a,levelsToDisplay:1,nodeStyle:{paddingLeft:5,paddingRight:5}})):n.createElement("p",null,"no data")}},{key:"parseMapToData",value:function(t,e){if(!e)return null;var r=[],n=[10,25,100],o={};return Object.keys(e).forEach((function(t){for(var a=e[t],i={name:t.startsWith("_")?t.substring(1):c.default.toHeaderCase(t),value:a},u=0;u<n.length;u++){var l=n[u];if(!(a>l))return o[l]||(o[l]={name:"".concat(0===u?1:n[u-1]+1,"-").concat(l),value:0,children:[]}),void o[l].children.push(i)}r.push(i)})),Object.keys(o).forEach((function(t){r.push(o[t])})),{name:t,children:r}}}])&&f(e.prototype,r),l}(n.Component);h.propTypes={data:a().object,title:a().string},h.defaultProps={data:{},title:"title"};const y=h},18800:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var n=r(67294),o=r(45697),a=r.n(o),i=r(7271);function u(t){var e=t.loading,r=t.error,o=t.data,a=t.format;return e?n.createElement("p",null,"Loading..."):r?n.createElement("p",null,"Error ",r.toString()):o&&0!==o.length?n.createElement("div",null,"text"===a&&function(t){return n.createElement(n.Fragment,null,n.createElement("p",null," Movies by country"),n.createElement("div",null,n.createElement("ul",null,Object.keys(t).map((function(e,r){return n.createElement("li",{key:r}," ",e," : ",t[e]," ")})))))}(o),"graph"===a&&function(t,e){return n.createElement(i.default,{title:"by Year Released",data:e})}(0,o)):"NO DATA"}u.propTypes={data:a().object,format:a().oneOf(["text","graph"])},u.defaultProps={data:{},format:"text"}}}]);