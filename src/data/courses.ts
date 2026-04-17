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
  slug: 'react' | 'spring-boot' | 'mysql';
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
];
