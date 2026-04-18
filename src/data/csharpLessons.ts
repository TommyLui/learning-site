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

export const csharpLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: 'Install .NET SDK and use the dotnet CLI',
    summary: 'Create, run, and manage C# projects with a clean command-line workflow.',
    moduleTitle: 'Module 1 · .NET setup and C# fundamentals',
    intro: 'This lesson builds a stable C# starting point with the .NET SDK and the core dotnet commands you will use every day.',
    learningPoints: [
      'Install the .NET SDK and verify local setup.',
      'Create and run a console project with dotnet CLI.',
      'Understand why CLI workflow matters even when using IDEs.',
    ],
    lessonNotes: [
      'The .NET SDK includes compilers, templates, and tooling needed for modern C# development.',
      'The dotnet CLI gives you a repeatable workflow for creating projects, restoring dependencies, building, and running apps.',
      'Even if you use Visual Studio or Rider, CLI fluency improves troubleshooting and automation.',
    ],
    exampleLanguage: 'bash',
    exampleCode: "dotnet --version\ndotnet new console -n CSharpIntro\ncd CSharpIntro\ndotnet run\ndotnet build",
    practice: [
      'Install .NET SDK and confirm the version from terminal output.',
      'Create a new console app and run it locally.',
      'Try dotnet build and inspect the generated output folder.',
    ],
    reasons: [
      'Environment setup issues are one of the biggest beginner blockers.',
      'CLI literacy supports CI pipelines and team workflows later.',
    ],
    mistakes: [
      'Using IDE buttons only without understanding underlying CLI commands.',
      'Mixing multiple SDK versions without checking project compatibility.',
    ],
    takeaways: [
      'A reliable .NET setup starts with SDK verification and CLI basics.',
      'You should be ready to create, run, and build a C# project confidently.',
    ],
    references: [
      { label: '.NET docs · Install .NET', url: 'https://learn.microsoft.com/dotnet/core/install/' },
      { label: '.NET docs · dotnet CLI overview', url: 'https://learn.microsoft.com/dotnet/core/tools/' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'C# syntax, types, and expressions',
    summary: 'Understand variables, operators, and type-safe expression building.',
    moduleTitle: 'Module 1 · .NET setup and C# fundamentals',
    intro: 'This lesson builds everyday C# fluency with basic syntax, type usage, and expression readability.',
    learningPoints: [
      'Use built-in C# types with clear intent.',
      'Write expressions with predictable operator behavior.',
      'Prefer readable naming and explicitness over shortcuts.',
    ],
    lessonNotes: [
      'C# has strong static typing, and understanding type choices early prevents many runtime issues.',
      'Expression clarity matters as much as correctness when codebases grow beyond personal projects.',
      'The combination of explicit types and useful compiler checks is one of C#’s practical strengths.',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "int completedLessons = 7;\ndecimal price = 199.99m;\nbool isActive = completedLessons > 0;\nstring status = isActive ? \"learning\" : \"idle\";\n\nConsole.WriteLine($\"Status: {status}, Price: {price}\");",
    practice: [
      'Create variables for name, score, and enrollment status.',
      'Write expressions that calculate discount totals.',
      'Refactor unclear variable names into domain-specific names.',
    ],
    reasons: [
      'Syntax fluency lowers friction in every later topic.',
      'Type clarity is the base for maintainable C# code.',
    ],
    mistakes: [
      'Using var everywhere without understanding the inferred type.',
      'Packing too much logic into one expression line.',
    ],
    takeaways: [
      'Strong typing helps catch mistakes early.',
      'Readable expressions make business logic easier to maintain.',
    ],
    references: [
      { label: 'C# docs · Built-in types', url: 'https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/built-in-types' },
      { label: 'C# docs · Operators and expressions', url: 'https://learn.microsoft.com/dotnet/csharp/language-reference/operators/' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: 'Methods and control flow in practical programs',
    summary: 'Structure logic with reusable methods and clear branching rules.',
    moduleTitle: 'Module 1 · .NET setup and C# fundamentals',
    intro: 'This lesson moves from syntax to structure by organizing repeated logic into methods and readable control flow.',
    learningPoints: [
      'Design small methods with focused responsibilities.',
      'Apply if or switch structures clearly.',
      'Reduce duplication by extracting reusable logic.',
    ],
    lessonNotes: [
      'Methods are one of the first tools for keeping C# programs maintainable.',
      'Control flow is not only about getting correct output; it is about making intent easy to read later.',
      'As soon as logic starts repeating, method extraction is usually a better path than copy-paste.',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "static decimal ShippingFee(decimal total)\n{\n    if (total >= 1000m) return 0m;\n    if (total >= 500m) return 30m;\n    return 60m;\n}\n\nConsole.WriteLine(ShippingFee(680m));",
    practice: [
      'Write a method that converts exam scores to labels.',
      'Refactor one long conditional block into a cleaner method.',
      'Compare switch and if approaches for one business rule.',
    ],
    reasons: [
      'Method boundaries heavily influence testability and readability.',
      'Control flow clarity helps reduce bugs in larger feature logic.',
    ],
    mistakes: [
      'Creating oversized methods that mix unrelated concerns.',
      'Nesting conditions too deeply when simpler branches exist.',
    ],
    takeaways: [
      'Small, focused methods are a long-term maintainability win.',
      'Readable control flow is part of code quality, not optional style.',
    ],
    references: [
      { label: 'C# docs · Methods', url: 'https://learn.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/methods' },
      { label: 'C# docs · Selection statements', url: 'https://learn.microsoft.com/dotnet/csharp/language-reference/statements/selection-statements' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'Collections and nullable reference types',
    summary: 'Use common collections and avoid null-related runtime issues.',
    moduleTitle: 'Module 2 · Types, nullability, and OOP design',
    intro: 'This lesson combines practical collection handling with nullable reference awareness, a key part of modern C# correctness.',
    learningPoints: [
      'Use List and Dictionary in common scenarios.',
      'Enable and work with nullable reference checks.',
      'Write safer code around optional values.',
    ],
    lessonNotes: [
      'Collections are everywhere in application logic, so choosing the right structure matters early.',
      'Nullable reference types help prevent null-reference exceptions by surfacing risk during compilation.',
      'Good nullability habits improve API contracts and team communication around optional data.',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "#nullable enable\n\nvar lessons = new List<string> { \"setup\", \"syntax\" };\nvar progress = new Dictionary<string, int>\n{\n    [\"tommy\"] = 4\n};\n\nstring? note = null;\nConsole.WriteLine(note ?? \"no note\");",
    practice: [
      'Build a List of lessons and print all entries.',
      'Track user points in a Dictionary.',
      'Refactor one nullable warning using safer code patterns.',
    ],
    reasons: [
      'Collections and nullability are daily concerns in C# apps.',
      'Null safety improvements save debugging time later.',
    ],
    mistakes: [
      'Ignoring nullable warnings instead of fixing contracts.',
      'Using collections without considering lookup patterns.',
    ],
    takeaways: [
      'Modern C# expects nullability-aware coding habits.',
      'Collection choices should align with read and update needs.',
    ],
    references: [
      { label: 'C# docs · Collections', url: 'https://learn.microsoft.com/dotnet/csharp/programming-guide/concepts/collections' },
      { label: 'C# docs · Nullable reference types', url: 'https://learn.microsoft.com/dotnet/csharp/nullable-references' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: 'Classes, records, and object-oriented basics',
    summary: 'Model data and behavior with classes, records, and encapsulation.',
    moduleTitle: 'Module 2 · Types, nullability, and OOP design',
    intro: 'This lesson introduces how modern C# models domain concepts with classes and records in a practical object-oriented style.',
    learningPoints: [
      'Use classes for behavior-heavy domain objects.',
      'Use records for immutable data-oriented models.',
      'Apply encapsulation to protect invariants.',
    ],
    lessonNotes: [
      'Classes are useful when behavior and lifecycle rules matter.',
      'Records are useful when value-style data transport and immutability are priorities.',
      'Object-oriented design quality depends more on boundaries and responsibilities than syntax.',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "public record CourseDto(string Title, int Lessons);\n\npublic class CourseProgress\n{\n    public string Title { get; }\n    public int CompletedLessons { get; private set; }\n\n    public CourseProgress(string title)\n    {\n        Title = title;\n    }\n\n    public void CompleteOneLesson() => CompletedLessons++;\n}",
    practice: [
      'Create one record for API output and one class for domain behavior.',
      'Protect one field with private set or method-driven mutation.',
      'Explain why one model should be class or record.',
    ],
    reasons: [
      'Modeling choices directly affect maintainability.',
      'Understanding class vs record tradeoffs improves architecture decisions.',
    ],
    mistakes: [
      'Using one model style for every scenario without intent.',
      'Exposing mutable state widely without constraints.',
    ],
    takeaways: [
      'Classes and records serve different but complementary purposes.',
      'Encapsulation keeps domain rules consistent over time.',
    ],
    references: [
      { label: 'C# docs · Object-oriented programming', url: 'https://learn.microsoft.com/dotnet/csharp/fundamentals/object-oriented/' },
      { label: 'C# docs · record', url: 'https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/record' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: 'Interfaces and composition over deep inheritance',
    summary: 'Design flexible systems by combining interfaces with composition.',
    moduleTitle: 'Module 2 · Types, nullability, and OOP design',
    intro: 'This lesson shows how interface-driven composition can keep C# designs flexible and testable without excessive inheritance chains.',
    learningPoints: [
      'Define interfaces around behavior contracts.',
      'Inject dependencies using interface-based composition.',
      'Recognize when inheritance is too deep for maintainability.',
    ],
    lessonNotes: [
      'Interfaces let you decouple consumers from concrete implementations.',
      'Composition helps you combine focused responsibilities cleanly.',
      'Inheritance still has value, but deep hierarchies often increase rigidity and complexity.',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "public interface INotifier\n{\n    void Send(string message);\n}\n\npublic class ConsoleNotifier : INotifier\n{\n    public void Send(string message) => Console.WriteLine(message);\n}\n\npublic class LessonService\n{\n    private readonly INotifier _notifier;\n\n    public LessonService(INotifier notifier)\n    {\n        _notifier = notifier;\n    }\n\n    public void Publish() => _notifier.Send(\"lesson published\");\n}",
    practice: [
      'Define one interface for a storage or notification behavior.',
      'Swap implementations without changing the caller code.',
      'Refactor one inheritance-heavy design into composition-based style.',
    ],
    reasons: [
      'Flexible architecture depends on boundary design.',
      'Composition plus interfaces improves testability and evolution speed.',
    ],
    mistakes: [
      'Creating broad interfaces before concrete needs are clear.',
      'Using inheritance for reuse when composition is clearer.',
    ],
    takeaways: [
      'Interfaces model behavior contracts, not object identity.',
      'Composition-first design usually scales better in application code.',
    ],
    references: [
      { label: 'C# docs · Interfaces', url: 'https://learn.microsoft.com/dotnet/csharp/programming-guide/interfaces/' },
      { label: 'C# docs · Inheritance', url: 'https://learn.microsoft.com/dotnet/csharp/fundamentals/object-oriented/inheritance' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: 'Exceptions, logging, and debugging habits',
    summary: 'Handle failures clearly and investigate issues with practical debugging steps.',
    moduleTitle: 'Module 3 · Project organization and data access patterns',
    intro: 'This lesson focuses on reliability skills: handling exceptions intentionally, logging useful context, and debugging issues efficiently.',
    learningPoints: [
      'Use try or catch blocks where failures are recoverable.',
      'Log context that helps trace production issues.',
      'Build practical debugging steps for local and team workflows.',
    ],
    lessonNotes: [
      'Exception handling should clarify error boundaries, not hide failures silently.',
      'Structured logging with meaningful context reduces diagnosis time.',
      'Good debugging habits are repeatable workflows, not random trial and error.',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "try\n{\n    int value = int.Parse(\"abc\");\n    Console.WriteLine(value);\n}\ncatch (FormatException ex)\n{\n    Console.WriteLine($\"invalid input: {ex.Message}\");\n}",
    practice: [
      'Handle one parsing error with a targeted catch block.',
      'Add log messages before and after a risky operation.',
      'Write a short debugging checklist for repeated failure scenarios.',
    ],
    reasons: [
      'Failure handling quality strongly affects production stability.',
      'Debugging speed is a core practical skill in team environments.',
    ],
    mistakes: [
      'Catching Exception everywhere without actionable handling.',
      'Logging generic messages without key context values.',
    ],
    takeaways: [
      'Exception handling should communicate intent and recovery strategy.',
      'Useful logs and repeatable debugging steps save major support time.',
    ],
    references: [
      { label: 'C# docs · Exception handling statements', url: 'https://learn.microsoft.com/dotnet/csharp/language-reference/statements/exception-handling-statements' },
      { label: '.NET docs · Logging in .NET', url: 'https://learn.microsoft.com/dotnet/core/extensions/logging' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: 'Namespaces, projects, and NuGet packages',
    summary: 'Organize larger codebases and add dependencies in a controlled way.',
    moduleTitle: 'Module 3 · Project organization and data access patterns',
    intro: 'As projects grow, namespace strategy and dependency management become central to readability and stability.',
    learningPoints: [
      'Structure code with meaningful namespaces and projects.',
      'Manage package dependencies with NuGet intentionally.',
      'Avoid dependency sprawl through clear boundaries.',
    ],
    lessonNotes: [
      'Namespaces help communicate ownership and module boundaries across files.',
      'Splitting code into projects can improve separation of concerns and build clarity.',
      'NuGet packages should be added deliberately, with version awareness and justification.',
    ],
    exampleLanguage: 'bash',
    exampleCode: "dotnet new sln -n LearningApp\ndotnet new classlib -n LearningApp.Domain\ndotnet new webapi -n LearningApp.Api\ndotnet sln add LearningApp.Domain/LearningApp.Domain.csproj\ndotnet sln add LearningApp.Api/LearningApp.Api.csproj\ndotnet add LearningApp.Api package FluentValidation",
    practice: [
      'Create a solution with at least two projects.',
      'Define namespace conventions for each project.',
      'Add one NuGet dependency and document why it is needed.',
    ],
    reasons: [
      'Structure quality directly affects collaboration speed.',
      'Dependency discipline reduces long-term maintenance risk.',
    ],
    mistakes: [
      'Adding packages for small tasks already covered by the platform.',
      'Mixing unrelated concerns under one namespace or project.',
    ],
    takeaways: [
      'Namespaces and projects should reflect architectural responsibilities.',
      'NuGet management is part of engineering discipline, not only setup work.',
    ],
    references: [
      { label: 'C# docs · Namespaces', url: 'https://learn.microsoft.com/dotnet/csharp/fundamentals/types/namespaces' },
      { label: 'NuGet docs · What is NuGet?', url: 'https://learn.microsoft.com/nuget/what-is-nuget' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'LINQ for querying in-memory data',
    summary: 'Filter, project, and group data with readable LINQ expressions.',
    moduleTitle: 'Module 3 · Project organization and data access patterns',
    intro: 'This lesson introduces LINQ as a practical query style for transforming in-memory collections clearly.',
    learningPoints: [
      'Apply Where, Select, and OrderBy in common queries.',
      'Use grouping and projection for report-style data output.',
      'Keep query expressions readable and intention-revealing.',
    ],
    lessonNotes: [
      'LINQ can replace many repetitive loops with declarative query operations.',
      'Readable query chains help teams understand transformation logic quickly.',
      'LINQ should simplify intent; if it becomes harder to read, split into steps.',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "var lessons = new[]\n{\n    new { Title = \"Intro\", Duration = 20 },\n    new { Title = \"Async\", Duration = 35 },\n    new { Title = \"LINQ\", Duration = 30 }\n};\n\nvar longLessons = lessons\n    .Where(item => item.Duration >= 30)\n    .OrderBy(item => item.Title)\n    .Select(item => item.Title)\n    .ToList();",
    practice: [
      'Filter a list of records by one numeric rule.',
      'Project to a simplified view model with Select.',
      'Refactor one manual loop into a LINQ pipeline.',
    ],
    reasons: [
      'LINQ appears in both app logic and data-access layers.',
      'Query readability is important for maintenance and onboarding.',
    ],
    mistakes: [
      'Building long, dense query chains that hide intent.',
      'Using LINQ where a simple loop is clearer for the team.',
    ],
    takeaways: [
      'LINQ is most valuable when it improves clarity, not novelty.',
      'Good query naming and step boundaries keep logic understandable.',
    ],
    references: [
      { label: 'C# docs · LINQ', url: 'https://learn.microsoft.com/dotnet/csharp/linq/' },
      { label: 'C# docs · LINQ concepts', url: 'https://learn.microsoft.com/dotnet/csharp/programming-guide/concepts/linq/' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'Async and await with Task-based workflows',
    summary: 'Write responsive code by awaiting asynchronous operations correctly.',
    moduleTitle: 'Module 4 · Async programming and application I/O',
    intro: 'This lesson introduces asynchronous thinking in C# so I/O-heavy work can stay responsive and maintainable.',
    learningPoints: [
      'Understand Task-based asynchronous patterns.',
      'Use async and await in service-style methods.',
      'Handle errors and cancellation in async flows.',
    ],
    lessonNotes: [
      'Async is especially useful when operations spend time waiting on I/O.',
      'await helps write asynchronous code in readable sequential style.',
      'A reliable async flow still needs clear exception and cancellation handling.',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "public static async Task<string> LoadMessageAsync()\n{\n    await Task.Delay(200);\n    return \"done\";\n}\n\nstring message = await LoadMessageAsync();\nConsole.WriteLine(message);",
    practice: [
      'Convert one synchronous method into Task-based async style.',
      'Await two independent tasks and compare sequence behavior.',
      'Add try or catch around an awaited method call.',
    ],
    reasons: [
      'Async or await appears in modern APIs, background jobs, and cloud services.',
      'Correct async usage prevents UI or request-thread blocking.',
    ],
    mistakes: [
      'Blocking async work with Result or Wait in app code.',
      'Mixing fire-and-forget style into critical request logic.',
    ],
    takeaways: [
      'Async improves responsiveness when used for I/O-bound work.',
      'Task-based workflows should still be explicit and observable.',
    ],
    references: [
      { label: 'C# docs · Asynchronous programming', url: 'https://learn.microsoft.com/dotnet/csharp/asynchronous-programming/' },
      { label: '.NET API docs · Task', url: 'https://learn.microsoft.com/dotnet/api/system.threading.tasks.task' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: 'Files, JSON serialization, and app configuration',
    summary: 'Read files, serialize data, and manage settings with configuration APIs.',
    moduleTitle: 'Module 4 · Async programming and application I/O',
    intro: 'This lesson covers practical I/O workflows in C# applications: reading files, converting JSON, and loading environment-specific settings.',
    learningPoints: [
      'Read and write file content safely.',
      'Serialize and deserialize models with System.Text.Json.',
      'Use configuration sources instead of hardcoded values.',
    ],
    lessonNotes: [
      'File and JSON handling are common in both APIs and CLI tools.',
      'System.Text.Json is the default modern JSON option in .NET and works well for many scenarios.',
      'Configuration management is essential for environment differences between local, staging, and production.',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "using System.Text.Json;\n\npublic record LessonItem(string Title, int Duration);\n\nvar item = new LessonItem(\"C# Async\", 35);\nstring json = JsonSerializer.Serialize(item);\nawait File.WriteAllTextAsync(\"lesson.json\", json);\n\nstring raw = await File.ReadAllTextAsync(\"lesson.json\");\nvar restored = JsonSerializer.Deserialize<LessonItem>(raw);",
    practice: [
      'Serialize one model to JSON and write it to disk.',
      'Read the file back and deserialize into a typed model.',
      'Move one hardcoded setting into configuration.',
    ],
    reasons: [
      'I/O and configuration quality impact deployment reliability.',
      'Typed JSON workflows reduce schema confusion and parsing bugs.',
    ],
    mistakes: [
      'Hardcoding environment-specific values in source code.',
      'Ignoring file or JSON parsing failures in production paths.',
    ],
    takeaways: [
      'File, JSON, and config workflows are core backend building blocks.',
      'Typed models and explicit error handling improve reliability.',
    ],
    references: [
      { label: '.NET docs · File and stream I/O', url: 'https://learn.microsoft.com/dotnet/standard/io/' },
      { label: '.NET docs · System.Text.Json overview', url: 'https://learn.microsoft.com/dotnet/standard/serialization/system-text-json/overview' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'ASP.NET Core minimal API fundamentals',
    summary: 'Create routes, bind request data, and return consistent API responses.',
    moduleTitle: 'Module 5 · ASP.NET Core and a small API project',
    intro: 'This lesson introduces ASP.NET Core minimal APIs as a straightforward path to building HTTP endpoints in C#.',
    learningPoints: [
      'Create and map minimal API routes.',
      'Bind route or body input values safely.',
      'Return consistent response shapes and status codes.',
    ],
    lessonNotes: [
      'Minimal APIs are a lightweight option for building focused backend endpoints quickly.',
      'Even simple endpoints need clear validation and consistent response behavior.',
      'Route design and status code discipline matter from the very first API.',
    ],
    exampleLanguage: 'csharp',
    exampleCode: "var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\n\napp.MapGet(\"/health\", () => Results.Ok(new { status = \"ok\" }));\napp.MapPost(\"/lessons\", (LessonRequest req) => Results.Created($\"/lessons/{req.Title}\", req));\n\napp.Run();\n\npublic record LessonRequest(string Title, int Duration);",
    practice: [
      'Create a /health route and verify the response.',
      'Add one POST endpoint that accepts a request model.',
      'Standardize API response fields for success and failure.',
    ],
    reasons: [
      'Minimal APIs are common in modern .NET backend tutorials and internal services.',
      'Strong endpoint habits reduce rewrite cost when APIs expand.',
    ],
    mistakes: [
      'Returning inconsistent response structures across endpoints.',
      'Skipping validation because the endpoint is still small.',
    ],
    takeaways: [
      'Minimal APIs are simple to start but still require design discipline.',
      'Consistency in routes, models, and responses matters immediately.',
    ],
    references: [
      { label: 'ASP.NET Core docs · Minimal APIs', url: 'https://learn.microsoft.com/aspnet/core/fundamentals/minimal-apis' },
      { label: 'ASP.NET Core docs · Web APIs', url: 'https://learn.microsoft.com/aspnet/core/web-api/' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: 'Build and organize a small Web API application',
    summary: 'Assemble a practical API with validation, structure, and a production-minded checklist.',
    moduleTitle: 'Module 5 · ASP.NET Core and a small API project',
    intro: 'The final lesson combines C# and ASP.NET Core foundations into a small API project with clear layers and delivery readiness.',
    learningPoints: [
      'Define a small domain with endpoint and service boundaries.',
      'Add validation and dependency injection in a clear structure.',
      'Prepare a practical pre-release checklist for reliability.',
    ],
    lessonNotes: [
      'A small complete API is where language skills become engineering practice.',
      'Layer boundaries such as endpoint, service, and repository improve maintainability and testing.',
      'Final checks should include logging, error responses, configuration, and core flow tests.',
    ],
    exampleLanguage: 'text',
    exampleCode: "Project outline\n  Api/\n    Endpoints/\n    Services/\n    Repositories/\n    Contracts/\n\nChecklist\n  - Validate request inputs\n  - Return consistent error responses\n  - Keep settings in configuration\n  - Run smoke tests before release",
    practice: [
      'Build a tiny lesson API with at least three endpoints.',
      'Separate endpoint mapping from business logic classes.',
      'Write a release checklist and run through it once.',
    ],
    reasons: [
      'Small end-to-end projects convert isolated knowledge into practical delivery skill.',
      'Project organization habits determine long-term maintenance cost.',
    ],
    mistakes: [
      'Keeping all logic in Program.cs as features expand.',
      'Calling a project done without validation and runtime checks.',
    ],
    takeaways: [
      'A maintainable API needs clear boundaries, not only working routes.',
      'Shipping quality comes from repeatable checks before release.',
    ],
    references: [
      { label: 'ASP.NET Core docs · Dependency injection', url: 'https://learn.microsoft.com/aspnet/core/fundamentals/dependency-injection' },
      { label: 'ASP.NET Core docs · Integration tests', url: 'https://learn.microsoft.com/aspnet/core/test/integration-tests' },
    ],
  },
];

export function getCSharpLessons() {
  return csharpLessons;
}

export function getCSharpLessonBySlug(slug: string) {
  return csharpLessons.find((lesson) => lesson.slug === slug) ?? null;
}
