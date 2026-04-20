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

export const sqliteLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: '什麼是 SQLite，以及什麼時候適合使用',
    summary: '理解 SQLite 的核心優勢與限制，知道哪些情境最能發揮它的價值。',
    moduleTitle: '模組 1 · SQLite 基礎',
    intro: '第一課先釐清 SQLite 的定位，讓你在本機、行動與嵌入式場景做出合理選擇。',
    learningPoints: [
      '理解 SQLite 是嵌入式、無伺服器的關聯式資料庫引擎。',
      '辨識 SQLite 特別適合的產品情境。',
      '知道何時應改用 client-server 型資料庫。',
    ],
    lessonNotes: [
      'SQLite 把資料存成單一檔案，並在應用程式程序內運作，因此部署與維護都很輕量。',
      '常見使用場景包含手機 App、桌面工具、離線優先應用，以及並發寫入需求不高的小型服務。',
      '選 SQLite 並不代表「低階」，而是針對操作複雜度與產品需求做出的務實選擇。',
    ],
    exampleLanguage: 'text',
    exampleCode: `很適合的場景
  - 行動 App 本機儲存
  - 桌面筆記工具
  - 單機或單使用者資料流程

可能該考慮其他方案
  - 高並發多寫入後端
  - 多台應用伺服器共享同一中心資料庫`,
    practice: [
      '寫出一個你會優先選 SQLite 的產品例子。',
      '寫出一個更適合 PostgreSQL / MySQL 的系統例子。',
      '說明檔案型資料庫如何影響部署複雜度。',
    ],
    reasons: [
      '工具選型會同時影響架構與維運成本。',
      'SQLite 的價值來自用在對的工作負載。',
    ],
    mistakes: [
      '把 SQLite 誤解成只能做玩具專案。',
      '在高並發寫入場景中直接套用 SQLite 而不評估限制。',
    ],
    takeaways: [
      'SQLite 是能力完整但部署模型不同的關聯式資料庫。',
      '選型重點是工作負載匹配，而不是品牌偏好。',
    ],
    references: [
      { label: 'SQLite Documentation', url: 'https://www.sqlite.org/docs.html' },
      { label: 'SQLite · Appropriate Uses', url: 'https://www.sqlite.org/whentouse.html' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: '使用檔案型資料庫與 SQLite CLI',
    summary: '建立、開啟並檢視 SQLite 資料庫檔案，熟悉 CLI 基本工作流。',
    moduleTitle: '模組 1 · SQLite 基礎',
    intro: '在進入進階 SQL 前，先把資料庫檔案與 shell 操作流程練到順手。',
    learningPoints: [
      '在命令列建立與開啟 SQLite 資料庫檔案。',
      '使用 .tables、.schema、.mode 等常用 shell 指令。',
      '把 SQL 與 shell 指令整合在同一個實務流程。',
    ],
    lessonNotes: [
      'SQLite 不需要獨立資料庫伺服器，核心就是資料庫檔案本身。',
      'sqlite3 shell 同時支援 SQL 與檢查格式化指令，適合快速開發與除錯。',
      '即使日後使用 GUI 或 ORM，CLI 能力仍是最可靠的基礎。',
    ],
    exampleLanguage: 'bash',
    exampleCode: `sqlite3 learning.db

-- inside SQLite shell
.tables
.schema
.mode column
.headers on
.quit`,
    practice: [
      '建立一個新的資料庫檔案並重新開啟。',
      '建好一張表後使用 .schema 檢查結構。',
      '切換輸出模式，觀察查詢結果可讀性差異。',
    ],
    reasons: [
      '穩定 CLI 流程可降低 schema 與查詢除錯成本。',
      '理解檔案層行為有助於備份與環境搬移。',
    ],
    mistakes: [
      '把 shell 指令與 SQL 當成互不相關的兩套流程。',
      '沒有追蹤資料庫檔案實際建立在哪個路徑。',
    ],
    takeaways: [
      '只用 SQLite CLI 就能從零建立、檢查並查詢資料庫。',
      '檔案位置與 shell 指令是 SQLite 實務基本功。',
    ],
    references: [
      { label: 'SQLite Docs · Command Line Shell', url: 'https://www.sqlite.org/cli.html' },
      { label: 'SQLite Docs · Getting Started', url: 'https://www.sqlite.org/quickstart.html' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: '資料表、rowid、欄位與主鍵',
    summary: '掌握 SQLite 資料表結構基礎，並理解主鍵與 rowid 的關係。',
    moduleTitle: '模組 1 · SQLite 基礎',
    intro: '這一課會介紹 SQLite 特有的重要觀念：rowid 與 INTEGER PRIMARY KEY 的連動。',
    learningPoints: [
      '建立具清楚實體語意的資料表欄位。',
      '理解 rowid 概念以及 INTEGER PRIMARY KEY 的意義。',
      '依需求選擇合適主鍵策略。',
    ],
    lessonNotes: [
      '多數 SQLite 資料表屬於 rowid table，每筆資料都有內建識別值。',
      '當欄位宣告為 INTEGER PRIMARY KEY 時，該欄位會成為 rowid 的別名。',
      '理解這個行為可讓你在新增與查詢流程中更穩定地設計鍵值。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `CREATE TABLE notes (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT
);

INSERT INTO notes (title, body)
VALUES ('SQLite Intro', 'Start with core table design.');`,
    practice: [
      '建立一張含 INTEGER PRIMARY KEY 的資料表並插入測試資料。',
      '查詢 id 欄位，觀察自動鍵值行為。',
      '用業務語意命名欄位，避免純 UI 命名。',
    ],
    reasons: [
      '資料列識別策略會影響查詢與搬移流程。',
      '先建立乾淨表結構可降低後續重構成本。',
    ],
    mistakes: [
      '建表時沒有明確鍵值策略。',
      '把其他資料庫的鍵值假設直接套到 SQLite。',
    ],
    takeaways: [
      'SQLite 建表先看欄位語意，再決定鍵值策略。',
      'INTEGER PRIMARY KEY 與 rowid 的關係必須提早理解。',
    ],
    references: [
      { label: 'SQLite Docs · CREATE TABLE', url: 'https://www.sqlite.org/lang_createtable.html' },
      { label: 'SQLite Docs · Rowid Tables', url: 'https://www.sqlite.org/rowidtable.html' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'SELECT、WHERE、ORDER BY 與 LIMIT',
    summary: '用 SQLite 常見查詢子句完成篩選、排序與結果控制。',
    moduleTitle: '模組 2 · 查詢與資料寫入',
    intro: '這一課建立最常用查詢語法流暢度，讓你能快速寫出可讀且準確的 SQL。',
    learningPoints: [
      '用明確欄位選取保持查詢聚焦。',
      '用 WHERE 定義資料篩選條件。',
      '用 ORDER BY 與 LIMIT 控制輸出順序與筆數。',
    ],
    lessonNotes: [
      '查詢可讀性的關鍵是先定義問題，再用 SQL 表達。',
      'ORDER BY 與 LIMIT 很適合列表頁、最近紀錄與除錯檢查。',
      '精準 SELECT 能讓應用層程式更簡潔，減少不必要資料傳遞。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `SELECT id, title
FROM notes
WHERE title LIKE 'S%'
ORDER BY id DESC
LIMIT 5;`,
    practice: [
      '寫一條依關鍵字篩選並由新到舊排序的查詢。',
      '把一條 SELECT * 改成明確欄位版本。',
      '在開發檢查時用 LIMIT 取小樣本資料。',
    ],
    reasons: [
      '多數應用資料讀取都從基本查詢開始。',
      '查詢基礎穩定後，JOIN 與報表學習才會順。',
    ],
    mistakes: [
      '在正式查詢路徑過度依賴 SELECT *。',
      '不寫 ORDER BY，假設插入順序就是顯示順序。',
    ],
    takeaways: [
      '好的 SQL 先有清楚資料意圖。',
      'SELECT + WHERE + ORDER BY + LIMIT 是日常核心組合。',
    ],
    references: [
      { label: 'SQLite Docs · SELECT', url: 'https://www.sqlite.org/lang_select.html' },
      { label: 'SQLite Docs · Expressions', url: 'https://www.sqlite.org/lang_expr.html' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: 'INSERT、UPDATE 與 DELETE',
    summary: '安全地修改資料列，理解寫入操作如何改變資料狀態。',
    moduleTitle: '模組 2 · 查詢與資料寫入',
    intro: '寫入操作會改變真實資料，這一課重點是建立可控、安全的修改習慣。',
    learningPoints: [
      '使用 INSERT 新增資料並控制必要欄位。',
      '用明確 WHERE 執行 UPDATE。',
      '刪除資料前確認影響範圍。',
    ],
    lessonNotes: [
      'INSERT、UPDATE、DELETE 語法不複雜，但風險高，尤其在條件不明時。',
      '多數寫入事故來自目標範圍不清楚，特別是缺少 WHERE。',
      '建議流程：先查範圍，再寫入，最後驗證結果。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `INSERT INTO notes (title, body)
VALUES ('Practice SQL', 'Write safely.');

UPDATE notes
SET title = 'Practice SQLite SQL'
WHERE id = 1;

DELETE FROM notes
WHERE id = 1;`,
    practice: [
      '在測試表插入兩筆資料。',
      '用明確 WHERE 條件做一次 UPDATE。',
      '用自己的話說明沒有 WHERE 的 DELETE 風險。',
    ],
    reasons: [
      '資料正確性高度依賴寫入紀律。',
      '安全寫入習慣能避免可預防的資料損失。',
    ],
    mistakes: [
      '急著執行 UPDATE，沒先確認影響範圍。',
      '在測試與正式流程使用完全不同的安全標準。',
    ],
    takeaways: [
      '寫入 SQL 需要可驗證、可回顧的操作習慣。',
      'UPDATE 與 DELETE 的 WHERE 條件是基本防線。',
    ],
    references: [
      { label: 'SQLite Docs · INSERT', url: 'https://www.sqlite.org/lang_insert.html' },
      { label: 'SQLite Docs · UPDATE', url: 'https://www.sqlite.org/lang_update.html' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: '型別親和性（type affinity）與 SQLite 型別處理',
    summary: '理解 SQLite 的型別親和性規則，讓儲存與查詢行為更可預期。',
    moduleTitle: '模組 2 · 查詢與資料寫入',
    intro: 'SQLite 的型別機制和其他資料庫有差異，這一課建立你實務上最需要的判斷力。',
    learningPoints: [
      '理解 SQLite 的 storage class 與 type affinity。',
      '觀察資料寫入時可能發生的型別轉換。',
      '在彈性型別環境中設計可預測 schema。',
    ],
    lessonNotes: [
      'SQLite 採用動態型別加 affinity 規則，欄位宣告會影響資料寫入時的轉換行為。',
      '這種彈性很實用，但若缺乏設計紀律，容易產生資料語意混亂。',
      '實務上應搭配 constraints 與檢查機制，讓資料品質更穩定。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `CREATE TABLE metrics (
  score INTEGER,
  label TEXT,
  recorded_at DATETIME
);

INSERT INTO metrics (score, label, recorded_at)
VALUES ('42', 100, '2026-04-20 10:00:00');

SELECT score, typeof(score), label, typeof(label)
FROM metrics;`,
    practice: [
      '插入混合型別值，使用 typeof() 檢查實際儲存結果。',
      '把一個語意模糊欄位調整為更清楚的型別宣告。',
      '加上 constraints 降低非預期型別轉換。',
    ],
    reasons: [
      '型別認知不清會造成驗證與報表錯誤。',
      '理解 affinity 是設計可靠 SQLite schema 的必要基礎。',
    ],
    mistakes: [
      '以為 SQLite 預設會像 PostgreSQL 一樣嚴格型別檢查。',
      '設計欄位時完全忽略轉換規則。',
    ],
    takeaways: [
      'SQLite 預設是 affinity 型別模型，不是嚴格靜態型別模型。',
      '可預測 schema 需要型別意圖 + 約束設計。',
    ],
    references: [
      { label: 'SQLite Docs · Datatypes In SQLite', url: 'https://www.sqlite.org/datatype3.html' },
      { label: 'SQLite Docs · Core Functions (typeof)', url: 'https://www.sqlite.org/lang_corefunc.html' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: '約束：NOT NULL、UNIQUE 與 CHECK',
    summary: '用常見約束防止無效資料進入資料表。',
    moduleTitle: '模組 3 · 結構與關聯',
    intro: '約束能把資料規則放在最接近資料的層級，避免只靠應用層各自檢查。',
    learningPoints: [
      '用 NOT NULL 強制必要欄位。',
      '用 UNIQUE 防止不該重複的值。',
      '用 CHECK 定義可接受值範圍或格式。',
    ],
    lessonNotes: [
      '約束設計是最具投資報酬率的 schema 習慣之一。',
      'NOT NULL、UNIQUE、CHECK 能在資料進表前就攔住常見錯誤。',
      '規則直接寫在 schema 裡，也能讓團隊更快理解資料契約。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  age INTEGER CHECK (age >= 13)
);`,
    practice: [
      '在既有資料表補上 NOT NULL 與 UNIQUE 約束。',
      '新增一條符合業務規則的 CHECK 條件。',
      '嘗試插入不合法資料並觀察錯誤。',
    ],
    reasons: [
      '資料品質問題預防成本遠低於事後清理。',
      'schema 規則能讓所有寫入路徑都得到一致保護。',
    ],
    mistakes: [
      '關鍵欄位不設約束，只靠前端檢查。',
      'CHECK 寫了但沒有說明其業務意義。',
    ],
    takeaways: [
      '約束是核心設計工具，不是可有可無。',
      'NOT NULL、UNIQUE、CHECK 能大幅提高資料可靠性。',
    ],
    references: [
      { label: 'SQLite Docs · CREATE TABLE', url: 'https://www.sqlite.org/lang_createtable.html' },
      { label: 'SQLite Docs · CHECK Constraints', url: 'https://www.sqlite.org/lang_createtable.html#ckconst' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: 'SQLite 的外鍵與關聯建模',
    summary: '建立父子表關聯並啟用外鍵規則，維持資料一致性。',
    moduleTitle: '模組 3 · 結構與關聯',
    intro: '這一課說明 SQLite 如何在設定正確時有效執行外鍵完整性檢查。',
    learningPoints: [
      '在 SQLite session 中啟用外鍵檢查。',
      '用清楚鍵值建立 parent-child 關係。',
      '理解外鍵如何防止關聯斷裂。',
    ],
    lessonNotes: [
      'SQLite 支援外鍵，但要確認環境設定是否有啟用外鍵約束。',
      '有外鍵後，child 不能指向不存在的 parent，能避免孤兒資料。',
      '關聯建模品質會直接影響 JOIN 正確性與後續維護成本。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `PRAGMA foreign_keys = ON;

CREATE TABLE courses (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL
);

CREATE TABLE lessons (
  id INTEGER PRIMARY KEY,
  course_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  FOREIGN KEY (course_id) REFERENCES courses(id)
);`,
    practice: [
      '啟用 PRAGMA foreign_keys 並建立兩張關聯表。',
      '嘗試插入沒有 parent 的 child 資料並觀察錯誤。',
      '在寫查詢前先整理一份關聯規則說明。',
    ],
    reasons: [
      '關聯完整性是資料可被信任的基礎。',
      '外鍵能減少錯誤參照造成的後續修復工作。',
    ],
    mistakes: [
      '建模關聯但沒確認外鍵檢查是否啟用。',
      '只靠命名慣例，不用正式鍵值約束。',
    ],
    takeaways: [
      'SQLite 在正確設定下可穩定執行關聯完整性保護。',
      '外鍵是多表資料設計的重要支柱。',
    ],
    references: [
      { label: 'SQLite Docs · Foreign Key Support', url: 'https://www.sqlite.org/foreignkeys.html' },
      { label: 'SQLite Docs · PRAGMA Statements', url: 'https://www.sqlite.org/pragma.html' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'JOIN 與多表查詢',
    summary: '把關聯資料表組合成可直接回應應用需求的查詢結果。',
    moduleTitle: '模組 3 · 結構與關聯',
    intro: '正規化資料要透過 JOIN 才能回到可用資訊，這是關聯式查詢的核心能力。',
    learningPoints: [
      '在實務情境使用 INNER JOIN 與 LEFT JOIN。',
      '寫出與鍵值關係對齊的 JOIN 條件。',
      '準確解讀多表查詢結果。',
    ],
    lessonNotes: [
      'JOIN 能把拆分後的資料表重組成具業務意義的視圖。',
      'JOIN 類型選擇取決於你是否要保留未配對資料。',
      '清楚 alias 與精準欄位選取可讓多表 SQL 更可讀。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `SELECT c.title AS course_title, l.title AS lesson_title
FROM courses c
LEFT JOIN lessons l ON l.course_id = c.id
ORDER BY c.id, l.id;`,
    practice: [
      '針對同一組表各寫一條 INNER JOIN 與 LEFT JOIN。',
      '比較結果差異並解釋 row count 為何不同。',
      '把一條過寬查詢重構成清楚別名與必要欄位版本。',
    ],
    reasons: [
      '多數有價值的關聯輸出都要靠 JOIN。',
      'JOIN 正確性直接影響 API 與報表可信度。',
    ],
    mistakes: [
      'ON 條件不完整或錯誤，導致資料錯配。',
      '一次選太多無關欄位，降低可讀性。',
    ],
    takeaways: [
      'JOIN 是關聯語意設計，不只是語法記憶。',
      '清楚多表 SQL 是日常實務能力。',
    ],
    references: [
      { label: 'SQLite Docs · SELECT', url: 'https://www.sqlite.org/lang_select.html' },
      { label: 'SQLite Docs · JOIN 子句語法', url: 'https://www.sqlite.org/syntax/join-clause.html' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: '聚合與分組報表',
    summary: '用 GROUP BY 與聚合函式建立精簡且有用的資料摘要。',
    moduleTitle: '模組 4 · 安全寫入與效能',
    intro: '這一課把查詢從逐列檢視提升到統計與報表層級。',
    learningPoints: [
      '用 GROUP BY 依分類彙整資料。',
      '使用 COUNT、SUM、AVG 等聚合函式。',
      '用 HAVING 篩選分組後結果。',
    ],
    lessonNotes: [
      '聚合查詢是回答「每類有多少」「平均多少」等問題的核心方法。',
      'GROUP BY 先分組，聚合函式再計算每組摘要值。',
      '當需要對摘要結果加條件時，HAVING 會比 WHERE 更合適。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `SELECT course_id, COUNT(*) AS lesson_count
FROM lessons
GROUP BY course_id
HAVING COUNT(*) >= 3
ORDER BY lesson_count DESC;`,
    practice: [
      '做一個 COUNT 報表與一個 AVG 報表。',
      '加入 HAVING 只保留達標群組。',
      '說明 WHERE 與 HAVING 的差異場景。',
    ],
    reasons: [
      '產品指標與管理報表多半依賴分組摘要。',
      '聚合能力能降低應用層後處理負擔。',
    ],
    mistakes: [
      '分組時選取未正確聚合的欄位。',
      '把分組前後篩選邏輯混在一起。',
    ],
    takeaways: [
      '分組 SQL 是報表與分析基礎。',
      'HAVING 負責分組後條件過濾。',
    ],
    references: [
      { label: 'SQLite Docs · Aggregate Functions', url: 'https://www.sqlite.org/lang_aggfunc.html' },
      { label: 'SQLite Docs · SELECT', url: 'https://www.sqlite.org/lang_select.html' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: '交易與安全寫入操作',
    summary: '用交易機制保護多步驟寫入在失敗情境下仍保持一致。',
    moduleTitle: '模組 4 · 安全寫入與效能',
    intro: '即使是檔案型資料庫，交易仍是維持資料一致性的關鍵實務能力。',
    learningPoints: [
      '用 BEGIN、COMMIT、ROLLBACK 管理原子操作。',
      '將交易邊界對齊真實業務流程。',
      '理解部分寫入為何會造成資料風險。',
    ],
    lessonNotes: [
      '交易把多個操作視為同一單位，確保要嘛全成功，要嘛全部回復。',
      '若沒有交易邊界，中途失敗容易留下半套資料。',
      '小型或本機應用同樣需要交易紀律，不能因規模小就忽略。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `BEGIN TRANSACTION;

UPDATE wallet
SET balance = balance - 50
WHERE user_id = 1;

UPDATE wallet
SET balance = balance + 50
WHERE user_id = 2;

COMMIT;

-- if something fails
-- ROLLBACK;`,
    practice: [
      '設計一個會同時更新兩張表的交易流程。',
      '模擬失敗並驗證 rollback 行為。',
      '找出一個你專案中必須使用交易的功能。',
    ],
    reasons: [
      '一致性問題通常不易察覺且修復代價高。',
      '交易習慣能顯著提升小專案可靠度。',
    ],
    mistakes: [
      '把相依寫入拆成獨立語句執行。',
      '誤以為本機資料庫不需要交易管理。',
    ],
    takeaways: [
      '交易是保護多步驟寫入一致性的核心工具。',
      '可靠 SQLite 應用同樣需要明確寫入邊界。',
    ],
    references: [
      { label: 'SQLite Docs · Transactions', url: 'https://www.sqlite.org/lang_transaction.html' },
      { label: 'SQLite Docs · ACID', url: 'https://www.sqlite.org/transactional.html' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: '索引與基礎查詢規劃',
    summary: '有意識地建立索引，並用 EXPLAIN QUERY PLAN 檢查查詢策略。',
    moduleTitle: '模組 4 · 安全寫入與效能',
    intro: '這一課建立你對 SQLite 效能的第一層判斷力：依查詢模式做索引，而不是盲目加速。',
    learningPoints: [
      '根據常見過濾與排序路徑建立索引。',
      '用 EXPLAIN QUERY PLAN 看查詢大致執行方式。',
      '平衡讀取加速與寫入成本。',
    ],
    lessonNotes: [
      '索引可提升許多讀取查詢速度，但新增與更新也會付出維護成本。',
      'EXPLAIN QUERY PLAN 能快速提供是否可能使用索引的線索。',
      '效能優化應該跟著查詢熱點走，而不是一次加滿索引。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `CREATE INDEX idx_lessons_course_id
ON lessons(course_id);

EXPLAIN QUERY PLAN
SELECT *
FROM lessons
WHERE course_id = 5
ORDER BY id DESC;`,
    practice: [
      '替一條重複出現查詢建立索引。',
      '比較加索引前後的 EXPLAIN QUERY PLAN。',
      '列出一張你認為不該再加索引的表並說明理由。',
    ],
    reasons: [
      '即使中小型應用也會因存取模式不佳而變慢。',
      '有計畫地看查詢行為能避免猜測式優化。',
    ],
    mistakes: [
      '沒有工作負載證據就全欄位加索引。',
      '只追求讀取速度而忽略寫入負擔。',
    ],
    takeaways: [
      '索引應該服務真實查詢路徑。',
      'EXPLAIN QUERY PLAN 是 SQLite 優化的實用起點。',
    ],
    references: [
      { label: 'SQLite Docs · Query Planning', url: 'https://www.sqlite.org/queryplanner.html' },
      { label: 'SQLite Docs · EXPLAIN QUERY PLAN', url: 'https://www.sqlite.org/eqp.html' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: '建立小型嵌入式應用 SQLite 資料庫',
    summary: '整合 schema 設計、約束、查詢與交易，完成小型可交付資料庫。',
    moduleTitle: '模組 5 · 實務應用',
    intro: '最後一課把前面能力整合成小型專案交付流程，從建模到驗證一次走完。',
    learningPoints: [
      '為嵌入式應用設計結構清楚的資料模型。',
      '在必要位置加入約束、外鍵與索引。',
      '用 CLI 驗證核心讀寫流程。',
    ],
    lessonNotes: [
      '好的嵌入式資料庫設計重點是清楚、可靠、可持續演進。',
      'capstone 的關鍵是能支援真實操作流程，而不是只展示零散 SQL 片段。',
      '建立可重複流程（建表、灌資料、查詢、驗證）才算準備好整合進專案。',
    ],
    exampleLanguage: 'text',
    exampleCode: `小型題目：離線閱讀追蹤器
  users
  books
  reading_sessions

交付檢查
  - 已啟用外鍵與必要約束
  - 核心查詢已驗證
  - 交易寫入流程已測試`,
    practice: [
      '完成一個小型 schema 並加入測試資料。',
      '寫出至少三條應用真正會用到的查詢。',
      '用檢查清單驗證資料完整性與查詢可用性。',
    ],
    reasons: [
      '資料能力要變成產品價值，必須經過整合與交付。',
      '小而完整的設計最容易看出概念是否真正掌握。',
    ],
    mistakes: [
      '沒有驗證真實查詢路徑就結案。',
      '因為專案小就忽略約束與交易。',
    ],
    takeaways: [
      '完整小型 schema 是 SQLite 實作能力的最好證明。',
      '實務交付是設計 + 驗證，不只是把表建出來。',
    ],
    references: [
      { label: 'SQLite Docs · File Format', url: 'https://www.sqlite.org/fileformat.html' },
      { label: 'SQLite Docs · SQL Language', url: 'https://www.sqlite.org/lang.html' },
    ],
  },
];

export function getSQLiteLessons() {
  return sqliteLessons;
}

export function getSQLiteLessonBySlug(slug: string) {
  return sqliteLessons.find((lesson) => lesson.slug === slug) ?? null;
}
