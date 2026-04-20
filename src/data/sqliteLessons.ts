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
    title: 'What SQLite is and when to use it',
    summary: 'Understand SQLite strengths, tradeoffs, and the use cases where it shines.',
    moduleTitle: 'Module 1 · SQLite foundations',
    intro: 'This lesson establishes where SQLite fits so you can use it intentionally in local, embedded, and lightweight app workflows.',
    learningPoints: [
      'Understand SQLite as an embedded, serverless relational database engine.',
      'Recognize scenarios where SQLite is an excellent default.',
      'Know when a client-server database may be more suitable.',
    ],
    lessonNotes: [
      'SQLite stores data in a single file and runs in-process with your application, which keeps setup and deployment simple.',
      'It is commonly used in mobile apps, desktop tools, local-first apps, and small services with moderate concurrency needs.',
      'Choosing SQLite is about operational simplicity and product fit, not about using a less serious database.',
    ],
    exampleLanguage: 'text',
    exampleCode: `Great fit examples
  - Mobile app local storage
  - Desktop note-taking tool
  - Single-user local data workflow

May need another option
  - Heavy multi-writer backend with many concurrent writes
  - Centralized database shared by many application servers`,
    practice: [
      'List one product idea where SQLite is the best first choice.',
      'List one system where PostgreSQL or MySQL is likely a better fit.',
      'Describe how file-based storage affects deployment complexity.',
    ],
    reasons: [
      'Tool choice determines both architecture and operational burden.',
      'SQLite is most effective when chosen for the right workload.',
    ],
    mistakes: [
      'Assuming SQLite is only for toy projects.',
      'Using SQLite in high-concurrency server workloads without evaluating limits.',
    ],
    takeaways: [
      'SQLite is a capable relational database with a different deployment model.',
      'Use-case fit matters more than database brand preference.',
    ],
    references: [
      { label: 'SQLite Documentation', url: 'https://www.sqlite.org/docs.html' },
      { label: 'SQLite · Appropriate Uses', url: 'https://www.sqlite.org/whentouse.html' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'Working with a file-based database and the SQLite CLI',
    summary: 'Create, open, and inspect a SQLite database file through the command-line shell.',
    moduleTitle: 'Module 1 · SQLite foundations',
    intro: 'Before advanced SQL, you need confidence creating database files and navigating data from the SQLite shell.',
    learningPoints: [
      'Create and open SQLite database files from the CLI.',
      'Use shell commands such as .tables, .schema, and .mode.',
      'Run SQL and shell commands together in one practical workflow.',
    ],
    lessonNotes: [
      'SQLite has no separate server process to manage; the database file is the core artifact.',
      'The sqlite3 shell supports both SQL and helper commands for inspection and formatting.',
      'CLI fluency is useful even when you later use GUI clients or ORM tooling.',
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
      'Create a new database file and reopen it from terminal.',
      'Run .schema after creating one table.',
      'Switch output mode and read query results in a table-like format.',
    ],
    reasons: [
      'A stable CLI workflow reduces confusion during schema and query debugging.',
      'File-level understanding helps with backup and environment transfer later.',
    ],
    mistakes: [
      'Treating shell commands and SQL commands as unrelated workflows.',
      'Not tracking where database files are created in the project.',
    ],
    takeaways: [
      'SQLite CLI is enough to create, inspect, and query a database from scratch.',
      'Knowing your file location and shell commands is essential practical skill.',
    ],
    references: [
      { label: 'SQLite Docs · Command Line Shell', url: 'https://www.sqlite.org/cli.html' },
      { label: 'SQLite Docs · Getting Started', url: 'https://www.sqlite.org/quickstart.html' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: 'Tables, rowid, columns, and primary keys',
    summary: 'Learn SQLite table structure basics and how primary keys relate to rowid behavior.',
    moduleTitle: 'Module 1 · SQLite foundations',
    intro: 'This lesson introduces structural concepts unique to SQLite, especially how rowid tables work.',
    learningPoints: [
      'Create tables with clear entity-focused columns.',
      'Understand rowid and how INTEGER PRIMARY KEY interacts with it.',
      'Choose primary key patterns that fit app requirements.',
    ],
    lessonNotes: [
      'Most SQLite tables are rowid tables, where each row has an internal identifier.',
      'Declaring an INTEGER PRIMARY KEY makes that column an alias of rowid.',
      'Knowing this behavior helps you design keys and avoid confusion in insert and lookup flows.',
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
      'Create one table with INTEGER PRIMARY KEY and insert sample rows.',
      'Query id values and observe automatic key behavior.',
      'Name columns by business meaning instead of UI labels.',
    ],
    reasons: [
      'Row identity affects query behavior and data migrations.',
      'A clean table baseline prevents later schema cleanup work.',
    ],
    mistakes: [
      'Creating tables without explicit key strategy.',
      'Confusing rowid behavior with generic SQL assumptions from other databases.',
    ],
    takeaways: [
      'SQLite table design starts with clear columns and key intent.',
      'INTEGER PRIMARY KEY has specific rowid semantics worth understanding early.',
    ],
    references: [
      { label: 'SQLite Docs · CREATE TABLE', url: 'https://www.sqlite.org/lang_createtable.html' },
      { label: 'SQLite Docs · Rowid Tables', url: 'https://www.sqlite.org/rowidtable.html' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'SELECT, WHERE, ORDER BY, and LIMIT',
    summary: 'Filter and sort result sets clearly with SQLite query basics.',
    moduleTitle: 'Module 2 · Querying and writing data',
    intro: 'This lesson builds everyday query fluency using the SQL clauses you will use most often.',
    learningPoints: [
      'Select only needed columns to keep queries focused.',
      'Filter rows with WHERE conditions.',
      'Sort and trim result sets with ORDER BY and LIMIT.',
    ],
    lessonNotes: [
      'Query clarity is a design skill: ask the data question first, then express it with SQL clauses.',
      'ORDER BY and LIMIT are especially useful in list pages, recent activity views, and debug workflows.',
      'Precise SELECT queries reduce noise and make downstream app code simpler.',
    ],
    exampleLanguage: 'sql',
    exampleCode: `SELECT id, title
FROM notes
WHERE title LIKE 'S%'
ORDER BY id DESC
LIMIT 5;`,
    practice: [
      'Write one query that filters by a keyword and sorts newest first.',
      'Replace one SELECT * with explicit column selection.',
      'Use LIMIT to inspect small test subsets during development.',
    ],
    reasons: [
      'Most app data access starts with read queries.',
      'Strong query basics make joins and reports easier later.',
    ],
    mistakes: [
      'Overusing SELECT * in production query paths.',
      'Skipping ORDER BY and assuming insertion order is enough.',
    ],
    takeaways: [
      'Good SQL starts from clear data intent.',
      'SELECT + WHERE + ORDER BY + LIMIT is the daily query foundation.',
    ],
    references: [
      { label: 'SQLite Docs · SELECT', url: 'https://www.sqlite.org/lang_select.html' },
      { label: 'SQLite Docs · Expressions', url: 'https://www.sqlite.org/lang_expr.html' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: 'INSERT, UPDATE, and DELETE',
    summary: 'Modify rows safely and understand how write operations change table state.',
    moduleTitle: 'Module 2 · Querying and writing data',
    intro: 'Write operations change real data, so this lesson emphasizes safe habits and clear scope control.',
    learningPoints: [
      'Insert new records with required fields.',
      'Update rows with deliberate WHERE conditions.',
      'Delete rows carefully and confirm affected scope.',
    ],
    lessonNotes: [
      'INSERT, UPDATE, and DELETE are simple syntactically but high impact operationally.',
      'Most write mistakes come from unclear row targeting, especially missing WHERE filters.',
      'Safe workflow: preview target rows, run write command, verify result.',
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
      'Insert two sample rows into a test table.',
      'Run one update with a strict WHERE condition.',
      'Explain the risk of DELETE without WHERE in your own words.',
    ],
    reasons: [
      'Data correctness depends heavily on write discipline.',
      'Safe write habits prevent avoidable data loss incidents.',
    ],
    mistakes: [
      'Executing UPDATE quickly without checking row scope first.',
      'Using the same risky write habits in both test and production workflows.',
    ],
    takeaways: [
      'Write SQL must be deliberate and verifiable.',
      'WHERE conditions are essential guardrails in UPDATE and DELETE.',
    ],
    references: [
      { label: 'SQLite Docs · INSERT', url: 'https://www.sqlite.org/lang_insert.html' },
      { label: 'SQLite Docs · UPDATE', url: 'https://www.sqlite.org/lang_update.html' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: 'Type affinity and how SQLite handles data types',
    summary: 'Understand SQLite type affinity so stored values behave predictably.',
    moduleTitle: 'Module 2 · Querying and writing data',
    intro: 'SQLite type handling differs from rigid type systems in other databases, so this lesson builds practical intuition.',
    learningPoints: [
      'Understand SQLite storage classes and column type affinity.',
      'See how inserted values can be converted based on affinity rules.',
      'Design schemas that stay predictable despite flexible typing.',
    ],
    lessonNotes: [
      'SQLite uses dynamic typing with affinity rules, which can convert values at insert time depending on column declaration.',
      'This flexibility is useful, but it requires deliberate design to avoid confusing data states.',
      'Practical schema design combines affinity awareness with constraints for stronger data quality.',
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
      'Insert mixed-type values and inspect results with typeof().',
      'Refactor one ambiguous column declaration to a clearer intent.',
      'Add constraints to reduce unexpected value conversions.',
    ],
    reasons: [
      'Type confusion causes subtle bugs in validation and reporting.',
      'Affinity literacy is necessary for reliable SQLite schema design.',
    ],
    mistakes: [
      'Assuming SQLite enforces types exactly like PostgreSQL or MySQL by default.',
      'Designing columns without considering conversion behavior.',
    ],
    takeaways: [
      'SQLite uses affinity, not strict static typing by default.',
      'Predictable schemas come from clear types plus constraints and checks.',
    ],
    references: [
      { label: 'SQLite Docs · Datatypes In SQLite', url: 'https://www.sqlite.org/datatype3.html' },
      { label: 'SQLite Docs · Core Functions (typeof)', url: 'https://www.sqlite.org/lang_corefunc.html' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: 'Constraints: NOT NULL, UNIQUE, and CHECK',
    summary: 'Add practical constraints to prevent invalid data from entering your tables.',
    moduleTitle: 'Module 3 · Structure and relationships',
    intro: 'Constraints keep data quality rules close to the source of truth, not scattered across application code only.',
    learningPoints: [
      'Use NOT NULL to enforce required fields.',
      'Use UNIQUE to prevent duplicate values where business rules require uniqueness.',
      'Use CHECK to validate allowed value ranges or formats.',
    ],
    lessonNotes: [
      'Constraint design is one of the highest-leverage schema habits for long-term data quality.',
      'NOT NULL, UNIQUE, and CHECK can block common invalid states before they spread into app logic.',
      'Clear constraints also improve onboarding because rules are visible directly in schema definitions.',
    ],
    exampleLanguage: 'sql',
    exampleCode: `CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  age INTEGER CHECK (age >= 13)
);`,
    practice: [
      'Add NOT NULL and UNIQUE to one existing table in your project.',
      'Create one CHECK rule that matches a real business requirement.',
      'Attempt one invalid insert and observe the constraint error.',
    ],
    reasons: [
      'Data quality problems are cheaper to prevent than to clean later.',
      'Schema-level rules give consistent protection across all write paths.',
    ],
    mistakes: [
      'Leaving critical fields unconstrained and relying only on UI validation.',
      'Adding CHECK rules without documenting business meaning.',
    ],
    takeaways: [
      'Constraints are core design tools, not optional extras.',
      'NOT NULL, UNIQUE, and CHECK greatly improve baseline data reliability.',
    ],
    references: [
      { label: 'SQLite Docs · CREATE TABLE', url: 'https://www.sqlite.org/lang_createtable.html' },
      { label: 'SQLite Docs · CHECK Constraints', url: 'https://www.sqlite.org/lang_createtable.html#ckconst' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: 'Foreign keys and relationship modeling in SQLite',
    summary: 'Model related tables and enforce parent-child relationships with foreign keys.',
    moduleTitle: 'Module 3 · Structure and relationships',
    intro: 'This lesson shows how SQLite can enforce relational integrity when foreign keys are configured correctly.',
    learningPoints: [
      'Enable foreign key enforcement in SQLite sessions.',
      'Design parent-child table relationships with clear key references.',
      'Understand how foreign keys protect relational consistency.',
    ],
    lessonNotes: [
      'SQLite supports foreign keys, but you should verify enforcement settings in your environment.',
      'With foreign keys, child rows cannot reference missing parent records, which prevents orphaned data.',
      'Relationship modeling quality strongly impacts join correctness and long-term maintainability.',
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
      'Enable PRAGMA foreign_keys and create two related tables.',
      'Try inserting a child row with no parent and inspect the error.',
      'Document relationship rules for one app feature before coding queries.',
    ],
    reasons: [
      'Relationship integrity is essential for trustworthy app data.',
      'Foreign keys reduce cleanup work caused by invalid references.',
    ],
    mistakes: [
      'Modeling relationships without verifying foreign key enforcement.',
      'Skipping key references and relying on convention only.',
    ],
    takeaways: [
      'SQLite can enforce relational integrity effectively with proper setup.',
      'Foreign keys are key to stable multi-table design.',
    ],
    references: [
      { label: 'SQLite Docs · Foreign Key Support', url: 'https://www.sqlite.org/foreignkeys.html' },
      { label: 'SQLite Docs · PRAGMA Statements', url: 'https://www.sqlite.org/pragma.html' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'JOINs and multi-table queries',
    summary: 'Combine rows from related tables to answer practical app questions.',
    moduleTitle: 'Module 3 · Structure and relationships',
    intro: 'Normalized schemas become useful through join queries that combine related tables into readable outputs.',
    learningPoints: [
      'Use INNER JOIN and LEFT JOIN in practical relationship queries.',
      'Write clear join conditions tied to key relationships.',
      'Interpret multi-table results without ambiguity.',
    ],
    lessonNotes: [
      'JOINs let you rebuild meaningful business views from separate normalized tables.',
      'The right join type depends on whether unmatched rows should stay in the result set.',
      'Readable aliases and focused selected columns make joins easier to maintain.',
    ],
    exampleLanguage: 'sql',
    exampleCode: `SELECT c.title AS course_title, l.title AS lesson_title
FROM courses c
LEFT JOIN lessons l ON l.course_id = c.id
ORDER BY c.id, l.id;`,
    practice: [
      'Write one INNER JOIN and one LEFT JOIN on the same schema.',
      'Compare the results and explain why the row counts differ.',
      'Refactor one wide join query into clearer aliases and selected fields.',
    ],
    reasons: [
      'Most useful relational outputs come from combining tables.',
      'Join correctness directly affects API and report trustworthiness.',
    ],
    mistakes: [
      'Joining tables with incomplete or incorrect ON conditions.',
      'Selecting too many unrelated columns and losing readability.',
    ],
    takeaways: [
      'Join design is about relationship semantics, not syntax memorization only.',
      'Clear multi-table SQL is a practical day-to-day skill.',
    ],
    references: [
      { label: 'SQLite Docs · SELECT', url: 'https://www.sqlite.org/lang_select.html' },
      { label: 'SQLite Docs · JOIN clause syntax', url: 'https://www.sqlite.org/syntax/join-clause.html' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'Aggregation and grouped reports',
    summary: 'Use grouped queries and aggregate functions to produce compact reports.',
    moduleTitle: 'Module 4 · Safe writes and performance',
    intro: 'This lesson shifts from individual rows to grouped summaries for dashboards and operational metrics.',
    learningPoints: [
      'Use GROUP BY to summarize rows by category.',
      'Apply aggregate functions such as COUNT, SUM, and AVG.',
      'Use HAVING to filter grouped outcomes.',
    ],
    lessonNotes: [
      'Aggregation is key for reporting questions such as totals per category or average scores per class.',
      'GROUP BY organizes rows into buckets and aggregate functions compute summarized values.',
      'HAVING is useful when summary-level conditions are needed after grouping.',
    ],
    exampleLanguage: 'sql',
    exampleCode: `SELECT course_id, COUNT(*) AS lesson_count
FROM lessons
GROUP BY course_id
HAVING COUNT(*) >= 3
ORDER BY lesson_count DESC;`,
    practice: [
      'Build one grouped report with COUNT and one with AVG.',
      'Add HAVING to keep only groups above a threshold.',
      'Explain when to use WHERE versus HAVING.',
    ],
    reasons: [
      'Most product metrics depend on grouped SQL summaries.',
      'Aggregation fluency reduces dependence on complex post-processing in application code.',
    ],
    mistakes: [
      'Selecting non-grouped columns without valid aggregate logic.',
      'Confusing grouped filtering needs with pre-group row filtering.',
    ],
    takeaways: [
      'Grouped SQL is essential for reporting workflows.',
      'HAVING filters grouped results after aggregate evaluation.',
    ],
    references: [
      { label: 'SQLite Docs · Aggregate Functions', url: 'https://www.sqlite.org/lang_aggfunc.html' },
      { label: 'SQLite Docs · SELECT', url: 'https://www.sqlite.org/lang_select.html' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: 'Transactions and safe write operations',
    summary: 'Use transactions to keep multi-step writes consistent when failures happen.',
    moduleTitle: 'Module 4 · Safe writes and performance',
    intro: 'Transactions help protect file-based database consistency during multi-step updates and failures.',
    learningPoints: [
      'Use BEGIN, COMMIT, and ROLLBACK for atomic write groups.',
      'Define transaction boundaries around real business operations.',
      'Understand why partial writes are risky in practical app flows.',
    ],
    lessonNotes: [
      'A transaction treats several statements as one unit so all succeed or none are kept.',
      'Without transaction boundaries, interrupted writes can leave app data in inconsistent states.',
      'Safe write design is essential even in local or embedded applications.',
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
      'Write one transaction that updates two related tables.',
      'Simulate a failure and verify rollback behavior.',
      'Document one app feature that must use a transaction boundary.',
    ],
    reasons: [
      'Consistency problems are hard to detect and expensive to repair later.',
      'Transaction habits improve reliability even in small projects.',
    ],
    mistakes: [
      'Running dependent writes as independent statements.',
      'Assuming local file databases do not need transaction discipline.',
    ],
    takeaways: [
      'Transactions protect data integrity across multi-step writes.',
      'Reliable SQLite apps still require careful write boundaries.',
    ],
    references: [
      { label: 'SQLite Docs · Transactions', url: 'https://www.sqlite.org/lang_transaction.html' },
      { label: 'SQLite Docs · ACID', url: 'https://www.sqlite.org/transactional.html' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'Indexes and basic query planning',
    summary: 'Add indexes intentionally and inspect query plans with EXPLAIN QUERY PLAN.',
    moduleTitle: 'Module 4 · Safe writes and performance',
    intro: 'This lesson introduces practical indexing and lightweight query-plan reading for performance sanity checks.',
    learningPoints: [
      'Create indexes based on recurring filter and sort patterns.',
      'Use EXPLAIN QUERY PLAN to inspect high-level execution decisions.',
      'Balance read improvements against write overhead.',
    ],
    lessonNotes: [
      'Indexes can speed up many read queries, but they are not free during inserts and updates.',
      'EXPLAIN QUERY PLAN gives quick visibility into whether an index is likely being used.',
      'Performance work should be query-pattern driven, not random index additions.',
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
      'Add one index for a repeated query path in your sample schema.',
      'Capture EXPLAIN QUERY PLAN output before and after indexing.',
      'List one table where extra indexes may hurt more than help.',
    ],
    reasons: [
      'Even small apps can feel slow with poor query access patterns.',
      'Simple plan reading prevents guess-based optimization.',
    ],
    mistakes: [
      'Adding indexes to every column without workload evidence.',
      'Ignoring write cost when optimizing read-heavy paths only.',
    ],
    takeaways: [
      'Indexes should follow real query behavior.',
      'EXPLAIN QUERY PLAN is a practical first tool for SQLite tuning.',
    ],
    references: [
      { label: 'SQLite Docs · Query Planning', url: 'https://www.sqlite.org/queryplanner.html' },
      { label: 'SQLite Docs · EXPLAIN QUERY PLAN', url: 'https://www.sqlite.org/eqp.html' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: 'Build a small embedded app database with SQLite',
    summary: 'Design and validate a small SQLite schema ready for an embedded application.',
    moduleTitle: 'Module 5 · Practical app usage',
    intro: 'This capstone combines schema design, constraints, query patterns, and safe write habits into one small practical delivery.',
    learningPoints: [
      'Design a small embedded-app schema with clear entities and relationships.',
      'Apply constraints, foreign keys, and indexes where they add obvious value.',
      'Validate key read and write workflows from the CLI.',
    ],
    lessonNotes: [
      'A good embedded database design prioritizes clarity, reliability, and straightforward migration paths.',
      'Capstone success means your schema supports realistic app actions, not just isolated SQL snippets.',
      'Finishing with a repeatable workflow (create, seed, query, verify) prepares you for real project integration.',
    ],
    exampleLanguage: 'text',
    exampleCode: `Mini app idea: offline reading tracker
  users
  books
  reading_sessions

Delivery checklist
  - Constraints and foreign keys enabled
  - Core queries tested
  - Transaction flow verified for write safety`,
    practice: [
      'Build and seed a small schema for one embedded app concept.',
      'Write at least three real queries the app would need.',
      'Use a short checklist to verify integrity and query behavior before shipping.',
    ],
    reasons: [
      'Practical integration is where database skills become product value.',
      'A small complete design reveals gaps faster than many disconnected examples.',
    ],
    mistakes: [
      'Skipping validation of real query paths before calling schema done.',
      'Treating constraints and transactions as optional if the app is small.',
    ],
    takeaways: [
      'A complete small schema is the best proof of SQLite readiness.',
      'Practical delivery means design plus repeatable verification.',
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
