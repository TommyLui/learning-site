# State Management

> How state is managed in this project.

---

## Overview

This static Astro site does not use a client-side state management library. There is no Redux, Zustand, Jotai, MobX, React Context in the app implementation, React Query, or SWR.

State is represented as:

- Static course catalog data in `src/data/courses.ts`.
- Static lesson arrays in files such as `src/data/goLessons.ts`, `src/data/goLessonsZh.ts`, `src/data/reactLessons.ts`, and `src/data/mysqlLessons.ts`.
- Markdown-backed Spring Boot notes read by `src/data/springbootNotes.ts` from `course-notes/springboot/` and `course-notes/springboot-zh/`.
- Derived build-time values in Astro frontmatter.
- Locale and current route information derived from URL/pathname and `locale` props.

---

## State Categories

### Static catalog state

`src/data/courses.ts` is the shared source of truth for course metadata used by homepages, menus, module maps, and summaries. It defines course slugs, titles, localized fields, accent colors, modules, prerequisites, outcomes, and lesson counts.

Examples:

- `src/pages/index.astro` imports `courses` directly for English course cards.
- `src/pages/zh/index.astro` calls `getCourses(locale)` for localized course cards.
- `src/components/Header.astro` calls `getCourses(locale)` for the course dropdown.

### Lesson state

Lesson content is static data:

- React and MySQL use dedicated lesson arrays: `src/data/reactLessons.ts`, `src/data/reactLessonsZh.ts`, `src/data/mysqlLessons.ts`, `src/data/mysqlLessonsZh.ts`.
- Data-backed tracks use paired lesson arrays registered in `src/data/lessonRegistry.ts`.
- Spring Boot uses markdown notes loaded by `getSpringBootNotes(locale)`.

Keep English and Chinese lesson data in lockstep for lesson count, order, and slugs.

### Derived page state

Pages derive view-model values locally in frontmatter rather than storing them globally.

Examples:

- `src/pages/courses/[slug]/lessons/index.astro` computes `firstLesson`, `latestLesson`, `totalModules`, `currentLessonCount`, `lessonsByModule`, and `noteModules` from route props.
- `src/pages/courses/[slug]/lessons/[lesson].astro` computes `estimatedMinutes` from `lesson.exampleCode` and `lesson.lessonNotes`.
- `src/pages/zh/courses/spring-boot/lessons/index.astro` computes `notesBySlug`, `note模組s`, `total模組s`, and `averageLessonsPer模組` from markdown notes and course modules.

### Locale and URL state

Locale is explicit and route-based:

- English is the default locale (`'en'`).
- Chinese pages set `const locale = 'zh' as const` and pass `locale={locale}` into `BaseLayout`.
- `src/components/Header.astro` derives the current locale from `Astro.url.pathname` through `detectLocaleFromPathname()`.
- Locale switching is done with `localizePath(pathname, 'en' | 'zh')`.

---

## When to Use Global State

There is no current global mutable state pattern. Do not add global client state for normal site work.

Use existing single-source modules instead:

- Course metadata → `src/data/courses.ts`
- Dedicated/data-backed track membership → `src/data/lessonRegistry.ts`
- Base path and locale path behavior → `src/utils/paths.ts`
- Shared visual styling → `src/styles/global.css`

If the same derived value appears across pages, prefer a plain utility or data helper before considering any client-side state mechanism. For example, course path logic is centralized in `getCoursePath()` instead of duplicated in components.

---

## Server State

There is no runtime server state or API cache in the app. Astro builds static pages from local files and TypeScript data.

Spring Boot notes are the closest thing to a data-loading layer:

- `getNotesDirectory(locale)` chooses `course-notes/springboot` or `course-notes/springboot-zh`.
- `getSpringBootNotes(locale)` filters files matching `lesson-<number>.md`, ignores `lesson-template.md`, parses them, and sorts by numeric lesson.
- Spring Boot route pages call `await getSpringBootNotes()` inside Astro frontmatter/static path generation.

Do not introduce runtime fetch/cache libraries unless the project stops being a static teaching site.

---

## Common Mistakes to Avoid

- Duplicating course metadata in a page instead of updating `src/data/courses.ts`.
- Updating only English lesson data and forgetting the matching `*Zh.ts` file or `course-notes/springboot-zh/` note.
- Changing a module title in `courses.ts` without updating matching lesson `moduleTitle` values for data-backed tracks.
- Adding client-side state for a value that can be derived at build time.
- Hardcoding locale or base-path behavior instead of using `src/utils/paths.ts`.
