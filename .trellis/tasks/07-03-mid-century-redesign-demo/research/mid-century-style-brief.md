# Mid-Century Modern UI Design Brief
來源: @librarian 研究 (uiprompt.site 靜態抓取無內容, 依 Creative Bloq / Envato Tuts+ 等整理)

## Color Tokens
```css
--color-bg: #F6E8CF;          /* warm cream */
--color-bg-soft: #FBF3E3;
--color-surface: #FFF7E8;
--color-surface-alt: #E8D3B0;
--color-text: #2F2A24;
--color-text-muted: #6F6256;
--color-text-inverse: #FFF7E8;
--color-teal: #1F7A7A;
--color-teal-dark: #155C5C;
--color-mustard: #D9A441;
--color-orange: #C95F2D;
--color-olive: #727A3F;
--color-walnut: #6B4226;
--color-walnut-dark: #3F2819;
--color-border: #3F2819;
--color-border-soft: #C8A978;
```

## Typography
- Display: "League Spartan", "Century Gothic", system-ui, sans-serif
- Body: "Inter", "Helvetica Neue", Arial, system-ui, sans-serif
- Mono: "JetBrains Mono", "IBM Plex Mono", monospace

## Shapes & Motifs
- organic blob: border-radius 42% 58% 60% 40% / 45% 35% 65% 55%
- boomerang: rotated rounded rectangle
- starburst: SVG (lines + center dot)
- 適度使用: hero + section header only

## Components
- button: 2px walnut border, 4px offset shadow, hover translate(2px,2px)
- card: 2px border, 10-14px radius, 6px soft offset shadow, top color strip
- nav: cream bg + blur, 2px bottom border, active = teal + underline
- callout: 10px left border (info=teal, warning=mustard, danger=orange)
- code: walnut-dark bg, inverse text

## Avoid
- 80s neon, vaporwave, grunge, glassmorphism, soft SaaS shadow
- 過度 pill 圓角, 全對稱置中, 色彩數量失控
- psychedelic/groovy font, script font 用於長文