"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[3775,3725,2737,701],{41937:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}const s=e=>class extends a.Component{constructor(e){super(e),this.state={containerWidth:null,containerHeight:null},this.fitParentContainer=this.fitParentContainer.bind(this)}componentDidMount(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer),setTimeout((()=>{this.touch()}),100),this.observer=new MutationObserver((function(e){document.contains(this.componentContainer)&&(this.touch(),this.observer.disconnect())})),this.observer.observe(document,{attributes:!1,childList:!0,characterData:!1,subtree:!0})}touch(){this.setState({containerWidth:this.state.containerWidth-1})}componentWillUnmount(){window.removeEventListener("resize",this.fitParentContainer),this.observer.disconnect()}fitParentContainer(){const{containerWidth:e,containerHeight:t}=this.state,r=this.componentContainer.getBoundingClientRect(),a=r.width,n=r.height;e!==a&&this.setState({containerWidth:a,containerHeight:n})}renderComponent(){const{containerWidth:t,containerHeight:r}=this.state;return a.createElement(e,n({},this.props,{parentWidth:t,parentHeight:r}))}render(){const{containerWidth:e,containerHeight:t}=this.state,r=null!==e;return a.createElement("div",{ref:e=>{this.componentContainer=e},className:"Responsive-wrapper"},r&&this.renderComponent())}}},93013:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}class s extends a.Component{render(){var{src:e,width:t,height:r,style:s,notFound:o}=this.props,l={};return o&&(l.ref=e=>this.img=e,l.onError=()=>o&&this.img.src!=o?this.img.src=o:null),a.createElement("img",n({},l,{style:s,width:t,height:r,src:e}))}}const o=s},96377:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var a=r(67294),n=r(23725),s=r(45697),o=r.n(s),l=r(47749),i=r(67822),c=r(41937),p=(r(79088),r(94184),r(14670));class h extends a.Component{plot(e,t,r,a){const{classes:n,small:s}=this.props;var o=i.tiA().range([a,0]).padding(.25),l=i.BYU().range([0,r]);const c=i.PKp(i.Cn1);l.domain([0,i.Fp7(e,(function(e){return e.value}))]),o.domain(e.map((function(e){return e.label}))),t.selectAll(".bar").data(e).enter().append("rect").attr("class","bar").attr("width",(function(e){return l(e.value)})).attr("y",(function(e){return o(e.label)})).attr("height",o.bandwidth()).style("fill",((e,t)=>c(t))),t.append("g").attr("transform","translate(0,"+a+")").call(i.LLu(l).ticks(4)),t.append("g").call(i.y4O(o)),t.append("g").attr("class",n.grid).attr("transform",`translate(0, ${a})`).call(i.LLu().scale(l).tickSize(-a,0,0).tickFormat("")),t.append("g").attr("class",n.grid).call(i.y4O().scale(o).tickSize(-r,0,0).tickFormat(""))}drawChart(){const{parentWidth:e,parentHeight:t,small:r}=this.props;var{data:a,width:n,height:s}=this.props;n=(n=n||Math.max(e,n))<=0?300:n,a.forEach((function(e){e.value=+e.value}));const o=new l.Element("div"),c=i.Ys(o).append("svg").attr("id","chart").attr("width",n).attr("height",s),p=this.props.marginLeft,h=c.append("g").classed("display",!0).attr("transform",`translate(${p},10)`),d=n-p-30,u=s-10-20;return this.plot(a,h,d,u),o.toReact()}render(){const{data:e}=this.props;return e?this.drawChart():"no data"}}h.propTypes={data:o().array,width:o().number,height:o().number,small:o().bool,marginLeft:o().number},h.defaultProps={data:[],width:null,height:100,small:!1,marginLeft:80},h=(0,c.Z)(h);const d=h=(0,p.Z)({grid:{stroke:"#9FAAAE",strokeOpacity:"0.1",strokeDasharray:"2"}})(h);class u extends a.Component{render(){return a.createElement(d,this.props)}}const m=(0,n.default)(u)},35249:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var a=r(67294),n=r(40701),s=r(45697),o=r.n(s),l=r(87638),i=r.n(l),c=r(41937);class p extends a.Component{render(){const{title:e,parentWidth:t,data:r,height:n}=this.props;var s=t;return r&&0!==r.children.length?a.createElement("div",{id:"___",ref:this.ref},a.createElement(i(),{id:"myTreeMap",width:s,height:n-45,data:r,levelsToDisplay:1,nodeStyle:{paddingLeft:5,paddingRight:5}})):a.createElement("p",null,"no data")}}p.propTypes={data:o().object,title:o().string,height:o().number,width:o().number},p.defaultProps={data:{},title:"title",height:100};const h=(0,c.Z)(p);class d extends a.Component{render(){return a.createElement("div",null,a.createElement(h,this.props))}}const u=(0,n.default)(d)},23725:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(67294);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}const s=e=>class extends a.Component{parseMapToData(e,t,r){if(!t)return null;r||(r=[]);var a=[],n={};return Object.keys(t).forEach((e=>{for(var s=t[e],o={label:e.startsWith("_")?e.substring(1):e,value:s},l=0;l<r.length;l++){var i=r[l];if(!(s>i))return n[i]||(n[i]={label:`[${0===l?1:r[l-1]+1}-${i}]`,value:0,children:[]}),void(n[i].value+=o.value)}a.push(o)})),Object.keys(n).forEach((e=>{a.push(n[e])})),a}renderChart(t){return a.createElement(e,n({},this.props,{data:t}))}render(){const{data:e,ranges:t,title:r}=this.props;var a=null;return e&&(a=this.parseMapToData(r,e,t)),this.renderChart(a)}}},72737:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(67294);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}const s=e=>class extends a.Component{parseMapToData(e,t){if(!t)return null;var r=[];return Object.keys(t).forEach((e=>{var a=t[e].toString(),n=e.startsWith("_")?e.substring(1):e;r.push([n,a])})),{head:["label","value"],data:r=r.sort(((e,t)=>Number(e[1])>Number(t[1])?-1:1))}}renderChart(t){return a.createElement(e,n({},this.props,{tableHead:t?t.head:null,tableData:t?t.data:null}))}render(){const{data:e,ranges:t,title:r}=this.props;var n=null;return e&&(n=this.parseMapToData(r,e,t)),a.createElement("div",null,this.renderChart(n))}}},40701:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(67294);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}const s=e=>class extends a.Component{parseMapToData(e,t,r){if(!t)return null;r||(r=[]);var a=[],n={};return Object.keys(t).forEach((e=>{for(var s=t[e],o={name:e.startsWith("_")?e.substring(1):e,value:s},l=0;l<r.length;l++){var i=r[l];if(!(s>i))return n[i]||(n[i]={name:`${0===l?1:r[l-1]+1}-${i}`,value:0,children:[]}),void n[i].children.push(o)}a.push(o)})),Object.keys(n).forEach((e=>{a.push(n[e])})),{name:e,children:a}}renderChart(t){return a.createElement(e,n({},this.props,{data:t}))}render(){const{data:e,ranges:t,title:r}=this.props;var n=null;return e&&(n=this.parseMapToData(r,e,t)),a.createElement("div",null,this.renderChart(n))}}},93775:(e,t,r)=>{r.r(t),r.d(t,{default:()=>oe});var a=r(67294),n=r(45697),s=r.n(n),o=(r(38117),r(53703)),l=r(41120);const i=(0,l.Z)({cardCategoryWhite:{"&,& a,& a:hover,& a:focus":{color:"rgba(255,255,255,.62)",margin:"0",fontSize:"14px",marginTop:"0",marginBottom:"0"},"& a,& a:hover,& a:focus":{color:"#FFFFFF"}},cardTitleWhite:{color:"#FFFFFF",marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none","& small":{color:"#777",fontSize:"65%",fontWeight:"400",lineHeight:"1"}}});function c(e){const{chart:t,children:r,color:n}=e;return i(),a.createElement(o.Zb,null,a.createElement(o.Ol,{color:n},t),a.createElement(o.eW,null,r))}c.propTypes={chart:s().object,color:s().string},c.defaultProps={chart:null,color:"primary"};var p=r(282),h=r(17812);class d extends a.Component{getDefaults(){}initUI(){const e=this.getDefaults();for(var t in e)this.state[t]=this.props[t]?this.props[t]:e[t]}componentWillMount(){this.initUI()}render(){return""}}const u=d;var m=r(92863),g=r(43910),f=r(98121),b=r(18042),v=r(7168),E=r(60697),y=r(71779),Z=r(78880),w=r(47298),C=r(37726),H=r(8777),x=r(28428),O=r(75219),T=r(51975),F=r(10637),k=r(92448),W=r(88995),P=r(48825),j=r(63781),D=r(76324),N=r(46775),S=r(85685),R=r(59067),A=r(80366),M=r(71200),z=r(48884),L=r(81077),_=r(57321),B=r(53624),$=r(2375),I=r(53375),U=r(78513),Y=r(60424),q=r(3551),X=r(93013);const K=class extends u{getIcon(e){if(!e)return a.createElement(M.Z,this.props);switch(e){case"send":return a.createElement(g.Z,this.props);case"reply":return a.createElement(v.Z,this.props);case"reply_all":return a.createElement(E.Z,this.props);case"forward":return a.createElement(y.Z,this.props);case"draft":return a.createElement(Z.Z,this.props);case"cancel":return a.createElement(w.Z,this.props);case"attach":return a.createElement(C.Z,this.props);case"delete":return a.createElement(x.Z,this.props);case"archive":return a.createElement(H.Z,this.props);case"spam":return a.createElement(O.Z,this.props);case"contacts":return a.createElement(T.Z,this.props);case"done":return a.createElement(F.Z,this.props);case"home":return a.createElement(k.Z,this.props);case"search":return a.createElement(W.Z,this.props);case"notification":return a.createElement(P.Z,this.props);case"message":return a.createElement(j.Z,this.props);case"favorite":return a.createElement(D.Z,this.props);case"reply-tweet":return a.createElement(N.Z,this.props);case"retweet":return a.createElement(S.Z,this.props);case"compose":return a.createElement(R.Z,this.props);case"close":return a.createElement(A.Z,this.props);case"drawer":return a.createElement(z.Z,this.props);case"blog":return a.createElement(L.Z,this.props);case"history":return a.createElement(_.Z,this.props);case"settings":return a.createElement($.Z,this.props);case"debug":return a.createElement(O.Z,this.props);case"save":return a.createElement(I.Z,this.props);case"menu":return a.createElement(U.Z,this.props);case"question":return a.createElement(Y.Z,this.props);case"ok":return a.createElement(F.Z,this.props);case"map":return a.createElement(B.Z,this.props);case"next":return a.createElement(f.Z,this.props);case"previous":return a.createElement(b.Z,this.props);case"new":return a.createElement(q.Z,this.props);default:return a.createElement(m.Z,this.props,e)}}render(){const{icon:e,src:t,width:r,height:n,style:s}=this.props;return t&&""!=t?a.createElement(X.Z,{width:r,height:n,src:t,style:s}):this.getIcon(this.props.icon)}};class G extends a.Component{render(){return a.createElement(K,this.props)}}const J=G;class Q extends a.Component{render(){var{fab:e,disabled:t,className:r,style:n,href:s,color:o,onClick:l,src:i,icon:c,outlined:d,contained:u,size:m,noPadding:g,width:f,height:b}=this.props;const v=i||c?a.createElement(J,{icon:c,src:i,width:f,height:b}):"",E=d?"outlined":u?"contained":null;var y={...n};return y.padding=g?0:"0.15rem 0.25rem",e?a.createElement(p.Z,{variant:E,color:o,href:s,className:r,onClick:l,disabled:t,fab:!0,style:y},v):v&&"icon"===this.props.render?a.createElement(h.Z,{className:r,disabled:t,variant:E,color:o,onClick:l,style:y},v):a.createElement(p.Z,{variant:E,color:o,href:s,className:r,onClick:l,disabled:t,style:y},v&&v,this.props.children)}}const V=Q;Q.defaultProps={className:null,href:null,disabled:!1,onClick:null,fab:!1,style:{padding:null},color:"inherit",src:null,icon:null,outlined:!1,contained:!1,noPadding:!1};const ee=(0,l.Z)({cardCategoryWhite:{"&,& a,& a:hover,& a:focus":{color:"rgba(255,255,255,.62)",margin:"0",fontSize:"14px",marginTop:"0",marginBottom:"0"},"& a,& a:hover,& a:focus":{color:"#FFFFFF"}},cardTitleWhite:{color:"#FFFFFF",marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none","& small":{color:"#777",fontSize:"65%",fontWeight:"400",lineHeight:"1"}}});function te(e){const{title:t,subtitle:r,children:n,color:s,footer:l}=e,i=ee();return a.createElement(o.Zb,{style:{display:"flex",flexFlow:"column"}},(t||r)&&a.createElement(o.Ol,{color:s},a.createElement("h4",{className:i.cardTitleWhite},t),a.createElement("p",{className:i.cardCategoryWhite},r)),a.createElement(o.eW,{style:{flex:1}},n),l&&a.createElement(o.iR,{stats:!0},l))}te.propTypes={title:s().string,subtitle:s().string,color:s().string,footer:s().object},te.defaultProps={color:"primary",footer:null};var re=r(96377),ae=r(16821),ne=r(35249),se=r(2017);function oe(e){const{loading:t,data:r,title:n,ranges:s,height:o}=e,[l,i]=(0,a.useState)("chart"),c=(e,t)=>a.createElement(V,{outlined:!0,color:"primary",icon:e,render:"icon",disabled:t===l,onClick:()=>i(t)},t);return a.createElement("div",null,a.createElement(te,{title:n,footer:a.createElement("div",{style:{padding:"0.5rem"}},c("bar_chart","chart"),c("table_chart","tree"),c("table_rows","table")),color:"primary"},(!0===t||!r)&&a.createElement("div",null,a.createElement(se.Z,null)),1==!t&&r&&a.createElement("div",null,"table"===l&&function(e,t,r){return a.createElement("div",{style:{height:r+8,overflowY:"scroll"}},a.createElement(ae.default,{data:e,ranges:t}))}(r,s,o),"chart"===l&&function(e,t,r,n){return a.createElement(re.default,{title:e,data:t,ranges:r,small:!0,height:n})}(n,r,s,o),"tree"===l&&function(e,t,r,n){return a.createElement(ne.default,{title:e,data:t,ranges:r,height:n})}(n,r,s,o))))}oe.propTypes={title:s().string,data:s().object,format:s().oneOf(["text","graph","tree"]),height:s().number},oe.defaultProps={title:"Title",data:{},format:"text",ranges:[],height:300}},16821:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var a=r(67294),n=r(45697),s=r.n(n),o=r(41120),l=r(82302),i=r(83750),c=r(57394),p=r(99613),h=r(88222),d=r(79088);const u=(0,o.Z)((e=>({warningTableHeader:{color:d.MA[0]},primaryTableHeader:{color:d.lr[0]},dangerTableHeader:{color:d.E7[0]},successTableHeader:{color:d.nq[0]},infoTableHeader:{color:d.bE[0]},roseTableHeader:{color:d.An[0]},grayTableHeader:{color:d.X_[0]},table:{marginBottom:"0",width:"100%",maxWidth:"100%",backgroundColor:"transparent",borderSpacing:"0",borderCollapse:"collapse"},tableHeadCell:{color:"inherit",...d.Df,"&, &$tableCell":{fontSize:"1em"}},tableCell:{...d.Df,lineHeight:"1.42857143",padding:"12px 8px",verticalAlign:"middle",fontSize:"0.8125rem"},tableResponsive:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},tableHeadRow:{height:"56px",color:"inherit",display:"table-row",outline:"none",verticalAlign:"middle"},tableBodyRow:{height:"48px",color:"inherit",display:"table-row",outline:"none",verticalAlign:"middle"}})));var m=function(e){const t=u(),{tableHead:r,tableData:n,tableHeaderColor:s,showHeader:o}=e;return r&&n?a.createElement("div",{className:t.tableResponsive},a.createElement(l.Z,{className:t.table},void 0!==r&&o?a.createElement(i.Z,{className:t[s+"TableHeader"]},a.createElement(c.Z,{className:t.tableHeadRow},r.map(((e,r)=>a.createElement(h.Z,{className:t.tableCell+" "+t.tableHeadCell,key:r},e))))):null,a.createElement(p.Z,null,n.map(((e,r)=>a.createElement(c.Z,{key:r,className:t.tableBodyRow},e.map(((e,r)=>a.createElement(h.Z,{className:t.tableCell,key:r},e))))))))):"No Data"};m.defaultProps={tableHeaderColor:"gray",showHeader:!0},m.propTypes={tableHeaderColor:s().oneOf(["warning","primary","danger","success","info","rose","gray"]),tableHead:s().arrayOf(s().string),tableData:s().arrayOf(s().arrayOf(s().string)),showHeader:s().bool};const g=m;var f=r(72737);function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},b.apply(this,arguments)}class v extends a.Component{render(){return a.createElement(g,b({},this.props,{showHeader:!1}))}}const E=(0,f.default)(v)}}]);