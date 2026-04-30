---
title: "第 12 課：用 Service 與 Repository Layers 建立 CRUD APIs"
lesson: 12
slug: "lesson-12"
summary: "當 controllers、services、DTOs、repositories、validation 與 transactions 各自有清楚工作時，CRUD endpoints 才會可維護。"
---

# 第 12 課：用 Service 與 Repository Layers 建立 CRUD APIs

當 controllers、services、DTOs、repositories、validation 與 transactions 各自有清楚工作時，CRUD endpoints 才會可維護。

## 這一課會學到什麼
- 用 layered boundaries 建立 create、read、update 與 delete flows。
- 有意識地在 API DTOs 與 persistence entities 間轉換。
- 為常見 CRUD outcomes 回傳適當 HTTP statuses。

## 為什麼重要
- CRUD 只有在範例很小時才簡單；真實 projects 需要在 features 成長前建立 boundaries。
- Layering 讓 validation、persistence、transactions、security 與 tests 更容易接上。
- 一致的 API behavior 讓 clients 能可靠處理 success 與 failure。

## 主要觀念
- Controllers 轉譯 HTTP；services 協調 business work；repositories 持久化資料。
- DTOs 保護 API contracts 不被 entity details 汙染。
- Not found、validation failure、create success、update success 與 delete success 都應一致表示。

## 課程筆記
CRUD API 是有用的里程碑，因為它迫使前面幾課一起運作。Controller 接收 request DTO，validation 檢查 input，service 協調 rules 與 persistence，repository 與 database 溝通，controller 用適當 status 回傳 response DTO。

初學者最大的錯誤是讓 controller 做所有事情。一個 endpoint 可能還能運作，但很快就會難以測試與修改。把 application rules 移到 service，可以讓 web layer 保持薄，也讓 tests 有自然位置可以驗證 behavior，而不必每次都啟動完整 web stack。

Updates 與 deletes 需要小心處理 not-found behavior。如果 client 要求不存在的 note id，回傳 generic server error 會誤導。把 domain-specific exception 轉成 404 response 會更清楚，也更容易被 clients 處理。

Create operations 通常回傳 201 Created，常搭配 created representation。Reads 找到時回 200，找不到時回 404。Deletes 可以回 204 No Content。這些選擇不只是 framework details；它們是 REST API design 的一部分。

Transactions 應覆蓋必須保持一致的 write operations。更新 entity 的 service method 應定義 unit of work。Read-only methods 有時可以使用 read-only transaction hints，但第一版先保持簡單可理解。

到這一課結束時，你應該有一個小型 API，看起來像真實 backend slice，而不是一組彼此無關的 framework demos。

## 範例
```java
@RestController
@RequestMapping("/api/notes")
class NoteController {
    private final NoteService service;

    NoteController(NoteService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    NoteResponse create(@Valid @RequestBody CreateNoteRequest request) {
        return service.create(request);
    }

    @GetMapping("/{id}")
    NoteResponse findById(@PathVariable Long id) {
        return service.findById(id);
    }
}
```

## 常見錯誤
- 把所有 CRUD logic 直接寫在 controllers 裡。
- 預設把 database entities 當成 public response model。
- 把所有 failure 都當成 500 error。
- 更新 records 時沒有清楚 transaction boundary。

## 練習
- 為一個 resource 建立 create 與 read endpoints。
- 加入 not-found exception，並 map 成 404 response。
- 畫出 request DTO 到 entity 再到 response DTO 的 flow。

## 延續閱讀
- 上一課：`第 11 課：Entities、Repositories、Transactions 與 JPA 基礎`
- 下一課：`第 13 課：撰寫 Unit Tests 與 Focused Spring Tests`

## 課後重點
- 可維護的 Boot 4 CRUD API 來自 web、service 與 persistence layers 之間小而清楚的責任分工。

## 官方參考資料
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller.html
- https://docs.spring.io/spring-data/jpa/reference/repositories/core-concepts.html
