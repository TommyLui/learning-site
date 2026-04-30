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

const FOUNDATIONS_MODULE = 'Module 1 · Maven foundations and project layout';
const DEPENDENCIES_MODULE = 'Module 2 · Dependencies and reproducible builds';
const BUILD_CONTROL_MODULE = 'Module 3 · Lifecycles, plugins, and build control';
const PUBLISHING_MODULE = 'Module 4 · Multi-module projects and artifact publishing';

export const mavenLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: 'Install Maven and run the first project',
    summary: 'Install Maven, verify the Java toolchain, generate a starter project, and run the first package build.',
    moduleTitle: FOUNDATIONS_MODULE,
    intro: 'This first lesson builds a reliable local workflow so later Maven topics can focus on project structure and build behavior instead of setup problems.',
    learningPoints: [
      'Verify Java and Maven from the command line before creating a project.',
      'Generate a small Maven project with the quickstart archetype.',
      'Run mvn package and identify the generated build output.',
    ],
    lessonNotes: [
      'Maven is a build and dependency management tool for Java projects, so a working JDK is part of the baseline environment.',
      'The quickstart archetype creates a small project with a pom.xml, source folders, test folders, and a default package workflow.',
      'A successful mvn package run proves Maven can resolve plugins, compile code, run tests, and create an artifact under target.',
    ],
    exampleLanguage: 'bash',
    exampleCode: `java -version
mvn --version

mvn archetype:generate -DgroupId=com.example -DartifactId=hello-maven -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

cd hello-maven
mvn package`,
    practice: [
      'Install Maven and confirm mvn --version reports both Maven and Java versions.',
      'Generate a quickstart project and locate pom.xml, src/main/java, src/test/java, and target.',
      'Run mvn package twice and compare the first dependency/plugin download run with the second run.',
    ],
    reasons: [
      'A stable Maven setup removes a large source of beginner confusion in Java and Spring projects.',
      'The first build establishes the feedback loop used throughout the rest of the course.',
    ],
    mistakes: [
      'Installing Maven without checking that JAVA_HOME and the command-line JDK point to a compatible Java version.',
      'Treating archetype output as magic instead of inspecting the folders and pom.xml it created.',
    ],
    takeaways: [
      'Maven projects start from a POM plus a predictable folder structure.',
      'mvn package is a practical first proof that the local build path works.',
    ],
    references: [
      { label: 'Apache Maven · Maven in 5 Minutes', url: 'https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html' },
      { label: 'Apache Maven · Maven Wrapper', url: 'https://maven.apache.org/tools/mavenwrapper.html' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'Read the POM and Maven coordinates',
    summary: 'Understand the minimal pom.xml, artifact coordinates, default packaging, and where Maven gets project metadata.',
    moduleTitle: FOUNDATIONS_MODULE,
    intro: 'The POM is Maven’s source of truth, so this lesson teaches the small set of fields you must understand before adding dependencies or plugins.',
    learningPoints: [
      'Identify the required elements in a minimal pom.xml.',
      'Explain groupId, artifactId, and version as Maven coordinates.',
      'Recognize how defaults come from packaging and the Super POM.',
    ],
    lessonNotes: [
      'Maven coordinates uniquely identify a project artifact as groupId:artifactId:version, which is how dependencies are resolved and reused.',
      'The POM can stay small because Maven inherits many defaults from the Super POM and lifecycle conventions.',
      'Clear coordinates matter later when modules depend on each other or when an artifact is installed or deployed.',
    ],
    exampleLanguage: 'xml',
    exampleCode: `<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.example</groupId>
  <artifactId>hello-maven</artifactId>
  <version>1.0.0-SNAPSHOT</version>
</project>`,
    practice: [
      'Open a generated pom.xml and label the modelVersion, groupId, artifactId, and version fields.',
      'Change artifactId to a clearer project name and rerun mvn package.',
      'Describe the artifact coordinate for your project in groupId:artifactId:version form.',
    ],
    reasons: [
      'Reading POM files is a daily skill in Java backend and Spring development.',
      'Coordinates are the shared language Maven uses for dependencies, modules, and publishing.',
    ],
    mistakes: [
      'Changing artifactId or groupId casually without considering downstream dependency names.',
      'Assuming a short POM means Maven is not applying defaults behind the scenes.',
    ],
    takeaways: [
      'pom.xml describes what the project is and how Maven should build it.',
      'Maven coordinates make artifacts discoverable and reusable.',
    ],
    references: [
      { label: 'Apache Maven · Introduction to the POM', url: 'https://maven.apache.org/guides/introduction/introduction-to-the-pom.html' },
      { label: 'Apache Maven · POM Reference', url: 'https://maven.apache.org/pom.html' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: 'Understand the standard directory layout',
    summary: 'Learn Maven’s expected source, resource, test, site, and target folders so projects stay predictable.',
    moduleTitle: FOUNDATIONS_MODULE,
    intro: 'Maven’s conventions reduce configuration, and the standard directory layout is the most visible convention learners meet first.',
    learningPoints: [
      'Map production code, tests, resources, and generated output to the standard Maven folders.',
      'Understand why pom.xml lives at the project root.',
      'Separate source files from generated target output.',
    ],
    lessonNotes: [
      'src/main/java is for production Java source, while src/test/java is for test source compiled and run during test phases.',
      'src/main/resources and src/test/resources keep non-code files on the appropriate runtime or test classpath.',
      'target is generated build output and should be reproducible from source, not treated as the place to edit code.',
    ],
    exampleLanguage: 'text',
    exampleCode: `hello-maven/
  pom.xml
  src/
    main/
      java/
      resources/
    test/
      java/
      resources/
    site/
  target/`,
    practice: [
      'Create a small resource file under src/main/resources and confirm it is copied during packaging.',
      'Move a test-only fixture into src/test/resources and keep production resources clean.',
      'Delete target and rerun mvn package to prove generated files can be recreated.',
    ],
    reasons: [
      'Standard layout lets Maven and IDEs agree on source roots without extra configuration.',
      'Predictable folders make onboarding and code review easier across Java projects.',
    ],
    mistakes: [
      'Editing files inside target and expecting those changes to be source-controlled behavior.',
      'Mixing test fixtures with production resources, which can leak test data into packaged artifacts.',
    ],
    takeaways: [
      'Maven favors convention over repeated build configuration.',
      'Keep source, resources, tests, and generated output in their intended folders.',
    ],
    references: [
      { label: 'Apache Maven · Standard Directory Layout', url: 'https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html' },
      { label: 'Apache Maven · Maven in 5 Minutes', url: 'https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'Add dependencies and inspect the dependency tree',
    summary: 'Declare direct dependencies, understand transitive dependencies, and inspect the resolved tree.',
    moduleTitle: DEPENDENCIES_MODULE,
    intro: 'Most Maven projects become useful by depending on libraries, so this lesson teaches how dependencies enter the project and how to inspect them.',
    learningPoints: [
      'Add a direct dependency to pom.xml with clear coordinates.',
      'Explain why transitive dependencies appear even when you did not declare them directly.',
      'Use dependency:tree to inspect what Maven resolved.',
    ],
    lessonNotes: [
      'Dependencies are declared by coordinates, and Maven downloads them from configured repositories into the local repository cache.',
      'Transitive dependencies come from the dependencies of your dependencies, which is powerful but can hide version or conflict surprises.',
      'Maven uses dependency mediation rules such as nearest definition when multiple versions of the same dependency appear in the tree.',
    ],
    exampleLanguage: 'xml',
    exampleCode: `<dependencies>
  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.2</version>
    <scope>test</scope>
  </dependency>
</dependencies>

<!-- Inspect the resolved graph -->
<!-- mvn dependency:tree -->`,
    practice: [
      'Add one small library dependency and run mvn dependency:tree.',
      'Find which entries in the tree are direct and which are transitive.',
      'Remove the dependency and confirm the related tree entries disappear.',
    ],
    reasons: [
      'Dependency literacy prevents hidden classpath and version problems.',
      'Inspecting the tree is the first debugging move when a library appears unexpectedly.',
    ],
    mistakes: [
      'Using a class from a transitive dependency without declaring it directly when your code depends on it.',
      'Treating dependency conflicts as random instead of reading the resolved dependency tree.',
    ],
    takeaways: [
      'Direct dependencies document what your code intentionally uses.',
      'The dependency tree explains the classpath Maven actually builds.',
    ],
    references: [
      { label: 'Apache Maven · Dependency Mechanism', url: 'https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html' },
      { label: 'Apache Maven Dependency Plugin · tree', url: 'https://maven.apache.org/plugins/maven-dependency-plugin/tree-mojo.html' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: 'Use dependency scopes correctly',
    summary: 'Choose compile, provided, runtime, test, system, and import scopes based on classpath needs.',
    moduleTitle: DEPENDENCIES_MODULE,
    intro: 'Dependency scopes decide where a library is visible, so this lesson focuses on keeping compile, runtime, and test classpaths intentional.',
    learningPoints: [
      'Explain the purpose of common Maven dependency scopes.',
      'Choose test, provided, runtime, or compile scope for practical examples.',
      'Recognize why system scope should usually be avoided.',
    ],
    lessonNotes: [
      'compile is the default scope and makes a dependency available to compile, test, and runtime classpaths.',
      'test scope is ideal for testing libraries because it prevents test-only tools from becoming production dependencies.',
      'provided means something else, such as the JDK or container, supplies the dependency at runtime; system is supported but not recommended for normal projects.',
    ],
    exampleLanguage: 'xml',
    exampleCode: `<dependencies>
  <dependency>
    <groupId>jakarta.servlet</groupId>
    <artifactId>jakarta.servlet-api</artifactId>
    <version>6.0.0</version>
    <scope>provided</scope>
  </dependency>

  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.2</version>
    <scope>test</scope>
  </dependency>
</dependencies>`,
    practice: [
      'Mark a testing library with test scope and confirm production code cannot rely on it.',
      'Compare dependency:tree output after changing a dependency from compile to test scope.',
      'Explain whether a servlet API dependency should be compile or provided in a container-based app.',
    ],
    reasons: [
      'Scopes keep packaged artifacts smaller and classpaths easier to reason about.',
      'Correct scope choices prevent production code from accidentally depending on test-only libraries.',
    ],
    mistakes: [
      'Leaving every dependency in default compile scope because the build happens to pass.',
      'Using system scope for local jars instead of a proper repository or repository manager workflow.',
    ],
    takeaways: [
      'A dependency declaration should include the narrowest scope that matches how the code uses it.',
      'Scopes affect both classpath visibility and transitive dependency behavior.',
    ],
    references: [
      { label: 'Apache Maven · Dependency Scope', url: 'https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#Dependency_Scope' },
      { label: 'Apache Maven · Dependency Mechanism', url: 'https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: 'Manage versions with dependencyManagement and BOMs',
    summary: 'Centralize dependency versions with dependencyManagement and imported BOMs for more predictable builds.',
    moduleTitle: DEPENDENCIES_MODULE,
    intro: 'As projects grow, scattered versions become hard to maintain, so this lesson introduces Maven’s version-management patterns.',
    learningPoints: [
      'Use dependencyManagement to define versions without adding dependencies by itself.',
      'Import a BOM POM to align a family of dependency versions.',
      'Separate version policy from actual dependency usage.',
    ],
    lessonNotes: [
      'dependencyManagement does not put libraries on the classpath; it supplies version and scope defaults when dependencies are declared elsewhere.',
      'A BOM uses pom type with import scope inside dependencyManagement to align many related artifacts to compatible versions.',
      'Centralized version control improves reproducibility and makes upgrades easier to review.',
    ],
    exampleLanguage: 'xml',
    exampleCode: `<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.junit</groupId>
      <artifactId>junit-bom</artifactId>
      <version>5.10.2</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>

<dependencies>
  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <scope>test</scope>
  </dependency>
</dependencies>`,
    practice: [
      'Move one repeated dependency version into dependencyManagement and confirm the build still resolves it.',
      'Import a small BOM and remove the managed version from one dependency declaration.',
      'Run mvn help:effective-pom to see the managed version Maven applies.',
    ],
    reasons: [
      'Version management lowers upgrade risk in multi-module and team projects.',
      'BOMs help keep library ecosystems compatible without hand-aligning every artifact.',
    ],
    mistakes: [
      'Expecting dependencyManagement to add a dependency automatically.',
      'Mixing managed BOM versions with random explicit versions without understanding which wins.',
    ],
    takeaways: [
      'dependencyManagement is version policy, not dependency usage.',
      'Imported BOMs are a standard way to keep related dependency versions aligned.',
    ],
    references: [
      { label: 'Apache Maven · Dependency Management', url: 'https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#Dependency_Management' },
      { label: 'Apache Maven · Importing Dependencies', url: 'https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#Importing_Dependencies' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: 'Run lifecycle phases with confidence',
    summary: 'Understand Maven lifecycles and run clean, validate, compile, test, package, verify, install, and deploy intentionally.',
    moduleTitle: BUILD_CONTROL_MODULE,
    intro: 'Maven commands are easiest to understand when you see them as lifecycle phases that run in a fixed order.',
    learningPoints: [
      'Name the clean, default, and site lifecycles.',
      'Explain why invoking a later phase also runs earlier phases in that lifecycle.',
      'Choose mvn verify as a strong default verification command when unsure.',
    ],
    lessonNotes: [
      'The default lifecycle includes phases such as validate, compile, test, package, verify, install, and deploy.',
      'Running mvn package does not only package; it also runs preceding phases such as compile and test first.',
      'The clean lifecycle removes generated output, while the site lifecycle is for project documentation and reports.',
    ],
    exampleLanguage: 'bash',
    exampleCode: `mvn clean
mvn validate
mvn compile
mvn test
mvn package
mvn verify
mvn install`,
    practice: [
      'Run mvn clean package and note which phases appear in the output.',
      'Run mvn test and compare it with mvn verify in a small project.',
      'Explain why mvn package can fail during tests before packaging happens.',
    ],
    reasons: [
      'Lifecycle understanding turns Maven from command memorization into predictable build control.',
      'Choosing the right phase improves local feedback and CI reliability.',
    ],
    mistakes: [
      'Thinking Maven phases are independent commands that do not trigger earlier work.',
      'Running install or deploy locally when verify would be enough for validation.',
    ],
    takeaways: [
      'Later lifecycle phases include earlier phases in order.',
      'mvn verify is a safe default when you want confidence without publishing anything.',
    ],
    references: [
      { label: 'Apache Maven · Build Lifecycle', url: 'https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html' },
      { label: 'Apache Maven · Maven in 5 Minutes', url: 'https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: 'Configure plugins and goals',
    summary: 'Understand Maven plugins, goals, executions, lifecycle bindings, and why plugin versions should be pinned.',
    moduleTitle: BUILD_CONTROL_MODULE,
    intro: 'Maven core is small because plugins perform the real build work, so this lesson shows how to configure that work safely.',
    learningPoints: [
      'Distinguish plugins, goals, Mojos, and lifecycle phase bindings.',
      'Configure build plugins under build and reporting plugins under reporting.',
      'Pin plugin versions directly or through pluginManagement for reproducible builds.',
    ],
    lessonNotes: [
      'A plugin is a collection of goals; a goal can be invoked directly or bound to a lifecycle phase.',
      'Plugin executions let you attach a goal to a phase with configuration that is specific to your project.',
      'Declaring plugin versions avoids surprise behavior when default plugin versions change between environments or Maven versions.',
    ],
    exampleLanguage: 'xml',
    exampleCode: `<build>
  <pluginManagement>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.13.0</version>
      </plugin>
    </plugins>
  </pluginManagement>

  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <configuration>
        <release>21</release>
      </configuration>
    </plugin>
  </plugins>
</build>`,
    practice: [
      'Inspect which compiler plugin version your project uses in mvn help:effective-pom.',
      'Configure maven-compiler-plugin with a release value matching your JDK target.',
      'Explain the difference between pluginManagement and plugins in your own words.',
    ],
    reasons: [
      'Most build customization in Maven happens through plugins rather than custom scripts.',
      'Pinned plugin versions make local and CI builds more reproducible.',
    ],
    mistakes: [
      'Putting build plugin configuration under reporting or expecting reporting plugins to affect packaging.',
      'Leaving important plugin versions implicit and then being surprised by different CI behavior.',
    ],
    takeaways: [
      'Plugins provide Maven’s build actions, and goals are the tasks they expose.',
      'Configure plugins deliberately and pin versions for repeatable builds.',
    ],
    references: [
      { label: 'Apache Maven · Introduction to Plugins', url: 'https://maven.apache.org/guides/introduction/introduction-to-plugins.html' },
      { label: 'Apache Maven · Configuring Plugins', url: 'https://maven.apache.org/guides/mini/guide-configuring-plugins.html' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'Use Maven Wrapper and profiles for repeatable environments',
    summary: 'Use the Maven Wrapper and build profiles to keep project builds consistent across machines and environments.',
    moduleTitle: BUILD_CONTROL_MODULE,
    intro: 'Once a project is shared, repeatability matters more than local convenience, so this lesson combines Maven Wrapper and profiles.',
    learningPoints: [
      'Use mvnw or mvnw.cmd so collaborators run the intended Maven version.',
      'Activate profiles explicitly with -P or implicitly by environment conditions.',
      'Inspect active profiles and the effective POM when troubleshooting differences.',
    ],
    lessonNotes: [
      'The Maven Wrapper stores wrapper configuration under .mvn/wrapper and lets a project bootstrap a chosen Maven version.',
      'Profiles modify the build model for different needs, such as local development settings, release options, or OS-specific behavior.',
      'Profiles can harm portability if they hide required behavior in a developer-only settings file, so keep important project behavior visible.',
    ],
    exampleLanguage: 'bash',
    exampleCode: `mvn wrapper:wrapper -Dmaven=3.9.9
./mvnw --version
./mvnw verify -Pdev
mvn help:active-profiles
mvn help:effective-pom`,
    practice: [
      'Add Maven Wrapper to a sample project and run ./mvnw verify or mvnw.cmd verify.',
      'Create a simple dev profile that sets one property and inspect it with help:active-profiles.',
      'Compare mvn --version with ./mvnw --version and explain why teams prefer wrapper scripts.',
    ],
    reasons: [
      'Wrapper scripts reduce “works on my machine” differences in team and CI environments.',
      'Profiles let one project adapt to environment differences without duplicating POM files.',
    ],
    mistakes: [
      'Committing profile behavior that only works on one developer machine.',
      'Ignoring wrapper files and assuming everyone has the same Maven version installed globally.',
    ],
    takeaways: [
      'Use the Maven Wrapper when project-level Maven version consistency matters.',
      'Profiles are powerful but should be explicit, inspectable, and portable.',
    ],
    references: [
      { label: 'Apache Maven · Maven Wrapper', url: 'https://maven.apache.org/tools/mavenwrapper.html' },
      { label: 'Apache Maven · Build Profiles', url: 'https://maven.apache.org/guides/introduction/introduction-to-profiles.html' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'Build a multi-module project with the reactor',
    summary: 'Create an aggregator POM, define modules, and use the reactor to build related projects in order.',
    moduleTitle: PUBLISHING_MODULE,
    intro: 'Many real Java systems contain multiple libraries or applications, so this lesson introduces Maven’s reactor and multi-module workflow.',
    learningPoints: [
      'Create a parent or aggregator project with packaging set to pom.',
      'List child modules under modules and understand reactor build order.',
      'Use reactor command-line options such as -pl and -am for focused builds.',
    ],
    lessonNotes: [
      'Aggregation tells Maven which modules to build together; inheritance tells child POMs which parent configuration they receive.',
      'The reactor collects modules, sorts them by relationships such as dependencies, and builds them in a valid order.',
      'Focused reactor options help large projects build only the module you need plus the required upstream modules.',
    ],
    exampleLanguage: 'xml',
    exampleCode: `<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>shop-parent</artifactId>
  <version>1.0.0-SNAPSHOT</version>
  <packaging>pom</packaging>

  <modules>
    <module>domain</module>
    <module>app</module>
  </modules>
</project>

<!-- Build app and also make modules it depends on -->
<!-- mvn -pl app -am test -->`,
    practice: [
      'Create a parent POM with two child modules and run mvn test from the root.',
      'Add a dependency from one module to another and observe reactor build order.',
      'Run a focused build with -pl and -am, then explain which modules Maven selected.',
    ],
    reasons: [
      'Multi-module organization keeps related artifacts versioned and built together.',
      'The reactor is essential for understanding large Java and Spring backend repositories.',
    ],
    mistakes: [
      'Confusing aggregation with inheritance and expecting modules to inherit from a parent just because they are listed.',
      'Running every module build when a focused reactor command would give faster feedback.',
    ],
    takeaways: [
      'A multi-module root usually uses packaging pom and a modules list.',
      'The Maven reactor builds modules in dependency-aware order.',
    ],
    references: [
      { label: 'Apache Maven · Working with Multiple Modules', url: 'https://maven.apache.org/guides/mini/guide-multiple-modules.html' },
      { label: 'Apache Maven · Project Aggregation', url: 'https://maven.apache.org/guides/introduction/introduction-to-the-pom.html#Project_Aggregation' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: 'Install artifacts locally for reuse',
    summary: 'Use the install phase and local repository to reuse built artifacts across local Maven projects.',
    moduleTitle: PUBLISHING_MODULE,
    intro: 'Before remote publishing, you need to understand local artifact reuse through the install phase and the local Maven repository.',
    learningPoints: [
      'Explain what the local Maven repository stores.',
      'Run mvn install to place a project artifact into the local repository.',
      'Depend on a locally installed artifact from another project by coordinates.',
    ],
    lessonNotes: [
      'The install phase adds the built artifact and its POM metadata to the local repository, typically under ~/.m2/repository.',
      'Local install is useful when developing related projects before a shared remote repository is available.',
      'Because installed artifacts are local machine state, teams should not treat install as a substitute for real shared publishing.',
    ],
    exampleLanguage: 'bash',
    exampleCode: `mvn clean install

# Example installed path after a successful build
ls ~/.m2/repository/com/example/hello-maven/1.0.0-SNAPSHOT

# Another project can now declare:
# com.example:hello-maven:1.0.0-SNAPSHOT`,
    practice: [
      'Run mvn clean install on a small library project.',
      'Find the installed artifact and POM under your local repository.',
      'Create a second project that depends on the installed coordinates and run mvn test.',
    ],
    reasons: [
      'Local install explains how Maven reuses artifacts before they reach a remote repository.',
      'Understanding local repository state makes dependency troubleshooting much easier.',
    ],
    mistakes: [
      'Assuming an artifact installed on your machine is available to teammates or CI.',
      'Forgetting that stale SNAPSHOT artifacts in the local repository can hide build problems.',
    ],
    takeaways: [
      'mvn install publishes to your local repository, not a shared server.',
      'Local artifact reuse depends on stable coordinates and current local repository state.',
    ],
    references: [
      { label: 'Apache Maven Install Plugin', url: 'https://maven.apache.org/plugins/maven-install-plugin/' },
      { label: 'Apache Maven · Build Lifecycle', url: 'https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'Deploy artifacts to a remote repository',
    summary: 'Understand deploy, distributionManagement, repository managers, credentials, and deploy-file for standalone artifacts.',
    moduleTitle: PUBLISHING_MODULE,
    intro: 'The final lesson moves from local reuse to shared artifact publishing, with emphasis on safe repository and credential boundaries.',
    learningPoints: [
      'Use distributionManagement to describe remote release and snapshot deployment targets.',
      'Keep deployment credentials in settings.xml server entries instead of the project POM.',
      'Understand when deploy:deploy-file is used for standalone or third-party artifacts.',
    ],
    lessonNotes: [
      'The deploy phase uploads built artifacts to a remote repository so CI, teammates, or downstream projects can consume them.',
      'Repository managers are a best practice because they proxy public repositories and provide controlled internal deployment destinations.',
      'Project POMs should identify repository destinations, while credentials belong in user or CI settings with matching server ids.',
    ],
    exampleLanguage: 'xml',
    exampleCode: `<distributionManagement>
  <repository>
    <id>company-releases</id>
    <url>https://repo.example.com/releases</url>
  </repository>
  <snapshotRepository>
    <id>company-snapshots</id>
    <url>https://repo.example.com/snapshots</url>
  </snapshotRepository>
</distributionManagement>

<!-- Credentials live in settings.xml using matching server ids. -->
<!-- mvn deploy -->`,
    practice: [
      'Sketch distributionManagement entries for releases and snapshots using placeholder repository URLs.',
      'Create a safe settings.xml example with matching server ids but no real credentials.',
      'Explain how deploy differs from install and why CI usually owns remote deployment.',
    ],
    reasons: [
      'Shared artifact publishing is how internal libraries become reusable beyond one machine.',
      'Separating repository metadata from credentials keeps projects safer and more portable.',
    ],
    mistakes: [
      'Putting usernames, passwords, or tokens directly into pom.xml.',
      'Running deploy without understanding whether the version is a snapshot or release artifact.',
    ],
    takeaways: [
      'mvn deploy publishes to a remote repository, while mvn install publishes locally.',
      'Credentials belong in settings or CI secrets, not in project source files.',
    ],
    references: [
      { label: 'Apache Maven Deploy Plugin', url: 'https://maven.apache.org/plugins/maven-deploy-plugin/' },
      { label: 'Apache Maven · Repository Management', url: 'https://maven.apache.org/repository-management.html' },
    ],
  },
];

export function getMavenLessons() {
  return mavenLessons;
}

export function getMavenLessonBySlug(slug: string) {
  return mavenLessons.find((lesson) => lesson.slug === slug) ?? null;
}
