---
title: "Lesson 16: Spring Security 7 Fundamentals"
lesson: 16
slug: "lesson-16"
summary: "Spring Security 7 protects Boot 4 applications through a filter-chain model that separates authentication, authorization, and application logic."
---

# Lesson 16: Spring Security 7 Fundamentals

Spring Security 7 protects Boot 4 applications through a filter-chain model that separates authentication, authorization, and application logic.

## What You Will Learn
- Understand authentication, authorization, and the security filter chain.
- See why adding Spring Security changes request handling even before custom application code exists.
- Configure access rules with a `SecurityFilterChain` bean.
- Recognize Spring Security 7 as the security generation aligned with Spring Boot 4.x.

## Why This Matters
- Security changes how every request reaches the application.
- Secure defaults are useful, but production APIs still need deliberate access rules.
- Spring Security 7 remains centered on filter-chain configuration rather than the removed `WebSecurityConfigurerAdapter` style.

## Main Ideas
- Authentication asks who the caller is; authorization asks what that caller may do.
- Spring Security evaluates requests before they reach most controller logic.
- `SecurityFilterChain` configuration keeps rules explicit and reviewable.

## Lesson Notes
Spring Security can feel abrupt because it affects an application as soon as it is added. Endpoints that were public may now require authentication. That is not accidental; security sits at the request boundary and evaluates traffic before the controller receives it.

Authentication and authorization solve different problems. Authentication identifies the caller. Authorization decides whether that caller can access a specific resource or action. A secure API needs both ideas, but mixing them up leads to confusing rules.

The filter chain is the core request-processing model. Security filters can read credentials, create an authenticated principal, reject unauthenticated requests, enforce role or authority rules, and prepare security context for downstream code. This is why security is not just a service method you call manually.

In Spring Security 7, the modern configuration style is still to register a `SecurityFilterChain` bean and describe the access rules explicitly. Do not reintroduce `WebSecurityConfigurerAdapter`; that older inheritance model is not the path for modern Boot applications.

Boot 4 also has security-specific starter and test starter changes. Keep dependencies intentional: add the security starter when you are ready to protect endpoints, and add the security test starter when tests need security support such as mock users or request post-processors.

This lesson is the transition from building functionality to protecting functionality. Once the filter-chain model is clear, login flows, password encoding, JWT resource servers, and method security become easier to reason about.

## Example
```java
package com.tommy.learningapi.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults())
            .build();
    }
}
```

## Common Mistakes
- Confusing authentication with authorization.
- Adding Security without expecting existing endpoints to require authentication.
- Copying `WebSecurityConfigurerAdapter` examples into a modern Security 7 project.
- Testing secured endpoints without the security test support needed for the chosen test style.

## Practice
- Define one public endpoint and one protected endpoint.
- Explain in your own words what happens before a controller sees a secured request.
- Add a test that verifies an unauthenticated request is rejected.

## Continuity
- Previous lesson: `Lesson 15: Common Debugging Patterns in Boot 4 Applications`
- Next lesson: `Lesson 17: Login Flow, Password Encoding, and Authorization`

## Key Takeaway
- Spring Security 7 protects Boot 4 APIs through explicit filter-chain rules that separate identity, permission, and business logic.

## Official References
- https://docs.spring.io/spring-security/reference/servlet/architecture.html
- https://docs.spring.io/spring-security/reference/servlet/authorization/authorize-http-requests.html
- https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html
