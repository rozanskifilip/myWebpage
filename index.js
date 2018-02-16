// back to top button

$(document).ready(function(){
  backToTop();
});

var backToTop = function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
     $('#back-to-top').fadeIn();
   } else {
     $('#back-to-top').fadeOut();
   }
 }); 
};

// scroll body to 0px on click

$(window).scroll(function() {
  if ($(this).scrollTop() > 50 && !$(this).hasClass('visible')) {
    $('#back-to-top').fadeIn().addClass('visible');
    console.log($(this).scrollTop());
  } else if ( $(this).hasClass('visible') ) {
    $('#back-to-top').fadeOut().removeClass('visible');
  }
});

// scroll to

$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});


// dropdown menu

$("#button #item").click(function(){
  $("#submenu").slideToggle(500)
})