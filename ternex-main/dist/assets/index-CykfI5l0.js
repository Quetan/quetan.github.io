import{_ as r}from"./index-Cx-ElOrM.js";async function e(a,o=!0){const{PolygonDrawer:t}=await r(()=>import("./PolygonDrawer-BBZfmPXn.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await r(()=>import("./TriangleDrawer-DCuQ_2y7.js"),__vite__mapDeps([4,1,2,3]),import.meta.url);await a.addShape("triangle",new t,o)}async function l(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,l as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./PolygonDrawer-BBZfmPXn.js","./PolygonDrawerBase-DkVarEPy.js","./index-Cx-ElOrM.js","./index-CRU75hYO.css","./TriangleDrawer-DCuQ_2y7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
