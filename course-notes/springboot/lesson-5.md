---
title: "Lesson 5: Configuration Files and Profiles"
lesson: 5
slug: "lesson-5"
summary: "Real applications need different settings for local development, testing, and production."
---

# Lesson 5: Configuration Files and Profiles

Real applications need different settings for local development, testing, and production.

## What You Will Learn
- Learn how Spring Boot reads configuration and switches behavior across environments.

## Why This Matters
- Real applications need different settings for local development, testing, and production.

## Main Ideas
- application.properties or application.yml
- Externalized configuration
- Profiles for environment-specific behavior

## Lesson Notes
Spring Boot encourages configuration outside of code. Instead of hardcoding ports, credentials, or feature flags, you keep them in configuration files and environment variables. This makes applications easier to change and safer to deploy.

The default configuration file usually lives in src/main/resources. From there, Spring Boot can also merge profile-specific files such as application-dev.properties or application-prod.yml.

Profiles let you activate different settings for different environments. You might use an in-memory database locally and MySQL in production, or enable extra logging during development and reduce it in production.

Spring Boot also supports configuration from system properties, environment variables, and command-line arguments. This layered approach is a key part of how modern applications stay portable.

If you keep configuration organized from the beginning, later topics like database access, security, and deployment become much easier to manage.

## Example
```bash
# application.properties
server.port=8081
spring.application.name=learning-api
spring.profiles.active=dev
```

## Common Mistakes
- Hardcoding environment-specific values in Java classes
- Not understanding which config source wins when values conflict
- Using one config file for every environment

## Practice
- Create a dev profile and change the server port for it.
- List three things that should usually live in configuration instead of code.

## Continuity
- Previous lesson: `Lesson 4: Dependency Injection and Beans`
- Next lesson: `Lesson 6: Auto-configuration in Spring Boot 4.x`

## Key Takeaway
- Real applications need different settings for local development, testing, and production.

## Official References
- https://docs.spring.io/spring-boot/reference/features/index.html
- https://docs.spring.io/spring-boot/reference/features/external-config.html
