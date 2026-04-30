---
title: "第 21 課：為 Spring Boot 4.x Deployment 與 Migration 做準備"
lesson: 21
slug: "lesson-21"
summary: "當 configuration、security、observability、packaging、AOT awareness 與 migration risks 被一起檢查，Boot 4 service 才算準備好部署。"
---

# 第 21 課：為 Spring Boot 4.x Deployment 與 Migration 做準備

當 configuration、security、observability、packaging、AOT awareness 與 migration risks 被一起檢查，Boot 4 service 才算準備好部署。

## 這一課會學到什麼
- 回顧 Boot 4 API 的實用 deployment checklist。
- 理解 AOT 與 GraalVM native images 作為 advanced deployment options 的位置。
- 認識從前一個 major line 移到 Boot 4 的安全 migration sequence。

## 為什麼重要
- Production readiness 是許多前面 decisions 的組合，不是一個最後 command。
- Boot 4 在 starters、tests、JSON、security、persistence 與 packaging 都有重要 major-version changes。
- Migration work 應有意識地進行，避免把 application bugs 與 platform-upgrade issues 混在一起。

## 主要觀念
- Deployment 前必須檢查 externalized configuration、secrets、logging、health probes、metrics 與 security rules。
- AOT 與 native images 能在某些情境改善 startup 與 memory，但需要 closed-world awareness 與額外測試。
- Existing applications 應先升到最新穩定前一 major release，再升到 Boot 4。

## 課程筆記
Deployment readiness 是跨整個 application 的 checklist。Packaged jar 必須能在 IDE 外執行。Configuration 必須來自 environment。Secrets 不可 commit。Database connections 必須使用正確 profile。Security rules 必須保護 sensitive endpoints。Actuator exposure 必須有意識。Logs、metrics、health 與 readiness checks 必須對 platform 有用。

Boot 4 也把 AOT 與 native-image considerations 帶進 modern deployment conversations。Spring AOT 可以產生幫助 native-image builds 的 assets。GraalVM native images 可以在某些 workloads 中降低 startup time 與 memory，但它們使用 closed-world model。Reflection、dynamic proxies、resources 與 runtime discovery 需要額外注意。把 native images 視為 advanced deployment option，不是 beginner requirement。

Container deployment 應建立在 packaging lesson 之上。使用 `java -jar`、buildpacks，或採用 current layered extraction patterns 的 Dockerfile。避免已移除的 fully executable launch-script instructions。Runtime configuration 應與 image content 分離。

對 migrating existing app 的 teams，最安全路線不是盲目跳版。先升到最新 Spring Boot 3.5.x line、移除 deprecated APIs、更新 tests 並確認 behavior。接著再 migration 到 Boot 4，處理 major changes，例如 focused starters、test starter choices、`@MockitoBean` annotations、Jackson 3、Security 7、Hibernate 7 與 servlet container baselines。

不要把 Boot 4 描述成只是 label change。它仍然是 Spring Boot，但也是 major generation update。好的 deployment 或 migration plan 會指出改變的 pieces，並透過 tests 與 operational checks 驗證。

這最後一課把整套課串起來：你學了 application model、建立 APIs、加入 persistence、寫 tests、保護 endpoints、觀察 runtime behavior、封裝 artifact，現在要把 system 當作真的會為 users 執行的東西來 review。

## 範例
```text
Boot 4 deployment checklist:
1. Build and run the packaged artifact outside the IDE.
2. Provide database URLs, credentials, and secrets from the environment.
3. Expose only necessary Actuator endpoints.
4. Verify readiness and liveness probes.
5. Run unit, web, persistence, security, and deployment smoke tests.
6. Review Boot 4 migration items: starters, tests, Jackson 3, Security 7, Hibernate 7, and packaging.
```

## 常見錯誤
- 把 deployment 當成只有 `mvn package`。
- 在 app 其他 production-ready 條件尚未具備前，就把 native image 當成 requirement。
- 未先移除前一 major 的 deprecated usage，就直接從舊 codebase migration 到 Boot 4。
- Platform upgrade 後忘記重新測試 security、JSON、persistence 與 Actuator behavior。

## 練習
- 為你的 course project 建立 deployment checklist。
- 標記哪些 settings 必須來自 environment variables 或 secret store。
- 寫一段 migration note，列出 team 需要驗證的 Boot 4 changes。

## 延續閱讀
- 上一課：`第 20 課：使用 Actuator 處理 Health、Probes、Metrics 與 Observability`
- 下一課：這是 Spring Boot 4.x 課程的最後 checkpoint。

## 課後重點
- Spring Boot 4.x app 只有在 build、configuration、security、observability 與 migration risks 都一起被驗證後，才真正準備好交付。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/packaging/native-image/introducing-graalvm-native-images.html
- https://docs.spring.io/spring-boot/reference/packaging/container-images/dockerfiles.html
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide
