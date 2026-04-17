---
title: "Lesson 11: Entities, Repositories, and JPA Basics"
lesson: 11
slug: "lesson-11"
summary: "This is the bridge between domain objects in code and rows in the database."
---

# Lesson 11: Entities, Repositories, and JPA Basics

This is the bridge between domain objects in code and rows in the database.

## What You Will Learn
- Model database tables with JPA entities.
- Use repository interfaces to read and write data with less boilerplate.
- Understand why object-relational mapping changes how backend code is structured.

## Why This Matters
- This is the bridge between domain objects in code and rows in the database.
- Entities and repositories let you move from raw connection setup to meaningful persistence design.
- JPA introduces patterns and constraints that affect how data should be represented in code.

## Main Ideas
- Entities represent persistent domain objects.
- Repositories provide a higher-level persistence API on top of JPA.
- ORM convenience still requires careful data modeling and clear boundaries.

## Lesson Notes
Once the datasource is working, the next step is to give the application a domain model. JPA entities do that by representing database rows as Java objects. Instead of passing raw SQL strings around from the beginning, you start with typed domain data.

An entity is more than a plain class. It participates in persistence rules. It has an identity, it maps fields to columns, and it is tracked by the persistence layer. That means entity design affects how the application reads, updates, and stores state.

The identifier field is especially important. Without a properly defined `@Id`, JPA does not know how to distinguish one record from another. This is why identity is a central concept in persistence and not just an implementation detail.

Repositories sit on top of entities and provide the access layer. Through interfaces such as `JpaRepository`, you gain operations like save, findAll, findById, and delete without implementing all the standard boilerplate by hand.

This is very productive, but it can lead to shallow understanding if you treat repositories as magic boxes. Underneath the convenience is still a relational database, and your entities still reflect design decisions about naming, constraints, and relationships.

A useful habit is to keep asking two questions: what does this object represent in the domain, and how does that concept map to the table structure underneath? That habit keeps your model meaningful instead of turning persistence into a purely mechanical task.

This lesson also prepares you for later complexity. Once entity basics are clear, CRUD APIs and relationship mapping become much easier to reason about.

## Example
```java
@Entity
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;
}

public interface NoteRepository extends JpaRepository<Note, Long> {}
```

## Common Mistakes
- Treating entities as if they were only DTOs with no persistence behavior.
- Forgetting to define a proper identifier field.
- Packing business logic directly into repository interfaces.

## Practice
- Create an entity with an id and two domain fields.
- Create a `JpaRepository` for that entity and call `findAll()` from a service.
- Explain how an entity differs from a request DTO.

## Continuity
- Previous lesson: `Lesson 10: Connect Spring Boot 4.x to MySQL`
- Next lesson: `Lesson 12: Build CRUD APIs With Service and Repository Layers`

## Key Takeaway
- This is the bridge between domain objects in code and rows in the database.

## Official References
- https://docs.spring.io/spring-boot/reference/data/sql.html
- https://spring.io/projects/spring-data-jpa
