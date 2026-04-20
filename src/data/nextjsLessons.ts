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

export const nextjsLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: 'What Next.js is and when to use it',
    summary: 'Understand where Next.js fits compared with plain React and why the framework is popular for production apps.',
    moduleTitle: 'Module 1 · Next.js foundations and setup',
    intro: 'This lesson builds the big-picture mental model for Next.js before you start writing pages and routes.',
    learningPoints: [
      'Understand what Next.js adds on top of React.',
      'Recognize situations where full-stack framework features are helpful.',
      'Know the App Router-first learning path for modern projects.',
    ],
    lessonNotes: [
      'React focuses on UI composition, while Next.js adds routing, server rendering options, data handling patterns, and build tooling for production delivery.',
      'Next.js is useful when you want a single framework for frontend rendering plus backend-like endpoints and deployment conventions.',
      'Start with the App Router model because it reflects current docs and ecosystem direction.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: `export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Next.js</h1>
      <p>This page is rendered through the App Router.</p>
    </main>
  )
}`,
    practice: [
      'Write down one project where plain React is enough and one where Next.js features would help.',
      'Explain to a classmate what App Router means in one short paragraph.',
      'List which Next.js feature you want to learn first and why.',
    ],
    reasons: [
      'A framework mental model helps you avoid random copy-paste development.',
      'Choosing the right tool early reduces project rewrites later.',
    ],
    mistakes: [
      'Treating Next.js as only a React starter template.',
      'Learning features in isolation without understanding overall routing and rendering flow.',
    ],
    takeaways: [
      'Next.js is React plus production-ready framework structure.',
      'The App Router model is the baseline for modern Next.js projects.',
    ],
    references: [
      { label: 'Next.js Docs · Getting Started', url: 'https://nextjs.org/docs/app/getting-started' },
      { label: 'Next.js Learn · Dashboard App', url: 'https://nextjs.org/learn/dashboard-app' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'Project setup and App Router folder structure',
    summary: 'Create a project with create-next-app and learn the role of app, public, and configuration files.',
    moduleTitle: 'Module 1 · Next.js foundations and setup',
    intro: 'A clean setup prevents confusion in later lessons, especially when route files and server features expand.',
    learningPoints: [
      'Initialize a Next.js project with create-next-app.',
      'Understand the purpose of the app directory and route segments.',
      'Read key project files such as next.config and package scripts.',
    ],
    lessonNotes: [
      'The app directory is the primary route tree in modern Next.js. Folder names map to URL segments.',
      'public stores static assets, while configuration files control build, runtime behavior, and project conventions.',
      'A predictable folder layout makes collaboration easier as more routes and features are added.',
    ],
    exampleLanguage: 'bash',
    exampleCode: `npx create-next-app@latest nextjs-notes
cd nextjs-notes
npm run dev

# common files
app/
public/
next.config.mjs
package.json`,
    practice: [
      'Create a new project and start the dev server locally.',
      'Identify where routes, static assets, and configs live.',
      'Write a short README section documenting your folder structure.',
    ],
    reasons: [
      'Most beginner issues come from unclear file placement and route conventions.',
      'Setup fluency speeds up every future lesson and project.',
    ],
    mistakes: [
      'Mixing old pages-router tutorials into a new App Router codebase without checking versions.',
      'Putting route files outside expected app segments.',
    ],
    takeaways: [
      'App Router projects depend on clear folder and filename conventions.',
      'A clean starting structure keeps future routing work manageable.',
    ],
    references: [
      { label: 'Next.js Docs · Installation', url: 'https://nextjs.org/docs/app/getting-started/installation' },
      { label: 'Next.js Docs · Project Structure', url: 'https://nextjs.org/docs/app/getting-started/project-structure' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: 'Pages, layouts, and route segments',
    summary: 'Build your first route tree with page.tsx and layout.tsx and understand nested rendering.',
    moduleTitle: 'Module 1 · Next.js foundations and setup',
    intro: 'This lesson connects file conventions to real navigation behavior by building a tiny route tree.',
    learningPoints: [
      'Create routes using page files in the app directory.',
      'Use layout files to share UI wrappers between nested pages.',
      'Understand how parent and child layouts render together.',
    ],
    lessonNotes: [
      'Each route segment is a folder, and page.tsx is the visible page for that segment.',
      'layout.tsx wraps child segments and helps avoid repeating shared navigation or shell markup.',
      'Nested layouts allow large apps to keep section-level structure without duplicating code.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: `// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

