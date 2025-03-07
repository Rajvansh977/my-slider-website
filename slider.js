document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.item');
    let activeItem = null;

    // Function to handle touch or mouse start
    function handleStart(event) {
        event.preventDefault(); // Prevent default behavior (like long press menu)
        const item = event.currentTarget; // Get the clicked item

        slider.classList.add('paused'); // Pause the slider animation
        item.classList.add('enlarged'); // Add zoom effect
        activeItem = item;
    }

    // Function to handle touch or mouse end
    function handleEnd() {
        if (activeItem) {
            slider.classList.remove('paused'); // Resume animation
            activeItem.classList.remove('enlarged'); // Remove zoom effect
            activeItem = null;
        }
    }

    // Add event listeners for both mouse and touch
    items.forEach(item => {
        item.addEventListener('mousedown', handleStart);
        item.addEventListener('touchstart', handleStart); // For mobile touch
    });

    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd); // For mobile touch

    // Prevent right-click menu on images
    document.addEventListener("contextmenu", function (event) {
        if (event.target.tagName === "IMG") {
            event.preventDefault();
        }
    });
});
