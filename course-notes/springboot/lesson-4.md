---
title: "Lesson 4: Dependency Injection and Beans"
lesson: 4
slug: "lesson-4"
summary: "Dependency injection is one of the core ideas behind clean, testable Spring applications."
---

# Lesson 4: Dependency Injection and Beans

Dependency injection is one of the core ideas behind clean, testable Spring applications.

## What You Will Learn
- Understand how Spring manages objects and injects dependencies between them.

## Why This Matters
- Dependency injection is one of the core ideas behind clean, testable Spring applications.

## Main Ideas
- Beans are objects managed by the Spring container
- Constructor injection
- Loose coupling between application layers

## Lesson Notes
In plain Java, you often create dependencies manually with new. In Spring Boot, many important objects are created and managed by the container instead. These managed objects are called beans.

Dependency injection means Spring provides one bean to another when it is needed. For example, a controller can depend on a service, and a service can depend on a repository. This keeps object creation centralized and reduces direct coupling between classes.

Constructor injection is the most common and readable approach. It makes dependencies explicit and makes testing easier because you can provide fake implementations in tests.

This design matters because it supports separation of concerns. Controllers can focus on HTTP behavior, services on business logic, and repositories on persistence. Each layer depends on contracts instead of manually assembling everything itself.

Once you understand beans and injection, later topics like configuration classes, repositories, and security components become much easier to follow.

## Example
```java
@Service
public class GreetingService {
    public String greet() {
        return "Hello from Spring Boot";
    }
}

@RestController
public class GreetingController {
    private final GreetingService greetingService;

    public GreetingController(GreetingService greetingService) {
        this.greetingService = greetingService;
    }

    @GetMapping("/hello")
    public String hello() {
        return greetingService.greet();
    }
}
```

## Common Mistakes
- Using field injection everywhere without understanding the dependency graph
- Creating service objects manually with new inside controllers
- Mixing responsibilities across layers

## Practice
- Create a controller that depends on a service via constructor injection.
- Explain why constructor injection is easier to test.

## Continuity
- Previous lesson: `Lesson 3: Understand the Project Structure and Startup Flow`
- Next lesson: `Lesson 5: Configuration Files and Profiles`

## Key Takeaway
- Dependency injection is one of the core ideas behind clean, testable Spring applications.

## Official References
- https://docs.spring.io/spring-boot/reference/features/index.html
- https://spring.io/guides/gs/rest-service
