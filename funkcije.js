
$(function(){
   if ($(this).scrollTop() > 100) {
    $('#scroll-to-top').fadeIn('slow');
  } else {
    $('#scroll-to-top').fadeOut('slow');
  }



 $('#scroll-to-top').click(function(){
  "use strict";

  $("html,body").animate({ scrollTop: 0 }, 1500);
  return false;
});
});



///////////////////////////////////////////////////
 jQuery(window).load(function(){
  "use strict";
// Stellar parallax

$(window).stellar({
  horizontalScrolling: false,
  responsive: true
});

});



 jQuery(document).ready(function() {

$('img').fadeIn();
  "use strict";


  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });