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




/* Trigger the 'moving' feature when scrolling */
window.addEventListener('scroll', function() {
    const sidebar = document.querySelector('.sidebar');
    if (window.scrollY > 200) { /* Adjust threshold as needed */
        sidebar.classList.add('moving');
    } else {
        sidebar.classList.remove('moving');
    }
});

// script.js

function toggleFilters() {
    const filters = document.querySelector('.filters');
    filters.classList.toggle('open');
}


// --------------------


// script.js
document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout');
    let total = 0;

    // Add to Cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));

            // Create list item for the cart
            const li = document.createElement('li');
            li.textContent = `${name} - $${price.toFixed(2)}`;
            li.dataset.price = price;

            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remove';
            deleteButton.addEventListener('click', function () {
                total -= price;
                totalElement.textContent = `Total: $${total.toFixed(2)}`;
                cartItems.removeChild(li);
            });

            li.appendChild(deleteButton);
            cartItems.appendChild(li);

            // Update total
            total += price;
            totalElement.textContent = `Total: $${total.toFixed(2)}`;
        });
    });

    // Checkout
    checkoutButton.addEventListener('click', function () {
        if (total > 0) {
            alert(`Proceeding to payment gateway with total amount: $${total.toFixed(2)}`);
            window.location.href = 'https://www.paymentgateway.com';  // Simulate redirect to payment gateway
        } else {
            alert('Your cart is empty! Please add items to the cart before checking out.');
        }
    });
});
