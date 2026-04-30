---
title: "第 16 課：Spring Security 7 基礎"
lesson: 16
slug: "lesson-16"
summary: "Spring Security 7 透過 filter-chain model 保護 Boot 4 applications，並分離 authentication、authorization 與 application logic。"
---

# 第 16 課：Spring Security 7 基礎

Spring Security 7 透過 filter-chain model 保護 Boot 4 applications，並分離 authentication、authorization 與 application logic。

## 這一課會學到什麼
- 理解 authentication、authorization 與 security filter chain。
- 看懂為什麼加入 Spring Security 後，即使還沒寫 custom application code，也會改變 request handling。
- 用 `SecurityFilterChain` bean 設定 access rules。
- 認識 Spring Security 7 是對齊 Spring Boot 4.x 的 security generation。

## 為什麼重要
- Security 會改變每個 request 到達 application 的方式。
- Secure defaults 很有用，但 production APIs 仍需要 deliberate access rules。
- Spring Security 7 仍以 filter-chain configuration 為中心，而不是已移除的 `WebSecurityConfigurerAdapter` style。

## 主要觀念
- Authentication 問 caller 是誰；authorization 問 caller 可以做什麼。
- Spring Security 會在 request 到達大多數 controller logic 前先評估。
- `SecurityFilterChain` configuration 讓 rules 明確且可 review。

## 課程筆記
Spring Security 一開始可能感覺很突然，因為它一加入 application 就會產生影響。原本 public 的 endpoints 可能開始需要 authentication。這不是意外；security 位在 request boundary，會在 controller 收到 request 前先評估 traffic。

Authentication 與 authorization 解決不同問題。Authentication 識別 caller；authorization 決定那個 caller 是否能 access 特定 resource 或 action。安全 API 需要兩者，但混淆它們會導致 rules 很難理解。

Filter chain 是核心 request-processing model。Security filters 可以讀取 credentials、建立 authenticated principal、拒絕 unauthenticated requests、執行 role 或 authority rules，並為 downstream code 準備 security context。這就是為什麼 security 不只是你手動呼叫的一個 service method。

在 Spring Security 7 中，現代 configuration style 仍然是註冊 `SecurityFilterChain` bean，並明確描述 access rules。不要重新引入 `WebSecurityConfigurerAdapter`；那個舊 inheritance model 不是 modern Boot applications 的路線。

Boot 4 也有 security-specific starter 與 test starter changes。Dependencies 要保持 intentional：準備保護 endpoints 時才加入 security starter；tests 需要 mock users 或 request post-processors 這類 security support 時，才加入 security test starter。

這一課是從建立功能轉向保護功能的轉折。Filter-chain model 清楚後，login flows、password encoding、JWT resource servers 與 method security 都會更容易推理。

## 範例
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

## 常見錯誤
- 混淆 authentication 與 authorization。
- 加入 Security 卻沒預期既有 endpoints 會要求 authentication。
- 把 `WebSecurityConfigurerAdapter` examples 複製到 modern Security 7 project。
- 測試 secured endpoints 時沒有加入該 test style 需要的 security test support。

## 練習
- 定義一個 public endpoint 與一個 protected endpoint。
- 用自己的話說明 secured request 到達 controller 前會發生什麼。
- 加入一個 test，驗證 unauthenticated request 會被拒絕。

## 延續閱讀
- 上一課：`第 15 課：Boot 4 Applications 常見 Debugging Patterns`
- 下一課：`第 17 課：Login Flow、Password Encoding 與 Authorization`

## 課後重點
- Spring Security 7 透過明確 filter-chain rules 保護 Boot 4 APIs，並分離 identity、permission 與 business logic。

## 官方參考資料
- https://docs.spring.io/spring-security/reference/servlet/architecture.html
- https://docs.spring.io/spring-security/reference/servlet/authorization/authorize-http-requests.html
- https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html
