# Component Guidelines

> How components are built in this project.

---

## Overview

The site uses Astro components and pages, not framework islands. Keep changes Astro-first and CSS-first unless the user explicitly requests an interactive app-style feature.

Core examples:

- `src/layouts/BaseLayout.astro` defines the shared HTML shell and composes `Header`, `<main>`, and `Footer`.
- `src/components/Header.astro` renders the brand link, language switch, and course dropdown.
- `src/components/CourseCard.astro` renders one course summary card.
- `src/components/LessonRow.astro` renders one recent-lesson link card.
- Course pages under `src/pages/courses/**` and `src/pages/zh/courses/**` are larger Astro page components that derive data in frontmatter and render semantic sections.

---

## Component File Structure

Follow the existing Astro structure:

```astro
---
import type { Course } from '../data/courses';
import { getCoursePath, withBase } from '../utils/paths';
import type { SiteLocale } from '../utils/paths';

interface Props {
  course: Course;
  locale?: SiteLocale;
}

const { course, locale = 'en' } = Astro.props;
const isChinese = locale === 'zh';
---

<article class="course-card" style={`--course-accent: ${course.accent}`}>
  <!-- markup -->
</article>
```

This mirrors `src/components/CourseCard.astro`.

For layouts, import global CSS once at the shell level:

```astro
---
import '../styles/global.css';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---
```

This pattern is in `src/layouts/BaseLayout.astro`.

---

## Props Conventions

- Define a local `interface Props` in each Astro component or dynamic route that consumes typed props.
- Import shared data types from their owning modules, for example `Course` from `src/data/courses.ts` and `CourseLessonArticle` from `src/data/lessonRegistry.ts` or the specific lesson file.
- Destructure `Astro.props` near the top and provide defaults for optional props.
- Use `locale?: SiteLocale` with default `'en'` for shared components that render localized copy.
- For dynamic routes, cast `Astro.props as Props` after `getStaticPaths()` defines the prop shape.

Examples:

- `src/layouts/BaseLayout.astro` defines optional `title`, `description`, `currentCourse`, `showPrimaryNav`, and `locale`, then defaults them in one destructuring block.
- `src/components/Header.astro` accepts `currentCourse?: Course | null` and `locale?: SiteLocale`.
- `src/pages/courses/[slug]/lessons/[lesson].astro` defines a route-level `Props` interface with `slug`, `course`, `lesson`, `previousLesson`, `nextLesson`, and `allLessons`.

---

## Composition Patterns

### Shared shell

Use `BaseLayout` for normal pages so metadata, language, header, footer, and global CSS stay consistent.

```astro
<BaseLayout
  title={`${lesson.title} · ${course.title}`}
  description={lesson.summary}
  currentCourse={course}
>
  <!-- page content -->
</BaseLayout>
```

This appears in `src/pages/courses/[slug]/lessons/[lesson].astro` and dedicated lesson pages such as `src/pages/courses/react/lessons/[lesson].astro`.

Redirect pages are the exception: files such as `src/pages/courses/go/index.astro` render a tiny standalone HTML document with a meta refresh.

### Course/page layout

Pages consistently use semantic sections and reusable global classes:

- hero/header area: `.page-intro`, `.page-intro--course`, `.page-intro--editorial`
- card shell: `.floating-panel-wrap`, `.main-panel`, `.panel-section`
- course metadata: `.course-summary-card`, `<dl>`, `<dt>`, `<dd>`
- lists/cards: `.module-list`, `.note-card`, `.simple-list`

Examples:

- `src/pages/courses/[slug]/lessons/index.astro` builds a course home with module cards and lesson cards.
- `src/pages/courses/mysql/lessons/[lesson].astro` builds a lesson article with main content plus a sticky reading guide.
- `src/pages/zh/courses/spring-boot/lessons/index.astro` uses the same structure with localized copy.

---

## Links and Localization

Never hardcode root-relative internal links in markup. Use helpers from `src/utils/paths.ts`:

- `withBase(path, locale?)` for internal links and asset paths.
- `localizePath(pathname, locale)` when rewriting the current URL for language switching.
- `getCoursePath(course.slug)` when linking to a course from shared components.

Examples:

- `src/components/Header.astro` uses `withBase('/', locale)`, `localizePath(pathname, 'en')`, `localizePath(pathname, 'zh')`, and `withBase(getCoursePath(course.slug), locale)`.
- `src/components/CourseCard.astro` links with `withBase(getCoursePath(course.slug), locale)`.
- Chinese pages such as `src/pages/zh/courses/[slug]/lessons/index.astro` define `const localize = (path: string) => withBase(path, locale)` and use it for links.

For new Chinese pages, follow the existing pattern:

```astro
---
const locale = 'zh' as const;
const localize = (path: string) => withBase(path, locale);
import BaseLayout from '.../layouts/BaseLayout.astro';
import { withBase } from '.../utils/paths';
---

<BaseLayout locale={locale}>
  <a href={localize('/courses')}>...</a>
</BaseLayout>
```

---

## Styling Patterns

The project uses one global stylesheet: `src/styles/global.css`.

Current patterns:

- Reuse existing classes before adding new ones.
- Use CSS custom properties for repeated values and dynamic accents.
- Use inline `style` only for dynamic CSS variables such as `--course-accent`.
- Use Astro `class:list` for conditional classes, as in `src/components/Header.astro` for active language links and active course menu links.
- Preserve the editorial/content-first style unless the user asks for a redesign.

Examples:

- `src/components/CourseCard.astro` and `src/components/LessonRow.astro` set `--course-accent` and rely on shared card/thumb styles.
- `src/components/Header.astro` uses `class:list={['language-link', { 'is-active': currentLocale === 'en' }]}`.
- `src/styles/global.css` defines responsive behavior with `@media (max-width: 960px)` and `@media (max-width: 720px)`.

Do not introduce Tailwind, CSS Modules, styled-components, or per-component style systems into normal changes; the active codebase does not use them.

---

## Accessibility

Use the accessibility patterns already present:

- `BaseLayout.astro` sets `<html lang={locale === 'zh' ? 'zh-Hant' : 'en'}>`.
- `Header.astro` labels the language switch with `aria-label` and marks the current course link with `aria-current="page"`.
- Decorative UI elements use `aria-hidden="true"`, for example course card media and arrow icons in `CourseCard.astro`, `LessonRow.astro`, and lesson cards.
- External reference links use `target="_blank" rel="noreferrer"`, as in lesson article pages.
- Use semantic HTML (`<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<aside>`, `<dl>`, `<ul>`) rather than generic div-only markup.

---

## Common Mistakes to Avoid

- Adding client-side React components for static content that Astro can render at build time.
- Passing a localized `course` into a component but forgetting `locale={locale}`, causing English labels/links on Chinese pages.
- Hardcoding `/courses/...` directly in `href` instead of using `withBase()` or a local `localize()` helper.
- Creating new component-specific CSS systems instead of extending `src/styles/global.css`.
- Adding route structures in English without a matching `src/pages/zh/**` mirror when the page should be localized.
