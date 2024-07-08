const banners = document.querySelectorAll('.banner-image');
let currentIndex = 0;

function showNextBanner() {
    banners[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % banners.length;
    banners[currentIndex].classList.add('active');
}

setInterval(showNextBanner, 5000);

// Initialize the first banner as active
banners[currentIndex].classList.add('active');


