---
title: "第 2 課：使用 Spring Initializr 建立專案"
lesson: 2
slug: "lesson-2"
summary: "從官方產生器開始，可以減少設定錯誤，並讓你的專案更符合 Spring Boot 慣例。"
---

# 第 2 課：使用 Spring Initializr 建立專案

從官方產生器開始，可以減少設定錯誤，並讓你的專案更符合 Spring Boot 慣例。

## What You Will Learn
- 學會如何使用官方 Initializr 流程建立乾淨的 Spring Boot 3.x 專案。
- 理解 Initializr 主要欄位的意義，以及它們如何影響產生出的專案。
- 以支援漸進式學習而不是意外複雜度的方式選擇相依套件。

## Why This Matters
- 從官方產生器開始，可以減少設定錯誤，並讓你的專案更符合 Spring Boot 慣例。
- 第一次的專案設定會影響 package 命名、建置工具、Java 相容性，以及後續的可維護性。
- 乾淨的起點會讓後面的課程更容易，因為你知道這個專案是從一個已知可靠的基準產生出來的。

## Main Ideas
- 像 group、artifact、packaging 這類專案中繼資料，會成為專案識別的一部分。
- 選對 Spring Boot 與 Java 版本，可以避免本來就能避開的相容性問題。
- 逐步選擇相依套件，能讓學習曲線維持在可控制的範圍。

## Lesson Notes
Spring Initializr 是開始 Spring Boot 專案的官方方式，而這件事比一開始看起來更重要。你不需要手動組裝建置檔，也不用猜哪些相依套件應該搭配在一起；你是從一個依照 Spring 團隊預期慣例所產生的專案開始。

`start.spring.io` 這個頁面看起來很簡單，但每個欄位都控制著有意義的內容。Project 會決定建置工具，通常是 Maven 或 Gradle。Language 會決定產生的是 Java、Kotlin 還是 Groovy 程式碼。Spring Boot 則會選定你要對齊的 framework 版本。對這條學習路線來說，它應該和 Spring Boot 3.x 以及受支援的 Java 17+ 執行環境保持一致。Java 21 在許多 Spring Boot 3 版本中也能使用，但這門課反覆回到的安全基線仍然是 Java 17。

中繼資料區塊很容易被低估。Group 通常對應像 `com.tommy` 這樣的 package namespace，而 artifact 則是專案識別名稱，例如 `learning-api`。這些值會影響產生出的 package 名稱、建置輸出，以及應用程式在團隊或作品集情境中的辨識方式。好的名稱，能讓專案在成長時仍然保持可讀性。

Packaging 是另一個早期選擇，而且會帶來實際影響。對大多數以 API 為主的 Spring Boot 應用程式來說，`Jar` 是最自然的預設值，因為 Spring Boot 會使用內嵌伺服器。這讓部署更單純，也符合許多現代後端服務的建立與散布方式。

Java 版本欄位不是形式上的選項。Spring Boot 版本依賴特定的 Java 支援範圍，所以如果選錯 JDK，你甚至還沒寫出 controller，就可能遇到啟動失敗或函式庫不相容的問題。這就是為什麼檢查系統需求是健康設定流程的一部分，而不是可有可無的細節。

相依套件，是初學者最容易不小心製造混亂的地方。你可能很想一次把 Spring Web、Security、Data JPA、Validation、Actuator、Lombok 等等都加進去，因為它們看起來都很有用。問題在於，每一個 starter 都會改變產生出來的專案行為。如果你在第一天就把所有東西都加上去，你會在還沒理解每個部分作用之前，就先建立出一個更龐大的系統。

更好的做法，是只加入當前學習目標真正需要的內容。如果你要開始建立第一個 endpoint，就先選 Spring Web。當課程走到持久化時，再加入 Spring Data JPA 與 MySQL Driver。到了輸入規則時，再加入 Validation。到了驗證機制時，再加入 Spring Security。這種分階段方式，會讓除錯與理解都容易得多。

當 Initializr 產生完專案後，請把第一次成功啟動當成一個里程碑。在新增檔案或改動結構之前，先確認專案能乾淨地啟動。這能證明你的本機 Java 環境、建置工具與選定的 Spring Boot 版本，彼此之間都能正常合作。

這一課真正要建立的，是一種可重複的起手習慣。當你每次都從相同的官方入口開始，並理解每個設定選擇背後的原因，之後的每個 Spring Boot 專案都會更容易開始。

## Example
```text
Project: Maven
Language: Java
Spring Boot: 3.x
Group: com.tommy
Artifact: learning-api
Packaging: Jar
Java: 17
Dependencies: Spring Web
```

## Common Mistakes
- 第一天就加入太多相依套件。
- 選擇了不符合 Spring Boot 要求的 Java 版本。
- 跳過第一次啟動驗證。
- 把 group 與 artifact 當成隨便取的名字，而不是專案結構的一部分。

## Practice
- 建立一個只選擇 `Spring Web` 的 Spring Boot 3.x 新專案。
- 在下載專案之前，先寫下每個 Initializr 欄位控制的是什麼。
- 打開產生出的專案，辨認哪些 Initializr 選擇會反映在資料夾結構或建置檔中。

## Continuity
- 上一課：`第 1 課：什麼是 Spring Boot 3.x，以及它為什麼重要`
- 下一課：`第 3 課：理解專案結構與啟動流程`

## Key Takeaway
- 從官方產生器開始，可以減少設定錯誤，並讓你的專案更符合 Spring Boot 慣例。

## Official References
- https://start.spring.io/
- https://docs.spring.io/spring-boot/installing.html
- https://docs.spring.io/spring-boot/system-requirements.html
