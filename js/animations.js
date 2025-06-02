/**
 * Enhanced animations and touch event handling for KPZsProductions
 */

document.addEventListener('DOMContentLoaded', function() {
  // Detect touch capability
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  
  // Apply special class to body for touch-specific styles
  if (isTouchDevice) {
    document.body.classList.add('touch-device');
  }
  
  // Handle responsive hover effects for touch devices
  const interactiveElements = document.querySelectorAll('.button, .project-card, .return-button, .tech-tag');
  
  if (isTouchDevice) {
    interactiveElements.forEach(element => {
      element.addEventListener('touchstart', function() {
        // Remove active class from all elements
        interactiveElements.forEach(el => {
          if (el !== element) {
            el.classList.remove('touch-active');
          }
        });
        
        // Toggle active class on current element
        element.classList.toggle('touch-active');
      });
    });
    
    // Remove active states when touching elsewhere
    document.addEventListener('touchstart', function(e) {
      if (!e.target.closest('.button, .project-card, .return-button, .tech-tag')) {
        interactiveElements.forEach(el => {
          el.classList.remove('touch-active');
        });
      }
    });
  }
  
  // Create staggered animation effect for paragraphs on all pages
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach((p, index) => {
    p.style.setProperty('--paragraph-index', index);
  });
  
  // Create staggered animation effect for cards on project page
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    card.style.setProperty('--card-index', index);
  });
  
  // Enhance scroll behavior for smoother animations
  const smoothScrollElements = document.querySelectorAll('a[href^="#"]');
  smoothScrollElements.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Check if element is in viewport for scroll animations
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  // Add scroll animation class to elements as they come into view
  function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .informationContainer, h1, h3, .cont');
    
    animatedElements.forEach(element => {
      if (isInViewport(element) && !element.classList.contains('scroll-animated')) {
        element.classList.add('scroll-animated');
      }
    });
  }
  
  // Initialize scroll animations
  window.addEventListener('scroll', handleScrollAnimations);
  handleScrollAnimations(); // Run once on page load
});