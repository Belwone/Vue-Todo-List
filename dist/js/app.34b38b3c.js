(function(){"use strict";var e={9692:function(e,t,o){var n=o(9242),a=o(3396),r=o(7139);const u=(0,a._)("div",{class:"maintext"},[(0,a._)("h1",null,"To-do List"),(0,a._)("h3",null,"Tasks for today")],-1),i={class:"addTodo"},l=(0,a._)("input",{id:"todoinput",type:"text",placeholder:" write..."},null,-1),c={style:{"margin-top":"40px"}},s={class:"showTodo"},d=(0,a._)("button",{class:"toButtons"},"Delete",-1),v=(0,a._)("button",{class:"toButtons"},"Edit",-1);function p(e,t,o,n,p,f){return(0,a.wg)(),(0,a.iD)(a.HY,null,[u,(0,a._)("div",i,[l,(0,a._)("button",{class:"btnAdd",onClick:t[0]||(t[0]=(...e)=>f.addTodo&&f.addTodo(...e))},"Add")]),(0,a._)("div",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.todoList,(e=>((0,a.wg)(),(0,a.iD)("div",s,[(0,a.Uk)((0,r.zw)(e.name)+" ",1),d,(0,a.Uk)(),v])))),256))])],64)}o(7658);var f={data(){return{todoList:[{id:1,name:"example"}],message:""}},methods:{nullTodo(e,t){null==t&&(e="Список дел пуст!"),console.log(e)},addTodo(){var e;e=document.getElementById("todoinput").value,console.log(e),this.todoList.push({name:e}),console.log(this.todoList)},newTodo(){newId=this.todoList.length++}}},h=o(89);const g=(0,h.Z)(f,[["render",p]]);var m=g,b=o(2483),k=o.p+"img/logo.971ad808.png";const w={class:"home"},_=(0,a._)("img",{alt:"Vue logo",src:k},null,-1);function j(e,t,o,n,r,u){const i=(0,a.up)("HelloWorld");return(0,a.wg)(),(0,a.iD)("div",w,[_,(0,a.Wm)(i,{msg:"Welcome to Your Vue.js App"})])}const y={class:"hello"},T=(0,a.uE)('<p data-v-1935ec24> For a guide and recipes on how to configure / customize this project,<br data-v-1935ec24> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>vue-cli documentation</a>. </p><h3 data-v-1935ec24>Installed CLI Plugins</h3><ul data-v-1935ec24><li data-v-1935ec24><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-1935ec24>babel</a></li><li data-v-1935ec24><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-1935ec24>router</a></li><li data-v-1935ec24><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-1935ec24>vuex</a></li></ul><h3 data-v-1935ec24>Essential Links</h3><ul data-v-1935ec24><li data-v-1935ec24><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>Core Docs</a></li><li data-v-1935ec24><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>Forum</a></li><li data-v-1935ec24><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>Community Chat</a></li><li data-v-1935ec24><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-1935ec24>Twitter</a></li><li data-v-1935ec24><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>News</a></li></ul><h3 data-v-1935ec24>Ecosystem</h3><ul data-v-1935ec24><li data-v-1935ec24><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>vue-router</a></li><li data-v-1935ec24><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>vuex</a></li><li data-v-1935ec24><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-1935ec24>vue-devtools</a></li><li data-v-1935ec24><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>vue-loader</a></li><li data-v-1935ec24><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-1935ec24>awesome-vue</a></li></ul>',7);function O(e,t,o,n,u,i){return(0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("h1",null,(0,r.zw)(o.msg),1),T])}var x={name:"HelloWorld",props:{msg:String}};const C=(0,h.Z)(x,[["render",O],["__scopeId","data-v-1935ec24"]]);var E=C,L={name:"HomeView",components:{HelloWorld:E}};const P=(0,h.Z)(L,[["render",j]]);var A=P;const D=[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,833))}],H=(0,b.p7)({history:(0,b.PO)("/"),routes:D});var S=H,I=o(65),W=(0,I.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(m).use(W).use(S).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,r){if(!n){var u=1/0;for(s=0;s<e.length;s++){n=e[s][0],a=e[s][1],r=e[s][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||u>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(i=!1,r<u&&(u=r));if(i){e.splice(s--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[n,a,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.1676e602.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vuetodo:";o.l=function(n,a,r,u){if(e[n])e[n].push(a);else{var i,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+r){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+r),i.src=n),e[n]=[a];var v=function(t,o){i.onerror=i.onload=null,clearTimeout(p);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=v.bind(null,i.onerror),i.onload=v.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={143:0};o.f.j=function(t,n){var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(o,n){a=e[t]=[o,n]}));n.push(a[2]=r);var u=o.p+o.u(t),i=new Error,l=function(n){if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+u+")",i.name="ChunkLoadError",i.type=r,i.request=u,a[1](i)}};o.l(u,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,u=n[0],i=n[1],l=n[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var s=l(o)}for(t&&t(n);c<u.length;c++)r=u[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(s)},n=self["webpackChunkvuetodo"]=self["webpackChunkvuetodo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(9692)}));n=o.O(n)})();
//# sourceMappingURL=app.34b38b3c.js.map