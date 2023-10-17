const mobileNavigation = document.getElementById("mobileNavigation");
const closeMobileNavigationBtn = document.getElementById(
	"closeMobileNavigation"
);
const openMobileNavigationBtn = document.getElementById("openMobileNavigation");

function showMobileNavigation() {
	mobileNavigation.style.opacity = 1;
	mobileNavigation.style.transform = "translateX(0)";
}
function hideMobileNavigation() {
	mobileNavigation.style.opacity = 0;
	mobileNavigation.style.transform = "translateX(120%)";
}

openMobileNavigationBtn.addEventListener("click", showMobileNavigation);

const navLinks = document.querySelectorAll("#mobileNavigation a");
let controls = [...navLinks, closeMobileNavigation];

controls.forEach((c) => {
	c.addEventListener("click", hideMobileNavigation);
});

const counter = (duration = 2000) => {
	const numbers = document.querySelectorAll("[data-counter]");
	numbers.forEach((number) => {
		let from = Number(number.dataset.counterFrom);
		const to = Number(number.dataset.counterTo);
		const step = to > from ? 1 : -1;
		const interval = duration / to;

		if (from === to) {
			number.textContent = from;
			return;
		}

		const counter = setInterval(() => {
			from += step;
			number.innerHTML = `${from}<sup>+</sup>`;
			if (from === to) {
				clearInterval(counter);
			}
		}, interval);
	});
};

window.addEventListener("DOMContentLoaded", () => {
	const options = {
		rootMargin: "0px 0px 75px 0px",
		threshold: 1,
	};
	const numbersObserver = new IntersectionObserver(counter, options);
	numbersObserver.observe(document.querySelector("#numbers"));
});
