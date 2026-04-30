---
title: "Lesson 8: Handle Requests, Responses, and JSON With Jackson 3"
lesson: 8
slug: "lesson-8"
summary: "Boot 4 uses Jackson 3 as the preferred JSON generation, so DTO design and JSON boundaries should be taught with that generation in mind."
---

# Lesson 8: Handle Requests, Responses, and JSON With Jackson 3

Boot 4 uses Jackson 3 as the preferred JSON generation, so DTO design and JSON boundaries should be taught with that generation in mind.

## What You Will Learn
- Work with path variables, query parameters, request bodies, response bodies, and DTOs.
- Understand where JSON serialization and deserialization fit in a Spring MVC API.
- Recognize the Boot 4 move toward Jackson 3 and avoid relying on outdated Jackson 2 customizations.

## Why This Matters
- JSON is the contract most frontend clients and API consumers will see.
- DTOs keep HTTP-facing shapes separate from persistence entities and internal domain choices.
- Jackson 3 changes package and module details for advanced customization, even though basic JSON handling still feels familiar.

## Main Ideas
- Controllers should accept and return explicit request/response models.
- Records are a concise way to model many immutable DTOs.
- Basic JSON examples stay simple, but advanced Jackson annotations and customizers should be checked against Boot 4 docs.

## Lesson Notes
After a first controller works, the next step is handling real request and response shapes. A client may send path variables, query parameters, headers, or a JSON body. The controller's job is to map those HTTP inputs into a clear Java shape, then return a predictable response.

For many APIs, request and response DTOs are better than exposing entities directly. A request DTO can describe exactly what a client is allowed to send. A response DTO can show exactly what the API promises to return. That separation protects the rest of the application from accidental API changes.

Spring MVC uses HTTP message converters to read and write JSON. In Boot 4, Jackson 3 is the preferred JSON library. For simple DTOs, you still write records or classes and let the framework serialize them. The difference matters more when you customize Jackson, use special modules, or copy examples that reference older Jackson package names.

Do not mix every concern into one controller method. Bind the request, let validation handle input rules in the next lesson, call a service, and return a response model. This keeps your JSON boundary readable and testable.

Naming also matters. Use fields that make sense to API consumers, not only to the database. If an internal entity has fields that should not be exposed, do not return the entity directly. Build a response DTO that represents the API contract instead.

Jackson 3 awareness is mostly a discipline at this stage: use simple JSON intentionally, and check current Boot 4 documentation before teaching advanced custom serializers, mixins, or module configuration.

## Example
```java
package com.tommy.learningapi.notes;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/notes")
public class NoteController {
    @PostMapping
    public NoteResponse create(@RequestBody CreateNoteRequest request) {
        return new NoteResponse(1L, request.title(), request.content());
    }

    public record CreateNoteRequest(String title, String content) {}
    public record NoteResponse(Long id, String title, String content) {}
}
```

## Common Mistakes
- Returning JPA entities directly from every endpoint.
- Treating DTO field names as unimportant implementation details.
- Copying old Jackson customization examples without checking Boot 4 and Jackson 3 package names.
- Combining request binding, business rules, persistence, and response shaping in one long method.

## Practice
- Create separate request and response records for a note creation endpoint.
- Add one query parameter and one path variable to a read endpoint.
- Search your examples for Jackson-specific imports and verify they match current Boot 4 guidance before using them.

## Continuity
- Previous lesson: `Lesson 7: Build Your First REST Controller With Spring MVC`
- Next lesson: `Lesson 9: Validation and Global Exception Handling`

## Key Takeaway
- Boot 4 JSON work still starts with clear DTOs, but advanced Jackson examples should be aligned with the Jackson 3 generation.

## Official References
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/requestbody.html
- https://docs.spring.io/spring-boot/reference/features/json.html
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide
