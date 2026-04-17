---
title: "第 17 課：登入流程、密碼編碼與授權"
lesson: 17
slug: "lesson-17"
summary: "後端不只需要登入表單；它還需要安全地處理憑證與進行權限檢查。"
---

# 第 17 課：登入流程、密碼編碼與授權

後端不只需要登入表單；它還需要安全地處理憑證與進行權限檢查。

## What You Will Learn
- 理解登入與已驗證存取在伺服器端的基本流程。
- 看見為什麼密碼編碼是必要條件，而不是可選功能。
- 套用簡單的授權規則，例如以角色為基礎的存取控制。

## Why This Matters
- 後端不只需要登入表單；它還需要安全地處理憑證與進行權限檢查。
- 即使在小型專案中，憑證處理錯誤也可能造成嚴重的安全問題。
- 授權規則能讓存取控制變得明確且可稽核，而不是靠偶然成立。

## Main Ideas
- 密碼在儲存與比對之前都應先經過編碼。
- 授權規則應集中管理，並且容易檢視。
- 登入流程設計會同時影響使用者體驗與系統安全。

## Lesson Notes
登入功能其實是一連串的安全決策。應用程式接收憑證、檢查它們是否符合已知使用者、決定要建立哪一種已驗證狀態，然後在之後的請求中套用授權規則。

其中一個最不能妥協的要求，就是密碼編碼。原始密碼絕不應直接儲存。Spring Security 提供了像 BCrypt 這樣的 encoder，讓應用程式儲存的是單向雜湊，而不是原始祕密值。

這件事之所以重要，是因為後端的責任不只是接受憑證，還包括在資料外洩時盡可能降低損害。如果儲存的是原始密碼，後果會嚴重得多。因此，編碼是基本的安全責任，不是進階優化。

授權發生在驗證成功之後。一旦應用程式知道使用者是誰，就可以決定該使用者能存取什麼。有些 endpoint 可以對任何已驗證使用者開放，而其他 endpoint 可能需要像 `ADMIN` 這樣的特定角色。

清楚的授權規則能同時提升安全性與可維護性。如果存取邏輯零散地分布在 controller 與 service 中，而且不一致，就會變得很難審查，也很容易被破壞。集中式規則能讓安全性政策更清楚可見。

這一課也幫你為比較有狀態與無狀態登入風格做準備。無論應用程式使用 session 還是 token，它都仍然要解決相同的核心問題：憑證驗證、安全的密碼儲存，以及明確的存取規則。

現在學會這個流程，會讓你之後做安全性決策時更有意識。應用程式不只要讓使用者登入，還應清楚定義他們如何被識別，以及那個身分允許他們做什麼。

## Example
```java
package com.tommy.learningapi.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class UserSecurityConfig {
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {
        UserDetails admin = User.withUsername("admin")
            .password(passwordEncoder.encode("secret123"))
            .roles("ADMIN")
            .build();

        return new InMemoryUserDetailsManager(admin);
    }
}
```

## Common Mistakes
- 儲存原始密碼。
- 只在前端檢查授權，而不是在後端檢查。
- 讓存取控制規則變得分散且難以審查。

## Practice
- 建立一個 `PasswordEncoder` bean，並解釋為什麼 BCrypt 比純文字儲存更安全。
- 用角色需求保護一個 endpoint。
- 描述成功登入與成功授權檢查之間的差異。

## Continuity
- 上一課：`第 16 課：Spring Security 6 基礎`
- 下一課：`第 18 課：Session、JWT 與 Resource Server 基礎`

## Key Takeaway
- 後端不只需要登入表單；它還需要安全地處理憑證與進行權限檢查。

## Official References
- https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html
- https://docs.spring.io/spring-boot/reference/web/spring-security.html
