(function(e){function t(t){for(var r,a,i=t[0],l=t[1],c=t[2],s=0,d=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d221bdb":"a48822e9","chunk-5f514ea6":"2823aba3"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-5f514ea6":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d221bdb":"31d6cfe0","chunk-5f514ea6":"f9e91ec2"}[e]+".css",o=l.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],s=c.getAttribute("data-href");if(s===r||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var d=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"4b14":function(e,t,n){"use strict";var r=n("ca7e"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u=(n("7c55"),n("2877")),i={},l=Object(u["a"])(i,a,o,!1,null,null,null),c=l.exports,s=(n("c975"),n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"bodyBox"}},[n("el-container",{staticStyle:{height:"100%",overflow:"hidden",border:"1px solid #eee"}},[n("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[n("el-menu",[n("router-link",{attrs:{to:"/p_home"}},[n("el-menu-item",[e._v("员工列表")])],1),n("router-link",{attrs:{to:"/p_entry"}},[n("el-menu-item",[e._v("员工录入")])],1),n("router-link",{attrs:{to:"/p_entry"}},[n("el-menu-item",[e._v("员工身体状况")])],1)],1)],1),n("el-container",[n("el-header",{staticStyle:{"text-align":"conter","font-size":"30px"}},[n("span",[e._v("员工信息")])]),n("el-main",[n("el-table",{attrs:{data:e.tableData}},[n("el-table-column",{attrs:{prop:"username",width:"100px",label:"姓名"}}),n("el-table-column",{attrs:{prop:"sex",width:"100px",label:"性别"}}),n("el-table-column",{attrs:{prop:"age",width:"100px",label:"年龄"}}),n("el-table-column",{attrs:{prop:"department",width:"180px",label:"部门 "}}),n("el-table-column",{attrs:{prop:"address",label:"居住地"}})],1)],1)],1)],1)],1)},p=[],f=n("82ae"),h=n.n(f),m="http://127.0.0.1:8888",b=function(){return h.a.get(m+"/allentry")},v={data:function(){return{tableData:[]}},created:function(){var e=this;b().then((function(t){e.tableData=t.data}))},mounted:function(){var e=document.getElementById("bodyBox"),t=window.innerHeight;e.style.height=t+"px"}},g=v,y=(n("4b14"),Object(u["a"])(g,d,p,!1,null,"23fd3b94",null)),_=y.exports;r["default"].use(s["a"]);var w=[{path:"/p_home",name:"p_home",component:_,meta:{title:"首页"}},{path:"/p_entry",name:"p_entry",meta:{title:"录入"},component:function(){return n.e("chunk-5f514ea6").then(n.bind(null,"269a"))}},{path:"/m_home",name:"m_home",meta:{title:"移动端"},component:function(){return n.e("chunk-2d221bdb").then(n.bind(null,"cc49"))}}],x=new s["a"]({mode:"history",routes:w});function k(){for(var e=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","iPad","iPod"),n=!1,r=0;r<t.length;r++)if(e.indexOf(t[r])>0){n=!0;break}return n}x.beforeEach((function(e,t,n){k()?"/m_home"===e.path?n():n("/m_home"):"/p_home"===e.path||"/p_entry"===e.path?n():n("/p_home")}));var O=x,S=n("2f62");r["default"].use(S["a"]);var j=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}}),E=n("5c96"),P=n.n(E);n("0fae");r["default"].use(P.a),r["default"].config.productionTip=!1,new r["default"]({router:O,store:j,render:function(e){return e(c)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var r=n("2395"),a=n.n(r);a.a},ca7e:function(e,t,n){}});
//# sourceMappingURL=app.eca1244a.js.map