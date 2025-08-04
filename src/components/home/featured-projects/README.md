# Featured Projects Component

A modern, interactive component for showcasing featured projects with 3D hover effects, smooth animations, and responsive design.

## Features

### 🎨 Visual Design
- **3D Card Effects**: Subtle tilt and rotation on hover with dynamic shadows
- **Interactive Thumbnails**: Animated project previews with different visual types
- **Hover Overlays**: Rich information overlay with tech stack and CTAs
- **Smooth Animations**: Staggered entrance animations and micro-interactions

### 📱 Responsive Layout
- **Desktop**: 3-column grid layout with large project cards
- **Tablet**: 2-column grid with optimized spacing
- **Mobile**: Single column with touch-friendly interactions

### ♿ Accessibility
- **Keyboard Navigation**: Full keyboard support with focus indicators
- **Screen Reader Support**: Proper ARIA labels and semantic structure
- **Reduced Motion**: Respects user's motion preferences
- **High Contrast**: Meets WCAG AA standards

### ⚡ Performance
- **Optimized Animations**: Uses transform/opacity for smooth 60fps
- **Throttled Events**: Prevents performance issues on mouse movement
- **Lazy Loading**: Ready for image lazy loading implementation
- **Progressive Enhancement**: Works without JavaScript

## Project Types

The component supports three visual preview types:

### 1. Dashboard (`dashboard`)
- Animated chart bars and metric cards
- Simulates a data dashboard interface
- Perfect for analytics or admin projects

### 2. Portfolio (`portfolio`)
- Hero section with text placeholders
- Project grid with animated tiles
- Ideal for portfolio or showcase sites

### 3. Analytics (`analytics`)
- Line chart animations
- Stats panel with glowing effects
- Great for data visualization projects

## Usage

```jsx
import FeaturedProjects from '@/components/home/featured-projects/FeaturedProjects';

export default function HomePage() {
  return (
    <div>
      <FeaturedProjects />
    </div>
  );
}
```

## Project Data Structure

Each project should follow this structure:

```javascript
{
  id: 1,
  name: "Project Name",
  description: "Brief description of the project and its purpose.",
  techStack: ["React", "Node.js", "PostgreSQL", "Tailwind"],
  thumbnail: "/path/to/thumbnail.jpg",
  demoLink: "https://demo-url.com",
  caseStudyLink: "/projects/project-slug",
  status: "Live", // "Live", "Featured", "Demo"
  visualType: "dashboard" // "dashboard", "portfolio", "analytics"
}
```

## Customization

### Colors
The component uses a consistent color palette:
- **Primary**: `#E09F3E` (Golden accent)
- **Background**: `#0D1B2A` to `#1B263B` (Deep navy gradient)
- **Text**: `#E0E1DD` (Light gray)
- **Muted**: `rgba(224, 225, 221, 0.8)` (Semi-transparent)

### Animations
All animations can be customized in `featured-projects.animations.js`:
- **Entrance**: Staggered fade-in from bottom
- **Hover**: 3D rotation with dynamic shadows
- **Overlay**: Smooth slide-up with content stagger
- **Micro-interactions**: Button hover effects and ripple animations

### Responsive Breakpoints
- **Desktop**: `> 1024px` - 3 columns
- **Tablet**: `768px - 1024px` - 2 columns
- **Mobile**: `< 768px` - 1 column

## File Structure

```
featured-projects/
├── FeaturedProjects.jsx          # Main component
├── featured-projects.css         # Styles and animations
├── featured-projects.animations.js # JavaScript interactions
└── README.md                     # This documentation
```

## Browser Support

- **Modern Browsers**: Full support with all animations
- **Older Browsers**: Graceful degradation without 3D effects
- **Mobile**: Touch-optimized interactions
- **Screen Readers**: Full accessibility support

## Performance Considerations

- **Animation Performance**: Uses `transform` and `opacity` for 60fps
- **Event Throttling**: Mouse events are throttled to prevent lag
- **Reduced Motion**: Automatically disables animations for users who prefer it
- **Memory Management**: Proper cleanup of event listeners

## Accessibility Features

- **Focus Management**: Clear focus indicators and keyboard navigation
- **ARIA Labels**: Descriptive labels for screen readers
- **Semantic HTML**: Proper heading hierarchy and button roles
- **Color Contrast**: Meets WCAG AA standards for text readability

## Future Enhancements

- **Image Lazy Loading**: Implement lazy loading for project thumbnails
- **Video Previews**: Support for video project previews
- **Filtering**: Add project filtering by technology or category
- **Search**: Implement project search functionality
- **Analytics**: Track project interaction metrics

## Dependencies

- **React**: Component framework
- **CSS**: Custom styles with modern features
- **JavaScript**: Vanilla JS for animations and interactions

No external dependencies required - built with modern web standards. 