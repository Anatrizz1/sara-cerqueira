document.addEventListener("DOMContentLoaded", function() {
    // Coloca o ano atual no rodapé
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // ANIMAÇÃO FADE-IN COM INTERSECTION OBSERVER
    const fadeInElements = document.querySelectorAll('.fade-in-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    fadeInElements.forEach(el => observer.observe(el));

    // MENU MOBILE
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuButton = document.querySelector('button.md\\:hidden');
    const navMenu = document.querySelector('nav > div.hidden.md\\:flex');

    mobileMenuButton.addEventListener('click', () => {
        if (navMenu.classList.contains('hidden')) {
            navMenu.classList.remove('hidden');
            navMenu.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-bg-light', 'shadow-lg', 'py-4', 'space-y-3');
        } else {
            navMenu.classList.add('hidden');
            navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-bg-light', 'shadow-lg', 'py-4', 'space-y-3');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!navMenu.classList.contains('hidden') && window.innerWidth < 768) {
                navMenu.classList.add('hidden');
                navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-bg-light', 'shadow-lg', 'py-4', 'space-y-3');
            }
        });
    });
});
