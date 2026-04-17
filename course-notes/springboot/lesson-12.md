---
title: "Lesson 12: Build CRUD APIs With Service and Repository Layers"
lesson: 12
slug: "lesson-12"
summary: "CRUD is the foundation of many backend apps, and a layered approach keeps that logic maintainable."
---

# Lesson 12: Build CRUD APIs With Service and Repository Layers

CRUD is the foundation of many backend apps, and a layered approach keeps that logic maintainable.

## What You Will Learn
- Create create, read, update, and delete flows using a layered design.

## Why This Matters
- CRUD is the foundation of many backend apps, and a layered approach keeps that logic maintainable.

## Main Ideas
- Controller-service-repository separation
- DTO to entity translation
- Not-found and update flows

## Lesson Notes
Once repositories are available, the next step is connecting the web layer to persistence through a service layer. This keeps controllers focused on HTTP behavior and lets services handle business rules and data coordination.

A typical CRUD flow starts with a request DTO, converts it into entity changes inside a service, and persists or fetches data through a repository. The controller then turns the result into a response DTO or status code.

This separation matters because create, update, and delete logic tends to grow. Validation, not-found checks, mapping, and side effects are easier to reason about when they are not mixed directly into the controller.

It is also a good place to define application-specific rules, such as which fields can be updated, what happens when a record is missing, or how a default value is assigned.

A clean CRUD structure gives you a strong base for testing and for adding security or transactions later.

## Example
```java
@Service
public class NoteService {
    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public List<Note> findAll() {
        return noteRepository.findAll();
    }
}
```

## Common Mistakes
- Putting all persistence logic directly in controllers
- Skipping not-found handling
- Updating entities without clear rules

## Practice
- Build GET all, GET by id, POST, PUT, and DELETE endpoints for one entity.
- Refactor controller logic into a service class.

## Continuity
- Previous lesson: `Lesson 11: Entities, Repositories, and JPA Basics`
- Next lesson: `Lesson 13: Write Unit Tests for Service Logic`

## Key Takeaway
- CRUD is the foundation of many backend apps, and a layered approach keeps that logic maintainable.

## Official References
- https://docs.spring.io/spring-boot/reference/web/index.html
- https://docs.spring.io/spring-boot/reference/data/index.html
