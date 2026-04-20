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

export const postgresqlLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: '什麼是 PostgreSQL，以及什麼時候適合使用',
    summary: '理解 PostgreSQL 的核心優勢、常見工作負載，以及何時應考慮其他資料庫。',
    moduleTitle: '模組 1 · PostgreSQL 基礎與環境建置',
    intro: '第一課先建立 PostgreSQL 的定位，讓你之後的學習不是背語法，而是能做合理技術選擇。',
    learningPoints: [
      '了解 PostgreSQL 作為開源關聯式資料庫的主要特性。',
      '辨識哪些應用情境適合把 PostgreSQL 當作預設選擇。',
      '知道哪些場景可能更適合使用更輕量或不同類型的儲存方案。',
    ],
    lessonNotes: [
      'PostgreSQL 是重視標準、資料正確性與可擴充性的關聯式資料庫系統。',
      '對於需要可靠交易、關聯查詢與可演進 schema 的產品，PostgreSQL 通常很有優勢。',
      '是否選 PostgreSQL 的重點不在「最強」，而在資料型態、查詢需求與團隊流程是否匹配。',
    ],
    exampleLanguage: 'text',
    exampleCode: `適合的場景
  - 有使用者、課程、報名等關聯資料的平台
  - 需要報表與後台查詢的管理系統
  - 需要安全交易流程的產品後端

可能先考慮其他選項
  - 幾乎沒有伺服器端持久化需求的小型網站
  - 以快取為主、非主要持久化的工作負載`,
    practice: [
      '寫出一個你手上的專案，說明為何適合 PostgreSQL。',
      '寫出一個情境，說明為何 SQLite 或其他方案可能更簡單。',
      '列出你的應用最常要回答的三個資料問題。',
    ],
    reasons: [
      '資料庫選型會直接影響後續架構與維護成本。',
      '先有定位感，後續學習才不會變成零散記憶。',
    ],
    mistakes: [
      '只因為流行就選 PostgreSQL，沒有回到資料需求判斷。',
      '以為單一資料庫可以完美解決所有場景。',
    ],
    takeaways: [
      'PostgreSQL 是許多後端專案可靠的關聯式預設選擇。',
      '選型應該回到工作負載與團隊需求，而不是跟風。',
    ],
    references: [
      { label: 'PostgreSQL · About', url: 'https://www.postgresql.org/about/' },
      { label: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/current/' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: '安裝 PostgreSQL 並用 psql 連線',
    summary: '完成 PostgreSQL 安裝、建立本機資料庫，並用 psql 執行基本操作。',
    moduleTitle: '模組 1 · PostgreSQL 基礎與環境建置',
    intro: '先把本機環境與 CLI 工作流打穩，後面課程才能把重心放在資料設計與查詢。',
    learningPoints: [
      '安裝 PostgreSQL 並確認伺服器與 psql 客戶端可用。',
      '使用 psql 連線、查看資料庫與執行 SQL。',
      '掌握常用的 psql 指令，如 \l、\dt、\d。',
    ],
    lessonNotes: [
      'PostgreSQL 環境包含資料庫伺服器與客戶端工具，psql 是最基礎也最通用的入口。',
      '即使未來會用 GUI，psql 仍然重要，因為它快、可腳本化、跨環境一致。',
      '環境穩定後，你可以用很少指令就完成建立、連線與檢查資料庫的流程。',
    ],
    exampleLanguage: 'bash',
    exampleCode: `psql --version
createdb learning_site
psql -d learning_site

-- inside psql
\l
\dt
\q`,
    practice: [
      '在本機安裝 PostgreSQL，並從終端機確認 psql 版本。',
      '建立一個資料庫並用 psql 連線。',
      '在同一個 session 內各執行一次 SQL 與 psql 指令。',
    ],
    reasons: [
      '初學常見卡關多半來自環境不穩而非 SQL 本身。',
      'CLI 熟悉度會影響除錯、腳本化與團隊協作效率。',
    ],
    mistakes: [
      '只依賴 GUI，不學 psql 的基本操作。',
      '跳過版本或環境檢查，導致後續問題難追。',
    ],
    takeaways: [
      'PostgreSQL + psql 的穩定工作流是基本能力。',
      '你應該能快速完成建立、連線與檢查本機資料庫。',
    ],
    references: [
      { label: 'PostgreSQL Docs · Installation', url: 'https://www.postgresql.org/docs/current/installation.html' },
      { label: 'PostgreSQL Docs · psql', url: 'https://www.postgresql.org/docs/current/app-psql.html' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: '資料庫、schema、資料表、資料列與資料欄',
    summary: '理解 PostgreSQL 如何用資料庫、schema 與資料表分層組織資料。',
    moduleTitle: '模組 1 · PostgreSQL 基礎與環境建置',
    intro: '這一課建立你讀懂資料結構的語言，後續多表查詢與設計都會用到。',
    learningPoints: [
      '分辨資料庫層級與 schema 層級的角色。',
      '理解資料表、資料列、資料欄如何表示實體與屬性。',
      '建立可維護的命名與結構習慣。',
    ],
    lessonNotes: [
      '在 PostgreSQL 中，一個資料庫可包含多個 schema，用來整理不同領域或責任的物件。',
      '資料表代表實體，資料列是實體的一筆記錄，資料欄是該記錄的屬性。',
      '結構越早設計清楚，後續新增查詢、功能與協作都會更順。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `CREATE SCHEMA learning;

CREATE TABLE learning.courses (
  id BIGINT PRIMARY KEY,
  title TEXT NOT NULL,
  level TEXT NOT NULL
);`,
    practice: [
      '建立一個 schema 與兩張有關聯的資料表。',
      '用實體責任命名資料表，而不是用畫面名稱命名。',
      '替每個欄位寫一句話，說明它在業務上的意義。',
    ],
    reasons: [
      '很多查詢問題本質上都來自資料模型不清楚。',
      '懂結構語彙是團隊溝通與 code review 的基礎。',
    ],
    mistakes: [
      '把不相關資料塞進同一張大表。',
      '完全不管 schema 組織，所有物件都放 public。',
    ],
    takeaways: [
      '好的 PostgreSQL 實作從清楚結構邊界開始。',
      'database、schema、table、row、column 各自角色必須明確。',
    ],
    references: [
      { label: 'PostgreSQL Docs · CREATE DATABASE', url: 'https://www.postgresql.org/docs/current/sql-createdatabase.html' },
      { label: 'PostgreSQL Docs · Schemas', url: 'https://www.postgresql.org/docs/current/ddl-schemas.html' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'SELECT、WHERE、ORDER BY 與 LIMIT',
    summary: '用 SELECT、WHERE、ORDER BY、LIMIT 寫出精準且可讀的查詢。',
    moduleTitle: '模組 2 · 查詢與資料寫入',
    intro: '這四個子句是日常查詢核心，重點是先想資料問題，再決定語法。',
    learningPoints: [
      '只選取當下需要的欄位。',
      '用 WHERE 明確定義篩選條件。',
      '用 ORDER BY 與 LIMIT 控制結果順序與數量。',
    ],
    lessonNotes: [
      'SELECT 決定欄位、WHERE 決定資料列、ORDER BY 決定排序、LIMIT 控制結果數量。',
      '這些語法最好對應具體資料問題，而不是先寫語句再猜答案。',
      '查詢越精準，後續應用程式資料處理成本越低。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `SELECT id, title, level
FROM learning.courses
WHERE level IN ('beginner', 'intermediate')
ORDER BY id DESC
LIMIT 10;`,
    practice: [
      '寫一條查詢，回傳指定狀態且依時間排序的資料。',
      '把一條 SELECT * 改成明確欄位選取。',
      '在檢查測試資料時加入 LIMIT 以避免一次取太多。',
    ],
    reasons: [
      '查詢能力是資料驅動功能開發的最核心日常能力。',
      '精準的欄位與條件能降低 payload 與閱讀成本。',
    ],
    mistakes: [
      '在需要少量欄位時仍習慣性使用 SELECT *。',
      '把排序與篩選留到應用程式才做，增加不必要複雜度。',
    ],
    takeaways: [
      '先定義資料問題，再寫 SQL。',
      'SELECT + WHERE + ORDER BY + LIMIT 是最常用的查詢組合。',
    ],
    references: [
      { label: 'PostgreSQL Docs · SELECT', url: 'https://www.postgresql.org/docs/current/sql-select.html' },
      { label: 'PostgreSQL Docs · Sorting Rows', url: 'https://www.postgresql.org/docs/current/queries-order.html' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: 'INSERT、UPDATE、DELETE 與 RETURNING',
    summary: '用安全的寫入習慣完成資料變更，並用 RETURNING 立即驗證結果。',
    moduleTitle: '模組 2 · 查詢與資料寫入',
    intro: '寫入操作會直接改變系統狀態，這一課重點是如何在修改資料時保持可控。',
    learningPoints: [
      '使用 INSERT 新增資料並控制必要欄位。',
      '用明確 WHERE 範圍執行 UPDATE 與 DELETE。',
      '用 RETURNING 立即取得變更結果。',
    ],
    lessonNotes: [
      '資料寫入是風險最高的 SQL 操作類型，條件與範圍必須先確認。',
      'RETURNING 可在同一語句取回變更結果，減少第二次查詢的不一致風險。',
      '推薦習慣是：先預看範圍、執行修改、檢查 RETURNING。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `INSERT INTO learning.courses (id, title, level)
VALUES (101, 'PostgreSQL Basics', 'beginner')
RETURNING id, title;

UPDATE learning.courses
SET level = 'intermediate'
WHERE id = 101
RETURNING id, level;

DELETE FROM learning.courses
WHERE id = 101
RETURNING id;`,
    practice: [
      '新增一筆測試資料並回傳必要欄位。',
      '寫一條有明確 WHERE 條件的 UPDATE，並檢查 RETURNING。',
      '寫下沒有 WHERE 的 DELETE 在正式環境可能造成的風險。',
    ],
    reasons: [
      '很多資料事故都發生在不安全的更新或刪除。',
      'RETURNING 能提升寫入流程的可觀測性與正確性。',
    ],
    mistakes: [
      'UPDATE 前不先確認影響範圍。',
      '忽略 RETURNING，靠額外查詢猜測結果。',
    ],
    takeaways: [
      '寫入安全比寫得快更重要。',
      'RETURNING 是 PostgreSQL 很實用的日常功能。',
    ],
    references: [
      { label: 'PostgreSQL Docs · INSERT', url: 'https://www.postgresql.org/docs/current/sql-insert.html' },
      { label: 'PostgreSQL Docs · Returning Data from Modified Rows', url: 'https://www.postgresql.org/docs/current/dml-returning.html' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: '資料型別與欄位選型',
    summary: '選擇合適的 PostgreSQL 型別，讓資料更一致、查詢更清楚。',
    moduleTitle: '模組 2 · 查詢與資料寫入',
    intro: '欄位型別是長期設計決策，會直接影響資料品質、查詢行為與後續維護。',
    learningPoints: [
      '熟悉 text、integer、boolean、timestamptz 等常見型別。',
      '依據業務需求選擇數值與時間欄位型別。',
      '避免過度寬鬆、失去語意的欄位設計。',
    ],
    lessonNotes: [
      '型別不只是儲存格式，還是資料驗證與溝通契約的一部分。',
      '選對型別可以讓非法狀態更難進入，也讓查詢條件更容易推理。',
      '設計原則是：在符合業務需求前提下，選擇最能表達意圖的型別。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `CREATE TABLE learning.payments (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL,
  amount NUMERIC(10, 2) NOT NULL,
  paid_at TIMESTAMPTZ NOT NULL,
  success BOOLEAN NOT NULL
);`,
    practice: [
      '為五個應用欄位選擇明確 PostgreSQL 型別，並寫出理由。',
      '把一個過度寬鬆的 TEXT 欄位改成更有語意的型別。',
      '檢查時間欄位是否應採用含時區型別。',
    ],
    reasons: [
      '型別設計錯誤會延伸成驗證與報表問題。',
      '好的型別能同時提升可讀性與資料品質。',
    ],
    mistakes: [
      '幾乎所有欄位都用 TEXT，失去資料語意。',
      '沒有理解金額或精度需求就隨意選 numeric 設定。',
    ],
    takeaways: [
      '欄位型別是長期決策，不是小細節。',
      '合適型別能降低模糊性並保護資料品質。',
    ],
    references: [
      { label: 'PostgreSQL Docs · Data Types', url: 'https://www.postgresql.org/docs/current/datatype.html' },
      { label: 'PostgreSQL Docs · Numeric Types', url: 'https://www.postgresql.org/docs/current/datatype-numeric.html' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: '主鍵、唯一約束與 NOT NULL 規則',
    summary: '用主鍵、唯一約束與 NOT NULL 規則保護核心資料品質。',
    moduleTitle: '模組 3 · 關聯與資料完整性',
    intro: '約束（constraints）是最直接、最可靠的資料庫防線之一。',
    learningPoints: [
      '使用主鍵唯一識別每筆資料。',
      '用 UNIQUE 保護不應重複的欄位值。',
      '用 NOT NULL 阻擋不完整資料寫入。',
    ],
    lessonNotes: [
      '約束是把業務規則放在資料層，讓所有客戶端都遵守同一標準。',
      '主鍵、UNIQUE、NOT NULL 是多數資料表最基本的完整性組合。',
      '約束設計清楚，就不用把所有驗證風險都壓在應用層。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `CREATE TABLE learning.users (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL
);`,
    practice: [
      '把必要欄位補上 NOT NULL。',
      '找一個應該唯一的欄位，加入 UNIQUE 並說明原因。',
      '實際插入一筆不符合約束的資料，觀察錯誤訊息。',
    ],
    reasons: [
      '完整性規則放在資料層通常比只靠應用層更可靠。',
      '約束錯誤比靜默不一致更容易發現與修正。',
    ],
    mistakes: [
      '為了方便開發把約束放得過寬。',
      '把不具唯一性的欄位錯加 UNIQUE。',
    ],
    takeaways: [
      '約束是 schema 設計的一部分，不是收尾選配。',
      'PK + UNIQUE + NOT NULL 能建立強而實用的資料保護基線。',
    ],
    references: [
      { label: 'PostgreSQL Docs · Constraints', url: 'https://www.postgresql.org/docs/current/ddl-constraints.html' },
      { label: 'PostgreSQL Docs · CREATE TABLE', url: 'https://www.postgresql.org/docs/current/sql-createtable.html' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: '外鍵與關聯完整性',
    summary: '用外鍵連接資料表，確保父子關係資料保持一致。',
    moduleTitle: '模組 3 · 關聯與資料完整性',
    intro: '外鍵讓關聯從「約定」變成「可驗證規則」，避免資料關係斷裂。',
    learningPoints: [
      '定義外鍵，安全建立父子表關聯。',
      '理解外鍵對新增、刪除行為的影響。',
      '以一對多關係建立清楚的資料責任邊界。',
    ],
    lessonNotes: [
      '外鍵要求參照目標必須存在，是維持關聯完整性的核心機制。',
      '刪除或更新時的行為要對齊業務需求，而不是只用預設。',
      '外鍵設計越清楚，多表查詢與維護就越可靠。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `CREATE TABLE learning.courses (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

CREATE TABLE learning.lessons (
  id BIGSERIAL PRIMARY KEY,
  course_id BIGINT NOT NULL REFERENCES learning.courses(id),
  title TEXT NOT NULL
);`,
    practice: [
      '建立一組 parent / child 資料表並加上外鍵。',
      '測試 child 指向不存在 parent 時會發生什麼事。',
      '檢查刪除策略應該是 restrict、cascade 還是應用層處理。',
    ],
    reasons: [
      '關聯斷裂會造成報表與 API 結果不可信。',
      '外鍵能把完整性規則一致地套用到所有資料寫入來源。',
    ],
    mistakes: [
      '為了省事不設外鍵，日後再手動清理髒資料。',
      '沒有評估業務影響就隨意使用 cascade。',
    ],
    takeaways: [
      '外鍵是關聯式資料可靠性的核心基礎。',
      '關聯行為必須是有意識的 schema 決策。',
    ],
    references: [
      { label: 'PostgreSQL Docs · Constraints', url: 'https://www.postgresql.org/docs/current/ddl-constraints.html' },
      { label: 'PostgreSQL Docs · CREATE TABLE', url: 'https://www.postgresql.org/docs/current/sql-createtable.html' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'JOIN 與多表查詢',
    summary: '使用常見 JOIN 模式組合多表資料，回答應用中的實際問題。',
    moduleTitle: '模組 3 · 關聯與資料完整性',
    intro: 'JOIN 是把正規化資料重新組裝成可用資訊的關鍵能力。',
    learningPoints: [
      '依需求選擇 INNER JOIN 與 LEFT JOIN。',
      '寫出明確 join 條件，避免資料倍增或錯配。',
      '能讀懂多表查詢的結果語意。',
    ],
    lessonNotes: [
      'JOIN 語法不難，但結果正不正確取決於關聯基數與條件位置。',
      'LEFT JOIN 在需要保留左表資料時非常實用，即使右表沒有對應資料。',
      '清楚 alias 與欄位選取能大幅提升多表 SQL 可讀性。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `SELECT c.title AS course_title, l.title AS lesson_title
FROM learning.courses c
LEFT JOIN learning.lessons l ON l.course_id = c.id
ORDER BY c.id, l.id;`,
    practice: [
      '針對同一組表，分別寫 INNER JOIN 與 LEFT JOIN。',
      '比較兩者 row count，確認是否符合預期關聯行為。',
      '把一條難讀的 JOIN 查詢重構成清楚 alias 與欄位選取版本。',
    ],
    reasons: [
      '大部分有價值的關聯報表都依賴多表查詢。',
      'JOIN 錯誤常會產生看似合理但其實錯誤的資料結果。',
    ],
    mistakes: [
      '沒有明確 ON 條件就直接 JOIN。',
      '在 LEFT JOIN 後加錯篩選條件，意外丟失本該保留的資料。',
    ],
    takeaways: [
      'JOIN 類型會改變結果語意，不只是語法差異。',
      '可讀、可驗證的 JOIN SQL 是關聯式資料庫基本功。',
    ],
    references: [
      { label: 'PostgreSQL Docs · Joins Between Tables', url: 'https://www.postgresql.org/docs/current/tutorial-join.html' },
      { label: 'PostgreSQL Docs · Table Expressions', url: 'https://www.postgresql.org/docs/current/queries-table-expressions.html' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: '分組、聚合與 HAVING',
    summary: '用 GROUP BY 與聚合函式整理摘要資訊，並用 HAVING 篩選群組結果。',
    moduleTitle: '模組 3 · 關聯與資料完整性',
    intro: '這一課讓你從逐列查詢進階到摘要報表思維。',
    learningPoints: [
      '用 GROUP BY 依條件分組資料。',
      '正確使用 COUNT、SUM、AVG 等聚合函式。',
      '在群組層級用 HAVING 設定篩選條件。',
    ],
    lessonNotes: [
      '聚合查詢可回答分類總數、平均值、區間統計等常見分析問題。',
      'HAVING 是分組後的篩選機制，適合針對聚合結果設定條件。',
      '具可讀性的聚合 SQL 是 dashboard 與後台報表的重要基礎。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `SELECT course_id, COUNT(*) AS lesson_count
FROM learning.lessons
GROUP BY course_id
HAVING COUNT(*) >= 5
ORDER BY lesson_count DESC;`,
    practice: [
      '寫一條 COUNT 分組報表與一條 AVG 分組報表。',
      '加入 HAVING 只保留達到門檻的群組。',
      '說明這個情境中為什麼 WHERE 不能直接取代 HAVING。',
    ],
    reasons: [
      '產品決策與營運觀測常依賴摘要數據。',
      '理解聚合邏輯可避免常見報表錯誤。',
    ],
    mistakes: [
      '在分組查詢中選取未正確聚合的欄位。',
      '混淆 WHERE 與 HAVING 的使用時機。',
    ],
    takeaways: [
      'GROUP BY + 聚合函式是資料摘要分析的核心。',
      'HAVING 負責分組完成後的條件篩選。',
    ],
    references: [
      { label: 'PostgreSQL Docs · Aggregate Functions', url: 'https://www.postgresql.org/docs/current/functions-aggregate.html' },
      { label: 'PostgreSQL Docs · Aggregate Functions Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial-agg.html' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: '用 BEGIN、COMMIT、ROLLBACK 管理交易',
    summary: '把多步驟寫入包成同一交易，確保資料一致性。',
    moduleTitle: '模組 4 · 交易與效能',
    intro: '當多個寫入步驟必須同時成功或失敗時，交易就是最關鍵的保護機制。',
    learningPoints: [
      '用 BEGIN 與 COMMIT 建立明確交易邊界。',
      '在錯誤情況用 ROLLBACK 回復一致狀態。',
      '判斷哪些操作應被視為同一工作單位。',
    ],
    lessonNotes: [
      '交易讓一組相關寫入成為原子操作，避免中途失敗留下半完成資料。',
      '缺少交易時，多步驟流程常造成狀態不一致且難以修復。',
      '好的交易邊界應該對齊業務流程，而不是隨意把 SQL 拼在一起。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `BEGIN;

UPDATE learning.wallets
SET balance = balance - 100
WHERE user_id = 1;

UPDATE learning.wallets
SET balance = balance + 100
WHERE user_id = 2;

COMMIT;

-- if any step fails
-- ROLLBACK;`,
    practice: [
      '針對轉帳情境寫一個兩步驟交易流程。',
      '模擬其中一步失敗，驗證 ROLLBACK 是否生效。',
      '說明為什麼這些語句應放在同一交易。',
    ],
    reasons: [
      '資料一致性問題通常昂貴且補救困難。',
      '懂交易是建立可信寫入流程的必要能力。',
    ],
    mistakes: [
      '把相依寫入拆成多個獨立操作。',
      '交易開太久，夾帶不必要操作。',
    ],
    takeaways: [
      '交易的核心目標是保護多步驟寫入一致性。',
      'BEGIN / COMMIT / ROLLBACK 應映射真實業務流程。',
    ],
    references: [
      { label: 'PostgreSQL Docs · Transactions Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial-transactions.html' },
      { label: 'PostgreSQL Docs · BEGIN', url: 'https://www.postgresql.org/docs/current/sql-begin.html' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: '索引與何時值得建立',
    summary: '理解索引何時能加速查詢，以及何時只會增加寫入成本。',
    moduleTitle: '模組 4 · 交易與效能',
    intro: '索引很有用，但真正有效的索引決策必須建立在查詢模式之上。',
    learningPoints: [
      '理解索引如何改變資料查找方式。',
      '根據過濾、排序、關聯需求挑選索引候選欄位。',
      '知道索引也會帶來寫入與儲存負擔。',
    ],
    lessonNotes: [
      '索引可以讓查詢避免全表掃描，但前提是查詢條件與資料分佈適合。',
      '有效索引通常是對應重複出現的查詢路徑，而不是「每欄都加」。',
      '實務上要在讀取效能提升與寫入成本之間取得平衡。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `CREATE INDEX idx_lessons_course_id
ON learning.lessons (course_id);

SELECT *
FROM learning.lessons
WHERE course_id = 42;`,
    practice: [
      '挑一條常用查詢，設計一個可支援它的索引。',
      '用 EXPLAIN 比較加索引前後的計畫。',
      '列出一個你目前不會加索引的欄位並說明原因。',
    ],
    reasons: [
      '索引策略會直接影響資料量成長後的系統體感。',
      '有意識的索引設計可以避免盲目優化反覆重工。',
    ],
    mistakes: [
      '沒有觀察查詢模式就先大量加索引。',
      '只看讀取速度，忽略寫入成本。',
    ],
    takeaways: [
      '索引是查詢路徑工具，不是萬用加速器。',
      '索引決策應以量測與推理為基礎。',
    ],
    references: [
      { label: 'PostgreSQL Docs · Indexes', url: 'https://www.postgresql.org/docs/current/indexes.html' },
      { label: 'PostgreSQL Docs · CREATE INDEX', url: 'https://www.postgresql.org/docs/current/sql-createindex.html' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: '用 EXPLAIN 讀查詢計畫',
    summary: '讀懂 EXPLAIN 輸出，判斷查詢為什麼快或慢。',
    moduleTitle: '模組 4 · 交易與效能',
    intro: '查詢效能不該靠猜，EXPLAIN 能讓你用證據做判斷。',
    learningPoints: [
      '執行 EXPLAIN 並辨識主要計畫節點。',
      '理解 Seq Scan 與 Index Scan 的高層差異。',
      '把查詢計畫轉成可落地的優化決策。',
    ],
    lessonNotes: [
      'EXPLAIN 會顯示 PostgreSQL 估計如何執行查詢，包括掃描方式與成本估算。',
      '你不需要深入 planner 內部細節，基本節點閱讀就能帶來很大價值。',
      '查詢計畫分析應搭配實際資料量與真實查詢路徑，才有參考意義。',
    ],
    exampleLanguage: 'sql',
    exampleCode: `EXPLAIN
SELECT *
FROM learning.lessons
WHERE course_id = 42
ORDER BY id DESC
LIMIT 20;`,
    practice: [
      '對一條常用查詢執行 EXPLAIN，並用白話描述它的計畫。',
      '加入索引後再跑一次，觀察計畫差異。',
      '寫下一個你會採納與一個你不會採納的優化決策。',
    ],
    reasons: [
      '沒有計畫證據的效能優化常浪費時間。',
      '懂計畫語言能提升團隊討論與 code review 品質。',
    ],
    mistakes: [
      '把 EXPLAIN 當雜訊直接略過。',
      '只用極小測試資料做優化判斷。',
    ],
    takeaways: [
      'EXPLAIN 能提供可操作的查詢執行證據。',
      '掌握基礎計畫閱讀就能做更穩健的索引與查詢決策。',
    ],
    references: [
      { label: 'PostgreSQL Docs · Using EXPLAIN', url: 'https://www.postgresql.org/docs/current/using-explain.html' },
      { label: 'PostgreSQL Docs · EXPLAIN', url: 'https://www.postgresql.org/docs/current/sql-explain.html' },
    ],
  },
  {
    lesson: 14,
    slug: 'lesson-14',
    title: '設計一個小型 PostgreSQL 應用 schema',
    summary: '整合前面能力，完成可支援小型應用的 PostgreSQL schema 設計。',
    moduleTitle: '模組 5 · 實務交付',
    intro: '這一課是整合練習，目標不是做大，而是做出結構清楚、可查詢、可維護的小型設計。',
    learningPoints: [
      '為真實小型功能設計關聯 schema。',
      '有意識地加入鍵值、約束與索引。',
      '驗證核心查詢與寫入流程是否順暢。',
    ],
    lessonNotes: [
      '實用 schema 的評估標準不是表多，而是資料一致性、可讀性與查詢支援能力。',
      '完整練習應包含：建表、放入樣本資料、執行代表性查詢、檢查效能路徑。',
      '最終目標是讓你對「可交付的小型 PostgreSQL 設計」有實作信心。',
    ],
    exampleLanguage: 'text',
    exampleCode: `小型情境：課程筆記平台
  users
  courses
  notes
  enrollments

檢查清單
  - 已加 PK / FK
  - 已加 UNIQUE / NOT NULL
  - 已用 EXPLAIN 驗證 2-3 條核心查詢`,
    practice: [
      '為一個小型領域建表並加入測試資料。',
      '寫出至少三條你的應用一定會用到的查詢。',
      '跑 EXPLAIN 後調整一個約束或索引決策。',
    ],
    reasons: [
      '整合練習能最快暴露資料設計的盲點。',
      '完整小專案比零散片段更能建立可交付能力。',
    ],
    mistakes: [
      '只建表不驗證實際查詢路徑。',
      '把約束與索引留到最後才隨便補。',
    ],
    takeaways: [
      '一個小而完整的 schema 最能證明 PostgreSQL 基礎是否扎實。',
      '實務交付是「設計 + 驗證」，不是只把表建出來。',
    ],
    references: [
      { label: 'PostgreSQL Docs · Data Definition', url: 'https://www.postgresql.org/docs/current/ddl.html' },
      { label: 'PostgreSQL Docs · CREATE TABLE', url: 'https://www.postgresql.org/docs/current/sql-createtable.html' },
    ],
  },
];

export function getPostgreSQLLessons() {
  return postgresqlLessons;
}

export function getPostgreSQLLessonBySlug(slug: string) {
  return postgresqlLessons.find((lesson) => lesson.slug === slug) ?? null;
}
