---
title: "Lesson 16: Spring Security Fundamentals"
lesson: 16
slug: "lesson-16"
summary: "Security changes how requests move through the application and is essential for real APIs."
---

# Lesson 16: Spring Security Fundamentals

Security changes how requests move through the application and is essential for real APIs.

## What You Will Learn
- Understand the core ideas behind security in Spring Boot applications.

## Why This Matters
- Security changes how requests move through the application and is essential for real APIs.

## Main Ideas
- Authentication vs authorization
- Security filter chain
- Secure-by-default mindset

## Lesson Notes
Spring Security adds a protective layer around your application by intercepting requests before they reach controllers. This makes it fundamentally different from business logic features that run only after request mapping.

Authentication answers who the user is. Authorization answers what the user is allowed to do. These two concepts appear together often, but they solve different problems.

The security filter chain processes requests through a series of checks and behaviors. That is why adding Spring Security can immediately change how every route behaves, even before you write custom logic.

A useful beginner mindset is to think of security as request control at the edges of the application. You decide which endpoints are public, which require login, and which require certain roles or permissions.

Once these fundamentals are clear, login flows and token strategies become much easier to understand.

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
- Confusing authentication with authorization
- Adding security without expecting every endpoint to be affected
- Treating security as only a login page feature

## Practice
- Describe the difference between authentication and authorization.
- Configure one public endpoint and one protected endpoint.

## Continuity
- Previous lesson: `Lesson 15: Common Debugging Patterns in Spring Boot Applications`
- Next lesson: `Lesson 17: Login Flow, Password Encoding, and Authorization`

## Key Takeaway
- Security changes how requests move through the application and is essential for real APIs.

## Official References
- https://spring.io/projects/spring-security
- https://docs.spring.io/spring-boot/reference/web/spring-security.html
