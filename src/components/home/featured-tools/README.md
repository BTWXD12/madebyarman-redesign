# Featured Tools Showcase Component

A polished, interactive showcase for CodexArman's flagship tools with 3D effects, animations, and modern UI design.

## Features

### Visual Design
- **3D Card Effects**: Subtle tilt and perspective transforms on hover
- **Layered Backgrounds**: Multi-layer depth with floating shapes
- **Status Badges**: Color-coded badges (New, Beta, Free, Popular)
- **Visual Previews**: Animated mini-demos for each tool type
- **Responsive Grid**: Adapts from 4-column to single-column layout

### Interactive Elements
- **Mouse Parallax**: Cards respond to mouse movement with 3D rotation
- **Hover Effects**: Scale, tilt, and glow effects on interaction
- **Ripple Effects**: Material design-style ripple on button clicks
- **Keyboard Navigation**: Full accessibility support with focus states
- **Reduced Motion**: Respects user's motion preferences

### Tool Types & Visuals
1. **Form Generator**: Animated form fields with shimmer effects
2. **AI Summary Hub**: Text blocks → arrow → summary output flow
3. **Deploy Script Helper**: Terminal window with typing animations
4. **Code Snippet Manager**: Code editor with syntax highlighting preview

## Usage

```jsx
import FeaturedTools from '@/components/home/featured-tools/FeaturedTools';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Highlights />
      <FeaturedTools /> {/* Add this component */}
      <AboutSnapshot />
    </div>
  );
}
```

## Component Structure

```
featured-tools/
├── FeaturedTools.jsx          # Main component
├── featured-tools.css         # Styles with 3D effects
├── featured-tools.animations.js # Interactive behaviors
└── README.md                  # This documentation
```

## Customization

### Adding New Tools
Edit the `featuredTools` array in `FeaturedTools.jsx`:

```jsx
const featuredTools = [
  {
    id: 5,
    name: "New Tool Name",
    tagline: "Clear one-line description of the tool's value.",
    status: "New", // Options: "New", "Beta", "Free", "Popular"
    visualType: "form-generator", // Match existing visual types
    primaryCTA: "Try Now",
    secondaryCTA: "Source",
    secondaryLink: "https://github.com/codexarman/new-tool",
    demoLink: "/tools/new-tool"
  }
];
```

### Visual Types
- `form-generator`: Animated form fields
- `ai-summary`: Text processing flow
- `deploy-script`: Terminal window
- `code-snippet`: Code editor preview

### Status Badge Colors
- **New**: Gold (#E09F3E)
- **Beta**: Steel Blue (#415A77)
- **Free**: Green (#2E7D32)
- **Popular**: Red (#D32F2F)

## Accessibility Features

- **ARIA Labels**: Each card has descriptive aria-label
- **Keyboard Navigation**: Tab through cards and buttons
- **Focus Indicators**: Clear focus outlines in gold/steel blue
- **Reduced Motion**: Animations respect `prefers-reduced-motion`
- **Screen Reader Support**: Semantic HTML structure

## Performance Optimizations

- **Throttled Animations**: Mouse events are throttled for smooth performance
- **Intersection Observer**: Cards animate only when visible
- **CSS Transforms**: Hardware-accelerated animations
- **Lazy Loading**: Visuals load progressively

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **CSS Features**: Backdrop-filter, CSS Grid, CSS Transforms
- **JavaScript**: ES6+ features with fallbacks
- **Mobile**: Touch-friendly interactions

## Animation System

The component uses a layered animation system:

1. **Entrance Animations**: Staggered fade-in with upward motion
2. **Hover Effects**: 3D transforms with parallax
3. **Visual Previews**: Tool-specific micro-animations
4. **CTA Interactions**: Ripple effects and arrow animations
5. **Performance**: RequestAnimationFrame for smooth 60fps

## Color Scheme

- **Primary**: #E09F3E (Gold)
- **Background**: #0F1419 to #1B263B (Dark gradient)
- **Text**: #E0E1DD (Light)
- **Muted**: rgba(224, 225, 221, 0.7) (Secondary text)
- **Accent**: #415A77 (Steel blue for badges)

## Responsive Breakpoints

- **Desktop**: 4-column grid (1200px+)
- **Tablet**: 2-column grid (768px - 1024px)
- **Mobile**: Single column (480px - 768px)
- **Small Mobile**: Optimized spacing (under 480px)

## Integration Notes

- **Next.js App Router**: Uses "use client" directive
- **Tailwind CSS**: Compatible with existing styles
- **Font Loading**: Uses Inter font family
- **Icon System**: CSS-based visual previews (no external icons)

## Future Enhancements

- **Carousel Mode**: Horizontal scrolling for more tools
- **Filter System**: Category-based filtering
- **Search Integration**: Tool search functionality
- **Analytics**: Click tracking and engagement metrics
- **Dark/Light Themes**: Theme-aware styling 