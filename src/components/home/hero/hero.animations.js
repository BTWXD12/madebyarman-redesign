// Hero Section Animations

// Main fade-in animation for text elements with staggered delays
export function heroFadeIn() {
  const elements = [
    { selector: '.intro-text', delay: 200 },
    { selector: '.hero-headline', delay: 400 },
    { selector: '.hero-subheadline', delay: 600 },
    { selector: '.hero-cta', delay: 800 }
  ];

  elements.forEach(({ selector, delay }) => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        element.style.transition = 'all 0.8s ease-out';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, delay);
    }
  });

  // Visual element animation
  const visual = document.querySelector('.hero-visual');
  if (visual) {
    visual.style.opacity = '0';
    visual.style.transform = 'translateX(30px)';
    
    setTimeout(() => {
      visual.style.transition = 'all 1s ease-out';
      visual.style.opacity = '1';
      visual.style.transform = 'translateX(0)';
    }, 1000);
  }
}

// Button hover effects and interactions
export function buttonHoverEffects() {
  const primaryBtn = document.querySelector('.cta-primary');
  const secondaryBtn = document.querySelector('.cta-secondary');

  if (primaryBtn) {
    primaryBtn.addEventListener('mouseenter', () => {
      primaryBtn.style.transform = 'translateY(-2px) scale(1.02)';
      primaryBtn.style.boxShadow = '0 8px 25px rgba(224, 159, 62, 0.5)';
    });

    primaryBtn.addEventListener('mouseleave', () => {
      primaryBtn.style.transform = 'translateY(0) scale(1)';
      primaryBtn.style.boxShadow = '0 4px 15px rgba(224, 159, 62, 0.3)';
    });

    primaryBtn.addEventListener('click', () => {
      // Add click animation
      primaryBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        primaryBtn.style.transform = 'scale(1)';
      }, 150);
    });
  }

  if (secondaryBtn) {
    secondaryBtn.addEventListener('mouseenter', () => {
      secondaryBtn.style.transform = 'translateY(-2px) scale(1.02)';
      secondaryBtn.style.boxShadow = '0 8px 25px rgba(224, 159, 62, 0.3)';
    });

    secondaryBtn.addEventListener('mouseleave', () => {
      secondaryBtn.style.transform = 'translateY(0) scale(1)';
      secondaryBtn.style.boxShadow = 'none';
    });

    secondaryBtn.addEventListener('click', () => {
      // Add click animation
      secondaryBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        secondaryBtn.style.transform = 'scale(1)';
      }, 150);
    });
  }
}

// Background parallax effect
export function backgroundParallax() {
  const heroSection = document.querySelector('.hero-section');
  const gridOverlay = document.querySelector('.hero-grid-overlay');

  if (heroSection && gridOverlay) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      gridOverlay.style.transform = `translateY(${rate}px)`;
    });
  }
}

// Particle animation for the tech illustration
export function animateParticles() {
  const particles = document.querySelector('.code-particles');
  
  if (particles) {
    // Create floating particles effect
    setInterval(() => {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      
      particles.style.backgroundPosition = `${randomX}% ${randomY}%`;
    }, 3000);
  }
}

// AI elements rotation animation
export function animateAIElements() {
  const aiElements = document.querySelector('.ai-elements');
  
  if (aiElements) {
    let rotation = 0;
    setInterval(() => {
      rotation += 1;
      aiElements.style.transform = `rotate(${rotation}deg)`;
    }, 50);
  }
}

// Web components pulse animation
export function animateWebComponents() {
  const webComponents = document.querySelector('.web-components');
  
  if (webComponents) {
    let scale = 1;
    let growing = true;
    
    setInterval(() => {
      if (growing) {
        scale += 0.01;
        if (scale >= 1.05) growing = false;
      } else {
        scale -= 0.01;
        if (scale <= 1) growing = true;
      }
      
      webComponents.style.transform = `scale(${scale})`;
    }, 100);
  }
}

// Initialize all animations when component mounts
export function initializeHeroAnimations() {
  heroFadeIn();
  buttonHoverEffects();
  backgroundParallax();
  animateParticles();
  animateAIElements();
  animateWebComponents();
} 