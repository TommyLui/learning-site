---
title: "第 4 課：Dependency Injection 與 Beans"
lesson: 4
slug: "lesson-4"
summary: "Dependency injection 是乾淨、可測試 Spring Boot 4 application 背後穩定不變的核心觀念之一。"
---

# 第 4 課：Dependency Injection 與 Beans

Dependency injection 是乾淨、可測試 Spring Boot 4 application 背後穩定不變的核心觀念之一。

## 這一課會學到什麼
- 理解 Spring 如何在 application context 中把 objects 管理成 beans。
- 說明為什麼 constructor injection 是 application code 的預設選擇。
- 看懂 dependency injection 如何支援 controller、service、repository、security 與 test boundaries。

## 為什麼重要
- Boot 4 更新的是 platform，但 dependency injection 仍是 Spring application design 的基礎。
- 明確 dependencies 會讓 code 更容易閱讀、測試與 refactor。
- 好的 bean boundaries 能避免 framework 變成隱藏模糊架構的地方。

## 主要觀念
- Beans 是由 Spring container 管理的 objects。
- Constructor injection 讓必要 collaborators 變得可見。
- Layered design 最適合讓每一層透過清楚 contract 依賴下一層。

## 課程筆記
在 plain Java 中，直接用 `new` 建立 objects 很常見。Spring application 中，許多重要 objects 會由 Spring container 建立與管理。只要 Spring 管理一個 object，它就成為 bean。

Dependency injection 的意思是 class 接收自己需要的 collaborators，而不是在內部自己建立它們。Controller 接收 service，service 接收 repository，security configuration 接收 authentication 或 authorization 所需的 components。Class 照常使用 collaborators，但 application context 負責組裝。

Constructor injection 通常最清楚。它把 required dependencies 顯示在 class 上方，支援 `final` fields 的 immutability，也讓 tests 更直覺，因為 test 可以傳入 fake 或 mock collaborator，而不必啟動完整 Spring context。

這個概念跨 Boot 世代都很穩定。Spring Boot 4 改變了 managed dependency versions 與一些 starter/test details，但沒有替換 dependency-injection mental model。現在把 beans 學好，後面理解 configuration properties、repositories、security filters、test slices 與 custom auto-configuration 都會更容易。

最重要的 design habit 是保持 dependencies 有意義。Controller 不應直接依賴 database driver。Service 除非真的需要，否則不應知道 HTTP request objects。Dependency injection 讓新增 dependencies 很容易，所以你仍然要判斷哪些 dependencies 真正屬於這裡。

當 bean boundaries 乾淨之後，課程其他部分會更容易。Auto-configuration 可以提供 infrastructure beans，你的 application 可以提供 domain beans，而 tests 可以替換特定 collaborators，同時保留 code shape。

## 範例
```java
package com.tommy.learningapi.notes;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Service
public class NoteService {
    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public List<Note> findAll() {
        return noteRepository.findAll();
    }
}

@RestController
@RequestMapping("/api/notes")
public class NoteController {
    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping
    public List<Note> getNotes() {
        return noteService.findAll();
    }
}
```

## 常見錯誤
- 在 controllers 裡手動建立 services 或 repositories。
- 用 field injection 隱藏 required dependencies。
- 讓一個 class 依賴來自每一層、彼此無關的 infrastructure。
- 以為 Boot 4 auto-configuration 會移除清楚 application design 的需求。

## 練習
- 建立一個透過 constructor injection 接收 service 的 controller。
- 寫下 service 真正需要的 dependencies，移除不相關項目。
- 不啟動 Spring，用 fake repository 測試一個 service。

## 延續閱讀
- 上一課：`第 3 課：理解專案結構、啟動流程與 Embedded Servers`
- 下一課：`第 5 課：Configuration Files、Profiles 與 Type-Safe Settings`

## 課後重點
- 正確使用 dependency injection，能讓 Spring Boot 4 code 保持明確、模組化與可測試。

## 官方參考資料
- https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html
- https://docs.spring.io/spring-framework/reference/core/beans/annotation-config/autowired.html
