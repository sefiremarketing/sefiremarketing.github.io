document.addEventListener('DOMContentLoaded', () => {

    // --- Quote Form Handling ---
    const quoteForm = document.getElementById('quote-form');

    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, this would send data to a server
            const formData = new FormData(quoteForm);
            const name = formData.get('name');

            alert(`Thank you, ${name}! Your request has been received. We will contact you shortly.`);
            quoteForm.reset();
        });
    }

    // --- Map Handling ---
    const mapContainer = document.getElementById('map-container');
    const lat = 25.586337307306902;
    const lng = 85.12488692193044;

    if (mapContainer) {
        // Clear placeholder content
        mapContainer.innerHTML = '';

        // Leaflet Map Initialization
        const map = L.map('map-container').setView([lat, lng], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([lat, lng]).addTo(map)
            .bindPopup('<b>Sefire Marketing</b><br>Main Office Location')
            .openPopup();
    }

    // --- Scroll Animations ---
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .feature-card, .info-item, .contact-form-wrapper').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
