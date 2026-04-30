---
title: "Lesson 6: Auto-configuration and Boot 4 Modular Starters"
lesson: 6
slug: "lesson-6"
summary: "Boot 4 keeps auto-configuration approachable while moving toward more focused starter modules and companion test starters."
---

# Lesson 6: Auto-configuration and Boot 4 Modular Starters

Boot 4 keeps auto-configuration approachable while moving toward more focused starter modules and companion test starters.

## What You Will Learn
- Understand how starters and classpath conditions drive auto-configuration.
- Recognize Boot 4's more focused starter naming, such as `spring-boot-starter-webmvc`.
- See why companion test starters make test dependencies more explicit.

## Why This Matters
- Auto-configuration is the reason adding one starter can change application behavior immediately.
- Boot 4 starter modularization affects the dependency names you should teach and copy into new projects.
- Understanding the conditions behind auto-configuration makes debugging less mysterious.

## Main Ideas
- Starters are curated dependency sets, not magic annotations.
- Auto-configuration activates when required classes, properties, and missing beans line up.
- Boot 4 prefers focused starters and technology-specific test starters over one oversized default assumption.

## Lesson Notes
Auto-configuration is one of the features that makes Spring Boot feel productive. You add a starter, Boot sees the related libraries on the classpath, checks configuration properties and existing beans, then creates infrastructure beans that a typical application would need.

In Boot 4, the starter story is more modular. For a Spring MVC API, the preferred starter artifact is `spring-boot-starter-webmvc`. Related test support can be expressed with a focused starter such as `spring-boot-starter-webmvc-test`. The older broad names may still appear in migration discussions, but new course examples should teach the focused Boot 4 path.

This modularity does not change the beginner mental model: add the technology you need, then let Boot configure common infrastructure. What it changes is the precision of dependency choices. Web MVC, WebFlux, Data JPA, Security, Actuator, and their test support should be added deliberately rather than as one large bundle.

Auto-configuration is also conditional. If you define your own bean, Boot may back off. If a required class is missing, an auto-configuration path will not activate. If a property disables a feature, Boot respects that choice. Learning to read condition reports later will help you debug why something was or was not configured.

The safest habit is to keep dependencies aligned with the current lesson. Add the web MVC starter for controllers. Add validation when request validation starts. Add data JPA and the database driver when persistence starts. Add the matching test starter when you write framework-backed tests.

By treating starters as explicit design choices, you keep the project understandable and make Boot 4's modularization work for you instead of against you.

## Example
```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-webmvc</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-webmvc-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

## Common Mistakes
- Copying older starter names into new Boot 4 examples without checking current guidance.
- Adding starters just because they sound useful.
- Assuming auto-configuration cannot be customized or replaced.
- Debugging by guessing instead of checking which conditions matched.

## Practice
- Inspect your build file and list the starters currently present.
- Explain what each starter added to the application.
- Add one focused test starter only when you are ready to write tests that need it.

## Continuity
- Previous lesson: `Lesson 5: Configuration Files, Profiles, and Type-Safe Settings`
- Next lesson: `Lesson 7: Build Your First REST Controller With Spring MVC`

## Key Takeaway
- Boot 4 auto-configuration is easiest to understand when you treat every starter as an intentional capability choice.

## Official References
- https://docs.spring.io/spring-boot/reference/using/build-systems.html
- https://docs.spring.io/spring-boot/reference/using/auto-configuration.html
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide
