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

export const mysqlLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: '什麼是關聯式資料庫',
    summary: '理解資料表、資料列、資料欄，以及關聯式結構為什麼重要。',
    moduleTitle: '模組 1 · Query 基礎',
    intro: '這一課先建立最基礎的資料庫心智模型：資料不是一整包放著，而是有結構地存放在資料表中。',
    learningPoints: [
      '理解資料表（table）、資料列（row）、資料欄（column）的基本概念。',
      '知道關聯式資料庫為什麼適合結構化資料。',
      '能把日常資料問題轉成資料表思維。',
    ],
    lessonNotes: [
      '關聯式資料庫把資料以表格形式存放，每一列代表一筆記錄，每一欄代表一種欄位屬性。',
      '真正重要的不是表格長得像 Excel，而是資料有一致結構，這讓查詢、排序、關聯和約束變得可控。',
      '當你開始用資料表思考會員、訂單、課程、付款等資料時，就會慢慢理解資料庫為什麼是後端應用的基礎。',
    ],
    exampleLanguage: 'sql',
    exampleCode: "CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(255)\n);\n\nINSERT INTO users (id, name, email)\nVALUES (1, 'Tommy', 'tommy@example.com');",
    practice: [
      '把一個簡單系統，例如圖書館或課程平台，拆成 3 到 5 張資料表。',
      '指出每張表的資料欄分別代表什麼。',
      '寫出你認為每張表最重要的一個主鍵（primary key）。',
    ],
    reasons: [
      '如果不先理解表格結構，後面查詢與 JOIN 都只會是記語法。',
      '資料庫設計的核心是資料模型，而不是單條 SQL。',
    ],
    mistakes: [
      '把關聯式資料庫當成純粹存資料的黑盒子。',
      '只看欄位名稱，不思考每張表真正代表的實體。',
    ],
    takeaways: [
      '資料庫的核心是有結構、有關係的資料模型。',
      '資料表、資料列、資料欄是後面所有 SQL 操作的基礎語言。',
    ],
    references: [
      { label: 'MySQL docs · Tutorial', url: 'https://dev.mysql.com/doc/refman/8.4/en/tutorial.html' },
      { label: 'MySQL docs · Data types', url: 'https://dev.mysql.com/doc/refman/8.4/en/data-types.html' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'SELECT、WHERE 與 ORDER BY',
    summary: '用最常見的查詢模式篩選與排序資料。',
    moduleTitle: '模組 1 · Query 基礎',
    intro: '查詢是你和資料庫最常見的互動方式，而 SELECT、WHERE、ORDER BY 是最核心的基本功。',
    learningPoints: [
      '知道 SELECT 怎麼取回指定欄位資料。',
      '理解 WHERE 如何篩選資料。',
      '能用 ORDER BY 排序查詢結果。',
    ],
    lessonNotes: [
      'SELECT 決定你要看哪些欄位，WHERE 決定哪些資料列要被留下，ORDER BY 決定結果要怎麼排序。',
      '這三個語法常常一起出現，因為真實查詢很少只是把整張表原封不動取回。',
      '真正重要的是先想清楚資料問題：你要找誰、條件是什麼、你希望結果用什麼順序呈現。',
    ],
    exampleLanguage: 'sql',
    exampleCode: "SELECT name, email\nFROM users\nWHERE name LIKE 'T%'\nORDER BY name ASC;",
    practice: [
      '寫一條查詢，篩選出價格大於指定值的商品。',
      '把結果依照建立時間由新到舊排序。',
      '改成只取回你真正需要的欄位，不要用 `SELECT *`。',
    ],
    reasons: [
      '大部分資料庫互動都是從查詢開始。',
      '查詢基礎不穩，後面 JOIN 和子查詢會更難掌握。',
    ],
    mistakes: [
      '習慣性使用 `SELECT *`，沒有控制取回欄位。',
      '條件和排序混在一起想，導致查詢需求不清楚。',
    ],
    takeaways: [
      '查詢要先想資料需求，再寫語法。',
      'SELECT、WHERE、ORDER BY 是最常用也最值得熟練的 SQL 基本組合。',
    ],
    references: [
      { label: 'MySQL docs · SELECT statement', url: 'https://dev.mysql.com/doc/refman/8.4/en/select.html' },
      { label: 'MySQL docs · Pattern matching', url: 'https://dev.mysql.com/doc/refman/8.4/en/pattern-matching.html' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: 'INSERT、UPDATE 與 DELETE',
    summary: '安全地修改資料，並理解寫入操作如何影響資料表。',
    moduleTitle: '模組 1 · Query 基礎',
    intro: '這一課從「讀資料」走到「改資料」，也就是資料庫真正會影響系統狀態的地方。',
    learningPoints: [
      '理解 INSERT、UPDATE、DELETE 的用途。',
      '知道修改資料時應該先確認條件。',
      '建立對資料寫入風險的基本警覺。',
    ],
    lessonNotes: [
      'INSERT 用來新增資料，UPDATE 修改現有資料，DELETE 刪除資料。這些操作看起來簡單，但因為會真正改變資料狀態，所以風險也比較高。',
      '尤其 UPDATE 和 DELETE，如果沒有 WHERE 條件，很容易一次影響整張表。',
      '因此，寫入類操作的基本習慣是：先想資料範圍、先確認條件、必要時先用 SELECT 預看受影響的資料。',
    ],
    exampleLanguage: 'sql',
    exampleCode: "INSERT INTO users (id, name, email)\nVALUES (2, 'Amy', 'amy@example.com');\n\nUPDATE users\nSET email = 'amy.liu@example.com'\nWHERE id = 2;\n\nDELETE FROM users\nWHERE id = 2;",
    practice: [
      '新增一筆假資料到測試表。',
      '先用 SELECT 確認範圍，再做一次 UPDATE。',
      '寫下沒有 WHERE 的 UPDATE / DELETE 會有什麼風險。',
    ],
    reasons: [
      '真實系統的大多數資料錯誤都出現在寫入與更新。',
      '越早建立安全操作習慣，越不容易在實務環境出事。',
    ],
    mistakes: [
      '沒有先確認受影響資料就直接 UPDATE。',
      '測試環境和正式環境的 SQL 操作習慣完全不同。',
    ],
    takeaways: [
      '改資料比讀資料更需要紀律。',
      '對 UPDATE 和 DELETE，WHERE 幾乎永遠是第一件要注意的事。',
    ],
    references: [
      { label: 'MySQL docs · INSERT statement', url: 'https://dev.mysql.com/doc/refman/8.4/en/insert.html' },
      { label: 'MySQL docs · UPDATE statement', url: 'https://dev.mysql.com/doc/refman/8.4/en/update.html' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: '理解 INNER JOIN 與 LEFT JOIN',
    summary: '把多張表中的相關資料列連起來，並理解常見 JOIN 類型的差異。',
    moduleTitle: '模組 2 · 關聯與 joins',
    intro: 'JOIN 是關聯式資料庫最能展現「關聯」價值的地方，因為它讓你從多張表中拼出真正有意義的資訊。',
    learningPoints: [
      '理解 JOIN 的基本目的。',
      '知道 INNER JOIN 和 LEFT JOIN 的差別。',
      '能看懂多表資料如何連接。',
    ],
    lessonNotes: [
      'JOIN 的本質是：依照共同關係，把多張表中的資料連起來。',
      'INNER JOIN 只保留兩邊都對得上的資料，而 LEFT JOIN 會保留左表所有資料，即使右表沒有對應也會留下。',
      '這不是單純語法選擇，而是你對資料完整性與商業需求的判斷：你要只看配對成功的資料，還是連沒有對到的也一起保留？',
    ],
    exampleLanguage: 'sql',
    exampleCode: "SELECT u.name, o.order_number\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nORDER BY u.name;",
    practice: [
      '建立 users 與 orders 兩張表的簡化版本。',
      '各寫一條 INNER JOIN 和 LEFT JOIN，比較結果差異。',
      '找出哪一種 JOIN 更適合顯示「尚未下單會員」名單。',
    ],
    reasons: [
      '大部分真實商業資料都分散在多張表，不會只待在一張表裡。',
      '不理解 JOIN，就很難真正使用關聯式資料庫的價值。',
    ],
    mistakes: [
      '只背 JOIN 語法，卻不知道結果集為什麼長那樣。',
      '寫錯 JOIN 條件（join condition），導致資料倍增或錯配。',
    ],
    takeaways: [
      'JOIN 的重點不是語法，而是資料關係。',
      'INNER JOIN 和 LEFT JOIN 的差別，決定你最終看到哪些資料。',
    ],
    references: [
      { label: 'MySQL docs · JOIN clause', url: 'https://dev.mysql.com/doc/refman/8.4/en/join.html' },
      { label: 'MySQL docs · Example foreign keys', url: 'https://dev.mysql.com/doc/refman/8.4/en/create-table-foreign-keys.html' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: '主鍵（Primary Key）與外鍵（Foreign Key）',
    summary: '用鍵值建立關聯並保護資料完整性。',
    moduleTitle: '模組 2 · 關聯與 joins',
    intro: '關聯式資料庫不是因為有多張表，而是因為這些表之間有明確、可驗證的關係。',
    learningPoints: [
      '理解主鍵（primary key）和外鍵（foreign key）的角色。',
      '知道鍵值（keys）如何幫助建立資料關係。',
      '認識資料完整性在設計上的重要性。',
    ],
    lessonNotes: [
      '主鍵（primary key）用來唯一識別每一列資料，而外鍵（foreign key）表示另一張表中的某筆資料參考了這個鍵。',
      '這些鍵值（keys）不只是方便 JOIN，更重要的是能建立資料完整性，避免出現沒有對應會員的訂單，或沒有對應課程的評論。',
      '當鍵值設計清楚時，你對資料模型的掌控也會更強。',
    ],
    exampleLanguage: 'sql',
    exampleCode: "CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100)\n);\n\nCREATE TABLE orders (\n  id INT PRIMARY KEY,\n  user_id INT,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n);",
    practice: [
      '設計兩張有 parent-child 關係的資料表。',
      '標出主鍵與外鍵應該放在哪裡。',
      '思考如果沒有外鍵，資料會出現哪些問題。',
    ],
    reasons: [
      '資料完整性不是可有可無，它會直接影響系統可信度。',
      '沒有鍵值，後面 JOIN 和資料表結構（schema）設計會變得很脆弱。',
    ],
    mistakes: [
      '把鍵值當成純技術欄位，而不是資料模型核心。',
      '只想查得出資料，沒想過資料是否能維持一致。',
    ],
    takeaways: [
      '主鍵負責唯一識別，外鍵負責建立關係。',
      '鍵值是關聯式資料表結構（schema）穩定運作的基礎。',
    ],
    references: [
      { label: 'MySQL docs · Primary keys', url: 'https://dev.mysql.com/doc/refman/8.4/en/constraint-primary-key.html' },
      { label: 'MySQL docs · Foreign keys', url: 'https://dev.mysql.com/doc/refman/8.4/en/create-table-foreign-keys.html' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: '用真實例子理解一對多關係',
    summary: '把應用資料轉成更乾淨的關聯結構。',
    moduleTitle: '模組 2 · 關聯與 joins',
    intro: '一對多關係是資料建模中最常見的模式，真正重要的是學會把現實世界問題轉成關聯結構。',
    learningPoints: [
      '理解一對多（one-to-many）關係在資料設計中的意義。',
      '知道怎麼把應用領域（application domain）轉成資料表。',
      '避免把重複資訊塞在同一張表。',
    ],
    lessonNotes: [
      '會員和訂單、課程和章節、文章和留言，這些都屬於典型的一對多關係。',
      '當你能辨認這些關係，就比較不會把多筆子資料硬塞在同一列裡，造成設計混亂。',
      '這一課的目標是讓你從需求描述裡看出資料關係，而不是只在圖表上背型態名稱。',
    ],
    exampleLanguage: 'text',
    exampleCode: "users\n  id\n  name\n\norders\n  id\n  user_id\n  order_number\n\nOne user -> many orders",
    practice: [
      '為一個課程平台畫出 users、courses、lessons 三者的關係。',
      '把原本混在一張表裡的重複資料拆成合理的一對多設計。',
      '說明為什麼這樣的設計比單一大表更好。',
    ],
    reasons: [
      '資料關係看不懂，資料表結構（schema）就很難設計得好。',
      '一對多是最常見的資料模型模式。',
    ],
    mistakes: [
      '把多筆子資料塞進單一欄位。',
      '沒有先分清主體實體與附屬實體。',
    ],
    takeaways: [
      '一對多不是抽象名詞，而是實際資料建模的常見基礎。',
      '看懂需求裡的實體與關係，比背資料表結構（schema）術語更重要。',
    ],
    references: [
      { label: 'MySQL docs · CREATE TABLE', url: 'https://dev.mysql.com/doc/refman/8.4/en/create-table.html' },
      { label: 'MySQL docs · InnoDB and foreign keys', url: 'https://dev.mysql.com/doc/refman/8.4/en/innodb-foreign-key-constraints.html' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: '正規化與實務 Schema 設計',
    summary: '在保持資料可理解的同時，減少重複與混亂。',
    moduleTitle: '模組 3 · 設計與效能',
    intro: '正規化的本質不是考試題，而是幫你減少重複資料、降低修改風險，讓資料表結構（schema）更穩。',
    learningPoints: [
      '理解正規化（normalization）的核心目的。',
      '知道為什麼重複資料會帶來風險。',
      '能在實務中做出合理的 Schema 拆分。',
    ],
    lessonNotes: [
      '正規化（normalization）是一種思考資料拆分的方式，目標是讓每份資料只在最合理的地方保存一次。',
      '如果同樣資訊散落在多個欄位或多張表裡，更新時很容易漏掉，造成不一致。',
      '實務上不一定追求最理論化的正規化，而是要在查詢效率、可讀性、維護成本之間取得平衡。',
    ],
    exampleLanguage: 'text',
    exampleCode: "Bad\norders\n  order_id\n  user_name\n  user_email\n\nBetter\nusers\n  id\n  name\n  email\n\norders\n  id\n  user_id",
    practice: [
      '找一個重複欄位很多的表，重新設計成較乾淨的 Schema。',
      '說明你保留了哪些欄位在原表，哪些拆去別張表。',
      '思考這次拆分是否會影響查詢複雜度。',
    ],
    reasons: [
      '壞的資料表結構（schema）會讓每次改資料都更危險。',
      '正規化思維能大幅提升資料設計品質。',
    ],
    mistakes: [
      '只背 1NF/2NF/3NF 名稱，卻無法處理實際資料設計。',
      '為了追求理論完美而讓資料表結構（schema）失去實用性。',
    ],
    takeaways: [
      '正規化的目標是讓資料更一致、更好維護。',
      '實務設計需要在理論與可用性之間平衡。',
    ],
    references: [
      { label: 'MySQL docs · Constraints', url: 'https://dev.mysql.com/doc/refman/8.4/en/constraints.html' },
      { label: 'MySQL docs · Optimization overview', url: 'https://dev.mysql.com/doc/refman/8.4/en/optimization.html' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: '索引與查詢效能',
    summary: '理解為什麼有些查詢很快，有些卻很慢。',
    moduleTitle: '模組 3 · 設計與效能',
    intro: '效能問題常常不是 SQL 太長，而是資料量一大後，資料庫找資料的方式不對。',
    learningPoints: [
      '理解索引（index）的作用。',
      '知道什麼情況下該考慮加索引。',
      '建立基本的查詢效能思維。',
    ],
    lessonNotes: [
      '索引（index）類似書的目錄，它幫助資料庫更快定位需要的資料，而不是每次都掃描整張表。',
      '但索引不是越多越好，因為它也會增加寫入成本與維護成本。',
      '真正的重點是：知道哪些欄位會常被查詢、排序、過濾，並理解資料量變大後為什麼速度會差很多。',
    ],
    exampleLanguage: 'sql',
    exampleCode: "CREATE INDEX idx_users_email ON users(email);\n\nEXPLAIN SELECT *\nFROM users\nWHERE email = 'tommy@example.com';",
    practice: [
      '對常查詢的欄位建立索引，並用 EXPLAIN 觀察差異。',
      '比較有索引與沒索引的查詢計畫。',
      '寫下哪幾種欄位適合索引，哪幾種不一定適合。',
    ],
    reasons: [
      '資料量一大，效能問題會直接影響產品體驗。',
      '索引是最常見也最容易被誤用的效能工具之一。',
    ],
    mistakes: [
      '看到慢就先亂加索引。',
      '沒有理解查詢模式，就直接優化。',
    ],
    takeaways: [
      '索引的目標是幫資料庫更快找到資料。',
      '優化前要先理解查詢模式和資料量。',
    ],
    references: [
      { label: 'MySQL docs · Optimization and indexes', url: 'https://dev.mysql.com/doc/refman/8.4/en/mysql-indexes.html' },
      { label: 'MySQL docs · EXPLAIN', url: 'https://dev.mysql.com/doc/refman/8.4/en/explain.html' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: '為應用開發準備 MySQL',
    summary: '建立能良好配合後端框架的資料庫基礎。',
    moduleTitle: '模組 3 · 設計與效能',
    intro: '最後一課把 MySQL 從單獨練語法，拉回到它在實際應用開發中扮演的角色。',
    learningPoints: [
      '知道 MySQL 在後端應用程式中通常怎麼被使用。',
      '理解資料表結構（schema）、查詢（queries）、索引（indexes）如何一起支援應用開發。',
      '建立把資料庫接進真實專案的準備思維。',
    ],
    lessonNotes: [
      '在真實應用裡，MySQL 不只是用來練 SQL，而是和 API、ORM、驗證、交易、權限控制一起工作。',
      '因此，你需要的不只是會寫查詢，還要有穩定的資料表結構（schema）、可預期的鍵值關係、適當的索引，以及容易讓應用程式接上的結構。',
      '這一課的重點是把前面所有資料模型與查詢觀念，整合成可以進入後端專案的資料庫基礎。',
    ],
    exampleLanguage: 'sql',
    exampleCode: "CREATE TABLE courses (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  title VARCHAR(255) NOT NULL,\n  level VARCHAR(50) NOT NULL\n);\n\nCREATE TABLE lessons (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  course_id INT NOT NULL,\n  title VARCHAR(255) NOT NULL,\n  FOREIGN KEY (course_id) REFERENCES courses(id)\n);",
    practice: [
      '為一個簡單後端系統設計初始資料表結構（schema）。',
      '確認每張表的鍵值、關係與常用查詢需求。',
      '想像你要把這份資料表結構（schema）接給 Spring Boot 或 Node 應用程式，還缺什麼。',
    ],
    reasons: [
      '資料庫最終是要服務應用系統，而不是停留在教科書層級。',
      '把資料設計和應用開發連起來，學習才會真正落地。',
    ],
    mistakes: [
      '只想著 SQL 單句正不正確，忽略整體資料表結構（schema）是否好接進應用程式。',
      '沒有先預想查詢模式就設計資料表。',
    ],
    takeaways: [
      '真正實用的 MySQL 能力，是把資料表結構（schema）、查詢與應用需求一起考慮。',
      '資料庫設計應該服務真實系統，而不是停留在孤立範例。',
    ],
    references: [
      { label: 'MySQL docs · CREATE DATABASE', url: 'https://dev.mysql.com/doc/refman/8.4/en/create-database.html' },
      { label: 'MySQL docs · Table design guidelines', url: 'https://dev.mysql.com/doc/refman/8.4/en/storage-requirements.html' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'GROUP BY 與聚合函式',
    summary: '用 COUNT、SUM、AVG 與分組結果整理資料摘要。',
    moduleTitle: '模組 4 · 聚合與進階查詢',
    intro: '這一課把查詢從「找單筆資料」進一步帶到「總結整批資料」，也是報表與分析查詢的基礎。',
    learningPoints: [
      '理解 GROUP BY 的用途。',
      '知道 COUNT、SUM、AVG 等聚合函式（aggregate functions）怎麼用。',
      '能用分組結果回答更像商業問題的查詢。',
    ],
    lessonNotes: [
      '當你不只想看每筆資料，而是想知道每個分類有幾筆、總和多少、平均多少時，就會進入聚合（aggregation）的世界。',
      'GROUP BY 讓資料依某個欄位被分組，再配合聚合函式（aggregate functions）計算結果。',
      '這一課的核心是把 SQL 從明細查詢提升到摘要查詢，讓你能回答更像報表與分析的問題。',
    ],
    exampleLanguage: 'sql',
    exampleCode: "SELECT level, COUNT(*) AS total_courses\nFROM courses\nGROUP BY level\nORDER BY total_courses DESC;",
    practice: [
      '算出每個分類有幾筆資料。',
      '試著用 AVG 或 SUM 做一次簡單報表。',
      '比較沒有 GROUP BY 與有 GROUP BY 的查詢差異。',
    ],
    reasons: [
      '實際工作裡很多查詢不是拿明細，而是拿摘要。',
      '聚合（aggregation）是從 CRUD 走向分析思維的重要一步。',
    ],
    mistakes: [
      'GROUP BY 後卻仍然想取出不該直接出現的欄位。',
      '不知道自己想看的其實是摘要資料而不是明細資料。',
    ],
    takeaways: [
      'GROUP BY 讓你把資料從一列列明細提升成摘要結果。',
      '聚合函式是回答「總共有多少、平均多少」這類問題的基礎。',
    ],
    references: [
      { label: 'MySQL docs · GROUP BY', url: 'https://dev.mysql.com/doc/refman/8.4/en/group-by-handling.html' },
      { label: 'MySQL docs · Aggregate functions', url: 'https://dev.mysql.com/doc/refman/8.4/en/aggregate-functions.html' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: '子查詢與衍生資料表',
    summary: '用巢狀查詢把更大的問題拆成較小步驟。',
    moduleTitle: '模組 4 · 聚合與進階查詢',
    intro: '有些查詢問題如果一次寫完會很亂，子查詢（subquery）能幫你把它拆成比較可理解的中間步驟。',
    learningPoints: [
      '理解子查詢（subquery）的基本用途。',
      '知道什麼情況下巢狀查詢（nested query）會更清楚。',
      '能讀懂衍生資料表（derived table）的查詢結構。',
    ],
    lessonNotes: [
      '子查詢（subquery）的本質是先用一個小查詢算出中間結果，再把它當作另一個查詢的輸入。',
      '這種做法很適合處理條件依賴、排名、或先篩選再聚合的問題。',
      '雖然子查詢不一定每次都最優，但它能幫你把大問題拆解成較容易推理的步驟。',
    ],
    exampleLanguage: 'sql',
    exampleCode: "SELECT title\nFROM courses\nWHERE id IN (\n  SELECT course_id\n  FROM lessons\n  GROUP BY course_id\n  HAVING COUNT(*) >= 5\n);",
    practice: [
      '做一條先篩條件、再用外層查詢取資料的子查詢。',
      '把一條太長的 SQL 試著拆成較容易理解的兩層結構。',
      '比較子查詢與 JOIN 寫法在可讀性上的差異。',
    ],
    reasons: [
      '進階查詢常常需要中間步驟。',
      '拆得好的查詢會比硬寫成一條大 SQL 更容易維護。',
    ],
    mistakes: [
      '看到子查詢就排斥，而不是先判斷可讀性。',
      '巢狀層數太深，反而讓查詢更難懂。',
    ],
    takeaways: [
      '子查詢是拆解複雜查詢的重要工具。',
      '可讀性仍然是進階 SQL 設計的重要標準。',
    ],
    references: [
      { label: 'MySQL docs · Subqueries', url: 'https://dev.mysql.com/doc/refman/8.4/en/subqueries.html' },
      { label: 'MySQL docs · Derived tables', url: 'https://dev.mysql.com/doc/refman/8.4/en/derived-tables.html' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: '交易與 ACID 基礎',
    summary: '理解一組操作如何保持安全與一致。',
    moduleTitle: '模組 5 · Transactions 與實務操作',
    intro: '當一組資料操作必須一起成功或一起失敗時，交易（transaction）就是保護一致性的核心機制。',
    learningPoints: [
      '理解交易（transaction）的基本概念。',
      '知道 ACID 代表什麼。',
      '能分辨什麼情境需要交易。',
    ],
    lessonNotes: [
      '交易（transaction）讓多個操作被視為同一組工作單位，避免只做一半就留下不一致資料。',
      'ACID 代表的是這組操作在資料庫層面應該具備的可靠性特徵。',
      '像是轉帳、庫存扣減、訂單建立等流程，如果沒有交易，很容易出現資料只更新一半的問題。',
    ],
    exampleLanguage: 'sql',
    exampleCode: "START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;",
    practice: [
      '找一個需要多步驟資料更新的情境，判斷是否需要交易。',
      '試寫一個最小交易流程。',
      '思考如果其中一步失敗，資料會出現什麼問題。',
    ],
    reasons: [
      '資料正確性常常比查詢漂亮更重要。',
      '真實系統幾乎一定會碰到需要保證一致性的情境。',
    ],
    mistakes: [
      '把多步資料更新拆開做，沒有保護一致性。',
      '聽過 ACID，但不知道在真實系統中什麼時候會用到。',
    ],
    takeaways: [
      '交易的目的就是保護一組操作的一致性。',
      'ACID 是理解資料可靠性的基本語言。',
    ],
    references: [
      { label: 'MySQL docs · START TRANSACTION', url: 'https://dev.mysql.com/doc/refman/8.4/en/commit.html' },
      { label: 'MySQL docs · InnoDB transaction model', url: 'https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-model.html' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: '備份、匯入與匯出流程',
    summary: '處理搬移與保護 MySQL 資料時常見的實務操作。',
    moduleTitle: '模組 5 · Transactions 與實務操作',
    intro: '資料庫不只要會查，還要能保護、搬移、還原，這些操作能力會直接影響系統安全感。',
    learningPoints: [
      '理解備份、匯入、匯出的基本用途。',
      '知道什麼情況需要做匯出備份（dump）或還原（restore）。',
      '建立資料保護與搬移的基本觀念。',
    ],
    lessonNotes: [
      '備份不是發生問題後才想起來的事，而是資料系統的基本保險。',
      '匯入與匯出也常見於環境搬移、初始化測試資料、同步資料結構等情境。',
      '這一課的重點是建立營運思維：資料不只要能查，也要能安全保存與移動。',
    ],
    exampleLanguage: 'bash',
    exampleCode: "mysqldump -u root -p learning_site > learning_site.sql\nmysql -u root -p learning_site < learning_site.sql",
    practice: [
      '對一個測試資料庫做一次匯出備份（dump）。',
      '把匯出備份檔案匯回另一個測試資料庫。',
      '寫下備份時最需要注意的三件事。',
    ],
    reasons: [
      '沒有備份策略的資料系統風險很高。',
      '資料搬移與還原是開發和營運中都會碰到的能力。',
    ],
    mistakes: [
      '以為資料只要存在資料庫裡就自然安全。',
      '沒有先在測試環境驗證還原流程。',
    ],
    takeaways: [
      '備份與還原是資料可靠性的基本底線。',
      '匯入匯出能力是實務環境常見且必要的操作技能。',
    ],
    references: [
      { label: 'MySQL docs · mysqldump', url: 'https://dev.mysql.com/doc/refman/8.4/en/mysqldump.html' },
      { label: 'MySQL docs · mysql client', url: 'https://dev.mysql.com/doc/refman/8.4/en/mysql.html' },
    ],
  },
  {
    lesson: 14,
    slug: 'lesson-14',
    title: '使用者權限與正式環境（Production）基礎',
    summary: '讓 MySQL 更適合團隊使用與正式環境。',
    moduleTitle: '模組 5 · 交易（Transactions）與實務操作',
    intro: '最後一課把 MySQL 拉到更接近正式環境（production）的角度：誰能做什麼、環境怎麼分、資料怎麼保護。',
    learningPoints: [
      '理解使用者權限為什麼重要。',
      '知道開發（development）與正式（production）環境應該分開思考。',
      '建立基本的正式環境安全思維（production safety mindset）。',
    ],
    lessonNotes: [
      '不是每個人或每個應用都應該擁有資料庫的全部權限。權限設計本身就是資料安全的一部分。',
      '正式環境（production）需要更嚴格的權限、備份、變更流程與監控思維。',
      '這一課的目標不是讓你立刻變成 DBA，而是知道資料庫進入真實環境後，思考方式必須從單機練習升級。',
    ],
    exampleLanguage: 'sql',
    exampleCode: "CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'strong-password';\nGRANT SELECT, INSERT, UPDATE, DELETE ON learning_site.* TO 'app_user'@'localhost';\nFLUSH PRIVILEGES;",
    practice: [
      '建立一個只擁有必要權限的應用帳號。',
      '列出正式環境中不應隨意開放的權限。',
      '想像你要交接資料庫給團隊，會先定哪些安全規則。',
    ],
    reasons: [
      '資料庫安全不只靠密碼，而是靠最小權限與環境紀律。',
      '進正式環境後，資料庫思維必須從練習模式轉成風險控管模式。',
    ],
    mistakes: [
      '所有應用都用 root 或高權限帳號連線。',
      '把正式環境當成和本機一樣可以隨意操作的地方。',
    ],
    takeaways: [
      '資料庫進正式環境後，安全與權限管理就是基本功。',
      '最小權限原則是實務環境的重要底線。',
    ],
    references: [
      { label: 'MySQL docs · Access control and account management', url: 'https://dev.mysql.com/doc/refman/8.4/en/access-control.html' },
      { label: 'MySQL docs · GRANT statement', url: 'https://dev.mysql.com/doc/refman/8.4/en/grant.html' },
    ],
  },
 ];

export function getMySQLLessons() {
  return mysqlLessons;
}

export function getMySQLLessonBySlug(slug: string) {
  return mysqlLessons.find((lesson) => lesson.slug === slug) ?? null;
}
