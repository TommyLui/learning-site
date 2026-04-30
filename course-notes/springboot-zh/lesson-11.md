---
title: "第 11 課：Entities、Repositories、Transactions 與 JPA 基礎"
lesson: 11
slug: "lesson-11"
summary: "Entities、repositories 與 transactions 組成許多 Boot 4 relational applications 的核心 persistence model。"
---

# 第 11 課：Entities、Repositories、Transactions 與 JPA 基礎

Entities、repositories 與 transactions 組成許多 Boot 4 relational applications 的核心 persistence model。

## 這一課會學到什麼
- 使用 Jakarta Persistence annotations 把 Java classes map 到 database tables。
- 使用 Spring Data repositories 讀寫 entities。
- 理解 transactions 為什麼定義安全 persistence changes 的 boundary。

## 為什麼重要
- Persistence code 需要結構，避免 database access 洩漏到每個 controller。
- Boot 4 延續 Jakarta Persistence line，所以 examples 應使用 `jakarta.persistence.*` imports。
- Transactions 會保護 multi-step data changes 不會在失敗時只完成一半。

## 主要觀念
- Entities 表示 persistent data，不是每個 API response shape。
- Repositories 提供聚焦的 persistence operations access。
- Service methods 通常是定義 transaction boundaries 的好地方。

## 課程筆記
Datasource 能運作後，下一步是 modeling persistent data。JPA entities 描述 Java objects 如何對應 database tables。Boot 4 examples 中，imports 應使用 `jakarta.persistence`，例如 `jakarta.persistence.Entity`、`Id` 與 `GeneratedValue`。

Entities 不等於 DTOs。Entity 受 persistence needs 影響：identifiers、relationships、table constraints 與 lifecycle behavior。Response DTO 受 API contract 影響。分離這些 models 可以避免意外暴露 persistence details。

Spring Data repositories 減少重複 persistence code。Extending repository interface 會提供 save、find by id 與 delete 等 common operations。當命名仍清楚時，你也可以加入 query methods。複雜 queries 仍可能需要 explicit query definitions 或更專門的 persistence design。

Transactions 在多個 persistence actions 必須一起成功或失敗時很重要。建立 parent record 與多個 child records 的 service method，不應讓 database 留在半寫入狀態。在 Spring 中，`@Transactional` 常放在定義 unit of work 的 service-layer methods 上。

Hibernate 7 是 Boot 4-managed ORM implementation，支撐許多這些 behaviors。初學者 lesson 不需要學完每個 Hibernate feature，但要知道 lazy loading、dirty checking、SQL generation 與 entity state 是 ORM concerns，而不是神奇 repository behavior。

最好的習慣是把 persistence 放在 service boundary 後面。Controllers 請 services 做 application work；services 協調 rules 與 transactions；repositories 處理 database access。

## 範例
```java
package com.tommy.learningapi.notes;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Entity
public class Note {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String content;
}

interface NoteRepository extends JpaRepository<Note, Long> {}

@Service
class NoteService {
    private final NoteRepository repository;

    NoteService(NoteRepository repository) {
        this.repository = repository;
    }

    @Transactional
    Note save(Note note) {
        return repository.save(note);
    }
}
```

## 常見錯誤
- 在 Boot 4 project 中 import `javax.persistence.*`。
- 每個 API endpoint 都直接回傳 entities。
- 隨機把 transaction boundaries 放在 controllers 上。
- 以為 repositories 讓你不必思考 database constraints 與 relationships。

## 練習
- 建立一個含 id、title 與 content field 的 entity。
- 為那個 entity 建立 repository interface。
- 寫下哪些 service methods 應該 transactional，以及原因。

## 延續閱讀
- 上一課：`第 10 課：把 Spring Boot 4.x 接上 MySQL 與 Hibernate 7`
- 下一課：`第 12 課：用 Service 與 Repository Layers 建立 CRUD APIs`

## 課後重點
- Boot 4 persistence 在 entities、repositories 與 transactions 有清楚責任時最容易理解。

## 官方參考資料
- https://docs.spring.io/spring-data/jpa/reference/jpa/getting-started.html
- https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative.html
- https://jakarta.ee/specifications/persistence/
