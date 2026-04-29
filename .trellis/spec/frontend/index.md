# Frontend Development Guidelines

> Project-specific conventions for this static Astro teaching site.

---

## Overview

This repository is a content-first Astro site deployed under the GitHub Pages base path `/learning-site`. The active app is the repository root; ignore `gullible-gamma/` if it exists because it is a gitignored scaffold, not the production site.

The current frontend is intentionally simple:

- Astro pages and Astro components only; there are no React/Vue/Svelte islands in the site implementation.
- Shared shell lives in `src/layouts/BaseLayout.astro`, navigation in `src/components/Header.astro`, footer in `src/components/Footer.astro`, and global styling in `src/styles/global.css`.
- Course metadata and lesson data live in `src/data/**`; routes render that data at build time.
- English routes live under `src/pages/**`; Traditional Chinese mirrors live under `src/pages/zh/**`.
- Links and assets must go through helpers in `src/utils/paths.ts` so the `/learning-site` base path and `/zh` locale prefix stay correct.

These guidelines document the current codebase reality imported from `AGENTS.md` and verified against files such as `src/components/Header.astro`, `src/pages/courses/[slug]/lessons/[lesson].astro`, and `src/data/lessonRegistry.ts`.

---

## Guidelines Index

| Guide | Description | Status |
|-------|-------------|--------|
| [Directory Structure](./directory-structure.md) | Module organization and file layout | Filled |
| [Component Guidelines](./component-guidelines.md) | Astro component patterns, props, composition, links, accessibility | Filled |
| [Hook Guidelines](./hook-guidelines.md) | Current no-hook policy and build-time data loading patterns | Filled |
| [State Management](./state-management.md) | Static data sources, derived state, locale state, and avoided state libraries | Filled |
| [Quality Guidelines](./quality-guidelines.md) | Verification commands, review checklist, forbidden patterns | Filled |
| [Type Safety](./type-safety.md) | Type patterns, route props, unions, `as const`, current escape hatches | Filled |

---

## Pre-Development Checklist

Before changing frontend code or course content, confirm:

1. You are working in the repo root app, not `gullible-gamma/`.
2. The change can stay Astro-first and CSS-first; do not introduce framework islands unless explicitly requested.
3. Any internal link uses `withBase()`, `localizePath()`, or `getCoursePath()` from `src/utils/paths.ts`.
4. English and Traditional Chinese route structures remain parallel when adding or renaming pages.
5. Course/lesson changes keep `src/data/courses.ts`, `src/data/lessonRegistry.ts`, localized lesson files, and redirect pages in sync.
6. For data-backed tracks, `course.modules[].title` still exactly matches each lesson's `moduleTitle` in that locale.

---

## Quality Check

Normal verification is:

```bash
npm run check
npm run build
```

There is no separate lint or test script in `package.json` today. `npm run check` runs `astro check`; `npm run build` verifies static generation.

---

**Language**: All documentation in `.trellis/spec/` should be written in **English**.
