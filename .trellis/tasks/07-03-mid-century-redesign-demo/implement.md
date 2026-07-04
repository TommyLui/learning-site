# Implement Plan: Mid-Century Modern Demo

## Execution Checklist

### 1. 建立 demo/ 基礎結構
- [ ] 建立 `demo/` 資料夾
- [ ] 建立 `demo/styles.css` 含完整 design tokens (色彩/字體/radius/shadow/border)
- [ ] 在 styles.css 定義 base styles (body, headings, links, selection)
- [ ] 在 styles.css 定義元件 styles (button, card, nav, section-header, callout, code-block, badge, hero, course-grid, footer)
- [ ] 在 styles.css 定義響應式 breakpoints (960px, 720px)

### 2. 首頁 `demo/index.html`
- [ ] `<head>`: Google Font link + styles.css link
- [ ] Nav (brand + Courses + Style Guide, home active)
- [ ] Hero: 標題 + 副標 + inline SVG (organic blob + starburst + boomerang)
- [ ] Courses section: eyebrow + 12 課程卡片 grid (從 courses.ts 摘錄真實 metadata)
- [ ] Footer
- [ ] 驗證: 瀏覽器開啟, 卡片連結正確

### 3. 課程總覽 `demo/courses.html`
- [ ] Nav (courses active)
- [ ] Page intro
- [ ] 12 課程卡片 grid
- [ ] Footer
- [ ] 驗證: nav active state, 卡片連結

### 4. 課程詳情 `demo/course-docker.html`
- [ ] Nav (courses active)
- [ ] Hero: Docker 標題 + subtitle + level + lesson count + CTA
- [ ] Overview / Outcomes (callout) / Prerequisites (badge) / Modules (module cards w/ lesson rows)
- [ ] Lesson rows 連結到 lesson-docker-1.html (Lesson 1) 或標示 demo 限定 (Lesson 2-12)
- [ ] Footer
- [ ] 驗證: 內容對照 courses.ts Docker entry

### 5. 單課文章 `demo/lesson-docker-1.html`
- [ ] Nav (courses active)
- [ ] 麵包屑
- [ ] Title + summary + intro
- [ ] Learning Points (callout list)
- [ ] Lesson Notes (段落)
- [ ] Example code block (bash)
- [ ] Practice list
- [ ] Reasons / Mistakes (two-column)
- [ ] Takeaways (highlight callout)
- [ ] References (link list)
- [ ] Footer
- [ ] 驗證: 內容對照 dockerLessons.ts Lesson 1

### 6. Style Guide `demo/style-guide.html`
- [ ] Nav (style guide active)
- [ ] Color tokens 區 (色塊 + hex + token 名)
- [ ] Typography 區 (display/body/mono 樣本)
- [ ] Components 區 (button/card/badge/callout/code/nav/section-header)
- [ ] Decorative 區 (starburst/boomerang/organic blob SVG 展示)
- [ ] Footer
- [ ] 驗證: 所有元件視覺正確

### 7. 最終驗證
- [ ] 5 頁互連結導航測試 (home→courses→docker→lesson→back)
- [ ] hover/active/focus 狀態視覺檢查
- [ ] 響應式: 縮窗至 720px 檢查單欄
- [ ] `astro check` 維持通過 (demo 不影響正式站)
- [ ] `astro build` 維持通過

## Validation Commands

```bash
# 正式站不受影響
npm run check
npm run build

# demo 預覽 (任選一頁用瀏覽器開)
# demo/index.html
```

## Risky Files / Rollback Points

- **新增 only**: 整個 `demo/` 資料夾。不修改 `src/` 任何檔案。
- **回滾**: `Remove-Item -Recurse demo/` 即可, 零副作用。
- **唯一風險**: demo 檔案被 Astro build 誤拾 — Astro 預設只看 `src/`, `demo/` 在根目錄不會被路由拾取, 但最終驗證仍跑 `astro build` 確認。

## Review Gates

- 完成 step 2 (首頁) 後: 視覺 checkpoint, 確認風格方向正確再繼續
- 完成 step 5 (lesson 頁) 後: 內容 checkpoint, 確認文章頁可讀性未被裝飾干擾
- 完成 step 7 後: 完整驗收

## Content Sources (摘錄自正式站, 不修改正式站)

- 課程 metadata: `src/data/courses.ts` (所有課程的 title/category/subtitle/level/totalLessons)
- Docker 詳情: `src/data/courses.ts:1629+` (overview/outcomes/modules/prerequisites/focus)
- Docker Lesson 1 article: `src/data/dockerLessons.ts:3-45` (完整 article data)