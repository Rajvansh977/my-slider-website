document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.item');
    let activeItem = null;

    function enlargeItem(item) {
        slider.classList.add('paused'); 
        item.classList.add('enlarged');
        activeItem = item;
    }

    function resetItem() {
        if (activeItem) {
            slider.classList.remove('paused');
            activeItem.classList.remove('enlarged');
            activeItem = null;
        }
    }

    items.forEach(item => {
        item.addEventListener('mousedown', (e) => enlargeItem(item));
        item.addEventListener('touchstart', (e) => {
            e.preventDefault(); 
            enlargeItem(item);
        });
    });

    document.addEventListener('mouseup', resetItem);
    document.addEventListener('touchend', resetItem);
});
