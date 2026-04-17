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

export const reactLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: 'What React is and why component thinking matters',
    summary: 'Understand React’s role in frontend development and the benefit of reusable UI building blocks.',
    moduleTitle: 'Module 1 · React foundations',
    intro: 'This lesson builds the most important React mental model first: a screen is not one giant page written all at once, but a set of reusable components composed together.',
    learningPoints: [
      'Understand what problem React solves in frontend development.',
      'See why component thinking makes UI easier to maintain.',
      'Tell the difference between a full page and a reusable component in design.',
    ],
    lessonNotes: [
      'React is not a complete framework by itself. It is a library focused on composing and updating user interfaces. Its biggest value is not the syntax, but the way it encourages you to break UI into small, composable, reusable pieces.',
      'When a screen can be separated into parts like a navbar, card, button, and form, it becomes easier to maintain and easier to reuse across different pages.',
      'This component mindset directly shapes how you approach props, state, routing, and project structure later. The point of the first lesson is not memorizing APIs, but building the right way of thinking.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "function WelcomeCard() {\n  return (\n    <section>\n      <h2>Welcome back</h2>\n      <p>This small block can become a reusable component.</p>\n    </section>\n  );\n}\n\nexport default function App() {\n  return <WelcomeCard />;\n}",
    practice: [
      'Pick a homepage you visit often and break it into 5 to 8 possible components.',
      'Take one UI block that is currently written inline on a page and turn it into a standalone component.',
      'Write down three kinds of components that feel especially reusable to you.',
    ],
    reasons: [
      'All later lessons about hooks, props, and state depend on component thinking.',
      'Without this mindset, React easily turns into nothing more than writing HTML inside JavaScript.',
    ],
    mistakes: [
      'Writing the entire page as one huge component and losing reuse and readability.',
      'Memorizing API names without thinking about how the UI should be split up.',
    ],
    takeaways: [
      'The core of React is not flashy syntax. It is composing UI from reusable components.',
      'When components are split clearly, state and routing design become much more natural later.',
    ],
    references: [
      { label: 'React docs · Thinking in React', url: 'https://react.dev/learn/thinking-in-react' },
      { label: 'React docs · Describing the UI', url: 'https://react.dev/learn/describing-the-ui' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'JSX basics and how React renders UI',
    summary: 'Learn how JSX maps to elements and how React updates the interface when data changes.',
    moduleTitle: 'Module 1 · React foundations',
    intro: 'This lesson moves JSX beyond the surface idea of looking like HTML and reframes it as a JavaScript-based way to describe UI.',
    learningPoints: [
      'Understand what JSX is and how it differs from HTML.',
      'Learn how React rerenders UI based on data changes.',
      'Safely place JavaScript expressions inside JSX.',
    ],
    lessonNotes: [
      'JSX lets you describe UI in a syntax that feels close to markup, but it is still JavaScript underneath. That is why you can place variables, function results, and conditional expressions inside curly braces.',
      'React does not update the DOM by manually commanding each node. It recalculates what the UI should look like from the current data, then updates the real DOM efficiently.',
      'Because of that, it is more useful to ask, "What should the UI look like when the data looks like this?" than to ask, "Which DOM node should I change?"',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "const userName = 'Tommy';\nconst lessonCount = 3;\n\nexport default function Dashboard() {\n  return (\n    <main>\n      <h1>Hello, {userName}</h1>\n      <p>You finished {lessonCount} lessons this week.</p>\n    </main>\n  );\n}",
    practice: [
      'Create a component that displays a name, today’s date, and the number of completed lessons.',
      'Use a conditional expression inside JSX to switch between two messages.',
      'List three places where JSX is easy to confuse with plain HTML.',
    ],
    reasons: [
      'JSX is a language layer you touch every day, so understanding it speeds up everything else.',
      'If you do not understand that React renders from data, you will keep thinking in the wrong DOM-first mental model.',
    ],
    mistakes: [
      'Treating JSX like a string template instead of a UI description.',
      'Packing too much complex logic into JSX and making the screen hard to read.',
    ],
    takeaways: [
      'JSX is a syntax for describing UI, not just moving HTML into JavaScript.',
      'React cares more about what the UI should become after data changes than about manual DOM manipulation.',
    ],
    references: [
      { label: 'React docs · Writing markup with JSX', url: 'https://react.dev/learn/writing-markup-with-jsx' },
      { label: 'React docs · JavaScript in JSX with curly braces', url: 'https://react.dev/learn/javascript-in-jsx-with-curly-braces' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: 'Props and component reuse',
    summary: 'Pass data into components and build flexible UI patterns that scale.',
    moduleTitle: 'Module 1 · React foundations',
    intro: 'This lesson moves components beyond static blocks and into reusable UI. The same component can play different roles in different places because its props change.',
    learningPoints: [
      'Understand that props are the input data for a component.',
      'Reuse the same component across different situations.',
      'Design clearer prop names that explain intent.',
    ],
    lessonNotes: [
      'If components are UI building blocks, props are the way you feed data into them. They let the same component handle different titles, images, button labels, or states without rewriting it.',
      'Good reuse does not mean making everything configurable. It means identifying the stable structure and exposing only the parts that truly vary as props.',
      'When prop names are clear, the way a component is used starts to look like documentation. The API itself tells other developers what data the component expects.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "type CourseCardProps = {\n  title: string;\n  level: string;\n};\n\nfunction CourseCard({ title, level }: CourseCardProps) {\n  return (\n    <article>\n      <h3>{title}</h3>\n      <p>{level}</p>\n    </article>\n  );\n}\n\nexport default function App() {\n  return (\n    <>\n      <CourseCard title=\"React\" level=\"Beginner\" />\n      <CourseCard title=\"Spring Boot\" level=\"Intermediate\" />\n    </>\n  );\n}",
    practice: [
      'Turn a static block from the previous lesson into a component that accepts props.',
      'Design a `ProfileCard` that receives `name`, `role`, and `avatar` props.',
      'Rename a confusing set of props so the component API is easier to understand.',
    ],
    reasons: [
      'Props are the basic mechanism behind component reuse. Without them, composable UI is hard to build.',
      'Later lessons about state and lifting state keep returning to how data flows through props.',
    ],
    mistakes: [
      'Shoving too many unnecessary props into a component and creating a messy API.',
      'Using abstract prop names that do not show what the value really means.',
    ],
    takeaways: [
      'Props turn a single UI block into a reusable unit.',
      'Reuse is not about abstracting everything. It is about identifying stable structure and variable data.',
    ],
    references: [
      { label: 'React docs · Passing props to a component', url: 'https://react.dev/learn/passing-props-to-a-component' },
      { label: 'React docs · Your first component', url: 'https://react.dev/learn/your-first-component' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'State with useState',
    summary: 'Handle user interaction and update the UI predictably with local state.',
    moduleTitle: 'Module 2 · State and hooks',
    intro: 'This is where the UI starts to move. The screen no longer only receives data. It now updates in response to user interaction.',
    learningPoints: [
      'Understand the role of local state inside a component.',
      'Use `useState` in its most common form.',
      'Connect user events to UI updates.',
    ],
    lessonNotes: [
      'State is data inside a component that can change over time. When state changes, React rerenders the component so the UI stays in sync with the data.',
      'The `useState` hook lets function components hold this changing data and provides a setter function that triggers updates.',
      'The real point of this lesson is not memorizing hook syntax. It is understanding the chain: data changes, React rerenders, and the UI updates.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increase</button>\n    </div>\n  );\n}",
    practice: [
      'Build a like button that increments when clicked.',
      'Create a toggle that switches the UI between opened and closed.',
      'Write down which values belong in state and which can stay as regular variables.',
    ],
    reasons: [
      'Without state, React can only describe static UI.',
      'Almost every interactive frontend starts with state.',
    ],
    mistakes: [
      'Changing the state variable directly instead of calling its setter.',
      'Storing values in state even though they can be derived from other data.',
    ],
    takeaways: [
      'State sits at the center of interactive React UI.',
      'Screens do not update by manually changing the DOM. They update by changing state and rerendering.',
    ],
    references: [
      { label: 'React docs · State: a component memory', url: 'https://react.dev/learn/state-a-components-memory' },
      { label: 'React docs · Render and commit', url: 'https://react.dev/learn/render-and-commit' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: 'Side effects with useEffect',
    summary: 'Run effects safely and understand dependency arrays and cleanup.',
    moduleTitle: 'Module 2 · State and hooks',
    intro: 'Beginners often find `useEffect` confusing because it handles work that lives outside normal rendering and synchronizes with the outside world.',
    learningPoints: [
      'Understand when you actually need `useEffect`.',
      'Know what the dependency array does.',
      'Tell the difference between render logic and side effects.',
    ],
    lessonNotes: [
      'Not every piece of logic belongs in `useEffect`. You only need an effect when you must synchronize with something outside React, such as an API request, event subscription, or timer.',
      'The dependency array tells React which values should cause the effect to rerun.',
      'Many `useEffect` problems are not caused by the hook being too hard. They happen because data calculations that belong in render logic were pushed into an effect by mistake.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useEffect, useState } from 'react';\n\nexport default function Clock() {\n  const [now, setNow] = useState(new Date());\n\n  useEffect(() => {\n    const timerId = window.setInterval(() => {\n      setNow(new Date());\n    }, 1000);\n\n    return () => window.clearInterval(timerId);\n  }, []);\n\n  return <p>{now.toLocaleTimeString()}</p>;\n}",
    practice: [
      'Create a component that updates the current time every second.',
      'Write an effect that performs cleanup when the component unmounts.',
      'List three situations where `useEffect` should not be used.',
    ],
    reasons: [
      'Without understanding effects, it is easy to create duplicate requests, memory leaks, or infinite reruns.',
      'Effects are where React connects to the outside world.',
    ],
    mistakes: [
      'Putting pure data transformation logic inside `useEffect`.',
      'Forgetting cleanup and leaving timers or listeners behind.',
    ],
    takeaways: [
      '`useEffect` is not a general-purpose logic box. It exists to handle side effects.',
      'Dependency arrays and cleanup are central to writing correct effects.',
    ],
    references: [
      { label: 'React docs · Synchronizing with Effects', url: 'https://react.dev/learn/synchronizing-with-effects' },
      { label: 'React docs · You might not need an Effect', url: 'https://react.dev/learn/you-might-not-need-an-effect' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: 'Lifting state and sharing logic',
    summary: 'Organize state across components and avoid duplication.',
    moduleTitle: 'Module 2 · State and hooks',
    intro: 'When multiple components need the same piece of data, deciding where state belongs becomes a design problem rather than a syntax problem.',
    learningPoints: [
      'Understand the idea of lifting state up.',
      'Know which parent should manage shared data.',
      'Reduce inconsistency caused by duplicated state.',
    ],
    lessonNotes: [
      'If two sibling components depend on the same data, they should not each store their own copy of that state. Separate copies quickly fall out of sync.',
      'Lifting state means moving shared data up to the nearest common parent and passing it down through props.',
      'The real goal is not simply "moving state upward." It is creating a single source of truth that keeps the design clear.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useState } from 'react';\n\nfunction SearchBox({ keyword, onChange }: { keyword: string; onChange: (value: string) => void }) {\n  return <input value={keyword} onChange={(event) => onChange(event.target.value)} />;\n}\n\nfunction Preview({ keyword }: { keyword: string }) {\n  return <p>Searching for: {keyword}</p>;\n}\n\nexport default function SearchPanel() {\n  const [keyword, setKeyword] = useState('');\n\n  return (\n    <>\n      <SearchBox keyword={keyword} onChange={setKeyword} />\n      <Preview keyword={keyword} />\n    </>\n  );\n}",
    practice: [
      'Create two sibling components that share the same search keyword.',
      'Refactor duplicated state so a parent component manages it in one place.',
      'Draw a simple data-flow diagram that shows which layer should own the state.',
    ],
    reasons: [
      'Shared data is one of the most common design problems in medium-sized apps.',
      'If state lives in the wrong place, forms, filters, and synchronized lists become harder to maintain.',
    ],
    mistakes: [
      'Keeping separate state copies of the same data in multiple components.',
      'Lifting state too far up and making top-level components unnecessarily heavy.',
    ],
    takeaways: [
      'The goal of shared state is to create a single source of truth.',
      'State should live at the most reasonable layer closest to the shared need.',
    ],
    references: [
      { label: 'React docs · Sharing state between components', url: 'https://react.dev/learn/sharing-state-between-components' },
      { label: 'React docs · Passing data deeply with context', url: 'https://react.dev/learn/passing-data-deeply-with-context' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: 'Client-side routing',
    summary: 'Add page transitions and navigation structure to multi-screen apps.',
    moduleTitle: 'Module 3 · App structure',
    intro: 'Once an app has more than one screen, routing defines how users move between different pages and views.',
    learningPoints: [
      'Understand the purpose of client-side routing.',
      'See the relationship between routes, layouts, and navigation.',
      'Think clearly about the structure of a multi-screen app.',
    ],
    lessonNotes: [
      'In a single-page app, routing does not reload the whole document. The frontend decides which screen should be shown based on the current route.',
      'When routes are designed clearly, navigation, breadcrumbs, active menu state, and layout reuse all become more natural.',
      'This lesson is not only about learning a router API. It is about building a solid information architecture for multi-screen applications.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';\n\nfunction HomePage() {\n  return <h2>Home</h2>;\n}\n\nfunction CoursesPage() {\n  return <h2>Courses</h2>;\n}\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to=\"/\">Home</Link>\n        <Link to=\"/courses\">Courses</Link>\n      </nav>\n      <Routes>\n        <Route path=\"/\" element={<HomePage />} />\n        <Route path=\"/courses\" element={<CoursesPage />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
    practice: [
      'Build the smallest possible two-page React app.',
      'Add a shared layout to one of those pages.',
      'Sketch a route map that shows the relationship between a homepage, a list page, and a detail page.',
    ],
    reasons: [
      'As soon as an app has more than one screen, routing shapes the whole structure.',
      'The earlier you think through information architecture, the lower the refactor cost later.',
    ],
    mistakes: [
      'Letting routes grow randomly first and only later trying to patch in layout and navigation.',
      'Thinking of routing as only URL switching and ignoring screen structure and state flow.',
    ],
    takeaways: [
      'Routing is the skeleton of a multi-screen React app.',
      'Route design is not only a technical problem. It is also an information architecture problem.',
    ],
    references: [
      { label: 'React Router docs', url: 'https://reactrouter.com/en/main' },
      { label: 'React docs · Preserving and resetting state', url: 'https://react.dev/learn/preserving-and-resetting-state' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: 'Forms and controlled inputs',
    summary: 'Capture user input cleanly and validate common form interactions.',
    moduleTitle: 'Module 3 · App structure',
    intro: 'Forms are one of the most common places where React apps become messy because they involve state, events, and validation at the same time.',
    learningPoints: [
      'Understand the idea of a controlled input.',
      'Bind input values to React state.',
      'Handle common form submission flows cleanly.',
    ],
    lessonNotes: [
      'A controlled input means the input value comes from React state, and user typing updates that state through `onChange`.',
      'This approach makes form data easier to validate, reset, display elsewhere, and synchronize with other UI states.',
      'As forms grow larger, field naming, initial values, and submission flow need to be planned early or the whole form quickly becomes chaotic.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useState } from 'react';\n\nexport default function SignupForm() {\n  const [email, setEmail] = useState('');\n\n  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {\n    event.preventDefault();\n    console.log('submitted:', email);\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type=\"email\"\n        value={email}\n        onChange={(event) => setEmail(event.target.value)}\n      />\n      <button type=\"submit\">Send</button>\n    </form>\n  );\n}",
    practice: [
      'Build a login form with an email field and a password field.',
      'Add simple required validation and an error message.',
      'Clear the form after submit and confirm the data flow still works.',
    ],
    reasons: [
      'Forms exist in almost every product, so they are a required frontend skill.',
      'Controlled inputs are one of the clearest examples of how React manages data flow.',
    ],
    mistakes: [
      'Managing some fields with React state while leaving other fields uncontrolled and creating inconsistent data flow.',
      'Only discovering at submit time that the state and displayed values are out of sync.',
    ],
    takeaways: [
      'Controlled inputs keep form data and UI inside the same data flow.',
      'The earlier you plan form structure, the easier validation and maintenance become.',
    ],
    references: [
      { label: 'React docs · Responding to input with state', url: 'https://react.dev/learn/reacting-to-input-with-state' },
      { label: 'React docs · Choosing the state structure', url: 'https://react.dev/learn/choosing-the-state-structure' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'Project structure for medium-sized apps',
    summary: 'Organize components, hooks, and pages so the code stays readable.',
    moduleTitle: 'Module 3 · App structure',
    intro: 'Once an app reaches a certain size, the file structure itself starts to affect development speed and team readability.',
    learningPoints: [
      'Understand common structural layers in a medium-sized React app.',
      'Know what belongs in `components`, `pages`, `hooks`, and `features`.',
      'Avoid letting a project become a cluttered directory from the start.',
    ],
    lessonNotes: [
      'There is no single perfect project structure, but every structure should serve readability, reuse, and maintenance cost.',
      'If shared components, page logic, custom hooks, and feature modules are not separated clearly, the file tree quickly gets out of control.',
      'The goal is not memorizing folder names. It is learning to split responsibilities so the app still makes sense as it grows.',
    ],
    exampleLanguage: 'text',
    exampleCode: "src/\n  components/\n  features/\n    auth/\n    courses/\n  hooks/\n  layouts/\n  pages/\n  routes/\n  utils/",
    practice: [
      'Reorganize a small React project into a cleaner folder structure.',
      'Define the boundaries between pages, shared components, and feature-specific components in your current project.',
      'List which files are currently in the wrong place and how you would regroup them.',
    ],
    reasons: [
      'Once project structure becomes messy, every future change gets slower.',
      'A good structure directly affects team collaboration and scalability.',
    ],
    mistakes: [
      'Throwing every component into one flat `components` folder.',
      'Over-designing folder hierarchies before the responsibility boundaries are clear.',
    ],
    takeaways: [
      'The point of structure is readability and maintainability, not looking sophisticated through more folders.',
      'Clear responsibility boundaries make a React app much steadier as it expands.',
    ],
    references: [
      { label: 'React docs · Scaling up with reducer and context', url: 'https://react.dev/learn/scaling-up-with-reducer-and-context' },
      { label: 'React docs · Reusing logic with custom hooks', url: 'https://react.dev/learn/reusing-logic-with-custom-hooks' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'Fetching data in React apps',
    summary: 'Load remote data safely and understand where fetching fits in the UI lifecycle.',
    moduleTitle: 'Module 4 · Data fetching and async UI',
    intro: 'Real frontend work rarely stays on static data. This lesson starts connecting the UI to APIs and remote data sources.',
    learningPoints: [
      'Understand where data fetching fits in the React UI lifecycle.',
      'Know when a request should be triggered inside a component.',
      'Build the smallest understandable fetching flow.',
    ],
    lessonNotes: [
      'Fetching is not only about getting a successful response. You also need to design loading, success, and failure states together.',
      'In React, fetching often appears alongside effects because it synchronizes the app with an external system.',
      'The most important thing in this lesson is understanding the data flow: when a request starts, how state updates after it returns, and how the screen should respond.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useEffect, useState } from 'react';\n\ntype Course = {\n  id: number;\n  title: string;\n};\n\nexport default function CourseList() {\n  const [courses, setCourses] = useState<Course[]>([]);\n\n  useEffect(() => {\n    fetch('/api/courses')\n      .then((response) => response.json())\n      .then((data) => setCourses(data));\n  }, []);\n\n  return (\n    <ul>\n      {courses.map((course) => (\n        <li key={course.id}>{course.title}</li>\n      ))}\n    </ul>\n  );\n}",
    practice: [
      'Build a small course list page that fetches data from a mock API.',
      'Render the fetched data in a simple list.',
      'Explain what the screen should look like before the request, during the request, and after the request finishes.',
    ],
    reasons: [
      'Most real applications depend on remote data, not only local constants.',
      'Without a solid async UI mental model, data flow becomes messy very quickly.',
    ],
    mistakes: [
      'Only handling the success state and ignoring loading and failure.',
      'Writing fetching logic too casually and making components hard to maintain as they grow.',
    ],
    takeaways: [
      'Data fetching is where UI starts connecting to the outside world.',
      'Fetching must be designed together with screen states, not treated as just a data retrieval step.',
    ],
    references: [
      { label: 'React docs · Synchronizing with Effects', url: 'https://react.dev/learn/synchronizing-with-effects' },
      { label: 'MDN · Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: 'Loading, error, and empty states',
    summary: 'Design UI states that make async data feel reliable and clear to users.',
    moduleTitle: 'Module 4 · Data fetching and async UI',
    intro: 'A trustworthy UI is not one that looks good only when data loads successfully. It is one where every state feels clear and expected.',
    learningPoints: [
      'Understand that loading, error, and empty are the basic states of async UI.',
      'Present those states clearly in the interface.',
      'Avoid designing only for the happy path.',
    ],
    lessonNotes: [
      'A lot of frontend quality is revealed not by the success state, but by whether users can still understand what is happening during loading or after an error.',
      'Empty data is also a valid state. Users should not be left staring at a blank screen without knowing whether there is no data or whether the system is broken.',
      'The point of these states is not fancy animation. It is clarity, trust, and recovery.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "if (isLoading) {\n  return <p>Loading courses...</p>;\n}\n\nif (error) {\n  return <p>Something went wrong. Please try again.</p>;\n}\n\nif (courses.length === 0) {\n  return <p>No courses yet.</p>;\n}\n\nreturn <CourseGrid courses={courses} />;",
    practice: [
      'Add loading, error, and empty UI to one of your data list pages.',
      'Think about what message users should receive in each state.',
      'Add a retry action to the error state.',
    ],
    reasons: [
      'Users do not interact with a product only in success scenarios.',
      'Async UI quality directly affects how trustworthy a product feels.',
    ],
    mistakes: [
      'Designing a polished success state but leaving the whole page blank on failure.',
      'Mistaking an empty state for an error state.',
    ],
    takeaways: [
      'Loading, error, and empty are not edge cases. They are part of the UI itself.',
      'Good screens handle more than the happy path.',
    ],
    references: [
      { label: 'React docs · Conditional rendering', url: 'https://react.dev/learn/conditional-rendering' },
      { label: 'Nielsen Norman Group · Empty state guidelines', url: 'https://www.nngroup.com/articles/empty-state/' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'Custom hooks for reusable async logic',
    summary: 'Extract repeated fetching and state patterns into reusable hooks.',
    moduleTitle: 'Module 4 · Data fetching and async UI',
    intro: 'When the same fetching and state flow appears again and again, a custom hook helps you raise the level of reuse.',
    learningPoints: [
      'Understand the value of custom hooks.',
      'Recognize what kind of logic should be extracted into a hook.',
      'Turn repeated async flows into shared logic.',
    ],
    lessonNotes: [
      'A custom hook is not magic. It is simply a function that packages reusable React logic so multiple components can share behavior.',
      'For async UI, fetching, loading state, and error handling are often good candidates for extraction into a hook.',
      'A good custom hook keeps components focused on rendering rather than repeating the same data-flow boilerplate everywhere.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useEffect, useState } from 'react';\n\nexport function useCourses() {\n  const [courses, setCourses] = useState([]);\n  const [isLoading, setIsLoading] = useState(true);\n\n  useEffect(() => {\n    fetch('/api/courses')\n      .then((response) => response.json())\n      .then((data) => setCourses(data))\n      .finally(() => setIsLoading(false));\n  }, []);\n\n  return { courses, isLoading };\n}",
    practice: [
      'Extract one repeated fetching flow into a custom hook.',
      'Let two different components share the same hook.',
      'Check whether the hook API feels clear and easy to read.',
    ],
    reasons: [
      'Repeated async logic quickly makes multi-page apps hard to maintain.',
      'Custom hooks are one of the main ways React encourages logic reuse.',
    ],
    mistakes: [
      'Extracting a hook just for the sake of extraction and making the code harder to understand.',
      'Packing too many unrelated responsibilities into one hook.',
    ],
    takeaways: [
      'The goal of a custom hook is logic reuse, not merely splitting code into more files.',
      'When presentation and data-flow responsibilities are clear, React apps become much steadier.',
    ],
    references: [
      { label: 'React docs · Reusing logic with custom hooks', url: 'https://react.dev/learn/reusing-logic-with-custom-hooks' },
      { label: 'React docs · Building your own hooks', url: 'https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: 'Context for shared application state',
    summary: 'Share state across distant components without threading props through every layer.',
    moduleTitle: 'Module 5 · State scaling and performance',
    intro: 'When state must be shared across many layers, Context helps reduce the burden of drilling props through every intermediate component.',
    learningPoints: [
      'Understand what problem Context solves.',
      'Know when Context is an appropriate tool.',
      'Avoid using Context to solve everything.',
    ],
    lessonNotes: [
      'Context works well for data that is shared across many layers and read in many places, such as theme, authentication, or locale.',
      'Its value is that you do not need to manually pass props down through many intermediate levels.',
      'But Context is not a magic solution for all global state. If it is overused, state dependencies become harder to understand.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { createContext, useContext } from 'react';\n\nconst ThemeContext = createContext('light');\n\nfunction ThemeLabel() {\n  const theme = useContext(ThemeContext);\n  return <p>Current theme: {theme}</p>;\n}\n\nexport default function App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <ThemeLabel />\n    </ThemeContext.Provider>\n  );\n}",
    practice: [
      'Build a simple theme context.',
      'Pass auth user or locale data with Context instead of deep props.',
      'Analyze which data in your app does not actually need Context.',
    ],
    reasons: [
      'Medium-sized apps often run into deep prop drilling.',
      'Context is one of React’s core built-in tools for shared state.',
    ],
    mistakes: [
      'Putting every piece of state into Context and losing control of dependencies.',
      'Using Context without first checking whether the data truly needs to be shared across many layers.',
    ],
    takeaways: [
      'Context exists to solve cross-layer shared data, not to replace every other state pattern.',
      'Judge the sharing scope first, then decide whether Context is the right tool.',
    ],
    references: [
      { label: 'React docs · Passing data deeply with context', url: 'https://react.dev/learn/passing-data-deeply-with-context' },
      { label: 'React docs · Scaling up with reducer and context', url: 'https://react.dev/learn/scaling-up-with-reducer-and-context' },
    ],
  },
  {
    lesson: 14,
    slug: 'lesson-14',
    title: 'Memoization and rendering performance',
    summary: 'Understand when React rerenders and how to avoid unnecessary work.',
    moduleTitle: 'Module 5 · State scaling and performance',
    intro: 'Performance optimization is not about adding memoization everywhere from day one. It starts with understanding why React rerenders in the first place.',
    learningPoints: [
      'Understand the common causes of rerenders.',
      'Know what `memo`, `useMemo`, and `useCallback` are for.',
      'Tell the difference between a real performance issue and premature optimization.',
    ],
    lessonNotes: [
      'A rerender is not automatically a bad thing. The real concern is expensive calculations or large child trees rerunning when they do not need to.',
      'Memoization tools can reduce unnecessary work in the right situations, but only when you first know where the bottleneck actually is.',
      'If you add memoization everywhere before observing a problem, the code usually becomes more complex without providing meaningful value.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { memo } from 'react';\n\nconst CourseRow = memo(function CourseRow({ title }: { title: string }) {\n  return <li>{title}</li>;\n});\n\nexport default function CourseList({ titles }: { titles: string[] }) {\n  return (\n    <ul>\n      {titles.map((title) => (\n        <CourseRow key={title} title={title} />\n      ))}\n    </ul>\n  );\n}",
    practice: [
      'Inspect a list component and observe which parts rerender repeatedly.',
      'Try memoization only in a place where you can see a real problem.',
      'Compare the readability and the benefit before and after optimization.',
    ],
    reasons: [
      'Medium-sized frontend projects often run into unnecessary rerenders.',
      'Performance work requires observation and judgment, not only API memorization.',
    ],
    mistakes: [
      'Adding `useMemo` and `useCallback` everywhere before finding a bottleneck.',
      'Over-optimizing simple code until it becomes hard to read.',
    ],
    takeaways: [
      'Understand the rerender first, then decide whether memoization is needed.',
      'Always weigh readability together with real performance benefit.',
    ],
    references: [
      { label: 'React docs · memo', url: 'https://react.dev/reference/react/memo' },
      { label: 'React docs · useMemo', url: 'https://react.dev/reference/react/useMemo' },
    ],
  },
  {
    lesson: 15,
    slug: 'lesson-15',
    title: 'Testing React components and user flows',
    summary: 'Write practical tests that verify what users can see and do.',
    moduleTitle: 'Module 6 · Testing and shipping',
    intro: 'Testing is not about chasing numbers. It is about making sure users can really see the right UI and complete the right actions.',
    learningPoints: [
      'Understand the basic goal of React component testing.',
      'Test user behavior instead of only internal implementation.',
      'Use tests to protect critical flows.',
    ],
    lessonNotes: [
      'The most valuable part of frontend testing is usually not checking an internal hook value. It is confirming that users can actually see the UI, click the button, and complete the workflow.',
      'That is why good tests tend to look more like user behavior and less like a mirror of implementation details.',
      'The point of this lesson is to treat testing as a way to protect behavior and flows, not as ceremony added to a project.',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport Counter from './Counter';\n\ntest('increases the count when button is clicked', async () => {\n  const user = userEvent.setup();\n  render(<Counter />);\n\n  await user.click(screen.getByRole('button', { name: /increase/i }));\n\n  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();\n});",
    practice: [
      'Add a user interaction test to a simple form or counter component.',
      'Check that the test describes user behavior rather than internal implementation.',
      'Choose one flow you are most afraid of breaking and write a test that protects it first.',
    ],
    reasons: [
      'As frontend features grow, changes become stressful without tests.',
      'Tests help protect the interaction flows that matter most.',
    ],
    mistakes: [
      'Testing too many implementation details so refactors break lots of tests.',
      'Treating tests like a checkbox instead of aiming them at important flows.',
    ],
    takeaways: [
      'Good frontend tests should stay close to the user’s perspective.',
      'Tests are most valuable when they protect important interaction flows.',
    ],
    references: [
      { label: 'Testing Library docs', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
      { label: 'React docs · Testing', url: 'https://react.dev/learn/testing' },
    ],
  },
  {
    lesson: 16,
    slug: 'lesson-16',
    title: 'Build and deploy a React application',
    summary: 'Prepare the app for production with a clean build and deployment workflow.',
    moduleTitle: 'Module 6 · Testing and shipping',
    intro: 'The final lesson takes React from local development to something ready to ship: build, deploy, and production checks.',
    learningPoints: [
      'Understand the difference between a build environment and a development environment.',
      'Know what to check before deployment.',
      'Move a React app from development mode into a production-ready state.',
    ],
    lessonNotes: [
      'Just because an app runs in development does not mean it is ready for production. Asset paths, environment variables, API locations, and build output all need to be checked again.',
      'Deploying is not only about uploading files. It means confirming that the build result, routing, static assets, environment configuration, and user flows all work on the live site.',
      'The goal of this lesson is to build a pre-release checking habit so the frontend project truly reaches production quality.',
    ],
    exampleLanguage: 'bash',
    exampleCode: "npm run build\n# inspect the output\n# deploy the dist folder to your hosting platform",
    practice: [
      'Run a full production build locally.',
      'Check whether static assets, routes, and environment variables still behave correctly in production mode.',
      'Create your own deployment checklist.',
    ],
    reasons: [
      'A teaching site or real product eventually has to be deployed.',
      'Many bugs only appear in production.',
    ],
    mistakes: [
      'Validating only in development and never inspecting the production build.',
      'Skipping checks for asset paths and environment variables.',
    ],
    takeaways: [
      'Build and deploy are the final stretch of the frontend workflow, not optional side topics.',
      'Production quality comes from checking before release, not fixing everything after release.',
    ],
    references: [
      { label: 'Vite docs · Building for production', url: 'https://vite.dev/guide/build.html' },
      { label: 'React docs · Production checklist', url: 'https://react.dev/learn' },
    ],
  },
];

export function getReactLessons() {
  return reactLessons;
}

export function getReactLessonBySlug(slug: string) {
  return reactLessons.find((lesson) => lesson.slug === slug) ?? null;
}
