# Redesign site in mid-century modern style (demo)

## Goal

以中世紀現代（Mid-Century Modern）風格重新設計網站，先在 `demo/` 資料夾產出靜態示範頁面，使用現有網站真實內容驗證新風格視覺。不直接改動正式 Astro 站。

## Style Reference

- 靈感來源: https://www.uiprompt.site/zh/styles/preview/retro-midCenturyModern (JS-rendered, 靜態抓取無內容)
- 風格設計 brief: `.trellis/tasks/07-03-mid-century-redesign-demo/research/mid-century-style-brief.md`
  (由 @librarian 整理: 色彩 tokens、字體配對、形狀語彙、元件指引、避免事項)

## Confirmed Facts

- 網站為 Astro 靜態站, 內容核心在 `src/data/courses.ts` 與 `src/data/*Lessons*.ts`
- 目前樣式為 plain global CSS (`src/styles/global.css`), warm editorial theme, 無 Tailwind
- 路由: `/` (EN home), `/zh/` (ZH home), `/courses`, `/courses/[slug]`, `/courses/[slug]/lessons`, `/courses/[slug]/lessons/[lesson]`
- 課程種類: react, spring-boot, maven, mysql, postgresql, sqlite, go, rust, csharp, nextjs, typescript, docker
- Docker 課程: 12 課 data-backed lesson articles (`src/data/dockerLessons.ts`), 結構含 learningPoints / lessonNotes / exampleCode / practice / reasons / mistakes / takeaways / references
- Docker metadata: category "DevOps and platform fundamentals", 12 lessons, modules 結構在 `src/data/courses.ts:1629+`
- 目前無 `demo/` 資料夾

## Decisions (from brainstorm)

1. **Demo 範圍**: 4 內容頁 + 1 style guide 頁 = 5 頁
   - 首頁 (home)
   - 課程總覽 (courses index)
   - 課程詳情 (course detail, 用 Docker)
   - 單課文章頁 (lesson article, 用 Docker Lesson 1)
   - Style guide (色彩 tokens、字體、元件庫)
2. **技術形式**: 純靜態 HTML/CSS, 放在 `demo/`, 不需 build
3. **語言**: 只做英文版
4. **字體**: Google Font 線上載入 (League Spartan display + Inter body + JetBrains Mono code)
5. **裝飾強度**: 適度 — hero 與 section header 含 starburst/boomerang/organic blob; 卡片與文章頁保持乾淨以維持可讀性
6. **填充內容**: Docker 課程真實資料 (lesson article 取 Lesson 1)
7. **導航**: 頁面互連結 + 共用 nav, 可像真站瀏覽
8. **互動狀態**: 包含 hover/active/focus (button offset shadow 按壓、card hover、nav active、link underline、focus ring)
9. **Style guide**: 額外做 1 頁集中展示 tokens 與元件庫

## Requirements

### R1 檔案結構
- `demo/index.html` — 首頁
- `demo/courses.html` — 課程總覽
- `demo/course-docker.html` — Docker 課程詳情
- `demo/lesson-docker-1.html` — Docker Lesson 1 單課文章
- `demo/style-guide.html` — 設計系統索引頁
- `demo/styles.css` — 共用樣式 (mid-century modern tokens + 元件)
- `demo/assets/` — SVG 圖形 (starburst, boomerang, organic blob) 如需獨立檔案

### R2 風格套用
- 套用 mid-century modern 色彩 tokens (cream base, teal primary, mustard/orange accent, walnut border)
- 套用幾何 sans-serif 字體 (League Spartan heading + Inter body + JetBrains Mono code)
- 套用 offset shadow button/card (2px walnut border + 4-6px offset shadow)
- hero 與 section header 含 starburst/boomerang/organic blob 裝飾 (SVG)
- 文章頁保持乾淨, 裝飾僅限 section header

### R3 內容真實性
- 首頁與課程總覽: 使用 `src/data/courses.ts` 中所有課程的 metadata (title, category, subtitle, level, totalLessons)
- 課程詳情頁: 使用 Docker 課程的 overview/outcomes/modules/prerequisites/focus
- 單課文章頁: 使用 Docker Lesson 1 的完整 article data (intro, learningPoints, lessonNotes, exampleCode, practice, reasons, mistakes, takeaways, references)

### R4 導航與互動
- 共用 nav: brand + Courses 連結 + Style Guide 連結
- nav active state 標示當前頁
- 課程卡片連到 `course-docker.html` (Docker 卡) 或各課程對應頁 (demo 中只有 Docker 詳情頁, 其他卡片可連回 `courses.html` 或標示為 demo 限定)
- 課程詳情頁 lesson list 連到 `lesson-docker-1.html`
- button/card/link 含 hover/active/focus 狀態

### R5 Style Guide 頁
- 展示色彩 tokens (每色一個色塊 + hex + token 名)
- 展示字體配對 (display/body/mono 樣本)
- 展示元件: button (primary/secondary/outline)、card、badge、callout (info/warning/danger)、code block、nav、section header
- 展示裝飾圖形 (starburst, boomerang, organic blob)

### R6 響應式
- desktop (>960px): 完整 grid
- tablet (≤960px): 兩欄
- mobile (≤720px): 單欄, nav 折疊或簡化

## Acceptance Criteria

- [ ] `demo/` 含 5 個 HTML 頁 + 1 個 styles.css, 可直接用瀏覽器開啟預覽
- [ ] 5 頁皆套用 mid-century modern tokens (色彩/字體/shadow/border)
- [ ] 首頁列出所有 12 門課程的卡片, 含真實 metadata
- [ ] 課程詳情頁含 Docker overview/outcomes/modules/prerequisites
- [ ] 單課文章頁含 Docker Lesson 1 完整 article sections
- [ ] 頁面間可透過 nav 與卡片連結互相導航
- [ ] button/card/link 有 hover/active/focus 視覺狀態
- [ ] hero 與 section header 含 SVG 裝飾圖形
- [ ] style guide 頁展示所有 tokens 與元件
- [ ] 通過 `astro check` 不受影響 (demo 為獨立靜態檔, 不應破壞正式站 build)

## Out of Scope

- 不修改 `src/` 下任何正式站檔案
- 不做中文版 demo
- 不做 Astro build 整合 (demo 是純靜態)
- 不做其他課程的詳情頁 (只有 Docker)
- 不做 lesson 2-12 的 demo 頁 (只有 Lesson 1)
- 不做搜尋、主題切換、JS 互動邏輯

## Notes

- 本任務與 `06-15-add-docker-course` 互不依賴, 獨立驗收
- demo 產出後, 風格若獲採用, 再另開任務套用到正式站