# Type Safety

> Type safety patterns in this project.

---

## Overview

The project uses TypeScript through Astro with strict settings:

```json
// tsconfig.json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

Types are plain TypeScript types/interfaces colocated with the data or Astro file that owns them. There is no runtime schema validation library such as Zod, Yup, or io-ts.

---

## Type Organization

### Shared data types live with shared data

`src/data/courses.ts` owns shared course types:

```ts
export type ModuleLesson = {
  number: string;
  title: string;
  summary: string;
};

export type Course = {
  slug: 'react' | 'spring-boot' | 'mysql' | 'postgresql' | 'sqlite' | 'go' | 'rust' | 'csharp' | 'nextjs' | 'typescript';
  title: string;
  // ...
};

export type CourseLocale = 'en' | 'zh';
```

`src/utils/paths.ts` owns path/locale types:

```ts
export type SiteLocale = 'en' | 'zh';
```

Lesson files define their article shape locally. Examples:

- `src/data/goLessons.ts` exports `CourseLessonArticle`.
- `src/data/reactLessons.ts` exports `CourseLessonArticle` for dedicated React lessons.
- `src/data/springbootNotes.ts` exports `SpringBootNote` for markdown-backed notes.

`src/data/lessonRegistry.ts` re-exports the generic `CourseLessonArticle` type from `goLessons` and defines data-backed route types:

```ts
export const DATA_BACKED_TRACK_SLUGS = ['go', 'rust', 'csharp', 'nextjs', 'typescript', 'postgresql', 'sqlite'] as const;
export type DataBackedTrackSlug = (typeof DATA_BACKED_TRACK_SLUGS)[number];
```

### Component and route props stay local

Astro files define a local `interface Props` close to the component/page that consumes it.

Examples:

- `src/components/CourseCard.astro` defines `Props` with `course: Course` and `locale?: SiteLocale`.
- `src/layouts/BaseLayout.astro` defines optional layout props and defaults them.
- `src/pages/courses/[slug]/lessons/[lesson].astro` defines route props for generated lesson pages.

---

## Common Patterns

### Literal unions and `as const`

Use literal unions and const arrays for known route/locale values:

- `Course['slug']` in `src/data/courses.ts`
- `SiteLocale` in `src/utils/paths.ts`
- `DEDICATED_TRACK_SLUGS` and `DATA_BACKED_TRACK_SLUGS` in `src/data/lessonRegistry.ts`
- `const locale = 'zh' as const` in Chinese pages

### Type guards for dynamic strings

`src/data/lessonRegistry.ts` narrows unknown strings before resolving data-backed tracks:

```ts
export function isDataBackedTrackSlug(slug: string): slug is DataBackedTrackSlug {
  return dataBackedTrackSet.has(slug);
}
```

Use this pattern when a URL or dynamic string must be narrowed to a known set.

### Null for missing lookup results

Lookup helpers return `null` when data is absent instead of throwing in the helper:

- `getDataBackedTrack(slug, locale)` returns `DataBackedTrack | null`.
- `getSpringBootNoteBySlug(slug, locale)` returns a note or `null`.
- Lesson route props use `previousLesson: CourseLessonArticle | null` and `nextLesson: CourseLessonArticle | null`.

Pages that require data fail fast with `throw new Error(...)`. Examples:

- `src/pages/courses/react/lessons/index.astro` throws `React course not found` if the catalog lookup fails.
- `src/pages/courses/[slug]/lessons/index.astro` throws when a data-backed track cannot be resolved for a generated slug.

### `import type` for type-only imports

Use `import type` where the import is only needed by TypeScript. Examples:

- `src/layouts/BaseLayout.astro` imports `type { Course }` and `type { SiteLocale }`.
- `src/components/Header.astro` imports `type { Course }` and `type { SiteLocale }`.
- Dynamic route pages import `type CourseLessonArticle` and `type DataBackedTrackSlug` from `lessonRegistry`.

---

## Validation

Runtime validation is minimal and project-specific:

- Course lookups fail fast in pages with `throw new Error(...)` when required catalog entries are missing.
- Dynamic route generation validates data-backed slugs by calling `getDataBackedTrack()` and throwing if a registered slug cannot resolve.
- Spring Boot markdown parsing in `src/data/springbootNotes.ts` throws if a note is missing frontmatter.

There is no schema validation library. Do not add one for static course data unless the task explicitly asks for a larger validation system.

---

## Current Escape Hatch / Known Debt

`src/data/springbootNotes.ts` currently starts with `// @ts-nocheck`. This is existing debt around markdown parsing / Node file loading and should not be copied into new files. Treat it as a contained exception, not a convention.

New TypeScript and Astro code should remain compatible with `astro/tsconfigs/strict` and pass `npm run check`.

---

## Forbidden Patterns

- Do not add broad `any`, `as any`, `@ts-ignore`, or `@ts-nocheck` in new code unless the user explicitly accepts a temporary escape hatch and the cleanup is tracked.
- Do not leave dynamic route params or Astro props untyped when the shape is known.
- Do not represent known course slugs/locales as loose strings when a union type or `as const` array already exists.
- Do not duplicate type definitions across localized lesson files if a shared type can be imported from the corresponding owner module.
- Do not bypass `null` handling for optional previous/next lesson props; templates should render conditionally like the existing lesson continuity sections.
