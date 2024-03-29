import{_ as i}from"./index-D-ADX0D5.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DIvdCDzh.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater-DIvdCDzh.js","./ValueWithRandom-IxfUQycz.js","./index-D-ADX0D5.js","./index-D-8CBvRv.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
