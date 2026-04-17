---
title: "第 8 課：處理請求、回應與 JSON"
lesson: 8
slug: "lesson-8"
summary: "大多數後端工作，都是把 HTTP 輸入轉成應用程式動作，並回傳有用的回應資料。"
---

# 第 8 課：處理請求、回應與 JSON

大多數後端工作，都是把 HTTP 輸入轉成應用程式動作，並回傳有用的回應資料。

## What You Will Learn
- 在 Spring Boot 端點中接收查詢參數、路徑變數與 JSON 請求主體。
- 使用 DTO 更清楚地定義 API 的輸入與輸出。
- 了解 Spring Boot 如何把 Java 物件序列化為 JSON 回應。

## Why This Matters
- 大多數後端工作，都是把 HTTP 輸入轉成應用程式動作，並回傳有用的回應資料。
- 良好的請求與回應設計，能讓 API 更容易閱讀、修改與測試。
- DTO 有助於把公開 API 契約與持久層細節、內部模型分開。

## Main Ideas
- 不同類型的 HTTP 輸入，會對應到不同的 Spring 註解。
- DTO 能保護 API，避免不小心暴露內部結構。
- JSON 序列化雖然是自動的，但回應長什麼樣仍然是你的設計責任。

## Lesson Notes
當第一個端點可以運作後，下一步就是學會真實世界中的 API 輸入是怎麼進來的。請求可以在好幾個地方攜帶資料：查詢參數、路徑變數、標頭，以及請求主體。Spring Boot 提供了專用註解，讓每一種輸入都能被清楚地映射。

`@RequestParam` 適合用於小型的篩選或搜尋值。`@PathVariable` 常見於 URL 用來識別某個特定資源的情境。`@RequestBody` 則是在用戶端送出結構化 JSON 時使用，例如建立或更新資料所需的內容。

一開始你可能會想直接把這些資料放進實體，或重複使用同一個類別處理所有事情。但這通常很快就會變得混亂。DTO 是更好的選擇，因為它能在 API 層精確定義輸入與輸出的形狀，而不必把內部模型的所有細節都暴露出去。

這種分離在之後會很有價值。如果你的資料庫模型改變了，通常仍然可以維持公開 API 的穩定性。如果 API 持續擴大，你也能有意識地新增或移除欄位，而不是因為實體被序列化而意外洩漏資料。

當正確的 Web 依賴存在時，Spring Boot 會自動處理 JSON 轉換。這種便利很強大，但不代表你就不需要設計。你仍然要決定哪些欄位該出現在回應中、哪些輸入值是必填，以及成功與失敗的 payload 應該如何組織。

良好的請求與回應處理，也能提升其他開發者閱讀程式碼時的理解效率。當有人看到控制器方法搭配清楚的 DTO 類型時，就更容易知道這個端點預期什麼輸入，以及它會回傳什麼。

這一課會讓後端開發開始變得更貼近真實情境。應用程式不再只是回傳靜態訊息，而是開始接收結構化的客戶端輸入，並塑造可預期的回應契約。

## Example
```java
package com.tommy.learningapi.notes;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

public record CreateNoteRequest(String title, String content) {}
public record NoteResponse(Long id, String title, String content) {}

@RestController
@RequestMapping("/api/notes")
public class NoteController {
    @PostMapping
    public NoteResponse create(@RequestBody CreateNoteRequest request) {
        return new NoteResponse(1L, request.title(), request.content());
    }

    @GetMapping("/{id}")
    public NoteResponse findById(@PathVariable Long id) {
        return new NoteResponse(id, "Spring Boot", "Request and response example");
    }
}
```

## Common Mistakes
- 太早直接把實體當成公開的請求與回應模型使用。
- 把路徑變數和查詢參數搞混。
- 在應該輸出有意義 JSON 的端點中，卻回傳沒有結構的字串。

## Practice
- 新增一個 POST 端點，從請求主體接收 JSON。
- 建立一個以路徑為基礎的端點，例如 `/api/notes/{id}`。
- 設計一個小型回應 DTO，而不是直接回傳原始實體或字串。

## Continuity
- 上一課：`第 7 課：建立你的第一個 REST Controller`
- 下一課：`第 9 課：驗證與全域例外處理`

## Key Takeaway
- 大多數後端工作，都是把 HTTP 輸入轉成應用程式動作，並回傳有用的回應資料。

## Official References
- https://docs.spring.io/spring-boot/reference/web/servlet.html
- https://spring.io/guides/gs/rest-service
