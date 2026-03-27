# Prompt for Claude Code

Build a clickable HTML/CSS wireframe website for Capital City Rescue Mission using the attached content document.

## What I Need

A multi-page wireframe prototype that:
- Includes all 20 pages from the content document
- Has working navigation between pages
- Uses grayscale/minimal styling (no real design—just structure and hierarchy)
- Shows placeholder boxes for images
- Is easy to click through and review content in context

## Purpose

This is a client presentation tool. The client will click through the wireframe to review and approve website content before we move into design. They need to see the content in context without getting distracted by colors, fonts, or visual design.

## Technical Requirements

- Plain HTML/CSS (no frameworks needed)
- System fonts only
- Grayscale color palette: white background, light gray (#F5F5F5) for alternate sections, medium gray (#D0D0D0) for image placeholders, dark gray (#333) for body text, black for headlines
- One accent color for links/buttons: blue (#2563EB)
- Working links between all pages
- Simple responsive behavior (doesn't need to be perfect, just not broken on mobile)

## File Structure

```
/index.html (homepage)
/about.html
/programs.html
/get-help.html
/get-involved.html
/give.html
/stories.html
/contact.html
/faq.html
/leadership.html
/programs/meals.html
/programs/shelter.html
/programs/clothing.html
/programs/medical-clinic.html
/programs/learning-center.html
/programs/new-life.html
/programs/new-faith.html
/programs/transitional-living.html
/programs/celebrate-recovery.html
/programs/chapel.html
/css/styles.css (shared stylesheet)
```

## Navigation

Use the navigation structure from the content document:

**Primary Nav (Left):**
- About (dropdown: Our Story, Leadership, Financials, Stories, Contact)
- Programs (dropdown: Emergency Services, Recovery Programs, Medical Clinic, Learning Center)
- Get Involved (dropdown: Volunteer, Events, Pray, Careers)

**Utility Nav (Right):**
- Get Help (no dropdown)
- Give (button style)

## Content

All page content is provided in the attached document. Follow the section structure exactly as written, including headlines, body copy, and calls to action.

## Deliverable

A folder of HTML files I can open locally in a browser or deploy to Netlify/Vercel for client review.