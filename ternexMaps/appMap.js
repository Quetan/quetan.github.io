/********************
 *
 *  GET CURRENT LOCATION
 *
 *
 ********************/

let isLocationDetected = false;
let currentLat = 53.36;
let currentLong = 83.73;

const locationOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
  currentLat = crd.latitude;
  currentLong = crd.longitude;
  isLocationDetected = true;
}

function error(err) {
  isLocationDetected = false;
}

navigator.geolocation.getCurrentPosition(success, error, locationOptions);

/********************
 *
 *  MAP INITIALIZATION
 *
 *
 ********************/
const map = L.map("map", {
  center: [53.36, 83.73], // Barnaul lat and long
  zoom: 11,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

//Remove leaflet link
document.querySelector(".leaflet-control-attribution.leaflet-control").remove();

/********************
 *
 *  SELECT ROUTER
 *
 ********************/

let isRouterSelected = false;
/*****
 *
 * selectedRouter - object with selected router.
 * Might be Null.
 *  @param {Number} id - id of the router
 *  @param {Boolean} status - status of the router
 *  @param {String} name - name of the router
 *
 *****/
let selectedRouter = null;
/*****
 * ROUTERS - array of routers on the map
 * @param {Number} id - id of the router.
 * @param {Number} lat - latitude.
 * @param {Number} long - longitude.
 * @param {String} name - name of the router.
 * @param {Boolean} is_active - router status.
 * @param {Marker} marker - marker of the router.
 *
 *****/
let ROUTERS = [];
const rmRouterBtn = document.getElementById("removeRouterMarker");

// DESELECT ALL ROUTERS
const deselectRouters = () => {
  selectedRouter = null;
  routerList.forEach((router) => {
    router.classList.remove("selected");
  });
  isRouterSelected = false;
};
// SELECT ROUTER
const selectRouter = (id, status, name) => {
  deselectRouters();
  const routerNode = document.querySelector(`[data-id*="${id}"]`);
  routerNode.classList.add("selected");
  isRouterSelected = true;
  selectedRouter = {
    id: Number(id),
    status: isStatusTrue(status),
    name: String(name),
  };
};

//CHECK IF SELECTED ROUTER IN GLOBAL ROUTERS
const isSelectedRouterInROUTERS = (id) => {
  return ROUTERS.find((router) => router.id == id) ? true : false;
};

// CHECK IF STATUS IS TRUE
const isStatusTrue = (status) => {
  return status == "true" || status == true ? true : false;
};

//SHOW ROUTER MARKER POPUP
const showRouterPopup = (id) => {
  ROUTERS.find((r) => r.id == id).marker.openPopup();
};

// ROUTER CLICK HANDLER
routerList.forEach((router) => {
  router.addEventListener("click", (e) => {
    deselectRouters();
    selectRouter(router.dataset.id, router.dataset.status, router.dataset.name);
    // DISABLE OR ENABLE DELETE BUTTON AND SHOW POPUP
    if (!isSelectedRouterInROUTERS(selectedRouter.id)) {
      rmRouterBtn.disabled = true;
    } else {
      rmRouterBtn.disabled = false;
      showRouterPopup(selectedRouter.id);
    }
  });
});

/********************
 *
 *  MAP MARKERS
 *
 *
 ********************/

//ADD CUSTOM MARKERS V
const routerIcon = L.icon({
  iconUrl: routerIconUrl,
  iconSize: [48, 48],
});
const routerOfflineIcon = L.icon({
  iconUrl: routerOfflineIconUrl,
  iconSize: [48, 48],
});

/*****
 *
 * ADD ROUTER AND MARKER
 * @param {Number} id - id
 * @param {Number} lat - latitude
 * @param {Number} lon - longitude
 * @param {String} name - name of the router
 * @param {Boolean} status - is router active
 * -------------
 * 1. Check if routers are placed
 * 2. Defines markers icon
 * 3. Deselect all routers
 * 4. Add router to global ROUTERS and @return ROUTERS array
 */
const addRouterMarker = (id, lat, lon, name, status) => {
  // defines if router set
  routerList.forEach((r) => {
    if (r.dataset.id == id) {
      r.classList.remove("unset");
    }
  });
  // 1
  if (ROUTERS.length >= routersCount) {
    alert("Вы уже установили все роутеры!");
    deselectRouters();
    return;
  }
  // 2
  const i = status ? routerIcon : routerOfflineIcon;
  routerMarker = L.marker([lat, lon], { icon: i })
    .bindPopup(`${name} — ${status ? "В сети" : "Не в сети"}`, {
      className: "router-popup",
    })
    .on("click", (e) => {
      selectRouter(id, status, name);
    })
    .addTo(map);
  routerMarker.getPopup().on("remove", () => {
    deselectRouters();
  });
  // 3
  deselectRouters();
  // 4
  return (ROUTERS = [
    ...ROUTERS,
    {
      id: Number(id),
      lat: Number(lat),
      long: Number(lon),
      name: String(name),
      is_active: isStatusTrue(status),
      marker: routerMarker,
    },
  ]);
};
// ADD ROUTERS FROM DATABASE
routerParsed.routers.forEach((router) => {
  addRouterMarker(
    Number(router.router_info.id),
    Number(router.map_info.location.lat),
    Number(router.map_info.location.long),
    String(router.router_info.name),
    isStatusTrue(router.router_stat.is_active)
  );
});

// MAP CLICK HANDLER
map.on("click", function (e) {
  if (!isRouterSelected) return;
  if (isSelectedRouterInROUTERS(selectedRouter.id)) {
    alert("Данный роутер уже установлен на карте!");
    deselectRouters();
    return;
  }
  lat = e.latlng.lat;
  lon = e.latlng.lng;
  addRouterMarker(
    Number(selectedRouter.id),
    Number(lat),
    Number(lon),
    String(selectedRouter.name),
    selectedRouter.status
  );
});
// DELETE SELECTED ROUTER
const rmRouterMarker = () => {
  if (!selectedRouter) {
    alert("Сначала выберите роутер, который хотите удалить!");
    return;
  }
  if (confirm("Вы уверены, что хотите удалить роутер с карты?")) {
    let deletedRouter = ROUTERS.find(
      (router) => Number(router.id) == Number(selectedRouter.id)
    );
    // defines if router unset
    routerList.forEach((r) => {
      if (r.dataset.id == selectedRouter.id) r.classList.add("unset");
    });
    ROUTERS = ROUTERS.filter((router) => {
      return Number(router.id) != Number(selectedRouter.id);
    });
    map.removeLayer(deletedRouter.marker);
    deselectRouters();
  }
};
