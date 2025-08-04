# Testimonials Component

## Overview
The Testimonials section displays 1-2 credible client testimonials in a carousel format with 3D effects, smooth animations, and auto-rotation. It's designed to provide social proof and build trust while maintaining the dark tech aesthetic of the CodexArman homepage.

## Features

### Visual Design
- **3D Depth**: Each testimonial card has layered 3D effects with perspective tilt on hover
- **Glass Morphism**: Semi-transparent backgrounds with backdrop blur
- **Quote Icon**: Subtle gold quote mark as background element
- **Responsive Carousel**: Adapts from desktop to mobile with touch/swipe support
- **Auto-rotation**: Smooth transitions between testimonials every 6 seconds

### Animations
- **Entrance**: Fade in with slight upward slide when scrolled into view
- **Hover Effects**: Scale-up, perspective tilt, and accent rim glow
- **Mouse Parallax**: Subtle card depth shifts based on cursor position
- **Carousel Transitions**: Smooth fade between testimonials
- **CTA Interactions**: Arrow movement and underline grow effects

### Accessibility
- **Keyboard Navigation**: Full keyboard support with focus indicators
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **ARIA Labels**: Proper labeling for screen readers
- **High Contrast**: Meets AA accessibility standards
- **Focus Management**: Clear focus states for all interactive elements

## Component Structure

```
src/components/home/testimonials/
├── Testimonials.jsx          # Main component
├── testimonials.css          # Styles with 3D effects
├── testimonials.animations.js # JavaScript animations
└── README.md                # This documentation
```

## Usage

```jsx
import Testimonials from '../components/home/testimonials/Testimonials';

export default function Page() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Testimonials />
    </main>
  );
}
```

## Testimonial Content

The component includes 2 testimonial cards:

1. **Sarah Thompson - TechFlow**
   - Quote: "Arman delivered our project ahead of schedule with exceptional attention to detail. His AI integrations have transformed our workflow and saved us countless hours."
   - Role: Product Manager
   - Tag: "Verified Client"

2. **Marcus Chen - InnovateLab**
   - Quote: "Working with Arman was a game-changer for our startup. His custom automation solutions scaled perfectly with our growth and his technical expertise is unmatched."
   - Role: CTO
   - Tag: "Repeat Customer"

## Technical Implementation

### 3D Effects
- Uses CSS `transform-style: preserve-3d` and `perspective`
- Layered backgrounds with floating quote icons
- Subtle gradients for depth perception

### Carousel Functionality
- Auto-rotation every 6 seconds
- Pauses on user interaction (hover, focus, click)
- Smooth transitions with CSS transforms
- Touch/swipe support for mobile

### Performance
- Throttled mousemove events with `requestAnimationFrame`
- Optimized animations with hardware acceleration
- Reduced motion support for accessibility
- Lazy loading for profile images

### Responsive Design
- Desktop: Full carousel with controls
- Tablet: Reduced 3D effects
- Mobile: Single stacked layout
- Touch-friendly controls

## Customization

### Colors
- Primary: `#E09F3E` (accent gold)
- Background: `#0F1419` to `#1B263B` (dark gradient)
- Text: `#E0E1DD` (light gray)
- Secondary: `#415A77` (muted blue)

### Adding New Testimonials
1. Add new testimonial object to the `testimonials` array
2. Include author details (name, role, company, avatar)
3. Add credibility tag if applicable
4. Update carousel indicators automatically

### Modifying Animations
- Edit `testimonials.animations.js` for JavaScript-based effects
- Modify CSS keyframes in `testimonials.css` for CSS animations
- Adjust auto-rotation timing in `carouselControls()`

## Content Guidelines

### Quote Text
- Keep between 20-40 words
- Focus on results, quality, or professionalism
- Use authentic, specific language
- Avoid generic praise

### Author Details
- Include full name for credibility
- Add role and company for context
- Use high-quality profile photos (80px recommended)
- Include fallback initials for missing images

### Credibility Tags
- "Verified Client" for confirmed testimonials
- "Repeat Customer" for returning clients
- "Partner" for business partnerships
- Keep tags concise and meaningful

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Graceful degradation for older browsers
- Progressive enhancement for advanced features
- Touch support for mobile devices

## Performance Notes
- Uses CSS transforms for smooth animations
- Implements intersection observer for scroll-based animations
- Throttles mouse events to prevent performance issues
- Supports `prefers-reduced-motion` for accessibility
- Optimized image loading with lazy loading

## Accessibility Features
- Proper semantic HTML with `<blockquote>` and `<cite>`
- ARIA labels for carousel controls
- Focus management for keyboard navigation
- Screen reader friendly content structure
- High contrast ratios for text readability 