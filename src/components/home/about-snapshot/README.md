# About Snapshot Component

A compact, high-impact preview section that introduces Arman and provides a clear path to the full About page.

## Features

### Content Elements
- **Headline**: "I'm Arman. Maker of Web & AI Tools."
- **Brief Intro**: 2-3 sentence summary of Arman's work and approach
- **Skill Tags**: 5 micro tags showing key competencies
- **3D Avatar**: Stylized visual representation with subtle animations
- **CTA Link**: "Read More" button linking to full About page

### Visual Design
- **3D Layered Background**: Subtle depth with floating shapes
- **Glass Effect**: Backdrop blur and transparency
- **Avatar Animation**: Gentle floating motion with code particles
- **Skill Tags**: Micro-3D appearance with hover effects
- **Responsive Layout**: Two-column desktop, stacked mobile

### Interactions
- **Entrance Animations**: Staggered reveal of content elements
- **Hover Effects**: Card elevation, avatar scaling, tag highlighting
- **Focus States**: Keyboard navigation support with visible indicators
- **Reduced Motion**: Respects user's motion preferences

## File Structure

```
about-snapshot/
├── AboutSnapshot.jsx          # Main component
├── about-snapshot.css         # Styles and animations
├── about-snapshot.animations.js # JavaScript animations
└── README.md                  # This documentation
```

## Usage

```jsx
import AboutSnapshot from '../components/home/about-snapshot/AboutSnapshot';

// In your page component
<AboutSnapshot />
```

## Accessibility

- **ARIA Labels**: Proper labeling for avatar and interactive elements
- **Keyboard Navigation**: Full keyboard support with focus indicators
- **Screen Reader Support**: Semantic HTML structure
- **Color Contrast**: Meets AA accessibility standards
- **Reduced Motion**: Disables animations for users who prefer reduced motion

## Responsive Behavior

### Desktop (1024px+)
- Two-column layout: text left, avatar right
- Full 3D effects and animations
- Larger typography and spacing

### Tablet (768px - 1023px)
- Maintains two-column layout with reduced spacing
- Slightly smaller avatar and typography
- Preserved animations with reduced intensity

### Mobile (480px - 767px)
- Single-column stacked layout
- Avatar on top, then text, tags, and CTA
- Reduced 3D effects for performance
- Smaller typography and compact spacing

### Small Mobile (<480px)
- Ultra-compact layout
- Minimal animations
- Optimized for touch interaction

## Customization

### Content
- Update headline in `AboutSnapshot.jsx` line 35
- Modify intro text in lines 37-40
- Adjust skill tags array in lines 18-24
- Change CTA link in line 52

### Styling
- Primary colors: `#E09F3E` (gold), `#1B263B` (dark blue)
- Typography: Inter font family
- Animations: CSS keyframes in `about-snapshot.css`
- 3D effects: Transform and perspective properties

### Animations
- Entrance timing: 0.8s with cubic-bezier easing
- Hover effects: 0.3s transitions
- Particle animations: 3s cycles with staggered delays
- Reduced motion support via CSS media queries

## Performance Considerations

- **Lightweight**: CSS-only animations, no heavy WebGL
- **Progressive Enhancement**: Animations disabled for reduced motion
- **Optimized Assets**: SVG-based avatar, minimal DOM manipulation
- **Lazy Loading**: Intersection Observer for entrance animations

## Browser Support

- **Modern Browsers**: Full support with all effects
- **Legacy Browsers**: Graceful degradation to static layout
- **Mobile Browsers**: Optimized for touch and performance
- **Screen Readers**: Full accessibility compliance 