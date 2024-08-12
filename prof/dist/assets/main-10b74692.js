(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const P=document.querySelector("#nav-mobile-menu"),Ct=document.querySelector("#nav-mobile-button"),Ot=document.querySelector("#nav-mobile-button-close"),Rt=()=>{if(!P)return null;P.classList.remove("close"),P.classList.add("open")},$e=()=>{if(!P)return null;P.classList.remove("open"),P.classList.add("close")},Tt=()=>{Ct?.addEventListener("click",Rt),Ot?.addEventListener("click",$e),P?.childNodes.forEach(e=>e.addEventListener("click",$e))};function Ke(e,t){return function(){return e.apply(t,arguments)}}const{toString:At}=Object.prototype,{getPrototypeOf:Oe}=Object,re=(e=>t=>{const n=At.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>re(t)===e),se=e=>t=>typeof t===e,{isArray:F}=Array,z=se("undefined");function xt(e){return e!==null&&!z(e)&&e.constructor!==null&&!z(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ge=T("ArrayBuffer");function Lt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ge(e.buffer),t}const kt=se("string"),S=se("function"),Xe=se("number"),oe=e=>e!==null&&typeof e=="object",Nt=e=>e===!0||e===!1,Y=e=>{if(re(e)!=="object")return!1;const t=Oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},$t=T("Date"),Pt=T("File"),_t=T("Blob"),Bt=T("FileList"),Mt=e=>oe(e)&&S(e.pipe),Ft=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||S(e.append)&&((t=re(e))==="formdata"||t==="object"&&S(e.toString)&&e.toString()==="[object FormData]"))},jt=T("URLSearchParams"),Dt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function J(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),F(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(r=0;r<i;r++)a=o[r],t.call(null,e[a],a,e)}}function Ze(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Qe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ye=e=>!z(e)&&e!==Qe;function ye(){const{caseless:e}=Ye(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ze(t,s)||s;Y(t[o])&&Y(r)?t[o]=ye(t[o],r):Y(r)?t[o]=ye({},r):F(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&J(arguments[r],n);return t}const Ut=(e,t,n,{allOwnKeys:r}={})=>(J(t,(s,o)=>{n&&S(s)?e[o]=Ke(s,n):e[o]=s},{allOwnKeys:r}),e),Ht=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),It=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},qt=(e,t,n,r)=>{let s,o,i;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=n!==!1&&Oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},zt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Jt=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!Xe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Vt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Oe(Uint8Array)),Wt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Kt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Gt=T("HTMLFormElement"),Xt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Pe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Zt=T("RegExp"),et=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};J(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Qt=e=>{et(e,(t,n)=>{if(S(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(S(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Yt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return F(e)?r(e):r(String(e).split(t)),n},en=()=>{},tn=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ue="abcdefghijklmnopqrstuvwxyz",_e="0123456789",tt={DIGIT:_e,ALPHA:ue,ALPHA_DIGIT:ue+ue.toUpperCase()+_e},nn=(e=16,t=tt.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function rn(e){return!!(e&&S(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const sn=e=>{const t=new Array(10),n=(r,s)=>{if(oe(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=F(r)?[]:{};return J(r,(i,a)=>{const u=n(i,s+1);!z(u)&&(o[a]=u)}),t[s]=void 0,o}}return r};return n(e,0)},on=T("AsyncFunction"),an=e=>e&&(oe(e)||S(e))&&S(e.then)&&S(e.catch),c={isArray:F,isArrayBuffer:Ge,isBuffer:xt,isFormData:Ft,isArrayBufferView:Lt,isString:kt,isNumber:Xe,isBoolean:Nt,isObject:oe,isPlainObject:Y,isUndefined:z,isDate:$t,isFile:Pt,isBlob:_t,isRegExp:Zt,isFunction:S,isStream:Mt,isURLSearchParams:jt,isTypedArray:Vt,isFileList:Bt,forEach:J,merge:ye,extend:Ut,trim:Dt,stripBOM:Ht,inherits:It,toFlatObject:qt,kindOf:re,kindOfTest:T,endsWith:zt,toArray:Jt,forEachEntry:Wt,matchAll:Kt,isHTMLForm:Gt,hasOwnProperty:Pe,hasOwnProp:Pe,reduceDescriptors:et,freezeMethods:Qt,toObjectSet:Yt,toCamelCase:Xt,noop:en,toFiniteNumber:tn,findKey:Ze,global:Qe,isContextDefined:Ye,ALPHABET:tt,generateString:nn,isSpecCompliantForm:rn,toJSONObject:sn,isAsyncFn:on,isThenable:an};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}c.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const nt=h.prototype,rt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{rt[e]={value:e}});Object.defineProperties(h,rt);Object.defineProperty(nt,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,o)=>{const i=Object.create(nt);return c.toFlatObject(e,i,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),h.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const cn=null;function be(e){return c.isPlainObject(e)||c.isArray(e)}function st(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function Be(e,t,n){return e?e.concat(t).map(function(s,o){return s=st(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function ln(e){return c.isArray(e)&&!e.some(be)}const un=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function ie(e,t,n){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=c.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,E){return!c.isUndefined(E[m])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(t);if(!c.isFunction(s))throw new TypeError("visitor must be a function");function f(d){if(d===null)return"";if(c.isDate(d))return d.toISOString();if(!u&&c.isBlob(d))throw new h("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(d)||c.isTypedArray(d)?u&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,m,E){let A=d;if(d&&!E&&typeof d=="object"){if(c.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(c.isArray(d)&&ln(d)||(c.isFileList(d)||c.endsWith(m,"[]"))&&(A=c.toArray(d)))return m=st(m),A.forEach(function(X,vt){!(c.isUndefined(X)||X===null)&&t.append(i===!0?Be([m],vt,o):i===null?m:m+"[]",f(X))}),!1}return be(d)?!0:(t.append(Be(E,m,o),f(d)),!1)}const p=[],g=Object.assign(un,{defaultVisitor:l,convertValue:f,isVisitable:be});function y(d,m){if(!c.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(d),c.forEach(d,function(A,v){(!(c.isUndefined(A)||A===null)&&s.call(t,A,c.isString(v)?v.trim():v,m,g))===!0&&y(A,m?m.concat(v):[v])}),p.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Me(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Re(e,t){this._pairs=[],e&&ie(e,this,t)}const ot=Re.prototype;ot.append=function(t,n){this._pairs.push([t,n])};ot.toString=function(t){const n=t?function(r){return t.call(this,r,Me)}:Me;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function dn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function it(e,t,n){if(!t)return e;const r=n&&n.encode||dn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=c.isURLSearchParams(t)?t.toString():new Re(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class fn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Fe=fn,at={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pn=typeof URLSearchParams<"u"?URLSearchParams:Re,mn=typeof FormData<"u"?FormData:null,hn=typeof Blob<"u"?Blob:null,gn=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),wn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:pn,FormData:mn,Blob:hn},isStandardBrowserEnv:gn,isStandardBrowserWebWorkerEnv:wn,protocols:["http","https","file","blob","url","data"]};function yn(e,t){return ie(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&c.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function bn(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function En(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function ct(e){function t(n,r,s,o){let i=n[o++];const a=Number.isFinite(+i),u=o>=n.length;return i=!i&&c.isArray(s)?s.length:i,u?(c.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!a):((!s[i]||!c.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&c.isArray(s[i])&&(s[i]=En(s[i])),!a)}if(c.isFormData(e)&&c.isFunction(e.entries)){const n={};return c.forEachEntry(e,(r,s)=>{t(bn(r),s,n,0)}),n}return null}function Sn(e,t,n){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Te={transitional:at,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=c.isObject(t);if(o&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return s&&s?JSON.stringify(ct(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return yn(t,this.formSerializer).toString();if((a=c.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ie(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Sn(t)):t}],transformResponse:[function(t){const n=this.transitional||Te.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&c.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?h.from(a,h.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};c.forEach(["delete","get","head","post","put","patch"],e=>{Te.headers[e]={}});const Ae=Te,vn=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Cn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&vn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},je=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function ee(e){return e===!1||e==null?e:c.isArray(e)?e.map(ee):String(e)}function On(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Rn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function de(e,t,n,r,s){if(c.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!c.isString(t)){if(c.isString(r))return t.indexOf(r)!==-1;if(c.isRegExp(r))return r.test(t)}}function Tn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function An(e,t){const n=c.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class ae{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(a,u,f){const l=D(u);if(!l)throw new Error("header name must be a non-empty string");const p=c.findKey(s,l);(!p||s[p]===void 0||f===!0||f===void 0&&s[p]!==!1)&&(s[p||u]=ee(a))}const i=(a,u)=>c.forEach(a,(f,l)=>o(f,l,u));return c.isPlainObject(t)||t instanceof this.constructor?i(t,n):c.isString(t)&&(t=t.trim())&&!Rn(t)?i(Cn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=D(t),t){const r=c.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return On(s);if(c.isFunction(n))return n.call(this,s,r);if(c.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=c.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||de(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=D(i),i){const a=c.findKey(r,i);a&&(!n||de(r,r[a],a,n))&&(delete r[a],s=!0)}}return c.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||de(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return c.forEach(this,(s,o)=>{const i=c.findKey(r,o);if(i){n[i]=ee(s),delete n[o];return}const a=t?Tn(o):String(o).trim();a!==o&&delete n[o],n[a]=ee(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return c.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&c.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[je]=this[je]={accessors:{}}).accessors,s=this.prototype;function o(i){const a=D(i);r[a]||(An(s,i),r[a]=!0)}return c.isArray(t)?t.forEach(o):o(t),this}}ae.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.reduceDescriptors(ae.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});c.freezeMethods(ae);const L=ae;function fe(e,t){const n=this||Ae,r=t||n,s=L.from(r.headers);let o=r.data;return c.forEach(e,function(a){o=a.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function lt(e){return!!(e&&e.__CANCEL__)}function V(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}c.inherits(V,h,{__CANCEL__:!0});function xn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ln=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,a){const u=[];u.push(n+"="+encodeURIComponent(r)),c.isNumber(s)&&u.push("expires="+new Date(s).toGMTString()),c.isString(o)&&u.push("path="+o),c.isString(i)&&u.push("domain="+i),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function kn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Nn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ut(e,t){return e&&!kn(t)?Nn(e,t):t}const $n=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const a=c.isString(i)?s(i):i;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Pn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function _n(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(u){const f=Date.now(),l=r[o];i||(i=f),n[s]=u,r[s]=f;let p=o,g=0;for(;p!==s;)g+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const y=l&&f-l;return y?Math.round(g*1e3/y):void 0}}function De(e,t){let n=0;const r=_n(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,a=o-n,u=r(a),f=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:a,rate:u||void 0,estimated:u&&i&&f?(i-o)/u:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Bn=typeof XMLHttpRequest<"u",Mn=Bn&&function(e){return new Promise(function(n,r){let s=e.data;const o=L.from(e.headers).normalize(),i=e.responseType;let a;function u(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}let f;c.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?c.isString(f=o.getContentType())&&o.setContentType(f.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let l=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+m))}const p=ut(e.baseURL,e.url);l.open(e.method.toUpperCase(),it(p,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function g(){if(!l)return;const d=L.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),E={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:d,config:e,request:l};xn(function(v){n(v),u()},function(v){r(v),u()},E),l=null}if("onloadend"in l?l.onloadend=g:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(g)},l.onabort=function(){l&&(r(new h("Request aborted",h.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||at;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new h(m,E.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,l)),l=null},O.isStandardBrowserEnv){const d=(e.withCredentials||$n(p))&&e.xsrfCookieName&&Ln.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&c.forEach(o.toJSON(),function(m,E){l.setRequestHeader(E,m)}),c.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",De(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",De(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=d=>{l&&(r(!d||d.type?new V(null,e,l):d),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const y=Pn(p);if(y&&O.protocols.indexOf(y)===-1){r(new h("Unsupported protocol "+y+":",h.ERR_BAD_REQUEST,e));return}l.send(s||null)})},Ee={http:cn,xhr:Mn};c.forEach(Ee,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ue=e=>`- ${e}`,Fn=e=>c.isFunction(e)||e===null||e===!1,dt={getAdapter:e=>{e=c.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Fn(n)&&(r=Ee[(i=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ue).join(`
`):" "+Ue(o[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Ee};function pe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new V(null,e)}function He(e){return pe(e),e.headers=L.from(e.headers),e.data=fe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),dt.getAdapter(e.adapter||Ae.adapter)(e).then(function(r){return pe(e),r.data=fe.call(e,e.transformResponse,r),r.headers=L.from(r.headers),r},function(r){return lt(r)||(pe(e),r&&r.response&&(r.response.data=fe.call(e,e.transformResponse,r.response),r.response.headers=L.from(r.response.headers))),Promise.reject(r)})}const Ie=e=>e instanceof L?e.toJSON():e;function M(e,t){t=t||{};const n={};function r(f,l,p){return c.isPlainObject(f)&&c.isPlainObject(l)?c.merge.call({caseless:p},f,l):c.isPlainObject(l)?c.merge({},l):c.isArray(l)?l.slice():l}function s(f,l,p){if(c.isUndefined(l)){if(!c.isUndefined(f))return r(void 0,f,p)}else return r(f,l,p)}function o(f,l){if(!c.isUndefined(l))return r(void 0,l)}function i(f,l){if(c.isUndefined(l)){if(!c.isUndefined(f))return r(void 0,f)}else return r(void 0,l)}function a(f,l,p){if(p in t)return r(f,l);if(p in e)return r(void 0,f)}const u={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(f,l)=>s(Ie(f),Ie(l),!0)};return c.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=u[l]||s,g=p(e[l],t[l],l);c.isUndefined(g)&&p!==a||(n[l]=g)}),n}const ft="1.5.1",xe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{xe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const qe={};xe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+ft+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,a)=>{if(t===!1)throw new h(s(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!qe[i]&&(qe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,a):!0}};function jn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const a=e[o],u=a===void 0||i(a,o,e);if(u!==!0)throw new h("option "+o+" must be "+u,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}const Se={assertOptions:jn,validators:xe},k=Se.validators;class ne{constructor(t){this.defaults=t,this.interceptors={request:new Fe,response:new Fe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=M(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Se.assertOptions(r,{silentJSONParsing:k.transitional(k.boolean),forcedJSONParsing:k.transitional(k.boolean),clarifyTimeoutError:k.transitional(k.boolean)},!1),s!=null&&(c.isFunction(s)?n.paramsSerializer={serialize:s}:Se.assertOptions(s,{encode:k.function,serialize:k.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&c.merge(o.common,o[n.method]);o&&c.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=L.concat(i,o);const a=[];let u=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(u=u&&m.synchronous,a.unshift(m.fulfilled,m.rejected))});const f=[];this.interceptors.response.forEach(function(m){f.push(m.fulfilled,m.rejected)});let l,p=0,g;if(!u){const d=[He.bind(this),void 0];for(d.unshift.apply(d,a),d.push.apply(d,f),g=d.length,l=Promise.resolve(n);p<g;)l=l.then(d[p++],d[p++]);return l}g=a.length;let y=n;for(p=0;p<g;){const d=a[p++],m=a[p++];try{y=d(y)}catch(E){m.call(this,E);break}}try{l=He.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,g=f.length;p<g;)l=l.then(f[p++],f[p++]);return l}getUri(t){t=M(this.defaults,t);const n=ut(t.baseURL,t.url);return it(n,t.params,t.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(t){ne.prototype[t]=function(n,r){return this.request(M(r||{},{method:t,url:n,data:(r||{}).data}))}});c.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,a){return this.request(M(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}ne.prototype[t]=n(),ne.prototype[t+"Form"]=n(!0)});const te=ne;class Le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(a=>{r.subscribe(a),o=a}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,a){r.reason||(r.reason=new V(o,i,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Le(function(s){t=s}),cancel:t}}}const Dn=Le;function Un(e){return function(n){return e.apply(null,n)}}function Hn(e){return c.isObject(e)&&e.isAxiosError===!0}const ve={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ve).forEach(([e,t])=>{ve[t]=e});const In=ve;function pt(e){const t=new te(e),n=Ke(te.prototype.request,t);return c.extend(n,te.prototype,t,{allOwnKeys:!0}),c.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return pt(M(e,s))},n}const w=pt(Ae);w.Axios=te;w.CanceledError=V;w.CancelToken=Dn;w.isCancel=lt;w.VERSION=ft;w.toFormData=ie;w.AxiosError=h;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Un;w.isAxiosError=Hn;w.mergeConfig=M;w.AxiosHeaders=L;w.formToJSON=e=>ct(c.isHTMLForm(e)?new FormData(e):e);w.getAdapter=dt.getAdapter;w.HttpStatusCode=In;w.default=w;const qn=w,zn="https://edu2pro.ru/portal",Jn=`${zn}/webservice/rest/server.php`,N="652c71f433ea0d910b172fa0b9f224bf",Vn="core_course_get_courses_by_field",Wn="json";function mt(){return qn.get(Jn,{method:"get",params:{wsfunction:Vn,moodlewsrestformat:Wn,wstoken:N}}).then(e=>e.status>=400?null:e.data.courses)}const Ce=await mt(),_=e=>{if(!e)return"";const t=document.createElement("p");return t.classList.add("course-description"),t.innerHTML=R(e),t.querySelectorAll("p > img").forEach(r=>r.remove()),t.innerHTML},R=e=>{const t=e.replace(/&nbsp;/g,"");var n=document.createElement("span");return n.innerHTML=t,n.textContent||n.innerText},ht=e=>{if(!e)return"./avatar.svg";const t=new URL(e).pathname.split("pluginfile.php/")[1],n=new URL(`https://edu2pro.ru/portal/webservice/pluginfile.php/${t}`);return n.searchParams.append("token",N),n.toString()},gt=e=>{const t=e.match(/src="(.*?)"/)?.[1];return ht(t)},Kn=e=>e.customfields.filter(t=>t.shortname.includes("tag_")),Gn=e=>Kn(e).filter(t=>t.valueraw===1).map(t=>t.shortname),j=e=>e.customfields.filter(t=>t.shortname.includes("tag_")&&t.valueraw>0).map(t=>t.name),me=document.querySelector("#ind-courses"),he=document.querySelector("#group-courses"),ge=document.querySelector("#seminar-courses"),we=document.querySelector("#media-courses"),C=document.querySelector("#modal"),Xn=`
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-clock-3">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16.5 12" />
</svg>`,Zn=`
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-users-round">
    <path d="M18 21a8 8 0 0 0-16 0" />
    <circle cx="10" cy="8" r="5" />
    <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
</svg>
`,Qn=`
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-badge"><path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M7 16.5 8 22l-3-1-3 1 1-5.5"/></svg>
`,Yn=`
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-calendar-range">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
    <path d="M17 14h-6" />
    <path d="M13 18H7" />
    <path d="M7 14h.01" />
    <path d="M17 18h.01" />
</svg>
`,er=`
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tags"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="6.5" cy="9.5" r=".5" fill="currentColor"/></svg>
`,tr={duration:Xn,foruser:Zn,docend:Qn,date:Yn,tag:er},b=(e,t,n)=>!e||!t?"":`
    <p class="badge">
        ${n?tr[n]:""}
        ${e}: ${t}
    </p>
    `,W=e=>`
    <button
        class="button button-sm ml-auto mt-auto block open-course"
        data-course="${e}"
        >Подробнее
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" /></svg>
    </button>
    `;function K(e){const{courseImage:t,name:n,badges:r,description:s,openButton:o,authors:i}=e;return`
        <article class="course-card group-card">
            <header class="course-header">${t}</header>
            <main class="course-content">
                <h1 class="course-title">${n}</h1>
                <div class="course-topline">
                    ${r??""}
                </div>
                <p class="course-description">
                    ${s}
                </p>
                ${i??""}
                ${o}
            </main>
        </article>
    `}const nr=e=>{const t=[];for(let n=1;n<=3;n++)e.customfields.find(r=>r.shortname===`autorfio${n}kurs`)?.value&&t.push({name:R(e.customfields.find(r=>r.shortname===`autorfio${n}kurs`)?.value??""),photo:gt(e.customfields.find(r=>r.shortname===`autorfoto${n}kurs`)?.value??"")});return t},rr=e=>{let t="";return e.forEach(n=>t+=`<img title="${n.name}" src="${ht(n.photo)}" alt="${n.name}" />`),t},ke=e=>{const t=nr(e).filter(n=>n.name);return!t||t.length===0?`
			<div class="course-authors-wrapper">
					<p class="course-authors-title">Авторы курса:</p>
					<span style="color: #aaa; font-size: 14px;">Авторы не указаны</span>
			</div>
		`:`
    	<div class="course-authors-wrapper">
            <p class="course-authors-title">Авторы курса:</p>
            <div class="course-authors">
            	${rr(t)}
            </div>
        </div>
	`},ce=e=>`
    <a href="/courses.html?type=${e}" style="grid-column: 1 / 4;" class="button button-md mx-auto mt-8 block ">
        Смотреть все
    </a>
    `,wt=e=>e.filter(t=>t.visible===1).filter(t=>t.customfields.find(n=>n.shortname==="flagmain")?.value==="Да").filter(t=>t.categoryname==="Групповое обучение").map(t=>({...t,courseType:"group"})),sr=e=>{if(!he)return null;const t=e.slice(-3).map(n=>or(n));he.innerHTML=t.join(""),he.innerHTML+=ce("group")},or=e=>{if(!e)return"";const{customfields:t,overviewfiles:n,fullname:r,shortname:s,summary:o,id:i}=e,a=R(t.find(m=>m.shortname==="durationkurs")?.value??""),u=R(t.find(m=>m.shortname==="foruser")?.value??""),f=b("Продолжительность",a,"duration"),l=b("Для кого",u,"foruser"),p=n.length===0?`<img class="course-cover" src="./coursecards/contract2.webp" alt="${s}" />`:`<img class="course-cover" src="${n[0]?.fileurl}?token=${N}" alt="${s}" />`,g=j(e),y=g.length>0?b("Теги",g.join(", "),"tag"):"",d={courseImage:p,name:r,badges:[y,f,l].join(""),description:_(o),openButton:W(i),authors:ke(e)};return K(d)},ir=(e,t)=>`
    <p class="course-start">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-tag">
            <path
                d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
            <path d="M7 7h.01" />
        </svg>
        Категория:
        <a href="https://edu2pro.ru/portal/course/index.php?categoryid=${e}" target="_blank">${t}</a>
    </p>
`,yt=e=>e.filter(t=>t.visible===1).filter(t=>t.categoryname==="обучающие видео и видеопроекты"||t.categoryname==="статьи"||t.categoryname==="база презентаций"||t.categoryname==="электронные библиотеки"||t.categoryname==="книги и пособия").map(t=>({...t,courseType:"media"})),ar=e=>{if(!we)return null;const t=e.sort((a,u)=>u.timecreated>a.timecreated?1:-1),n=t.find(a=>a.categoryname==="обучающие видео и видеопроекты"),r=t.find(a=>a.categoryname==="статьи"),s=t.find(a=>a.categoryname==="книги и пособия"),i=[n,r,s].map(a=>cr(a));we.innerHTML=i.join(""),we.innerHTML+=ce("media")},cr=e=>{if(!e)return"";const{overviewfiles:t,fullname:n,shortname:r,categoryname:s,categoryid:o,summary:i,id:a}=e,u=t.length===0?`<img class="course-cover" src="./media.webp" alt="${r}" />`:`<img class="course-cover" src="${t[0]?.fileurl}?token=${N}" alt="${n}" />`,f=j(e),l=f.length>0?b("Теги",f.join(", "),"tag"):"",p=ir(o,s),g={courseImage:u,name:n,badges:[l,p].join(""),description:_(i),openButton:W(a)};return K(g)},bt=e=>e.filter(t=>t.visible===1).filter(t=>t.customfields.find(n=>n.shortname==="flagmain")?.value==="Да").filter(t=>t.categoryname==="Cамостоятельное обучение").map(t=>({...t,courseType:"personal"})),lr=e=>{if(!me)return null;const t=e.slice(-3).map(n=>ur(n));me.innerHTML=t.join(""),me.innerHTML+=ce("personal")},ur=e=>{if(!e)return"";const{customfields:t,overviewfiles:n,fullname:r,shortname:s,summary:o,id:i}=e,a=R(t.find(m=>m.shortname==="foruser")?.value??""),u=b("Для кого",a,"foruser"),f=b("Дата начала","в любое время","date"),l=i%3+1,p=n.length===0?`<img class="course-cover" src="./coursecards/sam${l}.webp" alt="${s}" />`:`<img class="course-cover" src="${n[0].fileurl}?token=${N}" alt="${s}" />`,g=j(e),y=g.length>0?b("Теги",g.join(", "),"tag"):"",d={courseImage:p,name:r,badges:[y,f,u].join(""),description:_(o),openButton:W(i),authors:ke(e)};return K(d)},Et=e=>e.filter(t=>t.visible===1).filter(t=>t.categoryname==="Заседания и семинары").map(t=>({...t,courseType:"seminar"})),dr=e=>{if(!ge)return null;const t=e.slice(-3).map(n=>fr(n));ge.innerHTML=t.join(""),ge.innerHTML+=ce("seminar")},fr=e=>{if(!e)return"";const{overviewfiles:t,fullname:n,shortname:r,summary:s,id:o}=e,i=o%3+1,a=t.length===0?`<img class="course-cover" src="./coursecards/seminar${i}.webp" alt="${r}" />`:`<img class="course-cover" src="${t[0].fileurl}?token=${N}" alt="${r}" />`,u=j(e),f=u.length>0?b("Теги",u.join(", "),"tag"):"",l={courseImage:a,name:n,badges:[f].join(""),description:_(s),openButton:W(o)};return K(l)},B=document.querySelector("#course-tags"),H=document.querySelector("#course-type"),I=document.querySelector("#course-search"),q=document.querySelector("#course-sort"),ze=document.querySelector("#reset-filters"),pr=window.location.search,Z=new URLSearchParams(pr);function U(e,t){const n=new URL(window.location.href);n.searchParams.set(e,t),window.history.pushState({path:n.href},"",n.href)}const G={search:Z.get("search")||"",type:Z.get("type")||"all",tag:Z.get("tag")||"all",sort:Z.get("sort")||"new"},mr={search:"",type:"all",tag:"all",sort:"new"};let x={...G};function le(e,t){return x[e]=t,U(e,t),Ne(),x}function hr(){x={...mr};const{type:e,tag:t,search:n,sort:r}=x;return H&&(H.value=e),B&&(B.value=t),I&&(I.value=n),q&&(q.value=r),U("search",n),U("type",e),U("tag",t),U("sort",r),Ne(),x}const gr=()=>{if(!H)return null;H.value=G.type,H.addEventListener("change",e=>{const t=e.target.value;le("type",t)})},wr=()=>{if(!I)return null;I.value=G.search,I.addEventListener("input",e=>{const t=e.target.value;le("search",t)})},Je={all:"Все",tag_2023:"2023",tag_2024:"2024",tag_chairman_assist:"В помощь председателю",tag_personal_growth:"Личный рост",tag_reports_and_elections:"Отчеты и выборы",tag_ppo:"ППО"},yr=()=>{if(!B)return null;B.innerHTML=Object.keys(Je).map(e=>`<option value="${e}">${Je[e]}</option>`).join(""),B.value=G.tag,B.addEventListener("change",e=>{const t=e.target.value;le("tag",t)})},br=()=>{if(!q)return null;q.value=G.sort,q.addEventListener("change",e=>{const t=e.target.value;le("sort",t)})},Er=()=>{if(!ze)return null;ze.addEventListener("click",hr)},Sr=()=>{gr(),yr(),wr(),br(),Er()},vr=e=>{const t=x.search.toLowerCase(),n=x.type,r=x.sort==="new"?1:-1,s=x.tag,o=e.filter(i=>{const a=n==="all"||i.courseType===n,u=s==="all"||Gn(i).includes(s),f=i.fullname.toLowerCase().includes(t)||i.summary.includes(t);return a&&u&&f});return o.sort((i,a)=>i.timecreated<a.timecreated?r:i.timecreated>a.timecreated?-r:0),o},Cr=e=>{const t=document.createElement("div");return t.innerHTML=e,`
    <div class="programs-wrapper">
        ${[...t.querySelectorAll("li:has(ul)").values()].map(o=>{const i=[...o.querySelector("ul")?.querySelectorAll("li").values()??[]];return o.querySelector("ul")?.remove(),`
            <details>
                <summary>${o.innerHTML.trim()}</summary>
                <ul>
                    ${i.map(a=>`<li>${a.innerHTML}</li>`).join("")}
                </ul>
            </details>
        `}).join("")}
    </div>`},Or=e=>{const t=e.customfields.find(n=>n.shortname==="program")?.value??"";return t?`
        <p><strong>Программа курса:</strong></p>
        ${Cr(t)}
    `:""},Rr=e=>{if(e.length===0)return"";let t="";return e.forEach(n=>{t+=`
					<div class="testimonial">
						<figure class="testimonial-photo">
							<img title="${n.name.replace(/&nbsp;/g,"")}" src="${n.photo?n.photo:"./avatar.svg"}" alt="${n.name}" />
							<figcaption>${n.name}</figcaption>
						</figure>
						<div class="testimonial-text">
							<p>${n.text}</p>
						</div>
						<div class="testimonial-quote">
						<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 349.078 349.078"> <
						<path d="M198.779 322.441v-58.245c0-7.903 6.406-14.304 14.304-14.304 28.183 0 43.515-28.904 45.643-85.961h-45.643c-7.897 0-14.304-6.41-14.304-14.304V26.64c0-7.9 6.406-14.301 14.304-14.301h121.69c7.896 0 14.305 6.408 14.305 14.301v122.988c0 27.349-2.761 52.446-8.181 74.611-5.568 22.722-14.115 42.587-25.398 59.049-11.604 16.917-26.132 30.192-43.155 39.437-17.152 9.304-37.09 14.026-59.267 14.026-7.891-.006-14.298-6.413-14.298-14.31zM14.301 249.887C6.404 249.887 0 256.293 0 264.185v58.257c0 7.896 6.404 14.298 14.301 14.298 22.166 0 42.114-4.723 59.255-14.026 17.032-9.244 31.558-22.508 43.161-39.437 11.29-16.462 19.836-36.328 25.404-59.061 5.423-22.165 8.178-47.263 8.178-74.6V26.628c0-7.9-6.41-14.301-14.304-14.301H14.301C6.404 12.327 0 18.734 0 26.628v122.988c0 7.899 6.404 14.304 14.301 14.304h45.002c-2.102 57.062-17.213 85.967-45.002 85.967z"/>
						</svg>
						</div>
					</div>		
		`}),t},Tr=e=>{const t=[];for(let n=1;n<=3;n++)e.customfields.find(r=>r.shortname===`feedbackfio${n}kurs`)?.value&&t.push({name:R(e.customfields.find(r=>r.shortname===`feedbackfio${n}kurs`)?.value??""),photo:gt(e.customfields.find(r=>r.shortname===`feedbackfoto${n}kurs`)?.value??""),text:R(e.customfields.find(r=>r.shortname===`feedback${n}kurs`)?.value??"")});return t},Ar=e=>{const t=Tr(e);return!t||t.length===0?"":`
    	<div class="course-testimonials-wrapper">
            ${Rr(t)}
        </div>
	`},$=(e,t)=>e?`
		<div class="modal-content-element">
			<p><strong>${t}:</strong></p>
			<span style="padding-left: 1rem;">${e}</span>
		</div>
		`:"",xr=e=>{const t=e.customfields.find(u=>u.shortname==="fulldesc")?.value??"",n=e.customfields.find(u=>u.shortname==="purposeofkurs")?.value??"",r=e.customfields.find(u=>u.shortname==="objectiveskurs")?.value??"",s=e.customfields.find(u=>u.shortname==="resultkurs")?.value??"",o=e.customfields.find(u=>u.shortname==="competencieskurs")?.value??"",i=e.customfields.find(u=>u.shortname==="kontrolkurs")?.value??"",a=e.customfields.find(u=>u.shortname==="durationkurs")?.value??"";return`<div class="modal-content">
				${$(t,"Описание курса")}
				${$(n,"Цель курса")}
				${$(r,"Задачи курса")}
				${$(s,"Результаты курса")}
				${$(o,"Компетеции, необходимые для зачисления на курс")}
				${$(i,"Промежуточный итоговый контроль")}
				${$(a,"Длительность курса")}	

				${Or(e)}

				${Ar(e)}
			</div>`},Ve=e=>`
    <a 
        style="width: 100%; text-align: center;"
        href="https://edu2pro.ru/portal/course/view.php?id=${e.id}"
        class="button button-md"
    >
        Записаться на курс
    </a>
    `,Lr=()=>`
    <button 
        style="width: 100%; text-align: center;"
        id="modal-sidebar-close"
        aria-label="Закрыть модальное окно"
        class="button button-md button-secondary"
    >
        Закрыть
    </button>
    `,kr=e=>{const{timemodified:t,customfields:n}=e,r=new Date(t*1e3).toLocaleDateString();return`
    <div class="about">
        <p style="font-weight: 500;">Кратко о курсе</p>
        <div class="about-text">
            ${n.find(o=>o.shortname==="shortdesc")?.value??""}
        </div>
        <p class="about-timemodified">
            <i>
                Последнее изменение: ${r}
            </i>
        </p>
    </div>
    `},Nr=e=>`
    <div class="share">
        <h2 class="">Расскажите о курсе друзьям</h2>
        <div>
            <div
                class="ya-share2"
                data-curtain
                data-size="l"
                data-limit="7"
                data-direction="horizontal"
                data-url="https://edu2pro.ru/portal/course/view.php?id=${e.id}"
                data-title="${e.fullname}"
                data-description="${_(e.summary)}"
                data-services="messenger,vkontakte,odnoklassniki,telegram,whatsapp,moimir,viber,twitter"></div>
        </div>
    </div>
    `,$r=e=>{const{customfields:t}=e,n=R(t.find(i=>i.shortname==="durationkurs")?.value??""),r=R(t.find(i=>i.shortname==="docend")?.value??""),s=R(t.find(i=>i.shortname==="foruser")?.value??""),o=j(e);return`
    <div class="sidebar">
		${Ve(e)}

		${ke(e)}

		<div class="badge-wrapper">
			${b("Теги",o.join(", "),"tag")}
			${b("Документ об окончании курса",r,"docend")}
			${b("Для кого",s,"foruser")}
			${b("Продолжительность",n,"duration")}
		</div>

		${kr(e)}
		${Nr(e)}
		
		${Ve(e)}
		${Lr()}
	</div>
    `},Pr=e=>{if(!e)return"неизвестен";const t=Number.parseInt(e,10),n=s=>`
	<svg viewBox="-2.4 -2.4 28.80 28.80" fill="${s}" width="28" height="28" xmlns="http://www.w3.org/2000/svg" stroke="${s}"><g stroke-width="0" transform="translate(6.72,6.72), scale(0.44)"></g><g  stroke-linecap="round" stroke-linejoin="round"></g><g > <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
	`;let r="";for(let s=0;s<5;s++)s<t?r+=n("yellow"):r+=n("gray");return r},_r=e=>{const t=e.customfields.find(n=>n.shortname==="stars")?.value??"";return t?`
        <div class="rating">
            <span>Рейтинг:</span>
            <div class="flex flex-row items-center">
            ${Pr(e.customfields.find(n=>n.shortname==="stars")?.value)}
            <span style="font-size: 1rem; margin-left: 0.5rem; opacity: 75%">${Number.parseFloat(t).toFixed(1)}</span>
            </div>
        </div>					
    `:""},Br=(e,t)=>e?`<img src="${e}?token=${N}" alt="${t}" />`:"",Mr=()=>`
        <button id="modal-close" aria-label="Закрыть модальное окно" >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <g clip-path="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="#fafafa"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
        </button>
    `,Fr=e=>{if(!e)return"";const t=e.overviewfiles.length!==0?e.overviewfiles[0]?.fileurl:"./placeholder.webp",n=new Date(e.startdate*1e3).toLocaleDateString();return`
    	<header class="modal-header">
            ${Mr()}
            <div>
                <h1>${e.fullname}</h1>
                <p>
                    ${_(e.summary)}
                </p>
                ${_r(e)}
            </div>
            <div class="flex flex-col gap-4">
                ${Br(t,e.shortname)}
                <!-- ${b("Дата начала",n,"date")} -->
            </div>
        </header>
    `},jr=e=>{if(!C)return null;C.innerHTML=Dr(e)},We=()=>{if(!C)return null;C.close()},St=e=>{if(!C)return null;document.querySelectorAll(".open-course").forEach(n=>{const r=Number.parseInt(n.dataset.course??"",10),s=e.find(o=>o.id===r);if(!s)return null;n.addEventListener("click",()=>{if(jr(s),!C)return null;const o=C.querySelector(".ya-share2");Ya.share2(o);const i=C.querySelector("#modal-close");i&&i?.addEventListener("click",We);const a=C.querySelector("#modal-sidebar-close");a&&a?.addEventListener("click",We),C?.showModal()})})},Dr=e=>e?`
			<div class="modal-wrapper">
				${Fr(e)}
				<main class="modal-main">
					${xr(e)}
					${$r(e)}
				</main>
			</div>
	`:"",Ur={group:"Обучение в группе",media:"Профсоюзная медиатека",personal:"Самостоятельное обучение",seminar:"Семинары",all:"Все курсы"},Hr=e=>{if(!e)return"";const{overviewfiles:t,fullname:n,shortname:r,summary:s,id:o,courseType:i}=e,a=t.length===0?`<img class="course-cover" src="./media.webp" alt="${r}" />`:`<img class="course-cover" src="${t[0]?.fileurl}?token=${N}" alt="${r}" />`,u=i?b("Категория",Ur[i],"foruser"):"",f=j(e),l=f.length>0?b("Теги",f.join(", "),"tag"):"",p={courseImage:a,name:n,badges:[u,l].join(""),description:_(s),openButton:W(o)};return K(p)},Ir=e=>{const t=bt(e),n=wt(e),r=Et(e),s=yt(e);t&&lr(t),n&&sr(n),r&&dr(r),s&&ar(s),St(e)},Q=document.getElementById("filtered-courses"),Ne=async()=>{const e=await mt();if(!Q||!e)return null;const t=bt(e),n=wt(e),r=Et(e),s=yt(e),o=[...t,...n,...s,...r],i=vr(o);Q.innerHTML="",i.length===0&&(Q.innerHTML='<p class="no-courses">Подходящих курсов не найдено</p>'),i.forEach(a=>{Q.innerHTML+=Hr(a)}),St(e)},qr=()=>{if(!Ce)return null;Ir(Ce)},zr=()=>{if(!Ce)return null;Sr(),Ne()};Tt();qr();zr();
