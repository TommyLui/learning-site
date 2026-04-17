---
title: "Lesson 5: Configuration Files and Profiles"
lesson: 5
slug: "lesson-5"
summary: "Real applications need different settings for local development, testing, and production."
---

# Lesson 5: Configuration Files and Profiles

Real applications need different settings for local development, testing, and production.

## What You Will Learn
- Learn how Spring Boot reads configuration from files, environment variables, and runtime inputs.
- Understand how profiles separate development, test, and production behavior.
- See why externalized configuration is safer than hardcoding operational values in Java classes.

## Why This Matters
- Real applications need different settings for local development, testing, and production.
- Good configuration design keeps the same codebase usable across multiple environments.
- Profiles and externalized values reduce deployment risk and improve maintainability.

## Main Ideas
- `application.properties` or `application.yml` is the default configuration entry point.
- Profiles activate environment-specific settings without duplicating the whole app.
- Configuration should live outside business logic whenever possible.

## Lesson Notes
Configuration is one of the first areas where a toy project becomes a real application. Hardcoded ports, credentials, file paths, or feature toggles might feel convenient at first, but they become painful as soon as the app runs in more than one environment.

Spring Boot solves this by making configuration externalized. Instead of embedding environment-specific values directly into Java code, you place them in `application.properties`, `application.yml`, environment variables, system properties, or command-line arguments.

The default configuration file usually lives in `src/main/resources`. That file is a good place for stable defaults, such as the application name, logging levels, or local development settings. Once environments start to differ, profiles become important.

Profiles let you say, in effect, 'use this set of settings for development and that set for production.' You might connect to a local database in `dev`, enable extra logging in `test`, and rely on external secrets in `prod`. The application code stays the same, but the runtime behavior adapts to the active profile.

This pattern matters because backend applications are rarely run in just one place. They are developed locally, tested in CI, deployed to staging, and promoted to production. Without a configuration strategy, each move between environments becomes risky and manual.

Spring Boot also merges configuration from multiple sources according to a priority order. That means a value in an environment variable can override one in `application.properties`, and a command-line argument can override both. Understanding that hierarchy helps explain why an application sometimes behaves differently than expected.

Another practical lesson is to separate operational concerns from business logic. A service should not know or care whether the app runs on port 8080 or 8081. It should not hardcode database hosts or API secrets. Those details belong to configuration, not domain logic.

If you build this habit early, later topics become much smoother. Database connections, security settings, Actuator exposure, and deployment tuning all depend on the same foundation: clear, externalized configuration with environment-aware profiles.

## Example
```properties
spring.application.name=learning-api
server.port=8081
spring.profiles.active=dev

# application-dev.properties
logging.level.com.tommy.learningapi=DEBUG
spring.datasource.url=jdbc:mysql://localhost:3306/learning_dev
```

## Common Mistakes
- Hardcoding credentials or ports inside Java classes.
- Using one giant config file for every environment.
- Not understanding which config source overrides another when values conflict.

## Practice
- Create `application-dev.properties` and override the server port.
- Move one hardcoded value into configuration and explain why it belongs there.
- Write down three settings that should differ between development and production.

## Continuity
- Previous lesson: `Lesson 4: Dependency Injection and Beans`
- Next lesson: `Lesson 6: Auto-configuration in Spring Boot 4.x`

## Key Takeaway
- Real applications need different settings for local development, testing, and production.

## Official References
- https://docs.spring.io/spring-boot/reference/features/external-config.html
- https://docs.spring.io/spring-boot/reference/features/profiles.html
