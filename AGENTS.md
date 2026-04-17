# AGENTS.md

## Project summary

This repository is an **Astro-based teaching-material website** for three separate learning tracks:

- React
- Spring Boot
- MySQL

The product direction is **content-first and educational**, not a dashboard-heavy LMS and not a traditional blog.

## Current product intent

The site should feel like a **structured course library**:

- minimalist homepage
- clear course entry points
- lightweight editorial presentation
- focused course pages
- easy future expansion into lesson pages

Important: these are **three separate courses**, not one merged full-stack course.

## Stack

- Astro 6
- TypeScript strict config
- Static site output
- Plain Astro components and CSS

Node requirement:

- `>= 22.12.0`

## Source of truth

Use the **repo root app** as the real project.

There is an accidental nested scaffold folder:

- `gullible-gamma/`

It is ignored in `.gitignore` and should **not** be used as the active app.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start local dev server
- `npm run build` — production build
- `npm run check` — Astro/type checks

Before finishing implementation work, run:

1. `npm run check`
2. `npm run build`

## Repository map

### App shell

- `src/layouts/BaseLayout.astro` — shared HTML shell, metadata, header, footer
- `src/components/Header.astro` — sticky header with top-right course selector dropdown
- `src/components/Footer.astro` — footer

### Homepage and course pages

- `src/pages/index.astro` — homepage
- `src/pages/courses/index.astro` — all-courses page
- `src/pages/courses/[slug].astro` — individual course landing pages

### Reusable UI

- `src/components/CourseCard.astro` — course summary card
- `src/components/LessonRow.astro` — recent lesson row

### Content/data

- `src/data/courses.ts` — course metadata, module lists, and recent lesson content

### Styling

- `src/styles/global.css` — global visual system and component/page styling

## Current routes

- `/`
- `/courses`
- `/courses/react`
- `/courses/spring-boot`
- `/courses/mysql`

There is **not yet** a dedicated lesson detail page template.

## Content model conventions

Course data currently lives in `src/data/courses.ts`.

Each course includes:

- `slug`
- `title`
- `shortLabel`
- `category`
- `accent`
- `subtitle`
- `overview`
- `level`
- `totalLessons`
- `focus`
- `prerequisites`
- `outcomes`
- `modules[]`

Each module contains:

- `title`
- `description`
- `lessons[]`

Each lesson currently contains:

- `number`
- `title`
- `summary`

If more content is added before a CMS or content collection exists, keep the structure consistent.

## UX / design rules

Keep the current design direction:

- calm, readable, educational
- content-first
- strong typography
- soft off-white background
- subtle borders instead of heavy shadows
- minimal top navigation

Do **not** shift the site toward:

- generic SaaS dashboard UI
- post-feed blog styling
- overly colorful card grids
- heavy animations or decorative effects

### Navigation rules

- The top-right header area uses a **course selector dropdown**
- The dropdown is the main global course navigation pattern
- Course pages should highlight course context without merging the three tracks

### Course architecture rules

- React, Spring Boot, and MySQL remain separate
- Cross-reference between courses is fine
- Do not restructure them into one single combined curriculum unless explicitly requested

## Implementation preferences

When making future changes:

1. **Prefer Astro-first solutions**
   - use `.astro` pages/components/layouts
   - avoid unnecessary client-side frameworks

2. **Minimize JavaScript**
   - prefer semantic HTML and CSS
   - add client script only when UX clearly needs it

3. **Keep content centralized**
   - until a larger content system exists, update `src/data/courses.ts`

4. **Keep styling in the existing visual system**
   - reuse current tokens in `src/styles/global.css`
   - keep course accent colors scoped and restrained

5. **Preserve the reading experience**
   - prioritize readability over density
   - avoid clutter in headers and page chrome

## Known next priorities

These are reasonable next improvements if asked:

1. Add a lesson page template
2. Improve dropdown UX
   - close on outside click
   - better mobile behavior
3. Make cards feel more clickable
4. Introduce richer course-to-lesson linking
5. Move course content into Astro content collections if the content grows substantially

## Definition of done for UI/content changes

A change is in good shape when:

- the route renders correctly
- the educational structure still feels clear
- the three-course separation remains intact
- `npm run check` passes
- `npm run build` passes
