---
title: "第 4 課：依賴注入與 Bean"
lesson: 4
slug: "lesson-4"
summary: "依賴注入是建立乾淨且可測試的 Spring 應用程式時，最核心的觀念之一。"
---

# 第 4 課：依賴注入與 Bean

依賴注入是建立乾淨且可測試的 Spring 應用程式時，最核心的觀念之一。

## What You Will Learn
- 理解 Spring 如何把物件作為 bean 管理在 application context 裡。
- 說明為什麼 constructor injection 是大多數應用程式程式碼的預設選擇。
- 看見依賴注入如何幫助 controller、service 與 repository 層之間維持更乾淨的邊界。

## Why This Matters
- 依賴注入是建立乾淨且可測試的 Spring 應用程式時，最核心的觀念之一。
- 它避免 class 什麼都自己建立、自己控制。
- 它讓 Spring Boot 能以一致的方式組裝應用程式分層，並在測試中替換實作。

## Main Ideas
- Bean 是由 Spring container 管理的物件。
- Constructor injection 讓依賴更明確，也更容易測試。
- 當依賴方向清楚時，分層式設計會運作得最好。

## Lesson Notes
在一般 Java 裡，直接用 `new` 建立物件是很常見的，而在小型程式中這樣可能也足夠。但在 Spring Boot 應用程式裡，許多重要物件不是手動建立的。它們會被 Spring container 建立、保存並管理。一旦 Spring 對這些物件負責，它們就成為 bean。

這個改變之所以重要，是因為物件建立不再散落在整個程式碼庫中。與其讓每個 class 自己建出依賴，Spring 可以先把整張物件關係圖組裝好，然後把正確的協作者注入到需要它們的地方。這會讓應用程式從一開始就更有組織。

依賴注入的意思是：class 從外部接收它需要合作的物件，而不是在內部自己把它們建出來。controller 可以接收 service，service 可以接收 repository。class 依然會像平常那樣使用這些依賴，但它不需要決定它們是怎麼被建立的。

Constructor injection 是這個模式裡最清楚的形式。當依賴出現在 constructor 裡時，任何閱讀這個 class 的人都能立刻看出它運作時需要什麼。它也能讓 class 更不容易被誤用，因為必要的協作者必須一開始就提供進來。

這種方式在測試中特別有幫助。如果一個 service 依賴 repository，單元測試就可以傳入一個 mock repository，而不需要啟動整個 Spring context。這也是為什麼在大多數應用程式程式碼裡，相較於 field injection，constructor injection 通常被視為更容易維護。

Bean 也會強化責任邊界。controller 應該主要負責把 HTTP 請求轉換成應用程式動作。service 應該承載商業邏輯。repository 應該處理持久化。依賴注入讓這些邊界更容易被維持，因為每一層都透過清楚的契約依賴下一層。

初學者有時會覺得依賴注入只是 framework 的小技巧，但它其實是一種設計原則。Spring Boot 透過提供 application context，讓這個原則能在大型系統中實際運作，並自動發現、建立與組裝 component。

一旦這個概念清楚了，後面很多主題都會變得更容易。configuration class、repository、filter、安全性元件與測試替身，全都依賴同一個心智模型：Spring 會管理重要物件的生命週期，並把它們注入到正確的位置。

## Example
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

## Common Mistakes
- 在 controller 裡手動建立 service 或 repository 物件。
- 到處用 field injection，把必要依賴藏起來。
- 讓某一層依賴太多彼此無關的 class。

## Practice
- 建立一個透過 constructor injection 接收 service 的 controller。
- 寫下你的 service class 真正需要哪些依賴，以及哪些東西其實不該放在裡面。
- 說明為什麼與在 method 裡手動建立物件相比，constructor injection 會讓測試更容易。

## Continuity
- 上一課：`第 3 課：理解專案結構與啟動流程`
- 下一課：`第 5 課：設定檔與 Profile`

## Key Takeaway
- 依賴注入是建立乾淨且可測試的 Spring 應用程式時，最核心的觀念之一。

## Official References
- https://docs.spring.io/spring-boot/reference/features/index.html
- https://spring.io/guides/gs/rest-service
