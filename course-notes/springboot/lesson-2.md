---
title: "Lesson 2: Create a Boot 4 Project With Spring Initializr"
lesson: 2
slug: "lesson-2"
summary: "Starting from Spring Initializr gives you a clean Boot 4 baseline with compatible Java, build tool, starter, and plugin choices."
---

# Lesson 2: Create a Boot 4 Project With Spring Initializr

Starting from Spring Initializr gives you a clean Boot 4 baseline with compatible Java, build tool, starter, and plugin choices.

## What You Will Learn
- Create a Spring Boot 4.x project from the official Initializr workflow.
- Choose Java, Maven or Gradle, packaging, group, artifact, and dependencies deliberately.
- Recognize the Boot 4 starter naming shift, especially the Spring MVC path through `spring-boot-starter-webmvc`.

## Why This Matters
- The first generated project determines your package layout, build file, dependency management, and local run workflow.
- Boot 4 modular starters are more focused than earlier starter habits, so dependency choices should be intentional.
- A known-good generated baseline makes later debugging easier because setup uncertainty is reduced.

## Main Ideas
- Spring Initializr is the safest starting point for a new Boot project.
- Java 17+ is required, and Maven remains a simple beginner-friendly build path.
- Friendly dependency labels in the UI map to actual starter artifacts in the generated build file.

## Lesson Notes
Spring Initializr is the official entry point for new Spring Boot projects. It prevents a common beginner problem: manually combining dependencies that do not belong together or forgetting the build plugin that makes Boot packaging work.

For this course, Maven and Java are a practical default. Choose a Spring Boot 4.x version, keep Java at 17 or newer, and use Jar packaging for an API service. Jar packaging works naturally with Boot's embedded server model and keeps deployment simpler than a traditional external application-server workflow.

The dependency section deserves more attention in Boot 4. The Initializr UI may use friendly labels such as Spring Web, but Boot 4's focused Spring MVC starter is `spring-boot-starter-webmvc`. That starter brings the servlet MVC stack you will use for controllers, request mapping, and JSON responses; the companion `spring-boot-starter-webmvc-test` starter provides focused MockMvc-style test support when testing begins.

Do not add every useful starter at once. If the current lesson is about the first controller, start with the web MVC starter. Add Validation when request rules matter, Data JPA and MySQL Driver when persistence begins, Security when protection begins, and Actuator when operational visibility begins. This staged approach keeps behavior changes explainable.

The generated `pom.xml` or Gradle build file is not just a dependency list. It encodes the Boot parent or plugin, Java version, dependency management, and packaging behavior. Read it before writing application code so you know which platform you are actually using.

After downloading the project, run it before adding custom files. A successful first startup verifies the JDK, build tool, Boot version, and selected dependencies. If something fails later, you will know the generated baseline itself was healthy.

## Example
```text
Project: Maven
Language: Java
Spring Boot: 4.x
Group: com.tommy
Artifact: learning-api
Packaging: Jar
Java: 17
Dependencies: Spring Web (Spring MVC), Validation
```

## Common Mistakes
- Adding Security, JPA, Actuator, and every test dependency before you know what each one changes.
- Selecting a Java version that is not supported by the chosen Boot line.
- Assuming the Initializr label is always identical to the Maven artifact name.
- Skipping the first clean startup before editing the project.

## Practice
- Generate a Boot 4 project with Maven, Java 17, Jar packaging, Spring Web, and Validation.
- Open the build file and identify the actual starter artifact names.
- Run the application once before adding your first controller.

## Continuity
- Previous lesson: `Lesson 1: What Spring Boot 4.x Is and Why It Matters`
- Next lesson: `Lesson 3: Understand Project Structure, Startup, and Embedded Servers`

## Key Takeaway
- A clean Initializr project gives you a trustworthy Boot 4 baseline before you add application complexity.

## Official References
- https://start.spring.io/
- https://docs.spring.io/spring-boot/system-requirements.html
- https://docs.spring.io/spring-boot/reference/getting-started/index.html
