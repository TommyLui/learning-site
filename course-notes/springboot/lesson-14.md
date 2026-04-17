---
title: "Lesson 14: Write Integration Tests for Controllers and Repositories"
lesson: 14
slug: "lesson-14"
summary: "Integration tests catch wiring, mapping, and persistence problems that unit tests cannot see."
---

# Lesson 14: Write Integration Tests for Controllers and Repositories

Integration tests catch wiring, mapping, and persistence problems that unit tests cannot see.

## What You Will Learn
- Test controllers and repositories with real framework wiring.
- Use web-focused test tools such as MockMvc where appropriate.
- Understand how integration tests complement, rather than replace, unit tests.

## Why This Matters
- Integration tests catch wiring, mapping, and persistence problems that unit tests cannot see.
- They help verify that the boundaries between layers work correctly together.
- They reduce the risk of serialization, validation, and persistence failures slipping through to production.

## Main Ideas
- Integration tests verify collaboration between framework-managed parts.
- MockMvc is useful for web-layer verification without a browser.
- A balanced test strategy combines fast unit tests with selected integration coverage.

## Lesson Notes
Unit tests are excellent for isolated logic, but they cannot tell you whether the application is wired correctly as a whole. Integration tests cover that missing space by exercising multiple layers together with real Spring behavior involved.

For controller testing, tools such as MockMvc let you send requests to your web layer and assert on status codes, JSON payloads, headers, and validation responses. This is useful because many API problems are not logic problems; they are mapping or serialization problems.

Repository integration tests matter for a similar reason. An entity might look correct in code but still behave unexpectedly when mapped to a real database. Queries, relationships, column mappings, and generated ids are all easier to trust when they are verified against a real persistence context.

Integration tests are usually slower than pure unit tests, which is why they should be used deliberately. The goal is not to test every trivial branch at the highest cost. The goal is to choose the places where framework wiring and cross-layer behavior are most important.

A strong testing strategy often looks like a pyramid: many unit tests, fewer integration tests, and a smaller set of full end-to-end checks. Spring Boot makes it practical to build the middle layer of that pyramid with focused testing tools.

These tests are also valuable because they reflect the real public contract of the application. If the API returns the wrong JSON shape, or if a repository query fails because of a mapping issue, integration tests will often reveal it before a user does.

As your project grows, you will rely more and more on this combination of test layers. Unit tests protect logic. Integration tests protect boundaries. Together, they make the backend safer to evolve.

## Example
```java
@SpringBootTest
@AutoConfigureMockMvc
class NoteControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    void returnsOk() throws Exception {
        mockMvc.perform(get("/api/notes"))
            .andExpect(status().isOk());
    }
}
```

## Common Mistakes
- Using integration tests for every tiny behavior.
- Ignoring database state setup and cleanup between tests.
- Testing only happy paths while skipping validation and failure behavior.

## Practice
- Write one MockMvc test for a GET endpoint.
- Add one repository test that verifies entity persistence or lookup behavior.
- Compare what your unit tests cover versus what your integration tests cover.

## Continuity
- Previous lesson: `Lesson 13: Write Unit Tests for Service Logic`
- Next lesson: `Lesson 15: Common Debugging Patterns in Spring Boot Applications`

## Key Takeaway
- Integration tests catch wiring, mapping, and persistence problems that unit tests cannot see.

## Official References
- https://docs.spring.io/spring-boot/reference/testing/index.html
- https://spring.io/guides/gs/testing-web
