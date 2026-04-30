---
title: "第 7 課：使用 Spring MVC 建立第一個 REST Controller"
lesson: 7
slug: "lesson-7"
summary: "REST controller 是 Boot 4 Spring MVC service 中，HTTP requests 第一次變成 application behavior 的地方。"
---

# 第 7 課：使用 Spring MVC 建立第一個 REST Controller

REST controller 是 Boot 4 Spring MVC service 中，HTTP requests 第一次變成 application behavior 的地方。

## 這一課會學到什麼
- 建立 `@RestController`，並用 Spring MVC annotations map HTTP requests。
- 理解 web MVC starter 如何把 controllers 連到 embedded servlet server。
- 讓 controller methods 保持小型，負責轉譯 request，而不是承載所有 business logic。

## 為什麼重要
- REST endpoints 通常是 backend API 最可見的 contract。
- Controllers 位在 HTTP 與 application model 的邊界。
- 乾淨的第一個 controller 會為 DTOs、validation、error handling、security 與 tests 鋪路。

## 主要觀念
- `@RestController` 結合 controller behavior 與 response-body serialization。
- `@RequestMapping`、`@GetMapping` 等 annotations 會 map HTTP paths 與 methods。
- Controllers 應在 application 成長後，把真正有意義的工作交給 services。

## 課程筆記
Spring MVC starter 到位後，Boot 4 會 auto-configure servlet web stack 並啟用 controller mapping。對基本 API 來說，你不需要手動啟動 Tomcat 或註冊 dispatcher servlet。你宣告 controller、map route，framework 就會把 incoming requests 連到你的 method。

第一個 controller 應該刻意保持簡單。`GET /api/hello` 回傳一個小 message，就足以證明 startup、routing、serialization 與 embedded server 正在一起運作。目標不是複雜 business logic，而是理解 request path。

`@RestController` 告訴 Spring MVC，return values 應寫入 HTTP response body。回傳簡單 object 或 record 通常會透過 configured HTTP message converters 變成 JSON。下一課會看到 Jackson 3 如何參與這個 conversion。

Path design 即使在小範例中也很重要。使用可預測的 nouns，把相關 endpoints 放在穩定 prefix 下，例如 `/api/notes`，避免把無關 resources 混在同一個 controller。好的 route shape 會讓 validation、security 與 documentation 更容易。

Controller methods 一開始做真實工作時，就應把那個工作移到 services。Controllers 應接收與驗證 HTTP-facing input、呼叫 application layer，並整理 response。這個 boundary 能讓 web layer 可測試，也避免 HTTP concerns 到處洩漏。

這一課是 setup 後第一個可見成果。Boot 4 app 不只是啟動了；它已經能接收 HTTP requests 並回傳 API responses。

## 範例
```java
package com.tommy.learningapi.hello;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {
    @GetMapping("/hello")
    public Message hello() {
        return new Message("Hello, Spring Boot 4.x");
    }

    public record Message(String text) {}
}
```

## 常見錯誤
- 把所有 business rules 直接放在 controller methods 裡。
- 類似 endpoints 回傳不一致的 response shapes。
- 忘記 controller paths 會成為 public API contract 的一部分。
- 在確認 basic endpoint 能運作前就加入 Security。

## 練習
- 建立 `GET /api/hello` endpoint，回傳小型 JSON object。
- 在同一個 controller 底下加入第二個 endpoint，比較 route names。
- 把一段非 HTTP logic 移到 service class。

## 延續閱讀
- 上一課：`第 6 課：Auto-configuration 與 Boot 4 Modular Starters`
- 下一課：`第 8 課：用 Jackson 3 處理 Requests、Responses 與 JSON`

## 課後重點
- Boot 4 REST controller 應乾淨地轉譯 HTTP requests，並把真正的 application behavior 委派到正確 layer。

## 官方參考資料
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller.html
- https://docs.spring.io/spring-boot/reference/web/servlet.html
