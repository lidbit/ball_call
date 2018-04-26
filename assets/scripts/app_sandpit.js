// $(document).scrollTop()
// $(window).height()
// $(document).height()
$(document).ready(function () {
  'use strict';
  var $grid=$('#id'),
    $lists = $grid.find('li');

    $lists.css('background', '#333');
    $lists.animate({width:'+=100'}, 2000);
    $lists.fadeOut();
    $lists.fadeIn('slow');
});
// this is a scroll event handler - will be called whenever the user
// scrolls the document
$(document).scroll( function() {

	// use .scrollTop() to calculate the percent of the way through
  // the document the user has scrolled
  // the formula is:
  // percent = amount scrolled / (height of the document - height of the window)
  // this will give us a number between 0 and 1 (eg: 0.5 means the user is at
  // half-way)

	var percent = $(document).scrollTop() / ($(document).height() - $(window).height());
  
  // once we have a percent we want to convert it to a number out of 255
  // because we want to use it in the css rgb() 
  // to do this, we multiply percent by 255 (which gives us a number
  // between 0 and 255) and then use Math.round() to remove the decimal
  // points - so at 50%, percent is 0.5, and 0.5 & 255 is 127.5.  Math.round()
  // rounds this up to 128
  
  var red = percent * 255;	
  red = Math.round(red);
  
  // finally we take this red number and insert it into the rgb() string
  $("div").css("background-color", "rgb(" + red + ",0,0)"); 
  
});