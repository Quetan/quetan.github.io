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
  margin: 10,
  nav: true,
  items: 1,
  singleItem: true,
  nav: false,
  dots: true,
  lazyLoad: true,
  center: true,
  autoplay: true,
  autoplayTimeout: 5000,
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

// countdown script
function countDown() {
  var distance =
    new Date("Jun 18, 2021 00:00:00").getTime() - new Date().getTime();
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let daysWrapper = document.getElementById("countdown-days");
  daysWrapper = daysWrapper.innerHTML = days + " дн";
  let hoursWrapper = document.getElementById("countdown-hours");
  hoursWrapper = hoursWrapper.innerHTML = hours + " ч";
  let minutesWrapper = document.getElementById("countdown-minutes");
  minutesWrapper = minutesWrapper.innerHTML = minutes + " мин";
  let secsWrapper = document.getElementById("countdown-secs");
  secsWrapper = secsWrapper.innerHTML = seconds + " сек";
  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".countdown-items").innerHTML =
      "Приемная комиссия ужа стартовала!";
  }
}
let timer = setInterval(countDown, 1000);

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

//tabs

function openTool(evt, toolName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(toolName).style.display = "flex";
  evt.currentTarget.className += " active";
  document.location.href = "#" + toolName;
}