// app/dashboard/page.tsx
export default function DashboardPage() {
  return <h1>Dashboard</h1>
}`,
    practice: [
      'Create a /dashboard route and confirm it renders correctly.',
      'Add a nested segment such as /dashboard/reports.',
      'Move repeated wrapper UI into a shared layout file.',
    ],
    reasons: [
      'Routing and layout structure is the backbone of every Next.js app.',
      'Nested layout discipline reduces duplication as apps grow.',
    ],
    mistakes: [
      'Putting route UI in arbitrary filenames instead of page.tsx.',
      'Repeating global wrappers in every page instead of using layouts.',
    ],
    takeaways: [
      'Route segments, pages, and layouts are the core App Router primitives.',
      'Shared UI should move into layout boundaries early.',
    ],
    references: [
      { label: 'Next.js Docs · Routing Fundamentals', url: 'https://nextjs.org/docs/app/building-your-application/routing' },
      { label: 'Next.js Docs · Layouts and Pages', url: 'https://nextjs.org/docs/app/getting-started/layouts-and-pages' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'Linking, navigation, and route params',
    summary: 'Use Link, useRouter, and dynamic params for predictable navigation flows.',
    moduleTitle: 'Module 2 · Routing and UI composition',
    intro: 'This lesson moves from static pages to user-driven navigation and parameterized routes.',
    learningPoints: [
      'Navigate between routes with the Link component.',
      'Read route params in dynamic segments.',
      'Use client-side navigation APIs only where interaction requires them.',
    ],
    lessonNotes: [
      'Link enables framework-aware navigation and prefetch behavior in many cases.',
      'Dynamic route folders, such as [id], capture values you can read inside pages.',
      'Use client hooks like useRouter in Client Components when imperative navigation is needed.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: `import Link from 'next/link'

export default function LessonsPage() {
  return (
    <ul>
      <li><Link href='/courses/nextjs/lessons/lesson-1'>Lesson 1</Link></li>
      <li><Link href='/courses/nextjs/lessons/lesson-2'>Lesson 2</Link></li>
    </ul>
  )
}`,
    practice: [
      'Create a list page that links to two dynamic lesson pages.',
      'Read and display a route param in a page component.',
      'Use useRouter push in one client button action.',
    ],
    reasons: [
      'Navigation flow quality affects user experience and app readability.',
      'Route params are essential for content-driven and CRUD-style pages.',
    ],
    mistakes: [
      'Using plain anchor tags everywhere for internal routes.',
      'Forgetting that useRouter requires a Client Component boundary.',
    ],
    takeaways: [
      'Use Link by default, and use router hooks only for interactive cases.',
      'Dynamic params connect route structure to page data.',
    ],
    references: [
      { label: 'Next.js Docs · Link Component', url: 'https://nextjs.org/docs/app/api-reference/components/link' },
      { label: 'Next.js Docs · Dynamic Routes', url: 'https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: 'Styling basics in Next.js projects',
    summary: 'Apply global CSS and CSS Modules without overcomplicating project styling structure.',
    moduleTitle: 'Module 2 · Routing and UI composition',
    intro: 'Styling choices are easier when you know where global rules stop and component-scoped styles begin.',
    learningPoints: [
      'Apply global styles through app-level imports.',
      'Use CSS Modules for local component styling.',
      'Keep styling decisions simple and consistent for team work.',
    ],
    lessonNotes: [
      'Global CSS is useful for resets, typography, and shared tokens.',
      'CSS Modules help avoid accidental style collisions in larger projects.',
      'Pick one primary styling strategy and document it to avoid mixed conventions.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: `// app/page.tsx
import styles from './home.module.css'

export default function HomePage() {
  return <h1 className={styles.title}>Next.js course home</h1>
}

