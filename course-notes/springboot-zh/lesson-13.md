---
title: "第 13 課：撰寫 Unit Tests 與 Focused Spring Tests"
lesson: 13
slug: "lesson-13"
summary: "好的 tests 從快速 unit coverage 開始，只有在需要驗證 framework behavior 時才加入 Spring context。"
---

# 第 13 課：撰寫 Unit Tests 與 Focused Spring Tests

好的 tests 從快速 unit coverage 開始，只有在需要驗證 framework behavior 時才加入 Spring context。

## 這一課會學到什麼
- 分辨 plain unit tests 與 Spring-backed tests。
- 不啟動完整 application context 測試 service logic。
- 當需要 MVC、JSON、JPA 或 configuration behavior 時，使用 focused Spring test slices。

## 為什麼重要
- 不是每個 test 都需要 `@SpringBootTest` 的成本與複雜度。
- 快速 service tests 能在 integration details 分散注意前，先驗證 business rules。
- Boot 4 testing model 更 modular，因此選擇正確 test dependency 與 scope 很重要。

## 主要觀念
- Unit tests 用最少 framework involvement 驗證 plain Java behavior。
- Test slices 驗證 Spring stack 的聚焦部分。
- Full application tests 應留給真的需要 assembled context 的 behavior。

## 課程筆記
測試 Spring Boot application 不代表每個 test 都要啟動 Spring。許多重要 rules 存在 services、mappers、validators 與小型 helper classes 中。這些通常可以用 JUnit 與 Mockito 當作 plain Java objects 測試。

這個區分讓 feedback 更快。如果 service 依賴 repository interface，unit test 可以傳入 mock 或 fake repository 直接驗證 service rule。你不需要 embedded server 或 database 來檢查一個 calculation 或 branch。

Spring-backed tests 仍然重要。Controller test 可能需要 request mapping、JSON conversion、validation 與 error handling。Repository test 可能需要 JPA mapping 與 database behavior。關鍵是只啟動符合你問題的 slice。

Boot 4 也透過 technology-specific test starters 讓 test dependencies 更明確。Spring MVC controller test 使用 web MVC test support。JPA integration 使用 JPA test support。這避免假設一個 broad starter 會自動提供所有 technology 的 test behavior。

Test names 要以 behavior 為導向。一個 test 應說明保護了什麼 rule，而不只是重複 method name。好的 tests 會成為 service boundary 的 documentation，讓 refactoring 更安全。

正確 testing habit 是 layered：很多快速 unit tests、針對 framework boundaries 的 focused slice tests，以及較少的 full-context integration tests。

## 範例
```java
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

class NoteServiceTest {
    private final NoteRepository repository = Mockito.mock(NoteRepository.class);
    private final NoteService service = new NoteService(repository);

    @Test
    void createsNoteWithTrimmedTitle() {
        when(repository.save(Mockito.any(Note.class))).thenAnswer(invocation -> invocation.getArgument(0));

        service.create(new CreateNoteRequest("  API notes  ", "content"));

        verify(repository).save(Mockito.argThat(note -> note.getTitle().equals("API notes")));
    }
}
```

## 常見錯誤
- 對每個小 service rule 都使用 `@SpringBootTest`。
- Mock 到 test 已經不再驗證真實 behavior。
- 忘記為被測 technology 加入 focused test starter。
- 寫只鏡像 implementation details 的 tests。

## 練習
- 不啟動 Spring，為一個 service method 寫 unit test。
- 找出一個值得使用 Spring MVC slice test 的 controller behavior。
- 把目前 tests 分類為 unit、slice 或 full-context。

## 延續閱讀
- 上一課：`第 12 課：用 Service 與 Repository Layers 建立 CRUD APIs`
- 下一課：`第 14 課：為 Web 與 Persistence 撰寫 Boot 4 Integration Tests`

## 課後重點
- Boot 4 test design 應先從小範圍開始，只在 framework boundary 屬於被測 behavior 時才加入 Spring context。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/testing/index.html
- https://docs.spring.io/spring-boot/reference/testing/spring-boot-applications.html
