export type ModuleLesson = {
  number: string;
  title: string;
  summary: string;
};

export type CourseModule = {
  title: string;
  description: string;
  lessons: ModuleLesson[];
};

export type Course = {
  slug: 'react' | 'spring-boot' | 'mysql';
  title: string;
  shortLabel: string;
  category: string;
  accent: string;
  subtitle: string;
  overview: string;
  level: string;
  totalLessons: number;
  focus: string[];
  prerequisites: string[];
  outcomes: string[];
  modules: CourseModule[];
};

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
    accent: '#4BB8D5',
    subtitle: 'Build interfaces with reusable components, hooks, and routing.',
    overview:
      'This course focuses on modern React fundamentals and the component patterns you need to build maintainable frontend applications.',
    level: 'Beginner to intermediate',
    totalLessons: 16,
    focus: ['components', 'state management', 'hooks', 'routing'],
    prerequisites: ['HTML and CSS basics', 'JavaScript fundamentals', 'ES modules and array methods'],
    outcomes: [
      'Understand component-based UI design',
      'Manage local and shared state cleanly',
      'Build pages with routing and reusable layouts',
    ],
    modules: [
      {
        title: 'Module 1 · React foundations',
        description: 'Start with JSX, components, props, and the mental model of React rendering.',
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
        description: 'Move from static UI to interactive UI with state, events, and hooks.',
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
        description: 'Create larger app flows with routing, layouts, and reusable page patterns.',
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
        description: 'Load remote data, handle async states, and keep network logic understandable.',
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
        description: 'Organize shared state and optimize rendering when apps start getting larger.',
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
        description: 'Verify UI behavior and prepare React projects for production deployment.',
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
    title: 'Spring Boot 4.x',
    shortLabel: 'SB4',
    category: 'Backend development',
    accent: '#6AA05A',
    subtitle: 'Build backend APIs with Spring Boot 4.x, REST, JPA, and production-ready practices.',
    overview:
      'This course follows a Spring Boot 4.x learning path, starting from setup and core concepts, then moving through API design, data access, testing, security, and deployment.',
    level: 'Beginner to intermediate',
    totalLessons: 21,
    focus: ['Spring Boot 4.x fundamentals', 'REST APIs', 'JPA and MySQL', 'testing and security'],
    prerequisites: ['Java syntax', 'object-oriented programming', 'basic SQL concepts'],
    outcomes: [
      'Understand the Spring Boot 4.x application model and startup flow',
      'Build layered REST APIs with validation, testing, and clear boundaries',
      'Connect Spring Boot 4.x to MySQL and prepare apps for production',
    ],
    modules: [
      {
        title: 'Module 1 · Spring Boot 4.x introduction and setup',
        description: 'Learn what Spring Boot 4.x solves, how to create a project, and how the application starts.',
        lessons: [
          {
            number: 'Lesson 1',
            title: 'What Spring Boot 4.x is and why it matters',
            summary: 'Understand how Spring Boot 4.x simplifies backend development and where it fits in the Java ecosystem.',
          },
          {
            number: 'Lesson 2',
            title: 'Create a project with Spring Initializr',
            summary: 'Generate a clean starter project and choose the right dependencies for a modern backend app.',
          },
          {
            number: 'Lesson 3',
            title: 'Understand the project structure and startup flow',
            summary: 'Read the generated project, run the app, and understand the role of the main entry class.',
          },
        ],
      },
      {
        title: 'Module 2 · Core concepts in Spring Boot 4.x',
        description: 'Build a strong mental model for beans, configuration, profiles, and auto-configuration.',
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
            title: 'Auto-configuration in Spring Boot 4.x',
            summary: 'See how Spring Boot reduces boilerplate and when you should customize the default behavior.',
          },
        ],
      },
      {
        title: 'Module 3 · Build REST APIs with Spring Boot 4.x',
        description: 'Create HTTP endpoints, structure request and response models, and keep the web layer clean.',
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
            summary: 'Validate input, return clearer error messages, and centralize exception handling across the API.',
          },
        ],
      },
      {
        title: 'Module 4 · MySQL and Spring Data JPA',
        description: 'Connect the app to MySQL and use JPA to model entities, repositories, and CRUD flows.',
        lessons: [
          {
            number: 'Lesson 10',
            title: 'Connect Spring Boot 4.x to MySQL',
            summary: 'Configure the datasource, verify the connection, and prepare the project for relational data access.',
          },
          {
            number: 'Lesson 11',
            title: 'Entities, repositories, and JPA basics',
            summary: 'Map domain objects to tables and use repositories to query and persist data cleanly.',
          },
          {
            number: 'Lesson 12',
            title: 'Build CRUD APIs with service and repository layers',
            summary: 'Implement common create, read, update, and delete flows with a layered design.',
          },
        ],
      },
      {
        title: 'Module 5 · Validation, exception handling, and testing',
        description: 'Improve reliability with better input handling, test coverage, and debugging habits.',
        lessons: [
          {
            number: 'Lesson 13',
            title: 'Write unit tests for service logic',
            summary: 'Test business rules in isolation so service code stays easy to verify and change.',
          },
          {
            number: 'Lesson 14',
            title: 'Write integration tests for controllers and repositories',
            summary: 'Verify that web, data, and persistence layers work together correctly.',
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
        description: 'Add authentication and authorization with a practical introduction to Spring Security.',
        lessons: [
          {
            number: 'Lesson 16',
            title: 'Spring Security fundamentals',
            summary: 'Understand the security filter chain, authentication, authorization, and common defaults.',
          },
          {
            number: 'Lesson 17',
            title: 'Login flow, password encoding, and authorization',
            summary: 'Protect endpoints, encode passwords safely, and apply role-based access control.',
          },
          {
            number: 'Lesson 18',
            title: 'Session and JWT basics',
            summary: 'Compare session-based and token-based authentication for backend APIs.',
          },
        ],
      },
      {
        title: 'Module 7 · Packaging, monitoring, and deployment',
        description: 'Prepare the application for production with packaging, health checks, and deployment basics.',
        lessons: [
          {
            number: 'Lesson 19',
            title: 'Build and package the application',
            summary: 'Create a runnable artifact and understand common packaging workflows for Spring Boot apps.',
          },
          {
            number: 'Lesson 20',
            title: 'Use Actuator for health checks and monitoring',
            summary: 'Expose useful operational endpoints and understand the role of production-ready features.',
          },
          {
            number: 'Lesson 21',
            title: 'Prepare Spring Boot 4.x for deployment',
            summary: 'Review environment setup, externalized configuration, and practical deployment considerations.',
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
    accent: '#D08C36',
    subtitle: 'Learn SQL, schema design, joins, and relational database thinking.',
    overview:
      'This course teaches MySQL as both a language and a design tool so you can reason about tables, relations, and efficient queries.',
    level: 'Beginner',
    totalLessons: 14,
    focus: ['SQL basics', 'joins', 'schema design', 'indexing'],
    prerequisites: ['Basic programming logic', 'Comfort reading tabular data'],
    outcomes: [
      'Write common SELECT, INSERT, UPDATE, and DELETE queries',
      'Understand how joins connect related tables',
      'Design cleaner schemas for application data',
    ],
    modules: [
      {
        title: 'Module 1 · Query basics',
        description: 'Start with core SQL commands and how to retrieve data cleanly.',
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
        description: 'Use table relationships to answer real questions from connected data.',
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
        description: 'Move beyond queries and start thinking about maintainable database design.',
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
        description: 'Summarize data and answer more complex questions with grouped and nested queries.',
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
        description: 'Protect data consistency and prepare MySQL for safer real-world usage.',
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

export const recentLessons: RecentLesson[] = [
  {
    courseSlug: 'react',
    courseTitle: 'React',
    accent: '#4BB8D5',
    number: 'Lesson 3',
    title: 'Props and component reuse',
    summary: 'Learn how to pass data into components and build reusable UI patterns.',
    updatedAt: 'Updated Apr 2026',
    href: '/courses/react/lessons/lesson-3',
  },
  {
    courseSlug: 'spring-boot',
    courseTitle: 'Spring Boot 4.x',
    accent: '#6AA05A',
    number: 'Lesson 10',
    title: 'Connect Spring Boot 4.x to MySQL',
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
    summary: 'Combine data from multiple tables with common join patterns.',
    updatedAt: 'Updated Apr 2026',
    href: '/courses/mysql/lessons/lesson-4',
  },
  {
    courseSlug: 'spring-boot',
    courseTitle: 'Spring Boot 4.x',
    accent: '#6AA05A',
    number: 'Lesson 16',
    title: 'Spring Security fundamentals',
    summary: 'Understand authentication, authorization, and the security filter chain in Spring Boot 4.x apps.',
    updatedAt: 'Updated Apr 2026',
    href: '/courses/spring-boot/lessons/lesson-16',
  },
];
