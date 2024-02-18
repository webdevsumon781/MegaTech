// home paralax animation 
$(document).ready(function(){
    $(window).bind('scroll', function() {
    var distance = 3200;
          if ($(window).scrollTop() > distance) {
              $('.h-contact').addClass("sec-fixed");
          }else{
            $('.h-contact').removeClass("sec-fixed");
          }
     });
  });
  $(document).ready(function(){
    $(window).bind('scroll', function() {
    var distance = 3500;
          if ($(window).scrollTop() > distance) {
              $('.h-footer').addClass("sec-fixed");
          }else{
            $('.h-footer').removeClass("sec-fixed");
          }
     });
  });
  