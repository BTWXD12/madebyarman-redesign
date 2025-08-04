// Featured Projects Animations

export function featuredProjectsAnimations() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const cards = document.querySelectorAll('.project-card');
  
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
        }, index * 200);
      }
    });
  }, observerOptions);

  // Initialize cards with entrance state
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(card);
  });
}

export function projectCardHoverEffects() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const cards = document.querySelectorAll('.project-card');
  
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
      
      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;
      
      // Apply subtle parallax to inner layers
      const shapes = card.querySelector('.layer-shapes');
      if (shapes) {
        shapes.style.transform = `translateX(${(x - centerX) / 40}px) translateY(${(y - centerY) / 40}px)`;
      }
      
      // Apply rotation to card with enhanced depth
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03) translateY(-8px)`;
      
      // Add dynamic shadow based on mouse position
      const shadowX = (x - centerX) / 10;
      const shadowY = (y - centerY) / 10;
      card.style.boxShadow = `
        0 20px 40px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(224, 159, 62, 0.2),
        0 0 20px rgba(224, 159, 62, 0.1),
        ${shadowX}px ${shadowY}px 30px rgba(224, 159, 62, 0.15)
      `;
    });
    
    // Reset on mouse leave
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0)';
      card.style.boxShadow = `
        0 20px 40px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(224, 159, 62, 0.2),
        0 0 20px rgba(224, 159, 62, 0.1)
      `;
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
export function projectCtaInteractions() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

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
      const card = button.closest('.project-card');
      const cardIndex = card.dataset.cardIndex;
      
      // Example navigation logic
      switch(cardIndex) {
        case '0': // SmartInvoice AI
          console.log('Navigate to SmartInvoice AI case study');
          break;
        case '1': // CodexArman Portfolio
          console.log('Navigate to Portfolio case study');
          break;
        case '2': // E-Commerce Analytics
          console.log('Navigate to E-Commerce Analytics case study');
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

// Thumbnail overlay interactions
export function thumbnailOverlayInteractions() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const overlays = document.querySelectorAll('.thumbnail-overlay');
  
  overlays.forEach(overlay => {
    const card = overlay.closest('.project-card');
    
    card.addEventListener('mouseenter', () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        overlay.style.opacity = '1';
        overlay.style.transform = 'translateY(0)';
      } else {
        // Stagger animation for overlay content
        const content = overlay.querySelector('.overlay-content');
        const elements = content.children;
        
        elements.forEach((element, index) => {
          element.style.opacity = '0';
          element.style.transform = 'translateY(10px)';
          element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }, index * 100);
        });
      }
    });
    
    card.addEventListener('mouseleave', () => {
      const content = overlay.querySelector('.overlay-content');
      const elements = content.children;
      
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = '0';
          element.style.transform = 'translateY(10px)';
        }, index * 50);
      });
    });
  });
}

// Tech tag hover effects
export function techTagInteractions() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const techTags = document.querySelectorAll('.tech-tag');
  
  techTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      tag.style.background = 'rgba(224, 159, 62, 0.2)';
      tag.style.borderColor = '#E09F3E';
      tag.style.transform = 'scale(1.05)';
      tag.style.transition = 'all 0.2s ease';
    });
    
    tag.addEventListener('mouseleave', () => {
      tag.style.background = 'rgba(27, 38, 59, 0.8)';
      tag.style.borderColor = 'rgba(224, 159, 62, 0.3)';
      tag.style.transform = 'scale(1)';
    });
  });
}

// Status badge animations
export function statusBadgeAnimations() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

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

// View all projects button interactions
export function viewAllProjectsInteractions() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

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

// Project preview animations
export function projectPreviewAnimations() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Dashboard animations
  const chartBars = document.querySelectorAll('.chart-bar');
  chartBars.forEach((bar, index) => {
    bar.style.animationDelay = `${index * 0.2}s`;
  });
  
  const metricCards = document.querySelectorAll('.metric-card');
  metricCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.3}s`;
  });
  
  // Portfolio animations
  const heroTexts = document.querySelectorAll('.hero-text');
  heroTexts.forEach((text, index) => {
    text.style.animationDelay = `${index * 0.2}s`;
  });
  
  const projectTiles = document.querySelectorAll('.project-tile');
  projectTiles.forEach((tile, index) => {
    tile.style.animationDelay = `${index * 0.3}s`;
  });
  
  // Analytics animations
  const chartLines = document.querySelectorAll('.chart-line');
  chartLines.forEach((line, index) => {
    line.style.animationDelay = `${index * 0.4}s`;
  });
  
  const statItems = document.querySelectorAll('.stat-item');
  statItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.3}s`;
  });
}

// Performance optimization
export function optimizeProjectPerformance() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Throttle mousemove events
  let ticking = false;
  
  function updateCardTransform(card, x, y) {
    if (!ticking) {
      requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;
        
        const shadowX = (x - centerX) / 10;
        const shadowY = (y - centerY) / 10;
        
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03) translateY(-8px)`;
        card.style.boxShadow = `
          0 20px 40px rgba(0, 0, 0, 0.3),
          0 0 0 1px rgba(224, 159, 62, 0.2),
          0 0 20px rgba(224, 159, 62, 0.1),
          ${shadowX}px ${shadowY}px 30px rgba(224, 159, 62, 0.15)
        `;
        
        const shapes = card.querySelector('.layer-shapes');
        if (shapes) {
          shapes.style.transform = `translateX(${(x - centerX) / 40}px) translateY(${(y - centerY) / 40}px)`;
        }
        
        ticking = false;
      });
      ticking = true;
    }
  }
  
  // Apply throttled mousemove to cards
  const cards = document.querySelectorAll('.project-card');
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
export function initFeaturedProjectsAnimations() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  featuredProjectsAnimations();
  projectCardHoverEffects();
  projectCtaInteractions();
  thumbnailOverlayInteractions();
  techTagInteractions();
  statusBadgeAnimations();
  viewAllProjectsInteractions();
  projectPreviewAnimations();
  optimizeProjectPerformance();
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
  if (!document.querySelector('#featured-projects-ripple-css')) {
    const style = document.createElement('style');
    style.id = 'featured-projects-ripple-css';
    style.textContent = rippleCSS;
    document.head.appendChild(style);
  }
} 