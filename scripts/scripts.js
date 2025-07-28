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

  /* ======== about section ============ */ 
  /* ========== Download CV ========== */
  const downloadBtn = document.querySelector('.downlaod-cv-btn');
  downloadBtn?.addEventListener('click', () => {
    alert("CV download coming soon!"); // Replace this with actual download logic
    // Example: window.location.href = '/assets/cv/namusoboko-nelson-cv.pdf';
  });

  /*  footer section   */
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


// Update smooth scroll navigation with active state
const navLinks = document.querySelectorAll('.section-navigations a');
const sections = document.querySelectorAll('section');

// Add scroll event listener for dynamic effects
window.addEventListener('scroll', () => {
  // Header scroll effect - shrink slightly when scrolled
  const navBar = document.querySelector('.nav-bar');
  if (window.scrollY > 50) {
    navBar.classList.add('scrolled');
  } else {
    navBar.classList.remove('scrolled');
  }

  // Determine current visible section for active link
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute('id');
    }
  });

  // Update active state on navigation links
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Initialize with Home link active by default
document.querySelector('.section-navigations a[href="#home"]').classList.add('active');
