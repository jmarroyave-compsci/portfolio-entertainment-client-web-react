"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[7053,1065],{41749:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(45987),a=n(87462),i=n(67294),l=(n(45697),n(86010)),s=n(14670),c=[0,1,2,3,4,5,6,7,8,9,10],o=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=i.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,c=e.alignItems,o=void 0===c?"stretch":c,m=e.classes,d=e.className,u=e.component,f=void 0===u?"div":u,g=e.container,p=void 0!==g&&g,h=e.direction,x=void 0===h?"row":h,v=e.item,E=void 0!==v&&v,w=e.justify,Z=e.justifyContent,y=void 0===Z?"flex-start":Z,b=e.lg,C=void 0!==b&&b,j=e.md,D=void 0!==j&&j,S=e.sm,k=void 0!==S&&S,M=e.spacing,I=void 0===M?0:M,N=e.wrap,P=void 0===N?"wrap":N,W=e.xl,z=void 0!==W&&W,B=e.xs,T=void 0!==B&&B,A=e.zeroMinWidth,G=void 0!==A&&A,O=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),Y=(0,l.Z)(m.root,d,p&&[m.container,0!==I&&m["spacing-xs-".concat(String(I))]],E&&m.item,G&&m.zeroMinWidth,"row"!==x&&m["direction-xs-".concat(String(x))],"wrap"!==P&&m["wrap-xs-".concat(String(P))],"stretch"!==o&&m["align-items-xs-".concat(String(o))],"stretch"!==s&&m["align-content-xs-".concat(String(s))],"flex-start"!==(w||y)&&m["justify-content-xs-".concat(String(w||y))],!1!==T&&m["grid-xs-".concat(String(T))],!1!==k&&m["grid-sm-".concat(String(k))],!1!==D&&m["grid-md-".concat(String(D))],!1!==C&&m["grid-lg-".concat(String(C))],!1!==z&&m["grid-xl-".concat(String(z))]);return i.createElement(f,(0,a.Z)({className:Y,ref:t},O))}));const u=(0,s.Z)((function(e){return(0,a.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(t){var r=e.spacing(t);0!==r&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(m(r,2)),width:"calc(100% + ".concat(m(r),")"),"& > $item":{padding:m(r,2)}})})),n}(e),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};o.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,a.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d)},86688:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(72797);r.Component;const i=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(a.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},19976:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=(n(45697),n(19119)),i=n(34902);class l extends r.Component{getDate(e){try{if(!e||null==e||""===e||0==e.length)return new Date;if(e instanceof Date)return new Date(e);const t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(e){return new Date}}_format(e,t,n){switch(n){case"ago":return(0,a.Z)(t,new Date);case"DD/MM/YYYY":return(0,i.Z)(t,"dd/MM/yy");default:return(0,i.Z)(t,n)}}render(){var{lang:e,value:t,className:n}=this.props;e=e||"en";const a=this.props.format?this.props.format:"ago",i=this.getDate(t),l=this._format(e,i,a);return r.createElement("span",{className:n},l)}}const s=l},93013:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}class i extends r.Component{render(){var{src:e,width:t,height:n,style:i,notFound:l}=this.props,s={};return l&&(s.ref=e=>this.img=e,s.onError=()=>l&&this.img.src!=l?this.img.src=l:null),r.createElement("img",a({},s,{style:i,width:t,height:n,src:e}))}}const l=i},80383:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86688),i=n(41749);class l extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:a,alignItems:l,style:s,flex:c}=this.props,t=t||0;return s=s||{},c&&(s.display="flex"),r.createElement(i.Z,{container:!0,direction:e,justifyContent:a,alignItems:l,className:n,spacing:t,style:s},this.props.children)}}const s=(0,a.Z)(l)},81648:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86688),i=n(41749);class l extends r.Component{render(){var{visible:e,className:t,xs:n,sm:a,md:l,style:s,fill:c,flex:o,center:m}=this.props;e=e||!0;var d={...s};return(d=d||{textAlign:"inherit"}).textAlign=m?"center":d.textAlign,c&&(d.width="100%"),o&&(d.flex=1),e&&r.createElement(i.Z,{className:t,item:!0,xs:n,sm:a,md:l,style:d},this.props.children)}}const s=(0,a.Z)(l)},43178:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(91288),i=n(71267);function l({text:e,onClick:t}){return r.createElement(s,null,r.createElement(i.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}l.defaultProps={onClick:null,text:""};const s=a.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},70227:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){const{label:t,value:n}=e;return r.createElement("div",null,t&&r.createElement("span",{style:{fontWeight:"bold"}},t,":"),r.createElement("span",null,n))}},80607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(67294),a=n(91380);n(80383),n(81648),n(70227);const i=(0,a.ZP)("div")({}),l=(0,a.ZP)("div")({}),s=(0,a.ZP)("div")({marginTop:"-1.5rem",minHeight:"3rem"}),c=(0,a.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),o=(0,a.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),m=(0,a.ZP)("h3")({margin:"0 0 0.5rem 0",padding:"0"}),d=(0,a.ZP)("h4")({textTransform:"uppercase",margin:"0 0 0.5rem 0",padding:"0"}),u=(0,a.ZP)("div")({}),f=(0,a.ZP)("div")({fontSize:"0.75rem",lineHeight:"0.85rem",textTransform:"uppercase"});function g(e){var{data:t}=e;return t?!0===e.mini?function(e,t){return r.createElement(s,null,t&&t.length>0&&t.slice(0,1).map(((e,t)=>r.createElement("div",{key:t},r.createElement(c,null,r.createElement(c,null,e.year," - ",e.name.toUpperCase()," - ",!1===e.won?"[NOM]":""," ",e.category))))),t&&t.length>1&&r.createElement(c,null,r.createElement(c,null,r.createElement(o,null,"and ",t.length-1," more"))))}(0,t):function(e,t){var n=null,a=null;return r.createElement(i,null,r.createElement("h2",null,"Awards"),t&&t.length>0&&t.map(((e,t)=>r.createElement("div",{key:t},(e=>n&&n==e.year?null:(n=e.year,a=null,r.createElement(m,null,e.year)))(e),(e=>a&&a==e.name?null:(a=e.name,r.createElement(d,null,e.name)))(e),r.createElement(l,null,!1===e.won?r.createElement(f,null,"nominee"):"",r.createElement(u,{won:e.won},e.category))))))}(0,t):null}},91293:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),a=n(80383),i=n(81648),l=n(93013),s=n(92863);function c({data:e}){return e&&e.image?r.createElement(l.Z,{src:e.image,width:"150",height:"150"}):r.createElement(o,null)}function o(){return r.createElement("div",{style:{width:"8rem",height:"8rem",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#efefef"}},r.createElement(s.Z,null,"broken_image"))}const m=function(e){const{data:t,loading:n}=e;return r.createElement(a.Z,{fill:!0,style:{width:"100%",backgroundColor:"#333"}},r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement(c,{data:t})))}},71065:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(80383),i=n(81648),l=n(43178);const s=function(e){const{data:t,loading:n,route:s}=e;return r.createElement(a.Z,null,r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement("h4",null,"More information")),r.createElement(i.Z,{xs:12,sm:12,md:12},t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(l.Z,{text:"IMDB"})),t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(l.Z,{text:"IMDB"})),t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(l.Z,{text:"IMDB"}))))}},77053:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(67294),a=n(80383),i=n(81648),l=n(71065),s=n(80607),c=n(19976),o=n(43178),m=n(91293);const d=function(e){var{data:t,loading:n}=e;return t=t||{},r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement("h1",null,t.name),t&&t.profession&&t.profession.length>0&&r.createElement("span",null,t.profession.map((e=>r.createElement(o.Z,{text:e}))))),r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement(m.default,{data:t})),r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement(l.default,{data:t?t.references:null})),r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement("h4",null,"General information"),t&&t.birthDate&&r.createElement("span",null,"Birth date: ",r.createElement(c.Z,{value:t.birthDate}))),r.createElement(i.Z,{xs:12,sm:12,md:12},t&&t.directed&&t.directed.length>0&&r.createElement("span",null,"Directed: ",t.directed.map((e=>`${e} `)))),r.createElement(i.Z,{xs:12,sm:12,md:12},t&&t.acted&&t.acted.length>0&&r.createElement("span",null,"Acted: ",t.acted.map((e=>`${e} `)))),r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement(s.default,{data:t?t.awards:null})))}}}]);