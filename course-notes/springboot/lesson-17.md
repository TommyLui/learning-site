---
title: "Lesson 17: Login Flow, Password Encoding, and Authorization"
lesson: 17
slug: "lesson-17"
summary: "A backend needs more than a login form; it needs safe credential handling and permission checks."
---

# Lesson 17: Login Flow, Password Encoding, and Authorization

A backend needs more than a login form; it needs safe credential handling and permission checks.

## What You Will Learn
- Understand the basic server-side flow of login and authenticated access.
- See why password encoding is mandatory rather than optional.
- Apply simple authorization rules such as role-based access control.

## Why This Matters
- A backend needs more than a login form; it needs safe credential handling and permission checks.
- Credential handling mistakes can create severe security problems even in small projects.
- Authorization rules make access control explicit and auditable instead of accidental.

## Main Ideas
- Passwords should be encoded before storage and comparison.
- Authorization rules should be centralized and easy to inspect.
- Login flow design affects both user experience and system safety.

## Lesson Notes
A login feature is really a chain of security decisions. The application receives credentials, checks whether they match a known user, determines what kind of authenticated state to establish, and then applies authorization rules on future requests.

One of the first non-negotiable requirements is password encoding. Raw passwords should never be stored directly. Spring Security provides encoders such as BCrypt so that the application stores one-way hashes rather than the original secret values.

This matters because the backend is responsible not just for accepting credentials, but for minimizing damage if data is leaked. Storing raw passwords would make a compromise dramatically worse. Encoding is therefore a basic security responsibility, not an advanced optimization.

Authorization comes after successful authentication. Once the application knows who the user is, it can decide what that user can access. Some endpoints may be open to any authenticated user, while others may require a specific role such as `ADMIN`.

Clear authorization rules improve both safety and maintainability. If access logic is scattered through controllers and services inconsistently, it becomes difficult to review and easy to break. Centralized rules make security policy more visible.

This lesson also prepares you to compare stateful and stateless login styles. Whether the application uses sessions or tokens, it still has to solve the same core concerns: credential verification, secure password storage, and explicit access rules.

By learning this flow now, you make later security decisions more deliberate. The application should not only let users in; it should clearly define how they are identified and what that identity allows them to do.

## Example
```java
package com.tommy.learningapi.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class UserSecurityConfig {
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {
        UserDetails admin = User.withUsername("admin")
            .password(passwordEncoder.encode("secret123"))
            .roles("ADMIN")
            .build();

        return new InMemoryUserDetailsManager(admin);
    }
}
```

## Common Mistakes
- Storing raw passwords.
- Checking authorization only in the frontend instead of on the backend.
- Letting access-control rules grow in a scattered, hard-to-review way.

## Practice
- Create a `PasswordEncoder` bean and explain why BCrypt is safer than plain text storage.
- Protect one endpoint with a role requirement.
- Describe the difference between a successful login and a successful authorization check.

## Continuity
- Previous lesson: `Lesson 16: Spring Security 6 Fundamentals`
- Next lesson: `Lesson 18: Session, JWT, and Resource Server Basics`

## Key Takeaway
- A backend needs more than a login form; it needs safe credential handling and permission checks.

## Official References
- https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html
- https://docs.spring.io/spring-boot/reference/web/spring-security.html
