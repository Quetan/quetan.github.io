import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
import WOW from "wow.js";
require("fslightbox");
document.addEventListener("DOMContentLoaded", () => {
  // Swiper
  Swiper.use([Pagination, Navigation, Autoplay]);
  var headerSwiper = new Swiper(".about-swiper-container", {
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    navigation: {
      nextEl: ".about-swiper-button-next",
      prevEl: ".about-swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  var speakersSwiper = new Swiper(".speakers-swiper-container", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    loop: false,
    slideToClickedSlide: true,
    slideClass: "speakers-swiper-slide",
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
      },
      787: {
        slidesPerView: 2,
        slidesPerColumn: 2,
      },
      1100: {
        slidesPerView: 3,
        slidesPerColumn: 2,
      },
    },
    pagination: {
      el: ".speakers-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".speakers-swiper-button-next",
      prevEl: ".speakers-swiper-button-prev",
    },
  });
  // Smooth scroll
  (function () {
    const links = document.querySelectorAll(".smooth-link");
    for (const link of links) link.addEventListener("click", clickHandler);
    function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;
      document.getElementById("menu__toggle").checked = false;
      scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  })();
  // WOW JS
  new WOW().init();
});
