---
title: "Lesson 19: Build and Package the Application"
lesson: 19
slug: "lesson-19"
summary: "A backend is only useful when it can be built and run reliably outside the IDE."
---

# Lesson 19: Build and Package the Application

A backend is only useful when it can be built and run reliably outside the IDE.

## What You Will Learn
- Understand how to package a Spring Boot app into a runnable artifact.
- See how the build process supports repeatable delivery across machines and environments.
- Verify why executable jars are such a common packaging target in Spring Boot.

## Why This Matters
- A backend is only useful when it can be built and run reliably outside the IDE.
- Repeatable packaging is essential for CI, deployment, and collaboration.
- Running a packaged artifact proves the application can survive outside one local development setup.

## Main Ideas
- The build file defines how the application is compiled and packaged.
- Executable jars simplify many deployment workflows.
- A successful build is part of application quality, not just an afterthought.

## Lesson Notes
Development usually begins inside an IDE, but production systems do not live there. At some point the application has to become a real artifact that another machine, pipeline, or environment can run predictably. Packaging is the step that makes that possible.

In Spring Boot, the most common result is an executable jar. That jar bundles the application code with the dependencies needed to run it, making startup straightforward with a `java -jar` command. This is one of the reasons Boot feels so practical for modern backend development.

The build file plays a central role here. It controls dependency resolution, plugin behavior, Java version targeting, and packaging tasks. When the build is clean and repeatable, the rest of the team can trust that the application can be compiled and executed consistently.

This is also where local convenience ends and operational discipline begins. It is not enough for the app to run in one developer's IDE. It should also build from the command line, package correctly, and start from that package in a clean environment.

Running the packaged artifact is an important verification step because it reveals assumptions you may not notice inside the IDE. Missing resources, wrong profiles, or path-related issues often become visible only when the app is launched more realistically.

Packaging also connects directly to deployment automation. CI pipelines and hosting environments rarely care how you started the application in development. They care whether the build command succeeds and produces a stable output.

This lesson therefore shifts attention from writing code to delivering software. A packaged app is not only easier to run elsewhere; it is a sign that the project is becoming portable and operationally serious.

## Example
```bash
# Build the project
./mvnw clean package

# Run the packaged application
java -jar target/learning-api-0.0.1-SNAPSHOT.jar
```

## Common Mistakes
- Only verifying the app inside the IDE.
- Not testing the packaged artifact after build.
- Ignoring build reproducibility across machines or environments.

## Practice
- Package your project into a jar and run it from the command line.
- Describe what changes when you run the jar instead of the IDE launcher.
- Write down why packaging is important for CI and deployment.

## Continuity
- Previous lesson: `Lesson 18: Session and JWT Basics`
- Next lesson: `Lesson 20: Use Actuator for Health Checks and Monitoring`

## Key Takeaway
- A backend is only useful when it can be built and run reliably outside the IDE.

## Official References
- https://docs.spring.io/spring-boot/reference/packaging/index.html
- https://docs.spring.io/spring-boot/reference/build-tool-plugin/index.html
