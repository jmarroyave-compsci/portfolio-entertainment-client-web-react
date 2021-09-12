/*! For license information please see 2077.js.LICENSE.txt */
(self.webpackChunkreact=self.webpackChunkreact||[]).push([[2077],{92077:function(e,r,t){var n,i;void 0===(i="function"==typeof(n=function(){var e,r,t,n,i,o={},a={},l={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},u={currentLocale:l.currentLocale,zeroFormat:l.zeroFormat,nullFormat:l.nullFormat,defaultFormat:l.defaultFormat,scalePercentBy100:l.scalePercentBy100};function s(e,r){this._input=e,this._value=r}return(e=function(t){var n,i,a,l;if(e.isNumeral(t))n=t.value();else if(0===t||void 0===t)n=0;else if(null===t||r.isNaN(t))n=null;else if("string"==typeof t)if(u.zeroFormat&&t===u.zeroFormat)n=0;else if(u.nullFormat&&t===u.nullFormat||!t.replace(/[^0-9]+/g,"").length)n=null;else{for(i in o)if((l="function"==typeof o[i].regexps.unformat?o[i].regexps.unformat():o[i].regexps.unformat)&&t.match(l)){a=o[i].unformat;break}n=(a=a||e._.stringToNumber)(t)}else n=Number(t)||null;return new s(t,n)}).version="2.0.6",e.isNumeral=function(e){return e instanceof s},e._=r={numberToFormat:function(r,t,n){var i,o,l,u,s,c,f,m,h=a[e.options.currentLocale],b=!1,d=!1,p="",g=1e12,v=1e9,_=1e6,F="",y=!1;if(r=r||0,o=Math.abs(r),e._.includes(t,"(")?(b=!0,t=t.replace(/[\(|\)]/g,"")):(e._.includes(t,"+")||e._.includes(t,"-"))&&(s=e._.includes(t,"+")?t.indexOf("+"):r<0?t.indexOf("-"):-1,t=t.replace(/[\+|\-]/g,"")),e._.includes(t,"a")&&(i=!!(i=t.match(/a(k|m|b|t)?/))&&i[1],e._.includes(t," a")&&(p=" "),t=t.replace(new RegExp(p+"a[kmbt]?"),""),o>=g&&!i||"t"===i?(p+=h.abbreviations.trillion,r/=g):o<g&&o>=v&&!i||"b"===i?(p+=h.abbreviations.billion,r/=v):o<v&&o>=_&&!i||"m"===i?(p+=h.abbreviations.million,r/=_):(o<_&&o>=1e3&&!i||"k"===i)&&(p+=h.abbreviations.thousand,r/=1e3)),e._.includes(t,"[.]")&&(d=!0,t=t.replace("[.]",".")),l=r.toString().split(".")[0],u=t.split(".")[1],c=t.indexOf(","),m=(t.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(e._.includes(u,"[")?(u=(u=u.replace("]","")).split("["),F=e._.toFixed(r,u[0].length+u[1].length,n,u[1].length)):F=e._.toFixed(r,u.length,n),l=F.split(".")[0],F=e._.includes(F,".")?h.delimiters.decimal+F.split(".")[1]:"",d&&0===Number(F.slice(1))&&(F="")):l=e._.toFixed(r,0,n),p&&!i&&Number(l)>=1e3&&p!==h.abbreviations.trillion)switch(l=String(Number(l)/1e3),p){case h.abbreviations.thousand:p=h.abbreviations.million;break;case h.abbreviations.million:p=h.abbreviations.billion;break;case h.abbreviations.billion:p=h.abbreviations.trillion}if(e._.includes(l,"-")&&(l=l.slice(1),y=!0),l.length<m)for(var x=m-l.length;x>0;x--)l="0"+l;return c>-1&&(l=l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+h.delimiters.thousands)),0===t.indexOf(".")&&(l=""),f=l+F+(p||""),b?f=(b&&y?"(":"")+f+(b&&y?")":""):s>=0?f=0===s?(y?"-":"+")+f:f+(y?"-":"+"):y&&(f="-"+f),f},stringToNumber:function(e){var r,t,n,i=a[u.currentLocale],o=e,l={thousand:3,million:6,billion:9,trillion:12};if(u.zeroFormat&&e===u.zeroFormat)t=0;else if(u.nullFormat&&e===u.nullFormat||!e.replace(/[^0-9]+/g,"").length)t=null;else{for(r in t=1,"."!==i.delimiters.decimal&&(e=e.replace(/\./g,"").replace(i.delimiters.decimal,".")),l)if(n=new RegExp("[^a-zA-Z]"+i.abbreviations[r]+"(?:\\)|(\\"+i.currency.symbol+")?(?:\\))?)?$"),o.match(n)){t*=Math.pow(10,l[r]);break}t*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),t*=Number(e)}return t},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,r){return-1!==e.indexOf(r)},insert:function(e,r,t){return e.slice(0,t)+r+e.slice(t)},reduce:function(e,r){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof r)throw new TypeError(r+" is not a function");var t,n=Object(e),i=n.length>>>0,o=0;if(3===arguments.length)t=arguments[2];else{for(;o<i&&!(o in n);)o++;if(o>=i)throw new TypeError("Reduce of empty array with no initial value");t=n[o++]}for(;o<i;o++)o in n&&(t=r(t,n[o],o,n));return t},multiplier:function(e){var r=e.toString().split(".");return r.length<2?1:Math.pow(10,r[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(e,t){var n=r.multiplier(t);return e>n?e:n}),1)},toFixed:function(e,r,t,n){var i,o,a,l,u=e.toString().split("."),s=r-(n||0);return i=2===u.length?Math.min(Math.max(u[1].length,s),r):s,a=Math.pow(10,i),l=(t(e+"e+"+i)/a).toFixed(i),n>r-i&&(o=new RegExp("\\.?0{1,"+(n-(r-i))+"}$"),l=l.replace(o,"")),l}},e.options=u,e.formats=o,e.locales=a,e.locale=function(e){return e&&(u.currentLocale=e.toLowerCase()),u.currentLocale},e.localeData=function(e){if(!e)return a[u.currentLocale];if(e=e.toLowerCase(),!a[e])throw new Error("Unknown locale : "+e);return a[e]},e.reset=function(){for(var e in l)u[e]=l[e]},e.zeroFormat=function(e){u.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){u.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){u.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,r,t){if(r=r.toLowerCase(),this[e+"s"][r])throw new TypeError(r+" "+e+" already registered.");return this[e+"s"][r]=t,t},e.validate=function(r,t){var n,i,o,a,l,u,s,c;if("string"!=typeof r&&(r+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",r)),(r=r.trim()).match(/^\d+$/))return!0;if(""===r)return!1;try{s=e.localeData(t)}catch(r){s=e.localeData(e.locale())}return o=s.currency.symbol,l=s.abbreviations,n=s.delimiters.decimal,i="."===s.delimiters.thousands?"\\.":s.delimiters.thousands,!(null!==(c=r.match(/^[^\d]+/))&&(r=r.substr(1),c[0]!==o)||null!==(c=r.match(/[^\d]+$/))&&(r=r.slice(0,-1),c[0]!==l.thousand&&c[0]!==l.million&&c[0]!==l.billion&&c[0]!==l.trillion)||(u=new RegExp(i+"{2}"),r.match(/[^\d.,]/g)||(a=r.split(n)).length>2||(a.length<2?!a[0].match(/^\d+.*\d$/)||a[0].match(u):1===a[0].length?!a[0].match(/^\d+$/)||a[0].match(u)||!a[1].match(/^\d+$/):!a[0].match(/^\d+.*\d$/)||a[0].match(u)||!a[1].match(/^\d+$/))))},e.fn=s.prototype={clone:function(){return e(this)},format:function(r,t){var n,i,a,l=this._value,s=r||u.defaultFormat;if(t=t||Math.round,0===l&&null!==u.zeroFormat)i=u.zeroFormat;else if(null===l&&null!==u.nullFormat)i=u.nullFormat;else{for(n in o)if(s.match(o[n].regexps.format)){a=o[n].format;break}i=(a=a||e._.numberToFormat)(l,s,t)}return i},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var t=r.correctionFactor.call(null,this._value,e);return this._value=r.reduce([this._value,e],(function(e,r,n,i){return e+Math.round(t*r)}),0)/t,this},subtract:function(e){var t=r.correctionFactor.call(null,this._value,e);return this._value=r.reduce([e],(function(e,r,n,i){return e-Math.round(t*r)}),Math.round(this._value*t))/t,this},multiply:function(e){return this._value=r.reduce([this._value,e],(function(e,t,n,i){var o=r.correctionFactor(e,t);return Math.round(e*o)*Math.round(t*o)/Math.round(o*o)}),1),this},divide:function(e){return this._value=r.reduce([this._value,e],(function(e,t,n,i){var o=r.correctionFactor(e,t);return Math.round(e*o)/Math.round(t*o)})),this},difference:function(r){return Math.abs(e(this._value).subtract(r).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var r=e%10;return 1==~~(e%100/10)?"th":1===r?"st":2===r?"nd":3===r?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(r,t,n){var i,o=e._.includes(t," BPS")?" ":"";return r*=1e4,t=t.replace(/\s?BPS/,""),i=e._.numberToFormat(r,t,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"BPS"),i=i.join("")):i=i+o+"BPS",i},unformat:function(r){return+(1e-4*e._.stringToNumber(r)).toFixed(15)}}),n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},i="("+(i=(t={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(n.suffixes.filter((function(e){return t.suffixes.indexOf(e)<0}))).join("|")).replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(i)},format:function(r,i,o){var a,l,u,s=e._.includes(i,"ib")?n:t,c=e._.includes(i," b")||e._.includes(i," ib")?" ":"";for(i=i.replace(/\s?i?b/,""),a=0;a<=s.suffixes.length;a++)if(l=Math.pow(s.base,a),u=Math.pow(s.base,a+1),null===r||0===r||r>=l&&r<u){c+=s.suffixes[a],l>0&&(r/=l);break}return e._.numberToFormat(r,i,o)+c},unformat:function(r){var i,o,a=e._.stringToNumber(r);if(a){for(i=t.suffixes.length-1;i>=0;i--){if(e._.includes(r,t.suffixes[i])){o=Math.pow(t.base,i);break}if(e._.includes(r,n.suffixes[i])){o=Math.pow(n.base,i);break}}a*=o||1}return a}}),e.register("format","currency",{regexps:{format:/(\$)/},format:function(r,t,n){var i,o,a=e.locales[e.options.currentLocale],l={before:t.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:t.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(t=t.replace(/\s?\$\s?/,""),i=e._.numberToFormat(r,t,n),r>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):r<0&&!e._.includes(l.before,"-")&&!e._.includes(l.before,"(")&&(l.before="-"+l.before),o=0;o<l.before.length;o++)switch(l.before[o]){case"$":i=e._.insert(i,a.currency.symbol,o);break;case" ":i=e._.insert(i," ",o+a.currency.symbol.length-1)}for(o=l.after.length-1;o>=0;o--)switch(l.after[o]){case"$":i=o===l.after.length-1?i+a.currency.symbol:e._.insert(i,a.currency.symbol,-(l.after.length-(1+o)));break;case" ":i=o===l.after.length-1?i+" ":e._.insert(i," ",-(l.after.length-(1+o)+a.currency.symbol.length-1))}return i}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(r,t,n){var i=("number"!=typeof r||e._.isNaN(r)?"0e+0":r.toExponential()).split("e");return t=t.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(i[0]),t,n)+"e"+i[1]},unformat:function(r){var t=e._.includes(r,"e+")?r.split("e+"):r.split("e-"),n=Number(t[0]),i=Number(t[1]);return i=e._.includes(r,"e-")?i*=-1:i,e._.reduce([n,Math.pow(10,i)],(function(r,t,n,i){var o=e._.correctionFactor(r,t);return r*o*(t*o)/(o*o)}),1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(r,t,n){var i=e.locales[e.options.currentLocale],o=e._.includes(t," o")?" ":"";return t=t.replace(/\s?o/,""),o+=i.ordinal(r),e._.numberToFormat(r,t,n)+o}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(r,t,n){var i,o=e._.includes(t," %")?" ":"";return e.options.scalePercentBy100&&(r*=100),t=t.replace(/\s?\%/,""),i=e._.numberToFormat(r,t,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"%"),i=i.join("")):i=i+o+"%",i},unformat:function(r){var t=e._.stringToNumber(r);return e.options.scalePercentBy100?.01*t:t}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,r,t){var n=Math.floor(e/60/60),i=Math.floor((e-60*n*60)/60),o=Math.round(e-60*n*60-60*i);return n+":"+(i<10?"0"+i:i)+":"+(o<10?"0"+o:o)},unformat:function(e){var r=e.split(":"),t=0;return 3===r.length?(t+=60*Number(r[0])*60,t+=60*Number(r[1]),t+=Number(r[2])):2===r.length&&(t+=60*Number(r[0]),t+=Number(r[1])),Number(t)}}),e})?n.call(r,t,r,e):n)||(e.exports=i)}}]);