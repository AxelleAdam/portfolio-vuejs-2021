(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2e2a83e0"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"2c557b95"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2fab":function(e,t,n){e.exports=n.p+"img/bear.3eeedce5.svg"},3923:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{staticClass:"navbar",attrs:{app:"",flat:""}},[r("div",{staticClass:"justify-space-between d-flex align-center navbar2"},[r("div",{staticClass:"bear .d-lg-none .d-xl-flex"},[r("v-img",{attrs:{src:n("2fab")}})],1),r("router-link",{staticClass:"home",attrs:{to:"/"}},[e._v("Home")]),r("router-link",{attrs:{to:"/project"}},[e._v("My projects")]),r("router-link",{attrs:{to:"/about"}},[e._v("About me")]),r("router-link",{attrs:{to:"/contact"}},[e._v("Contact me")])],1)]),r("v-main",[r("router-view")],1),r("v-footer",{attrs:{dark:"",padless:""}})],1)},o=[],u={name:"App"},i=u,c=(n("6175"),n("2877")),s=n("6544"),l=n.n(s),p=n("7496"),f=n("40dc"),d=n("553a"),b=n("adda"),m=n("f6c4"),h=Object(c["a"])(i,a,o,!1,null,"0b4f9424",null),v=h.exports;l()(h,{VApp:p["a"],VAppBar:f["a"],VFooter:d["a"],VImg:b["a"],VMain:m["a"]});n("d3b7");var g=n("8c4f");n("bb51");r["a"].use(g["a"]);var y=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/project",name:"My project",component:function(){return n.e("about").then(n.bind(null,"07bd"))}},{path:"/contact",name:"Contact me",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/wild",name:"Bet2Invest",component:function(){return n.e("about").then(n.bind(null,"7903"))}},{path:"/leihia",name:"Leihia",component:function(){return n.e("about").then(n.bind(null,"fc8c"))}},{path:"/design",name:"Design",component:function(){return n.e("about").then(n.bind(null,"de49"))}}],w=new g["a"]({mode:"history",base:"portfolio-vuejs-2021",routes:y}),_=w,j=n("2f62");r["a"].use(j["a"]);var C=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),k=n("f309");r["a"].use(k["a"]);var x=new k["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:_,store:C,vuetify:x,render:function(e){return e(v)}}).$mount("#app")},6175:function(e,t,n){"use strict";n("3923")},"747c":function(e,t,n){},aae0:function(e,t,n){"use strict";n("747c")},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("v-container",[n("v-card",{staticClass:"hello",staticStyle:{background:"#fdfdfd7e"}},[n("h1",[e._v("Hello stranger ! Welcome here !")]),n("br"),n("p",[e._v("I hope you're having a good day.")]),n("p",[e._v(" I am "),n("span",{staticClass:"name"},[e._v("Axelle Adamkiewicz")]),e._v(" and you are on my portfolio. ")]),n("p",[e._v("Everything here is made with Vue.js and my hands.")])])],1)],1)},a=[],o={name:"Home"},u=o,i=(n("aae0"),n("2877")),c=n("6544"),s=n.n(c),l=n("b0af"),p=n("a523"),f=Object(i["a"])(u,r,a,!1,null,"4db6790c",null);t["default"]=f.exports;s()(f,{VCard:l["a"],VContainer:p["a"]})}});
//# sourceMappingURL=app.c6260e36.js.map