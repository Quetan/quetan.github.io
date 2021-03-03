"use strict";

// DROPDOWN FUNCTIONALITY

let dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    if (item.classList.contains("closed")) {
      item.classList.remove("closed");
    }
  });
  item.addEventListener("mouseleave", (e) => {
    if (!item.classList.contains("closed")) {
      item.classList.add("closed");
    }
  });
}); 

// PARALLAX FUNCTIONALITY

function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

window.addEventListener("scroll", throttle(goodParallax, 14));

function goodParallax() {
  let scrolled = window.pageYOffset;
  let wrappers = document.querySelectorAll(".parallax-wrapper");
  wrappers.forEach((wrapper) => {
    let offset = Math.abs(wrapper.offsetTop - window.innerHeight / 2);
    let objects = wrapper.querySelectorAll(".parallax-object");
    objects.forEach((object) => {
      let speed = object.dataset.speed;
      let coords = (scrolled - offset) * speed + "px";
      object.style.transform = "translateY(-" + coords + ")";
    });
  });
}


// OWL CAROUSEL

$(".slider-container_slide").owlCarousel({
  loop: true,
  video: true,
  margin: 10,
  nav: true,
  items: 1,
  nav: false,
  dots: true,
  // videoWidth: 300,
  // videoHeight: 300,
  lazyLoad: true,
  center: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
});

$(".announces-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    992: {
      items: 2,
    },
  },
});

// YOUTUBE VIDEO PLACEHOLDER

(function () {
  getVideos();
})();

function getVideos() {
  var v = document.getElementsByClassName("youtube-player");
  for (var n = 0; n < v.length; n++) {
    var p = document.createElement("div");
    var id = v[n].getAttribute("data-id");

    var placeholder = v[n].hasAttribute("data-thumbnail")
      ? v[n].getAttribute("data-thumbnail")
      : "";

    if (placeholder.length) p.innerHTML = createCustomThumbail(placeholder);
    else p.innerHTML = createThumbail(id);

    v[n].appendChild(p);
    p.addEventListener("click", function () {
      var parent = this.parentNode;
      createIframe(parent, parent.getAttribute("data-id"));
    });
  }
}

/**
 * Create custom thumbnail from data-attribute provided url
 * @param {string} url
 * @return {string} The HTML containing the <img> tag
 */

function createCustomThumbail(url) {
  return (
    '<img class="youtube-thumbnail" src="' +
    url +
    '" alt="Youtube Preview" /><div class="youtube-play-btn"></div>'
  );
}

/**
 * Get Youtube default max resolution thumbnail
 * @param {string} id The Youtube video id
 * @return {string} The HTML containing the <img> tag
 */
function createThumbail(id) {
  return (
    '<img class="youtube-thumbnail" src="//i.ytimg.com/vi_webp/' +
    id +
    '/maxresdefault.webp" alt="Youtube Preview"><div class="youtube-play-btn"></div>'
  );
}

function createIframe(v, id) {
  var iframe = document.createElement("iframe");
  // console.log(v);
  iframe.setAttribute(
    "src",
    "//www.youtube.com/embed/" +
      id +
      "?autoplay=1&color=white&autohide=2&modestbranding=1&border=0&wmode=opaque&enablejsapi=1&showinfo=0&rel=0"
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("class", "youtube-iframe");
  iframe.setAttribute("loading", "lazy");
  v.firstChild.replaceWith(iframe);
}

$("#video-modal").on("hidden.bs.modal", function (e) {
  $(this).find("iframe").remove();
});

$("#video-modal").on("show.bs.modal", function (e) {
  getVideos();
});