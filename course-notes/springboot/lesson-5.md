---
title: "Lesson 5: Configuration Files, Profiles, and Type-Safe Settings"
lesson: 5
slug: "lesson-5"
summary: "Real Boot 4 applications need externalized settings that can change safely across local, test, staging, and production environments."
---

# Lesson 5: Configuration Files, Profiles, and Type-Safe Settings

Real Boot 4 applications need externalized settings that can change safely across local, test, staging, and production environments.

## What You Will Learn
- Learn how Spring Boot reads configuration from files, environment variables, system properties, and command-line inputs.
- Use profiles to separate local, test, and production behavior.
- Understand how `@ConfigurationProperties` keeps related settings type-safe and easier to validate.

## Why This Matters
- Backend applications rarely run in only one environment.
- Configuration mistakes are a common cause of failed startups, broken database connections, and exposed secrets.
- Good configuration design prepares the same codebase for testing, security, observability, and deployment.

## Main Ideas
- `application.properties` or `application.yml` remains the default configuration entry point.
- Profiles activate environment-specific values without duplicating application code.
- Type-safe configuration is better than scattering `@Value` strings across business logic.

## Lesson Notes
Configuration is where a small demo starts becoming a deployable service. A local port, a database URL, a feature flag, a logging level, and an Actuator exposure rule are not business rules. They are operational details that should be externalized.

Spring Boot supports a layered configuration model. Values can come from `application.properties`, YAML files, profile-specific files, environment variables, system properties, and command-line arguments. Later sources can override earlier ones, which is why the same app can behave differently in local development and production.

Profiles let you group settings for a runtime context. You might use `dev` for local MySQL and verbose logging, `test` for test containers or isolated test settings, and `prod` for environment-provided secrets and conservative endpoint exposure. The Java code should stay mostly the same while configuration changes the runtime behavior.

Boot also supports binding grouped settings into typed classes or records with `@ConfigurationProperties`. This is especially useful when several properties belong together. Instead of injecting string values throughout the codebase, one settings object can represent a small part of application configuration.

Be careful with secrets. Course examples may show placeholder values so the shape is clear, but real credentials should come from environment variables, secret stores, or deployment configuration. Do not commit production passwords into source control.

This lesson becomes important again when you add MySQL, Security, Actuator, Docker, and deployment. Each of those topics depends on predictable configuration and a clear rule for what changes between environments.

## Example
```java
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "learning.api")
public record LearningApiProperties(
    String supportEmail,
    boolean publicSignupEnabled
) {}
```

## Common Mistakes
- Hardcoding credentials, ports, or external service URLs inside Java classes.
- Using one giant config file for every environment.
- Not knowing which configuration source wins when values conflict.
- Spreading unrelated `@Value` injections across many services.

## Practice
- Create `application-dev.properties` and override the server port or logging level.
- Move one hardcoded setting into configuration and explain which environment owns it.
- Sketch a small `@ConfigurationProperties` record for two related settings.

## Continuity
- Previous lesson: `Lesson 4: Dependency Injection and Beans`
- Next lesson: `Lesson 6: Auto-configuration and Boot 4 Modular Starters`

## Key Takeaway
- Externalized and type-safe configuration lets one Boot 4 codebase run safely in multiple environments.

## Official References
- https://docs.spring.io/spring-boot/reference/features/external-config.html
- https://docs.spring.io/spring-boot/reference/features/profiles.html
- https://docs.spring.io/spring-boot/reference/features/external-config.html#features.external-config.typesafe-configuration-properties
