$(function() {
  "use strict";

  var nav_offset_top = $("header").height() + 50;
  /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

  //* Navbar Fixed
  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area").addClass("navbar_fixed");
        } else {
          $(".header_area").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  ///////////////////////////////////////
  // var bg = [
  //   "url(./img/banner/hero-banner1.jpeg)",
  //   "url(./img/banner/hero-banner2.jpg)"
  // ];
  // var imgIndex = 0;
  // function changeBackground() {
  //   // $(document).ready(function() {
  //   $(".hero-banner")
  //     .fadeTo(100, 1) //can use any other effect to animate the transition
  //     .fadeTo(100, 1)
  //     .css("background-image", bg[imgIndex]); //changing the style
  //   // });
  //   imgIndex = (imgIndex + 1) % bg.length; //looping
  // }
  // setInterval(changeBackground(), 5000);
  ///////////////////////////////////////

  $(".img-gal").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
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
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});

//Active links
const clean_active_classes = items => {
  items.forEach(item => {
    if (item.classList.contains("active")) item.classList.remove("active");
  });
};

let nav_items = document.querySelectorAll(".nav-item");
nav_items.forEach(item => {
  item.addEventListener("click", () => {
    clean_active_classes(nav_items);
    item.classList.add("active");
  });
});

var cycle = 0;
var allBackgrounds = ["hero-banner6.jpg","hero-banner2.jpg", "hero-banner3.jpg", "hero-banner4.jpg", "hero-banner5.jpg"];
setInterval(function() {
	if (cycle < 5) {
		document.querySelector(".hero-banner").style.backgroundImage = "url('./img/banner/" + allBackgrounds[cycle] + "')";
		cycle += 1;
	} else { 
		cycle = 0;
	}
}, 2200);
