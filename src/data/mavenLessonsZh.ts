import type { CourseLessonArticle } from './mavenLessons';

const FOUNDATIONS_MODULE = '模組 1 · Maven 基礎與專案結構';
const DEPENDENCIES_MODULE = '模組 2 · 依賴管理與可重現建置';
const BUILD_CONTROL_MODULE = '模組 3 · 生命週期、外掛與建置控制';
const PUBLISHING_MODULE = '模組 4 · 多模組專案與 artifact 發布';

export const mavenLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: '安裝 Maven 並執行第一個專案',
    summary: '安裝 Maven、確認 Java 工具鏈、產生 starter project，並完成第一次 package 建置。',
    moduleTitle: FOUNDATIONS_MODULE,
    intro: '第一課先建立可靠的本機流程，讓後續 Maven 主題可以專注在專案結構與建置行為，而不是環境問題。',
    learningPoints: [
      '在建立專案前從命令列確認 Java 與 Maven 可正常使用。',
      '使用 quickstart archetype 產生小型 Maven 專案。',
      '執行 mvn package 並找到產生的建置輸出。',
    ],
    lessonNotes: [
      'Maven 是 Java 專案常用的建置與依賴管理工具，因此可用的 JDK 是環境基線的一部分。',
      'quickstart archetype 會建立含 pom.xml、source folders、test folders 與預設 package 流程的小型專案。',
      'mvn package 成功代表 Maven 能解析外掛、編譯程式、執行測試，並在 target 底下產生 artifact。',
    ],
    exampleLanguage: 'bash',
    exampleCode: `java -version
mvn --version

mvn archetype:generate -DgroupId=com.example -DartifactId=hello-maven -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

cd hello-maven
mvn package`,
    practice: [
      '安裝 Maven，並確認 mvn --version 同時列出 Maven 與 Java 版本。',
      '產生 quickstart 專案，找到 pom.xml、src/main/java、src/test/java 與 target。',
      '連續執行兩次 mvn package，比較第一次下載 dependency/plugin 與第二次執行的差異。',
    ],
    reasons: [
      '穩定的 Maven 環境能移除 Java 與 Spring 初學常見的大量混亂。',
      '第一次 build 建立了整門課都會使用的 feedback loop。',
    ],
    mistakes: [
      '只安裝 Maven，卻沒有確認 JAVA_HOME 與命令列 JDK 指向相容的 Java 版本。',
      '把 archetype 產物當成魔法，沒有檢查它建立的資料夾與 pom.xml。',
    ],
    takeaways: [
      'Maven 專案從 POM 與可預測的資料夾結構開始。',
      'mvn package 是確認本機建置流程可運作的第一個實用證明。',
    ],
    references: [
      { label: 'Apache Maven · Maven in 5 Minutes', url: 'https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html' },
      { label: 'Apache Maven · Maven Wrapper', url: 'https://maven.apache.org/tools/mavenwrapper.html' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: '讀懂 POM 與 Maven coordinates',
    summary: '理解最小 pom.xml、artifact coordinates、預設 packaging，以及 Maven 如何取得專案 metadata。',
    moduleTitle: FOUNDATIONS_MODULE,
    intro: 'POM 是 Maven 的資訊來源，這一課會先掌握加入依賴與外掛前必懂的核心欄位。',
    learningPoints: [
      '辨識最小 pom.xml 中必要的元素。',
      '說明 groupId、artifactId、version 如何組成 Maven coordinates。',
      '理解 packaging 與 Super POM 帶來的預設值。',
    ],
    lessonNotes: [
      'Maven coordinates 以 groupId:artifactId:version 唯一識別專案 artifact，依賴解析與重用都靠這組資訊。',
      'POM 可以保持精簡，是因為 Maven 會從 Super POM 與生命週期慣例繼承許多預設行為。',
      '清楚的 coordinates 會在模組互相依賴、install 或 deploy artifact 時變得非常重要。',
    ],
    exampleLanguage: 'xml',
    exampleCode: `<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.example</groupId>
  <artifactId>hello-maven</artifactId>
  <version>1.0.0-SNAPSHOT</version>
</project>`,
    practice: [
      '打開產生的 pom.xml，標出 modelVersion、groupId、artifactId 與 version。',
      '把 artifactId 改成更清楚的專案名稱，並重新執行 mvn package。',
      '用 groupId:artifactId:version 形式描述你的專案 artifact coordinate。',
    ],
    reasons: [
      '讀 POM 是 Java backend 與 Spring 開發中的日常能力。',
      'Coordinates 是 Maven 表達 dependency、module 與 publishing 的共通語言。',
    ],
    mistakes: [
      '隨意修改 artifactId 或 groupId，卻沒有考慮下游 dependency 名稱會改變。',
      '以為 POM 很短就代表 Maven 沒有在背後套用預設值。',
    ],
    takeaways: [
      'pom.xml 描述專案是什麼，以及 Maven 應該如何建置它。',
      'Maven coordinates 讓 artifact 能被搜尋、解析與重用。',
    ],
    references: [
      { label: 'Apache Maven · Introduction to the POM', url: 'https://maven.apache.org/guides/introduction/introduction-to-the-pom.html' },
      { label: 'Apache Maven · POM Reference', url: 'https://maven.apache.org/pom.html' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: '理解標準目錄結構',
    summary: '學會 Maven 預期的 source、resource、test、site 與 target 資料夾，讓專案保持可預測。',
    moduleTitle: FOUNDATIONS_MODULE,
    intro: 'Maven 用慣例減少設定，而標準目錄結構就是初學者最先遇到的可見慣例。',
    learningPoints: [
      '把 production code、tests、resources 與 generated output 對應到 Maven 標準資料夾。',
      '理解為什麼 pom.xml 位於專案根目錄。',
      '區分 source files 與 target 產生的建置輸出。',
    ],
    lessonNotes: [
      'src/main/java 放 production Java source，src/test/java 放測試階段會編譯與執行的測試 source。',
      'src/main/resources 與 src/test/resources 讓非程式碼檔案分別進入 runtime 或 test classpath。',
      'target 是產生出來的建置結果，應該能從 source 重建，不應把它當成編輯程式碼的位置。',
    ],
    exampleLanguage: 'text',
    exampleCode: `hello-maven/
  pom.xml
  src/
    main/
      java/
      resources/
    test/
      java/
      resources/
    site/
  target/`,
    practice: [
      '在 src/main/resources 建立一個小型 resource，並確認 package 時會被複製。',
      '把 test-only fixture 放進 src/test/resources，保持 production resources 乾淨。',
      '刪除 target 後重新執行 mvn package，證明產生檔可以重建。',
    ],
    reasons: [
      '標準結構讓 Maven 與 IDE 能不用額外設定就理解 source roots。',
      '可預測的資料夾能讓 Java 專案 onboarding 與 code review 更容易。',
    ],
    mistakes: [
      '直接修改 target 裡的檔案，並以為那是 source-controlled 行為。',
      '把測試 fixture 混進 production resources，導致測試資料被包進 artifact。',
    ],
    takeaways: [
      'Maven 偏好 convention over repeated configuration。',
      'Source、resources、tests 與 generated output 應放在各自預期的位置。',
    ],
    references: [
      { label: 'Apache Maven · Standard Directory Layout', url: 'https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html' },
      { label: 'Apache Maven · Maven in 5 Minutes', url: 'https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: '加入 dependencies 並檢查 dependency tree',
    summary: '宣告 direct dependencies、理解 transitive dependencies，並檢查 Maven 解析出的 dependency tree。',
    moduleTitle: DEPENDENCIES_MODULE,
    intro: '多數 Maven 專案靠 library 變得有用，因此這一課會學 dependency 如何進入專案，以及如何檢查解析結果。',
    learningPoints: [
      '用清楚 coordinates 在 pom.xml 加入 direct dependency。',
      '說明為什麼即使沒有直接宣告，也會出現 transitive dependencies。',
      '使用 dependency:tree 檢查 Maven 解析出的結果。',
    ],
    lessonNotes: [
      'Dependencies 透過 coordinates 宣告，Maven 會從設定的 repositories 下載到本機 repository cache。',
      'Transitive dependencies 來自你的 dependencies 的 dependencies，這很方便，但也可能隱藏版本或衝突問題。',
      '當同一個 dependency 有多個版本出現在 tree 中，Maven 會使用 nearest definition 等 mediation 規則。',
    ],
    exampleLanguage: 'xml',
    exampleCode: `<dependencies>
  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.2</version>
    <scope>test</scope>
  </dependency>
</dependencies>

<!-- Inspect the resolved graph -->
<!-- mvn dependency:tree -->`,
    practice: [
      '加入一個小型 library dependency，並執行 mvn dependency:tree。',
      '在 tree 中找出哪些是 direct，哪些是 transitive。',
      '移除該 dependency，確認相關 tree entries 也消失。',
    ],
    reasons: [
      '理解 dependency 能避免隱藏 classpath 與版本問題。',
      '當 library 意外出現時，檢查 tree 是第一個除錯動作。',
    ],
    mistakes: [
      '程式直接使用 transitive dependency 的 class，卻沒有把它宣告成 direct dependency。',
      '把 dependency conflict 當成隨機問題，而不是閱讀 resolved dependency tree。',
    ],
    takeaways: [
      'Direct dependencies 記錄了你的程式有意使用什麼。',
      'Dependency tree 說明 Maven 實際建立的 classpath。',
    ],
    references: [
      { label: 'Apache Maven · Dependency Mechanism', url: 'https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html' },
      { label: 'Apache Maven Dependency Plugin · tree', url: 'https://maven.apache.org/plugins/maven-dependency-plugin/tree-mojo.html' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: '正確使用 dependency scopes',
    summary: '依 classpath 需求選擇 compile、provided、runtime、test、system 與 import scopes。',
    moduleTitle: DEPENDENCIES_MODULE,
    intro: 'Dependency scopes 會決定 library 在哪裡可見，這一課聚焦讓 compile、runtime 與 test classpath 更有意圖。',
    learningPoints: [
      '說明常見 Maven dependency scopes 的用途。',
      '在實務情境中選擇 test、provided、runtime 或 compile scope。',
      '理解為什麼通常應避免使用 system scope。',
    ],
    lessonNotes: [
      'compile 是預設 scope，會讓 dependency 出現在 compile、test 與 runtime classpaths。',
      'test scope 適合測試工具，因為它能避免 test-only library 變成 production dependency。',
      'provided 代表 runtime 由 JDK、container 或其他環境提供該 dependency；system 雖然支援，但一般專案不建議使用。',
    ],
    exampleLanguage: 'xml',
    exampleCode: `<dependencies>
  <dependency>
    <groupId>jakarta.servlet</groupId>
    <artifactId>jakarta.servlet-api</artifactId>
    <version>6.0.0</version>
    <scope>provided</scope>
  </dependency>

  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.2</version>
    <scope>test</scope>
  </dependency>
</dependencies>`,
    practice: [
      '把 testing library 標成 test scope，確認 production code 不應依賴它。',
      '把某個 dependency 從 compile 改成 test scope 後，比較 dependency:tree output。',
      '說明 container-based app 中 servlet API 應該是 compile 還是 provided。',
    ],
    reasons: [
      'Scopes 能讓 packaged artifacts 更小，classpath 也更容易推理。',
      '正確 scope 可避免 production code 意外依賴 test-only libraries。',
    ],
    mistakes: [
      '因為 build 會過，就把所有 dependency 留在預設 compile scope。',
      '用 system scope 引用本機 jar，而不是使用正確的 repository 或 repository manager 流程。',
    ],
    takeaways: [
      'Dependency declaration 應使用符合實際用途的最窄 scope。',
      'Scopes 會同時影響 classpath visibility 與 transitive dependency 行為。',
    ],
    references: [
      { label: 'Apache Maven · Dependency Scope', url: 'https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#Dependency_Scope' },
      { label: 'Apache Maven · Dependency Mechanism', url: 'https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: '用 dependencyManagement 與 BOM 管理版本',
    summary: '使用 dependencyManagement 與 imported BOM 集中依賴版本，讓 build 更可預測。',
    moduleTitle: DEPENDENCIES_MODULE,
    intro: '專案長大後，分散的版本會很難維護，因此這一課介紹 Maven 的版本管理模式。',
    learningPoints: [
      '使用 dependencyManagement 定義版本，同時理解它本身不會加入 dependency。',
      '匯入 BOM POM 以對齊一組相關 dependency 版本。',
      '把版本政策與實際 dependency 使用分開。',
    ],
    lessonNotes: [
      'dependencyManagement 不會把 library 放上 classpath；它是在其他地方宣告 dependency 時提供版本與 scope 預設。',
      'BOM 會在 dependencyManagement 中以 pom type 與 import scope 匯入，讓許多相關 artifacts 維持相容版本。',
      '集中版本控制能提升可重現性，也讓升級更容易 review。',
    ],
    exampleLanguage: 'xml',
    exampleCode: `<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.junit</groupId>
      <artifactId>junit-bom</artifactId>
      <version>5.10.2</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>

<dependencies>
  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <scope>test</scope>
  </dependency>
</dependencies>`,
    practice: [
      '把一個重複 dependency version 移進 dependencyManagement，確認 build 仍可解析。',
      '匯入一個小型 BOM，並移除某個 dependency declaration 中的 managed version。',
      '執行 mvn help:effective-pom，查看 Maven 套用的 managed version。',
    ],
    reasons: [
      '版本管理能降低 multi-module 與 team projects 的升級風險。',
      'BOM 能協助 library ecosystem 保持相容，不必手動對齊每個 artifact。',
    ],
    mistakes: [
      '以為 dependencyManagement 會自動新增 dependency。',
      '把 managed BOM versions 與隨機 explicit versions 混用，卻不理解最後誰會生效。',
    ],
    takeaways: [
      'dependencyManagement 是 version policy，不是 dependency usage。',
      'Imported BOMs 是維持相關 dependency 版本一致的標準方式。',
    ],
    references: [
      { label: 'Apache Maven · Dependency Management', url: 'https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#Dependency_Management' },
      { label: 'Apache Maven · Importing Dependencies', url: 'https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#Importing_Dependencies' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: '有信心地執行 lifecycle phases',
    summary: '理解 Maven lifecycles，並有意識地執行 clean、validate、compile、test、package、verify、install 與 deploy。',
    moduleTitle: BUILD_CONTROL_MODULE,
    intro: '當你把 Maven 指令看成固定順序的 lifecycle phases，就會更容易理解每個 command 在做什麼。',
    learningPoints: [
      '說出 clean、default 與 site 三個 lifecycles。',
      '解釋為什麼呼叫較後面的 phase 也會執行同一 lifecycle 之前的 phases。',
      '在不確定時選擇 mvn verify 作為強度較好的預設驗證指令。',
    ],
    lessonNotes: [
      'default lifecycle 包含 validate、compile、test、package、verify、install、deploy 等 phases。',
      '執行 mvn package 並不只會 package；它也會先執行 compile 與 test 等前置 phases。',
      'clean lifecycle 會移除 generated output，而 site lifecycle 用於專案文件與報表。',
    ],
    exampleLanguage: 'bash',
    exampleCode: `mvn clean
mvn validate
mvn compile
mvn test
mvn package
mvn verify
mvn install`,
    practice: [
      '執行 mvn clean package，觀察輸出中出現哪些 phases。',
      '在小型專案中比較 mvn test 與 mvn verify。',
      '說明為什麼 mvn package 可能在 package 前因測試失敗而中止。',
    ],
    reasons: [
      '理解 lifecycle 能把 Maven 從背指令變成可預測的建置控制。',
      '選對 phase 能提升本機 feedback 與 CI 可靠性。',
    ],
    mistakes: [
      '以為 Maven phases 是互相獨立、彼此不會觸發的 commands。',
      '本機只是要驗證卻執行 install 或 deploy，而不是使用 verify。',
    ],
    takeaways: [
      '較後面的 lifecycle phase 會依序包含前面的 phases。',
      '需要信心但不想發布任何東西時，mvn verify 是安全預設。',
    ],
    references: [
      { label: 'Apache Maven · Build Lifecycle', url: 'https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html' },
      { label: 'Apache Maven · Maven in 5 Minutes', url: 'https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: '設定 plugins 與 goals',
    summary: '理解 Maven plugins、goals、executions、lifecycle bindings，以及為什麼要固定 plugin versions。',
    moduleTitle: BUILD_CONTROL_MODULE,
    intro: 'Maven core 很小，實際建置工作大多由 plugins 完成，因此這一課會學如何安全地設定這些工作。',
    learningPoints: [
      '區分 plugins、goals、Mojos 與 lifecycle phase bindings。',
      '把 build plugins 放在 build，reporting plugins 放在 reporting。',
      '直接或透過 pluginManagement 固定 plugin versions，讓 build 可重現。',
    ],
    lessonNotes: [
      'Plugin 是 goals 的集合；goal 可以直接呼叫，也可以綁定到 lifecycle phase。',
      'Plugin executions 讓你把 goal 接到某個 phase，並套用專案需要的設定。',
      '宣告 plugin versions 可以避免不同環境或 Maven 版本套用不同 default plugin versions，造成行為驚喜。',
    ],
    exampleLanguage: 'xml',
    exampleCode: `<build>
  <pluginManagement>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.13.0</version>
      </plugin>
    </plugins>
  </pluginManagement>

  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <configuration>
        <release>21</release>
      </configuration>
    </plugin>
  </plugins>
</build>`,
    practice: [
      '用 mvn help:effective-pom 檢查專案使用的 compiler plugin 版本。',
      '設定 maven-compiler-plugin 的 release 值，使其符合你的目標 JDK。',
      '用自己的話說明 pluginManagement 與 plugins 的差異。',
    ],
    reasons: [
      'Maven 大多數 build customization 都透過 plugins，而不是自訂腳本。',
      '固定 plugin versions 能讓本機與 CI build 更可重現。',
    ],
    mistakes: [
      '把 build plugin configuration 放在 reporting，或期待 reporting plugins 影響 packaging。',
      '重要 plugin versions 沒有明確宣告，之後才對 CI 行為差異感到意外。',
    ],
    takeaways: [
      'Plugins 提供 Maven 的建置動作，goals 是它們對外暴露的任務。',
      '要有意識地設定 plugins，並固定版本以取得可重複 build。',
    ],
    references: [
      { label: 'Apache Maven · Introduction to Plugins', url: 'https://maven.apache.org/guides/introduction/introduction-to-plugins.html' },
      { label: 'Apache Maven · Configuring Plugins', url: 'https://maven.apache.org/guides/mini/guide-configuring-plugins.html' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: '用 Maven Wrapper 與 profiles 建立可重複環境',
    summary: '使用 Maven Wrapper 與 build profiles，讓專案在不同機器與環境中保持一致。',
    moduleTitle: BUILD_CONTROL_MODULE,
    intro: '專案開始共享後，可重複性比本機方便更重要，因此這一課結合 Maven Wrapper 與 profiles。',
    learningPoints: [
      '使用 mvnw 或 mvnw.cmd，讓協作者執行專案預期的 Maven 版本。',
      '用 -P 明確啟用 profiles，或透過環境條件隱式啟用。',
      '疑難排解差異時檢查 active profiles 與 effective POM。',
    ],
    lessonNotes: [
      'Maven Wrapper 把 wrapper 設定存在 .mvn/wrapper，讓專案能啟動指定 Maven 版本。',
      'Profiles 會依需求修改 build model，例如 local development settings、release options 或 OS-specific 行為。',
      'Profiles 若把必要行為藏在某位開發者的 settings file 中，會降低 portability，因此重要行為要保持可見。',
    ],
    exampleLanguage: 'bash',
    exampleCode: `mvn wrapper:wrapper -Dmaven=3.9.9
./mvnw --version
./mvnw verify -Pdev
mvn help:active-profiles
mvn help:effective-pom`,
    practice: [
      '在 sample project 加入 Maven Wrapper，並執行 ./mvnw verify 或 mvnw.cmd verify。',
      '建立一個會設定 property 的簡單 dev profile，並用 help:active-profiles 檢查。',
      '比較 mvn --version 與 ./mvnw --version，說明為什麼團隊偏好 wrapper scripts。',
    ],
    reasons: [
      'Wrapper scripts 能降低 team 與 CI 環境中的 works-on-my-machine 差異。',
      'Profiles 讓同一個專案能適應環境差異，而不必複製多份 POM。',
    ],
    mistakes: [
      '提交只在某台開發機上能運作的 profile 行為。',
      '忽略 wrapper files，假設每個人全域安裝的 Maven 都是同一版。',
    ],
    takeaways: [
      '當專案層級 Maven 版本一致性很重要時，使用 Maven Wrapper。',
      'Profiles 很強大，但應該明確、可檢查且可移植。',
    ],
    references: [
      { label: 'Apache Maven · Maven Wrapper', url: 'https://maven.apache.org/tools/mavenwrapper.html' },
      { label: 'Apache Maven · Build Profiles', url: 'https://maven.apache.org/guides/introduction/introduction-to-profiles.html' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: '用 reactor 建立 multi-module project',
    summary: '建立 aggregator POM、定義 modules，並使用 reactor 依正確順序建置相關專案。',
    moduleTitle: PUBLISHING_MODULE,
    intro: '許多真實 Java 系統包含多個 libraries 或 applications，因此這一課介紹 Maven reactor 與 multi-module workflow。',
    learningPoints: [
      '建立 packaging 設為 pom 的 parent 或 aggregator project。',
      '在 modules 下列出 child modules，並理解 reactor build order。',
      '使用 -pl 與 -am 等 reactor command-line options 進行聚焦建置。',
    ],
    lessonNotes: [
      'Aggregation 告訴 Maven 哪些 modules 要一起 build；inheritance 則決定 child POMs 會繼承哪些 parent 設定。',
      'Reactor 會收集 modules，依 dependencies 等關係排序，並用合法順序建置。',
      'Focused reactor options 能讓大型專案只 build 需要的 module，以及必要的上游 modules。',
    ],
    exampleLanguage: 'xml',
    exampleCode: `<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>shop-parent</artifactId>
  <version>1.0.0-SNAPSHOT</version>
  <packaging>pom</packaging>

  <modules>
    <module>domain</module>
    <module>app</module>
  </modules>
</project>

<!-- Build app and also make modules it depends on -->
<!-- mvn -pl app -am test -->`,
    practice: [
      '建立含兩個 child modules 的 parent POM，並從 root 執行 mvn test。',
      '讓其中一個 module 依賴另一個 module，觀察 reactor build order。',
      '用 -pl 與 -am 執行 focused build，說明 Maven 選到了哪些 modules。',
    ],
    reasons: [
      'Multi-module organization 能讓相關 artifacts 一起 version 與 build。',
      '理解 reactor 是閱讀大型 Java 與 Spring backend repositories 的必要能力。',
    ],
    mistakes: [
      '混淆 aggregation 與 inheritance，以為 module 被列出就一定會繼承 parent。',
      '每次都 build 全部 modules，而不是用 focused reactor command 取得更快 feedback。',
    ],
    takeaways: [
      'Multi-module root 通常使用 packaging pom 與 modules list。',
      'Maven reactor 會依 dependency-aware order 建置 modules。',
    ],
    references: [
      { label: 'Apache Maven · Working with Multiple Modules', url: 'https://maven.apache.org/guides/mini/guide-multiple-modules.html' },
      { label: 'Apache Maven · Project Aggregation', url: 'https://maven.apache.org/guides/introduction/introduction-to-the-pom.html#Project_Aggregation' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: '在本機 install artifacts 以便重用',
    summary: '使用 install phase 與 local repository，在本機 Maven projects 之間重用建置好的 artifacts。',
    moduleTitle: PUBLISHING_MODULE,
    intro: '在 remote publishing 之前，你需要先理解透過 install phase 與 local Maven repository 進行本機 artifact 重用。',
    learningPoints: [
      '說明 local Maven repository 會儲存什麼。',
      '執行 mvn install，把專案 artifact 放進 local repository。',
      '在另一個專案中用 coordinates 依賴本機已 install 的 artifact。',
    ],
    lessonNotes: [
      'install phase 會把建置完成的 artifact 與 POM metadata 加入 local repository，通常位於 ~/.m2/repository。',
      '當 related projects 還沒有 shared remote repository 時，local install 很適合本機開發。',
      '因為 installed artifacts 是本機狀態，團隊不應把 install 當成真正 shared publishing 的替代品。',
    ],
    exampleLanguage: 'bash',
    exampleCode: `mvn clean install

# Example installed path after a successful build
ls ~/.m2/repository/com/example/hello-maven/1.0.0-SNAPSHOT

# Another project can now declare:
# com.example:hello-maven:1.0.0-SNAPSHOT`,
    practice: [
      '在小型 library project 執行 mvn clean install。',
      '在 local repository 中找到 installed artifact 與 POM。',
      '建立第二個專案依賴該 coordinates，並執行 mvn test。',
    ],
    reasons: [
      'Local install 說明 Maven 如何在 artifacts 進入 remote repository 前重用它們。',
      '理解 local repository 狀態能讓 dependency troubleshooting 容易很多。',
    ],
    mistakes: [
      '以為安裝在自己機器上的 artifact 也能被 teammates 或 CI 取得。',
      '忘記 local repository 中過期的 SNAPSHOT artifacts 可能掩蓋 build 問題。',
    ],
    takeaways: [
      'mvn install 發布到你的 local repository，不是 shared server。',
      '本機 artifact 重用依賴穩定 coordinates 與目前 local repository 狀態。',
    ],
    references: [
      { label: 'Apache Maven Install Plugin', url: 'https://maven.apache.org/plugins/maven-install-plugin/' },
      { label: 'Apache Maven · Build Lifecycle', url: 'https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: '將 artifacts deploy 到 remote repository',
    summary: '理解 deploy、distributionManagement、repository managers、credentials，以及 standalone artifacts 的 deploy-file。',
    moduleTitle: PUBLISHING_MODULE,
    intro: '最後一課從本機重用走到共享 artifact publishing，重點放在安全的 repository 與 credential 邊界。',
    learningPoints: [
      '用 distributionManagement 描述 remote release 與 snapshot deployment targets。',
      '把 deployment credentials 放在 settings.xml server entries，而不是 project POM。',
      '理解 deploy:deploy-file 何時用於 standalone 或 third-party artifacts。',
    ],
    lessonNotes: [
      'deploy phase 會把建置好的 artifacts 上傳到 remote repository，讓 CI、teammates 或下游 projects 可以使用。',
      'Repository manager 是官方建議的最佳實務，因為它能 proxy public repositories，也能提供受控的 internal deployment destinations。',
      'Project POM 應描述 repository destinations，而 credentials 應放在使用者或 CI settings 中，並用 matching server ids 對應。',
    ],
    exampleLanguage: 'xml',
    exampleCode: `<distributionManagement>
  <repository>
    <id>company-releases</id>
    <url>https://repo.example.com/releases</url>
  </repository>
  <snapshotRepository>
    <id>company-snapshots</id>
    <url>https://repo.example.com/snapshots</url>
  </snapshotRepository>
</distributionManagement>

<!-- Credentials live in settings.xml using matching server ids. -->
<!-- mvn deploy -->`,
    practice: [
      '用 placeholder repository URLs 草擬 releases 與 snapshots 的 distributionManagement entries。',
      '建立安全的 settings.xml 範例，使用 matching server ids 但不要放真實 credentials。',
      '說明 deploy 與 install 的差異，以及為什麼 remote deployment 通常交給 CI。',
    ],
    reasons: [
      'Shared artifact publishing 讓 internal libraries 能在一台機器之外被重用。',
      '把 repository metadata 與 credentials 分離，能讓專案更安全且更可移植。',
    ],
    mistakes: [
      '把 username、password 或 token 直接寫進 pom.xml。',
      '不了解版本是 snapshot 還是 release artifact 就直接執行 deploy。',
    ],
    takeaways: [
      'mvn deploy 發布到 remote repository，而 mvn install 發布到本機。',
      'Credentials 應放在 settings 或 CI secrets，不應進入 project source files。',
    ],
    references: [
      { label: 'Apache Maven Deploy Plugin', url: 'https://maven.apache.org/plugins/maven-deploy-plugin/' },
      { label: 'Apache Maven · Repository Management', url: 'https://maven.apache.org/repository-management.html' },
    ],
  },
];

export function getMavenLessons() {
  return mavenLessons;
}

export function getMavenLessonBySlug(slug: string) {
  return mavenLessons.find((lesson) => lesson.slug === slug) ?? null;
}
