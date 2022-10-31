import{r as ye}from"./is-arguments.f878e592.js";import{r as le}from"./is-generator-function.8421b557.js";import{r as pe}from"./which-typed-array.9b443870.js";import{r as de}from"./is-typed-array.d88fd84e.js";import{r as ge}from"./inherits.66060a12.js";var fe={},x={},ee={},te;function me(){return te||(te=1,function(i){var g=ye(),_=le(),y=pe(),z=de();function m(n){return n.call.bind(n)}var d=typeof BigInt<"u",V=typeof Symbol<"u",l=m(Object.prototype.toString),H=m(Number.prototype.valueOf),v=m(String.prototype.valueOf),J=m(Boolean.prototype.valueOf);if(d)var F=m(BigInt.prototype.valueOf);if(V)var Z=m(Symbol.prototype.valueOf);function b(n,ce){if(typeof n!="object")return!1;try{return ce(n),!0}catch{return!1}}i.isArgumentsObject=g,i.isGeneratorFunction=_,i.isTypedArray=z;function K(n){return typeof Promise<"u"&&n instanceof Promise||n!==null&&typeof n=="object"&&typeof n.then=="function"&&typeof n.catch=="function"}i.isPromise=K;function C(n){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(n):z(n)||r(n)}i.isArrayBufferView=C;function N(n){return y(n)==="Uint8Array"}i.isUint8Array=N;function E(n){return y(n)==="Uint8ClampedArray"}i.isUint8ClampedArray=E;function L(n){return y(n)==="Uint16Array"}i.isUint16Array=L;function R(n){return y(n)==="Uint32Array"}i.isUint32Array=R;function D(n){return y(n)==="Int8Array"}i.isInt8Array=D;function Q(n){return y(n)==="Int16Array"}i.isInt16Array=Q;function h(n){return y(n)==="Int32Array"}i.isInt32Array=h;function j(n){return y(n)==="Float32Array"}i.isFloat32Array=j;function S(n){return y(n)==="Float64Array"}i.isFloat64Array=S;function I(n){return y(n)==="BigInt64Array"}i.isBigInt64Array=I;function B(n){return y(n)==="BigUint64Array"}i.isBigUint64Array=B;function A(n){return l(n)==="[object Map]"}A.working=typeof Map<"u"&&A(new Map);function X(n){return typeof Map>"u"?!1:A.working?A(n):n instanceof Map}i.isMap=X;function O(n){return l(n)==="[object Set]"}O.working=typeof Set<"u"&&O(new Set);function W(n){return typeof Set>"u"?!1:O.working?O(n):n instanceof Set}i.isSet=W;function T(n){return l(n)==="[object WeakMap]"}T.working=typeof WeakMap<"u"&&T(new WeakMap);function Y(n){return typeof WeakMap>"u"?!1:T.working?T(n):n instanceof WeakMap}i.isWeakMap=Y;function P(n){return l(n)==="[object WeakSet]"}P.working=typeof WeakSet<"u"&&P(new WeakSet);function w(n){return P(n)}i.isWeakSet=w;function U(n){return l(n)==="[object ArrayBuffer]"}U.working=typeof ArrayBuffer<"u"&&U(new ArrayBuffer);function q(n){return typeof ArrayBuffer>"u"?!1:U.working?U(n):n instanceof ArrayBuffer}i.isArrayBuffer=q;function e(n){return l(n)==="[object DataView]"}e.working=typeof ArrayBuffer<"u"&&typeof DataView<"u"&&e(new DataView(new ArrayBuffer(1),0,1));function r(n){return typeof DataView>"u"?!1:e.working?e(n):n instanceof DataView}i.isDataView=r;var t=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:void 0;function o(n){return l(n)==="[object SharedArrayBuffer]"}function a(n){return typeof t>"u"?!1:(typeof o.working>"u"&&(o.working=o(new t)),o.working?o(n):n instanceof t)}i.isSharedArrayBuffer=a;function s(n){return l(n)==="[object AsyncFunction]"}i.isAsyncFunction=s;function f(n){return l(n)==="[object Map Iterator]"}i.isMapIterator=f;function u(n){return l(n)==="[object Set Iterator]"}i.isSetIterator=u;function c(n){return l(n)==="[object Generator]"}i.isGeneratorObject=c;function p(n){return l(n)==="[object WebAssembly.Module]"}i.isWebAssemblyCompiledModule=p;function k(n){return b(n,H)}i.isNumberObject=k;function G(n){return b(n,v)}i.isStringObject=G;function M(n){return b(n,J)}i.isBooleanObject=M;function $(n){return d&&b(n,F)}i.isBigIntObject=$;function ne(n){return V&&b(n,Z)}i.isSymbolObject=ne;function ae(n){return k(n)||G(n)||M(n)||$(n)||ne(n)}i.isBoxedPrimitive=ae;function se(n){return typeof Uint8Array<"u"&&(q(n)||a(n))}i.isAnyArrayBuffer=se,["isProxy","isExternal","isModuleNamespaceObject"].forEach(function(n){Object.defineProperty(i,n,{enumerable:!1,value:function(){throw new Error(n+" is not supported in userland")}})})}(ee)),ee}var re,ie;function be(){return ie||(ie=1,re=function(g){return g&&typeof g=="object"&&typeof g.copy=="function"&&typeof g.fill=="function"&&typeof g.readUInt8=="function"}),re}var oe;function ue(){return oe||(oe=1,function(i){var g=Object.getOwnPropertyDescriptors||function(r){for(var t=Object.keys(r),o={},a=0;a<t.length;a++)o[t[a]]=Object.getOwnPropertyDescriptor(r,t[a]);return o},_=/%[sdj%]/g;i.format=function(e){if(!D(e)){for(var r=[],t=0;t<arguments.length;t++)r.push(d(arguments[t]));return r.join(" ")}for(var t=1,o=arguments,a=o.length,s=String(e).replace(_,function(u){if(u==="%%")return"%";if(t>=a)return u;switch(u){case"%s":return String(o[t++]);case"%d":return Number(o[t++]);case"%j":try{return JSON.stringify(o[t++])}catch{return"[Circular]"}default:return u}}),f=o[t];t<a;f=o[++t])E(f)||!S(f)?s+=" "+f:s+=" "+d(f);return s},i.deprecate=function(e,r){if(typeof process<"u"&&process.noDeprecation===!0)return e;if(typeof process>"u")return function(){return i.deprecate(e,r).apply(this,arguments)};var t=!1;function o(){if(!t){if(process.throwDeprecation)throw new Error(r);process.traceDeprecation?console.trace(r):console.error(r),t=!0}return e.apply(this,arguments)}return o};var y={},z=/^$/;if(process.env.NODE_DEBUG){var m=process.env.NODE_DEBUG;m=m.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase(),z=new RegExp("^"+m+"$","i")}i.debuglog=function(e){if(e=e.toUpperCase(),!y[e])if(z.test(e)){var r=process.pid;y[e]=function(){var t=i.format.apply(i,arguments);console.error("%s %d: %s",e,r,t)}}else y[e]=function(){};return y[e]};function d(e,r){var t={seen:[],stylize:l};return arguments.length>=3&&(t.depth=arguments[2]),arguments.length>=4&&(t.colors=arguments[3]),N(r)?t.showHidden=r:r&&i._extend(t,r),h(t.showHidden)&&(t.showHidden=!1),h(t.depth)&&(t.depth=2),h(t.colors)&&(t.colors=!1),h(t.customInspect)&&(t.customInspect=!0),t.colors&&(t.stylize=V),v(t,e,t.depth)}i.inspect=d,d.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},d.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function V(e,r){var t=d.styles[r];return t?"\x1B["+d.colors[t][0]+"m"+e+"\x1B["+d.colors[t][1]+"m":e}function l(e,r){return e}function H(e){var r={};return e.forEach(function(t,o){r[t]=!0}),r}function v(e,r,t){if(e.customInspect&&r&&A(r.inspect)&&r.inspect!==i.inspect&&!(r.constructor&&r.constructor.prototype===r)){var o=r.inspect(t,e);return D(o)||(o=v(e,o,t)),o}var a=J(e,r);if(a)return a;var s=Object.keys(r),f=H(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(r)),B(r)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return F(r);if(s.length===0){if(A(r)){var u=r.name?": "+r.name:"";return e.stylize("[Function"+u+"]","special")}if(j(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(I(r))return e.stylize(Date.prototype.toString.call(r),"date");if(B(r))return F(r)}var c="",p=!1,k=["{","}"];if(C(r)&&(p=!0,k=["[","]"]),A(r)){var G=r.name?": "+r.name:"";c=" [Function"+G+"]"}if(j(r)&&(c=" "+RegExp.prototype.toString.call(r)),I(r)&&(c=" "+Date.prototype.toUTCString.call(r)),B(r)&&(c=" "+F(r)),s.length===0&&(!p||r.length==0))return k[0]+c+k[1];if(t<0)return j(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special");e.seen.push(r);var M;return p?M=Z(e,r,t,f,s):M=s.map(function($){return b(e,r,t,f,$,p)}),e.seen.pop(),K(M,c,k)}function J(e,r){if(h(r))return e.stylize("undefined","undefined");if(D(r)){var t="'"+JSON.stringify(r).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(t,"string")}if(R(r))return e.stylize(""+r,"number");if(N(r))return e.stylize(""+r,"boolean");if(E(r))return e.stylize("null","null")}function F(e){return"["+Error.prototype.toString.call(e)+"]"}function Z(e,r,t,o,a){for(var s=[],f=0,u=r.length;f<u;++f)P(r,String(f))?s.push(b(e,r,t,o,String(f),!0)):s.push("");return a.forEach(function(c){c.match(/^\d+$/)||s.push(b(e,r,t,o,c,!0))}),s}function b(e,r,t,o,a,s){var f,u,c;if(c=Object.getOwnPropertyDescriptor(r,a)||{value:r[a]},c.get?c.set?u=e.stylize("[Getter/Setter]","special"):u=e.stylize("[Getter]","special"):c.set&&(u=e.stylize("[Setter]","special")),P(o,a)||(f="["+a+"]"),u||(e.seen.indexOf(c.value)<0?(E(t)?u=v(e,c.value,null):u=v(e,c.value,t-1),u.indexOf(`
`)>-1&&(s?u=u.split(`
`).map(function(p){return"  "+p}).join(`
`).substr(2):u=`
`+u.split(`
`).map(function(p){return"   "+p}).join(`
`))):u=e.stylize("[Circular]","special")),h(f)){if(s&&a.match(/^\d+$/))return u;f=JSON.stringify(""+a),f.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(f=f.substr(1,f.length-2),f=e.stylize(f,"name")):(f=f.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),f=e.stylize(f,"string"))}return f+": "+u}function K(e,r,t){var o=e.reduce(function(a,s){return s.indexOf(`
`)>=0,a+s.replace(/\u001b\[\d\d?m/g,"").length+1},0);return o>60?t[0]+(r===""?"":r+`
 `)+" "+e.join(`,
  `)+" "+t[1]:t[0]+r+" "+e.join(", ")+" "+t[1]}i.types=me();function C(e){return Array.isArray(e)}i.isArray=C;function N(e){return typeof e=="boolean"}i.isBoolean=N;function E(e){return e===null}i.isNull=E;function L(e){return e==null}i.isNullOrUndefined=L;function R(e){return typeof e=="number"}i.isNumber=R;function D(e){return typeof e=="string"}i.isString=D;function Q(e){return typeof e=="symbol"}i.isSymbol=Q;function h(e){return e===void 0}i.isUndefined=h;function j(e){return S(e)&&O(e)==="[object RegExp]"}i.isRegExp=j,i.types.isRegExp=j;function S(e){return typeof e=="object"&&e!==null}i.isObject=S;function I(e){return S(e)&&O(e)==="[object Date]"}i.isDate=I,i.types.isDate=I;function B(e){return S(e)&&(O(e)==="[object Error]"||e instanceof Error)}i.isError=B,i.types.isNativeError=B;function A(e){return typeof e=="function"}i.isFunction=A;function X(e){return e===null||typeof e=="boolean"||typeof e=="number"||typeof e=="string"||typeof e=="symbol"||typeof e>"u"}i.isPrimitive=X,i.isBuffer=be();function O(e){return Object.prototype.toString.call(e)}function W(e){return e<10?"0"+e.toString(10):e.toString(10)}var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Y(){var e=new Date,r=[W(e.getHours()),W(e.getMinutes()),W(e.getSeconds())].join(":");return[e.getDate(),T[e.getMonth()],r].join(" ")}i.log=function(){console.log("%s - %s",Y(),i.format.apply(i,arguments))},i.inherits=ge(),i._extend=function(e,r){if(!r||!S(r))return e;for(var t=Object.keys(r),o=t.length;o--;)e[t[o]]=r[t[o]];return e};function P(e,r){return Object.prototype.hasOwnProperty.call(e,r)}var w=typeof Symbol<"u"?Symbol("util.promisify.custom"):void 0;i.promisify=function(r){if(typeof r!="function")throw new TypeError('The "original" argument must be of type Function');if(w&&r[w]){var t=r[w];if(typeof t!="function")throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,w,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var o,a,s=new Promise(function(c,p){o=c,a=p}),f=[],u=0;u<arguments.length;u++)f.push(arguments[u]);f.push(function(c,p){c?a(c):o(p)});try{r.apply(this,f)}catch(c){a(c)}return s}return Object.setPrototypeOf(t,Object.getPrototypeOf(r)),w&&Object.defineProperty(t,w,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,g(r))},i.promisify.custom=w;function U(e,r){if(!e){var t=new Error("Promise was rejected with a falsy value");t.reason=e,e=t}return r(e)}function q(e){if(typeof e!="function")throw new TypeError('The "original" argument must be of type Function');function r(){for(var t=[],o=0;o<arguments.length;o++)t.push(arguments[o]);var a=t.pop();if(typeof a!="function")throw new TypeError("The last argument must be of type Function");var s=this,f=function(){return a.apply(s,arguments)};e.apply(this,t).then(function(u){process.nextTick(f.bind(null,null,u))},function(u){process.nextTick(U.bind(null,u,f))})}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),Object.defineProperties(r,g(e)),r}i.callbackify=q}(x)),x}fe.TextEncoder=typeof TextEncoder<"u"?TextEncoder:ue().TextEncoder;fe.TextDecoder=typeof TextDecoder<"u"?TextDecoder:ue().TextDecoder;export{fe as l};