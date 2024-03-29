import{_ as r}from"./index-335I42Ma.js";class o{constructor(){this.distance=200,this.duration=.4,this.easing="ease-out-quad",this.factor=1,this.maxSpeed=50,this.speed=1}load(e){e&&(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed),e.speed!==void 0&&(this.speed=e.speed))}}async function d(t,e=!0){await t.addInteractor("externalAttract",async i=>{const{Attractor:n}=await r(()=>import("./Attractor-B3ZMhCrg.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new n(t,i)},e)}export{o as Attract,d as loadExternalAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Attractor-B3ZMhCrg.js","./Ranges-CCIT-5zv.js","./index-335I42Ma.js","./index-Drndt5qP.css","./ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
