$(document).ready(function() {
  $('img#logo').click(function() {
    if ($('header').hasClass('active')) {
        $('header').removeClass('active');
    } else {
        $('header').addClass('active');    
    }
    
  })

  // $('#carousel-example-generic').carousel({interval: 300})    
})
