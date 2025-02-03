document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling to the top of the page on load
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Scroll animation for dynamic content
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        let elements = document.querySelectorAll('.animate__animated');

        elements.forEach(el => {
            if (el.getBoundingClientRect().top <= window.innerHeight - 50) {
                el.classList.add('animate__fadeInUp');
            }
        });
    });
});