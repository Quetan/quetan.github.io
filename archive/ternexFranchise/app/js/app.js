import WOW from 'wow.js';

document.addEventListener('DOMContentLoaded', () => {
	// WOW JS
	new WOW().init();
	// Smooth scroll
	(function () {
		const links = document.querySelectorAll(".smooth-link");	
		for (const link of links) link.addEventListener("click", clickHandler);
		function clickHandler(e) {
		  e.preventDefault();
		  const href = this.getAttribute("href");
		  if (href === "#") return;
		  const offsetTop = document.querySelector(href).offsetTop;
		  scroll({
			top: offsetTop,
			behavior: "smooth",
		  });
		}
	  })();
})
