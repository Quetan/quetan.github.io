new WOW().init();

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    loop: true,
    margin: 25,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1300: {
        items: 3,
      },
    },
  });
});

VanillaTilt.init(document.querySelector(".about-content"), {
  reverse: true,
  max: 5,
  speed: 100,
  reset: true,
  perspective: 1500, 
});

VanillaTilt.init(document.querySelector(".product"), {
  reverse: true,
  max: 5,
  speed: 200,
  reset: true,
  scale: 1.05, 
});

let buyButton = document.querySelector(".open-modal");
let product = document.querySelector(".product");
buyButton.addEventListener("click", e => {
  product.vanillaTilt.destroy();
  product.style.transformStyle = "unset";
  product.style.willChange = "initial";
  product.style.transform = "unset";
});

