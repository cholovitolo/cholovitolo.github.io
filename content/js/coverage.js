document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let slideInterval = setInterval(nextSlide, 4000); // Auto-slide every 4 seconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Event listeners for navigation buttons
    document.querySelector(".next").addEventListener("click", function () {
        nextSlide();
        resetInterval();
    });

    document.querySelector(".prev").addEventListener("click", function () {
        prevSlide();
        resetInterval();
    });

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            currentIndex = index;
            showSlide(currentIndex);
            resetInterval();
        });
    });

    // Reset interval when user interacts with controls
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000);
    }
});
