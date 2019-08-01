document.addEventListener("DOMContentLoaded", function() {
//MMENU animations
    $('#header__menu').mmenu({
        extensions: ['widescreen', 'effect-menu-slide', 'position-bottom', 'theme-white', 'border-none', 'pagedim-black'],
        navbar: {
            title: '<span class="nav-menu__text color-accent">Меню</span>'
        }
    });
//Preloader function
    $(window).on('load', function(){
        $('.preloader').delay(1000).fadeOut('slow');
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