

let clinets = new Swiper(".clients__brands", {
  slidesPerView: 6,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
  
  pagination: {
    clickable: true,
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 2,
    },

    650: {
      slidesPerView: 2,
    },

    800: {
      slidesPerView: 2.4,
    },

    950: {
      slidesPerView: 3.7,
    },

    1050: {
      slidesPerView: 3.6,
    },

    1150: {
      slidesPerView: 4,
    },

    1300: {
      slidesPerView: 5,
    },
  },
});


/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


// Sticky Header

const header = document.querySelector("header")

window.addEventListener("scroll", function () {
  header.classList.toggle("scrolled", window.scrollY > 13);
  console.log(this.window.scrollY);

});


/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);






//  HOme Bottom Slider

let boxes = new Swiper(".boxes", {
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },

  breakpoints: {

    300: {
      slidesPerView: 2,
    },

    550: {
      slidesPerView: 3,
    },

    650: {
      slidesPerView: 3,
    },

    800: {
      slidesPerView: 4,
    },

    950: {
      slidesPerView: 4,
    },

    1050: {
      slidesPerView: 4,
    },

    1150: {
      slidesPerView: 5,
    },

    1250: {
      slidesPerView: 5.1,
    },


  },
});


// Service Up Section Slider

let serviceupswiperup = new Swiper(".service__list-up", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },

  breakpoints: {

    300: {
      slidesPerView: 1.2,
    },

    550: {
      slidesPerView: 1.9,
    },

    650: {
      slidesPerView: 2.5,
    },

    800: {
      slidesPerView: 2.7,
    },

    950: {
      slidesPerView: 3,
    },

    1050: {
      slidesPerView: 4,
    },

    1150: {
      slidesPerView: 4,
    },

    1300: {
      slidesPerView: 4,
    },

  },
});

// Service Down Section Slider

let serviceupswiperdown = new Swiper(".service__list-down", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },

  breakpoints: {

    300: {
      slidesPerView: 1.2,
    },

    550: {
      slidesPerView: 1.9,
    },

    650: {
      slidesPerView: 2.5,
    },

    800: {
      slidesPerView: 2.7,
    },

    950: {
      slidesPerView: 3,
    },

    1050: {
      slidesPerView: 4,
    },

    1150: {
      slidesPerView: 4,
    },

    1300: {
      slidesPerView: 4,
    },

  },
});

// Team Member Slider

let teamcontent = new Swiper(".team__content", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },

  breakpoints: {

    300: {
      slidesPerView: 1.2,
    },

    550: {
      slidesPerView: 1.1,
    },

    650: {
      slidesPerView: 1.4,
    },

    800: {
      slidesPerView: 1.2,
    },

    950: {
      slidesPerView: 2.3,
    },

    1050: {
      slidesPerView: 2.3,
    },

    1150: {
      slidesPerView: 3,
    },

    1300: {
      slidesPerView: 3.2
    },

  },
});



// Clients Section Slider




// Process Section Slider

let process = new Swiper(".work__process", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    clickable: true,
  },

  breakpoints: {

    300: {
      slidesPerView: 1.3,
    },

    550: {
      slidesPerView: 1.3,
    },

    650: {
      slidesPerView: 1.8,
    },

    800: {
      slidesPerView: 2.5,
    },

    950: {
      slidesPerView: 3,
    },


    1050: {
      slidesPerView: 3.2,
    },


    1300: {
      slidesPerView: 3.5
    },

    1400: {
      slidesPerView: 4
    },

  },
});







// number counter

// 7+
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (start - end) - end);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("value1");
animateValue(obj, 7, 0, 2000);

// 15+
function animateValue1(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj1.innerHTML = Math.floor(progress * (start - end) - end);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj1 = document.getElementById("value2");
animateValue1(obj, 15, 0, 2000);

// 15+
function animateValue2(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj2.innerHTML = Math.floor(progress * (start - end) - end);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj2 = document.getElementById("value3");
animateValue2(obj, 15, 0, 2000);

// 15+
function animateValue3(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj3.innerHTML = Math.floor(progress * (start - end) - end);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj3 = document.getElementById("value4");
animateValue3(obj, 15, 0, 2000);

// 15+
function animateValue4(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj4.innerHTML = Math.floor(progress * (start - end) - end);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj4 = document.getElementById("value5");
animateValue4(obj, 1, 0, 500);