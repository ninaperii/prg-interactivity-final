# Overview

Lumina is a modern, minimalist static website featuring elegant geometric design aesthetics with a pastel color palette. The project is built with pure HTML, CSS, and vanilla JavaScript, focusing on simplicity, accessibility, and responsive design without any frameworks or libraries. It showcases a professional landing page with hero section, about section, services grid, navigation, and interactive mobile menu functionality.

**Design Specifications:**
- Color palette: Pastel (lavender, mint green, soft pink)
- Overall style: Minimalist, elegant, modern
- Tone of voice: Professional
- Art direction: Geometric and futuristic
- Typography: Modern geometric fonts
- Spacing: Airy with lots of white space, balanced and modular
- Buttons: Subtle ghost buttons with smooth hover effects
- Imagery: Minimal custom SVG illustrations
- Motion: Smooth and subtle transitions
- Layout: Asymmetrical with visual interest

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Pure Static Website Approach**
- Uses semantic HTML5 for structure and accessibility
- Custom CSS with no frameworks (no Tailwind, Bootstrap, or other libraries)
- Vanilla JavaScript for interactive features
- Mobile-first responsive design pattern

**Rationale:** Minimizes dependencies, reduces bundle size, and provides complete control over styling and behavior. This approach ensures fast load times and easier maintenance for a simple landing page.

## Design System

**CSS Variables Architecture**
- Centralized design tokens in `:root` for colors, typography, and spacing
- Pastel color palette system with primary (#B4A7D6 lavender), secondary (#A8D5BA mint), tertiary (#F4C2C2 pink), and highlight (#DDB6C6 rose) variants
- Automatic dark mode support using `@media (prefers-color-scheme: dark)` with adjusted pastel colors for dark backgrounds
- Fluid typography using `clamp()` for responsive text scaling (--text-xs to --text-3xl)
- Modular spacing system using `clamp()` for consistent, responsive layout rhythm (--space-xs to --space-3xl)
- Modern CSS features: `aspect-ratio` for SVG elements, `lvh` (large viewport height) for mobile nav, smooth transitions

**Chosen Solution:** CSS custom properties provide a single source of truth for design values, making theme modifications and consistency management straightforward. The dual light/dark mode color schemes automatically adapt to user system preferences.

**Typography System**
- Fluid type scale from `--text-xs` to `--text-3xl` using `clamp()`
- System font stack with fallbacks (`SF Pro Display`, `-apple-system`, etc.)
- Geometric font family option for headings

**Rationale:** Fluid typography eliminates the need for multiple breakpoint-specific font sizes, creating smooth scaling across all viewport sizes.

## Component Structure

**Navigation System**
- Desktop (≥769px): Horizontal navigation bar with subtle underline hover effects
- Mobile (<769px): Hamburger menu with slide-in panel from right side
- Accessibility features: 
  - ARIA attributes (`aria-expanded`, `aria-controls`, `aria-label`)
  - Keyboard navigation support (Escape key to close)
  - Focus management: Menu hidden from tab order when closed (`visibility: hidden`)
  - Proper focus states with visible outlines

**Interactive Features:**
- Click-outside detection to close mobile menu
- Nav link click auto-closes mobile menu
- Keyboard accessibility (Escape key handling)
- Smooth transitions with transform and visibility for menu animation

**Hero Section**
- Container-based layout for content width control
- Gradient text highlighting for emphasis
- Call-to-action button placement

## Responsive Design Strategy

**Mobile-First Approach**
- Base styles target mobile devices
- Media queries progressively enhance for larger screens
- Fluid spacing and typography reduce breakpoint complexity

**Layout Techniques:**
- CSS Flexbox for header and navigation alignment
- CSS Grid for complex layouts (when needed)
- Logical properties (`margin-inline`, `padding-block`) for better internationalization support

## Accessibility Considerations

**Semantic HTML**
- Proper heading hierarchy
- Landmark regions (header, main, nav)
- ARIA attributes for interactive elements (`aria-expanded`, `aria-controls`, `aria-label`)

**Keyboard Navigation**
- Tab navigation support
- Escape key to close mobile menu
- Focus management on menu close

**Screen Reader Support**
- Descriptive ARIA labels
- Hidden decorative elements (`aria-hidden="true"`)

## Code Organization

**File Structure:**
- `index.html` - Semantic markup and content
- `styles.css` - Complete styling with organized sections (reset, variables, components)
- `script.js` - Interactive functionality for mobile navigation

**CSS Organization:**
- CSS Reset section
- CSS Variables (design tokens)
- Component-specific styles (presumably in continuation of styles.css)

**Pros:**
- Simple, easy to understand file structure
- No build process required
- Fast development iteration

**Cons:**
- Manual dependency management
- No code splitting or optimization tooling
- Scales poorly for larger applications

# External Dependencies

**None** - This is a completely self-contained static website with no external dependencies, APIs, databases, or third-party services. All code is custom-written HTML, CSS, and JavaScript without frameworks, libraries, or external resources.