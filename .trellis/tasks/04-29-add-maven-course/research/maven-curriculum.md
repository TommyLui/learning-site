# Maven Course Curriculum Research

## Search Results

### Query

Research a practical Maven course curriculum for this static learning site and persist findings for a 12-lesson beginner-to-intermediate Maven track.

### Search Scope

- Internal repo course-data constraints inspected:
  - `.trellis/tasks/04-29-add-maven-course/prd.md`
  - `src/data/courses.ts`
  - `src/data/lessonRegistry.ts`
  - `src/data/goLessons.ts`
  - `src/data/goLessonsZh.ts`
- External references inspected from official Apache Maven documentation and official Maven plugin documentation.

## Official Maven Documentation Findings

| Core topic | Official reference | Findings relevant to course scope |
|---|---|---|
| Quick start and first project | [Maven in 5 Minutes](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html) | Shows Java prerequisite, `mvn --version`, archetype generation, generated `pom.xml`, standard `src/main/java` and `src/test/java` structure, and `mvn package` as an early learner workflow. |
| POM | [Introduction to the POM](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html) | Defines the POM as Maven's fundamental XML project model. A minimal POM needs `project`, `modelVersion`, `groupId`, `artifactId`, and `version`; `groupId:artifactId:version` forms the fully qualified artifact name. Also covers Super POM defaults, inheritance, aggregation, and variables/properties. |
| Standard directory layout | [Introduction to the Standard Directory Layout](https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html) | Core directories include `src/main/java`, `src/main/resources`, `src/test/java`, `src/test/resources`, `src/site`, and `target`. Maven expects project metadata such as `pom.xml` at the top level and build output under `target`. |
| Dependency mechanism | [Introduction to the Dependency Mechanism](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html) | Covers transitive dependencies, nearest-definition mediation, explicit direct dependency declarations, exclusions, optional dependencies, dependency management, import scope, and BOM POMs. |
| Dependency scopes | [Introduction to the Dependency Mechanism · Dependency Scope](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#Dependency_Scope) | Six scopes: `compile` default, `provided`, `runtime`, `test`, `system`, and `import`. Scope affects classpath inclusion and transitivity. `system` is supported but not recommended; private hosted repositories are the suggested alternative for unavailable artifacts. |
| Lifecycle phases | [Introduction to the Build Lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html) | Maven has `default`, `clean`, and `site` lifecycles. Common default phases include `validate`, `compile`, `test`, `package`, `verify`, `install`, and `deploy`; invoking a later phase runs preceding phases in order. `mvn verify` is described as the preferred uncertain/default verification phase. |
| Plugins and goals | [Introduction to Maven Plugin Development](https://maven.apache.org/guides/introduction/introduction-to-plugins.html) and [Guide to Configuring Plug-ins](https://maven.apache.org/guides/mini/guide-configuring-plugins.html) | Maven core delegates real build work to plugins. A plugin contains goals/Mojos, and goals may be bound to lifecycle phases. Plugin configuration belongs in `<build>` for build plugins or `<reporting>` for reporting plugins. Official guidance says all plugins should declare at least `groupId`, `artifactId`, and `version`, and plugin versions should be defined for reproducible builds, often via `pluginManagement`. |
| Maven Wrapper | [Maven Wrapper](https://maven.apache.org/tools/mavenwrapper.html) | Wrapper helps ensure a project builds with a chosen Maven version and can automatically download required versions. It uses `.mvn/wrapper/maven-wrapper.properties`, then learners run `./mvnw <goals>` or `mvnw.cmd <goals>` on Windows. |
| Profiles | [Introduction to Build Profiles](https://maven.apache.org/guides/introduction/introduction-to-profiles.html) | Profiles modify the POM at build time for different environments. They can be per-project, per-user, or global, and can activate explicitly with `-P` or implicitly by JDK, OS, property, packaging property, or files. Official docs also document portability pitfalls and `mvn help:active-profiles` / `mvn help:effective-pom`. |
| Multi-module projects | [Guide to Working with Multiple Modules](https://maven.apache.org/guides/mini/guide-multiple-modules.html) and [Introduction to the POM · Project Aggregation](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html#Project_Aggregation) | Multi-module builds use the reactor, which collects modules, sorts them into build order, and builds selected projects in order. Aggregation requires parent packaging `pom` and `<modules>`. Reactor sorting honours module dependencies and other instantiated relationships; useful CLI options include `--resume-from`, `--also-make`, `--also-make-dependents`, `--fail-fast`, `--fail-at-end`, and `--non-recursive`. |
| Publishing/deploying artifacts | [Apache Maven Install Plugin](https://maven.apache.org/plugins/maven-install-plugin/) and [Apache Maven Deploy Plugin](https://maven.apache.org/plugins/maven-deploy-plugin/) | The Install Plugin adds artifacts to the local repository during `install`. The Deploy Plugin adds artifacts to a remote repository during `deploy` and requires repository location/transport, artifact coordinates, and credentials from settings as needed. |
| Repository manager and deployment settings | [Best Practice - Using a Repository Manager](https://maven.apache.org/repository-management.html) and [Security and Deployment Settings](https://maven.apache.org/guides/mini/guide-deployment-security-settings.html) | Repository managers are an official best practice for significant Maven usage because they proxy public repositories and provide deployment destinations. Deployment repositories are defined in `distributionManagement`; credentials and security settings belong in `settings.xml` server entries with matching ids, not in the project POM. |
| Deploying standalone or third-party artifacts | [Guide to deploying 3rd party JARs to remote repository](https://maven.apache.org/guides/mini/guide-3rd-party-jars-remote.html) | `deploy:deploy-file` can deploy a single JAR with command-line coordinates and repository parameters, or with an existing POM via `-DpomFile`. Useful as an intermediate-to-advanced publishing topic after normal project deployment is understood. |

## Practical 12-Lesson Learning Path

A sensible beginner-to-intermediate Maven course can be organized as four modules with three lessons each. The path starts with installation and a generated project, then moves through POM structure, dependencies, lifecycle/plugins, environment variation, multi-module organization, and publishing.

### Proposed English course modules and lessons

| Lesson | Module title | Lesson title | Main Maven topics | Official references |
|---:|---|---|---|---|
| 1 | Module 1 · Maven foundations and project layout | Install Maven and run the first project | Java prerequisite, `mvn --version`, archetype generation, first `mvn package`, wrapper awareness | Maven in 5 Minutes; Maven Wrapper |
| 2 | Module 1 · Maven foundations and project layout | Read the POM and Maven coordinates | Minimal POM, `modelVersion`, `groupId`, `artifactId`, `version`, packaging default, Super POM defaults | Introduction to the POM; POM Reference |
| 3 | Module 1 · Maven foundations and project layout | Understand the standard directory layout | `src/main/java`, `src/main/resources`, `src/test/java`, `src/test/resources`, `target`, top-level project files | Standard Directory Layout; Maven in 5 Minutes |
| 4 | Module 2 · Dependencies and reproducible builds | Add dependencies and inspect the dependency tree | Direct dependencies, transitive dependencies, nearest definition, `dependency:tree`, direct-use dependency declarations | Dependency Mechanism; Maven Dependency Plugin docs as optional reference |
| 5 | Module 2 · Dependencies and reproducible builds | Use dependency scopes correctly | `compile`, `provided`, `runtime`, `test`, `system`, `import`; classpath and transitivity effects | Dependency Mechanism · Dependency Scope |
| 6 | Module 2 · Dependencies and reproducible builds | Manage versions with dependencyManagement and BOMs | Centralized versions, parent-managed dependencies, imported BOMs, keeping versions predictable | Dependency Mechanism · Dependency Management and BOMs |
| 7 | Module 3 · Lifecycles, plugins, and build control | Run lifecycle phases with confidence | `clean`, `default`, `site`; `validate`, `compile`, `test`, `package`, `verify`, `install`, `deploy`; phase ordering | Build Lifecycle; Maven in 5 Minutes |
| 8 | Module 3 · Lifecycles, plugins, and build control | Configure plugins and goals | Build plugins, reporting plugins, goals/Mojos, executions, phase binding, plugin version pinning, `pluginManagement` | Introduction to Plugins; Guide to Configuring Plug-ins; Build Lifecycle |
| 9 | Module 3 · Lifecycles, plugins, and build control | Use Maven Wrapper and profiles for repeatable environments | `.mvn/wrapper/maven-wrapper.properties`, `./mvnw`, `mvnw.cmd`, project profiles, explicit and implicit activation, active profile inspection | Maven Wrapper; Build Profiles |
| 10 | Module 4 · Multi-module projects and artifact publishing | Build a multi-module project with the reactor | Parent `packaging` = `pom`, `<modules>`, aggregation vs inheritance, reactor sorting, module build CLI switches | POM aggregation; Working with Multiple Modules |
| 11 | Module 4 · Multi-module projects and artifact publishing | Install artifacts locally for reuse | Local repository, `install` phase, Install Plugin goals, coordinates and local artifact reuse | Maven Install Plugin; Build Lifecycle |
| 12 | Module 4 · Multi-module projects and artifact publishing | Deploy artifacts to a remote repository | `deploy` phase, Deploy Plugin, `distributionManagement`, repository managers, matching `settings.xml` server credentials, `deploy:deploy-file` overview | Maven Deploy Plugin; Repository Management; Security and Deployment Settings; Deploying 3rd-party JARs |

### Proposed Traditional Chinese module title parity

These titles can be used as the Chinese `course.modules[].zhTitle` values and as exact `moduleTitle` values in Chinese lesson objects.

| English module title | Traditional Chinese module title |
|---|---|
| Module 1 · Maven foundations and project layout | 模組 1 · Maven 基礎與專案結構 |
| Module 2 · Dependencies and reproducible builds | 模組 2 · 依賴管理與可重現建置 |
| Module 3 · Lifecycles, plugins, and build control | 模組 3 · 生命週期、外掛與建置控制 |
| Module 4 · Multi-module projects and artifact publishing | 模組 4 · 多模組專案與 artifact 發布 |

### Concise lesson-object content direction

Each lesson object can stay close to existing data-backed track style by using short arrays and official references. The following content intent maps onto the current fields observed in `src/data/goLessons.ts` and `src/data/goLessonsZh.ts`.

| Field | Maven lesson content shape |
|---|---|
| `lesson` | Numeric order `1` through `12`; English and Traditional Chinese must match. |
| `slug` | Stable values such as `lesson-1` through `lesson-12`; English and Traditional Chinese must match. |
| `title` | Locale-specific concise lesson title matching the course catalog lesson title intent. |
| `summary` | One sentence describing the immediate skill outcome. |
| `moduleTitle` | Must exactly equal the locale-specific `course.modules[].title` / `zhTitle` string for the module. |
| `intro` | One short paragraph explaining why the topic appears at this point in the learning path. |
| `learningPoints` | 3 bullet-sized outcomes: identify, run/configure, explain/debug. |
| `lessonNotes` | 3 short notes explaining core Maven behavior, not long-form tutorial text. |
| `exampleLanguage` | Usually `bash` for command workflows and `xml` for POM snippets. |
| `exampleCode` | Minimal commands or POM fragment; avoid large full-project examples. |
| `practice` | 3 concrete tasks learners can perform locally. |
| `reasons` | 2 concise reasons the skill matters for Java/Spring/backend work. |
| `mistakes` | 2 common beginner mistakes tied to the topic. |
| `takeaways` | 2 durable concepts to remember. |
| `references` | 2 official docs where possible; plugin-specific official docs for install/deploy/plugin lessons. |

## Repo Course Data Constraints Found

### Files found

| File path | Description |
|---|---|
| `.trellis/tasks/04-29-add-maven-course/prd.md` | Task requirements and technical notes for adding a Maven course track. |
| `src/data/courses.ts` | Shared course catalog. `Course['slug']` union and `courses` array hold course metadata, modules, and lesson summaries. |
| `src/data/lessonRegistry.ts` | Registers data-backed tracks and maps slugs to localized lesson arrays. |
| `src/data/goLessons.ts` | Existing English data-backed lesson object pattern. |
| `src/data/goLessonsZh.ts` | Existing Traditional Chinese data-backed lesson object pattern with matching slugs/order. |

### Internal constraints observed

- `.trellis/tasks/04-29-add-maven-course/prd.md` states that Maven should fit the current course structure and preserve English/Traditional Chinese parity.
- `src/data/courses.ts` line 16 currently defines a finite `Course['slug']` union; a Maven course would need a `maven` slug in that union when implementation happens.
- `src/data/lessonRegistry.ts` lines 21-34 define dedicated/data-backed track slug arrays. Current data-backed tracks are `go`, `rust`, `csharp`, `nextjs`, `typescript`, `postgresql`, and `sqlite`.
- `src/data/lessonRegistry.ts` lines 54-70 route each data-backed slug to English or Traditional Chinese lesson data in `getLessonsBySlug()`.
- `src/data/goLessons.ts` lines 1-17 define the reusable lesson article shape: `lesson`, `slug`, `title`, `summary`, `moduleTitle`, `intro`, `learningPoints`, `lessonNotes`, `exampleLanguage`, `exampleCode`, `practice`, `reasons`, `mistakes`, `takeaways`, and `references`.
- `src/data/goLessons.ts` lines 25, 66, 107, 148, 189, 230, 271, 312, 353, 394, 435, 476, and 517 show that every lesson has a `moduleTitle` matching one of the course module titles.
- `src/data/goLessonsZh.ts` mirrors the English lesson count/order/slugs while localizing visible content and `moduleTitle` values.
- `src/data/courses.ts` lines 1117-1221 show the catalog pattern for a data-backed course: modules contain localized title/description fields and compact lesson summaries.

## Suggested Course Metadata Direction

This research supports a course profile like:

- Slug: `maven`
- Title: `Maven`
- Category: Backend development / Java build tooling
- Level: Beginner to intermediate
- Total lessons: `12`
- English focus examples: build lifecycle, POM, dependency management, plugins, multi-module projects
- Traditional Chinese focus examples: 建置生命週期、POM、依賴管理、外掛、多模組專案
- Prerequisites: basic Java syntax, command-line comfort, ability to run Java locally
- Outcomes:
  - Read and maintain a Maven `pom.xml` with clear coordinates and dependencies.
  - Run lifecycle phases and configure plugins for repeatable Java builds.
  - Organize multi-module projects and understand local/remote artifact publishing.

## Not Found

- No existing `maven` course slug, `mavenLessons.ts`, or `mavenLessonsZh.ts` file was found in `src/data` during the internal search.
- Maven references exist in the broader Spring Boot context per the PRD, but this research did not inspect or modify Spring Boot notes because the task is curriculum research only.
