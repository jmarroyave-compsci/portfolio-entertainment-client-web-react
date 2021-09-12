"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[4868,7271,1194,7737],{7271:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(67294),n=a(45697),i=a.n(n),o=a(87638),s=a.n(o),l=a(24417);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,a,n,i,o=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(n);if(i){var a=p(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return f(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=o.call(this,e)).state={width:100,data:{},dataRef:null},t.ref=r.createRef(),t}return t=u,(a=[{key:"componentDidUpdate",value:function(){var e=this.ref.current?this.ref.current.offsetWidth:this.state.width;e!==this.state.width&&this.setState({width:e});var t=this.props.data;JSON.stringify(this.props.data)!==JSON.stringify(this.state.dataRef)&&this.setState({data:this.parseMapToData(this.props.title,t),dataRef:t})}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.error,n=(e.title,this.state),i=n.data,o=n.width;return t||!i.children?r.createElement("p",null,"Loading..."):a?r.createElement("p",null,"Error ",a.toString()):i?r.createElement("div",{id:"___",ref:this.ref},r.createElement(s(),{id:"myTreeMap",width:o,height:(.5*o).toFixed(0),data:i,levelsToDisplay:1,nodeStyle:{paddingLeft:5,paddingRight:5}})):r.createElement("p",null,"no data")}},{key:"parseMapToData",value:function(e,t){if(!t)return null;var a=[],r=[10,25,100],n={};return Object.keys(t).forEach((function(e){for(var i=t[e],o={name:e.startsWith("_")?e.substring(1):l.default.toHeaderCase(e),value:i},s=0;s<r.length;s++){var u=r[s];if(!(i>u))return n[u]||(n[u]={name:"".concat(0===s?1:r[s-1]+1,"-").concat(u),value:0,children:[]}),void n[u].children.push(o)}a.push(o)})),Object.keys(n).forEach((function(e){a.push(n[e])})),{name:e,children:a}}}])&&c(t.prototype,a),u}(r.Component);_.propTypes={data:i().object,title:i().string},_.defaultProps={data:{},title:"title"};const h=_},71194:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var r=a(67294),n=a(45697),i=a.n(n),o=a(7271);function s(e){var t=e.loading,a=e.error,n=e.data,i=e.format;return t?r.createElement("p",null,"Loading..."):a?r.createElement("p",null,"Error ",a.toString()):n&&0!==n.length?r.createElement("div",null,"text"===i&&function(e){return r.createElement(r.Fragment,null,r.createElement("p",null," Movies by country"),r.createElement("div",null,r.createElement("ul",null,Object.keys(e).map((function(t,a){return r.createElement("li",{key:a}," ",t," : ",e[t]," ")})))))}(n),"graph"===i&&function(e,t){return r.createElement(o.default,{title:"by Year Added",data:t})}(0,n)):"NO DATA"}s.propTypes={data:i().object,format:i().oneOf(["text","graph"])},s.defaultProps={data:{},format:"text"}},34868:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i,Text:()=>l,Graph:()=>u,NoData:()=>c});var r=a(71194),n=a(77737);const i={title:"Page/Dashboard/YearsAdded",component:r.default,argTypes:{}};var o=function(e){return React.createElement(r.default,e)},s=n.data.dashboard.yearsAdded,l=o.bind({});l.args={data:s,format:"text"};var u=o.bind({});u.args={data:s,format:"graph"};var c=o.bind({});c.args={data:null}},77737:e=>{e.exports=JSON.parse('{"data":{"dashboard":{"actors":32600,"countries":{"brazil":88,"mexico":154,"singapore":39,"unitedStates":3297,"turkey":108,"egypt":110,"india":990,"poland":36,"thailand":65,"nigeria":76,"norway":29,"iceland":9,"unitedKingdom":723,"japan":287,"southKorea":212,"italy":90,"canada":412,"indonesia":80,"romania":12,"spain":215,"southAfrica":54,"france":349,"portugal":4,"hongKong":102,"china":147,"germany":199,"argentina":82,"serbia":7,"denmark":44,"kenya":5,"newZealand":28,"pakistan":24,"australia":144,"taiwan":85,"netherlands":45,"philippines":78,"unitedArabEmirates":34,"iran":4,"belgium":85,"israel":26,"uruguay":14,"bulgaria":9,"chile":26,"russia":27,"mauritius":1,"lebanon":26,"colombia":45,"algeria":2,"sovietUnion":3,"sweden":39,"malaysia":26,"ireland":40,"luxembourg":11,"finland":11,"austria":11,"peru":10,"senegal":3,"switzerland":17,"ghana":4,"saudiArabia":10,"armenia":1,"jordan":8,"mongolia":1,"namibia":2,"qatar":7,"vietnam":5,"syria":1,"kuwait":7,"malta":3,"czechRepublic":20,"bahamas":1,"sriLanka":1,"caymanIslands":2,"bangladesh":3,"zimbabwe":3,"hungary":9,"latvia":1,"liechtenstein":1,"venezuela":3,"morocco":6,"cambodia":5,"albania":1,"cuba":1,"nicaragua":1,"greece":10,"croatia":4,"guatemala":2,"westGermany":5,"slovenia":3,"dominicanRepublic":1,"nepal":2,"samoa":1,"azerbaijan":1,"bermuda":1,"ecuador":1,"georgia":2,"botswana":1,"puertoRico":1,"iraq":2,"vaticanCity":1,"angola":1,"ukraine":3,"jamaica":1,"belarus":1,"cyprus":1,"kazakhstan":1,"malawi":1,"slovakia":1,"lithuania":1,"afghanistan":1,"paraguay":1,"somalia":1,"sudan":1,"panama":1,"uganda":1,"eastGermany":1,"montenegro":1},"directors":4324,"genres":{"internationalTvShows":1199,"tvDramas":704,"tvSciFiFantasy":76,"dramas":2106,"internationalMovies":2437,"horrorMovies":312,"actionAdventure":721,"independentMovies":673,"sciFiFantasy":218,"tvMysteries":90,"thrillers":491,"crimeTvShows":427,"docuseries":353,"documentaries":786,"sportsMovies":196,"comedies":1471,"animeSeries":148,"realityTv":222,"tvComedies":525,"romanticMovies":531,"romanticTvShows":333,"scienceNatureTv":85,"movies":56,"britishTvShows":232,"koreanTvShows":150,"musicMusicals":321,"lgbtqMovies":90,"faithSpirituality":57,"kidsTv":414,"tvActionAdventure":150,"spanishLanguageTvShows":147,"childrenFamilyMovies":532,"tvShows":12,"classicMovies":103,"cultMovies":59,"tvHorror":69,"standUpComedyTalkShows":52,"teenTvShows":60,"standUpComedy":329,"animeFeatures":57,"tvThrillers":50,"classicCultTv":27},"lastUpdate":"2021-09-09T18:55:21.456Z","movies":7787,"people":36924,"types":{"tvShow":2410,"movie":5377},"yearsAdded":{"_2003":2,"_2008":3,"_2009":2,"_2010":2,"_2011":13,"_2012":4,"_2013":12,"_2014":25,"_2015":90,"_2016":444,"_2017":1225,"_2018":1686,"_2019":2153,"_2020":2009,"_2021":117},"yearsReleased":{"_1925":1,"_1942":2,"_1943":3,"_1944":3,"_1945":3,"_1946":2,"_1947":1,"_1954":2,"_1955":3,"_1956":2,"_1958":3,"_1959":1,"_1960":4,"_1962":3,"_1963":2,"_1964":1,"_1965":2,"_1966":1,"_1967":5,"_1968":5,"_1969":2,"_1970":2,"_1971":5,"_1972":4,"_1973":10,"_1974":7,"_1975":6,"_1976":9,"_1977":7,"_1978":6,"_1979":11,"_1980":9,"_1981":9,"_1982":15,"_1983":9,"_1984":9,"_1985":9,"_1986":10,"_1987":7,"_1988":16,"_1989":13,"_1990":20,"_1991":17,"_1992":18,"_1993":22,"_1994":16,"_1995":19,"_1996":19,"_1997":30,"_1998":31,"_1999":33,"_2000":34,"_2001":36,"_2002":45,"_2003":49,"_2004":59,"_2005":73,"_2006":85,"_2007":85,"_2008":125,"_2009":137,"_2010":173,"_2011":166,"_2012":219,"_2013":267,"_2014":334,"_2015":541,"_2016":882,"_2017":1012,"_2018":1121,"_2019":996,"_2020":868,"_2021":31}}}}')}}]);