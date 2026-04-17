---
title: "第 7 課：建立你的第一個 REST Controller"
lesson: 7
slug: "lesson-7"
summary: "第一個 controller 會讓專案從一個正在執行的程序，變成一個真正有用的 Web 應用程式。"
---

# 第 7 課：建立你的第一個 REST Controller

第一個 controller 會讓專案從一個正在執行的程序，變成一個真正有用的 Web 應用程式。

## What You Will Learn
- 使用 `@RestController` 與 mapping 註解建立可運作的 HTTP endpoint。
- 理解請求路徑如何連接到 Java 方法。
- 認識 controller 是後端應用程式對外處理 Web 請求的入口。

## Why This Matters
- 第一個 controller 會讓專案從一個正在執行的程序，變成一個真正有用的 Web 應用程式。
- 這是 Spring Boot 開始真正處理 HTTP 流量，而不只是成功啟動的那一刻。
- 它會引入 controller 層，而之後整個 API 設計都會建立在這個基礎上。

## Main Ideas
- `@RestController` 會直接把資料寫進 HTTP 回應中。
- 請求映射註解會把 URL 與 HTTP 動詞連到方法上。
- Controllers 應該保持精簡，專注於 Web 層關注點。

## Lesson Notes
一個 Spring Boot 應用程式如果只會成功啟動，還不算真的在做有意義的後端工作。第一個真正的里程碑，是應用程式能夠回應 HTTP 請求。而這正是 controller 層的工作。

在 Spring Boot 中，REST controller 通常是一個標註了 `@RestController` 的小型類別。這個註解會告訴 Spring 兩件事：這個類別要處理 Web 請求，而且方法回傳的值應直接寫入 response body，而不是被當成 view name。

像 `@GetMapping`、`@PostMapping` 與 `@RequestMapping` 這類方法層級註解，會把 URL 與 HTTP 方法連接到 Java 方法上。這種映射，是後端設計中最明顯的部分之一，因為它定義了用戶端如何與你的服務互動。

第一個 controller 通常刻意保持簡單。它可能只回傳一段問候語、一則健康檢查訊息，或一個小型 JSON payload。這種簡單很有價值，因為它能確認 routing、序列化與伺服器啟動是否真的一起正常運作。

在這個階段，controller 可以先直接包含邏輯，但那不是長期目標。隨著專案成長，商業邏輯應該被移到 services，讓 controller 持續專注在 HTTP 輸入、輸出與回應狀態。

另一個有用的觀念是，controllers 屬於你應用程式的公開表面。它們的 URL、回應格式與錯誤行為，都會成為用戶端依賴的契約。因此，即使只是第一個 endpoint，清楚的設計也很重要。

當第一個 controller 正常運作後，你就準備好從「確認活著」進入真正的 API 設計。接下來的課程，會在這個基礎上進一步處理請求輸入、JSON payload、驗證與持久化。

## Example
```java
package com.tommy.learningapi.notes;

import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/greetings")
public class GreetingController {
    @GetMapping
    public Map<String, String> greeting() {
        return Map.of(
            "message", "Hello, Spring Boot 3.x",
            "status", "ready"
        );
    }
}
```

## Common Mistakes
- 明明想直接回傳 JSON，卻用了 `@Controller`。
- 測試了錯誤的路徑或連接埠，然後以為 controller 壞掉了。
- 隨著 controller 開始變大，把無關的商業邏輯直接塞進去。

## Practice
- 建立一個會回傳 JSON 訊息的 GET endpoint。
- 修改請求路徑，並在新的 URL 確認回應。
- 解釋為什麼當應用程式變複雜時，controller 應該保持更精簡。

## Continuity
- 上一課：`第 6 課：Spring Boot 3.x 的自動設定`
- 下一課：`第 8 課：處理請求、回應與 JSON`

## Key Takeaway
- 第一個 controller 會讓專案從一個正在執行的程序，變成一個真正有用的 Web 應用程式。

## Official References
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/responsebody.html
