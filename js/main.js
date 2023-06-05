$(document).ready(function () {

    var top_show = 500;
    var delay = 1000;

    $(window).scroll(function () {
        if ($(this).scrollTop() > top_show) $('.bxr-button-up').fadeIn();
        else $('.bxr-button-up').fadeOut();
    });

    $('.bxr-button-up').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });

    console.log('1111');

    alert('11');
    $('.bxr-slider').slick({
        slidesToShow: 1,
        dots: true,
        fade: true,
        speed: 1500,
        autoplaySpeed: 3000,
        autoplay: true,
        nextArrow: '<button type="button" class="slick-next bxr-bg-hover-dark-flat"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev bxr-bg-hover-dark-flat"><i class="fa fa-angle-left"></i></button>',
    });

    $('.bxr-slider').css("visibility", "visible");

});