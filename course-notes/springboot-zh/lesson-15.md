---
title: "第 15 課：Boot 4 Applications 常見 Debugging Patterns"
lesson: 15
slug: "lesson-15"
summary: "當你系統化閱讀 logs、condition reports、configuration sources、request flow 與 dependency boundaries，Boot 4 application debugging 會變得更容易。"
---

# 第 15 課：Boot 4 Applications 常見 Debugging Patterns

當你系統化閱讀 logs、condition reports、configuration sources、request flow 與 dependency boundaries，Boot 4 application debugging 會變得更容易。

## 這一課會學到什麼
- 診斷 startup failures、missing beans、configuration issues 與 HTTP request problems。
- 使用 logs 與 auto-configuration condition information 理解 Boot 做了什麼。
- Debugging 時分離 dependency、configuration、web、persistence 與 security causes。

## 為什麼重要
- Spring applications 可能因許多不同原因失敗，但一開始看起來很像。
- 用猜的常會加入額外 changes，卻沒有修到 root cause。
- Boot 4 modular starters 讓你更需要確認到底是哪個 dependency 提供某個 feature。

## 主要觀念
- 讀第一個有意義的 error，不要只看 stack trace 最後一行。
- 改 code 前先確認 dependencies、properties、profiles 與 bean discovery。
- 套用 fix 前，先重現最小 failing path。

## 課程筆記
Debug Spring Boot 大多是在縮小 failure category。Missing endpoint 不同於 validation error；missing bean 不同於 disabled auto-configuration；database connection failure 不同於 repository query problem。先替問題命名 category。

Startup logs 通常是第一個好工具。它們會顯示 active profiles、server port、bean creation 期間的 failures、datasource connection problems，有時也會顯示 configuration binding errors。從第一個 cause 往上讀，而不是只看最後一層 exception wrapper。

Auto-configuration debugging 也很有價值。如果你期待某功能被設定但沒有，問自己：哪個 starter 提供它？哪些 classes 在 classpath 上？哪些 properties 被設定？你自己的 bean 是否讓 Boot back off？Condition reports 能把 mystery 變成 checklist。

HTTP issues 要 trace request path。確認 URL、method、controller mapping、security filters、validation、service call、repository call 與 response translation。404、400、401、403 與 500 各自指向 request flow 的不同部分。

Configuration issues 要檢查 active profile 與 property source。某個 value 可能被 environment variable、command-line argument 或 profile-specific file 覆蓋。不要假設 `application.properties` 裡的值就是 app 實際使用的值。

好的 debugging 會留下更清楚的 project。修完後，思考是否需要 test、property default 或更明確 error message，避免同樣困惑再次出現。

## 範例
```properties
# Helpful during focused local debugging, not a permanent production default.
debug=true
logging.level.org.springframework.boot.autoconfigure=DEBUG
logging.level.com.tommy.learningapi=DEBUG
```

## 常見錯誤
- 還沒確認 failure category，就同時改很多無關項目。
- 忽略 active profiles 與 property override order。
- 忘記缺少 focused starter 可能看起來像缺少 framework feature。
- 把 security 401 或 403 當成 controller mapping broken。

## 練習
- 在 practice branch 觸發 missing-bean error，找出第一個有用的 stack-trace cause。
- 本機啟用 condition-report debugging，找出一個 matched auto-configuration。
- 從 route 到 response status trace 一個 failing request。

## 延續閱讀
- 上一課：`第 14 課：為 Web 與 Persistence 撰寫 Boot 4 Integration Tests`
- 下一課：`第 16 課：Spring Security 7 基礎`

## 課後重點
- Boot 4 systematic debugging 從分類 failure 開始，再用證據檢查 dependencies、configuration、bean wiring 與 request flow。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/using/devtools.html
- https://docs.spring.io/spring-boot/reference/features/logging.html
- https://docs.spring.io/spring-boot/reference/using/auto-configuration.html
