---
title: "Lesson 20: Use Actuator for Health Checks and Monitoring"
lesson: 20
slug: "lesson-20"
summary: "Production applications need observability, not just features."
---

# Lesson 20: Use Actuator for Health Checks and Monitoring

Production applications need observability, not just features.

## What You Will Learn
- Use Spring Boot Actuator to expose operational information about the application.
- Understand the purpose of health, info, and metrics endpoints.
- Recognize why observability belongs in the application before deployment day arrives.

## Why This Matters
- Production applications need observability, not just features.
- Health and metrics information help operators and systems understand whether the app is running well.
- Operational insight turns the app from code into a manageable service.

## Main Ideas
- Actuator exposes production-oriented endpoints.
- Health checks are central to deployment and orchestration workflows.
- Observability must be balanced with security and exposure control.

## Lesson Notes
A backend service is not finished just because it can handle requests. Once it is deployed, people and systems need to know whether it is healthy, what it is doing, and how it should be monitored. Spring Boot Actuator exists to support exactly that operational perspective.

Actuator adds endpoints that expose information such as application health, build info, metrics, mappings, loggers, and environment details. These endpoints are useful for developers, operators, and deployment platforms that need to evaluate whether the application is functioning correctly.

The health endpoint is especially important because it acts as a quick signal of whether the application is alive and, depending on configuration, whether dependent systems such as databases are also available. This can influence load balancing, restart behavior, and deployment readiness checks.

Observability is not only about dashboards or advanced monitoring stacks. It begins with making useful application state visible in a controlled way. That means even a small Spring Boot app benefits from Actuator because it teaches you to think beyond feature code.

At the same time, operational endpoints should not be exposed carelessly. Some of them reveal sensitive implementation details. That is why exposure settings and security rules matter. Visibility should be intentional, not accidental.

A healthy practice is to decide early which operational signals are valuable and who should be allowed to see them. That decision becomes more important as the app gains more endpoints, infrastructure, and deployment complexity. In Spring Boot, this usually means exposing only the endpoints you need and being careful with settings that reveal full health details or environment information.

By learning Actuator here, you start treating the application as a long-running service that needs to be understood and maintained, not just a set of controller methods.

## Example
```properties
management.endpoints.web.exposure.include=health,info,metrics
# Limit sensitive details unless the audience is trusted.
management.endpoint.health.show-details=when-authorized
```

## Common Mistakes
- Exposing too many operational endpoints publicly.
- Treating observability as optional until production issues appear.
- Ignoring health checks when planning deployment behavior.

## Practice
- Enable the health endpoint and inspect its response.
- Choose which Actuator endpoints you would expose internally versus publicly.
- Explain how health checks help deployment platforms make decisions.

## Continuity
- Previous lesson: `Lesson 19: Build and Package the Application`
- Next lesson: `Lesson 21: Prepare Spring Boot 3.x for Deployment`

## Key Takeaway
- Production applications need observability, not just features.

## Official References
- https://docs.spring.io/spring-boot/reference/actuator/index.html
- https://docs.spring.io/spring-boot/reference/actuator/endpoints.html
