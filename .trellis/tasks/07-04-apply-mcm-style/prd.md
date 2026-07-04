# Apply mid-century modern style to site

## Goal

將 `demo/` 驗證過的 mid-century modern 風格套用到正式 Astro 站，替換現有 `src/styles/global.css` 的視覺層。採用路線 A：保留正式站既有 class 命名與頁面結構，只替換 `:root` tokens 並改寫元件 class 樣式內容。

## Style Reference

- 設計摘要: `docs/redesign_website.md`
- 完整 brief: `.trellis/tasks/07-03-mid-century-redesign-demo/research/mid-century-style-brief.md`
- 可運行 demo: `demo/` (5 頁 + styles.css)

## Confirmed Facts (from codebase inspection)

- 現有 `src/styles/global.css` 1240 行, `:root` 有 17 tokens (--bg/--surface/--text/--line/--hero-overlay/--hero-shadow/--panel-shadow/--thumb-shadow/--radius-*)
- 現有元件 class: `.site-header`, `.brand`, `.header-nav`, `.course-dropdown`, `.course-menu`, `.hero`, `.hero--home`, `.page-intro`, `.hero-action`, `.course-card`, `.course-card-media`, `.course-grid`, `.module-card`, `.module-lesson-row`, `.note-card`, `.note-code-block`, `.note-tag`, `.lesson-anchor-link`, `.lesson-mini-link`, `.footer-inner` 等
- `BaseLayout.astro` 在 `<head>` 載入 `global.css`, 無 Google Font link
- 現有 hero 使用深色 overlay 漸層背景 + 白字 (與 mid-century cream 底相反)
- 現有 card 使用 1px 細邊框 + 柔軟陰影 (與 mid-century 2px walnut 邊框 + offset shadow 相反)
- 字體目前: `'Noto Sans TC', 'Segoe UI', sans-serif`
- 路由結構 EN + ZH 鏡像, 頁面檔案不用改 class 名 (路線 A)
- `src/utils/paths.ts` 與 `src/data/**` 不涉及視覺, 不需改

## Decisions

1. **套用路線**: A — 保留正式站 class 命名, 只改 `:root` tokens + 改寫元件 class 樣式內容
2. **範圍**: 純視覺層變更, 不動資料/路由/元件 props/頁面結構
3. **i18n**: EN + ZH 共用同一套 CSS, 不需分語系樣式
4. **Hero 反轉**: A — 所有 hero / page-intro 全部反轉為 cream 底深字 + 裝飾 SVG (非深色 overlay 白字)
5. **Course card media**: A — 改為 top color strip (8px accent 橫條), 移除 `.course-card-media` 色塊縮圖
6. **Course grid**: A — 改 3 欄卡片 grid (取代現有 1fr editorial 單欄)

## Requirements

### R1 Token 替換
- `src/styles/global.css :root` 替換為 mid-century tokens (見 docs/redesign_website.md §1)
- 新增字體 tokens (--font-display/--font-body/--font-mono)
- 新增 offset shadow tokens, 移除柔軟陰影 tokens
- radius tokens 調整 (4/10/18)

### R2 字體載入
- `BaseLayout.astro <head>` 加入 Google Font `<link>` (League Spartan + Inter + JetBrains Mono)
- body font-family 改為 Inter (保留 Noto Sans TC 在中文 fallback)

### R3 元件樣式改寫 (保留 class 名, 改樣式內容)
- `.site-header` / `.header-nav` / `.brand`: cream bg + blur + 2px walnut bottom border, active link teal underline
- `.hero` / `.hero--home` / `.page-intro`: cream bg (非深色 overlay), text 改深色, 加 decorative SVG 區
- `.hero-action` / `.hero-action--primary`: 2px walnut border + offset shadow + 按壓動效
- `.course-card` / `.course-card-media`: 2px walnut border + offset shadow + top color strip (用 --course-accent)
- `.course-grid`: 3 cols desktop / 2 cols ≤960px / 1 col ≤720px (目前是 1fr editorial, 需改為多欄)
- `.module-card` / `.module-lesson-row`: 2px border + offset shadow
- `.note-card`: 2px walnut border + offset shadow + hover 效果
- `.note-code-block`: walnut-dark bg + inverse text (目前已類似, 微調)
- `.note-tag`: mustard bg
- `.callout` / `.note-library-callout` / `.featured-note-callout`: callout 風格 (10px left border)
- `.footer-inner`: 2px walnut top border

### R4 裝飾圖形
- hero (`index.astro`, `courses/[slug].astro` 等 hero 區): 加入 inline SVG starburst + CSS blob/boomerang
- section header (`.section-heading`): eyebrow ✦ 前綴
- 文章頁 (lesson article): 保持乾淨, 裝飾僅限 section header

### R5 不變項目
- `src/data/**` 不改
- `src/utils/paths.ts` 不改
- `src/components/*.astro` 的 props/結構不改 (除非需加裝飾 SVG 元素)
- 路由結構不改
- 頁面 class 名不改 (路線 A)

### R6 響應式
- 保留現有 960px / 720px 斷點
- course-grid 改為多欄 (目前 1fr)

## Acceptance Criteria

- [ ] `src/styles/global.css :root` tokens 完全替換為 mid-century set
- [ ] `BaseLayout.astro` 載入 Google Font
- [ ] 所有卡片類元件 (course-card, module-card, note-card) 使用 2px walnut border + offset shadow
- [ ] hero 區改為 cream 底深字 + 裝飾 SVG (非深色 overlay 白字)
- [ ] nav 使用 cream bg + walnut border + active teal underline
- [ ] 按鈕有 hover/active/focus 按壓動效
- [ ] section header 有 eyebrow ✦ 前綴
- [ ] `npm run check` 通過
- [ ] `npm run build` 通過
- [ ] EN 首頁視覺正確 (cream 底, 幾何字體, offset shadow)
- [ ] ZH 首頁視覺正確 (同 EN, 中文 fallback 字體正常)
- [ ] 課程詳情頁視覺正確
- [ ] lesson hub + lesson article 頁視覺正確
- [ ] 無 `src/data/**` 或 `src/utils/paths.ts` 變更

## Out of Scope

- 不改路由結構
- 不改資料檔
- 不改頁面 class 命名 (路線 A)
- 不引入 Tailwind / CSS modules / styled-components
- 不做 dark mode
- 不做新功能

## Risks

- hero 由深色反轉為 cream 底, 可能影響現有 white-text 設定 (需逐頁檢查)
- course-grid 從 1fr 改多欄可能影響 editorial 長版面 (需保留 fallback)
- ZH 中文 fallback: League Spartan 無中文, 需保 Noto Sans TC 在中文鏈