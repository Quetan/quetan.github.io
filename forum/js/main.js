$(function() {
  "use strict";

  var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();



  $('.img-gal').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    center: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
  });


  //smooth scrolling
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#track1"]')
  .not('[href="#track2"]')
  .not('[href="#track3"]')
  .not('[href="#track4"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
});

//WOW animations
new WOW({offset:20}).init();

//Active links
const clean_active_classes = items => {
  items.forEach(item => {
    if (item.classList.contains("active")) item.classList.remove("active");
  })
};

let nav_items = document.querySelectorAll(".nav-item");
  nav_items.forEach(item => {
    item.addEventListener("click", () => {
      clean_active_classes(nav_items);
      item.classList.add("active");
  });
});


