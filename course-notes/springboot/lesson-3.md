---
title: "Lesson 3: Understand Project Structure, Startup, and Embedded Servers"
lesson: 3
slug: "lesson-3"
summary: "A clear mental model of project layout, Boot startup, and the embedded server stack makes later controllers, repositories, and configuration easier to reason about."
---

# Lesson 3: Understand Project Structure, Startup, and Embedded Servers

A clear mental model of project layout, Boot startup, and the embedded server stack makes later controllers, repositories, and configuration easier to reason about.

## What You Will Learn
- Understand the main folders in a Boot project and how the application starts.
- Explain the role of `@SpringBootApplication`, component scanning, and `SpringApplication.run(...)`.
- Recognize the Boot 4 servlet baseline with Servlet 6.1 and embedded Tomcat 11 for Spring MVC applications.

## Why This Matters
- Many beginner errors come from misplaced packages, ignored resources, or incorrect startup assumptions.
- Boot startup is where configuration loading, auto-configuration, bean creation, and web server startup meet.
- Knowing the embedded server model helps you avoid old external-container habits.

## Main Ideas
- `src/main/java`, `src/main/resources`, and `src/test/java` each have distinct responsibilities.
- Boot scans downward from the main application package unless you customize scanning.
- A Boot 4 servlet web app normally runs on an embedded Servlet 6.1-compatible server such as Tomcat 11.

## Lesson Notes
After generating a project, pause before writing features. The folder layout is the first design lesson. Application code belongs under `src/main/java`, configuration files belong under `src/main/resources`, and tests belong under `src/test/java`. This structure is simple, but it gives your application room to grow without becoming chaotic.

The main application class is the center of startup. It contains the Java `main` method and calls `SpringApplication.run(...)`. That call starts the Spring application context, loads configuration, evaluates auto-configuration, creates beans, and starts the embedded web server when the project is a web application.

The `@SpringBootApplication` annotation combines configuration, auto-configuration, and component scanning. By default, components are discovered below the package that contains the main class. If a controller or service is placed outside that tree, Spring may not find it, which often appears as a missing bean or unmapped endpoint.

Boot 4 also updates the default runtime stack. For a Spring MVC project, the servlet baseline is Servlet 6.1 and the supported embedded Tomcat line is Tomcat 11. Jetty 12.1 is another supported servlet-container path. Undertow is not the Boot 4 servlet teaching path because the required Servlet 6.1 baseline changed the support story.

This does not mean you have to manually manage Tomcat in a beginner API. The embedded server is pulled in through the web MVC starter and starts with the application. You should still know it exists because request handling, ports, error pages, headers, and deployment behavior all pass through that web server layer.

Once you connect structure and startup, later topics become less magical. Controllers are discovered because of component scanning. Configuration is loaded because resources are part of startup. Auto-configuration reacts to starters. Tests can start parts of this same context when needed.

## Example
```java
package com.tommy.learningapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LearningApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(LearningApiApplication.class, args);
    }
}
```

## Common Mistakes
- Placing controllers or services outside the package tree scanned from the main application class.
- Treating `src/main/resources` as an afterthought instead of the default configuration home.
- Assuming a Boot MVC app needs an external servlet container to run locally.
- Forgetting that the embedded server version is managed by Boot's dependency management.

## Practice
- Draw the generated project folder tree and label the role of each main folder.
- Move a small component outside the scanned package in a practice branch and observe the failure.
- Find the embedded server dependency brought in by the web MVC starter.

## Continuity
- Previous lesson: `Lesson 2: Create a Boot 4 Project With Spring Initializr`
- Next lesson: `Lesson 4: Dependency Injection and Beans`

## Key Takeaway
- Boot startup connects project structure, component scanning, auto-configuration, and the embedded server into one application runtime.

## Official References
- https://docs.spring.io/spring-boot/reference/features/spring-application.html
- https://docs.spring.io/spring-boot/reference/using/using-the-springbootapplication-annotation.html
- https://docs.spring.io/spring-boot/system-requirements.html
