# Spring Boot 4.x Course Update Research

Date: 2026-04-30
Scope: Official Spring / Spring Boot documentation, release notes, migration guidance, and official Spring blog posts relevant to updating a static course from Spring Boot 3.x to Spring Boot 4.x.

## Search Scope

### Official sources used

| Source | URL | Notes used |
|---|---|---|
| Spring Boot project page | https://spring.io/projects/spring-boot/ | Current project line displays Spring Boot 4.0.6. |
| Spring Boot 4.0.0 GA announcement | https://spring.io/blog/2025/11/20/spring-boot-4-0-0-available-now/ | Confirms 4.0.0 GA release and Maven Central availability. |
| Spring Boot 4.0 release notes | https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes | New features, deprecations, and major release notes. |
| Spring Boot 4.0 migration guide | https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide | Upgrade sequencing, removed features, modularization, starter/test changes, testing changes. |
| Spring Boot system requirements | https://docs.spring.io/spring-boot/system-requirements.html | Java, Spring Framework, build tool, servlet container, GraalVM baselines for current 4.0.6 docs. |
| Spring Boot dependency management | https://docs.spring.io/spring-boot/appendix/dependency-versions/properties.html and https://github.com/spring-projects/spring-boot/tree/v4.0.6/platform/spring-boot-dependencies/build.gradle | Managed dependency families and selected versions from the official v4.0.6 dependency BOM source. |
| Spring Boot testing docs | https://docs.spring.io/spring-boot/reference/testing/spring-boot-applications.html | Current testing APIs including `RestTestClient`, `@AutoConfigureMockMvc`, and module packages. |
| Spring Boot Actuator endpoint docs | https://docs.spring.io/spring-boot/reference/actuator/endpoints.html | Health endpoint behavior, health indicators, liveness/readiness details, package examples. |
| Spring Boot native image docs | https://docs.spring.io/spring-boot/reference/packaging/native-image/introducing-graalvm-native-images.html | AOT/native-image constraints and generated assets. |
| Spring Boot packaging docs | https://docs.spring.io/spring-boot/reference/packaging/efficient.html and https://docs.spring.io/spring-boot/reference/packaging/container-images/dockerfiles.html | Efficient/exploded deployments, jarmode tools, Docker layering. |
| Modularizing Spring Boot blog | https://spring.io/blog/2025/10/28/modularizing-spring-boot/ | Rationale and migration model for Boot 4 modularization. |
| Null-safe applications with Spring Boot 4 blog | https://spring.io/blog/2025/11/12/null-safe-applications-with-spring-boot-4/ | Spring portfolio JSpecify/null-safety context. |

### Repo files inspected

| File Path | Description |
|---|---|
| `src/data/courses.ts` | Course catalog; current Spring Boot metadata and module map still label the course as Spring Boot 3.x / SB3. |
| `src/data/springbootNotes.ts` | Markdown loader for Spring Boot lessons; confirms notes are loaded from `course-notes/springboot/` and `course-notes/springboot-zh/`. |
| `.trellis/spec/frontend/directory-structure.md` | Project structure and route/content ownership constraints. |
| `.trellis/spec/frontend/quality-guidelines.md` | Locale parity and course data consistency constraints. |
| `course-notes/springboot/*.md` | English Spring Boot lesson markdown; grep scope for Spring Boot 3.x, Security 6, Hibernate 6, Actuator, native, Jakarta, etc. |
| `course-notes/springboot-zh/*.md` | Traditional Chinese mirror lesson markdown; same grep scope. |

## Current Spring Boot 4.x Status

Spring Boot 4.x is GA as of this research date, not a future-only, milestone-only, or release-candidate-only line.

Official status details:

- The official Spring Boot 4.0.0 announcement says Spring Boot `4.0.0` "has been released" and is "available from Maven Central".
- The official project/docs pages currently show Spring Boot 4.0.6.
- The release notes state that milestones and release candidates started being published to Maven Central from `4.0.0-M1`, but that is historical context; the line is now GA.
- The migration guide frames Boot 4 as a major release and recommends upgrading existing applications to the latest Spring Boot 3.5.x before migrating to 4.0.

## Baseline and Runtime Changes Relevant to a Beginner-to-Intermediate Course

