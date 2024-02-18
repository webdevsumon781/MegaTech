

// PRELOADING

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.remove("active");
});

// slide up animation start

const slideUpobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('slide-up-show')
    } else {
      entry.target.classList.remove('slide-up-show')
    }
  })
})

const slideUpElements = document.querySelectorAll(".slide-up");
slideUpElements.forEach((el) => slideUpobserver.observe(el));

// slide up animation close

// slide up animation start

const LongslideUpobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('long-slide-up-show')
    } else {
      entry.target.classList.remove('long-slide-up-show')
    }
  })
})

const LongslideUpElements = document.querySelectorAll(".long-slide-up");
LongslideUpElements.forEach((el) => LongslideUpobserver.observe(el));

// slide up animation close

// slide up animation start

const slideDownobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('slide-down-show')
    } else {
      entry.target.classList.remove('slide-down-show')
    }
  })
})

const slideDownElements = document.querySelectorAll(".slide-down");
slideDownElements.forEach((el) => slideDownobserver.observe(el));

// slide up animation close


// slide left animation start

const slideLeftobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('slide-left-show')
    } else {
      entry.target.classList.remove('slide-left-show')
    }
  })
})

const slideLeftElements = document.querySelectorAll(".slide-left");
slideLeftElements.forEach((el) => slideLeftobserver.observe(el));

// slide left animation close

// slide right animation start

const slideRightobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('slide-right-show')
    } else {
      entry.target.classList.remove('slide-right-show')
    }
  })
})

const slideRightElements = document.querySelectorAll(".slide-right");
slideRightElements.forEach((el) => slideRightobserver.observe(el));

// slide right animation close

// rotate animation start

const scaleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('scale-show')
    } else {
      entry.target.classList.remove('scale-show')
    }
  })
})

const scaleElements = document.querySelectorAll(".scale");
scaleElements.forEach((el) => scaleObserver.observe(el));

// rotate animation close


// footer reveal start
$(document).ready(function(){
  $(window).bind('scroll', function() {
  var distance = 500;
        if ($(window).scrollTop() > distance) {
            $('.footer').addClass("sec-fixed");
        }else{
          $('.footer').removeClass("sec-fixed");
        }
   });
});

// footer reveal start
$(document).ready(function(){
  $(window).bind('scroll', function() {
  var distance = 500;
        if ($(window).scrollTop() > distance) {
            $('.h-footer').addClass("h-sec-fixed");
        }else{
          $('.h-footer').removeClass("h-sec-fixed");
        }
   });
});


