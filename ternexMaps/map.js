const urlToRoutersData =
  "https://mocki.io/v1/08134514-b169-4768-ab90-a12bace1d844";
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
const rmRouterBtn = document.getElementById("removeRouterMarker");

/********************
 * 
 * HANDLERS
 * 
*********************/

const mapClickHandler = (STATE, e) => {
  if (!STATE.isRouterSelected) return STATE;
  if (isSelectedRouterInROUTERS(STATE)) {
    alert("Данный роутер уже установлен на карте!");
    return deselectRouters(STATE);
  }
  lat = e.latlng.lat;
  lon = e.latlng.lng;
  STATE = addRouterMarker(
    STATE,
    STATE.selectedRouter,
    Number(lat),
    Number(lon)
  );
  return STATE;
};
const removeMarkerHandler = (STATE) => {
  if (!STATE.selectedRouter) {
    alert("Сначала выберите роутер, который хотите удалить!");
    return STATE;
  }
  if (confirm("Вы уверены, что хотите удалить роутер с карты?")) {
    let deletedRouter = STATE.ROUTERS.find(
      (router) => Number(router.id) == Number(STATE.selectedRouter.id)
    );
    STATE.routerList.forEach((r) => {
      if (r.dataset.id == STATE.selectedRouter.id) r.classList.add("unset");
    });
    STATE.ROUTERS = STATE.ROUTERS.filter((router) => {
      return Number(router.id) != Number(STATE.selectedRouter.id);
    });
    map.removeLayer(deletedRouter.marker);
    return deselectRouters(STATE);
  }
};
const routerClickHandler = (STATE, router) => {
  STATE = deselectRouters(STATE);
  STATE = selectRouter(
    STATE,
    router.dataset.id,
    router.dataset.status,
    router.dataset.name
  );
  return STATE;
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
            <img src="${status ? routerIconUrl : routerOfflineIconUrl}">
            <div class="router-info">
              <h3 class="router-name">${name}</h3>
              <small class="router-status"><b>Статус:</b> <span class="${
                status ? "on" : "off"
              }">${status ? "Online" : "Offline"}</span></small>
              <small class="router-ip"><b>IPv6:</b> ${ipv6}</small>
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
  return STATE;
};
const addRouterMarkers = (STATE, routersData) => {
  routersData.routers.forEach((router) => {
    if (router.gps.lat == null || router.gps.long == null) return STATE;
    STATE = addRouterMarker(
      STATE,
      (router = {
        id: Number(router.router_id),
        name: String(router.name),
        status: isStatusTrue(router.is_active),
      }),
      Number(router.gps.lat),
      Number(router.gps.long)
    );
  });
  return STATE;
};

// DESELECT ALL ROUTERS
const deselectRouters = (STATE) => {
  STATE.selectedRouter = null;
  STATE.routerList.forEach((router) => {
    router.classList.remove("selected");
  });
  STATE.isRouterSelected = false;
  rmRouterBtn.disabled = true;
  return STATE;
};
// SELECT ROUTER
const selectRouter = (STATE, id, status, name) => {
  STATE = deselectRouters(STATE);
  const routerNode = document.querySelector(`[data-id*="${id}"]`);
  routerNode.classList.add("selected");
  STATE.isRouterSelected = true;
  STATE.selectedRouter = {
    id: Number(id),
    status: isStatusTrue(status),
    name: String(name),
  };
  if (!isSelectedRouterInROUTERS(STATE)) {
    rmRouterBtn.disabled = true;
  } else {
    rmRouterBtn.disabled = false;
    showRouterPopup(STATE);
  }
  return STATE;
};
const addRouterMarker = (STATE, router, lat, long) => {
  if (!lat && !long) return STATE;
  // defines if router set
  STATE.routerList.forEach((r) => {
    if (r.dataset.id == router.id) {
      r.classList.remove("unset");
    }
  });
  if (STATE.ROUTERS.length >= STATE.routersCount) {
    alert("Вы уже установили все роутеры!");
    return deselectRouters(STATE);
  }
  routerMarker = L.marker([lat, lon], {
    icon: router.status ? routerIcon : routerOfflineIcon,
  })
    .bindPopup(`${router.name} — ${router.status ? "В сети" : "Не в сети"}
    <button data-id="${router.id}" style="margin: 15px auto;display: block;">
      Удалить
    </button>
    `, {
      className: "router-popup",
    })
    .on("click", (e) => {
      STATE = selectRouter(STATE, router.id, router.status, router.name);
    })
    .addTo(map);
  routerMarker.getPopup().on("remove", () => {
    STATE = deselectRouters(STATE);
  });
  STATE = deselectRouters(STATE);
  STATE.ROUTERS = [
    ...STATE.ROUTERS,
    {
      id: Number(router.id),
      lat: Number(lat),
      long: Number(lon),
      name: String(router.name),
      is_active: isStatusTrue(router.status),
      marker: routerMarker,
    },
  ];
  return STATE;
};
const isSelectedRouterInROUTERS = (STATE) => {
  if (!STATE.ROUTERS) return STATE;
  return STATE.ROUTERS.find((router) => router.id == STATE.selectedRouter.id)
    ? true
    : false;
};
const isStatusTrue = (status) => {
  return status == "true" || status == true ? true : false;
};
const showRouterPopup = (STATE) => {
  if (!STATE.ROUTERS) return STATE;
  STATE.ROUTERS.find((r) => r.id == STATE.selectedRouter.id).marker.openPopup();
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

  STATE = addRoutersToLayout(STATE, routersData);
  STATE = addRouterMarkers(STATE, routersData);

  STATE.routerList.forEach((router) => {
    router.addEventListener("click", (e) => {
      STATE = routerClickHandler(STATE, router);
    });
  });
  // const popupRemoveButton = document.querySelector(".popupRemoveButton");
  rmRouterBtn.addEventListener("click", (e) => {
    STATE = removeMarkerHandler(STATE);
  });
  map.on("click", (e) => {
    STATE = mapClickHandler(STATE, e);
  });

  // STATE DEBUG
  const getState = document.getElementById("getState");
  getState.addEventListener("click", () => {
    console.log(STATE);
  });
};