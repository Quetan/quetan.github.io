const urlToRoutersData =
  "https://mocki.io/v1/e7c43185-e886-4c44-a9a1-91af41dfd8f0";
// "https://ternex.ru/api/1/map";
const routerIconUrl = "./icons/router.png";
const routerOfflineIconUrl = "./icons/router_offline.png";

/********************
 *
 * GET CURRENT LOCATION
 *
 *********************/

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
 ********************/
const map = L.map("map", {
  center: [currentLat, currentLong], // Barnaul lat and long
  zoom: 11,
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);
const routerIcon = L.icon({
  iconUrl: routerIconUrl,
  iconSize: [48, 48],
});
const routerOfflineIcon = L.icon({
  iconUrl: routerOfflineIconUrl,
  iconSize: [48, 48],
});
document.querySelector(".leaflet-control-attribution.leaflet-control").remove();

/********************
 *
 * NODES
 *
 *********************/

const routersWrapper = document.querySelector(".routersWrapper");
const saveMapBtn = document.getElementById("saveMap");
let removeButtons;

/********************
 *
 * HANDLERS
 *
 *********************/

const mapClickHandler = (STATE, e) => {
  if (!STATE.isRouterSelected) return;
  if (isSelectedRouterInROUTERS(STATE)) {
    alert("Данный роутер уже установлен на карте!");
    return;
  }
  lat = e.latlng.lat;
  lon = e.latlng.lng;
  addRouterMarker(STATE, STATE.selectedRouter, Number(lat), Number(lon));
};
const removeMarkerHandler = (STATE, id) => {
  if (confirm("Вы уверены, что хотите удалить роутер с карты?")) {
    let deletedRouter = STATE.ROUTERS.find(
      (router) => Number(router.router_id) == Number(id)
    );
    STATE.routerList.forEach((r) => {
      if (r.dataset.id == id) r.classList.add("unset");
    });
    STATE.ROUTERS = STATE.ROUTERS.filter((router) => {
      return Number(router.router_id) != Number(id);
    });
    map.removeLayer(deletedRouter.marker);
  }
};
const routerClickHandler = (STATE, router) => {
  deselectRouters(STATE);
  selectRouter(
    STATE,
    router.dataset.id,
    router.dataset.status,
    router.dataset.name
  );
};
const saveClickHandler = (ROUTERS) => {
  // FIX MUTATION AND SELECT ROUTER (RM BTN)
  ROUTERS.forEach((r) => {
    delete r.marker;
    delete r.name;
    delete r.is_active;
  });
  ROUTERS = Object.assign({}, { gps: ROUTERS });
  fetch("/api/1/map", {
    method: "POST",
    body: JSON.stringify(ROUTERS),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Данные успешно сохранены!");
      location.reload();
    })
    .catch((error) => {
      alert("Произошла ошибка! ", error);
      location.reload();
    });
};

/********************
 *
 * METHODS
 *
 *********************/

const addRouterLayout = (id, name, ipv6, status) => {
  if (!name) return;
  return `
          <div class="router unset" tabindex="0" role="button" data-id="${id}" data-status="${status}" data-name="${name}">
            <button class="router-remove" disabled="true" data-remove="${id}">
            <svg fill="none" stroke="#e74a3b" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
            </svg>
            </button>
            <img src="${status ? routerIconUrl : routerOfflineIconUrl}">
            <div class="router-info">
              <h3 class="router-name">${name}</h3>
              <small class="router-status"><b>Статус:</b> <span class="${
                status ? "on" : "off"
              }">${status ? "Online" : "Offline"}</span></small>
              <small class="router-ip"><b>IPv6:</b> <span>${ipv6}</span></small>
            </div>
          </div>
          `;
};

const addRoutersToLayout = (STATE, routersData) => {
  routersData.routers.forEach((r) => {
    routersWrapper.innerHTML += addRouterLayout(
      r.router_id, // ID
      r.name, // NAME
      r.ipv6, // IPv6
      r.is_active // STATUS
    );
  });
  STATE.routerList = document.querySelectorAll(".router");
};
const addRouterMarkers = (STATE, routersData) => {
  routersData.routers.forEach((router) => {
    if (router.gps.lat == null || router.gps.long == null) return;
    (lat = router.gps.lat), (lon = router.gps.long);
    addRouterMarker(
      STATE,
      {
        id: Number(router.router_id),
        name: String(router.name),
        status: isStatusTrue(router.is_active),
      },
      lat,
      lon
    );
  });
};

// DESELECT ALL ROUTERS
const deselectRouters = (STATE) => {
  STATE.selectedRouter = null;
  STATE.routerList.forEach((router) => {
    router.classList.remove("selected");
  });
  STATE.isRouterSelected = false;
};
// SELECT ROUTER
const selectRouter = (STATE, id, status, name) => {
  deselectRouters(STATE);
  const routerNode = document.querySelector(`[data-id*="${id}"]`);
  routerNode.classList.add("selected");
  STATE.isRouterSelected = true;
  STATE.selectedRouter = {
    id: Number(id),
    status: isStatusTrue(status),
    name: String(name),
  };
};
const addRouterMarker = (STATE, router, lat, long) => {
  if (!lat && !long) return;
  if (STATE.ROUTERS.length >= STATE.routersCount) {
    alert("Вы уже установили все роутеры!");
    return;
  }
  // defines if router set
  STATE.routerList.forEach((r) => {
    if (r.dataset.id == router.id) {
      r.classList.remove("unset");
    }
  });
  routerMarker = L.marker([lat, long], {
    icon: router.status ? routerIcon : routerOfflineIcon,
  })
    .bindPopup(`${router.name} — ${router.status ? "В сети" : "Не в сети"}`, {
      className: "router-popup",
    })
    .on("click", (e) => {
      selectRouter(STATE, router.id, router.status, router.name);
    })
    .addTo(map);
  routerMarker.getPopup().on("remove", () => {
    deselectRouters(STATE);
  });
  deselectRouters(STATE);
  STATE.ROUTERS = [
    ...STATE.ROUTERS,
    {
      router_id: Number(router.id),
      lat: Number(lat),
      long: Number(lon),
      name: String(router.name),
      is_active: isStatusTrue(router.status),
      marker: routerMarker,
    },
  ];
  const rmBtn = document.querySelector(`[data-remove="${router.id}"`);
  rmBtn.disabled = false;
};
const isSelectedRouterInROUTERS = (STATE) => {
  if (!STATE.ROUTERS) return;
  return STATE.ROUTERS.find(
    (router) => router.router_id == STATE.selectedRouter.id
  )
    ? true
    : false;
};
const isStatusTrue = (status) => {
  return status == "true" || status == true ? true : false;
};
const showRouterPopup = (STATE) => {
  if (!STATE.ROUTERS) return;
  STATE.ROUTERS.find(
    (r) => r.router_id == STATE.selectedRouter.id
  ).marker.openPopup();
};

/********************
 *
 * GET ROUTER DATA AND INIT
 *
 *********************/

fetch(urlToRoutersData)
  .then((res) => res.json())
  .then((data) => {
    init(data);
  });
const init = (routersData) => {
  /**
   * @constructor STATE
   * @param {Boolean} isRouterSelected
   * @param {Object} selectedRouter
   * @param {Number} routersCount
   * @param {Array<NodeList>} routerList
   * @param {Array<Object>} ROUTERS
   *
   **/
  let STATE = {
    ROUTERS: [],
    selectedRouter: null,
    isRouterSelected: false,
    routersCount: routersData.routers.length,
    routerList: [],
  };

  addRoutersToLayout(STATE, routersData);
  addRouterMarkers(STATE, routersData);

  STATE.routerList.forEach((router) => {
    router.addEventListener("click", (e) => {
      routerClickHandler(STATE, router);
    });
  });

  saveMapBtn.addEventListener("click", (e) => {
    saveClickHandler(STATE.ROUTERS);
  });

  removeButtons = document.querySelectorAll("[data-remove]");
  removeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btn.disabled = "true";
      removeMarkerHandler(STATE, btn.dataset.remove);
    });
  });
  map.on("click", (e) => {
    mapClickHandler(STATE, e);
  });

  // STATE DEBUG
  const getState = document.getElementById("getState");
  getState.addEventListener("click", () => {
    console.log(STATE);
  });
};
