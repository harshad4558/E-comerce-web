// script.js

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
      // Get the height of the hero section
      const heroHeight = document.querySelector(".hero").scrollHeight;
  
      // Toggle the "hidden" class based on the scroll position
      if (window.scrollY > heroHeight) {
        navbar.classList.add("visually-hidden");
      } else {
        navbar.classList.remove("visually-hidden");
      }
    });
  });

  // Scroll animation
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2500,
    delay: 400,
  });
ScrollReveal().reveal(".scroling-left,card1", { delay: 100 ,origin:"right"});
ScrollReveal().reveal(".scroling-down,special-edition-texts", { interval: 500});
ScrollReveal().reveal(".buttons", { delay: 800 });


ScrollReveal().reveal(".page2", { delay: 500,origin:"bottom" });

// retting 
function setRating(rating) {
  document.getElementById('rating-message').innerText = `You rated the product ${rating} stars!`;
}

  