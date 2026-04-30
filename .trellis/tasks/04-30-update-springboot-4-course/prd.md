# Update Spring Boot Course to 4.x

## Goal

Update the existing Spring Boot 3.x course track to Spring Boot 4.x while preserving the current static Astro course structure, English/Traditional Chinese parity, and dedicated markdown-backed Spring Boot lesson flow.

## What I Already Know

- The user wants to update the current Spring Boot 3.x course to Spring Boot 4.x.
- Spring Boot is a dedicated track with course metadata in `src/data/courses.ts` and lesson content loaded from markdown files in:
  - `course-notes/springboot/lesson-<number>.md`
  - `course-notes/springboot-zh/lesson-<number>.md`
- `src/data/springbootNotes.ts` only loads `lesson-<number>.md` files and ignores `lesson-template.md`.
- Spring Boot note frontmatter must keep `title`, `lesson`, `slug`, and `summary`.
- Existing Spring Boot catalog currently says `Spring Boot 3.x`, Java 17+, Spring Security 6, Hibernate 6, Jakarta validation, and Spring Boot 3.x deployment wording.
- Grep found many 3.x references across `src/data/courses.ts`, Spring Boot lesson hub pages, and the English/Traditional Chinese markdown notes.
- The site has separate course tracks; this task should update Spring Boot only, not merge with Maven or other Java-related tracks.

## Assumptions Temporary

- The target label should be `Spring Boot 4.x`, keeping slug `spring-boot` and existing route structure unchanged.
- The update should remain markdown-backed and Astro-first.
- Spring Boot 4.x details need official research before implementation; do not blindly replace `3.x` with `4.x` everywhere.

## Decisions

- Selected update depth: **Deep curriculum redesign**.
- The redesign should center the course on Spring Boot 4.x as a GA line, not just rebrand visible labels.
- The course should preserve the `spring-boot` route slug and markdown-backed content architecture unless the user explicitly approves route-affecting changes.
- The user explicitly allows redesigning lesson count, lesson order, and lesson slugs if that produces a cleaner Spring Boot 4.x curriculum.
- If lesson slugs change, preserve old lesson URLs with redirects to the closest redesigned lesson.

## Open Questions

- None currently blocking implementation.

## Requirements Evolving

- Update Spring Boot course metadata in `src/data/courses.ts` from 3.x to 4.x.
- Update English and Traditional Chinese Spring Boot lesson hub pages.
- Deeply redesign the Spring Boot curriculum around Spring Boot 4.x official changes, including Spring Framework 7, Spring Security 7, Hibernate 7, Servlet 6.1/Tomcat 11, Boot 4 modular starters/test starters, Jackson 3, testing changes, Actuator readiness/liveness behavior, packaging, AOT/native-image awareness, and observability where appropriate.
- Update English and Traditional Chinese markdown lessons, not just 3.x-specific wording.
- Redesign lesson count, order, and slugs as needed for a clean Spring Boot 4.x curriculum, while preserving the top-level `spring-boot` route.
- If slugs no longer follow `lesson-<number>`, update Spring Boot lesson hub mapping logic that currently derives notes by `lesson.number -> lesson-<number>`.
- Preserve old `lesson-<number>` URLs with compatibility redirects to the closest redesigned lessons in both English and Traditional Chinese.
- Preserve existing Spring Boot markdown loader contract and section headings.
- Keep English and zh content aligned conceptually.
- Run `npm run check` and `npm run build`.

## Research References

- [`research/spring-boot-4.md`](research/spring-boot-4.md) — Spring Boot 4.x is GA; Java 17+ remains valid, but visible content should account for Spring Framework 7, Spring Security 7, Hibernate 7, Servlet 6.1/Tomcat 11, Boot 4 modular starters/test starters, Jackson 3, testing, Actuator, and packaging differences.

## Research Notes

### Key official findings

- Spring Boot 4.x is GA and current docs show the 4.0.x line; do not describe it as future/milestone-only.
- Java 17+ remains a valid baseline; do not make Java 21/25 mandatory for beginner content.
- Boot 4 aligns with Spring Framework 7, Spring Security 7, Hibernate ORM 7, Servlet 6.1 / Tomcat 11, Jakarta Servlet 6.1, Jakarta Persistence 3.2, and Jakarta Validation 3.1.
- Boot 4 modularizes starters; `spring-boot-starter-webmvc` is preferred over deprecated `spring-boot-starter-web` for new Spring MVC examples.
- Boot 4 testing changes affect MockMvc auto-configuration, mock annotations, and technology-specific test starters.
- Actuator and packaging remain relevant, but deployment content should avoid removed fully executable launch-script instructions and can mention default liveness/readiness probe groups.

