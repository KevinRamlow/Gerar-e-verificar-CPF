(()=>{"use strict";var n={122:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(537),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"body {\n  background-color: rgb(105, 105, 228);\n}\n\n.newCpfText {\n  text-align: center;\n  color: white;\n  text-shadow: 5px 5px 10px rgb(37, 37, 82);\n  font-weight: bolder;\n  font-size: 35px;\n  margin-bottom: 10px;\n}   \n\n.verifyCpfText{\n  text-align: center;\n  color: white;\n  text-shadow: 5px 5px 10px rgb(37, 37, 82);\n  font-weight: bolder;\n  font-size: 35px;\n  margin-bottom: 10px;\n  margin-top: 80px;\n}\n\nsection {   \n  background-color: white;\n  padding: 10px;\n  width: 400px;\n  margin: auto;\n  border-radius: 10px;\n  box-shadow: 5px 5px 10px rgb(37, 37, 82);\n  text-align: center;\n}\n\n.button{\n  background-color: rgb(37, 37, 82);\n  color: white;\n  cursor: pointer;\n  border-radius: 10px;\n  width: 120px;\n  height: 30px;\n  box-shadow: 5px 5px 10px rgb(37, 37, 82);\n  font-size: 18px;\n}\n\np{\n  font-size: 20px;\n}\n\n.cpf{\n  width: 250px;\n  height: 25px;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n\n.result{\n  font-size: 2em;\n  margin-top: 20px;\n}\n\nfooter {\n  text-align: center;\n  font-style: italic;\n  color: white;\n}\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,yCAAyC;EACzC,mBAAmB;EACnB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,yCAAyC;EACzC,mBAAmB;EACnB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;AACd",sourcesContent:["body {\n  background-color: rgb(105, 105, 228);\n}\n\n.newCpfText {\n  text-align: center;\n  color: white;\n  text-shadow: 5px 5px 10px rgb(37, 37, 82);\n  font-weight: bolder;\n  font-size: 35px;\n  margin-bottom: 10px;\n}   \n\n.verifyCpfText{\n  text-align: center;\n  color: white;\n  text-shadow: 5px 5px 10px rgb(37, 37, 82);\n  font-weight: bolder;\n  font-size: 35px;\n  margin-bottom: 10px;\n  margin-top: 80px;\n}\n\nsection {   \n  background-color: white;\n  padding: 10px;\n  width: 400px;\n  margin: auto;\n  border-radius: 10px;\n  box-shadow: 5px 5px 10px rgb(37, 37, 82);\n  text-align: center;\n}\n\n.button{\n  background-color: rgb(37, 37, 82);\n  color: white;\n  cursor: pointer;\n  border-radius: 10px;\n  width: 120px;\n  height: 30px;\n  box-shadow: 5px 5px 10px rgb(37, 37, 82);\n  font-size: 18px;\n}\n\np{\n  font-size: 20px;\n}\n\n.cpf{\n  width: 250px;\n  height: 25px;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n\n.result{\n  font-size: 2em;\n  margin-top: 20px;\n}\n\nfooter {\n  text-align: center;\n  font-style: italic;\n  color: white;\n}\n"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var u=n[c],p=r.base?u[0]+r.base:u[0],l=i[p]||0,f="".concat(p," ").concat(l);i[p]=l+1;var s=t(f),A={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==s)e[s].references++,e[s].updater(A);else{var d=o(A,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:d,references:1})}a.push(f)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var u=r(n,o),p=0;p<i.length;p++){var l=t(i[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=u}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(e)}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function r(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var o=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),Object.defineProperty(this,"cleanCpf",{value:e.replace(/\D+/g,"")})}var t,o;return t=n,(o=[{key:"isSequence",value:function(){return this.cleanCpf.charAt(0).repeat(11)===this.cleanCpf}},{key:"CreateNewCpf",value:function(){var n=this.cleanCpf.slice(0,-2),e=this.newDigit(n),t=this.newDigit(n+e);this.newCpf=n+e+t}},{key:"newDigit",value:function(n){var t,r=0,o=n.length+1,i=function(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return c=n.done,n},e:function(n){u=!0,a=n},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}(n);try{for(i.s();!(t=i.n()).done;){var a=t.value;r+=o*Number(a),o--}}catch(n){i.e(n)}finally{i.f()}var c=11-r%11;return c<=9?String(c):"0"}},{key:"verifyCpf",value:function(){return!!this.cleanCpf&&"string"==typeof this.cleanCpf&&11===this.cleanCpf.length&&!this.isSequence()&&(this.CreateNewCpf(),this.newCpf===this.cleanCpf)}}])&&r(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();function i(n){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(n)}function a(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,(void 0,o=function(n,e){if("object"!==i(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var c=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t;return e=n,t=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(e-n)+n))}},{key:"format",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}},{key:"createNewCpf",value:function(){var n=this.rand(),e=new o(n),t=e.newDigit(n),r=n+t+e.newDigit(n+t);return this.format(r)}}],t&&a(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}(),u=t(379),p=t.n(u),l=t(795),f=t.n(l),s=t(569),A=t.n(s),d=t(565),m=t.n(d),y=t(216),v=t.n(y),b=t(589),h=t.n(b),C=t(122),g={};g.styleTagTransform=h(),g.setAttributes=m(),g.insert=A().bind(null,"head"),g.domAPI=f(),g.insertStyleElement=v(),p()(C.Z,g),C.Z&&C.Z.locals&&C.Z.locals,document.querySelector(".newCpf").addEventListener("click",(function(){var n=new c;document.querySelector(".createdCpf").innerHTML=n.createNewCpf()})),document.querySelector(".verifyCpf").addEventListener("click",(function(){var n=document.querySelector(".cpf").value,e=new o(n).verifyCpf(),t=document.querySelector(".verifiedCpf");e?(t.style.color="green",t.innerHTML="CPF VÁLIDO"):(t.style.color="red",t.innerHTML="CPF INVÁLIDO")}))})()})();
//# sourceMappingURL=bundle.js.map