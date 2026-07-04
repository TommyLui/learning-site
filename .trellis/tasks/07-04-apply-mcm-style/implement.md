# Implement Plan: Apply Mid-Century Modern Style

## Execution Checklist

### 1. global.css :root tokens 替換
- [ ] 替換 `:root` 全部 token 值為 mid-century set (保留舊名, 改值)
- [ ] 新增 `--teal`/`--mustard`/`--orange`/`--olive`/`--walnut`/`--font-*`/`--shadow-offset-*`
- [ ] 移除 `--hero-overlay`, 改 offset shadow 值
- [ ] 驗證: 無 CSS 引用斷裂 (舊 token 名仍在)

### 2. BaseLayout.astro 字體載入
- [ ] `<head>` 加 Google Font preconnect + link
- [ ] 驗證: build 通過, font 載入

### 3. global.css base 改寫
- [ ] body: 移除漸層背景, 改 `var(--bg)` 純色, `font-family: var(--font-body)`
- [ ] h1/h2/h3/.page-title: `font-family: var(--font-display)`, line-height/letter-spacing 調整
- [ ] a: teal + underline 2px
- [ ] ::selection: mustard
- [ ] .eyebrow: orange + ✦ prefix

### 4. global.css nav 改寫
- [ ] .site-header: cream bg + blur + 2px walnut bottom border
- [ ] .brand-title: dark text + ✦ prefix
- [ ] .header-nav a: dark text + uppercase + display font
- [ ] active state: teal + underline 3px
- [ ] .language-switch / .course-dropdown: 2px border + surface bg

### 5. global.css hero 反轉
- [ ] .hero / .page-intro: 移除深色 overlay + 白字, 改 cream 底深字
- [ ] .hero--home / .page-intro--editorial: 移除深色背景
- [ ] 所有 hero 內 `color: #fff` 改 `color: var(--text)`
- [ ] .hero-action / .hero-action--primary: 2px border + offset shadow + 按壓動效
- [ ] .lead / .course-overview: muted

### 6. global.css course-card + grid 改寫
- [ ] .course-grid / .course-grid--editorial: 3 欄, gap 1.5rem
- [ ] .course-card: 2px border + offset shadow + radius 14px, 移除 border-bottom 分隔
- [ ] .course-card-media: display: none (移除縮圖)
- [ ] .course-card 新增 ::before top color strip (8px accent)
- [ ] .course-card h3: display font
- [ ] .course-pill: mustard + 2px border

### 7. global.css 其他元件改寫
- [ ] .module-card: 2px border + offset shadow
- [ ] .module-lesson-row: border-top soft, hover
- [ ] .note-card: 2px border + offset shadow + hover
- [ ] .note-library-callout / .featured-note-callout: callout 風格 (10px left border)
- [ ] .note-code-block: bg #2F2A24 + 2px border + offset shadow
- [ ] .note-tag: mustard + 2px border
- [ ] .section-heading h2: display font
- [ ] .footer-inner: 2px walnut top border

### 8. 響應式調整
- [ ] @media 960px: course-grid 2 欄, hero 裝飾區隱藏
- [ ] @media 720px: course-grid 1 欄

### 9. Hero 裝飾 SVG (頁面 inline)
- [ ] src/pages/index.astro: hero 加 SVG cluster (starburst + blob + boomerang)
- [ ] src/pages/zh/index.astro: 同
- [ ] src/pages/courses/index.astro: page-intro 加 SVG
- [ ] src/pages/zh/courses/index.astro: 同
- [ ] src/pages/courses/[slug].astro: page-intro 加 SVG
- [ ] src/pages/zh/courses/[slug].astro: 同
- [ ] 驗證: SVG 不遮文字, aria-hidden

### 10. 驗證
- [ ] `npm run check` 通過
- [ ] `npm run build` 通過
- [ ] EN 首頁視覺: cream 底, 幾何字體, offset shadow, hero SVG
- [ ] ZH 首頁視覺: 同 EN, 中文 fallback 字體正常
- [ ] 課程總覽 (EN+ZH): 3 欄卡片 grid
- [ ] 課程詳情 (EN+ZH): cream hero + module cards
- [ ] lesson hub (EN+ZH): note-card 風格
- [ ] lesson article (EN+ZH): code block + callout + 乾淨文章
- [ ] 無 src/data/ 或 src/utils/ 變更
- [ ] git status 確認只動 global.css + BaseLayout + pages

## Validation Commands

```bash
npm run check
npm run build
git status --short
```

## Risky Files / Rollback Points

- `src/styles/global.css` — 主要變更, 1240 行大量改寫。回滾: `git checkout src/styles/global.css`
- `src/layouts/BaseLayout.astro` — 加 font link。回滾: `git checkout src/layouts/BaseLayout.astro`
- `src/pages/index.astro` 等 hero 頁 — 加 SVG。回滾: `git checkout src/pages/`

## Review Gates

- 完成 step 5 (hero 反轉) 後: 視覺 checkpoint, 確認 hero cream 底方向正確
- 完成 step 6 (course-card) 後: 卡片 checkpoint, 確認 3 欄 + top strip 視覺
- 完成 step 10 後: 完整驗收 (EN + ZH 全路由)