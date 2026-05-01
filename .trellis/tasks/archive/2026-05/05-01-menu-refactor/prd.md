# brainstorm: menu refactor

## Goal

Clarify and implement a menu/navigation refactor for the static Astro teaching site while preserving locale switching, GitHub Pages base-path handling, and course routing behavior.

## What I already know

* User request is terse: `menu-refactor`, so the intended scope is not yet explicit.
* The active project is the repo root static Astro site; `gullible-gamma/` is ignored scaffold and out of scope.
* Header navigation currently lives in `src/components/Header.astro`.
* Course menu data comes from `getCourses(locale)` in `src/data/courses.ts`.
* Course links are generated via `withBase(getCoursePath(course.slug), locale)` from `src/utils/paths.ts`.
* Locale switching in the header uses `detectLocaleFromPathname()` and `localizePath()`.
* `BaseLayout.astro` passes `locale` and `currentCourse` into the shared header.

## Assumptions (temporary)

* The desired change is likely to extract or reorganize menu/navigation code, not redesign the entire site.
* The menu should keep the current editorial/content-first visual style unless the user asks for a visual redesign.
* The refactor should avoid changing route semantics or course ordering.

## Open Questions

* What exact menu refactor outcome is desired: extracting data/logic, changing UI/UX, mobile behavior, or course grouping?

## Requirements (evolving)

* MVP direction: Approach A, extract the course dropdown rendering into a dedicated Astro component.
* Preserve current locale-aware links for English and Traditional Chinese routes.
* Preserve GitHub Pages base path support by using `withBase()` rather than hardcoded root-relative links.
* Preserve current course route behavior, including dedicated/data-backed track handling through existing helpers.
* Keep the implementation Astro-first and CSS-first.

## Acceptance Criteria (evolving)

* [ ] Header course menu still renders all courses for both locales.
* [ ] Active course highlighting remains correct.
* [ ] EN/中文 language switch links still map between parallel routes.
* [ ] Internal links continue to include the configured base path.
* [ ] `npm run check` passes.
* [ ] `npm run build` passes.

## Definition of Done (team quality bar)

* Tests added/updated where appropriate; this repo has no test script, so normal verification is `npm run check` and `npm run build`.
* Typecheck/build green.
* Docs/notes updated if behavior changes.
* Rollback considered by keeping changes small and localized.

## Out of Scope (explicit)

* Navigation helper/model abstraction beyond the extracted component.
* Menu UI/UX redesign, grouping changes, or mobile behavior changes.
* Restructuring course tracks or changing lesson data unless required by the selected menu scope.
* Introducing React/framework islands for navigation.
* Replacing the site’s overall editorial visual direction unless requested.

## Technical Notes

* `src/components/Header.astro` currently combines data fetching, locale path generation, dropdown markup, and current-course active state in one small component.
* `src/utils/paths.ts` owns base-path, locale-prefix, and course-path helpers.
* `src/data/lessonRegistry.ts` owns `DEDICATED_TRACK_SLUGS`; `getCoursePath()` depends on it.
* `src/data/courses.ts` is the single course catalog used across header/home/course pages.
* Explorer summary: duplicated locale/page patterns exist, but menu-specific central source already exists in `courses.ts`; likely refactor candidates are header markup extraction and/or menu item/link model extraction.

## Feasible Approaches

**Approach A: Extract course menu component only** (recommended minimal refactor)

* Move course dropdown rendering into a dedicated component such as `src/components/CourseMenu.astro`.
* Keep `Header.astro` responsible for brand + language switch + layout.
* Pros: small, low risk, clearer header structure.
* Cons: does not address broader duplicated locale/page patterns.

## Decision (ADR-lite)

**Context**: `Header.astro` currently mixes shell/header layout with course dropdown rendering. The user selected the minimal refactor option.

**Decision**: Extract the course dropdown into a dedicated `CourseMenu.astro` component while keeping existing data sources, route helpers, CSS classes, and visual behavior unchanged.

**Consequences**: This keeps the change low risk and improves component boundaries. It intentionally avoids a broader navigation model/helper abstraction until another menu surface needs it.

**Approach B: Add navigation model/helper layer**

* Create a menu/navigation helper that returns localized menu items, labels, hrefs, and active state inputs.
* Header and future nav surfaces consume the same model.
* Pros: better if more menus are planned; easier to add grouping/sections later.
* Cons: more abstraction for a currently small header.

**Approach C: UI/UX redesign of menu**

* Rework desktop/mobile menu behavior, grouping, presentation, and accessibility interactions.
* Pros: improves user-facing navigation if current menu is insufficient.
* Cons: larger scope; needs design decisions and visual validation.
