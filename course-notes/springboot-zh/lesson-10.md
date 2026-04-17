---
title: "第 10 課：將 Spring Boot 4.x 連接到 MySQL"
lesson: 10
slug: "lesson-10"
summary: "持久化資料是大多數後端系統的核心部分，而正確的資料庫設定就是基礎。"
---

# 第 10 課：將 Spring Boot 4.x 連接到 MySQL

持久化資料是大多數後端系統的核心部分，而正確的資料庫設定就是基礎。

## What You Will Learn
- 設定 Spring Boot 應用程式以連接 MySQL 資料庫。
- 了解資料來源屬性與資料庫驅動程式所扮演的角色。
- 明白為什麼不同環境的資料庫設定應該放在原始碼之外。

## Why This Matters
- 持久化資料是大多數後端系統的核心部分，而正確的資料庫設定就是基礎。
- 在 repository、entity 與 CRUD 流程像真正的應用程式程式碼那樣運作之前，必須先有可用的 datasource。
- 資料庫設定是部署紀律開始變得重要的最早環節之一。

## Main Ideas
- Datasource 設定決定應用程式如何連線到資料庫。
- MySQL 驅動程式與 JPA 依賴會和 Boot 自動設定一起運作。
- 資料庫憑證與環境細節應該放在設定中，而不是商業邏輯裡。

## Lesson Notes
許多早期的 Spring Boot 範例會使用記憶體中的資料，或直接回傳靜態值，因為這樣可以讓一開始的學習更簡單。不過最終，後端應用程式必須把資訊持久化到某個可靠的地方。在這門課中，這個持久層就是 MySQL。

把 Spring Boot 連接到 MySQL，第一步是依賴套件。應用程式需要一個知道如何與 MySQL 溝通的驅動程式；如果你打算透過 entity 與 repository 來操作資料，還需要像 Spring Data JPA 這樣的資料存取技術棧。

當依賴存在之後，設定就成了關鍵步驟。Spring Boot 需要知道資料庫 URL、使用者名稱、密碼，以及很多情況下會影響 schema 處理與 SQL 行為的 JPA 或 Hibernate 相關設定。

這些值絕對不應該被埋在 Java 類別裡。它們是環境細節，不是商業概念。把它們視為設定，能讓應用程式更安全，也更容易在本機開發、測試與部署目標之間移動。

成功建立資料庫連線，不只是技術上的勾選項。它會改變你理解應用程式的方式。這個 app 不再只是回傳回應的 Web 伺服器；它開始成為一個把進來的請求與持久狀態協調起來的系統。

也值得注意的是，datasource 問題通常也是啟動問題。錯誤的帳號密碼、錯誤的主機，或不可用的資料庫，通常會在應用程式開始處理請求之前就浮現。因此，在持久層剛開始建立時，設定正確性特別重要。

一旦 MySQL 正確連接上，後面的持久化故事才真正開始。entity、repository、transaction，以及 CRUD 行為都建立在這個基礎之上。

## Example
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/learning_db
spring.datasource.username=root
spring.datasource.password=secret
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

## Common Mistakes
- 把資料庫憑證直接寫進 Java 原始碼檔案。
- 忘記加入 MySQL 驅動程式依賴。
- 每個環境都共用同一份資料庫設定，卻沒有使用 profiles 或覆寫機制。

## Practice
- 設定本機 MySQL datasource，並確認應用程式能用它成功啟動。
- 寫下每個 datasource 屬性各自控制什麼。
- 說明為什麼資料庫設定應該外部化，而不是硬編碼。

## Continuity
- 上一課：`第 9 課：驗證與全域例外處理`
- 下一課：`第 11 課：Entity、Repository 與 JPA 基礎`

## Key Takeaway
- 持久化資料是大多數後端系統的核心部分，而正確的資料庫設定就是基礎。

## Official References
- https://docs.spring.io/spring-boot/reference/data/index.html
- https://docs.spring.io/spring-boot/reference/data/sql.html
