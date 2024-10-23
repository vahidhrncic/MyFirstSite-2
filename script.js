// script.js

        // Header Hamburger-Menü
document.addEventListener('DOMContentLoaded', function () {
    // Funktion zum Umschalten der Klasse 'hidden'
    const headerMenuBtn = document.getElementById('header-menu-btn');
    const headerMobileMenu = document.getElementById('header-mobile-menu');

    if (headerMenuBtn && headerMobileMenu) {
        headerMenuBtn.addEventListener('click', function () {
            // Umschalten der Sichtbarkeit des Menüs
            headerMobileMenu.classList.toggle('hidden');
            // Ändern der Aria-Eigenschaft
            const isExpanded = headerMenuBtn.getAttribute('aria-expanded') === 'true';
            headerMenuBtn.setAttribute('aria-expanded', !isExpanded);
        });
    }
            // Header Hamburger-Menü
    toggleMenu('header-menu-btn', 'header-mobile-menu');

    // Footer Hamburger-Menü
    toggleMenu('footer-menu-btn', 'footer-mobile-menu');
});


    // Portfolio Filter
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

    // Lazy Loading mit IntersectionObserver
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
