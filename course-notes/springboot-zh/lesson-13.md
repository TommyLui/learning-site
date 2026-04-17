---
title: "第 13 課：為 Service 邏輯撰寫單元測試"
lesson: 13
slug: "lesson-13"
summary: "單元測試能快速驗證規則，並讓 service 程式碼在修改時更安全。"
---

# 第 13 課：為 Service 邏輯撰寫單元測試

單元測試能快速驗證規則，並讓 service 程式碼在修改時更安全。

## What You Will Learn
- 為 service 層行為撰寫聚焦的單元測試。
- 使用 mock 或 stub，把 service 與 repository 依賴隔離開來。
- 了解單元測試應該證明什麼，以及不應該試圖證明什麼。

## Why This Matters
- 單元測試能快速驗證規則，並讓 service 程式碼在修改時更安全。
- 它們能為商業邏輯提供快速回饋，而不需要啟動整個應用程式。
- 它們讓重構變得更容易，因為重要決策受到可重複執行的檢查保護。

## Main Ideas
- 單元測試應一次只隔離一個類別或一種行為。
- 當依賴不是被測試的主體時，mock 很有用。
- 好的測試描述的是商業行為，而不是重新實作方法內部細節。

## Lesson Notes
當你的 service 層開始承載真正的規則時，它就值得被直接驗證。單元測試是做到這件事最快的方法，因為它們聚焦在單一類別的隔離驗證，而不是啟動整個應用程式。

一個 service 單元測試，通常會用 mock 或 stub 取代 repository 依賴。這很重要，因為目標不是要證明資料庫能正常運作，而是要證明當 repository 回傳特定結果或拋出特定情況時，service 的行為是否正確。

例如，你可能想驗證 service 是否能回傳所有 notes、在 id 不存在時拋出 not-found 例外，或是在儲存前正確把 request 映射成 entity。這些都屬於商業層級的行為，而不是框架接線層級的問題。

寫得好的單元測試應該快速、表意清楚，而且聚焦。它應該告訴你是哪條規則失敗了，而不只是模糊地表示「某個地方出了問題」。如果測試本身很難理解，那麼 service 的設計可能也需要改善。

一個常見陷阱是過度使用 mock，或去測試實作細節。如果你的斷言與方法怎麼寫綁得太緊，而不是與它保證什麼行為綁在一起，那麼小小的重構也會因為錯誤的原因讓測試失敗。

另一個陷阱，是對簡單的 service 驗證也直接使用完整的 `@SpringBootTest` 啟動。這會讓測試變慢，也模糊單元測試與整合測試之間的界線。更大範圍的測試確實有其位置，但 service 規則通常值得一個更小、更精準的測試範圍。

越早學會 service 單元測試，最大的好處其實不只是正確性，而是信心。隨著應用程式成長，你能在不害怕的情況下修改 service 行為，會成為很大的生產力優勢。

## Example
```java
package com.tommy.learningapi.notes;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;

class NoteServiceTest {
    @Test
    void create_shouldSaveMappedNote() {
        NoteRepository repository = mock(NoteRepository.class);
        NoteService service = new NoteService(repository);
        CreateNoteRequest request = new CreateNoteRequest("DI", "constructor injection");

        service.create(request);

        verify(repository).save(any(Note.class));
    }
}
```

## Common Mistakes
- 對簡單的 service 測試也使用完整應用程式啟動。
- 在 service 單元測試裡測 repository 或 controller 的行為。
- 撰寫只是在映射私有實作細節的斷言。

## Practice
- 為一個會從 mocked repository 讀取資料的 service 方法撰寫單元測試。
- 為找不到 entity 或輸入無效的情境再加一個測試。
- 說明為什麼 service 單元測試不需要真實資料庫。

## Continuity
- 上一課：`第 12 課：用 Service 與 Repository 分層建立 CRUD API`
- 下一課：`第 14 課：為 Controller 與 Repository 撰寫整合測試`

## Key Takeaway
- 單元測試能快速驗證規則，並讓 service 程式碼在修改時更安全。

## Official References
- https://docs.spring.io/spring-boot/reference/testing/index.html
- https://spring.io/guides/gs/testing-web
