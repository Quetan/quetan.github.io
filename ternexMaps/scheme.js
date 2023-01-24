const urlToRoutersData =
  "https://mocki.io/v1/08134514-b169-4768-ab90-a12bace1d844";
// "https://ternex.ru/api/1/map";
const routerIconUrl = "./icons/router.png";
const routerOfflineIconUrl = "./icons/router_offline.png";
const backgroundImageUrl = "./schemeDefault.png";

/********************
 *
 * SETUP CANVAS
 *
 ********************/

const initCanvas = (id) => {
  return new fabric.Canvas(id, {
    width: 700,
    height: 700,
  });
};
const canvas = initCanvas("map");

const setBackground = (url, canvas) => {
  fabric.Image.fromURL(url, (img) => {
    canvas.setBackgroundImage(img, (e) => {
      let img = canvas.backgroundImage;
      img.originX = "left";
      img.originY = "top";
      img.scaleX = canvas.getWidth() / img.width;
      img.scaleY = canvas.getHeight() / img.height;
      canvas.renderAll();
    });
    canvas.renderAll();
  });
};
setBackground(backgroundImageUrl, canvas);

/********************
 *
 * NODES
 *
 *********************/

const routersWrapper = document.querySelector(".routersWrapper");
const backgroundImageInput = document.getElementById(
  "schemeBackgroundImageFile"
);

/********************
 *
 * HANDLERS
 *
 *********************/

const addRouterToCanvasHandler = (router) => {
  addRouter(
    canvas.width / 2,
    canvas.height / 2,
    router.dataset.name,
    router.dataset.status === "true" ? true : false
  );
  canvas.renderAll();
};

const reader = new FileReader();

backgroundImageInput.addEventListener("change", () => {
  const backgroundImage = backgroundImageInput.files[0];
  reader.readAsDataURL(backgroundImage);
});
reader.addEventListener("load", () => {
  setBackground(reader.result, canvas);
});

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
const addRoutersToLayout = (routersData) => {
  routersData.routers.forEach((r) => {
    routersWrapper.innerHTML += addRouterLayout(
      r.router_id, // ID
      r.name, // NAME
      r.ipv6, // IPv6
      r.is_active // STATUS
    );
  });
  return document.querySelectorAll(".router");
};
const removeRouter = () => {
  let activeRouter = canvas.getActiveObjects();
  canvas.discardActiveObject();
  canvas.remove(...activeRouter);
};
const addRouter = (x, y, name, status) => {
  const icon = status ? routerIconUrl : routerOfflineIconUrl;
  const routerName = new fabric.Text(name, {
    fontSize: 20,
    fontWeight: "bold",
    left: x,
    top: y - 50,
    originX: "center",
    originY: "center",
    fill: "#01a0e9",
    stroke: "#fff",
    strokeWidth: 10,
    paintFirst: "stroke",
  });
  const routerImage = new fabric.Image.fromURL(icon, (img) => {
    img.set({
      width: 64,
      height: 64,
      left: x,
      top: y,
      originX: "center",
      originY: "center",
    });
    let routerGroup = new fabric.Group([routerName, img], {
      left: x,
      top: y,
      angle: 0,
      originX: "center",
      originY: "center",
    });
    routerGroup.on("mousedblclick", () => {
      removeRouter();
    });
    canvas.add(routerGroup);
  });
  canvas.renderAll();
};
let getMapJSON = () => {
  const canvasJSON = canvas.toJSON();
  console.log(canvasJSON);
};

let setMapJSON = (json) => {
  if (!json) return;
  canvas.clear();
  canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
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
  // SET UP MAP FROM DB
  setMapJSON(routersData.scheme);
  // ADD ROUTER LIST FROM DB
  const routerList = addRoutersToLayout(routersData);

  routerList.forEach((router) => {
    router.addEventListener("click", (e) => {
      addRouterToCanvasHandler(router);
    });
  });
};
