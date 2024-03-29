import{_ as i}from"./index-335I42Ma.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BSIMT_JM.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater-BSIMT_JM.js","./ValueWithRandom-BgnM2GoZ.js","./index-335I42Ma.js","./index-Drndt5qP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
