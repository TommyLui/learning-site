# AGENTS.md

## Agents 工作守則
### 首要原則
-本節是最高優先規則；若後文與本節衝突，以本節為準。
-除非使用者明確要求其他語言，代理人的所有回覆應使用繁體中文。
-程式碼、指令、錯誤訊息、API 名稱、套件名稱與專有名詞可保留原文，避免翻譯造成歧義。
-先理解使用者目標、限制、現有程式碼與專案慣例，再提出或實作方案。
-優先做最小、清楚、可驗證、可回滾的正確變更；避免無關重構與範圍擴張。
-對使用者描述的觀察、斷言、歸因與方案保持驗證意識，不把未確認內容當成事實。

## Scope

- Work in the repo root app. `gullible-gamma/` is gitignored scaffold, not the active project.
- This is a static Astro teaching site. Keep React, Spring Boot, MySQL, Go, Rust, C#, Next.js, TypeScript, PostgreSQL, and SQLite as separate course tracks unless explicitly asked to restructure them.

## Commands

- Use Node `>=22.12.0`; `package.json` requires it and GitHub Pages CI builds with `22.12.0`.
- Install with `npm install`; the repo uses `package-lock.json` and has no pnpm/yarn workspace.
- Dev/verify commands: `npm run dev`, `npm run check`, `npm run build`, `npm run preview`.
- There is no lint or test script. Normal verification is `npm run check` then `npm run build`.

## Routing And Links

- `astro.config.mjs` sets the GitHub Pages base path to `/learning-site`; never hardcode root-relative links or asset paths.
- Use `src/utils/paths.ts` helpers: `withBase()` for links/assets, `localizePath()` for locale switching, and `getCoursePath()` for course links.
- English routes live under `src/pages/**`; Traditional Chinese mirrors live under `src/pages/zh/**`.
- `Header.astro` switches locale by rewriting the current pathname with or without `/zh`, so route structures must stay parallel.
- Dedicated tracks land on `/courses/<slug>/lessons` and `/zh/courses/<slug>/lessons`; their `/courses/<slug>/index.astro` pages are meta-refresh redirects.
- `src/pages/courses/[slug].astro` and `src/pages/zh/courses/[slug].astro` exclude all current tracks via `DEDICATED_TRACK_SLUGS`; they are only for future non-dedicated course pages.
- For new Chinese pages, follow the existing pattern: `const locale = 'zh' as const`, a local `localize = (path) => withBase(path, locale)`, and `locale={locale}` on `BaseLayout`.

## Course Content

- `src/data/courses.ts` is the shared course catalog for homepages, course menus, and module maps in both locales.
- `src/data/lessonRegistry.ts` owns dedicated track slugs and the generic data-backed resolver.
- Generic data-backed tracks are Go, Rust, C#, Next.js, TypeScript, PostgreSQL, and SQLite; their routes are `src/pages/courses/[slug]/lessons/**` and `src/pages/zh/courses/[slug]/lessons/**`.
- React and MySQL have dedicated lesson routes under `src/pages/courses/react/**`, `src/pages/courses/mysql/**`, and zh mirrors.
- Spring Boot lesson routes are dedicated, but content is loaded from markdown in `course-notes/springboot/` and `course-notes/springboot-zh/` by `src/data/springbootNotes.ts`.
- When adding or renaming a data-backed track, update `src/data/lessonRegistry.ts`, `src/utils/paths.ts`, `src/data/courses.ts`, and both locale redirect pages for `/courses/<slug>/index.astro`.
- For data-backed tracks, locale-specific `course.modules[].title` values must exactly match each lesson's `moduleTitle`, or module sections render empty.
- Keep English and zh lesson data in lockstep for lesson count, order, and slugs; route generation and locale switching assume parity.

## Spring Boot Notes

- `src/data/springbootNotes.ts` only loads files matching `lesson-<number>.md`; `lesson-template.md` is ignored.
- Spring Boot note frontmatter must keep `title`, `lesson`, `slug`, and `summary`.
- The loader normalizes specific English and Traditional Chinese `##` headings. If headings or `course-notes/springboot*` folders change, update `SECTION_KEY_ALIASES`, `getNotesDirectory()`, and both locale Spring Boot lesson pages.

## UI

- Shared shell is `src/layouts/BaseLayout.astro`; navigation is `src/components/Header.astro`; footer is `src/components/Footer.astro`; global styling is `src/styles/global.css`.
- Keep changes Astro-first and CSS-first. This site uses plain `.astro` pages/components, not framework islands.
- Preserve the editorial, content-first layout style unless the user asks for an app-like redesign.
<!-- TRELLIS:START -->
# Trellis Instructions

These instructions are for AI assistants working in this project.

This project is managed by Trellis. The working knowledge you need lives under `.trellis/`:

- `.trellis/workflow.md` — development phases, when to create tasks, skill routing
- `.trellis/spec/` — package- and layer-scoped coding guidelines (read before writing code in a given layer)
- `.trellis/workspace/` — per-developer journals and session traces
- `.trellis/tasks/` — active and archived tasks (PRDs, research, jsonl context)

If a Trellis command is available on your platform (e.g. `/trellis:finish-work`, `/trellis:continue`), prefer it over manual steps. Not every platform exposes every command.

If you're using Codex or another agent-capable tool, additional project-scoped helpers may live in:
- `.agents/skills/` — reusable Trellis skills
- `.codex/agents/` — optional custom subagents

Managed by Trellis. Edits outside this block are preserved; edits inside may be overwritten by a future `trellis update`.

<!-- TRELLIS:END -->