| Area | Spring Boot 4.x official finding | Course relevance |
|---|---|---|
| Java baseline | Spring Boot 4.0.6 requires at least Java 17 and is compatible up to and including Java 26. The GA announcement also calls out first-class Java 25 support while retaining Java 17 compatibility. | Existing "Java 17+" wording remains valid. Do not make Java 21 or Java 25 mandatory for a beginner course unless the lesson specifically covers those runtimes. |
| Spring Framework baseline | Spring Boot 4.0.6 requires Spring Framework 7.0.7 or above. | Visible labels and conceptual overview should move from Boot 3 / Framework 6 era to Boot 4 / Framework 7 era. |
| Build tools | Official system requirements list Maven 3.6.3+ and Gradle 8.x 8.14+ / 9.x. Release notes call out Gradle 9 support. | Maven examples can remain as the main beginner path if they use the Boot 4 parent/plugin/version. Gradle 9 support is an update note, not a required course restructure. |
| Servlet containers | Boot 4 supports embedded Tomcat 11.0.x and Jetty 12.1.x on Servlet 6.1. It can deploy to Servlet 6.1+ compatible containers. Undertow support is dropped because Boot 4 requires a Servlet 6.1 baseline and Undertow is not yet compatible. | If lessons name Tomcat versions or external servlet containers, update to Tomcat 11 / Servlet 6.1. Avoid adding Undertow examples to a Boot 4 course. |
| Jakarta APIs | Boot 4 remains Jakarta-based. Official dependency management includes Jakarta Servlet 6.1.0, Jakarta Persistence 3.2.0, and Jakarta Validation 3.1.1. | Keep `jakarta.*` imports in validation and JPA lessons. Do not revert to `javax.*`. |
| JPA / Hibernate | Official Boot 4.0.6 dependency management includes Hibernate ORM 7.2.12.Final and Hibernate Validator 9.0.1.Final. Migration guide notes Hibernate dependency management changes, including `hibernate-jpamodelgen` being replaced by `hibernate-processor`. | Update course text that says Hibernate 6 to Hibernate 7 when describing Boot 4 defaults. Basic Spring Data JPA repository/entity concepts remain intact. |
| Spring Security | Official Boot 4.0.6 dependency management includes Spring Security 7.0.5. Migration guide lists Boot 4 security starters and security test starters. It also notes Spring Authorization Server is now part of Spring Security. | Update visible "Spring Security 6" labels to "Spring Security 7". The modern `SecurityFilterChain` mental model remains relevant; do not reintroduce `WebSecurityConfigurerAdapter`. |
| JSON / Jackson | Migration guide says Spring Boot 4 uses Jackson 3 as the preferred JSON library. Jackson 3 uses new group IDs/package names with `com.fasterxml.jackson` becoming `tools.jackson`, while Jackson 2 remains available in deprecated compatibility form. `@JsonComponent`/`@JsonMixin` are renamed to `@JacksonComponent`/`@JacksonMixin`. | Basic DTO/request/response JSON teaching can stay, but any lesson that names Jackson internals, annotations, or customizers should be checked for Jackson 3 names. |
| Modularization and starters | Boot 4 ships smaller focused modules and more consistent starters. Deprecated starter replacements include `spring-boot-starter-web` → `spring-boot-starter-webmvc`, `spring-boot-starter-web-services` → `spring-boot-starter-webservices`, and OAuth starter names moving under `spring-boot-starter-security-*`. Each technology also has a companion test starter. | For beginner Boot 4 POMs, prefer the new starter names when artifacts are shown. The Initializr UI may still use friendly labels such as "Spring Web", but artifact examples should reflect Boot 4 naming. |
| Testing | Migration guide says `@SpringBootTest` no longer provides MockMvc support by itself; add `@AutoConfigureMockMvc`. It no longer provides `WebClient` or `TestRestTemplate` beans automatically; add the relevant auto-configure annotation. `RestTestClient` support is added. Boot's `@MockBean` and `@SpyBean` are removed in favor of `@MockitoBean` and `@MockitoSpyBean`. Test starter modularization means technology-specific test starters matter. | Lesson 14 and any test examples need targeted checking. MockMvc remains valid, but implicit wiring and mock annotations may need Boot 4 syntax. |
| Actuator / production-ready features | Migration guide says liveness/readiness probes are enabled by default and health exposes `liveness` and `readiness` groups by default. Actuator docs show health indicator examples now imported from `org.springframework.boot.health.contributor.*`. Migration guide notes SSL health/status changes: `WILL_EXPIRE_SOON` is no longer used as the SSL status; expiring chains appear under `expiringChains`. | Basic Actuator lesson can stay. If it has custom health indicator imports or detailed SSL health behavior, update packages/behavior. Deployment lessons can mention readiness/liveness defaults. |
| Observability | Release notes add `spring-boot-starter-opentelemetry` for exporting metrics and traces over OTLP and auto-configuring the OpenTelemetry SDK. Official dependency management includes Micrometer 1.16.5 and OpenTelemetry 1.55.0. | Observability can stay high-level in a beginner course; OpenTelemetry starter is a Boot 4 addition if the course mentions tracing/metrics beyond Actuator basics. |
| Packaging | Migration guide removes embedded executable uber-jar launch scripts but states Spring Boot build plugins still create uber jars runnable with `java -jar`. Efficient packaging docs describe `java -Djarmode=tools -jar my-app.jar extract` and running extracted jars. Docker docs show layered extraction with jarmode tools and AOT/CDS-friendly layout. | Keep executable jar and Docker-friendly packaging concepts. Remove/avoid fully executable launch script instructions if present. |
| Native images / AOT | System requirements list GraalVM Community 25 and Native Build Tools 0.11.5. Native image docs describe closed-world restrictions and Spring AOT generated sources/resources/classes. | Existing "AOT/native-image-aware" deployment discussion remains conceptually valid. Keep it as an advanced note unless the course explicitly teaches native builds. |
| Null-safety | Official Spring blog says Spring Boot 4.0, Spring Framework 7.0, Spring Data 4.0, Spring Security 7.0, Spring Batch 6.0, Spring Kafka 4.0, Micrometer 1.16, and related projects provide null-safe APIs with JSpecify. Former Spring nullability annotations in `org.springframework.lang` are deprecated in favor of JSpecify ones. | Do not force null-safety into beginner lessons unless already discussed, but update any advanced nullability section away from `org.springframework.lang.Nullable` toward JSpecify. |

