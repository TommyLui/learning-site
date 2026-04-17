---
title: "Lesson 8: Handle Requests, Responses, and JSON"
lesson: 8
slug: "lesson-8"
summary: "Most backend work is about turning HTTP input into application actions and returning useful response data."
---

# Lesson 8: Handle Requests, Responses, and JSON

Most backend work is about turning HTTP input into application actions and returning useful response data.

## What You Will Learn
- Learn how to receive input and return structured JSON output in Spring Boot APIs.

## Why This Matters
- Most backend work is about turning HTTP input into application actions and returning useful response data.

## Main Ideas
- @RequestParam, @PathVariable, @RequestBody
- DTOs
- JSON serialization

## Lesson Notes
After the first endpoint works, the next step is handling real input. Spring Boot can bind query parameters, path variables, and JSON request bodies directly to Java method parameters or objects.

For simple filters or search values, request parameters are often enough. For resource identity, path variables are common. For structured input such as create or update operations, request bodies mapped to DTOs are usually the cleanest approach.

DTOs help separate API contracts from persistence models. Instead of exposing internal entities directly, you define request and response shapes that fit the API. This makes later changes safer.

Spring Boot also handles JSON serialization and deserialization for you when the right web libraries are present. That means Java objects can be turned into JSON responses and JSON input can be turned into Java objects with very little boilerplate.

This lesson builds the communication layer that nearly every CRUD API depends on.

## Example
```java
public record CreateNoteRequest(String title, String content) {}

@RestController
@RequestMapping("/api/notes")
public class NoteController {
    @PostMapping
    public Map<String, String> create(@RequestBody CreateNoteRequest request) {
        return Map.of("title", request.title(), "content", request.content());
    }
}
```

## Common Mistakes
- Using entities directly as public API models too early
- Confusing query parameters with request bodies
- Returning unstructured strings for data-heavy endpoints

## Practice
- Create a POST endpoint that accepts JSON.
- Add a path variable to fetch a resource by id.

## Continuity
- Previous lesson: `Lesson 7: Build Your First REST Controller`
- Next lesson: `Lesson 9: Validation and Global Exception Handling`

## Key Takeaway
- Most backend work is about turning HTTP input into application actions and returning useful response data.

## Official References
- https://docs.spring.io/spring-boot/reference/web/servlet.html
- https://spring.io/guides/gs/rest-service
