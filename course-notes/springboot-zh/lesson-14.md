---
title: "第 14 課：為 Controller 與 Repository 撰寫整合測試"
lesson: 14
slug: "lesson-14"
summary: "整合測試能抓到單元測試看不到的接線、映射與持久化問題。"
---

# 第 14 課：為 Controller 與 Repository 撰寫整合測試

整合測試能抓到單元測試看不到的接線、映射與持久化問題。

## 這一課會學到什麼
- 使用真實的框架接線來測試 controller 與 repository。
- 在適合的情境下使用 MockMvc 這類偏向 Web 的測試工具。
- 了解整合測試如何補足單元測試，而不是取代它。

## 為什麼重要
- 整合測試能抓到單元測試看不到的接線、映射與持久化問題。
- 它們有助於驗證不同分層邊界是否能正確協作。
- 它們能降低序列化、驗證與持久化錯誤一路流進正式環境的風險。

## 主要觀念
- 整合測試會驗證由框架管理的各個部分之間的協作。
- MockMvc 很適合在不開瀏覽器的情況下驗證 Web 層。
- 平衡的測試策略，會結合快速的單元測試與有選擇性的整合測試覆蓋。

## 課程筆記
單元測試非常適合驗證被隔離的邏輯，但它們無法告訴你整個應用程式是否被正確接線。整合測試透過讓多個分層一起運作，並納入真實的 Spring 行為，來補上這塊空白。

在 controller 測試方面，像 MockMvc 這樣的工具能讓你對 Web 層送出請求，並驗證狀態碼、JSON payload、標頭與驗證回應。這很有用，因為許多 API 問題不是邏輯問題，而是映射或序列化問題。

Repository 整合測試的重要性也很類似。某個 entity 在程式碼裡看起來也許正確，但映射到真實資料庫時仍可能出現意外行為。查詢、關聯、欄位映射與自動產生的 id，只有在真實持久化上下文中被驗證後，才更值得信任。

整合測試通常比純單元測試慢，因此應該有意識地使用。目標不是用最高成本去測試每一個微不足道的分支，而是挑出那些框架接線與跨層行為最重要的位置來覆蓋。

強健的測試策略往往像金字塔：大量單元測試、較少的整合測試，以及更少量的完整端對端檢查。Spring Boot 讓你能用聚焦的測試工具，務實地建立這個金字塔的中間層。在 Spring Boot 3.x 裡，這也可能包含用 Testcontainers 或 service connections 來建立更貼近真實資料庫的整合測試。

這些測試也很有價值，因為它們反映了應用程式真正的公開契約。如果 API 回傳了錯誤的 JSON 形狀，或者 repository 查詢因映射問題而失敗，整合測試通常能在使用者發現之前先把問題揭露出來。

隨著專案成長，你會越來越依賴這種多層次測試的組合。單元測試保護邏輯，整合測試保護邊界。兩者結合在一起，能讓後端更安全地持續演進。

## 範例
```java
package com.tommy.learningapi.notes;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class NoteControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    void getNotes_returnsOk() throws Exception {
        mockMvc.perform(get("/api/notes"))
            .andExpect(status().isOk())
            .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON));
    }
}
```

## 常見錯誤
- 對每一個很小的行為都使用整合測試。
- 忽略測試之間資料庫狀態的建立與清理。
- 只測 happy path，卻跳過驗證與失敗行為。

## 練習
- 為一個 GET 端點撰寫一個 MockMvc 測試。
- 新增一個 repository 測試，驗證 entity 的持久化或查詢行為。
- 比較你的單元測試覆蓋了什麼，以及整合測試覆蓋了什麼。
- 如果可以，再說明什麼情況下 Testcontainers 支撐的資料庫測試會比記憶體替代方案更可信。

## 延續閱讀
- 上一課：`第 13 課：為 Service 邏輯撰寫單元測試`
- 下一課：`第 15 課：Spring Boot 應用程式中的常見除錯模式`

## 課後重點
- 整合測試能抓到單元測試看不到的接線、映射與持久化問題。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/testing/index.html
- https://docs.spring.io/spring-framework/reference/testing/mockmvc.html
