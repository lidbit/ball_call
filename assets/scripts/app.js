/* Circles app created by Lydia Douglas 2018 */

/*** declare global variables **/


//calling init function
$(document).ready(function () {
    init();
});

//initialising document
function init() {
    //data to be used in the view for the ball color call
    var data = {
        circleRadius: 400,
        radiusNumber: 400,
        sizeNumber: 400,
        satNumber: 50,
        hueNumber: 300,
        lightNumber: 50
    };
    //new vue 
    new Vue({
        el: '#app',
        data: data
    });

    //hide sections
    $(".action-call-text").hide();
    $("#colour-section").hide();
    
// animate the welcome section
    var welcome=$("#welcome-text");
    //hide all welcome text prior to animation;
    var textbits = welcome.children("span");
    textbits.hide();
    $("#dots-span").hide();
    $("#ball-span").css('opacity','0');
    //fade in part one 
     $("#lets-span").fadeIn(3000);
    $("#jball-wrapper").fadeIn(3000);
    $("#circle-span").fadeIn(2000, function(){
        $("#circle-span").animate({opacity:0.25 }, 2000, function(){ 
            $("#ball-span").fadeIn('fast', function(){
               $("#circle-span").fadeOut(1000, function(){
                    
                    $("#ball-span").animate({opacity:1, fontSize: "var(--font-size)", "left": "+=50px", },2000, function(){
                        $("#jball").addClass("animated shake"); //toggle visibility and bounce
                        $("#jball").addClass("ball");
                        $("#dots-span").fadeIn('slow');
                        $("#jball").addClass('bounce');
                    });
               });
           });
        });
    });
    
    $("#small-text").fadeIn(3500);
    
   // $("#dots-span").show();
    //.animate( {left: "+=50"}, {height: "toggle"});
   

    // $("#story1").fadeOut("300", function () {
    //     $("#story2").fadeIn("300");
    // });


    //   step: function( now, fx ) {
    //     var data = fx.elem.id + " " + fx.prop + ": " + now;
    //     $( "body" ).append( "<div>" + data + "</div>" );
    //  }


      // $( "#welcome-text span:nth-child(1)" ).animate({ "left": "+=50px" }, "slow" );
  

    //fadeIn('slow'); 
    // var $grid=$('#id'),
    //   $lists = $grid.find('li');

    //   $lists.css('background', '#333');
    //   $lists.animate({width:'+=100'}, 2000);
    //   $lists.fadeOut();
    //   $lists.fadeIn('slow');

    // $( "#" ).click(function() {
    //     $( ".block" ).animate({ "left": "+=50px" }, "slow" );
    //   });

}

function showText(num, time) {
    $("#welcome-text span:nth-child(" + num + ")").fadeIn(time);
}
function hideText(num, time) {
    $("#welcome-text span:nth-child(" + num + ")").fadeout(time);
}


// $(document).scrollTop()
// $(window).height()
// $(document).height()



// // this is a scroll event handler - will be called whenever the user
// // scrolls the document
// $(document).scroll(function () {

//     // use .scrollTop() to calculate the percent of the way through
//     // the document the user has scrolled
//     // the formula is:
//     // percent = amount scrolled / (height of the document - height of the window)
//     // this will give us a number between 0 and 1 (eg: 0.5 means the user is at
//     // half-way)

//     var percent = ($(document).scrollTop() / ($(document).height() - $(window).height())*100);
//     console.log("percentage scroll value " + percent);
//     // once we have a percent we want to convert it to a number out of 255
//     // because we want to use it in the css rgb() 
//     // to do this, we multiply percent by 255 (which gives us a number
//     // between 0 and 255) and then use Math.round() to remove the decimal
//     // points - so at 50%, percent is 0.5, and 0.5 & 255 is 127.5.  Math.round()
//     // rounds this up to 128

//     //var red = percent * 255;
//     //red = Math.round(red);

//     var blackness = Math.round(100-percent);
//     console.log("percentage scroll value " + percent);
//     // finally we take this red number and insert it into the rgb() string
//      $("div").css("background-color", "hsla( 0, 0%," + blackness + "%)");

// });

// $(".button").click(function(){
//     $("#header").animate({top: "-50"}, 1000)
//     $("#something").delay(1000).animate({height: "hide"}, 1000)
//     $("ul#menu").delay(2000).animate({top: "20", left: "0"}, 1000)
//     $(".trigger").delay(3000).animate({height: "show", top: "110", left: "0"}, "slow");
// // 
// or
// $($alltext
//     s[2]).animate({top: "-50"}, "slow", function() {
//     $("#something").animate({height: "hide"}, "slow", function() {
//         $("ul#menu").animate({top: "20", left: "0"}, "slow", function() {
//             $(".trigger").animate({height: "show", top: "110", left: "0"}, "slow");        
//         });
//     });
// });
// }