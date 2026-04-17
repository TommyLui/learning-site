---
title: "第 15 課：Spring Boot 應用程式中的常見除錯模式"
lesson: 15
slug: "lesson-15"
summary: "除錯是後端開發的日常技能，而 Spring Boot 應用程式常以可辨識的模式發生問題。"
---

# 第 15 課：Spring Boot 應用程式中的常見除錯模式

除錯是後端開發的日常技能，而 Spring Boot 應用程式常以可辨識的模式發生問題。

## What You Will Learn
- 建立一套可重複使用的除錯方法，來處理啟動、設定與請求流程問題。
- 辨認常見的 Spring Boot 失敗類別，並知道應該先檢查哪裡。
- 使用日誌、較小的重現案例，以及分層意識來更有效率地除錯。

## Why This Matters
- 除錯是後端開發的日常技能，而 Spring Boot 應用程式常以可辨識的模式發生問題。
- 有方法的工作流程，比隨機試錯更快也更可靠。
- 越早找出失敗的是哪一層，就越容易修正真正原因。

## Main Ideas
- 大多數失敗都屬於某一層：啟動、Web、持久化、安全性或設定。
- 如果你仔細閱讀，日誌通常會揭露第一個有用的症狀。
- 把問題縮小成較小且可重現的案例，是最有效的除錯動作之一。

## Lesson Notes
Spring Boot 應用程式在除錯時容易讓人感到有壓力，因為啟動與請求處理期間會同時發生很多事情。一個請求可能牽涉到設定載入、bean 接線、驗證、service 邏輯、持久化與安全性。關鍵在於不要把每個問題都當成一個巨大的謎團。

一個很有用的第一個問題其實很簡單：失敗發生在哪裡？如果應用程式根本無法啟動，就聚焦在啟動日誌、相依條件與設定值。如果它能啟動，但某個 endpoint 失敗，那問題更可能出在請求映射、序列化、service 邏輯或持久化行為。

日誌通常是最快讓情況變清楚的路徑。Spring Boot 的啟動輸出可以揭露遺漏的 bean、連接埠衝突、無效的 datasource 設定與自動設定條件。執行期日誌與 stack trace 則能精確指出請求失敗的位置。

另一項重要技能，是閱讀第一個真正有意義的錯誤，而不是最後一行看得到的訊息。很長的 stack trace 往往會在主要原因之後，帶出許多次要失敗。好的除錯，代表你能找到最早出現且具體說明問題的訊息。

簡化也是很強的技巧。停用不相關功能、減少請求 payload、隔離單一 controller，或在較小的測試中重現問題。失敗案例越小，就越容易看出 bug 背後真正的運作機制。

理解應用程式的分層，也能提升除錯效率。如果缺少 bean，就去思考掃描與設定。如果某個 endpoint 回傳錯誤的 JSON，就去思考 controller 映射與序列化。如果寫入失敗，就去思考交易、entity 映射與資料庫限制。

除錯的目標不只是解決眼前這個問題，而是建立一座模式資料庫。隨著時間累積，啟動失敗、安全性不匹配、驗證問題與資料庫錯誤，會開始變得熟悉，而不再像是隨機事件。

## Example
```properties
logging.level.org.springframework=INFO
logging.level.com.tommy.learningapi=DEBUG
logging.level.org.hibernate.SQL=DEBUG
```

## Common Mistakes
- 一次改太多東西，結果失去對原因的掌握。
- 忽略日誌中第一個有用的例外。
- 還沒先檢查自己的設定，就假設框架壞掉了。

## Practice
- 故意把一個 datasource 屬性設錯，並仔細閱讀啟動錯誤。
- 為你的套件開啟 debug 日誌，並檢查一次請求流程。
- 寫下你會如何把 bug 定位到 Web 層，而不是持久化層。

## Continuity
- 上一課：`第 14 課：為 Controller 與 Repository 撰寫整合測試`
- 下一課：`第 16 課：Spring Security 6 基礎`

## Key Takeaway
- 除錯是後端開發的日常技能，而 Spring Boot 應用程式常以可辨識的模式發生問題。

## Official References
- https://docs.spring.io/spring-boot/reference/features/logging.html
- https://docs.spring.io/spring-boot/reference/features/spring-application.html#features.spring-application.startup-failure
