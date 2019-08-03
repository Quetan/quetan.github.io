document.addEventListener("DOMContentLoaded", function() {

	// Hamburger animation
	$('.hamburger').on('click',function(){
		$(this).toggleClass('is-active');
		$('.menu-fixed').toggleClass('is-active');
		if ( $('.menu-fixed').attr('class') == "menu-fixed is-active" ){
			$('.backdrop').css({"left":"0", "opacity":"1"});
		}
		else{
			$('.backdrop').css({"left":"-100%", "opacity":"0"});
		}	
	});

//Smooth scroll animation
	$(".header-nav__item a").on("click", function() {	
		var get_id = $(this).attr("data-item");
		var target = $("#"+get_id).offset().top;	
		$("html, body").animate({scrollTop: target}, 800);
		});

		$(".header__fixed-nav-item a").on("click", function() {
			var get_id = $(this).attr("data-item");
			var target = $("#"+get_id).offset().top;
			$("html, body").animate({scrollTop: target}, 800);
			$('.hamburger').removeClass('is-active');
			$('.menu-fixed').removeClass('is-active');
			$('.backdrop').css({"left":"-100%", "opacity":"0"});
		});

//Active menu item

	$(window).scroll(function(){
		var $sections = $('section');
		$sections.each(function(i,el){
			var top  = $(el).offset().top-160;
			var bottom = top +$(el).height();
			var scroll = $(window).scrollTop();
			var id = $(el).attr('id');
			
			if(scroll > top && scroll < bottom){
				$('a.is-active').removeClass('is-active');
				$('a[href="#'+id+'"]').addClass('is-active');
			}
			else{
				$('a[href="#'+id+'"]').removeClass('is-active');
			};
			if(scroll < $(this).height()-160){
				$('a[href="#header"]').addClass('is-active');
			};
		});
	});
	
//Swipable menu


// Dark topline
	$(window).scroll(function(){
		if ($(this).scrollTop() > $(this).height()/2){
				$('.header__topline').addClass('header__dark');
		}
		else {
				$('.header__topline').removeClass('header__dark');
		};
});


});
