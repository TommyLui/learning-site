---
title: "第 8 課：用 Jackson 3 處理 Requests、Responses 與 JSON"
lesson: 8
slug: "lesson-8"
summary: "Boot 4 使用 Jackson 3 作為偏好的 JSON generation，因此 DTO design 與 JSON boundaries 應以這個世代為前提。"
---

# 第 8 課：用 Jackson 3 處理 Requests、Responses 與 JSON

Boot 4 使用 Jackson 3 作為偏好的 JSON generation，因此 DTO design 與 JSON boundaries 應以這個世代為前提。

## 這一課會學到什麼
- 使用 path variables、query parameters、request bodies、response bodies 與 DTOs。
- 理解 JSON serialization 與 deserialization 在 Spring MVC API 中的位置。
- 認識 Boot 4 轉向 Jackson 3，避免依賴過時 Jackson 2 customizations。

## 為什麼重要
- JSON 是多數 frontend clients 與 API consumers 會看到的 contract。
- DTOs 讓 HTTP-facing shapes 與 persistence entities、internal domain choices 分離。
- Jackson 3 對 advanced customization 的 package 與 module details 有改變，即使基本 JSON handling 仍很熟悉。

## 主要觀念
- Controllers 應接受與回傳明確的 request/response models。
- Records 是建立許多 immutable DTOs 的簡潔方式。
- 基本 JSON examples 可以保持簡單，但 advanced Jackson annotations 與 customizers 應對照 Boot 4 docs。

## 課程筆記
第一個 controller 能運作後，下一步是處理真實 request 與 response shapes。Client 可能送 path variables、query parameters、headers 或 JSON body。Controller 的工作是把這些 HTTP inputs map 成清楚的 Java shape，再回傳可預測的 response。

對許多 APIs 來說，request 與 response DTOs 比直接 expose entities 更好。Request DTO 可以描述 client 被允許送什麼；response DTO 可以描述 API 保證回傳什麼。這個分離能保護 application 其他部分不被意外 API changes 影響。

Spring MVC 使用 HTTP message converters 讀寫 JSON。Boot 4 中，Jackson 3 是偏好的 JSON library。對簡單 DTOs 來說，你仍然寫 records 或 classes，讓 framework serialize。差異主要出現在你 customize Jackson、使用特殊 modules，或複製引用舊 Jackson package names 的範例時。

不要把所有 concerns 混在一個 controller method 中。Bind request，讓下一課的 validation 處理 input rules，呼叫 service，然後回傳 response model。這能讓 JSON boundary 可讀且可測試。

命名也很重要。使用 API consumers 能理解的欄位，而不只是 database 欄位。如果 internal entity 有不該 expose 的欄位，不要直接回傳 entity；建立代表 API contract 的 response DTO。

這個階段的 Jackson 3 awareness 主要是一種紀律：有意識地使用簡單 JSON，並在教 advanced custom serializers、mixins 或 module configuration 前檢查目前 Boot 4 documentation。

## 範例
```java
package com.tommy.learningapi.notes;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/notes")
public class NoteController {
    @PostMapping
    public NoteResponse create(@RequestBody CreateNoteRequest request) {
        return new NoteResponse(1L, request.title(), request.content());
    }

    public record CreateNoteRequest(String title, String content) {}
    public record NoteResponse(Long id, String title, String content) {}
}
```

## 常見錯誤
- 每個 endpoint 都直接回傳 JPA entities。
- 把 DTO field names 當成不重要的 implementation details。
- 沒檢查 Boot 4 與 Jackson 3 package names，就複製舊 Jackson customization examples。
- 在一個 long method 中混合 request binding、business rules、persistence 與 response shaping。

## 練習
- 為 note creation endpoint 建立分開的 request 與 response records。
- 為 read endpoint 加上一個 query parameter 與一個 path variable。
- 搜尋範例中的 Jackson-specific imports，確認它們符合 current Boot 4 guidance 再使用。

## 延續閱讀
- 上一課：`第 7 課：使用 Spring MVC 建立第一個 REST Controller`
- 下一課：`第 9 課：Validation 與 Global Exception Handling`

## 課後重點
- Boot 4 JSON work 仍從清楚 DTOs 開始，但 advanced Jackson examples 應對齊 Jackson 3 世代。

## 官方參考資料
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/requestbody.html
- https://docs.spring.io/spring-boot/reference/features/json.html
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide
