---
title: "Lesson 20: Use Actuator for Health, Probes, Metrics, and Observability"
lesson: 20
slug: "lesson-20"
summary: "Actuator gives Boot 4 services operational endpoints for health, readiness, liveness, metrics, and observability signals."
---

# Lesson 20: Use Actuator for Health, Probes, Metrics, and Observability

Actuator gives Boot 4 services operational endpoints for health, readiness, liveness, metrics, and observability signals.

## What You Will Learn
- Add Actuator and expose selected operational endpoints safely.
- Understand health contributors, readiness, and liveness groups in Boot 4.
- Position metrics, Micrometer, and OpenTelemetry as part of production observability.

## Why This Matters
- Deployed services need more than successful startup; platforms need to know whether they are alive and ready.
- Health and metrics help teams diagnose problems before users report them.
- Observability choices should be designed, not accidentally exposed.

## Main Ideas
- Actuator endpoints expose operational information such as health, info, and metrics.
- Boot 4 enables liveness and readiness health groups by default.
- Metrics and traces can flow through Micrometer and OpenTelemetry when the right dependencies and exporters are configured.

## Lesson Notes
Actuator is the Spring Boot feature set for production-ready operational endpoints. It can expose health, info, metrics, environment details, mappings, and more. The first rule is to expose only what you need. Operational visibility should not become accidental information leakage.

Health checks answer different questions. Liveness asks whether the process should be considered alive. Readiness asks whether it is ready to receive traffic. Boot 4 exposes liveness and readiness health groups by default, which fits modern platform and Kubernetes-style probe thinking.

Health is built from contributors. A datasource health contributor can report database connectivity. Disk space and other infrastructure indicators can contribute their own statuses. If you create custom health indicators in Boot 4, use the current health contributor packages from the Boot docs.

Metrics provide numerical signals over time: request counts, latencies, JVM memory, datasource pool activity, and more. Micrometer is the metrics facade used across the Spring ecosystem. For traces and exporting signals, Boot 4 adds a clearer OpenTelemetry starter path for OTLP-style observability.

Do not expose every Actuator endpoint publicly. A common production pattern is to expose health probes to the platform, metrics to monitoring infrastructure, and sensitive endpoints only behind internal access controls or not at all.

This lesson connects development to operations. A service is not production-ready only because the API works locally; it also needs to communicate its runtime health and behavior to the environment around it.

## Example
```properties
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.probes.enabled=true
management.health.livenessstate.enabled=true
management.health.readinessstate.enabled=true
```

## Common Mistakes
- Exposing all Actuator endpoints to the public internet.
- Treating liveness and readiness as the same signal.
- Ignoring metrics until after a production incident.
- Writing custom health code against outdated Boot packages.

## Practice
- Add Actuator and expose only `health`, `info`, and `metrics` locally.
- Visit the health endpoint and identify liveness/readiness information.
- Write a short policy for which Actuator endpoints should be public, internal, or disabled.

## Continuity
- Previous lesson: `Lesson 19: Build Executable Jars and Container-friendly Artifacts`
- Next lesson: `Lesson 21: Prepare Spring Boot 4.x for Deployment and Migration`

## Key Takeaway
- Boot 4 Actuator turns runtime health, probes, metrics, and observability into first-class deployment concerns.

## Official References
- https://docs.spring.io/spring-boot/reference/actuator/endpoints.html
- https://docs.spring.io/spring-boot/reference/actuator/metrics.html
- https://docs.spring.io/spring-boot/reference/actuator/tracing.html
