# Website Redesign — Mid-Century Modern

> Design summary for the redesign demo validated in `demo/`.
> Source brief: `.trellis/tasks/07-03-mid-century-redesign-demo/research/mid-century-style-brief.md`
> Inspiration: https://www.uiprompt.site/zh/styles/preview/retro-midCenturyModern

---

## Theme Direction

**Mood**: Warm, structured, playful, instructional — 1950s–60s modern optimism, not generic retro.

**Core**: clean lines, bold geometric shapes, organic forms, warm earthy palette, atomic motifs, asymmetrical balance, generous whitespace.

---

## 1. Color Tokens

```css
:root {
  /* Base */
  --color-bg: #F6E8CF;          /* warm cream — page background */
  --color-bg-soft: #FBF3E3;     /* lighter cream — callouts */
  --color-surface: #FFF7E8;     /* card surface */
  --color-surface-alt: #E8D3B0; /* muted sand — inline code */

  /* Text */
  --color-text: #2F2A24;        /* espresso charcoal — body, not pure black */
  --color-text-muted: #6F6256;  /* warm taupe — secondary text */
  --color-text-inverse: #FFF7E8;

  /* Primary mid-century accents */
  --color-teal: #1F7A7A;        /* primary CTA, active nav, links */
  --color-teal-dark: #155C5C;
  --color-mustard: #D9A441;     /* secondary button, highlight, badge */
  --color-orange: #C95F2D;      /* hero motif, eyebrow, strong accent */
  --color-olive: #727A3F;       /* success / reasons callout */

  /* Wood / walnut */
  --color-walnut: #6B4226;
  --color-walnut-dark: #3F2819; /* borders */

  /* Borders */
  --color-border: #3F2819;
  --color-border-soft: #C8A978;
}
```

### Role mapping

| Role | Token | Usage |
|---|---|---|
| Page background | `--color-bg` | warm cream, simulates paper |
| Card background | `--color-surface` | course cards, module cards |
| Primary action | `--color-teal` | CTA, active nav, links |
| Secondary action | `--color-mustard` | secondary button, badge, highlight |
| Strong accent | `--color-orange` | hero motif, eyebrow, section marker |
| Success | `--color-olive` | reasons / positive callout |
| Main text | `--color-text` | body (not pure black) |
| Border | `--color-border` | 2px walnut on cards/buttons/nav |

---

## 2. Typography

```css
--font-display: "League Spartan", "Century Gothic", system-ui, sans-serif;
--font-body: "Inter", "Helvetica Neue", Arial, system-ui, sans-serif;
--font-mono: "JetBrains Mono", "IBM Plex Mono", monospace;
```

Google Font link (per page `<head>`):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700;800;900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

- **Headings**: League Spartan — geometric sans-serif, evokes Futura/Bauhaus. `font-weight: 800`, `letter-spacing: -0.04em`, `line-height: 0.98`. Hero title may uppercase; section heading uses eyebrow label + big title.
- **Body**: Inter — clean, high readability. `line-height: 1.65`.
- **Code**: JetBrains Mono — code blocks and inline code.
- **Links**: teal, `text-decoration-thickness: 2px`, `text-underline-offset: 0.2em`.

### Type scale

```css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.35rem;
--text-2xl: 1.75rem;
--text-3xl: 2.35rem;
--text-4xl: clamp(2.75rem, 7vw, 5.25rem);
```

---

## 3. Radii, Shadow, Border

```css
--radius-sm: 4px;    /* inline code, buttons */
--radius-md: 10px;   /* callouts, code blocks, small cards */
--radius-lg: 18px;   /* large cards / hero panels */

/* Hard offset shadows — NOT soft SaaS shadows */
--shadow-offset-sm: 3px 3px 0 var(--color-border);
--shadow-offset-md: 6px 6px 0 var(--color-border);
--shadow-offset-soft: 6px 6px 0 var(--color-border-soft);

--border-strong: 2px solid var(--color-border);
```

