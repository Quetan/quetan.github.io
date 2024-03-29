import{_ as o}from"./index-335I42Ma.js";async function d(t,a=!0){await t.addParticleUpdater("rotate",async r=>{const{RotateUpdater:e}=await o(()=>import("./RotateUpdater-B_eI5iY7.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new e(r)},a)}export{d as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./RotateUpdater-B_eI5iY7.js","./index-335I42Ma.js","./index-Drndt5qP.css","./ValueWithRandom-BgnM2GoZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
