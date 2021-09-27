/*! For license information please see 8594.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[8594,7061,6910],{86688:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(72797);n.Component;const l=e=>class extends n.Component{render(){const t="title"in this.props?this.props.title:null,r="placeholder"in this.props?this.props.placeholder:{};return r.width&&r.width,r.height&&r.height,n.createElement(a.Z,{from:t,style:{width:"100%"}},n.createElement(e,this.props))}}},80383:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86688),l=r(41749);class s extends n.Component{render(){var{direction:e,spacing:t,className:r,justify:a,alignItems:s,style:i,flex:o}=this.props,t=t||0;return i=i||{},o&&(i.display="flex"),n.createElement(l.Z,{container:!0,direction:e,justifyContent:a,alignItems:s,className:r,spacing:t,style:i},this.props.children)}}const i=(0,a.Z)(s)},81648:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86688),l=r(41749);class s extends n.Component{render(){var{visible:e,className:t,xs:r,sm:a,md:s,style:i,fill:o,flex:c,center:d}=this.props;e=e||!0;var m={...i};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,o&&(m.width="100%"),c&&(m.flex=1),e&&n.createElement(l.Z,{className:t,item:!0,xs:r,sm:a,md:s,style:m},this.props.children)}}const i=(0,a.Z)(s)},83347:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(12613),l=r(86688);class s extends n.Component{render(){var{xs:e,sm:t,md:r,lg:l,xl:s}=this.props;return e=e||null,t=t||e,r=r||t,l=l||r,s=s||l,n.createElement("div",{style:{width:"100%"}},n.createElement(a.Z,{only:["sm","md","lg","xl"]},e),n.createElement(a.Z,{only:["xs","md","lg","xl"]},t),n.createElement(a.Z,{only:["xs","sm","lg","xl"]},r),n.createElement(a.Z,{only:["xs","sm","md","xl"]},l),n.createElement(a.Z,{only:["xs","sm","md","lg"]},s))}}const i=(0,l.Z)(s)},91534:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(83347),l=r(86688),s=r(72797);class i extends n.Component{render(){const{className:e,cover:t,padding:r,children:l,hero:s}=this.props,i=!0===t?"100vh":"inherit";return n.createElement(a.Z,{xs:this.renderSection(l,e,i,"2rem 0rem"),sm:this.renderSection(l,e,i,"3rem 0rem"),md:this.renderSection(l,e,i,"4rem 2.5rem")})}renderSection(e,t,r,a){return n.createElement(s.Z,{from:"/core/ui/section"},n.createElement("div",{className:"com-layout-section"},n.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:a}},e)))}}const o=(0,l.Z)(i)},25091:(e,t,r)=>{var n=r(67294),a=r(45697),l=r.n(a),s=r(24561);class i extends n.Component{render(){var{data:e,type:t,grow:r}=this.props;switch(t){case"title":case"=":case"+":e=[[["="]]];break;case"text-1-line":e=[[["=="]]];break;case"square":e=[[["-","100","100"]]];break;case"rect4:3":e=[[["-","100","75"]]]}e=this.renderPlaceholders(e);const a=r?{}:{width:e.width,height:e.height};return n.createElement(s.ZP,{style:a,height:e.height,width:e.width,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#bcbcbc"},e.phs.map((e=>e)))}renderPlaceholders(e){for(var t,r,a=0,l=[],s=0,i=0,o=0;o<e.length;o++){for(var c=e[o],d=0,m=0,h=0,p=0;p<c.length;p++){switch((t=c[p])[1]=parseInt(t[1]),t[2]=parseInt(t[2]),t[0]){case"o":r=n.createElement("rect",{key:i++,x:d,y:s,rx:"0",ry:"0",width:t[1],height:t[2]}),d+=t[1]+(o+1<e.length&&o>0?4:0),m=t[2];break;case"=":case"==":r=n.createElement("rect",{key:i++,x:d,y:s,rx:"0",ry:"0",width:100*t[0].length,height:20}),d+=100*t[0].length+(o+1<e.length&&o>0?4:0),m=20;break;default:r=n.createElement("rect",{key:i++,x:d,y:s,rx:"0",ry:"0",width:t[1],height:t[2]}),d+=t[1]+(o+1<e.length&&o>0?4:0),m=t[2]}a=d>a?d:a,h=m>h?m:h,l.push(r)}s+=h+(p+1<c.length&&p>0?4:0)}return{height:s,width:a,phs:l}}}i.propTypes={data:l().array,type:l().string,grow:l().bool},i.defaultProps={type:"custom",grow:!0}},11670:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(67294),a=r(80383),l=r(81648);r(25091),r(87125),r(93775);class s extends n.Component{render(){const{data:e,loading:t}=this.props,{movies:r,countries:s,genres:i,types:o,yearsAdded:c,yearsReleased:d}=e||{};return n.createElement("div",{style:{width:"100%"}},n.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(a.Z,{justifyContent:"center",fill:!0}))))}}const i=s},77722:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r(41670).default},96251:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(67294),a=r(91534),l=r(80383),s=r(81648),i=r(11670);const o=function(e){const{data:t,loading:r}=e;return n.createElement(l.Z,{className:"page-module",fill:!0},n.createElement(s.Z,{fill:!0},n.createElement(a.Z,{className:"section-0"},n.createElement(i.default,{data:t?t.dashboard:null,loading:r}))))}},41670:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(67294),a=r(83347),l=r(96251);function s(e){return n.createElement(a.Z,{xs:n.createElement(l.default,e)})}},24561:(e,t,r)=>{r.d(t,{ZP:()=>o});var n=r(67294),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},l=function(e){var t=e.animate,r=e.backgroundColor,l=e.backgroundOpacity,s=e.baseUrl,i=e.children,o=e.foregroundColor,c=e.foregroundOpacity,d=e.gradientRatio,m=e.uniqueKey,h=e.interval,p=e.rtl,u=e.speed,y=e.style,f=e.title,g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),x=m||Math.random().toString(36).substring(6),E=x+"-diff",b=x+"-animated-diff",v=x+"-aria",w=p?{transform:"scaleX(-1)"}:null,Z="0; "+h+"; 1",C=u+"s";return(0,n.createElement)("svg",a({"aria-labelledby":v,role:"img",style:a(a({},y),w)},g),f?(0,n.createElement)("title",{id:v},f):null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+s+"#"+E+")",style:{fill:"url("+s+"#"+b+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:E},i),(0,n.createElement)("linearGradient",{id:b},(0,n.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:l},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:Z,dur:C,repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:c},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:Z,dur:C,repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:l},t&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:Z,dur:C,repeatCount:"indefinite"})))))};l.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var s=function(e){return e.children?(0,n.createElement)(l,a({},e)):(0,n.createElement)(i,a({},e))},i=function(e){return(0,n.createElement)(s,a({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const o=s}}]);