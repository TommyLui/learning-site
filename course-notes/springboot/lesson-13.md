---
title: "Lesson 13: Write Unit Tests and Focused Spring Tests"
lesson: 13
slug: "lesson-13"
summary: "Good tests start with fast unit coverage and add Spring context only when framework behavior is part of what you need to verify."
---

# Lesson 13: Write Unit Tests and Focused Spring Tests

Good tests start with fast unit coverage and add Spring context only when framework behavior is part of what you need to verify.

## What You Will Learn
- Separate plain unit tests from Spring-backed tests.
- Test service logic without starting the full application context.
- Use focused Spring test slices when you need MVC, JSON, JPA, or configuration behavior.

## Why This Matters
- Not every test needs the cost and complexity of `@SpringBootTest`.
- Fast service tests help you verify business rules before integration details distract you.
- Boot 4's testing model is more modular, so choosing the right test dependency and scope matters.

## Main Ideas
- Unit tests verify plain Java behavior with minimal framework involvement.
- Test slices verify a focused part of the Spring stack.
- Full application tests should be reserved for behavior that really needs the assembled context.

## Lesson Notes
Testing a Spring Boot application does not mean every test must start Spring. Many important rules live in services, mappers, validators, and small helper classes. Those can often be tested as plain Java objects with JUnit and Mockito.

This distinction keeps feedback fast. If a service depends on a repository interface, a unit test can pass a mock or fake repository and verify the service rule directly. You do not need an embedded server or database just to check a calculation or branch.

Spring-backed tests are still important. A controller test may need request mapping, JSON conversion, validation, and error handling. A repository test may need JPA mapping and database behavior. The key is to start only the slice that matches the question you are asking.

Boot 4 also makes test dependencies more explicit through technology-specific test starters. For a Spring MVC controller test, use the web MVC test support. For JPA integration, use the JPA test support. This avoids assuming that one broad starter gives every technology all test behavior automatically.

Keep test names behavior-oriented. A test should explain what rule is protected, not only repeat the method name. Good tests become documentation for the service boundary and make refactoring safer.

The right testing habit is layered: many fast unit tests, focused slice tests for framework boundaries, and fewer full-context integration tests for assembled behavior.

## Example
```java
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

class NoteServiceTest {
    private final NoteRepository repository = Mockito.mock(NoteRepository.class);
    private final NoteService service = new NoteService(repository);

    @Test
    void createsNoteWithTrimmedTitle() {
        when(repository.save(Mockito.any(Note.class))).thenAnswer(invocation -> invocation.getArgument(0));

        service.create(new CreateNoteRequest("  API notes  ", "content"));

        verify(repository).save(Mockito.argThat(note -> note.getTitle().equals("API notes")));
    }
}
```

## Common Mistakes
- Using `@SpringBootTest` for every small service rule.
- Mocking so much that the test no longer verifies real behavior.
- Forgetting to add the focused test starter for the technology being tested.
- Writing tests that only mirror implementation details.

## Practice
- Write one unit test for a service method without starting Spring.
- Identify one controller behavior that deserves a Spring MVC slice test.
- Categorize your current tests as unit, slice, or full-context.

## Continuity
- Previous lesson: `Lesson 12: Build CRUD APIs With Service and Repository Layers`
- Next lesson: `Lesson 14: Write Boot 4 Integration Tests for Web and Persistence`

## Key Takeaway
- Boot 4 test design should start small and add Spring context only when the framework boundary is part of the behavior under test.

## Official References
- https://docs.spring.io/spring-boot/reference/testing/index.html
- https://docs.spring.io/spring-boot/reference/testing/spring-boot-applications.html
