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

export const rustLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: 'Install Rust, rustup, and create your first Cargo project',
    summary: 'Set up the toolchain and run a clean Cargo-based workflow.',
    moduleTitle: 'Module 1 · Rust setup and core syntax',
    intro: 'This lesson helps you start Rust the right way: stable toolchain, repeatable commands, and a project managed by Cargo.',
    learningPoints: [
      'Install Rust through rustup and verify versions.',
      'Create and run projects with cargo new and cargo run.',
      'Understand why Cargo is central to Rust development.',
    ],
    lessonNotes: [
      'rustup handles installation and toolchain updates, which keeps setup more reliable than manual binaries.',
      'Cargo manages builds, dependencies, and tests in one workflow, so it is not optional for real projects.',
      'A stable startup means you can focus on ownership and type concepts later without environment friction.',
    ],
    exampleLanguage: 'bash',
    exampleCode: "rustc --version\ncargo --version\ncargo new hello_rust\ncd hello_rust\ncargo run\ncargo build",
    practice: [
      'Install rustup and check rustc and cargo versions.',
      'Create a new Cargo project and run it successfully.',
      'Inspect Cargo.toml and explain what package metadata means.',
    ],
    reasons: [
      'Tooling confidence prevents many setup-side beginner blockers.',
      'Cargo workflow literacy is required for every later lesson.',
    ],
    mistakes: [
      'Trying to manage Rust files manually without Cargo.',
      'Skipping toolchain checks and debugging environment issues too late.',
    ],
    takeaways: [
      'Rust development starts with rustup and Cargo, not raw compilation alone.',
      'You should now be able to create, run, and build a minimal Rust project.',
    ],
    references: [
      { label: 'The Rust Book · Installation', url: 'https://doc.rust-lang.org/book/ch01-01-installation.html' },
      { label: 'The Cargo Book · Getting Started', url: 'https://doc.rust-lang.org/cargo/getting-started/' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'Variables, functions, and control flow in Rust',
    summary: 'Write clear Rust programs with immutable defaults and explicit control flow.',
    moduleTitle: 'Module 1 · Rust setup and core syntax',
    intro: 'This lesson builds your Rust coding baseline: immutable thinking, typed functions, and readable branching.',
    learningPoints: [
      'Use variables, mutability, and shadowing intentionally.',
      'Write typed functions with explicit returns.',
      'Apply if, loop, while, and match control flow patterns.',
    ],
    lessonNotes: [
      'Rust defaults to immutability, which encourages safer state changes and clearer intent.',
      'Function signatures are explicit and help catch mistakes early through compile-time checks.',
      'Control flow is expression-friendly in Rust, but readability still matters more than compact syntax.',
    ],
    exampleLanguage: 'rust',
    exampleCode: "fn grade(score: i32) -> &'static str {\n    if score >= 80 {\n        \"pass\"\n    } else {\n        \"retry\"\n    }\n}\n\nfn main() {\n    let scores = [72, 85, 91];\n    for score in scores {\n        println!(\"{} -> {}\", score, grade(score));\n    }\n}",
    practice: [
      'Write a function that returns shipping tiers by amount.',
      'Use match to map numeric status codes to labels.',
      'Refactor one long main function into smaller helper functions.',
    ],
    reasons: [
      'Strong syntax fluency reduces cognitive load in later ownership-heavy topics.',
      'Clear function structure improves error messages and debugging speed.',
    ],
    mistakes: [
      'Using mutability by default instead of when truly needed.',
      'Forcing very compact expressions that make control flow harder to read.',
    ],
    takeaways: [
      'Rust syntax rewards explicitness and intentional state changes.',
      'Readable functions and control flow are foundational for all later modules.',
    ],
    references: [
      { label: 'The Rust Book · Common Programming Concepts', url: 'https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html' },
      { label: 'The Rust Book · Control Flow', url: 'https://doc.rust-lang.org/book/ch03-05-control-flow.html' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: 'Ownership and move semantics',
    summary: 'Understand how ownership keeps memory usage safe and predictable.',
    moduleTitle: 'Module 2 · Ownership and data modeling',
    intro: 'Ownership is the core Rust mental model. This lesson explains why values move, and how that prevents memory bugs.',
    learningPoints: [
      'Understand ownership rules at a practical level.',
      'Know when values move and become unavailable.',
      'Use clone deliberately instead of habitually.',
    ],
    lessonNotes: [
      'Each value has one owner by default, and ownership transfer avoids dangling references and double free problems.',
      'Move semantics may feel strict at first, but they make memory safety visible in code.',
      'The goal is not fighting the compiler. It is learning to model data flow with clear ownership intent.',
    ],
    exampleLanguage: 'rust',
    exampleCode: "fn main() {\n    let title = String::from(\"Rust Course\");\n    let moved = title;\n\n    // println!(\"{}\", title); // compile error: value moved\n    println!(\"{}\", moved);\n}",
    practice: [
      'Write a function that takes ownership of a String and returns it.',
      'Use clone in one place and explain why it is needed.',
      'Trace ownership step by step through a small program.',
    ],
    reasons: [
      'Ownership understanding unlocks nearly every Rust topic after this point.',
      'Compile-time memory safety is one of Rust’s biggest practical advantages.',
    ],
    mistakes: [
      'Adding clone everywhere to silence compiler messages.',
      'Assuming move behavior is random instead of rule-based.',
    ],
    takeaways: [
      'Ownership gives Rust safety guarantees without garbage collection.',
      'Move semantics become predictable once you trace value ownership clearly.',
    ],
    references: [
      { label: 'The Rust Book · Ownership', url: 'https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html' },
      { label: 'Rust by Example · Ownership and moves', url: 'https://doc.rust-lang.org/rust-by-example/scope/move.html' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'Borrowing and references without data races',
    summary: 'Share data safely with references and clear borrowing rules.',
    moduleTitle: 'Module 2 · Ownership and data modeling',
    intro: 'After ownership, borrowing lets you share access without giving up safety. This lesson focuses on immutable and mutable reference rules.',
    learningPoints: [
      'Use immutable references for read-only access.',
      'Use mutable references with exclusive access guarantees.',
      'Explain how borrowing rules prevent data races.',
    ],
    lessonNotes: [
      'Borrowing allows functions to use data without taking ownership.',
      'Rust enforces aliasing rules: many immutable references or one mutable reference at a time.',
      'These rules shift some runtime bugs into compile-time feedback, which is a key Rust benefit.',
    ],
    exampleLanguage: 'rust',
    exampleCode: "fn append_label(name: &mut String) {\n    name.push_str(\" - active\");\n}\n\nfn main() {\n    let mut user = String::from(\"tommy\");\n    append_label(&mut user);\n    println!(\"{}\", user);\n}",
    practice: [
      'Refactor one ownership-consuming function to use references.',
      'Write a mutable-reference function that updates a struct field.',
      'Trigger and then fix a borrowing conflict to understand the compiler message.',
    ],
    reasons: [
      'Most real Rust code uses references heavily for performance and clarity.',
      'Borrowing knowledge is required for methods, collections, and iterators.',
    ],
    mistakes: [
      'Using mutable references when read-only access is enough.',
      'Treating borrow-checker errors as obstacles instead of design feedback.',
    ],
    takeaways: [
      'Borrowing gives flexibility while preserving ownership safety.',
      'Reference rules are strict by design to eliminate a large class of bugs.',
    ],
    references: [
      { label: 'The Rust Book · References and Borrowing', url: 'https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html' },
      { label: 'The Rust Book · Slices', url: 'https://doc.rust-lang.org/book/ch04-03-slices.html' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: 'Structs, enums, and match for expressive models',
    summary: 'Represent domain states clearly with enums and pattern matching.',
    moduleTitle: 'Module 2 · Ownership and data modeling',
    intro: 'Rust type design becomes expressive when you combine structs, enums, and match to model real states explicitly.',
    learningPoints: [
      'Model structured data with structs.',
      'Represent state variations with enums.',
      'Use match for explicit and safe branching.',
    ],
    lessonNotes: [
      'Structs are great for grouped fields, while enums model finite sets of valid states.',
      'match makes branching exhaustive, so unhandled states are caught by the compiler.',
      'This combination improves correctness and readability in domain-heavy code.',
    ],
    exampleLanguage: 'rust',
    exampleCode: "struct Course {\n    title: String,\n}\n\nenum PublishState {\n    Draft,\n    Published,\n}\n\nfn describe(state: PublishState) -> &'static str {\n    match state {\n        PublishState::Draft => \"not public\",\n        PublishState::Published => \"live\",\n    }\n}\n\nfn main() {\n    let course = Course { title: String::from(\"Rust\") };\n    println!(\"{} is {}\", course.title, describe(PublishState::Published));\n}",
    practice: [
      'Define an enum for order statuses and match all variants.',
      'Model one business entity with a struct and helper methods.',
      'Replace if-else chains with a clearer match expression where suitable.',
    ],
    reasons: [
      'Explicit state modeling reduces logic ambiguity and runtime surprises.',
      'Enums and match are among Rust’s most practical design strengths.',
    ],
    mistakes: [
      'Using loose string values instead of enums for critical states.',
      'Ignoring the benefit of exhaustive matching in branching logic.',
    ],
    takeaways: [
      'Structs and enums help encode domain meaning directly into types.',
      'match improves reliability by making state handling explicit.',
    ],
    references: [
      { label: 'The Rust Book · Defining and Instantiating Structs', url: 'https://doc.rust-lang.org/book/ch05-01-defining-structs.html' },
      { label: 'The Rust Book · Enums and Pattern Matching', url: 'https://doc.rust-lang.org/book/ch06-00-enums.html' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: 'Collections and UTF-8 string handling',
    summary: 'Work with vectors, hash maps, and Rust string types in practical scenarios.',
    moduleTitle: 'Module 3 · Error handling and project structure',
    intro: 'Collections and strings are everyday tools, and Rust’s UTF-8 string model is important to understand early.',
    learningPoints: [
      'Use Vec and HashMap for common data tasks.',
      'Understand String and &str usage patterns.',
      'Avoid incorrect indexing assumptions with UTF-8 text.',
    ],
    lessonNotes: [
      'Vectors and hash maps cover many real data workloads in Rust apps.',
      'Rust strings are UTF-8 encoded, so byte indexing is not the same as character indexing.',
      'Choosing correct string APIs early prevents subtle text-processing bugs.',
    ],
    exampleLanguage: 'rust',
    exampleCode: "use std::collections::HashMap;\n\nfn main() {\n    let mut lessons = vec![\"setup\", \"ownership\"];\n    lessons.push(\"traits\");\n\n    let mut progress = HashMap::new();\n    progress.insert(\"tommy\", 7);\n\n    let title = String::from(\"Rust 課程\");\n    println!(\"{} {:?} {:?}\", title, lessons, progress.get(\"tommy\"));\n}",
    practice: [
      'Build a Vec of lesson names and iterate through them.',
      'Track user score by name with a HashMap.',
      'Experiment with String slicing and observe UTF-8 boundaries.',
    ],
    reasons: [
      'Collections and string handling appear in almost every Rust project.',
      'UTF-8 awareness is critical for internationalized and user-facing apps.',
    ],
    mistakes: [
      'Treating Rust strings like fixed-width character arrays.',
      'Choosing data structures without considering lookup and update patterns.',
    ],
    takeaways: [
      'Vectors and hash maps are core practical collections in Rust.',
      'String handling requires UTF-8 aware APIs and expectations.',
    ],
    references: [
      { label: 'The Rust Book · Storing Lists of Values with Vectors', url: 'https://doc.rust-lang.org/book/ch08-01-vectors.html' },
      { label: 'The Rust Book · Storing UTF-8 Encoded Text with Strings', url: 'https://doc.rust-lang.org/book/ch08-02-strings.html' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: 'Option and Result for reliable error flows',
    summary: 'Model missing values and recoverable failures explicitly.',
    moduleTitle: 'Module 3 · Error handling and project structure',
    intro: 'Rust pushes you to model uncertainty explicitly. This lesson uses Option and Result to avoid hidden null and exception-style surprises.',
    learningPoints: [
      'Use Option for nullable-like situations safely.',
      'Use Result for recoverable failures.',
      'Apply match and the ? operator in error propagation.',
    ],
    lessonNotes: [
      'Option<T> makes missing data explicit, so absence is handled rather than ignored.',
      'Result<T, E> keeps successful and failed outcomes in the type system.',
      'These types improve reliability by forcing handling at compile time.',
    ],
    exampleLanguage: 'rust',
    exampleCode: "fn parse_lesson(input: &str) -> Result<i32, std::num::ParseIntError> {\n    let value = input.parse::<i32>()?;\n    Ok(value)\n}\n\nfn main() {\n    match parse_lesson(\"12\") {\n        Ok(v) => println!(\"lesson: {}\", v),\n        Err(e) => println!(\"error: {}\", e),\n    }\n}",
    practice: [
      'Refactor a panic-based parse flow into Result handling.',
      'Use Option for an optional lookup and provide a default.',
      'Propagate errors with ? in a multi-step function.',
    ],
    reasons: [
      'Explicit error flows are one of Rust’s strongest production advantages.',
      'Most real APIs and CLI tools require robust failure handling.',
    ],
    mistakes: [
      'Using unwrap in places where failure is expected.',
      'Converting all errors into vague strings too early.',
    ],
    takeaways: [
      'Option and Result encode uncertainty directly in types.',
      'The compiler helps enforce better error handling discipline.',
    ],
    references: [
      { label: 'The Rust Book · Recoverable Errors with Result', url: 'https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html' },
      { label: 'Rust std docs · Option', url: 'https://doc.rust-lang.org/std/option/' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: 'Modules, crates, and package layout with Cargo',
    summary: 'Split growing codebases into maintainable modules and crates.',
    moduleTitle: 'Module 3 · Error handling and project structure',
    intro: 'As Rust projects expand, module and crate boundaries become essential for readability and team collaboration.',
    learningPoints: [
      'Organize code with mod, pub, and use.',
      'Distinguish binary and library crate roles.',
      'Apply package structure that scales beyond toy examples.',
    ],
    lessonNotes: [
      'Rust module visibility rules help keep internal details private by default.',
      'Cargo packages can contain library and binary targets for clean separation.',
      'A thoughtful structure reduces coupling and keeps imports understandable.',
    ],
    exampleLanguage: 'text',
    exampleCode: "lesson_cli/\n  Cargo.toml\n  src/main.rs\n  src/lib.rs\n  src/course/mod.rs\n  src/course/service.rs",
    practice: [
      'Split one-file code into modules with clear responsibilities.',
      'Expose only the API surface needed by main.',
      'Create a lib + bin arrangement in a sample Cargo package.',
    ],
    reasons: [
      'Good structure lowers refactor and onboarding costs.',
      'Module boundaries are key for testability and maintainability.',
    ],
    mistakes: [
      'Making everything public to bypass visibility errors.',
      'Keeping all logic in main.rs even as project size grows.',
    ],
    takeaways: [
      'Rust module visibility is a design tool, not only syntax.',
      'Cargo package layout should reflect architectural boundaries.',
    ],
    references: [
      { label: 'The Rust Book · Packages, Crates, and Modules', url: 'https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html' },
      { label: 'The Cargo Book', url: 'https://doc.rust-lang.org/cargo/' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'Traits and generics for reusable APIs',
    summary: 'Create abstractions that stay type-safe without repeating logic.',
    moduleTitle: 'Module 4 · Abstractions and functional patterns',
    intro: 'Traits and generics let Rust code stay reusable while preserving compile-time guarantees.',
    learningPoints: [
      'Write generic functions over multiple types.',
      'Define traits to express shared behavior.',
      'Use trait bounds to keep APIs both flexible and safe.',
    ],
    lessonNotes: [
      'Generics remove duplicate logic across types while preserving performance through monomorphization.',
      'Traits define behavior contracts and are widely used in Rust libraries.',
      'Clear trait bounds improve both compiler diagnostics and API readability.',
    ],
    exampleLanguage: 'rust',
    exampleCode: "trait Summary {\n    fn summary(&self) -> String;\n}\n\nstruct Course {\n    title: String,\n}\n\nimpl Summary for Course {\n    fn summary(&self) -> String {\n        format!(\"Course: {}\", self.title)\n    }\n}\n\nfn print_summary<T: Summary>(item: &T) {\n    println!(\"{}\", item.summary());\n}",
    practice: [
      'Create a trait for exportable report types.',
      'Implement the trait for two different structs.',
      'Write one generic function that works for both implementations.',
    ],
    reasons: [
      'Traits and generics are core to Rust ecosystem design.',
      'Reusable abstractions keep growing codebases manageable.',
    ],
    mistakes: [
      'Adding generics where concrete types are clearer.',
      'Creating broad traits before concrete shared behavior exists.',
    ],
    takeaways: [
      'Traits model behavior contracts cleanly.',
      'Generics reduce duplication while keeping type safety strong.',
    ],
    references: [
      { label: 'The Rust Book · Generic Types, Traits, and Lifetimes', url: 'https://doc.rust-lang.org/book/ch10-00-generics.html' },
      { label: 'Rust by Example · Traits', url: 'https://doc.rust-lang.org/rust-by-example/trait.html' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'Lifetime basics for borrowed data',
    summary: 'Express reference lifetimes in function signatures without overcomplicating design.',
    moduleTitle: 'Module 4 · Abstractions and functional patterns',
    intro: 'Lifetimes can feel intimidating, but beginner usage is mostly about expressing how returned references relate to inputs.',
    learningPoints: [
      'Understand why lifetime annotations exist.',
      'Read common lifetime signatures in functions.',
      'Avoid unnecessary explicit lifetimes where elision already works.',
    ],
    lessonNotes: [
      'Lifetimes describe how long borrowed data must remain valid, enabling compile-time safety.',
      'Many lifetime cases are inferred automatically, so explicit annotations are mainly for ambiguous relationships.',
      'Focus on clear data ownership first, then add lifetime syntax only where needed.',
    ],
    exampleLanguage: 'rust',
    exampleCode: "fn longest<'a>(a: &'a str, b: &'a str) -> &'a str {\n    if a.len() >= b.len() { a } else { b }\n}\n\nfn main() {\n    let x = String::from(\"rust\");\n    let y = String::from(\"ownership\");\n    println!(\"{}\", longest(&x, &y));\n}",
    practice: [
      'Implement a function returning one of two borrowed inputs.',
      'Remove redundant explicit lifetimes and check compiler behavior.',
      'Explain in words what one lifetime annotation means in a sample signature.',
    ],
    reasons: [
      'Lifetimes are required to understand many library APIs and compiler errors.',
      'A practical lifetime mental model prevents guesswork debugging.',
    ],
    mistakes: [
      'Adding complex lifetimes without understanding data ownership flow.',
      'Assuming every reference requires manual annotation.',
    ],
    takeaways: [
      'Lifetimes communicate borrowing relationships, not execution time.',
      'Most lifetime complexity disappears when ownership design is clear.',
    ],
    references: [
      { label: 'The Rust Book · Validating References with Lifetimes', url: 'https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html' },
      { label: 'Rust Reference · Lifetime Elision', url: 'https://doc.rust-lang.org/reference/lifetime-elision.html' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: 'Iterators and closures for data pipelines',
    summary: 'Transform and filter data with composable iterator chains.',
    moduleTitle: 'Module 4 · Abstractions and functional patterns',
    intro: 'Iterators and closures help you write expressive transformations without giving up performance or type safety.',
    learningPoints: [
      'Use iter, map, filter, and collect in common flows.',
      'Capture values with closures appropriately.',
      'Balance iterator style with readability.',
    ],
    lessonNotes: [
      'Iterator chains are lazy until consumed, which supports efficient pipelines.',
      'Closures let you pass behavior inline, useful for sorting, filtering, and mapping operations.',
      'Readable naming and step boundaries matter more than writing one long chain.',
    ],
    exampleLanguage: 'rust',
    exampleCode: "fn main() {\n    let lessons = vec![1, 2, 3, 4, 5, 6];\n\n    let even_doubled: Vec<i32> = lessons\n        .iter()\n        .filter(|n| *n % 2 == 0)\n        .map(|n| n * 2)\n        .collect();\n\n    println!(\"{:?}\", even_doubled);\n}",
    practice: [
      'Filter a vector of scores and compute a transformed result.',
      'Use sort_by_key with a closure on a struct list.',
      'Refactor one loop into an iterator chain and compare readability.',
    ],
    reasons: [
      'Iterator style is common in modern Rust codebases.',
      'Closures and iterators pair naturally with trait-based APIs.',
    ],
    mistakes: [
      'Writing very long chains that hide business meaning.',
      'Collecting too early and losing lazy-computation benefits.',
    ],
    takeaways: [
      'Iterators and closures enable concise, type-safe data transformations.',
      'Pipeline clarity should always guide how far abstraction goes.',
    ],
    references: [
      { label: 'The Rust Book · Closures', url: 'https://doc.rust-lang.org/book/ch13-01-closures.html' },
      { label: 'The Rust Book · Processing a Series of Items with Iterators', url: 'https://doc.rust-lang.org/book/ch13-02-iterators.html' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'Testing and documentation workflow in Rust projects',
    summary: 'Use unit tests, integration tests, and docs to keep code trustworthy.',
    moduleTitle: 'Module 5 · Testing, concurrency, and a small CLI',
    intro: 'This lesson focuses on quality workflows in Rust: tests for correctness and docs that stay close to code.',
    learningPoints: [
      'Write unit tests near implementation code.',
      'Create integration tests for public behavior.',
      'Use rustdoc comments and doctests for executable examples.',
    ],
    lessonNotes: [
      'Rust supports multiple test layers through Cargo, making it easy to scale quality checks.',
      'Documentation comments can include runnable examples, reducing drift between docs and behavior.',
      'Good tests and docs make refactoring safer and onboarding faster.',
    ],
    exampleLanguage: 'rust',
    exampleCode: "/// Adds two numbers.\n///\n/// # Examples\n///\n/// ```\n/// assert_eq!(add(2, 3), 5);\n/// ```\nfn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn add_works() {\n        assert_eq!(add(1, 2), 3);\n    }\n}",
    practice: [
      'Add one unit test and one integration test for a small module.',
      'Write documentation comments for a public function.',
      'Run cargo test and cargo doc to validate quality workflows.',
    ],
    reasons: [
      'Testing and docs are core parts of maintainable Rust projects.',
      'Doctests help keep examples accurate as code evolves.',
    ],
    mistakes: [
      'Testing only happy paths and skipping edge cases.',
      'Writing docs that are never validated against real code.',
    ],
    takeaways: [
      'Rust tooling makes quality checks part of the normal workflow.',
      'Tests and docs together improve confidence and team communication.',
    ],
    references: [
      { label: 'The Rust Book · Writing Automated Tests', url: 'https://doc.rust-lang.org/book/ch11-00-testing.html' },
      { label: 'The Rust Book · Publishing a Crate to Crates.io', url: 'https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: 'Concurrency and async intro through a small CLI tool',
    summary: 'Apply threads or async-style thinking to build a practical command-line tool.',
    moduleTitle: 'Module 5 · Testing, concurrency, and a small CLI',
    intro: 'The final lesson combines core Rust concepts in a small CLI scenario where you fetch, process, and report data concurrently.',
    learningPoints: [
      'Use threads and channels for simple concurrent work.',
      'Understand when async may be useful in I/O-heavy tools.',
      'Package a small CLI with maintainable structure and tests.',
    ],
    lessonNotes: [
      'Rust supports multiple concurrency styles, and threads with channels are a good first practical step.',
      'Async is often introduced when tasks spend time waiting on I/O rather than CPU work.',
      'The project goal is not complexity. It is a coherent tool that shows ownership-safe concurrency in practice.',
    ],
    exampleLanguage: 'rust',
    exampleCode: "use std::sync::mpsc;\nuse std::thread;\n\nfn main() {\n    let (tx, rx) = mpsc::channel();\n\n    thread::spawn(move || {\n        tx.send(String::from(\"report ready\")).unwrap();\n    });\n\n    println!(\"{}\", rx.recv().unwrap());\n}",
    practice: [
      'Build a CLI that reads two files concurrently and combines output.',
      'Add argument parsing and friendly error messages.',
      'Write at least two tests for core transformation logic.',
    ],
    reasons: [
      'A small end-to-end tool is the best way to connect Rust concepts meaningfully.',
      'Concurrency and CLI workflows are common Rust use cases in real teams.',
    ],
    mistakes: [
      'Starting with complex async frameworks before basic thread patterns are clear.',
      'Mixing business logic directly into argument and I/O handling code.',
    ],
    takeaways: [
      'Rust can build practical CLI tools with strong correctness guarantees.',
      'Concurrency decisions should match workload patterns, not trends.',
    ],
    references: [
      { label: 'The Rust Book · Fearless Concurrency', url: 'https://doc.rust-lang.org/book/ch16-00-concurrency.html' },
      { label: 'Asynchronous Programming in Rust', url: 'https://rust-lang.github.io/async-book/' },
    ],
  },
];

export function getRustLessons() {
  return rustLessons;
}

export function getRustLessonBySlug(slug: string) {
  return rustLessons.find((lesson) => lesson.slug === slug) ?? null;
}
