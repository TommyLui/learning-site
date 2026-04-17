---
title: "第 9 課：驗證與全域例外處理"
lesson: 9
slug: "lesson-9"
summary: "API 不只需要成功回應，也需要可預期的失敗行為。"
---

# 第 9 課：驗證與全域例外處理

API 不只需要成功回應，也需要可預期的失敗行為。

## 這一課會學到什麼
- 使用 Jakarta Validation 註解驗證傳入的請求資料。
- 使用 `@Valid`，讓無效輸入在業務邏輯執行前就被拒絕。
- 透過 `@ControllerAdvice` 與例外處理器集中管理錯誤回應。

## 為什麼重要
- API 不只需要成功回應，也需要可預期的失敗行為。
- 輸入驗證能在邊界保護你的領域邏輯不被錯誤資料污染。
- 全域錯誤策略能為客戶端提供更一致、更容易理解的 API 契約。

## 主要觀念
- 驗證應該同時存在於 API 邊界與更深層的商業規則中。
- `@ControllerAdvice` 能讓錯誤處理邏輯不必散落在每個控制器裡。
- 易讀的錯誤回應是 API 品質的一部分，不只是除錯方便而已。

## 課程筆記
一個後端應用程式，不應只看它在一切正確時如何運作。當請求不完整、格式錯誤或邏輯上無效時，它也必須能良好回應。驗證就是防止這些問題的第一道防線。

在 Spring Boot 3.x 中，請求驗證通常透過 Jakarta Validation 註解完成，例如 `@NotBlank`、`@Email`、`@Min` 或 `@Size`。實務上，這代表 classpath 上要有 Bean Validation 的實作，通常會透過 `spring-boot-starter-validation` 提供。當這些註解加在請求 DTO 欄位上，並且控制器使用 `@Valid` 時，Spring 會在你的服務邏輯執行前先檢查 payload。

這種邊界層級的驗證很重要，因為它能阻止明顯錯誤的輸入繼續滲透到系統更深處。它也讓 API 契約更清楚：客戶端知道哪些欄位是必要的，以及有哪些規則需要遵守。

不過，驗證只是一半的故事。當錯誤發生時，API 還必須以客戶端能理解的方式回應。如果每個控制器都用不同方式處理例外，整個應用程式很快就會變得不一致，也更難維護。

這就是 `@ControllerAdvice` 重要的原因。它可以集中處理驗證失敗、資源不存在、領域特定例外，以及其他應用程式層級的問題。你不需要在每個地方都重複撰寫回應邏輯，而是一次定義一套共通策略。

良好的全域錯誤回應應該簡單、可預期，而且容易擴充。它可以包含訊息、狀態碼、欄位錯誤清單或時間戳記。具體長相可以不同，但一致性比花俏的複雜設計更重要。

這一課會讓你的 API 更值得信任。客戶端不應該猜測送出錯誤輸入後會發生什麼，而開發者也不應該在每個新控制器中重新發明一套錯誤處理方式。

## 範例
```java
package com.tommy.learningapi.common;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.Valid;
import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

record CreateUserRequest(
    @NotBlank(message = "name is required") String name,
    @Email(message = "email must be valid") String email
) {}

@RestController
class UserController {
    @PostMapping("/api/users")
    ResponseEntity<Void> create(@Valid @RequestBody CreateUserRequest request) {
        return ResponseEntity.status(201).build();
    }
}

@RestControllerAdvice
class GlobalExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidation(MethodArgumentNotValidException ex) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("error", "Validation failed");
        body.put("status", 400);
        body.put("fieldErrors", ex.getBindingResult().getFieldErrors().stream()
            .collect(java.util.stream.Collectors.toMap(
                fieldError -> fieldError.getField(),
                fieldError -> fieldError.getDefaultMessage(),
                (first, second) -> first,
                LinkedHashMap::new
            )));
        return ResponseEntity.badRequest().body(body);
    }
}
```

## 常見錯誤
- 驗證做得太晚，只在 service 方法內部才處理。
- 把原始堆疊追蹤或框架內部細節回傳給 API 客戶端。
- 在每個控制器中複製貼上例外處理程式碼。

## 練習
- 在一個請求 DTO 上加入 `@NotBlank` 和另一條驗證規則。
- 為驗證失敗建立一個簡單的全域例外處理器。
- 設計一個可在多個端點重複使用的小型 JSON 錯誤格式。

## 延續閱讀
- 上一課：`第 8 課：處理請求、回應與 JSON`
- 下一課：`第 10 課：將 Spring Boot 3.x 連接到 MySQL`

## 課後重點
- API 不只需要成功回應，也需要可預期的失敗行為。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/io/validation.html
- https://docs.spring.io/spring-boot/reference/web/index.html
