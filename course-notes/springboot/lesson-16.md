---
title: "Lesson 16: Spring Security Fundamentals"
lesson: 16
slug: "lesson-16"
summary: "Security changes how requests move through the application and is essential for real APIs."
---

# Lesson 16: Spring Security Fundamentals

Security changes how requests move through the application and is essential for real APIs.

## What You Will Learn
- Understand the core concepts of authentication, authorization, and the filter chain.
- See why adding Spring Security changes request handling even before custom code exists.
- Build a mental model for protecting endpoints intentionally rather than accidentally.

## Why This Matters
- Security changes how requests move through the application and is essential for real APIs.
- It protects application boundaries and shapes who can do what inside the system.
- Without a clear security model, backend APIs are easy to expose incorrectly.

## Main Ideas
- Authentication and authorization solve different problems.
- Spring Security works at the request-processing boundary through filters.
- Secure defaults are helpful, but they still need deliberate application design.

## Lesson Notes
Spring Security can feel abrupt when you first add it, because it affects the application before you write much custom logic. Endpoints that were previously open may suddenly require authentication. That surprise is not a bug; it reflects the fact that security operates at the boundary of request handling.

The two most important concepts are authentication and authorization. Authentication answers who the user is. Authorization answers what that user is allowed to do. A secure application needs both, but they should not be confused.

Spring Security processes requests through a filter chain before the request reaches your controllers. This is why security is not just another service in the middle of your code. It sits in front of much of the application and decides whether a request should continue at all.

This design is powerful because it gives you central control over access rules. You can define which endpoints are public, which require a logged-in user, and which need specific roles or permissions. That keeps security policy visible and consistent.

For learners, the most useful mindset is to see security as traffic control at the application boundary. You are not just adding a login screen. You are deciding how every request should be evaluated before it reaches business logic.

Spring Boot makes this easier by integrating Security with the rest of the application model, but that convenience should not hide the concepts underneath. If you understand the filter chain and access rules, later features such as custom login flow, JWT, or method-level security become much easier to reason about.

This lesson is the point where the course shifts from building functionality to protecting functionality. That change is central to real backend development.

## Example
```java
@Bean
SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/public/**").permitAll()
            .anyRequest().authenticated()
        )
        .build();
}
```

## Common Mistakes
- Confusing authentication with authorization.
- Adding Spring Security without expecting every endpoint to be affected.
- Treating security as only a UI login concern rather than an API boundary concern.

## Practice
- Define one public endpoint and one protected endpoint.
- Explain in your own words what the filter chain does before a controller is reached.
- List three API resources that should probably not be public by default.

## Continuity
- Previous lesson: `Lesson 15: Common Debugging Patterns in Spring Boot Applications`
- Next lesson: `Lesson 17: Login Flow, Password Encoding, and Authorization`

## Key Takeaway
- Security changes how requests move through the application and is essential for real APIs.

## Official References
- https://spring.io/projects/spring-security
- https://docs.spring.io/spring-boot/reference/web/spring-security.html
