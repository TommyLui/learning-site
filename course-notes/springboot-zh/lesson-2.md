---
title: "第 2 課：使用 Spring Initializr 建立 Boot 4 專案"
lesson: 2
slug: "lesson-2"
summary: "從 Spring Initializr 開始，可以得到乾淨的 Boot 4 baseline，並讓 Java、build tool、starter 與 plugin 選擇保持相容。"
---

# 第 2 課：使用 Spring Initializr 建立 Boot 4 專案

從 Spring Initializr 開始，可以得到乾淨的 Boot 4 baseline，並讓 Java、build tool、starter 與 plugin 選擇保持相容。

## 這一課會學到什麼
- 用官方 Initializr workflow 建立 Spring Boot 4.x 專案。
- 有意識地選擇 Java、Maven 或 Gradle、packaging、group、artifact 與 dependencies。
- 認識 Boot 4 starter 命名變化，尤其是 Spring MVC path 對應的 `spring-boot-starter-webmvc`。

## 為什麼重要
- 第一個 generated project 會決定 package layout、build file、dependency management 與 local run workflow。
- Boot 4 modular starters 比舊習慣更聚焦，所以 dependency choices 要更有意識。
- 已知健康的 generated baseline 能降低後續除錯時的不確定性。

## 主要觀念
- Spring Initializr 是新 Boot project 最安全的起點。
- Java 17+ 是必要條件，而 Maven 仍是適合初學者的簡單 build path。
- UI 裡的 friendly dependency labels 會映射到 generated build file 中實際的 starter artifacts。

## 課程筆記
Spring Initializr 是新 Spring Boot 專案的官方入口。它能避免初學者常見問題：手動組合不相容 dependencies，或忘記讓 Boot packaging 運作所需的 build plugin。

在這套課中，Maven 與 Java 是實用的預設值。選擇 Spring Boot 4.x 版本，Java 保持在 17 或更新版本，API service 使用 Jar packaging。Jar packaging 與 Boot embedded server model 搭配自然，也比傳統外部 application server workflow 更簡單。

Boot 4 的 dependency section 值得更多注意。Initializr UI 可能使用 Spring Web 這類友善標籤，但 Boot 4 的 focused Spring MVC starter 是 `spring-boot-starter-webmvc`。這個 starter 會帶入 controllers、request mapping 與 JSON responses 所需的 servlet MVC stack；等開始 testing 時，companion `spring-boot-starter-webmvc-test` starter 才提供聚焦的 MockMvc-style test support。

不要一次加入所有看似有用的 starters。如果目前 lesson 是第一個 controller，就先從 web MVC starter 開始。需要 request rules 時加入 Validation，進入 persistence 時加入 Data JPA 與 MySQL Driver，開始 protection 時加入 Security，開始 operational visibility 時加入 Actuator。分階段能讓行為變化更容易解釋。

Generated `pom.xml` 或 Gradle build file 不只是 dependency list。它編碼了 Boot parent 或 plugin、Java version、dependency management 與 packaging behavior。寫 application code 前先讀它，知道你實際使用的是哪個 platform。

下載專案後，先 run 一次再加入自訂檔案。第一次成功啟動可以驗證 JDK、build tool、Boot version 與 selected dependencies 都能一起運作。後續如果出錯，你會知道 generated baseline 本身是健康的。

## 範例
```text
Project: Maven
Language: Java
Spring Boot: 4.x
Group: com.tommy
Artifact: learning-api
Packaging: Jar
Java: 17
Dependencies: Spring Web (Spring MVC), Validation
```

## 常見錯誤
- 還不知道每個 starter 會改變什麼，就先加入 Security、JPA、Actuator 與所有 test dependencies。
- 選擇與 Boot line 不相容的 Java version。
- 以為 Initializr label 一定與 Maven artifact name 完全相同。
- 編輯專案前跳過第一次乾淨啟動。

## 練習
- 建立一個 Boot 4 專案，使用 Maven、Java 17、Jar packaging、Spring Web 與 Validation。
- 打開 build file，找出實際的 starter artifact names。
- 在加入第一個 controller 前，先 run 一次 application。

## 延續閱讀
- 上一課：`第 1 課：什麼是 Spring Boot 4.x，以及它為什麼重要`
- 下一課：`第 3 課：理解專案結構、啟動流程與 embedded servers`

## 課後重點
- 乾淨的 Initializr project 會在你加入 application complexity 前，先提供可信任的 Boot 4 baseline。

## 官方參考資料
- https://start.spring.io/
- https://docs.spring.io/spring-boot/system-requirements.html
- https://docs.spring.io/spring-boot/reference/getting-started/index.html
