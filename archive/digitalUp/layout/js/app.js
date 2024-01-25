/*
 *
 *  Nodes
 *
 */
const header = document.getElementById("header");
const partners = document.querySelectorAll(".partners-item");
const partnersInfo = document.getElementById("partnersInfo");
const partnersCloseBtn = document.getElementById("partnersCloseBtn");
const partnersInfoWrapper = document.getElementById("partnersInfoWrapper");

/*
 *
 *  Numbers animation script
 *
 */
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
			this.requestAnimationFrame(step);
		}
	};
	this.requestAnimationFrame(step);
};

/*
 *
 *  Observers
 *
 */
const execAnim = () => {
	const objects = document.querySelectorAll(".av");
	if (!video) return;
	objects.forEach((e) => {
		animateValue(e);
	});
};
const target = document.querySelector("#numbers");
const numbersObserver = new IntersectionObserver(execAnim, {
	rootMargin: "300px",
	threshold: 1.0,
});
numbersObserver.observe(target);

const video = document.getElementById("vk-video");
video.addEventListener("click", (e) => {
	video.classList.remove("add-pseudo");
	video.innerHTML = `
	<iframe
		src="https://vk.com/video_ext.php?oid=-127455995&id=456239357&hash=667ec1973c498a55&hd=2"
		width="853"
		height="480"
		allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
		frameborder="0"
		title="Digital Up - школа развития цифровых компетенций"
	></iframe>
	`;
});

/*
 *
 *  Team slider
 *
 */
const getSlidesCount = () => {
	return Math.floor(this.innerWidth / 420);
};

const swiper = new Swiper(".team-swiper", {
	lazy: true,
	autoplay: {
		delay: 4000,
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
/*
 *
 *  Partners description window
 *
 */
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
this.addEventListener("scroll", (e) => {
	if (this.scrollY > 80) {
		header.classList.add("active");
	} else {
		header.classList.remove("active");
	}
});
