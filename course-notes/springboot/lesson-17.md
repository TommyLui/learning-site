---
title: "Lesson 17: Login Flow, Password Encoding, and Authorization"
lesson: 17
slug: "lesson-17"
summary: "A backend needs more than a login form; it needs safe credential handling and permission checks."
---

# Lesson 17: Login Flow, Password Encoding, and Authorization

A backend needs more than a login form; it needs safe credential handling and permission checks.

## What You Will Learn
- Learn the basics of secure login handling and role-based access control.

## Why This Matters
- A backend needs more than a login form; it needs safe credential handling and permission checks.

## Main Ideas
- PasswordEncoder
- Authenticated sessions or users
- Role-based endpoint rules

## Lesson Notes
A secure login flow has several pieces. The application receives credentials, verifies them, loads user details, and stores or issues some form of authenticated state. Even in a simple example, password handling must be safe.

Passwords should never be stored in plain text. Spring Security uses password encoders so that stored values are one-way hashes rather than raw secrets. This is a basic but critical protection.

Authorization rules then decide what authenticated users can access. Some endpoints may be available to any logged-in user, while others may require a specific role such as ADMIN.

These rules should be deliberate and visible. If access control is scattered or inconsistent, security bugs become much easier to introduce.

This lesson prepares you for both session-based and token-based application designs.

## Example
```java
@Bean
PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}
```

## Common Mistakes
- Storing raw passwords
- Checking roles only in the frontend
- Applying authorization rules inconsistently

## Practice
- Create a PasswordEncoder bean.
- Protect one endpoint so that it requires a specific role.

## Continuity
- Previous lesson: `Lesson 16: Spring Security Fundamentals`
- Next lesson: `Lesson 18: Session and JWT Basics`

## Key Takeaway
- A backend needs more than a login form; it needs safe credential handling and permission checks.

## Official References
- https://spring.io/projects/spring-security
- https://docs.spring.io/spring-boot/reference/web/spring-security.html
