# Hook Guidelines

> How hooks are used in this project.

---

## Overview

The site implementation currently uses no runtime React hooks and has no `src/hooks/` directory. This is an Astro-first static teaching site. Hook names such as `useState`, `useEffect`, and `useCourses` appear only inside course lesson example strings, for example in `src/data/reactLessons.ts` and `src/data/reactLessonsZh.ts`; they are lesson content, not site infrastructure.

Do not introduce custom hooks for normal content, layout, routing, or course catalog changes. Use Astro frontmatter, data modules, and shared utilities instead.

---

## Current Pattern: Build-Time Logic Instead of Hooks

The app derives data at build time in Astro frontmatter and TypeScript modules.

Examples:

- `src/pages/courses/[slug]/lessons/index.astro` groups lessons by module using a local `Map` in frontmatter.
- `src/pages/courses/[slug]/lessons/[lesson].astro` computes `previousLesson`, `nextLesson`, and `estimatedMinutes` during static generation.
- `src/pages/zh/courses/[slug]/lessons/index.astro` uses the same build-time pattern for Chinese data.
- `src/data/lessonRegistry.ts` centralizes data-backed track lookup in plain TypeScript functions.
- `src/data/springbootNotes.ts` reads markdown files from `course-notes/springboot*` during build-time rendering.

Prefer plain functions and build-time derivation over client-side hooks.

---

## Data Fetching

There is no browser-side data fetching layer in the active site:

- No React Query, SWR, Apollo, Redux Toolkit Query, or fetch-in-component pattern.
- Course data is imported from local TypeScript modules such as `src/data/courses.ts` and `src/data/goLessons.ts`.
- Spring Boot note data is loaded from local markdown files via `fs/promises` in `src/data/springbootNotes.ts`.
- Dynamic routes use Astro `getStaticPaths()` to enumerate pages at build time.

Examples:

```ts
// src/data/lessonRegistry.ts
export function getDataBackedTrack(slug: string, locale: CourseLocale = 'en'): DataBackedTrack | null {
  if (!isDataBackedTrackSlug(slug)) {
    return null;
  }

  const course = getCourseBySlug(slug, locale);
  // ...
}
```

```astro
---
// src/pages/courses/[slug]/lessons/[lesson].astro
export function getStaticPaths() {
  return getDataBackedTrackSlugs().flatMap((slug) => {
    const track = getDataBackedTrack(slug, 'en');
    // ...
  });
}
---
```

---

## Course Content About Hooks

React hooks are taught inside the React course data. Keep those examples as content strings unless the user explicitly asks to create a live interactive demo.

Real content examples:

- `src/data/reactLessons.ts` includes examples for `useState`, `useEffect`, lifting state, a custom `useCourses()` hook, and Context.
- `src/data/reactLessonsZh.ts` mirrors those examples in Traditional Chinese.
- `src/data/nextjsLessons.ts` includes teaching snippets that mention `useState` and route hooks as course content.

When editing those lesson strings, keep English and Chinese lesson counts, order, and slugs in lockstep.

---

## If an Interactive Island Is Explicitly Requested Later

There is no current project convention for React islands or custom hooks. If a future task explicitly asks for interactive UI:

1. Confirm that Astro static markup cannot satisfy the requirement.
2. Add the required Astro integration deliberately, not as incidental scope creep.
3. Establish and document the new component/hook directory convention before adding reusable hooks.
4. Keep any hook named with the normal React `use*` convention, but update this spec because that would be a new project pattern.

This is not the default path for current frontend work.

---

## Common Mistakes to Avoid

- Treating lesson example code in `src/data/reactLessons.ts` as executable app code.
- Adding `useState` / `useEffect` to an Astro component; Astro frontmatter runs at build/server render time and is not a browser component body.
- Creating `src/hooks/` for derived data that can live in `src/data/**` or `src/utils/**`.
- Introducing client-side fetch state when local static data and `getStaticPaths()` already cover the use case.
