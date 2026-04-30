---
title: "第 19 課：建立 Executable Jars 與 Container-friendly Artifacts"
lesson: 19
slug: "lesson-19"
summary: "Boot 4 applications 仍能乾淨封裝成 executable jars，而 container-friendly delivery 應使用 layers 與 jarmode tools，而不是已移除的 launch-script 習慣。"
---

# 第 19 課：建立 Executable Jars 與 Container-friendly Artifacts

Boot 4 applications 仍能乾淨封裝成 executable jars，而 container-friendly delivery 應使用 layers 與 jarmode tools，而不是已移除的 launch-script 習慣。

## 這一課會學到什麼
- 使用 Maven 或 Gradle 建立 Boot 4 application artifact。
- 用 `java -jar` 執行 packaged application。
- 理解 container images 的 layered 與 extracted jar workflows。

## 為什麼重要
- Packaging 把 local code 變成 deployment platform 可以執行的東西。
- Boot 4 移除較舊 embedded launch-script support，但保留 executable jars 與 plugin-built artifacts。
- Container images 在 dependencies、application code 與 generated assets 可以有意識地分層時運作更好。

## 主要觀念
- Spring Boot build plugin 建立能用 `java -jar` 執行的 executable jar。
- 不要在 Boot 4 examples 中依賴舊式 fully executable launch-script patterns。
- Jarmode tools 可以 extract archive，產生適合 container layering 的 layout。

## 課程筆記
建立 application artifact 與在 IDE 中執行是不同里程碑。Packaged artifact 證明 source code、resources、dependencies 與 Boot launcher 可以組成一個 runnable unit。

Maven projects 常用 `./mvnw package`。Boot Maven plugin 會 repackage jar，讓它以 `java -jar` 可執行的 layout 包含 application classes 與 dependencies。Gradle 也有等價的 Boot plugin behavior。

Boot 4 仍支援 executable jars，但課程 examples 應避免舊式 fully executable jar launch-script instructions。Migration guidance 移除了 embedded executable uber-jar launch scripts。請使用 `java -jar`，或 platform-specific service/container mechanisms。

Container delivery 帶來另一個 concern：layers。Dependencies 變化頻率比 application classes 低，所以當這些部分分離時，container builds 可以更快。Boot packaging tools 支援 layered jars，目前 docs 也展示 jarmode tools，把 archive extract 成適合 container images 的 layout。

簡單 beginner path 仍然有效：build jar、用正確 environment variables 在本機執行，之後 copy 到 container image。當 app 成長時，再學 layered extraction 與 buildpacks，讓 image builds 更快且更可重複。

Packaging 也是 configuration discipline 回來的地方。Artifact 不應包含 production secrets。Runtime settings 例如 database URLs、credentials 與 exposed Actuator endpoints 應來自 deployment environment。

## 範例
```bash
./mvnw package
java -jar target/learning-api-0.0.1-SNAPSHOT.jar

# Container-friendly extraction example from the Boot 4 packaging model:
java -Djarmode=tools -jar target/learning-api-0.0.1-SNAPSHOT.jar extract
```

## 常見錯誤
- 交付只能從 IDE 執行的 app。
- 把 production secrets 烘進 packaged artifact。
- 把已移除的 fully executable launch-script instructions 複製到 Boot 4 deployment notes。
- 忽略 layers，導致每次 container change 都重新 build 所有 dependencies。

## 練習
- Package app，並用 `java -jar` 執行。
- 透過 environment variable 傳入一個 runtime setting。
- 說明為什麼 dependency layers 與 application layers 應在 container builds 中分離。

## 延續閱讀
- 上一課：`第 18 課：Session、JWT、Resource-server 與 Authorization-server 基礎`
- 下一課：`第 20 課：使用 Actuator 處理 Health、Probes、Metrics 與 Observability`

## 課後重點
- Boot 4 packaging 保留簡單的 `java -jar`，並把 container-friendly workflows 推向 layered extraction 與 current tooling。

## 官方參考資料
- https://docs.spring.io/spring-boot/reference/packaging/efficient.html
- https://docs.spring.io/spring-boot/reference/packaging/container-images/dockerfiles.html
- https://docs.spring.io/spring-boot/maven-plugin/packaging.html
