const header = document.getElementById("header");
const partners = document.querySelectorAll(".partners-item");
const partnersInfo = document.getElementById("partnersInfo");
const partnersCloseBtn = document.getElementById("partnersCloseBtn");
const partnersInfoWrapper = document.getElementById("partnersInfoWrapper");

const animateValue = (obj) => {
  if (!obj) return;
  const start = 0,
    end = Number(obj.dataset.value),
    duration = Number(obj.dataset.duration);
  if (!end) return;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};
const execAnim = () => {
  const objects = document.querySelectorAll(".av");
  if (objects) {
    objects.forEach((e) => {
      animateValue(e);
    });
  }
};
let observer = new IntersectionObserver(execAnim, {
  rootMargin: "0px",
  threshold: 1.0,
});
const target = document.querySelector("#numbers");
observer.observe(target);
// Team swiper
const getSlidesCount = () => {
  return Math.floor(window.innerWidth / 420);
};
const swiper = new Swiper(".team-swiper", {
  autoplay: {
    delay: 4000,
  },
  slidesPerView: getSlidesCount(),
  grid: {
    rows: 2
  },
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});
// Partners
partners.forEach((p) => {
  if (!p.dataset.description) return;
  p.addEventListener("click", () => {
    partnersInfoWrapper.classList.add("visible");
    partnersInfo.innerHTML = p.dataset.description;
  });
  partnersCloseBtn.addEventListener("click", () => {
    partnersInfoWrapper.classList.remove("visible");
    partnersInfo.innerHTML = "";
  });
});
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 80) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

window.addEventListener('DOMContentLoaded', () => {
  particlesJS.load('particles-js', 'js/particles.json');
})
