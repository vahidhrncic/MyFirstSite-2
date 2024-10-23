// Header Hamburger-Menü
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');
    const menuBtn = document.getElementById('header-menu-btn');
    const mobileMenu = document.getElementById('header-mobile-menu');
    
    menuBtn.addEventListener('click', () => {
        console.log('Menu button clicked');
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
        menuBtn.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('hidden');
    });
});

// Portfolio Filter
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            portfolioItems.forEach(item => {
                if (category === 'all' || item.classList.contains(`category-${category}`)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// Lazy Loading mit IntersectionObserver
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('.lazy');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.getAttribute('data-src');
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });
        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    } else {
        // Fallback für ältere Browser
        lazyImages.forEach(image => {
            image.src = image.getAttribute('data-src');
            image.classList.remove('lazy');
        });
    }
});
