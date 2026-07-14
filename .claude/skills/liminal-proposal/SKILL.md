---
name: liminal-proposal
description: Create or revise a client-facing three-tier pricing proposal page in Liminal's house style, deployable to share.meetliminal.com. Use when building or revising a proposal for a prospect.
---

# Liminal Three-Tier Proposal

## What this produces

A single-page proposal — `index.html` + `css/styles.css` + `assets/` — in Liminal's proposal format: black hero with the Liminal logo, "Three paths forward" intro, three pricing cards, confidentiality footer. Live example: https://share.meetliminal.com/mosaic/

Use the files in this skill's `template/` folder as the starting point. Do not restyle — the CSS is the house style.

## Inputs to gather first

Before writing anything, get these from the user (or from discovery notes / call transcripts they provide):

1. **Client/org name** (and the folder slug, e.g. `mosaic`)
2. **Budget signal** — a stated ceiling, a range, or "no number yet"
3. **Must-have features** — the specific things the client said they need (in their words)
4. **Scope notes** — rough page count, messaging needs, whether their visual identity is current
5. **Long-term opportunity** — retainer potential, deferred items that could become a phase two

If a budget ceiling is unknown, ask the user before pricing tiers.

## Tier structure ("duct tape / do it right / go for broke")

Always three tiers on one page:

- **Tier 1 (`starter` card):** the minimum credible version. Price at or just under the client's stated ceiling. Typical scope: reimagined homepage + key subpages + templates, flexible page builder, lightweight messaging revisions, basic training. Deliberately leave out the features the client named as must-haves — tier 1 exists to make tier 2 the obvious choice.
- **Tier 2 (`featured` card, with badge):** the recommended option, designed to close. Include every must-have the client named. Price roughly 10–25% above the stated ceiling — a reachable stretch, not a shock.
- **Tier 3 (`premium` card):** the full-partnership option — full organizational messaging strategy, fully custom pages, retainer-style extras (graphic design capacity, annual report, integrations). It anchors tier 2 as reasonable.

Liminal website projects typically run $15,000–$80,000.

Each card contains, in order: name (`h3`), price, a **"Choose if..."** paragraph, then **Deliverables** in labeled groups: `Messaging`, `Website Scope`, `Website Editing`, `Additional Features` (bulleted list).

## Voice

- Plain, warm, confident. No agency jargon.
- "Choose if..." speaks to the client's situation in the second person, not to our service list.
- Deliverables are short noun phrases, not paragraphs.
- Intro lead paragraph: reframe what they asked for ("You asked for a new website. But a website is only as strong as what it's built on...") then one sentence characterizing each path.

## Build steps

A proposal is exactly two files — the Liminal logo loads from the shared URL `https://share.meetliminal.com/assets/logo-white.png`, so no per-proposal assets folder is needed.

1. Copy `template/index.html` to `<client-slug>/index.html` and `template/styles.css` to `<client-slug>/css/styles.css`. Never restyle the CSS — it is the house style.
2. Replace every `{{PLACEHOLDER}}` token in `index.html`.
3. Write tier content per the rules above. Keep the card class names (`starter` / `featured` / `premium`) — the CSS keys off them.
4. Leave the optional commented blocks (revision note, phase two) out of a first-round proposal.

## Revising after budget pushback

When a client says the recommended tier is over budget:

- **Reprice by removing scope, never by discounting the same scope** — protects pricing credibility. The usual lever: swap the full "Website Messaging Strategy" for a focused, survey-driven messaging sprint (a survey completed by 3–4 of the client's team that generates homepage and key-page content).
- Change the hero date to `Revised <Month Year>`.
- Enable the intro **revision-note** callout (commented block in the template) naming what changed and the new price.
- Change the featured card's badge to `Revised &amp; Recommended` — keep badge text short enough for one line.
- Enable the **"Phase Two — When Funding Allows"** block (commented in the template) listing deferred items (e.g., full messaging strategy, LMS). This converts "maybe next year when we have funding" into "start now, expand later."
- The cover email should frame it as: "You told us tier 2 is the right scope and price was the problem — here it is with a lighter <lever>," and offer a short call.

## Deploying

Proposals live in the `liminal-creative/wireframes` GitHub repo. GitHub Pages serves the repo at **https://share.meetliminal.com/** — a folder named `<client-slug>/` at the repo root is live at `https://share.meetliminal.com/<client-slug>/` about a minute after it lands on `main`.

- **In Claude Code:** create the folder at the repo root, commit, push to `main`, then poll the live URL until the new content appears.
- **In Claude Desktop / claude.ai:** generate the two files for download and have the user arrange them locally as `<client-slug>/index.html` and `<client-slug>/css/styles.css`. Then at github.com → `liminal-creative/wireframes` → *Add file → Upload files*, drag the whole `<client-slug>` folder in and commit to `main`. Pages redeploys automatically. No GitHub connector is required — just a GitHub account with write access to the repo.
- These URLs are unlisted but **public** — never put passwords, contracts, or personal data in a proposal page.
