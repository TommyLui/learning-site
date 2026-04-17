---
title: "Lesson 7: Build Your First REST Controller"
lesson: 7
slug: "lesson-7"
summary: "The first controller turns the project from a running process into a useful web application."
---

# Lesson 7: Build Your First REST Controller

The first controller turns the project from a running process into a useful web application.

## What You Will Learn
- Create a working HTTP endpoint with Spring Boot 4.x.

## Why This Matters
- The first controller turns the project from a running process into a useful web application.

## Main Ideas
- @RestController
- @GetMapping
- Mapping HTTP requests to Java methods

## Lesson Notes
A REST controller is the web layer entry point for many backend applications. It receives HTTP requests and returns responses, often as JSON. In Spring Boot, this is usually just a small annotated class.

The @RestController annotation tells Spring that the class should handle web requests and that returned values should be written directly to the response body.

Method-level annotations such as @GetMapping define which URL path and HTTP method should trigger a particular handler. This makes the connection between incoming requests and Java methods explicit.

The first controller is an important milestone because it proves that your application can accept traffic, route requests, and return data. It also sets up the pattern you will follow for more complex APIs later.

Keep the first example simple. Once the endpoint works, you can start improving structure, input handling, and response design in later lessons.

## Example
```java
@RestController
@RequestMapping("/api/greetings")
public class GreetingController {
    @GetMapping
    public Map<String, String> greeting() {
        return Map.of("message", "Hello, Spring Boot 4.x");
    }
}
```

## Common Mistakes
- Using @Controller when you intended to return JSON directly
- Forgetting the request mapping path
- Testing the wrong URL or port

## Practice
- Create a GET endpoint that returns a JSON message.
- Change the endpoint path and verify the response in a browser or API tool.

## Continuity
- Previous lesson: `Lesson 6: Auto-configuration in Spring Boot 4.x`
- Next lesson: `Lesson 8: Handle Requests, Responses, and JSON`

## Key Takeaway
- The first controller turns the project from a running process into a useful web application.

## Official References
- https://docs.spring.io/spring-boot/reference/web/index.html
- https://spring.io/guides/gs/rest-service
