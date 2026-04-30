---
title: "Lesson 7: Build Your First REST Controller With Spring MVC"
lesson: 7
slug: "lesson-7"
summary: "A REST controller is the first place where HTTP requests become application behavior in a Boot 4 Spring MVC service."
---

# Lesson 7: Build Your First REST Controller With Spring MVC

A REST controller is the first place where HTTP requests become application behavior in a Boot 4 Spring MVC service.

## What You Will Learn
- Create a `@RestController` and map HTTP requests with Spring MVC annotations.
- Understand how the web MVC starter connects controllers to the embedded servlet server.
- Keep controller methods small so they translate requests instead of holding all business logic.

## Why This Matters
- REST endpoints are often the visible contract of a backend API.
- Controllers sit at the boundary between HTTP and your application model.
- A clean first controller prepares you for DTOs, validation, error handling, security, and tests.

## Main Ideas
- `@RestController` combines controller behavior with response-body serialization.
- `@RequestMapping`, `@GetMapping`, and related annotations map HTTP paths and methods.
- Controllers should delegate meaningful work to services as the application grows.

## Lesson Notes
With the Spring MVC starter in place, Boot 4 auto-configures the servlet web stack and makes controller mapping available. You do not manually start Tomcat or register a dispatcher servlet for a basic API. You declare a controller, map a route, and let the framework connect incoming requests to your method.

The first controller should be intentionally simple. A `GET /api/hello` endpoint that returns a small message is enough to prove that startup, routing, serialization, and the embedded server are working together. The goal is not complex business logic yet; it is understanding the request path.

`@RestController` tells Spring MVC that return values should be written to the HTTP response body. Returning a simple object or record will typically become JSON through the configured HTTP message converters. Later, you will learn how Jackson 3 participates in that conversion.

Path design matters even in small examples. Use predictable nouns, group related endpoints under a stable prefix such as `/api/notes`, and avoid mixing unrelated resources in one controller. Good route shape makes validation, security, and documentation easier later.

As soon as controller methods start doing real work, move that work into services. Controllers should receive and validate HTTP-facing input, call the application layer, and shape the response. That boundary keeps the web layer testable and prevents HTTP concerns from leaking everywhere.

This lesson is the first visible payoff from setup. The Boot 4 app is now not just starting; it is accepting HTTP requests and returning API responses.

## Example
```java
package com.tommy.learningapi.hello;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {
    @GetMapping("/hello")
    public Message hello() {
        return new Message("Hello, Spring Boot 4.x");
    }

    public record Message(String text) {}
}
```

## Common Mistakes
- Putting all business rules directly inside controller methods.
- Returning inconsistent response shapes for similar endpoints.
- Forgetting that controller paths become part of the public API contract.
- Adding Security before confirming the basic endpoint works.

## Practice
- Create a `GET /api/hello` endpoint that returns a small JSON object.
- Add a second endpoint under the same controller and compare the route names.
- Move one piece of non-HTTP logic into a service class.

## Continuity
- Previous lesson: `Lesson 6: Auto-configuration and Boot 4 Modular Starters`
- Next lesson: `Lesson 8: Handle Requests, Responses, and JSON With Jackson 3`

## Key Takeaway
- A Boot 4 REST controller should translate HTTP requests cleanly and delegate real application behavior to the right layer.

## Official References
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller.html
- https://docs.spring.io/spring-boot/reference/web/servlet.html
