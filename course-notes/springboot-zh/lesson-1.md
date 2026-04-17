---
title: "第 1 課：什麼是 Spring Boot 3.x，以及它為什麼重要"
lesson: 1
slug: "lesson-1"
summary: "Spring Boot 移除了 Java 後端開發中大量的設定阻力，讓你能把重心放在 API 設計、資料存取、測試與部署上。"
---

# 第 1 課：什麼是 Spring Boot 3.x，以及它為什麼重要

Spring Boot 移除了 Java 後端開發中大量的設定阻力，讓你能把重心放在 API 設計、資料存取、測試與部署上。

## 這一課會學到什麼
- 理解 Spring Boot 3.x 是什麼、它解決哪些問題，以及為什麼它是很適合的後端學習路線。
- 說明 Spring Framework 與 Spring Boot 之間的關係。
- 認識自動設定、starter 與正式環境功能，如何改變開發體驗。

## 為什麼重要
- Spring Boot 移除了 Java 後端開發中大量的設定阻力，讓你能把重心放在 API 設計、資料存取、測試與部署上。
- 它提供了一條更貼近真實後端開發的學習路線，而不是只停留在零散的玩具範例。
- 它讓你有能力建立不只是能執行，還能被測試、設定與部署的應用程式。

## 主要觀念
- Spring Boot 是建立在 Spring Framework 之上，而不是取代它。
- 帶有明確偏好的預設值與自動設定，能減少重複性的設定工作。
- 像外部化設定與健康檢查工具這類正式環境功能，從一開始就很重要。

## 課程筆記
當人們第一次聽到 Spring Boot 時，常常會把它想成只是快速建立專案的捷徑。這個理解只對了一部分。Spring Boot 的確能讓你更快開始，但它更大的價值，在於它把 Spring 生態系變成更容易學習，也更容易在真實應用程式中使用的東西。

Spring Framework 本來就提供了很強大的基礎元件，用來處理依賴注入、Web 應用程式、資料存取、安全性、測試，以及許多其他面向。對初學者來說，困難在於這些元件同時出現時，會顯得龐大又分散。Spring Boot 透過把常見組合打包起來，並提供合理的預設值，來解決這個學習門檻。

一個很好的理解方式是：Spring Framework 提供的是引擎零件，而 Spring Boot 幫你把車子組裝成可以開的狀態。你依然能受益於 Spring 生態系的深度，但在學到有用內容之前，不需要手動把每一塊都接起來。

這也是為什麼「帶有偏好」這件事很重要。Spring Boot 會先替你做一些選擇。如果你加入 Web 相依套件，它會假設你在建立 Web 應用程式，並設定好對應的 Web stack。如果你加入資料相關相依套件，它會準備好持久化的基礎。這些預設值不只節省時間，也會教你結構。你會開始看見一個後端應用程式通常是如何被組織的。

隨著專案成長，這種組織方式會變得特別重要。後端服務不只是一些 class 的集合。它還需要設定、啟動流程、相依管理、日誌、測試、部署封裝，以及營運可觀測性。Spring Boot 支援所有這些面向，所以比起單純展示 framework 的範例，它更接近真實的應用程式開發。

Spring Boot 3.x 很值得學，因為它對齊目前主流的 Spring 生態系。它使用 Java 17+ 作為基線、全面轉向 Jakarta 命名空間，也反映了你在最新指南、範例與實際專案中會遇到的慣例。

同時，也要理解 Spring Boot 沒有做什麼。它不會讓你不需要理解架構，也不會消除你學習依賴注入、HTTP、JSON、SQL、驗證或安全性的必要。它做的事情，是降低設定成本，讓你能把更多時間花在理解那些真正重要的概念上。

對學習者來說，這樣的取捨很有力量。你不會被樣板程式碼困住，還沒碰到後端真正有意義的部分。你可以很快進入 controller、service、repository、測試與部署相關議題，並在一個已經能運作的應用程式裡逐步學習每個部分。

到這一課結束時，最核心的結論應該很簡單：Spring Boot 之所以重要，是因為它縮短了從 framework 設定到應用程式思維的距離。它讓你透過真實的專案結構來學習後端開發，而不是只靠抽象設定。

## 範例
```java
// Spring Boot applications start from a standard Java main method.
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

## 常見錯誤
- 誤以為 Spring Boot 與 Spring Framework 沒有關係。
- 只把它當成專案產生器，而不是應用程式開發平台。
- 使用自動設定，卻不試著理解它到底在設定什麼。
- 以為設定更快，就代表不再需要架構理解。

## 練習
- 用你自己的話說明 Spring Boot 為 Java 後端開發解決了哪些問題。
- 用一小段文字或圖示比較 Spring Framework 與 Spring Boot。
- 列出三個因為 Spring Boot 處理了常見設定，而變得更容易接觸到的後端開發部分。

## 延續閱讀
- 上一課：這是 Spring Boot 3.x 課程的起點。
- 下一課：`第 2 課：使用 Spring Initializr 建立專案`

## 課後重點
- Spring Boot 移除了 Java 後端開發中大量的設定阻力，讓你能把重心放在 API 設計、資料存取、測試與部署上。

## 官方參考資料
- https://spring.io/projects/spring-boot
- https://docs.spring.io/spring-boot/reference/getting-started/index.html
- https://github.com/spring-projects/spring-boot/releases
