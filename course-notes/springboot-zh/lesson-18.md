---
title: "第 18 課：Session、JWT、Resource-server 與 Authorization-server 基礎"
lesson: 18
slug: "lesson-18"
summary: "Boot 4 API security 常需要在 session-based authentication、JWT resource-server behavior，以及外部或 Spring Authorization Server identity flows 之間做選擇。"
---

# 第 18 課：Session、JWT、Resource-server 與 Authorization-server 基礎

Boot 4 API security 常需要在 session-based authentication、JWT resource-server behavior，以及外部或 Spring Authorization Server identity flows 之間做選擇。

## 這一課會學到什麼
- 比較 session-based authentication 與 token-based API authentication。
- 理解 resource server 驗證 JWT 時在做什麼。
- 認識 authorization servers 的角色，以及 Spring Authorization Server 為什麼是現代 Spring Security story 的一部分。

## 為什麼重要
- Authentication architecture 會影響 clients、scaling、logout behavior、testing 與 deployment。
- JWTs 很常見，但不是每個 session-based system 的萬用替代品。
- Resource servers 應驗證 tokens，而不是自己發明 custom token parsing logic。

## 主要觀念
- Sessions 把 authentication state 保存在 server side。
- JWT resource servers 會驗證由 trusted authorization server 發出的 signed tokens。
- Authorization server responsibilities 應與 business API responsibilities 分開，除非你有意識地擁有 identity infrastructure。

## 課程筆記
當 API 需要真實 clients 時，security architecture 會變得更重要。Server-rendered 或 browser-first app 常可以使用 session authentication。Server 儲存 authentication state，browser 攜帶 session cookie。這個 model 成熟，當 app 與 login experience 緊密連接時很適合。

許多 API systems 使用 bearer tokens。JWT 是 signed token，可以攜帶 subject、issuer、expiration 與 authorities 等 claims。API 不會因為 token 看起來像 JSON 就信任它；只有在驗證 signature、issuer、audience、expiration 與相關 rules 後才信任。

在 Spring Security 中，接受 JWTs 的 API 通常是 resource server。它的工作是透過驗證 trusted authorization server 發出的 tokens 來保護 resources。那個 server 可能是 cloud identity provider、enterprise identity system，或 Spring Authorization Server deployment。

Spring Authorization Server 現在是 Spring Security portfolio 的一部分。這不代表每個 beginner project 都應建立自己的 identity platform。它代表官方 Spring story 在 team 真正需要擁有 token issuance 時，有 authorization-server option。

課程重點放在區分這些角色。你的 application 可能是 session-based app、JWT resource server，或更大 OAuth2/OIDC system 的一部分。每個選擇都會影響 dependencies、configuration、tests 與 operational responsibilities。

避免 hand-rolled token security。自訂 token formats、自製 signature checks，或跳過 expiration / issuer validation，都是常見嚴重漏洞來源。

## 範例
```java
@Bean
SecurityFilterChain apiSecurity(HttpSecurity http) throws Exception {
    return http
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/public/**").permitAll()
            .anyRequest().authenticated()
        )
        .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()))
        .build();
}
```

## 常見錯誤
- 把隨機 string 叫做 JWT，卻沒有把它當作 signed token 驗證。
- 把 sessions 與 JWTs 當成可互換 implementation details。
- 還不了解 responsibility，就在 business API 裡建立 authorization server。
- 忽略 token expiration、issuer、audience 與 key rotation。

## 練習
- 描述什麼情境你會為簡單 app 選擇 sessions。
- 描述什麼情境 API 應作為 JWT resource server。
- 列出 authorization server 與 resource server 的 responsibilities 差異。

## 延續閱讀
- 上一課：`第 17 課：Login Flow、Password Encoding 與 Authorization`
- 下一課：`第 19 課：建立 Executable Jars 與 Container-friendly Artifacts`

## 課後重點
- Boot 4 security design 應選擇正確 authentication architecture，而不是把 sessions、JWTs 與 authorization servers 當成同一件事。

## 官方參考資料
- https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/index.html
- https://docs.spring.io/spring-security/reference/servlet/oauth2/authorization-server/index.html
- https://docs.spring.io/spring-security/reference/servlet/authentication/session-management.html
