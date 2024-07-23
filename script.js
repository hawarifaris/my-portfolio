document.addEventListener('DOMContentLoaded', () => {
    // Scroll to section
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Perform form validation or AJAX call here
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
