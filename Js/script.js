$(document).ready(function() {

    'use strick';

    $("#header ul li ").on("click", function(e) {

        e.preventDefault();

        $("html, body").animate({

        scrollTop: $('#' + $(this).data('scroll')).offset().top

        }, 700);

    });

    $("#header ul li ").on("click", function() {

        $(this).addClass("act").siblings().removeClass("act");

    });

    $("#Portfolio ul li ").on("click", function() {

        $(this).addClass("active").siblings().removeClass("active");

    });
     $("#Portfolio ul li ").on("click", function(e) {

         e.preventDefault();
    //     console.log($('.' + $(this).data('type')));

    //     $('.' + $(this).data('type')).fadeIn(500).siblings().fadeOut(200);

        

     });

    $(".inner-logo").on("click", function() {

        $("html,body").animate({

        scrollTop: 0

        }, 1200);

    });
});