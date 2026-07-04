# Quality Guidelines

> Code quality standards for frontend development.

---

## Overview

Quality for this repository means preserving a small, static, content-first Astro site that builds reliably under the GitHub Pages base path.

From `AGENTS.md` and `package.json`:

- Use Node `>=22.12.0`.
- Install with `npm install`; this repo uses `package-lock.json` and has no pnpm/yarn workspace.
- Normal verification is `npm run check` followed by `npm run build`.
- There is no separate lint or test script today.

---

## Required Patterns

### Base-path-safe links

Because `astro.config.mjs` sets `base: '/learning-site'`, internal links and assets must use helpers from `src/utils/paths.ts`.

Good examples:

- `src/components/Header.astro` uses `withBase('/', locale)` and `withBase(getCoursePath(course.slug), locale)`.
- `src/pages/courses/go/index.astro` uses `const destination = withBase('/courses/go/lessons')`.
- `src/pages/zh/courses/go/index.astro` uses `const destination = withBase('/courses/go/lessons', 'zh')`.
- Chinese lesson pages use a local `localize()` helper around `withBase(path, locale)`.

### Locale parity

Keep English and Chinese routes parallel and pass `locale={locale}` on Chinese pages.

Good examples:

- `src/pages/zh/index.astro` sets `const locale = 'zh' as const`, calls `getCourses(locale)`, passes `locale={locale}` to `BaseLayout`, and passes `locale={locale}` to `CourseCard`.
- `src/pages/zh/courses/[slug]/lessons/[lesson].astro` uses the localized track resolver with `getDataBackedTrack(slug, 'zh')`.

### Course data consistency

Course and lesson changes must keep the relevant source files synchronized:

- `src/data/courses.ts` for catalog/module data.
- `src/data/lessonRegistry.ts` for dedicated/data-backed track lists and resolver logic.
- Paired English/Chinese lesson files such as `goLessons.ts` and `goLessonsZh.ts`.
- Redirect pages under both `src/pages/courses/<slug>/index.astro` and `src/pages/zh/courses/<slug>/index.astro` for dedicated lesson tracks.

For data-backed tracks, module titles must match lesson `moduleTitle` exactly in each locale. The grouping in `src/pages/courses/[slug]/lessons/index.astro` depends on that equality.

For the dedicated Spring Boot track, keep `src/data/courses.ts`, `course-notes/springboot/lesson-<number>.md`, `course-notes/springboot-zh/lesson-<number>.md`, and both Spring Boot lesson hub pages synchronized. Spring Boot markdown notes must keep `title`, `lesson`, `slug`, and `summary` frontmatter, and English/Chinese notes must preserve matching lesson count, order, and slugs.

### Astro-first, CSS-first UI

Use `.astro` pages/components and `src/styles/global.css`. Preserve the editorial, teaching-content layout unless the user asks for a redesign.

Good examples:

- `src/layouts/BaseLayout.astro` provides the site shell.
- `src/components/CourseCard.astro` and `src/components/LessonRow.astro` are static Astro components.
- `src/styles/global.css` defines all shared shell, card, panel, note, and responsive classes.

---

## Forbidden Patterns

- Hardcoded root-relative internal `href`/`src` values that bypass `withBase()`.
- Unrequested React/Svelte/Vue islands or client-side state for static content.
- Splitting one course track into another or merging tracks without explicit user direction.
- Editing only one locale when route generation, locale switching, or lesson parity requires both English and Chinese files.
- Adding new package managers or scripts that conflict with the current `npm` + `package-lock.json` workflow.
- Copying the existing `// @ts-nocheck` escape hatch from `src/data/springbootNotes.ts` into new files.

---

## Testing and Verification Requirements

Run the normal verification commands after frontend/content changes:

```bash
npm run check
npm run build
```

What they cover today:

- `npm run check` runs `astro check` for Astro/TypeScript diagnostics.
- `npm run build` performs static generation and catches route/data issues that only appear during build.

There are no unit tests or lint scripts in `package.json` today, so do not claim lint/test coverage beyond these commands.

---

## Accessibility and HTML Review

Check these existing patterns when reviewing UI changes:

- `BaseLayout.astro` sets the correct `<html lang>` based on locale.
- `Header.astro` has an `aria-label` for the language switch and `aria-current="page"` for the active course.
- Decorative spans/icons use `aria-hidden="true"`.
- External links opened in a new tab use `rel="noreferrer"`.
- Pages use semantic containers such as `<section>`, `<article>`, `<aside>`, `<dl>`, and `<ul>`.

---

## Code Review Checklist

Before considering a change complete, verify:

- [ ] The change is in the repo root app, not `gullible-gamma/`.
- [ ] Internal links use `withBase()`, a local `localize()`, `localizePath()`, or `getCoursePath()`.
- [ ] English and Chinese route structures remain parallel where applicable.
- [ ] Chinese pages set `const locale = 'zh' as const` and pass `locale={locale}` to `BaseLayout`.
- [ ] Shared course data is updated in `src/data/courses.ts` rather than duplicated in pages.
- [ ] Data-backed track changes update `src/data/lessonRegistry.ts`, route redirects, and both locale lesson files.
- [ ] `course.modules[].title` matches lesson `moduleTitle` for data-backed tracks.
- [ ] Spring Boot markdown-backed changes preserve `lesson-<number>.md` filenames, required frontmatter, English/Chinese slug parity, and hub title trimming for `Lesson N:` / `第 N 課：` prefixes.
- [ ] UI changes reuse `src/styles/global.css` and existing visual patterns where possible.
- [ ] `npm run check` and `npm run build` results are recorded.

