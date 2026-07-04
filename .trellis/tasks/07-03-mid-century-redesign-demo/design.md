# Design: Mid-Century Modern Demo

## Architecture

純靜態 HTML/CSS demo, 與正式 Astro 站完全隔離。

```
demo/
├─ index.html              # 首頁
├─ courses.html            # 課程總覽
├─ course-docker.html      # Docker 課程詳情
├─ lesson-docker-1.html    # Docker Lesson 1 文章
├─ style-guide.html        # 設計系統索引
└─ styles.css              # 共用樣式 (單一檔案, 所有頁引入)
```

無 JS、無 build step、無外部框架。SVG 圖形直接 inline 在 HTML 中 (避免額外資源請求)。

## Design Tokens (from style brief)

### Colors
```css
--color-bg: #F6E8CF;          /* warm cream */
--color-bg-soft: #FBF3E3;
--color-surface: #FFF7E8;     /* card */
--color-surface-alt: #E8D3B0;
--color-text: #2F2A24;        /* espresso charcoal */
--color-text-muted: #6F6256;
--color-text-inverse: #FFF7E8;
--color-teal: #1F7A7A;        /* primary CTA */
--color-teal-dark: #155C5C;
--color-mustard: #D9A441;     /* secondary */
--color-orange: #C95F2D;      /* strong accent */
--color-olive: #727A3F;       /* success */
--color-walnut: #6B4226;
--color-walnut-dark: #3F2819; /* border */
--color-border: #3F2819;
--color-border-soft: #C8A978;
```

### Typography
```css
--font-display: "League Spartan", "Century Gothic", system-ui, sans-serif;
--font-body: "Inter", "Helvetica Neue", Arial, system-ui, sans-serif;
--font-mono: "JetBrains Mono", "IBM Plex Mono", monospace;
```
Google Font `<link>` 置於每頁 `<head>`。

### Radii / Shadow / Border
```css
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 18px;
--shadow-offset-sm: 3px 3px 0 var(--color-border);
--shadow-offset-md: 6px 6px 0 var(--color-border);
--shadow-offset-soft: 6px 6px 0 var(--color-border-soft);
--border-strong: 2px solid var(--color-border);
```

## Component Contracts

### Button
- primary: teal bg, inverse text, 2px walnut border, 4px offset shadow; hover translate(2px,2px) shadow 變小; active translate(4px,4px) shadow 歸零
- secondary: mustard bg, text color
- outline: transparent bg, text color

### Card
- surface bg, 2px walnut border, 10-14px radius, 6px soft offset shadow
- course card: top color strip (8px, course accent or orange) + category badge + title + subtitle + level + lesson count

### Nav
- cream bg w/ blur, 2px walnut bottom border
- brand 左, links 右 (Courses, Style Guide)
- active link: teal color + 3px underline offset 0.35em

### Section Header
- eyebrow (small caps, orange, ✦ prefix) + big title (League Spartan, clamp 2-4rem)
- optional starburst SVG 置於標題旁

### Callout
- 2px border + 10px left border (info=teal, warning=mustard, danger=orange)
- soft offset shadow

### Code Block
- walnut-dark bg (#2F2A24), inverse text, 2px border, 10px radius, soft offset shadow
- inline code: surface-alt bg, walnut-dark text

## Page Layouts

### Home (`index.html`)
- Hero: 左文右圖形 (organic blob + starburst + boomerang). 標題 "Tommy's Notes", 副標描述學習網站
- Section: "Courses" eyebrow + 課程 grid (12 卡, 3 欄 desktop / 2 欄 tablet / 1 欄 mobile)
- Footer: 簡短 copy

### Courses (`courses.html`)
- Page intro: 標題 + 描述
- Course grid: 同首頁的 12 卡, 但更密集 (無 hero)

### Course Detail (`course-docker.html`)
- Hero: Docker 標題 + subtitle + level + lesson count + CTA "Start lessons"
- Overview 段
- Outcomes 段 (3 項, callout 風格)
- Prerequisites 段 (badge list)
- Modules 段 (module card list, 每個 module 含 lesson rows)
- 連結到 lesson-docker-1.html

### Lesson Article (`lesson-docker-1.html`)
- 麵包屑: Courses > Docker > Lesson 1
- Title + summary
- Intro 段
- Learning Points (ordered list, callout 風格)
- Lesson Notes (段落)
- Example (code block, bash)
- Practice (list)
- Reasons / Mistakes (two-column callout)
- Takeaways (highlight)
- References (link list)

### Style Guide (`style-guide.html`)
- Color tokens: 色塊 grid
- Typography: display/body/mono 樣本
- Components: button/card/badge/callout/code/nav/section-header 並排展示
- Decorative: starburst/boomerang/organic blob 展示

## Responsive Breakpoints
- `>960px`: desktop grid
- `≤960px`: 2 欄
- `≤720px`: 1 欄, nav 簡化 (隱藏部分 links 或改橫向滾動)

## Compatibility
- 純靜態, 任何現代瀏覽器可開
- Google Font 需網路; fallback 已在 font stack 中
- 不影響正式 Astro build (`astro check` / `astro build` 應維持通過)

## Tradeoffs
- 選純靜態而非 Astro: 迭代最快, 但無法重用正式站元件 → 內容需手動摘錄 (可接受, demo 一次性)
- 選 Google Font 線上載入: 視覺準確但需網路 → fallback 完整, 可接受
- 適度裝飾而非全套: 文章頁可讀性優先 → 風格辨識度靠 hero/section header 承載

## Rollback
- demo/ 為新增資料夾, 不修改任何正式檔案
- 回滾 = 刪除 `demo/` 整個資料夾, 零副作用