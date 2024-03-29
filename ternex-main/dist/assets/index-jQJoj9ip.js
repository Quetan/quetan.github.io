import{_ as e}from"./index-D-ADX0D5.js";async function d(r,t=!0){await r.addParticleUpdater("color",async o=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-Be_LrfIs.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new a(o)},t)}export{d as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ColorUpdater-Be_LrfIs.js","./index-D-ADX0D5.js","./index-D-8CBvRv.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