## Selected Managed Dependency Versions from Official Boot 4.0.6 Sources

These are useful when lesson text names framework/dependency generations. Some variables in the Boot dependency Gradle file are defined elsewhere, so only values directly visible in the inspected official source or docs are listed here.

| Dependency family | Version / line |
|---|---|
| Spring Boot | 4.0.6 current docs/project page |
| Spring Framework | 7.0.7+ required by current system requirements |
| Spring Security | 7.0.5 |
| Spring Data BOM | 2025.1.5 |
| Spring Session | 4.0.3 |
| Spring Batch | 6.0.3 |
| Spring Kafka | 4.0.5 |
| Hibernate ORM | 7.2.12.Final |
| Hibernate Validator | 9.0.1.Final |
| Jakarta Servlet | 6.1.0 |
| Jakarta Persistence | 3.2.0 |
| Jakarta Validation | 3.1.1 |
| Tomcat | 11.0.x supported embedded servlet container |
| Jetty | 12.1.x supported embedded servlet container; official dependency source showed 12.1.8 |
| MySQL Connector/J | 9.7.0 |
| Testcontainers | 2.0.5 |
| Micrometer | 1.16.5 |
| OpenTelemetry | 1.55.0 |
| GraalVM native image support | GraalVM Community 25; Native Build Tools 0.11.5 |

## What Should Change When Moving Visible Course Label from 3.x to 4.x

### Course metadata

`src/data/courses.ts` is the catalog source of truth. Current inspected lines include:

- `title: 'Spring Boot 3.x'`
- `shortLabel: 'SB3'`
- English/Chinese subtitles and overviews that say Spring Boot 3.x.
- Focus and outcomes that say Spring Boot 3.x and Spring Security 6.
- Module titles/descriptions that say Spring Boot 3.x.
- Module 4 description that says Hibernate 6.
- Module 6 description and lesson 16 title that say Spring Security 6.
- Lesson 21 title that says Prepare Spring Boot 3.x for Deployment.

