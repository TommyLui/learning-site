---
title: "第 9 課：Validation 與 Global Exception Handling"
lesson: 9
slug: "lesson-9"
summary: "Validation 與 centralized error handling 會把原始 controller methods 變成更可靠的 API contract。"
---

# 第 9 課：Validation 與 Global Exception Handling

Validation 與 centralized error handling 會把原始 controller methods 變成更可靠的 API contract。

## 這一課會學到什麼
- 使用 Jakarta Validation annotations 驗證 request DTOs。
- 用 `@Valid` 在 HTTP boundary 觸發 validation。
- 使用 `@RestControllerAdvice` 與 exception handlers 集中 API error responses。

## 為什麼重要
- APIs 需要可預測的 input rules 與可預測的 failure responses。
- Boot 4 延續 Jakarta API line，所以 validation imports 應使用 `jakarta.validation.*`。
- 清楚的 error handling 改善 client experience，並讓 controllers 保持聚焦。

## 主要觀念
- 在 external input 進入 business logic 前驗證它。
- 不要把臨時 error response code 分散在每個 endpoint。
- Error responses 是 API contract 的一部分，應該有意識地設計。

## 課程筆記
Controllers 接收 JSON bodies 後，就需要 input rules。Note title 可能必填，page size 可能需要最大值，email field 可能需要 email-shaped text。這些 rules 應靠近 request boundary，避免 invalid data 深入 application。

Spring Boot 4 使用 Jakarta Validation 世代。這代表 examples 應從 `jakarta.validation` import annotations，例如 `jakarta.validation.Valid`、`jakarta.validation.constraints.NotBlank` 與 `jakarta.validation.constraints.Size`。不要退回舊的 `javax.validation` imports。

Validation annotations 很適合放在 request DTOs，因為它們記錄了 clients 必須滿足的 contract。Controller parameter 加上 `@Valid` 後，Spring MVC 會在 JSON body binding 後、controller method 繼續前驗證 object。

Validation failure 只是故事的一半。Clients 也需要一致的 error responses。`@RestControllerAdvice` 讓你把 controllers 的 exception handling 集中起來，讓 errors 有可預測形狀。你可以決定要包含 message、field errors、path 或 timestamp。

一開始的 error model 保持簡單即可。目標不是第一天就設計完美 enterprise error format，而是停止回傳不一致或令人困惑的 responses，並避免每個 controller 都重複 error handling。

這一課會為 persistence 與 security 打基礎，因為這兩個領域都會產生應轉換成有用 API responses 的 failures，而不是 raw stack traces。

## 範例
```java
package com.tommy.learningapi.notes;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestController
class NoteController {
    @PostMapping("/api/notes")
    NoteResponse create(@Valid @RequestBody CreateNoteRequest request) {
        return new NoteResponse(1L, request.title(), request.content());
    }
}

record CreateNoteRequest(
    @NotBlank String title,
    @Size(max = 2_000) String content
) {}

record NoteResponse(Long id, String title, String content) {}

@RestControllerAdvice
class ApiExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    ErrorResponse handleValidation(MethodArgumentNotValidException ex) {
        return new ErrorResponse("Validation failed");
    }
}

record ErrorResponse(String message) {}
```

## 常見錯誤
- 在 modern Boot course 中 import `javax.validation.*`。
- 加了 validation annotations，卻忘記在接收 request 的地方加 `@Valid`。
- 把 raw exception messages 或 stack traces 回傳給 clients。
- 讓每個 controller 都建立自己的 error response shape。

## 練習
- 在 request DTO 加上 `@NotBlank` 與 `@Size`。
- 觸發一次 validation failure，觀察 response。
- 為 domain-specific exception 建立一個 centralized exception handler。

## 延續閱讀
- 上一課：`第 8 課：用 Jackson 3 處理 Requests、Responses 與 JSON`
- 下一課：`第 10 課：把 Spring Boot 4.x 接上 MySQL 與 Hibernate 7`

## 課後重點
- Boot 4 APIs 應使用 Jakarta Validation 驗證 input，並從 centralized boundary 回傳一致 errors。

## 官方參考資料
- https://docs.spring.io/spring-framework/reference/core/validation/beanvalidation.html
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-validation.html
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-advice.html
