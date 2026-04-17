---
title: "Lesson 9: Validation and Global Exception Handling"
lesson: 9
slug: "lesson-9"
summary: "APIs need predictable failure behavior, not only successful responses."
---

# Lesson 9: Validation and Global Exception Handling

APIs need predictable failure behavior, not only successful responses.

## What You Will Learn
- Validate incoming data and return cleaner error responses.

## Why This Matters
- APIs need predictable failure behavior, not only successful responses.

## Main Ideas
- Bean Validation annotations
- @Valid
- @ControllerAdvice for centralized error handling

## Lesson Notes
A useful API should reject invalid input early and explain what went wrong. Spring Boot supports validation through Jakarta Bean Validation, which lets you describe rules directly on request DTO fields.

When you annotate a request body with @Valid, Spring checks the input before your business logic runs. This prevents bad data from spreading deeper into the system.

Validation alone is not enough, though. You also want consistent error responses. A global exception handler built with @ControllerAdvice can catch validation errors and domain exceptions and convert them into readable API responses.

This centralization keeps controllers smaller and gives clients a predictable contract for failures. Instead of different handlers building errors in different ways, the application responds with one consistent shape.

Clean validation and error handling are major signs that an API is becoming production-ready.

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
- Validating too late inside service logic only
- Returning raw stack traces to clients
- Handling every exception separately inside each controller

## Practice
- Add @NotBlank and @Email to a request DTO.
- Create a global handler that returns a simple JSON error response.

## Continuity
- Previous lesson: `Lesson 8: Handle Requests, Responses, and JSON`
- Next lesson: `Lesson 10: Connect Spring Boot 4.x to MySQL`

## Key Takeaway
- APIs need predictable failure behavior, not only successful responses.

## Official References
- https://docs.spring.io/spring-boot/reference/web/index.html
- https://docs.spring.io/spring-boot/reference/io/validation.html
