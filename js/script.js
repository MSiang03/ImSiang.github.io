document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript functionality here
    console.log('Website loaded successfully!');

    // Example: Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
