# AGENTS.md

## Scope

- Work in the repo root app. `gullible-gamma/` is gitignored scaffold, not the active project.
- This is a static Astro teaching site with separate tracks: React, Spring Boot, MySQL, Go, Rust, C#, Next.js, and TypeScript. Keep the tracks separate unless the user explicitly asks to restructure them.

## Commands

- Use Node `>=22.12.0`. `package.json` requires it and `.github/workflows/deploy.yml` builds with `22.12.0`.
- Main commands: `npm install`, `npm run dev`, `npm run check`, `npm run build`, `npm run preview`.
- There is no lint or test script. Normal verification is `npm run check` then `npm run build`.

## Routing And Locale

- The deployed site lives under the GitHub Pages base path `/learning-site` from `astro.config.mjs`.
- Do not hardcode root-relative links or asset paths. Use `src/utils/paths.ts`, especially `withBase()` and `localizePath()`.
- Spring Boot, React, MySQL, Go, Rust, C#, Next.js, and TypeScript are exceptions to the generic course route: their canonical landing pages are `/courses/<slug>/lessons` and `/zh/courses/<slug>/lessons`. The old `/courses/<slug>` routes redirect there.
- English pages live under `src/pages/**`; Traditional Chinese pages mirror them under `src/pages/zh/**`.
- `src/components/Header.astro` switches locale by rewriting the current pathname with or without `/zh`. Keep English and Chinese route structures parallel or the switcher will lead to missing pages.
- For new Chinese pages, follow the existing page pattern: define `const locale = 'zh' as const`, use a local `withBase()` wrapper for links, and pass `locale={locale}` into `BaseLayout` so `<html lang>` and shared navigation stay correct.

## Content Wiring

- `src/data/courses.ts` is the shared course catalog for homepages and course landing pages in both locales.
- `src/data/lessonRegistry.ts` is the shared resolver for generic data-backed tracks. If you add another data-backed course, update it together with `src/utils/paths.ts` and the `/courses/<slug>/index.astro` + `/zh/courses/<slug>/index.astro` redirect pages.
- React lessons come from `src/data/reactLessons.ts` and `src/data/reactLessonsZh.ts`.
- MySQL lessons come from `src/data/mysqlLessons.ts` and `src/data/mysqlLessonsZh.ts`.
- Go lessons come from `src/data/goLessons.ts` and `src/data/goLessonsZh.ts`.
- Rust lessons come from `src/data/rustLessons.ts` and `src/data/rustLessonsZh.ts`.
- C# lessons come from `src/data/csharpLessons.ts` and `src/data/csharpLessonsZh.ts`.
- Next.js lessons come from `src/data/nextjsLessons.ts` and `src/data/nextjsLessonsZh.ts`.
- TypeScript lessons come from `src/data/typescriptLessons.ts` and `src/data/typescriptLessonsZh.ts`.
- `src/pages/courses/[slug]/lessons/**` and `src/pages/zh/courses/[slug]/lessons/**` currently own the generic data-backed tracks: Go, Rust, C#, Next.js, and TypeScript.
- React and MySQL still use dedicated per-track lesson pages under `src/pages/courses/react/**`, `src/pages/courses/mysql/**`, and their zh mirrors.
- Spring Boot lessons are filesystem-backed markdown loaded by `src/data/springbootNotes.ts` from `course-notes/springboot/` and `course-notes/springboot-zh/`.

## Spring Boot Notes

- `src/data/springbootNotes.ts` only loads files matching `lesson-<number>.md`; `lesson-template.md` is ignored.
- Each Spring Boot note must keep frontmatter keys `title`, `lesson`, `slug`, and `summary`.
- The loader normalizes both English and Traditional Chinese `##` headings. English notes use labels like `What You Will Learn`, `Why This Matters`, `Main Ideas`, `Lesson Notes`, `Example`, `Common Mistakes`, `Practice`, `Continuity`, `Key Takeaway`, and `Official References`; zh notes can use `這一課會學到什麼`, `為什麼重要`, `主要觀念`, `課程筆記`, `範例`, `常見錯誤`, `練習`, `延續閱讀`, `課後重點`, and `官方參考資料`.
- If you rename the `course-notes/springboot*` folders or change those heading labels, update `src/data/springbootNotes.ts` and the Spring Boot lesson pages in both locales so the aliases stay in sync.

## Linking Gotcha

- `src/pages/courses/[slug].astro` and `src/pages/zh/courses/[slug].astro` no longer own Spring Boot, React, MySQL, Go, Rust, C#, Next.js, or TypeScript. Those tracks land on their `/lessons` index pages, while the generic route only applies to any future non-dedicated course pages.
- For any data-backed track, the locale-specific `course.modules[].title` values in `src/data/courses.ts` must match each lesson's `moduleTitle` in that locale, or the lesson hub renders empty module sections.
- Keep EN and zh lesson libraries in lockstep for lesson count, order, and slugs. If they drift, route generation and locale parity break.

## UI

- Shared shell lives in `src/layouts/BaseLayout.astro` with navigation in `src/components/Header.astro` and footer in `src/components/Footer.astro`.
- Keep changes Astro-first and CSS-first. This site uses plain `.astro` pages/components, not framework islands.
- Preserve the existing editorial, content-first layout style rather than turning pages into app-like dashboards unless the user asks for that.
