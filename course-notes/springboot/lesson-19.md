---
title: "Lesson 19: Build Executable Jars and Container-friendly Artifacts"
lesson: 19
slug: "lesson-19"
summary: "Boot 4 applications still package cleanly as executable jars, and container-friendly delivery benefits from layers and jarmode tools rather than removed launch-script habits."
---

# Lesson 19: Build Executable Jars and Container-friendly Artifacts

Boot 4 applications still package cleanly as executable jars, and container-friendly delivery benefits from layers and jarmode tools rather than removed launch-script habits.

## What You Will Learn
- Build a Boot 4 application artifact with Maven or Gradle.
- Run the packaged application with `java -jar`.
- Understand layered and extracted jar workflows for container images.

## Why This Matters
- Packaging turns local code into something a deployment platform can run.
- Boot 4 removes older embedded launch-script support while keeping executable jars and plugin-built artifacts.
- Container images work better when dependencies, application code, and generated assets can be layered intentionally.

## Main Ideas
- The Spring Boot build plugin creates an executable jar that can run with `java -jar`.
- Do not rely on older fully executable launch-script patterns in Boot 4 examples.
- Jarmode tools can extract an archive for efficient container layering.

## Lesson Notes
Building the application is a different milestone from running it in your IDE. A packaged artifact proves that source code, resources, dependencies, and the Boot launcher can be assembled into a runnable unit.

For Maven projects, `./mvnw package` is the typical command. The Boot Maven plugin repackages the jar so it includes application classes and dependencies in a layout that `java -jar` can run. Gradle has equivalent Boot plugin behavior.

Boot 4 still supports executable jars, but course examples should avoid older fully executable jar launch-script instructions. The migration guidance removes embedded executable uber-jar launch scripts. Use `java -jar` or platform-specific service/container mechanisms instead.

Container delivery introduces another concern: layers. Dependencies change less frequently than application classes, so container builds can be faster when those parts are separated. Boot's packaging tools support layered jars, and current docs show jarmode tools for extracting an archive into a layout useful for container images.

A simple beginner path is still valid: build the jar, run it locally with the right environment variables, and later copy it into a container image. As the app grows, learn layered extraction and buildpacks so image builds become faster and more repeatable.

Packaging is also where configuration discipline returns. The artifact should not contain production secrets. Runtime settings such as database URLs, credentials, and exposed Actuator endpoints should come from the deployment environment.

## Example
```bash
./mvnw package
java -jar target/learning-api-0.0.1-SNAPSHOT.jar

# Container-friendly extraction example from the Boot 4 packaging model:
java -Djarmode=tools -jar target/learning-api-0.0.1-SNAPSHOT.jar extract
```

## Common Mistakes
- Shipping an app that only runs from the IDE.
- Baking production secrets into the packaged artifact.
- Copying removed fully executable launch-script instructions into Boot 4 deployment notes.
- Ignoring layers and rebuilding every dependency on every container change.

## Practice
- Package the app and run it with `java -jar`.
- Pass one runtime setting through an environment variable.
- Explain why dependency layers and application layers should be separated in container builds.

## Continuity
- Previous lesson: `Lesson 18: Session, JWT, Resource-server, and Authorization-server Basics`
- Next lesson: `Lesson 20: Use Actuator for Health, Probes, Metrics, and Observability`

## Key Takeaway
- Boot 4 packaging keeps `java -jar` simple while pushing container-friendly workflows toward layered extraction and current tooling.

## Official References
- https://docs.spring.io/spring-boot/reference/packaging/efficient.html
- https://docs.spring.io/spring-boot/reference/packaging/container-images/dockerfiles.html
- https://docs.spring.io/spring-boot/maven-plugin/packaging.html
