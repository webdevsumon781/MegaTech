
// PRELOADING

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.remove("active");
});


// Parallax Effect
const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});




// secion animation start

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
  
  // secion animation close

