/* Circles app created by Lydia Douglas 2018 */

/*** declare global variables **/
var $currentId = $("#welcome_section");

//calling init function
$(document).ready(function () {

    AOS.init({
        duration: 800,
        easing: 'ease-in-out-back'
    });

    initVue();
    initSlider();
    animateWelcome() 
    

    // //this is the animation for welcome text and cirle/ball switch over
    // $(".t-circle-left").fadeIn(2500).delay(1000).slideUp(800, function () {
    //     $(".t-ball-left").delay(800).fadeIn(2500);
    // });
    // $(".circle-div").fadeIn(1500).delay(1000).animate({
    //     "width": "1%",
    //     "opacity": "0.1",
    // }, 3500, function () {
    //     $(".circle-div").hide();
    //     $(".jball").fadeIn(800).addClass('animated bounceInDown');
    //     setTimeout(function() {
    //         $(".b-slide").removeClass("invisible").addClass('animated rollIn').animate({height:"+=90px"}, 600).animate({height:"-=90px"}, 600);
    //     }, 1000);
    //     setTimeout(function(){$(".b-slide").trigger("click");}, 2000);
    //     setTimeout(function(){
    //         $("#welcome-section").addClass('animated fadeOutRight');
    //     }, 4000);

    // });



    //  $( "#ball-span" ).slideDown( 600 ).delay( 2000 ).fadeIn( 400 );
});

//initialising document
function initVue() {
    //data to be used in the view for the ball color call
    var data = {
        circleRadius: 800,
        radiusNumber: 400,
        sizeNumber: 400,
        satNumber: 50,
        hueNumber: 300,
        lightNumber: 50,
       
    };
    //new vue 
    new Vue({
        el: '#app',
        data: data
    });

    // $("#colour-section").hide();
    // $("#pictroll").hide();
}

function initSlider() {
    //creating left slid out area fr buttons
    var $marginLefty = $('#slidemarginleft div.inner');
    $marginLefty.css({
        marginLeft: $marginLefty.outerWidth() + 'px',
        display: 'block'
    });

    //slide out or il the bar of buttons animate
    $('.b-slide').click(function () {
        $marginLefty.animate({
            marginLeft: parseInt($marginLefty.css('marginLeft'), 10) == 0 ?
                $marginLefty.outerWidth() : 0
        });
    });

    $("#b-small").click(function () {
        $(this).toggleClass("selected-action");
        // $(".ball").addClass("shrink");
    });
    $("#b-hole").click(function () {
        $(this).toggleClass("selected-action");
        //to be implemented at later stage
    });
    $("#b-tall").click(function () {
        $(this).toggleClass("selected-action");
        $("#tall-slider").slideUp(600).delay(1600).slideDown(600);
       //to be implemented at later stage
    });
    $("#b-colour").click(function () {
        $(this).toggleClass("selected-action");
        $("#controls-panel2").toggle(800);
    });
    $("#b-black").click(function () {
        $(this).toggleClass("selected-action");
        $("body").toggleClass("black-all");
    });
    $("#b-troll").click(function () {
        $(this).toggleClass("selected-action");
        $("#pictroll").toggleClass("invisible");
        $(".ball").hover(
            function () {
                $('#pictroll').fadeIn(600);
            }, function () {
                $('#pictroll').fadeOut(200);
            }
        );
    });
    $("#b-hall").click(function () {
        $(this).toggleClass("selected-action");
     //to be implemented at later stage
    });
    $("#b-repeat").click(function () {
    //    $(".b-slide").animate({ scrollTop: 0 }, "slow");
        window.location.reload();
    });
}

function animateWelcome() {
    $(".circle-div").hide(0);
    $(".ball").hide(0);
    $("#controls-panel2").hide(0);

    //this is the animation for welcome text and cirle/ball switch over
    $(".t-circle-left").fadeIn(1500).delay(1000).fadeOut(800,function () {
        $(".t-ball-left").delay(800).fadeIn(1500);
    });
    $(".circle-div").fadeIn(1500).delay(6500).animate({
        "width": "0",
        "opacity": "0.0",
    }, 1500, function () {
        $(".circle-div").slideUp(800);

        $(".ball").fadeIn(600).addClass('animated bounceInDown');
        setTimeout(function () {
            $(".b-slide").removeClass("invisible").addClass('animated rollIn').animate({ height: "+=90px" }, 600).animate({ height: "-=90px" }, 600);
        }, 1000);
        setTimeout(function () { $(".b-slide").trigger("click"); }, 2000);
        // setTimeout(function () {
        //     $("#welcome-section").addClass('animated fadeOutRight');
        // }, 4000);

    });
}

