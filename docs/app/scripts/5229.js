"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[5229,7311,2237],{86688:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),r=t(72797);n.Component;const s=e=>class extends n.Component{render(){const a="title"in this.props?this.props.title:null,t="placeholder"in this.props?this.props.placeholder:{};return t.width&&t.width,t.height&&t.height,n.createElement(r.Z,{from:a,style:{width:"100%"}},n.createElement(e,this.props))}}},80383:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),r=t(86688),s=t(41749);class i extends n.Component{render(){var{direction:e,spacing:a,className:t,justify:r,alignItems:i,style:l,flex:o}=this.props,a=a||0;return l=l||{},o&&(l.display="flex"),n.createElement(s.Z,{container:!0,direction:e,justifyContent:r,alignItems:i,className:t,spacing:a,style:l},this.props.children)}}const l=(0,r.Z)(i)},81648:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),r=t(86688),s=t(41749);class i extends n.Component{render(){var{visible:e,className:a,xs:t,sm:r,md:i,style:l,fill:o,flex:c,center:d}=this.props;e=e||!0;var m={...l};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,o&&(m.width="100%"),c&&(m.flex=1),e&&n.createElement(s.Z,{className:a,item:!0,xs:t,sm:r,md:i,style:m},this.props.children)}}const l=(0,r.Z)(i)},83347:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),r=t(12613),s=t(86688);class i extends n.Component{render(){var{xs:e,sm:a,md:t,lg:s,xl:i}=this.props;return e=e||null,a=a||e,t=t||a,s=s||t,i=i||s,n.createElement("div",{style:{width:"100%"}},n.createElement(r.Z,{only:["sm","md","lg","xl"]},e),n.createElement(r.Z,{only:["xs","md","lg","xl"]},a),n.createElement(r.Z,{only:["xs","sm","lg","xl"]},t),n.createElement(r.Z,{only:["xs","sm","md","xl"]},s),n.createElement(r.Z,{only:["xs","sm","md","lg"]},i))}}const l=(0,s.Z)(i)},91534:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294),r=t(83347),s=t(86688),i=t(72797);class l extends n.Component{render(){const{className:e,cover:a,padding:t,children:s,hero:i}=this.props,l=!0===a?"100vh":"inherit";return n.createElement(r.Z,{xs:this.renderSection(s,e,l,"2rem 0rem"),sm:this.renderSection(s,e,l,"3rem 0rem"),md:this.renderSection(s,e,l,"4rem 2.5rem")})}renderSection(e,a,t,r){return n.createElement(i.Z,{from:"/core/ui/section"},n.createElement("div",{className:"com-layout-section"},n.createElement("div",{className:`${a}`,style:{boxSizing:"border-box",width:"100%",height:t,padding:r}},e)))}}const o=(0,s.Z)(l)},61598:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var n=t(67294),r=t(80383),s=t(81648),i=t(87125),l=t(93775);class o extends n.Component{render(){const{data:e,loading:a}=this.props,{total:t,awards:o,classification:c,country:d,genre:m,type:_,rating:u,yearReleased:p,streamBy:g}=e||{},h=(e,t,r)=>n.createElement(s.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"}},n.createElement(l.default,{loading:a,title:e,data:t||{},ranges:r}));return n.createElement("div",{style:{width:"100%"}},n.createElement(r.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(s.Z,{xs:12,sm:12,md:12},n.createElement(r.Z,{justifyContent:"center",fill:!0},((e,t,r)=>n.createElement(s.Z,{xs:12,sm:6,md:4,lg:3,style:{paddingRight:"1rem"}},n.createElement(i.default,{loading:a,title:"movies",data:t?t.toString():t,icon:"local_movies"})))(0,t))),n.createElement(s.Z,{xs:12,sm:12,md:12},n.createElement(r.Z,{justifyContent:"center",fill:!0},h("awards",o,[1,5,10,20,30,70,100,250]),h("classification",c,[]),h("countries",d,[1,5,10,20,30,70,100,250]),h("genres",m,[100,250]),h("stream by",g,[]),h("types",_,[]),h("rated by",u,[]),h("years released",p,[10,25,50])))))}}const c=o},87701:(e,a,t)=>{t.r(a),t.d(a,{default:()=>o});var n=t(67294),r=t(91534),s=t(80383),i=t(81648),l=t(61598);const o=function(e){return n.createElement(s.Z,{className:"page-module",fill:!0},n.createElement(i.Z,{fill:!0},n.createElement(r.Z,{className:"section-0"},n.createElement(l.default,e))))}},21985:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});var n=t(67294),r=t(83347),s=t(87701);function i(e){return n.createElement(r.Z,{xs:n.createElement(s.default,e)})}},33949:(e,a,t)=>{t.r(a),t.d(a,{default:()=>s,Controls:()=>l,Loading:()=>o});var n=t(21985),r=t(7046);const s={title:"Project/Pages/Movies/Page"},i=e=>React.createElement(n.default,e),l=i.bind({});l.args={data:r};const o=i.bind({});o.args={loading:!0}},7046:e=>{e.exports=JSON.parse('{"dashboard":{"actors":32600,"countries":{"brazil":88,"mexico":154,"singapore":39,"unitedStates":3297,"turkey":108,"egypt":110,"india":990,"poland":36,"thailand":65,"nigeria":76,"norway":29,"iceland":9,"unitedKingdom":723,"japan":287,"southKorea":212,"italy":90,"canada":412,"indonesia":80,"romania":12,"spain":215,"southAfrica":54,"france":349,"portugal":4,"hongKong":102,"china":147,"germany":199,"argentina":82,"serbia":7,"denmark":44,"kenya":5,"newZealand":28,"pakistan":24,"australia":144,"taiwan":85,"netherlands":45,"philippines":78,"unitedArabEmirates":34,"iran":4,"belgium":85,"israel":26,"uruguay":14,"bulgaria":9,"chile":26,"russia":27,"mauritius":1,"lebanon":26,"colombia":45,"algeria":2,"sovietUnion":3,"sweden":39,"malaysia":26,"ireland":40,"luxembourg":11,"finland":11,"austria":11,"peru":10,"senegal":3,"switzerland":17,"ghana":4,"saudiArabia":10,"armenia":1,"jordan":8,"mongolia":1,"namibia":2,"qatar":7,"vietnam":5,"syria":1,"kuwait":7,"malta":3,"czechRepublic":20,"bahamas":1,"sriLanka":1,"caymanIslands":2,"bangladesh":3,"zimbabwe":3,"hungary":9,"latvia":1,"liechtenstein":1,"venezuela":3,"morocco":6,"cambodia":5,"albania":1,"cuba":1,"nicaragua":1,"greece":10,"croatia":4,"guatemala":2,"westGermany":5,"slovenia":3,"dominicanRepublic":1,"nepal":2,"samoa":1,"azerbaijan":1,"bermuda":1,"ecuador":1,"georgia":2,"botswana":1,"puertoRico":1,"iraq":2,"vaticanCity":1,"angola":1,"ukraine":3,"jamaica":1,"belarus":1,"cyprus":1,"kazakhstan":1,"malawi":1,"slovakia":1,"lithuania":1,"afghanistan":1,"paraguay":1,"somalia":1,"sudan":1,"panama":1,"uganda":1,"eastGermany":1,"montenegro":1},"directors":4324,"genres":{"international":3636,"dramas":2810,"sciFiFantasy":294,"horror":381,"actionAdventure":871,"independent":673,"mysteries":90,"thrillers":541,"crime":427,"documentaries":1139,"sports":196,"comedies":1996,"anime":205,"realityTv":222,"romantic":864,"scienceNature":85,"british":232,"korean":150,"musicals":321,"lgbtq":90,"faithSpirituality":57,"childrenFamily":946,"spanish":147,"classicCult":189,"standUpComedyTalkShows":381,"teen":60},"lastUpdate":"2021-09-15T15:01:49.939Z","movies":7787,"people":36924,"types":{"tvShow":2410,"movie":5377},"yearsAdded":{"_2003":2,"_2008":3,"_2009":2,"_2010":2,"_2011":13,"_2012":4,"_2013":12,"_2014":25,"_2015":90,"_2016":444,"_2017":1225,"_2018":1686,"_2019":2153,"_2020":2009,"_2021":117},"yearsReleased":{"_1925":1,"_1942":2,"_1943":3,"_1944":3,"_1945":3,"_1946":2,"_1947":1,"_1954":2,"_1955":3,"_1956":2,"_1958":3,"_1959":1,"_1960":4,"_1962":3,"_1963":2,"_1964":1,"_1965":2,"_1966":1,"_1967":5,"_1968":5,"_1969":2,"_1970":2,"_1971":5,"_1972":4,"_1973":10,"_1974":7,"_1975":6,"_1976":9,"_1977":7,"_1978":6,"_1979":11,"_1980":9,"_1981":9,"_1982":15,"_1983":9,"_1984":9,"_1985":9,"_1986":10,"_1987":7,"_1988":16,"_1989":13,"_1990":20,"_1991":17,"_1992":18,"_1993":22,"_1994":16,"_1995":19,"_1996":19,"_1997":30,"_1998":31,"_1999":33,"_2000":34,"_2001":36,"_2002":45,"_2003":49,"_2004":59,"_2005":73,"_2006":85,"_2007":85,"_2008":125,"_2009":137,"_2010":173,"_2011":166,"_2012":219,"_2013":267,"_2014":334,"_2015":541,"_2016":882,"_2017":1012,"_2018":1121,"_2019":996,"_2020":868,"_2021":31}}}')}}]);