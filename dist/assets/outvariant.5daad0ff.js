import{c as d}from"./@babel.9e3f1cbd.js";var I={},h={},p={};Object.defineProperty(p,"__esModule",{value:!0});p.format=void 0;var S=/(%?)(%([sdjo]))/g;function j(t,s){switch(s){case"s":return t;case"d":case"i":return Number(t);case"j":return JSON.stringify(t);case"o":{if(typeof t=="string")return t;var i=JSON.stringify(t);return i==="{}"||i==="[]"||/^\[object .+?\]$/.test(i)?t:i}}}function P(t){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];if(s.length===0)return t;var o=0,f=t.replace(S,function(u,l,_,g){var n=s[o],a=j(n,g);return l?u:(o++,a)});return o<s.length&&(f+=" "+s.slice(o).join(" ")),f=f.replace(/%{2,2}/g,"%"),f}p.format=P;(function(t){var s=d&&d.__extends||function(){var n=function(a,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,e){v.__proto__=e}||function(v,e){for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&(v[c]=e[c])},n(a,r)};return function(a,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");n(a,r);function v(){this.constructor=a}a.prototype=r===null?Object.create(r):(v.prototype=r.prototype,new v)}}(),i=d&&d.__spreadArray||function(n,a){for(var r=0,v=a.length,e=n.length;r<v;r++,e++)n[e]=a[r];return n};Object.defineProperty(t,"__esModule",{value:!0}),t.invariant=t.createInvariantWith=t.InvariantError=void 0;var o=p,f=2;function u(n){if(!!n.stack){var a=n.stack.split(`
`);a.splice(1,f),n.stack=a.join(`
`)}}var l=function(n){s(a,n);function a(r){for(var v=[],e=1;e<arguments.length;e++)v[e-1]=arguments[e];var c=n.call(this,r)||this;return c.message=r,c.name="Invariant Violation",c.message=o.format.apply(void 0,i([r],v)),u(c),c}return a}(Error);t.InvariantError=l;function _(n){var a=function(r,v){for(var e=[],c=2;c<arguments.length;c++)e[c-2]=arguments[c];if(!r){var y=o.format.apply(void 0,i([v],e)),O=!!n.prototype.name,m=O?new n(y):n(y);throw u(m),m}};return a}t.createInvariantWith=_;function g(n){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];return _(n).apply(void 0,a)}t.invariant=_(l),t.invariant.as=g})(h);(function(t){var s=d&&d.__createBinding||(Object.create?function(o,f,u,l){l===void 0&&(l=u),Object.defineProperty(o,l,{enumerable:!0,get:function(){return f[u]}})}:function(o,f,u,l){l===void 0&&(l=u),o[l]=f[u]}),i=d&&d.__exportStar||function(o,f){for(var u in o)u!=="default"&&!Object.prototype.hasOwnProperty.call(f,u)&&s(f,o,u)};Object.defineProperty(t,"__esModule",{value:!0}),i(h,t),i(p,t)})(I);export{I as l};