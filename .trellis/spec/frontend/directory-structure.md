# Directory Structure

> How frontend code is organized in this project.

---

## Overview

This is a single Astro app at the repository root. The frontend is organized by Astro's filesystem routing plus a small set of shared components, data modules, utilities, and global CSS.

Do not work in `gullible-gamma/` if it exists; `AGENTS.md` identifies it as gitignored scaffold and not the active project.

---

## Directory Layout

```text
src/
├── components/
│   ├── CourseCard.astro
│   ├── Footer.astro
│   ├── Header.astro
│   └── LessonRow.astro
├── data/
│   ├── courses.ts
│   ├── lessonRegistry.ts
│   ├── springbootNotes.ts
│   ├── reactLessons.ts
│   ├── reactLessonsZh.ts
│   ├── mysqlLessons.ts
│   ├── mysqlLessonsZh.ts
│   └── <track>Lessons(.Zh).ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── courses/
│   │   ├── index.astro
│   │   ├── [slug].astro
│   │   ├── [slug]/lessons/index.astro
│   │   ├── [slug]/lessons/[lesson].astro
│   │   ├── react/**
│   │   ├── mysql/**
│   │   └── spring-boot/**
│   └── zh/
│       ├── index.astro
│       └── courses/**
├── styles/
│   └── global.css
└── utils/
    └── paths.ts

course-notes/
├── springboot/
└── springboot-zh/
```

Key examples:

- `src/layouts/BaseLayout.astro` imports `src/styles/global.css` and composes `Header` + `Footer` around page content.
- `src/components/Header.astro` owns language switching and course menu links.
- `src/data/courses.ts` is the shared course catalog for homepage cards, course menus, module maps, and localized variants.
- `src/data/lessonRegistry.ts` owns dedicated/data-backed track slugs and the generic data-backed track resolver.
- `src/pages/courses/[slug]/lessons/**` renders generic data-backed lesson tracks.
- `src/pages/zh/courses/[slug]/lessons/**` mirrors the generic data-backed lesson routes in Traditional Chinese.

---

## Route Organization

### English and Traditional Chinese pages stay parallel

English pages live under `src/pages/**`; Traditional Chinese pages mirror them under `src/pages/zh/**`.

Examples:

- `src/pages/index.astro` ↔ `src/pages/zh/index.astro`
- `src/pages/courses/index.astro` ↔ `src/pages/zh/courses/index.astro`
- `src/pages/courses/[slug]/lessons/[lesson].astro` ↔ `src/pages/zh/courses/[slug]/lessons/[lesson].astro`
- `src/pages/courses/react/lessons/index.astro` ↔ `src/pages/zh/courses/react/lessons/index.astro`

`Header.astro` switches locale by rewriting the current pathname with `localizePath()`, so route structures must stay parallel.

### Dedicated track routes

Dedicated tracks land on lesson hubs:

- `src/pages/courses/react/**`
- `src/pages/courses/mysql/**`
- `src/pages/courses/spring-boot/**`
- Chinese mirrors under `src/pages/zh/courses/<slug>/**`

Their `/courses/<slug>/index.astro` files are small meta-refresh redirect pages. Example: `src/pages/courses/go/index.astro` redirects to `withBase('/courses/go/lessons')`; `src/pages/zh/courses/go/index.astro` redirects to `withBase('/courses/go/lessons', 'zh')`.

### Generic data-backed lesson routes

Go, Rust, C#, Next.js, TypeScript, PostgreSQL, SQLite, and Maven use the generic dynamic lesson pages:

- `src/pages/courses/[slug]/lessons/index.astro`
- `src/pages/courses/[slug]/lessons/[lesson].astro`
- `src/pages/zh/courses/[slug]/lessons/index.astro`
- `src/pages/zh/courses/[slug]/lessons/[lesson].astro`

The route list comes from `DATA_BACKED_TRACK_SLUGS` in `src/data/lessonRegistry.ts`.

### Future generic course pages

`src/pages/courses/[slug].astro` and `src/pages/zh/courses/[slug].astro` currently exclude every active track using `DEDICATED_TRACK_SLUGS`; they exist for future non-dedicated course pages only.

---

## Data Organization

Use data modules as the source of truth rather than duplicating course metadata in pages.

- `src/data/courses.ts` defines `Course`, `CourseModule`, `ModuleLesson`, `RecentLesson`, and `courses`.
- `getCourses(locale)` and `getCourseBySlug(slug, locale)` in `src/data/courses.ts` produce localized course data.
- `src/data/lessonRegistry.ts` maps data-backed tracks to their English and Chinese lesson arrays.
- Data-backed lesson files use paired English/Chinese files such as `src/data/goLessons.ts` and `src/data/goLessonsZh.ts`.
- Spring Boot loads markdown notes from `course-notes/springboot/` and `course-notes/springboot-zh/` through `src/data/springbootNotes.ts`.

When adding or renaming a data-backed track, update all of these together:

1. `src/data/lessonRegistry.ts`
2. `src/utils/paths.ts`
3. `src/data/courses.ts`
4. English redirect page at `src/pages/courses/<slug>/index.astro`
5. Chinese redirect page at `src/pages/zh/courses/<slug>/index.astro`

For data-backed tracks, localized `course.modules[].title` values must exactly match each lesson's `moduleTitle`; otherwise module sections render empty. This pattern is visible in `src/pages/courses/[slug]/lessons/index.astro`, where lessons are grouped by `lesson.moduleTitle` and read back by `module.title`.

---

## Naming Conventions

- Astro components use `PascalCase.astro`: `CourseCard.astro`, `LessonRow.astro`, `BaseLayout.astro`.
- Data modules use camelCase names: `courses.ts`, `lessonRegistry.ts`, `springbootNotes.ts`.
- Localized lesson data appends `Zh`: `goLessons.ts` and `goLessonsZh.ts`, `reactLessons.ts` and `reactLessonsZh.ts`.
- Route folders use lowercase/kebab-case slugs: `spring-boot`, `postgresql`, `typescript`.
- Dynamic Astro route params use bracket filenames: `[slug].astro`, `[lesson].astro`.
- Chinese pages usually start with `const locale = 'zh' as const` and a local `localize` helper before imports, matching files such as `src/pages/zh/courses/[slug]/lessons/[lesson].astro`.

---

## Assets and Styles

The current site has no component-local CSS modules, Tailwind, or image asset pipeline. Styling is centralized in `src/styles/global.css` with reusable classes and CSS custom properties.

Examples:

- `src/components/CourseCard.astro` sets `style={`--course-accent: ${course.accent}`}` and relies on `.course-card` / `.course-card-media` in `global.css`.
- `src/components/Header.astro` uses classes such as `.site-header`, `.language-switch`, and `.course-dropdown` defined in `global.css`.
- `src/styles/global.css` owns layout containers, panels, note cards, responsive media queries, and theme variables.

---

## Anti-Patterns to Avoid

- Do not hardcode root-relative URLs like `/courses` directly into `href` or `src`; use `withBase()` or `localize()`.
- Do not add unrelated app code under `gullible-gamma/`.
- Do not merge course tracks together unless explicitly requested; React, Spring Boot, Maven, MySQL, Go, Rust, C#, Next.js, TypeScript, PostgreSQL, and SQLite are separate tracks.
- Do not add a Chinese-only route or English-only route when a mirrored route is expected.
- Do not duplicate course catalog data in a page when `src/data/courses.ts` or `src/data/lessonRegistry.ts` already owns it.
