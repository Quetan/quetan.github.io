(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const P=document.querySelector("#nav-mobile-menu"),St=document.querySelector("#nav-mobile-button"),Ct=document.querySelector("#nav-mobile-button-close"),Ot=()=>{if(!P)return null;P.classList.remove("close"),P.classList.add("open")},Ae=()=>{if(!P)return null;P.classList.remove("open"),P.classList.add("close")},Rt=()=>{St?.addEventListener("click",Ot),Ct?.addEventListener("click",Ae),P?.childNodes.forEach(e=>e.addEventListener("click",Ae))};function We(e,t){return function(){return e.apply(t,arguments)}}const{toString:Tt}=Object.prototype,{getPrototypeOf:be}=Object,ne=(e=>t=>{const r=Tt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>ne(t)===e),se=e=>t=>typeof t===e,{isArray:F}=Array,z=se("undefined");function At(e){return e!==null&&!z(e)&&e.constructor!==null&&!z(e.constructor)&&v(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ke=T("ArrayBuffer");function xt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ke(e.buffer),t}const Lt=se("string"),v=se("function"),Ge=se("number"),oe=e=>e!==null&&typeof e=="object",kt=e=>e===!0||e===!1,Y=e=>{if(ne(e)!=="object")return!1;const t=be(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Nt=T("Date"),$t=T("File"),Pt=T("Blob"),_t=T("FileList"),Bt=e=>oe(e)&&v(e.pipe),Mt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||v(e.append)&&((t=ne(e))==="formdata"||t==="object"&&v(e.toString)&&e.toString()==="[object FormData]"))},Ft=T("URLSearchParams"),jt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function J(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),F(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(n=0;n<i;n++)a=o[n],t.call(null,e[a],a,e)}}function Xe(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const Ze=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Qe=e=>!z(e)&&e!==Ze;function pe(){const{caseless:e}=Qe(this)&&this||{},t={},r=(n,s)=>{const o=e&&Xe(t,s)||s;Y(t[o])&&Y(n)?t[o]=pe(t[o],n):Y(n)?t[o]=pe({},n):F(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&J(arguments[n],r);return t}const Dt=(e,t,r,{allOwnKeys:n}={})=>(J(t,(s,o)=>{r&&v(s)?e[o]=We(s,r):e[o]=s},{allOwnKeys:n}),e),Ut=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),It=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Ht=(e,t,r,n)=>{let s,o,i;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=r!==!1&&be(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},qt=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},zt=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!Ge(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Jt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&be(Uint8Array)),Vt=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Wt=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Kt=T("HTMLFormElement"),Gt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),xe=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Xt=T("RegExp"),Ye=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};J(r,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(n[o]=i||s)}),Object.defineProperties(e,n)},Zt=e=>{Ye(e,(t,r)=>{if(v(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(v(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Qt=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return F(e)?n(e):n(String(e).split(t)),r},Yt=()=>{},er=(e,t)=>(e=+e,Number.isFinite(e)?e:t),le="abcdefghijklmnopqrstuvwxyz",Le="0123456789",et={DIGIT:Le,ALPHA:le,ALPHA_DIGIT:le+le.toUpperCase()+Le},tr=(e=16,t=et.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function rr(e){return!!(e&&v(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const nr=e=>{const t=new Array(10),r=(n,s)=>{if(oe(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=F(n)?[]:{};return J(n,(i,a)=>{const u=r(i,s+1);!z(u)&&(o[a]=u)}),t[s]=void 0,o}}return n};return r(e,0)},sr=T("AsyncFunction"),or=e=>e&&(oe(e)||v(e))&&v(e.then)&&v(e.catch),c={isArray:F,isArrayBuffer:Ke,isBuffer:At,isFormData:Mt,isArrayBufferView:xt,isString:Lt,isNumber:Ge,isBoolean:kt,isObject:oe,isPlainObject:Y,isUndefined:z,isDate:Nt,isFile:$t,isBlob:Pt,isRegExp:Xt,isFunction:v,isStream:Bt,isURLSearchParams:Ft,isTypedArray:Jt,isFileList:_t,forEach:J,merge:pe,extend:Dt,trim:jt,stripBOM:Ut,inherits:It,toFlatObject:Ht,kindOf:ne,kindOfTest:T,endsWith:qt,toArray:zt,forEachEntry:Vt,matchAll:Wt,isHTMLForm:Kt,hasOwnProperty:xe,hasOwnProp:xe,reduceDescriptors:Ye,freezeMethods:Zt,toObjectSet:Qt,toCamelCase:Gt,noop:Yt,toFiniteNumber:er,findKey:Xe,global:Ze,isContextDefined:Qe,ALPHABET:et,generateString:tr,isSpecCompliantForm:rr,toJSONObject:nr,isAsyncFn:sr,isThenable:or};function m(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}c.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const tt=m.prototype,rt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{rt[e]={value:e}});Object.defineProperties(m,rt);Object.defineProperty(tt,"isAxiosError",{value:!0});m.from=(e,t,r,n,s,o)=>{const i=Object.create(tt);return c.toFlatObject(e,i,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),m.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const ir=null;function he(e){return c.isPlainObject(e)||c.isArray(e)}function nt(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function ke(e,t,r){return e?e.concat(t).map(function(s,o){return s=nt(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function ar(e){return c.isArray(e)&&!e.some(he)}const cr=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function ie(e,t,r){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=c.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,E){return!c.isUndefined(E[h])});const n=r.metaTokens,s=r.visitor||l,o=r.dots,i=r.indexes,u=(r.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(t);if(!c.isFunction(s))throw new TypeError("visitor must be a function");function f(d){if(d===null)return"";if(c.isDate(d))return d.toISOString();if(!u&&c.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(d)||c.isTypedArray(d)?u&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,h,E){let A=d;if(d&&!E&&typeof d=="object"){if(c.endsWith(h,"{}"))h=n?h:h.slice(0,-2),d=JSON.stringify(d);else if(c.isArray(d)&&ar(d)||(c.isFileList(d)||c.endsWith(h,"[]"))&&(A=c.toArray(d)))return h=nt(h),A.forEach(function(X,vt){!(c.isUndefined(X)||X===null)&&t.append(i===!0?ke([h],vt,o):i===null?h:h+"[]",f(X))}),!1}return he(d)?!0:(t.append(ke(E,h,o),f(d)),!1)}const p=[],g=Object.assign(cr,{defaultVisitor:l,convertValue:f,isVisitable:he});function y(d,h){if(!c.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(d),c.forEach(d,function(A,S){(!(c.isUndefined(A)||A===null)&&s.call(t,A,c.isString(S)?S.trim():S,h,g))===!0&&y(A,h?h.concat(S):[S])}),p.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Ne(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Ee(e,t){this._pairs=[],e&&ie(e,this,t)}const st=Ee.prototype;st.append=function(t,r){this._pairs.push([t,r])};st.toString=function(t){const r=t?function(n){return t.call(this,n,Ne)}:Ne;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function lr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ot(e,t,r){if(!t)return e;const n=r&&r.encode||lr,s=r&&r.serialize;let o;if(s?o=s(t,r):o=c.isURLSearchParams(t)?t.toString():new Ee(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ur{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(n){n!==null&&t(n)})}}const $e=ur,it={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},dr=typeof URLSearchParams<"u"?URLSearchParams:Ee,fr=typeof FormData<"u"?FormData:null,pr=typeof Blob<"u"?Blob:null,hr=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),mr=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:dr,FormData:fr,Blob:pr},isStandardBrowserEnv:hr,isStandardBrowserWebWorkerEnv:mr,protocols:["http","https","file","blob","url","data"]};function gr(e,t){return ie(e,new O.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return O.isNode&&c.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function wr(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function yr(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function at(e){function t(r,n,s,o){let i=r[o++];const a=Number.isFinite(+i),u=o>=r.length;return i=!i&&c.isArray(s)?s.length:i,u?(c.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!a):((!s[i]||!c.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&c.isArray(s[i])&&(s[i]=yr(s[i])),!a)}if(c.isFormData(e)&&c.isFunction(e.entries)){const r={};return c.forEachEntry(e,(n,s)=>{t(wr(n),s,r,0)}),r}return null}function br(e,t,r){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const ve={transitional:it,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=c.isObject(t);if(o&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return s&&s?JSON.stringify(at(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return gr(t,this.formSerializer).toString();if((a=c.isFileList(t))||n.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ie(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),br(t)):t}],transformResponse:[function(t){const r=this.transitional||ve.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(t&&c.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?m.from(a,m.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};c.forEach(["delete","get","head","post","put","patch"],e=>{ve.headers[e]={}});const Se=ve,Er=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vr=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&Er[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Pe=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function ee(e){return e===!1||e==null?e:c.isArray(e)?e.map(ee):String(e)}function Sr(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Cr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ue(e,t,r,n,s){if(c.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!c.isString(t)){if(c.isString(n))return t.indexOf(n)!==-1;if(c.isRegExp(n))return n.test(t)}}function Or(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Rr(e,t){const r=c.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}class ae{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(a,u,f){const l=D(u);if(!l)throw new Error("header name must be a non-empty string");const p=c.findKey(s,l);(!p||s[p]===void 0||f===!0||f===void 0&&s[p]!==!1)&&(s[p||u]=ee(a))}const i=(a,u)=>c.forEach(a,(f,l)=>o(f,l,u));return c.isPlainObject(t)||t instanceof this.constructor?i(t,r):c.isString(t)&&(t=t.trim())&&!Cr(t)?i(vr(t),r):t!=null&&o(r,t,n),this}get(t,r){if(t=D(t),t){const n=c.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return Sr(s);if(c.isFunction(r))return r.call(this,s,n);if(c.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=D(t),t){const n=c.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||ue(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=D(i),i){const a=c.findKey(n,i);a&&(!r||ue(n,n[a],a,r))&&(delete n[a],s=!0)}}return c.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||ue(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return c.forEach(this,(s,o)=>{const i=c.findKey(n,o);if(i){r[i]=ee(s),delete r[o];return}const a=t?Or(o):String(o).trim();a!==o&&delete r[o],r[a]=ee(s),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return c.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&c.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[Pe]=this[Pe]={accessors:{}}).accessors,s=this.prototype;function o(i){const a=D(i);n[a]||(Rr(s,i),n[a]=!0)}return c.isArray(t)?t.forEach(o):o(t),this}}ae.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.reduceDescriptors(ae.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});c.freezeMethods(ae);const L=ae;function de(e,t){const r=this||Se,n=t||r,s=L.from(n.headers);let o=n.data;return c.forEach(e,function(a){o=a.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ct(e){return!!(e&&e.__CANCEL__)}function V(e,t,r){m.call(this,e??"canceled",m.ERR_CANCELED,t,r),this.name="CanceledError"}c.inherits(V,m,{__CANCEL__:!0});function Tr(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new m("Request failed with status code "+r.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const Ar=O.isStandardBrowserEnv?function(){return{write:function(r,n,s,o,i,a){const u=[];u.push(r+"="+encodeURIComponent(n)),c.isNumber(s)&&u.push("expires="+new Date(s).toGMTString()),c.isString(o)&&u.push("path="+o),c.isString(i)&&u.push("domain="+i),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function xr(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Lr(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function lt(e,t){return e&&!xr(t)?Lr(e,t):t}const kr=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(o){let i=o;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(i){const a=c.isString(i)?s(i):i;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}();function Nr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function $r(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(u){const f=Date.now(),l=n[o];i||(i=f),r[s]=u,n[s]=f;let p=o,g=0;for(;p!==s;)g+=r[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const y=l&&f-l;return y?Math.round(g*1e3/y):void 0}}function _e(e,t){let r=0;const n=$r(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,a=o-r,u=n(a),f=o<=i;r=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:a,rate:u||void 0,estimated:u&&i&&f?(i-o)/u:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Pr=typeof XMLHttpRequest<"u",_r=Pr&&function(e){return new Promise(function(r,n){let s=e.data;const o=L.from(e.headers).normalize(),i=e.responseType;let a;function u(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}let f;c.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?c.isString(f=o.getContentType())&&o.setContentType(f.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let l=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+h))}const p=lt(e.baseURL,e.url);l.open(e.method.toUpperCase(),ot(p,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function g(){if(!l)return;const d=L.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),E={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:d,config:e,request:l};Tr(function(S){r(S),u()},function(S){n(S),u()},E),l=null}if("onloadend"in l?l.onloadend=g:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(g)},l.onabort=function(){l&&(n(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||it;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),n(new m(h,E.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},O.isStandardBrowserEnv){const d=(e.withCredentials||kr(p))&&e.xsrfCookieName&&Ar.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&c.forEach(o.toJSON(),function(h,E){l.setRequestHeader(E,h)}),c.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",_e(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",_e(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=d=>{l&&(n(!d||d.type?new V(null,e,l):d),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const y=Nr(p);if(y&&O.protocols.indexOf(y)===-1){n(new m("Unsupported protocol "+y+":",m.ERR_BAD_REQUEST,e));return}l.send(s||null)})},me={http:ir,xhr:_r};c.forEach(me,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Be=e=>`- ${e}`,Br=e=>c.isFunction(e)||e===null||e===!1,ut={getAdapter:e=>{e=c.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let o=0;o<t;o++){r=e[o];let i;if(n=r,!Br(r)&&(n=me[(i=String(r)).toLowerCase()],n===void 0))throw new m(`Unknown adapter '${i}'`);if(n)break;s[i||"#"+o]=n}if(!n){const o=Object.entries(s).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Be).join(`
`):" "+Be(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:me};function fe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new V(null,e)}function Me(e){return fe(e),e.headers=L.from(e.headers),e.data=de.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ut.getAdapter(e.adapter||Se.adapter)(e).then(function(n){return fe(e),n.data=de.call(e,e.transformResponse,n),n.headers=L.from(n.headers),n},function(n){return ct(n)||(fe(e),n&&n.response&&(n.response.data=de.call(e,e.transformResponse,n.response),n.response.headers=L.from(n.response.headers))),Promise.reject(n)})}const Fe=e=>e instanceof L?e.toJSON():e;function M(e,t){t=t||{};const r={};function n(f,l,p){return c.isPlainObject(f)&&c.isPlainObject(l)?c.merge.call({caseless:p},f,l):c.isPlainObject(l)?c.merge({},l):c.isArray(l)?l.slice():l}function s(f,l,p){if(c.isUndefined(l)){if(!c.isUndefined(f))return n(void 0,f,p)}else return n(f,l,p)}function o(f,l){if(!c.isUndefined(l))return n(void 0,l)}function i(f,l){if(c.isUndefined(l)){if(!c.isUndefined(f))return n(void 0,f)}else return n(void 0,l)}function a(f,l,p){if(p in t)return n(f,l);if(p in e)return n(void 0,f)}const u={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(f,l)=>s(Fe(f),Fe(l),!0)};return c.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=u[l]||s,g=p(e[l],t[l],l);c.isUndefined(g)&&p!==a||(r[l]=g)}),r}const dt="1.5.1",Ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ce[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const je={};Ce.transitional=function(t,r,n){function s(o,i){return"[Axios v"+dt+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,a)=>{if(t===!1)throw new m(s(i," has been removed"+(r?" in "+r:"")),m.ERR_DEPRECATED);return r&&!je[i]&&(je[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,a):!0}};function Mr(e,t,r){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const a=e[o],u=a===void 0||i(a,o,e);if(u!==!0)throw new m("option "+o+" must be "+u,m.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ge={assertOptions:Mr,validators:Ce},k=ge.validators;class re{constructor(t){this.defaults=t,this.interceptors={request:new $e,response:new $e}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=M(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&ge.assertOptions(n,{silentJSONParsing:k.transitional(k.boolean),forcedJSONParsing:k.transitional(k.boolean),clarifyTimeoutError:k.transitional(k.boolean)},!1),s!=null&&(c.isFunction(s)?r.paramsSerializer={serialize:s}:ge.assertOptions(s,{encode:k.function,serialize:k.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&c.merge(o.common,o[r.method]);o&&c.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),r.headers=L.concat(i,o);const a=[];let u=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(r)===!1||(u=u&&h.synchronous,a.unshift(h.fulfilled,h.rejected))});const f=[];this.interceptors.response.forEach(function(h){f.push(h.fulfilled,h.rejected)});let l,p=0,g;if(!u){const d=[Me.bind(this),void 0];for(d.unshift.apply(d,a),d.push.apply(d,f),g=d.length,l=Promise.resolve(r);p<g;)l=l.then(d[p++],d[p++]);return l}g=a.length;let y=r;for(p=0;p<g;){const d=a[p++],h=a[p++];try{y=d(y)}catch(E){h.call(this,E);break}}try{l=Me.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,g=f.length;p<g;)l=l.then(f[p++],f[p++]);return l}getUri(t){t=M(this.defaults,t);const r=lt(t.baseURL,t.url);return ot(r,t.params,t.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(t){re.prototype[t]=function(r,n){return this.request(M(n||{},{method:t,url:r,data:(n||{}).data}))}});c.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,a){return this.request(M(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}re.prototype[t]=r(),re.prototype[t+"Form"]=r(!0)});const te=re;class Oe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(a=>{n.subscribe(a),o=a}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,a){n.reason||(n.reason=new V(o,i,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new Oe(function(s){t=s}),cancel:t}}}const Fr=Oe;function jr(e){return function(r){return e.apply(null,r)}}function Dr(e){return c.isObject(e)&&e.isAxiosError===!0}const we={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(we).forEach(([e,t])=>{we[t]=e});const Ur=we;function ft(e){const t=new te(e),r=We(te.prototype.request,t);return c.extend(r,te.prototype,t,{allOwnKeys:!0}),c.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return ft(M(e,s))},r}const w=ft(Se);w.Axios=te;w.CanceledError=V;w.CancelToken=Fr;w.isCancel=ct;w.VERSION=dt;w.toFormData=ie;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=jr;w.isAxiosError=Dr;w.mergeConfig=M;w.AxiosHeaders=L;w.formToJSON=e=>at(c.isHTMLForm(e)?new FormData(e):e);w.getAdapter=ut.getAdapter;w.HttpStatusCode=Ur;w.default=w;const Ir=w,Hr="https://edu2pro.ru/portal",qr=`${Hr}/webservice/rest/server.php`,N="652c71f433ea0d910b172fa0b9f224bf",zr="core_course_get_courses_by_field",Jr="json";function pt(){return Ir.get(qr,{method:"get",params:{wsfunction:zr,moodlewsrestformat:Jr,wstoken:N}}).then(e=>e.status>=400?null:e.data.courses)}const ye=await pt(),_=e=>{if(!e)return"";const t=document.createElement("p");return t.classList.add("course-description"),t.innerHTML=R(e),t.querySelectorAll("p > img").forEach(n=>n.remove()),t.innerHTML},R=e=>{const t=e.replace(/&nbsp;/g,"");var r=document.createElement("span");return r.innerHTML=t,r.textContent||r.innerText},ht=e=>{if(!e)return"./avatar.svg";const t=new URL(e).pathname.split("pluginfile.php/")[1],r=new URL(`https://edu2pro.ru/portal/webservice/pluginfile.php/${t}`);return r.searchParams.append("token",N),r.toString()},mt=e=>{const t=e.match(/src="(.*?)"/)?.[1];return ht(t)},Vr=e=>e.customfields.filter(t=>t.shortname.includes("tag_")),Wr=e=>Vr(e).filter(t=>t.valueraw===1).map(t=>t.shortname),j=e=>e.customfields.filter(t=>t.shortname.includes("tag_")&&t.valueraw>0).map(t=>t.name),De=document.querySelector("#ind-courses"),Ue=document.querySelector("#group-courses"),Ie=document.querySelector("#seminar-courses"),He=document.querySelector("#media-courses"),C=document.querySelector("#modal"),Kr=`
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
</svg>`,Gr=`
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
`,Xr=`
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-badge"><path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M7 16.5 8 22l-3-1-3 1 1-5.5"/></svg>
`,Zr=`
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
`,Qr=`
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tags"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="6.5" cy="9.5" r=".5" fill="currentColor"/></svg>
`,Yr={duration:Kr,foruser:Gr,docend:Xr,date:Zr,tag:Qr},b=(e,t,r)=>!e||!t?"":`
    <p class="badge">
        ${r?Yr[r]:""}
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
    `;function K(e){const{courseImage:t,name:r,badges:n,description:s,openButton:o,authors:i}=e;return`
        <article class="course-card group-card">
            <header class="course-header">${t}</header>
            <main class="course-content">
                <h1 class="course-title">${r}</h1>
                <div class="course-topline">
                    ${n??""}
                </div>
                <p class="course-description">
                    ${s}
                </p>
                ${i??""}
                ${o}
            </main>
        </article>
    `}const en=e=>{const t=[];for(let r=1;r<=3;r++)e.customfields.find(n=>n.shortname===`autorfio${r}kurs`)?.value&&t.push({name:R(e.customfields.find(n=>n.shortname===`autorfio${r}kurs`)?.value??""),photo:mt(e.customfields.find(n=>n.shortname===`autorfoto${r}kurs`)?.value??"")});return t},tn=e=>{let t="";return e.forEach(r=>t+=`<img title="${r.name}" src="${ht(r.photo)}" alt="${r.name}" />`),t},Re=e=>{const t=en(e).filter(r=>r.name);return!t||t.length===0?`
			<div class="course-authors-wrapper">
					<p class="course-authors-title">Авторы курса:</p>
					<span style="color: #aaa; font-size: 14px;">Авторы не указаны</span>
			</div>
		`:`
    	<div class="course-authors-wrapper">
            <p class="course-authors-title">Авторы курса:</p>
            <div class="course-authors">
            	${tn(t)}
            </div>
        </div>
	`},gt=e=>e.filter(t=>t.visible===1).filter(t=>t.customfields.find(r=>r.shortname==="flagmain")?.value==="Да").filter(t=>t.categoryname==="Групповое обучение").map(t=>({...t,courseType:"group"})),rn=e=>{if(!Ue)return null;const t=e.slice(-3).map(r=>nn(r));Ue.innerHTML=t.join("")},nn=e=>{if(!e)return"";const{customfields:t,overviewfiles:r,fullname:n,shortname:s,summary:o,id:i}=e,a=R(t.find(h=>h.shortname==="durationkurs")?.value??""),u=R(t.find(h=>h.shortname==="foruser")?.value??""),f=b("Продолжительность",a,"duration"),l=b("Для кого",u,"foruser"),p=r.length===0?`<img class="course-cover" src="./coursecards/contract2.webp" alt="${s}" />`:`<img class="course-cover" src="${r[0]?.fileurl}?token=${N}" alt="${s}" />`,g=j(e),y=g.length>0?b("Теги",g.join(", "),"tag"):"",d={courseImage:p,name:n,badges:[y,f,l].join(""),description:_(o),openButton:W(i),authors:Re(e)};return K(d)},sn=(e,t)=>`
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
`,wt=e=>e.filter(t=>t.visible===1).filter(t=>t.categoryname==="обучающие видео и видеопроекты"||t.categoryname==="статьи"||t.categoryname==="база презентаций"||t.categoryname==="электронные библиотеки"||t.categoryname==="книги и пособия").map(t=>({...t,courseType:"media"})),on=e=>{if(!He)return null;const t=e.sort((a,u)=>u.timecreated>a.timecreated?1:-1),r=t.find(a=>a.categoryname==="обучающие видео и видеопроекты"),n=t.find(a=>a.categoryname==="статьи"),s=t.find(a=>a.categoryname==="книги и пособия"),i=[r,n,s].map(a=>an(a));He.innerHTML=i.join("")},an=e=>{if(!e)return"";const{overviewfiles:t,fullname:r,shortname:n,categoryname:s,categoryid:o,summary:i,id:a}=e,u=t.length===0?`<img class="course-cover" src="./media.webp" alt="${n}" />`:`<img class="course-cover" src="${t[0]?.fileurl}?token=${N}" alt="${r}" />`,f=j(e),l=f.length>0?b("Теги",f.join(", "),"tag"):"",p=sn(o,s),g={courseImage:u,name:r,badges:[l,p].join(""),description:_(i),openButton:W(a)};return K(g)},yt=e=>e.filter(t=>t.visible===1).filter(t=>t.customfields.find(r=>r.shortname==="flagmain")?.value==="Да").filter(t=>t.categoryname==="Cамостоятельное обучение").map(t=>({...t,courseType:"personal"})),cn=e=>{if(!De)return null;const t=e.slice(-3).map(r=>ln(r));De.innerHTML=t.join("")},ln=e=>{if(!e)return"";const{customfields:t,overviewfiles:r,fullname:n,shortname:s,summary:o,id:i}=e,a=R(t.find(h=>h.shortname==="foruser")?.value??""),u=b("Для кого",a,"foruser"),f=b("Дата начала","в любое время","date"),l=i%3+1,p=r.length===0?`<img class="course-cover" src="./coursecards/sam${l}.webp" alt="${s}" />`:`<img class="course-cover" src="${r[0].fileurl}?token=${N}" alt="${s}" />`,g=j(e),y=g.length>0?b("Теги",g.join(", "),"tag"):"",d={courseImage:p,name:n,badges:[y,f,u].join(""),description:_(o),openButton:W(i),authors:Re(e)};return K(d)},bt=e=>e.filter(t=>t.visible===1).filter(t=>t.categoryname==="Заседания и семинары").map(t=>({...t,courseType:"seminar"})),un=e=>{if(!Ie)return null;const t=e.slice(-3).map(r=>dn(r));Ie.innerHTML=t.join("")},dn=e=>{if(!e)return"";const{overviewfiles:t,fullname:r,shortname:n,summary:s,id:o}=e,i=o%3+1,a=t.length===0?`<img class="course-cover" src="./coursecards/seminar${i}.webp" alt="${n}" />`:`<img class="course-cover" src="${t[0].fileurl}?token=${N}" alt="${n}" />`,u=j(e),f=u.length>0?b("Теги",u.join(", "),"tag"):"",l={courseImage:a,name:r,badges:[f].join(""),description:_(s),openButton:W(o)};return K(l)},B=document.querySelector("#course-tags"),I=document.querySelector("#course-type"),H=document.querySelector("#course-search"),q=document.querySelector("#course-sort"),qe=document.querySelector("#reset-filters"),fn=window.location.search,Z=new URLSearchParams(fn);function U(e,t){const r=new URL(window.location.href);r.searchParams.set(e,t),window.history.pushState({path:r.href},"",r.href)}const G={search:Z.get("search")||"",type:Z.get("type")||"all",tag:Z.get("tag")||"all",sort:Z.get("sort")||"new"},pn={search:"",type:"all",tag:"all",sort:"new"};let x={...G};function ce(e,t){return x[e]=t,U(e,t),Te(),x}function hn(){x={...pn};const{type:e,tag:t,search:r,sort:n}=x;return I&&(I.value=e),B&&(B.value=t),H&&(H.value=r),q&&(q.value=n),U("search",r),U("type",e),U("tag",t),U("sort",n),Te(),x}const mn=()=>{if(!I)return null;I.value=G.type,I.addEventListener("change",e=>{const t=e.target.value;ce("type",t)})},gn=()=>{if(!H)return null;H.value=G.search,H.addEventListener("input",e=>{const t=e.target.value;ce("search",t)})},ze={all:"Все",tag_2023:"2023",tag_2024:"2024",tag_chairman_assist:"В помощь председателю",tag_personal_growth:"Личный рост",tag_reports_and_elections:"Отчеты и выборы",tag_ppo:"ППО"},wn=()=>{if(!B)return null;B.innerHTML=Object.keys(ze).map(e=>`<option value="${e}">${ze[e]}</option>`).join(""),B.value=G.tag,B.addEventListener("change",e=>{const t=e.target.value;ce("tag",t)})},yn=()=>{if(!q)return null;q.value=G.sort,q.addEventListener("change",e=>{const t=e.target.value;ce("sort",t)})},bn=()=>{if(!qe)return null;qe.addEventListener("click",hn)},En=()=>{mn(),wn(),gn(),yn(),bn()},vn=e=>{const t=x.search.toLowerCase(),r=x.type,n=x.sort==="new"?1:-1,s=x.tag,o=e.filter(i=>{const a=r==="all"||i.courseType===r,u=s==="all"||Wr(i).includes(s),f=i.fullname.toLowerCase().includes(t)||i.summary.includes(t);return a&&u&&f});return o.sort((i,a)=>i.timecreated<a.timecreated?n:i.timecreated>a.timecreated?-n:0),o},Sn=e=>{const t=document.createElement("div");return t.innerHTML=e,`
    <div class="programs-wrapper">
        ${[...t.querySelectorAll("li:has(ul)").values()].map(o=>{const i=[...o.querySelector("ul")?.querySelectorAll("li").values()??[]];return o.querySelector("ul")?.remove(),`
            <details>
                <summary>${o.innerHTML.trim()}</summary>
                <ul>
                    ${i.map(a=>`<li>${a.innerHTML}</li>`).join("")}
                </ul>
            </details>
        `}).join("")}
    </div>`},Cn=e=>{const t=e.customfields.find(r=>r.shortname==="program")?.value??"";return`
        <p><strong>Программа курса:</strong></p>
        ${Sn(t)}
    `},On=e=>{if(e.length===0)return"";let t="";return e.forEach(r=>{t+=`
					<div class="testimonial">
						<figure class="testimonial-photo">
							<img title="${r.name.replace(/&nbsp;/g,"")}" src="${r.photo?r.photo:"./avatar.svg"}" alt="${r.name}" />
							<figcaption>${r.name}</figcaption>
						</figure>
						<div class="testimonial-text">
							<p>${r.text}</p>
						</div>
						<div class="testimonial-quote">
						<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 349.078 349.078"> <
						<path d="M198.779 322.441v-58.245c0-7.903 6.406-14.304 14.304-14.304 28.183 0 43.515-28.904 45.643-85.961h-45.643c-7.897 0-14.304-6.41-14.304-14.304V26.64c0-7.9 6.406-14.301 14.304-14.301h121.69c7.896 0 14.305 6.408 14.305 14.301v122.988c0 27.349-2.761 52.446-8.181 74.611-5.568 22.722-14.115 42.587-25.398 59.049-11.604 16.917-26.132 30.192-43.155 39.437-17.152 9.304-37.09 14.026-59.267 14.026-7.891-.006-14.298-6.413-14.298-14.31zM14.301 249.887C6.404 249.887 0 256.293 0 264.185v58.257c0 7.896 6.404 14.298 14.301 14.298 22.166 0 42.114-4.723 59.255-14.026 17.032-9.244 31.558-22.508 43.161-39.437 11.29-16.462 19.836-36.328 25.404-59.061 5.423-22.165 8.178-47.263 8.178-74.6V26.628c0-7.9-6.41-14.301-14.304-14.301H14.301C6.404 12.327 0 18.734 0 26.628v122.988c0 7.899 6.404 14.304 14.301 14.304h45.002c-2.102 57.062-17.213 85.967-45.002 85.967z"/>
						</svg>
						</div>
					</div>		
		`}),t},Rn=e=>{const t=[];for(let r=1;r<=3;r++)e.customfields.find(n=>n.shortname===`feedbackfio${r}kurs`)?.value&&t.push({name:R(e.customfields.find(n=>n.shortname===`feedbackfio${r}kurs`)?.value??""),photo:mt(e.customfields.find(n=>n.shortname===`feedbackfoto${r}kurs`)?.value??""),text:R(e.customfields.find(n=>n.shortname===`feedback${r}kurs`)?.value??"")});return t},Tn=e=>{const t=Rn(e);return!t||t.length===0?"":`
    	<div class="course-testimonials-wrapper">
            ${On(t)}
        </div>
	`},$=(e,t)=>e?`
		<div class="modal-content-element">
			<p><strong>${t}:</strong></p>
			<span style="padding-left: 1rem;">${e}</span>
		</div>
		`:"",An=e=>{const t=e.customfields.find(u=>u.shortname==="fulldesc")?.value??"",r=e.customfields.find(u=>u.shortname==="purposeofkurs")?.value??"",n=e.customfields.find(u=>u.shortname==="objectiveskurs")?.value??"",s=e.customfields.find(u=>u.shortname==="resultkurs")?.value??"",o=e.customfields.find(u=>u.shortname==="competencieskurs")?.value??"",i=e.customfields.find(u=>u.shortname==="kontrolkurs")?.value??"",a=e.customfields.find(u=>u.shortname==="durationkurs")?.value??"";return`<div class="modal-content">
				${$(t,"Описание курса")}
				${$(r,"Цель курса")}
				${$(n,"Задачи курса")}
				${$(s,"Результаты курса")}
				${$(o,"Компетеции, необходимые для зачисления на курс")}
				${$(i,"Промежуточный итоговый контроль")}
				${$(a,"Длительность курса")}	

				${Cn(e)}

				${Tn(e)}
			</div>`},Je=e=>`
    <a 
        style="width: 100%; text-align: center;"
        href="https://edu2pro.ru/portal/course/view.php?id=${e.id}"
        class="button button-md"
    >
        Записаться на курс
    </a>
    `,xn=()=>`
    <button 
        style="width: 100%; text-align: center;"
        id="modal-sidebar-close"
        aria-label="Закрыть модальное окно"
        class="button button-md button-secondary"
    >
        Закрыть
    </button>
    `,Ln=e=>{const{timemodified:t,customfields:r}=e,n=new Date(t*1e3).toLocaleDateString();return`
    <div class="about">
        <p style="font-weight: 500;">Кратко о курсе</p>
        <div class="about-text">
            ${r.find(o=>o.shortname==="shortdesc")?.value??""}
        </div>
        <p class="about-timemodified">
            <i>
                Последнее изменение: ${n}
            </i>
        </p>
    </div>
    `},kn=e=>`
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
    `,Nn=e=>{const{customfields:t}=e,r=R(t.find(i=>i.shortname==="durationkurs")?.value??""),n=R(t.find(i=>i.shortname==="docend")?.value??""),s=R(t.find(i=>i.shortname==="foruser")?.value??""),o=j(e);return`
    <div class="sidebar">
		${Je(e)}

		${Re(e)}

		<div class="badge-wrapper">
			${b("Теги",o.join(", "),"tag")}
			${b("Документ об окончании курса",n,"docend")}
			${b("Для кого",s,"foruser")}
			${b("Продолжительность",r,"duration")}
		</div>

		${Ln(e)}
		${kn(e)}
		
		${Je(e)}
		${xn()}
	</div>
    `},$n=e=>{if(!e)return"неизвестен";const t=Number.parseInt(e,10),r=s=>`
	<svg viewBox="-2.4 -2.4 28.80 28.80" fill="${s}" width="28" height="28" xmlns="http://www.w3.org/2000/svg" stroke="${s}"><g stroke-width="0" transform="translate(6.72,6.72), scale(0.44)"></g><g  stroke-linecap="round" stroke-linejoin="round"></g><g > <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
	`;let n="";for(let s=0;s<5;s++)s<t?n+=r("yellow"):n+=r("gray");return n},Pn=e=>{const t=e.customfields.find(r=>r.shortname==="stars")?.value??"";return t?`
        <div class="rating">
            <span>Рейтинг:</span>
            <div class="flex flex-row items-center">
            ${$n(e.customfields.find(r=>r.shortname==="stars")?.value)}
            <span style="font-size: 1rem; margin-left: 0.5rem; opacity: 75%">${Number.parseFloat(t).toFixed(1)}</span>
            </div>
        </div>					
    `:""},_n=(e,t)=>e?`<img src="${e}?token=${N}" alt="${t}" />`:"",Bn=()=>`
        <button id="modal-close" aria-label="Закрыть модальное окно" >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <g clip-path="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="#fafafa"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
        </button>
    `,Mn=e=>{if(!e)return"";const t=e.overviewfiles.length!==0?e.overviewfiles[0]?.fileurl:"./placeholder.webp",r=new Date(e.startdate*1e3).toLocaleDateString();return`
    	<header class="modal-header">
            ${Bn()}
            <div>
                <h1>${e.fullname}</h1>
                <p>
                    ${_(e.summary)}
                </p>
                ${Pn(e)}
            </div>
            <div class="flex flex-col gap-4">
                ${_n(t,e.shortname)}
                <!-- ${b("Дата начала",r,"date")} -->
            </div>
        </header>
    `},Fn=e=>{if(!C)return null;C.innerHTML=jn(e)},Ve=()=>{if(!C)return null;C.close()},Et=e=>{if(!C)return null;document.querySelectorAll(".open-course").forEach(r=>{const n=Number.parseInt(r.dataset.course??"",10),s=e.find(o=>o.id===n);if(!s)return null;r.addEventListener("click",()=>{if(Fn(s),!C)return null;const o=C.querySelector(".ya-share2");Ya.share2(o);const i=C.querySelector("#modal-close");i&&i?.addEventListener("click",Ve);const a=C.querySelector("#modal-sidebar-close");a&&a?.addEventListener("click",Ve),C?.showModal()})})},jn=e=>e?`
			<div class="modal-wrapper">
				${Mn(e)}
				<main class="modal-main">
					${An(e)}
					${Nn(e)}
				</main>
			</div>
	`:"",Dn={group:"Обучение в группе",media:"Профсоюзная медиатека",personal:"Самостоятельное обучение",seminar:"Семинары",all:"Все курсы"},Un=e=>{if(!e)return"";const{overviewfiles:t,fullname:r,shortname:n,summary:s,id:o,courseType:i}=e,a=t.length===0?`<img class="course-cover" src="./media.webp" alt="${n}" />`:`<img class="course-cover" src="${t[0]?.fileurl}?token=${N}" alt="${n}" />`,u=i?b("Категория",Dn[i],"foruser"):"",f=j(e),l=f.length>0?b("Теги",f.join(", "),"tag"):"",p={courseImage:a,name:r,badges:[u,l].join(""),description:_(s),openButton:W(o)};return K(p)},In=e=>{const t=yt(e),r=gt(e),n=bt(e),s=wt(e);t&&cn(t),r&&rn(r),n&&un(n),s&&on(s),Et(e)},Q=document.getElementById("filtered-courses"),Te=async()=>{const e=await pt();if(!Q||!e)return null;const t=yt(e),r=gt(e),n=bt(e),s=wt(e),o=[...t,...r,...s,...n],i=vn(o);Q.innerHTML="",i.length===0&&(Q.innerHTML='<p class="no-courses">Подходящих курсов не найдено</p>'),i.forEach(a=>{Q.innerHTML+=Un(a)}),Et(e)},Hn=()=>{if(!ye)return null;In(ye)},qn=()=>{if(!ye)return null;En(),Te()};Rt();Hn();qn();
