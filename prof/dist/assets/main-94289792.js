(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const $=document.querySelector("#nav-mobile-menu"),Et=document.querySelector("#nav-mobile-button"),St=document.querySelector("#nav-mobile-button-close"),vt=()=>{if(!$)return null;$.classList.remove("close"),$.classList.add("open")},Re=()=>{if(!$)return null;$.classList.remove("open"),$.classList.add("close")},Ct=()=>{Et?.addEventListener("click",vt),St?.addEventListener("click",Re),$?.childNodes.forEach(e=>e.addEventListener("click",Re))};function Je(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ot}=Object.prototype,{getPrototypeOf:we}=Object,ee=(e=>t=>{const r=Ot.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>ee(t)===e),te=e=>t=>typeof t===e,{isArray:M}=Array,H=te("undefined");function Rt(e){return e!==null&&!H(e)&&e.constructor!==null&&!H(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ve=R("ArrayBuffer");function At(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ve(e.buffer),t}const Tt=te("string"),E=te("function"),We=te("number"),re=e=>e!==null&&typeof e=="object",xt=e=>e===!0||e===!1,X=e=>{if(ee(e)!=="object")return!1;const t=we(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Lt=R("Date"),kt=R("File"),Nt=R("Blob"),Pt=R("FileList"),$t=e=>re(e)&&E(e.pipe),_t=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=ee(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},Bt=R("URLSearchParams"),Mt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function q(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),M(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(n=0;n<i;n++)c=o[n],t.call(null,e[c],c,e)}}function Ke(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const Ge=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Xe=e=>!H(e)&&e!==Ge;function ue(){const{caseless:e}=Xe(this)&&this||{},t={},r=(n,s)=>{const o=e&&Ke(t,s)||s;X(t[o])&&X(n)?t[o]=ue(t[o],n):X(n)?t[o]=ue({},n):M(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&q(arguments[n],r);return t}const Ft=(e,t,r,{allOwnKeys:n}={})=>(q(t,(s,o)=>{r&&E(s)?e[o]=Je(s,r):e[o]=s},{allOwnKeys:n}),e),Dt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ut=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},jt=(e,t,r,n)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&we(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},It=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Ht=e=>{if(!e)return null;if(M(e))return e;let t=e.length;if(!We(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},qt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&we(Uint8Array)),zt=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Jt=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Vt=R("HTMLFormElement"),Wt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),Ae=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Kt=R("RegExp"),Ze=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};q(r,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(n[o]=i||s)}),Object.defineProperties(e,n)},Gt=e=>{Ze(e,(t,r)=>{if(E(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(E(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Xt=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return M(e)?n(e):n(String(e).split(t)),r},Zt=()=>{},Qt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ie="abcdefghijklmnopqrstuvwxyz",Te="0123456789",Qe={DIGIT:Te,ALPHA:ie,ALPHA_DIGIT:ie+ie.toUpperCase()+Te},Yt=(e=16,t=Qe.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function er(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const tr=e=>{const t=new Array(10),r=(n,s)=>{if(re(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=M(n)?[]:{};return q(n,(i,c)=>{const u=r(i,s+1);!H(u)&&(o[c]=u)}),t[s]=void 0,o}}return n};return r(e,0)},rr=R("AsyncFunction"),nr=e=>e&&(re(e)||E(e))&&E(e.then)&&E(e.catch),a={isArray:M,isArrayBuffer:Ve,isBuffer:Rt,isFormData:_t,isArrayBufferView:At,isString:Tt,isNumber:We,isBoolean:xt,isObject:re,isPlainObject:X,isUndefined:H,isDate:Lt,isFile:kt,isBlob:Nt,isRegExp:Kt,isFunction:E,isStream:$t,isURLSearchParams:Bt,isTypedArray:qt,isFileList:Pt,forEach:q,merge:ue,extend:Ft,trim:Mt,stripBOM:Dt,inherits:Ut,toFlatObject:jt,kindOf:ee,kindOfTest:R,endsWith:It,toArray:Ht,forEachEntry:zt,matchAll:Jt,isHTMLForm:Vt,hasOwnProperty:Ae,hasOwnProp:Ae,reduceDescriptors:Ze,freezeMethods:Gt,toObjectSet:Xt,toCamelCase:Wt,noop:Zt,toFiniteNumber:Qt,findKey:Ke,global:Ge,isContextDefined:Xe,ALPHABET:Qe,generateString:Yt,isSpecCompliantForm:er,toJSONObject:tr,isAsyncFn:rr,isThenable:nr};function h(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ye=h.prototype,et={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{et[e]={value:e}});Object.defineProperties(h,et);Object.defineProperty(Ye,"isAxiosError",{value:!0});h.from=(e,t,r,n,s,o)=>{const i=Object.create(Ye);return a.toFlatObject(e,i,function(u){return u!==Error.prototype},c=>c!=="isAxiosError"),h.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const sr=null;function de(e){return a.isPlainObject(e)||a.isArray(e)}function tt(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function xe(e,t,r){return e?e.concat(t).map(function(s,o){return s=tt(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function or(e){return a.isArray(e)&&!e.some(de)}const ir=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ne(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,b){return!a.isUndefined(b[m])});const n=r.metaTokens,s=r.visitor||l,o=r.dots,i=r.indexes,u=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!u&&a.isBlob(d))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?u&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,m,b){let A=d;if(d&&!b&&typeof d=="object"){if(a.endsWith(m,"{}"))m=n?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&or(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(A=a.toArray(d)))return m=tt(m),A.forEach(function(W,bt){!(a.isUndefined(W)||W===null)&&t.append(i===!0?xe([m],bt,o):i===null?m:m+"[]",f(W))}),!1}return de(d)?!0:(t.append(xe(b,m,o),f(d)),!1)}const p=[],w=Object.assign(ir,{defaultVisitor:l,convertValue:f,isVisitable:de});function y(d,m){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(d),a.forEach(d,function(A,S){(!(a.isUndefined(A)||A===null)&&s.call(t,A,a.isString(S)?S.trim():S,m,w))===!0&&y(A,m?m.concat(S):[S])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Le(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function ge(e,t){this._pairs=[],e&&ne(e,this,t)}const rt=ge.prototype;rt.append=function(t,r){this._pairs.push([t,r])};rt.toString=function(t){const r=t?function(n){return t.call(this,n,Le)}:Le;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function ar(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function nt(e,t,r){if(!t)return e;const n=r&&r.encode||ar,s=r&&r.serialize;let o;if(s?o=s(t,r):o=a.isURLSearchParams(t)?t.toString():new ge(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class cr{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}}const ke=cr,st={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},lr=typeof URLSearchParams<"u"?URLSearchParams:ge,ur=typeof FormData<"u"?FormData:null,dr=typeof Blob<"u"?Blob:null,fr=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),pr=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),C={isBrowser:!0,classes:{URLSearchParams:lr,FormData:ur,Blob:dr},isStandardBrowserEnv:fr,isStandardBrowserWebWorkerEnv:pr,protocols:["http","https","file","blob","url","data"]};function mr(e,t){return ne(e,new C.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return C.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function hr(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function wr(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function ot(e){function t(r,n,s,o){let i=r[o++];const c=Number.isFinite(+i),u=o>=r.length;return i=!i&&a.isArray(s)?s.length:i,u?(a.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&a.isArray(s[i])&&(s[i]=wr(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const r={};return a.forEachEntry(e,(n,s)=>{t(hr(n),s,r,0)}),r}return null}function gr(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const ye={transitional:st,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(ot(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return mr(t,this.formSerializer).toString();if((c=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ne(c?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),gr(t)):t}],transformResponse:[function(t){const r=this.transitional||ye.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:C.classes.FormData,Blob:C.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ye.headers[e]={}});const be=ye,yr=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),br=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&yr[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Ne=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function Z(e){return e===!1||e==null?e:a.isArray(e)?e.map(Z):String(e)}function Er(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Sr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ae(e,t,r,n,s){if(a.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function vr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Cr(e,t){const r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}class se{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(c,u,f){const l=F(u);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||f===!0||f===void 0&&s[p]!==!1)&&(s[p||u]=Z(c))}const i=(c,u)=>a.forEach(c,(f,l)=>o(f,l,u));return a.isPlainObject(t)||t instanceof this.constructor?i(t,r):a.isString(t)&&(t=t.trim())&&!Sr(t)?i(br(t),r):t!=null&&o(r,t,n),this}get(t,r){if(t=F(t),t){const n=a.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return Er(s);if(a.isFunction(r))return r.call(this,s,n);if(a.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=F(t),t){const n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||ae(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=F(i),i){const c=a.findKey(n,i);c&&(!r||ae(n,n[c],c,r))&&(delete n[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||ae(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return a.forEach(this,(s,o)=>{const i=a.findKey(n,o);if(i){r[i]=Z(s),delete r[o];return}const c=t?vr(o):String(o).trim();c!==o&&delete r[o],r[c]=Z(s),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return a.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[Ne]=this[Ne]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=F(i);n[c]||(Cr(s,i),n[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}se.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(se.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods(se);const T=se;function ce(e,t){const r=this||be,n=t||r,s=T.from(n.headers);let o=n.data;return a.forEach(e,function(c){o=c.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function it(e){return!!(e&&e.__CANCEL__)}function z(e,t,r){h.call(this,e??"canceled",h.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(z,h,{__CANCEL__:!0});function Or(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new h("Request failed with status code "+r.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const Rr=C.isStandardBrowserEnv?function(){return{write:function(r,n,s,o,i,c){const u=[];u.push(r+"="+encodeURIComponent(n)),a.isNumber(s)&&u.push("expires="+new Date(s).toGMTString()),a.isString(o)&&u.push("path="+o),a.isString(i)&&u.push("domain="+i),c===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Ar(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Tr(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function at(e,t){return e&&!Ar(t)?Tr(e,t):t}const xr=C.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(o){let i=o;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===n.protocol&&c.host===n.host}}():function(){return function(){return!0}}();function Lr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function kr(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(u){const f=Date.now(),l=n[o];i||(i=f),r[s]=u,n[s]=f;let p=o,w=0;for(;p!==s;)w+=r[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const y=l&&f-l;return y?Math.round(w*1e3/y):void 0}}function Pe(e,t){let r=0;const n=kr(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-r,u=n(c),f=o<=i;r=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:u||void 0,estimated:u&&i&&f?(i-o)/u:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Nr=typeof XMLHttpRequest<"u",Pr=Nr&&function(e){return new Promise(function(r,n){let s=e.data;const o=T.from(e.headers).normalize(),i=e.responseType;let c;function u(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}let f;a.isFormData(s)&&(C.isStandardBrowserEnv||C.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(f=o.getContentType())&&o.setContentType(f.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let l=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+m))}const p=at(e.baseURL,e.url);l.open(e.method.toUpperCase(),nt(p,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function w(){if(!l)return;const d=T.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),b={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:d,config:e,request:l};Or(function(S){r(S),u()},function(S){n(S),u()},b),l=null}if("onloadend"in l?l.onloadend=w:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(w)},l.onabort=function(){l&&(n(new h("Request aborted",h.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new h("Network Error",h.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||st;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),n(new h(m,b.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,l)),l=null},C.isStandardBrowserEnv){const d=(e.withCredentials||xr(p))&&e.xsrfCookieName&&Rr.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(m,b){l.setRequestHeader(b,m)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Pe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Pe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=d=>{l&&(n(!d||d.type?new z(null,e,l):d),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const y=Lr(p);if(y&&C.protocols.indexOf(y)===-1){n(new h("Unsupported protocol "+y+":",h.ERR_BAD_REQUEST,e));return}l.send(s||null)})},fe={http:sr,xhr:Pr};a.forEach(fe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const $e=e=>`- ${e}`,$r=e=>a.isFunction(e)||e===null||e===!1,ct={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let o=0;o<t;o++){r=e[o];let i;if(n=r,!$r(r)&&(n=fe[(i=String(r)).toLowerCase()],n===void 0))throw new h(`Unknown adapter '${i}'`);if(n)break;s[i||"#"+o]=n}if(!n){const o=Object.entries(s).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map($e).join(`
`):" "+$e(o[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:fe};function le(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new z(null,e)}function _e(e){return le(e),e.headers=T.from(e.headers),e.data=ce.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ct.getAdapter(e.adapter||be.adapter)(e).then(function(n){return le(e),n.data=ce.call(e,e.transformResponse,n),n.headers=T.from(n.headers),n},function(n){return it(n)||(le(e),n&&n.response&&(n.response.data=ce.call(e,e.transformResponse,n.response),n.response.headers=T.from(n.response.headers))),Promise.reject(n)})}const Be=e=>e instanceof T?e.toJSON():e;function B(e,t){t=t||{};const r={};function n(f,l,p){return a.isPlainObject(f)&&a.isPlainObject(l)?a.merge.call({caseless:p},f,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(f,l,p){if(a.isUndefined(l)){if(!a.isUndefined(f))return n(void 0,f,p)}else return n(f,l,p)}function o(f,l){if(!a.isUndefined(l))return n(void 0,l)}function i(f,l){if(a.isUndefined(l)){if(!a.isUndefined(f))return n(void 0,f)}else return n(void 0,l)}function c(f,l,p){if(p in t)return n(f,l);if(p in e)return n(void 0,f)}const u={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(f,l)=>s(Be(f),Be(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=u[l]||s,w=p(e[l],t[l],l);a.isUndefined(w)&&p!==c||(r[l]=w)}),r}const lt="1.5.1",Ee={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ee[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Me={};Ee.transitional=function(t,r,n){function s(o,i){return"[Axios v"+lt+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,c)=>{if(t===!1)throw new h(s(i," has been removed"+(r?" in "+r:"")),h.ERR_DEPRECATED);return r&&!Me[i]&&(Me[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,c):!0}};function _r(e,t,r){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const c=e[o],u=c===void 0||i(c,o,e);if(u!==!0)throw new h("option "+o+" must be "+u,h.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}const pe={assertOptions:_r,validators:Ee},L=pe.validators;class Y{constructor(t){this.defaults=t,this.interceptors={request:new ke,response:new ke}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=B(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&pe.assertOptions(n,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),s!=null&&(a.isFunction(s)?r.paramsSerializer={serialize:s}:pe.assertOptions(s,{encode:L.function,serialize:L.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[r.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),r.headers=T.concat(i,o);const c=[];let u=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(u=u&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const f=[];this.interceptors.response.forEach(function(m){f.push(m.fulfilled,m.rejected)});let l,p=0,w;if(!u){const d=[_e.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,f),w=d.length,l=Promise.resolve(r);p<w;)l=l.then(d[p++],d[p++]);return l}w=c.length;let y=r;for(p=0;p<w;){const d=c[p++],m=c[p++];try{y=d(y)}catch(b){m.call(this,b);break}}try{l=_e.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,w=f.length;p<w;)l=l.then(f[p++],f[p++]);return l}getUri(t){t=B(this.defaults,t);const r=at(t.baseURL,t.url);return nt(r,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){Y.prototype[t]=function(r,n){return this.request(B(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,c){return this.request(B(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}Y.prototype[t]=r(),Y.prototype[t+"Form"]=r(!0)});const Q=Y;class Se{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{n.subscribe(c),o=c}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,c){n.reason||(n.reason=new z(o,i,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new Se(function(s){t=s}),cancel:t}}}const Br=Se;function Mr(e){return function(r){return e.apply(null,r)}}function Fr(e){return a.isObject(e)&&e.isAxiosError===!0}const me={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(me).forEach(([e,t])=>{me[t]=e});const Dr=me;function ut(e){const t=new Q(e),r=Je(Q.prototype.request,t);return a.extend(r,Q.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return ut(B(e,s))},r}const g=ut(be);g.Axios=Q;g.CanceledError=z;g.CancelToken=Br;g.isCancel=it;g.VERSION=lt;g.toFormData=ne;g.AxiosError=h;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=Mr;g.isAxiosError=Fr;g.mergeConfig=B;g.AxiosHeaders=T;g.formToJSON=e=>ot(a.isHTMLForm(e)?new FormData(e):e);g.getAdapter=ct.getAdapter;g.HttpStatusCode=Dr;g.default=g;const Ur=g,jr="https://edu2pro.ru/portal",Ir=`${jr}/webservice/rest/server.php`,N="652c71f433ea0d910b172fa0b9f224bf",Hr="core_course_get_courses_by_field",qr="json";function dt(){return Ur.get(Ir,{method:"get",params:{wsfunction:Hr,moodlewsrestformat:qr,wstoken:N}}).then(e=>e.status>=400?null:e.data.courses)}const he=await dt(),_=e=>{if(!e)return"";const t=document.createElement("p");return t.classList.add("course-description"),t.innerHTML=O(e),t.querySelectorAll("p > img").forEach(n=>n.remove()),t.innerHTML},O=e=>{const t=e.replace(/&nbsp;/g,"");var r=document.createElement("span");return r.innerHTML=t,r.textContent||r.innerText},ft=e=>{if(!e)return"./avatar.svg";const t=new URL(e).pathname.split("pluginfile.php/")[1],r=new URL(`https://edu2pro.ru/portal/webservice/pluginfile.php/${t}`);return r.searchParams.append("token",N),r.toString()},pt=e=>{const t=e.match(/src="(.*?)"/)?.[1];return ft(t)},Fe=document.querySelector("#ind-courses"),De=document.querySelector("#group-courses"),Ue=document.querySelector("#seminar-courses"),je=document.querySelector("#media-courses"),v=document.querySelector("#modal"),zr=`
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
</svg>`,Jr=`
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
`,Vr=`
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-badge"><path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M7 16.5 8 22l-3-1-3 1 1-5.5"/></svg>
`,Wr=`
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
`,Kr=`
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tags"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="6.5" cy="9.5" r=".5" fill="currentColor"/></svg>
`,Gr={duration:zr,foruser:Jr,docend:Vr,date:Wr,tag:Kr},x=(e,t,r)=>!e||!t?"":`
    <p class="badge">
        ${r?Gr[r]:""}
        ${e}: ${t}
    </p>
    `,J=e=>`
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
    `;function V(e){const{courseImage:t,name:r,badges:n,description:s,openButton:o,authors:i}=e;return`
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
    `}const Xr=e=>{const t=[];for(let r=1;r<=3;r++)e.customfields.find(n=>n.shortname===`autorfio${r}kurs`)?.value&&t.push({name:O(e.customfields.find(n=>n.shortname===`autorfio${r}kurs`)?.value??""),photo:pt(e.customfields.find(n=>n.shortname===`autorfoto${r}kurs`)?.value??"")});return t},Zr=e=>{let t="";return e.forEach(r=>t+=`<img title="${r.name}" src="${ft(r.photo)}" alt="${r.name}" />`),t},ve=e=>{const t=Xr(e).filter(r=>r.name);return!t||t.length===0?`
			<div class="course-authors-wrapper">
					<p class="course-authors-title">Авторы курса:</p>
					<span style="color: #aaa; font-size: 14px;">Авторы не указаны</span>
			</div>
		`:`
    	<div class="course-authors-wrapper">
            <p class="course-authors-title">Авторы курса:</p>
            <div class="course-authors">
            	${Zr(t)}
            </div>
        </div>
	`},mt=e=>e.filter(t=>t.visible===1).filter(t=>t.customfields.find(r=>r.shortname==="flagmain")?.value==="Да").filter(t=>t.categoryname==="Групповое обучение").map(t=>({...t,courseType:"group"})),Qr=e=>{if(!De)return null;const t=e.slice(-3).map(r=>Yr(r));De.innerHTML=t.join("")},Yr=e=>{if(!e)return"";const{customfields:t,overviewfiles:r,fullname:n,shortname:s,summary:o,id:i}=e,c=O(t.find(y=>y.shortname==="durationkurs")?.value??""),u=O(t.find(y=>y.shortname==="foruser")?.value??""),f=x("Продолжительность",c,"duration"),l=x("Для кого",u,"foruser"),w={courseImage:r.length===0?`<img class="course-cover" src="./coursecards/contract2.webp" alt="${s}" />`:`<img class="course-cover" src="${r[0]?.fileurl}?token=${N}" alt="${s}" />`,name:n,badges:[f,l].join(""),description:_(o),openButton:J(i),authors:ve(e)};return V(w)},en=(e,t)=>`
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
`,ht=e=>e.filter(t=>t.visible===1).filter(t=>t.categoryname==="обучающие видео и видеопроекты"||t.categoryname==="статьи"||t.categoryname==="база презентаций"||t.categoryname==="электронные библиотеки"||t.categoryname==="книги и пособия").map(t=>({...t,courseType:"media"})),tn=e=>{if(!je)return null;const t=e.sort((c,u)=>u.timecreated>c.timecreated?1:-1),r=t.find(c=>c.categoryname==="обучающие видео и видеопроекты"),n=t.find(c=>c.categoryname==="статьи"),s=t.find(c=>c.categoryname==="книги и пособия"),i=[r,n,s].map(c=>rn(c));je.innerHTML=i.join("")},rn=e=>{if(!e)return"";const{overviewfiles:t,fullname:r,shortname:n,categoryname:s,categoryid:o,summary:i,id:c}=e,f={courseImage:t.length===0?`<img class="course-cover" src="./media.webp" alt="${n}" />`:`<img class="course-cover" src="${t[0]?.fileurl}?token=${N}" alt="${r}" />`,name:r,badges:en(o,s),description:_(i),openButton:J(c)};return V(f)},wt=e=>e.filter(t=>t.visible===1).filter(t=>t.customfields.find(r=>r.shortname==="flagmain")?.value==="Да").filter(t=>t.categoryname==="Cамостоятельное обучение").map(t=>({...t,courseType:"personal"})),nn=e=>{if(!Fe)return null;const t=e.slice(-3).map(r=>sn(r));Fe.innerHTML=t.join("")},sn=e=>{if(!e)return"";const{customfields:t,overviewfiles:r,fullname:n,shortname:s,summary:o,id:i}=e,c=O(t.find(y=>y.shortname==="foruser")?.value??""),u=x("Для кого",c,"foruser"),f=x("Дата начала","в любое время","date"),l=i%3+1,w={courseImage:r.length===0?`<img class="course-cover" src="./coursecards/sam${l}.webp" alt="${s}" />`:`<img class="course-cover" src="${r[0].fileurl}?token=${N}" alt="${s}" />`,name:n,badges:[f,u].join(""),description:_(o),openButton:J(i),authors:ve(e)};return V(w)},gt=e=>e.filter(t=>t.visible===1).filter(t=>t.categoryname==="Заседания и семинары").map(t=>({...t,courseType:"seminar"})),on=e=>{if(!Ue)return null;const t=e.slice(-3).map(r=>an(r));Ue.innerHTML=t.join("")},an=e=>{if(!e)return"";const{overviewfiles:t,fullname:r,shortname:n,summary:s,id:o}=e,i=o%3+1,u={courseImage:t.length===0?`<img class="course-cover" src="./coursecards/seminar${i}.webp" alt="${n}" />`:`<img class="course-cover" src="${t[0].fileurl}?token=${N}" alt="${n}" />`,name:r,description:_(s),openButton:J(o)};return V(u)},Ie=document.querySelector("#course-tags"),U=document.querySelector("#course-type"),j=document.querySelector("#course-search"),I=document.querySelector("#course-sort"),He=document.querySelector("#reset-filters"),cn=window.location.search,K=new URLSearchParams(cn);function D(e,t){const r=new URL(window.location.href);r.searchParams.set(e,t),window.history.pushState({path:r.href},"",r.href)}const oe={search:K.get("search")||"",type:K.get("type")||"all",tag:K.get("tag")||"",sort:K.get("sort")||"new"},ln={search:"",type:"all",tag:"",sort:"new"};let k={...oe};function Ce(e,t){return k[e]=t,D(e,t),Oe(),k}function un(){k={...ln};const{type:e,tag:t,search:r,sort:n}=k;return U&&(U.value=e),Ie&&(Ie.value=t),j&&(j.value=r),I&&(I.value=n),D("search",r),D("type",e),D("tag",t),D("sort",n),Oe(),k}const dn=()=>{if(!U)return null;U.value=oe.type,U.addEventListener("change",e=>{const t=e.target.value;Ce("type",t)})},fn=()=>{if(!j)return null;j.value=oe.search,j.addEventListener("input",e=>{const t=e.target.value;Ce("search",t)})},pn=()=>{if(!I)return null;I.value=oe.sort,I.addEventListener("change",e=>{const t=e.target.value;Ce("sort",t)})},mn=()=>{if(!He)return null;He.addEventListener("click",un)},hn=()=>{dn(),fn(),pn(),mn()},wn=e=>{const t=k.search.toLowerCase(),r=k.type,n=k.sort==="new"?1:-1,s=e.filter(o=>{const i=r==="all"||o.courseType===r,c=o.fullname.toLowerCase().includes(t)||o.summary.includes(t);return i&&c});return s.sort((o,i)=>o.timecreated<i.timecreated?n:o.timecreated>i.timecreated?-n:0),s},gn=e=>{const t=document.createElement("div");return t.innerHTML=e,`
    <div class="programs-wrapper">
        ${[...t.querySelectorAll("li:has(ul)").values()].map(o=>{const i=[...o.querySelector("ul")?.querySelectorAll("li").values()??[]];return o.querySelector("ul")?.remove(),`
            <details>
                <summary>${o.innerHTML.trim()}</summary>
                <ul>
                    ${i.map(c=>`<li>${c.innerHTML}</li>`).join("")}
                </ul>
            </details>
        `}).join("")}
    </div>`},yn=e=>{const t=e.customfields.find(r=>r.shortname==="program")?.value??"";return`
        <p><strong>Программа курса:</strong></p>
        ${gn(t)}
    `},bn=e=>{if(e.length===0)return"";let t="";return e.forEach(r=>{t+=`
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
		`}),t},En=e=>{const t=[];for(let r=1;r<=3;r++)e.customfields.find(n=>n.shortname===`feedbackfio${r}kurs`)?.value&&t.push({name:O(e.customfields.find(n=>n.shortname===`feedbackfio${r}kurs`)?.value??""),photo:pt(e.customfields.find(n=>n.shortname===`feedbackfoto${r}kurs`)?.value??""),text:O(e.customfields.find(n=>n.shortname===`feedback${r}kurs`)?.value??"")});return t},Sn=e=>{const t=En(e);return!t||t.length===0?"":`
    	<div class="course-testimonials-wrapper">
            ${bn(t)}
        </div>
	`},P=(e,t)=>e?`
		<div class="modal-content-element">
			<p><strong>${t}:</strong></p>
			<span style="padding-left: 1rem;">${e}</span>
		</div>
		`:"",vn=e=>{const t=e.customfields.find(u=>u.shortname==="fulldesc")?.value??"",r=e.customfields.find(u=>u.shortname==="purposeofkurs")?.value??"",n=e.customfields.find(u=>u.shortname==="objectiveskurs")?.value??"",s=e.customfields.find(u=>u.shortname==="resultkurs")?.value??"",o=e.customfields.find(u=>u.shortname==="competencieskurs")?.value??"",i=e.customfields.find(u=>u.shortname==="kontrolkurs")?.value??"",c=e.customfields.find(u=>u.shortname==="durationkurs")?.value??"";return`<div class="modal-content">
				${P(t,"Описание курса")}
				${P(r,"Цель курса")}
				${P(n,"Задачи курса")}
				${P(s,"Результаты курса")}
				${P(o,"Компетеции, необходимые для зачисления на курс")}
				${P(i,"Промежуточный итоговый контроль")}
				${P(c,"Длительность курса")}	

				${yn(e)}

				${Sn(e)}
			</div>`},qe=e=>`
    <a 
        style="width: 100%; text-align: center;"
        href="https://edu2pro.ru/portal/course/view.php?id=${e.id}"
        class="button button-md"
    >
        Записаться на курс
    </a>
    `,Cn=()=>`
    <button 
        style="width: 100%; text-align: center;"
        id="modal-sidebar-close"
        aria-label="Закрыть модальное окно"
        class="button button-md button-secondary"
    >
        Закрыть
    </button>
    `,On=e=>`
    <div class="about">
        <p style="font-weight: 500;">Кратко о курсе</p>
        <div style="margin-bottom: 1.5rem; margin-top: 1.5rem; color: rgb(55 65 81 / var(--tw-text-opacity));">
        <div>
            ${e.customfields.find(r=>r.shortname==="shortdesc")?.value??""}
        </div>
        </div>
        <a href="https://edu2pro.ru/portal/course/view.php?id=${e.id}"  target="_blank"
        style="display: block; margin-bottom: 0.5rem; margin-top: 1.5rem; color: #0077ff;" >
            Программа курса
        </a>
        <p>
            <i>
            Последнее изменение: ${new Date(e.timemodified*1e3).toLocaleDateString()}
            </i>
        </p>
    </div>
    `,Rn=e=>`
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
    `,An=e=>{const t=O(e.customfields.find(s=>s.shortname==="durationkurs")?.value??""),r=O(e.customfields.find(s=>s.shortname==="docend")?.value??""),n=O(e.customfields.find(s=>s.shortname==="foruser")?.value??"");return`
    <div class="sidebar">
		${qe(e)}

		${ve(e)}

		<div class="badge-wrapper">
			${x("Документ об окончании курса",r,"docend")}
			${x("Для кого",n,"foruser")}
			${x("Продолжительность",t,"duration")}
		</div>

		${On(e)}
		${Rn(e)}
		
		${qe(e)}
		${Cn()}
	</div>
    `},Tn=e=>{if(!e)return"неизвестен";const t=Number.parseInt(e,10),r=s=>`
	<svg viewBox="-2.4 -2.4 28.80 28.80" fill="${s}" width="28" height="28" xmlns="http://www.w3.org/2000/svg" stroke="${s}"><g stroke-width="0" transform="translate(6.72,6.72), scale(0.44)"></g><g  stroke-linecap="round" stroke-linejoin="round"></g><g > <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
	`;let n="";for(let s=0;s<5;s++)s<t?n+=r("yellow"):n+=r("gray");return n},xn=e=>{const t=e.customfields.find(r=>r.shortname==="stars")?.value??"";return t?`
        <div class="rating">
            <span>Рейтинг:</span>
            <div class="flex flex-row items-center">
            ${Tn(e.customfields.find(r=>r.shortname==="stars")?.value)}
            <span style="font-size: 1rem; margin-left: 0.5rem; opacity: 75%">${Number.parseFloat(t).toFixed(1)}</span>
            </div>
        </div>					
    `:""},Ln=(e,t)=>e?`<img src="${e}?token=${N}" alt="${t}" />`:"",kn=()=>`
        <button id="modal-close" aria-label="Закрыть модальное окно" >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <g clip-path="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="#fafafa"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
        </button>
    `,Nn=e=>{if(!e)return"";const t=e.overviewfiles.length!==0?e.overviewfiles[0]?.fileurl:"./placeholder.webp",r=new Date(e.startdate*1e3).toLocaleDateString();return`
    	<header class="modal-header">
            ${kn()}
            <div>
                <h1>${e.fullname}</h1>
                <p>
                    ${_(e.summary)}
                </p>
                ${xn(e)}
            </div>
            <div class="flex flex-col gap-4">
                ${Ln(t,e.shortname)}
                <!-- ${x("Дата начала",r,"date")} -->
            </div>
        </header>
    `},Pn=e=>{if(!v)return null;v.innerHTML=$n(e)},ze=()=>{if(!v)return null;v.close()},yt=e=>{if(!v)return null;document.querySelectorAll(".open-course").forEach(r=>{const n=Number.parseInt(r.dataset.course??"",10),s=e.find(o=>o.id===n);if(!s)return null;r.addEventListener("click",()=>{if(Pn(s),!v)return null;const o=v.querySelector(".ya-share2");Ya.share2(o);const i=v.querySelector("#modal-close");i&&i?.addEventListener("click",ze);const c=v.querySelector("#modal-sidebar-close");c&&c?.addEventListener("click",ze),v?.showModal()})})},$n=e=>e?`
			<div class="modal-wrapper">
				${Nn(e)}
				<main class="modal-main">
					${vn(e)}
					${An(e)}
				</main>
			</div>
	`:"",_n={group:"Обучение в группе",media:"Профсоюзная медиатека",personal:"Самостоятельное обучение",seminar:"Семинары",all:"Все курсы"},Bn=e=>{if(!e)return"";const{overviewfiles:t,fullname:r,shortname:n,summary:s,id:o,courseType:i}=e,c=t.length===0?`<img class="course-cover" src="./media.webp" alt="${n}" />`:`<img class="course-cover" src="${t[0]?.fileurl}?token=${N}" alt="${n}" />`,u=i?x("Категория",_n[i],"tag"):"",f={courseImage:c,name:r,badges:u,description:_(s),openButton:J(o)};return V(f)},Mn=e=>{const t=wt(e),r=mt(e),n=gt(e),s=ht(e);t&&nn(t),r&&Qr(r),n&&on(n),s&&tn(s),yt(e)},G=document.getElementById("filtered-courses"),Oe=async()=>{const e=await dt();if(!G||!e)return null;const t=wt(e),r=mt(e),n=gt(e),s=ht(e),o=[...t,...r,...s,...n],i=wn(o);G.innerHTML="",i.length===0&&(G.innerHTML='<p class="no-courses">Подходящих курсов не найдено</p>'),i.forEach(c=>{G.innerHTML+=Bn(c)}),yt(e)},Fn=()=>{if(!he)return null;Mn(he)},Dn=()=>{if(!he)return null;hn(),Oe()};Ct();Fn();Dn();
