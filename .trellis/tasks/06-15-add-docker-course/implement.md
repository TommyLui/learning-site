# Implementation plan: Add Docker course

## Files to edit

1. `src/data/courses.ts`
   - Add `'docker'` to the `Course['slug']` union.
   - Append a full Docker `Course` object (English + Chinese fields, 12 lessons across 5 modules).

2. `src/data/lessonRegistry.ts`
   - Add `'docker'` to `DEDICATED_TRACK_SLUGS`.
   - Add `'docker'` to `DATA_BACKED_TRACK_SLUGS`.
   - Import `getDockerLessons` from `dockerLessons` and `getDockerLessons as getDockerLessonsZh` from `dockerLessonsZh`.
   - Add the `docker` case in `getLessonsBySlug`.

3. `src/data/dockerLessons.ts` (new)
   - Export `dockerLessons: CourseLessonArticle[]` with 12 English lessons.
   - Reuse `CourseLessonArticle` type from `goLessons`.

4. `src/data/dockerLessonsZh.ts` (new)
   - Export `dockerLessons: CourseLessonArticle[]` with 12 Traditional Chinese lessons.
   - Keep slugs, lesson numbers, and module titles matching the English version.

5. `src/pages/courses/docker/index.astro` (new)
   - Meta-refresh redirect to `/courses/docker/lessons`.

6. `src/pages/zh/courses/docker/index.astro` (new)
   - Meta-refresh redirect to `/zh/courses/docker/lessons`.

## Validation commands

```bash
npm run check
npm run build
```

## Review gates

- [ ] `npm run check` passes.
- [ ] `npm run build` passes.
- [ ] Generated site contains `/courses/docker/lessons/index.html`.
- [ ] Generated site contains `/zh/courses/docker/lessons/index.html`.
- [ ] Docker card renders on `/courses` and `/zh/courses`.
- [ ] Locale switch between `/courses/docker/lessons/lesson-1` and `/zh/courses/docker/lessons/lesson-1` works via header.

## Rollback point

- If any validation fails, revert edited files and remove new files before attempting a fix.
