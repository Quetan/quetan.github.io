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
