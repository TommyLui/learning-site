---
title: "Lesson 18: Session, JWT, and Resource Server Basics"
lesson: 18
slug: "lesson-18"
summary: "Choosing an auth model affects API design, client interaction, and deployment behavior."
---

# Lesson 18: Session, JWT, and Resource Server Basics

Choosing an auth model affects API design, client interaction, and deployment behavior.

## What You Will Learn
- Compare session-based and token-based authentication approaches.
- Understand where authenticated state lives in each model.
- Recognize the trade-offs that influence when sessions or JWTs make sense.
- See where Spring Security resource-server support fits into JWT-based APIs.

## Why This Matters
- Choosing an auth model affects API design, client interaction, and deployment behavior.
- Authentication style influences how clients send credentials and how the server manages trust.
- The right choice depends on architecture and constraints, not on trend alone.

## Main Ideas
- Sessions keep authentication state on the server.
- JWT-based approaches move more state to the client side through tokens.
- Every auth model comes with trade-offs in simplicity, revocation, and scalability.

## Lesson Notes
Once login basics are clear, the next architectural question is where authenticated state should live after login succeeds. This is the key difference between session-based authentication and token-based approaches such as JWT.

In a session-based system, the server remains the source of truth for authenticated state. The client stores a session identifier, usually in a cookie, and sends it with later requests. The server looks up the session and decides whether the request belongs to an authenticated user.

In a JWT-based approach, the server issues a signed token containing claims about the user or session. The client sends that token on later requests, often through the `Authorization` header. The server verifies the token instead of looking up a server-side session record in the same way.

Sessions are often easier to reason about at first because revocation and central control are more direct. JWTs are attractive in stateless API scenarios because they reduce some forms of server-side session storage, but they also introduce concerns about token expiration, refresh flow, and revocation strategy.

That is why JWT should not be chosen just because it sounds modern. It solves certain architectural needs well, but it also creates its own responsibilities. A backend team should be able to explain why a token-based model fits the client and deployment model they actually have.

For a learner, the most valuable outcome is understanding the location of trust. In sessions, trust is strongly server-centered. In JWT-based systems, some trust information travels with the client in a signed artifact. The security design follows from that difference.

This lesson gives you a vocabulary for comparing authentication approaches sensibly. In Spring Boot 3.x, JWT-based API protection is often expressed through Spring Security's resource-server support, where the application validates bearer tokens rather than inventing a token parser from scratch. Later, when you build a specific login system, you should be able to justify the model rather than copying it from a tutorial.

## Example
```http
POST /api/login HTTP/1.1
Content-Type: application/json

{
  "username": "tommy",
  "password": "secret123"
}
```

```http
GET /api/messages HTTP/1.1
Authorization: Bearer <jwt-token>
```

## Common Mistakes
- Using JWT only because it is popular.
- Ignoring token expiration and refresh strategy.
- Assuming stateless authentication is automatically simpler in every project.

## Practice
- Write one advantage and one drawback of sessions.
- Write one advantage and one drawback of JWT-based auth.
- Explain where the authenticated state is stored in each model.
- Explain when a Spring Security resource server is a better fit than a session-based login flow.

## Continuity
- Previous lesson: `Lesson 17: Login Flow, Password Encoding, and Authorization`
- Next lesson: `Lesson 19: Build and Package the Application`

## Key Takeaway
- Choosing an auth model affects API design, client interaction, and deployment behavior.

## Official References
- https://docs.spring.io/spring-boot/reference/web/spring-security.html
- https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/jwt.html
