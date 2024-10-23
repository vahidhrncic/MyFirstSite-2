// script.js

        // Header Hamburger-Menü
        document.addEventListener('DOMContentLoaded', () => {
            // Funktion zum Umschalten der Klasse 'open'
            function toggleMenu(buttonId, menuId) {
                const menuButton = document.getElementById(buttonId);
                const mobileMenu = document.getElementById(menuId);
        
                if (menuButton && mobileMenu) {
                    menuButton.addEventListener('click', (e) => {
                        e.preventDefault();
                        mobileMenu.classList.toggle('hidden');
                        menuButton.classList.toggle('open'); // Klasse 'open' toggeln
                        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
                        menuButton.setAttribute('aria-expanded', !isExpanded);
                    });
                }
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
