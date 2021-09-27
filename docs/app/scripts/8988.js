"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[8988,8460,598],{86688:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(72797);r.Component;const l=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(a.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},19976:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=(n(45697),n(19119)),l=n(34902);class s extends r.Component{getDate(e){try{if(!e||null==e||""===e||0==e.length)return new Date;if(e instanceof Date)return new Date(e);const t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(e){return new Date}}_format(e,t,n){switch(n){case"ago":return(0,a.Z)(t,new Date);case"DD/MM/YYYY":return(0,l.Z)(t,"dd/MM/yy");default:return(0,l.Z)(t,n)}}render(){var{lang:e,value:t,className:n}=this.props;e=e||"en";const a=this.props.format?this.props.format:"ago",l=this.getDate(t),s=this._format(e,l,a);return r.createElement("span",{className:n},s)}}const c=s},93013:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}class l extends r.Component{render(){var{src:e,width:t,height:n,style:l,notFound:s}=this.props,c={};return s&&(c.ref=e=>this.img=e,c.onError=()=>s&&this.img.src!=s?this.img.src=s:null),r.createElement("img",a({},c,{style:l,width:t,height:n,src:e}))}}const s=l},80383:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(86688),l=n(41749);class s extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:a,alignItems:s,style:c,flex:m}=this.props,t=t||0;return c=c||{},m&&(c.display="flex"),r.createElement(l.Z,{container:!0,direction:e,justifyContent:a,alignItems:s,className:n,spacing:t,style:c},this.props.children)}}const c=(0,a.Z)(s)},81648:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(86688),l=n(41749);class s extends r.Component{render(){var{visible:e,className:t,xs:n,sm:a,md:s,style:c,fill:m,flex:i,center:d}=this.props;e=e||!0;var o={...c};return(o=o||{textAlign:"inherit"}).textAlign=d?"center":o.textAlign,m&&(o.width="100%"),i&&(o.flex=1),e&&r.createElement(l.Z,{className:t,item:!0,xs:n,sm:a,md:s,style:o},this.props.children)}}const c=(0,a.Z)(s)},83347:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(12613),l=n(86688);class s extends r.Component{render(){var{xs:e,sm:t,md:n,lg:l,xl:s}=this.props;return e=e||null,t=t||e,n=n||t,l=l||n,s=s||l,r.createElement("div",{style:{width:"100%"}},r.createElement(a.Z,{only:["sm","md","lg","xl"]},e),r.createElement(a.Z,{only:["xs","md","lg","xl"]},t),r.createElement(a.Z,{only:["xs","sm","lg","xl"]},n),r.createElement(a.Z,{only:["xs","sm","md","xl"]},l),r.createElement(a.Z,{only:["xs","sm","md","lg"]},s))}}const c=(0,l.Z)(s)},91534:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(83347),l=n(86688),s=n(72797);class c extends r.Component{render(){const{className:e,cover:t,padding:n,children:l,hero:s}=this.props,c=!0===t?"100vh":"inherit";return r.createElement(a.Z,{xs:this.renderSection(l,e,c,"2rem 0rem"),sm:this.renderSection(l,e,c,"3rem 0rem"),md:this.renderSection(l,e,c,"4rem 2.5rem")})}renderSection(e,t,n,a){return r.createElement(s.Z,{from:"/core/ui/section"},r.createElement("div",{className:"com-layout-section"},r.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:n,padding:a}},e)))}}const m=(0,l.Z)(c)},43178:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(1565),l=n(71267);function s({text:e,onClick:t}){return r.createElement(c,null,r.createElement(l.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}s.defaultProps={onClick:null,text:""};const c=a.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},80607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(80383),l=n(81648);const s=function(e){const{data:t,loading:n,route:s}=e;return r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t&&t.length>0&&t.map((e=>r.createElement(l.Z,{xs:12,sm:12,md:12},e.name&&r.createElement("div",null,"Name: ",e.name),e.year&&r.createElement("div",null,"Year: ",e.year),e.category&&r.createElement("div",null,"Category: ",e.category),e.won&&r.createElement("div",null,"Won: ",e.won),e._id&&r.createElement("div",null,"Id: ",e._id)))))}},91293:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(67294),a=n(80383),l=n(81648),s=n(93013),c=n(92863);function m({data:e}){return e&&e.image?r.createElement(s.Z,{src:e.image,width:"150",height:"150"}):r.createElement(i,null)}function i(){return r.createElement("div",{style:{width:"8rem",height:"8rem",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#efefef"}},r.createElement(c.Z,null,"broken_image"))}const d=function(e){const{data:t,loading:n}=e;return r.createElement(a.Z,{fill:!0,style:{width:"100%",backgroundColor:"#333"}},r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(m,{data:t})))}},92124:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(80383),l=n(81648);const s=function(e){const{data:t,loading:n,type:s}=e;return r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t&&t.length>0&&r.createElement("h2",null,s),t&&t.length>0&&t.map((e=>r.createElement(l.Z,{xs:12,sm:12,md:12},e.id&&r.createElement("div",null,"ID: ",e.id)))))}},56519:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(80383),l=n(81648);const s=function(e){const{data:t,loading:n,route:s}=e;return r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t&&t.length>0&&t.map((e=>r.createElement(l.Z,{xs:12,sm:12,md:12},e.name&&r.createElement("div",null,"By: ",e.name),e.averageRating&&r.createElement("div",null,"Rating: ",e.averageRating),e.votes&&r.createElement("div",null,"Votes: ",e.votes)))))}},71065:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(67294),a=n(80383),l=n(81648),s=n(43178);const c=function(e){const{data:t,loading:n,route:c}=e;return r.createElement(a.Z,null,r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement("h4",null,"More information")),r.createElement(l.Z,{xs:12,sm:12,md:12},t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(s.Z,{text:"IMDB"})),t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(s.Z,{text:"IMDB"})),t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(s.Z,{text:"IMDB"}))))}},7210:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(80383),l=n(81648);const s=function(e){const{data:t,loading:n,route:s}=e;return r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t&&t.length>0&&t.map((e=>r.createElement(l.Z,{xs:12,sm:12,md:12},e.name&&r.createElement("div",null,"Name: ",e.name),e.yearAdded&&r.createElement("div",null,"Year added: ",e.yearAdded)))))}},62947:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(67294),a=n(80383),l=n(81648),s=n(30324);const c=function(e){const{data:t,loading:n}=e;return r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(s.default,{data:t})))}},30324:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(67294),a=n(80383),l=n(81648),s=n(71065),c=n(7210),m=n(56519),i=n(92124),d=n(80607),o=n(19976),u=n(43178),E=n(91293);const h=function(e){var{data:t,loading:n}=e;return t=t||{},console.log(t),r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement("h1",null,t.title),t&&t.profession&&t.profession.length>0&&r.createElement("span",null,t.profession.map((e=>r.createElement(u.Z,{text:e}))))),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(E.default,{data:t})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(s.default,{data:t?t.references:null})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement("h4",null,"General information"),t&&t.country&&t.country.length>0&&r.createElement("span",null,"Country: ",t.country.map((e=>`${e} `))),t&&t.type&&t.type.length>0&&r.createElement("span",null,"Type: ",t.type),t&&t.genre&&t.genre.length>0&&r.createElement("span",null,"Genre: ",t.genre.map((e=>r.createElement(u.Z,{text:e})))),t&&t.duration&&r.createElement("span",null,"Duration: ",t.duration),t&&t.releasedDate>0&&r.createElement("span",null,"Released date: ",r.createElement(o.Z,{value:t.releasedDate})),t&&t.endedDate>0&&r.createElement("span",null,"Ended date: ",r.createElement(o.Z,{value:t.endedDate}))),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(c.default,{data:t?t.streamBy:null})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(m.default,{data:t?t.rating:null})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(i.default,{type:"directors",data:t?t.director:null})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(i.default,{type:"writers",data:t?t.writer:null})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(i.default,{type:"cast",data:t?t.cast:null})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(d.default,{data:t?t.awards:null})))}},48988:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n(8460).default},30598:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294),a=n(91534),l=n(80383),s=n(81648),c=n(62947);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}const i=function(e){const{data:t,loading:n}=e;return r.createElement(l.Z,{className:"page-module",fill:!0},r.createElement(s.Z,{fill:!0},r.createElement(a.Z,{className:"section-0"},r.createElement(c.default,m({data:t?t.dashboard:null},e)))))}},8460:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(83347),l=n(30598);function s(e){return r.createElement(a.Z,{xs:r.createElement(l.default,e)})}}}]);