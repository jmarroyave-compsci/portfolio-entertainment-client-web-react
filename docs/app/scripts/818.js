/*! For license information please see 818.js.LICENSE.txt */
(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[818,3725],{41937:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(67294);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}const i=t=>class extends n.Component{constructor(t){super(t),this.state={containerWidth:null,containerHeight:null},this.fitParentContainer=this.fitParentContainer.bind(this)}componentDidMount(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer),setTimeout((()=>{this.touch()}),100),this.observer=new MutationObserver((function(t){document.contains(this.componentContainer)&&(this.touch(),this.observer.disconnect())})),this.observer.observe(document,{attributes:!1,childList:!0,characterData:!1,subtree:!0})}touch(){this.setState({containerWidth:this.state.containerWidth-1})}componentWillUnmount(){window.removeEventListener("resize",this.fitParentContainer),this.observer.disconnect()}fitParentContainer(){const{containerWidth:t,containerHeight:e}=this.state,r=this.componentContainer.getBoundingClientRect(),n=r.width,a=r.height;t!==n&&this.setState({containerWidth:n,containerHeight:a})}renderComponent(){const{containerWidth:e,containerHeight:r}=this.state;return n.createElement(t,a({},this.props,{parentWidth:e,parentHeight:r}))}render(){const{containerWidth:t,containerHeight:e}=this.state,r=null!==t;return n.createElement("div",{ref:t=>{this.componentContainer=t},className:"Responsive-wrapper"},r&&this.renderComponent())}}},96377:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>f});var n=r(67294),a=r(23725),i=r(45697),s=r.n(i),o=r(47749),c=r(67822),h=r(41937),l=(r(79088),r(94184),r(14670));class p extends n.Component{plot(t,e,r,n){const{classes:a,small:i}=this.props;var s=c.tiA().range([n,0]).padding(.25),o=c.BYU().range([0,r]);const h=c.PKp(c.Cn1);o.domain([0,c.Fp7(t,(function(t){return t.value}))]),s.domain(t.map((function(t){return t.label}))),e.selectAll(".bar").data(t).enter().append("rect").attr("class","bar").attr("width",(function(t){return o(t.value)})).attr("y",(function(t){return s(t.label)})).attr("height",s.bandwidth()).style("fill",((t,e)=>h(e))),e.append("g").attr("transform","translate(0,"+n+")").call(c.LLu(o).ticks(4)),e.append("g").call(c.y4O(s)),e.append("g").attr("class",a.grid).attr("transform",`translate(0, ${n})`).call(c.LLu().scale(o).tickSize(-n,0,0).tickFormat("")),e.append("g").attr("class",a.grid).call(c.y4O().scale(s).tickSize(-r,0,0).tickFormat(""))}drawChart(){const{parentWidth:t,parentHeight:e,small:r}=this.props;var{data:n,width:a,height:i}=this.props;a=(a=a||Math.max(t,a))<=0?300:a,n.forEach((function(t){t.value=+t.value}));const s=new o.Element("div"),h=c.Ys(s).append("svg").attr("id","chart").attr("width",a).attr("height",i),l=this.props.marginLeft,p=h.append("g").classed("display",!0).attr("transform",`translate(${l},10)`),u=a-l-30,d=i-10-20;return this.plot(n,p,u,d),s.toReact()}render(){const{data:t}=this.props;return t?this.drawChart():"no data"}}p.propTypes={data:s().array,width:s().number,height:s().number,small:s().bool,marginLeft:s().number},p.defaultProps={data:[],width:null,height:100,small:!1,marginLeft:80},p=(0,h.Z)(p);const u=p=(0,l.Z)({grid:{stroke:"#9FAAAE",strokeOpacity:"0.1",strokeDasharray:"2"}})(p);class d extends n.Component{render(){return n.createElement(u,this.props)}}const f=(0,a.default)(d)},23725:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>i});var n=r(67294);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}const i=t=>class extends n.Component{parseMapToData(t,e,r){if(!e)return null;r||(r=[]);var n=[],a={};return Object.keys(e).forEach((t=>{for(var i=e[t],s={label:t.startsWith("_")?t.substring(1):t,value:i},o=0;o<r.length;o++){var c=r[o];if(!(i>c))return a[c]||(a[c]={label:`[${0===o?1:r[o-1]+1}-${c}]`,value:0,children:[]}),void(a[c].value+=s.value)}n.push(s)})),Object.keys(a).forEach((t=>{n.push(a[t])})),n}renderChart(e){return n.createElement(t,a({},this.props,{data:e}))}render(){const{data:t,ranges:e,title:r}=this.props;var n=null;return t&&(n=this.parseMapToData(r,t,e)),this.renderChart(n)}}},94184:(t,e)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var s=a.apply(null,r);s&&t.push(s)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var o in r)n.call(r,o)&&r[o]&&t.push(o);else t.push(r.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()}}]);