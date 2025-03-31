// Create particles
document.addEventListener('DOMContentLoaded', function() {
    // Apply paragraph animation indices
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
      p.style.setProperty('--paragraph-index', index);
    });
    
    // Apply card animation indices
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      card.style.setProperty('--card-index', index);
    });
    
    // Create floating particles
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
      createParticle(particlesContainer);
    }
    
    // Add cursor trail effect
    document.addEventListener('mousemove', createCursorTrail);
    
    // Add page transition effect
    const links = document.querySelectorAll('a:not([target="_blank"])');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('http') || href.startsWith('#')) return;
        
        e.preventDefault();
        
        const transition = document.createElement('div');
        transition.className = 'page-transition';
        document.body.appendChild(transition);
        
        setTimeout(() => {
          transition.classList.add('active');
        }, 10);
        
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    });
  });
  
  function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 3 + 1;
    
    // Random opacity
    const opacity = Math.random() * 0.5 + 0.1;
    
    // Random animation duration
    const duration = Math.random() * 15 + 10;
    
    // Random animation delay
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
      left: ${posX}%;
      top: ${posY}%;
      width: ${size}px;
      height: ${size}px;
      opacity: ${opacity};
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
    `;
    
    container.appendChild(particle);
  }
  
  function createCursorTrail(e) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    
    // Position the trail element at cursor position
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    
    // Animate the trail
    requestAnimationFrame(() => {
      trail.style.opacity = '0.7';
      
      setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'translate(-50%, -50%) scale(3)';
        
        setTimeout(() => {
          document.body.removeChild(trail);
        }, 300);
      }, 100);
    });
  }
  
  // Add a keyframe animation for floating particles
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
  @keyframes float {
    0% {
      transform: translateY(0) translateX(0);
      opacity: 0;
    }
    10% {
      opacity: var(--particle-opacity, 0.3);
    }
    90% {
      opacity: var(--particle-opacity, 0.3);
    }
    100% {
      transform: translateY(-100vh) translateX(var(--particle-drift, 50px));
      opacity: 0;
    }
  }`;
  document.head.appendChild(styleSheet);