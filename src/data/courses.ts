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
    ],
  },
  {
    slug: 'spring-boot',
    title: 'Spring Boot',
    shortLabel: 'SB',
    category: 'Backend development',
    accent: '#6AA05A',
    subtitle: 'Build backend APIs with Java, Spring Boot, JPA, and REST.',
    overview:
      'This course turns Spring Boot into a clear learning path, starting from backend fundamentals and moving into controllers, data access, and application structure.',
    level: 'Beginner to intermediate',
    totalLessons: 18,
    focus: ['Spring fundamentals', 'dependency injection', 'REST APIs', 'JPA and MySQL'],
    prerequisites: ['Java syntax', 'object-oriented programming', 'basic SQL concepts'],
    outcomes: [
      'Understand the Spring Boot application model',
      'Build controllers and service layers with clear responsibilities',
      'Connect Spring Boot to MySQL through JPA',
    ],
    modules: [
      {
        title: 'Module 1 · Introduction and setup',
        description: 'Set up the tools and learn what Spring Boot is trying to simplify.',
        lessons: [
          {
            number: 'Lesson 1',
            title: 'What Spring Boot is and where it fits',
            summary: 'Understand the backend role of Spring Boot and why it is widely used for Java applications.',
          },
          {
            number: 'Lesson 2',
            title: 'Tooling and project setup',
            summary: 'Prepare Java, IntelliJ, and a starter project using Spring Initializr.',
          },
          {
            number: 'Lesson 3',
            title: 'Create the first running application',
            summary: 'Run the default app and understand the purpose of the main entry class.',
          },
        ],
      },
      {
        title: 'Module 2 · Core concepts',
        description: 'Learn the ideas that explain how Spring manages application components.',
        lessons: [
          {
            number: 'Lesson 4',
            title: 'Dependency injection',
            summary: 'See how Spring creates and wires objects so code stays modular and testable.',
          },
          {
            number: 'Lesson 5',
            title: 'Bean lifecycle and configuration',
            summary: 'Understand how Spring manages beans and configuration values across the app.',
          },
          {
            number: 'Lesson 6',
            title: 'Project layers and responsibilities',
            summary: 'Separate controllers, services, and repositories with cleaner boundaries.',
          },
        ],
      },
      {
        title: 'Module 3 · Web and data access',
        description: 'Build endpoints and connect the application to a relational database.',
        lessons: [
          {
            number: 'Lesson 7',
            title: 'REST controllers and request mapping',
            summary: 'Handle incoming HTTP requests and return structured responses.',
          },
          {
            number: 'Lesson 8',
            title: 'Request and response DTOs',
            summary: 'Shape API contracts clearly and avoid leaking persistence details.',
          },
          {
            number: 'Lesson 9.1',
            title: 'Prepare MySQL and understand Spring Data JPA',
            summary: 'Connect backend logic to persistent storage and understand the JPA workflow.',
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
    href: '/courses/react',
  },
  {
    courseSlug: 'spring-boot',
    courseTitle: 'Spring Boot',
    accent: '#6AA05A',
    number: 'Lesson 9.1',
    title: 'Prepare MySQL and understand Spring Data JPA',
    summary: 'Set up the database and learn the role of JPA in Spring Boot applications.',
    updatedAt: 'Updated Apr 2026',
    href: '/courses/spring-boot',
  },
  {
    courseSlug: 'mysql',
    courseTitle: 'MySQL',
    accent: '#D08C36',
    number: 'Lesson 4',
    title: 'Understanding INNER JOIN and LEFT JOIN',
    summary: 'Combine data from multiple tables with common join patterns.',
    updatedAt: 'Updated Apr 2026',
    href: '/courses/mysql',
  },
  {
    courseSlug: 'spring-boot',
    courseTitle: 'Spring Boot',
    accent: '#6AA05A',
    number: 'Lesson 4',
    title: 'Dependency injection',
    summary: 'Understand how Spring creates and wires objects across your backend application.',
    updatedAt: 'Updated Apr 2026',
    href: '/courses/spring-boot',
  },
];
