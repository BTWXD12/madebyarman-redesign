// Testimonials Animations

export function testimonialsAnimations() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const cards = document.querySelectorAll('.testimonial-glass');
  
  // Intersection Observer for entrance animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Fade in animation for the section
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Initialize section with entrance state
  const section = document.querySelector('.testimonials-section');
  if (section) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
  }

  // Initialize cards with entrance state
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.9)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    // Stagger entrance animation
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0) scale(1)';
    }, 200 + (index * 150));
  });
}

// Glass card hover effects
export function cardHoverEffects() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const cards = document.querySelectorAll('.testimonial-glass');
  
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
      
      const rotateX = (y - centerY) / 40;
      const rotateY = (centerX - x) / 40;
      
      // Apply subtle parallax to decorative elements
      const decoration = card.querySelector('.glass-decoration');
      if (decoration) {
        decoration.style.transform = `translateX(${(x - centerX) / 60}px) translateY(${(y - centerY) / 60}px)`;
      }
      
      // Apply rotation to card
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    // Reset on mouse leave
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      const decoration = card.querySelector('.glass-decoration');
      if (decoration) {
        decoration.style.transform = 'translateX(0px) translateY(0px)';
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

// Micro-interactions for CTA link
export function ctaInteractions() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const ctaLink = document.querySelector('.see-all-link');
  
  if (ctaLink) {
    ctaLink.addEventListener('mouseenter', () => {
      const arrow = ctaLink.querySelector('.link-arrow');
      if (arrow) {
        arrow.style.transform = 'translateX(6px)';
      }
    });
    
    ctaLink.addEventListener('mouseleave', () => {
      const arrow = ctaLink.querySelector('.link-arrow');
      if (arrow) {
        arrow.style.transform = 'translateX(0)';
      }
    });
    
    // Keyboard navigation
    ctaLink.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        ctaLink.click();
      }
    });
  }
}

// Performance optimization
export function optimizePerformance() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Throttle mousemove events
  let ticking = false;
  
  function updateCardTransform(card, x, y) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    
    const rect = card.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 40;
    const rotateY = (centerX - x) / 40;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }
  
  // Use requestAnimationFrame for smooth animations
  function handleMouseMove(e) {
    if (!ticking) {
      requestAnimationFrame(() => {
        const card = e.target.closest('.testimonial-glass');
        if (card) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          updateCardTransform(card, x, y);
        }
        ticking = false;
      });
      ticking = true;
    }
  }
  
  // Add optimized mousemove listeners
  const cards = document.querySelectorAll('.testimonial-glass');
  cards.forEach(card => {
    card.addEventListener('mousemove', handleMouseMove);
  });
}

// Initialize all animations
export function initTestimonialsAnimations() {
  // Check if we're on the client side
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  testimonialsAnimations();
  cardHoverEffects();
  ctaInteractions();
  optimizePerformance();
  
  // Cleanup function
  return () => {
    const cards = document.querySelectorAll('.testimonial-glass');
    cards.forEach(card => {
      card.removeEventListener('mousemove', () => {});
      card.removeEventListener('mouseleave', () => {});
      card.removeEventListener('keydown', () => {});
      card.removeEventListener('focus', () => {});
      card.removeEventListener('blur', () => {});
    });
  };
} 