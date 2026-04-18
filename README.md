# Learning Site

繁中：這是一個以教學內容為主的 Astro 學習網站，整理多條技術主線：React、Spring Boot、MySQL、Go、Rust、C#、Next.js、TypeScript。

English: This is a content-first Astro learning site for multiple teaching tracks: React, Spring Boot, MySQL, Go, Rust, C#, Next.js, and TypeScript.

## Current Status / 目前狀態

- English-first routes at `/`
- Traditional Chinese routes at `/zh`
- Course landing pages for all dedicated tracks
- Lesson library pages and single-lesson pages for React, Spring Boot, MySQL, Go, Rust, C#, Next.js, and TypeScript
- Header locale switcher
- GitHub Pages deployment support with the `/learning-site` base path

- 英文預設路由在 `/`
- 繁中路由在 `/zh`
- 目前主題線都有獨立課程首頁
- React、Spring Boot、MySQL、Go、Rust、C#、Next.js、TypeScript 都有 lessons 列表頁與單課頁
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
- `src/data/lessonRegistry.ts` - shared registry for generic data-backed tracks (Go, Rust, C#, Next.js, TypeScript)
- `src/pages/courses/[slug]/lessons/` - generic English lesson hub/article routes for data-backed tracks
- `src/pages/zh/courses/[slug]/lessons/` - generic Traditional Chinese mirror of the data-backed lesson routes
- `course-notes/` - Spring Boot markdown lesson sources
- `course-notes/springboot-zh/` - Traditional Chinese Spring Boot markdown lesson sources

- `src/pages/` - 英文頁面路由
- `src/pages/zh/` - 繁中頁面路由
- `src/components/` - 共用 UI 元件，例如 header / footer
- `src/layouts/` - 共用版型
- `src/data/` - 課程 metadata 與 lesson 資料
- `src/data/lessonRegistry.ts` - Go、Rust、C#、Next.js、TypeScript 共用的 data-backed 課程 registry
- `src/pages/courses/[slug]/lessons/` - data-backed 課程共用英文 lessons 列表頁與單課頁
- `src/pages/zh/courses/[slug]/lessons/` - data-backed 課程共用繁中 lessons 列表頁與單課頁
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

Recommended verification order / 建議驗證順序：

```bash
npm run check
npm run build
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
- Dedicated tracks use `/courses/<slug>/lessons` as the canonical landing page, with old `/courses/<slug>` URLs redirecting there.
- React, MySQL, Go, Rust, C#, Next.js, and TypeScript lesson data are split into English and Chinese sources.
- Go, Rust, C#, Next.js, and TypeScript use the shared data-backed lesson registry and dynamic lesson routes.
- React and MySQL still use dedicated per-track lesson pages, while Spring Boot remains markdown-backed.
- Spring Boot content uses markdown-backed lesson notes with locale-aware loading.

- 英文是預設路由。
- 中文頁面都在 `/zh`。
- 各條獨立課程的 canonical 入口都是 `/courses/<slug>/lessons`，舊的 `/courses/<slug>` 會 redirect 過去。
- React、MySQL、Go、Rust、C#、Next.js、TypeScript 已拆成英中兩套資料來源。
- Go、Rust、C#、Next.js、TypeScript 透過共用的 data-backed lesson registry 與動態 lessons 路由產生頁面。
- React、MySQL 仍使用各自的專用 lesson pages，Spring Boot 仍是 markdown-backed。
- Spring Boot 使用 markdown 課程筆記，並以 locale-aware 方式載入。
