---
title: "第 5 課：設定檔與 Profiles"
lesson: 5
slug: "lesson-5"
summary: "真實應用程式需要針對本機開發、測試與正式環境使用不同的設定。"
---

# 第 5 課：設定檔與 Profiles

真實應用程式需要針對本機開發、測試與正式環境使用不同的設定。

## 這一課會學到什麼
- 了解 Spring Boot 如何從檔案、環境變數與執行期輸入讀取設定。
- 理解 profiles 如何把開發、測試與正式環境的行為分開。
- 看見為什麼把設定外部化，會比在 Java 類別中硬編碼營運值更安全。

## 為什麼重要
- 真實應用程式需要針對本機開發、測試與正式環境使用不同的設定。
- 良好的設定設計，能讓同一份程式碼在多個環境中持續可用。
- Profiles 與外部化設定能降低部署風險，並提升可維護性。

## 主要觀念
- `application.properties` 或 `application.yml` 是預設的設定進入點。
- Profiles 能在不複製整個應用程式的情況下，啟用環境專屬設定。
- 設定應盡可能放在商業邏輯之外。

## 課程筆記
設定通常是專案從玩具範例轉變為真實應用程式後，最先感受到差異的領域之一。一開始把連接埠、憑證、檔案路徑或功能開關硬寫在程式裡，可能看起來很方便；但只要應用程式不只在單一環境執行，這些做法很快就會變得麻煩。

Spring Boot 透過把設定外部化來解決這個問題。你不需要把環境專屬的值直接嵌入 Java 程式碼，而是可以把它們放進 `application.properties`、`application.yml`、環境變數、system properties 或命令列參數中。

預設設定檔通常會放在 `src/main/resources`。那個檔案很適合放穩定的預設值，例如應用程式名稱、日誌等級，或本機開發設定。一旦不同環境之間開始出現差異，profiles 就會變得重要。

Profiles 讓你可以用近似這樣的方式思考：開發環境用這組設定，正式環境用另一組設定。你可以在 `dev` 連到本機資料庫，在 `test` 開啟更多日誌，在 `prod` 依賴外部 secrets。應用程式程式碼保持不變，但執行期行為會依照啟用的 profile 做調整。

這個模式很重要，因為後端應用程式幾乎不會只在一個地方執行。它會在本機開發、在 CI 中測試、部署到 staging，最後升級到 production。若沒有清楚的設定策略，每次在環境之間移動都會變得高風險而且仰賴手動操作。

Spring Boot 也會依照優先順序，合併來自多個來源的設定。這代表環境變數中的值可以覆蓋 `application.properties` 的值，而命令列參數又可以覆蓋前兩者。理解這個層級關係，有助於你解釋為什麼應用程式有時候會出現和預期不同的行為。

另一個實務重點，是把營運層面的關注和商業邏輯分開。某個 service 不該知道應用程式跑在 8080 還是 8081 連接埠，也不該硬編碼資料庫主機或 API secrets。那些細節屬於設定，而不是領域邏輯。

如果你很早就養成這個習慣，之後的主題都會順很多。資料庫連線、安全性設定、Actuator 曝露範圍，以及部署調校，都建立在同一個基礎上：清楚、外部化，而且能感知環境的設定與 profiles。

## 範例
```properties
spring.application.name=learning-api
server.port=8081
spring.profiles.active=dev

# application-dev.properties
logging.level.com.tommy.learningapi=DEBUG
spring.datasource.url=jdbc:mysql://localhost:3306/learning_dev
```

## 常見錯誤
- 在 Java 類別裡硬編碼憑證或連接埠。
- 用一個巨大的設定檔處理所有環境。
- 當設定值衝突時，不理解是哪個設定來源覆蓋了另一個來源。

## 練習
- 建立 `application-dev.properties`，並覆蓋伺服器連接埠。
- 把一個硬編碼值移到設定中，並說明它為什麼應該放在那裡。
- 寫下三個應該在開發與正式環境之間不同的設定。

## 延續閱讀
- 上一課：`第 4 課：依賴注入與 Beans`
- 下一課：`第 6 課：Spring Boot 3.x 的自動設定`

## 課後重點
- 真實應用程式需要針對本機開發、測試與正式環境使用不同的設定。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/features/external-config.html
- https://docs.spring.io/spring-boot/reference/features/profiles.html
