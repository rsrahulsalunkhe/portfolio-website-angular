# Portfolio Website - Design Implementation

This portfolio website has been designed with a modern, professional look following best practices for personal portfolio sites.

## Design Features

### Color Scheme
- **Primary Color**: `#5e3bee` (Purple) - Used for accents and highlights
- **Accent Orange**: `#fd6f00` - Used for CTAs and important elements
- **Accent Green**: `#00c896` - Used for success states
- **Dark Background**: `#1e1e1e` - Used for footer and dark sections
- **Light Background**: `#ffffff` - Main background color
- **Gray Tones**: Various shades for text and backgrounds

### Typography
- **Headings**: Poppins (Google Font) - Bold, modern, professional
- **Body Text**: Inter (Google Font) - Clean, readable, web-optimized
- Responsive font sizes using `clamp()` for perfect scaling

### Sections

1. **Hero Section**
   - Two-column layout (text + image)
   - Strong headline with highlighted text
   - Two CTA buttons (primary + outline)
   - Responsive grid layout

2. **Skills Section**
   - 4-column grid showing expertise areas
   - Icon-based cards with hover effects
   - Custom SVG icons for each skill

3. **About Section**
   - Two-column layout (image + text)
   - Professional image display
   - Bio with multiple paragraphs

4. **Projects Section**
   - 3-column responsive grid
   - Image overlay on hover
   - Project category tags
   - Call-to-action links

5. **Testimonials Section**
   - 3-column responsive grid
   - Star ratings
   - Client photos and names
   - Company affiliations

6. **Contact Section**
   - Professional contact form
   - Two-column form layout
   - Radio buttons for topic selection
   - Checkbox for terms acceptance
   - Full-width submit button

### Components

#### Header
- Sticky navigation
- Logo with highlighted dot
- Horizontal navigation menu
- Mobile hamburger menu
- Orange "Contact Me" button

#### Footer
- Dark background
- Three-column layout
- Brand section
- Navigation links
- Social media icons
- Copyright information

## Adding Images

To complete the portfolio, add the following images to `public/assets/images/`:

### Required Images:
1. **hero-image.jpg** (400x400px minimum) - Your professional headshot
2. **about-me.jpg** (600x600px minimum) - Another professional photo
3. **project-1.jpg** (800x500px) - First project screenshot
4. **project-2.jpg** (800x500px) - Second project screenshot
5. **project-3.jpg** (800x500px) - Third project screenshot
6. **client-1.jpg** (120x120px) - First client photo
7. **client-2.jpg** (120x120px) - Second client photo
8. **client-3.jpg** (120x120px) - Third client photo

### Image Guidelines:
- Use high-quality images (minimum 2x resolution for retina displays)
- Optimize images for web (use tools like TinyPNG or ImageOptim)
- Prefer JPG for photos, PNG for graphics with transparency
- Keep file sizes under 500KB for better loading performance

## Customization

### Update Personal Information:
1. Replace "John.Doe" in header and footer with your name
2. Update the hero title and description
3. Modify skill cards with your actual skills
4. Update about section text with your bio
5. Replace project information with your actual projects
6. Update testimonials with real client feedback
7. Connect social media links to your profiles

### Color Customization:
All colors are defined as CSS variables in `src/styles.scss`. Update the `:root` section:

```scss
:root {
  --primary-color: #5e3bee;
  --accent-orange: #fd6f00;
  --accent-green: #00c896;
  // ... etc
}
```

## Mobile Responsive

The design is fully responsive with breakpoints at:
- **Mobile**: < 768px
- **Tablet**: 769px - 1024px
- **Desktop**: > 1025px

All sections adapt beautifully to different screen sizes.

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Tech Stack

- Angular 19 (Standalone Components)
- SCSS for styling
- Google Fonts (Poppins & Inter)
- Responsive Grid & Flexbox layouts
- CSS Variables for theming

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

**Note**: This is a template design. Customize all content, images, and links to match your personal brand and portfolio needs.
