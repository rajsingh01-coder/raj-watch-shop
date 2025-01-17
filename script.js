document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu li a'); // Select all menu items

    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Add click event to each menu item
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menu.classList.remove('active'); // Close the menu
        });
    });
});

function viewDetails(title, details) {
    alert(`Details:\nTitle: ${title}\nPrice: ${details}`);
}

// Main carousel configuration
const mainCarousel = new Flickity('.carousel', {
    wrapAround: true,
    autoPlay: 3000,
    draggable: true,
    cellAlign: 'center',
    selectedAttraction: 0.01, // Lower value for smoother attraction
    friction: 0.2,           // Lower value for smoother drag
});

// Watch carousel configuration
const watchCarousel = new Flickity('.carouselone', {
    wrapAround: true,
    autoPlay: true,
    draggable: true,
    cellAlign: 'center',
    selectedAttraction: 0.01,
    friction: 0.2,
});

function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function redirectToWebsite() {
    window.location.href = "https://www.yourwebsite.com"; // Replace with your website URL
}