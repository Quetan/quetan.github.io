import{_ as e}from"./index-Cx-ElOrM.js";async function d(r,t=!0){await r.addParticleUpdater("color",async o=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-lmegPuJz.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new a(o)},t)}export{d as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ColorUpdater-lmegPuJz.js","./index-Cx-ElOrM.js","./index-CRU75hYO.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
