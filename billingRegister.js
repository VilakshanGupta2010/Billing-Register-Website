const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children)
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const dotsNav = document.querySelector('.carousel-indicators');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

// when I click left, move slide to the left
prevButton.addEventListener('click', () => {
    const currentSlide = document.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove2 = nextSlide.style.left;
    track.style.transform = 'translateX(+'+ amountToMove2 +')';
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
})

// when I click right, move slide to the right
nextButton.addEventListener('click', () => {
    const currentSlide = document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove1 = nextSlide.style.left;
    track.style.transform = 'translateX(-'+ amountToMove1 +')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
})

// function click(){
//     document.getElementById('click1').style.fontSize = "18px"
//     document.getElementById('click1').style.fontFamily = "Cambria"
//     document.getElementById('click1').style.display = "inline-block"
//     document.getElementById('click1').style.color = "#025784"
//     document.getElementById('click1').style.cursor = "pointer"
// }