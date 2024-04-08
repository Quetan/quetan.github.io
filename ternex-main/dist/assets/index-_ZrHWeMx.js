import{_ as e}from"./index-Cx-ElOrM.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await e(()=>import("./Attractor-B9qOHk73.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Attractor-B9qOHk73.js","./ParticlesInteractorBase-vfDeBun3.js","./index-Cx-ElOrM.js","./index-CRU75hYO.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
