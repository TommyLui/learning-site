---
title: "Lesson 18: Session, JWT, Resource-server, and Authorization-server Basics"
lesson: 18
slug: "lesson-18"
summary: "Boot 4 API security often requires choosing between session-based authentication, JWT resource-server behavior, and external or Spring Authorization Server identity flows."
---

# Lesson 18: Session, JWT, Resource-server, and Authorization-server Basics

Boot 4 API security often requires choosing between session-based authentication, JWT resource-server behavior, and external or Spring Authorization Server identity flows.

## What You Will Learn
- Compare session-based authentication and token-based API authentication.
- Understand what a resource server does when validating JWTs.
- Recognize the role of authorization servers and why Spring Authorization Server is part of the modern Spring Security story.

## Why This Matters
- Authentication architecture affects clients, scaling, logout behavior, testing, and deployment.
- JWTs are common, but they are not a universal replacement for every session-based system.
- Resource servers should validate tokens rather than invent custom token parsing logic.

## Main Ideas
- Sessions keep authentication state on the server side.
- JWT resource servers validate signed tokens issued by a trusted authorization server.
- Authorization server responsibilities should be separated from business API responsibilities unless you deliberately own identity infrastructure.

## Lesson Notes
Security architecture becomes more important once the API needs real clients. A server-rendered or browser-first app can often use session authentication. The server stores authentication state and the browser carries a session cookie. This model is mature and works well when the app and login experience are closely connected.

Many API systems use bearer tokens instead. A JWT is a signed token that can carry claims such as subject, issuer, expiration, and authorities. The API does not trust the token because it looks like JSON; it trusts the token only after validating the signature, issuer, audience, expiration, and related rules.

In Spring Security, an API that accepts JWTs is commonly a resource server. Its job is to protect resources by validating tokens issued by a trusted authorization server. That server may be a cloud identity provider, an enterprise identity system, or a Spring Authorization Server deployment.

Spring Authorization Server is now part of the Spring Security portfolio. That does not mean every beginner project should build its own identity platform. It means the official Spring story has an authorization-server option when a team truly needs to own token issuance.

For course purposes, focus on the distinction. Your application might be a session-based app, a JWT resource server, or part of a larger OAuth2/OIDC system. Each choice affects dependencies, configuration, tests, and operational responsibilities.

Avoid hand-rolled token security. Custom token formats, homegrown signature checks, and skipping expiration or issuer validation are common ways to create serious vulnerabilities.

## Example
```java
@Bean
SecurityFilterChain apiSecurity(HttpSecurity http) throws Exception {
    return http
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/public/**").permitAll()
            .anyRequest().authenticated()
        )
        .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()))
        .build();
}
```

## Common Mistakes
- Calling a random string a JWT without validating it as a signed token.
- Treating sessions and JWTs as interchangeable implementation details.
- Building an authorization server inside a business API without understanding the responsibility.
- Ignoring token expiration, issuer, audience, and key rotation.

## Practice
- Describe when you would choose sessions for a simple app.
- Describe when an API should behave as a JWT resource server.
- List the responsibilities of an authorization server versus a resource server.

## Continuity
- Previous lesson: `Lesson 17: Login Flow, Password Encoding, and Authorization`
- Next lesson: `Lesson 19: Build Executable Jars and Container-friendly Artifacts`

## Key Takeaway
- Boot 4 security design should choose the right authentication architecture instead of treating sessions, JWTs, and authorization servers as the same thing.

## Official References
- https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/index.html
- https://docs.spring.io/spring-security/reference/servlet/oauth2/authorization-server/index.html
- https://docs.spring.io/spring-security/reference/servlet/authentication/session-management.html
