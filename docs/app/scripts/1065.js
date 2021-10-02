"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[1065],{41749:(e,t,n)=>{n.d(t,{Z:()=>x});var i=n(45987),r=n(87462),a=n(67294),s=(n(45697),n(86010)),o=n(14670),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=a.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,m=e.className,x=e.component,g=void 0===x?"div":x,p=e.container,f=void 0!==p&&p,u=e.direction,h=void 0===u?"row":u,v=e.item,w=void 0!==v&&v,b=e.justify,y=e.justifyContent,C=void 0===y?"flex-start":y,Z=e.lg,E=void 0!==Z&&Z,j=e.md,S=void 0!==j&&j,k=e.sm,I=void 0!==k&&k,W=e.spacing,M=void 0===W?0:W,z=e.wrap,N=void 0===z?"wrap":z,B=e.xl,D=void 0!==B&&B,G=e.xs,A=void 0!==G&&G,P=e.zeroMinWidth,T=void 0!==P&&P,F=(0,i.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),R=(0,s.Z)(d.root,m,f&&[d.container,0!==M&&d["spacing-xs-".concat(String(M))]],w&&d.item,T&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==N&&d["wrap-xs-".concat(String(N))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==o&&d["align-content-xs-".concat(String(o))],"flex-start"!==(b||C)&&d["justify-content-xs-".concat(String(b||C))],!1!==A&&d["grid-xs-".concat(String(A))],!1!==I&&d["grid-sm-".concat(String(I))],!1!==S&&d["grid-md-".concat(String(S))],!1!==E&&d["grid-lg-".concat(String(E))],!1!==D&&d["grid-xl-".concat(String(D))]);return a.createElement(g,(0,r.Z)({className:R,ref:t},F))}));const x=(0,o.Z)((function(e){return(0,r.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(t){var i=e.spacing(t);0!==i&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var i={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");i[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else i[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,r.Z)(e,i):e[t.breakpoints.up(n)]=i}(t,e,n),t}),{}))}),{name:"MuiGrid"})(m)},86688:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(67294),r=n(72797);i.Component;const a=e=>class extends i.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,i.createElement(r.Z,{from:t,style:{width:"100%"}},i.createElement(e,this.props))}}},80383:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294),r=n(86688),a=n(41749);class s extends i.Component{render(){var{direction:e,spacing:t,className:n,justify:r,alignItems:s,style:o,flex:c}=this.props,t=t||0;return o=o||{},c&&(o.display="flex"),i.createElement(a.Z,{container:!0,direction:e,justifyContent:r,alignItems:s,className:n,spacing:t,style:o},this.props.children)}}const o=(0,r.Z)(s)},81648:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294),r=n(86688),a=n(41749);class s extends i.Component{render(){var{visible:e,className:t,xs:n,sm:r,md:s,style:o,fill:c,flex:l,center:d}=this.props;e=e||!0;var m={...o};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,c&&(m.width="100%"),l&&(m.flex=1),e&&i.createElement(a.Z,{className:t,item:!0,xs:n,sm:r,md:s,style:m},this.props.children)}}const o=(0,r.Z)(s)},43178:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(67294),r=n(91288),a=n(71267);function s({text:e,onClick:t}){return i.createElement(o,null,i.createElement(a.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}s.defaultProps={onClick:null,text:""};const o=r.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},71065:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var i=n(67294),r=n(80383),a=n(81648),s=n(43178);const o=function(e){const{data:t,loading:n,route:o}=e;return i.createElement(r.Z,null,i.createElement(a.Z,{xs:12,sm:12,md:12},i.createElement("h4",null,"More information")),i.createElement(a.Z,{xs:12,sm:12,md:12},t&&t.imdb&&i.createElement("a",{href:t.imdb},i.createElement(s.Z,{text:"IMDB"})),t&&t.imdb&&i.createElement("a",{href:t.imdb},i.createElement(s.Z,{text:"IMDB"})),t&&t.imdb&&i.createElement("a",{href:t.imdb},i.createElement(s.Z,{text:"IMDB"}))))}}}]);