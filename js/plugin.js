
$(function(){

    'use strict'

    // Adjust Header Height

    var myHeader = $('.header');

    myHeader.height($(window).height());

    $(window).resize(function () {

        myHeader.height($(window).height());

        $('.bxslider').each(function(){

            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    
        });

    });
    
    // Links add active Classe

    $('.links li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    // Adjust Bxslider list item center

    $('.bxslider').each(function(){

        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

    });

    // Trigger the Bx Slider 

    $('.bxslider').bxSlider({
        pager: false
    });

    // Smooth Scroll To Div

    $('.links li a').click(function(){

        $('html, body').animate({

            scrollTop: $('#'+$(this).data('value')).offset().top

        }, 1000);
        //console.log($(this).data('value'));
    });

    // Our Auto Slider Code 
    (function autoSlider(){

        $(".slider .active").each(function(){

            if(!$(this).is(':last-child')){

                $(this).delay(3000).fadeOut(1000, function(){

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoSlider();

                });

            }

            else {

                $(this).delay(3000).fadeOut(1000, function(){

                    $(this).removeClass('active');

                    //$('.slider div:first-child').addClass('active').fadeIn();
                    $('.slider div').eq(0).addClass('active').fadeIn();

                    autoSlider();

                })

            }

        });

    }());

    // Use Shuffle 
        var mixer = mixitup('#container');

        // Adjust Shuffle Links
        $('.shuffle li').click(function(){

            $(this).addClass('active').siblings().removeClass('active');

        });

        // Trigger Nice Scroll
        $('html').niceScroll();

});