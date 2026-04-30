---
title: "Lesson 12: Build CRUD APIs With Service and Repository Layers"
lesson: 12
slug: "lesson-12"
summary: "CRUD endpoints become maintainable when controllers, services, DTOs, repositories, validation, and transactions each have a clear job."
---

# Lesson 12: Build CRUD APIs With Service and Repository Layers

CRUD endpoints become maintainable when controllers, services, DTOs, repositories, validation, and transactions each have a clear job.

## What You Will Learn
- Build create, read, update, and delete flows with layered boundaries.
- Convert between API DTOs and persistence entities deliberately.
- Return appropriate HTTP statuses for common CRUD outcomes.

## Why This Matters
- CRUD is simple only when examples are tiny; real projects need boundaries before features grow.
- Layering makes validation, persistence, transactions, security, and tests easier to attach later.
- Consistent API behavior helps clients handle success and failure reliably.

## Main Ideas
- Controllers translate HTTP; services coordinate business work; repositories persist data.
- DTOs protect API contracts from entity details.
- Not found, validation failure, create success, update success, and delete success should be represented consistently.

## Lesson Notes
A CRUD API is a useful milestone because it forces several earlier lessons to work together. The controller receives a request DTO, validation checks input, the service coordinates rules and persistence, the repository talks to the database, and the controller returns a response DTO with an appropriate status.

The biggest beginner mistake is letting the controller do everything. That may work for one endpoint, but it quickly becomes hard to test and change. Moving application rules into a service keeps the web layer thin and gives tests a natural place to verify behavior without always starting the full web stack.

Updates and deletes need careful not-found behavior. If a client asks for a note id that does not exist, returning a generic server error is misleading. A domain-specific exception translated to a 404 response is clearer and easier for clients to handle.

Create operations usually return a 201 Created status, often with the created representation. Reads return 200 when found and 404 when missing. Deletes may return 204 No Content. These choices are not only framework details; they are part of REST API design.

Transactions should cover write operations that must be consistent. A service method that updates an entity should define the unit of work. Read-only methods can sometimes use read-only transaction hints, but keep the first version simple and understandable.

By the end of this lesson, you should have a small API that feels like a real backend slice rather than a group of unrelated framework demos.

## Example
```java
@RestController
@RequestMapping("/api/notes")
class NoteController {
    private final NoteService service;

    NoteController(NoteService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    NoteResponse create(@Valid @RequestBody CreateNoteRequest request) {
        return service.create(request);
    }

    @GetMapping("/{id}")
    NoteResponse findById(@PathVariable Long id) {
        return service.findById(id);
    }
}
```

## Common Mistakes
- Building all CRUD logic directly inside controllers.
- Returning database entities as the public response model by default.
- Treating every failure as a 500 error.
- Updating records without defining a clear transaction boundary.

## Practice
- Build create and read endpoints for one resource.
- Add a not-found exception and map it to a 404 response.
- Draw the flow from request DTO to entity to response DTO.

## Continuity
- Previous lesson: `Lesson 11: Entities, Repositories, Transactions, and JPA Basics`
- Next lesson: `Lesson 13: Write Unit Tests and Focused Spring Tests`

## Key Takeaway
- A maintainable Boot 4 CRUD API is the result of small, clear responsibilities across web, service, and persistence layers.

## Official References
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller.html
- https://docs.spring.io/spring-data/jpa/reference/repositories/core-concepts.html