// app/home.module.css
.title {
  color: #1b4dff;
}`,
    practice: [
      'Create one page using a CSS Module for local styles.',
      'Move shared body typography to global.css.',
      'Write a tiny style guideline for spacing and color usage.',
    ],
    reasons: [
      'Style consistency improves maintainability and onboarding.',
      'Scoped styling prevents regressions as components grow.',
    ],
    mistakes: [
      'Applying global styles for everything and causing side effects.',
      'Using too many styling approaches in one small project.',
    ],
    takeaways: [
      'Global CSS and CSS Modules cover most beginner-to-intermediate needs.',
      'Consistency matters more than trend-chasing styling stacks.',
    ],
    references: [
      { label: 'Next.js Docs · Styling', url: 'https://nextjs.org/docs/app/building-your-application/styling' },
      { label: 'Next.js Docs · CSS Modules', url: 'https://nextjs.org/docs/app/building-your-application/styling/css-modules' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: 'Server Components vs Client Components',
    summary: 'Choose rendering boundaries intentionally and use the use client directive only where needed.',
    moduleTitle: 'Module 2 · Routing and UI composition',
    intro: 'This lesson explains one of the most important App Router decisions: where code runs and why.',
    learningPoints: [
      'Differentiate server-only rendering from client-interactive components.',
      'Use use client for stateful or browser-dependent UI.',
      'Keep boundaries minimal to reduce unnecessary client bundle size.',
    ],
    lessonNotes: [
      'Server Components are default in App Router and can fetch data directly on the server.',
      'Client Components are needed for hooks like useState, event handlers, and browser APIs.',
      'Good boundaries keep performance and DX balanced without overcomplicating architecture.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: `// app/counter.tsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>
}`,
    practice: [
      'Build one static Server Component and one interactive Client Component.',
      'Move use client from a parent component to the smallest needed child.',
      'Review your page and identify which parts truly need browser interactivity.',
    ],
    reasons: [
      'Boundary choices affect performance, bundle size, and maintainability.',
      'Many Next.js bugs come from placing code on the wrong side of the boundary.',
    ],
    mistakes: [
      'Marking entire route trees as client components unnecessarily.',
      'Using browser APIs in server-rendered files.',
    ],
    takeaways: [
      'Server-first is the App Router default.',
      'Client boundaries should be explicit, small, and intentional.',
    ],
    references: [
      { label: 'Next.js Docs · Server and Client Components', url: 'https://nextjs.org/docs/app/getting-started/server-and-client-components' },
      { label: 'React Docs · Server Components Overview', url: 'https://react.dev/reference/rsc/server-components' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: 'Data fetching in Server Components',
    summary: 'Fetch backend data in async components and understand where server-side data work belongs.',
    moduleTitle: 'Module 3 · Data flow and runtime states',
    intro: 'This lesson moves data loading into server-rendered components to keep client bundles lean and logic clear.',
    learningPoints: [
      'Use async Server Components for data fetching.',
      'Understand fetch behavior in App Router rendering.',
      'Keep data loading close to route-level concerns.',
    ],
    lessonNotes: [
      'In App Router, Server Components can await data directly without extra client-side effect hooks.',
      'Fetch options and cache behavior influence whether content is static, dynamic, or revalidated.',
      'Clear data boundaries make state handling easier in later loading and error lessons.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: `type Post = { id: number; title: string }

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
  return res.json()
}

