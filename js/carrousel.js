
let currentSlide = 0;
let slideInterval;
            
function moveSlide(step) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = carousel.children.length;
    
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    const slideWidth = carousel.children[0].clientWidth;
    
    carousel.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
    moveSlide(1);
    }, 3000);
}
            
function stopAutoSlide() {
    clearInterval(slideInterval);
}

window.onload = () => {
    startAutoSlide();
};

window.addEventListener('resize', () => {
    moveSlide(0);
});

document.querySelector('.prev').addEventListener('click', () => {
    stopAutoSlide();
    moveSlide(-1);
    startAutoSlide();
 });
            
document.querySelector('.next').addEventListener('click', () => {
    stopAutoSlide();
     moveSlide(1);
    startAutoSlide();
 });