---
title: "第 16 課：Spring Security 基礎"
lesson: 16
slug: "lesson-16"
summary: "安全性會改變請求在應用程式中的流動方式，並且是實際 API 不可或缺的一部分。"
---

# 第 16 課：Spring Security 基礎

安全性會改變請求在應用程式中的流動方式，並且是實際 API 不可或缺的一部分。

## What You Will Learn
- 理解驗證、授權與 filter chain 的核心概念。
- 看見為什麼即使還沒有自訂程式碼，加入 Spring Security 也會改變請求處理方式。
- 建立一個心智模型，讓你有意識地保護 endpoint，而不是無意間放任它們暴露。

## Why This Matters
- 安全性會改變請求在應用程式中的流動方式，並且是實際 API 不可或缺的一部分。
- 它保護應用程式的邊界，並決定系統內誰能做什麼。
- 如果沒有清楚的安全性模型，後端 API 很容易被錯誤地暴露出去。

## Main Ideas
- 驗證與授權解決的是不同問題。
- Spring Security 透過 filter 在請求處理邊界上運作。
- 安全的預設值很有幫助，但仍然需要有意識的應用程式設計。

## Lesson Notes
第一次加入 Spring Security 時，它常讓人覺得很突然，因為即使你還沒寫多少自訂邏輯，它就已經開始影響應用程式。原本開放的 endpoint 可能會突然需要驗證。這種驚訝不是 bug；它反映出安全性本來就是在請求處理邊界上運作。

最重要的兩個概念是驗證與授權。驗證回答的是使用者是誰。授權回答的是該使用者被允許做什麼。一個安全的應用程式兩者都需要，但不應把它們混為一談。

Spring Security 會在請求抵達 controller 之前，先透過一條 filter chain 來處理請求。這也是為什麼安全性不只是你程式中間的另一個 service。它位在應用程式的前方，決定某個請求是否應該繼續往下走。

這種設計很強大，因為它讓你能集中控制存取規則。你可以定義哪些 endpoint 是公開的、哪些需要登入使用者、哪些需要特定角色或權限。這讓安全性政策更清楚也更一致。

對學習者來說，最有用的心態是把安全性看成應用程式邊界上的交通控管。你不只是加上一個登入畫面，而是在決定每一個請求在進入商業邏輯之前，應該如何被評估。

Spring Boot 透過把 Security 與整體應用程式模型整合，讓這件事更容易，但這份便利不應掩蓋底層概念。如果你理解 filter chain 與存取規則，之後像自訂登入流程、JWT 或方法層級安全性這些功能，就會更容易推理。

這一課是課程從建立功能轉向保護功能的轉折點。這個改變，是真實後端開發的核心。

## Example
```java
package com.tommy.learningapi.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults())
            .build();
    }
}
```

## Common Mistakes
- 把驗證與授權混為一談。
- 加入 Spring Security 時，沒有預期每個 endpoint 都會受到影響。
- 把安全性只當成 UI 登入問題，而不是 API 邊界問題。

## Practice
- 定義一個公開 endpoint 與一個受保護的 endpoint。
- 用你自己的話解釋 filter chain 在 controller 被呼叫前做了什麼。
- 列出三個預設情況下不應公開的 API 資源。

## Continuity
- 上一課：`第 15 課：Spring Boot 應用程式中的常見除錯模式`
- 下一課：`第 17 課：登入流程、密碼編碼與授權`

## Key Takeaway
- 安全性會改變請求在應用程式中的流動方式，並且是實際 API 不可或缺的一部分。

## Official References
- https://spring.io/projects/spring-security
- https://docs.spring.io/spring-boot/reference/web/spring-security.html
