# EPIC Design System

**EPIC — Education Platform Investing Company** (formerly Advanced Quantum Holding · الكم المتقدم القابضة, advq.sa) is the back office for education businesses in Saudi Arabia. It takes private schools, kindergartens, international schools, training centres and higher-education institutes from licence to launch to scale through three service pillars:

- **Setup**: licensing, registration, approvals, curriculum, Saudization, financial modelling
- **Compliance**: renewals, ETEC/NCAAA accreditation readiness, QA, governance, PDPL
- **Growth**: leadership development, diagnostics, partner vetting, admissions/LMS selection

Track record: **27** years in Saudi education · **89** organisations advised · **158** leaders developed · **4,800** trainees across 24 centres.
Audience: school owners, operators, education investors. Bilingual EN / العربية (RTL).

There is one product surface: the **marketing website** (layout modelled on titan.com: sticky header, glow hero, logo strip, stat row, alternating service rows, testimonials, featured package, numbered journey, FAQ, insights, CTA band, black footer).

## Sources
- `uploads/epic-preview (1).png`: identity colour slide (copied to `assets/reference/epic-identity-preview.png`)
- `uploads/epic-mark-*.svg`: the mark in black, royal blue, midnight navy, white, currentColor (copied to `assets/logo/`)
- `uploads/GCGatuzoDemo-*.ttf`: GC Gatuzo **Demo** weights Thin–ExtraBold (copied to `assets/fonts/`)
- Written brief (identity notes, palette, layout reference titan.com, tone lines)
- Not received: `epic-tokens.css` and the identity mockups (cover, stationery, tape, tote, social card). Tokens here were authored from the brief and the colour slide.

---

## Index
- `styles.css`: global entry; `@import`s only
- `tokens/`: `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css` (shadows, motion, glow/fluted/grain surfaces), `base.css` (element defaults + type utility classes), `components.css` (all `.epic-*` component classes)
- `components/`: React primitives (see below), each with `.jsx` + `.d.ts` + `.prompt.md`, one `*.card.html` per directory
- `guidelines/`: foundation specimen cards (Colors, Type, Spacing, Brand)
- `ui_kits/website/`: interactive marketing-site recreation (Home, Services, Insights, Book a call; EN/AR toggle)
- `assets/`: `logo/` (5 mark colourways), `logo.svg`, `fonts/`, `reference/`
- `thumbnail.html`, `SKILL.md`

