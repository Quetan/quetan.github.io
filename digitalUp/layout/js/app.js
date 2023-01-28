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
  const windowWidth = window.innerWidth;
  const count = window.innerWidth <= 760 ? 1 : 3;
  return count;
};
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

const header = document.getElementById("header");
const headerLogo = document.getElementById("dulogo");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 600) {
    header.classList.add("active");
    headerLogo.src = "./images/logos/dulogo_w.png";
  } else {
    header.classList.remove("active");
    headerLogo.src = "./images/logos/dulogo.png";
  }
});