---

## Root-Level Static Demo Folders

When prototyping a redesign or visual experiment, a root-level static folder such as `demo/` (pure HTML/CSS, no build step) is a safe pattern for this repo.

Why it works:

- Astro scans `src/` for routes and content; a root-level `demo/` is ignored by `astro build` and does not appear in `dist/`.
- It adds zero build risk and rolls back with `Remove-Item -Recurse demo/`.

Conventions:

- Keep demo files self-contained: shared `demo/styles.css` + relative `<a href>` links between pages. No imports from `src/`.
- Do NOT modify any file under `src/` from a demo task.
- Inline SVGs; avoid external image dependencies so the demo opens via `file://`.
- After creating a demo folder, run `npm run check` and `npm run build` to confirm the production site is unaffected.

### Verbatim course metadata in demos and standalone pages

When copying course metadata (title, subtitle, category, level, outcomes, prerequisites, module titles, lesson summaries) from `src/data/courses.ts` into a demo or any standalone page, copy the strings verbatim. Do not paraphrase, shorten, or "improve" them.

Why: the check agent for the mid-century demo found 14 paraphrased subtitles across `index.html` and `courses.html` that drifted from the source. Paraphrasing breaks content fidelity and makes the demo misleading as a representation of the real site.

Example:

```html
<!-- Wrong: paraphrased -->
<p class="course-card__subtitle">Learn Docker container fundamentals, from images to Compose and registries.</p>

<!-- Correct: verbatim from src/data/courses.ts -->
<p class="course-card__subtitle">Learn container fundamentals with Docker, from images and Dockerfiles to networking, Compose, and registry workflows.</p>
```

### Bilingual font strategy (EN + ZH)

When a redesign uses a Latin-only display font (e.g., League Spartan), Chinese headings will not render in that font. For a bilingual EN/ZH site, always:

1. Load a CJK display font (e.g., Noto Sans TC) in the Google Font `<link>`.
2. Add a `:lang(zh-Hant)` heading override placed at the END of the stylesheet (so it wins the cascade over component heading rules), with CJK-friendly tracking (`letter-spacing: -0.01em`, `line-height: 1.15`).
3. List every component heading selector that sets `font-family: var(--font-display)` in the override, with the `:lang(zh-Hant)` prefix for higher specificity. A bare `:lang(zh-Hant) h2` is NOT enough — later `.section-heading h2 { font-family: var(--font-display) }` has equal specificity and wins.

Example (place at end of global.css):

```css
:lang(zh-Hant) h1,
:lang(zh-Hant) h2,
:lang(zh-Hant) h3,
:lang(zh-Hant) h4,
:lang(zh-Hant) .page-title,
:lang(zh-Hant) .section-heading h2,
:lang(zh-Hant) .course-card h3,
:lang(zh-Hant) .module-head h3,
:lang(zh-Hant) .note-card h3 {
  font-family: "Noto Sans TC", var(--font-body);
  letter-spacing: -0.01em;
  line-height: 1.15;
}
```

Why: the apply-mcm-style task's first ZH override was placed mid-file and got overridden by later component heading rules, defeating the fallback on every Chinese section/card heading.

### Accent color contrast for text

Mid-century accent colors (teal `#1F7A7A`, orange `#C95F2D`, olive `#727A3F`) fail WCAG AA for normal text on the cream `#F6E8CF` background. Rules:

- Body links use the DARKER variant (`--teal-dark` `#155C5C`), not `--teal`.
- Small uppercase labels (eyebrow, category, menu labels) use `--walnut` `#6B4226` for text; the `✦` glyph stays `--mustard` for the accent.
- Reserve full-saturation accents (`--teal`, `--orange`, `--olive`) for fills, borders, large display text, and decorative shapes — not running text.

### Route A token migration: keep names, change values

When applying a new visual theme to an existing CSS file with many references, prefer Route A: keep the old custom-property names (e.g., `--bg`, `--line`, `--hero-shadow`, `--radius-lg`) and only change their values; add new tokens for new concepts. Do NOT rename tokens in the same pass.

Why: renaming tokens forces editing hundreds of references and drastically expands the change surface for a purely visual change. The semantic drift (e.g., `--line` now means "walnut border color" rather than "thin divider line") is an acceptable tradeoff for a one-time migration and can be cleaned up in a follow-up alias task.

Caveat: document the semantic drift in the stylesheet header so future maintainers know `--line` is now a border color, not a 1px divider.

### Focus on non-focusable wrappers (e.g., `<article>` cards)

When a card is a non-focusable element like `<article>` but contains a focusable link, `:focus-visible` on the card never fires. Use `:focus-within` on the wrapper instead, and put `:focus-visible` on the inner link. Be aware this can produce two visible focus rings simultaneously (card + link) — that is acceptable when the card ring communicates "this whole unit is the focus context."

---

## Common Mistakes to Watch For

- A page builds locally at `/` but breaks on GitHub Pages because links ignore `/learning-site`.
- A Chinese page renders English navigation labels because `locale` was not passed into a shared component.
- A module section renders empty because localized module titles and lesson `moduleTitle` values drifted.
- A new dedicated track is added to the catalog but not to `DEDICATED_TRACK_SLUGS`, redirect pages, or `getCoursePath()` behavior.
- Build-time markdown expectations change without updating `SECTION_KEY_ALIASES`, `getNotesDirectory()`, and Spring Boot lesson pages.
- A Spring Boot Chinese lesson hub leaves `第 N 課：` in card titles because only the English `Lesson N:` prefix was trimmed.
