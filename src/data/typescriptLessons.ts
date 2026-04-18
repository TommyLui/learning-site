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

export const typescriptLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: 'What TypeScript adds to JavaScript',
    summary: 'Learn the value of static types and the compile-time feedback loop.',
    moduleTitle: 'Module 1 · TypeScript foundations and setup',
    intro: 'This lesson explains why TypeScript exists and how it improves day-to-day JavaScript development.',
    learningPoints: [
      'Understand the difference between runtime bugs and compile-time checks.',
      'See how types improve editor hints and refactoring confidence.',
      'Know what TypeScript does not change about JavaScript runtime behavior.',
    ],
    lessonNotes: [
      'TypeScript adds a static type system on top of JavaScript, helping catch mistakes before running code.',
      'The compiler and editor can identify mismatched shapes, missing fields, and unsafe function usage early.',
      'TypeScript does not replace JavaScript runtime logic. It improves feedback before code reaches production.',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `type User = {
  id: string
  name: string
}

function welcome(user: User) {
  return user.name + ' (' + user.id + ')'
}

welcome({ id: 'u1', name: 'Tommy' })`,
    practice: [
      'List two runtime bugs that static typing could have prevented.',
      'Write one function with explicit parameter types and test editor autocomplete.',
      'Compare the same snippet in JavaScript and TypeScript and note feedback differences.',
    ],
    reasons: [
      'TypeScript adoption succeeds when the team understands why types are useful.',
      'Early type feedback reduces production regressions and review overhead.',
    ],
    mistakes: [
      'Assuming TypeScript removes all runtime validation needs.',
      'Treating type errors as noise instead of design feedback.',
    ],
    takeaways: [
      'TypeScript improves reliability by shifting many mistakes earlier.',
      'Static types support maintainability, especially as projects grow.',
    ],
    references: [
      { label: 'TypeScript Handbook · Introduction', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' },
      { label: 'TypeScript Docs · TypeScript for JavaScript Programmers', url: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'Setup, Playground, and tsconfig basics',
    summary: 'Run TypeScript locally, explore the Playground, and understand essential tsconfig options.',
    moduleTitle: 'Module 1 · TypeScript foundations and setup',
    intro: 'A clean setup helps you learn faster and avoids confusing compiler behavior later.',
    learningPoints: [
      'Install TypeScript and run the compiler from CLI.',
      'Use the TypeScript Playground for quick experiments.',
      'Understand core tsconfig fields such as strict and target.',
    ],
    lessonNotes: [
      'The TypeScript compiler (tsc) converts TypeScript into JavaScript and reports type issues.',
      'The Playground is useful for trying ideas without creating full projects.',
      'tsconfig settings define how strict and compatible your project type checks should be.',
    ],
    exampleLanguage: 'bash',
    exampleCode: `npm install --save-dev typescript
npx tsc --init
npx tsc --noEmit

# useful config fields
# "strict": true
# "target": "ES2022"
# "module": "ESNext"`,
    practice: [
      'Initialize a new TypeScript project and run type-check once.',
      'Toggle strict mode and observe diagnostic differences.',
      'Try one snippet in Playground and share the link in notes.',
    ],
    reasons: [
      'Many team disagreements come from inconsistent tsconfig behavior.',
      'Local tooling fluency makes migration and debugging much easier.',
    ],
    mistakes: [
      'Copying a tsconfig without understanding the options.',
      'Disabling strict checks too early to silence errors.',
    ],
    takeaways: [
      'TypeScript setup is simple, but configuration choices matter.',
      'Playground + local compiler is a strong learning workflow.',
    ],
    references: [
      { label: 'TypeScript Docs · TSConfig Reference', url: 'https://www.typescriptlang.org/tsconfig' },
      { label: 'TypeScript Playground', url: 'https://www.typescriptlang.org/play' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: 'Basic types and type inference',
    summary: 'Work with primitive types and let TypeScript infer safe defaults where appropriate.',
    moduleTitle: 'Module 1 · TypeScript foundations and setup',
    intro: 'This lesson builds your first practical type habits: explicit where useful, inferred where clear.',
    learningPoints: [
      'Use primitive types such as string, number, and boolean.',
      'Understand when TypeScript infers types automatically.',
      'Avoid broad any usage in new code.',
    ],
    lessonNotes: [
      'Type inference is often enough for local variables with clear assignments.',
      'Function parameters and public APIs usually benefit from explicit type annotations.',
      'The any type bypasses safety and should be used sparingly and intentionally.',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `let title = 'TypeScript Basics'
let lessonCount: number = 14
let published = true

function formatLabel(name: string, count: number) {
  return name + ' (' + count + ')'
}`,
    practice: [
      'Annotate types for three function parameters in your project.',
      'Remove unnecessary annotations where inference is already clear.',
      'Replace one any with a safer concrete type.',
    ],
    reasons: [
      'Basic type fluency is required for all later advanced constructs.',
      'Inference + explicit typing balance keeps code readable and safe.',
    ],
    mistakes: [
      'Annotating every local variable without clear benefit.',
      'Leaving unknown values as any instead of narrowing them.',
    ],
    takeaways: [
      'Use explicit types for clarity at boundaries and inference for simple locals.',
      'Avoid any unless you deliberately accept tradeoffs.',
    ],
    references: [
      { label: 'TypeScript Handbook · Everyday Types', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html' },
      { label: 'TypeScript Handbook · Everyday Types (Primitives)', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'Objects, arrays, tuples, and literal types',
    summary: 'Define richer value shapes and encode fixed choices with literal types.',
    moduleTitle: 'Module 2 · Core type modeling',
    intro: 'This lesson teaches practical modeling for common data structures used in UI and API code.',
    learningPoints: [
      'Type object shapes with required and optional fields.',
      'Use arrays and tuples for sequential data.',
      'Use literal types for constrained values such as status strings.',
    ],
    lessonNotes: [
      'Object and array types form the backbone of most application models.',
      'Tuples are useful when position has meaning, such as [label, value].',
      'Literal types help prevent invalid states by restricting allowed values.',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `type LessonStatus = 'draft' | 'published'

type Lesson = {
  title: string
  tags: string[]
  status: LessonStatus
  summary?: string
}

const progress: [string, number] = ['typescript', 7]`,
    practice: [
      'Define one object type for course metadata.',
      'Use a tuple for one UI helper that returns two values.',
      'Replace free-form status strings with a literal union.',
    ],
    reasons: [
      'Data modeling quality directly impacts bug rates and readability.',
      'Literal constraints prevent common invalid-state errors.',
    ],
    mistakes: [
      'Using broad string when only a few values are valid.',
      'Using tuple types when object keys would be clearer.',
    ],
    takeaways: [
      'Object, array, tuple, and literal types cover most everyday data modeling.',
      'Constrained types make code safer and more self-documenting.',
    ],
    references: [
      { label: 'TypeScript Handbook · Object Types', url: 'https://www.typescriptlang.org/docs/handbook/2/objects.html' },
      { label: 'TypeScript Handbook · Literal Types', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: 'Functions, parameters, and return types',
    summary: 'Write explicit function signatures that make behavior easier to understand and test.',
    moduleTitle: 'Module 2 · Core type modeling',
    intro: 'Function contracts are where TypeScript gives immediate clarity in business logic and utilities.',
    learningPoints: [
      'Annotate parameter and return types intentionally.',
      'Use optional and default parameters safely.',
      'Model callback signatures clearly.',
    ],
    lessonNotes: [
      'Function types document input and output expectations for both humans and tooling.',
      'Return type annotations are especially useful at module boundaries and shared utilities.',
      'Clear callback signatures reduce confusion in array operations and async helpers.',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `function calculateDiscount(total: number, rate = 0.1): number {
  return total * rate
}

type Formatter = (value: number) => string

const formatPrice: Formatter = (value) => '$' + value.toFixed(2)`,
    practice: [
      'Add explicit return types to three exported functions.',
      'Define one reusable callback type alias.',
      'Refactor one function with unclear parameters into named options object.',
    ],
    reasons: [
      'Function signatures are core communication points in any codebase.',
      'Typed functions reduce accidental misuse across files.',
    ],
    mistakes: [
      'Relying on implicit any parameters in utility functions.',
      'Overusing very complex function types without readability boundaries.',
    ],
    takeaways: [
      'Well-typed functions improve both correctness and collaboration speed.',
      'Simple explicit signatures outperform clever but opaque type tricks.',
    ],
    references: [
      { label: 'TypeScript Handbook · More on Functions', url: 'https://www.typescriptlang.org/docs/handbook/2/functions.html' },
      { label: 'TypeScript Handbook · Functions', url: 'https://www.typescriptlang.org/docs/handbook/functions.html' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: 'Unions and intersections',
    summary: 'Combine type alternatives and shared capabilities without losing readability.',
    moduleTitle: 'Module 2 · Core type modeling',
    intro: 'This lesson introduces flexible composition patterns used in APIs, UI states, and reusable domain models.',
    learningPoints: [
      'Use union types to represent alternatives.',
      'Use intersection types to combine compatible contracts.',
      'Keep composed types readable through naming and grouping.',
    ],
    lessonNotes: [
      'Unions are ideal for values that may be one of several known types.',
      'Intersections combine properties from multiple type definitions into one required shape.',
      'Good naming is essential when compositions become non-trivial.',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `type ApiSuccess = { ok: true; data: string[] }
type ApiError = { ok: false; message: string }
type ApiResult = ApiSuccess | ApiError

type Timestamped = { updatedAt: string }
type LessonSummary = { title: string } & Timestamped`,
    practice: [
      'Model one API response as a union of success and failure.',
      'Create one intersection type for shared metadata fields.',
      'Refactor one large inline type into named union parts.',
    ],
    reasons: [
      'Union modeling is common in async results and UI state handling.',
      'Intersection composition can reduce duplication in domain models.',
    ],
    mistakes: [
      'Combining too many unrelated types into one hard-to-read union.',
      'Using intersection when properties conflict conceptually.',
    ],
    takeaways: [
      'Unions represent alternatives; intersections represent composition.',
      'Readable type composition needs clear names and boundaries.',
    ],
    references: [
      { label: 'TypeScript Handbook · Union Types', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types' },
      { label: 'TypeScript Handbook · Creating Types from Types', url: 'https://www.typescriptlang.org/docs/handbook/2/types-from-types.html' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: 'Narrowing and type guards',
    summary: 'Use runtime checks to safely narrow union types in branching logic.',
    moduleTitle: 'Module 3 · Narrowing and reusable contracts',
    intro: 'Narrowing turns flexible union types into safe concrete handling paths during control flow.',
    learningPoints: [
      'Use typeof, in, and equality checks for narrowing.',
      'Create custom type guard functions for reusable checks.',
      'Avoid unsafe assumptions when handling unknown input.',
    ],
    lessonNotes: [
      'TypeScript tracks control flow and narrows possible types after reliable runtime checks.',
      'Custom type guards help centralize validation logic and improve reuse.',
      'Narrowing is especially useful for API parsing and user-input handling.',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `type LessonInput = string | { title: string }

function getTitle(input: LessonInput): string {
  if (typeof input === 'string') {
    return input
  }
  return input.title
}`,
    practice: [
      'Write one custom type guard for an API payload.',
      'Refactor one function that used as any into narrowed branches.',
      'Use exhaustive checks in a small union switch statement.',
    ],
    reasons: [
      'Narrowing bridges static typing with runtime uncertainty.',
      'Safe parsing logic prevents subtle production data bugs.',
    ],
    mistakes: [
      'Casting values instead of checking them at runtime.',
      'Skipping unknown handling when consuming external data.',
    ],
    takeaways: [
      'Type guards make union handling explicit and safe.',
      'Good narrowing is essential for reliable boundary code.',
    ],
    references: [
      { label: 'TypeScript Handbook · Narrowing', url: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html' },
      { label: 'TypeScript Handbook · Unknown', url: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: 'Interfaces vs type aliases',
    summary: 'Choose the right abstraction for object contracts and composable type definitions.',
    moduleTitle: 'Module 3 · Narrowing and reusable contracts',
    intro: 'This lesson compares two common tools and shows when each keeps code clearer.',
    learningPoints: [
      'Define object contracts with interfaces.',
      'Use type aliases for unions, primitives, and mapped compositions.',
      'Choose consistently based on team readability needs.',
    ],
    lessonNotes: [
      'Interfaces are often used for object-shaped contracts and can be extended or merged.',
      'Type aliases are more flexible for unions, intersections, and utility-style transformations.',
      'Both are valid. Consistency and clarity are more important than strict dogma.',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `interface Lesson {
  title: string
  duration: number
}

type LessonState = 'draft' | 'published'

type LessonCard = Lesson & { state: LessonState }`,
    practice: [
      'Convert one interface to type alias and compare readability.',
      'Model one union with type alias and one object contract with interface.',
      'Document your team rule of thumb for choosing each.',
    ],
    reasons: [
      'Mixed style without rationale can confuse reviewers and learners.',
      'Knowing tradeoffs helps when reading third-party type definitions.',
    ],
    mistakes: [
      'Debating interface vs type without considering real project context.',
      'Using one style exclusively when the other would be clearer.',
    ],
    takeaways: [
      'Interfaces and type aliases are complementary tools.',
      'Choose based on expressiveness and readability in your codebase.',
    ],
    references: [
      { label: 'TypeScript Handbook · Object Types (Interfaces)', url: 'https://www.typescriptlang.org/docs/handbook/2/objects.html' },
      { label: 'TypeScript Handbook · Type Aliases', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'Optional, readonly, and indexed access types',
    summary: 'Model optional fields, immutable contracts, and property-level type access safely.',
    moduleTitle: 'Module 3 · Narrowing and reusable contracts',
    intro: 'This lesson introduces small but powerful type tools that improve object safety without heavy complexity.',
    learningPoints: [
      'Mark fields optional and handle them safely.',
      'Use readonly to protect immutable contracts.',
      'Use indexed access types to reference nested property types.',
    ],
    lessonNotes: [
      'Optional fields model real-world incomplete input, but require null-safe access patterns.',
      'Readonly properties prevent accidental mutation and clarify ownership boundaries.',
      'Indexed access types help reuse existing model structure instead of duplicating type declarations.',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `type Lesson = {
  readonly id: string
  title: string
  summary?: string
}

type LessonTitle = Lesson['title']

const lesson: Lesson = { id: 'l1', title: 'Intro' }`,
    practice: [
      'Add readonly to one ID field that should never change.',
      'Refactor optional field handling with safe checks.',
      'Extract one property type using indexed access syntax.',
    ],
    reasons: [
      'These modifiers prevent common object-shape and mutation bugs.',
      'Small typing improvements compound quickly in medium-sized projects.',
    ],
    mistakes: [
      'Marking too many fields optional and losing model clarity.',
      'Ignoring readonly signals and forcing mutation through casts.',
    ],
    takeaways: [
      'Optional and readonly are practical safety tools for model contracts.',
      'Indexed access types reduce duplication and keep models aligned.',
    ],
    references: [
      { label: 'TypeScript Handbook · Optional Properties', url: 'https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties' },
      { label: 'TypeScript Handbook · Indexed Access Types', url: 'https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'Generics for reusable components and helpers',
    summary: 'Create type-safe reusable functions and data containers without duplication.',
    moduleTitle: 'Module 4 · Generics, modules, and async types',
    intro: 'Generics let you keep APIs reusable while preserving strong type information.',
    learningPoints: [
      'Define generic functions with type parameters.',
      'Use constraints when generic values need specific fields.',
      'Keep generic signatures simple and readable.',
    ],
    lessonNotes: [
      'Generics avoid copy-pasting the same function for multiple data types.',
      'Constraints ensure generic code still has access to required properties safely.',
      'Readable generic names and boundaries matter more than maximum abstraction.',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `function firstItem<T>(items: T[]): T | undefined {
  return items[0]
}

function withId<T extends { id: string }>(item: T): string {
  return item.id
}`,
    practice: [
      'Create one generic helper for paginated list data.',
      'Add a constraint to a generic function that requires a key field.',
      'Rename unclear generic type parameters to meaningful names.',
    ],
    reasons: [
      'Reusable typed utilities are common in frontend and backend code.',
      'Generics support abstraction without giving up type safety.',
    ],
    mistakes: [
      'Adding generics where concrete types are clearer.',
      'Writing deeply nested generics that hide intent.',
    ],
    takeaways: [
      'Generics are for reuse with safety, not complexity for its own sake.',
      'Constraints are key when generic code depends on specific shape.',
    ],
    references: [
      { label: 'TypeScript Handbook · Generics', url: 'https://www.typescriptlang.org/docs/handbook/2/generics.html' },
      { label: 'TypeScript Handbook · Generic Constraints', url: 'https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: 'Modules with imports and exports',
    summary: 'Split code into maintainable files and keep shared types predictable across modules.',
    moduleTitle: 'Module 4 · Generics, modules, and async types',
    intro: 'As projects grow, module boundaries and import style heavily impact readability and collaboration.',
    learningPoints: [
      'Use named exports and imports consistently.',
      'Separate runtime values from type-only imports when appropriate.',
      'Organize file boundaries by responsibility, not random size.',
    ],
    lessonNotes: [
      'Modules are the first maintainability boundary in TypeScript projects.',
      'Clear exports make API surfaces predictable for teammates.',
      'Type-only imports can improve clarity and avoid runtime confusion in some build setups.',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `// models.ts
export type Lesson = { id: string; title: string }

// lesson-service.ts
import type { Lesson } from './models'

export function getLessonTitle(lesson: Lesson) {
  return lesson.title
}`,
    practice: [
      'Split one large file into two modules by responsibility.',
      'Convert default exports to named exports in one area.',
      'Use import type for one purely type-level dependency.',
    ],
    reasons: [
      'Module hygiene improves team-scale readability and onboarding.',
      'Consistent export style reduces refactor friction.',
    ],
    mistakes: [
      'Creating circular module dependencies unintentionally.',
      'Using unclear barrel exports that hide true ownership boundaries.',
    ],
    takeaways: [
      'Module design is a core architecture skill even in small projects.',
      'Predictable imports and exports keep type usage clean.',
    ],
    references: [
      { label: 'TypeScript Handbook · Modules', url: 'https://www.typescriptlang.org/docs/handbook/2/modules.html' },
      { label: 'TypeScript Handbook · ECMAScript Modules in TS', url: 'https://www.typescriptlang.org/docs/handbook/modules/introduction.html' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'Async functions, Promises, and utility types',
    summary: 'Type asynchronous workflows and apply utility types to reduce repetitive type boilerplate.',
    moduleTitle: 'Module 4 · Generics, modules, and async types',
    intro: 'This lesson combines async typing patterns with built-in utility types used across modern TS codebases.',
    learningPoints: [
      'Type async functions and Promise return values clearly.',
      'Use Awaited and ReturnType in practical helper patterns.',
      'Apply utility types such as Partial and Pick for DTO design.',
    ],
    lessonNotes: [
      'Async functions always return Promise-like results, so explicit typing improves clarity.',
      'Utility types help avoid repetitive model variants and keep contracts aligned.',
      'Readable utility usage is valuable; over-layering can make types difficult to debug.',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `type Lesson = { id: string; title: string; summary: string }
type LessonPatch = Partial<Pick<Lesson, 'title' | 'summary'>>

async function fetchLessons(): Promise<Lesson[]> {
  return [{ id: '1', title: 'Intro', summary: 'start here' }]
}

type LessonsResult = Awaited<ReturnType<typeof fetchLessons>>`,
    practice: [
      'Add explicit Promise return types to two async functions.',
      'Replace one manual patch type with Partial and Pick.',
      'Use Awaited<ReturnType<...>> once in a service helper.',
    ],
    reasons: [
      'Async and utility types appear in almost every real TS codebase.',
      'Good typing here reduces subtle integration errors.',
    ],
    mistakes: [
      'Returning ambiguous Promise<any> values from API helpers.',
      'Using utility types in overly nested ways that obscure intent.',
    ],
    takeaways: [
      'Async typing and utility types improve maintainability when kept readable.',
      'Built-in utilities should simplify contracts, not complicate them.',
    ],
    references: [
      { label: 'TypeScript Handbook · Utility Types', url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html' },
      { label: 'TypeScript Handbook · More on Functions (Async)', url: 'https://www.typescriptlang.org/docs/handbook/2/functions.html' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: 'Migrating JavaScript to TypeScript',
    summary: 'Adopt TypeScript incrementally with low-risk project settings and clear migration priorities.',
    moduleTitle: 'Module 5 · Migration and practical delivery',
    intro: 'This lesson focuses on practical migration strategy so existing JavaScript projects can improve safely over time.',
    learningPoints: [
      'Start migration with tsconfig and checkJS strategies.',
      'Prioritize high-risk files and shared models first.',
      'Handle temporary escape hatches intentionally.',
    ],
    lessonNotes: [
      'Migration works best incrementally: introduce type checks step by step rather than rewriting everything at once.',
      'Shared API contracts and utility layers are good early targets because improvements spread widely.',
      'Use escape hatches like any or @ts-ignore sparingly and track them for cleanup.',
    ],
    exampleLanguage: 'json',
    exampleCode: `{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "strict": true,
    "noEmit": true
  },
  "include": ["src"]
}`,
    practice: [
      'Enable checkJs in one existing JavaScript project.',
      'Convert one shared model file from .js to .ts.',
      'Create a short backlog of temporary any usages to remove.',
    ],
    reasons: [
      'Most teams adopt TypeScript in existing code, not greenfield only.',
      'Incremental migration lowers risk and keeps delivery momentum.',
    ],
    mistakes: [
      'Trying to migrate the whole repository in one unreviewable change.',
      'Leaving temporary suppressions without follow-up tracking.',
    ],
    takeaways: [
      'Migration success depends on sequence, scope, and team discipline.',
      'Incremental improvements provide value early and reduce disruption.',
    ],
    references: [
      { label: 'TypeScript Handbook · Migrating from JavaScript', url: 'https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html' },
      { label: 'TypeScript Docs · Type Checking JavaScript Files', url: 'https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html' },
    ],
  },
  {
    lesson: 14,
    slug: 'lesson-14',
    title: 'Practical TypeScript capstone',
    summary: 'Ship a small typed feature from data model to API call with validation and maintainable type boundaries.',
    moduleTitle: 'Module 5 · Migration and practical delivery',
    intro: 'The final lesson connects modeling, functions, modules, and async workflows into one practical end-to-end exercise.',
    learningPoints: [
      'Design a small feature with explicit type boundaries.',
      'Integrate request, response, and UI state types consistently.',
      'Review and refine type readability before shipping.',
    ],
    lessonNotes: [
      'A capstone should focus on coherent delivery, not advanced type tricks.',
      'End-to-end typing works best when each layer has clear contracts and responsibilities.',
      'Final review should include naming clarity, nullable handling, and runtime validation boundaries.',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `type LessonDto = { id: string; title: string }
type LessonViewModel = { id: string; label: string }

function mapLesson(dto: LessonDto): LessonViewModel {
  return { id: dto.id, label: dto.title }
}

async function loadLessons(): Promise<LessonViewModel[]> {
  const data: LessonDto[] = [{ id: 'l1', title: 'TS Intro' }]
  return data.map(mapLesson)
}`,
    practice: [
      'Build a mini feature with typed request, response, and UI layers.',
      'Add one runtime validation step at an external-data boundary.',
      'Do a final pass to rename unclear types and simplify one complex signature.',
    ],
    reasons: [
      'Capstones convert isolated syntax knowledge into delivery skill.',
      'Type quality impacts long-term maintainability beyond initial correctness.',
    ],
    mistakes: [
      'Over-optimizing for type cleverness instead of clear contracts.',
      'Skipping runtime checks for external input because types compile.',
    ],
    takeaways: [
      'Practical TypeScript success means clear contracts across layers.',
      'Readable types plus focused runtime checks produce trustworthy features.',
    ],
    references: [
      { label: 'TypeScript Handbook · Creating Types from Types', url: 'https://www.typescriptlang.org/docs/handbook/2/types-from-types.html' },
      { label: 'TypeScript Handbook · Project References and Organization', url: 'https://www.typescriptlang.org/docs/handbook/project-references.html' },
    ],
  },
];

export function getTypeScriptLessons() {
  return typescriptLessons;
}

export function getTypeScriptLessonBySlug(slug: string) {
  return typescriptLessons.find((lesson) => lesson.slug === slug) ?? null;
}
