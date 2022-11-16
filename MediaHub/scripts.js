const swiperClass = '.swiper';
const swiperAttr = {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

if (typeof Swiper !== 'undefined') {
  const swiper = new Swiper(swiperClass, swiperAttr);
}
