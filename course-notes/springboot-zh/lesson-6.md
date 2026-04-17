---
title: "第 6 課：Spring Boot 3.x 的自動設定"
lesson: 6
slug: "lesson-6"
summary: "自動設定解釋了為什麼 Spring Boot 用起來很快，也說明了為什麼加入依賴後會改變應用程式行為。"
---

# 第 6 課：Spring Boot 3.x 的自動設定

自動設定解釋了為什麼 Spring Boot 用起來很快，也說明了為什麼加入依賴後會改變應用程式行為。

## What You Will Learn
- 理解 Spring Boot 如何決定要自動設定哪些 bean 與預設值。
- 看見依賴選擇如何影響應用程式啟動行為。
- 了解為什麼自訂設定可以覆蓋或補足 Boot 的預設值。

## Why This Matters
- 自動設定解釋了為什麼 Spring Boot 用起來很快，也說明了為什麼加入依賴後會改變應用程式行為。
- 它能幫助你理解在加入 starters 之後，啟動日誌、意料之外的 bean 與框架行為。
- 它讓 Spring Boot 不再像黑魔法，而是一組可閱讀的條件與預設值。

## Main Ideas
- 自動設定是有條件的，不是無條件的。
- Classpath 中的內容會強烈影響 Boot 的行為。
- 自訂 bean 往往能讓你微調或取代預設值。

## Lesson Notes
Spring Boot 之所以讓人感覺高效率，其中一個主要原因是它會替你完成大量初始化工作。這就是所謂的自動設定。Spring Boot 不會要求你手動宣告每一個常見的框架元件，而是會檢查目前有哪些條件成立，再配置合理的預設值。

如果你把 "auto" 理解成隨機行為，這個詞可能會造成誤解。Boot 並不是在盲目猜測。它依靠條件規則運作。如果某些類別存在、應用程式類型是 Web、還沒有自訂 bean 存在，而且特定設定已啟用，那麼 Boot 就會套用對應的設定。

這也代表你的依賴清單比一開始看起來更重要。加入 web starter，就在暗示你需要 Web 支援。加入 JPA 和資料庫 driver，就表示你需要與持久化相關的設定。你越理解這種關係，就越容易預測啟動時應該發生什麼。

這也是為什麼兩個 Spring Boot 3.x 專案即使應用程式主類看起來幾乎一樣，行為卻可能完全不同。真正的差異，往往來自 classpath 上有哪些東西、加入了哪些 starter，以及目前有哪些設定屬性處於啟用狀態。

自動設定之所以強大，是因為它減少了樣板程式碼，但它並沒有拿走你的控制權。如果你需要自訂行為，可以定義自己的 bean 或設定。在很多情況下，當 Boot 發現你已經提供了更具體的設定時，它就會退讓。

一個健康的學習習慣，是把自動設定當成需要觀察的東西，而不是只是盲目信任。閱讀啟動輸出、留意你加入了哪些 starters，並注意新依賴何時改變了應用程式行為。在 Spring Boot 3.x 裡，這也包含觀察 Jakarta 相關依賴、資料層 starter 或安全性 starter 何時啟動不同預設值。

很多初期的除錯問題，都和這個主題有關。遺漏的 datasource 設定、意料之外的 security 預設值，或不如預期的 Web endpoint 行為，只要你理解 Boot 是在回應條件，而不是單純執行靜態程式碼，就會更容易想通。

這一課的目標，不是要你到處停用自動設定。真正目標是把它看成一個可閱讀的框架功能：一組能加速開發的合理預設值，同時仍保留有意識客製化的空間。

## Example
```java
package com.tommy.learningapi.config;

import java.time.Clock;
import java.time.Instant;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@Configuration
public class AppConfig {
    @Bean
    Clock appClock() {
        return Clock.systemUTC();
    }
}

@Service
public class ReportService {
    private final Clock appClock;

    public ReportService(Clock appClock) {
        this.appClock = appClock;
    }

    public Instant generatedAt() {
        return appClock.instant();
    }
}
```

## Common Mistakes
- 以為自動設定代表背後根本沒有任何設定。
- 加入 starters 時，卻不了解它們啟用了哪些行為。
- 還沒理解 Boot 已經在做什麼，就急著覆蓋預設值。

## Practice
- 在一個小型示範應用程式中加入新的 starter，並觀察啟動日誌有哪些變化。
- 用你自己的話解釋設定是「有條件的」代表什麼。
- 列出一個你會保留 Boot 預設值的情境，以及一個你會覆蓋它的情境。

## Continuity
- 上一課：`第 5 課：設定檔與 Profiles`
- 下一課：`第 7 課：建立你的第一個 REST Controller`

## Key Takeaway
- 自動設定解釋了為什麼 Spring Boot 用起來很快，也說明了為什麼加入依賴後會改變應用程式行為。

## Official References
- https://docs.spring.io/spring-boot/reference/using/auto-configuration.html
- https://docs.spring.io/spring-boot/reference/features/index.html
