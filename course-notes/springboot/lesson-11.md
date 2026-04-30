---
title: "Lesson 11: Entities, Repositories, Transactions, and JPA Basics"
lesson: 11
slug: "lesson-11"
summary: "Entities, repositories, and transactions form the core persistence model for many Boot 4 relational applications."
---

# Lesson 11: Entities, Repositories, Transactions, and JPA Basics

Entities, repositories, and transactions form the core persistence model for many Boot 4 relational applications.

## What You Will Learn
- Map Java classes to database tables with Jakarta Persistence annotations.
- Use Spring Data repositories to read and write entities.
- Understand why transactions define the boundary of safe persistence changes.

## Why This Matters
- Persistence code needs structure so database access does not leak into every controller.
- Boot 4 continues the Jakarta Persistence line, so examples should use `jakarta.persistence.*` imports.
- Transactions protect multi-step data changes from partial failure.

## Main Ideas
- Entities represent persistent data, not every API response shape.
- Repositories provide focused access to persistence operations.
- Service methods are often a good place to define transaction boundaries.

## Lesson Notes
With the datasource working, the next step is modeling persistent data. JPA entities describe how Java objects relate to database tables. In Boot 4 examples, imports should use `jakarta.persistence`, such as `jakarta.persistence.Entity`, `Id`, and `GeneratedValue`.

Entities are not the same as DTOs. An entity is shaped by persistence needs: identifiers, relationships, table constraints, and lifecycle behavior. A response DTO is shaped by the API contract. Keeping those models separate prevents accidental exposure of persistence details.

Spring Data repositories reduce repetitive persistence code. Extending a repository interface gives you common operations such as save, find by id, and delete. You can also add query methods when the naming stays readable. Complex queries may still deserve explicit query definitions or a more specialized persistence design.

Transactions matter whenever multiple persistence actions must succeed or fail together. A service method that creates a parent record and several child records should not leave the database half-written. In Spring, `@Transactional` is commonly placed on service-layer methods that define a unit of work.

Hibernate 7 is the Boot 4-managed ORM implementation behind many of these behaviors. You do not need to learn every Hibernate feature in a beginner lesson, but you should know that lazy loading, dirty checking, SQL generation, and entity state are ORM concerns, not magic repository behavior.

The best habit is to keep persistence behind a service boundary. Controllers ask services to do application work. Services coordinate rules and transactions. Repositories handle database access.

## Example
```java
package com.tommy.learningapi.notes;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Entity
public class Note {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String content;
}

interface NoteRepository extends JpaRepository<Note, Long> {}

@Service
class NoteService {
    private final NoteRepository repository;

    NoteService(NoteRepository repository) {
        this.repository = repository;
    }

    @Transactional
    Note save(Note note) {
        return repository.save(note);
    }
}
```

## Common Mistakes
- Importing `javax.persistence.*` in a Boot 4 project.
- Returning entities directly from every API endpoint.
- Putting transaction boundaries randomly on controllers.
- Assuming repositories remove the need to think about database constraints and relationships.

## Practice
- Create one entity with an id, title, and content field.
- Create a repository interface for that entity.
- Write down which service methods should be transactional and why.

## Continuity
- Previous lesson: `Lesson 10: Connect Spring Boot 4.x to MySQL and Hibernate 7`
- Next lesson: `Lesson 12: Build CRUD APIs With Service and Repository Layers`

## Key Takeaway
- Boot 4 persistence stays understandable when entities, repositories, and transactions have clear responsibilities.

## Official References
- https://docs.spring.io/spring-data/jpa/reference/jpa/getting-started.html
- https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative.html
- https://jakarta.ee/specifications/persistence/
