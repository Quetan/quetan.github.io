$(document).ready(function() {
  "use strict";

  //********* page loader js

  setTimeout(function() {
    $(".loader_bg").fadeToggle();
  }, 1500);

  //********** menu background color change while scroll

  $(window).on("scroll", function() {
    var menu_area = $(".nav-area");
    var offset = $("#about").offset().top - 150;
    if ($(window).scrollTop() > offset) {
      menu_area.addClass("sticky_navigation");
    } else {
      menu_area.removeClass("sticky_navigation");
    }
  });

  //********** lazy loading map
  var loaded = false;
  $(document).on("scroll", function() {
    var offset = $(".map-area").offset().top - 500;
    if ($(window).scrollTop() > offset && !loaded) {
      loaded = true;
      $("#mapid").show();
      //создаем карту с центром в Барнауле
      let mymap = L.map("mapid", {
        scrollWheelZoom: false
      }).setView([53.34795462, 83.77565922], 13);
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
      ).addTo(mymap); //Добавляем дефолтные слои на карту
      //(function() {
      //     let coordinatesData = document.getElementById("coordinatesData").innerHTML;
      //     let myCoordinatesData = JSON.parse(coordinatesData);
      //     let obj = {
      //         lat: 0,
      //         lng: 0
      //     };
      //     for (let i = 0; i < myCoordinatesData.length; i++) {
      //         let str = myCoordinatesData[i].coordinates.split(';');
      //         obj.lat = str[0].replace(/(\w+):/, "");
      //         obj.lng = str[1].replace(/(\w+):/, "");
      //         marker = new L.Marker([obj.lat, obj.lng], {
      //             draggable: false
      //         });
      //         circle = new L.circle([obj.lat, obj.lng], {
      //             radius: 400
      //         });
      //         mymap.addLayer(marker);
      //         // mymap.addLayer(circle);
      //     }

      //     mymap.on('click', function() {
      //         if (mymap.scrollWheelZoom.enabled()) {
      //             mymap.scrollWheelZoom.disable();
      //         } else {
      //             mymap.scrollWheelZoom.enable();
      //         }
      //     });
      // })();
    }
  });

  //********** menu hides after click (mobile menu)

  $(document).on("click", ".navbar-collapse.in", function(e) {
    if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
      $(this).collapse("hide");
    }
  });

  //*********** scrollspy js

  $("body").scrollspy({
    target: ".navbar-collapse",
    offset: 195
  });

  //************ smooth scroll js

  $("a.smooth-menu,a.custom-btn,a.banner-btn,a.mouse-scroll").on(
    "click",
    function(e) {
      e.preventDefault();
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top - 50
          },
          1000
        );
    }
  );

  //*********** Animated headline js

  $(".animate-scale").animatedHeadline({
    animationType: "clip"
  });

  //*** wow js

  new WOW().init();

  //*** Services carousel

  $("#services-carousel").owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 800,
    paginationSpeed: 800,
    smartSpeed: 500,
    autoplay: true,
    singleItem: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      680: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  //*****Counter up js
  $(".counter").counterUp({
    delay: 50,
    time: 2000
  });
});
