---
title: "Lesson 13: Write Unit Tests for Service Logic"
lesson: 13
slug: "lesson-13"
summary: "Unit tests help verify rules quickly and make service code safer to change."
---

# Lesson 13: Write Unit Tests for Service Logic

Unit tests help verify rules quickly and make service code safer to change.

## What You Will Learn
- Test business logic in isolation from the web and database layers.

## Why This Matters
- Unit tests help verify rules quickly and make service code safer to change.

## Main Ideas
- Unit testing scope
- Mocking repository dependencies
- Fast feedback

## Lesson Notes
Unit tests focus on a small piece of logic in isolation. In a Spring Boot project, service classes are often the best place to start because they contain decisions, transformations, and rules that are worth protecting.

A service unit test usually replaces repository dependencies with mocks or stubs. This keeps the test focused on the service behavior instead of on the database.

The main benefit is speed and clarity. When a test fails, you know the problem is likely in the service logic rather than in HTTP mapping or persistence configuration.

Good unit tests describe behavior in business terms: what should happen when an item is missing, when input is invalid, or when data must be transformed before saving.

If you build the habit of testing services early, refactoring later becomes much less risky.

## Example
```java
@Test
void returnsAllNotes() {
    NoteRepository repository = mock(NoteRepository.class);
    when(repository.findAll()).thenReturn(List.of(new Note()));
    NoteService service = new NoteService(repository);

    assertEquals(1, service.findAll().size());
}
```

## Common Mistakes
- Using full application startup for simple service tests
- Testing repository internals inside a service unit test
- Writing tests that only repeat implementation details

## Practice
- Write a unit test for a service method that reads data from a mocked repository.
- Add a test for a not-found scenario.

## Continuity
- Previous lesson: `Lesson 12: Build CRUD APIs With Service and Repository Layers`
- Next lesson: `Lesson 14: Write Integration Tests for Controllers and Repositories`

## Key Takeaway
- Unit tests help verify rules quickly and make service code safer to change.

## Official References
- https://docs.spring.io/spring-boot/reference/testing/index.html
- https://spring.io/guides/gs/testing-web
