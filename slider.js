
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.item');
    let activeItem = null;

    // Add mouse down event to all items
    items.forEach(item => {
        item.addEventListener('mousedown', (e) => { 
            // Pause the slider animation
            slider.classList.add('paused');
            
            // Add enlarged class to clicked item
            item.classList.add('enlarged');
            activeItem = item;
        });
    });

    // Add mouse up event to document
    document.addEventListener('mouseup', () => {
        if (activeItem) {
            // Resume slider animation
            slider.classList.remove('paused');
            
            // Remove enlarged class
            activeItem.classList.remove('enlarged');
            activeItem = null;
        }
    });
});
