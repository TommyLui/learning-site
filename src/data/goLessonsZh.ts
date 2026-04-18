export type CourseLessonArticle = {
  lesson: number;
  slug: string;
  title: string;
  summary: string;
  moduleTitle: string;
  intro: string;
  learningPoints: string[];
  lessonNotes: string[];
  exampleLanguage: string;
  exampleCode: string;
  practice: string[];
  reasons: string[];
  mistakes: string[];
  takeaways: string[];
  references: { label: string; url: string }[];
};

export const goLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: '安裝 Go、熟悉工具鏈並執行第一個程式',
    summary: '完成 Go 本機安裝，並理解 go run 與 go build 的基本流程。',
    moduleTitle: '模組 1 · Go 安裝與語法基礎',
    intro: '第一課先把開發環境和最基本工作流建立好，讓後面課程可以專注在程式設計本身。',
    learningPoints: [
      '安裝 Go 並確認本機環境正常。',
      '理解 go run、go build、go test 這些日常指令。',
      '知道 module 初始化對專案啟動的重要性。',
    ],
    lessonNotes: [
      'Go 的工具鏈設計很精簡，初學者通常只要掌握幾個核心指令就能完成編譯、執行和測試。',
      '穩定的開發起點包含：確認版本、建立乾淨專案資料夾、正確初始化 module。',
      '這一課最關鍵的成果不是「安裝完成」，而是你能獨立把一個最小專案跑通。',
    ],
    exampleLanguage: 'bash',
    exampleCode: "go version\nmkdir go-hello && cd go-hello\ngo mod init example.com/go-hello\ncat > main.go <<'EOF'\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"hello, go\")\n}\nEOF\ngo run .\ngo build .",
    practice: [
      '在你的機器上安裝 Go，並用終端機確認版本。',
      '用 go mod init 建立 module，執行第一個 hello 程式。',
      '把程式 build 成可執行檔，並直接執行驗證。',
    ],
    reasons: [
      '環境不穩定會在後面每一課都反覆拖慢學習。',
      '懂工具鏈是 Go 基本功，不只是安裝步驟。',
    ],
    mistakes: [
      '不初始化 module 就開始在任意資料夾寫程式。',
      '只會貼指令，卻不理解 run 和 build 的差異。',
    ],
    takeaways: [
      'Go 專案的起點是 module + 工具鏈工作流。',
      '你應該已能獨立建立、執行、建置最小 Go 程式。',
    ],
    references: [
      { label: 'Go docs · Download and install', url: 'https://go.dev/doc/install' },
      { label: 'Go docs · Tutorial: Get started', url: 'https://go.dev/doc/tutorial/getting-started' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'Go 的變數、流程控制與函式',
    summary: '用清楚的型別、條件與迴圈寫出可讀的 Go 函式。',
    moduleTitle: '模組 1 · Go 安裝與語法基礎',
    intro: '這一課建立 Go 日常語法流暢度，讓你能用函式把邏輯寫得清楚且可重用。',
    learningPoints: [
      '理解 Go 的變數宣告與型別推斷。',
      '用 if、for、switch 控制程式流程。',
      '把重複邏輯封裝成小型函式。',
    ],
    lessonNotes: [
      'Go 語法簡潔，但非常重視命名清楚與流程可讀。',
      'for 是 Go 的核心迴圈關鍵字，switch 也常用於可讀的分支判斷。',
      '函式切分得好，後續測試、重構與維護成本都會下降。',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport \"fmt\"\n\nfunc scoreLabel(score int) string {\n  if score >= 80 {\n    return \"pass\"\n  }\n  return \"retry\"\n}\n\nfunc main() {\n  scores := []int{72, 85, 91}\n  for _, score := range scores {\n    fmt.Println(score, scoreLabel(score))\n  }\n}",
    practice: [
      '寫一個函式，根據金額回傳不同運費。',
      '用迴圈處理一組測試資料並印出結果。',
      '把過長的 main 函式拆成數個小函式。',
    ],
    reasons: [
      '後續課程都預設你能快速寫出清楚函式。',
      '流程控制是否清楚，直接影響程式可維護性。',
    ],
    mistakes: [
      '一個函式塞入太多責任，導致難讀難測。',
      '命名抽象或過短，無法表達業務意圖。',
    ],
    takeaways: [
      '可讀性比語法炫技更重要。',
      '小函式是 Go 專案可測試與可重用的基礎。',
    ],
    references: [
      { label: 'A Tour of Go · Basics', url: 'https://go.dev/tour/basics/1' },
      { label: 'Go language specification', url: 'https://go.dev/ref/spec' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: '用陣列、slice、map 處理日常資料',
    summary: '掌握 Go 最常用集合型別，正確處理群組與查找資料。',
    moduleTitle: '模組 1 · Go 安裝與語法基礎',
    intro: '集合型別是資料處理的核心，這一課幫你建立 arrays、slices、maps 的實務選擇能力。',
    learningPoints: [
      '分辨 arrays、slices、maps 的適用情境。',
      '安全地 append 與迭代 slices。',
      '使用 map 進行 key-value 查找與存在性判斷。',
    ],
    lessonNotes: [
      'slice 是 Go 最常見的集合，因為比固定長度陣列更彈性。',
      'map 適合查找需求，例如用 ID 找資料、用名稱找設定。',
      '越早選對資料結構，後面的商業邏輯就越容易寫清楚。',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport \"fmt\"\n\nfunc main() {\n  tags := []string{\"go\", \"backend\"}\n  tags = append(tags, \"http\")\n\n  scores := map[string]int{\n    \"alice\": 88,\n    \"tommy\": 95,\n  }\n\n  if value, ok := scores[\"tommy\"]; ok {\n    fmt.Println(\"tommy score:\", value)\n  }\n\n  fmt.Println(tags)\n}",
    practice: [
      '用 slice 儲存課程清單並輸出編號結果。',
      '用 map 記錄使用者進度，處理不存在 key 的情況。',
      '把一個 array 範例改寫為更彈性的 slice 寫法。',
    ],
    reasons: [
      '資料集合是幾乎所有後端邏輯的日常需求。',
      '理解 slice 與 map 可以避免許多初學者常見錯誤。',
    ],
    mistakes: [
      '該用 slice 卻硬用固定長度 array。',
      '讀 map 值時忽略 key 是否存在。',
    ],
    takeaways: [
      'slice 與 map 是 Go 開發最常用的資料工具。',
      '集合型別要根據資料存取方式來選擇。',
    ],
    references: [
      { label: 'A Tour of Go · Slices', url: 'https://go.dev/tour/moretypes/7' },
      { label: 'Go blog · Go Slices: usage and internals', url: 'https://go.dev/blog/slices-intro' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: '用 struct 與 method 建立領域模型',
    summary: '用 struct 建模資料，並用 method 把行為放在正確位置。',
    moduleTitle: '模組 2 · 資料結構與型別設計',
    intro: '這一課從語法走向設計：你會開始把真實領域資料封裝成可維護的型別。',
    learningPoints: [
      '用 struct 表達業務實體。',
      '用 method receiver 將行為綁定到型別。',
      '理解 value receiver 與 pointer receiver 的差異。',
    ],
    lessonNotes: [
      'struct 能把相關欄位整理成一個清楚的資料實體，例如 Course、Order、Account。',
      'method 讓資料和行為放在一起，降低程式跳轉成本。',
      'receiver 選擇會影響可變性與效能，應該有意識地決策。',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport \"fmt\"\n\ntype Course struct {\n  Title   string\n  Lessons int\n}\n\nfunc (c Course) Summary() string {\n  return fmt.Sprintf(\"%s (%d lessons)\", c.Title, c.Lessons)\n}\n\nfunc main() {\n  course := Course{Title: \"Go\", Lessons: 13}\n  fmt.Println(course.Summary())\n}",
    practice: [
      '設計 Student struct，包含姓名與已完成課數。',
      '新增 method 回傳進度摘要。',
      '把一個與型別高度相關的函式改為 method。',
    ],
    reasons: [
      'Go 服務中的核心資料通常都由 struct 定義。',
      '資料與行為關聯清楚，專案才容易演進。',
    ],
    mistakes: [
      '所有邏輯都放在獨立函式，型別責任不清。',
      '不分情境全部使用 pointer receiver。',
    ],
    takeaways: [
      'struct + method 是 Go 設計的重要組合。',
      '型別設計品質會直接影響專案可維護性。',
    ],
    references: [
      { label: 'A Tour of Go · Structs', url: 'https://go.dev/tour/moretypes/2' },
      { label: 'Effective Go · Methods', url: 'https://go.dev/doc/effective_go#methods' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: '介面（interface）與隱式實作',
    summary: '用行為抽象取代具體型別綁定，提升程式彈性與可測試性。',
    moduleTitle: '模組 2 · 資料結構與型別設計',
    intro: 'Go 的 interface 讓你用「行為」設計程式邊界，而不是過早綁定實作細節。',
    learningPoints: [
      '理解 interface 與 method set 的關係。',
      '掌握隱式實作的設計優勢。',
      '學會保持介面小而專注。',
    ],
    lessonNotes: [
      'Go 型別只要實作方法就能滿足 interface，不需要顯式宣告。',
      '這種設計可降低耦合，尤其適合測試時替換依賴。',
      '小介面通常比大而全介面更容易重用，也更不容易失控。',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport \"fmt\"\n\ntype Notifier interface {\n  Send(message string)\n}\n\ntype ConsoleNotifier struct{}\n\nfunc (ConsoleNotifier) Send(message string) {\n  fmt.Println(\"notify:\", message)\n}\n\nfunc Broadcast(n Notifier, message string) {\n  n.Send(message)\n}\n\nfunc main() {\n  Broadcast(ConsoleNotifier{}, \"lesson published\")\n}",
    practice: [
      '為儲存層定義一個含兩個方法的小介面。',
      '建立 mock 實作並在測試中替換。',
      '把一個函式改成接收 interface 而非具體型別。',
    ],
    reasons: [
      'interface 是 Go 模組化架構的重要工具。',
      '以行為為中心的設計更有利於測試和重構。',
    ],
    mistakes: [
      '需求還不清楚就先設計過大的介面。',
      '明明只用單一實作卻過度抽象化。',
    ],
    takeaways: [
      '好的 Go 介面描述的是行為，不是內部細節。',
      '隱式實作很強大，但要保持設計節制。',
    ],
    references: [
      { label: 'A Tour of Go · Interfaces', url: 'https://go.dev/tour/methods/9' },
      { label: 'Effective Go · Interfaces', url: 'https://go.dev/doc/effective_go#interfaces' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: '用 packages 與 modules 整理專案',
    summary: '建立可擴充專案結構，並用 Go modules 管理相依套件。',
    moduleTitle: '模組 2 · 資料結構與型別設計',
    intro: '當程式超過幾個檔案後，package 與 module 結構就會直接影響團隊開發效率。',
    learningPoints: [
      '按責任切分 package。',
      '理解 go.mod 與 go.sum 的角色。',
      '保持 import 路徑與命名一致性。',
    ],
    lessonNotes: [
      'package 是 Go 最重要的程式組織單位，應該對齊業務責任而不是任意分檔。',
      'module 管理整體相依與版本，讓專案在不同機器上可重現。',
      '結構清楚的專案在測試、除錯、交接時都會更省力。',
    ],
    exampleLanguage: 'text',
    exampleCode: "course-service/\n  go.mod\n  cmd/api/main.go\n  internal/course/service.go\n  internal/course/repository.go\n  internal/http/handler.go",
    practice: [
      '把小專案整理成 cmd 與 internal 分層。',
      '初始化 module 並加入一個外部相依套件。',
      '檢查 package 命名是否和實際責任一致。',
    ],
    reasons: [
      '專案越大，結構越會影響每一次修改成本。',
      'module 是穩定管理相依的基本機制。',
    ],
    mistakes: [
      '把不相關責任混在同一 package。',
      '忽略 module 管理，導致依賴版本不可控。',
    ],
    takeaways: [
      '良好 package 結構能降低長期維護風險。',
      'Go modules 讓相依與版本行為更明確。',
    ],
    references: [
      { label: 'Go docs · Create a module', url: 'https://go.dev/doc/tutorial/create-module' },
      { label: 'Go docs · Managing dependencies', url: 'https://go.dev/doc/modules/managing-dependencies' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: '錯誤處理模式與自訂錯誤',
    summary: '用可預期方式回傳、包裝與辨識錯誤。',
    moduleTitle: '模組 3 · 錯誤處理、測試與資料 I/O',
    intro: 'Go 的錯誤處理是顯式設計，這一課會建立你在服務端實務最常用的錯誤流程。',
    learningPoints: [
      '回傳具上下文的錯誤資訊。',
      '使用 wrap 與 errors.Is / errors.As。',
      '在必要時定義有意義的自訂錯誤。',
    ],
    lessonNotes: [
      'Go 使用 error 回傳而非隱式例外流程，優點是控制流清楚。',
      '錯誤包裝能保留根因，同時補上操作情境，利於日誌與除錯。',
      '用 errors.Is / errors.As 判斷錯誤比字串比對更穩定。',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrNotFound = errors.New(\"course not found\")\n\nfunc findCourse(id int) error {\n  if id != 1 {\n    return fmt.Errorf(\"find course %d: %w\", id, ErrNotFound)\n  }\n  return nil\n}\n\nfunc main() {\n  err := findCourse(2)\n  if errors.Is(err, ErrNotFound) {\n    fmt.Println(\"handle not found\")\n  }\n}",
    practice: [
      '把一個低層錯誤包裝成具操作上下文的錯誤訊息。',
      '針對 not-found 情境使用 errors.Is 分支處理。',
      '移除字串比對式錯誤判斷，改為型別安全做法。',
    ],
    reasons: [
      '服務穩定性高度依賴錯誤流程可預期。',
      '錯誤上下文清楚能大幅降低排錯時間。',
    ],
    mistakes: [
      '回傳過度籠統的錯誤，無法定位失敗位置。',
      '所有錯誤都同一種處理，忽略業務語意差異。',
    ],
    takeaways: [
      '顯式錯誤處理是 Go 的優勢，不是負擔。',
      '包裝錯誤能同時保留根因與操作情境。',
    ],
    references: [
      { label: 'Go blog · Working with Errors in Go 1.13', url: 'https://go.dev/blog/go1.13-errors' },
      { label: 'Go package docs · errors', url: 'https://pkg.go.dev/errors' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: '用標準 testing 套件撰寫測試',
    summary: '用 table-driven 測試覆蓋常見情境，建立可重複驗證流程。',
    moduleTitle: '模組 3 · 錯誤處理、測試與資料 I/O',
    intro: '這一課帶你用 Go 內建 testing 套件建立測試習慣，不需要額外重型框架也能有效驗證行為。',
    learningPoints: [
      '用 testing.T 撰寫基本單元測試。',
      '掌握 table-driven test 的常見寫法。',
      '能快速執行並閱讀測試失敗輸出。',
    ],
    lessonNotes: [
      'Go 測試是工具鏈內建能力，導入門檻低且執行快速。',
      'table-driven 測試能用一個結構覆蓋多組輸入輸出，是 Go 社群常見模式。',
      '好的測試重點在行為與失敗訊息清晰，不在測內部實作細節。',
    ],
    exampleLanguage: 'go',
    exampleCode: "package discount\n\nimport \"testing\"\n\nfunc Discount(price int) int {\n  if price >= 1000 {\n    return 100\n  }\n  return 0\n}\n\nfunc TestDiscount(t *testing.T) {\n  cases := []struct {\n    price int\n    want  int\n  }{\n    {500, 0},\n    {1200, 100},\n  }\n\n  for _, c := range cases {\n    if got := Discount(c.price); got != c.want {\n      t.Fatalf(\"price=%d got=%d want=%d\", c.price, got, c.want)\n    }\n  }\n}",
    practice: [
      '為一個函式設計至少三組測試案例。',
      '把重複測試改寫成 table-driven 形式。',
      '執行 go test ./... 並解讀失敗原因。',
    ],
    reasons: [
      '測試能降低功能擴充時的回歸風險。',
      'table-driven 是 Go 團隊常見的測試慣例。',
    ],
    mistakes: [
      '失敗訊息太模糊，無法快速定位問題。',
      '忽略邊界案例，例如空值或非法輸入。',
    ],
    takeaways: [
      'Go 的測試流程是內建能力，應納入日常開發。',
      'table-driven 測試能讓案例管理更清楚可擴充。',
    ],
    references: [
      { label: 'Go package docs · testing', url: 'https://pkg.go.dev/testing' },
      { label: 'Go docs · Tutorial: Add a test', url: 'https://go.dev/doc/tutorial/add-a-test' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: '讀寫檔案與 JSON 編解碼',
    summary: '處理常見檔案 I/O 與 JSON 序列化需求。',
    moduleTitle: '模組 3 · 錯誤處理、測試與資料 I/O',
    intro: '許多後端與工具型程式都會碰到檔案和 JSON，這一課聚焦標準庫最常見做法。',
    learningPoints: [
      '安全讀取與寫入檔案。',
      '把 struct 與 JSON 互相轉換。',
      '把資料 I/O 與錯誤處理整合成穩定流程。',
    ],
    lessonNotes: [
      'Go 標準套件已能滿足多數檔案與 JSON 任務，不必急著依賴第三方套件。',
      'struct tag 可以清楚定義 JSON 欄位名稱對應。',
      'I/O 與解析流程要把錯誤當成常態處理，而不是成功路徑假設。',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport (\n  \"encoding/json\"\n  \"fmt\"\n  \"os\"\n)\n\ntype Course struct {\n  Title string `json:\"title\"`\n  Level string `json:\"level\"`\n}\n\nfunc main() {\n  raw, err := os.ReadFile(\"course.json\")\n  if err != nil {\n    panic(err)\n  }\n\n  var c Course\n  if err := json.Unmarshal(raw, &c); err != nil {\n    panic(err)\n  }\n\n  fmt.Println(c.Title, c.Level)\n}",
    practice: [
      '把本機 JSON 檔案讀入 struct 並印出關鍵欄位。',
      '把 struct 輸出為縮排 JSON。',
      '分別處理檔案不存在與 JSON 格式錯誤。',
    ],
    reasons: [
      '檔案與 JSON 是後端、工具、整合流程的常見需求。',
      '穩定的 I/O 程式能降低資料錯誤與線上故障。',
    ],
    mistakes: [
      '忽略檔案讀取錯誤，假設資料一定存在。',
      '用動態 map 解析本可強型別的資料結構。',
    ],
    takeaways: [
      'Go 標準套件就能完成大多數實務 I/O 任務。',
      '強型別 struct + 顯式錯誤可提升資料流可靠性。',
    ],
    references: [
      { label: 'Go package docs · os', url: 'https://pkg.go.dev/os' },
      { label: 'Go package docs · encoding/json', url: 'https://pkg.go.dev/encoding/json' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'goroutine、channel 與基本並行設計',
    summary: '用 goroutine 和 channel 安全協調多個並行任務。',
    moduleTitle: '模組 4 · 並行與 HTTP 基礎',
    intro: '並行是 Go 的強項之一，這一課先建立安全心智模型，再逐步進到更複雜場景。',
    learningPoints: [
      '使用 goroutine 啟動並行任務。',
      '用 channel 在任務間傳遞資料。',
      '避免常見同步與生命週期錯誤。',
    ],
    lessonNotes: [
      'goroutine 是由 Go runtime 管理的輕量執行單位。',
      'channel 提供明確的通訊機制，減少到處共享可變狀態。',
      '初學並行時，先把流程設計清楚比追求高難度模式更重要。',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport \"fmt\"\n\nfunc main() {\n  done := make(chan string)\n\n  go func() {\n    done <- \"task complete\"\n  }()\n\n  msg := <-done\n  fmt.Println(msg)\n}",
    practice: [
      '啟動兩個 goroutine 處理不同輸入。',
      '透過 channel 收集結果並在 main 輸出。',
      '用 go test -race 觀察共享狀態風險。',
    ],
    reasons: [
      'API、背景任務、I/O 密集場景都常用到並行。',
      '正確協調模式可大幅降低 race condition 風險。',
    ],
    mistakes: [
      '啟動 goroutine 卻沒有明確結束或取消策略。',
      'channel 與共享可變狀態混用但沒有邊界。',
    ],
    takeaways: [
      'goroutine + channel 很強大，但流程要保持簡潔。',
      '先做對，再做快，是並行設計的基本原則。',
    ],
    references: [
      { label: 'A Tour of Go · Concurrency', url: 'https://go.dev/tour/concurrency/1' },
      { label: 'Effective Go · Concurrency', url: 'https://go.dev/doc/effective_go#concurrency' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: '用 net/http 建立 HTTP handlers',
    summary: '用 Go 標準 HTTP 套件建立路由與處理器。',
    moduleTitle: '模組 4 · 並行與 HTTP 基礎',
    intro: '這一課把語言基礎連到 Web 開發，透過 net/http 建立最小可用服務端介面。',
    learningPoints: [
      '註冊路由與 handler。',
      '讀取請求並回傳一致回應格式。',
      '分離 handler 與商業邏輯責任。',
    ],
    lessonNotes: [
      '在初階到中階專案中，net/http 已足夠建立清楚可維護的 API 起點。',
      'handler 最好專注在：驗證輸入、呼叫服務、格式化輸出。',
      '如果一開始就維持邊界清楚，後面測試與重構會容易很多。',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport (\n  \"fmt\"\n  \"net/http\"\n)\n\nfunc healthHandler(w http.ResponseWriter, r *http.Request) {\n  w.WriteHeader(http.StatusOK)\n  fmt.Fprintln(w, \"ok\")\n}\n\nfunc main() {\n  mux := http.NewServeMux()\n  mux.HandleFunc(\"/health\", healthHandler)\n\n  http.ListenAndServe(\":8080\", mux)\n}",
    practice: [
      '建立 /health 端點並用 curl 驗證。',
      '新增一個回傳 JSON 的路由。',
      '把路由與 handler 拆到獨立檔案或 package。',
    ],
    reasons: [
      'HTTP 基礎是建立後端服務前的必要能力。',
      '理解標準庫有助於你未來選擇框架時做出更好判斷。',
    ],
    mistakes: [
      '把所有商業邏輯直接塞進 handler。',
      '忽略狀態碼與回應格式一致性。',
    ],
    takeaways: [
      'Go 標準庫就能建立紮實的 HTTP 入門基礎。',
      'handler 乾淨，服務才容易維護。',
    ],
    references: [
      { label: 'Go package docs · net/http', url: 'https://pkg.go.dev/net/http' },
      { label: 'Go docs · Writing Web Applications', url: 'https://go.dev/doc/articles/wiki/' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: '設計小型 CRUD 服務流程',
    summary: '規劃請求模型、驗證與記憶體儲存，完成小型服務骨架。',
    moduleTitle: '模組 5 · 建立小型 Go 服務',
    intro: '這一課把分散知識整合成完整小專案，開始練習 endpoint、模型與儲存層的協作。',
    learningPoints: [
      '圍繞單一實體設計 CRUD 流程。',
      '定義一致的 request / response 模型。',
      '使用 in-memory 儲存並保留可擴充邊界。',
    ],
    lessonNotes: [
      '小專案是概念落地的關鍵：路由、struct、驗證、錯誤流程都必須互相對齊。',
      '先把範圍控制在單一實體和少量操作，避免一開始就過度擴張。',
      '即使暫時用記憶體儲存，也建議保留 repository 邊界，方便後續換資料庫。',
    ],
    exampleLanguage: 'text',
    exampleCode: "Endpoints\n  GET /tasks\n  GET /tasks/{id}\n  POST /tasks\n  PUT /tasks/{id}\n  DELETE /tasks/{id}\n\nLayers\n  handler -> service -> repository",
    practice: [
      '選一個實體（task、note 或 lesson）定義 CRUD 端點。',
      '加入必填欄位與格式驗證。',
      '建立 repository 介面與記憶體實作。',
    ],
    reasons: [
      '服務設計能力來自完整流程練習，不是單段程式碼。',
      '先設好邊界，之後接資料庫或快取會更順。',
    ],
    mistakes: [
      '沒先定模型就直接堆 endpoint，導致規格不一致。',
      '假設輸入永遠正確而省略驗證。',
    ],
    takeaways: [
      '一個小而完整的服務比很多碎片範例更能訓練架構感。',
      '今天的簡潔分層會降低明天的重寫成本。',
    ],
    references: [
      { label: 'Go docs · Writing Web Applications', url: 'https://go.dev/doc/articles/wiki/' },
      { label: 'Go package docs · net/http', url: 'https://pkg.go.dev/net/http' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: '執行、測試與優化服務',
    summary: '加入日誌、設定與測試覆蓋，讓小型服務更接近可交付狀態。',
    moduleTitle: '模組 5 · 建立小型 Go 服務',
    intro: '最後一課聚焦在交付前的工程習慣：可重複執行、可觀測、可驗證。',
    learningPoints: [
      '建立可重複的本機執行與檢查指令。',
      '加入基本日誌與環境設定管理。',
      '透過單元與端點測試提高信心。',
    ],
    lessonNotes: [
      '可交付品質不只是 endpoint 能回應，還包括啟動流程穩定、日誌可追蹤、測試可重現。',
      '執行參數應該來自環境或設定，而不是硬編碼在程式裡。',
      '小而精準的測試集合就能抓住很多回歸問題。',
    ],
    exampleLanguage: 'bash',
    exampleCode: "go test ./...\nPORT=8080 go run ./cmd/api\ncurl http://localhost:8080/health",
    practice: [
      '加入一個設定值（如 PORT）並提供預設值。',
      '為關鍵服務行為撰寫至少兩個測試。',
      '建立一份交付前檢查清單並實際走一次。',
    ],
    reasons: [
      '收尾品質決定專案是否真的可維運。',
      '日誌與測試會直接影響未來排錯效率。',
    ],
    mistakes: [
      '把可配置值硬寫死在程式碼中。',
      '只做一次手動測試就宣告完成。',
    ],
    takeaways: [
      '小型服務也需要標準化執行與驗證流程。',
      '工程化收尾是後端開發不可省略的一部分。',
    ],
    references: [
      { label: 'Go package docs · log/slog', url: 'https://pkg.go.dev/log/slog' },
      { label: 'Go package docs · testing', url: 'https://pkg.go.dev/testing' },
    ],
  },
];

export function getGoLessons() {
  return goLessons;
}

export function getGoLessonBySlug(slug: string) {
  return goLessons.find((lesson) => lesson.slug === slug) ?? null;
}
