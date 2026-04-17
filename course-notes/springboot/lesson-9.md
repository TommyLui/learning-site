---
title: "Lesson 9: Validation and Global Exception Handling"
lesson: 9
slug: "lesson-9"
summary: "APIs need predictable failure behavior, not only successful responses."
---

# Lesson 9: Validation and Global Exception Handling

APIs need predictable failure behavior, not only successful responses.

## What You Will Learn
- Validate incoming request data with Bean Validation annotations.
- Use `@Valid` so invalid input is rejected before business logic runs.
- Centralize error responses with `@ControllerAdvice` and exception handlers.

## Why This Matters
- APIs need predictable failure behavior, not only successful responses.
- Input validation protects your domain logic from bad data at the boundaries.
- A global error strategy gives clients a more consistent and readable API contract.

## Main Ideas
- Validation belongs at the API boundary as well as in deeper business rules.
- `@ControllerAdvice` keeps error-handling logic out of every individual controller.
- Readable error responses are part of API quality, not just a debugging convenience.

## Lesson Notes
A backend application is not defined only by how it behaves when everything is correct. It also has to respond well when requests are incomplete, malformed, or logically invalid. Validation is the first line of defense against these problems.

In Spring Boot, request validation is often handled with Jakarta Bean Validation annotations such as `@NotBlank`, `@Email`, `@Min`, or `@Size`. When these annotations are placed on request DTO fields and the controller uses `@Valid`, Spring checks the payload before your service logic runs.

This boundary-level validation is important because it prevents obvious bad input from leaking deeper into the system. It also keeps the API contract clear: clients know what fields are required and what rules apply.

Validation, however, is only half the story. Once errors occur, the API must respond in a way that clients can understand. If every controller handles exceptions differently, the application quickly becomes inconsistent and harder to maintain.

That is why `@ControllerAdvice` matters. It allows you to centralize error handling for validation failures, missing resources, domain-specific exceptions, and other application-level problems. Instead of repeating response-building logic everywhere, you define a common strategy once.

A good global error response should be simple, predictable, and easy to extend. It might include a message, a status code, a field error list, or a timestamp. The exact shape can vary, but consistency is more important than decorative complexity.

This lesson turns your API into something more trustworthy. Clients should not have to guess what happens when they send bad input, and developers should not have to reinvent error handling in every new controller.

## Example
```java
public record CreateUserRequest(
    @NotBlank String name,
    @Email String email
) {}

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidation(MethodArgumentNotValidException ex) {
        return Map.of("error", "Validation failed");
    }
}
```

## Common Mistakes
- Validating too late only inside service methods.
- Returning raw stack traces or framework internals to API clients.
- Copying exception-handling code into every controller.

## Practice
- Add `@NotBlank` and another validation rule to a request DTO.
- Create a simple global exception handler for validation failures.
- Design a small JSON error format you could reuse across multiple endpoints.

## Continuity
- Previous lesson: `Lesson 8: Handle Requests, Responses, and JSON`
- Next lesson: `Lesson 10: Connect Spring Boot 4.x to MySQL`

## Key Takeaway
- APIs need predictable failure behavior, not only successful responses.

## Official References
- https://docs.spring.io/spring-boot/reference/io/validation.html
- https://docs.spring.io/spring-boot/reference/web/index.html
