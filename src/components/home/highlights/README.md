# Quick Highlights Component

## Overview
The Quick Highlights section displays 3-5 core offerings or strengths in bite-sized cards with 3D effects, animations, and micro-interactions. It's designed to provide fast, scannable signals of core capabilities and drive user engagement.

## Features

### Visual Design
- **3D Depth**: Each card has layered pseudo-3D effects with perspective tilt on hover
- **Subtle Lighting**: Simulated soft top-left lighting with highlights and shadows
- **Glass Morphism**: Semi-transparent backgrounds with backdrop blur
- **Responsive Grid**: Adapts from 4 columns (desktop) to 1 column (mobile)

### Animations
- **Entrance**: Stagger-fade in from below when scrolled into view
- **Hover Effects**: Scale-up, perspective tilt, and accent rim glow
- **Mouse Parallax**: Subtle card depth shifts based on cursor position
- **Icon Animations**: Each icon has unique micro-animations
- **CTA Interactions**: Arrow movement and ripple effects

### Accessibility
- **Keyboard Navigation**: Full keyboard support with focus indicators
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **ARIA Labels**: Proper labeling for screen readers
- **High Contrast**: Meets AA accessibility standards

## Component Structure

```
src/components/home/highlights/
├── Highlights.jsx          # Main component
├── highlights.css          # Styles with 3D effects
├── highlights.animations.js # JavaScript animations
└── README.md              # This documentation
```

## Usage

```jsx
import Highlights from '../components/home/highlights/Highlights';

export default function Page() {
  return (
    <main>
      <Hero />
      <Highlights />
    </main>
  );
}
```

## Card Content

The component includes 4 highlight cards:

1. **Web Development**
   - Description: "Modern, responsive websites that convert visitors into customers with lightning-fast performance."
   - Icon: 3D browser window with animated code snippets
   - CTA: "See Examples"

2. **AI Tools**
   - Description: "Custom AI utilities that speed workflows and surface insights without manual overhead."
   - Icon: Animated sphere with connecting nodes
   - CTA: "Explore Tools"

3. **Automation**
   - Description: "Streamline repetitive tasks with intelligent automation that scales with your business."
   - Icon: Rotating gears with pipeline segments
   - CTA: "Learn More"

4. **Custom Solutions**
   - Description: "Tailored integrations and systems that solve your unique business challenges."
   - Icon: Assembling puzzle pieces
   - CTA: "Get Started"

## Technical Implementation

### 3D Effects
- Uses CSS `transform-style: preserve-3d` and `perspective`
- Layered backgrounds with floating shapes
- Subtle gradients for depth perception

### Performance
- Throttled mousemove events with `requestAnimationFrame`
- Optimized animations with hardware acceleration
- Reduced motion support for accessibility

### Responsive Design
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column
- Reduced 3D effects on small screens

## Customization

### Colors
- Primary: `#E09F3E` (accent gold)
- Background: `#0F1419` to `#1B263B` (dark gradient)
- Text: `#E0E1DD` (light gray)
- Secondary: `#415A77` (muted blue)

### Adding New Cards
1. Add new highlight object to the `highlights` array
2. Create corresponding icon component
3. Add CSS animations for the new icon
4. Update navigation logic in `ctaInteractions()`

### Modifying Animations
- Edit `highlights.animations.js` for JavaScript-based effects
- Modify CSS keyframes in `highlights.css` for CSS animations
- Adjust timing and easing functions as needed

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Graceful degradation for older browsers
- Progressive enhancement for advanced features

## Performance Notes
- Uses CSS transforms for smooth animations
- Implements intersection observer for scroll-based animations
- Throttles mouse events to prevent performance issues
- Supports `prefers-reduced-motion` for accessibility 