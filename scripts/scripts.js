// scripts/scripts.js

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  /* ========== Smooth Scroll Navigation ========== */
  const navLinks = document.querySelectorAll('.section-navigations a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  /* ========== Download CV ========== */
  const downloadBtn = document.querySelector('.downlaod-cv-btn');
  downloadBtn?.addEventListener('click', () => {
    alert("CV download coming soon!"); // Replace this with actual download logic
    // Example: window.location.href = '/assets/cv/namusoboko-nelson-cv.pdf';
  });

  /* ========== Email Validation ========== */
  const emailInput = document.querySelector('.email-input');

  emailInput?.addEventListener('blur', () => {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
    }
  });

  console.log("Portfolio JavaScript loaded successfully.");
});