For a visible Boot 4 update, these labels should move to Boot 4.x / SB4 and Spring Security 7. Hibernate wording should move from Hibernate 6 to Hibernate 7 where it describes Boot-managed defaults.

### Lesson markdown

The Spring Boot course content is markdown-backed. English files are under `course-notes/springboot/`; Traditional Chinese mirrors are under `course-notes/springboot-zh/`.

Grep found explicit Boot 3.x / Security 6 / Hibernate 6 / related version-sensitive text in both locales. Files that surfaced include:

| English file | Version-sensitive content found |
|---|---|
| `course-notes/springboot/lesson-1.md` | Lesson title and body identify Spring Boot 3.x; mentions Java 17+ and Jakarta namespace. |
| `course-notes/springboot/lesson-2.md` | Initializr workflow says align with Spring Boot 3.x and Java 17+; practice asks for Spring Boot 3.x project. |
| `course-notes/springboot/lesson-6.md` | Title/body/continuity mention Spring Boot 3.x auto-configuration. |
| `course-notes/springboot/lesson-7.md` | Example response says `Hello, Spring Boot 3.x`; continuity references lesson 6 title. |
| `course-notes/springboot/lesson-9.md` | Validation discussion starts with Spring Boot 3.x; Jakarta validation imports are already correct. |
| `course-notes/springboot/lesson-10.md` | Title/body say Spring Boot 3.x and Hibernate 6. |
| `course-notes/springboot/lesson-11.md` | Continuity references lesson 10 title; Jakarta persistence imports are already correct. |
| `course-notes/springboot/lesson-13.md` | Testing text says Spring Boot 3.x. |
| `course-notes/springboot/lesson-14.md` | Testing text says Spring Boot 3.x and mentions Testcontainers/service connections. |
| `course-notes/springboot/lesson-16.md` | Title/body say Spring Security 6 and Spring Boot 3.x; `SecurityFilterChain` teaching remains relevant. |
| `course-notes/springboot/lesson-17.md` | Continuity references Spring Security 6. |
| `course-notes/springboot/lesson-18.md` | JWT/resource-server discussion says Spring Boot 3.x. |
| `course-notes/springboot/lesson-20.md` | Actuator lesson and continuity references deployment lesson title. |
| `course-notes/springboot/lesson-21.md` | Title/body/final continuity say Spring Boot 3.x; mentions Docker, AOT, native image. |
| `course-notes/springboot/lesson-template.md` | Template still says Spring Boot 3.x but is ignored by the loader; update only if templates are kept current. |

The Chinese mirror has corresponding occurrences in `lesson-1.md`, `lesson-2.md`, `lesson-6.md`, `lesson-7.md`, `lesson-9.md`, `lesson-10.md`, `lesson-11.md`, `lesson-13.md`, `lesson-14.md`, `lesson-16.md`, `lesson-17.md`, `lesson-18.md`, `lesson-20.md`, and `lesson-21.md`.

### Dependency and starter examples

For Boot 4-specific examples:

- Prefer `spring-boot-starter-webmvc` over deprecated `spring-boot-starter-web` when showing Maven/Gradle artifacts for Spring MVC.
- Keep `spring-boot-starter-validation`, `spring-boot-starter-data-jpa`, `spring-boot-starter-security`, and `spring-boot-starter-actuator` as relevant main starters.
- Add/mention technology-specific test starters where examples require Boot 4 test support, such as `spring-boot-starter-webmvc-test`, `spring-boot-starter-data-jpa-test`, `spring-boot-starter-security-test`, and `spring-boot-starter-actuator-test`.
- Treat `spring-boot-starter-classic` and `spring-boot-starter-test-classic` as migration aids for existing applications, not as the default teaching path for a new beginner project.

### Testing content

Boot 4 testing changes likely affect the course if examples go beyond plain unit tests:

- MockMvc remains valid, but `@SpringBootTest` does not provide MockMvc support unless `@AutoConfigureMockMvc` is added.
- `@MockBean` and `@SpyBean` should become `@MockitoBean` and `@MockitoSpyBean` if used.
- For random-port/server tests, `RestTestClient` is the newer documented client; `TestRestTemplate` exists under `org.springframework.boot.resttestclient.TestRestTemplate` and requires explicit auto-configuration/dependencies.
- Security testing should use the Boot 4 security test starter when the course relies on Spring Security test support such as `@WithMockUser`.

