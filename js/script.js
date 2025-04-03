const carouselContainer = document.querySelector('.carousel-container');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');

const slideWidth = carouselContainer.offsetWidth; // Largura de um slide
let currentIndex = 0;
let autoplayInterval;
const intervalTime = 15000;

function goToSlide(index) {
  carouselWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}

function startAutoplay() {
    nextSlide();
  autoplayInterval = setInterval(nextSlide, intervalTime);
}

// Iniciar o autoplay
startAutoplay();

// Mostrar o primeiro slide inicialmente
goToSlide(currentIndex);