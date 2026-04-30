---
title: "第 6 課：Auto-configuration 與 Boot 4 Modular Starters"
lesson: 6
slug: "lesson-6"
summary: "Boot 4 保留容易理解的 auto-configuration，同時轉向更聚焦的 starter modules 與 companion test starters。"
---

# 第 6 課：Auto-configuration 與 Boot 4 Modular Starters

Boot 4 保留容易理解的 auto-configuration，同時轉向更聚焦的 starter modules 與 companion test starters。

## 這一課會學到什麼
- 理解 starters 與 classpath conditions 如何驅動 auto-configuration。
- 認識 Boot 4 更聚焦的 starter naming，例如 `spring-boot-starter-webmvc`。
- 看懂 companion test starters 為什麼讓 test dependencies 更明確。

## 為什麼重要
- Auto-configuration 是加入一個 starter 就可能立刻改變 application behavior 的原因。
- Boot 4 starter modularization 會影響新專案應教學與複製的 dependency names。
- 理解 auto-configuration 背後的 conditions，會讓 debugging 不再那麼神祕。

## 主要觀念
- Starters 是 curated dependency sets，不是 magic annotations。
- Auto-configuration 會在 required classes、properties 與 missing beans 條件符合時啟用。
- Boot 4 偏好 focused starters 與 technology-specific test starters，而不是一個過度龐大的預設假設。

## 課程筆記
Auto-configuration 是讓 Spring Boot 感覺高效的重要特性之一。你加入 starter，Boot 看到 classpath 上的相關 libraries，檢查 configuration properties 與既有 beans，然後建立典型 application 會需要的 infrastructure beans。

在 Boot 4 中，starter story 更 modular。Spring MVC API 的建議 starter artifact 是 `spring-boot-starter-webmvc`。相關 test support 可以用 focused starter，例如 `spring-boot-starter-webmvc-test`。較舊的廣義名稱可能仍出現在 migration discussions，但新課程範例應教 Boot 4 focused path。

這種 modularity 不會改變 beginner mental model：加入你需要的 technology，然後讓 Boot 設定常見 infrastructure。它改變的是 dependency choices 的精準度。Web MVC、WebFlux、Data JPA、Security、Actuator 與它們的 test support 都應該有意識地加入，而不是一包全丟。

Auto-configuration 也是 conditional。如果你定義自己的 bean，Boot 可能 back off。如果缺少 required class，某個 auto-configuration path 就不會啟用。如果 property 關閉 feature，Boot 會尊重。之後學會讀 condition reports，就能 debug 為什麼某件事有或沒有被設定。

最安全的習慣是讓 dependencies 對齊目前 lesson。Controllers 加入 web MVC starter；request validation 開始時加入 validation；persistence 開始時加入 data JPA 與 database driver；寫 framework-backed tests 時加入對應 test starter。

把 starters 當作 explicit design choices，能讓專案保持可理解，也讓 Boot 4 modularization 成為幫助而不是阻礙。

## 範例
```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-webmvc</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-webmvc-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

## 常見錯誤
- 沒檢查 current guidance，就把舊 starter names 複製到新的 Boot 4 examples。
- 因為 starter 聽起來有用就加進去。
- 以為 auto-configuration 不能 customized 或 replaced。
- 用猜測 debug，而不是檢查哪些 conditions matched。

## 練習
- 檢查 build file，列出目前存在的 starters。
- 說明每個 starter 為 application 加入了什麼。
- 只在準備寫需要它的 tests 時，才加入一個 focused test starter。

## 延續閱讀
- 上一課：`第 5 課：Configuration Files、Profiles 與 Type-Safe Settings`
- 下一課：`第 7 課：使用 Spring MVC 建立第一個 REST Controller`

## 課後重點
- Boot 4 auto-configuration 最容易理解的方式，是把每個 starter 都視為有意識的 capability choice。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/using/build-systems.html
- https://docs.spring.io/spring-boot/reference/using/auto-configuration.html
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide
