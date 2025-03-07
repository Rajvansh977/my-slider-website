document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.item');
    let activeItem = null;

    // Function to handle both mouse and touch interactions
    function activateItem(item) {
        slider.classList.add('paused'); // Pause the slider
        item.classList.add('enlarged'); // Enlarge item
        activeItem = item;
    }

    function deactivateItem() {
        if (activeItem) {
            slider.classList.remove('paused'); // Resume slider
            activeItem.classList.remove('enlarged'); // Remove enlargement
            activeItem = null;
        }
    }

    // Add event listeners for both desktop and mobile
    items.forEach(item => {
        item.addEventListener('mousedown', () => activateItem(item)); // Desktop
        item.addEventListener('touchstart', () => activateItem(item)); // Mobile
    });

    document.addEventListener('mouseup', deactivateItem); // Desktop
    document.addEventListener('touchend', deactivateItem); // Mobile

    // Prevent right-click on images
    document.addEventListener("contextmenu", function (event) {
        if (event.target.tagName === "IMG") {
            event.preventDefault();
        }
    });
});
