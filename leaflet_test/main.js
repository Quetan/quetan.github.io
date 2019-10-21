document.addEventListener("DOMContentLoaded", () => {
  let map = L.map("router_position").setView([55.751244, 37.618423], 13);
  L.tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken:
        "pk.eyJ1Ijoic3Bpcml0MDRlayIsImEiOiJjanZwNmtreTcxZHkyNGF2bmpocGlvbzh2In0.Lu2brpXppB3r8HrVUOdt8g"
    }
  ).addTo(map);
  map.locate({ setView: true, maxZoom: 16 });
  function onLocationFound(e) {
    var radius = e.accuracy;

    L.circle(e.latlng, radius)
      .addTo(map)
      .bindPopup("Вы находитесь в радиусе " + radius + " метров от этой точки.")
      .openPopup();
  }

  map.on("locationfound", onLocationFound);

  function onLocationError(e) {
    alert(e.message);
  }

  map.on("locationerror", onLocationError);
});
