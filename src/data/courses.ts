export type ModuleLesson = {
  number: string;
  title: string;
  summary: string;
};

export type CourseModule = {
  title: string;
  zhTitle?: string;
  description: string;
  zhDescription?: string;
  lessons: ModuleLesson[];
};

export type Course = {
  slug: 'react' | 'spring-boot' | 'mysql' | 'postgresql' | 'sqlite' | 'go' | 'rust' | 'csharp' | 'nextjs' | 'typescript';
  title: string;
  zhTitle?: string;
  shortLabel: string;
  category: string;
  zhCategory?: string;
  accent: string;
  subtitle: string;
  zhSubtitle?: string;
  overview: string;
  zhOverview?: string;
  level: string;
  zhLevel?: string;
  totalLessons: number;
  focus: string[];
  zhFocus?: string[];
  prerequisites: string[];
  zhPrerequisites?: string[];
  outcomes: string[];
  zhOutcomes?: string[];
  modules: CourseModule[];
};

export type CourseLocale = 'en' | 'zh';

export type RecentLesson = {
  courseSlug: Course['slug'];
  courseTitle: string;
  accent: string;
  number: string;
  title: string;
  summary: string;
  updatedAt: string;
  href: string;
};

export const courses: Course[] = [
  {
    slug: 'react',
    title: 'React',
    shortLabel: 'RE',
    category: 'Frontend development',
    zhCategory: '前端開發',
    accent: '#4BB8D5',
    subtitle: 'Build interfaces with reusable components, hooks, and routing.',
    zhSubtitle: '使用可重用元件、hooks 與 routing 建立介面。',
    overview:
      'This course focuses on modern React fundamentals and the component patterns you need to build maintainable frontend applications.',
    zhOverview: '這套課程聚焦現代 React 基礎與建立可維護前端應用所需的元件模式。',
    level: 'Beginner to intermediate',
    zhLevel: '初階到中階',
    totalLessons: 16,
    focus: ['components', 'state management', 'hooks', 'routing'],
    zhFocus: ['components', 'state 管理', 'hooks', 'routing'],
    prerequisites: ['HTML and CSS basics', 'JavaScript fundamentals', 'ES modules and array methods'],
    zhPrerequisites: ['HTML 與 CSS 基礎', 'JavaScript 基礎', '熟悉 ES modules 與 array methods'],
    outcomes: [
      'Understand component-based UI design',
      'Manage local and shared state cleanly',
      'Build pages with routing and reusable layouts',
    ],
    zhOutcomes: ['理解 component-based UI 設計', '乾淨地管理區域與共享 state', '用 routing 與可重用 layout 建立頁面'],
    modules: [
      {
        title: 'Module 1 · React foundations',
        zhTitle: '模組 1 · React 基礎',
        description: 'Start with JSX, components, props, and the mental model of React rendering.',
        zhDescription: '從 JSX、components、props 與 React render 心智模型開始。',
        lessons: [
          {
            number: 'Lesson 1',
            title: 'What React is and why component thinking matters',
            summary: 'Understand React’s role in frontend development and the benefit of reusable UI building blocks.',
          },
          {
            number: 'Lesson 2',
            title: 'JSX basics and how React renders UI',
            summary: 'Learn how JSX maps to elements and how React updates the interface when data changes.',
          },
          {
            number: 'Lesson 3',
            title: 'Props and component reuse',
            summary: 'Pass data into components and build flexible UI patterns that scale.',
          },
        ],
      },
      {
        title: 'Module 2 · State and hooks',
        zhTitle: '模組 2 · State 與 hooks',
        description: 'Move from static UI to interactive UI with state, events, and hooks.',
        zhDescription: '用 state、events 與 hooks 把靜態 UI 變成交互式 UI。',
        lessons: [
          {
            number: 'Lesson 4',
            title: 'State with useState',
            summary: 'Handle user interaction and update the UI predictably with local state.',
          },
          {
            number: 'Lesson 5',
            title: 'Side effects with useEffect',
            summary: 'Run effects safely and understand dependency arrays and cleanup.',
          },
          {
            number: 'Lesson 6',
            title: 'Lifting state and sharing logic',
            summary: 'Organize state across components and avoid duplication.',
          },
        ],
      },
      {
        title: 'Module 3 · App structure',
        zhTitle: '模組 3 · App 結構',
        description: 'Create larger app flows with routing, layouts, and reusable page patterns.',
        zhDescription: '用 routing、layout 與可重用頁面模式建立更大的 app flow。',
        lessons: [
          {
            number: 'Lesson 7',
            title: 'Client-side routing',
            summary: 'Add page transitions and navigation structure to multi-screen apps.',
          },
          {
            number: 'Lesson 8',
            title: 'Forms and controlled inputs',
            summary: 'Capture user input cleanly and validate common form interactions.',
          },
          {
            number: 'Lesson 9',
            title: 'Project structure for medium-sized apps',
            summary: 'Organize components, hooks, and pages so the code stays readable.',
          },
        ],
      },
      {
        title: 'Module 4 · Data fetching and async UI',
        zhTitle: '模組 4 · Data fetching 與非同步 UI',
        description: 'Load remote data, handle async states, and keep network logic understandable.',
        zhDescription: '載入遠端資料、處理非同步狀態，讓 network logic 保持可理解。',
        lessons: [
          {
            number: 'Lesson 10',
            title: 'Fetching data in React apps',
            summary: 'Load remote data safely and understand where fetching fits in the UI lifecycle.',
          },
          {
            number: 'Lesson 11',
            title: 'Loading, error, and empty states',
            summary: 'Design UI states that make async data feel reliable and clear to users.',
          },
          {
            number: 'Lesson 12',
            title: 'Custom hooks for reusable async logic',
            summary: 'Extract repeated fetching and state patterns into reusable hooks.',
          },
        ],
      },
      {
        title: 'Module 5 · State scaling and performance',
        zhTitle: '模組 5 · 狀態擴展與效能',
        description: 'Organize shared state and optimize rendering when apps start getting larger.',
        zhDescription: '當 app 變大時，整理共享 state 並優化 render。',
        lessons: [
          {
            number: 'Lesson 13',
            title: 'Context for shared application state',
            summary: 'Share state across distant components without threading props through every layer.',
          },
          {
            number: 'Lesson 14',
            title: 'Memoization and rendering performance',
            summary: 'Understand when React rerenders and how to avoid unnecessary work.',
          },
        ],
      },
      {
        title: 'Module 6 · Testing and shipping',
        zhTitle: '模組 6 · 測試與交付',
        description: 'Verify UI behavior and prepare React projects for production deployment.',
        zhDescription: '驗證 UI 行為並為 React 專案準備 production deployment。',
        lessons: [
          {
            number: 'Lesson 15',
            title: 'Testing React components and user flows',
            summary: 'Write practical tests that verify what users can see and do.',
          },
          {
            number: 'Lesson 16',
            title: 'Build and deploy a React application',
            summary: 'Prepare the app for production with a clean build and deployment workflow.',
          },
        ],
      },
    ],
  },
  {
    slug: 'spring-boot',
    title: 'Spring Boot 3.x',
    shortLabel: 'SB3',
    category: 'Backend development',
    zhCategory: '後端開發',
    accent: '#6AA05A',
    subtitle: 'Build backend APIs with Spring Boot 3.x, Java 17+, Spring Data JPA/MySQL, Spring Security 6, and production-ready practices.',
    zhSubtitle: '用 Spring Boot 3.x、Java 17+、Spring Data JPA/MySQL 與 Spring Security 6 建立後端 API。',
    overview:
      'This course follows a Spring Boot 3.x learning path with Java 17+, Jakarta-based APIs, REST design, data access, testing, security, and deployment-focused practices.',
    zhOverview: '這套課程以 Spring Boot 3.x 為主線，串起 Java 17+、Jakarta API、REST 設計、資料存取、測試、安全性與部署實務。',
    level: 'Beginner to intermediate',
    zhLevel: '初階到中階',
    totalLessons: 21,
    focus: ['Java 17+ and Spring Boot 3.x', 'REST APIs', 'Spring Data JPA + MySQL', 'Jakarta validation', 'Spring Security 6'],
    zhFocus: ['Java 17+ 與 Spring Boot 3.x', 'REST API', 'Spring Data JPA + MySQL', 'Jakarta Validation', 'Spring Security 6'],
    prerequisites: ['Java syntax', 'object-oriented programming', 'basic SQL concepts', 'ability to run Java 17+ locally'],
    zhPrerequisites: ['Java 語法', '物件導向程式設計', '基本 SQL 概念', '能在本機執行 Java 17+'],
    outcomes: [
      'Understand the Spring Boot 3.x application model, Java 17+ baseline, and startup flow',
      'Build layered REST APIs with Jakarta validation, testing, and clear boundaries',
      'Connect Spring Boot 3.x to MySQL and secure APIs with modern Spring Security patterns',
    ],
    zhOutcomes: [
      '理解 Spring Boot 3.x 的應用模型、Java 17+ 基線與啟動流程',
      '用 Jakarta Validation、測試與清楚分層建立 REST API',
      '把 Spring Boot 3.x 接上 MySQL，並用現代 Spring Security 模式保護 API',
    ],
    modules: [
      {
        title: 'Module 1 · Spring Boot 3.x introduction and setup',
        zhTitle: '模組 1 · Spring Boot 3.x 入門與建置',
        description: 'Learn what Spring Boot 3.x solves, why Java 17+ matters, and how the application starts.',
        zhDescription: '了解 Spring Boot 3.x 解決什麼問題、為什麼 Java 17+ 重要，以及應用程式如何啟動。',
        lessons: [
          {
            number: 'Lesson 1',
            title: 'What Spring Boot 3.x is and why it matters',
            summary: 'Understand how Spring Boot 3.x simplifies backend development, including its Java 17+ baseline and Jakarta-based ecosystem.',
          },
          {
            number: 'Lesson 2',
            title: 'Create a project with Spring Initializr',
            summary: 'Generate a clean starter project, choose a compatible Java version, and select dependencies deliberately.',
          },
          {
            number: 'Lesson 3',
            title: 'Understand the project structure and startup flow',
            summary: 'Read the generated project, run the app, and understand the role of the main entry class.',
          },
        ],
      },
      {
        title: 'Module 2 · Core concepts in Spring Boot 3.x',
        zhTitle: '模組 2 · Spring Boot 3.x 核心概念',
        description: 'Build a strong mental model for beans, configuration, profiles, and starter-driven auto-configuration.',
        zhDescription: '建立對 beans、設定、profiles 與 starter 驅動自動設定的心智模型。',
        lessons: [
          {
            number: 'Lesson 4',
            title: 'Dependency injection and beans',
            summary: 'Learn how Spring creates and wires application components so code stays modular and testable.',
          },
          {
            number: 'Lesson 5',
            title: 'Configuration files and profiles',
            summary: 'Use configuration properties, environment values, and profiles to manage different runtime setups.',
          },
          {
            number: 'Lesson 6',
            title: 'Auto-configuration in Spring Boot 3.x',
            summary: 'See how conditional auto-configuration and starters reduce boilerplate while still allowing customization.',
          },
        ],
      },
      {
        title: 'Module 3 · Build REST APIs with Spring Boot 3.x',
        zhTitle: '模組 3 · 用 Spring Boot 3.x 建 REST API',
        description: 'Create HTTP endpoints, structure request and response models, and keep the web layer clean.',
        zhDescription: '建立 HTTP endpoints、整理 request/response model，保持 web layer 乾淨。',
        lessons: [
          {
            number: 'Lesson 7',
            title: 'Build your first REST controller',
            summary: 'Create a simple controller and map HTTP requests to backend logic.',
          },
          {
            number: 'Lesson 8',
            title: 'Handle requests, responses, and JSON',
            summary: 'Work with request parameters, request bodies, DTOs, and JSON responses in a consistent way.',
          },
          {
            number: 'Lesson 9',
            title: 'Validation and global exception handling',
            summary: 'Validate input with Jakarta-based APIs, return clearer error messages, and centralize exception handling across the API.',
          },
        ],
      },
      {
        title: 'Module 4 · MySQL and Spring Data JPA',
        zhTitle: '模組 4 · MySQL 與 Spring Data JPA',
        description: 'Connect the app to MySQL and use Jakarta Persistence, Hibernate 6, and Spring Data JPA for CRUD flows.',
        zhDescription: '把 app 接上 MySQL，並用 Jakarta Persistence、Hibernate 6 與 Spring Data JPA 建立 CRUD flow。',
        lessons: [
          {
            number: 'Lesson 10',
            title: 'Connect Spring Boot 3.x to MySQL',
            summary: 'Configure the datasource, MySQL driver, and key JPA settings for reliable relational data access.',
          },
          {
            number: 'Lesson 11',
            title: 'Entities, repositories, and JPA basics',
            summary: 'Map domain objects with Jakarta Persistence annotations and use repositories to query and persist data cleanly.',
          },
          {
            number: 'Lesson 12',
            title: 'Build CRUD APIs with service and repository layers',
            summary: 'Implement common create, read, update, and delete flows with a layered design.',
          },
        ],
      },
      {
        title: 'Module 5 · Testing and debugging',
        zhTitle: '模組 5 · 測試與除錯',
        description: 'Improve reliability with focused tests, integration coverage, and practical debugging habits.',
        zhDescription: '用聚焦測試、整合驗證與實用除錯習慣提升可靠性。',
        lessons: [
          {
            number: 'Lesson 13',
            title: 'Write unit tests for service logic',
            summary: 'Test business rules in isolation with fast feedback and minimal framework overhead.',
          },
          {
            number: 'Lesson 14',
            title: 'Write integration tests for controllers and repositories',
            summary: 'Verify web and persistence behavior with MockMvc, repository tests, and realistic integration coverage.',
          },
          {
            number: 'Lesson 15',
            title: 'Common debugging patterns in Spring Boot applications',
            summary: 'Learn how to inspect logs, trace request flow, and diagnose configuration and data issues.',
          },
        ],
      },
      {
        title: 'Module 6 · Security and authentication',
        zhTitle: '模組 6 · 安全性與驗證',
        description: 'Add authentication and authorization with Spring Security 6 and modern filter-chain configuration.',
        zhDescription: '用 Spring Security 6 與現代 filter-chain 設定加入 authentication / authorization。',
        lessons: [
          {
            number: 'Lesson 16',
            title: 'Spring Security 6 fundamentals',
            summary: 'Understand the security filter chain, authentication, authorization, and SecurityFilterChain-based configuration.',
          },
          {
            number: 'Lesson 17',
            title: 'Login flow, password encoding, and authorization',
            summary: 'Protect endpoints, encode passwords safely, and apply role-based access control with clear authorization rules.',
          },
          {
            number: 'Lesson 18',
            title: 'Session, JWT, and resource-server basics',
            summary: 'Compare session-based auth with JWT-based APIs and understand where resource-server support fits.',
          },
        ],
      },
      {
        title: 'Module 7 · Packaging, monitoring, and deployment',
        zhTitle: '模組 7 · 封裝、監控與部署',
        description: 'Prepare the application for production with executable jars, Actuator, Docker-friendly packaging, and deployment basics.',
        zhDescription: '用 executable jar、Actuator、Docker 友善封裝與部署基礎把 app 準備到 production。',
        lessons: [
          {
            number: 'Lesson 19',
            title: 'Build and package the application',
            summary: 'Build an executable artifact and understand common packaging and container-friendly delivery workflows.',
          },
          {
            number: 'Lesson 20',
            title: 'Use Actuator for health checks and monitoring',
            summary: 'Expose health, info, metrics, and related operational endpoints with Spring Boot Actuator.',
          },
          {
            number: 'Lesson 21',
            title: 'Prepare Spring Boot 3.x for deployment',
            summary: 'Review environment setup, externalized configuration, Docker, and native-image-aware deployment considerations.',
          },
        ],
      },
    ],
  },
  {
    slug: 'mysql',
    title: 'MySQL',
    shortLabel: 'SQL',
    category: 'Database development',
    zhCategory: '資料庫開發',
    accent: '#D08C36',
    subtitle: 'Learn SQL, schema design, joins, and relational database thinking.',
    zhSubtitle: '學習 SQL、schema design、joins 與關聯式資料庫思維。',
    overview:
      'This course teaches MySQL as both a language and a design tool so you can reason about tables, relations, and efficient queries.',
    zhOverview: '這套課程把 MySQL 同時當成查詢語言與設計工具，幫你建立對 tables、relations 與高效率 queries 的理解。',
    level: 'Beginner',
    zhLevel: '初階',
    totalLessons: 14,
    focus: ['SQL basics', 'joins', 'schema design', 'indexing'],
    zhFocus: ['SQL 基礎', 'joins', 'schema 設計', 'indexing'],
    prerequisites: ['Basic programming logic', 'Comfort reading tabular data'],
    zhPrerequisites: ['基本程式邏輯', '能閱讀表格型資料'],
    outcomes: [
      'Write common SELECT, INSERT, UPDATE, and DELETE queries',
      'Understand how joins connect related tables',
      'Design cleaner schemas for application data',
    ],
    zhOutcomes: ['寫出常見的 SELECT、INSERT、UPDATE 與 DELETE 查詢', '理解 joins 如何連接相關資料表', '為應用資料設計更乾淨的 schema'],
    modules: [
      {
        title: 'Module 1 · Query basics',
        zhTitle: '模組 1 · Query 基礎',
        description: 'Start with core SQL commands and how to retrieve data cleanly.',
        zhDescription: '從核心 SQL 指令開始，學會乾淨地取回資料。',
        lessons: [
          {
            number: 'Lesson 1',
            title: 'What a relational database is',
            summary: 'Learn tables, rows, columns, and why relational structure matters.',
          },
          {
            number: 'Lesson 2',
            title: 'SELECT, WHERE, and ORDER BY',
            summary: 'Filter and sort data using the most common query patterns.',
          },
          {
            number: 'Lesson 3',
            title: 'INSERT, UPDATE, and DELETE',
            summary: 'Modify data safely and understand how write operations affect tables.',
          },
        ],
      },
      {
        title: 'Module 2 · Relationships and joins',
        zhTitle: '模組 2 · 關聯與 joins',
        description: 'Use table relationships to answer real questions from connected data.',
        zhDescription: '用資料表之間的關聯回答來自實際資料的問題。',
        lessons: [
          {
            number: 'Lesson 4',
            title: 'Understanding INNER JOIN and LEFT JOIN',
            summary: 'Combine related rows across tables and understand the difference between common join types.',
          },
          {
            number: 'Lesson 5',
            title: 'Primary keys and foreign keys',
            summary: 'Use keys to enforce relationships and protect data integrity.',
          },
          {
            number: 'Lesson 6',
            title: 'One-to-many thinking through real examples',
            summary: 'Translate app data into cleaner relational structures.',
          },
        ],
      },
      {
        title: 'Module 3 · Design and performance',
        zhTitle: '模組 3 · 設計與效能',
        description: 'Move beyond queries and start thinking about maintainable database design.',
        zhDescription: '不只會查詢，也開始思考可維護的資料庫設計。',
        lessons: [
          {
            number: 'Lesson 7',
            title: 'Normalization and practical schema design',
            summary: 'Reduce duplication while keeping data understandable.',
          },
          {
            number: 'Lesson 8',
            title: 'Indexes and query performance',
            summary: 'Understand why some queries are fast and others are not.',
          },
          {
            number: 'Lesson 9',
            title: 'Preparing MySQL for application development',
            summary: 'Create a database foundation that works well with backend frameworks.',
          },
        ],
      },
      {
        title: 'Module 4 · Aggregation and advanced querying',
        zhTitle: '模組 4 · 聚合與進階查詢',
        description: 'Summarize data and answer more complex questions with grouped and nested queries.',
        zhDescription: '用 grouped 與 nested queries 回答更複雜的問題。',
        lessons: [
          {
            number: 'Lesson 10',
            title: 'GROUP BY and aggregate functions',
            summary: 'Summarize data with COUNT, SUM, AVG, and grouped results.',
          },
          {
            number: 'Lesson 11',
            title: 'Subqueries and derived tables',
            summary: 'Break bigger query problems into smaller steps with nested queries.',
          },
        ],
      },
      {
        title: 'Module 5 · Transactions and practical operations',
        zhTitle: '模組 5 · Transactions 與實務操作',
        description: 'Protect data consistency and prepare MySQL for safer real-world usage.',
        zhDescription: '保護資料一致性，並讓 MySQL 更適合真實環境使用。',
        lessons: [
          {
            number: 'Lesson 12',
            title: 'Transactions and ACID basics',
            summary: 'Understand how grouped operations stay safe and consistent.',
          },
          {
            number: 'Lesson 13',
            title: 'Backup, import, and export workflows',
            summary: 'Handle common operational tasks for moving and protecting MySQL data.',
          },
          {
            number: 'Lesson 14',
            title: 'User permissions and production basics',
            summary: 'Prepare MySQL for safer team usage and production-style environments.',
          },
        ],
      },
    ],
  },
  {
    slug: 'postgresql',
    title: 'PostgreSQL',
    zhTitle: 'PostgreSQL',
    shortLabel: 'PG',
    category: 'Database development',
    zhCategory: '資料庫開發',
    accent: '#336791',
    subtitle: 'Learn PostgreSQL foundations, SQL workflows, relational design, and practical performance habits.',
    zhSubtitle: '學習 PostgreSQL 基礎、SQL 實作、關聯設計與實用效能習慣。',
    overview:
      'This course teaches PostgreSQL from setup to a small app-ready schema, covering querying, constraints, transactions, and query-planning basics.',
    zhOverview: '這套課程從安裝一路帶到小型可交付 schema，重點涵蓋查詢、約束、交易與查詢計畫基礎。',
    level: 'Beginner to intermediate',
    zhLevel: '初階到中階',
    totalLessons: 14,
    focus: ['psql workflow', 'SQL querying and writes', 'constraints and relational modeling', 'transactions and query planning'],
    zhFocus: ['psql 工作流', 'SQL 查詢與寫入', '約束與關聯建模', '交易與查詢計畫'],
    prerequisites: ['Basic programming logic', 'Comfort using terminal commands', 'General understanding of tabular data'],
    zhPrerequisites: ['基本程式邏輯', '能使用終端機指令', '對表格資料有基本理解'],
    outcomes: [
      'Use PostgreSQL and psql confidently for everyday schema and query tasks',
      'Design relational tables with constraints and joins that keep data consistent',
      'Read query plans and apply practical indexing or transaction habits in small apps',
    ],
    zhOutcomes: ['能熟練使用 PostgreSQL 與 psql 完成日常 schema 與查詢工作', '能以約束與 joins 設計維持資料一致性的關聯結構', '能讀懂查詢計畫，並在小型應用中做出實用的索引與交易決策'],
    modules: [
      {
        title: 'Module 1 · PostgreSQL foundations and setup',
        zhTitle: '模組 1 · PostgreSQL 基礎與環境建置',
        description: 'Build core PostgreSQL mental models and prepare a reliable local psql workflow.',
        zhDescription: '建立 PostgreSQL 核心觀念，並完成穩定的本機 psql 工作流。',
        lessons: [
          {
            number: 'Lesson 1',
            title: 'What PostgreSQL is and when to use it',
            summary: 'Understand PostgreSQL strengths, common workloads, and when another database may be a better fit.',
          },
          {
            number: 'Lesson 2',
            title: 'Install PostgreSQL and connect with psql',
            summary: 'Install PostgreSQL, create a local database, and run commands in psql with confidence.',
          },
          {
            number: 'Lesson 3',
            title: 'Databases, schemas, tables, rows, and columns',
            summary: 'Learn how databases, schemas, tables, rows, and columns organize data in PostgreSQL.',
          },
        ],
      },
      {
        title: 'Module 2 · Querying and writing data',
        zhTitle: '模組 2 · 查詢與資料寫入',
        description: 'Retrieve, filter, and modify data using practical SQL patterns you will use daily.',
        zhDescription: '用日常會用到的 SQL 模式完成查詢、篩選與資料寫入。',
        lessons: [
          {
            number: 'Lesson 4',
            title: 'SELECT, WHERE, ORDER BY, and LIMIT',
            summary: 'Retrieve focused result sets with SELECT, WHERE, ORDER BY, and LIMIT.',
          },
          {
            number: 'Lesson 5',
            title: 'INSERT, UPDATE, DELETE, and RETURNING',
            summary: 'Write safer data changes with INSERT, UPDATE, DELETE, and RETURNING.',
          },
          {
            number: 'Lesson 6',
            title: 'Data types and choosing the right columns',
            summary: 'Choose practical PostgreSQL data types that keep data clean and queries clear.',
          },
        ],
      },
      {
        title: 'Module 3 · Relationships and data integrity',
        zhTitle: '模組 3 · 關聯與資料完整性',
        description: 'Model relationships with constraints so your data stays consistent as the app grows.',
        zhDescription: '用關聯與約束建立可擴充結構，讓資料在應用成長時仍保持一致。',
        lessons: [
          {
            number: 'Lesson 7',
            title: 'Primary keys, unique constraints, and not null rules',
            summary: 'Use primary keys, unique constraints, and NOT NULL rules to protect core data quality.',
          },
          {
            number: 'Lesson 8',
            title: 'Foreign keys and relational integrity',
            summary: 'Connect tables with foreign keys and enforce consistent relationships.',
          },
          {
            number: 'Lesson 9',
            title: 'JOINs and multi-table querying',
            summary: 'Query across related tables using common join patterns and clear join conditions.',
          },
          {
            number: 'Lesson 10',
            title: 'Grouping, aggregation, and HAVING',
            summary: 'Summarize data with GROUP BY, aggregate functions, and HAVING filters.',
          },
        ],
      },
      {
        title: 'Module 4 · Transactions and performance',
        zhTitle: '模組 4 · 交易與效能',
        description: 'Keep data changes safe and build practical intuition for query speed.',
        zhDescription: '保護資料一致性，並建立查詢效能的實務判斷能力。',
        lessons: [
          {
            number: 'Lesson 11',
            title: 'Transactions with BEGIN, COMMIT, and ROLLBACK',
            summary: 'Keep multi-step changes consistent with BEGIN, COMMIT, and ROLLBACK.',
          },
          {
            number: 'Lesson 12',
            title: 'Indexes and when they help',
            summary: 'Understand when indexes speed up reads and when they add unnecessary write cost.',
          },
          {
            number: 'Lesson 13',
            title: 'Reading query plans with EXPLAIN',
            summary: 'Read EXPLAIN output to understand why a query is fast or slow.',
          },
        ],
      },
      {
        title: 'Module 5 · Practical delivery',
        zhTitle: '模組 5 · 實務交付',
        description: 'Combine schema design, constraints, and query habits into a small practical project.',
        zhDescription: '把 schema 設計、約束與查詢習慣整合成小型實務專案。',
        lessons: [
          {
            number: 'Lesson 14',
            title: 'Build a small PostgreSQL-backed app schema',
            summary: 'Design a small app-ready PostgreSQL schema with constraints and query needs in mind.',
          },
        ],
      },
    ],
  },
  {
    slug: 'sqlite',
    title: 'SQLite',
    zhTitle: 'SQLite',
    shortLabel: 'SQ',
    category: 'Database development',
    zhCategory: '資料庫開發',
    accent: '#0F80CC',
    subtitle: 'Learn SQLite foundations for file-based apps, safe writes, and practical embedded database design.',
    zhSubtitle: '學習 SQLite 檔案型資料庫基礎、安全寫入與嵌入式應用資料設計。',
    overview:
      'This course teaches SQLite as a lightweight relational database for desktop, mobile, and local-first workflows, from CLI basics to practical schema delivery.',
    zhOverview: '這套課程把 SQLite 當作輕量關聯式資料庫來學習，從 CLI 操作一路到可落地的嵌入式 schema 設計。',
    level: 'Beginner to intermediate',
    zhLevel: '初階到中階',
    totalLessons: 13,
    focus: ['SQLite CLI and file workflow', 'querying and writes', 'constraints and relationships', 'transactions and indexes'],
    zhFocus: ['SQLite CLI 與檔案工作流', '查詢與寫入', '約束與關聯', '交易與索引'],
    prerequisites: ['Basic programming logic', 'Comfort using terminal commands', 'General understanding of tabular data'],
    zhPrerequisites: ['基本程式邏輯', '能使用終端機指令', '對表格資料有基本理解'],
    outcomes: [
      'Use SQLite confidently in file-based local development workflows',
      'Model practical tables with constraints, keys, and joins for embedded apps',
      'Apply safe-write and basic query-planning habits before shipping small projects',
    ],
    zhOutcomes: ['能在檔案型本機開發流程中熟練使用 SQLite', '能為嵌入式應用設計含約束、鍵值與 joins 的實用資料表', '能在小型專案交付前實踐安全寫入與基礎查詢規劃習慣'],
    modules: [
      {
        title: 'Module 1 · SQLite foundations',
        zhTitle: '模組 1 · SQLite 基礎',
        description: 'Understand SQLite positioning and build confidence with its file-based CLI workflow.',
        zhDescription: '理解 SQLite 定位，並熟悉檔案型資料庫與 CLI 基本流程。',
        lessons: [
          {
            number: 'Lesson 1',
            title: 'What SQLite is and when to use it',
            summary: 'Understand SQLite strengths, tradeoffs, and the use cases where it shines.',
          },
          {
            number: 'Lesson 2',
            title: 'Working with a file-based database and the SQLite CLI',
            summary: 'Create, open, and inspect a SQLite database file through the command-line shell.',
          },
          {
            number: 'Lesson 3',
            title: 'Tables, rowid, columns, and primary keys',
            summary: 'Learn SQLite table structure basics and how primary keys relate to rowid behavior.',
          },
        ],
      },
      {
        title: 'Module 2 · Querying and writing data',
        zhTitle: '模組 2 · 查詢與資料寫入',
        description: 'Write clear read and write queries with the SQL patterns used most often in apps.',
        zhDescription: '用實務最常見的 SQL 模式完成讀寫查詢。',
        lessons: [
          {
            number: 'Lesson 4',
            title: 'SELECT, WHERE, ORDER BY, and LIMIT',
            summary: 'Filter and sort result sets clearly with SQLite query basics.',
          },
          {
            number: 'Lesson 5',
            title: 'INSERT, UPDATE, and DELETE',
            summary: 'Modify rows safely and understand how write operations change table state.',
          },
          {
            number: 'Lesson 6',
            title: 'Type affinity and how SQLite handles data types',
            summary: 'Understand SQLite type affinity so stored values behave predictably.',
          },
        ],
      },
      {
        title: 'Module 3 · Structure and relationships',
        zhTitle: '模組 3 · 結構與關聯',
        description: 'Use constraints and table relationships to keep embedded app data consistent.',
        zhDescription: '用約束與資料表關聯維持嵌入式應用資料一致性。',
        lessons: [
          {
            number: 'Lesson 7',
            title: 'Constraints: NOT NULL, UNIQUE, and CHECK',
            summary: 'Add practical constraints to prevent invalid data from entering your tables.',
          },
          {
            number: 'Lesson 8',
            title: 'Foreign keys and relationship modeling in SQLite',
            summary: 'Model related tables and enforce parent-child relationships with foreign keys.',
          },
          {
            number: 'Lesson 9',
            title: 'JOINs and multi-table queries',
            summary: 'Combine rows from related tables to answer practical app questions.',
          },
        ],
      },
      {
        title: 'Module 4 · Safe writes and performance',
        zhTitle: '模組 4 · 安全寫入與效能',
        description: 'Protect data during writes and build basic performance awareness with indexes and plans.',
        zhDescription: '在寫入時保護資料一致性，並用索引與查詢計畫建立效能基礎。',
        lessons: [
          {
            number: 'Lesson 10',
            title: 'Aggregation and grouped reports',
            summary: 'Use grouped queries and aggregate functions to produce compact reports.',
          },
          {
            number: 'Lesson 11',
            title: 'Transactions and safe write operations',
            summary: 'Use transactions to keep multi-step writes consistent when failures happen.',
          },
          {
            number: 'Lesson 12',
            title: 'Indexes and basic query planning',
            summary: 'Add indexes intentionally and inspect query plans with EXPLAIN QUERY PLAN.',
          },
        ],
      },
      {
        title: 'Module 5 · Practical app usage',
        zhTitle: '模組 5 · 實務應用',
        description: 'Apply SQLite design and query skills to a small embedded app database.',
        zhDescription: '把 SQLite 設計與查詢能力整合到小型嵌入式應用資料庫。',
        lessons: [
          {
            number: 'Lesson 13',
            title: 'Build a small embedded app database with SQLite',
            summary: 'Design and validate a small SQLite schema ready for an embedded application.',
          },
        ],
      },
    ],
  },
  {
    slug: 'nextjs',
    title: 'Next.js',
    zhTitle: 'Next.js',
    shortLabel: 'NX',
    category: 'Full-stack web development',
    zhCategory: '全端網站開發',
    accent: '#1B4DFF',
    subtitle: 'Build production-ready React apps with the App Router, server rendering, and practical deployment workflows.',
    zhSubtitle: '用 App Router、伺服器渲染與實務部署流程，建立可上線的 React 應用。',
    overview:
      'This course introduces modern Next.js through the App Router model, helping you move from project setup into routing, data fetching, mutations, and deployment.',
    zhOverview: '這套課程以 App Router 為主軸帶你學習現代 Next.js，從專案啟動一路走到路由、資料取得、資料更新與部署。',
    level: 'Beginner to intermediate',
    zhLevel: '初階到中階',
    totalLessons: 14,
    focus: ['App Router mental model', 'Server and Client Components', 'data fetching and caching', 'deployment readiness'],
    zhFocus: ['App Router 心智模型', 'Server / Client Components', '資料取得與快取', '部署準備'],
    prerequisites: ['React fundamentals', 'JavaScript basics', 'Comfort reading TypeScript examples'],
    zhPrerequisites: ['React 基礎', 'JavaScript 基礎', '可閱讀 TypeScript 範例'],
    outcomes: [
      'Understand how Next.js structures pages, layouts, and nested routes',
      'Build data-driven features with server components, route handlers, and server actions',
      'Deploy a small Next.js app with clear performance and caching decisions',
    ],
    zhOutcomes: ['理解 Next.js 如何組織 pages、layouts 與巢狀路由', '用 server components、route handlers、server actions 建立資料驅動功能', '完成小型 Next.js 專案部署，並做出清楚的快取與效能決策'],
    modules: [
      {
        title: 'Module 1 · Next.js foundations and setup',
        zhTitle: '模組 1 · Next.js 基礎與專案啟動',
        description: 'Start with what Next.js solves and set up an App Router project with a clear folder structure.',
        zhDescription: '先理解 Next.js 解決的問題，並完成 App Router 專案與資料夾結構建立。',
        lessons: [
          {
            number: 'Lesson 1',
            title: 'What Next.js is and when to use it',
            summary: 'Understand where Next.js fits compared with plain React and why the framework is popular for production apps.',
          },
          {
            number: 'Lesson 2',
            title: 'Project setup and App Router folder structure',
            summary: 'Create a project with create-next-app and learn the role of app, public, and configuration files.',
          },
          {
            number: 'Lesson 3',
            title: 'Pages, layouts, and route segments',
            summary: 'Build your first route tree with page.tsx and layout.tsx and understand nested rendering.',
          },
        ],
      },
      {
        title: 'Module 2 · Routing and UI composition',
        zhTitle: '模組 2 · 路由與介面組合',
        description: 'Move from basic pages to navigation, styling, and component-boundary decisions.',
        zhDescription: '從基本頁面進階到導覽、樣式與元件邊界決策。',
        lessons: [
          {
            number: 'Lesson 4',
            title: 'Linking, navigation, and route params',
            summary: 'Use Link, useRouter, and dynamic params for predictable navigation flows.',
          },
          {
            number: 'Lesson 5',
            title: 'Styling basics in Next.js projects',
            summary: 'Apply global CSS and CSS Modules without overcomplicating project styling structure.',
          },
          {
            number: 'Lesson 6',
            title: 'Server Components vs Client Components',
            summary: 'Choose rendering boundaries intentionally and use the use client directive only where needed.',
          },
        ],
      },
      {
        title: 'Module 3 · Data flow and runtime states',
        zhTitle: '模組 3 · 資料流程與執行狀態',
        description: 'Fetch and render data, then handle loading and failure states clearly for users.',
        zhDescription: '取得並渲染資料，並清楚處理 loading 與失敗狀態。',
        lessons: [
          {
            number: 'Lesson 7',
            title: 'Data fetching in Server Components',
            summary: 'Fetch backend data in async components and understand where server-side data work belongs.',
          },
          {
            number: 'Lesson 8',
            title: 'Dynamic routes and nested layouts',
            summary: 'Model content-driven paths with nested route segments and shared layout shells.',
          },
          {
            number: 'Lesson 9',
            title: 'Loading, error, and not-found states',
            summary: 'Add loading.tsx, error.tsx, and not-found.tsx to improve resilience and user clarity.',
          },
        ],
      },
      {
        title: 'Module 4 · Mutations and platform features',
        zhTitle: '模組 4 · 資料更新與平台能力',
        description: 'Handle forms and metadata while using built-in image and font optimizations.',
        zhDescription: '處理表單與 metadata，並使用內建圖片與字型最佳化能力。',
        lessons: [
          {
            number: 'Lesson 10',
            title: 'Forms and Server Actions',
            summary: 'Submit data with progressive enhancement and server-first mutation logic.',
          },
          {
            number: 'Lesson 11',
            title: 'Metadata, images, and fonts',
            summary: 'Improve SEO and performance with the Metadata API, next/image, and next/font.',
          },
          {
            number: 'Lesson 12',
            title: 'Caching and revalidation basics',
            summary: 'Understand static, dynamic, and revalidated data behavior in the App Router model.',
          },
        ],
      },
      {
        title: 'Module 5 · APIs and shipping',
        zhTitle: '模組 5 · API 與上線交付',
        description: 'Finish with route handlers and deployment basics in a practical capstone flow.',
        zhDescription: '最後用 route handlers 與部署基礎，完成實務 capstone 流程。',
        lessons: [
          {
            number: 'Lesson 13',
            title: 'Route Handlers and simple API endpoints',
            summary: 'Create server-side endpoints inside app/api and return consistent JSON responses.',
          },
          {
            number: 'Lesson 14',
            title: 'Deploying a Next.js app and capstone checklist',
            summary: 'Prepare environment variables, run a production build, and ship a small end-to-end project.',
          },
        ],
      },
    ],
  },
  {
    slug: 'typescript',
    title: 'TypeScript',
    zhTitle: 'TypeScript',
    shortLabel: 'TS',
    category: 'Programming language fundamentals',
    zhCategory: '程式語言基礎',
    accent: '#3178C6',
    subtitle: 'Learn static typing for JavaScript and build safer frontend and backend code with practical TypeScript patterns.',
    zhSubtitle: '學習 JavaScript 的靜態型別能力，並用實務 TypeScript 模式寫出更安全的前後端程式。',
    overview:
      'This course follows a handbook-first TypeScript progression, from setup and core types to generics, modules, migration, and a practical capstone.',
    zhOverview: '這套課程採用 handbook-first 路線，從環境設定與核心型別一路到 generics、modules、遷移策略與實務 capstone。',
    level: 'Beginner to intermediate',
    zhLevel: '初階到中階',
    totalLessons: 14,
    focus: ['type inference and modeling', 'narrowing and guards', 'generics and utility types', 'migration workflows'],
    zhFocus: ['型別推斷與建模', 'narrowing 與 type guards', 'generics 與 utility types', '遷移流程'],
    prerequisites: ['JavaScript fundamentals', 'Functions and objects in JS', 'Basic module import and export concepts'],
    zhPrerequisites: ['JavaScript 基礎', '理解 JS 的函式與物件', '具備基本 module import / export 概念'],
    outcomes: [
      'Model application data and APIs with explicit, readable TypeScript types',
      'Use narrowing, interfaces, type aliases, and generics to reduce runtime mistakes',
      'Migrate JavaScript files to TypeScript with a practical incremental strategy',
    ],
    zhOutcomes: ['用清楚可讀的 TypeScript 型別建模應用資料與 API', '運用 narrowing、interfaces、type aliases、generics 降低執行期錯誤', '用漸進式策略把 JavaScript 檔案遷移到 TypeScript'],
    modules: [
      {
        title: 'Module 1 · TypeScript foundations and setup',
        zhTitle: '模組 1 · TypeScript 基礎與環境設定',
        description: 'Understand why TypeScript exists and prepare a clean local workflow.',
        zhDescription: '理解 TypeScript 的定位，並建立乾淨可重複的本機流程。',
        lessons: [
          {
            number: 'Lesson 1',
            title: 'What TypeScript adds to JavaScript',
            summary: 'Learn the value of static types and the compile-time feedback loop.',
          },
          {
            number: 'Lesson 2',
            title: 'Setup, Playground, and tsconfig basics',
            summary: 'Run TypeScript locally, explore the Playground, and understand essential tsconfig options.',
          },
          {
            number: 'Lesson 3',
            title: 'Basic types and type inference',
            summary: 'Work with primitive types and let TypeScript infer safe defaults where appropriate.',
          },
        ],
      },
      {
        title: 'Module 2 · Core type modeling',
        zhTitle: '模組 2 · 核心型別建模',
        description: 'Model structured values and function contracts for everyday coding tasks.',
        zhDescription: '為日常程式需求建立結構化資料與函式型別契約。',
        lessons: [
          {
            number: 'Lesson 4',
            title: 'Objects, arrays, tuples, and literal types',
            summary: 'Define richer value shapes and encode fixed choices with literal types.',
          },
          {
            number: 'Lesson 5',
            title: 'Functions, parameters, and return types',
            summary: 'Write explicit function signatures that make behavior easier to understand and test.',
          },
          {
            number: 'Lesson 6',
            title: 'Unions and intersections',
            summary: 'Combine type alternatives and shared capabilities without losing readability.',
          },
        ],
      },
      {
        title: 'Module 3 · Narrowing and reusable contracts',
        zhTitle: '模組 3 · Narrowing 與可重用契約',
        description: 'Use control-flow narrowing and reusable type contracts to keep larger codebases clear.',
        zhDescription: '用控制流程 narrowing 與可重用型別契約維持大型程式可讀性。',
        lessons: [
          {
            number: 'Lesson 7',
            title: 'Narrowing and type guards',
            summary: 'Use runtime checks to safely narrow union types in branching logic.',
          },
          {
            number: 'Lesson 8',
            title: 'Interfaces vs type aliases',
            summary: 'Choose the right abstraction for object contracts and composable type definitions.',
          },
          {
            number: 'Lesson 9',
            title: 'Optional, readonly, and indexed access types',
            summary: 'Model optional fields, immutable contracts, and property-level type access safely.',
          },
        ],
      },
      {
        title: 'Module 4 · Generics, modules, and async types',
        zhTitle: '模組 4 · Generics、模組與非同步型別',
        description: 'Scale reusable type design with generics, module boundaries, and async utility helpers.',
        zhDescription: '用 generics、模組邊界與非同步工具型別擴展可重用設計。',
        lessons: [
          {
            number: 'Lesson 10',
            title: 'Generics for reusable components and helpers',
            summary: 'Create type-safe reusable functions and data containers without duplication.',
          },
          {
            number: 'Lesson 11',
            title: 'Modules with imports and exports',
            summary: 'Split code into maintainable files and keep shared types predictable across modules.',
          },
          {
            number: 'Lesson 12',
            title: 'Async functions, Promises, and utility types',
            summary: 'Type asynchronous workflows and apply utility types to reduce repetitive type boilerplate.',
          },
        ],
      },
      {
        title: 'Module 5 · Migration and practical delivery',
        zhTitle: '模組 5 · 遷移流程與實務交付',
        description: 'Move existing JavaScript incrementally and finish with an end-to-end practical capstone.',
        zhDescription: '把既有 JavaScript 逐步遷移，最後完成端到端實務 capstone。',
        lessons: [
          {
            number: 'Lesson 13',
            title: 'Migrating JavaScript to TypeScript',
            summary: 'Adopt TypeScript incrementally with low-risk project settings and clear migration priorities.',
          },
          {
            number: 'Lesson 14',
            title: 'Practical TypeScript capstone',
            summary: 'Ship a small typed feature from data model to API call with validation and maintainable type boundaries.',
          },
        ],
      },
    ],
  },
  {
    slug: 'go',
    title: 'Go',
    shortLabel: 'GO',
    category: 'Backend and systems development',
    zhCategory: '後端與系統開發',
    accent: '#00ADD8',
    subtitle: 'Learn Go fundamentals, concurrency patterns, and practical HTTP service design.',
    zhSubtitle: '學習 Go 基礎、並行模式與實務 HTTP 服務設計。',
    overview:
      'This course teaches Go from core syntax to small service delivery, with a strong focus on clear code, testing, and idiomatic concurrency.',
    zhOverview: '這套課程從語法到小型服務交付，帶你建立 Go 的核心能力，重點放在可讀程式碼、測試與慣用並行模式。',
    level: 'Beginner to intermediate',
    zhLevel: '初階到中階',
    totalLessons: 13,
    focus: ['tooling and workflow', 'slices and maps', 'error handling and testing', 'goroutines and HTTP'],
    zhFocus: ['工具鏈與開發流程', 'slices 與 maps', '錯誤處理與測試', 'goroutines 與 HTTP'],
    prerequisites: ['Basic programming experience', 'Comfort with command-line tools', 'General backend curiosity'],
    zhPrerequisites: ['具備基本程式設計經驗', '能使用命令列工具', '對後端開發有基本興趣'],
    outcomes: [
      'Write readable Go code with functions, structs, and interfaces',
      'Build and test a small HTTP service using standard Go packages',
      'Use goroutines and channels to coordinate concurrent tasks safely',
    ],
    zhOutcomes: ['寫出具可讀性的 Go 程式，並熟悉 functions、structs、interfaces', '用標準套件建立並測試小型 HTTP 服務', '用 goroutines 與 channels 安全協調並行工作'],
    modules: [
      {
        title: 'Module 1 · Go setup and syntax basics',
        zhTitle: '模組 1 · Go 安裝與語法基礎',
        description: 'Set up your environment and build confidence with Go syntax and core data structures.',
        zhDescription: '先完成環境建置，並熟悉 Go 語法與核心資料結構。',
        lessons: [
          {
            number: 'Lesson 1',
            title: 'Install Go, use the toolchain, and run your first program',
            summary: 'Set up Go locally and understand the go run and go build workflow.',
          },
          {
            number: 'Lesson 2',
            title: 'Variables, control flow, and functions in Go',
            summary: 'Write readable Go functions with clear types, conditions, and loops.',
          },
          {
            number: 'Lesson 3',
            title: 'Arrays, slices, and maps for everyday data work',
            summary: 'Manage grouped data with Go’s most common collection types.',
          },
        ],
      },
      {
        title: 'Module 2 · Data structures and type design',
        zhTitle: '模組 2 · 資料結構與型別設計',
        description: 'Model business data and behavior with structs, methods, and interfaces.',
        zhDescription: '用 structs、methods、interfaces 建立資料模型與行為抽象。',
        lessons: [
          {
            number: 'Lesson 4',
            title: 'Structs and methods for domain modeling',
            summary: 'Model data with structs and attach behavior through methods.',
          },
          {
            number: 'Lesson 5',
            title: 'Interfaces and implicit implementation',
            summary: 'Design flexible code by programming to behavior instead of concrete types.',
          },
          {
            number: 'Lesson 6',
            title: 'Packages and modules for project organization',
            summary: 'Organize code with packages and manage dependencies using Go modules.',
          },
        ],
      },
      {
        title: 'Module 3 · Errors, testing, and data I/O',
        zhTitle: '模組 3 · 錯誤處理、測試與資料 I/O',
        description: 'Strengthen reliability with clear error handling, tests, and file or JSON processing.',
        zhDescription: '用錯誤處理、測試與檔案或 JSON 處理建立更可靠的程式。',
        lessons: [
          {
            number: 'Lesson 7',
            title: 'Error handling patterns and custom errors',
            summary: 'Return, wrap, and inspect errors in a predictable way.',
          },
          {
            number: 'Lesson 8',
            title: 'Testing with the standard testing package',
            summary: 'Write table-driven tests and run focused test workflows.',
          },
          {
            number: 'Lesson 9',
            title: 'Reading files and encoding JSON data',
            summary: 'Handle common file input and output plus JSON serialization tasks.',
          },
        ],
      },
      {
        title: 'Module 4 · Concurrency and HTTP fundamentals',
        zhTitle: '模組 4 · 並行與 HTTP 基礎',
        description: 'Apply goroutines, channels, and net/http to build responsive backend features.',
        zhDescription: '把 goroutines、channels 與 net/http 套用到可回應的後端功能。',
        lessons: [
          {
            number: 'Lesson 10',
            title: 'Goroutines, channels, and basic concurrency design',
            summary: 'Coordinate concurrent tasks safely with goroutines and channels.',
          },
          {
            number: 'Lesson 11',
            title: 'Build HTTP handlers with net/http',
            summary: 'Create routes and handlers with Go’s standard HTTP library.',
          },
        ],
      },
      {
        title: 'Module 5 · Build a small Go service',
        zhTitle: '模組 5 · 建立小型 Go 服務',
        description: 'Combine everything into a small service and prepare it for practical usage.',
        zhDescription: '整合前面能力，完成小型服務並準備實際使用。',
        lessons: [
          {
            number: 'Lesson 12',
            title: 'Design a small CRUD-style service flow',
            summary: 'Plan request models, validation, and in-memory storage for a simple service.',
          },
          {
            number: 'Lesson 13',
            title: 'Run, test, and refine the service',
            summary: 'Add basic logging, configuration, and test coverage before shipping.',
          },
        ],
      },
    ],
  },
  {
    slug: 'rust',
    title: 'Rust',
    shortLabel: 'RS',
    category: 'Systems programming',
    zhCategory: '系統程式設計',
    accent: '#B46A3A',
    subtitle: 'Learn Rust ownership, type-driven design, and practical CLI workflows.',
    zhSubtitle: '學習 Rust 的所有權模型、型別導向設計與實務 CLI 開發流程。',
    overview:
      'This course builds Rust fundamentals from Cargo setup to a small command-line project, with emphasis on ownership, safety, and maintainable abstractions.',
    zhOverview: '這套課程從 Cargo 建置一路帶到小型命令列專案，重點放在所有權、安全性與可維護抽象能力。',
    level: 'Beginner to intermediate',
    zhLevel: '初階到中階',
    totalLessons: 13,
    focus: ['ownership and borrowing', 'enums and pattern matching', 'error handling', 'traits and iterators'],
    zhFocus: ['所有權與借用', 'enums 與模式比對', '錯誤處理', 'traits 與 iterators'],
    prerequisites: ['Basic programming experience', 'Comfort reading command-line output', 'Interest in strongly typed languages'],
    zhPrerequisites: ['具備基本程式設計經驗', '能閱讀命令列輸出', '對強型別語言有興趣'],
    outcomes: [
      'Understand Rust ownership, borrowing, and lifetime basics',
      'Build reusable Rust code with traits, generics, and modules',
      'Ship a small CLI workflow with testing and concurrency foundations',
    ],
    zhOutcomes: ['理解 Rust 的所有權、借用與生命週期基礎', '用 traits、generics、modules 建立可重用程式碼', '完成具測試與並行基礎的小型 CLI 工作流'],
    modules: [
      {
        title: 'Module 1 · Rust setup and core syntax',
        zhTitle: '模組 1 · Rust 安裝與核心語法',
        description: 'Install Rust and get comfortable with Cargo and everyday language syntax.',
        zhDescription: '完成 Rust 安裝，並熟悉 Cargo 與日常語法。',
        lessons: [
          {
            number: 'Lesson 1',
            title: 'Install Rust, rustup, and create your first Cargo project',
            summary: 'Set up the toolchain and run a clean Cargo-based workflow.',
          },
          {
            number: 'Lesson 2',
            title: 'Variables, functions, and control flow in Rust',
            summary: 'Write clear Rust programs with immutable defaults and explicit control flow.',
          },
        ],
      },
      {
        title: 'Module 2 · Ownership and data modeling',
        zhTitle: '模組 2 · 所有權與資料建模',
        description: 'Build the key Rust mental model around ownership, borrowing, and expressive types.',
        zhDescription: '建立 Rust 的核心心智模型：所有權、借用與可表達的型別設計。',
        lessons: [
          {
            number: 'Lesson 3',
            title: 'Ownership and move semantics',
            summary: 'Understand how ownership keeps memory usage safe and predictable.',
          },
          {
            number: 'Lesson 4',
            title: 'Borrowing and references without data races',
            summary: 'Share data safely with references and clear borrowing rules.',
          },
          {
            number: 'Lesson 5',
            title: 'Structs, enums, and match for expressive models',
            summary: 'Represent domain states clearly with enums and pattern matching.',
          },
        ],
      },
      {
        title: 'Module 3 · Error handling and project structure',
        zhTitle: '模組 3 · 錯誤處理與專案結構',
        description: 'Learn collections, robust error flows, and package organization for real projects.',
        zhDescription: '學會 collections、穩健的錯誤流程與專案分層。',
        lessons: [
          {
            number: 'Lesson 6',
            title: 'Collections and UTF-8 string handling',
            summary: 'Work with vectors, hash maps, and Rust string types in practical scenarios.',
          },
          {
            number: 'Lesson 7',
            title: 'Option and Result for reliable error flows',
            summary: 'Model missing values and recoverable failures explicitly.',
          },
          {
            number: 'Lesson 8',
            title: 'Modules, crates, and package layout with Cargo',
            summary: 'Split growing codebases into maintainable modules and crates.',
          },
        ],
      },
      {
        title: 'Module 4 · Abstractions and functional patterns',
        zhTitle: '模組 4 · 抽象能力與函式式模式',
        description: 'Use traits, generics, lifetimes, iterators, and closures to write reusable Rust code.',
        zhDescription: '用 traits、generics、lifetimes、iterators、closures 寫出可重用程式碼。',
        lessons: [
          {
            number: 'Lesson 9',
            title: 'Traits and generics for reusable APIs',
            summary: 'Create abstractions that stay type-safe without repeating logic.',
          },
          {
            number: 'Lesson 10',
            title: 'Lifetime basics for borrowed data',
            summary: 'Express reference lifetimes in function signatures without overcomplicating design.',
          },
          {
            number: 'Lesson 11',
            title: 'Iterators and closures for data pipelines',
            summary: 'Transform and filter data with composable iterator chains.',
          },
        ],
      },
      {
        title: 'Module 5 · Testing, concurrency, and a small CLI',
        zhTitle: '模組 5 · 測試、並行與小型 CLI',
        description: 'Validate behavior, introduce concurrency, and finish with a practical CLI flow.',
        zhDescription: '驗證程式行為、導入並行觀念，最後完成實務 CLI 流程。',
        lessons: [
          {
            number: 'Lesson 12',
            title: 'Testing and documentation workflow in Rust projects',
            summary: 'Use unit tests, integration tests, and docs to keep code trustworthy.',
          },
          {
            number: 'Lesson 13',
            title: 'Concurrency and async intro through a small CLI tool',
            summary: 'Apply threads or async-style thinking to build a practical command-line tool.',
          },
        ],
      },
    ],
  },
  {
    slug: 'csharp',
    title: 'C#',
    zhTitle: 'C#',
    shortLabel: 'C#',
    category: 'Backend and application development',
    zhCategory: '後端與應用程式開發',
    accent: '#68217A',
    subtitle: 'Learn modern C# with .NET CLI, async workflows, and ASP.NET Core basics.',
    zhSubtitle: '使用 .NET CLI 學習現代 C#，掌握非同步流程與 ASP.NET Core 基礎。',
    overview:
      'This course introduces practical C# development from language fundamentals to a small ASP.NET Core API, emphasizing maintainable project structure and real-world workflows.',
    zhOverview: '這套課程從語言基礎帶到小型 ASP.NET Core API，重點放在可維護的專案結構與實務開發流程。',
    level: 'Beginner to intermediate',
    zhLevel: '初階到中階',
    totalLessons: 13,
    focus: ['.NET CLI workflow', 'OOP and interfaces', 'LINQ and async', 'ASP.NET Core fundamentals'],
    zhFocus: ['.NET CLI 工作流', 'OOP 與 interfaces', 'LINQ 與 async', 'ASP.NET Core 基礎'],
    prerequisites: ['Basic programming experience', 'Comfort with command-line tools', 'General understanding of web APIs'],
    zhPrerequisites: ['具備基本程式設計經驗', '能使用命令列工具', '對 Web API 有基本理解'],
    outcomes: [
      'Write modern C# with nullability, collections, and object modeling',
      'Use LINQ and async or await patterns for common app workflows',
      'Build a small ASP.NET Core API with practical project organization',
    ],
    zhOutcomes: ['用 nullability、collections、物件建模寫出現代 C# 程式', '在常見流程中運用 LINQ 與 async / await', '以實務分層方式完成小型 ASP.NET Core API'],
    modules: [
      {
        title: 'Module 1 · .NET setup and C# fundamentals',
        zhTitle: '模組 1 · .NET 安裝與 C# 基礎',
        description: 'Set up .NET tooling and build a solid base in C# syntax and program flow.',
        zhDescription: '完成 .NET 工具安裝，建立 C# 語法與程式流程基礎。',
        lessons: [
          {
            number: 'Lesson 1',
            title: 'Install .NET SDK and use the dotnet CLI',
            summary: 'Create, run, and manage C# projects with a clean command-line workflow.',
          },
          {
            number: 'Lesson 2',
            title: 'C# syntax, types, and expressions',
            summary: 'Understand variables, operators, and type-safe expression building.',
          },
          {
            number: 'Lesson 3',
            title: 'Methods and control flow in practical programs',
            summary: 'Structure logic with reusable methods and clear branching rules.',
          },
        ],
      },
      {
        title: 'Module 2 · Types, nullability, and OOP design',
        zhTitle: '模組 2 · 型別、可空性與 OOP 設計',
        description: 'Learn core C# type modeling tools for maintainable object-oriented code.',
        zhDescription: '掌握 C# 的型別建模能力，寫出可維護的物件導向程式。',
        lessons: [
          {
            number: 'Lesson 4',
            title: 'Collections and nullable reference types',
            summary: 'Use common collections and avoid null-related runtime issues.',
          },
          {
            number: 'Lesson 5',
            title: 'Classes, records, and object-oriented basics',
            summary: 'Model data and behavior with classes, records, and encapsulation.',
          },
          {
            number: 'Lesson 6',
            title: 'Interfaces and composition over deep inheritance',
            summary: 'Design flexible systems by combining interfaces with composition.',
          },
        ],
      },
      {
        title: 'Module 3 · Project organization and data access patterns',
        zhTitle: '模組 3 · 專案組織與資料處理模式',
        description: 'Improve reliability through exception handling, packages, and query-style data transforms.',
        zhDescription: '用例外處理、套件管理與查詢式資料轉換提升專案可靠性。',
        lessons: [
          {
            number: 'Lesson 7',
            title: 'Exceptions, logging, and debugging habits',
            summary: 'Handle failures clearly and investigate issues with practical debugging steps.',
          },
          {
            number: 'Lesson 8',
            title: 'Namespaces, projects, and NuGet packages',
            summary: 'Organize larger codebases and add dependencies in a controlled way.',
          },
          {
            number: 'Lesson 9',
            title: 'LINQ for querying in-memory data',
            summary: 'Filter, project, and group data with readable LINQ expressions.',
          },
        ],
      },
      {
        title: 'Module 4 · Async programming and application I/O',
        zhTitle: '模組 4 · 非同步程式設計與應用 I/O',
        description: 'Use asynchronous patterns and practical file or JSON handling in everyday C# apps.',
        zhDescription: '在日常 C# 應用中運用非同步模式與檔案或 JSON 處理。',
        lessons: [
          {
            number: 'Lesson 10',
            title: 'Async and await with Task-based workflows',
            summary: 'Write responsive code by awaiting asynchronous operations correctly.',
          },
          {
            number: 'Lesson 11',
            title: 'Files, JSON serialization, and app configuration',
            summary: 'Read files, serialize data, and manage settings with configuration APIs.',
          },
        ],
      },
      {
        title: 'Module 5 · ASP.NET Core and a small API project',
        zhTitle: '模組 5 · ASP.NET Core 與小型 API 專案',
        description: 'Learn minimal API basics, then package a small service with clear boundaries.',
        zhDescription: '先掌握 minimal API 基礎，再完成具清楚邊界的小型服務。',
        lessons: [
          {
            number: 'Lesson 12',
            title: 'ASP.NET Core minimal API fundamentals',
            summary: 'Create routes, bind request data, and return consistent API responses.',
          },
          {
            number: 'Lesson 13',
            title: 'Build and organize a small Web API application',
            summary: 'Assemble a practical API with validation, structure, and a production-minded checklist.',
          },
        ],
      },
    ],
  },
];

