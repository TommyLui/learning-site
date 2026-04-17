---
title: "第 11 課：Entity、Repository 與 JPA 基礎"
lesson: 11
slug: "lesson-11"
summary: "這是把程式碼中的領域物件與資料庫中的資料列連接起來的橋樑。"
---

# 第 11 課：Entity、Repository 與 JPA 基礎

這是把程式碼中的領域物件與資料庫中的資料列連接起來的橋樑。

## What You Will Learn
- 使用 JPA entity 建模資料庫資料表。
- 使用 repository 介面以更少的樣板程式碼讀寫資料。
- 了解物件關聯對映為什麼會改變後端程式碼的結構方式。

## Why This Matters
- 這是把程式碼中的領域物件與資料庫中的資料列連接起來的橋樑。
- Entity 與 repository 能讓你從單純的連線設定，進一步走向有意義的持久化設計。
- JPA 會引入一些模式與限制，影響資料在程式碼中的表達方式。

## Main Ideas
- Entity 代表可持久化的領域物件。
- Repository 在 JPA 之上提供更高層次的持久化 API。
- ORM 雖然便利，但仍然需要仔細的資料建模與清楚的邊界設計。

## Lesson Notes
當 datasource 可以正常運作後，下一步就是為應用程式建立領域模型。JPA entity 透過把資料庫中的資料列表示成 Java 物件來完成這件事。你不再從一開始就到處傳遞原始 SQL 字串，而是先用有型別的領域資料來思考。

Entity 不只是普通的類別。它參與持久化規則。它有身分識別，欄位會映射到資料庫欄位，而且會被持久層追蹤。這代表 entity 的設計會直接影響應用程式如何讀取、更新與儲存狀態。

識別欄位尤其重要。如果沒有正確定義 `@Id`，JPA 就不知道如何區分不同的紀錄。這也是為什麼身分識別在持久化中是核心概念，而不是單純的實作細節。

Repository 建立在 entity 之上，提供資料存取層。透過像 `JpaRepository` 這樣的介面，你可以取得 `save`、`findAll`、`findById`、`delete` 等操作，而不必手動實作所有標準樣板程式碼。

這非常有效率，但如果你把 repository 當成魔法盒，也很容易產生表層理解。便利性底下仍然是關聯式資料庫，而你的 entity 依然反映了命名、限制與關聯等設計決策。

一個很有用的習慣是持續問兩個問題：這個物件在領域中代表什麼？這個概念又是如何映射到底層資料表結構的？這個習慣能讓你的模型保持有意義，而不會把持久化變成純機械性的工作。

這一課也會為後續的複雜內容鋪路。一旦 entity 的基礎清楚了，CRUD API 與關聯映射就會更容易推理與掌握。

## Example
```java
package com.tommy.learningapi.notes;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

@Entity
@Table(name = "notes")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 2000)
    private String content;
}

public interface NoteRepository extends JpaRepository<Note, Long> {
    List<Note> findByTitleContainingIgnoreCase(String keyword);
}
```

## Common Mistakes
- 把 entity 當成單純的 DTO，忽略它的持久化行為。
- 忘記定義正確的識別欄位。
- 直接把商業邏輯塞進 repository 介面裡。

## Practice
- 建立一個包含 id 與兩個領域欄位的 entity。
- 為該 entity 建立一個 `JpaRepository`，並在 service 中呼叫 `findAll()`。
- 說明 entity 與請求 DTO 有什麼不同。

## Continuity
- 上一課：`第 10 課：將 Spring Boot 4.x 連接到 MySQL`
- 下一課：`第 12 課：用 Service 與 Repository 分層建立 CRUD API`

## Key Takeaway
- 這是把程式碼中的領域物件與資料庫中的資料列連接起來的橋樑。

## Official References
- https://docs.spring.io/spring-boot/reference/data/sql.html
- https://spring.io/projects/spring-data-jpa
