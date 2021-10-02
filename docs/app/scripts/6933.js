"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[6933,3654,8445,9601],{86688:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),l=n(72797);r.Component;const a=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(l.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},36776:(e,t,n)=>{n.d(t,{Z:()=>r});const r={links_disabled:!1}},80383:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),l=n(86688),a=n(41749);class o extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:l,alignItems:o,style:s,flex:i}=this.props,t=t||0;return s=s||{},i&&(s.display="flex"),r.createElement(a.Z,{container:!0,direction:e,justifyContent:l,alignItems:o,className:n,spacing:t,style:s},this.props.children)}}const s=(0,l.Z)(o)},81648:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),l=n(86688),a=n(41749);class o extends r.Component{render(){var{visible:e,className:t,xs:n,sm:l,md:o,style:s,fill:i,flex:c,center:d}=this.props;e=e||!0;var m={...s};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,i&&(m.width="100%"),c&&(m.flex=1),e&&r.createElement(a.Z,{className:t,item:!0,xs:n,sm:l,md:o,style:m},this.props.children)}}const s=(0,l.Z)(o)},83347:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),l=n(12613),a=n(86688);class o extends r.Component{render(){var{xs:e,sm:t,md:n,lg:a,xl:o}=this.props;return e=e||null,t=t||e,n=n||t,a=a||n,o=o||a,r.createElement("div",{style:{width:"100%"}},r.createElement(l.Z,{only:["sm","md","lg","xl"]},e),r.createElement(l.Z,{only:["xs","md","lg","xl"]},t),r.createElement(l.Z,{only:["xs","sm","lg","xl"]},n),r.createElement(l.Z,{only:["xs","sm","md","xl"]},a),r.createElement(l.Z,{only:["xs","sm","md","lg"]},o))}}const s=(0,a.Z)(o)},91534:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),l=n(83347),a=n(86688),o=n(72797);class s extends r.Component{render(){var{className:e,cover:t,padding:n,children:a,hero:o,rounded:s}=this.props,i=!0===t?"100vh":"inherit";return s=!0===s,r.createElement(l.Z,{xs:this.renderSection(a,e,i,"1.5rem 1.5rem 3rem 1.5rem",s),sm:this.renderSection(a,e,i,"2rem 3rem 4rem 3rem",s),md:this.renderSection(a,e,i,"3rem 2.5rem 3.5rem 2.5rem",s)})}renderSection(e,t,n,l,a){return r.createElement(o.Z,{from:"/core/ui/section"},r.createElement("div",{className:"com-layout-section"},r.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:n,padding:l,borderRadius:a?"0.5rem 0.5rem 0 0":0}},e)))}}const i=(0,a.Z)(s)},87558:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),l=n(73727),a=n(36776);class o extends r.Component{render(){var{children:e,className:t,to:n,href:o,style:s,external:i}=this.props;if(e=(n=(n=n||o)||"http://localhost")?e:"NO LINK DEFINED",s=s||{},n&&"string"!=typeof n)return"INVALID URL";const c=!((i=!0===i)||n&&0===n.indexOf("http")),d=c?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==c&&0==a.Z.links_disabled?r.createElement(l.OL,{className:t,to:n,style:s},e):r.createElement("a",{className:t,href:n,style:s,target:d},e)}}const s=o},43178:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),l=n(91288),a=n(71267);function o({text:e,onClick:t}){return r.createElement(s,null,r.createElement(a.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}o.defaultProps={onClick:null,text:""};const s=l.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},76249:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(67294),l=n(87558);const a=function(e){const{id:t,entity:n,children:a}=e;return r.createElement(l.Z,{border:!1,to:`/movie/${t}/${encodeURIComponent(n)}`},a)}},20766:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(67294),l=n(87558);const a=function(e){const{id:t,entity:n,children:a}=e;return r.createElement(l.Z,{border:!1,to:`/person/${t}/${encodeURIComponent(n)}`},a)}},74931:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(67294),l=n(87558);const a=function(e){const{id:t,entity:n,children:a}=e;return r.createElement(l.Z,{border:!1,to:`/podcast/${t}/${encodeURIComponent(n)}`},a)}},8445:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),l=(n(91534),n(80383)),a=n(81648),o=n(79601);const s=function(e){return r.createElement(l.Z,{className:"page-module",fill:!0,style:{padding:"0 2rem"}},r.createElement(a.Z,{fill:!0},r.createElement(o.default,e)))}},13654:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),l=n(83347),a=n(8445);function o(e){return r.createElement(l.Z,{xs:r.createElement(a.default,e)})}},26933:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a,Controls:()=>s,Loading:()=>i});var r=n(13654),l=n(2311);const a={title:"Project/Pages/Search/Page"},o=e=>React.createElement(r.default,e),s=o.bind({});s.args={data:l};const i=o.bind({});i.args={loading:!0,data:null}},79601:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var r=n(67294),l=n(91380),a=n(5977),o=n(20735),s=n(32116),i=n(29019),c=n(20766),d=n(76249),m=n(74931);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}n(43178);const u=(0,l.ZP)("div")({marginBottom:"4rem"}),f=(0,l.ZP)("div")({paddingBottom:"3rem"}),h=(0,l.ZP)("span")({fontWeight:"bold"}),y=(0,l.ZP)("div")({}),E=(0,l.ZP)("div")({}),g=(0,l.ZP)("div")({fontSize:"0.65rem",lineHeight:"1rem",textTransform:"uppercase"}),x=(0,l.ZP)("h3")({marginTop:0});function v(e){const{r:t}=e;switch(t.type){case"movie":return r.createElement(E,null,r.createElement(g,null,"Movie"),r.createElement(x,null,r.createElement(d.default,{id:t.entityId,entity:t.entity},t.entity)));case"people":case"person":return r.createElement(E,null,r.createElement(g,null,"Person"),r.createElement(x,null,r.createElement(c.default,{id:t.entityId,entity:t.entity},t.entity)));case"podcast":return r.createElement(E,null,r.createElement(g,null,"Podcast"),r.createElement(x,null,r.createElement(m.default,{id:t.entityId,entity:t.entity},t.entity)))}return`ERROR: type ${t.type}`}const Z=function(e){(0,a.k6)();const{data:t,loading:n,qry:l,route:c}=e;return r.createElement(u,null,r.createElement(f,null,r.createElement("div",null,"search results for: ",r.createElement(h,null,l))),r.createElement(y,null,r.createElement(i.default,p({},e,{url:`/search/${encodeURIComponent(l)}`}),r.createElement(o.Z,{divider:r.createElement(s.Z,{flexItem:!0}),spacing:2},t&&t.map(((e,t)=>r.createElement(v,{key:t,r:e})))))))}},29019:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(67294),l=n(91380),a=n(5977),o=n(20735),s=n(72642);const i=(0,l.ZP)("h3")({marginTop:0});function c(e){const t=(0,a.k6)(),{children:n,route:l,loading:c,data:d,url:m}=e,p=l&&l.page?parseInt(l.page):1,u=e=>{var n=`${m}/${e}`;console.log(n),t.push(n),window.scrollTo(0,0)},f=d&&d.length<10,h=1==p;return r.createElement(r.Fragment,null,d&&d.length>0?r.createElement(o.Z,{spacing:2},n,r.createElement(o.Z,{direction:"row",spacing:2,justifyContent:"center"},r.createElement(s.Z,{variant:"outlined",disabled:h,onClick:()=>u(p-1)},"Back"),r.createElement(s.Z,{variant:"outlined",disabled:f,onClick:()=>u(p+1)},"Next"))):r.createElement(i,null,c?"loading":"No results"))}},2311:e=>{e.exports=JSON.parse('[{"entity":"people","text":"Julia Roberts","ref":"nm0000210","score":1.5},{"_id":"614e68d826855d0e6413274e","entity":"podcast","text":"Dispatches from CBC Radio","ref":"0002da5f-49a2-31ba-b44c-cdeabdf113cb","score":1.5},{"_id":"614e6a3e26855d0e646d2aa7","entity":"movie","text":"Rocky","ref":"tt0541007","score":1.5},{"_id":"614e690726855d0e641fa974","entity":"people","text":"John Johns","ref":"614a920e2fefdc11ebc592a9","score":1.5},{"_id":"614e689226855d0e6405aab5","entity":"people","text":"John John","ref":"614a8ff02fefdc11ebab933f","score":1.5},{"_id":"614e6a5e26855d0e64748229","entity":"people","text":"John-John","ref":"614a98b52fefdc11eb1a6d8b","score":1.5},{"_id":"614e689f26855d0e640844fa","entity":"people","text":"John-John","ref":"614a90222fefdc11ebae2d95","score":1.5},{"_id":"614e67b426855d0e64d38f17","entity":"people","text":"John Johns","ref":"614a8ba42fefdc11eb797659","score":1.5},{"_id":"614e685326855d0e64f68e78","entity":"people","text":"John John","ref":"614a8ecb2fefdc11eb9c769f","score":1.5},{"_id":"614e690d26855d0e642034a1","entity":"people","text":"John Johns","ref":"614a92192fefdc11ebc61dd9","score":1.5}]')}}]);