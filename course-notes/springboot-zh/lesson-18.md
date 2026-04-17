---
title: "第 18 課：Session、JWT 與 Resource Server 基礎"
lesson: 18
slug: "lesson-18"
summary: "選擇哪種驗證模型，會影響 API 設計、用戶端互動方式與部署行為。"
---

# 第 18 課：Session、JWT 與 Resource Server 基礎

選擇哪種驗證模型，會影響 API 設計、用戶端互動方式與部署行為。

## 這一課會學到什麼
- 比較以 session 為基礎與以 token 為基礎的驗證方式。
- 理解在每種模型中，已驗證狀態存放在哪裡。
- 辨認哪些取捨會影響你何時該使用 session 或 JWT。
- 理解 Spring Security resource server 在 JWT 型 API 中扮演什麼角色。

## 為什麼重要
- 選擇哪種驗證模型，會影響 API 設計、用戶端互動方式與部署行為。
- 驗證風格會影響用戶端如何傳送憑證，以及伺服器如何管理信任。
- 正確的選擇取決於架構與限制，而不是單看趨勢。

## 主要觀念
- Session 會把驗證狀態保留在伺服器端。
- 以 JWT 為基礎的方法，會透過 token 把更多狀態移到用戶端一側。
- 每種驗證模型都會在簡單性、撤銷能力與可擴展性之間帶來取捨。

## 課程筆記
當登入的基本概念變得清楚之後，下一個架構問題就是：登入成功後，已驗證狀態應該存放在哪裡？這正是以 session 為基礎的驗證與 JWT 這類 token 型方法之間的關鍵差異。

在 session 型系統中，伺服器仍然是已驗證狀態的真相來源。用戶端儲存的是 session 識別碼，通常放在 cookie 裡，並在後續請求中送出它。伺服器會查詢該 session，並判定這個請求是否屬於已驗證使用者。

在以 JWT 為基礎的方法中，伺服器會簽發一個帶有使用者或 session 聲明的已簽章 token。用戶端會在後續請求中送出這個 token，通常透過 `Authorization` header。伺服器接著驗證該 token，而不是以相同方式去查詢一筆伺服器端 session 紀錄。

Session 通常一開始較容易理解，因為撤銷與集中控制都更直接。JWT 在無狀態 API 情境中很有吸引力，因為它減少了某些形式的伺服器端 session 儲存，但它也會引入 token 過期、refresh 流程與撤銷策略等議題。

這也是為什麼不應只因為 JWT 聽起來比較新潮就選它。它很適合解決某些架構需求，但也會帶來自己的責任。後端團隊應該能解釋，為什麼以 token 為基礎的模型符合他們實際擁有的用戶端與部署模式。

對學習者而言，最有價值的收穫，是理解信任所在的位置。在 session 中，信任強烈地以伺服器為中心。在以 JWT 為基礎的系統中，一部分信任資訊會以已簽章產物的形式隨著用戶端移動。安全性設計就是從這個差異衍生出來的。

這一課提供你一套能理性比較驗證方法的詞彙。在 Spring Boot 3.x 裡，JWT 型 API 保護常會透過 Spring Security 的 resource server 支援來表達，也就是應用程式負責驗證 bearer token，而不是自己從零發明 token 解析器。之後當你建立具體的登入系統時，你應該要能為所選模型提出理由，而不是只是照著教學照抄。

## 範例
```http
POST /api/login HTTP/1.1
Content-Type: application/json

{
  "username": "tommy",
  "password": "***"
}
```

```http
GET /api/messages HTTP/1.1
Authorization: Bearer ***
```

## 常見錯誤
- 只因為 JWT 很流行就使用它。
- 忽略 token 過期與 refresh 策略。
- 假設無狀態驗證在每個專案中都一定比較簡單。

## 練習
- 寫出 session 的一個優點與一個缺點。
- 寫出以 JWT 為基礎驗證的一個優點與一個缺點。
- 解釋在每種模型中，已驗證狀態儲存在哪裡。
- 解釋什麼情況下，Spring Security resource server 會比 session 型登入流程更適合。

## 延續閱讀
- 上一課：`第 17 課：登入流程、密碼編碼與授權`
- 下一課：`第 19 課：建置並封裝應用程式`

## 課後重點
- 選擇哪種驗證模型，會影響 API 設計、用戶端互動方式與部署行為。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/web/spring-security.html
- https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/jwt.html
