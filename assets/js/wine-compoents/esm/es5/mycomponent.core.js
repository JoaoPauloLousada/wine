/*!
 * mycomponent: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.n+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)M.push(arguments[f]);for(;M.length>0;){var c=M.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)M.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&M.push(f);t.class=M.join(" "),M.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],g):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,t:void 0,e:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"mycomponent";return P||(P=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),W[s].r(function i(n){var t=k(n),e=t.i,r=p(n[0]);return t.i=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
"./build/"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!W[s]){var u={},c=e.resourcesUrl||"./";f(s,u,n,i,c,o),W[s]=T(s,u,n,i,c,o,r)}if(window.customStyleShim)return W[s].o=window.customStyleShim,W[s].o.initShim().then(t);t()})}this&&this.u;var i=this&&this.f||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.c(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.a?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).c())})},o=this&&this.s||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.c)&&!(o=o.call(i,e[1])).a)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.l++,{value:e[1],a:!1};case 5:f.l++,i=e[1],e=[0];continue;case 7:e=f.v.pop(),f.p.pop();continue;default:if(!(o=(o=f.p).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.l=e[1];break}if(6===e[0]&&f.l<o[1]){f.l=o[1],o=e;break}if(o&&f.l<o[2]){f.l=o[2],f.v.push(e);break}o[2]&&f.v.pop(),f.p.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,a:!0}}([e,u])}}var r,i,o,u,f={l:0,d:function(){if(1&o[0])throw o[1];return o[1]},p:[],v:[]};return u={c:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=this,f=function(){};function applyPolyfills(n){n.y=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<m;n+=2)(0,S[n])(S[n+1]),S[n]=void 0,S[n+1]=void 0;m=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.w;if(i){var u=arguments[i-1];g(function(){return d(i,r,u,e.m)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.w===T?s(n,t.m):t.w===W?l(n,t.m):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){g(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.b);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.M&&n.M(n.m),p(n)}function s(n,t){n.w===x&&(n.m=t,n.w=T,0!==n.g.length&&g(p,n))}function l(n,t){n.w===x&&(n.w=W,n.m=t,g(a,n))}function v(n,t,e,r){var i=n.g,o=i.length;n.M=null,i[o]=t,i[o+T]=e,i[o+W]=r,0===o&&n.w&&g(p,n)}function p(n){var t=n.g,e=n.w;if(0!==t.length){for(var r,i,o=n.m,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n.g.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.w===x&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===W&&l(t,o))}function h(n){n[_]=N++,n.w=void 0,n.m=void 0,n.g=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},m=0,b=void 0,M=void 0,g=function(n,t){S[m]=n,S[m+1]=t,2===(m+=2)&&(M?M(e):O())},k=(y=void 0!==n?n:void 0)||{},j=k.k||k.j;k="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,S=Array(1e3),O=void 0;O=j?($=0,A=new j(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.A.onmessage=e,function(){return n.C.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().S("vertx");return void 0!==(b=n.O||n._)?function(){b(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),x=void 0,T=1,W=2,P={error:null},N=0,R=function(){function n(n,t){this.x=n,this.T=new n(o),this.T[_]||h(this.T),w(t)?(this.W=this.length=t.length,this.m=Array(this.length),0===this.length?s(this.T,this.m):(this.length=this.length||0,this.P(t),0===this.W&&s(this.T,this.m))):l(this.T,Error("Array Methods must be provided an Array"))}return n.prototype.P=function(n){for(var t=0;this.w===x&&t<n.length;t++)this.N(n[t],t)},n.prototype.N=function(n,t){var e=this.x,c=e.resolve;c===i?(c=u(n))===r&&n.w!==x?this.R(n.w,t,n.m):"function"!=typeof c?(this.W--,this.m[t]=n):e===L?(f(e=new e(o),n,c),this.L(e,t)):this.L(new e(function(t){return t(n)}),t):this.L(c(n),t)},n.prototype.R=function(n,t,e){var r=this.T;r.w===x&&(this.W--,n===W?l(r,e):this.m[t]=e),0===this.W&&s(r,this.m)},n.prototype.L=function(n,t){var e=this;v(n,void 0,function(n){return e.R(T,t,n)},function(n){return e.R(W,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.m=this.w=void 0,this.g=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.D=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).T},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.F=function(n){M=n},L.H=function(n){g=n},L.q=g,L.U=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.B)return}n.Promise=L},L.Promise=L,L.U(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||t.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||t.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||t.push(import("./polyfills/string.js")),n.fetch||t.push(import("./polyfills/fetch.js")),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(import("./polyfills/css-shim.js")),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.I}catch(n){return!1}}||t.push(import("./polyfills/url.js")),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s=function(t,e,r,i){var o=r.n+c,u=r[o];if((2===r.G||1===r.G&&!t.Y.Q)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u){var f=e.Z.head;if(e.Q)if(1===r.G)f=i.shadowRoot;else{var a=i.getRootNode();a.host&&(f=a)}var s=t.z.get(f);if(s||t.z.set(f,s={}),!s[o]){var l=void 0;if(t.o?l=t.o.createHostStyle(i,o,u):((l=e.J("style")).innerHTML=u,s[o]=!0),l){var v=f.querySelectorAll("[data-styles]");e.K(f,l,v.length&&v[v.length-1].nextSibling||f.firstChild)}}}},l=function(n){return null!=n},v=function(n){return n.toLowerCase()},p=function(n){return v(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},d=function(n,t,e,r,i,o){if("class"!==e||o)if("style"===e){for(var u in r)i&&null!=i[u]||(/-/.test(u)?t.style.removeProperty(u):t.style[u]="");for(var u in i)r&&i[u]===r[u]||(/-/.test(u)?t.style.setProperty(u,i[u]):t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var f=n.V(t);f&&f.X&&f.X[e]?y(t,e,i):"ref"!==e&&(y(t,e,null==i?"":i),null!=i&&!1!==i||n.Y.nn(t,e))}else null!=i&&"key"!==e?function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS("http://www.w3.org/1999/xlink",v(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS("http://www.w3.org/1999/xlink",v(t),e):n.setAttribute(t,e))}(t,e,i):(o||n.Y.tn(t,e)&&(null==i||!1===i))&&n.Y.nn(t,e);else e=v(e)in t?v(e.substring(2)):v(e[2])+e.substring(3),i?i!==r&&n.Y.en(t,e,i):n.Y.rn(t,e);else if(r!==i){var c=h(r),a=h(i),s=c.filter(function(n){return!a.includes(n)}),l=h(t.className).filter(function(n){return!s.includes(n)}),p=a.filter(function(n){return!c.includes(n)&&!l.includes(n)});l.push.apply(l,p),t.className=l.join(" ")}},h=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},y=function(n,t,e){try{n[t]=e}catch(n){}},w=function(n,t,e,r,i){var o=11===e.t.nodeType&&e.t.host?e.t.host:e.t,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||d(n,o,i,u[i],void 0,r,e.e);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||d(n,o,i,u[i],f[i],r,e.e)},m=!1,b=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.t),n.vchildren&&n.vchildren.forEach(function(n){b(n,t)}))},M=[],g={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},k=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{in:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={on:e[1],un:!!e[2],in:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,fn:e[4]};return{n:r,i:i,X:Object.assign({},c),G:u,cn:f?f.map(j):void 0}},j=function(n){return{an:n[0],sn:n[1],ln:!!n[2],vn:!!n[3],pn:!!n[4]}},$=function(n,t){return l(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},A=function(n,t,e){n.dn.add(t),n.hn.has(t)||(n.hn.set(t,!0),n.yn?n.queue.write(function(){return E(n,t,e)}):n.queue.tick(function(){return E(n,t,e)}))},E=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.l){case 0:return n.hn.delete(r),n.wn.has(r)?[3,12]:(a=n.mn.get(r))?[3,6]:(s=n.bn.get(r))&&!s["s-rn"]?((s["s-rc"]=s["s-rc"]||[]).push(function(){E(n,r,f)}),[2]):(a=O(n,r,n.Mn.get(r),f),[3,5]);case 1:return o.p.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.d(),o.l=3;case 3:return[3,5];case 4:return i=o.d(),n.gn(i,3,r),[3,5];case 5:case 6:return[3,11];case 7:return o.p.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.d(),o.l=9;case 9:return[3,11];case 10:return u=o.d(),n.gn(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u=r.kn.host,f=r.kn.encapsulation,c="shadow"===f&&n.Y.Q,a=i;if(c&&(a=i.shadowRoot),!i["s-rn"]){n.jn(n,n.Y,r,i);var s=i["s-sc"];s&&(n.Y.$n(i,t(s,!0)),"scoped"===f&&n.Y.$n(i,t(s)))}if(o.render||o.hostData||u){n.An=!0;var l=o.render&&o.render();n.An=!1;var v=e(null,void 0,l),p=n.En.get(i)||{};p.t=a,n.En.set(i,n.render(i,p,v,c,f))}n.o&&n.o.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.An=!1,n.gn(t,8,i,!0)}})(n,n.V(r),r,a),r["s-init"](),o.l=12;case 12:return[2]}})})},C=function(n,t,e,r,i,o,u){(u=n.Cn.get(t))||n.Cn.set(t,u={}),r!==u[e]&&(u[e]=r,n.mn.get(t)&&!n.An&&t["s-rn"]&&A(n,t,i))},S=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},O=function(n,t,e,r,i,o){try{i=new(o=n.V(t).kn),function(n,t,e,r,i,o){n.Sn.set(r,e),n.Cn.has(e)||n.Cn.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type){var a=n.Cn.get(e);!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.On)&&l(c=f[t.attr])&&(a[i]=$(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=$(t.type,e[i])),"mode"!==i&&delete e[i]),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),S(r,i,function s(t){return(t=n.Cn.get(n.Sn.get(this)))&&t[i]},function v(e,r){(r=n.Sn.get(this))&&t.mutable&&C(n,r,i,e,u)})}})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r)}catch(e){i={},n.gn(e,7,t,!0)}return n.mn.set(t,i),i},_=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.V(r)&&!n._n.has(r))return!1;if(!_(n,r))return!1}}return!0},x=function(n,t,e,r,i,o){if(n.dn.delete(t),(i=n.bn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.bn.delete(t)),n.xn.length&&!n.dn.size)for(;o=n.xn.shift();)o()},T=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},p=r[n]=r[n]||{},d=function(n,t,e){var r=new WeakMap,i={Z:e,Q:!!e.documentElement.attachShadow,Tn:!1,Wn:function(n){return n.nodeType},J:function(n){return e.createElement(n)},Pn:function(n,t){return e.createElementNS(n,t)},Nn:function(n){return e.createTextNode(n)},Rn:function(n){return e.createComment(n)},K:function(n,t,e){return n.insertBefore(t,e)},Ln:function(n){return n.remove()},Dn:function(n,t){return n.appendChild(t)},$n:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},Fn:function(n){return n.childNodes},Hn:function(n){return n.parentNode},qn:function(n){return n.nextSibling},Un:function(n){return n.previousSibling},Bn:function(n){return v(n.nodeName)},In:function(n){return n.textContent},Gn:function(n,t){return n.textContent=t},Qn:function(n,t){return n.getAttribute(t)},Yn:function(n,t,e){return n.setAttribute(t,e)},nn:function(n,t){return n.removeAttribute(t)},tn:function(n,t){return n.hasAttribute(t)},Zn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},zn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.Jn(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},en:function(t,e,o,u,f,c,a,s,l){var v=t,p=o,d=r.get(t);l=e,d&&d[l]&&d[l](),"object"==typeof c&&(v=c),v&&(a=i.Tn?{capture:!!u,passive:!!f}:!!u,n.ael(v,e,p,a),d||r.set(t,d={}),d[l]=function(){v&&n.rel(v,e,p,a),d[l]=null})},rn:function(n,t,e){(e=r.get(n))&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))},Kn:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},Jn:function(n,t){return(t=i.Hn(n))&&11===i.Wn(t)?t.host:t},Vn:function(n,t,e,r){return n.setAttributeNS(t,e,r)},Xn:function(n,t){return n.attachShadow(t)}};return"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)}),i}(p,r,i),h=d.Z.documentElement,y=r["s-defined"]=r["s-defined"]||{},M={Y:d,r:function(n,t){r.customElements.get(n.n)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.wn.delete(e),n._n.has(e)||(n.nt=!0,n.dn.add(e),n._n.set(e,!0),function(n,t,e){for(e=t;e=n.Y.Jn(e);)if(n.tt(e)){n.et.has(t)||(n.bn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.Mn.set(e,function(n,t,e,r,i){return e.mode||(e.mode=n.Zn(e)),e["s-cr"]||n.Qn(e,"ssrv")||n.Q&&1===t.G||(e["s-cr"]=n.Nn(""),e["s-cr"]["s-cn"]=!0,n.K(e,e["s-cr"],n.Fn(e)[0])),n.Q||1!==t.G||!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e),1===t.G&&n.Q&&!e.shadowRoot&&n.Xn(e,{mode:"open"}),r={On:{}},t.X&&Object.keys(t.X).forEach(function(o){(i=t.X[o].in)&&(r.On[i]=n.Qn(e,i))}),r}(n.Y,t,e)),n.rt(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){!n.it&&function(n,t){for(;t;){if(!n.Hn(t))return 9!==n.Wn(t);t=n.Hn(t)}}(n.Y,t)&&(n.wn.set(t,!0),x(n,t),b(n.En.get(t),!0),n.Y.rn(t),n.ot.delete(t),n.o&&n.o.removeHost(t),[n.bn,n.ut,n.Mn].forEach(function(n){return n.delete(t)}))})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o){if(_(n,t)&&n.mn.get(t)&&!n.wn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.et.set(t,!0),n.ft.has(t)||(n.ft.set(t,!0),t["s-ld"]=void 0,n.Y.$n(t,e));try{b(n.En.get(t)),(o=n.ut.get(t))&&(o.forEach(function(n){return n(t)}),n.ut.delete(t))}catch(e){n.gn(e,4,t)}x(n,t)}})(n,this,r)},e.forceUpdate=function(){A(n,this,i)},t.X){var o=Object.entries(t.X),u={};o.forEach(function(n){var t=n[0],e=n[1].in;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[v(e)];o&&(t[o]=i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1];3&o.on&&S(e,i,function t(){return(n.Cn.get(this)||{})[i]},function t(e){C(n,this,i,$(o.fn,e),r)})})}(n,0,e,i)}}(M,a[n.n]=n,t.prototype,u,f),t.observedAttributes=Object.values(n.X).map(function(n){return n.in}).filter(function(n){return!!n}),r.customElements.define(n.n,t))},V:function(n){return a[d.Bn(n)]},ct:function(n){return t[n]},isClient:!0,tt:function(n){return!(!y[d.Bn(n)]&&!M.V(n))},gn:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}}(p,r),rt:function(n,t){var e=!d.Q,r={mode:t.mode,scoped:e};n.i(r).then(function(e){try{n.kn=e,function r(n,t,e,i,o){if(i){var u=t.n+(o||c);t[u]||(t[u]=i)}}(0,n,n.G,e.style,e.styleMode)}catch(t){console.error(t),n.kn=function i(){}}A(M,t,f)})},An:!1,yn:!1,it:!1,jn:s,bn:new WeakMap,z:new WeakMap,_n:new WeakMap,ot:new WeakMap,ft:new WeakMap,et:new WeakMap,Sn:new WeakMap,Mn:new WeakMap,mn:new WeakMap,wn:new WeakMap,hn:new WeakMap,ut:new WeakMap,at:new WeakMap,En:new WeakMap,Cn:new WeakMap,dn:new Set,xn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,p.h=e,p.Context=t,p.onReady=function(){return new Promise(function(n){return M.queue.write(function(){return M.dn.size?M.xn.push(n):n()})})},M.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,v,p,d,h,y,b,M,g){if(M=v.vchildren[p],e||(o=!0,"slot"===M.vtag&&(r&&t.$n(d,r+"-s"),M.vchildren?M.st=!0:M.lt=!0)),l(M.vtext))M.t=t.Nn(M.vtext);else if(M.lt)M.t=t.Nn("");else{if(y=M.t=m||"svg"===M.vtag?t.Pn("http://www.w3.org/2000/svg",M.vtag):t.J(M.st?"slot-fb":M.vtag),n.tt(y)&&n.et.delete(c),m="svg"===M.vtag||"foreignObject"!==M.vtag&&m,w(n,null,M,m),l(r)&&y["s-si"]!==r&&t.$n(y,y["s-si"]=r),M.vchildren)for(h=0;h<M.vchildren.length;++h)(b=a(i,M,h,y))&&t.Dn(y,b);"svg"===M.vtag&&(m=!1)}return M.t["s-hn"]=f,(M.st||M.lt)&&(M.t["s-sr"]=!0,M.t["s-cr"]=u,M.t["s-sn"]=M.vname||"",(g=i&&i.vchildren&&i.vchildren[p])&&g.vtag===M.vtag&&i.t&&s(i.t)),M.t},s=function(e,r,i,u){n.it=!0;var c=t.Fn(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.Ln(u),t.K(y(u),u,h(u)),t.Ln(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.it=!1},v=function(n,e,r,i,o,u,c,s){var v=n["s-cr"];for((c=v&&t.Hn(v)||n).shadowRoot&&t.Bn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=l(i[o].vtext)?t.Nn(i[o].vtext):a(null,r,o,n))&&(i[o].t=s,t.K(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)l(n[e])&&(o=n[e].t,i=!0,o["s-ol"]?t.Ln(o["s-ol"]):s(o,!0),t.Ln(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.Hn(n["s-ol"]?n["s-ol"]:n)},b=function(e,r,i){var o=r.t=e.t,u=e.vchildren,f=r.vchildren;m=r.t&&l(t.Jn(r.t))&&void 0!==r.t.ownerSVGElement,m="svg"===r.vtag||"foreignObject"!==r.vtag&&m,l(r.vtext)?(i=o["s-cr"])?t.Gn(t.Hn(i),r.vtext):e.vtext!==r.vtext&&t.Gn(o,r.vtext):("slot"!==r.vtag&&w(n,e,r,m),l(u)&&l(f)?function(n,e,r,i,o,u,f,c){for(var w=0,m=0,M=e.length-1,g=e[0],k=e[M],j=i.length-1,$=i[0],A=i[j];w<=M&&m<=j;)if(null==g)g=e[++w];else if(null==k)k=e[--M];else if(null==$)$=i[++m];else if(null==A)A=i[--j];else if(d(g,$))b(g,$),g=e[++w],$=i[++m];else if(d(k,A))b(k,A),k=e[--M],A=i[--j];else if(d(g,A))"slot"!==g.vtag&&"slot"!==A.vtag||s(t.Hn(g.t)),b(g,A),t.K(n,g.t,t.qn(k.t)),g=e[++w],A=i[--j];else if(d(k,$))"slot"!==g.vtag&&"slot"!==A.vtag||s(t.Hn(k.t)),b(k,$),t.K(n,k.t,g.t),k=e[--M],$=i[++m];else{for(o=null,u=w;u<=M;++u)if(e[u]&&l(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}l(o)?((c=e[o]).vtag!==$.vtag?f=a(e&&e[m],r,o,n):(b(c,$),e[o]=void 0,f=c.t),$=i[++m]):(f=a(e&&e[m],r,m,n),$=i[++m]),f&&t.K(y(g.t),f,h(g.t))}w>M?v(n,null==i[j+1]?null:i[j+1].t,r,i,m,j):m>j&&p(e,w,M)}(o,u,r,f):l(f)?(l(e.vtext)&&t.Gn(o,""),v(o,null,r,f,0,f.length-1)):l(u)&&p(u,0,u.length-1)),m&&"svg"===r.vtag&&(m=!1)},M=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.Fn(n)).length;i<o;i++)if(e=r[i],1===t.Wn(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.Wn(r[u]),""!==f){if(1===c&&f===t.Qn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.In(r[u]).trim()){e.hidden=!0;break}M(e)}},g=[],k=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.Fn(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.Fn(t.Hn(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.Wn(o))||8===l)&&""===s||1===l&&null===t.Qn(o,"slot")&&""===s||1===l&&t.Qn(o,"slot")===s)&&(g.some(function(n){return n.vt===o})||(i=!0,o["s-sn"]=s,g.push({pt:r,vt:o})));1===t.Wn(r)&&k(r)}};return function(a,s,l,v,p,d,h,y,w,m,j,$){if(c=a,f=t.Bn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,b(s,l),o){for(k(l.t),h=0;h<g.length;h++)(y=g[h]).vt["s-ol"]||((w=t.Nn(""))["s-nr"]=y.vt,t.K(t.Hn(y.vt),y.vt["s-ol"]=w,y.vt));for(n.it=!0,h=0;h<g.length;h++){for(y=g[h],j=t.Hn(y.pt),$=t.qn(y.pt),w=y.vt["s-ol"];w=t.Un(w);)if((m=w["s-nr"])&&m&&m["s-sn"]===y.vt["s-sn"]&&j===t.Hn(m)&&(m=t.qn(m))&&m&&!m["s-nr"]){$=m;break}(!$&&j!==t.Hn(y.vt)||t.qn(y.vt)!==$)&&y.vt!==$&&(t.Ln(y.vt),t.K(j,y.vt,$))}n.it=!1}return i&&M(l.t),g.length=0,l}}(M,d),h["s-ld"]=[],h["s-rn"]=!0,h["s-init"]=function(){M.et.set(h,p.loaded=M.yn=!0),d.Kn(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.V(t);if(r)if(n.et.has(t))e(t);else{var i=n.ut.get(t)||[];i.push(e),n.ut.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(M,p,r,r["s-apps"],r["s-cr"]),p.initialized=!0,M},W={},P=!1;export{r as defineCustomElement,e as h};