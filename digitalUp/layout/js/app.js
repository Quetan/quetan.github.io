function animateValue(obj) {
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
}
function execAnim() {
  const objects = document.querySelectorAll(".av");
  if (objects) {
    objects.forEach((e) => {
      animateValue(e);
    });
  }
}
var observer = new IntersectionObserver(execAnim, {
  rootMargin: "0px",
  threshold: 1.0,
});
var target = document.querySelector("#numbers");
observer.observe(target);

// Team swiper
const swiper = new Swiper(".team-swiper", {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: getSlidesCount(),
  grid: {
    rows: 2,
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
function getSlidesCount() {
  const windowWidth = window.innerWidth;
  const count = window.innerWidth <= 760 ? 1 : 3;
  return count;
}

// Partners
const partners = document.querySelectorAll(".partners-item");
const partnersInfo = document.getElementById("partnersInfo");
const partnersCloseBtn = document.getElementById("partnersCloseBtn");
const partnersInfoWrapper = document.getElementById("partnersInfoWrapper");

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