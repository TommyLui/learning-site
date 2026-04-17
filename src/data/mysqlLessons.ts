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
    title: 'What a relational database is',
    summary: 'Learn tables, rows, columns, and why relational structure matters.',
    moduleTitle: 'Module 1 · Query basics',
    intro: 'This lesson builds the most basic database mental model first: data is not stored as one giant pile, but in structured tables.',
    learningPoints: [
      'Understand the basic ideas of tables, rows, and columns.',
      'Know why relational databases are well suited to structured data.',
      'Translate everyday data problems into table-based thinking.',
    ],
    lessonNotes: [
      'A relational database stores data in table form. Each row represents one record, and each column represents one attribute of that record.',
      'What matters is not that the table looks like a spreadsheet. What matters is that the data has a consistent structure, which makes querying, sorting, relationships, and constraints manageable.',
      'When you start thinking about members, orders, courses, and payments as tables, you begin to understand why databases are a foundation of backend systems.',
    ],
    exampleLanguage: 'sql',
    exampleCode: "CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(255)\n);\n\nINSERT INTO users (id, name, email)\nVALUES (1, 'Tommy', 'tommy@example.com');",
    practice: [
      'Take a simple system such as a library or course platform and break it into 3 to 5 tables.',
      'Explain what each column in each table represents.',
      'Write down the most important primary key for every table.',
    ],
    reasons: [
      'If you do not understand table structure first, later SQL and joins will feel like isolated syntax rules.',
      'The core of database design is the data model, not a single SQL statement.',
    ],
    mistakes: [
      'Treating a relational database as a black box that merely stores data.',
      'Looking only at column names without thinking about the real entity each table represents.',
    ],
    takeaways: [
      'The core of a database is a structured data model with relationships.',
      'Tables, rows, and columns are the base language for everything you do with SQL later.',
    ],
    references: [
      { label: 'MySQL docs · Tutorial', url: 'https://dev.mysql.com/doc/refman/8.4/en/tutorial.html' },
      { label: 'MySQL docs · Data types', url: 'https://dev.mysql.com/doc/refman/8.4/en/data-types.html' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'SELECT, WHERE, and ORDER BY',
    summary: 'Filter and sort data using the most common query patterns.',
    moduleTitle: 'Module 1 · Query basics',
    intro: 'Querying is the most common way you interact with a database, and `SELECT`, `WHERE`, and `ORDER BY` are the core building blocks.',
    learningPoints: [
      'Use `SELECT` to return the fields you need.',
      'Understand how `WHERE` filters records.',
      'Sort results with `ORDER BY`.',
    ],
    lessonNotes: [
      '`SELECT` decides which columns you want to see, `WHERE` decides which rows should stay, and `ORDER BY` decides how the result should be sorted.',
      'These clauses often appear together because real queries rarely mean fetching an entire table unchanged.',
      'The important thing is to think through the data question first: who are you looking for, what conditions apply, and in what order should the result appear?',
    ],
    exampleLanguage: 'sql',
    exampleCode: "SELECT name, email\nFROM users\nWHERE name LIKE 'T%'\nORDER BY name ASC;",
    practice: [
      'Write a query that filters products with a price above a chosen value.',
      'Sort the results from newest to oldest by created time.',
      'Return only the columns you truly need instead of using `SELECT *`.',
    ],
    reasons: [
      'Most database work begins with queries.',
      'If your query basics are weak, joins and subqueries become much harder later.',
    ],
    mistakes: [
      'Using `SELECT *` by habit without controlling which columns are returned.',
      'Mixing up filtering logic and sorting logic so the query intent becomes unclear.',
    ],
    takeaways: [
      'Think about the data need first, then write the syntax.',
      '`SELECT`, `WHERE`, and `ORDER BY` are the most common SQL combination and worth mastering.',
    ],
    references: [
      { label: 'MySQL docs · SELECT statement', url: 'https://dev.mysql.com/doc/refman/8.4/en/select.html' },
      { label: 'MySQL docs · Pattern matching', url: 'https://dev.mysql.com/doc/refman/8.4/en/pattern-matching.html' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: 'INSERT, UPDATE, and DELETE',
    summary: 'Modify data safely and understand how write operations affect tables.',
    moduleTitle: 'Module 1 · Query basics',
    intro: 'This lesson moves from reading data to changing it, which is where a database starts affecting the real state of a system.',
    learningPoints: [
      'Understand what `INSERT`, `UPDATE`, and `DELETE` are for.',
      'Check conditions carefully before modifying data.',
      'Build a healthy caution around write operations.',
    ],
    lessonNotes: [
      '`INSERT` adds data, `UPDATE` changes existing data, and `DELETE` removes data. These commands look simple, but they directly change data state, so the risk is higher.',
      'In particular, `UPDATE` and `DELETE` without a `WHERE` clause can affect an entire table at once.',
      'That is why good write habits start with knowing the data scope, confirming the condition, and often previewing the affected rows with `SELECT` first.',
    ],
    exampleLanguage: 'sql',
    exampleCode: "INSERT INTO users (id, name, email)\nVALUES (2, 'Amy', 'amy@example.com');\n\nUPDATE users\nSET email = 'amy.liu@example.com'\nWHERE id = 2;\n\nDELETE FROM users\nWHERE id = 2;",
    practice: [
      'Insert a sample record into a test table.',
      'Use `SELECT` to confirm the target rows before running an `UPDATE`.',
      'Write down the risk of running `UPDATE` or `DELETE` without `WHERE`.',
    ],
    reasons: [
      'In real systems, many serious data problems happen during writes and updates.',
      'The earlier you build safe habits, the less likely you are to cause trouble in practice.',
    ],
    mistakes: [
      'Running `UPDATE` immediately without checking the affected data first.',
      'Using completely different SQL safety habits in testing and production.',
    ],
    takeaways: [
      'Changing data requires more discipline than reading data.',
      'With `UPDATE` and `DELETE`, `WHERE` is almost always the first thing to pay attention to.',
    ],
    references: [
      { label: 'MySQL docs · INSERT statement', url: 'https://dev.mysql.com/doc/refman/8.4/en/insert.html' },
      { label: 'MySQL docs · UPDATE statement', url: 'https://dev.mysql.com/doc/refman/8.4/en/update.html' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'Understanding INNER JOIN and LEFT JOIN',
    summary: 'Combine related rows across tables and understand the difference between common join types.',
    moduleTitle: 'Module 2 · Relationships and joins',
    intro: 'Joins are where relational databases show the real value of relationships, because they let you assemble meaningful information from multiple tables.',
    learningPoints: [
      'Understand the purpose of a join.',
      'Know the difference between `INNER JOIN` and `LEFT JOIN`.',
      'Read how multi-table data connects together.',
    ],
    lessonNotes: [
      'A join means connecting data from multiple tables according to a shared relationship.',
      '`INNER JOIN` keeps only rows that match on both sides, while `LEFT JOIN` keeps all rows from the left table even if the right side has no match.',
      'This is not just a syntax choice. It reflects how you think about data completeness and business needs: do you want only matched data, or do you also want unmatched records preserved?',
    ],
    exampleLanguage: 'sql',
    exampleCode: "SELECT u.name, o.order_number\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nORDER BY u.name;",
    practice: [
      'Create simplified versions of `users` and `orders` tables.',
      'Write one `INNER JOIN` and one `LEFT JOIN` and compare the results.',
      'Decide which join is better for showing members who have not placed any order yet.',
    ],
    reasons: [
      'Most real business data is spread across multiple tables, not stored in just one.',
      'Without joins, it is hard to use the real power of a relational database.',
    ],
    mistakes: [
      'Memorizing join syntax without understanding why the result set looks the way it does.',
      'Writing the wrong join condition and causing duplicated or mismatched data.',
    ],
    takeaways: [
      'The point of a join is the data relationship, not just the syntax.',
      'The choice between `INNER JOIN` and `LEFT JOIN` changes what data you actually see.',
    ],
    references: [
      { label: 'MySQL docs · JOIN clause', url: 'https://dev.mysql.com/doc/refman/8.4/en/join.html' },
      { label: 'MySQL docs · Example foreign keys', url: 'https://dev.mysql.com/doc/refman/8.4/en/create-table-foreign-keys.html' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: 'Primary keys and foreign keys',
    summary: 'Use keys to enforce relationships and protect data integrity.',
    moduleTitle: 'Module 2 · Relationships and joins',
    intro: 'A relational database is not called relational simply because it has many tables. It is relational because those tables have clear, enforceable connections.',
    learningPoints: [
      'Understand the roles of primary keys and foreign keys.',
      'See how keys help create data relationships.',
      'Recognize why data integrity matters in design.',
    ],
    lessonNotes: [
      'A primary key uniquely identifies each row, while a foreign key shows that a row in one table refers to a row in another table.',
      'These keys are not only useful for joins. Their deeper value is preserving data integrity so you do not end up with orders that reference no user or comments that reference no course.',
      'When key design is clear, your control over the data model becomes much stronger.',
    ],
    exampleLanguage: 'sql',
    exampleCode: "CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100)\n);\n\nCREATE TABLE orders (\n  id INT PRIMARY KEY,\n  user_id INT,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n);",
    practice: [
      'Design two tables with a parent-child relationship.',
      'Mark where the primary key and foreign key should live.',
      'Think about what problems appear if you skip the foreign key.',
    ],
    reasons: [
      'Data integrity is not optional. It directly affects how trustworthy the system is.',
      'Without keys, joins and schema design become fragile.',
    ],
    mistakes: [
      'Treating keys as just technical fields instead of as part of the data model core.',
      'Caring only whether data can be queried and ignoring whether it stays consistent.',
    ],
    takeaways: [
      'Primary keys identify rows uniquely, and foreign keys define relationships.',
      'Keys are a foundation for stable relational schemas.',
    ],
    references: [
      { label: 'MySQL docs · Primary keys', url: 'https://dev.mysql.com/doc/refman/8.4/en/constraint-primary-key.html' },
      { label: 'MySQL docs · Foreign keys', url: 'https://dev.mysql.com/doc/refman/8.4/en/create-table-foreign-keys.html' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: 'One-to-many thinking through real examples',
    summary: 'Translate app data into cleaner relational structures.',
    moduleTitle: 'Module 2 · Relationships and joins',
    intro: 'One-to-many relationships are one of the most common patterns in data modeling, and the important skill is translating real-world problems into that structure.',
    learningPoints: [
      'Understand what a one-to-many relationship means in data design.',
      'Translate app domains into tables.',
      'Avoid forcing repeated information into a single table.',
    ],
    lessonNotes: [
      'Members and orders, courses and chapters, articles and comments are all classic one-to-many relationships.',
      'When you can identify these relationships, you are less likely to cram many child records into one row and create a messy schema.',
      'The goal of this lesson is to help you see relationships inside requirement descriptions, not only memorize model names from diagrams.',
    ],
    exampleLanguage: 'text',
    exampleCode: "users\n  id\n  name\n\norders\n  id\n  user_id\n  order_number\n\nOne user -> many orders",
    practice: [
      'Draw the relationship between `users`, `courses`, and `lessons` for a course platform.',
      'Split repeated data out of a single messy table into a cleaner one-to-many design.',
      'Explain why this design is better than one giant table.',
    ],
    reasons: [
      'If you cannot see the relationship clearly, schema design becomes much harder.',
      'One-to-many is the most common data modeling pattern you will meet.',
    ],
    mistakes: [
      'Stuffing multiple child records into one field.',
      'Failing to separate the main entity from the dependent entity.',
    ],
    takeaways: [
      'One-to-many is not an abstract term. It is a practical foundation of real data modeling.',
      'Seeing entities and relationships inside the requirement matters more than memorizing schema vocabulary.',
    ],
    references: [
      { label: 'MySQL docs · CREATE TABLE', url: 'https://dev.mysql.com/doc/refman/8.4/en/create-table.html' },
      { label: 'MySQL docs · InnoDB and foreign keys', url: 'https://dev.mysql.com/doc/refman/8.4/en/innodb-foreign-key-constraints.html' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: 'Normalization and practical schema design',
    summary: 'Reduce duplication while keeping data understandable.',
    moduleTitle: 'Module 3 · Design and performance',
    intro: 'Normalization is not just an exam topic. Its real purpose is reducing duplicate data, lowering update risk, and making a schema more stable.',
    learningPoints: [
      'Understand the core goal of normalization.',
      'Know why duplicated data creates risk.',
      'Make sensible schema splits in real projects.',
    ],
    lessonNotes: [
      'Normalization is a way to think about splitting data so each piece is stored in the most appropriate place only once.',
      'When the same information is scattered across many columns or many tables, updates are easy to miss and inconsistency follows.',
      'In practice, you do not always chase the most theoretical form of normalization. You balance query efficiency, readability, and maintenance cost.',
    ],
    exampleLanguage: 'text',
    exampleCode: "Bad\norders\n  order_id\n  user_name\n  user_email\n\nBetter\nusers\n  id\n  name\n  email\n\norders\n  id\n  user_id",
    practice: [
      'Find a table with lots of duplicated columns and redesign it into a cleaner schema.',
      'Explain which fields stayed in the original table and which were split out.',
      'Consider whether the split changes query complexity.',
    ],
    reasons: [
      'A bad schema makes every future data change more dangerous.',
      'Normalization thinking can significantly improve data design quality.',
    ],
    mistakes: [
      'Memorizing 1NF, 2NF, and 3NF names without being able to improve real data design.',
      'Pursuing theoretical perfection until the schema stops being practical.',
    ],
    takeaways: [
      'Normalization aims to make data more consistent and easier to maintain.',
      'Practical design requires balance between theory and usability.',
    ],
    references: [
      { label: 'MySQL docs · Constraints', url: 'https://dev.mysql.com/doc/refman/8.4/en/constraints.html' },
      { label: 'MySQL docs · Optimization overview', url: 'https://dev.mysql.com/doc/refman/8.4/en/optimization.html' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: 'Indexes and query performance',
    summary: 'Understand why some queries are fast and others are not.',
    moduleTitle: 'Module 3 · Design and performance',
    intro: 'Performance problems are often not about long SQL statements. They appear when the data set grows and the database is searching the wrong way.',
    learningPoints: [
      'Understand what an index does.',
      'Know when adding an index is worth considering.',
      'Build a basic query performance mindset.',
    ],
    lessonNotes: [
      'An index is like the table of contents of a book. It helps the database locate the needed data faster instead of scanning the entire table every time.',
      'But more indexes are not always better, because indexes also increase write cost and maintenance cost.',
      'The important idea is knowing which columns are frequently searched, sorted, or filtered, and understanding why performance changes dramatically when data volume grows.',
    ],
    exampleLanguage: 'sql',
    exampleCode: "CREATE INDEX idx_users_email ON users(email);\n\nEXPLAIN SELECT *\nFROM users\nWHERE email = 'tommy@example.com';",
    practice: [
      'Add an index to a frequently queried column and inspect the difference with `EXPLAIN`.',
      'Compare query plans with and without the index.',
      'Write down which kinds of columns are good index candidates and which may not be.',
    ],
    reasons: [
      'When data grows, performance problems directly affect the product experience.',
      'Indexes are one of the most common and most commonly misused performance tools.',
    ],
    mistakes: [
      'Adding indexes randomly the moment something feels slow.',
      'Trying to optimize without understanding the query pattern first.',
    ],
    takeaways: [
      'The goal of an index is helping the database find data faster.',
      'Before optimizing, understand the query pattern and data size.',
    ],
    references: [
      { label: 'MySQL docs · Optimization and indexes', url: 'https://dev.mysql.com/doc/refman/8.4/en/mysql-indexes.html' },
      { label: 'MySQL docs · EXPLAIN', url: 'https://dev.mysql.com/doc/refman/8.4/en/explain.html' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'Preparing MySQL for application development',
    summary: 'Create a database foundation that works well with backend frameworks.',
    moduleTitle: 'Module 3 · Design and performance',
    intro: 'This lesson pulls MySQL back from isolated syntax practice and into the role it plays inside real application development.',
    learningPoints: [
      'Know how MySQL is commonly used inside backend apps.',
      'Understand how schemas, queries, and indexes support application development together.',
      'Build readiness for connecting a database to a real project.',
    ],
    lessonNotes: [
      'In real applications, MySQL is not only a place to practice SQL. It works together with APIs, ORMs, validation, transactions, and permission control.',
      'That means you need more than query syntax. You need a stable schema, predictable key relationships, suitable indexes, and a structure that an application can connect to cleanly.',
      'The goal here is to combine your data modeling and query knowledge into a database foundation that can actually support a backend project.',
    ],
    exampleLanguage: 'sql',
    exampleCode: "CREATE TABLE courses (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  title VARCHAR(255) NOT NULL,\n  level VARCHAR(50) NOT NULL\n);\n\nCREATE TABLE lessons (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  course_id INT NOT NULL,\n  title VARCHAR(255) NOT NULL,\n  FOREIGN KEY (course_id) REFERENCES courses(id)\n);",
    practice: [
      'Design an initial schema for a simple backend system.',
      'Confirm the keys, relationships, and common query needs for each table.',
      'Imagine connecting this schema to a Spring Boot or Node app and identify what is still missing.',
    ],
    reasons: [
      'A database is supposed to serve an application, not stay trapped at textbook level.',
      'Learning becomes practical only when data design connects to app development.',
    ],
    mistakes: [
      'Thinking only about whether one SQL statement is correct and ignoring whether the overall schema connects well to an app.',
      'Designing tables before thinking about likely query patterns.',
    ],
    takeaways: [
      'Useful MySQL skill means thinking about schema, queries, and application needs together.',
      'Database design should serve a real system, not remain an isolated example.',
    ],
    references: [
      { label: 'MySQL docs · CREATE DATABASE', url: 'https://dev.mysql.com/doc/refman/8.4/en/create-database.html' },
      { label: 'MySQL docs · Table design guidelines', url: 'https://dev.mysql.com/doc/refman/8.4/en/storage-requirements.html' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'GROUP BY and aggregate functions',
    summary: 'Summarize data with COUNT, SUM, AVG, and grouped results.',
    moduleTitle: 'Module 4 · Aggregation and advanced querying',
    intro: 'This lesson takes querying beyond individual rows and into summarizing larger sets of data, which is the basis of reporting and analysis queries.',
    learningPoints: [
      'Understand the purpose of `GROUP BY`.',
      'Use aggregate functions such as `COUNT`, `SUM`, and `AVG`.',
      'Answer more business-like questions with grouped results.',
    ],
    lessonNotes: [
      'When you no longer want to inspect each row individually and instead want to know totals, averages, or grouped counts, you are entering the world of aggregation.',
      '`GROUP BY` groups rows by a chosen column, and aggregate functions calculate summary values for each group.',
      'The core of this lesson is moving from detailed queries to summary queries so you can answer questions that look more like reporting and analysis.',
    ],
    exampleLanguage: 'sql',
    exampleCode: "SELECT level, COUNT(*) AS total_courses\nFROM courses\nGROUP BY level\nORDER BY total_courses DESC;",
    practice: [
      'Calculate how many records belong to each category.',
      'Use `AVG` or `SUM` to build a simple report.',
      'Compare a query without `GROUP BY` to one that uses it.',
    ],
    reasons: [
      'Many real-world queries are about summaries, not raw rows.',
      'Aggregation is a major step from CRUD thinking toward analytical thinking.',
    ],
    mistakes: [
      'Using `GROUP BY` but still trying to select columns that should not appear directly.',
      'Not realizing that the real need is summary data rather than detailed data.',
    ],
    takeaways: [
      '`GROUP BY` lifts row-level data into summarized results.',
      'Aggregate functions are the basis for answering questions like "how many" and "what is the average."',
    ],
    references: [
      { label: 'MySQL docs · GROUP BY', url: 'https://dev.mysql.com/doc/refman/8.4/en/group-by-handling.html' },
      { label: 'MySQL docs · Aggregate functions', url: 'https://dev.mysql.com/doc/refman/8.4/en/aggregate-functions.html' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: 'Subqueries and derived tables',
    summary: 'Break bigger query problems into smaller steps with nested queries.',
    moduleTitle: 'Module 4 · Aggregation and advanced querying',
    intro: 'Some query problems become messy when written in one shot. A subquery helps you split them into clearer intermediate steps.',
    learningPoints: [
      'Understand the basic purpose of a subquery.',
      'Know when a nested query improves clarity.',
      'Read the structure of derived tables more confidently.',
    ],
    lessonNotes: [
      'A subquery means using a smaller query to produce an intermediate result, then feeding that result into a larger query.',
      'This approach is helpful for dependent conditions, ranking logic, or flows where filtering needs to happen before aggregation.',
      'A subquery is not always the fastest solution, but it often helps you break a large problem into smaller reasoning steps.',
    ],
    exampleLanguage: 'sql',
    exampleCode: "SELECT title\nFROM courses\nWHERE id IN (\n  SELECT course_id\n  FROM lessons\n  GROUP BY course_id\n  HAVING COUNT(*) >= 5\n);",
    practice: [
      'Write a subquery that filters a condition first and then uses an outer query to return the final data.',
      'Take one long SQL statement and try rewriting it as a clearer two-layer structure.',
      'Compare the readability of a subquery version and a join version.',
    ],
    reasons: [
      'Advanced queries often need intermediate steps.',
      'A well-split query is usually easier to maintain than one giant statement.',
    ],
    mistakes: [
      'Rejecting subqueries on sight instead of judging readability first.',
      'Nesting too deeply and making the query harder to understand.',
    ],
    takeaways: [
      'Subqueries are an important tool for breaking down complex queries.',
      'Readability is still a key standard for advanced SQL design.',
    ],
    references: [
      { label: 'MySQL docs · Subqueries', url: 'https://dev.mysql.com/doc/refman/8.4/en/subqueries.html' },
      { label: 'MySQL docs · Derived tables', url: 'https://dev.mysql.com/doc/refman/8.4/en/derived-tables.html' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'Transactions and ACID basics',
    summary: 'Understand how grouped operations stay safe and consistent.',
    moduleTitle: 'Module 5 · Transactions and practical operations',
    intro: 'When a group of operations must either all succeed or all fail together, a transaction becomes the core tool for protecting consistency.',
    learningPoints: [
      'Understand the basic idea of a transaction.',
      'Know what ACID stands for.',
      'Recognize which situations need transactional protection.',
    ],
    lessonNotes: [
      'A transaction treats multiple operations as one unit of work so you do not leave the data half-updated when something fails midway.',
      'ACID describes the reliability properties that this group of operations should have at the database level.',
      'Transfers, inventory deduction, and order creation are common examples where missing transaction boundaries can leave data in an inconsistent state.',
    ],
    exampleLanguage: 'sql',
    exampleCode: "START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;",
    practice: [
      'Find a situation that requires multiple data updates and decide whether it needs a transaction.',
      'Write the smallest transaction flow you can.',
      'Think through what goes wrong if one step fails in the middle.',
    ],
    reasons: [
      'Correct data matters more than elegant-looking queries.',
      'Real systems almost always face scenarios where consistency must be guaranteed.',
    ],
    mistakes: [
      'Splitting a multi-step update into separate operations without protecting consistency.',
      'Knowing the word ACID without knowing when it matters in a real system.',
    ],
    takeaways: [
      'The purpose of a transaction is protecting consistency across a group of operations.',
      'ACID is the basic language for understanding data reliability.',
    ],
    references: [
      { label: 'MySQL docs · START TRANSACTION', url: 'https://dev.mysql.com/doc/refman/8.4/en/commit.html' },
      { label: 'MySQL docs · InnoDB transaction model', url: 'https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-model.html' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: 'Backup, import, and export workflows',
    summary: 'Handle common operational tasks for moving and protecting MySQL data.',
    moduleTitle: 'Module 5 · Transactions and practical operations',
    intro: 'A database is not something you only query. You also need to protect it, move it, and restore it. Those operational skills strongly affect system safety.',
    learningPoints: [
      'Understand the purpose of backup, import, and export.',
      'Know when dumping or restoring data is needed.',
      'Build the basics of data protection and migration thinking.',
    ],
    lessonNotes: [
      'Backups are not something you remember only after disaster strikes. They are basic insurance for any data system.',
      'Import and export workflows also appear often in environment migration, test data setup, and schema synchronization.',
      'The goal of this lesson is building an operational mindset: data should not only be queryable, but also safely stored and movable.',
    ],
    exampleLanguage: 'bash',
    exampleCode: "mysqldump -u root -p learning_site > learning_site.sql\nmysql -u root -p learning_site < learning_site.sql",
    practice: [
      'Create one dump of a test database.',
      'Restore that dump into another test database.',
      'Write down the three things that matter most during backup work.',
    ],
    reasons: [
      'A data system without a backup strategy carries serious risk.',
      'Data migration and restoration are common skills in both development and operations.',
    ],
    mistakes: [
      'Assuming data is automatically safe just because it exists in a database.',
      'Failing to test the restore workflow in a non-production environment first.',
    ],
    takeaways: [
      'Backup and restore are the minimum baseline for data reliability.',
      'Import and export are practical skills that show up regularly in real environments.',
    ],
    references: [
      { label: 'MySQL docs · mysqldump', url: 'https://dev.mysql.com/doc/refman/8.4/en/mysqldump.html' },
      { label: 'MySQL docs · mysql client', url: 'https://dev.mysql.com/doc/refman/8.4/en/mysql.html' },
    ],
  },
  {
    lesson: 14,
    slug: 'lesson-14',
    title: 'User permissions and production basics',
    summary: 'Prepare MySQL for safer team usage and production-style environments.',
    moduleTitle: 'Module 5 · Transactions and practical operations',
    intro: 'The final lesson moves MySQL closer to a production mindset: who can do what, how environments are separated, and how data stays protected.',
    learningPoints: [
      'Understand why user permissions matter.',
      'Know why development and production should be treated differently.',
      'Build a basic production safety mindset.',
    ],
    lessonNotes: [
      'Not every person or application should have every database privilege. Permission design is part of data security itself.',
      'Production environments need stricter thinking around permissions, backups, change management, and monitoring.',
      'The goal is not to turn you into a DBA overnight, but to show that once a database enters a real environment, the way you think about it must mature beyond local practice.',
    ],
    exampleLanguage: 'sql',
    exampleCode: "CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'strong-password';\nGRANT SELECT, INSERT, UPDATE, DELETE ON learning_site.* TO 'app_user'@'localhost';\nFLUSH PRIVILEGES;",
    practice: [
      'Create an application account with only the permissions it truly needs.',
      'List the privileges that should not be granted casually in production.',
      'Imagine handing the database over to a team and write the safety rules you would define first.',
    ],
    reasons: [
      'Database safety depends not only on passwords, but also on least privilege and operational discipline.',
      'Once you reach production, database thinking has to shift from practice mode to risk control mode.',
    ],
    mistakes: [
      'Connecting every application with `root` or another high-privilege account.',
      'Treating production like a local sandbox where anything can be changed casually.',
    ],
    takeaways: [
      'Once a database reaches production, security and permission management become basic skills.',
      'The principle of least privilege is a hard baseline in real environments.',
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
