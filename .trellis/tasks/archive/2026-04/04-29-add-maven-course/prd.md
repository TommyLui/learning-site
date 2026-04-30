# Add Maven Course

## Goal

Add Maven as a complete course track that fits the current static Astro teaching site structure, so it appears consistently with existing course tracks and provides full English and Traditional Chinese lesson content.

## What I Already Know

- The user wants to add a new course named `Maven` using the current course structure.
- This is a static Astro site in the repository root; `gullible-gamma/` is not the active app.
- Course catalog data lives in `src/data/courses.ts` and powers homepage/course menus/module maps in both locales.
- Generic data-backed tracks are registered in `src/data/lessonRegistry.ts` and rendered by:
  - `src/pages/courses/[slug]/lessons/index.astro`
  - `src/pages/courses/[slug]/lessons/[lesson].astro`
  - `src/pages/zh/courses/[slug]/lessons/index.astro`
  - `src/pages/zh/courses/[slug]/lessons/[lesson].astro`
- Existing data-backed tracks use paired lesson files, such as `src/data/sqliteLessons.ts` and `src/data/sqliteLessonsZh.ts`.
- Internal course links must use helpers from `src/utils/paths.ts`, especially `getCoursePath()` and `withBase()`.
- English and Traditional Chinese lesson data must stay in lockstep for lesson count, order, and slugs.
- For data-backed tracks, locale-specific `course.modules[].title` values must exactly match each lesson's `moduleTitle`, or module sections render empty.
- Existing Spring Boot notes mention Maven, but there is no dedicated Maven course track today.

## Decisions

- Maven is a separate course track, not merged into Spring Boot.
- Maven will use the data-backed track pattern, matching Go/Rust/C#/Next.js/TypeScript/PostgreSQL/SQLite.
- Scope is full course content: 12 beginner-to-intermediate lessons in English and Traditional Chinese.
- The course follows the 4-module outline researched in `research/maven-curriculum.md`.

## Open Questions

- None currently blocking implementation.

## Requirements

- Add a new `maven` course slug to the shared course system.
- Add English and Traditional Chinese Maven course metadata to `src/data/courses.ts`.
- Add paired lesson data files for Maven with 12 complete lessons:
  - `src/data/mavenLessons.ts`
  - `src/data/mavenLessonsZh.ts`
- Register Maven as a data-backed track in `src/data/lessonRegistry.ts`.
- Add English and Traditional Chinese redirect pages for `/courses/maven` and `/zh/courses/maven` so the course lands on the lesson hub.
- Keep English and Traditional Chinese route/content parity.
- Keep Maven lesson counts, order, and slugs identical across locales.
- Use exact module-title matching between `course.modules[].title` / `zhTitle` and each lesson object's `moduleTitle`.
- Use a beginner-to-intermediate curriculum covering Maven installation, POM, standard layout, dependencies, scopes, dependencyManagement/BOMs, lifecycle phases, plugins, wrapper/profiles, multi-module projects, local install, and remote deploy.
- Prefer official Apache Maven documentation links in lesson references.
- Preserve GitHub Pages base-path safety by relying on current path helpers.
- Keep the implementation Astro-first and data-backed; do not introduce framework islands.

## Acceptance Criteria

- [ ] Maven appears in the course catalog/navigation in English and Traditional Chinese.
- [ ] Maven course links resolve under `/courses/maven/lessons` and `/zh/courses/maven/lessons`.
- [ ] English and Traditional Chinese Maven lesson data have 12 lessons with matching order and slugs.
- [ ] `course.modules[].title` values match Maven lesson `moduleTitle` values exactly for each locale.
- [ ] Maven lesson pages build through the existing generic data-backed lesson routes.
- [ ] Maven course content includes lesson summaries, intro, learning points, notes, example code, practice, reasons, mistakes, takeaways, and references.
- [ ] Existing course tracks are not restructured or merged.
- [ ] `npm run check` passes.
- [ ] `npm run build` passes.

