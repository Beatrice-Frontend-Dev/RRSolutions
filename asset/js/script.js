document.addEventListener("DOMContentLoaded", () => {
  // Sticky header and close navbar on scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const navMenu = document.getElementById("nav-icons");

    // Sticky header logic
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Close navbar when scrolling
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  });
});

// Toggle navbar visibility
function toggleNav() {
  const navMenu = document.getElementById("nav-icons");
  navMenu.classList.toggle("active");
}

// Close the navbar
function closeNav() {
  const navMenu = document.getElementById("nav-icons");
  navMenu.classList.remove("active");
}

// Testimonial functionality (unchanged)
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dots");
let currentSlide = 0;

function showSlide(n) {
  testimonials.forEach((testimonial, index) => {
    testimonial.style.display = index === n ? "block" : "none";
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === n);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Automatic slide show
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
}, 3000);

// Accordion functionality (unchanged)
const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
    this.classList.toggle("active");
  });
});

// Hero image slider (unchanged)
const sliderContainer = document.querySelector(".slider-container");
const slides = sliderContainer.querySelectorAll("img");
let currentSlideS = 0;

slides.forEach((slide, index) => {
  slide.style.position = "absolute";
  slide.style.top = 0;
  slide.style.left = 0;
  slide.style.width = "100%";
  slide.style.opacity = 0;
  slide.style.transition = "opacity 1s ease-in-out";
});

slides[0].style.opacity = 1;

function nextSlide() {
  const previousSlide = currentSlideS;
  currentSlideS = (currentSlideS + 1) % slides.length;

  slides[previousSlide].style.opacity = 0;
  slides[currentSlideS].style.opacity = 1;
}

setInterval(nextSlide, 5000);
