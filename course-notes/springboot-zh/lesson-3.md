---
title: "第 3 課：理解專案結構與啟動流程"
lesson: 3
slug: "lesson-3"
summary: "對啟動流程與專案結構有清楚的心智模型，會讓之後像 controller、repository 與 configuration 這些主題更容易理解。"
---

# 第 3 課：理解專案結構與啟動流程

對啟動流程與專案結構有清楚的心智模型，會讓之後像 controller、repository 與 configuration 這些主題更容易理解。

## 這一課會學到什麼
- 理解 Spring Boot 專案中的主要資料夾，以及應用程式如何啟動。
- 說明 `@SpringBootApplication` 與 `SpringApplication.run(...)` 的角色。
- 看見 package 結構為什麼會影響 component scanning、bean discovery 與除錯。

## 為什麼重要
- 對啟動流程與專案結構有清楚的心智模型，會讓之後像 controller、repository 與 configuration 這些主題更容易理解。
- Spring Boot 中很多常見錯誤，都來自 package 擺放位置、設定載入方式，或對啟動流程的錯誤假設。
- 理解預設的專案形狀，能幫助你在擴充應用程式時，仍然維持可讀性。

## 主要觀念
- `src/main/java`、`src/main/resources` 與 `src/test/java` 各自有不同的角色。
- `@SpringBootApplication` 定義了主要進入點，並啟用 Boot 的核心行為。
- `SpringApplication.run(...)` 會觸發啟動流程、設定載入、bean 建立與伺服器啟動。

## 課程筆記
用 Spring Initializr 產生專案之後，下一個有價值的步驟，不是立刻再多寫幾行程式，而是先理解你手上這個程式碼庫的形狀。Spring Boot 專案遵循一種結構：它對初學者來說夠簡單，但也足夠強大，能支撐真實應用程式的成長。

建置檔是第一個重要部分。在 Maven 專案裡，通常會是 `pom.xml`；在 Gradle 專案裡，則會是建置 script。這個檔案決定了相依套件、plugin、Java 版本設定與封裝行為。每當你加入新的 starter，或改變建置流程時，你都在動到這個專案的骨幹。

在 `src/main/java` 裡，你會放主要的應用程式程式碼。controller、service、repository、configuration class 與 domain model，通常都會在這裡依照 package 組織起來。即使專案還很小，這個資料夾也代表了後端長期的結構。

在 `src/main/resources` 裡，你會放像 `application.properties` 或 `application.yml` 這樣的應用程式設定。當你加入資料庫設定、profile、自訂 port 或 feature flag 後，這個資料夾會變得越來越重要。越早把設定當成一級公民來對待，之後就越能少掉許多問題。

在 `src/test/java` 裡，你會放測試。Spring Boot 從一開始就建立了這個測試結構，因為測試不該等到最後才補上，它本來就是應用程式設計的一部分。即使你的第一個專案只有幾個測試，這個結構仍然提醒你：驗證從第一天開始就屬於這個專案。

產生出的專案中，最重要的單一 class 是主要應用程式 class。它包含 Java 的 `main` method，也就是 JVM 的啟動點；同時它會呼叫 `SpringApplication.run(...)`，這就是 Spring Boot 啟動自己整個流程的地方。

那個啟動流程不只是執行一個 method。它會載入設定、判斷建立的是哪種類型的應用程式、評估自動設定條件、掃描 component、建立 bean，並在它是 Web 應用程式時啟動內嵌伺服器。這就是為什麼啟動階段看起來很豐富：許多 framework 的決策都在這裡一次完成。

`@SpringBootApplication` 很重要，因為它把多個責任整合成一個清楚的進入點。它把這個 class 標記成設定來源、啟用自動設定，並打開 component scanning。正是這種組合，讓產生出的應用程式既精簡又強大。

package 的擺放位置在這裡也變得重要。Spring Boot 通常會從主要應用程式 class 所在的 package 往下掃描。如果你的 controller 或 service 在那棵樹之外，Spring 可能永遠不會自動發現它。初學者常把這種情況感受到為神祕的 missing bean 問題，但其實它往往只是 package 結構出了問題。

這一課也引入了一個觀念：結構與啟動是連在一起的。你不只是在學檔案該放哪裡；你是在學 Spring Boot 如何在執行時找到並組裝那些檔案。一旦你理解了這個連結，之後關於 controller、依賴注入與設定的課題，就不會再那麼像魔法。

## 範例
```java
@SpringBootApplication
public class LearningApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(LearningApiApplication.class, args);
    }
}
```

## 常見錯誤
- 不知道啟動 class 到底在做什麼。
- 把 Spring component 放在被掃描 package 結構之外。
- 忽略 `src/main/resources` 的角色，把設定分散在其他地方。
- 把專案資料夾配置當成外觀問題，而不是架構問題。

## 練習
- 在你產生出的專案中找到主要應用程式 class，並解釋每一行在做什麼。
- 畫出一張資料夾地圖，標示 `src/main/java`、`src/main/resources` 與 `src/test/java`。
- 在一個小型練習專案裡，把某個 component 移到主要 package 樹之外，並觀察會發生什麼變化。

## 延續閱讀
- 上一課：`第 2 課：使用 Spring Initializr 建立專案`
- 下一課：`第 4 課：依賴注入與 Bean`

## 課後重點
- 對啟動流程與專案結構有清楚的心智模型，會讓之後像 controller、repository 與 configuration 這些主題更容易理解。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/features/spring-application.html
- https://docs.spring.io/spring-boot/reference/using/using-the-springbootapplication-annotation.html
- https://docs.spring.io/spring-boot/reference/using/structuring-your-code.html
