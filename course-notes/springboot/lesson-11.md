---
title: "Lesson 11: Entities, Repositories, and JPA Basics"
lesson: 11
slug: "lesson-11"
summary: "This is the bridge between domain objects in code and rows in the database."
---

# Lesson 11: Entities, Repositories, and JPA Basics

This is the bridge between domain objects in code and rows in the database.

## What You Will Learn
- Model data with JPA entities and access it through repositories.

## Why This Matters
- This is the bridge between domain objects in code and rows in the database.

## Main Ideas
- @Entity and @Id
- Repository interfaces
- Object-relational mapping

## Lesson Notes
JPA lets you work with database data through Java objects. Instead of writing every SQL query by hand at the start, you define entity classes that represent tables and repository interfaces that describe data access operations.

An entity maps fields to columns and usually has an identifier field marked with @Id. This tells JPA how to track and persist instances of that class.

Repositories let you perform common operations such as save, findById, findAll, and delete without writing boilerplate data access code. Spring Data JPA generates a lot of this behavior for you.

This abstraction is useful, but it also means you should understand the model you are creating. JPA is not just a shortcut; it is a mapping layer with rules around identity, state, and persistence behavior.

Once entities and repositories are working, you can build proper service-layer CRUD operations on top of them.

## Example
```java
@Entity
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
}

public interface NoteRepository extends JpaRepository<Note, Long> {}
```

## Common Mistakes
- Treating entities as if they were only plain DTOs
- Forgetting the identifier setup
- Putting business logic directly into repository interfaces

## Practice
- Create an entity with id and two fields.
- Create a JpaRepository for that entity and call findAll.

## Continuity
- Previous lesson: `Lesson 10: Connect Spring Boot 4.x to MySQL`
- Next lesson: `Lesson 12: Build CRUD APIs With Service and Repository Layers`

## Key Takeaway
- This is the bridge between domain objects in code and rows in the database.

## Official References
- https://docs.spring.io/spring-boot/reference/data/sql.html
- https://spring.io/projects/spring-data-jpa
