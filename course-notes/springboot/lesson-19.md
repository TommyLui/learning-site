---
title: "Lesson 19: Build and Package the Application"
lesson: 19
slug: "lesson-19"
summary: "A backend is only useful when it can be built and run reliably outside the IDE."
---

# Lesson 19: Build and Package the Application

A backend is only useful when it can be built and run reliably outside the IDE.

## What You Will Learn
- Understand how to turn a Spring Boot project into a runnable artifact.

## Why This Matters
- A backend is only useful when it can be built and run reliably outside the IDE.

## Main Ideas
- Build lifecycle
- Executable jar packaging
- Repeatable builds

## Lesson Notes
At some point your project needs to move from source code to a runnable artifact. Spring Boot supports packaging the application so it can be started consistently on other machines or environments.

In many cases, the result is an executable jar. That jar includes the application code and the dependencies needed to run it, making deployment much simpler than older server-managed approaches.

The build file controls this packaging process. It also helps standardize Java version settings, plugins, and task execution so everyone works from the same build logic.

This lesson is also where repeatability matters. If the application only runs from one developer's IDE, it is not really ready. A proper build command gives the team a shared and portable workflow.

Packaging is therefore not just about delivery; it is about confidence that the application can be reproduced and started in a clean environment.

## Example
```bash
# Maven
./mvnw clean package

# Run the built app
java -jar target/learning-api-0.0.1-SNAPSHOT.jar
```

## Common Mistakes
- Only running the app from the IDE
- Not testing the packaged artifact
- Ignoring build reproducibility across environments

## Practice
- Package your app into a jar and run it from the command line.
- Explain why executable jars simplify Spring Boot deployment.

## Continuity
- Previous lesson: `Lesson 18: Session and JWT Basics`
- Next lesson: `Lesson 20: Use Actuator for Health Checks and Monitoring`

## Key Takeaway
- A backend is only useful when it can be built and run reliably outside the IDE.

## Official References
- https://docs.spring.io/spring-boot/reference/packaging/index.html
- https://docs.spring.io/spring-boot/reference/build-tool-plugin/index.html