## Components
**brand/**: `Logo` (+ `EpicMark`), `GlowSurface`, `Icon`, `Reveal`
**actions/**: `Button` (primary / dark / outline / light / link), `WhatsAppButton`
**display/**: `Badge`, `Tabs`
**forms/**: `Input`, `Select`, `Textarea`, `Checkbox` (also radio)
**navigation/**: `SiteHeader`, `Footer`
**sections/**: `Hero`, `LogoStrip`, `StatRow`, `ServiceRow`, `NumberedSteps`, `FAQAccordion`, `CTABand`, `SectionHeading`
**cards/**: `PillarCard`, `PackageCard`, `TestimonialCard`, `TeamCard`, `InsightCard`, `ProfileCard`

### Intentional additions
- `Icon`: the brief names no icon set; a small Lucide-geometry set covers arrows, checks, plus, globe, etc.
- `GlowSurface`: packages the signature glow / fluted / grain surfaces as one primitive.
- `Reveal`: scroll-triggered entrance used by every section (titan.com-style motion).
- `SectionHeading`: the eyebrow + headline + lead block repeated at the top of every section.
- `EpicMark`: the mark alone, exported from `Logo.jsx`.

---

## CONTENT FUNDAMENTALS
- **Voice**: calm, confident, reassuring. EPIC is the experienced operator who has done this 89 times. Promise outcomes (open on time, stay accredited), not process.
- **Signature cadence**: three short imperative clauses. "License faster. Open sooner. Start right." / "Stay licensed. Stay accredited. Sleep better." Use this pattern for pillar headlines and hero lines only; don't overuse it in body copy.
- **Person**: speak to the reader as **you** ("your school", "your file"); EPIC is **we**. Never "I".
- **Casing**: sentence case for headlines, buttons and nav ("Book a discovery call", "Client login"). Uppercase only for small eyebrows ("MAKE THIS REAL", "YOUR JOURNEY WITH EPIC"), used sparingly.
- **Headlines end with a period** when they're statements ("Three pillars. One back office."). Questions are fine in CTAs ("Ready to open your doors?").
- **Specifics over adjectives**: name the regulator (ETEC, NCAAA, PDPL, Ministry), the timeframe ("within one working day"), the number (27 years). Avoid "world-class", "cutting-edge", "seamless".
- **Numbers**: Western numerals in both languages (27 · 89 · 158 · 4,800). Thousands separated with a comma.
- **Legal line**: every page footer carries "EPIC is not a law firm."
- **Emoji**: never. Unicode only for the curly quote mark in testimonials and the "·" separator.
- **Arabic**: write natively, don't transliterate. Keep "EPIC" in Latin script in the logo; "إبيك" in running Arabic text. No letter-spacing, no uppercase transforms.
- Examples: CTA "Book a discovery call" / "احجز مكالمة تعريفية"; reassurance "No obligation, no sales script."; step "A written plan with every approval, document and deadline, owned by one EPIC lead."

## VISUAL FOUNDATIONS
- **Palette**: mostly neutral, Pale Stone `#ECE8E5` page, white cards, Black type, Warm Gray `#CFC8C3` hairlines. **One confident Royal Blue `#366BFF` moment per screen** (primary CTA, a highlighted card, or a fluted block). Midnight Navy `#07142B` is the dark ground for glow surfaces and type on light glow.
- **Type**: GC Gatuzo, a geometric grotesk with a single-storey "a". Headlines Medium (500) with tight tracking (−0.025 to −0.035em, leading ~1.0). Body Regular 17/1.6. Big numerals in **Light** (300) with −0.045em tracking. Eyebrows 12px uppercase +0.14em. Arabic: IBM Plex Sans Arabic, no tracking, looser leading (1.15–1.2 display).
- **Signature surface**: an out-of-focus radial blue glow (`#075090`) bleeding into mist gray (`#A6A8AB`) or Pale Stone, with film grain (SVG fractal noise, overlay blend, ~22%). Dark variant: Royal Blue glow on Midnight Navy. Used for hero, cover, CTA bands and image placeholders. No other gradients.
- **Supporting graphics**: vertical fluted/ribbed texture in Royal Blue (or navy), solid Royal Blue blocks with white type, black cards with blue accents (profile card, package callout).
- **Imagery**: none supplied. When photography is added it should be calm, architectural, cool-neutral with soft daylight; team photos grayscale until hover. Until then, use glow/fluted surfaces as placeholders.
- **Layout**: 1280px container, fluid gutter 20–48px, section rhythm 80–144px. Generous whitespace, left-aligned (start-aligned) text, two-column alternating service rows, 3–4 column card grids. Sticky header 76px.
- **Corner radii**: pills (999px) for every button, tab and badge; 14px inputs; 20px small cards; 28px pillar/testimonial/service media; 36px package callout and CTA band.
- **Cards**: white or stone background, **no border, no shadow at rest**; shadow (navy-tinted, soft) appears only on hover lift. Dark cards are pure black.
- **Borders**: 1px hairlines in Stone 200/300. Black 1px top rule above stat rows and FAQ lists.
- **Shadows**: navy-tinted (`rgba(7,20,43,…)`), large blur and negative spread. Used for hover, floating WhatsApp button and the booking form panel.
- **Transparency & blur**: only on the sticky header once scrolled (Pale Stone at 78% + 16px backdrop blur). Text on dark uses white at 66% for secondary copy.
- **Motion**: slow and composed. Sections fade up 28px over 900ms with `cubic-bezier(.2,.7,.2,1)`, siblings stagger ~110ms. Hero headline lines reveal one by one. Stats count up on first view. Logo strip marquee (40s loop, pauses on hover). Header hides on scroll-down and returns on scroll-up. No bounces except a subtle spring on checkbox ticks and the WhatsApp hover.
- **Hover**: buttons darken (blue → `#2457E6`; black → `#262422`); outline fills solid; trailing arrows slide 4px; link buttons draw an underline; cards lift 4px; images scale to 1.04 over 1.2s; the pillar arrow chip fills Royal Blue and rotates −45°.
- **Press**: `scale(.97)` in 150ms, no colour flash.
- **Focus**: 3px Royal Blue ring at 38% alpha.
- **RTL**: layouts mirror via logical properties; arrows flip; the logo, numerals and the "EPIC" wordmark never mirror.

## ICONOGRAPHY
- No icon set was supplied. The system ships a small `Icon` component using **Lucide** geometry (24px grid, 1.75 stroke, round caps), matching GC Gatuzo's clean geometric line. **Substitution, flagged**: replace with EPIC's own icons if they exist.
- Icons are functional only: arrows on CTAs, checks on lists, plus/× on the FAQ, globe on the language toggle, chevrons on selects, LinkedIn on team cards. No decorative or illustrative icons, no icon-in-circle feature grids.
- Directional icons mirror automatically in RTL.
- WhatsApp uses Lucide `message-circle` rather than the official WhatsApp glyph (not supplied).
- No emoji. No icon font.
- **Logo description**: a bold, abstract geometric mark with a thick central vertical stem, two diagonal arms rising outward, and a wide horizontal base. Most edges are sharp, while the lower central junction curves smoothly. An angular gap in the lower right creates a mountain-like peak in the negative space. The single-colour design feels solid, architectural and minimalist, with a silhouette resembling a branching symbol or stylized crown.
- **Logo rationale**: stem = the institution; rising arms = growth and expansion; wide base = the platform (setup and compliance back office); the one curved junction = the institution flowing out of its foundation; the negative-space peak = the summit clients climb toward; branch/crown silhouette = growth and leadership.
- **The EPIC mark** (`assets/logo/`) is the only brand graphic: solid Black, Royal Blue, Midnight Navy or White, never with gradients, outlines or effects. Clear space = 2 × stem width. Pair with the "EPIC" wordmark in GC Gatuzo Medium.

## Caveats
- Fonts are the **GC Gatuzo Demo** files; production needs the licensed build.
- Client logos in `LogoStrip`, testimonials, team names and insight titles in the UI kit are placeholders.
