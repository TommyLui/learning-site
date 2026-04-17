---
title: "Lesson 3: Understand the Project Structure and Startup Flow"
lesson: 3
slug: "lesson-3"
summary: "A clear mental model of startup and structure makes later topics like controllers, repositories, and configuration much easier to understand."
---

# Lesson 3: Understand the Project Structure and Startup Flow

A clear mental model of startup and structure makes later topics like controllers, repositories, and configuration much easier to understand.

## What You Will Learn
- Understand the main folders in a Spring Boot project and how the application starts.
- Explain the role of `@SpringBootApplication` and `SpringApplication.run(...)`.
- See why package structure affects component scanning, bean discovery, and debugging.

## Why This Matters
- A clear mental model of startup and structure makes later topics like controllers, repositories, and configuration much easier to understand.
- Many common errors in Spring Boot come from package placement, configuration loading, or startup assumptions.
- Understanding the default project shape helps you grow the application without losing readability.

## Main Ideas
- `src/main/java`, `src/main/resources`, and `src/test/java` each serve a distinct role.
- `@SpringBootApplication` defines the main entry point and enables core Boot behavior.
- `SpringApplication.run(...)` triggers bootstrapping, configuration loading, bean creation, and server startup.

## Lesson Notes
After generating a project with Spring Initializr, the next useful step is not writing more code right away. It is understanding the shape of the codebase you have been given. Spring Boot projects follow a structure that is simple enough for beginners but strong enough to support real application growth.

The build file is the first important piece. In Maven projects this is usually `pom.xml`; in Gradle projects it will be a build script. This file is where dependencies, plugins, Java version settings, and packaging behavior live. Every time you add a new starter or change the build process, you are touching part of the project's backbone.

Inside `src/main/java` you place the main application code. This is where controllers, services, repositories, configuration classes, and domain models are usually organized into packages. Even when the project is still small, this folder represents the long-term structure of the backend.

Inside `src/main/resources` you keep application configuration such as `application.properties` or `application.yml`. This folder becomes increasingly important once you add database settings, profiles, custom ports, or feature flags. Learning to treat configuration as a first-class concern early will save you many problems later.

Inside `src/test/java` you place tests. Spring Boot creates this test structure from the start because testing is not meant to be bolted on at the end. It is part of the application design. Even if your first project only has a few tests, the structure reminds you that verification belongs in the project from day one.

The most important single class in the generated project is the main application class. It contains the Java `main` method, which is where the JVM starts, and it calls `SpringApplication.run(...)`, which is where Spring Boot begins its own startup sequence.

That startup sequence does more than run a method. It loads configuration, determines the type of application being created, evaluates auto-configuration conditions, scans for components, creates beans, and starts the embedded web server if the application is a web app. This is why the startup phase feels so rich: many framework decisions happen in one place.

The `@SpringBootApplication` annotation matters because it combines several responsibilities into one clear entry point. It marks the class as a configuration source, enables auto-configuration, and turns on component scanning. The combination is what makes the generated application so compact while still being powerful.

Package placement becomes important here. Spring Boot generally scans downward from the package of the main application class. If your controller or service sits outside that tree, Spring may never discover it automatically. Beginners often experience this as a mysterious missing bean problem when it is really a package structure issue.

This lesson also introduces the idea that structure and startup are connected. You are not only learning where files go; you are learning how Spring Boot finds and wires those files at runtime. Once you understand that connection, later lessons on controllers, dependency injection, and configuration feel much less magical.

## Example
```java
@SpringBootApplication
public class LearningApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(LearningApiApplication.class, args);
    }
}
```

## Common Mistakes
- Not knowing what the startup class does.
- Putting Spring components outside the scanned package structure.
- Ignoring the role of `src/main/resources` and scattering configuration elsewhere.
- Treating the project folder layout as cosmetic instead of architectural.

## Practice
- Locate the main application class in your generated project and explain each line.
- Draw a folder map that labels `src/main/java`, `src/main/resources`, and `src/test/java`.
- Move one component outside the main package tree in a small practice project and observe what changes.

## Continuity
- Previous lesson: `Lesson 2: Create a Project With Spring Initializr`
- Next lesson: `Lesson 4: Dependency Injection and Beans`

## Key Takeaway
- A clear mental model of startup and structure makes later topics like controllers, repositories, and configuration much easier to understand.

## Official References
- https://docs.spring.io/spring-boot/tutorial/index.html
- https://docs.spring.io/spring-boot/reference/using/index.html
- https://docs.spring.io/spring-boot/reference/using/structuring-your-code.html
