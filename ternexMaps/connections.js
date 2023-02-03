const routerIconUrl = "./icons/router.png";
const routerOfflineIconUrl = "./icons/router_offline.png";

let STATE = {
  routers: [],
  lines: [],
};
const initCanvas = (id) => {
  return new fabric.Canvas(id, {
    width: 700,
    height: 700,
    backgroundColor: "rgb(40, 40, 43)",
    preserveObjectStacking: true,
  });
};
const canvas = initCanvas("map");

const addRouterToCanvasHandler = (router) => {
  addRouter(
    canvas.width / 2,
    canvas.height / 2,
    router.dataset.name,
    router.dataset.status === "true" ? true : false
  );
  canvas.renderAll();
};
const makeLine = (fromObj, toObj) => {
  const coords = [
    fromObj.getCenterPoint().x,
    fromObj.getCenterPoint().y + 35,
    toObj.getCenterPoint().x,
    toObj.getCenterPoint().y + 35,
  ];
  return new fabric.Line(coords, {
    fill: "rgba(255,255,255,0.75)",
    stroke: "rgba(255,255,255,0.75)",
    strokeWidth: 3,
    selectable: false,
  });
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
    strokeWidth: 4,
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
    router = new fabric.Group([routerName, img], {
      left: x,
      top: y,
      angle: 0,
      originX: "center",
      originY: "center",
      id: 1, ////
      lineIn: [],
    });
    STATE.routers = [...STATE.routers, router];
    if (STATE.routers.length !== 0) {
      STATE.routers.forEach((r) => {
        const line = makeLine(router, r);
        canvas.add(line);
        line.sendToBack();
        STATE.lines = [...STATE.lines, line];
      });
    }
    router.on("mousedblclick", () => {
      removeRouter();
    });
    canvas.add(router);
  });
  canvas.renderAll();
};

canvas.on("object:moving", (e) => {
  let lines = e.target.lineIn;
  lines.forEach((l) => {
    const lineCoords = e.target.getCenterPoint();
    l.set({
      x1: lineCoords.x,
      y1: lineCoords.y,
    });
  });

  canvas.renderAll();
});

addRouter(100, 50, "Archer", true);
addRouter(250, 450, "Archer mesh", false);
addRouter(25, 450, "Archer mesh", false);
addRouter(555, 650, "Archer mesh", false);
