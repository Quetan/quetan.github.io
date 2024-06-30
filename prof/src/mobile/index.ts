const MOBILE_NAV_MENU: HTMLDivElement | null = document.querySelector('#nav-mobile-menu');
const MOBILE_NAV_BUTTON: HTMLButtonElement | null = document.querySelector('#nav-mobile-button');
const MOBILE_NAV_BUTTON_CLOSE: HTMLDivElement | null = document.querySelector(
	'#nav-mobile-button-close'
);

const openMobileMenu = () => {
	if (!MOBILE_NAV_MENU) return null;

	MOBILE_NAV_MENU.classList.remove('close');
	MOBILE_NAV_MENU.classList.add('open');
};

const closeMobileMenu = () => {
	if (!MOBILE_NAV_MENU) return null;
	MOBILE_NAV_MENU.classList.remove('open');
	MOBILE_NAV_MENU.classList.add('close');
};

const mobileMenu = () => {
	MOBILE_NAV_BUTTON?.addEventListener('click', openMobileMenu);
	MOBILE_NAV_BUTTON_CLOSE?.addEventListener('click', closeMobileMenu);

	MOBILE_NAV_MENU?.childNodes.forEach(item => item.addEventListener('click', closeMobileMenu));
};

export { mobileMenu };
