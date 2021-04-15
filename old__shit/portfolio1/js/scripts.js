document.addEventListener("DOMContentLoaded", function() {

//Lazy load
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });

//Preloader function
    $(window).on('load', function(){
        $('.preloader').delay(1000).fadeOut('slow');
    });


//MMENU animations
    $('#header__menu').mmenu({
        extensions: ['widescreen', 'fx-menu-fade','fx-listitems-fade' , 'position-right', 'theme-white', 'border-none', 'pagedim-black', 'multiline'],
        navbar: {
            title: '<span class="nav-menu__text color-accent">Меню</span>'
        }
    });



//Main menu scroll animation
    $(".nav__item a").on("click", function() {

        var get_id = $(this).attr("data-item");
        var target = $("#"+get_id).offset().top;

        $("html, body").animate({scrollTop: target}, 800);

    });




//Hamburger animations
    var api = $('#header__menu').data('mmenu');

    api.bind('open:start', function() {
        $('.hamburger').addClass('is-active');
    });

    api.bind('close:before', function() {
        $('.hamburger').removeClass('is-active');
    });


//Scroll function to the top
    $(window).scroll(function(){
        if ($(this).scrollTop() > $(this).height()){
            $('.scroll-top').addClass('active');
        }
        else {
            $('.scroll-top').removeClass('active');
        }
    });
//Scroll to the top on click
    $('.scroll-top').click(function(){
        $('html, body').stop().animate({scrollTop:0}, 'slow', 'swing');
    });

//Questions animations
    document.getElementById('answer_btn1').onclick = function() {
    document.getElementById('answer_ptr1').classList.toggle('fa-rotate-90');
    };

    document.getElementById('answer_btn2').onclick = function() {
    document.getElementById('answer_ptr2').classList.toggle('fa-rotate-90');
    };

    document.getElementById('answer_btn3').onclick = function() {
    document.getElementById('answer_ptr3').classList.toggle('fa-rotate-90');
    };

    document.getElementById('answer_btn4').onclick = function() {
    document.getElementById('answer_ptr4').classList.toggle('fa-rotate-90');
    };

    

});