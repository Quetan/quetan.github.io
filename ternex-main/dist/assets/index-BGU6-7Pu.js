import{_ as i}from"./index-Cx-ElOrM.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-CAJXqo6e.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater-CAJXqo6e.js","./ValueWithRandom-Ms-nGfkz.js","./index-Cx-ElOrM.js","./index-CRU75hYO.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
