import{_ as o}from"./index-CCXUXtrU.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async r=>{const{OutOfCanvasUpdater:e}=await o(()=>import("./OutOfCanvasUpdater-0AdjRJv2.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new e(r)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./OutOfCanvasUpdater-0AdjRJv2.js","./index-CCXUXtrU.js","./index-CVDNF3WH.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
