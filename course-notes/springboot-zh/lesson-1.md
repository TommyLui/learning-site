---
title: "第 1 課：什麼是 Spring Boot 4.x，以及它為什麼重要"
lesson: 1
slug: "lesson-1"
summary: "Spring Boot 4.x 是用 Java 17+、Spring Framework 7 與 production-ready 預設值建立現代 Spring 應用程式的目前 major 版本。"
---

# 第 1 課：什麼是 Spring Boot 4.x，以及它為什麼重要

Spring Boot 4.x 是用 Java 17+、Spring Framework 7 與 production-ready 預設值建立現代 Spring 應用程式的目前 major 版本。

## 這一課會學到什麼
- 理解 Spring Boot 4.x 是什麼，以及它為後端團隊解決哪些問題。
- 把 Spring Boot 4.x 與 Spring Framework 7、Java 17+、Jakarta-based ecosystem 串起來。
- 認識 starters、auto-configuration、testing support、Actuator 與 deployment tooling 為什麼屬於同一條學習路線。

## 為什麼重要
- Spring Boot 4.x 是 Spring ecosystem 的 GA 世代，不只是未來預覽版。
- 它保留 Boot 友善初學者的模型，同時把底層平台推進到 Framework 7、Security 7、Hibernate 7、Jackson 3 與 Servlet 6.1。
- 學習目前版本能讓你的範例更符合現代文件、dependency management 與 production expectation。

## 主要觀念
- Spring Boot 建立在 Spring Framework 之上，而不是取代它。
- Java 17+ 仍然是 minimum baseline，因此 Java 17 仍是安全的課程 runtime。
- Boot 4 保留熟悉的 application model，同時改善 starters、tests、observability、packaging 與 native-image awareness。

## 課程筆記
理解 Spring Boot 最好的方式，是把它看成把龐大 Spring ecosystem 變成實用 application platform 的那一層。Spring Framework 提供 dependency injection、web foundations、data access integration、transactions 等基礎元件；Spring Boot 則選擇常見組合、管理相容版本，並套用合理預設，讓你更快進入真正的應用程式工作。

Spring Boot 4.x 把這個 platform 更新到 Spring Framework 7 世代。它仍然很像 Spring Boot：你建立 application class、加入 starters、撰寫 controllers 與 services，並讓 auto-configuration 移除重複設定。重要差異在於預設 stack 往前推進，包含最新 Jakarta APIs、Spring Security 7、Spring Data 新世代、Hibernate 7、Jackson 3，以及 Tomcat 11 這類 Servlet 6.1 embedded servlet container。

Java baseline 也很重要。Boot 4 需要 Java 17 或更新版本，代表 Java 17 仍然是有效的初學者基線。你不需要強制使用 Java 21 或 Java 25 才能學這套課，但要知道更新的 JDK 也會出現在團隊與 production 環境中。

Boot 的心智模型沒有變成完全陌生的東西。Dependency injection、beans、configuration properties、profiles、controllers、DTOs、services、repositories、validation 與 layered design 仍然是核心。改變的是預設版本、建議 starter 名稱、testing support，以及一些 deployment 與 operational details。

這套課把 Spring Boot 當作 application-development path，而不只是 project generator。你會從 setup 開始，接著建立 REST endpoints、加入 validation 與 persistence、測試應用程式、保護 API、觀察 runtime、封裝 artifact，最後準備部署。這個順序更接近真實 backend service 成長的方式。

到這一課結束時，核心重點很簡單：Spring Boot 4.x 重要，因為它保留 Spring 的可親近性，同時給你一個目前且 production-aware 的 backend stack。

## 範例
```java
package com.tommy.learningapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LearningApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(LearningApiApplication.class, args);
    }
}
```

## 常見錯誤
- 誤以為 Spring Boot 與 Spring Framework 沒有關係。
- 以為升到 Boot 4 代表每個 beginner concept 都被改掉，而不是底層 platform 更新。
- 以為一定要 Java 21 或 Java 25，忽略 Java 17+ 仍是支援 baseline。
- 沒檢查 Boot 4 starter model，就學習過時的 dependency 名稱。

## 練習
- 說明 Spring Framework 與 Spring Boot 如何一起工作。
- 列出三個 Spring Boot 4.x 中重要的 platform 更新。
- 用一小段話說明為什麼 Java 17 仍是合理的課程 baseline。

## 延續閱讀
- 上一課：這是 Spring Boot 4.x 課程的起點。
- 下一課：`第 2 課：使用 Spring Initializr 建立 Boot 4 專案`

## 課後重點
- Spring Boot 4.x 保留熟悉的 Boot development model，同時讓新專案對齊目前 Spring Framework 7 ecosystem。

## 官方參考資料
- https://spring.io/projects/spring-boot
- https://docs.spring.io/spring-boot/system-requirements.html
- https://docs.spring.io/spring-boot/reference/getting-started/index.html
