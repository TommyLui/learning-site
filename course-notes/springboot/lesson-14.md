---
title: "Lesson 14: Write Integration Tests for Controllers and Repositories"
lesson: 14
slug: "lesson-14"
summary: "Integration tests catch wiring, mapping, and persistence problems that unit tests cannot see."
---

# Lesson 14: Write Integration Tests for Controllers and Repositories

Integration tests catch wiring, mapping, and persistence problems that unit tests cannot see.

## What You Will Learn
- Verify that multiple application layers work together correctly.

## Why This Matters
- Integration tests catch wiring, mapping, and persistence problems that unit tests cannot see.

## Main Ideas
- @SpringBootTest or test slices
- MockMvc or WebTestClient
- Repository and controller integration coverage

## Lesson Notes
Integration tests check whether the application behaves correctly when real framework wiring is involved. They are especially useful for web endpoints, serialization, validation, and database interaction.

In the web layer, tools such as MockMvc let you test routes, status codes, JSON payloads, and validation behavior. For data access, repository tests help verify mappings and query behavior.

These tests are slower than pure unit tests, so they should be used deliberately. You do not need every scenario to be a full integration test, but you do need enough of them to trust the boundaries between layers.

A strong test strategy usually combines fast unit tests with a smaller number of high-value integration tests. Together, they give good confidence without making the suite too slow.

This lesson helps you move from isolated logic verification to realistic application verification.

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
- Using integration tests for everything
- Not resetting database state between tests
- Testing only happy paths

## Practice
- Write one MockMvc test for a GET endpoint.
- Write one repository-focused test for an entity query.

## Continuity
- Previous lesson: `Lesson 13: Write Unit Tests for Service Logic`
- Next lesson: `Lesson 15: Common Debugging Patterns in Spring Boot Applications`

## Key Takeaway
- Integration tests catch wiring, mapping, and persistence problems that unit tests cannot see.

## Official References
- https://docs.spring.io/spring-boot/reference/testing/index.html
- https://spring.io/guides/gs/testing-web