Key rule: shadows are hard offset (solid color, no blur/spread), evoking print/poster feel. Never use soft `0 20px 60px rgba(...)` shadows.

---

## 4. Decorative Motifs

Used **only** in hero and section headers — keep article pages clean for readability.

### Starburst (inline SVG)
```html
<svg viewBox="0 0 100 100" aria-hidden="true">
  <g stroke="currentColor" stroke-width="4" stroke-linecap="round">
    <line x1="50" y1="8" x2="50" y2="92"/>
    <line x1="8" y1="50" x2="92" y2="50"/>
    <line x1="20" y1="20" x2="80" y2="80"/>
    <line x1="80" y1="20" x2="20" y2="80"/>
  </g>
  <circle cx="50" cy="50" r="6" fill="currentColor"/>
</svg>
```

### Organic blob (CSS)
```css
.mcm-blob {
  border-radius: 42% 58% 60% 40% / 45% 35% 65% 55%;
  background: var(--color-orange);
}
```

### Boomerang (CSS)
```css
.boomerang {
  width: 140px;
  height: 44px;
  border-radius: 999px 40px 999px 40px;
  transform: rotate(-18deg);
  background: var(--color-mustard);
}
```

### Eyebrow prefix
```css
.eyebrow::before { content: "✦"; color: var(--color-mustard); }
```

---

## 5. Components

### Button
- 2px walnut border, 4px hard offset shadow, League Spartan uppercase 800
- **primary**: teal bg, inverse text
- **secondary**: mustard bg, text color
- **outline**: transparent bg
- hover: `translate(2px, 2px)`, shadow shrinks to 2px
- active: `translate(4px, 4px)`, shadow → 0
- focus-visible: 3px mustard ring, 2px offset

```css
.button {
  display: inline-flex; align-items: center; justify-content: center;
  min-height: 44px; padding: 0.75rem 1.15rem;
  border: 2px solid var(--color-border); border-radius: 6px;
  background: var(--color-teal); color: var(--color-text-inverse);
  font-family: var(--font-display); font-weight: 800;
  letter-spacing: 0.02em; text-transform: uppercase;
  box-shadow: 4px 4px 0 var(--color-border);
  transition: transform 160ms ease, box-shadow 160ms ease;
}
.button:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0 var(--color-border); }
.button:active { transform: translate(4px, 4px); box-shadow: 0 0 0 var(--color-border); }
.button:focus-visible { outline: 3px solid var(--color-mustard); outline-offset: 2px; }
```

### Card
- surface bg, 2px walnut border, radius 14px, 6px soft offset shadow
- course card: top color strip (8px, course accent), category badge, title, subtitle, level, lesson count

```css
.card {
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: 14px;
  box-shadow: 6px 6px 0 var(--color-border-soft);
  padding: clamp(1.25rem, 3vw, 2rem);
}
```

### Badge
- 2px walnut border, radius 999px, mustard bg, uppercase 0.75rem 800

### Nav
- cream bg `rgba(246, 232, 207, 0.92)` + `backdrop-filter: blur(8px)`
- 2px walnut bottom border
- brand left (League Spartan 700, ✦ prefix), links right (uppercase, letter-spacing 0.04em)
- active link: teal color + 3px underline + offset 0.35em
- `aria-current="page"` on active

### Section header
- eyebrow (League Spartan 0.8rem 900, uppercase, letter-spacing 0.14em, orange, ✦ prefix)
- h2 (League Spartan, `clamp(2rem, 5vw, 4rem)`, line-height 0.98, letter-spacing -0.04em)

### Callout
- 2px walnut border + 10px left border, radius 10px, bg-soft, 4px soft offset shadow
- variants: `info` (teal left), `warning` (mustard left), `danger` (orange left), `success` (olive left)

