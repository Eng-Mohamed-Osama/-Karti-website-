$(document).ready(function() {

    'use strick';

    // Nav Bar Scroll To sections Function

    $("#header ul li ").on("click", function(e) {

        e.preventDefault();

        $("html, body").animate({

        scrollTop: $('#' + $(this).data('scroll')).offset().top

        }, 700);

    });

    // Nav Bar Active Links

    $("#header ul li ").on("click", function() {

        $(this).addClass("act").siblings().removeClass("act");

    });

    // Portfolio Active Links

    $("#Portfolio ul li ").on("click", function() {

        $(this).addClass("active").siblings().removeClass("active");

    });

    // link portfolio preventing its defualt Function

    $("#Portfolio ul li ").on("click", function(e) {

         e.preventDefault();
    //     console.log($('.' + $(this).data('type')));

    //     $('.' + $(this).data('type')).fadeIn(500).siblings().fadeOut(200);

     });

    // Logo Scroll To the Top Function

    $(".inner-logo").on("click", function() {

        $("html,body").animate({

        scrollTop: 0

        }, 1200);

        $("#header ul li.main").addClass("act").siblings().removeClass("act");

    });
});