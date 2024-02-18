
// about paralax animation 
$(document).ready(function(){
  $(window).bind('scroll', function() {
  var distance = 3800;
        if ($(window).scrollTop() > distance) {
            $('.about-contact').addClass("sec-fixed");
        }else{
          $('.about-contact').removeClass("sec-fixed");
        }
   });
});
$(document).ready(function(){
  $(window).bind('scroll', function() {
  var distance = 3900;
        if ($(window).scrollTop() > distance) {
            $('.about-footer').addClass("sec-fixed");
        }else{
          $('.about-footer').removeClass("sec-fixed");
        }
   });
});

  