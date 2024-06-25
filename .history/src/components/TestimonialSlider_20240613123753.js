// src/components/TestimonialSlider.js

document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
  
    function showSlides() {
      slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
      });
      dots.forEach((dot, index) => {
        dot.className = dot.className.replace(' active', '');
        if (index === slideIndex) {
          dot.className += ' active';
        }
      });
      slideIndex = (slideIndex + 1) % slides.length;
      setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }
  
    showSlides();
  });