function localizeModule(module: CourseModule, locale: CourseLocale): CourseModule {
  if (locale === 'en') {
    return module;
  }

  return {
    ...module,
    title: module.zhTitle ?? module.title,
    description: module.zhDescription ?? module.description,
  };
}

export function localizeCourse(course: Course, locale: CourseLocale = 'en'): Course {
  if (locale === 'en') {
    return course;
  }

  return {
    ...course,
    title: course.zhTitle ?? course.title,
    category: course.zhCategory ?? course.category,
    subtitle: course.zhSubtitle ?? course.subtitle,
    overview: course.zhOverview ?? course.overview,
    level: course.zhLevel ?? course.level,
    focus: course.zhFocus ?? course.focus,
    prerequisites: course.zhPrerequisites ?? course.prerequisites,
    outcomes: course.zhOutcomes ?? course.outcomes,
    modules: course.modules.map((module) => localizeModule(module, locale)),
  };
}

export function getCourses(locale: CourseLocale = 'en') {
  return courses.map((course) => localizeCourse(course, locale));
}

export function getCourseBySlug(slug: Course['slug'], locale: CourseLocale = 'en') {
  const course = courses.find((item) => item.slug === slug);
  return course ? localizeCourse(course, locale) : undefined;
}

export const recentLessons: RecentLesson[] = [
  {
    courseSlug: 'react',
    courseTitle: 'React',
    accent: '#4BB8D5',
    number: 'Lesson 3',
    title: 'Props and component reuse',
    summary: 'Pass data into components and build flexible UI patterns that scale.',
    updatedAt: 'Updated Apr 2026',
    href: '/courses/react/lessons/lesson-3',
  },
  {
    courseSlug: 'spring-boot',
    courseTitle: 'Spring Boot 3.x',
    accent: '#6AA05A',
    number: 'Lesson 10',
    title: 'Connect Spring Boot 3.x to MySQL',
    summary: 'Configure the datasource and prepare the project for relational data access with MySQL.',
    updatedAt: 'Updated Apr 2026',
    href: '/courses/spring-boot/lessons/lesson-10',
  },
  {
    courseSlug: 'mysql',
    courseTitle: 'MySQL',
    accent: '#D08C36',
    number: 'Lesson 4',
    title: 'Understanding INNER JOIN and LEFT JOIN',
    summary: 'Combine related rows across tables and understand the difference between common join types.',
    updatedAt: 'Updated Apr 2026',
    href: '/courses/mysql/lessons/lesson-4',
  },
  {
    courseSlug: 'spring-boot',
    courseTitle: 'Spring Boot 3.x',
    accent: '#6AA05A',
    number: 'Lesson 16',
    title: 'Spring Security 6 fundamentals',
    summary: 'Understand authentication, authorization, and SecurityFilterChain-based API protection in Spring Boot 3.x apps.',
    updatedAt: 'Updated Apr 2026',
    href: '/courses/spring-boot/lessons/lesson-16',
  },
  {
    courseSlug: 'go',
    courseTitle: 'Go',
    accent: '#00ADD8',
    number: 'Lesson 10',
    title: 'Goroutines, channels, and basic concurrency design',
    summary: 'Coordinate concurrent tasks safely with goroutines and channels.',
    updatedAt: 'Updated Apr 2026',
    href: '/courses/go/lessons/lesson-10',
  },
  {
    courseSlug: 'csharp',
    courseTitle: 'C#',
    accent: '#68217A',
    number: 'Lesson 12',
    title: 'ASP.NET Core minimal API fundamentals',
    summary: 'Create routes, bind request data, and return consistent API responses.',
    updatedAt: 'Updated Apr 2026',
    href: '/courses/csharp/lessons/lesson-12',
  },
];
