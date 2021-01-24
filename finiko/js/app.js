/* Theme Name: Lizehen  - Responsive Business & Agency Template
   Author: Themesdesign
   Version: 1.0.0
   File Description: Main JS file of the template
*/

// STICKY
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $(".sticky").addClass("nav-sticky");
  } else {
    $(".sticky").removeClass("nav-sticky");
  }
});

// SmoothLink
$(".smoothlink").on("click", function (event) {
  var $anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr("href")).offset().top - 0,
      },
      1500,
      "easeInOutExpo"
    );
  event.preventDefault();
});

// $(".testi-carousel").owlCarousel({
//   autoPlay: 3000,
//   stopOnHover: true,
//   navigation: false,
//   paginationSpeed: 1000,
//   goToFirstSpeed: 2000,
//   singleItem: true,
//   autoHeight: true,
// });

//  VIDEO
// $(".video-play-icon").magnificPopup({
//   disableOn: 700,
//   type: "iframe",
//   mainClass: "mfp-fade",
//   removalDelay: 160,
//   preloader: false,
//   fixedContentPos: false,
// });

// Magnific Popup
// $(".mfp-image").magnificPopup({
//   type: "image",
//   closeOnContentClick: true,
//   mainClass: "mfp-fade",
//   gallery: {
//     enabled: true,
//     navigateByImgClick: true,
//     preload: [0, 1],
//   },
// });

// typed
$(".element").each(function () {
  var $this = $(this);
  $this.typed({
    strings: $this.attr("data-elements").split(","),
    typeSpeed: 100, // typing speed
    backDelay: 3000, // pause before backspacing
  });
});

// WOW

new WOW().init();

// Tilts init

VanillaTilt.init(document.querySelector(".image-tilt"), {
  max: 5,
  speed: 100
});

VanillaTilt.init(document.querySelectorAll(".task-tilt"), {
  max: 5,
  speed: 50,
  gyroscope: true
});

//player width
  
	var $allVideos = $("iframe[src^='https://www.youtube.com']"),
      $fluidEl = $("#products-desc");
	$allVideos.each(function() {
		$(this)
			.data('aspectRatio', this.height / this.width)
			.removeAttr('height')
			.removeAttr('width');
	});
	$(window).resize(function() {
		var newWidth = $fluidEl.width();
		$allVideos.each(function() {
			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));
		});
  }).resize();
  

// video
$(".player").mb_YTPlayer();

("use strict");
function r(f) {
  /in/.test(document.readyState) ? setTimeout("r(" + f + ")", 9) : f();
}
r(function () {
  if (!document.getElementsByClassName) {
    // IE8 support
    var getElementsByClassName = function (node, classname) {
      var a = [];
      var re = new RegExp("(^| )" + classname + "( |$)");
      var els = node.getElementsByTagName("*");
      for (var i = 0, j = els.length; i < j; i++)
        if (re.test(els[i].className)) a.push(els[i]);
      return a;
    };
    var videos = getElementsByClassName(document.body, "youtube");
  } else {
    var videos = document.getElementsByClassName("youtube");
  }

  var nb_videos = videos.length;
  for (var i = 0; i < nb_videos; i++) {
    // Based on the YouTube ID, we can easily find the thumbnail image
    videos[i].style.backgroundImage =
      "url(http://i.ytimg.com/vi/" + videos[i].id + "/sddefault.jpg)";
    videos[i].style.backgroundSize = "contain";

    // Overlay the Play icon to make it look like a video player
    var play = document.createElement("div");
    play.setAttribute("class", "play");
    videos[i].appendChild(play);

    videos[i].onclick = function () {
      // Create an iFrame with autoplay set to true
      var iframe = document.createElement("iframe");
      var iframe_url =
        "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
      if (this.getAttribute("data-params"))
        iframe_url += "&" + this.getAttribute("data-params");
      iframe.setAttribute("src", iframe_url);
      iframe.setAttribute("frameborder", "0");

      // The height and width of the iFrame should be the same as parent
      iframe.style.width = this.style.width;
      iframe.style.height = this.style.height;

      // Replace the YouTube thumbnail with YouTube Player
      this.parentNode.replaceChild(iframe, this);
    };
  }
});
