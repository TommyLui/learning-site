---
title: "Lesson 2: Create a Project With Spring Initializr"
lesson: 2
slug: "lesson-2"
summary: "Starting from the official generator reduces setup mistakes and keeps your project aligned with Spring Boot conventions."
---

# Lesson 2: Create a Project With Spring Initializr

Starting from the official generator reduces setup mistakes and keeps your project aligned with Spring Boot conventions.

## What You Will Learn
- Learn how to create a clean Spring Boot 4.x project using the official Initializr workflow.

## Why This Matters
- Starting from the official generator reduces setup mistakes and keeps your project aligned with Spring Boot conventions.

## Main Ideas
- Project metadata: group, artifact, name
- Choosing the correct Spring Boot and Java versions
- Selecting dependencies gradually

## Lesson Notes
Spring Initializr is the official entry point for creating a Spring Boot project. It generates a working project skeleton with build configuration, source folders, test folders, and a starter application class.

The most important setup decisions happen at project creation time. You choose the build tool, language, Spring Boot version, packaging, Java version, and dependencies. These choices affect how your code is structured and what gets auto-configured.

For learning, it is usually best to start with only the dependencies you need right now. If you are focusing on the first API, choose Spring Web. When you later move into persistence, add Spring Data JPA and MySQL Driver. When you learn validation or security, add those deliberately instead of loading everything at once.

The metadata fields also matter. Group and artifact influence package names, build output names, and the identity of the application. Good naming makes the project easier to grow.

Once the project is generated, the first milestone is simple: make sure it starts successfully. Before building features, verify that the base project can run with the selected Spring Boot 4.x version and Java setup.

## Example
```text
// Example Maven coordinates
Group: com.tommy
Artifact: learning-api
Name: learning-api
Packaging: Jar
Java: 21
```

## Common Mistakes
- Adding too many dependencies on day one
- Choosing a Java version that does not match Spring Boot requirements
- Skipping the first startup verification

## Practice
- Create a new project with Spring Web only.
- Write down what each Initializr field controls.

## Continuity
- Previous lesson: `Lesson 1: What Spring Boot 4.x Is and Why It Matters`
- Next lesson: `Lesson 3: Understand the Project Structure and Startup Flow`

## Key Takeaway
- Starting from the official generator reduces setup mistakes and keeps your project aligned with Spring Boot conventions.

## Official References
- https://start.spring.io/
- https://docs.spring.io/spring-boot/installing.html
