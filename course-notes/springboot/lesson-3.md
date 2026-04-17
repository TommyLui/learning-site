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

## Why This Matters
- A clear mental model of startup and structure makes later topics like controllers, repositories, and configuration much easier to understand.

## Main Ideas
- src/main/java, src/main/resources, src/test/java
- @SpringBootApplication
- SpringApplication.run and component scanning

## Lesson Notes
A generated Spring Boot project is small, but it already shows the basic shape of a real application. The build file manages dependencies and plugins. The main Java directory holds application code. The resources directory contains configuration. The test directory is ready for verification work.

The startup class is the real entry point. It contains the Java main method and calls SpringApplication.run. That call triggers the bootstrapping process, loads configuration, prepares the application context, and starts the embedded server for web apps.

The @SpringBootApplication annotation is especially important because it combines multiple setup responsibilities. It marks the class as a configuration entry point, enables component scanning, and turns on auto-configuration.

Component scanning also explains why package structure matters. Spring usually scans from the package of the main application class downward. If a controller or service is placed outside that tree, it may not be discovered automatically.

When you understand this startup flow, many later debugging problems become easier to reason about. Missing beans, ignored settings, and inactive controllers often connect back to scanning, configuration loading, or auto-configuration decisions.

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
- Not knowing what the startup class does
- Putting Spring components outside the scanned package structure
- Ignoring the role of src/main/resources

## Practice
- Locate the main application class and explain what it does.
- Sketch the folder structure of your project and label each part.

## Continuity
- Previous lesson: `Lesson 2: Create a Project With Spring Initializr`
- Next lesson: `Lesson 4: Dependency Injection and Beans`

## Key Takeaway
- A clear mental model of startup and structure makes later topics like controllers, repositories, and configuration much easier to understand.

## Official References
- https://docs.spring.io/spring-boot/tutorial/index.html
- https://docs.spring.io/spring-boot/reference/using/index.html
