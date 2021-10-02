"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[7371,91],{41749:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(45987),r=n(87462),i=n(67294),o=(n(45697),n(86010)),s=n(14670),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=i.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,m=e.className,u=e.component,_=void 0===u?"div":u,f=e.container,p=void 0!==f&&f,g=e.direction,h=void 0===g?"row":g,v=e.item,y=void 0!==v&&v,x=e.justify,w=e.justifyContent,b=void 0===w?"flex-start":w,Z=e.lg,C=void 0!==Z&&Z,E=e.md,S=void 0!==E&&E,k=e.sm,N=void 0!==k&&k,j=e.spacing,R=void 0===j?0:j,z=e.wrap,A=void 0===z?"wrap":z,I=e.xl,M=void 0!==I&&I,G=e.xs,D=void 0!==G&&G,V=e.zeroMinWidth,W=void 0!==V&&V,K=(0,a.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=(0,o.Z)(d.root,m,p&&[d.container,0!==R&&d["spacing-xs-".concat(String(R))]],y&&d.item,W&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==A&&d["wrap-xs-".concat(String(A))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==(x||b)&&d["justify-content-xs-".concat(String(x||b))],!1!==D&&d["grid-xs-".concat(String(D))],!1!==N&&d["grid-sm-".concat(String(N))],!1!==S&&d["grid-md-".concat(String(S))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==M&&d["grid-xl-".concat(String(M))]);return i.createElement(_,(0,r.Z)({className:F,ref:t},K))}));const u=(0,s.Z)((function(e){return(0,r.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(t){var a=e.spacing(t);0!==a&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(d(a,2)),width:"calc(100% + ".concat(d(a),")"),"& > $item":{padding:d(a,2)}})})),n}(e),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,r.Z)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(m)},86688:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(72797);a.Component;const i=e=>class extends a.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,a.createElement(r.Z,{from:t,style:{width:"100%"}},a.createElement(e,this.props))}}},36776:(e,t,n)=>{n.d(t,{Z:()=>a});const a={links_disabled:!1}},80383:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86688),i=n(41749);class o extends a.Component{render(){var{direction:e,spacing:t,className:n,justify:r,alignItems:o,style:s,flex:c}=this.props,t=t||0;return s=s||{},c&&(s.display="flex"),a.createElement(i.Z,{container:!0,direction:e,justifyContent:r,alignItems:o,className:n,spacing:t,style:s},this.props.children)}}const s=(0,r.Z)(o)},81648:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86688),i=n(41749);class o extends a.Component{render(){var{visible:e,className:t,xs:n,sm:r,md:o,style:s,fill:c,flex:l,center:d}=this.props;e=e||!0;var m={...s};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,c&&(m.width="100%"),l&&(m.flex=1),e&&a.createElement(i.Z,{className:t,item:!0,xs:n,sm:r,md:o,style:m},this.props.children)}}const s=(0,r.Z)(o)},87558:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(73727),i=n(36776);class o extends a.Component{render(){var{children:e,className:t,to:n,href:o,style:s,external:c}=this.props;if(e=(n=(n=n||o)||"http://localhost")?e:"NO LINK DEFINED",s=s||{},n&&"string"!=typeof n)return"INVALID URL";const l=!((c=!0===c)||n&&0===n.indexOf("http")),d=l?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==l&&0==i.Z.links_disabled?a.createElement(r.OL,{className:t,to:n,style:s},e):a.createElement("a",{className:t,href:n,style:s,target:d},e)}}const s=o},97236:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(87558);n(36776);class i extends a.Component{render(){var{children:e,className:t,to:n,href:i,border:o,style:s,external:c}=this.props;return e=(n=(n=n||i)||"http://localhost")?e:"NO LINK DEFINED",o=!0===o||"true"===o?"text-link":"",(s=s||{}).padding=s.padding?s.padding:"0.5rem 0.75rem",t=`${o} ${t||""}`,c=!0===c,a.createElement(r.Z,{className:t,to:n,style:s,external:c},e)}}const o=i},30091:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(67294),r=n(91380),i=n(80383),o=n(81648),s=n(97236);const c=(0,r.ZP)("div")({fontSize:"3rem",padding:"1rem 0 2rem 0"}),l=(0,r.ZP)("div")({fontSize:"1rem"}),d=(0,r.ZP)("div")({paddingTop:"2rem"}),m=function(e){const{data:t,loading:n}=e;return a.createElement("div",{style:{width:"100%"}},a.createElement(i.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},a.createElement(o.Z,{xs:12,sm:12,md:12},a.createElement(c,null,"Movies")),a.createElement(o.Z,{xs:12,sm:12,md:12},a.createElement(l,null,"a dashboard with information from over 8M movies, how they are segmented, awards and ratings")),a.createElement(o.Z,{xs:12,sm:12,md:12},a.createElement(d,null,a.createElement(s.Z,{border:!0,href:"/movies"}," See more")))))}},27371:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r,Controls:()=>i});var a=n(30091);n(36038);const r={title:"Project/Stories/Movies/Banner"},i=(e=>React.createElement(a.default,e)).bind({});i.args={}},86010:(e,t,n)=>{function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})},73727:(e,t,n)=>{n.d(t,{VK:()=>d,OL:()=>y});var a=n(5977),r=n(51721),i=n(67294),o=n(37531),s=(n(45697),n(87462)),c=n(63366),l=n(2177),d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).history=(0,o.lX)(t.props),t}return(0,r.Z)(t,e),t.prototype.render=function(){return i.createElement(a.F0,{history:this.history,children:this.props.children})},t}(i.Component);i.Component;var m=function(e,t){return"function"==typeof e?e(t):e},u=function(e,t){return"string"==typeof e?(0,o.ob)(e,null,null,t):e},_=function(e){return e},f=i.forwardRef;void 0===f&&(f=_);var p=f((function(e,t){var n=e.innerRef,a=e.navigate,r=e.onClick,o=(0,c.Z)(e,["innerRef","navigate","onClick"]),l=o.target,d=(0,s.Z)({},o,{onClick:function(e){try{r&&r(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),a())}});return d.ref=_!==f&&t||n,i.createElement("a",d)})),g=f((function(e,t){var n=e.component,r=void 0===n?p:n,d=e.replace,g=e.to,h=e.innerRef,v=(0,c.Z)(e,["component","replace","to","innerRef"]);return i.createElement(a.s6.Consumer,null,(function(e){e||(0,l.Z)(!1);var n=e.history,a=u(m(g,e.location),e.location),c=a?n.createHref(a):"",p=(0,s.Z)({},v,{href:c,navigate:function(){var t=m(g,e.location),a=(0,o.Ep)(e.location)===(0,o.Ep)(u(t));(d||a?n.replace:n.push)(t)}});return _!==f?p.ref=t||h:p.innerRef=h,i.createElement(r,p)}))})),h=function(e){return e},v=i.forwardRef;void 0===v&&(v=h);var y=v((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,o=e.activeClassName,d=void 0===o?"active":o,_=e.activeStyle,f=e.className,p=e.exact,y=e.isActive,x=e.location,w=e.sensitive,b=e.strict,Z=e.style,C=e.to,E=e.innerRef,S=(0,c.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(a.s6.Consumer,null,(function(e){e||(0,l.Z)(!1);var n=x||e.location,o=u(m(C,n),n),c=o.pathname,k=c&&c.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),N=k?(0,a.LX)(n.pathname,{path:k,exact:p,sensitive:w,strict:b}):null,j=!!(y?y(N,n):N),R="function"==typeof f?f(j):f,z="function"==typeof Z?Z(j):Z;j&&(R=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(R,d),z=(0,s.Z)({},z,_));var A=(0,s.Z)({"aria-current":j&&r||null,className:R,style:z,to:o},S);return h!==v?A.ref=t||E:A.innerRef=E,i.createElement(g,A)}))}))},36038:e=>{e.exports=JSON.parse('{"awards":{"oscar":6091,"goldenGlobe":993,"emmy":9382},"classification":{"undefined":8279338,"g":5,"nR":15,"pG":25,"pG13":20,"r":33,"tV14":379,"tVG":49,"tVMA":512,"tVPG":204,"tVY":113,"tVY7":87,"tVY7FV":2},"country":{"afghanistan":1,"albania":1,"algeria":2,"angola":1,"argentina":82,"armenia":1,"australia":144,"austria":11,"azerbaijan":1,"bahamas":1,"bangladesh":3,"belarus":1,"belgium":85,"bermuda":1,"botswana":1,"brazil":88,"bulgaria":9,"cambodia":5,"canada":412,"caymanIslands":2,"chile":26,"china":147,"colombia":45,"croatia":4,"cuba":1,"cyprus":1,"czechRepublic":20,"denmark":44,"dominicanRepublic":1,"eastGermany":1,"ecuador":1,"egypt":110,"finland":11,"france":349,"georgia":2,"germany":199,"ghana":4,"greece":10,"guatemala":2,"hongKong":102,"hungary":9,"iceland":9,"india":990,"indonesia":80,"iran":4,"iraq":2,"ireland":40,"israel":26,"italy":90,"jamaica":1,"japan":287,"jordan":8,"kazakhstan":1,"kenya":5,"kuwait":7,"latvia":1,"lebanon":26,"liechtenstein":1,"lithuania":1,"luxembourg":11,"malawi":1,"malaysia":26,"malta":3,"mauritius":1,"mexico":154,"mongolia":1,"montenegro":1,"morocco":6,"namibia":2,"nepal":2,"netherlands":45,"newZealand":28,"nicaragua":1,"nigeria":76,"norway":29,"pakistan":24,"panama":1,"paraguay":1,"peru":10,"philippines":78,"poland":36,"portugal":4,"puertoRico":1,"qatar":7,"romania":12,"russia":27,"samoa":1,"saudiArabia":10,"senegal":3,"serbia":7,"singapore":39,"slovakia":1,"slovenia":3,"somalia":1,"southAfrica":54,"southKorea":212,"sovietUnion":3,"spain":215,"sriLanka":1,"sudan":1,"sweden":39,"switzerland":17,"syria":1,"taiwan":85,"thailand":65,"turkey":108,"uganda":1,"ukraine":3,"unitedArabEmirates":34,"unitedKingdom":723,"unitedStates":3297,"uruguay":14,"vaticanCity":1,"venezuela":3,"vietnam":5,"westGermany":5,"zimbabwe":3},"genre":{"action":333804,"adult":245649,"adventure":319727,"animation":409589,"biography":88210,"comedy":1668342,"crime":355042,"documentary":770720,"drama":2270173,"family":577353,"fantasy":175210,"filmNoir":764,"gameShow":256524,"history":116157,"horror":147600,"music":397968,"musical":63799,"mystery":163637,"news":532983,"realityTv":428575,"romance":725152,"sciFi":97201,"short":1028689,"sport":180827,"talkShow":910731,"thriller":135721,"war":29917,"western":27738,"actionAdventure":871,"anime":205,"british":232,"childrenFamily":946,"classicCult":178,"comedies":1996,"documentaries":1139,"dramas":2810,"faithSpirituality":57,"independent":673,"international":3636,"korean":150,"lgbtq":90,"musicals":321,"mysteries":90,"romantic":864,"sciFiFantasy":294,"scienceNature":85,"spanish":147,"sports":196,"standUpComedyTalkShows":381,"teen":60,"thrillers":541},"rating":{},"streamBy":{"netflix":7787},"total":8280783,"type":{"movie":942,"radioEpisode":1,"short":831747,"tvEpisode":6075319,"tvMiniSeries":39821,"tvMovie":132978,"tvPilot":1,"tvSeries":215149,"tvShort":10280,"tvSpecial":34208,"video":322103,"videoGame":29275,"tVShow":503},"yearReleased":{"_1874":1,"_1877":1,"_1878":2,"_1881":2,"_1882":1,"_1883":1,"_1885":1,"_1887":45,"_1888":5,"_1889":2,"_1890":6,"_1891":10,"_1892":9,"_1893":3,"_1894":99,"_1895":115,"_1896":851,"_1897":1363,"_1898":1796,"_1899":1818,"_1900":1860,"_1901":1767,"_1902":1808,"_1903":2676,"_1904":1837,"_1905":1704,"_1906":1861,"_1907":2489,"_1908":4283,"_1909":5434,"_1910":6412,"_1911":7709,"_1912":8724,"_1913":9773,"_1914":9348,"_1915":8572,"_1916":7055,"_1917":5621,"_1918":4739,"_1919":4147,"_1920":4536,"_1921":4229,"_1922":3602,"_1923":3041,"_1924":3095,"_1925":3392,"_1926":3404,"_1927":3520,"_1928":3501,"_1929":3652,"_1930":3191,"_1931":3293,"_1932":3079,"_1933":2916,"_1934":2992,"_1935":2907,"_1936":3362,"_1937":3591,"_1938":3428,"_1939":3038,"_1940":2623,"_1941":2500,"_1942":2417,"_1943":2209,"_1944":2043,"_1945":2056,"_1946":2563,"_1947":2966,"_1948":3652,"_1949":4995,"_1950":7350,"_1951":8815,"_1952":9392,"_1953":9785,"_1954":11768,"_1955":12892,"_1956":12858,"_1957":14509,"_1958":15332,"_1959":15700,"_1960":16721,"_1961":17214,"_1962":16717,"_1963":19069,"_1964":20438,"_1965":23597,"_1966":25118,"_1967":26505,"_1968":25509,"_1969":28813,"_1970":28536,"_1971":29715,"_1972":30121,"_1973":31038,"_1974":29514,"_1975":29884,"_1976":29776,"_1977":29040,"_1978":30047,"_1979":29754,"_1980":31337,"_1981":30598,"_1982":34228,"_1983":34650,"_1984":36568,"_1985":37622,"_1986":37641,"_1987":40207,"_1988":39819,"_1989":42880,"_1990":46185,"_1991":48075,"_1992":49527,"_1993":54336,"_1994":58957,"_1995":66277,"_1996":69650,"_1997":74437,"_1998":83300,"_1999":88222,"_2000":90899,"_2001":1080698,"_2002":103532,"_2003":115908,"_2004":134319,"_2005":147988,"_2006":164353,"_2007":182603,"_2008":197467,"_2009":208853,"_2010":237535,"_2011":269608,"_2012":299694,"_2013":320839,"_2014":341704,"_2015":359010,"_2016":379277,"_2017":400640,"_2018":404398,"_2019":386898,"_2020":355965,"_2021":249717,"_2022":8416,"_2023":537,"_2024":99,"_2025":19,"_2026":11,"_2027":7,"_2028":3},"__typename":"DashboardMovies"}')}}]);