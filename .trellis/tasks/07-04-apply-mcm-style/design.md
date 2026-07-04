# Design: Apply Mid-Century Modern Style to Site

## Architecture

路線 A — 純視覺層變更, 保留正式站 class 命名與頁面結構。

```
修改:
  src/styles/global.css          # :root tokens + 全部元件 class 樣式改寫
  src/layouts/BaseLayout.astro   # <head> 加 Google Font link

可能微調 (加裝飾 SVG 元素):
  src/components/Header.astro    # brand ✦ 前綴 (若需)
  src/pages/index.astro          # hero 加 decorative SVG 區
  src/pages/zh/index.astro       # 同 EN
  src/pages/courses/index.astro  # hero 加 decorative SVG
  src/pages/zh/courses/index.astro
  src/pages/courses/[slug].astro # page-intro hero 加 SVG
  src/pages/zh/courses/[slug].astro

不動:
  src/data/**                    # 資料檔
  src/utils/paths.ts             # 路由 helper
  src/components/CourseCard.astro / CourseMenu.astro / Footer.astro / LessonRow.astro  # props/結構不動
  路由結構                        # 不新增/刪除頁面
```

## Design Tokens (替換 global.css :root)

```css
:root {
  /* Base */
  --bg: #F6E8CF;                 /* warm cream */
  --bg-soft: #FBF3E3;
  --surface: #FFF7E8;            /* card */
  --surface-soft: #FBF3E3;
  --surface-muted: #E8D3B0;      /* inline code */

  /* Text */
  --text: #2F2A24;
  --muted: #6F6256;
  --text-inverse: #FFF7E8;

  /* Accents */
  --teal: #1F7A7A;
  --teal-dark: #155C5C;
  --mustard: #D9A441;
  --orange: #C95F2D;
  --olive: #727A3F;
  --walnut: #6B4226;
  --walnut-dark: #3F2819;

  /* Borders */
  --line: #3F2819;                /* walnut (rename semantic) */
  --line-soft: #C8A978;

  /* Fonts */
  --font-display: "League Spartan", "Century Gothic", system-ui, sans-serif;
  --font-body: "Inter", "Noto Sans TC", "Helvetica Neue", Arial, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", "IBM Plex Mono", monospace;

  /* Radii */
  --radius-xl: 18px;
  --radius-lg: 14px;
  --radius-md: 10px;
  --radius-sm: 4px;

  /* Hard offset shadows (取代柔軟陰影) */
  --hero-shadow: 6px 6px 0 var(--line);
  --panel-shadow: 6px 6px 0 var(--line-soft);
  --thumb-shadow: 4px 4px 0 var(--line);
  --shadow-offset-sm: 3px 3px 0 var(--line);
  --shadow-offset-md: 6px 6px 0 var(--line);
  --shadow-offset-soft: 6px 6px 0 var(--line-soft);
}
```

注意: 保留舊 token 名 (`--bg`/`--surface`/`--text`/`--line`/`--hero-shadow`/`--panel-shadow`/`--radius-*`) 以避免改動數百處引用, 只改值。新增 `--teal`/`--mustard`/`--orange`/`--olive`/`--walnut`/`--font-*`。

## Google Font (BaseLayout.astro `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700;800;900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## Component Contracts (class 名保留, 樣式改寫)

### Body / base
- `body`: `background: var(--bg)`, `color: var(--text)`, `font-family: var(--font-body)`, `line-height: 1.65`
- 移除現有 `radial-gradient` + `linear-gradient` body 背景 (改純 cream)
- `h1, h2, h3, .page-title`: `font-family: var(--font-display)`, `letter-spacing: -0.04em`, `line-height: 0.98`, `font-weight: 800`
- `a`: `color: var(--teal)`, `text-decoration-thickness: 2px`, `text-underline-offset: 0.2em`
- `::selection`: `background: var(--mustard)`, `color: var(--text)`

### .site-header / .header-nav / .brand
- `.site-header`: cream bg `rgba(246, 232, 207, 0.92)` + `backdrop-filter: blur(8px)` + `border-bottom: 2px solid var(--line)`
- `.brand-title`: `color: var(--text)`, `font-family: var(--font-display)`, `font-weight: 700`, 加 `::before { content: "✦"; color: var(--mustard); margin-right: 0.4rem; }`
- `.header-nav a`: `color: var(--text)`, uppercase, letter-spacing 0.04em, `font-family: var(--font-display)`, `font-weight: 700`
- active state (`.is-active` 或 `[aria-current]`): `color: var(--teal)`, `text-decoration: underline`, `text-decoration-thickness: 3px`, `text-underline-offset: 0.35em`
- `.language-switch`: 2px walnut border, surface bg
- `.course-dropdown summary`: 2px walnut border, surface bg, offset shadow

