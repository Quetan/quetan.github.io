import{_ as o}from"./index-D-ADX0D5.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async r=>{const{OutOfCanvasUpdater:e}=await o(()=>import("./OutOfCanvasUpdater-DWv27tWK.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new e(r)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./OutOfCanvasUpdater-DWv27tWK.js","./index-D-ADX0D5.js","./index-D-8CBvRv.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
