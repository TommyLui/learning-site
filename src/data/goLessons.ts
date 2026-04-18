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

export const goLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: 'Install Go, use the toolchain, and run your first program',
    summary: 'Set up Go locally and understand the go run and go build workflow.',
    moduleTitle: 'Module 1 · Go setup and syntax basics',
    intro: 'This first lesson sets up a healthy Go workflow so later lessons can focus on coding instead of environment issues.',
    learningPoints: [
      'Install Go and verify your local environment.',
      'Use go run, go build, and go test as daily commands.',
      'Understand how modules and folders affect project startup.',
    ],
    lessonNotes: [
      'Go tooling is intentionally simple. Most beginners only need a few core commands to compile, run, and test projects.',
      'A reliable setup includes checking Go version, choosing a clean workspace, and understanding where your module starts.',
      'The biggest win in this lesson is confidence: you should be able to create a tiny project and run it end to end.',
    ],
    exampleLanguage: 'bash',
    exampleCode: "go version\nmkdir go-hello && cd go-hello\ngo mod init example.com/go-hello\ncat > main.go <<'EOF'\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"hello, go\")\n}\nEOF\ngo run .\ngo build .",
    practice: [
      'Install Go and confirm your version from the terminal.',
      'Create a module with go mod init and run a hello program.',
      'Build the binary and run it directly from your local folder.',
    ],
    reasons: [
      'A clean environment prevents many beginner errors later.',
      'Go tooling is part of Go literacy, not only a setup step.',
    ],
    mistakes: [
      'Skipping module initialization and working in a random folder.',
      'Using commands without understanding the difference between run and build.',
    ],
    takeaways: [
      'Go projects start with the module and toolchain workflow.',
      'You should be ready to create, run, and build a small Go app confidently.',
    ],
    references: [
      { label: 'Go docs · Download and install', url: 'https://go.dev/doc/install' },
      { label: 'Go docs · Tutorial: Get started', url: 'https://go.dev/doc/tutorial/getting-started' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'Variables, control flow, and functions in Go',
    summary: 'Write readable Go functions with clear types, conditions, and loops.',
    moduleTitle: 'Module 1 · Go setup and syntax basics',
    intro: 'This lesson builds your baseline coding fluency in Go by combining variables, branching, loops, and reusable functions.',
    learningPoints: [
      'Declare variables with explicit and inferred types.',
      'Use if, for, and switch to control program flow.',
      'Write small functions with clear inputs and outputs.',
    ],
    lessonNotes: [
      'Go keeps syntax compact, but encourages clear naming and straightforward control flow.',
      'You will often use for as the only loop keyword and switch for readable branching.',
      'Good function boundaries reduce repetition and make tests easier later.',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport \"fmt\"\n\nfunc scoreLabel(score int) string {\n  if score >= 80 {\n    return \"pass\"\n  }\n  return \"retry\"\n}\n\nfunc main() {\n  scores := []int{72, 85, 91}\n  for _, score := range scores {\n    fmt.Println(score, scoreLabel(score))\n  }\n}",
    practice: [
      'Write a function that returns shipping fees by order amount.',
      'Use a loop to process several sample values.',
      'Refactor one long main function into smaller helpers.',
    ],
    reasons: [
      'Most later lessons assume you can write clear functions quickly.',
      'Control flow clarity is a major part of maintainable Go code.',
    ],
    mistakes: [
      'Writing large functions with mixed responsibilities.',
      'Using unclear names that hide business intent.',
    ],
    takeaways: [
      'Readable control flow is more important than clever syntax tricks.',
      'Small functions are the foundation for testing and reuse.',
    ],
    references: [
      { label: 'A Tour of Go · Basics', url: 'https://go.dev/tour/basics/1' },
      { label: 'Go language specification', url: 'https://go.dev/ref/spec' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: 'Arrays, slices, and maps for everyday data work',
    summary: 'Manage grouped data with Go’s most common collection types.',
    moduleTitle: 'Module 1 · Go setup and syntax basics',
    intro: 'Collections are where many beginner mistakes happen, so this lesson focuses on practical choices between arrays, slices, and maps.',
    learningPoints: [
      'Know when to use arrays, slices, and maps.',
      'Append and iterate slices safely.',
      'Store key-value data with maps and existence checks.',
    ],
    lessonNotes: [
      'Slices are the most common collection in Go because they are flexible views over arrays.',
      'Maps are ideal for lookup-style logic, such as finding a user by ID or feature by name.',
      'Choosing the right collection early makes later code simpler and faster to read.',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport \"fmt\"\n\nfunc main() {\n  tags := []string{\"go\", \"backend\"}\n  tags = append(tags, \"http\")\n\n  scores := map[string]int{\n    \"alice\": 88,\n    \"tommy\": 95,\n  }\n\n  if value, ok := scores[\"tommy\"]; ok {\n    fmt.Println(\"tommy score:\", value)\n  }\n\n  fmt.Println(tags)\n}",
    practice: [
      'Store a list of lessons in a slice and print numbered output.',
      'Track user progress in a map and check missing keys safely.',
      'Rewrite one array-based example into a slice-based approach.',
    ],
    reasons: [
      'Collections appear in almost every backend use case.',
      'Understanding slices and maps prevents many subtle bugs.',
    ],
    mistakes: [
      'Using arrays where slices are more practical.',
      'Reading map values without checking key existence when needed.',
    ],
    takeaways: [
      'Slices and maps are the day-to-day data structures in Go.',
      'Collection choices should match how data is accessed and updated.',
    ],
    references: [
      { label: 'A Tour of Go · Slices', url: 'https://go.dev/tour/moretypes/7' },
      { label: 'Go blog · Go Slices: usage and internals', url: 'https://go.dev/blog/slices-intro' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'Structs and methods for domain modeling',
    summary: 'Model data with structs and attach behavior through methods.',
    moduleTitle: 'Module 2 · Data structures and type design',
    intro: 'This lesson moves from basic syntax to type design by modeling real entities with structs and associated methods.',
    learningPoints: [
      'Represent business entities with structs.',
      'Attach behavior using method receivers.',
      'Choose pointer or value receivers with intent.',
    ],
    lessonNotes: [
      'Structs help you group related fields under one clear type, such as Course, Order, or Account.',
      'Methods keep behavior close to data so business logic stays discoverable.',
      'Receiver choice affects mutation and performance, so learn to choose deliberately.',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport \"fmt\"\n\ntype Course struct {\n  Title   string\n  Lessons int\n}\n\nfunc (c Course) Summary() string {\n  return fmt.Sprintf(\"%s (%d lessons)\", c.Title, c.Lessons)\n}\n\nfunc main() {\n  course := Course{Title: \"Go\", Lessons: 13}\n  fmt.Println(course.Summary())\n}",
    practice: [
      'Create a Student struct with name and completed lessons.',
      'Add a method that returns a progress summary string.',
      'Refactor one free function into a method when it belongs to a type.',
    ],
    reasons: [
      'Most real Go services use structs as core domain models.',
      'Methods provide a clean boundary between data and behavior.',
    ],
    mistakes: [
      'Keeping all logic in standalone functions without clear type ownership.',
      'Using pointer receivers everywhere without understanding why.',
    ],
    takeaways: [
      'Structs plus methods are a core Go design pattern.',
      'Type design quality strongly affects long-term maintainability.',
    ],
    references: [
      { label: 'A Tour of Go · Structs', url: 'https://go.dev/tour/moretypes/2' },
      { label: 'Effective Go · Methods', url: 'https://go.dev/doc/effective_go#methods' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: 'Interfaces and implicit implementation',
    summary: 'Design flexible code by programming to behavior instead of concrete types.',
    moduleTitle: 'Module 2 · Data structures and type design',
    intro: 'Go interfaces let you design by behavior, which is key for testability and cleaner service boundaries.',
    learningPoints: [
      'Understand interface values and method sets.',
      'Use implicit implementation to decouple code.',
      'Keep interfaces small and purpose-driven.',
    ],
    lessonNotes: [
      'In Go, a type satisfies an interface by implementing methods, without explicit declaration.',
      'This style keeps dependencies lighter and enables easier substitution in tests.',
      'Small interfaces usually stay more reusable than large catch-all abstractions.',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport \"fmt\"\n\ntype Notifier interface {\n  Send(message string)\n}\n\ntype ConsoleNotifier struct{}\n\nfunc (ConsoleNotifier) Send(message string) {\n  fmt.Println(\"notify:\", message)\n}\n\nfunc Broadcast(n Notifier, message string) {\n  n.Send(message)\n}\n\nfunc main() {\n  Broadcast(ConsoleNotifier{}, \"lesson published\")\n}",
    practice: [
      'Define an interface for a storage dependency with two methods.',
      'Create a mock implementation for testing.',
      'Refactor one function to accept an interface instead of a concrete type.',
    ],
    reasons: [
      'Interfaces are central to modular Go architecture.',
      'Behavior-first design improves testability and long-term flexibility.',
    ],
    mistakes: [
      'Creating very large interfaces before requirements are clear.',
      'Using interfaces where a concrete type would be simpler.',
    ],
    takeaways: [
      'Good Go interfaces describe behavior, not implementation details.',
      'Implicit implementation is powerful when kept intentionally small.',
    ],
    references: [
      { label: 'A Tour of Go · Interfaces', url: 'https://go.dev/tour/methods/9' },
      { label: 'Effective Go · Interfaces', url: 'https://go.dev/doc/effective_go#interfaces' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: 'Packages and modules for project organization',
    summary: 'Organize code with packages and manage dependencies using Go modules.',
    moduleTitle: 'Module 2 · Data structures and type design',
    intro: 'As code grows, package and module structure decides whether a project stays readable or becomes hard to navigate.',
    learningPoints: [
      'Split code by responsibility into packages.',
      'Use go.mod and go.sum to manage dependencies.',
      'Keep import paths and package names predictable.',
    ],
    lessonNotes: [
      'Packages are your first organization unit in Go, and should reflect domain boundaries rather than random file groups.',
      'Modules define dependency scope and version tracking for a project.',
      'Clear package layout makes testing and onboarding much easier.',
    ],
    exampleLanguage: 'text',
    exampleCode: "course-service/\n  go.mod\n  cmd/api/main.go\n  internal/course/service.go\n  internal/course/repository.go\n  internal/http/handler.go",
    practice: [
      'Restructure a small project into cmd and internal packages.',
      'Initialize module metadata and add one external dependency.',
      'Review imports and rename unclear package folders.',
    ],
    reasons: [
      'Project structure quality matters more as team size and code size grow.',
      'Modules are required for stable dependency management.',
    ],
    mistakes: [
      'Mixing unrelated responsibilities in one package.',
      'Ignoring module files and relying on ad-hoc dependency behavior.',
    ],
    takeaways: [
      'Packages shape maintainability from day one.',
      'Go modules keep dependency and version behavior explicit.',
    ],
    references: [
      { label: 'Go docs · Create a module', url: 'https://go.dev/doc/tutorial/create-module' },
      { label: 'Go docs · Managing dependencies', url: 'https://go.dev/doc/modules/managing-dependencies' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: 'Error handling patterns and custom errors',
    summary: 'Return, wrap, and inspect errors in a predictable way.',
    moduleTitle: 'Module 3 · Errors, testing, and data I/O',
    intro: 'Go error handling is explicit by design, and good patterns make failures easier to debug and recover from.',
    learningPoints: [
      'Return errors with useful context.',
      'Use wrapping and unwrapping patterns.',
      'Design custom error types only when they add clear value.',
    ],
    lessonNotes: [
      'Go favors explicit error returns instead of hidden exception flow.',
      'Wrapping keeps root errors while adding operation context for logs and debugging.',
      'Use errors.Is and errors.As to inspect errors safely without brittle string checks.',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport (\n  \"errors\"\n  \"fmt\"\n)\n\nvar ErrNotFound = errors.New(\"course not found\")\n\nfunc findCourse(id int) error {\n  if id != 1 {\n    return fmt.Errorf(\"find course %d: %w\", id, ErrNotFound)\n  }\n  return nil\n}\n\nfunc main() {\n  err := findCourse(2)\n  if errors.Is(err, ErrNotFound) {\n    fmt.Println(\"handle not found\")\n  }\n}",
    practice: [
      'Wrap one low-level error with operation context.',
      'Use errors.Is in a branch that handles not-found conditions.',
      'Replace one string comparison with safer error inspection.',
    ],
    reasons: [
      'Reliable backend behavior depends on predictable error flow.',
      'Clear error context reduces debugging time in production.',
    ],
    mistakes: [
      'Returning generic errors that hide where failure happened.',
      'Treating all errors the same without domain-aware handling.',
    ],
    takeaways: [
      'Explicit error handling is a Go strength when done consistently.',
      'Wrapped errors preserve both context and root cause.',
    ],
    references: [
      { label: 'Go blog · Working with Errors in Go 1.13', url: 'https://go.dev/blog/go1.13-errors' },
      { label: 'Go package docs · errors', url: 'https://pkg.go.dev/errors' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: 'Testing with the standard testing package',
    summary: 'Write table-driven tests and run focused test workflows.',
    moduleTitle: 'Module 3 · Errors, testing, and data I/O',
    intro: 'This lesson introduces practical test writing in Go with the built-in testing package and table-driven style.',
    learningPoints: [
      'Write basic unit tests with testing.T.',
      'Use table-driven tests to cover multiple scenarios.',
      'Run focused tests and read failures quickly.',
    ],
    lessonNotes: [
      'Go testing is built into the toolchain, which keeps setup lightweight.',
      'Table-driven tests are common because they scale well as input cases grow.',
      'A good test focuses on behavior and clear failure messages rather than implementation details.',
    ],
    exampleLanguage: 'go',
    exampleCode: "package discount\n\nimport \"testing\"\n\nfunc Discount(price int) int {\n  if price >= 1000 {\n    return 100\n  }\n  return 0\n}\n\nfunc TestDiscount(t *testing.T) {\n  cases := []struct {\n    price int\n    want  int\n  }{\n    {500, 0},\n    {1200, 100},\n  }\n\n  for _, c := range cases {\n    if got := Discount(c.price); got != c.want {\n      t.Fatalf(\"price=%d got=%d want=%d\", c.price, got, c.want)\n    }\n  }\n}",
    practice: [
      'Write tests for a function with at least three input cases.',
      'Convert separate repetitive tests into a table-driven test.',
      'Run one package test with go test ./... and inspect output.',
    ],
    reasons: [
      'Testing reduces regression risk as your service evolves.',
      'Table-driven style is a common expectation in Go code reviews.',
    ],
    mistakes: [
      'Writing tests with vague failure messages.',
      'Skipping boundary cases like empty values or invalid input.',
    ],
    takeaways: [
      'Go makes testing a built-in workflow, not an add-on.',
      'Table-driven tests keep behavior coverage scalable and readable.',
    ],
    references: [
      { label: 'Go package docs · testing', url: 'https://pkg.go.dev/testing' },
      { label: 'Go docs · Tutorial: Add a test', url: 'https://go.dev/doc/tutorial/add-a-test' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'Reading files and encoding JSON data',
    summary: 'Handle common file input and output plus JSON serialization tasks.',
    moduleTitle: 'Module 3 · Errors, testing, and data I/O',
    intro: 'Many backend tasks involve files and JSON, so this lesson focuses on the most common standard-library workflows.',
    learningPoints: [
      'Read and write files safely.',
      'Serialize and deserialize JSON structs.',
      'Combine data I/O with proper error handling.',
    ],
    lessonNotes: [
      'Go standard packages make file and JSON tasks straightforward for most beginner-to-intermediate projects.',
      'Struct tags let you control JSON field names clearly.',
      'I/O and parsing code should always include explicit error handling and clear defaults.',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport (\n  \"encoding/json\"\n  \"fmt\"\n  \"os\"\n)\n\ntype Course struct {\n  Title string `json:\"title\"`\n  Level string `json:\"level\"`\n}\n\nfunc main() {\n  raw, err := os.ReadFile(\"course.json\")\n  if err != nil {\n    panic(err)\n  }\n\n  var c Course\n  if err := json.Unmarshal(raw, &c); err != nil {\n    panic(err)\n  }\n\n  fmt.Println(c.Title, c.Level)\n}",
    practice: [
      'Read a local JSON file into a struct and print key fields.',
      'Write a struct back to JSON with indentation.',
      'Handle missing file and malformed JSON errors separately.',
    ],
    reasons: [
      'File and JSON handling appears in scripts, services, and tooling.',
      'Reliable I/O code reduces data corruption and runtime surprises.',
    ],
    mistakes: [
      'Ignoring file read errors and assuming data always exists.',
      'Using untyped map parsing for strongly-typed data models.',
    ],
    takeaways: [
      'Go standard packages cover most practical file and JSON tasks.',
      'Typed structs plus explicit errors make data flow safer.',
    ],
    references: [
      { label: 'Go package docs · os', url: 'https://pkg.go.dev/os' },
      { label: 'Go package docs · encoding/json', url: 'https://pkg.go.dev/encoding/json' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'Goroutines, channels, and basic concurrency design',
    summary: 'Coordinate concurrent tasks safely with goroutines and channels.',
    moduleTitle: 'Module 4 · Concurrency and HTTP fundamentals',
    intro: 'Concurrency is one of Go’s strongest features, and this lesson gives you a safe mental model before scaling complexity.',
    learningPoints: [
      'Start concurrent tasks with goroutines.',
      'Send values across channels for coordination.',
      'Avoid common synchronization mistakes in basic designs.',
    ],
    lessonNotes: [
      'Goroutines are lightweight concurrent execution units managed by the Go runtime.',
      'Channels help communicate between goroutines without shared mutable state everywhere.',
      'Simple pipelines and worker patterns are better starting points than advanced concurrency tricks.',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport \"fmt\"\n\nfunc main() {\n  done := make(chan string)\n\n  go func() {\n    done <- \"task complete\"\n  }()\n\n  msg := <-done\n  fmt.Println(msg)\n}",
    practice: [
      'Launch two goroutines that process separate inputs.',
      'Collect results through channels and print output in main.',
      'Use go test -race in a sample that shares state.',
    ],
    reasons: [
      'Concurrency appears in APIs, workers, and I/O-heavy workloads.',
      'Safe coordination patterns reduce race-condition bugs.',
    ],
    mistakes: [
      'Launching goroutines without a clear completion or cancellation strategy.',
      'Using channels and shared mutable state together without boundaries.',
    ],
    takeaways: [
      'Goroutines plus channels are powerful when flow is kept simple.',
      'Design for clarity first, then optimize concurrency details.',
    ],
    references: [
      { label: 'A Tour of Go · Concurrency', url: 'https://go.dev/tour/concurrency/1' },
      { label: 'Effective Go · Concurrency', url: 'https://go.dev/doc/effective_go#concurrency' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: 'Build HTTP handlers with net/http',
    summary: 'Create routes and handlers with Go’s standard HTTP library.',
    moduleTitle: 'Module 4 · Concurrency and HTTP fundamentals',
    intro: 'This lesson connects language foundations to web development by building simple HTTP handlers with the standard library.',
    learningPoints: [
      'Register HTTP routes and handlers with net/http.',
      'Read request data and return structured responses.',
      'Separate handler responsibilities from business logic.',
    ],
    lessonNotes: [
      'net/http is enough to build clear beginner services before adding external frameworks.',
      'Handlers should stay focused: validate input, call service logic, format response.',
      'Good endpoint structure early makes future testing and refactoring easier.',
    ],
    exampleLanguage: 'go',
    exampleCode: "package main\n\nimport (\n  \"fmt\"\n  \"net/http\"\n)\n\nfunc healthHandler(w http.ResponseWriter, r *http.Request) {\n  w.WriteHeader(http.StatusOK)\n  fmt.Fprintln(w, \"ok\")\n}\n\nfunc main() {\n  mux := http.NewServeMux()\n  mux.HandleFunc(\"/health\", healthHandler)\n\n  http.ListenAndServe(\":8080\", mux)\n}",
    practice: [
      'Create a /health endpoint and verify status code with curl.',
      'Add a second route that returns JSON output.',
      'Extract route logic into separate files or packages.',
    ],
    reasons: [
      'HTTP basics are required before building real backend services.',
      'Understanding net/http improves framework decisions later.',
    ],
    mistakes: [
      'Putting all service logic directly inside handlers.',
      'Skipping status-code and response-format consistency.',
    ],
    takeaways: [
      'You can build solid HTTP foundations with the standard library.',
      'Handler clarity is a major factor in service maintainability.',
    ],
    references: [
      { label: 'Go package docs · net/http', url: 'https://pkg.go.dev/net/http' },
      { label: 'Go docs · Writing Web Applications', url: 'https://go.dev/doc/articles/wiki/' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'Design a small CRUD-style service flow',
    summary: 'Plan request models, validation, and in-memory storage for a simple service.',
    moduleTitle: 'Module 5 · Build a small Go service',
    intro: 'This lesson shifts from isolated examples to a cohesive mini-service where endpoints, models, and storage fit together.',
    learningPoints: [
      'Design a small CRUD service around one domain entity.',
      'Define request and response models with consistent naming.',
      'Use simple in-memory storage while keeping architecture extensible.',
    ],
    lessonNotes: [
      'A small project is where concepts become practical: routes, structs, validation, and errors must align.',
      'Start with one entity and a small set of operations before scaling scope.',
      'Even in-memory storage benefits from interface boundaries if you plan to replace it later.',
    ],
    exampleLanguage: 'text',
    exampleCode: "Endpoints\n  GET /tasks\n  GET /tasks/{id}\n  POST /tasks\n  PUT /tasks/{id}\n  DELETE /tasks/{id}\n\nLayers\n  handler -> service -> repository",
    practice: [
      'Pick one entity (task, note, or lesson) and define CRUD endpoints.',
      'Add request validation for required fields.',
      'Create a repository interface and an in-memory implementation.',
    ],
    reasons: [
      'Service design skills come from assembling complete flows, not isolated snippets.',
      'Clear boundaries reduce rewrite cost when persistence is added later.',
    ],
    mistakes: [
      'Building endpoints before deciding consistent request and response models.',
      'Skipping validation and assuming all inputs are valid.',
    ],
    takeaways: [
      'A minimal but complete service teaches architecture better than many disconnected examples.',
      'Simple boundaries now make future persistence upgrades easier.',
    ],
    references: [
      { label: 'Go docs · Writing Web Applications', url: 'https://go.dev/doc/articles/wiki/' },
      { label: 'Go package docs · net/http', url: 'https://pkg.go.dev/net/http' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: 'Run, test, and refine the service',
    summary: 'Add basic logging, configuration, and test coverage before shipping.',
    moduleTitle: 'Module 5 · Build a small Go service',
    intro: 'The final lesson focuses on practical finishing work: repeatable runs, basic observability, and enough tests to trust behavior.',
    learningPoints: [
      'Run service checks through repeatable local commands.',
      'Add basic logging and configuration values.',
      'Strengthen confidence with endpoint-level and unit tests.',
    ],
    lessonNotes: [
      'Shipping quality is not only about writing handlers. It requires predictable startup, clear logs, and verified behaviors.',
      'Use environment variables for configurable values instead of hardcoded settings.',
      'A small but focused test set is enough to catch many regressions in beginner projects.',
    ],
    exampleLanguage: 'bash',
    exampleCode: "go test ./...\nPORT=8080 go run ./cmd/api\ncurl http://localhost:8080/health",
    practice: [
      'Add one configuration variable such as PORT with a sensible default.',
      'Write at least two tests for key service behavior.',
      'Run a short pre-release checklist before calling the service done.',
    ],
    reasons: [
      'Refinement habits are what separate demos from reliable projects.',
      'Basic logging and tests make debugging and support far easier.',
    ],
    mistakes: [
      'Hardcoding runtime values that should come from configuration.',
      'Skipping final verification because manual checks worked once.',
    ],
    takeaways: [
      'A small service should still have repeatable run and test workflows.',
      'Finishing discipline is part of backend engineering, not optional polish.',
    ],
    references: [
      { label: 'Go package docs · log/slog', url: 'https://pkg.go.dev/log/slog' },
      { label: 'Go package docs · testing', url: 'https://pkg.go.dev/testing' },
    ],
  },
];

export function getGoLessons() {
  return goLessons;
}

export function getGoLessonBySlug(slug: string) {
  return goLessons.find((lesson) => lesson.slug === slug) ?? null;
}
