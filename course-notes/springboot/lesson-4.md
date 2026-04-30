---
title: "Lesson 4: Dependency Injection and Beans"
lesson: 4
slug: "lesson-4"
summary: "Dependency injection is one of the stable core ideas behind clean, testable Spring Boot 4 applications."
---

# Lesson 4: Dependency Injection and Beans

Dependency injection is one of the stable core ideas behind clean, testable Spring Boot 4 applications.

## What You Will Learn
- Understand how Spring manages objects as beans inside the application context.
- Explain why constructor injection is the default choice for application code.
- See how dependency injection supports clear controller, service, repository, security, and test boundaries.

## Why This Matters
- Boot 4 updates the platform, but dependency injection remains the foundation of Spring application design.
- Explicit dependencies make code easier to read, test, and refactor.
- Good bean boundaries prevent the framework from becoming a place to hide unclear architecture.

## Main Ideas
- Beans are objects managed by the Spring container.
- Constructor injection makes required collaborators visible.
- Layered design works best when each layer depends on the next one through a clear contract.

## Lesson Notes
In plain Java, it is common to create objects directly with `new`. In a Spring application, important objects are often created and managed by the Spring container instead. Once Spring manages an object, that object is a bean.

Dependency injection means a class receives the collaborators it needs rather than constructing them internally. A controller receives a service, a service receives a repository, and a security configuration receives the components needed to authenticate or authorize requests. The class uses those collaborators normally, but the application context handles assembly.

Constructor injection is usually the clearest option. It shows required dependencies at the top of the class, supports immutability with `final` fields, and makes tests straightforward because a test can pass a fake or mock collaborator without starting the full Spring context.

This concept is deliberately stable across Boot generations. Spring Boot 4 changes managed dependency versions and several starter/test details, but it does not replace the dependency-injection mental model. Learning beans well now will help you understand configuration properties, repositories, security filters, test slices, and custom auto-configuration later.

The most important design habit is to keep dependencies meaningful. A controller should not depend on a database driver directly. A service should not know about HTTP request objects unless the design truly requires it. Dependency injection makes dependencies easy to add, so you must still decide which dependencies belong.

Once your bean boundaries are clean, the rest of the course becomes easier. Auto-configuration can provide infrastructure beans, your application can provide domain beans, and tests can replace selected collaborators while preserving the shape of the code.

## Example
```java
package com.tommy.learningapi.notes;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

@RestController
@RequestMapping("/api/notes")
public class NoteController {
    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping
    public List<Note> getNotes() {
        return noteService.findAll();
    }
}
```

## Common Mistakes
- Creating services or repositories manually inside controllers.
- Hiding required dependencies behind field injection.
- Letting one class depend on unrelated infrastructure from every layer.
- Thinking Boot 4 auto-configuration removes the need for clear application design.

## Practice
- Create a controller that receives a service through constructor injection.
- Write down the dependencies your service really needs and remove anything unrelated.
- Test a service by passing a fake repository without starting Spring.

## Continuity
- Previous lesson: `Lesson 3: Understand Project Structure, Startup, and Embedded Servers`
- Next lesson: `Lesson 5: Configuration Files, Profiles, and Type-Safe Settings`

## Key Takeaway
- Dependency injection keeps Spring Boot 4 code explicit, modular, and testable when you use it with clear boundaries.

## Official References
- https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html
- https://docs.spring.io/spring-framework/reference/core/beans/annotation-config/autowired.html
