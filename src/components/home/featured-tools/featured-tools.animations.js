// Featured Tools Animations

export function featuredToolsAnimations() {
  const cards = document.querySelectorAll('.tool-card');
  
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

export function toolCardHoverEffects() {
  const cards = document.querySelectorAll('.tool-card');
  
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
export function toolCtaInteractions() {
  const primaryCtas = document.querySelectorAll('.primary-cta');
  const secondaryCtas = document.querySelectorAll('.secondary-cta');
  
  primaryCtas.forEach(button => {
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
      const card = button.closest('.tool-card');
      const cardIndex = card.dataset.cardIndex;
      
      // Example navigation logic
      switch(cardIndex) {
        case '0': // AutoForm Generator
          console.log('Navigate to AutoForm Generator');
          break;
        case '1': // AI Summary Hub
          console.log('Navigate to AI Summary Hub');
          break;
        case '2': // Deploy Script Helper
          console.log('Navigate to Deploy Script Helper');
          break;
        case '3': // Code Snippet Manager
          console.log('Navigate to Code Snippet Manager');
          break;
      }
    });
  });
  
  secondaryCtas.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = '#E09F3E';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.color = 'rgba(224, 225, 221, 0.7)';
    });
  });
}

// Visual preview animations
export function visualPreviewAnimations() {
  // Form generator animations
  const formFields = document.querySelectorAll('.field-label, .field-input, .submit-button');
  formFields.forEach((field, index) => {
    field.style.animationDelay = `${index * 0.2}s`;
  });
  
  // AI summary animations
  const textBlocks = document.querySelectorAll('.text-block');
  textBlocks.forEach((block, index) => {
    block.style.animationDelay = `${index * 0.3}s`;
  });
  
  // Deploy script animations
  const commandLines = document.querySelectorAll('.command, .output-line');
  commandLines.forEach((line, index) => {
    line.style.animationDelay = `${index * 0.5}s`;
  });
  
  // Code snippet animations
  const codeLines = document.querySelectorAll('.code-line');
  codeLines.forEach((line, index) => {
    line.style.animationDelay = `${index * 0.2}s`;
  });
}

// Status badge animations
export function statusBadgeAnimations() {
  const badges = document.querySelectorAll('.status-badge');
  
  badges.forEach(badge => {
    badge.addEventListener('mouseenter', () => {
      badge.style.transform = 'scale(1.05)';
      badge.style.transition = 'transform 0.2s ease';
    });
    
    badge.addEventListener('mouseleave', () => {
      badge.style.transform = 'scale(1)';
    });
  });
}

// View all tools button interactions
export function viewAllToolsInteractions() {
  const viewAllButton = document.querySelector('.view-all-button');
  
  if (viewAllButton) {
    viewAllButton.addEventListener('mouseenter', () => {
      const arrow = viewAllButton.querySelector('.view-all-arrow');
      if (arrow) {
        arrow.style.transform = 'translateX(6px)';
      }
    });
    
    viewAllButton.addEventListener('mouseleave', () => {
      const arrow = viewAllButton.querySelector('.view-all-arrow');
      if (arrow) {
        arrow.style.transform = 'translateX(0)';
      }
    });
    
    viewAllButton.addEventListener('click', (e) => {
      // Add ripple effect
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(224, 159, 62, 0.3)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s linear';
      ripple.style.left = e.clientX - viewAllButton.getBoundingClientRect().left + 'px';
      ripple.style.top = e.clientY - viewAllButton.getBoundingClientRect().top + 'px';
      
      viewAllButton.style.position = 'relative';
      viewAllButton.style.overflow = 'hidden';
      viewAllButton.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  }
}

// Performance optimization
export function optimizeToolPerformance() {
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
  const cards = document.querySelectorAll('.tool-card');
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
export function initFeaturedToolsAnimations() {
  featuredToolsAnimations();
  toolCardHoverEffects();
  toolCtaInteractions();
  visualPreviewAnimations();
  statusBadgeAnimations();
  viewAllToolsInteractions();
  optimizeToolPerformance();
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
if (!document.querySelector('#featured-tools-ripple-css')) {
  const style = document.createElement('style');
  style.id = 'featured-tools-ripple-css';
  style.textContent = rippleCSS;
  document.head.appendChild(style);
} 