---
title: "Lesson 20: Use Actuator for Health Checks and Monitoring"
lesson: 20
slug: "lesson-20"
summary: "Production applications need observability, not just features."
---

# Lesson 20: Use Actuator for Health Checks and Monitoring

Production applications need observability, not just features.

## What You Will Learn
- Learn how Spring Boot exposes operational information through Actuator.

## Why This Matters
- Production applications need observability, not just features.

## Main Ideas
- Health endpoint
- Metrics and operational insight
- Production-ready features

## Lesson Notes
Actuator is one of Spring Boot's most practical production features. It exposes endpoints that help you understand application health, runtime conditions, and basic operational metrics.

The health endpoint is especially important because it lets other systems or operators quickly see whether the application is functioning. This is useful in deployments, orchestration, and troubleshooting.

Actuator can also expose information about metrics, environment, mappings, and more. Not every endpoint should be public, so security and exposure settings matter.

The main idea is observability. A healthy application is not only one that compiles or starts, but one whose condition can be inspected in production.

If you learn Actuator early, you start thinking about backend systems as running services rather than just code exercises.

## Example
```properties
management.endpoints.web.exposure.include=health,info
management.endpoint.health.show-details=always
```

## Common Mistakes
- Exposing too many operational endpoints publicly
- Treating observability as optional
- Ignoring health checks until deployment time

## Practice
- Enable the health endpoint and inspect the response.
- List which actuator endpoints should be restricted.

## Continuity
- Previous lesson: `Lesson 19: Build and Package the Application`
- Next lesson: `Lesson 21: Prepare Spring Boot 4.x for Deployment`

## Key Takeaway
- Production applications need observability, not just features.

## Official References
- https://docs.spring.io/spring-boot/reference/actuator/index.html
- https://spring.io/projects/spring-boot
