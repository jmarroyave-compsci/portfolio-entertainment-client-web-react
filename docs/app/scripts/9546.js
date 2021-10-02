"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[9546,6249,607,977,3681],{41749:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(45987),i=n(87462),a=n(67294),o=(n(45697),n(86010)),l=n(14670),c=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=a.forwardRef((function(e,t){var n=e.alignContent,l=void 0===n?"stretch":n,c=e.alignItems,s=void 0===c?"stretch":c,u=e.classes,d=e.className,m=e.component,p=void 0===m?"div":m,f=e.container,h=void 0!==f&&f,g=e.direction,v=void 0===g?"row":g,x=e.item,y=void 0!==x&&x,E=e.justify,Z=e.justifyContent,w=void 0===Z?"flex-start":Z,b=e.lg,C=void 0!==b&&b,k=e.md,j=void 0!==k&&k,P=e.sm,S=void 0!==P&&P,N=e.spacing,R=void 0===N?0:N,O=e.wrap,I=void 0===O?"wrap":O,A=e.xl,M=void 0!==A&&A,W=e.xs,$=void 0!==W&&W,D=e.zeroMinWidth,T=void 0!==D&&D,V=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=(0,o.Z)(u.root,d,h&&[u.container,0!==R&&u["spacing-xs-".concat(String(R))]],y&&u.item,T&&u.zeroMinWidth,"row"!==v&&u["direction-xs-".concat(String(v))],"wrap"!==I&&u["wrap-xs-".concat(String(I))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==l&&u["align-content-xs-".concat(String(l))],"flex-start"!==(E||w)&&u["justify-content-xs-".concat(String(E||w))],!1!==$&&u["grid-xs-".concat(String($))],!1!==S&&u["grid-sm-".concat(String(S))],!1!==j&&u["grid-md-".concat(String(j))],!1!==C&&u["grid-lg-".concat(String(C))],!1!==M&&u["grid-xl-".concat(String(M))]);return a.createElement(p,(0,i.Z)({className:z,ref:t},V))}));const m=(0,l.Z)((function(e){return(0,i.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(t){var r=e.spacing(t);0!==r&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),n}(e),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,i.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d)},93871:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(60288);function i(e){if("string"!=typeof e)throw new Error((0,r.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},20735:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(63366),i=n(87462),a=n(67294),o=(n(45697),n(94863));const l=["sx"];var c=n(46663),s=n(11930),u=n(86521),d=n(91380),m=n(5609),p=n(85893);const f=["component","direction","spacing","divider","children"];function h(e,t){const n=a.Children.toArray(e).filter(Boolean);return n.reduce(((e,r,i)=>(e.push(r),i<n.length-1&&e.push(a.cloneElement(t,{key:`separator-${i}`})),e)),[])}const g=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,i.Z)({display:"flex"},(0,c.k9)({theme:t},e.direction,(e=>({flexDirection:e}))));if(e.spacing){const r=(0,s.hB)(t),i=Object.keys(t.breakpoints.values).reduce(((t,n)=>(null==e.spacing[n]&&null==e.direction[n]||(t[n]=!0),t)),{}),a=(0,c.P$)({values:e.direction,base:i}),o=(0,c.P$)({values:e.spacing,base:i}),l=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${i=n?a[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,s.NA)(r,t)}};var i};n=(0,u.Z)(n,(0,c.k9)({theme:t},o,l))}return n})),v=a.forwardRef((function(e,t){const n=function(e){const{sx:t}=e,n=(0,r.Z)(e,l),{systemProps:a,otherProps:c}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((n=>{o.G[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t})(n);return(0,i.Z)({},c,{sx:(0,i.Z)({},a,t)})}((0,m.Z)({props:e,name:"MuiStack"})),{component:a="div",direction:c="column",spacing:s=0,divider:u,children:d}=n,v=(0,r.Z)(n,f),x={direction:c,spacing:s};return(0,p.jsx)(g,(0,i.Z)({as:a,ownerState:x,ref:t},v,{children:u?h(d,u):d}))})),x=v},86688:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),i=n(72797);r.Component;const a=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(i.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},36776:(e,t,n)=>{n.d(t,{Z:()=>r});const r={links_disabled:!1}},24186:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),i=n(14670),a=n(18463),o=n(51907),l=n(79912),c=n(951),s=n(94697),u=n(22318);class d extends r.Component{render(){var{classes:e,title:t,text:n,image:i,className:d,style:m,actions:p,imageHeight:f,noImage:h}=this.props,g=0;return(m=m||{}).display="flex",m.flexDirection="column",i=i||"https://dummyimage.com/${(imageHeight) ? imageHeight : 300}",r.createElement(a.Z,{className:d,style:m},r.createElement(s.Z,{title:r.createElement(u.Z,{noWrap:!0,variant:"h6",component:"h4"},t),style:{display:"block",overflow:"hidden"}}),!h&&r.createElement(c.Z,{className:e.media,height:f||null,image:i}),n&&""!==n.trim&&r.createElement(l.Z,{style:{flex:1}},n),r.createElement(o.Z,null,p&&p.map((e=>r.createElement("div",{key:g++},e)))))}}const m=(0,i.Z)((e=>({media:{height:0,paddingTop:"56.25%",backgroundColor:"#efefef"}})))(d)},80383:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),i=n(86688),a=n(41749);class o extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:i,alignItems:o,style:l,flex:c}=this.props,t=t||0;return l=l||{},c&&(l.display="flex"),r.createElement(a.Z,{container:!0,direction:e,justifyContent:i,alignItems:o,className:n,spacing:t,style:l},this.props.children)}}const l=(0,i.Z)(o)},81648:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),i=n(86688),a=n(41749);class o extends r.Component{render(){var{visible:e,className:t,xs:n,sm:i,md:o,style:l,fill:c,flex:s,center:u}=this.props;e=e||!0;var d={...l};return(d=d||{textAlign:"inherit"}).textAlign=u?"center":d.textAlign,c&&(d.width="100%"),s&&(d.flex=1),e&&r.createElement(a.Z,{className:t,item:!0,xs:n,sm:i,md:o,style:d},this.props.children)}}const l=(0,i.Z)(o)},87558:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),i=n(73727),a=n(36776);class o extends r.Component{render(){var{children:e,className:t,to:n,href:o,style:l,external:c}=this.props;if(e=(n=(n=n||o)||"http://localhost")?e:"NO LINK DEFINED",l=l||{},n&&"string"!=typeof n)return"INVALID URL";const s=!((c=!0===c)||n&&0===n.indexOf("http")),u=s?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==s&&0==a.Z.links_disabled?r.createElement(i.OL,{className:t,to:n,style:l},e):r.createElement("a",{className:t,href:n,style:l,target:u},e)}}const l=o},70227:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294);function i(e){const{label:t,value:n}=e;return r.createElement("div",null,t&&r.createElement("span",{style:{fontWeight:"bold"}},t,":"),r.createElement("span",null,n))}},76249:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(67294),i=n(87558);const a=function(e){const{id:t,entity:n,children:a}=e;return r.createElement(i.Z,{border:!1,to:`/movie/${t}/${encodeURIComponent(n)}`},a)}},80607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(67294),i=n(91380);n(80383),n(81648),n(70227);const a=(0,i.ZP)("div")({}),o=(0,i.ZP)("div")({}),l=(0,i.ZP)("div")({marginTop:"-1.5rem",minHeight:"3rem"}),c=(0,i.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),s=(0,i.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),u=(0,i.ZP)("h3")({margin:"0 0 0.5rem 0",padding:"0"}),d=(0,i.ZP)("h4")({textTransform:"uppercase",margin:"0 0 0.5rem 0",padding:"0"}),m=(0,i.ZP)("div")({}),p=(0,i.ZP)("div")({fontSize:"0.75rem",lineHeight:"0.85rem",textTransform:"uppercase"});function f(e){var{data:t}=e;return t?!0===e.mini?function(e,t){return r.createElement(l,null,t&&t.length>0&&t.slice(0,1).map(((e,t)=>r.createElement("div",{key:t},r.createElement(c,null,r.createElement(c,null,e.year," - ",e.name.toUpperCase()," - ",!1===e.won?"[NOM]":""," ",e.category))))),t&&t.length>1&&r.createElement(c,null,r.createElement(c,null,r.createElement(s,null,"and ",t.length-1," more"))))}(0,t):function(e,t){var n=null,i=null;return r.createElement(a,null,r.createElement("h2",null,"Awards"),t&&t.length>0&&t.map(((e,t)=>r.createElement("div",{key:t},(e=>n&&n==e.year?null:(n=e.year,i=null,r.createElement(u,null,e.year)))(e),(e=>i&&i==e.name?null:(i=e.name,r.createElement(d,null,e.name)))(e),r.createElement(o,null,!1===e.won?r.createElement(p,null,"nominee"):"",r.createElement(m,{won:e.won},e.category))))))}(0,t):null}},89921:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),i=n(20735),a=n(91355);const o=(0,n(30977).default)((function(e){return r.createElement(i.Z,null,r.createElement(a.default,e))}))},30977:(e,t,n)=>{n.r(t),n.d(t,{QRY:()=>l,default:()=>c});var r=n(67294),i=n(54397),a=n(70846);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const l=i.Ps`
  query getStory($page: Int)
{
  storiesPodcastMusic(page: $page) {
    id
    title
    link
    image
  }
}
`,c=e=>function(t){var{route:n}=t,i=(n=n||{}).page?n.page:1,c=t.data?{}:(0,a.a)(l,{variables:{page:parseInt(i)}}),s=t.data?t.data:c.data?c.data.storiesPodcastMusic:null;return r.createElement(e,o({},t,c,{data:s}))}},91355:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(67294),i=n(91380),a=n(80383),o=n(81648),l=n(37206),c=n(79895),s=n(20735),u=n(28973),d=n(29019);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}const p=(0,i.ZP)("div")({padding:"0.5rem"}),f=(0,i.ZP)("div")({padding:"0.5rem"});function h(e){var{data:t,loading:n}=e;return n=n||!t||0==t.length,t=t&&t.length>0?t:[1,2,3,4,5],r.createElement(p,null,r.createElement(d.default,m({},e,{url:"/podcasts/stories/music"}),r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t.map(((e,t)=>r.createElement(o.Z,{key:t,xs:12,sm:6,md:6,lg:4},r.createElement(f,null,n?r.createElement(g,null):r.createElement(v,{data:e}))))))))}function g(){return r.createElement(c.Z,{style:{padding:"0.5rem"}},r.createElement(s.Z,{spacing:1},r.createElement(u.Z,{variant:"text",width:"80%"}),r.createElement(u.Z,{variant:"rectangular",height:240}),r.createElement(u.Z,{variant:"text"})))}function v({data:e}){return r.createElement(l.default,m({full:!0},e))}},37206:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),i=n(24186),a=n(76249);function o(e){const{id:t,title:n,awards:o,full:l,image:c,description:s}=e;return r.createElement(a.default,{id:t,entity:n},r.createElement(i.Z,{image:c,imageHeight:100,text:s,title:n}))}n(80607)},29019:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),i=n(91380),a=n(5977),o=n(20735),l=n(72642);const c=(0,i.ZP)("h3")({marginTop:0});function s(e){const t=(0,a.k6)(),{children:n,route:i,loading:s,data:u,url:d}=e,m=i&&i.page?parseInt(i.page):1,p=e=>{var n=`${d}/${e}`;console.log(n),t.push(n),window.scrollTo(0,0)},f=u&&u.length<10,h=1==m;return r.createElement(r.Fragment,null,u&&u.length>0?r.createElement(o.Z,{spacing:2},n,r.createElement(o.Z,{direction:"row",spacing:2,justifyContent:"center"},r.createElement(l.Z,{variant:"outlined",disabled:h,onClick:()=>p(m-1)},"Back"),r.createElement(l.Z,{variant:"outlined",disabled:f,onClick:()=>p(m+1)},"Next"))):r.createElement(c,null,s?"loading":"No results"))}},86010:(e,t,n)=>{function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:()=>i})},73727:(e,t,n)=>{n.d(t,{VK:()=>u,OL:()=>y});var r=n(5977),i=n(51721),a=n(67294),o=n(37531),l=(n(45697),n(87462)),c=n(63366),s=n(2177),u=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).history=(0,o.lX)(t.props),t}return(0,i.Z)(t,e),t.prototype.render=function(){return a.createElement(r.F0,{history:this.history,children:this.props.children})},t}(a.Component);a.Component;var d=function(e,t){return"function"==typeof e?e(t):e},m=function(e,t){return"string"==typeof e?(0,o.ob)(e,null,null,t):e},p=function(e){return e},f=a.forwardRef;void 0===f&&(f=p);var h=f((function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,o=(0,c.Z)(e,["innerRef","navigate","onClick"]),s=o.target,u=(0,l.Z)({},o,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return u.ref=p!==f&&t||n,a.createElement("a",u)})),g=f((function(e,t){var n=e.component,i=void 0===n?h:n,u=e.replace,g=e.to,v=e.innerRef,x=(0,c.Z)(e,["component","replace","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,s.Z)(!1);var n=e.history,r=m(d(g,e.location),e.location),c=r?n.createHref(r):"",h=(0,l.Z)({},x,{href:c,navigate:function(){var t=d(g,e.location),r=(0,o.Ep)(e.location)===(0,o.Ep)(m(t));(u||r?n.replace:n.push)(t)}});return p!==f?h.ref=t||v:h.innerRef=v,a.createElement(i,h)}))})),v=function(e){return e},x=a.forwardRef;void 0===x&&(x=v);var y=x((function(e,t){var n=e["aria-current"],i=void 0===n?"page":n,o=e.activeClassName,u=void 0===o?"active":o,p=e.activeStyle,f=e.className,h=e.exact,y=e.isActive,E=e.location,Z=e.sensitive,w=e.strict,b=e.style,C=e.to,k=e.innerRef,j=(0,c.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,s.Z)(!1);var n=E||e.location,o=m(d(C,n),n),c=o.pathname,P=c&&c.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),S=P?(0,r.LX)(n.pathname,{path:P,exact:h,sensitive:Z,strict:w}):null,N=!!(y?y(S,n):S),R="function"==typeof f?f(N):f,O="function"==typeof b?b(N):b;N&&(R=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(R,u),O=(0,l.Z)({},O,p));var I=(0,l.Z)({"aria-current":N&&i||null,className:R,style:O,to:o},j);return v!==x?I.ref=t||k:I.innerRef=k,a.createElement(g,I)}))}))},94537:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(63366),i=n(87462),a=n(97326),o=n(51721),l=(n(45697),n(67294)),c=n(220);function s(e,t){var n=Object.create(null);return e&&l.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,l.isValidElement)(e)?t(e):e}(e)})),n}function u(e,t,n){return null!=n[t]?n[t]:e.props[t]}function d(e,t,n){var r=s(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),a=[];for(var o in e)o in t?a.length&&(i[o]=a,a=[]):a.push(o);var l={};for(var c in t){if(i[c])for(r=0;r<i[c].length;r++){var s=i[c][r];l[i[c][r]]=n(s)}l[c]=n(c)}for(r=0;r<a.length;r++)l[a[r]]=n(a[r]);return l}(t,r);return Object.keys(i).forEach((function(a){var o=i[a];if((0,l.isValidElement)(o)){var c=a in t,s=a in r,d=t[a],m=(0,l.isValidElement)(d)&&!d.props.in;!s||c&&!m?s||!c||m?s&&c&&(0,l.isValidElement)(d)&&(i[a]=(0,l.cloneElement)(o,{onExited:n.bind(null,o),in:d.props.in,exit:u(o,"exit",e),enter:u(o,"enter",e)})):i[a]=(0,l.cloneElement)(o,{in:!1}):i[a]=(0,l.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:u(o,"exit",e),enter:u(o,"enter",e)})}})),i}var m=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},p=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind((0,a.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,r=a,s(n.children,(function(e){return(0,l.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:u(e,"appear",n),enter:u(e,"enter",n),exit:u(e,"exit",n)})}))):d(e,i,a),firstRender:!1}},n.handleExited=function(e,t){var n=s(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,i.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,r.Z)(e,["component","childFactory"]),a=this.state.contextValue,o=m(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?l.createElement(c.Z.Provider,{value:a},o):l.createElement(c.Z.Provider,{value:a},l.createElement(t,i,o))},t}(l.Component);p.propTypes={},p.defaultProps={component:"div",childFactory:function(e){return e}};const f=p},220:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(67294).createContext(null)}}]);