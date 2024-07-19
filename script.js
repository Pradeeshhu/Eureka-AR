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



function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function login() {
    alert('Login clicked');
}

function signup() {
    alert('Sign Up clicked');
}


function toggleFilters() {
    const filters = document.querySelector('.filters');
    filters.classList.toggle('open');
}