## Definition of Done

- Data and route changes follow `.trellis/spec/frontend/**` and `AGENTS.md`.
- Normal verification passes with `npm run check` and `npm run build`.
- No unrelated course restructuring is introduced.
- User-visible Maven references work in both locales.

## Out of Scope Explicit

- Restructuring existing React, Spring Boot, MySQL, Go, Rust, C#, Next.js, TypeScript, PostgreSQL, or SQLite tracks.
- Adding a new frontend framework, state library, test runner, or package manager.
- Changing the visual design beyond what is needed to surface the Maven course.
- Adding markdown-backed notes under `course-notes/`; Maven should use the existing data-backed lesson file pattern.

## Technical Notes

- Read `AGENTS.md` for routing/course/content rules.
- Read `.trellis/spec/frontend/index.md` for frontend conventions.
- Inspected `src/data/lessonRegistry.ts`; adding a data-backed track requires imports, `DEDICATED_TRACK_SLUGS`, `DATA_BACKED_TRACK_SLUGS`, and `getLessonsBySlug()` updates.
- Inspected `src/data/courses.ts`; the `Course['slug']` union and `courses` array need to include `maven`.
- Inspected `src/utils/paths.ts`; `getCoursePath()` already routes all `DEDICATED_TRACK_SLUGS` to `/courses/<slug>/lessons`.
- Inspected `src/data/sqliteLessons.ts` and `src/data/sqliteLessonsZh.ts` as the nearest data-backed lesson file pattern.
- Grep found Maven only inside existing Spring Boot notes, not as a course track.
- Research file created: `research/maven-curriculum.md`.

## Technical Approach

Use the existing data-backed course pattern:

- Update `src/data/courses.ts` to include `maven` in `Course['slug']` and add a Maven course entry with 4 modules and 12 lessons.
- Create `src/data/mavenLessons.ts` and `src/data/mavenLessonsZh.ts`, using the same `CourseLessonArticle` shape as existing data-backed tracks.
- Update `src/data/lessonRegistry.ts` imports, `DEDICATED_TRACK_SLUGS`, `DATA_BACKED_TRACK_SLUGS`, and `getLessonsBySlug()` for `maven`.
- Add `src/pages/courses/maven/index.astro` and `src/pages/zh/courses/maven/index.astro` redirect pages matching existing data-backed track redirects.
- Run `npm run check` and `npm run build`.

## Decision ADR-lite

**Context**: The site already supports generic data-backed lesson routes for tracks like Go, Rust, TypeScript, PostgreSQL, and SQLite. Maven is a structured course with many lessons and needs English/Traditional Chinese parity.

**Decision**: Implement Maven as a full data-backed course with 12 localized lessons, rather than a catalog-only reference or custom dedicated route tree.

**Consequences**: This keeps routing and rendering consistent with existing tracks, but requires careful updates across `courses.ts`, `lessonRegistry.ts`, two lesson data files, and two redirect pages. Module-title parity is mandatory to avoid empty lesson sections.

## Research References

- [`research/maven-curriculum.md`](research/maven-curriculum.md) — 12-lesson Maven curriculum, official docs references, and repo data constraints.

## Expansion Sweep

### Future Evolution

- Maven may later grow into a broader Java build tooling path with dependency management, lifecycle, plugins, testing, packaging, and publishing.
- If lesson pages are created now, matching the data-backed track pattern gives future lessons a stable extension point.

### Related Scenarios

- The Maven track should remain separate from Spring Boot while still complementing Java/Spring content.
- Route behavior should match current data-backed tracks, including English/Traditional Chinese redirects and lesson hubs.

### Failure and Edge Cases

- Missing locale parity can break locale switching or route generation.
- Mismatched module titles can render empty lesson groups.
- Missing `DEDICATED_TRACK_SLUGS` / `DATA_BACKED_TRACK_SLUGS` wiring can make catalog links or generated paths inconsistent.
