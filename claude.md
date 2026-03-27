# Wireframe Website Projects

This repository contains clickable HTML/CSS wireframe prototypes for nonprofit website projects. These are client presentation tools—not production websites.

## Purpose

Wireframes allow clients to review and approve website content in context before moving into design. They can click through pages, read copy, and understand site structure without getting distracted by colors, fonts, or visual design decisions.

## Technical Approach

### Stack
- Plain HTML/CSS only (no frameworks, no JavaScript unless absolutely necessary)
- System fonts only (`system-ui, -apple-system, sans-serif`)
- Shared stylesheet per project

### Styling
Grayscale/minimal styling that communicates hierarchy without design:
- **Background:** #FFFFFF (white)
- **Alternate sections:** #F5F5F5 (light gray)
- **Image placeholders:** #D0D0D0 (medium gray)
- **Body text:** #333333 (dark gray)
- **Headlines:** #000000 (black)
- **Links/buttons:** #2563EB (blue)

### Structure
Each project lives in its own folder with:
```
/project-name/
  /index.html (homepage)
  /page-name.html (top-level pages)
  /section/page-name.html (nested pages)
  /css/styles.css (shared stylesheet)
  /content.md (source content document)
```

### Navigation
- All links between pages must work
- Use defined nav structure from content document
- Simple dropdowns on hover (CSS-only preferred)
- Mobile: basic hamburger menu or stacked nav

### Responsive
- Doesn't need to be perfect—just not broken
- Single column on mobile
- Basic media query at 768px

## Building a New Wireframe

1. Create project folder
2. Add content document as `content.md`
3. Build `styles.css` first with shared components
4. Build pages following content document exactly
5. Connect all navigation links
6. Test all links work

## Content Document Format

Content documents follow this structure for each page:
- Page title
- Hero section (headline + supporting sentence)
- Body sections (headline + supporting sentence + body copy)
- Calls to action (headline + buttons)
- Design notes in brackets when relevant

Follow the content exactly. Do not add, remove, or rewrite copy.

## Image Placeholders

Use gray boxes with centered text labels:
```html
<div class="placeholder-image">[Photo]</div>
<div class="placeholder-image">[Image]</div>
<div class="placeholder-image">[Headshot]</div>
```

## Deliverable

A folder that can be:
- Opened locally in a browser
- Deployed to Netlify/Vercel via drag-and-drop
- Shared with clients for review and feedback
