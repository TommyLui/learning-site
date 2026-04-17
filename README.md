# Learning Site

繁中：這是一個以教學內容為主的 Astro 學習網站，整理三條主線課程：React、Spring Boot、MySQL。

English: This is a content-first Astro learning site for three teaching tracks: React, Spring Boot, and MySQL.

## Current Status / 目前狀態

- English-first routes at `/`
- Traditional Chinese routes at `/zh`
- Course landing pages for all three tracks
- Lesson library pages and single-lesson pages for React, Spring Boot, and MySQL
- Header locale switcher
- GitHub Pages deployment support with the `/learning-site` base path

- 英文預設路由在 `/`
- 繁中路由在 `/zh`
- 三條課程主線都有獨立課程首頁
- React、Spring Boot、MySQL 都有 lessons 列表頁與單課頁
- Header 內建語言切換
- 已支援 GitHub Pages 的 `/learning-site` base path

## Tech Stack / 技術棧

- Astro
- TypeScript

## Project Structure / 專案結構

- `src/pages/` - English routes
- `src/pages/zh/` - Traditional Chinese routes
- `src/components/` - shared UI such as header and footer
- `src/layouts/` - shared page layout
- `src/data/` - course metadata and lesson content
- `course-notes/` - Spring Boot markdown lesson sources
- `course-notes/springboot-zh/` - Traditional Chinese Spring Boot markdown lesson sources

- `src/pages/` - 英文頁面路由
- `src/pages/zh/` - 繁中頁面路由
- `src/components/` - 共用 UI 元件，例如 header / footer
- `src/layouts/` - 共用版型
- `src/data/` - 課程 metadata 與 lesson 資料
- `course-notes/` - Spring Boot 英文 markdown 課程來源
- `course-notes/springboot-zh/` - Spring Boot 繁中 markdown 課程來源

## Development / 本機開發

Install dependencies / 安裝套件：

```bash
npm install
```

Run the local dev server / 啟動本機開發站：

```bash
npm run dev
```

Run Astro and type checks / 執行 Astro 與型別檢查：

```bash
npm run check
```

Create a production build / 建立正式版 build：

```bash
npm run build
```

Preview the production build locally / 本機預覽正式版：

```bash
npm run preview
```

## Deployment / 部署

This project is configured for GitHub Pages:

- Site: `https://tommylui.github.io`
- Base path: `/learning-site`

本專案目前設定為 GitHub Pages：

- Site: `https://tommylui.github.io`
- Base path: `/learning-site`

Astro config: `astro.config.mjs`

## Notes / 備註

- English is the default route.
- Chinese pages live under `/zh`.
- React and MySQL lesson data are split into English and Chinese sources.
- Spring Boot content uses markdown-backed lesson notes with locale-aware loading.

- 英文是預設路由。
- 中文頁面都在 `/zh`。
- React 與 MySQL 已拆成英中兩套資料來源。
- Spring Boot 使用 markdown 課程筆記，並以 locale-aware 方式載入。
