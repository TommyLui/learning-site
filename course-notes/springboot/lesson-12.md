---
title: "Lesson 12: Build CRUD APIs With Service and Repository Layers"
lesson: 12
slug: "lesson-12"
summary: "CRUD is the foundation of many backend apps, and a layered approach keeps that logic maintainable."
---

# Lesson 12: Build CRUD APIs With Service and Repository Layers

CRUD is the foundation of many backend apps, and a layered approach keeps that logic maintainable.

## What You Will Learn
- Connect controllers, services, and repositories into a full CRUD flow.
- Separate API contracts from persistence concerns with DTOs and services.
- Handle common cases such as create, update, delete, and not-found behavior more cleanly.

## Why This Matters
- CRUD is the foundation of many backend apps, and a layered approach keeps that logic maintainable.
- Layer boundaries stop controllers from becoming overloaded with persistence and business logic.
- This is where the application starts to look like a realistic backend service rather than a set of isolated demos.

## Main Ideas
- Controllers translate HTTP input and output.
- Services coordinate rules and persistence actions.
- Repositories should support CRUD flows without becoming the place where all business decisions live.

## Lesson Notes
A CRUD API is often the first full slice of a backend application that feels complete. It accepts input from clients, validates it, coordinates domain logic, persists state, and returns a useful response. That makes it a good place to practice layered design seriously.

A common mistake is to put all CRUD logic in the controller because it seems faster at the beginning. The result is usually a class that handles request parsing, validation decisions, entity mapping, repository calls, and response shaping all in one place. That quickly becomes difficult to test and harder to extend.

A service layer keeps the design cleaner. The controller should mainly handle HTTP-level work: request mappings, input objects, response status codes, and response bodies. The service should decide how create, read, update, and delete operations behave from a business perspective.

This separation becomes especially helpful in update and delete flows. Questions such as 'what happens if the entity does not exist?', 'which fields can be changed?', and 'what should be returned afterward?' belong more naturally in the service than in the controller.

DTOs also matter here. Request DTOs help define what clients are allowed to send, while response DTOs let you decide what the API should expose back. That protects your public contract from persistence details that may change later.

Repositories remain important, but they should not become the place where application rules silently accumulate. Their role is data access, not full application orchestration. The service layer is the better home for coordination and domain decisions.

By the time CRUD flows are in place, you have a strong vertical slice of the application. The remaining lessons on testing, security, and deployment all become easier because there is now a realistic core to work with.

## Example
```java
package com.tommy.learningapi.notes;

import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Service
public class NoteService {
    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public Note create(CreateNoteRequest request) {
        Note note = new Note();
        note.setTitle(request.title());
        note.setContent(request.content());
        return noteRepository.save(note);
    }

    public Note findById(Long id) {
        return noteRepository.findById(id)
            .orElseThrow(() -> new NoteNotFoundException(id));
    }
}

class NoteNotFoundException extends RuntimeException {
    public NoteNotFoundException(Long id) {
        super("Note not found: " + id);
    }
}

@RestControllerAdvice
class NoteErrorHandler {
    @ExceptionHandler(NoteNotFoundException.class)
    ResponseEntity<Map<String, Object>> handleNotFound(NoteNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body(Map.of("error", ex.getMessage(), "status", 404));
    }
}
```

## Common Mistakes
- Putting persistence logic directly in controllers.
- Skipping not-found handling during updates or deletes.
- Returning entities blindly without thinking about API contract boundaries.

## Practice
- Implement GET all, GET by id, POST, PUT, and DELETE for one entity.
- Move shared CRUD rules out of the controller and into a service.
- Design one response DTO instead of returning the entity directly.

## Continuity
- Previous lesson: `Lesson 11: Entities, Repositories, and JPA Basics`
- Next lesson: `Lesson 13: Write Unit Tests for Service Logic`

## Key Takeaway
- CRUD is the foundation of many backend apps, and a layered approach keeps that logic maintainable.

## Official References
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html
- https://docs.spring.io/spring-data/jpa/reference/
