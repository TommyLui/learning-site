---
title: "第 12 課：用 Service 與 Repository 分層建立 CRUD API"
lesson: 12
slug: "lesson-12"
summary: "CRUD 是許多後端應用程式的基礎，而分層做法能讓這些邏輯更容易維護。"
---

# 第 12 課：用 Service 與 Repository 分層建立 CRUD API

CRUD 是許多後端應用程式的基礎，而分層做法能讓這些邏輯更容易維護。

## What You Will Learn
- 把 controller、service 與 repository 串成完整的 CRUD 流程。
- 使用 DTO 與 service，把 API 契約與持久化關注點分開。
- 更乾淨地處理建立、更新、刪除與找不到資料等常見情境。

## Why This Matters
- CRUD 是許多後端應用程式的基礎，而分層做法能讓這些邏輯更容易維護。
- 分層邊界可以避免 controller 被持久化與商業邏輯塞爆。
- 這也是應用程式開始看起來像真實後端服務，而不是一組彼此孤立示範的地方。

## Main Ideas
- Controller 負責轉換 HTTP 輸入與輸出。
- Service 負責協調規則與持久化動作。
- Repository 應該支援 CRUD 流程，但不應成為所有商業決策都堆積的地方。

## Lesson Notes
CRUD API 通常是後端應用程式中第一個讓人感覺完整的垂直切片。它接收客戶端輸入、驗證資料、協調領域邏輯、持久化狀態，並回傳有用的回應。因此，它非常適合拿來認真練習分層設計。

一個常見錯誤，是因為一開始看起來比較快，就把所有 CRUD 邏輯都塞進 controller。結果通常會得到一個同時處理請求解析、驗證判斷、entity 映射、repository 呼叫與回應塑形的類別。這很快就會變得難測試，也更難擴充。

Service 層能讓設計保持乾淨。Controller 主要應該處理 HTTP 層級的工作：請求映射、輸入物件、回應狀態碼與回應主體。Service 則應該從商業角度決定 create、read、update 與 delete 操作該如何運作。

這種分離在更新與刪除流程中尤其有幫助。像是「如果 entity 不存在怎麼辦？」「哪些欄位可以被修改？」「之後應該回傳什麼？」這些問題，放在 service 裡通常比放在 controller 裡自然得多。

DTO 在這裡同樣重要。請求 DTO 有助於定義客戶端被允許送出的資料，而回應 DTO 則讓你決定 API 要暴露哪些內容。這樣可以保護你的公開契約，不會直接綁死在未來可能改變的持久化細節上。

Repository 仍然很重要，但它不應變成應用程式規則默默堆積的地方。它的角色是資料存取，而不是完整的應用程式協調中心。Service 層才是協調與領域決策更合適的家。

當 CRUD 流程建立完成時，你就已經擁有應用程式的一個強力垂直切片。之後關於測試、安全與部署的課程都會變得更容易，因為現在已經有一個足夠真實的核心可以依靠。

## Example
```java
package com.tommy.learningapi.notes;

import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Service
public class NoteService {
    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public Note create(CreateNoteRequest request) {
        Note note = new Note();
        note.setTitle(request.title());
        note.setContent(request.content());
        return noteRepository.save(note);
    }

    public Note findById(Long id) {
        return noteRepository.findById(id)
            .orElseThrow(() -> new NoteNotFoundException(id));
    }
}

class NoteNotFoundException extends RuntimeException {
    public NoteNotFoundException(Long id) {
        super("Note not found: " + id);
    }
}

@RestControllerAdvice
class NoteErrorHandler {
    @ExceptionHandler(NoteNotFoundException.class)
    ResponseEntity<Map<String, Object>> handleNotFound(NoteNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body(Map.of("error", ex.getMessage(), "status", 404));
    }
}
```

## Common Mistakes
- 直接在 controller 中放入持久化邏輯。
- 在更新或刪除時跳過找不到資料的處理。
- 沒有思考 API 契約邊界，就盲目回傳 entity。

## Practice
- 為一個 entity 實作 GET all、GET by id、POST、PUT 與 DELETE。
- 把共用的 CRUD 規則從 controller 移到 service。
- 設計一個回應 DTO，而不是直接回傳 entity。

## Continuity
- 上一課：`第 11 課：Entity、Repository 與 JPA 基礎`
- 下一課：`第 13 課：為 Service 邏輯撰寫單元測試`

## Key Takeaway
- CRUD 是許多後端應用程式的基礎，而分層做法能讓這些邏輯更容易維護。

## Official References
- https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html
- https://docs.spring.io/spring-data/jpa/reference/
