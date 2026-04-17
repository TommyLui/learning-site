---
title: "第 20 課：使用 Actuator 進行健康檢查與監控"
lesson: 20
slug: "lesson-20"
summary: "正式環境中的應用程式不只需要功能，還需要可觀測性。"
---

# 第 20 課：使用 Actuator 進行健康檢查與監控

正式環境中的應用程式不只需要功能，還需要可觀測性。

## What You Will Learn
- 使用 Spring Boot Actuator 來暴露應用程式的營運資訊。
- 理解 health 與 info endpoint 的用途。
- 辨認為什麼可觀測性應該在部署日到來前，就成為應用程式的一部分。

## Why This Matters
- 正式環境中的應用程式不只需要功能，還需要可觀測性。
- 健康狀態與指標資訊能幫助操作人員與系統判斷應用程式是否運作良好。
- 營運洞察能把應用程式從一段程式碼，轉變成可管理的服務。

## Main Ideas
- Actuator 會暴露面向正式環境的 endpoint。
- 健康檢查是部署與編排工作流程中的核心。
- 可觀測性必須與安全性與暴露範圍控制取得平衡。

## Lesson Notes
一個後端服務，不會因為它能處理請求就算完成。部署之後，人與系統都需要知道它是否健康、正在做什麼，以及應該如何監控它。Spring Boot Actuator 的存在，正是為了支援這樣的營運視角。

Actuator 會新增一些 endpoint，暴露像是應用程式健康狀態、建置資訊、指標、映射與環境細節等資訊。這些 endpoint 對開發者、操作人員，以及需要評估應用程式是否正常運作的部署平台都很有用。

其中 health endpoint 特別重要，因為它能快速傳達應用程式是否存活，以及依設定而定，像資料庫這類相依系統是否也可用。這會影響負載平衡、重新啟動行為與部署就緒檢查。

可觀測性不只是 dashboard 或進階監控堆疊。它始於以受控方式讓有用的應用程式狀態變得可見。也因此，就算是小型 Spring Boot 應用程式，也能從 Actuator 獲益，因為它訓練你把思考範圍延伸到功能程式碼之外。

同時，營運 endpoint 也不該被草率地暴露出去。其中一些會揭露敏感的實作細節。這就是為什麼暴露設定與安全規則很重要。可見性應該是有意識的，而不是意外產生的。

良好的做法，是及早決定哪些營運訊號有價值，以及誰應該被允許看到它們。隨著應用程式增加更多 endpoint、基礎設施與部署複雜度，這個決定會變得更加重要。

透過在這裡學習 Actuator，你會開始把應用程式視為需要被理解與維護的長期運行服務，而不只是一些 controller method 的集合。

## Example
```properties
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.show-details=always
management.info.env.enabled=true
```

## Common Mistakes
- 對外公開太多營運 endpoint。
- 直到正式環境出現問題時，才把可觀測性當回事。
- 在規劃部署行為時忽略健康檢查。

## Practice
- 啟用 health endpoint 並檢查它的回應。
- 選擇你會內部暴露哪些 Actuator endpoint，以及哪些可以公開。
- 解釋健康檢查如何幫助部署平台做決策。

## Continuity
- 上一課：`第 19 課：建置並封裝應用程式`
- 下一課：`第 21 課：為部署做好 Spring Boot 4.x 準備`

## Key Takeaway
- 正式環境中的應用程式不只需要功能，還需要可觀測性。

## Official References
- https://docs.spring.io/spring-boot/reference/actuator/index.html
- https://spring.io/projects/spring-boot
