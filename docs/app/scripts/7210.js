"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[7210],{41749:(e,t,n)=>{n.d(t,{Z:()=>f});var i=n(45987),r=n(87462),s=n(67294),a=(n(45697),n(86010)),o=n(14670),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var x=s.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,x=e.className,f=e.component,p=void 0===f?"div":f,g=e.container,m=void 0!==g&&g,u=e.direction,h=void 0===u?"row":u,v=e.item,y=void 0!==v&&v,w=e.justify,C=e.justifyContent,b=void 0===C?"flex-start":C,j=e.lg,Z=void 0!==j&&j,S=e.md,E=void 0!==S&&S,W=e.sm,I=void 0!==W&&W,N=e.spacing,k=void 0===N?0:N,A=e.wrap,z=void 0===A?"wrap":A,M=e.xl,G=void 0!==M&&M,B=e.xs,D=void 0!==B&&B,T=e.zeroMinWidth,F=void 0!==T&&T,R=(0,i.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),Y=(0,a.Z)(d.root,x,m&&[d.container,0!==k&&d["spacing-xs-".concat(String(k))]],y&&d.item,F&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==z&&d["wrap-xs-".concat(String(z))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==o&&d["align-content-xs-".concat(String(o))],"flex-start"!==(w||b)&&d["justify-content-xs-".concat(String(w||b))],!1!==D&&d["grid-xs-".concat(String(D))],!1!==I&&d["grid-sm-".concat(String(I))],!1!==E&&d["grid-md-".concat(String(E))],!1!==Z&&d["grid-lg-".concat(String(Z))],!1!==G&&d["grid-xl-".concat(String(G))]);return s.createElement(p,(0,r.Z)({className:Y,ref:t},R))}));const f=(0,o.Z)((function(e){return(0,r.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(t){var i=e.spacing(t);0!==i&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var i={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");i[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else i[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,r.Z)(e,i):e[t.breakpoints.up(n)]=i}(t,e,n),t}),{}))}),{name:"MuiGrid"})(x)},86688:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(67294),r=n(72797);i.Component;const s=e=>class extends i.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,i.createElement(r.Z,{from:t,style:{width:"100%"}},i.createElement(e,this.props))}}},80383:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294),r=n(86688),s=n(41749);class a extends i.Component{render(){var{direction:e,spacing:t,className:n,justify:r,alignItems:a,style:o,flex:c}=this.props,t=t||0;return o=o||{},c&&(o.display="flex"),i.createElement(s.Z,{container:!0,direction:e,justifyContent:r,alignItems:a,className:n,spacing:t,style:o},this.props.children)}}const o=(0,r.Z)(a)},81648:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294),r=n(86688),s=n(41749);class a extends i.Component{render(){var{visible:e,className:t,xs:n,sm:r,md:a,style:o,fill:c,flex:l,center:d}=this.props;e=e||!0;var x={...o};return(x=x||{textAlign:"inherit"}).textAlign=d?"center":x.textAlign,c&&(x.width="100%"),l&&(x.flex=1),e&&i.createElement(s.Z,{className:t,item:!0,xs:n,sm:r,md:a,style:x},this.props.children)}}const o=(0,r.Z)(a)},7210:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var i=n(67294),r=n(80383),s=n(81648);const a=function(e){const{data:t,loading:n,route:a}=e;return i.createElement(r.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t&&t.length>0&&t.map((e=>i.createElement(s.Z,{xs:12,sm:12,md:12},e.name&&i.createElement("div",null,"Name: ",e.name),e.yearAdded&&i.createElement("div",null,"Year added: ",e.yearAdded)))))}},86010:(e,t,n)=>{function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);