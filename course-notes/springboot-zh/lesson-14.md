---
title: "第 14 課：為 Web 與 Persistence 撰寫 Boot 4 Integration Tests"
lesson: 14
slug: "lesson-14"
summary: "Boot 4 integration tests 應明確接上正確 test support，包含 MockMvc auto-configuration、RestTestClient、repository tests 與需要時的 Testcontainers。"
---

# 第 14 課：為 Web 與 Persistence 撰寫 Boot 4 Integration Tests

Boot 4 integration tests 應明確接上正確 test support，包含 MockMvc auto-configuration、RestTestClient、repository tests 與需要時的 Testcontainers。

## 這一課會學到什麼
- 理解 Boot 4 testing changes 如何影響 MockMvc、mock annotations 與 technology-specific test starters。
- 在 full-context test 需要 MockMvc 時使用 `@AutoConfigureMockMvc`。
- 依驗證目標選擇 MockMvc、RestTestClient、repository tests 與 Testcontainers。

## 為什麼重要
- Integration tests 能捕捉 unit tests 看不到的 wiring、serialization、validation、persistence 與 security behavior。
- Boot 4 不再因為 `@SpringBootTest` 存在，就假設某些 test clients 自動可用。
- 正確 test setup 能避免 false confidence 與 confusing missing-bean failures。

## 主要觀念
- `@SpringBootTest` 會啟動 application context，但不會自動提供所有 web test clients。
- Full-context test 要使用 MockMvc 時，加入 `@AutoConfigureMockMvc`。
- Boot 舊的 `@MockBean` 與 `@SpyBean` annotations 被 `@MockitoBean` 與 `@MockitoSpyBean` 取代。
- 當 database behavior 必須 realistic 時，Testcontainers 與 service connections 很有用。

## 課程筆記
Integration testing 問的是 application 多個部分是否能一起運作。Controller integration test 可能驗證 routing、validation、JSON、exception handling 與 security rules。Persistence integration test 可能驗證 JPA mapping 與針對真實 database shape 的 SQL behavior。

Boot 4 讓幾個 testing assumptions 更明確。`@SpringBootTest` 會啟動 application context，但不會自己提供 MockMvc。如果你想在 full context 中使用 MockMvc，就加上 `@AutoConfigureMockMvc`。如果你想做 server-style HTTP testing，學習 documented `RestTestClient` path 並加入所需 support。

Mock annotation names 也很重要。Boot 舊的 `@MockBean` 與 `@SpyBean` 已移除，改用 `@MockitoBean` 與 `@MockitoSpyBean`。這種小語法細節在 major-version update 時很容易讓複製的範例壞掉。

Repository 與 database behavior 方面，focused JPA test 可能足夠。當 MySQL-specific behavior 很重要時，Testcontainers 可以為 test 跑一個更真實的 database。這比 unit test 慢，但能驗證 mock 無法代表的 behavior。

Integration tests 要有目的。不要透過 HTTP layer 再測一次每條 service logic。用 integration tests 驗證 boundaries：web mapping、JSON conversion、validation、persistence wiring、transactions 與 security integration。

到這一課結束時，你應該能說明某個 test 為什麼要啟動 Spring，以及它需要哪個 Boot 4 test support。

## 範例
```java
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class NoteApiIntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @Test
    void returnsNotes() throws Exception {
        mockMvc.perform(get("/api/notes"))
            .andExpect(status().isOk());
    }
}
```

## 常見錯誤
- 期待 `@SpringBootTest` 單獨注入 MockMvc。
- 把 `@MockBean` examples 複製到 Boot 4 project，而不是使用 `@MockitoBean`。
- 只用 mocks 測試 database-specific behavior。
- 對 unit test 就能涵蓋的 rules 寫很慢的 full-context tests。

## 練習
- 把一個 controller test 改成使用 `@SpringBootTest` 加 `@AutoConfigureMockMvc`。
- 找出一個應由 `@MockitoBean` 取代 external collaborator 的 test。
- 判斷某個 repository behavior 需要 in-memory database 還是 Testcontainers MySQL instance。

## 延續閱讀
- 上一課：`第 13 課：撰寫 Unit Tests 與 Focused Spring Tests`
- 下一課：`第 15 課：Boot 4 Applications 常見 Debugging Patterns`

## 課後重點
- Boot 4 integration tests 最好明確加入 test 真正需要的 web、mock、client 或 database support。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/testing/spring-boot-applications.html
- https://docs.spring.io/spring-boot/reference/testing/testcontainers.html
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide
