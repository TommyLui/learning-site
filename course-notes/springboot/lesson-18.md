---
title: "Lesson 18: Session and JWT Basics"
lesson: 18
slug: "lesson-18"
summary: "Choosing an auth model affects API design, client interaction, and deployment behavior."
---

# Lesson 18: Session and JWT Basics

Choosing an auth model affects API design, client interaction, and deployment behavior.

## What You Will Learn
- Compare session-based and token-based authentication approaches for backend APIs.

## Why This Matters
- Choosing an auth model affects API design, client interaction, and deployment behavior.

## Main Ideas
- Server-side session state
- Stateless token-based auth
- Trade-offs between simplicity and scalability

## Lesson Notes
Authentication state has to live somewhere after login. In session-based systems, the server stores the authenticated state and the client sends a session identifier on later requests. In token-based systems, the client carries a signed token such as JWT.

Sessions are often easier to reason about at first because the server remains the main source of truth. JWT-based systems are popular for APIs because they can fit stateless architectures more naturally.

Neither approach is automatically better. Sessions can be simpler and safer in some applications. JWTs can work well for distributed systems and API clients, but they introduce token lifecycle concerns and require careful design.

For learning, the key is to understand the trade-off: where the trust state lives, how it is verified, and what happens when access must be revoked or renewed.

This lesson gives you enough context to decide which style fits a given project instead of choosing by trend alone.

## Example
```text
// JWT is often sent in the Authorization header
Authorization: Bearer ***
```

## Common Mistakes
- Using JWT just because it sounds modern
- Ignoring token expiration and refresh strategy
- Assuming stateless means simpler in every case

## Practice
- Write down one advantage and one drawback of sessions.
- Write down one advantage and one drawback of JWT-based auth.

## Continuity
- Previous lesson: `Lesson 17: Login Flow, Password Encoding, and Authorization`
- Next lesson: `Lesson 19: Build and Package the Application`

## Key Takeaway
- Choosing an auth model affects API design, client interaction, and deployment behavior.

## Official References
- https://spring.io/projects/spring-security
- https://docs.spring.io/spring-boot/reference/web/spring-security.html
