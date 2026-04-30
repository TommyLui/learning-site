---
title: "Lesson 14: Write Boot 4 Integration Tests for Web and Persistence"
lesson: 14
slug: "lesson-14"
summary: "Boot 4 integration tests should wire the right test support explicitly, including MockMvc auto-configuration, RestTestClient, repository tests, and Testcontainers where useful."
---

# Lesson 14: Write Boot 4 Integration Tests for Web and Persistence

Boot 4 integration tests should wire the right test support explicitly, including MockMvc auto-configuration, RestTestClient, repository tests, and Testcontainers where useful.

## What You Will Learn
- Understand Boot 4 testing changes that affect MockMvc, mock annotations, and technology-specific test starters.
- Use `@AutoConfigureMockMvc` when a full-context test needs MockMvc.
- Choose between MockMvc, RestTestClient, repository tests, and Testcontainers based on what you need to verify.

## Why This Matters
- Integration tests catch wiring, serialization, validation, persistence, and security behavior that unit tests cannot see.
- Boot 4 no longer assumes some test clients are available just because `@SpringBootTest` is present.
- Correct test setup prevents false confidence and confusing missing-bean failures.

## Main Ideas
- `@SpringBootTest` starts the application context but does not automatically provide every web test client.
- Add `@AutoConfigureMockMvc` when you want MockMvc in a full-context test.
- Boot's older `@MockBean` and `@SpyBean` annotations are replaced by `@MockitoBean` and `@MockitoSpyBean`.
- Testcontainers and service connections are useful when database behavior must be realistic.

## Lesson Notes
Integration testing asks whether multiple parts of the application work together. A controller integration test may verify routing, validation, JSON, exception handling, and security rules. A persistence integration test may verify JPA mapping and SQL behavior against a real database shape.

Boot 4 makes several testing assumptions more explicit. `@SpringBootTest` starts the application context, but it does not by itself provide MockMvc. If you want to use MockMvc with a full context, add `@AutoConfigureMockMvc`. If you want server-style HTTP testing, learn the documented `RestTestClient` path and add the needed support.

The mock annotation names also matter. Boot's old `@MockBean` and `@SpyBean` are removed in favor of `@MockitoBean` and `@MockitoSpyBean`. That is the kind of small syntax detail that can break copied examples during a major-version update.

For repository and database behavior, a focused JPA test may be enough. When MySQL-specific behavior matters, Testcontainers can run a realistic database for the test. That is slower than a unit test, but it verifies behavior a mock cannot represent.

Keep integration tests purposeful. Do not test every line of service logic again through the HTTP layer. Use integration tests to verify boundaries: web mapping, JSON conversion, validation, persistence wiring, transactions, and security integration.

By the end of this lesson, you should be able to explain why a particular test starts Spring and which Boot 4 test support it needs.

## Example
```java
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class NoteApiIntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @Test
    void returnsNotes() throws Exception {
        mockMvc.perform(get("/api/notes"))
            .andExpect(status().isOk());
    }
}
```

## Common Mistakes
- Expecting `@SpringBootTest` alone to inject MockMvc.
- Copying `@MockBean` examples into a Boot 4 project instead of using `@MockitoBean`.
- Testing database-specific behavior only with mocks.
- Writing slow full-context tests for rules that a unit test could cover.

## Practice
- Convert one controller test to use `@SpringBootTest` plus `@AutoConfigureMockMvc`.
- Identify one test where `@MockitoBean` would replace an external collaborator.
- Decide whether a repository behavior needs an in-memory database or a Testcontainers MySQL instance.

## Continuity
- Previous lesson: `Lesson 13: Write Unit Tests and Focused Spring Tests`
- Next lesson: `Lesson 15: Common Debugging Patterns in Boot 4 Applications`

## Key Takeaway
- Boot 4 integration tests work best when you explicitly add the web, mock, client, or database support that the test actually needs.

## Official References
- https://docs.spring.io/spring-boot/reference/testing/spring-boot-applications.html
- https://docs.spring.io/spring-boot/reference/testing/testcontainers.html
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide
