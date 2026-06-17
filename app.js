const slides = Array.from(document.querySelectorAll("[data-carousel-slide]"));
const previousButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");
const statusText = document.querySelector("[data-carousel-status]");
let activeSlide = 0;

function showSlide(index) {
  if (!slides.length) return;

  activeSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    const active = slideIndex === activeSlide;
    slide.hidden = !active;
    slide.classList.toggle("is-active", active);
  });

  if (statusText) {
    statusText.textContent = `Photo ${activeSlide + 1} of ${slides.length}`;
  }
}

previousButton?.addEventListener("click", () => showSlide(activeSlide - 1));
nextButton?.addEventListener("click", () => showSlide(activeSlide + 1));
showSlide(activeSlide);
