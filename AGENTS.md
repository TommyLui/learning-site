# AGENTS.md

## Scope

- Use the repo root app. `gullible-gamma/` is an ignored scaffold and not the active project.
- This is a static Astro teaching site for three separate tracks: React, Spring Boot, and MySQL. Keep them as separate course tracks unless explicitly asked to merge or restructure them.

## Tooling

- Required Node version: `>=22.12.0` in `package.json`; GitHub Pages deploy also uses `22.12.0` in `.github/workflows/deploy.yml`.
- Package manager and scripts:
  - `npm install`
  - `npm run dev`
  - `npm run check`
  - `npm run build`
  - `npm run preview`
- There is no repo lint or test script. For normal verification, run `npm run check` and then `npm run build`.

## Routing And Deployment Gotchas

- The site is deployed under the GitHub Pages base path `/learning-site` in `astro.config.mjs`.
- Do not hardcode root-relative links or asset paths. Use `src/utils/paths.ts`, especially `withBase()` and `localizePath()`.
- English routes live under `src/pages/**`; Traditional Chinese routes mirror them under `src/pages/zh/**`.
- The header locale switcher rewrites the current pathname by adding or removing `/zh`. Keep English and Chinese route structures parallel or the switcher will send users to missing pages.
- For new Chinese pages, follow the existing pattern used in `src/pages/zh/**`: define `const locale = 'zh' as const`, wrap `withBase()` in a local helper, and pass `locale={locale}` to `BaseLayout`.

## Content Sources

- `src/data/courses.ts` is the shared course catalog and module map used by the homepage and course landing pages in both locales.
- React lesson libraries come from `src/data/reactLessons.ts` and `src/data/reactLessonsZh.ts`.
- MySQL lesson libraries come from `src/data/mysqlLessons.ts` and `src/data/mysqlLessonsZh.ts`.
- Spring Boot lesson libraries are built from markdown files in `course-notes/springboot/` and `course-notes/springboot-zh/` through `src/data/springbootNotes.ts`.

## Spring Boot Markdown Format

- `src/data/springbootNotes.ts` reads Spring Boot notes directly from the filesystem with `fs/promises`. If you move or rename the `course-notes/` folders, update that loader too.
- Each Spring Boot note is expected to keep the current frontmatter keys: `title`, `lesson`, `slug`, `summary`.
- Section content is parsed from literal `##` headings and then read by the lesson page templates. Before renaming or translating section headings, check both:
  - `src/pages/courses/spring-boot/lessons/[lesson].astro`
  - `src/pages/zh/courses/spring-boot/lessons/[lesson].astro`

## Linking Gotcha

- `src/pages/courses/[slug].astro` and `src/pages/zh/courses/[slug].astro` build lesson links from the numeric part of `course.modules[].lessons[].number` in `src/data/courses.ts` and assume lesson URLs like `lesson-1`.
- If lesson numbering in `courses.ts` and the dedicated lesson slugs ever diverge, course landing page links will break. Keep them aligned or update those helpers.

## UI Constraints

- Shared shell: `src/layouts/BaseLayout.astro`; shared navigation/footer: `src/components/Header.astro` and `src/components/Footer.astro`.
- Keep changes Astro-first and CSS-first. The current app uses plain `.astro` components and CSS, not client framework islands.
- Preserve the editorial, content-first direction. The header dropdown and locale switcher are the main global navigation patterns; avoid turning the site into a dashboard or blog unless explicitly asked.
