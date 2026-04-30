---
title: "Lesson 17: Login Flow, Password Encoding, and Authorization"
lesson: 17
slug: "lesson-17"
summary: "A secure application needs deliberate login behavior, safe password storage, and authorization rules that match real user permissions."
---

# Lesson 17: Login Flow, Password Encoding, and Authorization

A secure application needs deliberate login behavior, safe password storage, and authorization rules that match real user permissions.

## What You Will Learn
- Understand the shape of form login, HTTP Basic, and API-oriented authentication choices.
- Store passwords with a `PasswordEncoder` instead of raw text.
- Apply role or authority checks at the URL and method level.

## Why This Matters
- Login is not only a UI feature; it defines how the server establishes identity.
- Password handling mistakes are high-impact security problems.
- Authorization rules should express business permissions rather than accidental route patterns.

## Main Ideas
- Authentication mechanisms should match the type of client using the API.
- Passwords must be encoded with a modern one-way hashing strategy.
- URL-level and method-level authorization can work together when rules stay clear.

## Lesson Notes
After the filter-chain model is clear, the next question is how users authenticate and what they may access afterward. A browser-facing app might use form login and sessions. A simple internal API may start with HTTP Basic for learning. A frontend-driven API may later use token-based authentication.

Regardless of the login style, never store raw passwords. Spring Security provides `PasswordEncoder` implementations so stored password values are one-way encoded. A common beginner-friendly choice is `BCryptPasswordEncoder`, exposed through a `PasswordEncoder` bean.

Authorization rules should be designed around resources and actions. `/api/admin/**` requiring `ADMIN` is easy to understand. A method such as `deleteNote` requiring a permission check may belong closer to business logic. Spring Security supports both web request authorization and method-level authorization.

Method security in modern Spring uses `@EnableMethodSecurity` when you need annotations such as `@PreAuthorize`. Do not add method security just because it exists; add it when the rule belongs near the application operation rather than only at the URL boundary.

Testing matters here. When endpoints are secured, tests need to represent authenticated and unauthenticated requests deliberately. Use the Security test support for mock users or request customizers instead of disabling security in every test.

The right security design is visible and boring: credentials are handled safely, rules are explicit, tests prove the important cases, and business code does not guess who the user is.

## Example
```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class PasswordConfig {
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

## Common Mistakes
- Storing or comparing raw passwords.
- Designing authorization only around vague route prefixes.
- Disabling security in tests instead of testing expected security behavior.
- Confusing roles, authorities, and business permissions.

## Practice
- Add a `PasswordEncoder` bean and explain why it is needed.
- Mark one endpoint as admin-only and one as user-only.
- Write down which authorization rules belong at the URL layer and which might belong at the method layer.

## Continuity
- Previous lesson: `Lesson 16: Spring Security 7 Fundamentals`
- Next lesson: `Lesson 18: Session, JWT, Resource-server, and Authorization-server Basics`

## Key Takeaway
- Login and authorization in Boot 4 should be explicit, password-safe, and tested as part of the API contract.

## Official References
- https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html
- https://docs.spring.io/spring-security/reference/servlet/authentication/index.html
- https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html
