import{r as dr}from"./statuses.b2d010d2.js";import{l as T}from"./headers-polyfill.7ce5031a.js";import{c as Z}from"./cookie.53f99c9c.js";import{l as ee}from"./is-node-process.bb526cb9.js";import{r as pr}from"./node-fetch.3e70a82b.js";import{l as fr}from"./strict-event-emitter.40e95e3a.js";import{l as F}from"./@open-draft.7980370a.js";import{l as ke}from"./outvariant.5daad0ff.js";import{r as hr,a as mr,l as Te,b as j,c as vr,g as gr}from"./@mswjs.f2418736.js";import{r as yr}from"./js-levenshtein.4de7e1ea.js";import{r as wr}from"./graphql.a194d77a.js";import{n as br}from"./@babel.9e3f1cbd.js";function Er(e){for(var r=[],t=0;t<e.length;){var n=e[t];if(n==="*"||n==="+"||n==="?"){r.push({type:"MODIFIER",index:t,value:e[t++]});continue}if(n==="\\"){r.push({type:"ESCAPED_CHAR",index:t++,value:e[t++]});continue}if(n==="{"){r.push({type:"OPEN",index:t,value:e[t++]});continue}if(n==="}"){r.push({type:"CLOSE",index:t,value:e[t++]});continue}if(n===":"){for(var o="",s=t+1;s<e.length;){var a=e.charCodeAt(s);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){o+=e[s++];continue}break}if(!o)throw new TypeError("Missing parameter name at ".concat(t));r.push({type:"NAME",index:t,value:o}),t=s;continue}if(n==="("){var c=1,i="",s=t+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){i+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));i+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(t));if(!i)throw new TypeError("Missing pattern at ".concat(t));r.push({type:"PATTERN",index:t,value:i}),t=s;continue}r.push({type:"CHAR",index:t,value:e[t++]})}return r.push({type:"END",index:t,value:""}),r}function re(e,r){r===void 0&&(r={});for(var t=Er(e),n=r.prefixes,o=n===void 0?"./":n,s="[^".concat(C(r.delimiter||"/#?"),"]+?"),a=[],c=0,i=0,l="",d=function(_){if(i<t.length&&t[i].type===_)return t[i++].value},u=function(_){var x=d(_);if(x!==void 0)return x;var P=t[i],Q=P.type,X=P.index;throw new TypeError("Unexpected ".concat(Q," at ").concat(X,", expected ").concat(_))},p=function(){for(var _="",x;x=d("CHAR")||d("ESCAPED_CHAR");)_+=x;return _};i<t.length;){var m=d("CHAR"),g=d("NAME"),w=d("PATTERN");if(g||w){var h=m||"";o.indexOf(h)===-1&&(l+=h,h=""),l&&(a.push(l),l=""),a.push({name:g||c++,prefix:h,suffix:"",pattern:w||s,modifier:d("MODIFIER")||""});continue}var b=m||d("ESCAPED_CHAR");if(b){l+=b;continue}l&&(a.push(l),l="");var A=d("OPEN");if(A){var h=p(),L=d("NAME")||"",v=d("PATTERN")||"",S=p();u("CLOSE"),a.push({name:L||(v?c++:""),pattern:L&&!v?s:v,prefix:h,suffix:S,modifier:d("MODIFIER")||""});continue}u("END")}return a}function _r(e,r){return Se(re(e,r),r)}function Se(e,r){r===void 0&&(r={});var t=te(r),n=r.encode,o=n===void 0?function(i){return i}:n,s=r.validate,a=s===void 0?!0:s,c=e.map(function(i){if(typeof i=="object")return new RegExp("^(?:".concat(i.pattern,")$"),t)});return function(i){for(var l="",d=0;d<e.length;d++){var u=e[d];if(typeof u=="string"){l+=u;continue}var p=i?i[u.name]:void 0,m=u.modifier==="?"||u.modifier==="*",g=u.modifier==="*"||u.modifier==="+";if(Array.isArray(p)){if(!g)throw new TypeError('Expected "'.concat(u.name,'" to not repeat, but got an array'));if(p.length===0){if(m)continue;throw new TypeError('Expected "'.concat(u.name,'" to not be empty'))}for(var w=0;w<p.length;w++){var h=o(p[w],u);if(a&&!c[d].test(h))throw new TypeError('Expected all "'.concat(u.name,'" to match "').concat(u.pattern,'", but got "').concat(h,'"'));l+=u.prefix+h+u.suffix}continue}if(typeof p=="string"||typeof p=="number"){var h=o(String(p),u);if(a&&!c[d].test(h))throw new TypeError('Expected "'.concat(u.name,'" to match "').concat(u.pattern,'", but got "').concat(h,'"'));l+=u.prefix+h+u.suffix;continue}if(!m){var b=g?"an array":"a string";throw new TypeError('Expected "'.concat(u.name,'" to be ').concat(b))}}return l}}function Rr(e,r){var t=[],n=ne(e,t,r);return xe(n,t,r)}function xe(e,r,t){t===void 0&&(t={});var n=t.decode,o=n===void 0?function(s){return s}:n;return function(s){var a=e.exec(s);if(!a)return!1;for(var c=a[0],i=a.index,l=Object.create(null),d=function(p){if(a[p]===void 0)return"continue";var m=r[p-1];m.modifier==="*"||m.modifier==="+"?l[m.name]=a[p].split(m.prefix+m.suffix).map(function(g){return o(g,m)}):l[m.name]=o(a[p],m)},u=1;u<a.length;u++)d(u);return{path:c,index:i,params:l}}}function C(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function te(e){return e&&e.sensitive?"":"i"}function kr(e,r){if(!r)return e;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,o=t.exec(e.source);o;)r.push({name:o[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),o=t.exec(e.source);return e}function Tr(e,r,t){var n=e.map(function(o){return ne(o,r,t).source});return new RegExp("(?:".concat(n.join("|"),")"),te(t))}function Sr(e,r,t){return Pe(re(e,t),r,t)}function Pe(e,r,t){t===void 0&&(t={});for(var n=t.strict,o=n===void 0?!1:n,s=t.start,a=s===void 0?!0:s,c=t.end,i=c===void 0?!0:c,l=t.encode,d=l===void 0?function(X){return X}:l,u=t.delimiter,p=u===void 0?"/#?":u,m=t.endsWith,g=m===void 0?"":m,w="[".concat(C(g),"]|$"),h="[".concat(C(p),"]"),b=a?"^":"",A=0,L=e;A<L.length;A++){var v=L[A];if(typeof v=="string")b+=C(d(v));else{var S=C(d(v.prefix)),_=C(d(v.suffix));if(v.pattern)if(r&&r.push(v),S||_)if(v.modifier==="+"||v.modifier==="*"){var x=v.modifier==="*"?"?":"";b+="(?:".concat(S,"((?:").concat(v.pattern,")(?:").concat(_).concat(S,"(?:").concat(v.pattern,"))*)").concat(_,")").concat(x)}else b+="(?:".concat(S,"(").concat(v.pattern,")").concat(_,")").concat(v.modifier);else v.modifier==="+"||v.modifier==="*"?b+="((?:".concat(v.pattern,")").concat(v.modifier,")"):b+="(".concat(v.pattern,")").concat(v.modifier);else b+="(?:".concat(S).concat(_,")").concat(v.modifier)}}if(i)o||(b+="".concat(h,"?")),b+=t.endsWith?"(?=".concat(w,")"):"$";else{var P=e[e.length-1],Q=typeof P=="string"?h.indexOf(P[P.length-1])>-1:P===void 0;o||(b+="(?:".concat(h,"(?=").concat(w,"))?")),Q||(b+="(?=".concat(h,"|").concat(w,")"))}return new RegExp(b,te(t))}function ne(e,r,t){return e instanceof RegExp?kr(e,r):Array.isArray(e)?Tr(e,r,t):Sr(e,r,t)}const xr=Object.freeze(Object.defineProperty({__proto__:null,parse:re,compile:_r,tokensToFunction:Se,match:Rr,regexpToFunction:xe,tokensToRegexp:Pe,pathToRegexp:ne},Symbol.toStringTag,{value:"Module"})),Pr=br(xr);var Cr=Object.create,O=Object.defineProperty,Mr=Object.defineProperties,$r=Object.getOwnPropertyDescriptor,Ar=Object.getOwnPropertyDescriptors,Lr=Object.getOwnPropertyNames,W=Object.getOwnPropertySymbols,Or=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,pe=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))oe.call(r,t)&&pe(e,t,r[t]);if(W)for(var t of W(r))Ce.call(r,t)&&pe(e,t,r[t]);return e},E=(e,r)=>Mr(e,Ar(r)),Hr=(e,r)=>{var t={};for(var n in e)oe.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&W)for(var n of W(e))r.indexOf(n)<0&&Ce.call(e,n)&&(t[n]=e[n]);return t},Me=(e,r)=>{for(var t in r)O(e,t,{get:r[t],enumerable:!0})},$e=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of Lr(r))!oe.call(e,o)&&o!==t&&O(e,o,{get:()=>r[o],enumerable:!(n=$r(r,o))||n.enumerable});return e},H=(e,r,t)=>(t=e!=null?Cr(Or(e)):{},$e(r||!e||!e.__esModule?O(t,"default",{value:e,enumerable:!0}):t,e)),Ir=e=>$e(O({},"__esModule",{value:!0}),e),Ae={};Me(Ae,{GraphQLHandler:()=>B,MockedRequest:()=>I,RESTMethods:()=>nr,RequestHandler:()=>ue,RestHandler:()=>G,cleanUrl:()=>ce,compose:()=>er,context:()=>Le,createResponseComposition:()=>Y,defaultContext:()=>D,defaultResponse:()=>rr,graphql:()=>Tn,graphqlContext:()=>sr,handleRequest:()=>de,matchRequestUrl:()=>le,response:()=>tr,rest:()=>_n,restContext:()=>or,setupWorker:()=>En});var Nn=Ir(Ae),Le={};Me(Le,{body:()=>Ie,cookie:()=>ae,data:()=>Ue,delay:()=>We,errors:()=>qe,extensions:()=>Ne,fetch:()=>Fe,json:()=>$,set:()=>He,status:()=>Oe,text:()=>je,xml:()=>De});var Ur=H(dr),Oe=(e,r)=>t=>(t.status=e,t.statusText=r||Ur.default[String(e)],t),Nr=T;function He(...e){return r=>{const[t,n]=e;return typeof t=="string"?r.headers.append(t,n):(0,Nr.objectToHeaders)(t).forEach((s,a)=>{r.headers.append(a,s)}),r}}var Wr=H(Z),ae=(e,r,t)=>n=>{const o=Wr.serialize(e,r,t);return n.headers.append("Set-Cookie",o),typeof document<"u"&&(document.cookie=o),n},Ie=e=>r=>(r.body=e,r);function k(e){try{return JSON.parse(e)}catch{return}}function fe(e){return e!=null&&typeof e=="object"&&!Array.isArray(e)}function M(e,r){return Object.entries(r).reduce((t,[n,o])=>{const s=t[n];return Array.isArray(s)&&Array.isArray(o)?(t[n]=s.concat(o),t):fe(s)&&fe(o)?(t[n]=M(s,o),t):(t[n]=o,t)},Object.assign({},e))}var $=e=>r=>(r.headers.set("Content-Type","application/json"),r.body=JSON.stringify(e),r),Ue=e=>r=>{const t=k(r.body)||{},n=M(t,{data:e});return $(n)(r)},Ne=e=>r=>{const t=k(r.body)||{},n=M(t,{extensions:e});return $(n)(r)},qr=ee.exports,z=2147483647,he=100,Fr=400,jr=5,me=()=>(0,qr.isNodeProcess)()?jr:Math.floor(Math.random()*(Fr-he)+he),We=e=>r=>{let t;if(typeof e=="string")switch(e){case"infinite":{t=z;break}case"real":{t=me();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number to "ctx.delay".`)}else if(typeof e>"u")t=me();else{if(e>z)throw new Error(`Failed to delay a response: provided delay duration (${e}) exceeds the maximum allowed duration for "setTimeout" (${z}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`);t=e}return r.delay=t,r},qe=e=>r=>{if(e==null)return r;const t=k(r.body)||{},n=M(t,{errors:e});return $(n)(r)},Dr=ee.exports,Gr=T,ve=(0,Dr.isNodeProcess)()?pr():window.fetch,ge=e=>{const r=new Gr.Headers(e.headers);return r.set("x-msw-bypass","true"),E(y({},e),{headers:r.all()})},Br=e=>{const{body:r,method:t}=e,n=E(y({},e),{body:void 0});return["GET","HEAD"].includes(t)||(typeof r=="object"||typeof r=="number"||typeof r=="boolean"?n.body=JSON.stringify(r):n.body=r),n},Fe=(e,r={})=>{if(typeof e=="string")return ve(e,ge(r));const t=Br(e),n=ge(t);return ve(e.url.href,n)},je=e=>r=>(r.headers.set("Content-Type","text/plain"),r.body=e,r),De=e=>r=>(r.headers.set("Content-Type","text/xml"),r.body=e,r),Qr=ee.exports,ye=fr,Xr=F,zr=F,J=(e,r,t)=>[e.active,e.installing,e.waiting].filter(Boolean).find(a=>t(a.scriptURL,r))||null;function Jr(e){return new URL(e,location.origin).href}var Kr=ke,Vr="[MSW]";function se(e,...r){const t=(0,Kr.format)(e,...r);return`${Vr} ${t}`}function Yr(e,...r){console.warn(se(e,...r))}function Zr(e,...r){console.error(se(e,...r))}var f={formatMessage:se,warn:Yr,error:Zr},et=async(e,r={},t)=>{const n=Jr(e),o=await navigator.serviceWorker.getRegistrations().then(i=>i.filter(l=>J(l,n,t)));!navigator.serviceWorker.controller&&o.length>0&&location.reload();const[s]=o;if(s)return s.update().then(()=>[J(s,n,t),s]);const[a,c]=await(0,zr.until)(async()=>{const i=await navigator.serviceWorker.register(e,r);return[J(i,n,t),i]});if(a){if(a.message.includes("(404)")){const l=new URL((r==null?void 0:r.scope)||"/",location.href);throw new Error(f.formatMessage(`Failed to register a Service Worker for scope ('${l.href}') with script ('${n}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`))}throw new Error(f.formatMessage(`Failed to register the Service Worker:

%s`,a.message))}return c};function Ge(e={}){if(e.quiet)return;const r=e.message||"Mocking enabled.";console.groupCollapsed(`%c${f.formatMessage(r)}`,"color:orangered;font-weight:bold;"),console.log("%cDocumentation: %chttps://mswjs.io/docs","font-weight:bold","font-weight:normal"),console.log("Found an issue? https://github.com/mswjs/msw/issues"),e.workerUrl&&console.log("Worker script URL:",e.workerUrl),e.workerScope&&console.log("Worker scope:",e.workerScope),console.groupEnd()}async function rt(e,r){var t,n;if(e.workerChannel.send("MOCK_ACTIVATE"),await e.events.once("MOCKING_ENABLED"),e.isMockingEnabled){f.warn('Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.');return}e.isMockingEnabled=!0,Ge({quiet:r.quiet,workerScope:(t=e.registration)==null?void 0:t.scope,workerUrl:(n=e.worker)==null?void 0:n.scriptURL})}var tt=class{constructor(e){this.port=e}postMessage(e,...r){const[t,n]=r;this.port.postMessage({type:e,data:t},{transfer:n})}},Be=class extends Error{constructor(e){super(e),this.name="NetworkError"}},nt=j,ot=T,at=H(Z),we=Te,st=j,it=vr,ct=T,lt=H(Z);function be(){return lt.parse(document.cookie)}function ut(e){if(typeof document>"u"||typeof location>"u")return{};switch(e.credentials){case"same-origin":return location.origin===e.url.origin?be():{};case"include":return be();default:return{}}}var dt=T;function pt(e){var r,t;const n=(0,dt.stringToHeaders)(e),o=n.get("content-type")||"text/plain",s=n.get("content-disposition");if(!s)throw new Error('"Content-Disposition" header is required.');const a=s.split(";").reduce((l,d)=>{const[u,...p]=d.trim().split("=");return l[u]=p.join("="),l},{}),c=(r=a.name)==null?void 0:r.slice(1,-1),i=(t=a.filename)==null?void 0:t.slice(1,-1);return{name:c,filename:i,contentType:o}}function ft(e,r){const t=r==null?void 0:r.get("content-type");if(!t)return;const[,...n]=t.split(/; */),o=n.filter(i=>i.startsWith("boundary=")).map(i=>i.replace(/^boundary=/,""))[0];if(!o)return;const s=new RegExp(`--+${o}`),a=e.split(s).filter(i=>i.startsWith(`\r
`)&&i.endsWith(`\r
`)).map(i=>i.trimStart().replace(/\r\n$/,""));if(!a.length)return;const c={};try{for(const i of a){const[l,...d]=i.split(`\r
\r
`),u=d.join(`\r
\r
`),{contentType:p,filename:m,name:g}=pt(l),w=m===void 0?u:new File([u],m,{type:p}),h=c[g];h===void 0?c[g]=w:Array.isArray(h)?c[g]=[...h,w]:c[g]=[h,w]}return c}catch{return}}function Qe(e,r){var t;if(!e)return e;const n=((t=r==null?void 0:r.get("content-type"))==null?void 0:t.toLowerCase())||"";return n.startsWith("multipart/form-data")&&typeof e!="object"?ft(e.toString(),r)||e:n.includes("json")&&typeof e!="object"&&k(e.toString())||e}function ie(e,r){return e.toLowerCase()===r.toLowerCase()}var I=class extends st.IsomorphicRequest{constructor(e,r={}){super(e,r),r.id&&(this.id=r.id),this.cache=r.cache||"default",this.destination=r.destination||"",this.integrity=r.integrity||"",this.keepalive=r.keepalive||!1,this.mode=r.mode||"cors",this.priority=r.priority||"auto",this.redirect=r.redirect||"follow",this.referrer=r.referrer||"",this.referrerPolicy=r.referrerPolicy||"no-referrer",this.cookies=r.cookies||this.getCookies()}get body(){const e=(0,it.decodeBuffer)(this._body),r=Qe(e,this.headers);if(!(ie(this.method,"GET")&&r===""))return r}passthrough(){return{status:101,statusText:"Continue",headers:new ct.Headers,body:null,passthrough:!0,once:!1}}getCookies(){var e;const r=this.headers.get("cookie"),t=r?at.parse(r):{};we.store.hydrate();const n=Array.from((e=we.store.get(E(y({},this),{url:this.url.href})))==null?void 0:e.entries()).reduce((a,[c,{value:i}])=>Object.assign(a,{[c.trim()]:i}),{}),o=ut(this),s=y(y({},o),n);for(const[a,c]of Object.entries(s))this.headers.append("cookie",`${a}=${c}`);return y(y({},s),t)}};function ht(e){const r=new URL(e.url),t=new ot.Headers(e.headers);return new I(r,E(y({},e),{body:(0,nt.encodeBuffer)(e.body||""),headers:t}))}var mt=F,vt=async(e,r,t)=>{const n=r.filter(s=>s.test(e,t));if(n.length===0)return{handler:void 0,response:void 0};const o=await n.reduce(async(s,a)=>{const c=await s;if(c!=null&&c.response)return s;const i=await a.run(e,t);return i===null||i.handler.shouldSkip?null:i.response?(i.response.once&&a.markAsSkipped(!0),i):{request:i.request,handler:i.handler,response:void 0,parsedResult:i.parsedResult}},Promise.resolve(null));return o?{handler:o.handler,publicRequest:o.request,parsedRequest:o.parsedResult,response:o.response}:{handler:void 0,response:void 0}},Xe=H(yr()),gt=wr,U=e=>e.referrer.startsWith(e.url.origin)?e.url.pathname:new URL(e.url.pathname,`${e.url.protocol}//${e.url.host}`).href;function ze(e){var r;const t=e.definitions.find(n=>n.kind==="OperationDefinition");return{operationType:t==null?void 0:t.operation,operationName:(r=t==null?void 0:t.name)==null?void 0:r.value}}function yt(e){try{const r=(0,gt.parse)(e);return ze(r)}catch(r){return r}}function wt(e,r,t){const n={variables:e};for(const[o,s]of Object.entries(r)){if(!(o in t))throw new Error(`Given files do not have a key '${o}' .`);for(const a of s){const[c,...i]=a.split(".").reverse(),l=i.reverse();let d=n;for(const u of l){if(!(u in d))throw new Error(`Property '${l}' is not in operations.`);d=d[u]}d[c]=t[o]}}return n.variables}function bt(e){var r,t;switch(e.method){case"GET":{const n=e.url.searchParams.get("query"),o=e.url.searchParams.get("variables")||"";return{query:n,variables:k(o)}}case"POST":{if((r=e.body)!=null&&r.query){const{query:n,variables:o}=e.body;return{query:n,variables:o}}if((t=e.body)!=null&&t.operations){const n=e.body,{operations:o,map:s}=n,a=Hr(n,["operations","map"]),c=k(o)||{};if(!c.query)return null;const i=k(s||"")||{},l=c.variables?wt(c.variables,i,a):{};return{query:c.query,variables:l}}}default:return null}}function Je(e){const r=bt(e);if(!r||!r.query)return;const{query:t,variables:n}=r,o=yt(t);if(o instanceof Error){const s=U(e);throw new Error(f.formatMessage(`Failed to intercept a GraphQL request to "%s %s": cannot parse query. See the error message from the parser below.

%s`,e.method,s,o.message))}return{operationType:o.operationType,operationName:o.operationName,variables:n}}function Ke(e){return e<300?"#69AB32":e<400?"#F0BB4B":"#E95F5D"}function Ve(){const e=new Date;return[e.getHours(),e.getMinutes(),e.getSeconds()].map(String).map(r=>r.slice(0,2)).map(r=>r.padStart(2,"0")).join(":")}function Ye(e){return E(y({},e),{body:e.body,headers:e.headers.all()})}var Et=T;function Ze(e){const r=(0,Et.objectToHeaders)(e.headers);return E(y({},e),{body:Qe(e.body,r)})}var _t=Pr,Rt=gr,kt=/[\?|#].*$/g;function Tt(e){return new URL(`/${e}`,"http://localhost").searchParams}function ce(e){return e.replace(kt,"")}function St(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}function xt(e,r){if(St(e)||e.startsWith("*"))return e;const t=r||typeof document<"u"&&document.baseURI;return t?decodeURI(new URL(encodeURI(e),t).href):e}function Pt(e,r){if(e instanceof RegExp)return e;const t=xt(e,r);return ce(t)}function Ct(e){return e.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g,(r,t,n)=>{const o="(.*)";return t?t.startsWith(":")?`${t}${n}`:`${t}${o}`:o}).replace(/([^\/])(:)(?=\d+)/,"$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/,"$1\\$2")}function le(e,r,t){const n=Pt(r,t),o=typeof n=="string"?Ct(n):n,s=(0,Rt.getCleanUrl)(e),a=(0,_t.match)(o,{decode:decodeURIComponent})(s),c=a&&a.params||{};return{matches:a!==!1,params:c}}var Mt=T;function er(...e){return(...r)=>e.reduceRight((t,n)=>t instanceof Promise?Promise.resolve(t).then(n):n(t),r[0])}var rr={status:200,statusText:"OK",body:null,delay:0,once:!1,passthrough:!1},$t=[];function Y(e,r=$t){return async(...t)=>{const n=Object.assign({},rr,{headers:new Mt.Headers({"x-powered-by":"msw"})},e),o=[...r,...t].filter(Boolean);return o.length>0?er(...o)(n):n}}var tr=Object.assign(Y(),{once:Y({once:!0}),networkError(e){throw new Be(e)}}),At=/\/msw\/src\/(.+)/,Lt=/(node_modules)?[\/\\]lib[\/\\](umd|esm|iief|cjs)[\/\\]|^[^\/\\]*$/;function Ot(e){const r=e.stack;if(!r)return;const n=r.split(`
`).slice(1).find(s=>!(At.test(s)||Lt.test(s)));return n?n.replace(/\s*at [^()]*\(([^)]+)\)/,"$1").replace(/^@/,""):void 0}function Ht(e){return e?typeof e[Symbol.iterator]=="function":!1}var D={status:Oe,set:He,delay:We,fetch:Fe},ue=class{constructor(e){this.shouldSkip=!1,this.ctx=e.ctx||D,this.resolver=e.resolver;const r=Ot(new Error);this.info=E(y({},e.info),{callFrame:r})}parse(e,r){return null}test(e,r){return this.predicate(e,this.parse(e,r),r)}getPublicRequest(e,r){return e}markAsSkipped(e=!0){this.shouldSkip=e}async run(e,r){if(this.shouldSkip)return null;const t=this.parse(e,r);if(!this.predicate(e,t,r))return null;const o=this.getPublicRequest(e,t),a=await this.wrapResolver(this.resolver)(o,tr,this.ctx);return this.createExecutionResult(t,o,a)}wrapResolver(e){return async(r,t,n)=>{const o=this.resolverGenerator||await e(r,t,n);if(Ht(o)){const{value:s,done:a}=o[Symbol.iterator]().next(),c=await s;return!c&&a?this.resolverGeneratorResult:(this.resolverGenerator||(this.resolverGenerator=o),this.resolverGeneratorResult=c,c)}return o}}createExecutionResult(e,r,t){return{handler:this,parsedResult:e||null,request:r,response:t||null}}},nr=(e=>(e.HEAD="HEAD",e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.OPTIONS="OPTIONS",e.DELETE="DELETE",e))(nr||{}),or=E(y({},D),{cookie:ae,body:Ie,text:je,json:$,xml:De}),It=class extends I{constructor(e,r){super(e.url,E(y({},e),{body:e._body})),this.params=r,this.id=e.id}},G=class extends ue{constructor(e,r,t){super({info:{header:`${e} ${r}`,path:r,method:e},ctx:or,resolver:t}),this.checkRedundantQueryParameters()}checkRedundantQueryParameters(){const{method:e,path:r}=this.info;if(r instanceof RegExp||ce(r)===r)return;Tt(r).forEach((o,s)=>{}),f.warn(`Found a redundant usage of query parameters in the request handler URL for "${e} ${r}". Please match against a path instead and access query parameters in the response resolver function using "req.url.searchParams".`)}parse(e,r){return le(e.url,this.info.path,r==null?void 0:r.baseUrl)}getPublicRequest(e,r){return new It(e,r.params||{})}predicate(e,r){return(this.info.method instanceof RegExp?this.info.method.test(e.method):ie(this.info.method,e.method))&&r.matches}log(e,r){const t=U(e),n=Ye(e),o=Ze(r),s=Ke(r.status);console.groupCollapsed(f.formatMessage("%s %s %s (%c%s%c)"),Ve(),e.method,t,`color:${s}`,`${r.status} ${r.statusText}`,"color:inherit"),console.log("Request",n),console.log("Handler:",this),console.log("Response",o),console.groupEnd()}},N=ke,Ut=(e,r)=>t=>{Nt(e);const n=k(t.body)||{},o=M(n,{[e]:r});return $(o)(t)};function Nt(e){(0,N.invariant)(e.trim()!=="",f.formatMessage("Failed to set a custom field on a GraphQL response: field name cannot be empty.")),(0,N.invariant)(e!=="data",f.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.data()" instead?',e)),(0,N.invariant)(e!=="errors",f.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.errors()" instead?',e)),(0,N.invariant)(e!=="extensions",f.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.extensions()" instead?',e))}function ar(e,r){try{return e()}catch(t){r==null||r(t)}}var sr=E(y({},D),{data:Ue,extensions:Ne,errors:qe,cookie:ae,field:Ut});function Wt(e){return e==null?!1:typeof e=="object"&&"kind"in e&&"definitions"in e}var qt=class extends I{constructor(e,r){super(e.url,E(y({},e),{body:e._body})),this.variables=r}},B=class extends ue{constructor(e,r,t,n){let o=r;if(Wt(r)){const a=ze(r);if(a.operationType!==e)throw new Error(`Failed to create a GraphQL handler: provided a DocumentNode with a mismatched operation type (expected "${e}", but got "${a.operationType}").`);if(!a.operationName)throw new Error("Failed to create a GraphQL handler: provided a DocumentNode with no operation name.");o=a.operationName}const s=e==="all"?`${e} (origin: ${t.toString()})`:`${e} ${o} (origin: ${t.toString()})`;super({info:{header:s,operationType:e,operationName:o},ctx:sr,resolver:n}),this.endpoint=t}parse(e){return ar(()=>Je(e),r=>console.error(r.message))}getPublicRequest(e,r){return new qt(e,(r==null?void 0:r.variables)||{})}predicate(e,r){if(!r)return!1;if(!r.operationName&&this.info.operationType!=="all"){const s=U(e);return f.warn(`Failed to intercept a GraphQL request at "${e.method} ${s}": anonymous GraphQL operations are not supported.

Consider naming this operation or using "graphql.operation" request handler to intercept GraphQL requests regardless of their operation name/type. Read more: https://mswjs.io/docs/api/graphql/operation      `),!1}const t=le(e.url,this.endpoint),n=this.info.operationType==="all"||r.operationType===this.info.operationType,o=this.info.operationName instanceof RegExp?this.info.operationName.test(r.operationName||""):r.operationName===this.info.operationName;return t.matches&&n&&o}log(e,r,t){const n=Ye(e),o=Ze(r),s=Ke(r.status),a=t!=null&&t.operationName?`${t==null?void 0:t.operationType} ${t==null?void 0:t.operationName}`:`anonymous ${t==null?void 0:t.operationType}`;console.groupCollapsed(f.formatMessage("%s %s (%c%s%c)"),Ve(),`${a}`,`color:${s}`,`${r.status} ${r.statusText}`,"color:inherit"),console.log("Request:",n),console.log("Handler:",this),console.log("Response:",o),console.groupEnd()}},Ft=3,jt=4,ir=.5;function Dt(e){return e.reduce((r,t)=>(t instanceof G&&r.rest.push(t),t instanceof B&&r.graphql.push(t),r),{rest:[],graphql:[]})}function Gt(){return(e,r)=>{const{path:t,method:n}=r.info;if(t instanceof RegExp||n instanceof RegExp)return 1/0;const s=ie(e.method,n)?ir:0,a=U(e);return(0,Xe.default)(a,t)-s}}function Bt(e){return(r,t)=>{if(typeof e.operationName>"u")return 1/0;const{operationType:n,operationName:o}=t.info;if(typeof o!="string")return 1/0;const a=e.operationType===n?ir:0;return(0,Xe.default)(e.operationName,o)-a}}function Qt(e,r,t){return r.reduce((o,s)=>{const a=t(e,s);return o.concat([[a,s]])},[]).sort(([o],[s])=>o-s).filter(([o])=>o<=Ft).slice(0,jt).map(([,o])=>o)}function Xt(e){return e.length>1?`Did you mean to request one of the following resources instead?

${e.map(r=>`  \u2022 ${r.info.header}`).join(`
`)}`:`Did you mean to request "${e[0].info.header}" instead?`}function zt(e,r,t="warn"){const n=ar(()=>Je(e));function o(){const c=Dt(r),i=n?c.graphql:c.rest,l=Qt(e,i,n?Bt(n):Gt());return l.length>0?Xt(l):""}function s(){const c=U(e),i=n?`${n.operationType} ${n.operationName} (${e.method} ${c})`:`${e.method} ${c}`,l=o();return["captured a request without a matching request handler:",`  \u2022 ${i}`,l,`If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`].filter(Boolean).join(`

`)}function a(c){const i=s();switch(c){case"error":throw f.error("Error: %s",i),new Error(f.formatMessage('Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'));case"warn":{f.warn("Warning: %s",i);break}case"bypass":break;default:throw new Error(f.formatMessage('Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',c))}}if(typeof t=="function"){t(e,{warning:a.bind(null,"warn"),error:a.bind(null,"error")});return}a(t)}var Ee=Te;function Jt(e,r){Ee.store.add(E(y({},e),{url:e.url.toString()}),r),Ee.store.persist()}async function de(e,r,t,n,o){var s,a,c,i,l,d;if(n.emit("request:start",e),e.headers.get("x-msw-bypass")==="true"){n.emit("request:end",e),(s=o==null?void 0:o.onPassthroughResponse)==null||s.call(o,e);return}const[u,p]=await(0,mt.until)(()=>vt(e,r,o==null?void 0:o.resolutionContext));if(u)throw n.emit("unhandledException",u,e),u;const{handler:m,response:g}=p;if(!m){zt(e,r,t.onUnhandledRequest),n.emit("request:unhandled",e),n.emit("request:end",e),(a=o==null?void 0:o.onPassthroughResponse)==null||a.call(o,e);return}if(!g){f.warn(`Expected response resolver to return a mocked response Object, but got %s. The original response is going to be used instead.

  \u2022 %s
    %s`,g,m.info.header,m.info.callFrame),n.emit("request:end",e),(c=o==null?void 0:o.onPassthroughResponse)==null||c.call(o,e);return}if(g.passthrough){n.emit("request:end",e),(i=o==null?void 0:o.onPassthroughResponse)==null||i.call(o,e);return}Jt(e,g),n.emit("request:match",e);const w=p,h=((l=o==null?void 0:o.transformResponse)==null?void 0:l.call(o,g))||g;return(d=o==null?void 0:o.onMockedResponse)==null||d.call(o,h,w),n.emit("request:end",e),h}var _e=T;function cr(e){return{status:e.status,statusText:e.statusText,headers:(0,_e.flattenHeadersObject)((0,_e.headersToObject)(e.headers)),body:e.body}}var Kt=(e,r)=>async(t,n)=>{const o=new tt(t.ports[0]),s=ht(n.payload);try{await de(s,e.requestHandlers,r,e.emitter,{transformResponse:Vt,onPassthroughResponse(){o.postMessage("NOT_FOUND")},async onMockedResponse(a,{handler:c,publicRequest:i,parsedRequest:l}){if(a.body instanceof ReadableStream)throw new Error(f.formatMessage('Failed to construct a mocked response with a "ReadableStream" body: mocked streams are not supported. Follow https://github.com/mswjs/msw/issues/1336 for more details.'));const u=await new Response(a.body,a).arrayBuffer(),p=a.body==null?null:u;o.postMessage("MOCK_RESPONSE",E(y({},a),{body:p}),[u]),r.quiet||e.emitter.once("response:mocked",m=>{c.log(i,cr(m),l)})}})}catch(a){if(a instanceof Be){o.postMessage("NETWORK_ERROR",{name:a.name,message:a.message});return}a instanceof Error&&(f.error(`Uncaught exception in the request handler for "%s %s":

%s

This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/recipes/mocking-error-responses`,s.method,s.url,a),o.postMessage("MOCK_RESPONSE",{status:500,statusText:"Request Handler Error",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.name,message:a.message,stack:a.stack})}))}};function Vt(e){return{status:e.status,statusText:e.statusText,headers:e.headers.all(),body:e.body,delay:e.delay}}async function Yt(e,r){e.workerChannel.send("INTEGRITY_CHECK_REQUEST");const{payload:t}=await e.events.once("INTEGRITY_CHECK_RESPONSE");if(t!=="b3066ef78c2f9090b4ce87e874965995")throw new Error(`Currently active Service Worker (${t}) is behind the latest published one (b3066ef78c2f9090b4ce87e874965995).`);return r}var Re=F;function Zt(e){const r=window.XMLHttpRequest.prototype.send;window.XMLHttpRequest.prototype.send=function(...n){(0,Re.until)(()=>e).then(()=>{window.XMLHttpRequest.prototype.send=r,this.send(...n)})};const t=window.fetch;window.fetch=async(...n)=>(await(0,Re.until)(()=>e),window.fetch=t,window.fetch(...n))}function en(e){return(r,t)=>{var n;const{payload:o}=t;if((n=o.type)!=null&&n.includes("opaque"))return;const s=new Response(o.body||null,o);s.headers.get("x-powered-by")==="msw"?e.emitter.emit("response:mocked",s,o.requestId):e.emitter.emit("response:bypass",s,o.requestId)}}function rn(e,r){!(r!=null&&r.quiet)&&!location.href.startsWith(e.scope)&&f.warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${e.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`)}var tn=e=>function(t,n){const s=(async()=>{e.events.removeAllListeners(),e.workerChannel.on("REQUEST",Kt(e,t)),e.workerChannel.on("RESPONSE",en(e));const a=await et(t.serviceWorker.url,t.serviceWorker.options,t.findWorker),[c,i]=a;if(!c){const d=n!=null&&n.findWorker?f.formatMessage(`Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`,t.serviceWorker.url):f.formatMessage(`Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,t.serviceWorker.url,location.host);throw new Error(d)}e.worker=c,e.registration=i,e.events.addListener(window,"beforeunload",()=>{c.state!=="redundant"&&e.workerChannel.send("CLIENT_CLOSED"),window.clearInterval(e.keepAliveInterval)});const[l]=await(0,Xr.until)(()=>Yt(e,c));return l&&f.error(`Detected outdated Service Worker: ${l.message}

The mocking is still enabled, but it's highly recommended that you update your Service Worker by running:

$ npx msw init <PUBLIC_DIR>

This is necessary to ensure that the Service Worker is in sync with the library to guarantee its stability.
If this message still persists after updating, please report an issue: https://github.com/open-draft/msw/issues      `),e.keepAliveInterval=window.setInterval(()=>e.workerChannel.send("KEEPALIVE_REQUEST"),5e3),rn(i,e.startOptions),i})().then(async a=>{const c=a.installing||a.waiting;return c&&await new Promise(i=>{c.addEventListener("statechange",()=>{if(c.state==="activated")return i()})}),await rt(e,t).catch(i=>{throw new Error(`Failed to enable mocking: ${i==null?void 0:i.message}`)}),a});return t.waitUntilReady&&Zt(s),s};function lr(e={}){e.quiet||console.log(`%c${f.formatMessage("Mocking disabled.")}`,"color:orangered;font-weight:bold;")}var nn=e=>function(){var t;if(!e.isMockingEnabled){f.warn('Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.');return}e.workerChannel.send("MOCK_DEACTIVATE"),e.isMockingEnabled=!1,window.clearInterval(e.keepAliveInterval),lr({quiet:(t=e.startOptions)==null?void 0:t.quiet})};function on(e,...r){e.unshift(...r)}function an(e){e.forEach(r=>{r.markAsSkipped(!1)})}function sn(e,...r){return r.length>0?[...r]:[...e]}var cn={serviceWorker:{url:"/mockServiceWorker.js",options:null},quiet:!1,waitUntilReady:!0,onUnhandledRequest:"warn",findWorker(e,r){return e===r}};function ln(e){return M(cn,e||{})}function un(e,r){return t=>(r.startOptions=ln(t),e(r.startOptions,t||{}))}var dn=j,pn=hr(),fn=mr(),hn=j,K=()=>{throw new Error("Not implemented")};function mn(e){return E(y({},e),{ok:e.status>=200&&e.status<300,url:"",type:"default",status:e.status,statusText:e.statusText,headers:e.headers,body:new ReadableStream,redirected:e.headers.get("Location")!=null,async text(){return e.body||""},async json(){return JSON.parse(e.body||"")},async arrayBuffer(){return(0,hn.encodeBuffer)(e.body||"")},bodyUsed:!1,formData:K,blob:K,clone:K})}function vn(e,r){const t=new dn.BatchInterceptor({name:"fallback",interceptors:[new pn.FetchInterceptor,new fn.XMLHttpRequestInterceptor]});return t.on("request",async n=>{const o=new I(n.url,E(y({},n),{body:await n.arrayBuffer()})),s=await de(o,e.requestHandlers,r,e.emitter,{transformResponse(a){return{status:a.status,statusText:a.statusText,headers:a.headers.all(),body:a.body,delay:a.delay}},onMockedResponse(a,{handler:c,publicRequest:i,parsedRequest:l}){r.quiet||e.emitter.once("response:mocked",d=>{c.log(i,cr(d),l)})}});s&&n.respondWith(s)}),t.on("response",(n,o)=>{if(!n.id)return;const s=mn(o);o.headers.get("x-powered-by")==="msw"?e.emitter.emit("response:mocked",s,n.id):e.emitter.emit("response:bypass",s,n.id)}),t.apply(),t}function gn(e){return async function(t){e.fallbackInterceptor=vn(e,t),Ge({message:"Mocking enabled (fallback mode).",quiet:t.quiet})}}function yn(e){return function(){var t,n;(t=e.fallbackInterceptor)==null||t.dispose(),lr({quiet:(n=e.startOptions)==null?void 0:n.quiet})}}function wn(e,r){const t=e.emit;t._isPiped||(e.emit=function(n,...o){return r.emit(n,...o),t.call(this,n,...o)},e.emit._isPiped=!0)}function bn(e){const r=[...e];return Object.freeze(r),r}var V=[];function En(...e){if(e.forEach(a=>{if(Array.isArray(a))throw new Error(f.formatMessage('Failed to call "setupWorker" given an Array of request handlers (setupWorker([a, b])), expected to receive each handler individually: setupWorker(a, b).'))}),(0,Qr.isNodeProcess)())throw new Error(f.formatMessage("Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead."));const r=new ye.StrictEventEmitter,t=new ye.StrictEventEmitter;wn(r,t);const n={isMockingEnabled:!1,startOptions:void 0,worker:null,registration:null,requestHandlers:[...e],emitter:r,workerChannel:{on(a,c){n.events.addListener(navigator.serviceWorker,"message",i=>{if(i.source!==n.worker)return;const l=i.data;!l||l.type===a&&c(i,l)})},send(a){var c;(c=n.worker)==null||c.postMessage(a)}},events:{addListener(a,c,i){return a.addEventListener(c,i),V.push({eventType:c,target:a,callback:i}),()=>{a.removeEventListener(c,i)}},removeAllListeners(){for(const{target:a,eventType:c,callback:i}of V)a.removeEventListener(c,i);V=[]},once(a){const c=[];return new Promise((i,l)=>{const d=u=>{try{const p=u.data;p.type===a&&i(p)}catch(p){l(p)}};c.push(n.events.addListener(navigator.serviceWorker,"message",d),n.events.addListener(navigator.serviceWorker,"messageerror",l))}).finally(()=>{c.forEach(i=>i())})}},useFallbackMode:!("serviceWorker"in navigator)||location.protocol==="file:"},o=n.useFallbackMode?gn(n):tn(n),s=n.useFallbackMode?yn(n):nn(n);return{start:un(o,n),stop(){n.events.removeAllListeners(),n.emitter.removeAllListeners(),t.removeAllListeners(),s()},use(...a){on(n.requestHandlers,...a)},restoreHandlers(){an(n.requestHandlers)},resetHandlers(...a){n.requestHandlers=sn(e,...a)},listHandlers(){return bn(n.requestHandlers)},printHandlers(){this.listHandlers().forEach(c=>{const{header:i,callFrame:l}=c.info,d=c.info.hasOwnProperty("operationType")?"[graphql]":"[rest]";console.groupCollapsed(`${d} ${i}`),l&&console.log(`Declaration: ${l}`),console.log("Handler:",c),c instanceof G&&console.log("Match:",`https://mswjs.io/repl?path=${c.info.path}`),console.groupEnd()})},events:{on(...a){return t.on(...a)},removeListener(...a){return t.removeListener(...a)},removeAllListeners(...a){return t.removeAllListeners(...a)}}}}function R(e){return(r,t)=>new G(e,r,t)}var _n={all:R(/.+/),head:R("HEAD"),get:R("GET"),post:R("POST"),put:R("PUT"),delete:R("DELETE"),patch:R("PATCH"),options:R("OPTIONS")};function q(e,r){return(t,n)=>new B(e,t,r,n)}function ur(e){return r=>new B("all",new RegExp(".*"),e,r)}var Rn={operation:ur("*"),query:q("query","*"),mutation:q("mutation","*")};function kn(e){return{operation:ur(e),query:q("query",e),mutation:q("mutation",e)}}var Tn=E(y({},Rn),{link:kn});export{Nn as l};
