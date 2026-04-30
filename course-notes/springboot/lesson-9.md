---
title: "Lesson 9: Validation and Global Exception Handling"
lesson: 9
slug: "lesson-9"
summary: "Validation and centralized error handling turn raw controller methods into a more reliable API contract."
---

# Lesson 9: Validation and Global Exception Handling

Validation and centralized error handling turn raw controller methods into a more reliable API contract.

## What You Will Learn
- Validate request DTOs with Jakarta Validation annotations.
- Use `@Valid` to trigger validation at the HTTP boundary.
- Centralize API error responses with `@RestControllerAdvice` and exception handlers.

## Why This Matters
- APIs need predictable input rules and predictable failure responses.
- Boot 4 remains on the Jakarta API line, so validation imports should use `jakarta.validation.*`.
- Clear error handling improves client experience and keeps controllers focused.

## Main Ideas
- Validate external input before it enters business logic.
- Do not scatter ad-hoc error response code across every endpoint.
- Error responses are part of the API contract and should be shaped deliberately.

## Lesson Notes
Once controllers receive JSON bodies, they need input rules. A note title may be required, a page size may need a maximum, and an email field may need email-shaped text. Those rules belong near the request boundary so invalid data does not travel deeply into the application.

Spring Boot 4 uses the Jakarta Validation generation. That means examples should import annotations from `jakarta.validation`, such as `jakarta.validation.Valid`, `jakarta.validation.constraints.NotBlank`, and `jakarta.validation.constraints.Size`. Do not fall back to old `javax.validation` imports.

Validation annotations belong well on request DTOs because they document the contract clients must satisfy. When a controller parameter is annotated with `@Valid`, Spring MVC validates the object after binding the JSON body and before the controller method continues.

Validation failure is only half the story. Clients also need consistent error responses. `@RestControllerAdvice` lets you centralize exception handling across controllers so errors have a predictable shape. You can decide what fields to include, such as a message, field errors, a path, or a timestamp.

Keep the first error model simple. The goal is not to design a perfect enterprise error format on day one. The goal is to stop returning inconsistent or confusing responses and to avoid duplicating error handling in every controller.

This lesson prepares the course for persistence and security because both areas produce failures that should be translated into useful API responses rather than raw stack traces.

## Example
```java
package com.tommy.learningapi.notes;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestController
class NoteController {
    @PostMapping("/api/notes")
    NoteResponse create(@Valid @RequestBody CreateNoteRequest request) {
        return new NoteResponse(1L, request.title(), request.content());
    }
}

record CreateNoteRequest(
    @NotBlank String title,
    @Size(max = 2_000) String content
) {}

record NoteResponse(Long id, String title, String content) {}

@RestControllerAdvice
class ApiExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    ErrorResponse handleValidation(MethodArgumentNotValidException ex) {
        return new ErrorResponse("Validation failed");
    }
}

record ErrorResponse(String message) {}
```

## Common Mistakes
- Importing `javax.validation.*` in a modern Boot course.
- Adding validation annotations but forgetting `@Valid` where the request is received.
- Returning raw exception messages or stack traces to clients.
- Making every controller build its own error response shape.

## Practice
- Add `@NotBlank` and `@Size` to a request DTO.
- Trigger a validation failure and inspect the response.
- Create one centralized exception handler for a domain-specific exception.

## Continuity
- Previous lesson: `Lesson 8: Handle Requests, Responses, and JSON With Jackson 3`
- Next lesson: `Lesson 10: Connect Spring Boot 4.x to MySQL and Hibernate 7`

## Key Takeaway
- Boot 4 APIs should validate input with Jakarta Validation and return consistent errors from a central boundary.

## Official References
- https://docs.spring.io/spring-framework/reference/core/validation/beanvalidation.html
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-validation.html
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-advice.html
