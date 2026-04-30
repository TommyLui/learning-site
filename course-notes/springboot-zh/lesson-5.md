---
title: "第 5 課：Configuration Files、Profiles 與 Type-Safe Settings"
lesson: 5
slug: "lesson-5"
summary: "真實 Boot 4 application 需要 externalized settings，才能在 local、test、staging 與 production 間安全變化。"
---

# 第 5 課：Configuration Files、Profiles 與 Type-Safe Settings

真實 Boot 4 application 需要 externalized settings，才能在 local、test、staging 與 production 間安全變化。

## 這一課會學到什麼
- 學習 Spring Boot 如何從 files、environment variables、system properties 與 command-line inputs 讀取 configuration。
- 使用 profiles 分離 local、test 與 production behavior。
- 理解 `@ConfigurationProperties` 如何讓相關設定 type-safe 並更容易 validation。

## 為什麼重要
- Backend applications 很少只在一個 environment 中執行。
- Configuration mistakes 常造成 startup failed、database connection broken 或 secrets exposure。
- 好的 configuration design 會為 testing、security、observability 與 deployment 打基礎。

## 主要觀念
- `application.properties` 或 `application.yml` 仍是預設 configuration entry point。
- Profiles 可以啟用 environment-specific values，而不需要複製 application code。
- Type-safe configuration 比把 `@Value` strings 散落在 business logic 更好。

## 課程筆記
Configuration 是小型 demo 開始變成 deployable service 的地方。Local port、database URL、feature flag、logging level 與 Actuator exposure rule 都不是 business rules。它們是 operational details，應該 externalized。

Spring Boot 支援 layered configuration model。Values 可以來自 `application.properties`、YAML files、profile-specific files、environment variables、system properties 與 command-line arguments。後面的來源可以覆蓋前面的來源，所以同一個 app 在 local development 與 production 中可以有不同 behavior。

Profiles 讓你把 runtime context 的設定分組。你可以用 `dev` 連接 local MySQL 並開啟 verbose logging，用 `test` 搭配 test containers 或 isolated test settings，用 `prod` 依賴 environment-provided secrets 並保守 exposed endpoints。Java code 大多保持相同，configuration 改變 runtime behavior。

Boot 也支援用 `@ConfigurationProperties` 把一組 settings 綁定到 typed classes 或 records。當多個 properties 屬於同一個概念時特別有用。與其在 codebase 到處注入 string values，不如用一個 settings object 表示某一小塊 application configuration。

Secrets 要小心。課程範例可能會展示 placeholder values 讓形狀清楚，但真實 credentials 應來自 environment variables、secret stores 或 deployment configuration。不要把 production passwords commit 到 source control。

這一課之後在 MySQL、Security、Actuator、Docker 與 deployment 都會再次變重要。這些 topics 都仰賴可預期的 configuration，以及清楚定義什麼會在 environments 間改變。

## 範例
```java
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "learning.api")
public record LearningApiProperties(
    String supportEmail,
    boolean publicSignupEnabled
) {}
```

## 常見錯誤
- 把 credentials、ports 或 external service URLs hardcode 在 Java classes 中。
- 用一個巨大的 config file 塞進所有 environments。
- 不知道 values 衝突時哪個 configuration source 會勝出。
- 把不相關的 `@Value` injections 散落在許多 services。

## 練習
- 建立 `application-dev.properties`，覆蓋 server port 或 logging level。
- 把一個 hardcoded setting 移到 configuration，並說明它屬於哪個 environment。
- 為兩個相關 settings 草擬一個小型 `@ConfigurationProperties` record。

## 延續閱讀
- 上一課：`第 4 課：Dependency Injection 與 Beans`
- 下一課：`第 6 課：Auto-configuration 與 Boot 4 Modular Starters`

## 課後重點
- Externalized 且 type-safe 的 configuration 讓同一個 Boot 4 codebase 能安全地跑在多個 environments。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/features/external-config.html
- https://docs.spring.io/spring-boot/reference/features/profiles.html
- https://docs.spring.io/spring-boot/reference/features/external-config.html#features.external-config.typesafe-configuration-properties
