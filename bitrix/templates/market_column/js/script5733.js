(function (window) {

    jQuery.easing['jswing'] = jQuery.easing['swing'];

    jQuery.extend( jQuery.easing,
        {
           easeOutBounce: function (x, t, b, c, d) {
                if ((t/=d) < (1/2.75)) {
                    return c*(7.5625*t*t) + b;
                } else if (t < (2/2.75)) {
                    return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                } else if (t < (2.5/2.75)) {
                    return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                } else {
                    return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                }
            },
            easeOutElastic: function (x, t, b, c, d) {
                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
            },
            easeOutExpo: function (x, t, b, c, d) {
                return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
            }
        });


    window.BXReady = {
        showAjaxShadow: function(element, idArea, localeShadow){

            if (localeShadow == true){
                $(element).addClass('ajax-shadow');
                $(element).addClass('ajax-shadow-r');
            }
            else{
                if ($('div').is('#'+idArea)){

                }
                else
                {
                    $('<div id="'+idArea+'" class="ajax-shadow"></div>').appendTo('body');
                }

                $('#'+idArea).show();
                $('#'+idArea).width($(element).width());
                $('#'+idArea).height($(element).outerHeight());
                if ($(element).length && $(element).offset()) {
                    $('#' + idArea).css('top', $(element).offset().top + 'px');
                    $('#' + idArea).css('left', $(element).offset().left + 'px');
                }
            }

        },

        closeAjaxShadow: function(idArea, localShadow){
            if (localShadow == true){
                $(idArea).removeClass('ajax-shadow-r');
                $(idArea).removeClass('ajax-shadow');
            }
            else{
                $('#'+idArea).hide();
            }
        },

        scrollTo: function(targetElement){

            $("html, body").animate({
                scrollTop: $(targetElement).offset().top-20 + "px"
            }, {
                duration: 500
            });
        },

        autosizeVertical: function(){
            maxHeight = 0;
            $('div.bxr-v-autosize').each(function(){
                if ($(this).height()> maxHeight){
                    maxHeight = $(this).height();
                };
            });
            $('div.bxr-v-autosize').each(function(){

                    delta = Math.round((maxHeight - $(this).height())/2);
                    $(this).css({'padding-top': delta+'px', 'padding-bottom': delta+'px'});
            });
        },

        setHeadPadding: function () {
            //paddingTop = ($(".bxr-full-width.bxr-top-headline.affix").height() > 0) ? $(".bxr-full-width.bxr-top-headline.affix").height() + 25 : 64;
			paddingTop = 40;
            $('.bxr-full-width.bxr-container-headline.head_v1').css("padding-top", paddingTop + "px");
            if (window.scrollY > 0)
                $(".bxr-full-width.bxr-top-headline").addClass("affix-fixed");
        },

        removeAffixHead: function () {
            // var tWirth = $(document).width();
            // if(tWirth==0)
            //     tWirth = screen.width;
            //
            // console.log(tWirth);
            //
            // if (tWirth < 992) {
            //     $(".bxr-full-width.bxr-top-headline").removeClass("affix-fixed");
            //     $(".bxr-full-width.bxr-top-headline").removeClass("fixed");
            //     $(".bxr-full-width.bxr-top-headline").data("spy", "");
            // } else {
            //     $(".bxr-full-width.bxr-top-headline").addClass("affix-fixed");
            //     $(".bxr-full-width.bxr-top-headline").data("spy", "affix");
            // }
        }
    };

    window.BXReady.Market = {
        loader: [],

        setPriceCents: function(){

            $('.bxr-format-price').each(function(){
                price = $(this).html();

                newPrice = price.replace(/(\.\d\d)/g, '<sup>$1</sup>');
                newPrice = newPrice.replace(/(\.)/g, '');

                $(this).html(newPrice);
            });
        },

        bestsellersAjaxUrl: '/ajax/bestsellers.php',
        markersAjaxUrl: '/ajax/markers.php'
    };

    $(document).on('click', '.search-btn', function() {
        var search = $('#searchline');
        if(search.is(":visible"))
            search.fadeOut();
        else
            search.fadeIn();
    });

    $(document).on('click', '.bxr-mobile-login-icon', function() {
        $('.bxr-mobile-login-area').fadeOut(200, function(){
            $('.bxr-mobile-phone-area').fadeIn(200);
        });
    });

    $(document).on('click', '.bxr-mobile-phone-icon', function() {
        if (typeof openAuthorizePopup === 'function') {
            openAuthorizePopup();
        } else {
            $('.bxr-mobile-phone-area').fadeOut(200, function(){
                $('.bxr-mobile-login-area').fadeIn(200);
            });
        }
    });

    $(window).on ('resize', function() {
        if ($(window).width() > 960) {
            $('.bxr-mobile-phone-area').fadeOut(200, function(){
                $('.bxr-mobile-login-area').fadeIn(200);
            });
	} else {
            $('.bxr-mobile-phone-area').fadeIn(200, function(){
                $('.bxr-mobile-login-area').fadeOut(200);
            });
	}
    });

    $(document).on('click', '.mobile-footer-menu-tumbl', function() {
        $(this).next().toggle();
    });

    $(document).on('click', '.delivery-item-more', function() {
        if ($(this).prev('.delivery-item-text').css('display') == 'none'){
            $(this).prev('.delivery-item-text').slideDown();
            $(this).html('<span class="fa fa-angle-up"></span> Hide');
        } else {
            $(this).prev('.delivery-item-text').slideUp();
            $(this).html('<span class="fa fa-angle-down"></span> More');
        }
    });

    window.onload = function()
    {
        if (typeof window.BXReady.Market.loader != 'object')
            window.BXReady.Market.loader = [];
        for ( var i in window.BXReady.Market.loader )
        {
            if ( typeof( window.BXReady.Market.loader[i] ) == 'function' ) window.BXReady.Market.loader[i]();
        }

        BXReady.setHeadPadding();
    };

    if (typeof window.BXReady.Market.loader != 'object')
            window.BXReady.Market.loader = [];
    window.BXReady.Market.loader.push(BXReady.autosizeVertical);
    window.BXReady.Market.loader.push(BXReady.setHeadPadding);
    window.BXReady.Market.loader.push(BXReady.removeAffixHead);


    $( window ).resize(function() {
        BXReady.autosizeVertical();
        BXReady.setHeadPadding();
        BXReady.removeAffixHead();
    });

    // $(document).ready(function () {
    //     BXReady.setHeadPadding();
    // });

})(window);


$(document).ready(function () {
   $('.fancyimg').fancybox();
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