export default async function PostsPage() {
  const posts = await getPosts()
  return <ul>{posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
}`,
    practice: [
      'Create a page that fetches and renders a small list from an API.',
      'Move duplicate fetch logic into one reusable server utility.',
      'Add basic fallback handling when fetch fails.',
    ],
    reasons: [
      'Server-side data flow is central to modern Next.js architecture.',
      'Placing data logic correctly reduces client complexity and hydration issues.',
    ],
    mistakes: [
      'Adding useEffect fetching by default when server fetching is enough.',
      'Mixing unrelated data calls in one huge route file.',
    ],
    takeaways: [
      'Server Components are a strong default for route-level data needs.',
      'Good data boundaries simplify UI state and future scaling.',
    ],
    references: [
      { label: 'Next.js Docs · Fetching Data', url: 'https://nextjs.org/docs/app/building-your-application/data-fetching' },
      { label: 'Next.js Docs · Data Fetching Patterns', url: 'https://nextjs.org/docs/app/building-your-application/data-fetching/patterns' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: 'Dynamic routes and nested layouts',
    summary: 'Model content-driven paths with nested route segments and shared layout shells.',
    moduleTitle: 'Module 3 · Data flow and runtime states',
    intro: 'This lesson expands route design so your app can scale from static pages into content and detail flows.',
    learningPoints: [
      'Create dynamic route folders for variable path segments.',
      'Use nested layouts for section-level wrappers.',
      'Keep route trees readable as page count grows.',
    ],
    lessonNotes: [
      'Dynamic folders such as [slug] allow one page definition to serve many URL values.',
      'In modern Next.js patterns (including v15), page route params are commonly typed as Promise values and awaited inside async page components.',
      'Nested layouts can provide shared sidebars, headers, or section navigation for route groups.',
      'Predictable route tree naming reduces long-term confusion in larger apps.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: `// app/blog/[slug]/page.tsx
type Props = { params: Promise<{ slug: string }> }

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  return <h1>Post: {slug}</h1>
}`,
    practice: [
      'Add a dynamic [slug] page under one route group.',
      'Create a nested layout for a section such as /dashboard.',
      'Document your route tree in a short file structure note.',
    ],
    reasons: [
      'Most real apps require list-detail patterns and nested sections.',
      'Route organization quality strongly impacts future feature speed.',
    ],
    mistakes: [
      'Flattening every page into one level and losing route clarity.',
      'Using inconsistent segment names for similar resources.',
    ],
    takeaways: [
      'Dynamic routes and nested layouts are core scaling tools in App Router.',
      'A readable route tree is part of code quality.',
    ],
    references: [
      { label: 'Next.js Docs · Dynamic Segments', url: 'https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes' },
      { label: 'Next.js Docs · Route Groups and Layouts', url: 'https://nextjs.org/docs/app/building-your-application/routing/route-groups' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'Loading, error, and not-found states',
    summary: 'Add loading.tsx, error.tsx, and not-found.tsx to improve resilience and user clarity.',
    moduleTitle: 'Module 3 · Data flow and runtime states',
    intro: 'This lesson teaches route-level UX safety nets so async behavior feels stable and predictable.',
    learningPoints: [
      'Render loading UI for slow route segments.',
      'Handle route-level errors with error boundaries.',
      'Return not-found experiences for missing resources.',
    ],
    lessonNotes: [
      'loading.tsx gives users immediate feedback while data is streamed or resolved.',
      'error.tsx isolates failures and allows retry patterns without collapsing the whole app.',
      'error.tsx must include "use client" because Next.js error boundaries are Client Components.',
      'not-found.tsx helps communicate missing data states clearly for content routes.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: `// app/products/[id]/not-found.tsx
export default function NotFound() {
  return <p>Product not found.</p>
}

