// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');
  
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });
  }
  
  // Close mobile nav when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.site-header') && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      mobileToggle.classList.remove('active');
    }
  });
  
  // Header scroll effect
  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.boxShadow = '0 2px 20px rgba(10, 22, 40, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 100;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
