# PRD: Add Docker course

## Goal

Add a Docker course track to the static Astro teaching site, following the existing data-backed course structure used by Go, Rust, C#, Next.js, TypeScript, PostgreSQL, SQLite, and Maven.

## Scope

- Add Docker as a new course in the shared catalog (`src/data/courses.ts`).
- Provide full English and Traditional Chinese lesson data.
- Wire the course into the lesson registry so generic routes generate its pages.
- Add locale-specific redirect pages for `/courses/docker` and `/zh/courses/docker`.
- Keep the number of lessons and module titles in lockstep between locales.
- Do not introduce new dependencies, components, or framework islands.

## Course shape (proposed)

- **Slug:** `docker`
- **Short label:** `DK`
- **Category:** `DevOps and platform fundamentals` / `DevOps 與平台基礎`
- **Level:** Beginner to intermediate
- **Total lessons:** 12
- **Accent color:** `#2496ED` (Docker blue)
- **Modules:**
  1. Docker foundations and first container
  2. Images, layers, and Dockerfiles
  3. Container lifecycle, data, and volumes
  4. Networking and multi-container apps with Compose
  5. Registry workflow and production-ready habits

## Acceptance criteria

1. `npm run check` passes with no TypeScript or Astro errors.
2. `npm run build` succeeds and generates all Docker routes.
3. `/courses/docker` redirects to `/courses/docker/lessons`.
4. `/zh/courses/docker` redirects to `/zh/courses/docker/lessons`.
5. The Docker card appears on `/courses` and `/zh/courses`.
6. The Docker lesson library renders the module map and all 12 lesson articles in both locales.
7. Locale switching in the header works on Docker lesson pages (English ↔ Chinese paths stay parallel).
8. Each lesson's `moduleTitle` exactly matches the corresponding locale's `course.modules[].title`.
