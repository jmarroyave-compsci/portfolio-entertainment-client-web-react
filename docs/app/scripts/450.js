(self.webpackChunkreact=self.webpackChunkreact||[]).push([[450],{65450:()=>{self.addEventListener("activate",(function(e){var n=["my-pwa-cache-v1"];e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(!n.includes(e))return console.log("Deleting cache: "+e),caches.delete(e)})))})))})),self.addEventListener("install",(function(e){})),self.addEventListener("fetch",(function(e){}))}}]);