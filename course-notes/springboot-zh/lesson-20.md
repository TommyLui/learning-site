---
title: "第 20 課：使用 Actuator 處理 Health、Probes、Metrics 與 Observability"
lesson: 20
slug: "lesson-20"
summary: "Actuator 為 Boot 4 services 提供 health、readiness、liveness、metrics 與 observability signals 等 operational endpoints。"
---

# 第 20 課：使用 Actuator 處理 Health、Probes、Metrics 與 Observability

Actuator 為 Boot 4 services 提供 health、readiness、liveness、metrics 與 observability signals 等 operational endpoints。

## 這一課會學到什麼
- 加入 Actuator，並安全 expose selected operational endpoints。
- 理解 Boot 4 中的 health contributors、readiness 與 liveness groups。
- 將 metrics、Micrometer 與 OpenTelemetry 定位為 production observability 的一部分。

## 為什麼重要
- Deployed services 不只要成功啟動；platforms 也需要知道它們是否 alive 與 ready。
- Health 與 metrics 能幫助 teams 在 users 回報前診斷問題。
- Observability choices 應被設計，而不是意外 expose。

## 主要觀念
- Actuator endpoints expose health、info 與 metrics 這類 operational information。
- Boot 4 預設啟用 liveness 與 readiness health groups。
- 當設定正確 dependencies 與 exporters 時，metrics 與 traces 可以透過 Micrometer 與 OpenTelemetry 流出。

## 課程筆記
Actuator 是 Spring Boot 的 production-ready operational endpoints feature set。它可以 expose health、info、metrics、environment details、mappings 等資訊。第一條規則是只 expose 你需要的內容。Operational visibility 不應變成意外資訊洩漏。

Health checks 回答不同問題。Liveness 問 process 是否應被視為 alive。Readiness 問它是否 ready to receive traffic。Boot 4 預設 expose liveness 與 readiness health groups，符合現代 platform 與 Kubernetes-style probe thinking。

Health 由 contributors 組成。Datasource health contributor 可以回報 database connectivity。Disk space 與其他 infrastructure indicators 可以提供自己的 statuses。如果你在 Boot 4 建立 custom health indicators，使用 Boot docs 中目前的 health contributor packages。

Metrics 提供隨時間變化的數值 signals：request counts、latencies、JVM memory、datasource pool activity 等。Micrometer 是 Spring ecosystem 使用的 metrics facade。對 traces 與 exporting signals，Boot 4 提供更清楚的 OpenTelemetry starter path，支援 OTLP-style observability。

不要公開 expose 所有 Actuator endpoints。常見 production pattern 是把 health probes expose 給 platform，把 metrics expose 給 monitoring infrastructure，敏感 endpoints 則只允許 internal access controls 或完全停用。

這一課把 development 連到 operations。Service 不會只因為 API 能在本機運作就 production-ready；它還需要向周圍環境傳達 runtime health 與 behavior。

## 範例
```properties
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.probes.enabled=true
management.health.livenessstate.enabled=true
management.health.readinessstate.enabled=true
```

## 常見錯誤
- 把所有 Actuator endpoints expose 到 public internet。
- 把 liveness 與 readiness 當成同一個 signal。
- 等到 production incident 後才開始重視 metrics。
- 用 outdated Boot packages 撰寫 custom health code。

## 練習
- 加入 Actuator，並在本機只 expose `health`、`info` 與 `metrics`。
- 造訪 health endpoint，找出 liveness/readiness information。
- 寫一個短 policy，定義哪些 Actuator endpoints 應 public、internal 或 disabled。

## 延續閱讀
- 上一課：`第 19 課：建立 Executable Jars 與 Container-friendly Artifacts`
- 下一課：`第 21 課：為 Spring Boot 4.x Deployment 與 Migration 做準備`

## 課後重點
- Boot 4 Actuator 讓 runtime health、probes、metrics 與 observability 成為 first-class deployment concerns。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/actuator/endpoints.html
- https://docs.spring.io/spring-boot/reference/actuator/metrics.html
- https://docs.spring.io/spring-boot/reference/actuator/tracing.html
