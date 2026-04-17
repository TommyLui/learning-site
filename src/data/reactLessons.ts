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
    intro: '這一課先建立 React 最重要的心智模型：畫面不是一整頁一次寫完，而是由可重用的 components 組出來。',
    learningPoints: [
      '知道 React 在前端開發裡解決的是什麼問題。',
      '理解 component thinking 為什麼能讓 UI 更好維護。',
      '能分辨「頁面」和「可重用元件」在設計上的不同。',
    ],
    lessonNotes: [
      'React 本身不是完整框架，而是一個專注在 UI 組合與更新的函式庫。它最重要的價值不是語法，而是把介面切成小塊、可組合、可重用的元件。',
      '當一個畫面可以拆成 Navbar、Card、Button、Form 這些獨立 parts 時，你不只更容易維護，也更容易在不同頁面之間重用。',
      '這種 component thinking 會直接影響你後面怎麼寫 props、state、routing 與 project structure，所以第一課的重點不是 API，而是觀念。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "function WelcomeCard() {\n  return (\n    <section>\n      <h2>Welcome back</h2>\n      <p>This small block can become a reusable component.</p>\n    </section>\n  );\n}\n\nexport default function App() {\n  return <WelcomeCard />;\n}",
    practice: [
      '找一個你常看的網站首頁，試著把它拆成 5 到 8 個 components。',
      '把一段原本寫在同一頁的 UI 區塊，改用一個獨立 component 呈現。',
      '寫下你認為最適合重用的三種元件類型。',
    ],
    reasons: [
      '後面所有 hooks、props、state 的價值都建立在 component thinking 上。',
      '如果不先理解元件拆分，React 很容易退化成只是把 HTML 寫在 JS 裡。',
    ],
    mistakes: [
      '把整個頁面寫成一個巨大 component，失去重用與可讀性。',
      '只記 API 名稱，卻沒有思考畫面該怎麼切分。',
    ],
    takeaways: [
      'React 的核心不是語法炫技，而是把 UI 拆成可組合的 components。',
      '元件拆得清楚，後面 state 與 routing 才會比較自然。',
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
    intro: '這一課要把 JSX 從「看起來像 HTML」的表面理解，拉回到「它其實是描述 UI 的 JavaScript 表達方式」。',
    learningPoints: [
      '理解 JSX 是什麼，以及它和 HTML 的差別。',
      '知道 React 會如何根據資料去重新 render UI。',
      '能安全地在 JSX 中放入 JavaScript expressions。',
    ],
    lessonNotes: [
      'JSX 讓你用比較接近標記語言的方式描述 UI，但本質上它仍然是 JavaScript。這也是為什麼你可以在花括號裡放入變數、函式結果與條件運算。',
      'React 的 render 不是直接命令式操作 DOM，而是根據目前資料狀態重新計算畫面應該長什麼樣，再有效率地更新真實 DOM。',
      '因此，與其想「我要改哪個 DOM 節點」，更重要的是想「當資料變成這樣時，畫面應該呈現什麼」。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "const userName = 'Tommy';\nconst lessonCount = 3;\n\nexport default function Dashboard() {\n  return (\n    <main>\n      <h1>Hello, {userName}</h1>\n      <p>You finished {lessonCount} lessons this week.</p>\n    </main>\n  );\n}",
    practice: [
      '寫一個元件，把名字、今天日期、已完成課程數量顯示在畫面上。',
      '試著用條件運算在 JSX 內切換兩種不同訊息。',
      '列出 3 個 JSX 和 HTML 最容易搞混的地方。',
    ],
    reasons: [
      'JSX 是每天都會碰到的基本語言層，弄懂後面開發速度會快很多。',
      '如果不知道 React 是根據資料 render，會很容易用錯誤的 DOM 心智模型思考。',
    ],
    mistakes: [
      '把 JSX 當成字串模板，而不是 UI 描述。',
      '在 JSX 裡塞太多複雜邏輯，讓畫面難以閱讀。',
    ],
    takeaways: [
      'JSX 是描述 UI 的語法，不是單純把 HTML 搬進 JS。',
      'React 更在意資料變化後 UI 應該長什麼樣，而不是手動操作 DOM。',
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
    intro: '這一課把 components 從靜態區塊推進到可重用 UI：同一個 component，因為 props 不同，可以在不同地方扮演不同角色。',
    learningPoints: [
      '理解 props 是 component 的輸入資料。',
      '知道怎麼讓同一個 component 在不同情境下被重用。',
      '能設計比較清楚的 prop naming。',
    ],
    lessonNotes: [
      '如果 component 是 UI building block，那 props 就是把資料送進去的方式。它讓同一個元件不需要重寫，就能因應不同標題、圖片、按鈕文字或狀態。',
      '好的 component reuse 不是盲目把所有東西都做成可配置，而是找出真正穩定的結構，再把變動部分抽成 props。',
      '當 props 命名清楚時，component 的使用方式本身就像文件，能直接告訴別人這個元件期待什麼資料。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "type CourseCardProps = {\n  title: string;\n  level: string;\n};\n\nfunction CourseCard({ title, level }: CourseCardProps) {\n  return (\n    <article>\n      <h3>{title}</h3>\n      <p>{level}</p>\n    </article>\n  );\n}\n\nexport default function App() {\n  return (\n    <>\n      <CourseCard title=\"React\" level=\"Beginner\" />\n      <CourseCard title=\"Spring Boot\" level=\"Intermediate\" />\n    </>\n  );\n}",
    practice: [
      '把你前一課做的靜態區塊改成可接受 props 的 component。',
      '設計一個 `ProfileCard`，讓它可接收 name、role、avatar 三種 props。',
      '重命名一組不清楚的 props，讓 component API 更容易理解。',
    ],
    reasons: [
      'props 是 component reuse 的基本機制，沒有 props 就很難做出可組合 UI。',
      '後面學 state 和 lifting state 時，也會一直回到 props 的流動方式。',
    ],
    mistakes: [
      '把太多不必要的 props 塞進 component，導致 API 混亂。',
      'prop 命名太抽象，看不出這個值實際代表什麼。',
    ],
    takeaways: [
      'props 讓 component 從單一 UI 區塊變成可重用單位。',
      '重用不是把所有東西抽象化，而是找出穩定結構與變動資料。',
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
    intro: '這一課正式讓 UI 動起來：畫面不再只是接收資料，而是會因使用者互動而更新。',
    learningPoints: [
      '理解 local state 在 component 裡的角色。',
      '知道 `useState` 的基本使用方式。',
      '能把互動事件和畫面更新連起來。',
    ],
    lessonNotes: [
      'state 是 component 內部會改變的資料。當 state 改變時，React 會重新 render component，讓畫面和資料同步。',
      'useState 讓你在 function component 中保存這種可變資料，並用 setter 觸發更新。',
      '這一課真正的重點不是記住 hook 寫法，而是理解「資料改變 -> render -> UI 更新」這條鏈。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increase</button>\n    </div>\n  );\n}",
    practice: [
      '做一個 like button，點一下會累加。',
      '做一個切換按鈕，讓畫面在 opened / closed 之間切換。',
      '寫下哪一些資料應該放 state，哪一些只需要一般變數。',
    ],
    reasons: [
      '沒有 state，React 只能描述靜態 UI。',
      '幾乎所有互動式前端都會從 state 開始。',
    ],
    mistakes: [
      '直接改 state 變數而不是呼叫 setter。',
      '把其實可以從其他資料推得出的值也額外存成 state。',
    ],
    takeaways: [
      'state 是互動式 React UI 的核心。',
      '畫面更新不是手動改 DOM，而是透過改變 state 重新 render。',
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
    intro: 'useEffect 常常是 React 初學者最容易混亂的地方，因為它處理的是 render 之外與外部世界同步的工作。',
    learningPoints: [
      '理解什麼情況才需要 useEffect。',
      '知道 dependency array 的用途。',
      '能分辨 render logic 和 side effect。',
    ],
    lessonNotes: [
      '不是所有邏輯都要放進 useEffect。只有當你需要和外部系統同步，例如 API 請求、事件訂閱、timer，才需要 effect。',
      'dependency array 的作用是告訴 React：哪些值改變時要重新執行 effect。',
      '很多 useEffect 問題其實不是 hook 太難，而是把原本應該在 render 中處理的資料計算誤放進 effect。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useEffect, useState } from 'react';\n\nexport default function Clock() {\n  const [now, setNow] = useState(new Date());\n\n  useEffect(() => {\n    const timerId = window.setInterval(() => {\n      setNow(new Date());\n    }, 1000);\n\n    return () => window.clearInterval(timerId);\n  }, []);\n\n  return <p>{now.toLocaleTimeString()}</p>;\n}",
    practice: [
      '做一個會每秒更新時間的元件。',
      '寫一個 effect，在 component unmount 時做 cleanup。',
      '列出 3 個其實不應該使用 useEffect 的情境。',
    ],
    reasons: [
      '不理解 effect，很容易產生重複請求、記憶體洩漏或無限重跑。',
      'Effect 是 React 和外部世界連接的地方。',
    ],
    mistakes: [
      '把純資料轉換邏輯也塞進 useEffect。',
      '忘記 cleanup，留下未清掉的 timer 或 listener。',
    ],
    takeaways: [
      'useEffect 不是萬用邏輯箱，它專門處理 side effects。',
      'dependency array 與 cleanup 是 effect 正確性的核心。',
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
    intro: '當多個 components 都需要同一份資料時，state 該放哪裡就變成設計問題，而不是語法問題。',
    learningPoints: [
      '理解 lifting state 的概念。',
      '知道共享狀態時應該由哪個父層管理資料。',
      '能減少重複 state 帶來的不一致。',
    ],
    lessonNotes: [
      '如果兩個 sibling components 都要依賴同一份資料，就不應該各自保存一份 state，否則資料很容易不同步。',
      'lifting state 的做法是把共同資料上移到最近的共同父層，再透過 props 往下傳。',
      '這一課的核心不是「往上提」這個動作本身，而是讓資料有單一來源，減少混亂。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useState } from 'react';\n\nfunction SearchBox({ keyword, onChange }: { keyword: string; onChange: (value: string) => void }) {\n  return <input value={keyword} onChange={(event) => onChange(event.target.value)} />;\n}\n\nfunction Preview({ keyword }: { keyword: string }) {\n  return <p>Searching for: {keyword}</p>;\n}\n\nexport default function SearchPanel() {\n  const [keyword, setKeyword] = useState('');\n\n  return (\n    <>\n      <SearchBox keyword={keyword} onChange={setKeyword} />\n      <Preview keyword={keyword} />\n    </>\n  );\n}",
    practice: [
      '做兩個 sibling components，共享同一個搜尋字串。',
      '把原本重複的 state 改成由父層統一管理。',
      '畫一張簡單資料流圖，標出 state 應該放在哪一層。',
    ],
    reasons: [
      '共享資料是中型 app 最常見的設計問題之一。',
      '如果 state 放錯地方，後面表單、篩選、列表同步會越來越難維護。',
    ],
    mistakes: [
      '同一份資料在多個元件各存一份 state。',
      '過度上移 state，讓太上層的 component 變得過於肥大。',
    ],
    takeaways: [
      '共享 state 的目標是建立單一資料來源。',
      '資料應該放在最合理、最接近共同需求的那一層。',
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
    intro: '當應用不再只有一個畫面時，routing 就決定了使用者怎麼在不同頁面間移動。',
    learningPoints: [
      '理解 client-side routing 的用途。',
      '知道 route、layout、navigation 之間的關係。',
      '能把多畫面 app 的結構想清楚。',
    ],
    lessonNotes: [
      '在單頁應用裡，routing 不是整頁重新載入，而是由前端控制目前應該顯示哪個畫面。',
      '當 routes 設計清楚時，導航、麵包屑、選單 active state 與 layout 重用都會變得比較自然。',
      '這一課不只是學套件 API，而是建立一種多畫面應用的資訊架構思維。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';\n\nfunction HomePage() {\n  return <h2>Home</h2>;\n}\n\nfunction CoursesPage() {\n  return <h2>Courses</h2>;\n}\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to=\"/\">Home</Link>\n        <Link to=\"/courses\">Courses</Link>\n      </nav>\n      <Routes>\n        <Route path=\"/\" element={<HomePage />} />\n        <Route path=\"/courses\" element={<CoursesPage />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
    practice: [
      '做一個最小的兩頁 React app。',
      '為其中一頁加上 shared layout。',
      '設計一份 route map，列出首頁、列表頁、詳情頁的關係。',
    ],
    reasons: [
      '只要 app 超過一個畫面，routing 就會影響整體結構。',
      '資訊架構越早想清楚，後面重構成本越低。',
    ],
    mistakes: [
      '先亂長 routes，後面才回頭補 layout 和導航。',
      '把 routing 想成只是網址切換，而忽略畫面結構與狀態流。',
    ],
    takeaways: [
      'routing 是多畫面 React app 的骨架。',
      'route 設計不只是技術問題，也是資訊架構問題。',
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
    intro: '表單是 React 裡最常見也最容易混亂的互動之一，因為它同時涉及 state、事件與驗證。',
    learningPoints: [
      '理解 controlled input 的概念。',
      '知道如何把輸入值和 state 綁定。',
      '能處理常見的表單送出流程。',
    ],
    lessonNotes: [
      'controlled input 的核心是：輸入值來自 React state，使用者輸入時再透過 onChange 更新 state。',
      '這種做法讓表單資料可被驗證、重設、同步顯示，也更容易和其他 UI 狀態連動。',
      '當表單開始變大時，欄位命名、初始值設計與提交流程要先規劃，不然很快就會變亂。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useState } from 'react';\n\nexport default function SignupForm() {\n  const [email, setEmail] = useState('');\n\n  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {\n    event.preventDefault();\n    console.log('submitted:', email);\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type=\"email\"\n        value={email}\n        onChange={(event) => setEmail(event.target.value)}\n      />\n      <button type=\"submit\">Send</button>\n    </form>\n  );\n}",
    practice: [
      '做一個登入表單，包含 email 和 password。',
      '加入簡單的 required 驗證與錯誤訊息。',
      '在 submit 後清空表單，確認資料流正確。',
    ],
    reasons: [
      '表單幾乎存在於所有產品中，是前端必備能力。',
      'controlled inputs 是 React 管理資料流的代表性案例。',
    ],
    mistakes: [
      '一部分欄位用 React state，另一部分完全不受控，導致資料流混亂。',
      'submit 時才發現 state 和顯示值不同步。',
    ],
    takeaways: [
      'controlled inputs 讓表單資料和 UI 維持在同一條資料流裡。',
      '表單設計越早規劃，後面驗證和維護越輕鬆。',
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
    intro: '當 app 成長到一定規模時，檔案結構本身就會影響開發效率與團隊可讀性。',
    learningPoints: [
      '理解中型 React app 常見的結構分層。',
      '知道 components、pages、hooks、features 各自適合放什麼。',
      '能避免專案一開始就變成雜亂目錄。',
    ],
    lessonNotes: [
      'project structure 沒有唯一正解，但一定要服務於可讀性、重用性與維護成本。',
      '如果共用元件、頁面邏輯、自訂 hooks、功能模組沒有清楚分界，檔案會很快失控。',
      '這一課的目標不是背出資料夾名稱，而是學會依責任切分，讓 app 變大時仍然容易理解。',
    ],
    exampleLanguage: 'text',
    exampleCode: "src/\n  components/\n  features/\n    auth/\n    courses/\n  hooks/\n  layouts/\n  pages/\n  routes/\n  utils/",
    practice: [
      '把一個小型 React project 重新整理成較清楚的資料夾結構。',
      '為你目前的專案定義 pages、shared components、feature components 的界線。',
      '寫下哪一些檔案現在放錯地方，以及你要怎麼重新歸類。',
    ],
    reasons: [
      '專案結構一亂，後面每次找檔案和改功能都會變慢。',
      '良好的結構會直接影響團隊協作與擴充成本。',
    ],
    mistakes: [
      '所有元件都丟在同一層 components。',
      '還沒想清楚責任邊界就過度抽資料夾。',
    ],
    takeaways: [
      '結構設計的重點是可讀與可維護，不是目錄越多越專業。',
      '清楚的責任分工，會讓 React app 擴充時更穩。',
    ],
    references: [
      { label: 'React docs · Scaling up with reducer and context', url: 'https://react.dev/learn/scaling-up-with-reducer-and-context' },
      { label: 'React docs · Reusing logic with custom hooks', url: 'https://react.dev/learn/reusing-logic-with-custom-hooks' },
    ],
  },
];

export function getReactLessons() {
  return reactLessons;
}

export function getReactLessonBySlug(slug: string) {
  return reactLessons.find((lesson) => lesson.slug === slug) ?? null;
}
