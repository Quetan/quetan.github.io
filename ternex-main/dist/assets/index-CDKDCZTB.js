import{_ as i}from"./index-335I42Ma.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-Bd4FxyTr.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new e(r)},a)}export{p as loadOpacityUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./OpacityUpdater-Bd4FxyTr.js","./index-335I42Ma.js","./index-Drndt5qP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
