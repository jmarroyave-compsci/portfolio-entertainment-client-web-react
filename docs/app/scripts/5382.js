/*! For license information please see 5382.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[5382,4931,6319,2864],{86688:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(72797);n.Component;const i=e=>class extends n.Component{render(){const t="title"in this.props?this.props.title:null,r="placeholder"in this.props?this.props.placeholder:{};return r.width&&r.width,r.height&&r.height,n.createElement(a.Z,{from:t,style:{width:"100%"}},n.createElement(e,this.props))}}},36776:(e,t,r)=>{r.d(t,{Z:()=>n});const n={links_disabled:!1}},80383:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86688),i=r(41749);class l extends n.Component{render(){var{direction:e,spacing:t,className:r,justify:a,alignItems:l,style:s,flex:o}=this.props,t=t||0;return s=s||{},o&&(s.display="flex"),n.createElement(i.Z,{container:!0,direction:e,justifyContent:a,alignItems:l,className:r,spacing:t,style:s},this.props.children)}}const s=(0,a.Z)(l)},81648:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86688),i=r(41749);class l extends n.Component{render(){var{visible:e,className:t,xs:r,sm:a,md:l,style:s,fill:o,flex:c,center:d}=this.props;e=e||!0;var m={...s};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,o&&(m.width="100%"),c&&(m.flex=1),e&&n.createElement(i.Z,{className:t,item:!0,xs:r,sm:a,md:l,style:m},this.props.children)}}const s=(0,a.Z)(l)},83347:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(12613),i=r(86688);class l extends n.Component{render(){var{xs:e,sm:t,md:r,lg:i,xl:l}=this.props;return e=e||null,t=t||e,r=r||t,i=i||r,l=l||i,n.createElement("div",{style:{width:"100%"}},n.createElement(a.Z,{only:["sm","md","lg","xl"]},e),n.createElement(a.Z,{only:["xs","md","lg","xl"]},t),n.createElement(a.Z,{only:["xs","sm","lg","xl"]},r),n.createElement(a.Z,{only:["xs","sm","md","xl"]},i),n.createElement(a.Z,{only:["xs","sm","md","lg"]},l))}}const s=(0,i.Z)(l)},91534:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(83347),i=r(86688),l=r(72797);class s extends n.Component{render(){const{className:e,cover:t,padding:r,children:i,hero:l}=this.props,s=!0===t?"100vh":"inherit";return n.createElement(a.Z,{xs:this.renderSection(i,e,s,"2rem 0rem"),sm:this.renderSection(i,e,s,"3rem 0rem"),md:this.renderSection(i,e,s,"4rem 2.5rem")})}renderSection(e,t,r,a){return n.createElement(l.Z,{from:"/core/ui/section"},n.createElement("div",{className:"com-layout-section"},n.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:a}},e)))}}const o=(0,i.Z)(s)},87558:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(73727),i=r(36776);class l extends n.Component{render(){var{children:e,className:t,to:r,href:l,style:s,external:o}=this.props;if(e=(r=(r=r||l)||"http://localhost")?e:"NO LINK DEFINED",s=s||{},r&&"string"!=typeof r)return"INVALID URL";const c=!((o=!0===o)||r&&0===r.indexOf("http")),d=c?"_self":"_blank";return 0==(0===r.indexOf("#"))&&1==c&&0==i.Z.links_disabled?n.createElement(a.OL,{className:t,to:r,style:s},e):n.createElement("a",{className:t,href:r,style:s,target:d},e)}}const s=l},25091:(e,t,r)=>{var n=r(67294),a=r(45697),i=r.n(a),l=r(24561);class s extends n.Component{render(){var{data:e,type:t,grow:r}=this.props;switch(t){case"title":case"=":case"+":e=[[["="]]];break;case"text-1-line":e=[[["=="]]];break;case"square":e=[[["-","100","100"]]];break;case"rect4:3":e=[[["-","100","75"]]]}e=this.renderPlaceholders(e);const a=r?{}:{width:e.width,height:e.height};return n.createElement(l.ZP,{style:a,height:e.height,width:e.width,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#bcbcbc"},e.phs.map((e=>e)))}renderPlaceholders(e){for(var t,r,a=0,i=[],l=0,s=0,o=0;o<e.length;o++){for(var c=e[o],d=0,m=0,u=0,p=0;p<c.length;p++){switch((t=c[p])[1]=parseInt(t[1]),t[2]=parseInt(t[2]),t[0]){case"o":r=n.createElement("rect",{key:s++,x:d,y:l,rx:"0",ry:"0",width:t[1],height:t[2]}),d+=t[1]+(o+1<e.length&&o>0?4:0),m=t[2];break;case"=":case"==":r=n.createElement("rect",{key:s++,x:d,y:l,rx:"0",ry:"0",width:100*t[0].length,height:20}),d+=100*t[0].length+(o+1<e.length&&o>0?4:0),m=20;break;default:r=n.createElement("rect",{key:s++,x:d,y:l,rx:"0",ry:"0",width:t[1],height:t[2]}),d+=t[1]+(o+1<e.length&&o>0?4:0),m=t[2]}a=d>a?d:a,u=m>u?m:u,i.push(r)}l+=u+(p+1<c.length&&p>0?4:0)}return{height:l,width:a,phs:i}}}s.propTypes={data:i().array,type:i().string,grow:i().bool},s.defaultProps={type:"custom",grow:!0}},97236:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(87558);r(36776);class i extends n.Component{render(){var{children:e,className:t,to:r,href:i,border:l,style:s,external:o}=this.props;return e=(r=(r=r||i)||"http://localhost")?e:"NO LINK DEFINED",l=!0===l||"true"===l?"text-link":"",(s=s||{}).padding=s.padding?s.padding:"0.5rem 0.75rem",t=`${l} ${t||""}`,o=!0===o,n.createElement(a.Z,{className:t,to:r,style:s,external:o},e)}}const l=i},74931:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(67294),a=r(87558);const i=function(e){const{id:t,entity:r,children:i}=e;return n.createElement(a.Z,{border:!1,to:`/podcast/${t}/${encodeURIComponent(r)}`},i)}},99140:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(67294),a=r(91534),i=r(80383),l=r(81648),s=r(63560);const o=function(e){const{data:t}=e;return n.createElement(i.Z,{className:"page-module",fill:!0},n.createElement(l.Z,{fill:!0},n.createElement(a.Z,{className:"section-0"},n.createElement(s.default,{data:t.storiesPodcastMusic?t.storiesPodcastMusic:[]}))))}},52257:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(67294),a=r(83347),i=r(99140);function l(e){return n.createElement(a.Z,{xs:n.createElement(i.default,e)})}},12864:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(67294),a=r(86529),i=r(74931);function l(e){const{data:t,loading:r}=e,{}=t||{};return n.createElement(a.default,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,centerMode:!1,className:"",containerClass:"container-with-dots",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30}},showDots:!1,sliderClass:"",slidesToSlide:1,swipeable:!0},t&&t.length>0&&t.map(((e,t)=>n.createElement(s,{key:t,id:e.id,title:e.title,link:e.link,description:e.description,image:e.image}))))}function s(e){const{id:t,description:r,title:a,image:l,link:s}=e;return n.createElement(i.default,{id:t,entity:a},n.createElement("div",null,n.createElement("h1",null,a),n.createElement("span",null,r)))}},63560:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(67294),a=r(80383),i=r(81648),l=(r(25091),r(87125),r(93775),r(97236)),s=r(12864);function o(e){const{data:t,loading:r}=e;return n.createElement("div",{style:{width:"100%"}},n.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(i.Z,{xs:12,sm:12,md:12},n.createElement("h1",null,"Music Podcasts")),n.createElement(i.Z,{xs:12,sm:12,md:12},n.createElement(s.default,{data:t})),n.createElement(i.Z,{xs:12,sm:12,md:12},n.createElement(l.Z,{href:"/podcasts/stories/music"}," See all"))))}},24561:(e,t,r)=>{r.d(t,{ZP:()=>o});var n=r(67294),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},i=function(e){var t=e.animate,r=e.backgroundColor,i=e.backgroundOpacity,l=e.baseUrl,s=e.children,o=e.foregroundColor,c=e.foregroundOpacity,d=e.gradientRatio,m=e.uniqueKey,u=e.interval,p=e.rtl,h=e.speed,f=e.style,y=e.title,g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),v=m||Math.random().toString(36).substring(6),E=v+"-diff",x=v+"-animated-diff",b=v+"-aria",Z=p?{transform:"scaleX(-1)"}:null,w="0; "+u+"; 1",C=h+"s";return(0,n.createElement)("svg",a({"aria-labelledby":b,role:"img",style:a(a({},f),Z)},g),y?(0,n.createElement)("title",{id:b},y):null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+E+")",style:{fill:"url("+l+"#"+x+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:E},s),(0,n.createElement)("linearGradient",{id:x},(0,n.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:i},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:w,dur:C,repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:c},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:w,dur:C,repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:i},t&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:w,dur:C,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var l=function(e){return e.children?(0,n.createElement)(i,a({},e)):(0,n.createElement)(s,a({},e))},s=function(e){return(0,n.createElement)(l,a({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const o=l},73727:(e,t,r)=>{r.d(t,{OL:()=>g});var n=r(5977),a=(r(51721),r(67294)),i=r(37531),l=(r(45697),r(87462)),s=r(63366),o=r(2177);a.Component,a.Component;var c=function(e,t){return"function"==typeof e?e(t):e},d=function(e,t){return"string"==typeof e?(0,i.ob)(e,null,null,t):e},m=function(e){return e},u=a.forwardRef;void 0===u&&(u=m);var p=u((function(e,t){var r=e.innerRef,n=e.navigate,i=e.onClick,o=(0,s.Z)(e,["innerRef","navigate","onClick"]),c=o.target,d=(0,l.Z)({},o,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return d.ref=m!==u&&t||r,a.createElement("a",d)})),h=u((function(e,t){var r=e.component,h=void 0===r?p:r,f=e.replace,y=e.to,g=e.innerRef,v=(0,s.Z)(e,["component","replace","to","innerRef"]);return a.createElement(n.s6.Consumer,null,(function(e){e||(0,o.Z)(!1);var r=e.history,n=d(c(y,e.location),e.location),s=n?r.createHref(n):"",p=(0,l.Z)({},v,{href:s,navigate:function(){var t=c(y,e.location),n=(0,i.Ep)(e.location)===(0,i.Ep)(d(t));(f||n?r.replace:r.push)(t)}});return m!==u?p.ref=t||g:p.innerRef=g,a.createElement(h,p)}))})),f=function(e){return e},y=a.forwardRef;void 0===y&&(y=f);var g=y((function(e,t){var r=e["aria-current"],i=void 0===r?"page":r,m=e.activeClassName,u=void 0===m?"active":m,p=e.activeStyle,g=e.className,v=e.exact,E=e.isActive,x=e.location,b=e.sensitive,Z=e.strict,w=e.style,C=e.to,k=e.innerRef,N=(0,s.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(n.s6.Consumer,null,(function(e){e||(0,o.Z)(!1);var r=x||e.location,s=d(c(C,r),r),m=s.pathname,O=m&&m.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),P=O?(0,n.LX)(r.pathname,{path:O,exact:v,sensitive:b,strict:Z}):null,R=!!(E?E(P,r):P),S="function"==typeof g?g(R):g,I="function"==typeof w?w(R):w;R&&(S=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(S,u),I=(0,l.Z)({},I,p));var j=(0,l.Z)({"aria-current":R&&i||null,className:S,style:I,to:s},N);return f!==y?j.ref=t||k:j.innerRef=k,a.createElement(h,j)}))}))}}]);