---
title: "Lesson 13: Write Unit Tests for Service Logic"
lesson: 13
slug: "lesson-13"
summary: "Unit tests help verify rules quickly and make service code safer to change."
---

# Lesson 13: Write Unit Tests for Service Logic

Unit tests help verify rules quickly and make service code safer to change.

## What You Will Learn
- Write focused unit tests for service-layer behavior.
- Use mocks or stubs to isolate the service from repository dependencies.
- Understand what a unit test should and should not try to prove.

## Why This Matters
- Unit tests help verify rules quickly and make service code safer to change.
- They provide fast feedback for business logic without requiring the full application to start.
- They make refactoring easier because important decisions are protected by repeatable checks.

## Main Ideas
- Unit tests should isolate one class or behavior at a time.
- Mocks are useful when the dependency is not the thing being tested.
- Good tests describe business behavior rather than re-implementing method internals.

## Lesson Notes
Once your service layer starts holding real rules, it deserves direct verification. Unit tests are the fastest way to do that because they focus on one class in isolation rather than starting the full application.

A service unit test typically replaces repository dependencies with mocks or stubs. This matters because the goal is not to prove that the database works. The goal is to prove that the service behaves correctly when the repository returns certain results or throws certain conditions.

For example, you may want to verify that a service returns all notes, throws a not-found exception when an id is missing, or maps a request into an entity correctly before saving it. These are business-level behaviors, not framework-level wiring concerns.

Well-written unit tests are fast, expressive, and focused. They should tell you what rule failed, not just that 'something somewhere is wrong.' If the test is difficult to understand, the service design itself may also need improvement.

A common trap is over-mocking or testing implementation details. If your assertions are too tightly coupled to how the method is written instead of what it guarantees, small refactors will break tests for the wrong reason.

Another trap is using full `@SpringBootTest` startup for simple service verification. That makes tests slower and blurs the line between unit and integration testing. There is a place for broader tests, but service rules often deserve a much smaller testing scope.

The best reason to learn service unit tests early is not just correctness. It is confidence. As the application grows, being able to change service behavior without fear becomes a major productivity advantage.

## Example
```java
@Test
void create_shouldSaveMappedNote() {
    NoteRepository repository = mock(NoteRepository.class);
    NoteService service = new NoteService(repository);
    CreateNoteRequest request = new CreateNoteRequest("DI", "constructor injection");

    service.create(request);

    verify(repository).save(any(Note.class));
}
```

## Common Mistakes
- Using full application startup for simple service tests.
- Testing repository or controller behavior inside a service unit test.
- Writing assertions that only mirror private implementation details.

## Practice
- Write a unit test for a service method that reads from a mocked repository.
- Add a test for a missing entity or invalid input scenario.
- Explain why a service unit test should not need a real database.

## Continuity
- Previous lesson: `Lesson 12: Build CRUD APIs With Service and Repository Layers`
- Next lesson: `Lesson 14: Write Integration Tests for Controllers and Repositories`

## Key Takeaway
- Unit tests help verify rules quickly and make service code safer to change.

## Official References
- https://docs.spring.io/spring-boot/reference/testing/index.html
- https://spring.io/guides/gs/testing-web
