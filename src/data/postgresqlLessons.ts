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
    title: 'What PostgreSQL is and when to use it',
    summary: 'Understand PostgreSQL strengths, common workloads, and when another database may be a better fit.',
    moduleTitle: 'Module 1 · PostgreSQL foundations and setup',
    intro: 'This lesson builds a clear baseline for PostgreSQL so you can choose it for the right problems instead of by trend alone.',
    learningPoints: [
      'Understand what PostgreSQL provides as an open-source relational database.',
      'Recognize use cases where PostgreSQL is a strong default choice.',
      'Identify situations where a simpler or different storage option may be better.',
    ],
    lessonNotes: [
      'PostgreSQL is a relational database system focused on standards, correctness, and practical extensibility for real applications.',
      'It works well for products that need reliable transactions, relational joins, and evolving schemas over time.',
      'Choosing PostgreSQL is not about using the most advanced database; it is about matching data shape, query needs, and team workflow.',
    ],
    exampleLanguage: 'text',
    exampleCode: `Good fit examples
  - Course platform with users, lessons, enrollments
  - Admin dashboard with reporting queries
  - Product backend requiring safe transactions

Maybe not first choice
  - Tiny static app with no server-side persistence
  - In-memory cache workload as primary storage`,
    practice: [
      'List one project where PostgreSQL is a strong fit and explain why.',
      'List one project where SQLite or a managed document store might be simpler.',
      'Write three data questions your app must answer with SQL.',
    ],
    reasons: [
      'Tool choice quality affects architecture and maintenance cost later.',
      'A clear baseline helps you learn PostgreSQL concepts with purpose.',
    ],
    mistakes: [
      'Choosing PostgreSQL only because it is popular, without data-model reasoning.',
      'Assuming one database is always best for every workload.',
    ],
    takeaways: [
      'PostgreSQL is a dependable relational default for many backend systems.',
      'Database choice should follow workload and team needs, not hype.',
    ],
    references: [
      { label: 'PostgreSQL · About', url: 'https://www.postgresql.org/about/' },
      { label: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/current/' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'Install PostgreSQL and connect with psql',
    summary: 'Install PostgreSQL, create a local database, and run commands in psql with confidence.',
    moduleTitle: 'Module 1 · PostgreSQL foundations and setup',
    intro: 'A stable local setup removes friction and lets the rest of the course focus on SQL and schema skills.',
    learningPoints: [
      'Install PostgreSQL and verify your local server and client tools.',
      'Use psql to connect, inspect databases, and run SQL commands.',
      'Understand core shell commands such as \l, \dt, and \d.',
    ],
    lessonNotes: [
      'PostgreSQL setup includes both the server process and client tools such as psql.',
      'psql is essential even if you later use GUI tools, because it is fast, scriptable, and consistent across environments.',
      'Once your setup is stable, you can create and inspect databases quickly without guessing tool behavior.',
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
      'Install PostgreSQL and confirm psql version from terminal.',
      'Create a local database and connect to it from psql.',
      'Run one SQL statement and one psql meta-command in the same session.',
    ],
    reasons: [
      'Most early learner blockers come from unclear local setup.',
      'CLI fluency helps in debugging, scripting, and team onboarding.',
    ],
    mistakes: [
      'Using GUI tools only and never learning basic psql commands.',
      'Skipping version checks and environment validation.',
    ],
    takeaways: [
      'A clean PostgreSQL + psql setup is part of core database literacy.',
      'You should be able to create, connect, and inspect a local database quickly.',
    ],
    references: [
      { label: 'PostgreSQL Docs · Installation', url: 'https://www.postgresql.org/docs/current/installation.html' },
      { label: 'PostgreSQL Docs · psql', url: 'https://www.postgresql.org/docs/current/app-psql.html' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: 'Databases, schemas, tables, rows, and columns',
    summary: 'Learn how databases, schemas, tables, rows, and columns organize data in PostgreSQL.',
    moduleTitle: 'Module 1 · PostgreSQL foundations and setup',
    intro: 'This lesson gives you the structural vocabulary you need before writing bigger multi-table queries.',
    learningPoints: [
      'Distinguish database-level and schema-level organization in PostgreSQL.',
      'Understand how tables, rows, and columns represent data models.',
      'Use naming conventions that keep structure easy to navigate.',
    ],
    lessonNotes: [
      'A PostgreSQL database can contain multiple schemas, which help organize related objects logically.',
      'Tables represent entities, rows represent records, and columns represent attributes of those records.',
      'Clear structure early prevents confusion later when projects add more tables, queries, and team members.',
    ],
    exampleLanguage: 'sql',
    exampleCode: `CREATE SCHEMA learning;

CREATE TABLE learning.courses (
  id BIGINT PRIMARY KEY,
  title TEXT NOT NULL,
  level TEXT NOT NULL
);`,
    practice: [
      'Create one schema and two related tables in a test database.',
      'Name each table by entity responsibility, not UI screen names.',
      'Explain what each column means in one short sentence.',
    ],
    reasons: [
      'Most query problems come from unclear data structure, not SQL syntax alone.',
      'Schema vocabulary is required for collaboration and code review.',
    ],
    mistakes: [
      'Mixing unrelated entities into one large table.',
      'Ignoring schema organization and leaving everything in default public without intent.',
    ],
    takeaways: [
      'Good PostgreSQL work starts with clear data structure boundaries.',
      'Database, schema, table, row, and column roles should be explicit.',
    ],
    references: [
      { label: 'PostgreSQL Docs · CREATE DATABASE', url: 'https://www.postgresql.org/docs/current/sql-createdatabase.html' },
      { label: 'PostgreSQL Docs · Schemas', url: 'https://www.postgresql.org/docs/current/ddl-schemas.html' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'SELECT, WHERE, ORDER BY, and LIMIT',
    summary: 'Retrieve focused result sets with SELECT, WHERE, ORDER BY, and LIMIT.',
    moduleTitle: 'Module 2 · Querying and writing data',
    intro: 'You will use these clauses constantly, so this lesson focuses on reading intent first and syntax second.',
    learningPoints: [
      'Select only the columns needed for the current task.',
      'Filter rows clearly with WHERE conditions.',
      'Sort and limit results to keep outputs relevant and efficient.',
    ],
    lessonNotes: [
      'SELECT controls output columns, WHERE controls row inclusion, ORDER BY controls sorting, and LIMIT controls result size.',
      'These clauses are most useful when they are written to answer a concrete question from product or business logic.',
      'A precise query is easier to maintain than a broad query with ad-hoc filtering in application code.',
    ],
    exampleLanguage: 'sql',
    exampleCode: `SELECT id, title, level
FROM learning.courses
WHERE level IN ('beginner', 'intermediate')
ORDER BY id DESC
LIMIT 10;`,
    practice: [
      'Write one query that returns only active records in a sorted order.',
      'Replace a SELECT * query with explicit column selection.',
      'Use LIMIT to inspect test data safely during development.',
    ],
    reasons: [
      'Query basics drive nearly all debugging and feature work involving data.',
      'Column and row precision reduces payload size and confusion.',
    ],
    mistakes: [
      'Relying on SELECT * in code paths that only need a few fields.',
      'Sorting in application code when SQL can do it clearly.',
    ],
    takeaways: [
      'Ask the data question clearly before writing SQL syntax.',
      'SELECT + WHERE + ORDER BY + LIMIT is the everyday query core.',
    ],
    references: [
      { label: 'PostgreSQL Docs · SELECT', url: 'https://www.postgresql.org/docs/current/sql-select.html' },
      { label: 'PostgreSQL Docs · Sorting Rows', url: 'https://www.postgresql.org/docs/current/queries-order.html' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: 'INSERT, UPDATE, DELETE, and RETURNING',
    summary: 'Write safer data changes with INSERT, UPDATE, DELETE, and RETURNING.',
    moduleTitle: 'Module 2 · Querying and writing data',
    intro: 'This lesson covers write operations that change real state and shows how RETURNING improves visibility.',
    learningPoints: [
      'Insert new rows with required columns only.',
      'Update and delete rows with explicit WHERE scope.',
      'Use RETURNING to verify changed data immediately.',
    ],
    lessonNotes: [
      'Write operations are where data risk appears, so conditions and scope checks are critical.',
      'RETURNING lets you get changed values back without a second query, which improves correctness and workflow speed.',
      'A safe write habit is: preview target rows, perform the change, inspect returned data.',
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
      'Insert one sample row and return the generated values you need.',
      'Run an UPDATE with a strict WHERE clause and inspect RETURNING output.',
      'Write down the risk of DELETE without WHERE in production data.',
    ],
    reasons: [
      'Production incidents often come from unsafe update or delete behavior.',
      'RETURNING reduces mismatch risk between write and follow-up reads.',
    ],
    mistakes: [
      'Running UPDATE statements without previewing affected rows first.',
      'Ignoring RETURNING and doing extra queries with stale assumptions.',
    ],
    takeaways: [
      'Safe write discipline matters more than fast typing speed.',
      'RETURNING is one of PostgreSQL’s most practical day-to-day features.',
    ],
    references: [
      { label: 'PostgreSQL Docs · INSERT', url: 'https://www.postgresql.org/docs/current/sql-insert.html' },
      { label: 'PostgreSQL Docs · Returning Data from Modified Rows', url: 'https://www.postgresql.org/docs/current/dml-returning.html' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: 'Data types and choosing the right columns',
    summary: 'Choose practical PostgreSQL data types that keep data clean and queries clear.',
    moduleTitle: 'Module 2 · Querying and writing data',
    intro: 'Column type choices affect storage, validation, and query behavior for the lifetime of your project.',
    learningPoints: [
      'Use common PostgreSQL types such as text, integer, boolean, and timestamptz.',
      'Choose numeric and date-time types based on real business rules.',
      'Avoid over-generic column design that hides data intent.',
    ],
    lessonNotes: [
      'Types are part of data validation and communication, not just storage format.',
      'A good type choice makes invalid states harder and query conditions easier to reason about.',
      'Design for clarity first: pick the narrowest practical type that matches business meaning.',
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
      'Map five app fields to explicit PostgreSQL types and explain each choice.',
      'Refactor one vague TEXT column into a more meaningful type.',
      'Review timestamp fields and decide whether timezone-aware values are needed.',
    ],
    reasons: [
      'Type mistakes cause downstream bugs in validation and reporting.',
      'Good type design improves both readability and data quality.',
    ],
    mistakes: [
      'Using TEXT for nearly every column regardless of meaning.',
      'Choosing numeric precision without understanding money or measurement requirements.',
    ],
    takeaways: [
      'Column types are long-term design decisions, not minor details.',
      'Right-sized types reduce ambiguity and protect data quality.',
    ],
    references: [
      { label: 'PostgreSQL Docs · Data Types', url: 'https://www.postgresql.org/docs/current/datatype.html' },
      { label: 'PostgreSQL Docs · Numeric Types', url: 'https://www.postgresql.org/docs/current/datatype-numeric.html' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: 'Primary keys, unique constraints, and not null rules',
    summary: 'Use primary keys, unique constraints, and NOT NULL rules to protect core data quality.',
    moduleTitle: 'Module 3 · Relationships and data integrity',
    intro: 'Constraints are one of the strongest ways to enforce correctness directly in the database layer.',
    learningPoints: [
      'Apply primary keys to uniquely identify each row.',
      'Use UNIQUE constraints for values that must not duplicate.',
      'Use NOT NULL to block incomplete records at write time.',
    ],
    lessonNotes: [
      'Constraints encode business rules close to the data so every client follows the same rules.',
      'Primary key, UNIQUE, and NOT NULL often form the first integrity layer in almost every table.',
      'Clear constraints reduce reliance on fragile application-only checks.',
    ],
    exampleLanguage: 'sql',
    exampleCode: `CREATE TABLE learning.users (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL
);`,
    practice: [
      'Add NOT NULL to fields that must always exist in user-facing features.',
      'Pick one column that should be UNIQUE and justify it.',
      'Attempt an invalid insert to observe constraint protection behavior.',
    ],
    reasons: [
      'Integrity rules are more reliable when enforced at the data layer.',
      'Constraint errors are easier to debug than silent inconsistent data.',
    ],
    mistakes: [
      'Keeping constraints loose and hoping application code handles everything.',
      'Adding UNIQUE to columns that are not truly unique domain keys.',
    ],
    takeaways: [
      'Constraints are part of schema design, not optional polish.',
      'Primary key + UNIQUE + NOT NULL gives strong baseline protection.',
    ],
    references: [
      { label: 'PostgreSQL Docs · Constraints', url: 'https://www.postgresql.org/docs/current/ddl-constraints.html' },
      { label: 'PostgreSQL Docs · CREATE TABLE', url: 'https://www.postgresql.org/docs/current/sql-createtable.html' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: 'Foreign keys and relational integrity',
    summary: 'Connect tables with foreign keys and enforce consistent relationships.',
    moduleTitle: 'Module 3 · Relationships and data integrity',
    intro: 'Foreign keys make relationships enforceable, preventing orphaned or invalid linked records.',
    learningPoints: [
      'Define foreign keys to connect parent and child tables safely.',
      'Understand insert and delete behavior under foreign key constraints.',
      'Model one-to-many relationships with clear ownership boundaries.',
    ],
    lessonNotes: [
      'Foreign keys protect relational integrity by requiring referenced rows to exist.',
      'Constraint behavior during delete or update should match product expectations, not default assumptions.',
      'Strong foreign key design makes joins more trustworthy and maintenance simpler.',
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
      'Create one parent table and one child table connected by a foreign key.',
      'Test what happens when inserting a child row with a missing parent ID.',
      'Review whether delete behavior should restrict, cascade, or be handled manually.',
    ],
    reasons: [
      'Broken relationships are a common source of reporting and API inconsistencies.',
      'Foreign keys provide reliable integrity rules shared across all app clients.',
    ],
    mistakes: [
      'Skipping foreign keys to move faster and creating cleanup work later.',
      'Using cascade behavior without reviewing business impact.',
    ],
    takeaways: [
      'Foreign keys are foundational for dependable relational data.',
      'Relationship behavior should be an intentional schema decision.',
    ],
    references: [
      { label: 'PostgreSQL Docs · Constraints', url: 'https://www.postgresql.org/docs/current/ddl-constraints.html' },
      { label: 'PostgreSQL Docs · CREATE TABLE', url: 'https://www.postgresql.org/docs/current/sql-createtable.html' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'JOINs and multi-table querying',
    summary: 'Query across related tables using common join patterns and clear join conditions.',
    moduleTitle: 'Module 3 · Relationships and data integrity',
    intro: 'Joins connect normalized tables into useful answers for user features and admin reporting.',
    learningPoints: [
      'Use INNER JOIN and LEFT JOIN based on expected result completeness.',
      'Write explicit join conditions to avoid accidental row multiplication.',
      'Read multi-table query output with confidence.',
    ],
    lessonNotes: [
      'JOIN syntax is straightforward, but result interpretation depends on relationship cardinality and filter placement.',
      'LEFT JOIN is useful when you want to preserve rows even when optional relations are missing.',
      'Clear aliases and selected columns make multi-table SQL easier to review and maintain.',
    ],
    exampleLanguage: 'sql',
    exampleCode: `SELECT c.title AS course_title, l.title AS lesson_title
FROM learning.courses c
LEFT JOIN learning.lessons l ON l.course_id = c.id
ORDER BY c.id, l.id;`,
    practice: [
      'Write one INNER JOIN query and one LEFT JOIN query for the same tables.',
      'Check row counts to verify the query matches expected relationship behavior.',
      'Refactor a hard-to-read join query with clear table aliases and selected columns.',
    ],
    reasons: [
      'Most useful relational reporting requires combining multiple tables.',
      'Join mistakes can produce silently incorrect business data.',
    ],
    mistakes: [
      'Joining tables without explicit ON conditions tied to keys.',
      'Filtering on the wrong side of a LEFT JOIN and unintentionally dropping rows.',
    ],
    takeaways: [
      'Join choice changes result semantics, not just syntax.',
      'Readable join SQL is a core professional database skill.',
    ],
    references: [
      { label: 'PostgreSQL Docs · Joins Between Tables', url: 'https://www.postgresql.org/docs/current/tutorial-join.html' },
      { label: 'PostgreSQL Docs · Table Expressions', url: 'https://www.postgresql.org/docs/current/queries-table-expressions.html' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'Grouping, aggregation, and HAVING',
    summary: 'Summarize data with GROUP BY, aggregate functions, and HAVING filters.',
    moduleTitle: 'Module 3 · Relationships and data integrity',
    intro: 'This lesson moves from row-level inspection to grouped summaries used in metrics and reports.',
    learningPoints: [
      'Group rows meaningfully with GROUP BY.',
      'Use COUNT, SUM, AVG, and other aggregate functions correctly.',
      'Filter grouped results with HAVING conditions.',
    ],
    lessonNotes: [
      'Aggregation lets you answer questions like totals by category, average scores by course, or active users by month.',
      'HAVING is applied after grouping and is useful for rules on grouped values.',
      'Clear grouped queries are essential for dashboards and admin analytics.',
    ],
    exampleLanguage: 'sql',
    exampleCode: `SELECT course_id, COUNT(*) AS lesson_count
FROM learning.lessons
GROUP BY course_id
HAVING COUNT(*) >= 5
ORDER BY lesson_count DESC;`,
    practice: [
      'Create one grouped report with COUNT and one with AVG.',
      'Add HAVING to keep only groups that pass a threshold.',
      'Explain why a WHERE clause cannot replace HAVING in the same case.',
    ],
    reasons: [
      'Summary data powers product decisions and operational visibility.',
      'Understanding aggregation prevents many reporting bugs.',
    ],
    mistakes: [
      'Selecting non-grouped columns without valid aggregation logic.',
      'Confusing WHERE filtering with HAVING filtering.',
    ],
    takeaways: [
      'GROUP BY and aggregates are the base of practical analytics SQL.',
      'HAVING is for grouped-result filtering after aggregation.',
    ],
    references: [
      { label: 'PostgreSQL Docs · Aggregate Functions', url: 'https://www.postgresql.org/docs/current/functions-aggregate.html' },
      { label: 'PostgreSQL Docs · Aggregate Functions Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial-agg.html' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: 'Transactions with BEGIN, COMMIT, and ROLLBACK',
    summary: 'Keep multi-step changes consistent with BEGIN, COMMIT, and ROLLBACK.',
    moduleTitle: 'Module 4 · Transactions and performance',
    intro: 'Transactions protect consistency when multiple writes must succeed or fail together.',
    learningPoints: [
      'Start and end explicit transactions with BEGIN and COMMIT.',
      'Use ROLLBACK to recover from errors safely.',
      'Identify operations that should be grouped into one unit of work.',
    ],
    lessonNotes: [
      'A transaction ensures related updates are treated as one atomic unit.',
      'Without transactions, partial writes can leave domain data inconsistent when failures happen midway.',
      'Good transaction boundaries follow business operations, not random SQL statement grouping.',
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
      'Write one transaction for a two-step balance transfer scenario.',
      'Simulate an error and verify that ROLLBACK keeps data unchanged.',
      'Document why each statement belongs in the same transaction boundary.',
    ],
    reasons: [
      'Consistency errors are expensive and difficult to repair later.',
      'Transaction literacy is required for trustworthy write-heavy features.',
    ],
    mistakes: [
      'Running dependent writes as separate statements without transaction control.',
      'Keeping long transactions open while doing unrelated work.',
    ],
    takeaways: [
      'Transactions protect multi-step write consistency.',
      'BEGIN/COMMIT/ROLLBACK should map to real business operations.',
    ],
    references: [
      { label: 'PostgreSQL Docs · Transactions Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial-transactions.html' },
      { label: 'PostgreSQL Docs · BEGIN', url: 'https://www.postgresql.org/docs/current/sql-begin.html' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'Indexes and when they help',
    summary: 'Understand when indexes speed up reads and when they add unnecessary write cost.',
    moduleTitle: 'Module 4 · Transactions and performance',
    intro: 'Indexes are powerful, but useful indexing starts from query patterns rather than guesswork.',
    learningPoints: [
      'Understand what an index changes in data lookup behavior.',
      'Choose index candidates based on filters, joins, and sort patterns.',
      'Recognize that indexes also increase write and storage overhead.',
    ],
    lessonNotes: [
      'Indexes help the planner avoid full scans when matching conditions are selective enough.',
      'The best index is usually tied to recurring query paths, not every column in a table.',
      'Practical indexing means balancing read speed improvements against write cost and complexity.',
    ],
    exampleLanguage: 'sql',
    exampleCode: `CREATE INDEX idx_lessons_course_id
ON learning.lessons (course_id);

SELECT *
FROM learning.lessons
WHERE course_id = 42;`,
    practice: [
      'Choose one frequent query and design an index that supports it.',
      'Compare behavior before and after adding the index using EXPLAIN.',
      'List one column that should not be indexed in your current schema and explain why.',
    ],
    reasons: [
      'Index decisions strongly affect performance as data grows.',
      'Intentional indexing prevents random optimization churn.',
    ],
    mistakes: [
      'Adding indexes preemptively without measuring real query patterns.',
      'Ignoring write-cost impact in insert-heavy tables.',
    ],
    takeaways: [
      'Indexes are query-path tools, not automatic performance fixes.',
      'Measure and reason before adding or removing indexes.',
    ],
    references: [
      { label: 'PostgreSQL Docs · Indexes', url: 'https://www.postgresql.org/docs/current/indexes.html' },
      { label: 'PostgreSQL Docs · CREATE INDEX', url: 'https://www.postgresql.org/docs/current/sql-createindex.html' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: 'Reading query plans with EXPLAIN',
    summary: 'Read EXPLAIN output to understand why a query is fast or slow.',
    moduleTitle: 'Module 4 · Transactions and performance',
    intro: 'Query plans turn performance from guessing into evidence-based analysis.',
    learningPoints: [
      'Run EXPLAIN and identify the major plan nodes.',
      'Understand differences between sequential scan and index scan at a high level.',
      'Use plans to guide practical tuning decisions.',
    ],
    lessonNotes: [
      'EXPLAIN shows how PostgreSQL intends to execute a query, including scan choices and estimated costs.',
      'You do not need deep planner internals to get value; even basic node reading improves decisions.',
      'Plan reading works best when paired with real query patterns and realistic data volume.',
    ],
    exampleLanguage: 'sql',
    exampleCode: `EXPLAIN
SELECT *
FROM learning.lessons
WHERE course_id = 42
ORDER BY id DESC
LIMIT 20;`,
    practice: [
      'Run EXPLAIN on one frequently used query and summarize the plan in plain language.',
      'Add an index candidate and compare the before/after plan shape.',
      'Write one tuning decision that you would keep and one you would reject.',
    ],
    reasons: [
      'Performance tuning without plan evidence often leads to wasted effort.',
      'Plan literacy improves communication between developers and reviewers.',
    ],
    mistakes: [
      'Treating EXPLAIN output as unreadable noise and skipping analysis.',
      'Optimizing based on assumptions from tiny local datasets only.',
    ],
    takeaways: [
      'EXPLAIN gives a concrete view of query execution strategy.',
      'Basic plan reading is enough to make better indexing and query decisions.',
    ],
    references: [
      { label: 'PostgreSQL Docs · Using EXPLAIN', url: 'https://www.postgresql.org/docs/current/using-explain.html' },
      { label: 'PostgreSQL Docs · EXPLAIN', url: 'https://www.postgresql.org/docs/current/sql-explain.html' },
    ],
  },
  {
    lesson: 14,
    slug: 'lesson-14',
    title: 'Build a small PostgreSQL-backed app schema',
    summary: 'Design a small app-ready PostgreSQL schema with constraints and query needs in mind.',
    moduleTitle: 'Module 5 · Practical delivery',
    intro: 'This capstone lesson combines structure, constraints, query patterns, and performance basics into one coherent mini design.',
    learningPoints: [
      'Design a small relational schema for a realistic app feature set.',
      'Apply keys, constraints, and indexes with clear intent.',
      'Validate that core read and write queries are supported cleanly.',
    ],
    lessonNotes: [
      'A useful schema is not measured by table count but by clarity, consistency, and query support.',
      'Capstone work should include both structure and workflow: create tables, seed data, and run representative queries.',
      'The final goal is confidence that your PostgreSQL design can support a small production-style feature safely.',
    ],
    exampleLanguage: 'text',
    exampleCode: `Mini app schema: course notes platform
  users
  courses
  notes
  enrollments

Checklist
  - PK + FK constraints added
  - UNIQUE and NOT NULL rules added
  - 2-3 common queries validated with EXPLAIN`,
    practice: [
      'Create tables for one small app domain and seed sample data.',
      'Write at least three representative queries your app requires.',
      'Review and adjust one constraint or index after running EXPLAIN.',
    ],
    reasons: [
      'Integration work is where isolated SQL skills become practical engineering ability.',
      'A complete mini schema reveals design gaps faster than disconnected snippets.',
    ],
    mistakes: [
      'Adding tables without validating real query paths.',
      'Treating constraints and indexes as optional finishing steps.',
    ],
    takeaways: [
      'A small, coherent schema is the best proof of PostgreSQL fundamentals.',
      'Practical delivery means design + validation, not schema design alone.',
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