### Feasible approaches

**Approach A: Minimal visible rebrand**

- Update course metadata and visible titles from 3.x to 4.x.
- Pros: fastest and lowest risk.
- Cons: leaves older 3.x-specific lesson content such as Security 6/Hibernate 6/testing starter details.

**Approach B: Compatibility-aware full content update** (recommended)

- Update course metadata, lesson hub pages, and all version-sensitive English/zh markdown references.
- Replace stale 3.x/Security 6/Hibernate 6/starter/testing/deployment wording with Boot 4-aware content while keeping lesson count/order/slugs.
- Pros: matches user intent without redesigning the course.
- Cons: larger content edit across many markdown files.

**Approach C: Deep curriculum redesign**

- Re-plan modules/lessons around Boot 4 modular starters, Jackson 3, observability, native image, and migration topics.
- Pros: most future-facing.
- Cons: much larger editorial project and likely needs more review; may disrupt existing course continuity.

**Selected**: Approach C.

## Acceptance Criteria Evolving

- [ ] User-visible Spring Boot course title and lesson hub title say Spring Boot 4.x.
- [ ] Course metadata, focus, prerequisites, outcomes, module titles, and recent lessons reflect a Spring Boot 4.x curriculum rather than stale 3.x-only claims.
- [ ] English and Traditional Chinese markdown lesson frontmatter/body content are redesigned consistently around the chosen Spring Boot 4.x scope.
- [ ] Any lesson count/order/slug changes are reflected in both English and zh markdown files, course modules, lesson hub pages, and static route generation.
- [ ] Old English and zh Spring Boot lesson URLs redirect to the closest redesigned lesson when slugs change.
- [ ] Curriculum covers Boot 4-specific topics where appropriate: Framework 7, Security 7, Hibernate 7, Servlet 6.1/Tomcat 11, modular starters/test starters, Jackson 3, testing changes, Actuator readiness/liveness, packaging, and AOT/native-image/observability positioning.
- [ ] No Spring Boot 3.x references remain unless explicitly framed as migration/history from 3.x to 4.x.
- [ ] Spring Boot routes and markdown loader still build.
- [ ] `npm run check` passes.
- [ ] `npm run build` passes.

## Definition of Done

- Requirements are confirmed after official Spring Boot 4.x research.
- Implementation follows `.trellis/spec/frontend/**` and `AGENTS.md`.
- Normal verification passes with `npm run check` and `npm run build`.
- No unrelated course tracks are changed beyond references needed to keep docs accurate.

## Out of Scope Explicit

- Changing the top-level `spring-boot` slug or course route prefix.
- Moving Spring Boot from markdown-backed content to data-backed lesson files.
- Restructuring React, Maven, MySQL, Go, Rust, C#, Next.js, TypeScript, PostgreSQL, or SQLite tracks.
- Adding new dependencies, frameworks, package managers, test runners, or UI redesigns.

## Technical Notes

- Read `AGENTS.md` for Spring Boot notes and routing constraints.
- Inspected `src/data/courses.ts` around the Spring Boot course metadata.
- Inspected `src/data/springbootNotes.ts`; note headings are normalized by `SECTION_KEY_ALIASES`, so heading names/folders should not change unless loader is updated.
- Inspected Spring Boot lesson hub pages; current module grouping maps each catalog lesson number to `lesson-<number>` markdown slugs, so non-numbered or renamed slugs require hub logic changes.
- User chose to retain compatibility redirects for old lesson URLs if slugs change.
- Found 21 English Spring Boot markdown lessons and 21 Traditional Chinese lessons.
- Current working tree contains an unrelated untracked `bun.lock`; do not include it in this task because the project uses npm and `package-lock.json`.
- Grep found 132 references to Spring Boot 3.x / Java 17+ / Security 6 / Hibernate 6 / Jakarta / 3.x patterns across course metadata, hub pages, and note markdown.

## Expansion Sweep


### Future Evolution

- The track may later need explicit migration lessons from Spring Boot 3.x to 4.x if 4.x introduces major ecosystem baseline changes.
- Keeping the same slug preserves existing links while the visible version label changes.

### Related Scenarios

- Spring Boot remains separate from the new Maven course, even if Maven appears in setup lessons.
- Existing Spring Boot notes are markdown-backed; keep loader contracts stable.

### Failure and Edge Cases

- Blind text replacement could introduce inaccurate version claims or miss official baseline changes.
- English and zh notes can drift if only one locale is updated.
- Changing headings or frontmatter can break `springbootNotes.ts` parsing.
