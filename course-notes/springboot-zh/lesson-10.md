---
title: "第 10 課：把 Spring Boot 4.x 接上 MySQL 與 Hibernate 7"
lesson: 10
slug: "lesson-10"
summary: "當 Boot 4 application 透過 Spring Data JPA 與 Hibernate 7 接上 MySQL，資料持久化才開始變得真實。"
---

# 第 10 課：把 Spring Boot 4.x 接上 MySQL 與 Hibernate 7

當 Boot 4 application 透過 Spring Data JPA 與 Hibernate 7 接上 MySQL，資料持久化才開始變得真實。

## 這一課會學到什麼
- 設定 Boot 4 application 連接 MySQL。
- 理解 MySQL driver、datasource properties、Spring Data JPA 與 Hibernate 7 的角色。
- 讓 database credentials 與 environment-specific settings 保持在 source code 外。

## 為什麼重要
- 多數 backend systems 都需要 durable data，而 datasource setup 是 repositories 與 CRUD APIs 的基礎。
- Boot 4 管理較新的 persistence stack，包含 Jakarta Persistence 3.2 與 Hibernate ORM 7。
- Database configuration 是 local、test 與 production settings 最早分歧的地方之一。

## 主要觀念
- Datasource properties 告訴 app 如何連到 database。
- Spring Data JPA 提供 repository abstractions，Hibernate 實作 ORM behavior。
- Schema management shortcuts 在 local 很方便，但不應取代 production migrations。

## 課程筆記
早期 API 範例常用固定的 in-memory values，因為那能讓前幾課保持聚焦。真實 services 最終需要 durable state。在這套課中，MySQL 是用來教這個轉換的 relational database。

Dependency set 有幾個部分。MySQL driver 知道如何連接 MySQL。Spring Data JPA 提供 repository abstractions 與 Spring transactions integration。Hibernate 7 是 Boot 4-managed ORM implementation，透過 Jakarta Persistence annotations 把 entities map 到 relational tables。

下一步是 configuration。Application 需要 JDBC URL、username、password 與 JPA-related settings。這些 details 應透過 properties、profiles、environment variables 或 deployment configuration externalized，不應藏在 Java source code 中。

當 Boot auto-configuration 看到 database driver 與 datasource properties，就會建立 datasource。當 JPA starter 存在時，也會設定 JPA infrastructure。如果 database 無法連線或 credentials 錯誤，failure 通常會在 startup 階段出現，早於 app 處理 requests。

在 local learning 中，`spring.jpa.hibernate.ddl-auto=update` 可以幫你快速看到 tables 出現。把它視為 convenience，不是 production migration strategy。真實團隊通常使用 Flyway 或 Liquibase 這類 migration tool，讓 schema changes 可審查、有順序且可重複。

MySQL 正確連接後，後續 lessons 就能在真實 persistence foundation 上 mapping entities、撰寫 repositories 與建立 CRUD APIs。

## 範例
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/learning_db
spring.datasource.username=learning_user
spring.datasource.password=${MYSQL_PASSWORD}

# Local development convenience only; production usually prefers migrations.
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

## 常見錯誤
- 把 database credentials 直接放進 Java source files 或 committed config。
- 忘記 MySQL driver dependency。
- 把 local schema auto-update 當成 production migration plan。
- 在確認 datasource 成功啟動前就開始 debug repositories。

## 練習
- 設定 local MySQL datasource，確認 Boot 4 app 能啟動。
- 找出哪個 dependency 提供 MySQL driver，哪個提供 JPA support。
- 說明為什麼 database credentials 應由 environment-specific configuration 提供。

## 延續閱讀
- 上一課：`第 9 課：Validation 與 Global Exception Handling`
- 下一課：`第 11 課：Entities、Repositories、Transactions 與 JPA 基礎`

## 課後重點
- Boot 4 persistence 從正確設定 datasource，以及清楚理解 Spring Data JPA 加 Hibernate 7 開始。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/data/sql.html
- https://docs.spring.io/spring-boot/reference/data/spring-data.html
- https://docs.spring.io/spring-boot/appendix/dependency-versions/properties.html
