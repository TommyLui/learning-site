---
title: "第 3 課：理解專案結構、啟動流程與 Embedded Servers"
lesson: 3
slug: "lesson-3"
summary: "清楚理解 project layout、Boot startup 與 embedded server stack，能讓後續 controllers、repositories 與 configuration 更容易推理。"
---

# 第 3 課：理解專案結構、啟動流程與 Embedded Servers

清楚理解 project layout、Boot startup 與 embedded server stack，能讓後續 controllers、repositories 與 configuration 更容易推理。

## 這一課會學到什麼
- 理解 Boot project 的主要 folders，以及 application 如何啟動。
- 說明 `@SpringBootApplication`、component scanning 與 `SpringApplication.run(...)` 的角色。
- 認識 Boot 4 servlet baseline：Spring MVC application 使用 Servlet 6.1 與 embedded Tomcat 11。

## 為什麼重要
- 許多初學者錯誤來自 package 放錯、resources 被忽略，或對 startup 有錯誤假設。
- Boot startup 是 configuration loading、auto-configuration、bean creation 與 web server startup 交會的地方。
- 理解 embedded server model 能避免沿用舊式 external-container 習慣。

## 主要觀念
- `src/main/java`、`src/main/resources` 與 `src/test/java` 各自有不同責任。
- 除非你自訂 scanning，Boot 會從 main application package 往下掃描。
- Boot 4 servlet web app 通常跑在 embedded Servlet 6.1-compatible server，例如 Tomcat 11。

## 課程筆記
產生專案後，先不要急著寫功能。Folder layout 是第一堂 design lesson。Application code 放在 `src/main/java`，configuration files 放在 `src/main/resources`，tests 放在 `src/test/java`。這個結構很簡單，但足以支撐 application 成長而不混亂。

Main application class 是 startup 中心。它包含 Java `main` method，並呼叫 `SpringApplication.run(...)`。這個呼叫會啟動 Spring application context、載入 configuration、評估 auto-configuration、建立 beans，並在 project 是 web application 時啟動 embedded web server。

`@SpringBootApplication` annotation 合併了 configuration、auto-configuration 與 component scanning。預設情況下，components 會在 main class 所在 package 底下被發現。如果 controller 或 service 放到這個 tree 之外，Spring 可能找不到它，最後就會出現 missing bean 或 endpoint 沒有 mapping 的問題。

Boot 4 也更新了預設 runtime stack。Spring MVC project 的 servlet baseline 是 Servlet 6.1，supported embedded Tomcat line 是 Tomcat 11。Jetty 12.1 也是另一條 supported servlet-container path。Undertow 不是 Boot 4 servlet 教學主線，因為 Servlet 6.1 baseline 改變了 support story。

這不代表你在 beginner API 裡要手動管理 Tomcat。Embedded server 會透過 web MVC starter 帶入，並跟 application 一起啟動。你仍然應該知道它存在，因為 request handling、ports、error pages、headers 與 deployment behavior 都會經過這一層。

當你把 structure 與 startup 串起來，後續 topics 就比較不神祕。Controllers 因為 component scanning 被發現，configuration 因為 resources 參與 startup 被載入，auto-configuration 因為 starters 作出反應，tests 也可以在需要時啟動這個 context 的部分內容。

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
- 把 controllers 或 services 放到 main application class 掃描 package tree 外面。
- 把 `src/main/resources` 當成次要資料夾，而不是預設 configuration home。
- 以為 Boot MVC app 需要 external servlet container 才能在本機執行。
- 忘記 embedded server version 由 Boot dependency management 管理。

## 練習
- 畫出 generated project folder tree，並標註每個 main folder 的角色。
- 在 practice branch 中把一個小 component 移到 scanned package 外，觀察 failure。
- 找出 web MVC starter 帶入的 embedded server dependency。

## 延續閱讀
- 上一課：`第 2 課：使用 Spring Initializr 建立 Boot 4 專案`
- 下一課：`第 4 課：Dependency Injection 與 Beans`

## 課後重點
- Boot startup 把 project structure、component scanning、auto-configuration 與 embedded server 串成一個 application runtime。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/features/spring-application.html
- https://docs.spring.io/spring-boot/reference/using/using-the-springbootapplication-annotation.html
- https://docs.spring.io/spring-boot/system-requirements.html
