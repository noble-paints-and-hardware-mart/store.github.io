// Wait for the document to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Logic ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
        // Toggle the display of the mobile menu
        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'block';
        }
    });

    // Ensure mobile menu closes if window is resized to desktop width
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mobileMenu.style.display = 'none';
        }
    });
});

