---
title: "Lesson 4: Dependency Injection and Beans"
lesson: 4
slug: "lesson-4"
summary: "Dependency injection is one of the core ideas behind clean, testable Spring applications."
---

# Lesson 4: Dependency Injection and Beans

Dependency injection is one of the core ideas behind clean, testable Spring applications.

## What You Will Learn
- Understand how Spring manages objects as beans inside the application context.
- Explain why constructor injection is the default choice for most application code.
- See how dependency injection supports cleaner boundaries between controller, service, and repository layers.

## Why This Matters
- Dependency injection is one of the core ideas behind clean, testable Spring applications.
- It prevents classes from creating and controlling every dependency themselves.
- It gives Spring Boot a consistent way to assemble application layers and swap implementations in tests.

## Main Ideas
- Beans are objects managed by the Spring container.
- Constructor injection makes dependencies explicit and easier to test.
- Layered design works best when dependencies point in clear directions.

## Lesson Notes
In plain Java, it is common to create objects directly with `new`, and in small programs that can be enough. In a Spring Boot application, however, many important objects are not created manually. They are created, stored, and managed by the Spring container. Once Spring is responsible for those objects, they become beans.

That change matters because object creation is no longer scattered across the codebase. Instead of every class building its own dependencies, Spring can assemble the graph of objects once and inject the right collaborators where they are needed. This gives the application a more organized structure from the beginning.

Dependency injection means a class receives its collaborators from outside rather than constructing them internally. A controller can receive a service, and a service can receive a repository. The class still uses those dependencies normally, but it does not have to decide how they are created.

Constructor injection is the clearest version of this pattern. When dependencies appear in the constructor, anyone reading the class can immediately see what it needs to operate. It also makes the class harder to misuse, because required collaborators must be supplied up front.

This approach is especially useful in tests. If a service depends on a repository, a unit test can pass in a mock repository without starting the whole Spring context. That is one reason constructor injection is considered more maintainable than field injection in most application code.

Beans also reinforce responsibility boundaries. Controllers should mainly translate HTTP requests into application actions. Services should hold business logic. Repositories should handle persistence. Dependency injection makes these boundaries easier to preserve because each layer depends on the next one through a clear contract.

Beginners sometimes think dependency injection is only a framework trick, but it is really a design principle. Spring Boot makes that principle practical at scale by providing an application context that can discover, build, and wire components automatically.

Once this concept is clear, many later topics become easier. Configuration classes, repositories, filters, security components, and test doubles all rely on the same mental model: Spring manages the lifecycle of important objects and injects them where they belong.

## Example
```java
@Service
public class GreetingService {
    public String greet() {
        return "Hello from Spring Boot";
    }
}

@RestController
@RequestMapping("/api/greetings")
public class GreetingController {
    private final GreetingService greetingService;

    public GreetingController(GreetingService greetingService) {
        this.greetingService = greetingService;
    }

    @GetMapping
    public String greeting() {
        return greetingService.greet();
    }
}
```

## Common Mistakes
- Creating service or repository objects manually inside controllers.
- Hiding required dependencies through field injection everywhere.
- Letting one layer depend on too many unrelated classes.

## Practice
- Create a controller that receives a service through constructor injection.
- Write down which dependencies your service class really needs and which do not belong there.
- Explain why constructor injection makes testing easier than manual object creation inside methods.

## Continuity
- Previous lesson: `Lesson 3: Understand the Project Structure and Startup Flow`
- Next lesson: `Lesson 5: Configuration Files and Profiles`

## Key Takeaway
- Dependency injection is one of the core ideas behind clean, testable Spring applications.

## Official References
- https://docs.spring.io/spring-boot/reference/features/index.html
- https://spring.io/guides/gs/rest-service