### .hero / .page-intro (反轉為 cream 底深字)
- `.hero, .page-intro`: `background: var(--bg)`, `color: var(--text)`, 移除 `--hero-overlay`, 移除深色漸層
- `.hero--home, .page-intro--editorial`: 移除深色背景, 改 cream
- `.hero-backdrop`: 改放裝飾 SVG/blob (或由頁面 inline SVG 取代)
- 所有 hero 內白字 (`color: #fff`) 改 `color: var(--text)`
- `.hero-action`: 2px walnut border + offset shadow + 按壓動效 (見 button)
- `.hero-action--primary`: teal bg, inverse text
- `.eyebrow`: `color: var(--orange)`, `::before { content: "✦"; color: var(--mustard); }`
- `.lead, .course-overview`: `color: var(--muted)`

### .course-card (改 top color strip, 移除縮圖)
- `.course-card`: `background: var(--surface)`, `border: 2px solid var(--line)`, `border-radius: 14px`, `box-shadow: var(--shadow-offset-soft)`, padding clamp
- 移除 `.course-card-media` 縮圖 (display: none 或頁面移除)
- 新增 `::before` top strip: `height: 8px`, `background: var(--course-accent)`, `border-bottom: 2px solid var(--line)`, negative margin 跨滿寬
- `.course-card h3`: `font-family: var(--font-display)`
- `.course-card-category`: orange eyebrow 風格
- `.course-pill`: mustard bg, 2px border

### .course-grid (改 3 欄)
- `.course-grid` / `.course-grid--editorial`: `grid-template-columns: repeat(3, minmax(0, 1fr))`, `gap: 1.5rem`
- `.course-card`: 移除 `border-bottom` 分隔, 改為獨立卡片
- 響應式: ≤960px 2 欄, ≤720px 1 欄

### .module-card / .module-lesson-row
- `.module-card`: 2px walnut border, offset shadow, radius 14px
- `.module-lesson-row`: `border-top: 1px solid var(--line-soft)`, hover 效果

### .note-card / .note-library-callout / .featured-note-callout
- `.note-card`: 2px walnut border, offset shadow, hover translate(-2px,-2px) + shadow 增
- `.note-library-callout` / `.featured-note-callout`: callout 風格 (2px border + 10px left border, 變體色)
- `.featured-note-callout .hero-action--primary`: teal bg

### .note-code-block
- 已是深色 bg, 微調: `background: #2F2A24`, `border: 2px solid var(--line)`, `box-shadow: var(--shadow-offset-soft)`

### .note-tag
- `background: var(--mustard)`, `color: var(--text)`, `border: 2px solid var(--line)`, `border-radius: 999px`

### .section-heading
- `.eyebrow` ✦ 前綴
- `h2`: `font-family: var(--font-display)`, `clamp(2rem, 5vw, 4rem)`

### .footer-inner
- `border-top: 2px solid var(--line)`

### Button 按壓動效 (套用於 .hero-action, .course-link 等)
- hover: `transform: translate(2px, 2px)`, shadow 4px→2px
- active: `transform: translate(4px, 4px)`, shadow→0
- focus-visible: `outline: 3px solid var(--mustard)`, `outline-offset: 2px`

## Decorative SVG (hero)

Hero 區加 inline SVG cluster (starburst teal + organic blob orange + boomerang mustard)。
- EN home `src/pages/index.astro`: hero 右側加 SVG
- ZH home `src/pages/zh/index.astro`: 同
- Courses index `src/pages/courses/index.astro` + zh: page-intro 加 SVG
- Course detail `src/pages/courses/[slug].astro` + zh: page-intro 加 SVG

SVG 直接 inline 在 .astro 頁面 (非元件, 因每頁 hero 結構不同)。

## Responsive (保留現有斷點)
- `@media (max-width: 960px)`: course-grid 2 欄, hero SVG 區隱藏或縮小
- `@media (max-width: 720px)`: course-grid 1 欄, nav 簡化

## ZH 字體 fallback
- `--font-body` 已含 `"Noto Sans TC"` 在 Inter 之後, 中文會 fallback 到 Noto Sans TC
- `--font-display` League Spartan 無中文, 中文 heading 會 fallback 到 system-ui (可接受, 中文標題仍用現有 Noto Sans TC 透過 system-ui 鏈)

## Compatibility
- 不影響 `astro check` / `astro build`
- 不改路由, 不改資料
- 頁面 class 名不動, 只 CSS 值動

## Tradeoffs
- 保留舊 token 名 (`--bg`/`--line` 等) 避免改數百處引用 → 結果是 token 名語義不完全精確 (例 `--line` 現在是 walnut 而非細線) 但可接受, 降低變更面
- hero 反轉為 cream 底 → 現有 white-text CSS 需逐頁檢查, 但 hero class 集中, 風險可控
- 移除 `.course-card-media` 縮圖 → 頁面若引用該 slot 需移除, 但 CourseCard.astro 結構不動 (CSS display:none 即可)

## Rollback
- `git checkout src/styles/global.css src/layouts/BaseLayout.astro src/pages/` 即可回原樣
- 無資料/路由變更, 回滾零副作用