### Data, validation, and JSON content

- Keep `jakarta.validation.*` and `jakarta.persistence.*` imports; they are still correct for Boot 4.
- Update descriptive text from Hibernate 6 to Hibernate 7 when describing Boot-managed JPA defaults.
- Basic JSON request/response teaching can remain framework-neutral. If lessons mention Jackson classes, use Jackson 3-oriented names and note deprecated Jackson 2 compatibility only when necessary.

### Actuator and deployment content

- Actuator basics remain relevant: health, info, metrics, endpoint exposure, operational visibility.
- If custom health indicators are shown, Boot 4 docs import `Health` and `HealthIndicator` from `org.springframework.boot.health.contributor.*`.
- Include Boot 4's default liveness/readiness probe groups if deployment/health-check lessons discuss Kubernetes/platform probes.
- Keep `java -jar` packaging examples. Avoid embedded launch-script/fully executable jar instructions that Boot 4 removed.
- For container layering/extraction examples, Boot 4 docs use `java -Djarmode=tools -jar my-app.jar extract`.
- Native image/AOT remains an advanced deployment topic with GraalVM Community 25 and Native Build Tools 0.11.5 in current docs.

## What Should Not Change

- Do not rename the route slug `spring-boot` unless explicitly required. The user constraints say to avoid changing it, and repo routing uses that slug for dedicated Spring Boot pages.
- Do not change the markdown-backed content architecture unless explicitly required. `src/data/springbootNotes.ts` loads from `course-notes/springboot/` and `course-notes/springboot-zh/`.
- Do not change lesson count, order, or slugs in only one locale. English/zh content must stay in parity.
- Do not change `jakarta.*` imports back to `javax.*`; Boot 4 continues the Jakarta line.
- Do not claim Java 21 or Java 25 is required for normal Boot 4 beginner work. Java 17 remains the minimum baseline.
- Do not teach Undertow as a supported Boot 4 embedded server path.
- Do not present Boot 4 as a milestone/RC/future line. It is GA, with current 4.0.6 docs.
- Do not make Boot 4's modularization sound like it changes the beginner mental model for dependency injection, beans, configuration properties, profiles, controllers, DTOs, services, repositories, or validation. Those concepts remain course-stable.
- Do not make classic starters the default for new course projects; official guidance treats them as an upgrade bridge.

## Mapping to Repo Constraints

| Repo constraint | Research mapping |
|---|---|
| Course metadata lives in `src/data/courses.ts`. | The Boot course catalog block currently uses Spring Boot 3.x / SB3 labels and should be the metadata source for visible course label updates. |
| Spring Boot lesson content is markdown-backed under `course-notes/springboot/` and `course-notes/springboot-zh/`. | Version-sensitive lesson text appears in both directories and should be updated in parity. |
| Avoid changing route slug `spring-boot` unless explicitly required. | Official Boot 4 changes do not require route slug changes. Keep `spring-boot`. |
| English/zh content must stay in parity. | Grep showed matching version-sensitive occurrences in both English and Traditional Chinese lesson sets. Update both together. |
| Spring Boot loader behavior. | `src/data/springbootNotes.ts` only loads `lesson-<number>.md`; `lesson-template.md` is ignored. Frontmatter keys `title`, `lesson`, `slug`, `summary` remain required by the loader. |
| Static Astro teaching site. | All findings are content/metadata updates; no official Boot 4 finding requires adding runtime app code to this repo. |

## Not Found / Limits

- This research did not inspect every line of every lesson manually; it used targeted repo reads and grep for version-sensitive terms.
- Official source review did not find any requirement to rename this course's route slug or split Spring Boot into a separate track.
- Official Boot 4 docs confirm current baselines and migration issues, but any concrete code snippet in lessons should still be checked against Boot 4 docs during implementation because package names changed in several Boot-specific modules.

## One-Line Takeaway

Spring Boot 4.x is a GA line with Java 17+ still valid, but the course label update should include targeted content changes for Spring Framework 7, Spring Security 7, Hibernate 7, Servlet 6.1/Tomcat 11, Boot 4 modular starters/test starters, Jackson 3, and Boot 4 testing/Actuator packaging details while preserving `spring-boot` routing and English/zh parity.
