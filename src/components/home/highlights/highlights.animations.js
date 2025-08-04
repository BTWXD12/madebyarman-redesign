// Quick Highlights Animations

export function highlightsAnimations() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const cards = document.querySelectorAll('.highlight-card');
  
  // Intersection Observer for entrance animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger entrance animation
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 150);
      }
    });
  }, observerOptions);

  // Initialize cards with entrance state
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

export function cardHoverEffects() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const cards = document.querySelectorAll('.highlight-card');
  
  cards.forEach(card => {
    // Mouse parallax effect
    card.addEventListener('mousemove', (e) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return; // Skip parallax for users who prefer reduced motion
      }
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      // Apply subtle parallax to inner layers
      const shapes = card.querySelector('.layer-shapes');
      if (shapes) {
        shapes.style.transform = `translateX(${(x - centerX) / 30}px) translateY(${(y - centerY) / 30}px)`;
      }
      
      // Apply rotation to card
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    // Reset on mouse leave
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      const shapes = card.querySelector('.layer-shapes');
      if (shapes) {
        shapes.style.transform = 'translateX(0px) translateY(0px)';
      }
    });
    
    // Keyboard navigation support
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        // Trigger click-like behavior
        card.click();
      }
    });
    
    // Focus management
    card.addEventListener('focus', () => {
      card.style.transform = 'translateY(-4px) scale(1.01)';
    });
    
    card.addEventListener('blur', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Micro-interactions for CTA buttons
export function ctaInteractions() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const ctaButtons = document.querySelectorAll('.card-micro-cta');
  
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      const arrow = button.querySelector('.cta-arrow');
      if (arrow) {
        arrow.style.transform = 'translateX(6px)';
      }
    });
    
    button.addEventListener('mouseleave', () => {
      const arrow = button.querySelector('.cta-arrow');
      if (arrow) {
        arrow.style.transform = 'translateX(0)';
      }
    });
    
    // Click handler for navigation
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Add ripple effect
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(224, 159, 62, 0.3)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s linear';
      ripple.style.left = e.clientX - button.getBoundingClientRect().left + 'px';
      ripple.style.top = e.clientY - button.getBoundingClientRect().top + 'px';
      
      button.style.position = 'relative';
      button.style.overflow = 'hidden';
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
      
      // Handle navigation (you can customize this)
      const card = button.closest('.highlight-card');
      const cardIndex = card.dataset.cardIndex;
      
      // Example navigation logic
      switch(cardIndex) {
        case '0': // Web Development
          console.log('Navigate to Web Development examples');
          break;
        case '1': // AI Tools
          console.log('Navigate to AI Tools');
          break;
        case '2': // Automation
          console.log('Navigate to Automation');
          break;
        case '3': // Custom Solutions
          console.log('Navigate to Custom Solutions');
          break;
      }
    });
  });
}

// Icon-specific animations
export function iconAnimations() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Web Dev code shimmer effect
  const codeLines = document.querySelectorAll('.code-line');
  codeLines.forEach((line, index) => {
    line.style.animationDelay = `${index * 0.2}s`;
  });
  
  // AI sphere pulse effect
  const sphereCores = document.querySelectorAll('.sphere-core');
  sphereCores.forEach(core => {
    core.addEventListener('mouseenter', () => {
      core.style.animationDuration = '1.5s';
    });
    
    core.addEventListener('mouseleave', () => {
      core.style.animationDuration = '3s';
    });
  });
  
  // Gear rotation speed control
  const gears = document.querySelectorAll('.gear');
  gears.forEach(gear => {
    gear.addEventListener('mouseenter', () => {
      gear.style.animationDuration = '2s';
    });
    
    gear.addEventListener('mouseleave', () => {
      gear.style.animationDuration = '4s';
    });
  });
}

// Performance optimization
export function optimizePerformance() {
  // Throttle mousemove events
  let ticking = false;
  
  function updateCardTransform(card, x, y) {
    if (!ticking) {
      requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        ticking = false;
      });
      ticking = true;
    }
  }
  
  // Apply throttled mousemove to cards
  const cards = document.querySelectorAll('.highlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      updateCardTransform(card, e.clientX, e.clientY);
    });
  });
}

// Initialize all animations
export function initHighlightsAnimations() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  highlightsAnimations();
  cardHoverEffects();
  ctaInteractions();
  iconAnimations();
  optimizePerformance();
}

// Add CSS for ripple effect
const rippleCSS = `
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
`;

// Inject ripple CSS if not already present
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (!document.querySelector('#highlights-ripple-css')) {
    const style = document.createElement('style');
    style.id = 'highlights-ripple-css';
    style.textContent = rippleCSS;
    document.head.appendChild(style);
  }
} 