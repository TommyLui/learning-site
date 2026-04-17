---
title: "Lesson 7: Build Your First REST Controller"
lesson: 7
slug: "lesson-7"
summary: "The first controller turns the project from a running process into a useful web application."
---

# Lesson 7: Build Your First REST Controller

The first controller turns the project from a running process into a useful web application.

## What You Will Learn
- Create a working HTTP endpoint with `@RestController` and mapping annotations.
- Understand how request paths connect to Java methods.
- Recognize the controller as the web-facing entry point of a backend app.

## Why This Matters
- The first controller turns the project from a running process into a useful web application.
- It is the moment where Spring Boot starts handling real HTTP traffic instead of only starting up successfully.
- It introduces the controller layer that the rest of your API design will build on.

## Main Ideas
- `@RestController` returns data directly in HTTP responses.
- Request mapping annotations connect URLs and HTTP verbs to methods.
- Controllers should stay thin and focused on web concerns.

## Lesson Notes
A Spring Boot application that only starts successfully is not yet doing meaningful backend work. The first real milestone comes when the app can respond to an HTTP request. That is the job of the controller layer.

In Spring Boot, a REST controller is usually a small class marked with `@RestController`. That annotation tells Spring two things: this class should handle web requests, and the values returned by its methods should be written directly to the response body rather than treated as view names.

Method-level annotations such as `@GetMapping`, `@PostMapping`, and `@RequestMapping` connect URLs and HTTP methods to Java methods. This mapping is one of the most visible parts of backend design because it defines how clients interact with your service.

The first controller is usually simple by design. It may return a greeting, a health message, or a small JSON payload. That simplicity is useful because it confirms that routing, serialization, and server startup are all working together.

At this stage, the controller can contain the logic directly, but that is not the long-term goal. As the project grows, business logic should move into services so the controller stays focused on HTTP input, output, and response status.

Another useful idea is that controllers are part of the public surface of your application. Their URLs, response shapes, and error behavior become the contract that clients depend on. That means clarity matters even in the first endpoint.

Once your first controller works, you are ready to move from proof of life to actual API design. The next lessons build on this by handling request input, JSON payloads, validation, and persistence.

## Example
```java
package com.tommy.learningapi.notes;

import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/greetings")
public class GreetingController {
    @GetMapping
    public Map<String, String> greeting() {
        return Map.of(
            "message", "Hello, Spring Boot 3.x",
            "status", "ready"
        );
    }
}
```

## Common Mistakes
- Using `@Controller` when you really want to return JSON directly.
- Testing the wrong path or port and assuming the controller is broken.
- Putting unrelated business logic directly into the controller as it starts to grow.

## Practice
- Create a GET endpoint that returns a JSON message.
- Change the request path and confirm the response at the new URL.
- Explain why controllers should stay thinner as the application becomes more complex.

## Continuity
- Previous lesson: `Lesson 6: Auto-configuration in Spring Boot 3.x`
- Next lesson: `Lesson 8: Handle Requests, Responses, and JSON`

## Key Takeaway
- The first controller turns the project from a running process into a useful web application.

## Official References
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/responsebody.html
