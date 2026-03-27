# Wireframe Website Projects

This repository contains clickable HTML/CSS wireframe prototypes for nonprofit website projects. These are client presentation tools—not production websites.

## Purpose

Wireframes allow clients to review and approve website content in context before moving into design. They can click through pages, read copy, and understand site structure without getting distracted by colors, fonts, or visual design decisions.

## Strategic Notes & Design Decisions

Content documents include "Strategic Note" sections that explain key decisions—why we structured something a certain way, what problem it solves, or recommendations for the client.

**These should be visually distinct from page content.** Display them as:

### Option A: Inline Callout Boxes
- Light blue background (#EBF5FF) with blue left border (#2563EB)
- Small "💡 Strategic Note" or "🎯 Design Decision" label
- Slightly smaller text than body copy
- Clearly separate from the actual page content

### Option B: Toggleable Insights
- Small icon or button in the corner of relevant sections
- Clicking reveals a popover/tooltip with the strategic note
- Allows client to view the wireframe "clean" or with insights visible
- Include a global toggle: "Show/Hide Strategic Notes"

### Option C: Sidebar Notes
- Strategic notes appear in a right sidebar alongside the relevant section
- Similar to comments in Google Docs
- Keeps page content clean while notes remain visible

**Recommended approach:** Option A (inline callouts) for simplicity, with a toggle at the top of each page to show/hide all notes. This lets clients review content both ways—with context, and as users would see it.

### Styling for Strategic Notes
```css
.strategic-note {
  background: #EBF5FF;
  border-left: 4px solid #2563EB;
  padding: 16px 20px;
  margin: 24px 0;
  font-size: 14px;
  line-height: 1.5;
}

.strategic-note-label {
  font-weight: bold;
  color: #2563EB;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}
```

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
[Photo]
[Image]
[Headshot]
```

## Deliverable

A folder that can be:
- Opened locally in a browser
- Deployed to Netlify/Vercel via drag-and-drop
- Shared with clients for review and feedback