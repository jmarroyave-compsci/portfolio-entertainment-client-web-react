"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[4101,6249,607],{41749:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(45987),i=n(87462),a=n(67294),o=(n(45697),n(86010)),l=n(14670),c=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=a.forwardRef((function(e,t){var n=e.alignContent,l=void 0===n?"stretch":n,c=e.alignItems,s=void 0===c?"stretch":c,u=e.classes,d=e.className,f=e.component,m=void 0===f?"div":f,p=e.container,g=void 0!==p&&p,v=e.direction,h=void 0===v?"row":v,x=e.item,y=void 0!==x&&x,w=e.justify,Z=e.justifyContent,E=void 0===Z?"flex-start":Z,C=e.lg,b=void 0!==C&&C,N=e.md,S=void 0!==N&&N,j=e.sm,k=void 0!==j&&j,I=e.spacing,R=void 0===I?0:I,W=e.wrap,A=void 0===W?"wrap":W,P=e.xl,z=void 0!==P&&P,D=e.xs,M=void 0!==D&&D,O=e.zeroMinWidth,K=void 0!==O&&O,L=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),T=(0,o.Z)(u.root,d,g&&[u.container,0!==R&&u["spacing-xs-".concat(String(R))]],y&&u.item,K&&u.zeroMinWidth,"row"!==h&&u["direction-xs-".concat(String(h))],"wrap"!==A&&u["wrap-xs-".concat(String(A))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==l&&u["align-content-xs-".concat(String(l))],"flex-start"!==(w||E)&&u["justify-content-xs-".concat(String(w||E))],!1!==M&&u["grid-xs-".concat(String(M))],!1!==k&&u["grid-sm-".concat(String(k))],!1!==S&&u["grid-md-".concat(String(S))],!1!==b&&u["grid-lg-".concat(String(b))],!1!==z&&u["grid-xl-".concat(String(z))]);return a.createElement(m,(0,i.Z)({className:T,ref:t},L))}));const f=(0,l.Z)((function(e){return(0,i.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(t){var r=e.spacing(t);0!==r&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),n}(e),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,i.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d)},93871:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(60288);function i(e){if("string"!=typeof e)throw new Error((0,r.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},86688:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),i=n(72797);r.Component;const a=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(i.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},36776:(e,t,n)=>{n.d(t,{Z:()=>r});const r={links_disabled:!1}},80383:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),i=n(86688),a=n(41749);class o extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:i,alignItems:o,style:l,flex:c}=this.props,t=t||0;return l=l||{},c&&(l.display="flex"),r.createElement(a.Z,{container:!0,direction:e,justifyContent:i,alignItems:o,className:n,spacing:t,style:l},this.props.children)}}const l=(0,i.Z)(o)},81648:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),i=n(86688),a=n(41749);class o extends r.Component{render(){var{visible:e,className:t,xs:n,sm:i,md:o,style:l,fill:c,flex:s,center:u}=this.props;e=e||!0;var d={...l};return(d=d||{textAlign:"inherit"}).textAlign=u?"center":d.textAlign,c&&(d.width="100%"),s&&(d.flex=1),e&&r.createElement(a.Z,{className:t,item:!0,xs:n,sm:i,md:o,style:d},this.props.children)}}const l=(0,i.Z)(o)},87558:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),i=n(73727),a=n(36776);class o extends r.Component{render(){var{children:e,className:t,to:n,href:o,style:l,external:c}=this.props;if(e=(n=(n=n||o)||"http://localhost")?e:"NO LINK DEFINED",l=l||{},n&&"string"!=typeof n)return"INVALID URL";const s=!((c=!0===c)||n&&0===n.indexOf("http")),u=s?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==s&&0==a.Z.links_disabled?r.createElement(i.OL,{className:t,to:n,style:l},e):r.createElement("a",{className:t,href:n,style:l,target:u},e)}}const l=o},70227:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294);function i(e){const{label:t,value:n}=e;return r.createElement("div",null,t&&r.createElement("span",{style:{fontWeight:"bold"}},t,":"),r.createElement("span",null,n))}},76249:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(67294),i=n(87558);const a=function(e){const{id:t,entity:n,children:a}=e;return r.createElement(i.Z,{border:!1,to:`/movie/${t}/${encodeURIComponent(n)}`},a)}},80607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(67294),i=n(91380);n(80383),n(81648),n(70227);const a=(0,i.ZP)("div")({}),o=(0,i.ZP)("div")({}),l=(0,i.ZP)("div")({marginTop:"-1.5rem",minHeight:"3rem"}),c=(0,i.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),s=(0,i.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),u=(0,i.ZP)("h3")({margin:"0 0 0.5rem 0",padding:"0"}),d=(0,i.ZP)("h4")({textTransform:"uppercase",margin:"0 0 0.5rem 0",padding:"0"}),f=(0,i.ZP)("div")({}),m=(0,i.ZP)("div")({fontSize:"0.75rem",lineHeight:"0.85rem",textTransform:"uppercase"});function p(e){var{data:t}=e;return t?!0===e.mini?function(e,t){return r.createElement(l,null,t&&t.length>0&&t.slice(0,1).map(((e,t)=>r.createElement("div",{key:t},r.createElement(c,null,r.createElement(c,null,e.year," - ",e.name.toUpperCase()," - ",!1===e.won?"[NOM]":""," ",e.category))))),t&&t.length>1&&r.createElement(c,null,r.createElement(c,null,r.createElement(s,null,"and ",t.length-1," more"))))}(0,t):function(e,t){var n=null,i=null;return r.createElement(a,null,r.createElement("h2",null,"Awards"),t&&t.length>0&&t.map(((e,t)=>r.createElement("div",{key:t},(e=>n&&n==e.year?null:(n=e.year,i=null,r.createElement(u,null,e.year)))(e),(e=>i&&i==e.name?null:(i=e.name,r.createElement(d,null,e.name)))(e),r.createElement(o,null,!1===e.won?r.createElement(m,null,"nominee"):"",r.createElement(f,{won:e.won},e.category))))))}(0,t):null}},18115:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(67294),i=n(18463),a=n(79912),o=n(94697),l=n(76249),c=n(80607),s=n(22318);function u(e){const{id:t,title:n,awards:u,full:d}=e;return r.createElement(l.default,{id:t,entity:n},r.createElement(i.Z,null,r.createElement(o.Z,{title:r.createElement(s.Z,{noWrap:!0,variant:"h6",component:"h4"},n),style:{display:"block",overflow:"hidden"}}),r.createElement(a.Z,null,r.createElement(c.default,{mini:!d,data:u}))))}},86010:(e,t,n)=>{function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:()=>i})},73727:(e,t,n)=>{n.d(t,{VK:()=>u,OL:()=>y});var r=n(5977),i=n(51721),a=n(67294),o=n(37531),l=(n(45697),n(87462)),c=n(63366),s=n(2177),u=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).history=(0,o.lX)(t.props),t}return(0,i.Z)(t,e),t.prototype.render=function(){return a.createElement(r.F0,{history:this.history,children:this.props.children})},t}(a.Component);a.Component;var d=function(e,t){return"function"==typeof e?e(t):e},f=function(e,t){return"string"==typeof e?(0,o.ob)(e,null,null,t):e},m=function(e){return e},p=a.forwardRef;void 0===p&&(p=m);var g=p((function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,o=(0,c.Z)(e,["innerRef","navigate","onClick"]),s=o.target,u=(0,l.Z)({},o,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return u.ref=m!==p&&t||n,a.createElement("a",u)})),v=p((function(e,t){var n=e.component,i=void 0===n?g:n,u=e.replace,v=e.to,h=e.innerRef,x=(0,c.Z)(e,["component","replace","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,s.Z)(!1);var n=e.history,r=f(d(v,e.location),e.location),c=r?n.createHref(r):"",g=(0,l.Z)({},x,{href:c,navigate:function(){var t=d(v,e.location),r=(0,o.Ep)(e.location)===(0,o.Ep)(f(t));(u||r?n.replace:n.push)(t)}});return m!==p?g.ref=t||h:g.innerRef=h,a.createElement(i,g)}))})),h=function(e){return e},x=a.forwardRef;void 0===x&&(x=h);var y=x((function(e,t){var n=e["aria-current"],i=void 0===n?"page":n,o=e.activeClassName,u=void 0===o?"active":o,m=e.activeStyle,p=e.className,g=e.exact,y=e.isActive,w=e.location,Z=e.sensitive,E=e.strict,C=e.style,b=e.to,N=e.innerRef,S=(0,c.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,s.Z)(!1);var n=w||e.location,o=f(d(b,n),n),c=o.pathname,j=c&&c.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=j?(0,r.LX)(n.pathname,{path:j,exact:g,sensitive:Z,strict:E}):null,I=!!(y?y(k,n):k),R="function"==typeof p?p(I):p,W="function"==typeof C?C(I):C;I&&(R=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(R,u),W=(0,l.Z)({},W,m));var A=(0,l.Z)({"aria-current":I&&i||null,className:R,style:W,to:o},S);return h!==x?A.ref=t||N:A.innerRef=N,a.createElement(v,A)}))}))}}]);