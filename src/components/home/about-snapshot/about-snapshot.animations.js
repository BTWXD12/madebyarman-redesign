// About Snapshot Animations

export function aboutSnapshotAnimations() {
  // Entrance animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Animate text content
        const textColumn = entry.target.querySelector('.snapshot-text-column');
        if (textColumn) {
          textColumn.style.opacity = '0';
          textColumn.style.transform = 'translateX(-30px)';
          
          setTimeout(() => {
            textColumn.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            textColumn.style.opacity = '1';
            textColumn.style.transform = 'translateX(0)';
          }, 200);
        }

        // Animate avatar
        const avatarContainer = entry.target.querySelector('.avatar-container');
        if (avatarContainer) {
          avatarContainer.style.opacity = '0';
          avatarContainer.style.transform = 'translateX(30px) scale(0.8)';
          
          setTimeout(() => {
            avatarContainer.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            avatarContainer.style.opacity = '1';
            avatarContainer.style.transform = 'translateX(0) scale(1)';
          }, 400);
        }

        // Animate skill tags with stagger
        const skillTags = entry.target.querySelectorAll('.skill-tag');
        skillTags.forEach((tag, index) => {
          setTimeout(() => {
            tag.style.animation = 'tagAppear 0.6s ease-out forwards';
          }, 600 + (index * 100));
        });

        // Animate CTA
        const cta = entry.target.querySelector('.snapshot-cta');
        if (cta) {
          cta.style.opacity = '0';
          cta.style.transform = 'translateY(20px)';
          
          setTimeout(() => {
            cta.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            cta.style.opacity = '1';
            cta.style.transform = 'translateY(0)';
          }, 1000);
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe the snapshot card
  const snapshotCard = document.querySelector('.about-snapshot-card');
  if (snapshotCard) {
    observer.observe(snapshotCard);
  }

  // Hover effects for skill tags
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      tag.style.transform = 'translateY(-2px) scale(1.05)';
      tag.style.boxShadow = '0 8px 20px rgba(224, 159, 62, 0.3)';
    });

    tag.addEventListener('mouseleave', () => {
      tag.style.transform = 'translateY(0) scale(1)';
      tag.style.boxShadow = 'none';
    });
  });

  // Avatar hover effects
  const avatarContainer = document.querySelector('.avatar-container');
  if (avatarContainer) {
    avatarContainer.addEventListener('mouseenter', () => {
      const avatar3d = avatarContainer.querySelector('.avatar-3d');
      const glow = avatarContainer.querySelector('.avatar-glow');
      
      if (avatar3d) {
        avatar3d.style.transform = 'scale(1.1) rotateY(10deg)';
        avatar3d.style.transition = 'all 0.3s ease';
      }
      
      if (glow) {
        glow.style.opacity = '0.8';
        glow.style.transform = 'translate(-50%, -50%) scale(1.2)';
        glow.style.transition = 'all 0.3s ease';
      }
    });

    avatarContainer.addEventListener('mouseleave', () => {
      const avatar3d = avatarContainer.querySelector('.avatar-3d');
      const glow = avatarContainer.querySelector('.avatar-glow');
      
      if (avatar3d) {
        avatar3d.style.transform = 'scale(1) rotateY(0deg)';
      }
      
      if (glow) {
        glow.style.opacity = '0.3';
        glow.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    });
  }

  // Card hover effects
  const cardElement = document.querySelector('.about-snapshot-card');
  if (cardElement) {
    cardElement.addEventListener('mouseenter', () => {
      const shapes = cardElement.querySelectorAll('.shape-1, .shape-2, .shape-3');
      shapes.forEach((shape, index) => {
        setTimeout(() => {
          shape.style.transform = 'scale(1.2)';
          shape.style.opacity = '0.6';
          shape.style.transition = 'all 0.3s ease';
        }, index * 100);
      });
    });

    cardElement.addEventListener('mouseleave', () => {
      const shapes = cardElement.querySelectorAll('.shape-1, .shape-2, .shape-3');
      shapes.forEach(shape => {
        shape.style.transform = 'scale(1)';
        shape.style.opacity = '0.3';
      });
    });
  }

  // CTA hover effects
  const cta = document.querySelector('.snapshot-cta');
  if (cta) {
    cta.addEventListener('mouseenter', () => {
      const arrow = cta.querySelector('.cta-arrow');
      if (arrow) {
        arrow.style.transform = 'translateX(6px)';
        arrow.style.transition = 'transform 0.3s ease';
      }
    });

    cta.addEventListener('mouseleave', () => {
      const arrow = cta.querySelector('.cta-arrow');
      if (arrow) {
        arrow.style.transform = 'translateX(0)';
      }
    });
  }

  // Particle interaction effects
  const particles = document.querySelectorAll('.particle');
  particles.forEach((particle, index) => {
    particle.addEventListener('mouseenter', () => {
      particle.style.transform = 'scale(1.5)';
      particle.style.opacity = '1';
      particle.style.transition = 'all 0.2s ease';
    });

    particle.addEventListener('mouseleave', () => {
      particle.style.transform = 'scale(1)';
      particle.style.opacity = '0.6';
    });
  });

  // Keyboard navigation support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusedElement = document.activeElement;
      if (focusedElement && focusedElement.classList.contains('skill-tag')) {
        focusedElement.style.outline = '2px solid #E09F3E';
        focusedElement.style.outlineOffset = '2px';
      }
    }
  });

  // Focus management
  const focusableElements = document.querySelectorAll('.snapshot-cta, .skill-tag');
  focusableElements.forEach(element => {
    element.addEventListener('focus', () => {
      element.style.outline = '2px solid #E09F3E';
      element.style.outlineOffset = '2px';
    });

    element.addEventListener('blur', () => {
      element.style.outline = 'none';
    });
  });
}

// Utility function for smooth scrolling to about page
export function scrollToAbout() {
  const aboutLink = document.querySelector('.snapshot-cta');
  if (aboutLink) {
    aboutLink.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Add smooth scroll effect
      const targetId = aboutLink.getAttribute('href');
      if (targetId === '/about') {
        // For now, just log the click - you can implement actual navigation later
        console.log('Navigate to About page');
        
        // Add a subtle animation to the link
        aboutLink.style.transform = 'scale(0.95)';
        setTimeout(() => {
          aboutLink.style.transform = 'scale(1)';
        }, 150);
      }
    });
  }
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  aboutSnapshotAnimations();
  scrollToAbout();
}); 