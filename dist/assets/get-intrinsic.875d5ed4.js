import{r as J}from"./has-symbols.b5788d9d.js";import{r as V}from"./function-bind.f95c64f1.js";import{r as z}from"./has.8a7d710b.js";var x,O;function K(){if(O)return x;O=1;var r,s=SyntaxError,B=Function,l=TypeError,R=function(y){try{return B('"use strict"; return ('+y+").constructor;")()}catch{}},f=Object.getOwnPropertyDescriptor;if(f)try{f({},"")}catch{f=null}var U=function(){throw new l},T=f?function(){try{return arguments.callee,U}catch{try{return f(arguments,"callee").get}catch{return U}}}():U,u=J()(),c=Object.getPrototypeOf||function(y){return y.__proto__},A={},k=typeof Uint8Array>"u"?r:c(Uint8Array),d={"%AggregateError%":typeof AggregateError>"u"?r:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?r:ArrayBuffer,"%ArrayIteratorPrototype%":u?c([][Symbol.iterator]()):r,"%AsyncFromSyncIteratorPrototype%":r,"%AsyncFunction%":A,"%AsyncGenerator%":A,"%AsyncGeneratorFunction%":A,"%AsyncIteratorPrototype%":A,"%Atomics%":typeof Atomics>"u"?r:Atomics,"%BigInt%":typeof BigInt>"u"?r:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?r:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array>"u"?r:Float32Array,"%Float64Array%":typeof Float64Array>"u"?r:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?r:FinalizationRegistry,"%Function%":B,"%GeneratorFunction%":A,"%Int8Array%":typeof Int8Array>"u"?r:Int8Array,"%Int16Array%":typeof Int16Array>"u"?r:Int16Array,"%Int32Array%":typeof Int32Array>"u"?r:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":u?c(c([][Symbol.iterator]())):r,"%JSON%":typeof JSON=="object"?JSON:r,"%Map%":typeof Map>"u"?r:Map,"%MapIteratorPrototype%":typeof Map>"u"||!u?r:c(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?r:Promise,"%Proxy%":typeof Proxy>"u"?r:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect>"u"?r:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?r:Set,"%SetIteratorPrototype%":typeof Set>"u"||!u?r:c(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?r:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":u?c(""[Symbol.iterator]()):r,"%Symbol%":u?Symbol:r,"%SyntaxError%":s,"%ThrowTypeError%":T,"%TypedArray%":k,"%TypeError%":l,"%Uint8Array%":typeof Uint8Array>"u"?r:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?r:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?r:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?r:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap>"u"?r:WeakMap,"%WeakRef%":typeof WeakRef>"u"?r:WeakRef,"%WeakSet%":typeof WeakSet>"u"?r:WeakSet},_=function y(e){var o;if(e==="%AsyncFunction%")o=R("async function () {}");else if(e==="%GeneratorFunction%")o=R("function* () {}");else if(e==="%AsyncGeneratorFunction%")o=R("async function* () {}");else if(e==="%AsyncGenerator%"){var t=y("%AsyncGeneratorFunction%");t&&(o=t.prototype)}else if(e==="%AsyncIteratorPrototype%"){var n=y("%AsyncGenerator%");n&&(o=c(n.prototype))}return d[e]=o,o},N={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},v=V(),S=z(),C=v.call(Function.call,Array.prototype.concat),M=v.call(Function.apply,Array.prototype.splice),G=v.call(Function.call,String.prototype.replace),m=v.call(Function.call,String.prototype.slice),j=v.call(Function.call,RegExp.prototype.exec),W=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,$=/\\(\\)?/g,D=function(e){var o=m(e,0,1),t=m(e,-1);if(o==="%"&&t!=="%")throw new s("invalid intrinsic syntax, expected closing `%`");if(t==="%"&&o!=="%")throw new s("invalid intrinsic syntax, expected opening `%`");var n=[];return G(e,W,function(i,P,a,E){n[n.length]=a?G(E,$,"$1"):P||i}),n},q=function(e,o){var t=e,n;if(S(N,t)&&(n=N[t],t="%"+n[0]+"%"),S(d,t)){var i=d[t];if(i===A&&(i=_(t)),typeof i>"u"&&!o)throw new l("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:n,name:t,value:i}}throw new s("intrinsic "+e+" does not exist!")};return x=function(e,o){if(typeof e!="string"||e.length===0)throw new l("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof o!="boolean")throw new l('"allowMissing" argument must be a boolean');if(j(/^%?[^%]*%?$/,e)===null)throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var t=D(e),n=t.length>0?t[0]:"",i=q("%"+n+"%",o),P=i.name,a=i.value,E=!1,w=i.alias;w&&(n=w[0],M(t,C([0,1],w)));for(var h=1,g=!0;h<t.length;h+=1){var p=t[h],I=m(p,0,1),F=m(p,-1);if((I==='"'||I==="'"||I==="`"||F==='"'||F==="'"||F==="`")&&I!==F)throw new s("property names with quotes must have matching quotes");if((p==="constructor"||!g)&&(E=!0),n+="."+p,P="%"+n+"%",S(d,P))a=d[P];else if(a!=null){if(!(p in a)){if(!o)throw new l("base intrinsic for "+e+" exists, but the property is not available.");return}if(f&&h+1>=t.length){var b=f(a,p);g=!!b,g&&"get"in b&&!("originalValue"in b.get)?a=b.get:a=a[p]}else g=S(a,p),a=a[p];g&&!E&&(d[P]=a)}}return a},x}export{K as r};