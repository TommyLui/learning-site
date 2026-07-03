# Design: Add Docker course

## Boundaries

- This change is content + data wiring only. No new Astro components, layouts, or styling changes are required.
- Docker is added as a **data-backed track**, identical in mechanics to the existing Go/Rust/C# tracks. It reuses:
  - `src/pages/courses/[slug]/lessons/index.astro`
  - `src/pages/courses/[slug]/lessons/[lesson].astro`
  - `src/pages/zh/courses/[slug]/lessons/index.astro`
  - `src/pages/zh/courses/[slug]/lessons/[lesson].astro`
- Dedicated route pages (`/courses/docker/index.astro` and its zh mirror) are thin meta-refresh redirects, matching every other dedicated track.

## Data flow

1. `src/data/courses.ts` owns the canonical catalog entry and module outline.
2. `src/data/dockerLessons.ts` and `src/data/dockerLessonsZh.ts` export arrays of `CourseLessonArticle` objects.
3. `src/data/lessonRegistry.ts` imports the getters, lists `docker` in both `DEDICATED_TRACK_SLUGS` and `DATA_BACKED_TRACK_SLUGS`, and routes `getLessonsBySlug('docker', locale)` to the correct file.
4. Astro's `getStaticPaths()` in the generic lesson pages consumes `getDataBackedTrackSlugs()` and generates the Docker routes at build time.

## Type safety

- Extend the `Course['slug']` union with `'docker'`.
- Reuse the existing `CourseLessonArticle` type exported from `src/data/goLessons.ts`.
- `DATA_BACKED_TRACK_SLUGS` and `DEDICATED_TRACK_SLUGS` are `as const` arrays; adding `'docker'` keeps type narrowing intact.

## Compatibility and rollout

- The `/courses/[slug].astro` page already filters out `DEDICATED_TRACK_SLUGS`, so adding `docker` there prevents a collision with the redirect page.
- `src/utils/paths.ts` uses `DEDICATED_TRACK_SLUGS` from the registry; adding `docker` automatically makes `getCoursePath('docker')` return `/courses/docker/lessons`.
- No existing course content or routes are modified.

## Rollback

- Revert the four edited files and delete the four new files to fully remove the Docker track.
