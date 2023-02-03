const urlToRoutersData =
  "https://mocki.io/v1/4bd09d92-ed2e-4057-9fc6-214fa03b4e81";
// "https://ternex.ru/api/1/map";
const routerIconUrl = "./icons/router.png";
const routerOfflineIconUrl = "./icons/router_offline.png";
const backgroundImageUrl = "./schemeDefault.png";

const setText = (name) => {
  return {
    type: "text",
    version: "5.3.0",
    originX: "center",
    originY: "center",
    left: 0,
    top: -30,
    width: 101.25, // ??
    height: 22.6,  // ??
    fill: "#01a0e9",
    stroke: "#fff",
    strokeWidth: 10,
    strokeDashArray: null,
    strokeLineCap: "butt",
    strokeDashOffset: 0,
    strokeLineJoin: "miter",
    strokeUniform: false,
    strokeMiterLimit: 4,
    scaleX: 1,
    scaleY: 1,
    angle: 0,
    flipX: false,
    flipY: false,
    opacity: 1,
    shadow: null,
    visible: true,
    backgroundColor: "",
    fillRule: "nonzero",
    paintFirst: "stroke",
    globalCompositeOperation: "source-over",
    skewX: 0,
    skewY: 0,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: 20,
    text: name,  //  NAME
    underline: false,
    overline: false,
    linethrough: false,
    textAlign: "left",
    fontStyle: "normal",
    lineHeight: 1.1,
    textBackgroundColor: "",
    charSpacing: 0,
    styles: [],
    direction: "ltr",
    path: null,
    pathStartOffset: 0,
    pathSide: "left",
    pathAlign: "baseline"
  };
}
const setImage = (src) => {
  return {
    type: "image",
    version: "5.3.0",
    originX: "center",
    originY: "center",
    left: 0,
    top: 15,
    width: 64,
    height: 64,
    fill: "rgb(0,0,0)",
    stroke: null,
    strokeWidth: 0,
    strokeDashArray: null,
    strokeLineCap: "butt",
    strokeDashOffset: 0,
    strokeLineJoin: "miter",
    strokeUniform: false,
    strokeMiterLimit: 4,
    scaleX: 1,
    scaleY: 1,
    angle: 0,
    flipX: false,
    flipY: false,
    opacity: 1,
    shadow: null,
    visible: true,
    backgroundColor: "",
    fillRule: "nonzero",
    paintFirst: "fill",
    globalCompositeOperation: "source-over",
    skewX: 0,
    skewY: 0,
    cropX: 0,
    cropY: 0,
    src: src, // router.png or router_offline.png
    crossOrigin: null,
    filters: []
  };
}
const setGroup = (imageObj, textObj, x, y, id) => {
  return {
    type: "group",
    router_id: id,
    version: "5.3.0",
    originX: "center",
    originY: "center",
    left: x, //  X
    top: y,  //  Y
    width: 111.25, // ??
    height: 98.3,  // ??
    fill: "rgb(0,0,0)",
    stroke: null,
    strokeWidth: 0,
    strokeDashArray: null,
    strokeLineCap: "butt",
    strokeDashOffset: 0,
    strokeLineJoin: "miter",
    strokeUniform: false,
    strokeMiterLimit: 4,
    scaleX: 1,
    scaleY: 1,
    angle: 0,
    flipX: false,
    flipY: false,
    opacity: 1,
    shadow: null,
    visible: true,
    backgroundColor: "",
    fillRule: "nonzero",
    paintFirst: "fill",
    globalCompositeOperation: "source-over",
    skewX: 0,
    skewY: 0,
    objects: [imageObj, textObj]
  }
}

const compileJSON = (data) => {
  let objects = []
  data.routers.forEach(router => {
    objects = [...objects, 
      setGroup(
        setImage(router.is_active ? routerIconUrl : routerOfflineIconUrl),
        setText(router.name),
        router.x ? router.x : 350 + Math.random() * 400 - 200,
        router.y ? router.y : 350 + Math.random() * 400 - 200,
        router.router_id
      )
    ]
  })
  return {
    version: "5.3.0",
    objects: objects,
    backgroundImage: {
      type: "image",
      version: "5.3.0",
      originX: "left",
      originY: "top",
      left: 0,
      top: 0,
      width: 850,
      height: 756,
      fill: "rgb(0,0,0)",
      stroke: null,
      strokeWidth: 0,
      strokeDashArray: null,
      strokeLineCap: "butt",
      strokeDashOffset: 0,
      strokeLineJoin: "miter",
      strokeUniform: false,
      strokeMiterLimit: 4,
      scaleX: 0.82,
      scaleY: 0.93,
      angle: 0,
      flipX: false,
      flipY: false,
      opacity: 1,
      shadow: null,
      visible: true,
      backgroundColor: "",
      fillRule: "nonzero",
      paintFirst: "fill",
      globalCompositeOperation: "source-over",
      skewX: 0,
      skewY: 0,
      cropX: 0,
      cropY: 0,
      src: "http://127.0.0.1:5500/schemeDefault.png", //url to bg image
      crossOrigin: null,
      filters: []
    }
  }
}

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
  console.log(JSON.stringify(canvasJSON));
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
  let json = compileJSON(routersData);
  console.log(json)
  setMapJSON(json);
  // ADD ROUTER LIST FROM DB
  const routerList = addRoutersToLayout(routersData);

  routerList.forEach((router) => {
    router.addEventListener("click", (e) => {
      addRouterToCanvasHandler(router);
    });
  });
};