```css
.callout { border: 2px solid var(--color-border); border-left-width: 10px; border-radius: 10px; padding: 1rem 1.25rem; background: var(--color-bg-soft); box-shadow: 4px 4px 0 var(--color-border-soft); }
.callout--info { border-left-color: var(--color-teal); }
.callout--warning { border-left-color: var(--color-mustard); }
.callout--danger { border-left-color: var(--color-orange); }
.callout--success { border-left-color: var(--color-olive); }
```

### Code block
- `#2F2A24` bg, inverse text, 2px walnut-dark border, radius 10px, 6px soft offset shadow
- inline code: surface-alt bg, walnut-dark text, radius 4px

---

## 6. Layout Principles

- **Asymmetrical but balanced** — not full symmetry, not full center
- **Open floor-plan feel** — generous whitespace, section padding `clamp(4rem, 8vw, 7rem)`
- **Bold feature blocks** — large hero with geometric negative space
- **Mixed-width grids** — course grid: 3 cols desktop / 2 cols ≤960px / 1 col ≤720px
- **Hero**: grid `1.1fr / 0.9fr`, left text + right decorative shapes, min-height 70vh

---

## 7. What to Avoid

| Avoid | Why |
|---|---|
| 80s neon / vaporwave | wrong era — no hot pink, electric blue, chrome text |
| Grunge / heavy texture | mid-century is clean, not distressed |
| Glassmorphism | no frosted-glass cards over blurred backgrounds |
| Soft SaaS shadows | use hard offset shadows instead |
| Excessive pill radius | buttons use 4-6px; reserve 999px for badges/chips only |
| Full-center layouts | asymmetry is part of the style |
| Color count overload | stick to: cream base, dark text/border, teal, mustard, orange, olive/walnut |
| Psychedelic / groovy fonts | League Spartan is geometric, not 70s bubble |
| Script fonts for long text | keep body in Inter for readability |
| Decorative clutter on article pages | motifs only in hero / section headers |

---

## 8. Responsive Breakpoints

```css
@media (max-width: 960px) { /* 2-col grid, hero stacks */ }
@media (max-width: 720px) { /* 1-col grid, nav simplifies */ }
```

---

## 9. Application to the Actual Site

When applying this style to the Astro site (replacing `src/styles/global.css`):

1. **Tokens first** — replace `:root` tokens in `global.css` with the mid-century set above
2. **Fonts** — add the Google Font `<link>` to `BaseLayout.astro` `<head>`
3. **Component classes** — rewrite `.course-card`, `.module-card`, `.note-card`, `.hero`, `.site-header`, buttons, callouts in `global.css` to match contracts in §5
4. **Decorative shapes** — add inline SVG starburst + CSS blob/boomerang to hero (`index.astro`, `courses/[slug].astro`) and section headers
5. **Keep data flow** — no changes to `src/data/**`, `src/utils/paths.ts`, or routing; this is a visual layer change only
6. **Preserve i18n** — English + Chinese routes both adopt the same style; Chinese pages keep `locale` props and path helpers
7. **Verify** — `npm run check` + `npm run build` must pass; visual diff every route type (home, courses index, course detail, lesson hub, lesson article, zh mirrors)

---

## 10. Validation Checklist for Site-Wide Adoption

- [ ] All color tokens in `global.css :root` match this doc
- [ ] Google Font link in `BaseLayout.astro`
- [ ] Hard offset shadows (no soft SaaS shadows)
- [ ] 2px walnut borders on cards/buttons/nav/code
- [ ] Hero + section headers have decorative motifs
- [ ] Article pages stay clean (motifs only in headers)
- [ ] Buttons have hover/active/focus-visible press mechanics
- [ ] Nav active state uses teal + underline
- [ ] Responsive breakpoints 960px / 720px
- [ ] `npm run check` passes
- [ ] `npm run build` passes
- [ ] English + Chinese routes both render correctly
- [ ] No `src/data/**` or routing changes