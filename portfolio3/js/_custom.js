document.addEventListener("DOMContentLoaded", function() {

	// Hamburger animation
	$('.hamburger').on('click',function(){
		$(this).toggleClass('is-active');
		$('.menu-fixed').toggleClass('is-active');
	});


});
