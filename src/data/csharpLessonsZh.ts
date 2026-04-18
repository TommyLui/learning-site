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

export const csharpLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: '安裝 .NET SDK 並使用 dotnet CLI',
    summary: '用命令列建立、執行與管理 C# 專案。',
    moduleTitle: '模組 1 · .NET 安裝與 C# 基礎',
    intro: '第一課先把 .NET 環境與命令列流程建立好，讓後面學習可以專注在語言與架構。',
    learningPoints: [
      '安裝 .NET SDK 並驗證版本。',
      '用 dotnet new、dotnet run、dotnet build 操作專案。',
      '理解 CLI 在團隊與自動化流程中的價值。',
    ],
    lessonNotes: [
      '.NET SDK 包含編譯器與專案工具，是 C# 開發必要基礎。',
      'dotnet CLI 可提供可重複的建立、建置與執行流程。',
      '即使用 IDE，CLI 熟悉度仍能提升排錯與部署效率。',
    ],
    exampleLanguage: 'bash',
    exampleCode: "dotnet --version\ndotnet new console -n CSharpIntro\ncd CSharpIntro\ndotnet run\ndotnet build",
    practice: [
      '安裝 SDK 後，從終端機確認版本。',
      '建立並執行一個新的 console 專案。',
      '查看 build 後輸出資料夾內容。',
    ],
    reasons: [
      '環境與工具流程是後續學習的基本盤。',
      'CLI 能力會直接影響 CI/CD 與團隊協作效率。',
    ],
    mistakes: [
      '只按 IDE 按鈕卻不了解底層命令。',
      '忽略 SDK 版本相容性。',
    ],
    takeaways: [
      '.NET 開發應從 SDK 與 CLI 基礎開始。',
      '你應能獨立完成建立、執行與建置。',
    ],
    references: [
      { label: '.NET docs · Install .NET', url: 'https://learn.microsoft.com/dotnet/core/install/' },
      { label: '.NET docs · dotnet CLI overview', url: 'https://learn.microsoft.com/dotnet/core/tools/' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'C# 語法、型別與運算表達式',
    summary: '掌握變數、運算子與型別安全的表達方式。',
    moduleTitle: '模組 1 · .NET 安裝與 C# 基礎',
    intro: '這一課建立日常 C# 語法流暢度，讓程式邏輯可讀又可維護。',
    learningPoints: [
      '熟悉 C# 內建型別與變數宣告。',
      '撰寫可讀的運算與條件表達式。',
      '用明確命名強化程式意圖。',
    ],
    lessonNotes: [
      'C# 是強型別語言，正確型別選擇能提前避免許多錯誤。',
      '表達式設計不只求可執行，也要讓後續維護者看得懂。',
      '越早建立可讀命名習慣，越能降低未來重構成本。',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "int completedLessons = 7;\ndecimal price = 199.99m;\nbool isActive = completedLessons > 0;\nstring status = isActive ? \"learning\" : \"idle\";\n\nConsole.WriteLine($\"Status: {status}, Price: {price}\");",
    practice: [
      '定義一組變數表示課程進度與金額。',
      '寫出折扣與總價的計算表達式。',
      '把不清楚命名改成可讀性更高的名稱。',
    ],
    reasons: [
      '語法熟練會直接影響後面每一課速度。',
      '型別與命名品質會影響整體可維護性。',
    ],
    mistakes: [
      '不知道推導型別就過度使用 var。',
      '把太多邏輯塞進單一表達式。',
    ],
    takeaways: [
      '強型別是 C# 的重要優勢。',
      '可讀表達式比炫技寫法更有價值。',
    ],
    references: [
      { label: 'C# docs · Built-in types', url: 'https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/built-in-types' },
      { label: 'C# docs · Operators and expressions', url: 'https://learn.microsoft.com/dotnet/csharp/language-reference/operators/' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: '方法（Methods）與流程控制實作',
    summary: '用可重用方法與清楚分支邏輯整理程式流程。',
    moduleTitle: '模組 1 · .NET 安裝與 C# 基礎',
    intro: '這一課把語法基礎進一步組織成方法與流程，讓程式結構更清楚。',
    learningPoints: [
      '設計責任明確的小方法。',
      '使用 if、switch 管理條件分支。',
      '用方法抽取重複邏輯。',
    ],
    lessonNotes: [
      '方法邊界會直接影響測試和維護成本。',
      '流程控制不只追求正確，也要易讀。',
      '重複邏輯應優先抽取為可重用方法。',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "static decimal ShippingFee(decimal total)\n{\n    if (total >= 1000m) return 0m;\n    if (total >= 500m) return 30m;\n    return 60m;\n}\n\nConsole.WriteLine(ShippingFee(680m));",
    practice: [
      '寫一個方法把分數映射成等級。',
      '把過長條件邏輯拆成較清楚方法。',
      '比較 switch 和 if 在同一需求下的可讀性。',
    ],
    reasons: [
      '方法設計是後續架構能力的基礎。',
      '清楚流程能降低錯誤與溝通成本。',
    ],
    mistakes: [
      '單一方法負責太多事。',
      '過深巢狀分支造成閱讀困難。',
    ],
    takeaways: [
      '小而清楚的方法有利於測試與重構。',
      '流程可讀性是品質的一部分。',
    ],
    references: [
      { label: 'C# docs · Methods', url: 'https://learn.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/methods' },
      { label: 'C# docs · Selection statements', url: 'https://learn.microsoft.com/dotnet/csharp/language-reference/statements/selection-statements' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'Collections 與可空參考型別（Nullable References）',
    summary: '使用常見集合並降低 null 相關執行期錯誤。',
    moduleTitle: '模組 2 · 型別、可空性與 OOP 設計',
    intro: '這一課把集合與 null 安全一起學，建立現代 C# 開發的基本可靠性。',
    learningPoints: [
      '在常見場景使用 List 和 Dictionary。',
      '理解 nullable reference type 檢查意義。',
      '用安全方式處理可能缺值。',
    ],
    lessonNotes: [
      '集合型別是應用程式資料處理高頻工具。',
      'nullable reference type 能把 null 風險提早到編譯期。',
      '良好可空性習慣可大幅降低線上 NullReferenceException。',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "#nullable enable\n\nvar lessons = new List<string> { \"setup\", \"syntax\" };\nvar progress = new Dictionary<string, int>\n{\n    [\"tommy\"] = 4\n};\n\nstring? note = null;\nConsole.WriteLine(note ?? \"no note\");",
    practice: [
      '建立一個 lesson List 並輸出所有值。',
      '用 Dictionary 記錄使用者進度。',
      '修正一個 nullable 警告。',
    ],
    reasons: [
      '集合與 null 安全是日常開發基本需求。',
      '越早建立正確習慣，後續維護風險越低。',
    ],
    mistakes: [
      '忽略 nullable 警告。',
      '不了解資料使用模式就隨意選集合。',
    ],
    takeaways: [
      '可空性檢查是 C# 現代開發的重要保護機制。',
      '集合型別應該對齊實際讀寫需求。',
    ],
    references: [
      { label: 'C# docs · Collections', url: 'https://learn.microsoft.com/dotnet/csharp/programming-guide/concepts/collections' },
      { label: 'C# docs · Nullable reference types', url: 'https://learn.microsoft.com/dotnet/csharp/nullable-references' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: 'Classes、records 與物件導向基礎',
    summary: '用 classes 與 records 建立資料與行為模型。',
    moduleTitle: '模組 2 · 型別、可空性與 OOP 設計',
    intro: '這一課建立 C# 物件建模能力，理解 class 與 record 的不同定位。',
    learningPoints: [
      '用 class 建立具行為的領域模型。',
      '用 record 建立偏資料導向模型。',
      '透過封裝保護重要狀態。',
    ],
    lessonNotes: [
      'class 適合承載可變狀態與業務行為。',
      'record 適合不可變或傳輸型資料。',
      '設計重點在責任邊界，而不在語法形式。',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "public record CourseDto(string Title, int Lessons);\n\npublic class CourseProgress\n{\n    public string Title { get; }\n    public int CompletedLessons { get; private set; }\n\n    public CourseProgress(string title)\n    {\n        Title = title;\n    }\n\n    public void CompleteOneLesson() => CompletedLessons++;\n}",
    practice: [
      '建立一個 record 作為 API 回傳模型。',
      '建立一個 class 封裝狀態更新行為。',
      '說明某模型為何選用 class 或 record。',
    ],
    reasons: [
      '建模品質會影響整體系統維護成本。',
      'class 與 record 選擇會改變資料流與修改策略。',
    ],
    mistakes: [
      '不分情境全部使用同一種模型。',
      '過度暴露可變欄位。',
    ],
    takeaways: [
      'class 與 record 互補，不是互斥。',
      '封裝良好能維持業務規則一致。',
    ],
    references: [
      { label: 'C# docs · Object-oriented programming', url: 'https://learn.microsoft.com/dotnet/csharp/fundamentals/object-oriented/' },
      { label: 'C# docs · record', url: 'https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/record' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: 'Interfaces 與組合（Composition）設計',
    summary: '以介面與組合建立可測試、可擴充的設計。',
    moduleTitle: '模組 2 · 型別、可空性與 OOP 設計',
    intro: '這一課用 interface + composition 建立彈性設計，避免過深繼承造成僵化。',
    learningPoints: [
      '定義行為導向介面。',
      '透過組合注入依賴。',
      '辨識過度繼承造成的設計問題。',
    ],
    lessonNotes: [
      '介面可降低呼叫端與實作之間耦合。',
      '組合能保留彈性，並提高測試替換能力。',
      '繼承仍有價值，但深層階層常帶來維護負擔。',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "public interface INotifier\n{\n    void Send(string message);\n}\n\npublic class ConsoleNotifier : INotifier\n{\n    public void Send(string message) => Console.WriteLine(message);\n}\n\npublic class WelcomeService\n{\n    private readonly INotifier _notifier;\n\n    public WelcomeService(INotifier notifier)\n    {\n        _notifier = notifier;\n    }\n\n    public void SendWelcome(string userName)\n    {\n        _notifier.Send($\"Welcome, {userName}!\");\n    }\n}\n\nvar service = new WelcomeService(new ConsoleNotifier());\nservice.SendWelcome(\"Tommy\");",
    practice: [
      '為通知或儲存行為定義一個介面。',
      '替換不同實作並保持呼叫端不變。',
      '把一段繼承設計改為組合模式。',
    ],
    reasons: [
      '系統彈性高度依賴邊界設計。',
      '組合式設計通常更容易測試與演進。',
    ],
    mistakes: [
      '需求未明時先做過大介面。',
      '為重用目的強行採用深層繼承。',
    ],
    takeaways: [
      '介面應描述行為契約。',
      '組合優先策略通常更適合應用層設計。',
    ],
    references: [
      { label: 'C# docs · Interfaces', url: 'https://learn.microsoft.com/dotnet/csharp/programming-guide/interfaces/' },
      { label: 'C# docs · Inheritance', url: 'https://learn.microsoft.com/dotnet/csharp/fundamentals/object-oriented/inheritance' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: '例外處理、日誌與除錯習慣',
    summary: '清楚處理失敗，並建立可重複的除錯流程。',
    moduleTitle: '模組 3 · 專案組織與資料處理模式',
    intro: '這一課聚焦可靠性：如何處理例外、記錄可用日誌，並用穩定流程定位問題。',
    learningPoints: [
      '在可恢復情境使用 try/catch。',
      '記錄可追蹤的關鍵上下文。',
      '建立可重複的除錯步驟。',
    ],
    lessonNotes: [
      '例外處理的目標是明確邊界，不是把錯誤吞掉。',
      '日誌應包含可行動資訊，而不只是一句失敗訊息。',
      '除錯效率來自流程化習慣，而不是臨時猜測。',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "try\n{\n    int value = int.Parse(\"abc\");\n    Console.WriteLine(value);\n}\ncatch (FormatException ex)\n{\n    Console.WriteLine($\"invalid input: {ex.Message}\");\n}",
    practice: [
      '針對輸入解析錯誤寫一個精準 catch 分支。',
      '在關鍵流程前後加上日誌。',
      '整理一份你自己的除錯檢查清單。',
    ],
    reasons: [
      '可靠性與可維運性直接影響交付品質。',
      '除錯能力是團隊工程師的核心技能。',
    ],
    mistakes: [
      '無差別 catch Exception。',
      '日誌沒有關鍵上下文導致難以追查。',
    ],
    takeaways: [
      '例外處理要有策略，不是形式。',
      '好的日誌與除錯流程能大幅縮短修復時間。',
    ],
    references: [
      { label: 'C# docs · Exception handling statements', url: 'https://learn.microsoft.com/dotnet/csharp/language-reference/statements/exception-handling-statements' },
      { label: '.NET docs · Logging in .NET', url: 'https://learn.microsoft.com/dotnet/core/extensions/logging' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: 'Namespaces、專案分層與 NuGet 套件',
    summary: '整理大型專案結構，並以可控方式管理依賴。',
    moduleTitle: '模組 3 · 專案組織與資料處理模式',
    intro: '隨著專案成長，命名空間與依賴管理會直接影響可讀性與維護成本。',
    learningPoints: [
      '用 namespace 表達模組責任。',
      '拆分 solution 與 project 邊界。',
      '有意識地新增和管理 NuGet 依賴。',
    ],
    lessonNotes: [
      'namespace 不只是語法，它代表責任與擁有權。',
      'project 分層清楚時，測試與部署流程更容易維持穩定。',
      '每個 NuGet 套件都應有明確引入理由。',
    ],
    exampleLanguage: 'bash',
    exampleCode: "dotnet new sln -n LearningApp\ndotnet new classlib -n LearningApp.Domain\ndotnet new webapi -n LearningApp.Api\ndotnet sln add LearningApp.Domain/LearningApp.Domain.csproj\ndotnet sln add LearningApp.Api/LearningApp.Api.csproj\ndotnet add LearningApp.Api package FluentValidation",
    practice: [
      '建立至少兩個 project 的 solution。',
      '為每個 project 設計 namespace 規則。',
      '新增一個 NuGet 套件並記錄用途。',
    ],
    reasons: [
      '結構清楚會直接提升團隊協作速度。',
      '依賴管理紀律能降低長期維護風險。',
    ],
    mistakes: [
      '小需求也大量引入外部套件。',
      '把不相關責任混在同一 project。',
    ],
    takeaways: [
      'namespace 與專案分層應服務架構邊界。',
      'NuGet 管理是工程品質的一部分。',
    ],
    references: [
      { label: 'C# docs · Namespaces', url: 'https://learn.microsoft.com/dotnet/csharp/fundamentals/types/namespaces' },
      { label: 'NuGet docs · What is NuGet?', url: 'https://learn.microsoft.com/nuget/what-is-nuget' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'LINQ：記憶體資料查詢與轉換',
    summary: '用可讀 LINQ 表達式完成篩選、投影與排序。',
    moduleTitle: '模組 3 · 專案組織與資料處理模式',
    intro: '這一課把 LINQ 放在實務資料轉換場景，協助你寫出更清楚的查詢式邏輯。',
    learningPoints: [
      '使用 Where、Select、OrderBy 等常用操作。',
      '用投影產生適合顯示的資料模型。',
      '保持查詢鏈可讀且可維護。',
    ],
    lessonNotes: [
      'LINQ 能減少樣板迴圈，讓查詢意圖更直觀。',
      '好用的 LINQ 不是越短越好，而是讓邏輯更清楚。',
      '若鏈式查詢過長，應該拆分步驟提升可讀性。',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "var lessons = new[]\n{\n    new { Title = \"Intro\", Duration = 20 },\n    new { Title = \"Async\", Duration = 35 },\n    new { Title = \"LINQ\", Duration = 30 }\n};\n\nvar longLessons = lessons\n    .Where(item => item.Duration >= 30)\n    .OrderBy(item => item.Title)\n    .Select(item => item.Title)\n    .ToList();",
    practice: [
      '寫一個 LINQ 查詢篩選特定條件資料。',
      '用 Select 轉成較簡化輸出模型。',
      '把一段手寫迴圈改成 LINQ。',
    ],
    reasons: [
      'LINQ 在 C# 生態中使用非常普遍。',
      '查詢可讀性會影響長期維護效率。',
    ],
    mistakes: [
      '寫過長查詢鏈導致意圖不清。',
      '明明簡單迴圈更清楚卻硬用 LINQ。',
    ],
    takeaways: [
      'LINQ 應服務可讀性與抽象清晰度。',
      '查詢式思維能降低資料處理重複碼。',
    ],
    references: [
      { label: 'C# docs · LINQ', url: 'https://learn.microsoft.com/dotnet/csharp/linq/' },
      { label: 'C# docs · LINQ concepts', url: 'https://learn.microsoft.com/dotnet/csharp/programming-guide/concepts/linq/' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'Async / await 與 Task 型流程',
    summary: '正確等待非同步操作，建立可回應流程。',
    moduleTitle: '模組 4 · 非同步程式設計與應用 I/O',
    intro: '這一課建立 C# 非同步心智模型，讓 I/O 密集工作更流暢且可維護。',
    learningPoints: [
      '理解 Task 型非同步模型。',
      '在方法中使用 async 與 await。',
      '處理非同步流程中的錯誤與取消。',
    ],
    lessonNotes: [
      '非同步主要價值在 I/O 等待場景，不是所有程式都要並行。',
      'await 能讓非同步流程維持可讀性。',
      '可靠的非同步流程仍需清楚的錯誤與取消策略。',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "public static async Task<string> LoadMessageAsync()\n{\n    await Task.Delay(200);\n    return \"done\";\n}\n\nstring message = await LoadMessageAsync();\nConsole.WriteLine(message);",
    practice: [
      '把一個同步方法改為 Task-based async。',
      '等待兩個非同步操作並比較行為差異。',
      '加入 try/catch 處理 await 失敗。',
    ],
    reasons: [
      '現代 .NET API 與服務普遍採用 async。',
      '正確非同步能避免阻塞與效能問題。',
    ],
    mistakes: [
      '在應用程式中用 Result 或 Wait 阻塞 async 流程。',
      '關鍵路徑使用 fire-and-forget。',
    ],
    takeaways: [
      '非同步應用在 I/O 場景最有效。',
      'Task 流程仍需要可觀測與可除錯設計。',
    ],
    references: [
      { label: 'C# docs · Asynchronous programming', url: 'https://learn.microsoft.com/dotnet/csharp/asynchronous-programming/' },
      { label: '.NET API docs · Task', url: 'https://learn.microsoft.com/dotnet/api/system.threading.tasks.task' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: '檔案、JSON 序列化與設定管理',
    summary: '讀寫檔案、轉換 JSON，並用設定來源管理應用行為。',
    moduleTitle: '模組 4 · 非同步程式設計與應用 I/O',
    intro: '這一課把實務 I/O 串起來：檔案操作、JSON 轉換，以及環境設定管理。',
    learningPoints: [
      '安全讀寫檔案內容。',
      '用 System.Text.Json 做序列化與反序列化。',
      '把硬編碼值改為設定來源。',
    ],
    lessonNotes: [
      '檔案和 JSON 是 API 與工具程式高頻需求。',
      'System.Text.Json 是 .NET 現代預設方案，適合多數場景。',
      '設定管理是區分本機與正式環境的重要基礎。',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "using System.Text.Json;\n\npublic record LessonItem(string Title, int Duration);\n\nvar item = new LessonItem(\"C# Async\", 35);\nstring json = JsonSerializer.Serialize(item);\nawait File.WriteAllTextAsync(\"lesson.json\", json);\n\nstring raw = await File.ReadAllTextAsync(\"lesson.json\");\nvar restored = JsonSerializer.Deserialize<LessonItem>(raw);",
    practice: [
      '把一個模型序列化為 JSON 並寫入檔案。',
      '再讀回檔案並反序列化成強型別模型。',
      '把一個硬編碼參數移到設定來源。',
    ],
    reasons: [
      'I/O 與設定品質直接影響部署穩定性。',
      '強型別 JSON 流程可降低解析錯誤。',
    ],
    mistakes: [
      '把環境差異值硬寫在程式碼裡。',
      '忽略檔案讀寫與 JSON 解析失敗情境。',
    ],
    takeaways: [
      '檔案、JSON、設定管理是實務後端基礎。',
      '錯誤處理與型別模型能提升資料流可靠性。',
    ],
    references: [
      { label: '.NET docs · File and stream I/O', url: 'https://learn.microsoft.com/dotnet/standard/io/' },
      { label: '.NET docs · System.Text.Json overview', url: 'https://learn.microsoft.com/dotnet/standard/serialization/system-text-json/overview' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'ASP.NET Core Minimal API 基礎',
    summary: '建立路由、綁定輸入，並回傳一致 API 響應。',
    moduleTitle: '模組 5 · ASP.NET Core 與小型 API 專案',
    intro: '這一課用 Minimal API 建立 C# 後端入門路徑，快速實作可用端點。',
    learningPoints: [
      '建立並註冊 Minimal API 路由。',
      '安全綁定路徑與請求資料。',
      '維持狀態碼與回應格式一致。',
    ],
    lessonNotes: [
      'Minimal API 適合快速建立聚焦型服務。',
      '即使是小型端點，也要重視輸入驗證與回應一致性。',
      '路由與狀態碼設計應從第一天就保持紀律。',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\n\napp.MapGet(\"/health\", () => Results.Ok(new { status = \"ok\" }));\napp.MapPost(\"/lessons\", (LessonRequest req) => Results.Created($\"/lessons/{req.Title}\", req));\n\napp.Run();\n\npublic record LessonRequest(string Title, int Duration);",
    practice: [
      '建立 /health 路由並驗證輸出。',
      '新增一個 POST 端點接收 request model。',
      '統一成功與失敗回應格式。',
    ],
    reasons: [
      'Minimal API 是現代 .NET 常見入門路徑。',
      '早期建立規格一致性可降低擴充成本。',
    ],
    mistakes: [
      '端點之間回應格式不一致。',
      '因專案小而省略輸入驗證。',
    ],
    takeaways: [
      'Minimal API 可快速啟動，但仍需設計紀律。',
      '一致路由與回應策略是可維護 API 的基礎。',
    ],
    references: [
      { label: 'ASP.NET Core docs · Minimal APIs', url: 'https://learn.microsoft.com/aspnet/core/fundamentals/minimal-apis' },
      { label: 'ASP.NET Core docs · Web APIs', url: 'https://learn.microsoft.com/aspnet/core/web-api/' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: '建立並整理小型 Web API 專案',
    summary: '整合驗證、分層與交付前檢查，完成實務小型 API。',
    moduleTitle: '模組 5 · ASP.NET Core 與小型 API 專案',
    intro: '最後一課把語言與框架能力整合成完整小型 API，練習從功能到交付的完整路徑。',
    learningPoints: [
      '定義端點、服務、儲存層責任邊界。',
      '加入驗證與依賴注入流程。',
      '建立交付前檢查清單。',
    ],
    lessonNotes: [
      '完整小專案最能把分散知識轉為實作能力。',
      '分層清楚的 API 在測試與重構上更穩定。',
      '交付前應檢查設定、日誌、錯誤回應與基本流程測試。',
    ],
    exampleLanguage: 'text',
    exampleCode: "Project outline\n  Api/\n    Endpoints/\n    Services/\n    Repositories/\n    Contracts/\n\nChecklist\n  - Validate request inputs\n  - Return consistent error responses\n  - Keep settings in configuration\n  - Run smoke tests before release",
    practice: [
      '完成至少三個端點的小型 API。',
      '把 endpoint 與 service 邏輯分離。',
      '寫一份交付前檢查表並實際執行。',
    ],
    reasons: [
      '端到端小專案是衡量是否能實際交付的關鍵。',
      '良好專案組織會明顯降低後續維護成本。',
    ],
    mistakes: [
      '功能增長後仍把所有邏輯留在 Program.cs。',
      '未做基本驗證與檢查就直接結案。',
    ],
    takeaways: [
      '可維護 API 需要清楚邊界與一致規格。',
      '交付品質來自可重複的發布前檢查。',
    ],
    references: [
      { label: 'ASP.NET Core docs · Dependency injection', url: 'https://learn.microsoft.com/aspnet/core/fundamentals/dependency-injection' },
      { label: 'ASP.NET Core docs · Integration tests', url: 'https://learn.microsoft.com/aspnet/core/test/integration-tests' },
    ],
  },
];

export function getCSharpLessons() {
  return csharpLessons;
}

export function getCSharpLessonBySlug(slug: string) {
  return csharpLessons.find((lesson) => lesson.slug === slug) ?? null;
}
