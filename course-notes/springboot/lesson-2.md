---
title: "Lesson 2: Create a Project With Spring Initializr"
lesson: 2
slug: "lesson-2"
summary: "Starting from the official generator reduces setup mistakes and keeps your project aligned with Spring Boot conventions."
---

# Lesson 2: Create a Project With Spring Initializr

Starting from the official generator reduces setup mistakes and keeps your project aligned with Spring Boot conventions.

## What You Will Learn
- Learn how to create a clean Spring Boot 3.x project using the official Initializr workflow.
- Understand what the main Initializr fields mean and how they affect the generated project.
- Choose dependencies in a way that supports gradual learning instead of accidental complexity.

## Why This Matters
- Starting from the official generator reduces setup mistakes and keeps your project aligned with Spring Boot conventions.
- The first project setup affects package naming, build tooling, Java compatibility, and later maintainability.
- A clean starting point makes later lessons easier because you know the project was generated from a known-good baseline.

## Main Ideas
- Project metadata such as group, artifact, and packaging becomes part of the project identity.
- Choosing the correct Spring Boot and Java versions prevents avoidable compatibility problems.
- Selecting dependencies gradually keeps the learning curve under control.

## Lesson Notes
Spring Initializr is the official way to start a Spring Boot project, and that matters more than it might seem at first. Instead of assembling a build file manually and guessing which dependencies belong together, you begin with a project generated from the same conventions the Spring team expects.

The page at `start.spring.io` looks simple, but each field controls something meaningful. Project chooses the build tool, usually Maven or Gradle. Language chooses whether the generated code is Java, Kotlin, or Groovy. Spring Boot selects the framework version you want to target. For this learning path, that should stay aligned with Spring Boot 3.x and a supported Java 17+ runtime. Java 21 also works for many Spring Boot 3 releases, but Java 17 is the safe baseline this course keeps returning to.

The metadata section is easy to underestimate. Group usually reflects a package namespace such as `com.tommy`, while artifact is the project identifier, such as `learning-api`. Those values influence generated package names, build outputs, and how the application identifies itself in a team or portfolio context. Good names keep the project readable as it grows.

Packaging is another early choice with practical consequences. For most API-focused Spring Boot applications, `Jar` is the natural default because Spring Boot runs with an embedded server. That keeps deployment simpler and matches how many modern backend services are built and distributed.

The Java version field is not a formality. Spring Boot versions depend on specific Java support windows, so choosing the wrong JDK can lead to startup failures or incompatible libraries before you even write a controller. That is why checking system requirements is part of a healthy setup workflow, not an optional detail.

Dependencies are where beginners most often create accidental confusion. It is tempting to add Spring Web, Security, Data JPA, Validation, Actuator, Lombok, and more all at once because they sound useful. The problem is that each starter changes the behavior of the generated project. If you add everything on day one, you create a much larger system before you understand what each part is doing.

A better approach is to add only what supports the current learning goal. If you are about to build your first endpoint, start with Spring Web. When the course reaches persistence, add Spring Data JPA and MySQL Driver. When the course reaches input rules, add Validation. When it reaches authentication, add Spring Security. This staged approach makes debugging and understanding much easier.

Once Initializr generates the project, treat the first successful run as a milestone. Before adding new files or changing the structure, verify that the project starts cleanly. That confirms your local Java environment, build tool, and selected Spring Boot version are all working together.

This lesson is really about adopting a repeatable starting habit. Every future Spring Boot project becomes easier when you begin from the same official entry point and understand why each setup choice was made.

## Example
```text
Project: Maven
Language: Java
Spring Boot: 3.x
Group: com.tommy
Artifact: learning-api
Packaging: Jar
Java: 17
Dependencies: Spring Web
```

## Common Mistakes
- Adding too many dependencies on day one.
- Choosing a Java version that does not match Spring Boot requirements.
- Skipping the first startup verification.
- Treating group and artifact values as disposable names instead of part of project structure.

## Practice
- Create a new Spring Boot 3.x project with only `Spring Web` selected.
- Write down what each Initializr field controls before downloading the project.
- Open the generated project and identify which choices from Initializr are visible in the folder structure or build file.

## Continuity
- Previous lesson: `Lesson 1: What Spring Boot 3.x Is and Why It Matters`
- Next lesson: `Lesson 3: Understand the Project Structure and Startup Flow`

## Key Takeaway
- Starting from the official generator reduces setup mistakes and keeps your project aligned with Spring Boot conventions.

## Official References
- https://start.spring.io/
- https://docs.spring.io/spring-boot/installing.html
- https://docs.spring.io/spring-boot/system-requirements.html