// app/products/[id]/loading.tsx
export default function Loading() {
  return <p>Loading product...</p>
}`,
    practice: [
      'Add loading.tsx to one data-heavy route.',
      'Create error.tsx and verify retry behavior.',
      'Return notFound() for one missing-record case.',
    ],
    reasons: [
      'Users judge reliability by how apps behave when data is slow or missing.',
      'Route-level resilience prevents small failures from becoming full-page crashes.',
    ],
    mistakes: [
      'Showing blank pages during data loading.',
      'Handling all errors with one generic global message.',
      'Forgetting to add "use client" at the top of error.tsx.',
    ],
    takeaways: [
      'Loading, error, and not-found files are practical UX tools in App Router.',
      'Resilient state handling is a core production skill.',
    ],
    references: [
      { label: 'Next.js Docs · Loading UI and Streaming', url: 'https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming' },
      { label: 'Next.js Docs · Error Handling', url: 'https://nextjs.org/docs/app/building-your-application/routing/error-handling' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'Forms and Server Actions',
    summary: 'Submit data with progressive enhancement and server-first mutation logic.',
    moduleTitle: 'Module 4 · Mutations and platform features',
    intro: 'This lesson introduces modern form handling patterns that keep mutations close to server logic.',
    learningPoints: [
      'Submit forms using Server Actions in App Router.',
      'Handle validation feedback and user flow after submission.',
      'Understand where server-side mutation logic should live.',
    ],
    lessonNotes: [
      'Server Actions allow form data handling without creating separate client fetch handlers for every simple mutation.',
      'You still need clear validation and user-friendly feedback for failed submissions.',
      'Keep action logic focused and reusable instead of embedding complex business rules in UI files.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: `export default function Page() {
  async function createLesson(formData: FormData) {
    'use server'
    const title = formData.get('title')
    console.log('create lesson:', title)
  }

  return (
    <form action={createLesson}>
      <input name='title' placeholder='Lesson title' />
      <button type='submit'>Save</button>
    </form>
  )
}`,
    practice: [
      'Build one form that writes data through a Server Action.',
      'Return a validation message for empty input.',
      'Refactor one action into a reusable server utility file.',
    ],
    reasons: [
      'Data mutation workflows are essential for real product features.',
      'Server-first mutation patterns can reduce client complexity.',
    ],
    mistakes: [
      'Skipping validation because forms are small.',
      'Placing too much business logic directly in JSX markup blocks.',
    ],
    takeaways: [
      'Server Actions provide a practical mutation path in App Router.',
      'Form UX still depends on clear validation and feedback states.',
    ],
    references: [
      { label: 'Next.js Docs · Server Actions and Mutations', url: 'https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations' },
      { label: 'Next.js Docs · Forms Guide', url: 'https://nextjs.org/docs/app/guides/forms' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: 'Metadata, images, and fonts',
    summary: 'Improve SEO and performance with the Metadata API, next/image, and next/font.',
    moduleTitle: 'Module 4 · Mutations and platform features',
    intro: 'This lesson focuses on built-in platform features that improve discoverability and page performance.',
    learningPoints: [
      'Set route-level metadata cleanly.',
      'Use optimized image rendering with next/image.',
      'Load fonts with next/font for better performance control.',
    ],
    lessonNotes: [
      'Metadata fields such as title and description are part of route quality, not only SEO extras.',
      'next/image provides sizing and optimization defaults that reduce layout shifts and loading cost.',
      'next/font helps manage font loading behavior without manual third-party setup complexity.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: `import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Next.js lesson',
  description: 'Metadata, image, and font basics',
}

export default function Page() {
  return <Image src='/course-cover.png' alt='Course cover' width={640} height={360} />
}`,
    practice: [
      'Add metadata to two route pages.',
      'Replace one img tag with next/image.',
      'Configure one font with next/font and apply it globally.',
    ],
    reasons: [
      'SEO and performance work should happen during feature development, not only after launch.',
      'Built-in optimizations reduce manual performance tuning effort.',
    ],
    mistakes: [
      'Ignoring image dimensions and causing layout shifts.',
      'Hardcoding repetitive metadata in multiple files without consistency.',
    ],
    takeaways: [
      'Metadata, images, and fonts are core quality tools in Next.js.',
      'The framework gives built-in APIs to keep these concerns manageable.',
    ],
    references: [
      { label: 'Next.js Docs · Metadata', url: 'https://nextjs.org/docs/app/building-your-application/optimizing/metadata' },
      { label: 'Next.js Docs · Image Optimization', url: 'https://nextjs.org/docs/app/building-your-application/optimizing/images' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'Caching and revalidation basics',
    summary: 'Understand static, dynamic, and revalidated data behavior in the App Router model.',
    moduleTitle: 'Module 4 · Mutations and platform features',
    intro: 'This lesson gives a practical caching mental model so data freshness and performance stay balanced.',
    learningPoints: [
      'Differentiate static rendering, dynamic rendering, and revalidation.',
      'Use revalidate options intentionally for data freshness.',
      'Understand when to invalidate cached paths after updates.',
    ],
    lessonNotes: [
      'Caching behavior in App Router is powerful, but clarity comes from understanding when data is computed and reused.',
      'Not every route should be fully dynamic; many pages can use revalidation windows safely.',
      'After mutations, targeted invalidation keeps user-facing data consistent.',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `export async function getCourses() {
  const res = await fetch('https://example.com/api/courses', {
    next: { revalidate: 60 },
  })
  return res.json()
}`,
    practice: [
      'Set one route to revalidate every 60 seconds.',
      'Compare behavior between cache defaults and no-store fetch.',
      'Invalidate one path after a simulated content update.',
    ],
    reasons: [
      'Caching decisions affect both user speed and content correctness.',
      'A clear model avoids confusing stale-data bugs.',
    ],
    mistakes: [
      'Marking everything dynamic without measuring needs.',
      'Forgetting to revalidate after mutation workflows.',
    ],
    takeaways: [
      'Caching strategy should match each route’s freshness needs.',
      'Revalidation is a practical middle ground between static and fully dynamic rendering.',
    ],
    references: [
      { label: 'Next.js Docs · Caching Deep Dive', url: 'https://nextjs.org/docs/app/deep-dive/caching' },
      { label: 'Next.js Docs · revalidatePath', url: 'https://nextjs.org/docs/app/api-reference/functions/revalidatePath' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: 'Route Handlers and simple API endpoints',
    summary: 'Create server-side endpoints inside app/api and return consistent JSON responses.',
    moduleTitle: 'Module 5 · APIs and shipping',
    intro: 'This lesson adds basic backend endpoint capabilities directly inside a Next.js application.',
    learningPoints: [
      'Build GET and POST handlers with route.ts files.',
      'Return typed JSON responses with status codes.',
      'Keep API behavior consistent for frontend consumers.',
    ],
    lessonNotes: [
      'Route Handlers offer lightweight API endpoints in App Router projects.',
      'Even simple handlers should validate input and return consistent response structures.',
      'A clean API contract reduces frontend integration confusion.',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `export async function GET() {
  return Response.json({ status: 'ok' })
}

