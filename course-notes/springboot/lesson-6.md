---
title: "Lesson 6: Auto-configuration in Spring Boot 4.x"
lesson: 6
slug: "lesson-6"
summary: "Auto-configuration explains why Spring Boot feels fast and why adding dependencies can change application behavior."
---

# Lesson 6: Auto-configuration in Spring Boot 4.x

Auto-configuration explains why Spring Boot feels fast and why adding dependencies can change application behavior.

## What You Will Learn
- Understand how Spring Boot decides what to configure automatically.

## Why This Matters
- Auto-configuration explains why Spring Boot feels fast and why adding dependencies can change application behavior.

## Main Ideas
- Conditional configuration
- Classpath-driven behavior
- Override defaults when needed

## Lesson Notes
Auto-configuration is one of the signature features of Spring Boot. When the framework detects certain libraries and environment conditions, it automatically prepares useful beans and settings for you.

This behavior is usually conditional. Spring Boot only creates certain configurations if the right classes are on the classpath, certain beans do not already exist, or certain application types are detected.

That means dependencies matter. Adding a web starter can trigger web application setup. Adding JPA can trigger data-related configuration. This is convenient, but it also means you should understand why the application behaves differently after dependency changes.

Auto-configuration is not magic. It is a set of rules and conditions. When you need custom behavior, you can supply your own beans or configuration and Spring Boot will often back off from its default choice.

Learning this idea helps you debug startup behavior, bean conflicts, and configuration surprises later in the course.

## Example
```java
// A custom bean can override a default if Spring Boot allows it
@Configuration
public class TimeConfig {
    @Bean
    public Clock appClock() {
        return Clock.systemUTC();
    }
}
```

## Common Mistakes
- Thinking auto-configuration means there is no configuration at all
- Adding starters without checking what they enable
- Fighting defaults before understanding them

## Practice
- Add a starter dependency and observe what changes in startup logs.
- Explain what conditional configuration means in simple terms.

## Continuity
- Previous lesson: `Lesson 5: Configuration Files and Profiles`
- Next lesson: `Lesson 7: Build Your First REST Controller`

## Key Takeaway
- Auto-configuration explains why Spring Boot feels fast and why adding dependencies can change application behavior.

## Official References
- https://docs.spring.io/spring-boot/reference/using/auto-configuration.html
- https://docs.spring.io/spring-boot/reference/features/index.html
