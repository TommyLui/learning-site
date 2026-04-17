---
title: "第 19 課：建置並封裝應用程式"
lesson: 19
slug: "lesson-19"
summary: "只有當後端能在 IDE 之外被可靠地建置與執行時，它才真正有用。"
---

# 第 19 課：建置並封裝應用程式

只有當後端能在 IDE 之外被可靠地建置與執行時，它才真正有用。

## What You Will Learn
- 理解如何把 Spring Boot 應用程式封裝成可執行的成品。
- 看見建置流程如何支援跨機器與跨環境的可重複交付。
- 驗證為什麼可執行 jar 是 Spring Boot 如此常見的封裝目標。
- 認識為什麼對 Docker 友善的封裝與分層映像，在現代交付流程中很重要。

## Why This Matters
- 只有當後端能在 IDE 之外被可靠地建置與執行時，它才真正有用。
- 可重複的封裝，對 CI、部署與協作來說都至關重要。
- 執行封裝後的成品，能證明應用程式在單一本機開發環境之外仍能存活。

## Main Ideas
- 建置檔定義了應用程式如何被編譯與封裝。
- 可執行 jar 能簡化許多部署工作流程。
- 成功的建置屬於應用程式品質的一部分，而不是事後才想到的事情。

## Lesson Notes
開發通常始於 IDE 裡，但正式系統並不住在那裡。到了某個階段，應用程式必須變成另一台機器、流程管線或執行環境能穩定執行的真正成品。封裝，就是讓這件事成真的步驟。

在 Spring Boot 中，最常見的結果是可執行 jar。這個 jar 會把應用程式程式碼與執行所需的相依套件打包在一起，讓你能用 `java -jar` 直接啟動。這也是 Boot 為什麼在現代後端開發中如此務實的原因之一。

建置檔在這裡扮演核心角色。它控制相依套件解析、plugin 行為、Java 版本目標，以及封裝任務。當建置過程乾淨且可重複，團隊其他成員才會相信這個應用程式能被一致地編譯與執行。

這也是本機便利結束、營運紀律開始的地方。應用程式不只要能在某位開發者的 IDE 裡執行。它也應該能從命令列建置、正確封裝，並在乾淨環境中由那個封裝啟動。

執行封裝後的成品是一個重要的驗證步驟，因為它會暴露你在 IDE 裡不容易察覺的假設。遺漏的資源、錯誤的 profile，或與路徑相關的問題，往往只有在應用程式以更接近真實情境的方式啟動時才會浮現。

封裝也直接連到部署自動化。CI 流程與託管環境通常不在乎你在開發時如何啟動應用程式；它們在乎的是建置命令是否成功，並產出穩定的輸出。在現代 Spring Boot 工作流裡，這個輸出之後也可能被拿去建立 Docker image 或分層容器建置，而不只是手動複製 jar。

因此，這一課把焦點從寫程式轉向交付軟體。被封裝好的應用程式不只更容易在其他地方執行，也代表這個專案正變得可攜且在營運上更成熟。

## Example
```bash
# Build the project
./mvnw clean package

# Run the packaged application
java -jar target/learning-api-0.0.1-SNAPSHOT.jar
```

## Common Mistakes
- 只在 IDE 裡驗證應用程式。
- 建置後沒有測試封裝好的成品。
- 忽略跨機器或跨環境的建置可重現性。

## Practice
- 將你的專案封裝成 jar，並從命令列執行它。
- 描述執行 jar 與使用 IDE 啟動器時，有哪些差異。
- 寫下為什麼封裝對 CI 與部署很重要。
- 描述一個即使你目前還是先學 executable jar，也仍然值得理解分層 container image 的原因。

## Continuity
- 上一課：`第 18 課：Session、JWT 與 Resource Server 基礎`
- 下一課：`第 20 課：使用 Actuator 進行健康檢查與監控`

## Key Takeaway
- 只有當後端能在 IDE 之外被可靠地建置與執行時，它才真正有用。

## Official References
- https://docs.spring.io/spring-boot/reference/packaging/index.html
- https://docs.spring.io/spring-boot/reference/packaging/container-images/index.html
