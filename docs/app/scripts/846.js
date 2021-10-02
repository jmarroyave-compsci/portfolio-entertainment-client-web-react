"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[846],{70846:(t,e,r)=>{r.d(e,{a:()=>b});var i,n=r(70655),s=r(24909),o=r(67294),u=r(82152),a=r(21498),l=r(85942);!function(t){t[t.Query=0]="Query",t[t.Mutation=1]="Mutation",t[t.Subscription=2]="Subscription"}(i||(i={}));var c=new Map;function p(t){var e;switch(t){case i.Query:e="Query";break;case i.Mutation:e="Mutation";break;case i.Subscription:e="Subscription"}return e}var h=function(t){function e(e){var r=e.options,i=e.context,n=e.onNewData,s=t.call(this,r,i)||this;return s.runLazy=!1,s.previous=Object.create(null),s.runLazyQuery=function(t){s.cleanup(),s.runLazy=!0,s.lazyOptions=t,s.onNewData()},s.obsRefetch=function(t){var e;return null===(e=s.currentObservable)||void 0===e?void 0:e.refetch(t)},s.obsFetchMore=function(t){var e;return null===(e=s.currentObservable)||void 0===e?void 0:e.fetchMore(t)},s.obsUpdateQuery=function(t){var e;return null===(e=s.currentObservable)||void 0===e?void 0:e.updateQuery(t)},s.obsStartPolling=function(t){var e;null===(e=s.currentObservable)||void 0===e||e.startPolling(t)},s.obsStopPolling=function(){var t;null===(t=s.currentObservable)||void 0===t||t.stopPolling()},s.obsSubscribeToMore=function(t){var e;return null===(e=s.currentObservable)||void 0===e?void 0:e.subscribeToMore(t)},s.onNewData=n,s}return(0,n.__extends)(e,t),e.prototype.execute=function(){this.refreshClient();var t=this.getOptions(),e=t.skip,r=t.query;return(e||r!==this.previous.query)&&(this.removeQuerySubscription(),this.removeObservable(!e),this.previous.query=r),this.updateObservableQuery(),this.getExecuteSsrResult()||this.getExecuteResult()},e.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:l.I.ready,called:!1,data:void 0}]},e.prototype.fetchData=function(){var t=this,e=this.getOptions();return!e.skip&&!1!==e.ssr&&new Promise((function(e){return t.startQuerySubscription(e)}))},e.prototype.afterExecute=function(t){var e=(void 0===t?{}:t).lazy,r=void 0!==e&&e;this.isMounted=!0;var i=this.getOptions();return this.currentObservable&&!this.ssrInitiated()&&this.startQuerySubscription(),r&&!this.runLazy||this.handleErrorOrCompleted(),this.previousOptions=i,this.unmount.bind(this)},e.prototype.cleanup=function(){this.removeQuerySubscription(),this.removeObservable(!0),delete this.previous.result},e.prototype.getOptions=function(){var e=t.prototype.getOptions.call(this);return this.lazyOptions&&(e.variables=(0,n.__assign)((0,n.__assign)({},e.variables),this.lazyOptions.variables),e.context=(0,n.__assign)((0,n.__assign)({},e.context),this.lazyOptions.context)),this.runLazy&&delete e.skip,e},e.prototype.ssrInitiated=function(){return this.context&&this.context.renderPromises},e.prototype.getExecuteSsrResult=function(){var t=this.getOptions(),e=t.ssr,r=t.skip,i=!1===e,s=this.refreshClient().client.disableNetworkFetches,o=(0,n.__assign)({loading:!0,networkStatus:l.I.loading,called:!0,data:void 0,stale:!1,client:this.client},this.observableQueryFields());if(i&&(this.ssrInitiated()||s))return this.previous.result=o,o;if(this.ssrInitiated()){var u=this.getExecuteResult()||o;return u.loading&&!r&&this.context.renderPromises.addQueryPromise(this,(function(){return null})),u}},e.prototype.prepareObservableQueryOptions=function(){var t=this.getOptions();this.verifyDocumentType(t.query,i.Query);var e=t.displayName||"Query";return!this.ssrInitiated()||"network-only"!==t.fetchPolicy&&"cache-and-network"!==t.fetchPolicy||(t.fetchPolicy="cache-first"),(0,n.__assign)((0,n.__assign)({},t),{displayName:e,context:t.context})},e.prototype.initializeObservableQuery=function(){if(this.ssrInitiated()&&(this.currentObservable=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable){var t=this.prepareObservableQueryOptions();this.previous.observableQueryOptions=(0,n.__assign)((0,n.__assign)({},t),{children:void 0}),this.currentObservable=this.refreshClient().client.watchQuery((0,n.__assign)({},t)),this.ssrInitiated()&&this.context.renderPromises.registerSSRObservable(this.currentObservable,t)}},e.prototype.updateObservableQuery=function(){if(this.currentObservable){var t=(0,n.__assign)((0,n.__assign)({},this.prepareObservableQueryOptions()),{children:void 0});this.getOptions().skip?this.previous.observableQueryOptions=t:(0,u.D)(t,this.previous.observableQueryOptions)||(this.previous.observableQueryOptions=t,this.currentObservable.setOptions(t).catch((function(){})))}else this.initializeObservableQuery()},e.prototype.startQuerySubscription=function(t){var e=this;void 0===t&&(t=this.onNewData),this.currentSubscription||this.getOptions().skip||(this.currentSubscription=this.currentObservable.subscribe({next:function(r){var i=r.loading,n=r.networkStatus,s=r.data,o=e.previous.result;o&&o.loading===i&&o.networkStatus===n&&(0,u.D)(o.data,s)||t()},error:function(r){if(e.resubscribeToQuery(),!r.hasOwnProperty("graphQLErrors"))throw r;var i=e.previous.result;(i&&i.loading||!(0,u.D)(r,e.previous.error))&&(e.previous.error=r,t())}}))},e.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var t=this.currentObservable;if(t){var e=t.last;try{t.resetLastResults(),this.startQuerySubscription()}finally{t.last=e}}},e.prototype.getExecuteResult=function(){var t=this.observableQueryFields(),e=this.getOptions();if(e.skip)t=(0,n.__assign)((0,n.__assign)({},t),{data:void 0,error:void 0,loading:!1,networkStatus:l.I.ready,called:!0});else if(this.currentObservable){var r=this.currentObservable.getCurrentResult(),i=r.data,s=r.loading,o=r.partial,u=r.networkStatus,c=r.errors,p=r.error;if(c&&c.length>0&&(p=new a.c({graphQLErrors:c})),t=(0,n.__assign)((0,n.__assign)({},t),{data:i,loading:s,networkStatus:u,error:p,called:!0}),s);else if(p)Object.assign(t,{data:(this.currentObservable.getLastResult()||{}).data});else{var h=this.currentObservable.options.fetchPolicy;if(e.partialRefetch&&o&&(!i||0===Object.keys(i).length)&&"cache-only"!==h)return Object.assign(t,{loading:!0,networkStatus:l.I.loading}),t.refetch(),t}}t.client=this.client,this.setOptions(e,!0);var v=this.previous.result;return this.previous.loading=v&&v.loading||!1,t.previousData=v&&(v.data||v.previousData),this.previous.result=t,this.currentObservable&&this.currentObservable.resetQueryStoreErrors(),t},e.prototype.handleErrorOrCompleted=function(){if(this.currentObservable&&this.previous.result){var t=this.previous.result,e=t.data,r=t.loading,i=t.error;if(!r){var n=this.getOptions(),s=n.query,o=n.variables,a=n.onCompleted,l=n.onError,c=n.skip;if(this.previousOptions&&!this.previous.loading&&(0,u.D)(this.previousOptions.query,s)&&(0,u.D)(this.previousOptions.variables,o))return;!a||i||c?l&&i&&l(i):a(e)}}},e.prototype.removeQuerySubscription=function(){this.currentSubscription&&(this.currentSubscription.unsubscribe(),delete this.currentSubscription)},e.prototype.removeObservable=function(t){this.currentObservable&&(this.currentObservable.tearDownQuery(),t&&delete this.currentObservable)},e.prototype.observableQueryFields=function(){var t;return{variables:null===(t=this.currentObservable)||void 0===t?void 0:t.variables,refetch:this.obsRefetch,fetchMore:this.obsFetchMore,updateQuery:this.obsUpdateQuery,startPolling:this.obsStartPolling,stopPolling:this.obsStopPolling,subscribeToMore:this.obsSubscribeToMore}},e}(function(){function t(t,e){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=t||{},this.context=e||{}}return t.prototype.getOptions=function(){return this.options},t.prototype.setOptions=function(t,e){void 0===e&&(e=!1),e&&!(0,u.D)(this.options,t)&&(this.previousOptions=this.options),this.options=t},t.prototype.unmount=function(){this.isMounted=!1},t.prototype.refreshClient=function(){var t=this.options&&this.options.client||this.context&&this.context.client;__DEV__?(0,s.kG)(!!t,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,s.kG)(!!t,29);var e=!1;return t!==this.client&&(e=!0,this.client=t,this.cleanup()),{client:this.client,isNew:e}},t.prototype.verifyDocumentType=function(t,e){var r=function(t){var e,r,n=c.get(t);if(n)return n;__DEV__?(0,s.kG)(!!t&&!!t.kind,"Argument of "+t+" passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,s.kG)(!!t&&!!t.kind,34);var o=t.definitions.filter((function(t){return"FragmentDefinition"===t.kind})),u=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"query"===t.operation})),a=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"mutation"===t.operation})),l=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"subscription"===t.operation}));__DEV__?(0,s.kG)(!o.length||u.length||a.length||l.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,s.kG)(!o.length||u.length||a.length||l.length,35),__DEV__?(0,s.kG)(u.length+a.length+l.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+t+" had "+u.length+" queries, "+l.length+" subscriptions and "+a.length+" mutations. You can use 'compose' to join multiple operation types to a component"):(0,s.kG)(u.length+a.length+l.length<=1,36),r=u.length?i.Query:i.Mutation,u.length||a.length||(r=i.Subscription);var p=u.length?u:a.length?a:l;__DEV__?(0,s.kG)(1===p.length,"react-apollo only supports one definition per HOC. "+t+" had "+p.length+" definitions. You can use 'compose' to join multiple operation types to a component"):(0,s.kG)(1===p.length,37);var h=p[0];e=h.variableDefinitions||[];var v={name:h.name&&"Name"===h.name.kind?h.name.value:"data",type:r,variables:e};return c.set(t,v),v}(t),n=p(e),o=p(r.type);__DEV__?(0,s.kG)(r.type===e,"Running a "+n+" requires a graphql "+n+", but a "+o+" was used instead."):(0,s.kG)(r.type===e,30)},t}()),v=r(24273);function b(t,e){return function(t,e,r){void 0===r&&(r=!1);var i=(0,o.useContext)((0,v.K)()),s=(0,o.useReducer)((function(t){return t+1}),0),a=s[0],l=s[1],c=e?(0,n.__assign)((0,n.__assign)({},e),{query:t}):{query:t},p=(0,o.useRef)(),b=p.current||(p.current=new h({options:c,context:i,onNewData:function(){b.ssrInitiated()?l():Promise.resolve().then((function(){return p.current&&p.current.isMounted&&l()}))}}));b.setOptions(c),b.context=i;var d,f,y,g=(d=function(){return r?b.executeLazy():b.execute()},f={options:(0,n.__assign)((0,n.__assign)({},c),{onError:void 0,onCompleted:void 0}),context:i,tick:a},(y=(0,o.useRef)()).current&&(0,u.D)(f,y.current.key)||(y.current={key:f,value:d()}),y.current.value),O=r?g[1]:g;return __DEV__&&function(t){if(__DEV__){var e=(0,o.useRef)(!1);(0,o.useEffect)((function(){return function(){e.current=!0}}),[]),(0,o.useEffect)((function(){!0===e.current&&(e.current=!1,t())}),[])}}(l),(0,o.useEffect)((function(){return function(){b.cleanup(),p.current=void 0}}),[]),(0,o.useEffect)((function(){return b.afterExecute({lazy:r})}),[O.loading,O.networkStatus,O.error,O.data,b.currentObservable]),g}(t,e,!1)}}}]);