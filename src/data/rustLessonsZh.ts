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

export const rustLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: '安裝 Rust、rustup 並建立第一個 Cargo 專案',
    summary: '完成工具鏈建置，並建立可重複的 Cargo 工作流。',
    moduleTitle: '模組 1 · Rust 安裝與核心語法',
    intro: '這一課先把 Rust 開發環境與基本工作流打穩，讓你後續能專注在語言與設計觀念。',
    learningPoints: [
      '透過 rustup 安裝 Rust 並確認版本。',
      '使用 cargo new、cargo run、cargo build。',
      '理解 Cargo 在 Rust 專案中的核心角色。',
    ],
    lessonNotes: [
      'rustup 是官方建議的工具鏈管理入口，能降低版本不一致問題。',
      'Cargo 同時管理建置、依賴與測試，是 Rust 開發主線的一部分。',
      '先把環境打穩，後面學所有權、借用與泛型會更順。',
    ],
    exampleLanguage: 'bash',
    exampleCode: `rustc --version
cargo --version
cargo new rust_intro
cd rust_intro
cargo run
cargo build`,
    practice: [
      '在本機安裝 Rust 並驗證 rustc 與 cargo 版本。',
      '建立新專案並成功執行預設程式。',
      '查看 Cargo.toml 並說明 package 基本欄位。',
    ],
    reasons: [
      '工具鏈熟悉度會直接影響後續學習速度。',
      'Cargo 是所有 Rust 專案都會使用的標準流程。',
    ],
    mistakes: [
      '不使用 Cargo，改成手動管理檔案與依賴。',
      '忽略版本檢查，等到編譯失敗才回頭排查。',
    ],
    takeaways: [
      'Rust 開發從 rustup + Cargo 開始。',
      '你應該已能建立、執行、建置最小 Rust 專案。',
    ],
    references: [
      { label: 'The Rust Book · Installation', url: 'https://doc.rust-lang.org/book/ch01-01-installation.html' },
      { label: 'The Cargo Book · Getting Started', url: 'https://doc.rust-lang.org/cargo/getting-started/' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'Rust 的變數、函式與流程控制',
    summary: '以不可變預設與明確流程控制寫出可讀程式。',
    moduleTitle: '模組 1 · Rust 安裝與核心語法',
    intro: '這一課建立 Rust 語法基本功，先把變數、函式與流程控制寫清楚。',
    learningPoints: [
      '理解 mutability 與 shadowing 的使用時機。',
      '撰寫型別明確的函式與回傳值。',
      '用 if、loop、while、match 管理流程。',
    ],
    lessonNotes: [
      'Rust 預設不可變，幫助你更有意識地管理狀態變更。',
      '函式簽名明確，能把很多問題留在編譯期解決。',
      '語法可以精簡，但流程可讀性更重要。',
    ],
    exampleLanguage: 'rust',
    exampleCode: `fn next_score(score: i32) -> i32 {
    if score > 90 {
        score
    } else {
        score + 5
    }
}

fn main() {
    let scores = [70, 88, 95];
    for score in scores {
        let _ = next_score(score);
    }
}`,
    practice: [
      '寫一個函式，依金額回傳不同費率。',
      '用 match 把狀態碼映射成可讀標籤。',
      '把過長的 main 拆成數個小函式。',
    ],
    reasons: [
      '語法基礎穩，後續所有權章節才不會被細節卡住。',
      '可讀流程能提升除錯與重構效率。',
    ],
    mistakes: [
      '過度依賴可變變數而忽略不可變預設。',
      '追求過度精簡造成邏輯難讀。',
    ],
    takeaways: [
      'Rust 重視明確與可預期的控制流程。',
      '函式切分清楚是後續設計能力的基礎。',
    ],
    references: [
      { label: 'The Rust Book · Common Programming Concepts', url: 'https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html' },
      { label: 'The Rust Book · Control Flow', url: 'https://doc.rust-lang.org/book/ch03-05-control-flow.html' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: '所有權（Ownership）與移動語意（Move Semantics）',
    summary: '理解所有權如何提供可預測的記憶體安全。',
    moduleTitle: '模組 2 · 所有權與資料建模',
    intro: '所有權是 Rust 的核心。這一課會建立你對 move 行為與資料生命週期的直覺。',
    learningPoints: [
      '理解所有權規則在實務中的意義。',
      '知道值在何時會 move。',
      '在必要時才使用 clone。',
    ],
    lessonNotes: [
      'Rust 預設每個值只有一個 owner，這可避免一大類記憶體錯誤。',
      'move 看似嚴格，但它讓資料流向更明確。',
      '重點不是消除錯誤訊息，而是理解資料擁有關係。',
    ],
    exampleLanguage: 'rust',
    exampleCode: `fn take_value(values: Vec<i32>) -> Vec<i32> {
    values
}

fn main() {
    let numbers = vec![1, 2, 3];
    let _owned = take_value(numbers);
}`,
    practice: [
      '寫一個函式接收所有權並回傳資料。',
      '在一個案例使用 clone，說明為什麼。',
      '手動追蹤小程式的 ownership 流向。',
    ],
    reasons: [
      '所有權是理解 Rust 其餘主題的前提。',
      '這套規則是 Rust 在無 GC 下仍保持安全的關鍵。',
    ],
    mistakes: [
      '到處 clone 來避開編譯器訊息。',
      '把 move 規則當成隨機限制。',
    ],
    takeaways: [
      '所有權把記憶體安全帶到編譯期。',
      '資料流向一旦清楚，move 行為就能推理。',
    ],
    references: [
      { label: 'The Rust Book · Ownership', url: 'https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html' },
      { label: 'Rust by Example · Ownership and moves', url: 'https://doc.rust-lang.org/rust-by-example/scope/move.html' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: '借用（Borrowing）與參考（References）',
    summary: '在不轉移所有權的情況下安全共享資料。',
    moduleTitle: '模組 2 · 所有權與資料建模',
    intro: '借用讓你能在保持安全的同時共享資料，是 Rust 日常開發的核心能力。',
    learningPoints: [
      '使用不可變參考做唯讀操作。',
      '使用可變參考做受控修改。',
      '理解借用規則如何避免資料競爭。',
    ],
    lessonNotes: [
      '借用可避免不必要 ownership 轉移。',
      'Rust 透過規則限制同時可變存取，降低 race 風險。',
      'borrow-checker 訊息常常就是設計改進提示。',
    ],
    exampleLanguage: 'rust',
    exampleCode: `fn bump(value: &mut i32) {
    *value += 1;
}

fn main() {
    let mut count = 0;
    bump(&mut count);
}`,
    practice: [
      '把會消耗 ownership 的函式改成借用版本。',
      '用可變參考更新 struct 或數值狀態。',
      '故意觸發借用錯誤並修正一次。',
    ],
    reasons: [
      '多數 Rust 程式都大量使用 references。',
      '借用能力直接影響集合、方法與迭代器使用。',
    ],
    mistakes: [
      '明明只讀取資料卻濫用可變借用。',
      '把 borrow-checker 視為阻礙而不是設計回饋。',
    ],
    takeaways: [
      '借用是在安全前提下共享資料的關鍵機制。',
      '借用規則越熟，Rust 代碼會越自然。',
    ],
    references: [
      { label: 'The Rust Book · References and Borrowing', url: 'https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html' },
      { label: 'The Rust Book · Slices', url: 'https://doc.rust-lang.org/book/ch04-03-slices.html' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: '用 structs、enums、match 建立可表達模型',
    summary: '把領域狀態寫進型別，並用模式比對確保分支完整。',
    moduleTitle: '模組 2 · 所有權與資料建模',
    intro: '這一課把 Rust 型別能力用在實務建模，讓狀態和規則都更清楚。',
    learningPoints: [
      '用 struct 建立資料模型。',
      '用 enum 定義有限狀態集合。',
      '用 match 做完整分支處理。',
    ],
    lessonNotes: [
      'struct 與 enum 的組合能清楚區分資料與狀態。',
      'match 的窮盡檢查可避免漏處理狀態。',
      '型別設計越貼近領域，程式越不容易出錯。',
    ],
    exampleLanguage: 'rust',
    exampleCode: `enum PublishState {
    Draft,
    Published,
}

fn can_show(state: PublishState) -> bool {
    match state {
        PublishState::Draft => false,
        PublishState::Published => true,
    }
}`,
    practice: [
      '為訂單流程設計 enum 並處理所有分支。',
      '用 struct 建立一個簡單業務實體。',
      '把一段 if-else 改為 match。',
    ],
    reasons: [
      '明確建模能降低邏輯歧義。',
      'enums 與 match 是 Rust 實務非常常見的模式。',
    ],
    mistakes: [
      '關鍵狀態仍使用任意字串。',
      '沒有利用 match 的完整性檢查。',
    ],
    takeaways: [
      '型別可以承載領域規則，而不只是存資料。',
      'match 讓狀態處理更可靠、可維護。',
    ],
    references: [
      { label: 'The Rust Book · Defining and Instantiating Structs', url: 'https://doc.rust-lang.org/book/ch05-01-defining-structs.html' },
      { label: 'The Rust Book · Enums and Pattern Matching', url: 'https://doc.rust-lang.org/book/ch06-00-enums.html' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: 'Collections 與 UTF-8 字串處理',
    summary: '在實務情境中使用 vectors、hash maps 與字串型別。',
    moduleTitle: '模組 3 · 錯誤處理與專案結構',
    intro: '集合和字串是日常高頻任務，這一課會建立你在 Rust 的正確使用習慣。',
    learningPoints: [
      '用 Vec 與 HashMap 解決常見資料問題。',
      '理解 String 與 &str 的差異。',
      '避免錯誤的 UTF-8 索引假設。',
    ],
    lessonNotes: [
      'Vec 與 HashMap 是 Rust 實務最常見集合。',
      'Rust 字串為 UTF-8，位元組與字元邊界不等價。',
      '越早建立正確字串觀念，越能避免隱性 bug。',
    ],
    exampleLanguage: 'rust',
    exampleCode: `use std::collections::HashMap;

fn main() {
    let mut lessons = vec![1, 2, 3];
    lessons.push(4);

    let mut progress = HashMap::new();
    progress.insert(1, 7);
}`,
    practice: [
      '建立一個 Vec 並做篩選或轉換。',
      '用 HashMap 管理 ID 對應資料。',
      '嘗試不同字串切片方式並觀察行為。',
    ],
    reasons: [
      '集合與字串能力會出現在幾乎每個 Rust 專案。',
      'UTF-8 理解度直接影響文字處理正確性。',
    ],
    mistakes: [
      '把字串當固定寬度字元陣列處理。',
      '不依查詢模式就隨意選擇資料結構。',
    ],
    takeaways: [
      'collections 選擇應對齊資料存取需求。',
      '字串處理需用 UTF-8 心智模型思考。',
    ],
    references: [
      { label: 'The Rust Book · Storing Lists of Values with Vectors', url: 'https://doc.rust-lang.org/book/ch08-01-vectors.html' },
      { label: 'The Rust Book · Storing UTF-8 Encoded Text with Strings', url: 'https://doc.rust-lang.org/book/ch08-02-strings.html' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: '用 Option 與 Result 建立可靠錯誤流程',
    summary: '把缺值與可恢復錯誤納入型別系統。',
    moduleTitle: '模組 3 · 錯誤處理與專案結構',
    intro: 'Rust 不鼓勵隱性失敗。這一課會用 Option 與 Result 建立顯式的錯誤處理習慣。',
    learningPoints: [
      '用 Option 表示可能缺值。',
      '用 Result 表示可恢復錯誤。',
      '用 match 與問號運算子傳遞錯誤。',
    ],
    lessonNotes: [
      'Option 和 Result 讓不確定性成為型別的一部分。',
      '這種做法能讓處理邏輯更明確、更可測試。',
      '良好錯誤流是 CLI 與服務程式穩定性的關鍵。',
    ],
    exampleLanguage: 'rust',
    exampleCode: `#[derive(Debug)]
enum MathError {
    DivideByZero,
}

fn divide(a: i32, b: i32) -> Result<i32, MathError> {
    if b == 0 {
        Err(MathError::DivideByZero)
    } else {
        Ok(a / b)
    }
}`,
    practice: [
      '把 panic 流程改為 Result 回傳。',
      '在查找場景使用 Option 並提供預設值。',
      '把多步驟函式改成可傳遞錯誤的版本。',
    ],
    reasons: [
      '顯式錯誤處理是 Rust 實務品質核心。',
      '提早建好錯誤流能降低線上故障成本。',
    ],
    mistakes: [
      '在可預期失敗情境濫用 unwrap。',
      '過早把所有錯誤轉為模糊字串。',
    ],
    takeaways: [
      'Option 與 Result 讓失敗情境可預期、可推理。',
      '型別系統能幫你建立更可靠的錯誤流程。',
    ],
    references: [
      { label: 'The Rust Book · Recoverable Errors with Result', url: 'https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html' },
      { label: 'Rust std docs · Option', url: 'https://doc.rust-lang.org/std/option/' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: 'Modules、crates 與 Cargo 專案結構',
    summary: '把成長中的程式碼拆成可維護模組與 crate 邊界。',
    moduleTitle: '模組 3 · 錯誤處理與專案結構',
    intro: '隨著程式增長，module 與 crate 的邊界會直接影響可讀性、測試性與協作。',
    learningPoints: [
      '使用 mod、pub、use 組織程式。',
      '理解 binary 與 library crate 的分工。',
      '建立可擴充的 package 結構。',
    ],
    lessonNotes: [
      'Rust 預設封裝性高，visibility 規則可降低耦合。',
      'Cargo package 可同時包含 lib 與 bin，方便分層。',
      '清楚結構會讓重構和維護成本明顯下降。',
    ],
    exampleLanguage: 'text',
    exampleCode: `lesson_cli/
  Cargo.toml
  src/main.rs
  src/lib.rs
  src/course/mod.rs
  src/course/service.rs`,
    practice: [
      '把單檔程式拆成多個職責明確模組。',
      '只對外公開必要 API。',
      '建立一個 lib + bin 結構範例。',
    ],
    reasons: [
      '良好結構能降低大型專案維護難度。',
      'module 邊界清楚有助於測試和團隊協作。',
    ],
    mistakes: [
      '為求快速把所有內容都設成 public。',
      '專案成長後仍把所有程式塞在 main。',
    ],
    takeaways: [
      'module 與 crate 結構是架構設計的一部分。',
      'Cargo 不只是建置工具，也是專案組織中心。',
    ],
    references: [
      { label: 'The Rust Book · Packages, Crates, and Modules', url: 'https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html' },
      { label: 'The Cargo Book', url: 'https://doc.rust-lang.org/cargo/' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: '用 traits 與 generics 建立可重用 API',
    summary: '在保持型別安全下減少重複邏輯。',
    moduleTitle: '模組 4 · 抽象能力與函式式模式',
    intro: 'traits 與 generics 是 Rust 抽象能力核心，能讓程式重用且維持清楚邊界。',
    learningPoints: [
      '撰寫 generic 函式。',
      '用 trait 定義共享行為。',
      '以 trait bound 管理 API 能力。',
    ],
    lessonNotes: [
      'generics 可減少重複，同時保持高效能。',
      'traits 提供行為契約，是 Rust 生態系常見模式。',
      '邊界條件設計越清楚，API 越容易維護。',
    ],
    exampleLanguage: 'rust',
    exampleCode: `trait Summary {
    fn score(&self) -> i32;
}

fn total<T: Summary>(items: &[T]) -> i32 {
    items.iter().map(|item| item.score()).sum()
}`,
    practice: [
      '建立一個 trait 表示可計分行為。',
      '讓兩個 struct 實作該 trait。',
      '寫一個 generic 函式處理兩種實作。',
    ],
    reasons: [
      '抽象能力會決定專案成長速度與品質。',
      'traits 與 generics 是讀懂 Rust 函式庫的關鍵。',
    ],
    mistakes: [
      '過早設計過大 trait。',
      '明明具體型別更清楚仍硬套抽象。',
    ],
    takeaways: [
      'traits 描述行為，generics 提供重用。',
      '抽象應服務可讀性與維護性。',
    ],
    references: [
      { label: 'The Rust Book · Generic Types, Traits, and Lifetimes', url: 'https://doc.rust-lang.org/book/ch10-00-generics.html' },
      { label: 'Rust by Example · Traits', url: 'https://doc.rust-lang.org/rust-by-example/trait.html' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: '生命週期（Lifetime）基礎',
    summary: '在函式簽名中表達借用資料的關係。',
    moduleTitle: '模組 4 · 抽象能力與函式式模式',
    intro: 'lifetime 入門重點是理解借用關係，而不是背複雜語法。',
    learningPoints: [
      '知道 lifetime annotation 的目的。',
      '讀懂常見 lifetime 函式簽名。',
      '避免不必要顯式標註。',
    ],
    lessonNotes: [
      'lifetime 描述參考必須有效的關係範圍。',
      '很多情境可由編譯器自動推導。',
      '先釐清 ownership，再補 lifetime 會更簡單。',
    ],
    exampleLanguage: 'rust',
    exampleCode: `fn pick_first<'a>(left: &'a [i32], _right: &'a [i32]) -> &'a [i32] {
    left
}`,
    practice: [
      '撰寫一個回傳借用值的函式並加上 lifetime。',
      '移除可省略標註，觀察編譯器推導。',
      '用文字解釋一個 lifetime 簽名含義。',
    ],
    reasons: [
      'lifetime 是理解很多 API 與錯誤訊息的必要能力。',
      '正確觀念可避免盲目試錯。',
    ],
    mistakes: [
      '所有情境都強制加上複雜 lifetime。',
      '忽略所有權設計直接硬解 lifetime 錯誤。',
    ],
    takeaways: [
      'lifetime 描述借用關係，不是執行時間。',
      '所有權清楚時，lifetime 問題通常更容易解。',
    ],
    references: [
      { label: 'The Rust Book · Validating References with Lifetimes', url: 'https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html' },
      { label: 'Rust Reference · Lifetime Elision', url: 'https://doc.rust-lang.org/reference/lifetime-elision.html' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: '用 iterators 與 closures 建立資料管線',
    summary: '透過可組合迭代器鏈完成篩選與轉換。',
    moduleTitle: '模組 4 · 抽象能力與函式式模式',
    intro: '這一課會把迭代器與閉包放回實務場景，建立可讀、可維護的資料處理流程。',
    learningPoints: [
      '使用 iter、map、filter、collect。',
      '理解 closure 捕捉與使用方式。',
      '在簡潔與可讀性之間取得平衡。',
    ],
    lessonNotes: [
      'iterator chain 在被消費前通常是惰性計算。',
      'closure 常用於排序、篩選與投影邏輯。',
      '過長鏈式寫法可能降低可讀性，應適度拆分。',
    ],
    exampleLanguage: 'rust',
    exampleCode: `fn main() {
    let values = vec![1, 2, 3, 4, 5, 6];

    let result: Vec<i32> = values
        .iter()
        .filter(|n| *n % 2 == 0)
        .map(|n| n * 2)
        .collect();

    let _ = result;
}`,
    practice: [
      '用 iterator chain 實作一次分數轉換。',
      '用 closure 對 struct 陣列做排序。',
      '把一段 for 迴圈改寫為 iterator 版本。',
    ],
    reasons: [
      '迭代器風格是 Rust 社群常見寫法。',
      '這些能力常與 traits、泛型一起使用。',
    ],
    mistakes: [
      '鏈式呼叫過長導致意圖不明。',
      '過早 collect 讓流程失去惰性優勢。',
    ],
    takeaways: [
      'iterators 與 closures 能建立精煉且型別安全的資料流程。',
      '程式碼可讀性應始終優先。',
    ],
    references: [
      { label: 'The Rust Book · Closures', url: 'https://doc.rust-lang.org/book/ch13-01-closures.html' },
      { label: 'The Rust Book · Processing a Series of Items with Iterators', url: 'https://doc.rust-lang.org/book/ch13-02-iterators.html' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'Rust 專案的測試與文件工作流',
    summary: '用測試與文件維持程式可信度與可維護性。',
    moduleTitle: '模組 5 · 測試、並行與小型 CLI',
    intro: '這一課聚焦品質流程：測試確保行為正確，文件確保知識可傳遞。',
    learningPoints: [
      '撰寫 unit 與 integration tests。',
      '使用 rustdoc 與 doctest。',
      '將測試和文件納入日常開發。',
    ],
    lessonNotes: [
      'Rust 透過 Cargo 提供完整測試工作流。',
      '可執行文件範例能降低文件與程式碼落差。',
      '測試與文件一起做，重構風險會更低。',
    ],
    exampleLanguage: 'rust',
    exampleCode: `/// # Examples
/// assert_eq!(add(2, 3), 5);
fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn add_works() {
        assert_eq!(add(1, 2), 3);
    }
}`,
    practice: [
      '新增一個 unit test 與一個 integration test。',
      '為公開函式補上文件註解。',
      '執行 cargo test 與 cargo doc。',
    ],
    reasons: [
      '品質流程是專案可長期維護的底線。',
      'doctest 能讓範例保持與程式同步。',
    ],
    mistakes: [
      '只測 happy path。',
      '文件寫完不驗證可執行性。',
    ],
    takeaways: [
      '測試與文件都應視為正式工程產出。',
      'Rust 工具鏈讓品質流程容易落地。',
    ],
    references: [
      { label: 'The Rust Book · Writing Automated Tests', url: 'https://doc.rust-lang.org/book/ch11-00-testing.html' },
      { label: 'The Rust Book · Publishing a Crate to Crates.io', url: 'https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: '以小型 CLI 專案認識並行與 async 入門',
    summary: '把 threads 或 async 思維用在實用命令列工具。',
    moduleTitle: '模組 5 · 測試、並行與小型 CLI',
    intro: '最後一課把核心概念整合成小型 CLI，練習從資料讀取到並行處理的完整流程。',
    learningPoints: [
      '用 threads 與 channels 協調工作。',
      '理解 async 在 I/O 等待場景的價值。',
      '完成一個有結構、可測試的 CLI。',
    ],
    lessonNotes: [
      '先掌握基本 thread 模式，再逐步導入 async，通常更穩定。',
      '並行策略應依工作負載選擇，而非追求複雜度。',
      '小型端到端專案是檢驗學習成效最好的方式。',
    ],
    exampleLanguage: 'rust',
    exampleCode: `use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        let _ = tx.send(42);
    });

    let _ = rx.recv();
}`,
    practice: [
      '建立一個 CLI，並行處理兩個輸入來源。',
      '加入參數解析與錯誤回報。',
      '至少撰寫兩個核心邏輯測試。',
    ],
    reasons: [
      '端到端小工具能把抽象概念轉成可交付能力。',
      'CLI 與並行是 Rust 在團隊常見應用情境。',
    ],
    mistakes: [
      '基礎並行尚未穩定就急著導入重型 async 架構。',
      '把商業邏輯和 I/O 處理混在同一層。',
    ],
    takeaways: [
      'Rust 可在實務工具中兼顧安全與效能。',
      '並行設計應先求清楚，再求進階。',
    ],
    references: [
      { label: 'The Rust Book · Fearless Concurrency', url: 'https://doc.rust-lang.org/book/ch16-00-concurrency.html' },
      { label: 'Asynchronous Programming in Rust', url: 'https://rust-lang.github.io/async-book/' },
    ],
  },
];

export function getRustLessons() {
  return rustLessons;
}

export function getRustLessonBySlug(slug: string) {
  return rustLessons.find((lesson) => lesson.slug === slug) ?? null;
}
