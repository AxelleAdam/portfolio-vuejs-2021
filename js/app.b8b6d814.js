(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6c32e065"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"dcd56923"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/portfolio-2021/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"224a":function(e,t,n){"use strict";n("a17d")},"2fab":function(e,t,n){e.exports=n.p+"img/bear.3eeedce5.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{staticClass:"navbar",attrs:{app:"",flat:""}},[r("div",{staticClass:"justify-space-between d-flex align-center navbar2"},[r("div",{staticClass:"bear .d-lg-none .d-xl-flex"},[r("v-img",{attrs:{src:n("2fab")}})],1),r("router-link",{staticClass:"home",attrs:{to:"/"}},[e._v("Home")]),r("router-link",{attrs:{to:"/project"}},[e._v("My projects")]),r("router-link",{attrs:{to:"/about"}},[e._v("About me")]),r("router-link",{attrs:{to:"/contact"}},[e._v("Contact me")])],1)]),r("v-main",[r("router-view")],1),r("v-footer",{attrs:{dark:"",padless:""}})],1)},o=[],u={name:"App"},i=u,c=(n("224a"),n("2877")),s=n("6544"),l=n.n(s),p=n("7496"),f=n("40dc"),d=n("553a"),m=n("adda"),h=n("f6c4"),v=Object(c["a"])(i,a,o,!1,null,"7e65968b",null),b=v.exports;l()(v,{VApp:p["a"],VAppBar:f["a"],VFooter:d["a"],VImg:m["a"],VMain:h["a"]});n("d3b7");var g=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("v-container",[n("v-card",{staticClass:"hello",staticStyle:{background:"#fdfdfd7e"}},[n("h1",[e._v("Hello stranger ! Welcome here !")]),n("br"),n("p",[e._v("I hope you're having a good day.")]),n("p",[e._v(" I am "),n("span",{staticClass:"name"},[e._v("Axelle Adamkiewicz")]),e._v(" and you are on my portfolio. ")]),n("p",[e._v("Everything here is made with Vue.js and my hands.")])])],1)],1)},w=[],_={name:"Home"},j=_,C=(n("cccd"),n("b0af")),k=n("a523"),x=Object(c["a"])(j,y,w,!1,null,"0f81ddca",null),O=x.exports;l()(x,{VCard:C["a"],VContainer:k["a"]}),r["a"].use(g["a"]);var A=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/project",name:"My project",component:function(){return n.e("about").then(n.bind(null,"07bd"))}},{path:"/contact",name:"Contact me",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/wild",name:"Bet2Invest",component:function(){return n.e("about").then(n.bind(null,"7903"))}},{path:"/leihia",name:"Leihia",component:function(){return n.e("about").then(n.bind(null,"fc8c"))}},{path:"/design",name:"Design",component:function(){return n.e("about").then(n.bind(null,"de49"))}}],E=new g["a"]({mode:"history",base:"/portfolio-2021/",routes:A}),S=E,P=n("2f62");r["a"].use(P["a"]);var T=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),V=n("f309");r["a"].use(V["a"]);var M=new V["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:S,store:T,vuetify:M,render:function(e){return e(b)}}).$mount("#app")},"79fe":function(e,t,n){},a17d:function(e,t,n){},cccd:function(e,t,n){"use strict";n("79fe")}});
//# sourceMappingURL=app.b8b6d814.js.map