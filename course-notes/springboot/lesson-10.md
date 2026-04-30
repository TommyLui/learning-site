---
title: "Lesson 10: Connect Spring Boot 4.x to MySQL and Hibernate 7"
lesson: 10
slug: "lesson-10"
summary: "Persistent data becomes realistic when a Boot 4 application connects to MySQL through Spring Data JPA and Hibernate 7."
---

# Lesson 10: Connect Spring Boot 4.x to MySQL and Hibernate 7

Persistent data becomes realistic when a Boot 4 application connects to MySQL through Spring Data JPA and Hibernate 7.

## What You Will Learn
- Configure a Boot 4 application to connect to MySQL.
- Understand the roles of the MySQL driver, datasource properties, Spring Data JPA, and Hibernate 7.
- Keep database credentials and environment-specific settings outside source code.

## Why This Matters
- Most backend systems need durable data, and datasource setup is the foundation for repositories and CRUD APIs.
- Boot 4 manages a newer persistence stack, including Jakarta Persistence 3.2 and Hibernate ORM 7.
- Database configuration is one of the first places where local, test, and production settings diverge.

## Main Ideas
- Datasource properties tell the app how to reach the database.
- Spring Data JPA provides repository abstractions, while Hibernate implements the ORM behavior.
- Schema management shortcuts are useful locally but should not replace migrations in production.

## Lesson Notes
Early API examples often use fixed in-memory values because that keeps the first lessons focused. Real services eventually need durable state. In this course, MySQL is the relational database used to teach that transition.

The dependency set has several parts. The MySQL driver knows how to connect to MySQL. Spring Data JPA provides repository abstractions and integration with Spring transactions. Hibernate 7 is the Boot 4-managed ORM implementation that maps entities to relational tables through Jakarta Persistence annotations.

Configuration is the next step. The application needs a JDBC URL, username, password, and JPA-related settings. These details should be externalized through properties, profiles, environment variables, or deployment configuration. They should not be hidden in Java source code.

Boot auto-configuration creates a datasource when it sees the database driver and datasource properties. It also configures JPA infrastructure when the JPA starter is present. If the database is unavailable or credentials are wrong, the failure usually appears at startup, before the app handles requests.

For local learning, `spring.jpa.hibernate.ddl-auto=update` can help you see tables appear quickly. Treat it as a convenience, not a production migration strategy. Real teams usually use a migration tool such as Flyway or Liquibase so schema changes are reviewed, ordered, and repeatable.

Once MySQL is connected, later lessons can map entities, write repositories, and build CRUD APIs on a real persistence foundation.

## Example
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/learning_db
spring.datasource.username=learning_user
spring.datasource.password=${MYSQL_PASSWORD}

# Local development convenience only; production usually prefers migrations.
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

## Common Mistakes
- Putting database credentials directly into Java source files or committed config.
- Forgetting the MySQL driver dependency.
- Assuming local schema auto-update is a production migration plan.
- Debugging repositories before confirming the datasource starts successfully.

## Practice
- Configure a local MySQL datasource and confirm the Boot 4 app starts.
- Identify which dependency provides the MySQL driver and which provides JPA support.
- Explain why database credentials should be supplied by environment-specific configuration.

## Continuity
- Previous lesson: `Lesson 9: Validation and Global Exception Handling`
- Next lesson: `Lesson 11: Entities, Repositories, Transactions, and JPA Basics`

## Key Takeaway
- Boot 4 persistence starts with a correctly configured datasource and a clear understanding of Spring Data JPA plus Hibernate 7.

## Official References
- https://docs.spring.io/spring-boot/reference/data/sql.html
- https://docs.spring.io/spring-boot/reference/data/spring-data.html
- https://docs.spring.io/spring-boot/appendix/dependency-versions/properties.html
