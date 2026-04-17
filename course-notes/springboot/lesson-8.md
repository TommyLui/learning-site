---
title: "Lesson 8: Handle Requests, Responses, and JSON"
lesson: 8
slug: "lesson-8"
summary: "Most backend work is about turning HTTP input into application actions and returning useful response data."
---

# Lesson 8: Handle Requests, Responses, and JSON

Most backend work is about turning HTTP input into application actions and returning useful response data.

## What You Will Learn
- Receive query parameters, path variables, and JSON request bodies in Spring Boot endpoints.
- Use DTOs to shape API input and output more clearly.
- Understand how Spring Boot serializes Java objects into JSON responses.

## Why This Matters
- Most backend work is about turning HTTP input into application actions and returning useful response data.
- Good request and response design keeps APIs easier to read, change, and test.
- DTOs help separate public API contracts from persistence details and internal models.

## Main Ideas
- Different kinds of HTTP input map to different Spring annotations.
- DTOs protect your API from accidental leakage of internal structure.
- JSON serialization is automatic, but the response shape is still your design responsibility.

## Lesson Notes
After the first endpoint works, the next step is learning how real API input arrives. Requests can carry data in several places: query parameters, path variables, headers, and request bodies. Spring Boot gives you dedicated annotations so each kind of input can be mapped clearly.

`@RequestParam` is useful for small filtering or search values. `@PathVariable` is common when the URL identifies a specific resource. `@RequestBody` is used when a client sends structured JSON, such as the data required to create or update something.

At first it can be tempting to put all this data directly into entities or reuse one class everywhere. That usually becomes messy quickly. DTOs are a better option because they define the exact shape of input and output for the API layer without exposing everything about your internal model.

This separation pays off later. If your database model changes, you can often keep the public API stable. If the API grows, you can add or remove fields intentionally rather than accidentally leaking data through entity serialization.

Spring Boot handles JSON conversion automatically when the right web dependencies are present. That convenience is powerful, but it does not remove design responsibility. You still have to decide which fields belong in responses, which input values are required, and how to structure success and failure payloads.

Good request and response handling also improves readability for other developers. When someone looks at a controller method and sees a clear DTO type, it is easier to understand what the endpoint expects and what it returns.

This lesson is where backend development starts feeling more realistic. Instead of only returning a static message, the application begins to accept structured client input and shape a predictable response contract.

## Example
```java
public record CreateNoteRequest(String title, String content) {}
public record NoteResponse(Long id, String title, String content) {}

@RestController
@RequestMapping("/api/notes")
public class NoteController {
    @PostMapping
    public NoteResponse create(@RequestBody CreateNoteRequest request) {
        return new NoteResponse(1L, request.title(), request.content());
    }

    @GetMapping("/{id}")
    public NoteResponse findById(@PathVariable Long id) {
        return new NoteResponse(id, "Spring Boot", "Request and response example");
    }
}
```

## Common Mistakes
- Using entities directly as public request and response models too early.
- Confusing path variables with query parameters.
- Returning unstructured strings when the endpoint should produce meaningful JSON.

## Practice
- Add a POST endpoint that accepts JSON in the request body.
- Create a path-based endpoint such as `/api/notes/{id}`.
- Design a small response DTO instead of returning a raw entity or string.

## Continuity
- Previous lesson: `Lesson 7: Build Your First REST Controller`
- Next lesson: `Lesson 9: Validation and Global Exception Handling`

## Key Takeaway
- Most backend work is about turning HTTP input into application actions and returning useful response data.

## Official References
- https://docs.spring.io/spring-boot/reference/web/servlet.html
- https://spring.io/guides/gs/rest-service