export async function POST(request: Request) {
  const body = await request.json()
  return Response.json({ saved: true, title: body.title }, { status: 201 })
}`,
    practice: [
      'Create one GET health endpoint in app/api/health/route.ts.',
      'Add one POST endpoint that receives JSON input.',
      'Define a shared error response shape for failed input.',
    ],
    reasons: [
      'Many apps need lightweight API routes alongside UI pages.',
      'Consistent endpoint contracts improve frontend-backend coordination.',
    ],
    mistakes: [
      'Returning inconsistent response fields across endpoints.',
      'Skipping request validation in early prototypes and carrying that into production.',
    ],
    takeaways: [
      'Route Handlers are practical for simple API needs in Next.js.',
      'Stable JSON contracts are part of maintainable full-stack design.',
    ],
    references: [
      { label: 'Next.js Docs · Route Handlers', url: 'https://nextjs.org/docs/app/building-your-application/routing/route-handlers' },
      { label: 'Next.js Docs · Request and Response APIs', url: 'https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body' },
    ],
  },
  {
    lesson: 14,
    slug: 'lesson-14',
    title: 'Deploying a Next.js app and capstone checklist',
    summary: 'Prepare environment variables, run a production build, and ship a small end-to-end project.',
    moduleTitle: 'Module 5 · APIs and shipping',
    intro: 'The final lesson connects setup, routing, data flow, and deployment habits into one practical delivery workflow.',
    learningPoints: [
      'Run production build and verify runtime behavior locally.',
      'Manage environment variables safely for deployment.',
      'Use a simple capstone checklist before release.',
    ],
    lessonNotes: [
      'Deployment readiness includes build success, route checks, API checks, and basic error-state verification.',
      'Environment variables should be configured per environment instead of hardcoded in source files.',
      'A capstone checklist turns learning into a repeatable delivery process.',
    ],
    exampleLanguage: 'bash',
    exampleCode: `npm run build
npm run start

# capstone checks
# - route navigation works
# - data pages load and recover from errors
# - form submission + revalidation flow succeeds`,
    practice: [
      'Build and start your app in production mode locally.',
      'Document required environment variables for staging and production.',
      'Run through a final checklist on one small capstone project.',
    ],
    reasons: [
      'Shipping habits are as important as coding skills for real projects.',
      'Release checklists reduce last-minute production surprises.',
    ],
    mistakes: [
      'Assuming dev-mode success means production readiness.',
      'Mixing secret values directly into committed source code.',
    ],
    takeaways: [
      'Deployment readiness requires technical checks plus operational discipline.',
      'A small capstone is the best way to connect all Next.js foundations.',
    ],
    references: [
      { label: 'Next.js Docs · Deploying', url: 'https://nextjs.org/docs/app/building-your-application/deploying' },
      { label: 'Next.js Docs · Environment Variables', url: 'https://nextjs.org/docs/app/building-your-application/configuring/environment-variables' },
    ],
  },
];

export function getNextjsLessons() {
  return nextjsLessons;
}

export function getNextjsLessonBySlug(slug: string) {
  return nextjsLessons.find((lesson) => lesson.slug === slug) ?? null;
}
