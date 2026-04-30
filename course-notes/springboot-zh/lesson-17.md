---
title: "第 17 課：Login Flow、Password Encoding 與 Authorization"
lesson: 17
slug: "lesson-17"
summary: "安全的 application 需要明確 login behavior、安全 password storage，以及符合真實 user permissions 的 authorization rules。"
---

# 第 17 課：Login Flow、Password Encoding 與 Authorization

安全的 application 需要明確 login behavior、安全 password storage，以及符合真實 user permissions 的 authorization rules。

## 這一課會學到什麼
- 理解 form login、HTTP Basic 與 API-oriented authentication choices 的形狀。
- 使用 `PasswordEncoder` 儲存 passwords，而不是 raw text。
- 在 URL 與 method level 套用 role 或 authority checks。

## 為什麼重要
- Login 不只是 UI feature；它定義 server 如何建立 identity。
- Password handling mistakes 是高影響安全問題。
- Authorization rules 應表達 business permissions，而不是偶然的 route patterns。

## 主要觀念
- Authentication mechanisms 應符合使用 API 的 client 類型。
- Passwords 必須用現代 one-way hashing strategy encoded。
- URL-level 與 method-level authorization 可以一起使用，但 rules 要保持清楚。

## 課程筆記
Filter-chain model 清楚後，下一個問題是 users 如何 authenticate，以及 authenticate 之後可以 access 什麼。Browser-facing app 可能使用 form login 與 sessions。簡單 internal API 在學習階段可能使用 HTTP Basic。Frontend-driven API 後續可能使用 token-based authentication。

不論 login style 為何，都不要儲存 raw passwords。Spring Security 提供 `PasswordEncoder` implementations，讓 stored password values 以 one-way 方式 encoded。適合初學者理解的常見選擇是透過 `PasswordEncoder` bean 暴露 `BCryptPasswordEncoder`。

Authorization rules 應圍繞 resources 與 actions 設計。`/api/admin/**` 要求 `ADMIN` 很容易理解。像 `deleteNote` 這類 method 要求 permission check，可能更適合放在 business logic 附近。Spring Security 同時支援 web request authorization 與 method-level authorization。

Modern Spring 的 method security 在需要 `@PreAuthorize` 等 annotations 時使用 `@EnableMethodSecurity`。不要只是因為它存在就加入；當 rule 應靠近 application operation，而不只是 URL boundary 時再使用。

Testing 在這裡很重要。Endpoints 被保護後，tests 需要有意識地表示 authenticated 與 unauthenticated requests。使用 Security test support 的 mock users 或 request customizers，而不是每個 test 都關掉 security。

正確的 security design 應該可見且平穩：credentials 被安全處理、rules 明確、tests 驗證重要 cases，而 business code 不必猜測 user 是誰。

## 範例
```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class PasswordConfig {
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

## 常見錯誤
- 儲存或比對 raw passwords。
- 只圍繞模糊 route prefixes 設計 authorization。
- 在 tests 中關閉 security，而不是測試 expected security behavior。
- 混淆 roles、authorities 與 business permissions。

## 練習
- 加入 `PasswordEncoder` bean，並說明為什麼需要它。
- 將一個 endpoint 設成 admin-only，另一個設成 user-only。
- 寫下哪些 authorization rules 屬於 URL layer，哪些可能屬於 method layer。

## 延續閱讀
- 上一課：`第 16 課：Spring Security 7 基礎`
- 下一課：`第 18 課：Session、JWT、Resource-server 與 Authorization-server 基礎`

## 課後重點
- Boot 4 的 login 與 authorization 應明確、安全處理 passwords，並作為 API contract 的一部分被測試。

## 官方參考資料
- https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html
- https://docs.spring.io/spring-security/reference/servlet/authentication/index.html
- https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html
