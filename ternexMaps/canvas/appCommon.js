//
//ПРИ РАБОТЕ С СЕРВЕРОМ БУДЕТ ПРИМЕРНО ТАК
//
// let data;
// fetch(urlToRoutersData)
// .then(response => {
//   if (response.ok) {
//    data = response.......
//    Тут запишем данные
//
//   }
// });

// SIMULATE DATA
const data = {
  routers: [
    {
      router_info: {
        id: 0,
        name: "Ленина, 61",
        ipv6: "some ipv6",
      },
      map_info: {
        location: {
          lat: 53.34733887708937, // lat - широта
          long: 83.77525442195024, // long - долгота
        },
        scheme: {
          // json
        },
      },
      router_stat: {
        is_active: true,
        speed: 100,
        last_seen: "12/12/2022",
      },
    },
    {
      router_info: {
        id: 1,
        name: "Чехова, 20",
        ipv6: "some ipv6",
      },
      map_info: {
        location: {
          lat: 53.330187, // lat - широта
          long: 83.799755, // long - долгота
        },
        scheme: {
          // json
        },
      },
      router_stat: {
        is_active: true,
        speed: 80,
        last_seen: "22/11/2022",
      },
    },
    {
      router_info: {
        id: 2,
        name: "Северный власихинский проезд, 110",
        ipv6: "some ipv6",
      },
      map_info: {
        location: {
          lat: 53.339366, // lat - широта
          long: 83.64511, // long - долгота
        },
        scheme: {
          // json
        },
      },
      router_stat: {
        is_active: false,
        speed: 0,
        last_seen: "25/10/2022",
      },
    },
  ],
};
const routerData = JSON.stringify(data);
const routerParsed = JSON.parse(routerData);
let routersCount = routerParsed.routers.length;

const routerIconUrl = "./icons/router.png";
const routerOfflineIconUrl = "./icons/router_offline.png";

// ADD ROUTERS TO HTML LIST
const routersWrapper = document.querySelector(".routersWrapper");

// ROUTER TEMPLATE HTML
const addRouterLayout = (id, name, ipv6, speed, status) => {
  if (!name) return;
  return `
          <div class="router" role="button" data-id="${id}" data-status="${status}" data-name="${name}">
            <img src="${status ? routerIconUrl : routerOfflineIconUrl}">
            <div class="router-info">
              <h2 class="router-name">${name}</h2>
              <small class="router-status"><b>Статус:</b> <span class="${status ? "on": "off"}">${status ? "Online": "Offline"}</span></small>
              <small class="router-ip"><b>IPv6:</b> ${ipv6}</small>
              <small class="router-speed"><b>Сигнал:</b> ${speed}</small>
            </div>
          </div>
          `;
};
// DINAMICALLY ADD ROUTERS TO LAYOUT
routerParsed.routers.forEach((r) => {
  routersWrapper.innerHTML += addRouterLayout(
    r.router_info.id, // ID
    r.router_info.name, // NAME
    r.router_info.ipv6, // IPv6
    r.router_stat.speed, // SPEED
    r.router_stat.is_active // STATUS
  );
});

const routerList = document.querySelectorAll(".router");
