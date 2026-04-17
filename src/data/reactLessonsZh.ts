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
    title: '什麼是 React，為什麼元件思維很重要',
    summary: '理解 React 在前端開發中的角色，以及可重用 UI 元件帶來的價值。',
    moduleTitle: '模組 1 · React 基礎',
    intro: '這一課先建立 React 最重要的心智模型：畫面不是一整頁一次寫完，而是由可重用的元件組出來。',
    learningPoints: [
      '知道 React 在前端開發裡解決的是什麼問題。',
      '理解元件思維為什麼能讓 UI 更好維護。',
      '能分辨「頁面」和「可重用元件」在設計上的不同。',
    ],
    lessonNotes: [
      'React 本身不是完整框架，而是一個專注在 UI 組合與更新的函式庫。它最重要的價值不是語法，而是把介面切成小塊、可組合、可重用的元件。',
      '當一個畫面可以拆成 Navbar、Card、Button、Form 這些獨立區塊時，你不只更容易維護，也更容易在不同頁面之間重用。',
      '這種元件思維會直接影響你後面怎麼寫 props、state、路由與專案結構，所以第一課的重點不是 API，而是觀念。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "function WelcomeCard() {\n  return (\n    <section>\n      <h2>Welcome back</h2>\n      <p>This small block can become a reusable component.</p>\n    </section>\n  );\n}\n\nexport default function App() {\n  return <WelcomeCard />;\n}",
    practice: [
      '找一個你常看的網站首頁，試著把它拆成 5 到 8 個元件。',
      '把一段原本寫在同一頁的 UI 區塊，改用一個獨立元件呈現。',
      '寫下你認為最適合重用的三種元件類型。',
    ],
    reasons: [
      '後面所有 Hooks、props、state 的價值都建立在元件思維上。',
      '如果不先理解元件拆分，React 很容易退化成只是把 HTML 寫在 JS 裡。',
    ],
    mistakes: [
      '把整個頁面寫成一個巨大元件，失去重用與可讀性。',
      '只記 API 名稱，卻沒有思考畫面該怎麼切分。',
    ],
    takeaways: [
      'React 的核心不是語法炫技，而是把 UI 拆成可組合的元件。',
      '元件拆得清楚，後面 state 與路由才會比較自然。',
    ],
    references: [
      { label: 'React docs · Thinking in React', url: 'https://react.dev/learn/thinking-in-react' },
      { label: 'React docs · Describing the UI', url: 'https://react.dev/learn/describing-the-ui' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'JSX 基礎與 React 如何渲染 UI',
    summary: '理解 JSX 如何對應元素，以及 React 如何在資料變化時更新畫面。',
    moduleTitle: '模組 1 · React 基礎',
    intro: '這一課要把 JSX 從「看起來像 HTML」的表面理解，拉回到「它其實是描述 UI 的 JavaScript 表達方式」。',
    learningPoints: [
      '理解 JSX 是什麼，以及它和 HTML 的差別。',
      '知道 React 會如何根據資料重新渲染 UI。',
      '能安全地在 JSX 中放入 JavaScript 表達式。',
    ],
    lessonNotes: [
      'JSX 讓你用比較接近標記語言的方式描述 UI，但本質上它仍然是 JavaScript。這也是為什麼你可以在花括號裡放入變數、函式結果與條件運算。',
      'React 的渲染不是直接命令式操作 DOM，而是根據目前資料狀態重新計算畫面應該長什麼樣，再有效率地更新真實 DOM。',
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
      '如果不知道 React 是根據資料渲染，會很容易用錯誤的 DOM 心智模型思考。',
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
    title: 'Props 與元件重用',
    summary: '把資料傳進元件，建立可延伸且有彈性的 UI 模式。',
    moduleTitle: '模組 1 · React 基礎',
    intro: '這一課把元件從靜態區塊推進到可重用 UI：同一個元件，因為 props 不同，可以在不同地方扮演不同角色。',
    learningPoints: [
      '理解 props 是元件的輸入資料。',
      '知道怎麼讓同一個元件在不同情境下被重用。',
      '能設計比較清楚的 props 命名。',
    ],
    lessonNotes: [
      '如果元件是 UI 積木，那 props 就是把資料送進去的方式。它讓同一個元件不需要重寫，就能因應不同標題、圖片、按鈕文字或狀態。',
      '好的元件重用不是盲目把所有東西都做成可配置，而是找出真正穩定的結構，再把變動部分抽成 props。',
      '當 props 命名清楚時，元件的使用方式本身就像文件，能直接告訴別人這個元件期待什麼資料。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "type CourseCardProps = {\n  title: string;\n  level: string;\n};\n\nfunction CourseCard({ title, level }: CourseCardProps) {\n  return (\n    <article>\n      <h3>{title}</h3>\n      <p>{level}</p>\n    </article>\n  );\n}\n\nexport default function App() {\n  return (\n    <>\n      <CourseCard title=\"React\" level=\"Beginner\" />\n      <CourseCard title=\"Spring Boot\" level=\"Intermediate\" />\n    </>\n  );\n}",
    practice: [
      '把你前一課做的靜態區塊改成可接受 props 的元件。',
      '設計一個 `ProfileCard`，讓它可接收 name、role、avatar 三種 props。',
      '重命名一組不清楚的 props，讓元件 API 更容易理解。',
    ],
    reasons: [
      'props 是元件重用的基本機制，沒有 props 就很難做出可組合 UI。',
      '後面學 state 和狀態提升（lifting state）時，也會一直回到 props 的流動方式。',
    ],
    mistakes: [
      '把太多不必要的 props 塞進元件，導致 API 混亂。',
      'prop 命名太抽象，看不出這個值實際代表什麼。',
    ],
    takeaways: [
      'props 讓元件從單一 UI 區塊變成可重用單位。',
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
    title: '用 useState 管理狀態',
    summary: '用區域狀態（state）處理使用者互動，並可預期地更新 UI。',
    moduleTitle: '模組 2 · State 與 hooks',
    intro: '這一課正式讓 UI 動起來：畫面不再只是接收資料，而是會因使用者互動而更新。',
    learningPoints: [
      '理解區域狀態（state）在元件裡的角色。',
      '知道 `useState` 的基本使用方式。',
      '能把互動事件和畫面更新連起來。',
    ],
    lessonNotes: [
      'state 是元件內部會改變的資料。當 state 改變時，React 會重新渲染元件，讓畫面和資料同步。',
      'useState 讓你在函式元件中保存這種可變資料，並用 setter 觸發更新。',
      '這一課真正的重點不是記住 Hook 寫法，而是理解「資料改變 -> 渲染 -> UI 更新」這條鏈。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increase</button>\n    </div>\n  );\n}",
    practice: [
      '做一個按讚按鈕，點一下會累加。',
      '做一個切換按鈕，讓畫面在開啟／關閉之間切換。',
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
      '畫面更新不是手動改 DOM，而是透過改變 state 重新渲染。',
    ],
    references: [
      { label: 'React docs · State: a component memory', url: 'https://react.dev/learn/state-a-components-memory' },
      { label: 'React docs · Render and commit', url: 'https://react.dev/learn/render-and-commit' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: '用 useEffect 處理副作用',
    summary: '安全地執行副作用（effects），並理解依賴陣列與清理機制。',
    moduleTitle: '模組 2 · State 與 hooks',
    intro: 'useEffect 常常是 React 初學者最容易混亂的地方，因為它處理的是渲染之外、與外部世界同步的工作。',
    learningPoints: [
      '理解什麼情況才需要 useEffect。',
      '知道依賴陣列（dependency array）的用途。',
      '能分辨渲染邏輯和副作用。',
    ],
    lessonNotes: [
      '不是所有邏輯都要放進 useEffect。只有在你需要和外部系統同步（例如 API 請求、事件訂閱、計時器）時，才需要 effect。',
      '依賴陣列的作用是告訴 React：哪些值改變時要重新執行 effect。',
      '很多 useEffect 問題其實不是 Hook 太難，而是把原本應該在渲染中處理的資料計算誤放進 effect。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useEffect, useState } from 'react';\n\nexport default function Clock() {\n  const [now, setNow] = useState(new Date());\n\n  useEffect(() => {\n    const timerId = window.setInterval(() => {\n      setNow(new Date());\n    }, 1000);\n\n    return () => window.clearInterval(timerId);\n  }, []);\n\n  return <p>{now.toLocaleTimeString()}</p>;\n}",
    practice: [
      '做一個會每秒更新時間的元件。',
      '寫一個 effect，在元件卸載（unmount）時做清理（cleanup）。',
      '列出 3 個其實不應該使用 useEffect 的情境。',
    ],
    reasons: [
      '不理解 effect，很容易產生重複請求、記憶體洩漏或無限重跑。',
      'Effect 是 React 和外部世界連接的地方。',
    ],
    mistakes: [
      '把純資料轉換邏輯也塞進 useEffect。',
      '忘記清理（cleanup），留下未清掉的計時器（timer）或監聽器（listener）。',
    ],
    takeaways: [
      'useEffect 不是萬用邏輯箱，它專門處理副作用。',
      '依賴陣列與清理機制是 effect 正確性的核心。',
    ],
    references: [
      { label: 'React docs · Synchronizing with Effects', url: 'https://react.dev/learn/synchronizing-with-effects' },
      { label: 'React docs · You might not need an Effect', url: 'https://react.dev/learn/you-might-not-need-an-effect' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: '提升 state 與共享邏輯',
    summary: '在元件之間整理 state，避免資料重複與不同步。',
    moduleTitle: '模組 2 · State 與 hooks',
    intro: '當多個元件都需要同一份資料時，state 該放哪裡就變成設計問題，而不是語法問題。',
    learningPoints: [
      '理解狀態提升（lifting state）的概念。',
      '知道共享狀態時應該由哪個父層管理資料。',
      '能減少重複 state 帶來的不一致。',
    ],
    lessonNotes: [
      '如果兩個同層元件都要依賴同一份資料，就不應該各自保存一份 state，否則資料很容易不同步。',
      'lifting state 的做法是把共同資料上移到最近的共同父層，再透過 props 往下傳。',
      '這一課的核心不是「往上提」這個動作本身，而是讓資料有單一來源，減少混亂。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useState } from 'react';\n\nfunction SearchBox({ keyword, onChange }: { keyword: string; onChange: (value: string) => void }) {\n  return <input value={keyword} onChange={(event) => onChange(event.target.value)} />;\n}\n\nfunction Preview({ keyword }: { keyword: string }) {\n  return <p>Searching for: {keyword}</p>;\n}\n\nexport default function SearchPanel() {\n  const [keyword, setKeyword] = useState('');\n\n  return (\n    <>\n      <SearchBox keyword={keyword} onChange={setKeyword} />\n      <Preview keyword={keyword} />\n    </>\n  );\n}",
    practice: [
      '做兩個同層元件，共享同一個搜尋字串。',
      '把原本重複的 state 改成由父層統一管理。',
      '畫一張簡單資料流圖，標出 state 應該放在哪一層。',
    ],
    reasons: [
      '共享資料是中型應用程式最常見的設計問題之一。',
      '如果 state 放錯地方，後面表單、篩選、列表同步會越來越難維護。',
    ],
    mistakes: [
      '同一份資料在多個元件各存一份 state。',
      '過度上移 state，讓太上層的元件變得過於肥大。',
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
    title: '前端路由',
    summary: '為多畫面應用加入頁面切換與導覽結構。',
    moduleTitle: '模組 3 · App 結構',
    intro: '當應用不再只有一個畫面時，路由就決定了使用者怎麼在不同頁面間移動。',
    learningPoints: [
      '理解前端路由（client-side routing）的用途。',
      '知道路由、版型（layout）、導覽（navigation）之間的關係。',
      '能把多畫面應用程式的結構想清楚。',
    ],
    lessonNotes: [
      '在單頁應用裡，路由不是整頁重新載入，而是由前端控制目前應該顯示哪個畫面。',
      '當路由設計清楚時，導覽、麵包屑、選單啟用狀態與版型重用都會變得比較自然。',
      '這一課不只是學套件 API，而是建立多畫面應用的資訊架構思維。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';\n\nfunction HomePage() {\n  return <h2>Home</h2>;\n}\n\nfunction CoursesPage() {\n  return <h2>Courses</h2>;\n}\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to=\"/\">Home</Link>\n        <Link to=\"/courses\">Courses</Link>\n      </nav>\n      <Routes>\n        <Route path=\"/\" element={<HomePage />} />\n        <Route path=\"/courses\" element={<CoursesPage />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
    practice: [
      '做一個最小的兩頁 React 應用程式。',
      '為其中一頁加上共用版型。',
      '設計一份路由地圖，列出首頁、列表頁、詳情頁的關係。',
    ],
    reasons: [
      '只要應用程式超過一個畫面，路由就會影響整體結構。',
      '資訊架構越早想清楚，後面重構成本越低。',
    ],
    mistakes: [
      '先隨意增加路由，後面才回頭補版型和導覽。',
      '把路由想成只是網址切換，而忽略畫面結構與狀態流。',
    ],
    takeaways: [
      '路由是多畫面 React 應用程式的骨架。',
      '路由設計不只是技術問題，也是資訊架構問題。',
    ],
    references: [
      { label: 'React Router docs', url: 'https://reactrouter.com/en/main' },
      { label: 'React docs · Preserving and resetting state', url: 'https://react.dev/learn/preserving-and-resetting-state' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: '表單與受控輸入',
    summary: '乾淨地處理使用者輸入，並驗證常見表單互動。',
    moduleTitle: '模組 3 · App 結構',
    intro: '表單是 React 裡最常見也最容易混亂的互動之一，因為它同時涉及 state、事件與驗證。',
    learningPoints: [
      '理解受控輸入（controlled input）的概念。',
      '知道如何把輸入值和 state 綁定。',
      '能處理常見的表單送出流程。',
    ],
    lessonNotes: [
      '受控輸入的核心是：輸入值來自 React state，使用者輸入時再透過 onChange 更新 state。',
      '這種做法讓表單資料可被驗證、重設、同步顯示，也更容易和其他 UI 狀態連動。',
      '當表單開始變大時，欄位命名、初始值設計與提交流程要先規劃，不然很快就會變亂。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useState } from 'react';\n\nexport default function SignupForm() {\n  const [email, setEmail] = useState('');\n\n  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {\n    event.preventDefault();\n    console.log('submitted:', email);\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type=\"email\"\n        value={email}\n        onChange={(event) => setEmail(event.target.value)}\n      />\n      <button type=\"submit\">Send</button>\n    </form>\n  );\n}",
    practice: [
      '做一個登入表單，包含 email 和密碼。',
      '加入簡單的必填驗證與錯誤訊息。',
      '在提交後清空表單，確認資料流正確。',
    ],
    reasons: [
      '表單幾乎存在於所有產品中，是前端必備能力。',
      '受控輸入是 React 管理資料流的代表性案例。',
    ],
    mistakes: [
      '一部分欄位用 React state，另一部分完全不受控，導致資料流混亂。',
      '提交時才發現 state 和顯示值不同步。',
    ],
    takeaways: [
      '受控輸入讓表單資料和 UI 維持在同一條資料流裡。',
      '表單設計越早規劃，後面驗證和維護越輕鬆。',
    ],
    references: [
      { label: 'React docs · Reacting to input with state', url: 'https://react.dev/learn/reacting-to-input-with-state' },
      { label: 'React docs · Choosing the state structure', url: 'https://react.dev/learn/choosing-the-state-structure' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: '中型應用的專案結構',
    summary: '整理元件、Hook 與頁面，讓程式碼保持清楚可讀。',
    moduleTitle: '模組 3 · App 結構',
    intro: '當應用程式成長到一定規模時，檔案結構本身就會影響開發效率與團隊可讀性。',
    learningPoints: [
      '理解中型 React 應用程式常見的結構分層。',
      '知道元件、頁面、Hook、功能模組（features）各自適合放什麼。',
      '能避免專案一開始就變成雜亂目錄。',
    ],
    lessonNotes: [
      '專案結構沒有唯一正解，但一定要服務於可讀性、重用性與維護成本。',
      '如果共用元件、頁面邏輯、自訂 Hook、功能模組沒有清楚分界，檔案會很快失控。',
      '這一課的目標不是背出資料夾名稱，而是學會依責任切分，讓應用程式變大時仍然容易理解。',
    ],
    exampleLanguage: 'text',
    exampleCode: "src/\n  components/\n  features/\n    auth/\n    courses/\n  hooks/\n  layouts/\n  pages/\n  routes/\n  utils/",
    practice: [
      '把一個小型 React 專案重新整理成較清楚的資料夾結構。',
      '為你目前的專案定義頁面、共用元件、功能元件的界線。',
      '寫下哪一些檔案現在放錯地方，以及你要怎麼重新歸類。',
    ],
    reasons: [
      '專案結構一亂，後面每次找檔案和改功能都會變慢。',
      '良好的結構會直接影響團隊協作與擴充成本。',
    ],
    mistakes: [
      '所有元件都丟在同一層 `components` 目錄。',
      '還沒想清楚責任邊界就過度抽資料夾。',
    ],
    takeaways: [
      '結構設計的重點是可讀與可維護，不是目錄越多越專業。',
      '清楚的責任分工，會讓 React 應用程式擴充時更穩。',
    ],
    references: [
      { label: 'React docs · Scaling up with reducer and context', url: 'https://react.dev/learn/scaling-up-with-reducer-and-context' },
      { label: 'React docs · Reusing logic with custom hooks', url: 'https://react.dev/learn/reusing-logic-with-custom-hooks' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: '在 React 應用中抓取資料',
    summary: '安全地載入遠端資料，並理解資料抓取在 UI 生命週期中的位置。',
    moduleTitle: '模組 4 · Data fetching 與非同步 UI',
    intro: '真正的前端很少只有靜態資料，這一課開始把畫面和 API、遠端資料來源串起來。',
    learningPoints: [
      '理解資料抓取在 React 畫面生命週期中的位置。',
      '知道什麼時候該在元件內發送請求。',
      '能建立最小可理解的資料抓取流程。',
    ],
    lessonNotes: [
      '這一課先聚焦在最基本的抓取流程：發送請求、接收資料、更新畫面。下一課再把載入中、錯誤與空資料狀態完整補上。',
      '在 React 中，資料抓取常和 effect 一起出現，因為它屬於和外部系統同步的工作。',
      '這一課最重要的是理解資料流：何時發請求、請求回來後怎麼更新 state、畫面又應該怎麼跟著變。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useEffect, useState } from 'react';\n\ntype Course = {\n  id: number;\n  title: string;\n};\n\nexport default function CourseList() {\n  const [courses, setCourses] = useState<Course[]>([]);\n\n  useEffect(() => {\n    fetch('/api/courses')\n      .then((response) => response.json())\n      .then((data) => setCourses(data));\n  }, []);\n\n  return (\n    <ul>\n      {courses.map((course) => (\n        <li key={course.id}>{course.title}</li>\n      ))}\n    </ul>\n  );\n}",
    practice: [
      '做一個最小課程清單頁，從假 API 抓資料顯示。',
      '把成功抓到的資料顯示在簡單的列表中。',
      '試著說明請求前、請求中、請求後畫面應該長什麼樣。',
    ],
    reasons: [
      '真實應用的大部分畫面都要接資料，不會只靠本地常數。',
      '不先建立正確的非同步 UI 心智模型，後面很容易把資料流寫亂。',
    ],
    mistakes: [
      '只處理成功狀態，沒有設計載入中與失敗情境。',
      '把資料抓取寫得太隨便，導致元件一大就難維護。',
    ],
    takeaways: [
      '資料抓取是 UI 與外部世界接軌的起點。',
      '資料抓取要和畫面狀態一起設計，不只是把資料拿回來而已。',
    ],
    references: [
      { label: 'React docs · Synchronizing with Effects', url: 'https://react.dev/learn/synchronizing-with-effects' },
      { label: 'MDN · Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: '載入、錯誤與空資料狀態',
    summary: '設計讓非同步資料流程更清楚、也更可靠的 UI 狀態。',
    moduleTitle: '模組 4 · Data fetching 與非同步 UI',
    intro: '一個可靠的 UI，不是只有「有資料時看起來正常」，而是所有資料狀態都清楚可預期。',
    learningPoints: [
      '理解載入、錯誤、空資料是非同步 UI 的基本狀態。',
      '知道這些狀態應該如何在畫面上呈現。',
      '能避免只設計順利路徑（happy path）的畫面。',
    ],
    lessonNotes: [
      '很多前端頁面真正的品質差異，不在成功狀態，而是在載入中與錯誤時是否仍然讓人理解現在發生什麼事。',
      '空資料也是一種狀態，不應該讓使用者看到空白畫面卻不知道是沒資料還是壞掉。',
      '設計這些狀態時，重點不是炫麗動畫，而是清楚、可信、可恢復。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "if (isLoading) {\n  return <p>Loading courses...</p>;\n}\n\nif (error) {\n  return <p>Something went wrong. Please try again.</p>;\n}\n\nif (courses.length === 0) {\n  return <p>No courses yet.</p>;\n}\n\nreturn <CourseGrid courses={courses} />;",
    practice: [
      '幫你的資料列表頁補上載入中、錯誤、空資料三種畫面。',
      '觀察不同狀態下，使用者應該收到什麼訊息。',
      '試著讓錯誤狀態有一個重試行為。',
    ],
    reasons: [
      '使用者不會只在成功情境使用產品。',
      '非同步 UI 品質會直接影響產品的可信度。',
    ],
    mistakes: [
      '成功時畫面完整，失敗時整頁只剩空白。',
      '把空資料狀態誤當成錯誤狀態。',
    ],
    takeaways: [
      '載入中、錯誤、空資料不是邊角案例，而是 UI 的基本部分。',
      '好畫面不只處理順利流程，也要處理其他狀態。',
    ],
    references: [
      { label: 'React docs · Conditional rendering', url: 'https://react.dev/learn/conditional-rendering' },
      { label: 'Nielsen Norman Group · Empty state guidelines', url: 'https://www.nngroup.com/articles/empty-state/' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: '用自訂 Hook 重用非同步邏輯',
    summary: '把重複的資料抓取與 state 模式抽成可重用的 Hook。',
    moduleTitle: '模組 4 · Data fetching 與非同步 UI',
    intro: '當同一套資料抓取與 state 邏輯重複出現時，自訂 Hook 能幫你把重用層級拉高。',
    learningPoints: [
      '理解自訂 Hook 的價值。',
      '知道什麼邏輯適合抽成 Hook。',
      '能把重複的非同步流程整理成共用邏輯。',
    ],
    lessonNotes: [
      '自訂 Hook 不是魔法，它只是把一段可重用的 React 邏輯包成函式，讓不同元件能共享行為。',
      '對非同步 UI 來說，資料抓取、載入中、錯誤管理通常很適合被抽成 Hook。',
      '好的自訂 Hook 會讓元件本身更聚焦在畫面呈現，而不是一直重複資料流樣板。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { useEffect, useState } from 'react';\n\nexport function useCourses() {\n  const [courses, setCourses] = useState([]);\n  const [isLoading, setIsLoading] = useState(true);\n\n  useEffect(() => {\n    fetch('/api/courses')\n      .then((response) => response.json())\n      .then((data) => setCourses(data))\n      .finally(() => setIsLoading(false));\n  }, []);\n\n  return { courses, isLoading };\n}",
    practice: [
      '把一段重複的資料抓取邏輯抽成自訂 Hook。',
      '讓兩個不同元件共用同一個 Hook。',
      '確認 Hook API 是否清楚易讀。',
    ],
    reasons: [
      '重複的非同步邏輯很快就會讓多頁面應用程式難維護。',
      '自訂 Hook 是 React 重用邏輯的重要方式之一。',
    ],
    mistakes: [
      '為了抽而抽，導致 Hook 比原本更難懂。',
      '把太多不相關責任塞進同一個 Hook。',
    ],
    takeaways: [
      '自訂 Hook 的目標是重用邏輯，不是只為了把程式拆開。',
      '畫面與資料流責任清楚後，React 應用程式會更穩。',
    ],
    references: [
      { label: 'React docs · Reusing logic with custom hooks', url: 'https://react.dev/learn/reusing-logic-with-custom-hooks' },
      { label: 'React docs · Building your own hooks', url: 'https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: '用 Context 管理共享應用狀態',
    summary: '在跨層元件之間共享 state，而不必把 props 一層層往下傳。',
    moduleTitle: '模組 5 · 狀態擴展與效能',
    intro: '當 state 需要跨很多層共用時，Context 能幫你減少一層層傳遞 props 的負擔。',
    learningPoints: [
      '理解 Context 解決的是什麼問題。',
      '知道什麼情況適合用 Context。',
      '能避免用 Context 解決所有事。',
    ],
    lessonNotes: [
      'Context 適合處理跨多層共用、而且很多地方都需要讀取的資料，例如佈景主題（theme）、登入狀態（auth）、語系（locale）。',
      '它的價值在於不用把 props 一層層往下傳到很深的位置。',
      '但 Context 不是全域狀態萬靈丹，若使用過度，會讓狀態依賴關係變得不清楚。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { createContext, useContext } from 'react';\n\nconst ThemeContext = createContext('light');\n\nfunction ThemeLabel() {\n  const theme = useContext(ThemeContext);\n  return <p>Current theme: {theme}</p>;\n}\n\nexport default function App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <ThemeLabel />\n    </ThemeContext.Provider>\n  );\n}",
    practice: [
      '做一個簡單的 theme context。',
      '把登入使用者或語系類型的資料改用 Context 傳遞。',
      '分析哪些資料其實不需要用 Context。',
    ],
    reasons: [
      '中型應用程式很容易出現多層 props drilling。',
      'Context 是 React 在共享狀態上的重要基本工具。',
    ],
    mistakes: [
      '任何 state 都丟進 Context，讓依賴關係失控。',
      '沒有先確認是否真的跨很多層需要共享。',
    ],
    takeaways: [
      'Context 是為了解決跨層共用資料，不是代替所有 state。',
      '先判斷共享範圍，再決定要不要用 Context。',
    ],
    references: [
      { label: 'React docs · Passing data deeply with context', url: 'https://react.dev/learn/passing-data-deeply-with-context' },
      { label: 'React docs · Scaling up with reducer and context', url: 'https://react.dev/learn/scaling-up-with-reducer-and-context' },
    ],
  },
  {
    lesson: 14,
    slug: 'lesson-14',
    title: '記憶化與渲染效能',
    summary: '理解 React 什麼時候會重新渲染，以及如何避免不必要的工作。',
    moduleTitle: '模組 5 · 狀態擴展與效能',
    intro: '效能優化不是一開始就到處加 memo，而是先理解 React 為什麼會重新渲染，再決定要不要優化。',
    learningPoints: [
      '理解重新渲染（rerender）的常見來源。',
      '知道 `memo`、`useMemo`、`useCallback` 的用途。',
      '能分辨真正的效能問題和過度優化。',
    ],
    lessonNotes: [
      'React 重新渲染本身不是壞事，真正的問題是昂貴計算或大量子元件在不必要時一直重跑。',
      '記憶化（memoization）工具可以在特定情境下降低不必要工作，但前提是你先知道瓶頸在哪裡。',
      '如果不先觀察問題就到處加 memo，程式往往只會變得更複雜。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { memo } from 'react';\n\nconst CourseRow = memo(function CourseRow({ title }: { title: string }) {\n  return <li>{title}</li>;\n});\n\nexport default function CourseList({ titles }: { titles: string[] }) {\n  return (\n    <ul>\n      {titles.map((title) => (\n        <CourseRow key={title} title={title} />\n      ))}\n    </ul>\n  );\n}",
    practice: [
      '找一個列表元件，觀察哪些地方會重複重新渲染。',
      '在有明確問題的地方試一次記憶化。',
      '比較優化前後可讀性與效益。',
    ],
    reasons: [
      '中型前端專案常常會碰到不必要的重新渲染。',
      '效能優化需要觀察與判斷，不是背 API。',
    ],
    mistakes: [
      '沒有瓶頸就先到處加 `useMemo`、`useCallback`。',
      '把簡單程式碼過度優化到難讀。',
    ],
    takeaways: [
      '先理解重新渲染，再決定是否要記憶化。',
      '可讀性和真實效益要一起衡量。',
    ],
    references: [
      { label: 'React docs · memo', url: 'https://react.dev/reference/react/memo' },
      { label: 'React docs · useMemo', url: 'https://react.dev/reference/react/useMemo' },
    ],
  },
  {
    lesson: 15,
    slug: 'lesson-15',
    title: '測試 React 元件與使用者流程',
    summary: '撰寫能驗證使用者看得到、做得到什麼的實用測試。',
    moduleTitle: '模組 6 · 測試與交付',
    intro: '測試不是為了追求數字，而是確保使用者真的能看到正確畫面、做正確操作。',
    learningPoints: [
      '理解 React 元件測試（component testing）的基本目標。',
      '知道應該測使用者行為，而不只是內部實作。',
      '能用測試保護核心流程。',
    ],
    lessonNotes: [
      '前端測試最有價值的地方，通常不是檢查某個 Hook 內部值，而是確認使用者是否真的能看到畫面、按下按鈕、完成流程。',
      '因此，好的測試通常更接近「使用者怎麼操作」而不是「實作細節長什麼樣」。',
      '這一課的重點是把測試看成保護行為與流程，而不是增加專案形式感。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: "import { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport Counter from './Counter';\n\ntest('increases the count when button is clicked', async () => {\n  const user = userEvent.setup();\n  render(<Counter />);\n\n  await user.click(screen.getByRole('button', { name: /increase/i }));\n\n  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();\n});",
    practice: [
      '替一個簡單表單或計數器（counter）元件補上使用者互動測試。',
      '確認測試描述的是使用者行為，而不是元件內部實作。',
      '挑一條你最怕壞掉的流程，先寫一個保護它的測試。',
    ],
    reasons: [
      '前端功能越多，沒有測試越難安心修改。',
      '測試可以幫你保護核心互動流程。',
    ],
    mistakes: [
      '測太多實作細節，導致重構時測試大量破掉。',
      '只把測試當作形式，沒有對準真正重要流程。',
    ],
    takeaways: [
      '好的前端測試應該接近使用者視角。',
      '測試最有價值的地方是保護重要互動流程。',
    ],
    references: [
      { label: 'Testing Library docs', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
      { label: 'React docs · Testing', url: 'https://react.dev/learn/testing' },
    ],
  },
  {
    lesson: 16,
    slug: 'lesson-16',
    title: '建置與部署 React 應用',
    summary: '用乾淨的建置與部署流程，把應用程式準備到正式環境。',
    moduleTitle: '模組 6 · 測試與交付',
    intro: '最後一課把 React 從本機開發帶到真正可以上線的狀態：建置、部署、正式環境檢查。',
    learningPoints: [
      '理解建置（build）與開發環境（dev environment）的差別。',
      '知道部署前應該檢查哪些項目。',
      '能把 React 應用程式從開發狀態推到可上線狀態。',
    ],
    lessonNotes: [
      '在開發環境能跑，不代表在正式環境就一定沒問題。資產路徑、環境變數、API 位置與建置結果都需要重新檢查。',
      '部署的重點不是把檔案丟出去，而是確認建置成果、路由、靜態資源、環境設定與使用者流程都能在正式站點正常工作。',
      '這一課的目標是建立一種「出貨前檢查」的習慣，讓前端專案真正具備上線品質。',
    ],
    exampleLanguage: 'bash',
    exampleCode: "npm run build\n# inspect the output\n# deploy the dist folder to your hosting platform",
    practice: [
      '先在本機完成一次正式環境建置（production build）。',
      '檢查靜態資源、路由與環境變數是否在正式模式仍然正確。',
      '列一份自己的部署檢查清單。',
    ],
    reasons: [
      '真正的教學網站或產品最後都要面對部署。',
      '很多 bug 只會在正式環境才出現。',
    ],
    mistakes: [
      '只在開發環境驗證，沒有看正式環境建置結果。',
      '沒有先確認資產路徑與環境變數。',
    ],
    takeaways: [
      '建置和部署是前端開發主線的最後一段，不是額外選修。',
      '上線品質來自事前檢查，而不是上線後再補救。',
    ],
    references: [
      { label: 'Vite docs · Building for production', url: 'https://vite.dev/guide/build.html' },
      { label: 'React docs · Learn React', url: 'https://react.dev/learn' },
    ],
  },
];

export function getReactLessons() {
  return reactLessons;
}

export function getReactLessonBySlug(slug: string) {
  return reactLessons.find((lesson) => lesson.slug === slug) ?? null;
}
