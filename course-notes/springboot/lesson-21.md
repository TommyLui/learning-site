---
title: "Lesson 21: Prepare Spring Boot 4.x for Deployment and Migration"
lesson: 21
slug: "lesson-21"
summary: "A Boot 4 service is deployment-ready when configuration, security, observability, packaging, AOT awareness, and migration risks are reviewed together."
---

# Lesson 21: Prepare Spring Boot 4.x for Deployment and Migration

A Boot 4 service is deployment-ready when configuration, security, observability, packaging, AOT awareness, and migration risks are reviewed together.

## What You Will Learn
- Review a practical deployment checklist for a Boot 4 API.
- Understand where AOT and GraalVM native images fit as advanced deployment options.
- Recognize the safest migration sequence for teams moving from the previous major line to Boot 4.

## Why This Matters
- Production readiness is a combination of many earlier decisions, not a final command.
- Boot 4 includes important major-version changes in starters, tests, JSON, security, persistence, and packaging.
- Migration work should be deliberate so teams do not mix application bugs with platform-upgrade issues.

## Main Ideas
- Externalized configuration, secrets, logging, health probes, metrics, and security rules must be checked before deployment.
- AOT and native images can improve startup and memory in some cases, but they require closed-world awareness and extra testing.
- Existing applications should move to the latest stable previous major release before upgrading to Boot 4.

## Lesson Notes
Deployment readiness is a checklist across the whole application. The packaged jar must run outside the IDE. Configuration must come from the environment. Secrets must not be committed. Database connections must use the right profile. Security rules must protect sensitive endpoints. Actuator exposure must be intentional. Logs, metrics, health, and readiness checks must be useful to the platform.

Boot 4 also brings AOT and native-image considerations into modern deployment conversations. Spring AOT can generate assets that help native-image builds. GraalVM native images can reduce startup time and memory for some workloads, but they use a closed-world model. Reflection, dynamic proxies, resources, and runtime discovery need extra care. Treat native images as an advanced deployment option, not a beginner requirement.

Container deployment should build on the packaging lesson. Use `java -jar`, buildpacks, or a Dockerfile with current layered extraction patterns. Avoid removed fully executable launch-script instructions. Keep runtime configuration separate from image content.

For teams migrating an existing app, the safest path is not to jump blindly. Move first to the latest Spring Boot 3.5.x line, remove deprecated APIs, update tests, and confirm behavior. Then migrate to Boot 4 and address major changes such as focused starters, test starter choices, `@MockitoBean` annotations, Jackson 3, Security 7, Hibernate 7, and servlet container baselines.

Do not frame Boot 4 as only a label change. It is still Spring Boot, but it is a major generation update. A good deployment or migration plan identifies the pieces that changed and verifies them with tests and operational checks.

This final lesson connects the course together: you learned the application model, built APIs, added persistence, wrote tests, secured endpoints, observed runtime behavior, packaged the artifact, and now review the system as something that can actually run for users.

## Example
```text
Boot 4 deployment checklist:
1. Build and run the packaged artifact outside the IDE.
2. Provide database URLs, credentials, and secrets from the environment.
3. Expose only necessary Actuator endpoints.
4. Verify readiness and liveness probes.
5. Run unit, web, persistence, security, and deployment smoke tests.
6. Review Boot 4 migration items: starters, tests, Jackson 3, Security 7, Hibernate 7, and packaging.
```

## Common Mistakes
- Treating deployment as only `mvn package`.
- Making native image a requirement before the app is otherwise production-ready.
- Migrating directly from an old codebase to Boot 4 without first removing deprecated previous-major usage.
- Forgetting to retest security, JSON, persistence, and Actuator behavior after the platform upgrade.

## Practice
- Create a deployment checklist for your course project.
- Mark which settings must come from environment variables or a secret store.
- Write a migration note listing the Boot 4 changes your team would need to verify.

## Continuity
- Previous lesson: `Lesson 20: Use Actuator for Health, Probes, Metrics, and Observability`
- Next lesson: This is the final checkpoint of the Spring Boot 4.x course.

## Key Takeaway
- A Spring Boot 4.x app is ready to ship only when build, configuration, security, observability, and migration risks are verified together.

## Official References
- https://docs.spring.io/spring-boot/reference/packaging/native-image/introducing-graalvm-native-images.html
- https://docs.spring.io/spring-boot/reference/packaging/container-images/dockerfiles.html
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide
