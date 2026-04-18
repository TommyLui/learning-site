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
    title: '什麼是 Next.js，以及何時應該使用它',
    summary: '理解 Next.js 相對於純 React 的定位，與它在正式專案常見的價值。',
    moduleTitle: '模組 1 · Next.js 基礎與專案啟動',
    intro: '第一課先建立 Next.js 的整體心智模型，再進入具體路由與程式實作。',
    learningPoints: [
      '理解 Next.js 在 React 之上補上的能力。',
      '辨識哪些情境適合採用全端框架功能。',
      '掌握現代 Next.js 的 App Router 學習主線。',
    ],
    lessonNotes: [
      'React 專注於 UI 組合，而 Next.js 提供路由、渲染模式、資料流程與上線工具等框架層能力。',
      '當你希望前端頁面與簡單後端端點一起管理、一起部署時，Next.js 會特別有價值。',
      '現代學習建議以 App Router 為核心，避免混入過時路由模式造成混淆。',
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
      '各舉一個「純 React 就足夠」與「Next.js 會更好」的專案場景。',
      '用一小段文字解釋 App Router 的概念。',
      '寫下你最想先學的 Next.js 功能與原因。',
    ],
    reasons: [
      '先理解框架定位，後續學習才不會變成零散記憶。',
      '在專案初期做對技術選擇，可以降低後續重構成本。',
    ],
    mistakes: [
      '把 Next.js 當成只有模板功能的 React 啟動器。',
      '沒建立整體觀念就直接套用片段教學。',
    ],
    takeaways: [
      'Next.js 是 React 的框架化延伸，重點是可交付能力。',
      'App Router 是現代 Next.js 的核心路徑。',
    ],
    references: [
      { label: 'Next.js Docs · Getting Started', url: 'https://nextjs.org/docs/app/getting-started' },
      { label: 'Next.js Learn · Dashboard App', url: 'https://nextjs.org/learn/dashboard-app' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: '專案初始化與 App Router 資料夾結構',
    summary: '使用 create-next-app 建立專案，並理解 app、public 與設定檔角色。',
    moduleTitle: '模組 1 · Next.js 基礎與專案啟動',
    intro: '先把專案骨架建立好，後面路由、資料與部署才會順利串接。',
    learningPoints: [
      '用 create-next-app 初始化現代 Next.js 專案。',
      '理解 app 目錄與路由 segment 的對應關係。',
      '讀懂 next.config 與常用 scripts 的用途。',
    ],
    lessonNotes: [
      '在 App Router 下，app 目錄是主要路由樹，資料夾名稱直接對應 URL 段落。',
      'public 用來放靜態資源，設定檔則控制建置與執行期行為。',
      '結構越早整理清楚，後面擴充頁面時越不容易失控。',
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
      '建立新專案並在本機成功啟動。',
      '指出路由檔、靜態資源與設定檔位置。',
      '替專案補上一段資料夾結構說明。',
    ],
    reasons: [
      '很多初學卡關都來自檔案位置與路由規則不清楚。',
      '熟悉初始化流程能加快後續所有課程實作。',
    ],
    mistakes: [
      '新版專案混用舊 pages router 教學寫法。',
      '把路由檔放在非預期位置造成偵錯困難。',
    ],
    takeaways: [
      'App Router 專案非常依賴檔名與資料夾慣例。',
      '乾淨的起始結構是後續維護的關鍵。',
    ],
    references: [
      { label: 'Next.js Docs · Installation', url: 'https://nextjs.org/docs/app/getting-started/installation' },
      { label: 'Next.js Docs · Project Structure', url: 'https://nextjs.org/docs/app/getting-started/project-structure' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: 'Pages、layouts 與 route segments',
    summary: '用 page.tsx 與 layout.tsx 建立第一個路由樹，理解巢狀渲染規則。',
    moduleTitle: '模組 1 · Next.js 基礎與專案啟動',
    intro: '這一課把檔案慣例和實際畫面行為連起來，建立路由骨架直覺。',
    learningPoints: [
      '在 app 目錄用 page 檔案定義路由頁面。',
      '用 layout 檔案建立共用外框。',
      '理解父子 layout 的巢狀渲染關係。',
    ],
    lessonNotes: [
      '每個 segment 都是資料夾，page.tsx 是該路由段的可見頁面。',
      'layout.tsx 會包住子路由，適合放共用導覽或區塊外框。',
      '巢狀 layout 可以在大型應用中減少重複 UI。',
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
      '建立 /dashboard 路由並確認可渲染。',
      '再新增一層子 segment，例如 /dashboard/reports。',
      '把重複外框移到 layout 檔案。',
    ],
    reasons: [
      '路由與 layout 是每個 Next.js 專案的骨架。',
      '先做好巢狀結構，後續擴充成本更低。',
    ],
    mistakes: [
      '頁面檔不遵守 page.tsx 慣例。',
      '每頁都重複外框而不使用 layout。',
    ],
    takeaways: [
      'page + layout + segment 是 App Router 核心組件。',
      '共用 UI 應優先透過 layout 管理。',
    ],
    references: [
      { label: 'Next.js Docs · Routing Fundamentals', url: 'https://nextjs.org/docs/app/building-your-application/routing' },
      { label: 'Next.js Docs · Layouts and Pages', url: 'https://nextjs.org/docs/app/getting-started/layouts-and-pages' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'Link、導覽流程與路由參數',
    summary: '使用 Link、useRouter 與動態參數建立可預期的導覽行為。',
    moduleTitle: '模組 2 · 路由與介面組合',
    intro: '從靜態頁面進入互動導覽，讓使用者可以沿著內容路徑前進。',
    learningPoints: [
      '用 Link 在頁面間導覽。',
      '在動態 segment 讀取 route params。',
      '在必要時才使用 client-side 導覽 API。',
    ],
    lessonNotes: [
      'Link 提供框架感知的導覽與預先載入能力。',
      '像 [id] 這類資料夾可以承接動態參數並在頁面讀取。',
      'useRouter() 會回傳 router 物件，互動導覽時再呼叫 router.push(...)。',
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
      '建立一個清單頁，連到兩個動態課程頁。',
      '在頁面顯示目前路由參數值。',
      '在一個按鈕互動流程中使用 useRouter.push。',
    ],
    reasons: [
      '導覽品質直接影響使用者體驗與內容可達性。',
      '動態參數是內容型網站和 CRUD 頁面的常見需求。',
    ],
    mistakes: [
      '內部導覽全部用普通 a 標籤。',
      '忘記 useRouter 只能在 Client Component 內使用。',
    ],
    takeaways: [
      '內部導覽預設應使用 Link。',
      '動態 params 讓路由結構能承接真實資料流。',
    ],
    references: [
      { label: 'Next.js Docs · Link Component', url: 'https://nextjs.org/docs/app/api-reference/components/link' },
      { label: 'Next.js Docs · Dynamic Routes', url: 'https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: 'Next.js 專案的樣式基礎',
    summary: '掌握 global CSS、CSS Modules 與實務上可維護的樣式策略。',
    moduleTitle: '模組 2 · 路由與介面組合',
    intro: '樣式若一開始規則不清楚，專案擴大後很容易互相污染。',
    learningPoints: [
      '透過 app 層級引入 global CSS。',
      '使用 CSS Modules 做元件區域樣式。',
      '建立簡單一致的樣式慣例。',
    ],
    lessonNotes: [
      'global CSS 適合重置、排版與共用設計 token。',
      'CSS Modules 能降低跨元件樣式衝突風險。',
      '同一專案應盡量維持單一主樣式策略，避免混亂。',
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
      '做一個使用 CSS Module 的頁面。',
      '把共用排版樣式移到 global.css。',
      '寫一份簡短樣式規範（間距、色彩、命名）。',
    ],
    reasons: [
      '樣式一致性會直接影響協作與維護效率。',
      '區域樣式可降低回歸錯誤。',
    ],
    mistakes: [
      '所有樣式都放全域，造成副作用。',
      '小專案同時混用太多樣式方案。',
    ],
    takeaways: [
      'global CSS + CSS Modules 已可覆蓋多數初中階需求。',
      '一致性比追逐新工具更重要。',
    ],
    references: [
      { label: 'Next.js Docs · Styling', url: 'https://nextjs.org/docs/app/building-your-application/styling' },
      { label: 'Next.js Docs · CSS Modules', url: 'https://nextjs.org/docs/app/building-your-application/styling/css-modules' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: 'Server Components 與 Client Components',
    summary: '理解渲染邊界與 use client 指令，做出更合理的元件切分。',
    moduleTitle: '模組 2 · 路由與介面組合',
    intro: '這一課處理 App Router 最關鍵的架構決策：程式在哪裡執行、為什麼這樣切。',
    learningPoints: [
      '分辨伺服器渲染元件與瀏覽器互動元件。',
      '在需要狀態或事件時使用 use client。',
      '縮小 client 邊界以減少前端 bundle 負擔。',
    ],
    lessonNotes: [
      '在 App Router 中，Server Component 是預設，能直接在伺服器端取得資料。',
      'Client Component 適合 useState、事件監聽與瀏覽器 API。',
      '邊界切分越精準，效能與可維護性越平衡。',
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
      '做一個純 Server Component 與一個互動 Client Component。',
      '把 use client 從父層縮到最小需要的子元件。',
      '檢查頁面哪些區塊真的需要瀏覽器互動。',
    ],
    reasons: [
      '邊界決策會影響效能、bundle 大小與維護難度。',
      '很多錯誤都來自程式放錯執行端。',
    ],
    mistakes: [
      '整個路由樹都標成 client。',
      '在 server 檔案直接使用瀏覽器 API。',
    ],
    takeaways: [
      'App Router 的預設思維是 server-first。',
      'client 邊界要小、要明確、要有理由。',
    ],
    references: [
      { label: 'Next.js Docs · Server and Client Components', url: 'https://nextjs.org/docs/app/getting-started/server-and-client-components' },
      { label: 'React Docs · Server Components Overview', url: 'https://react.dev/reference/rsc/server-components' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: '在 Server Components 進行資料取得',
    summary: '在 async 元件中抓取資料，掌握 App Router 的伺服器資料流程。',
    moduleTitle: '模組 3 · 資料流程與執行狀態',
    intro: '這一課把資料請求放回伺服器元件，讓前端互動層保持精簡。',
    learningPoints: [
      '在 async Server Component 內取得資料。',
      '理解 App Router 下 fetch 行為。',
      '把資料載入邏輯放在路由層最合適的位置。',
    ],
    lessonNotes: [
      '在 App Router 中，Server Component 可以直接 await 資料，不一定要先走 client effect。',
      'fetch 的快取與重驗證設定會影響頁面是靜態、動態或定期更新。',
      '資料邊界清楚時，後面處理 loading/error 也會更單純。',
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
      '建立一頁，從 API 抓資料並顯示清單。',
      '把重複 fetch 抽成共用 server utility。',
      '加入抓取失敗時的基本處理。',
    ],
    reasons: [
      '伺服器資料流程是現代 Next.js 的核心能力。',
      '資料放對位置可降低前端狀態複雜度。',
    ],
    mistakes: [
      '可在 server 完成卻一律用 useEffect 抓資料。',
      '把不同責任資料請求塞進同一巨大頁面檔。',
    ],
    takeaways: [
      '路由層資料需求通常以 Server Component 為優先。',
      '資料邊界越清楚，頁面越穩定好維護。',
    ],
    references: [
      { label: 'Next.js Docs · Fetching Data', url: 'https://nextjs.org/docs/app/building-your-application/data-fetching' },
      { label: 'Next.js Docs · Data Fetching Patterns', url: 'https://nextjs.org/docs/app/building-your-application/data-fetching/patterns' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: '動態路由與巢狀 layouts',
    summary: '用動態 segment 與巢狀 layout 建立可擴充內容路徑。',
    moduleTitle: '模組 3 · 資料流程與執行狀態',
    intro: '從固定頁面進階到內容驅動路由，建立可成長的資訊架構。',
    learningPoints: [
      '建立動態 segment 資料夾。',
      '用巢狀 layout 管理區域共用 UI。',
      '在頁面數量增加時維持路由可讀性。',
    ],
    lessonNotes: [
      '像 [slug] 這類動態資料夾可讓單一定義對應多個 URL。',
      '在現代 Next.js（包含 v15）實務中，page 的路由參數常以 Promise 型別傳入，並在 async page 內 await 後使用。',
      '巢狀 layout 適合承載區域側欄、分段導覽等共用元素。',
      '一致的路由命名可降低長期維護混亂。',
    ],
    exampleLanguage: 'tsx',
    exampleCode: `// app/blog/[slug]/page.tsx
type Props = { params: Promise<{ slug: string }> }

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  return <h1>Post: {slug}</h1>
}`,
    practice: [
      '在一個主題下建立 [slug] 動態頁。',
      '替某區塊加入專用 nested layout。',
      '寫一份簡短路由樹說明。',
    ],
    reasons: [
      '真實專案通常都需要清單 → 詳細頁路徑。',
      '路由結構品質會直接影響後續開發速度。',
    ],
    mistakes: [
      '把所有頁面都平鋪，導致結構難理解。',
      '相似資源卻使用不一致 segment 命名。',
    ],
    takeaways: [
      '動態路由與巢狀 layout 是 App Router 擴充核心工具。',
      '可讀路由樹本身就是架構品質。',
    ],
    references: [
      { label: 'Next.js Docs · Dynamic Segments', url: 'https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes' },
      { label: 'Next.js Docs · Route Groups and Layouts', url: 'https://nextjs.org/docs/app/building-your-application/routing/route-groups' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'Loading、error 與 not-found 狀態',
    summary: '加入 loading.tsx、error.tsx、not-found.tsx，讓頁面在異常情境仍可用。',
    moduleTitle: '模組 3 · 資料流程與執行狀態',
    intro: '這一課建立路由層韌性，讓使用者在等待、錯誤、缺資料情境下仍有清楚回饋。',
    learningPoints: [
      '設定路由 loading UI。',
      '使用錯誤邊界處理區域失敗。',
      '在資源不存在時回傳 not-found 體驗。',
    ],
    lessonNotes: [
      'loading.tsx 能在資料尚未完成時提供即時回饋。',
      'error.tsx 讓錯誤被局部隔離，不必讓整站崩潰。',
      'error.tsx 必須加上 "use client"，因為 Next.js 的錯誤邊界屬於 Client Component。',
      'not-found.tsx 可明確表達資料不存在，而不是留白頁面。',
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
      '在一個資料頁加入 loading.tsx。',
      '新增 error.tsx 並測試重試流程。',
      '在找不到資料時呼叫 notFound()。',
    ],
    reasons: [
      '使用者對可靠性的感受，來自異常時的表現。',
      '局部錯誤處理能避免小故障擴散成全頁失效。',
    ],
    mistakes: [
      '資料等待時讓畫面空白。',
      '所有錯誤都只回傳同一種模糊訊息。',
      '在 error.tsx 頂部漏掉 "use client"。',
    ],
    takeaways: [
      'loading/error/not-found 是 App Router 的實務 UX 安全網。',
      '狀態韌性是正式專案基本能力。',
    ],
    references: [
      { label: 'Next.js Docs · Loading UI and Streaming', url: 'https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming' },
      { label: 'Next.js Docs · Error Handling', url: 'https://nextjs.org/docs/app/building-your-application/routing/error-handling' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: '表單與 Server Actions',
    summary: '用 server-first 方式處理表單送出與資料更新。',
    moduleTitle: '模組 4 · 資料更新與平台能力',
    intro: '這一課介紹現代 Next.js 常用更新流程：讓 mutation 更靠近伺服器邏輯。',
    learningPoints: [
      '在 App Router 用 Server Actions 處理表單。',
      '對送出結果提供驗證與回饋。',
      '把資料更新邏輯放在可維護位置。',
    ],
    lessonNotes: [
      'Server Actions 可讓簡單資料更新不必額外寫一層 client fetch 流程。',
      '即使流程簡化，也要保留輸入驗證與錯誤回饋。',
      'Action 內邏輯要聚焦，避免把所有業務規則塞進 UI。',
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
      '做一個可透過 Server Action 寫入資料的表單。',
      '為空值輸入加上驗證回饋。',
      '把 action 邏輯抽到共用 server 檔案。',
    ],
    reasons: [
      '資料更新流程是產品功能的核心。',
      'server-first mutation 可降低前端程式複雜度。',
    ],
    mistakes: [
      '表單很小就省略輸入驗證。',
      '把複雜業務邏輯硬塞在 JSX 內。',
    ],
    takeaways: [
      'Server Actions 是 App Router 很實用的更新模式。',
      '表單體驗仍需完整驗證與錯誤回饋。',
    ],
    references: [
      { label: 'Next.js Docs · Server Actions and Mutations', url: 'https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations' },
      { label: 'Next.js Docs · Forms Guide', url: 'https://nextjs.org/docs/app/guides/forms' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: 'Metadata、圖片與字型最佳化',
    summary: '用 Metadata API、next/image、next/font 提升 SEO 與效能。',
    moduleTitle: '模組 4 · 資料更新與平台能力',
    intro: '這一課整理 Next.js 內建平台能力，幫你在開發中就同步顧到效能與可發現性。',
    learningPoints: [
      '正確設定 route-level metadata。',
      '用 next/image 管理圖片載入。',
      '用 next/font 控制字型載入策略。',
    ],
    lessonNotes: [
      'metadata 不是附加功能，而是每個路由品質的一部分。',
      'next/image 能提供尺寸管理與最佳化，降低畫面跳動。',
      'next/font 讓字型載入更可控，不必手動拼湊過多流程。',
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
      '替兩個路由補上 metadata。',
      '把一個 img 改為 next/image。',
      '設定一組 next/font 並套到全站。',
    ],
    reasons: [
      '效能與 SEO 應在開發階段就納入。',
      '內建 API 可以減少後續手動優化成本。',
    ],
    mistakes: [
      '圖片未設定尺寸導致 layout shift。',
      'metadata 沒有統一策略，造成頁面資訊不一致。',
    ],
    takeaways: [
      'metadata、image、font 是 Next.js 的核心品質工具。',
      '善用內建能力可提升交付穩定度。',
    ],
    references: [
      { label: 'Next.js Docs · Metadata', url: 'https://nextjs.org/docs/app/building-your-application/optimizing/metadata' },
      { label: 'Next.js Docs · Image Optimization', url: 'https://nextjs.org/docs/app/building-your-application/optimizing/images' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: '快取與重驗證基礎',
    summary: '理解 static、dynamic、revalidation 的差異與實務取捨。',
    moduleTitle: '模組 4 · 資料更新與平台能力',
    intro: '這一課建立資料新鮮度與效能平衡的心智模型，避免快取行為變成黑箱。',
    learningPoints: [
      '分辨靜態渲染、動態渲染與重驗證。',
      '根據需求設定 revalidate。',
      '在資料更新後做必要快取失效處理。',
    ],
    lessonNotes: [
      'App Router 的快取能力很強，但前提是你知道資料何時被計算與重用。',
      '不是每頁都要完全動態，很多內容可用定期重驗證達成效能與新鮮度平衡。',
      '資料更新後要做對應 invalidation，才能避免使用者看到過期內容。',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `export async function getCourses() {
  const res = await fetch('https://example.com/api/courses', {
    next: { revalidate: 60 },
  })
  return res.json()
}`,
    practice: [
      '把一個路由設定為每 60 秒重驗證。',
      '比較 cache 預設與 no-store 行為差異。',
      '模擬更新後執行一次 path invalidation。',
    ],
    reasons: [
      '快取策略會同時影響速度與資料正確性。',
      '清楚模型可避免 stale data 除錯地獄。',
    ],
    mistakes: [
      '所有頁面都改成 dynamic，忽略需求差異。',
      '資料更新後忘記處理快取失效。',
    ],
    takeaways: [
      '快取策略應依頁面新鮮度需求設計。',
      '重驗證是 static 與 dynamic 之間的實用平衡點。',
    ],
    references: [
      { label: 'Next.js Docs · Caching Deep Dive', url: 'https://nextjs.org/docs/app/deep-dive/caching' },
      { label: 'Next.js Docs · revalidatePath', url: 'https://nextjs.org/docs/app/api-reference/functions/revalidatePath' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: 'Route Handlers 與簡易 API 端點',
    summary: '在 app/api 內建立伺服器端點並回傳一致 JSON 格式。',
    moduleTitle: '模組 5 · API 與上線交付',
    intro: '這一課把 Next.js 擴展到輕量後端端點能力，補齊全端專案常見需求。',
    learningPoints: [
      '使用 route.ts 建立 GET / POST handlers。',
      '回傳帶狀態碼的 JSON 響應。',
      '維持 API 回傳格式一致。',
    ],
    lessonNotes: [
      'Route Handlers 適合在 App Router 專案中快速提供簡易 API。',
      '即使端點簡單，仍要處理輸入驗證與錯誤結構。',
      '明確 API 契約可降低前端串接成本。',
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
      '建立 app/api/health/route.ts 的 GET 端點。',
      '新增一個可接收 JSON 的 POST 端點。',
      '定義一組共用錯誤回傳格式。',
    ],
    reasons: [
      '很多專案都需要 UI 與輕量 API 同時存在。',
      '一致端點契約可降低跨層溝通成本。',
    ],
    mistakes: [
      '不同端點回傳欄位風格完全不一致。',
      '原型階段跳過驗證，最後帶進正式環境。',
    ],
    takeaways: [
      'Route Handlers 非常適合小型 API 需求。',
      '穩定 JSON 契約是可維護全端設計的一部分。',
    ],
    references: [
      { label: 'Next.js Docs · Route Handlers', url: 'https://nextjs.org/docs/app/building-your-application/routing/route-handlers' },
      { label: 'Next.js Docs · Request and Response APIs', url: 'https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body' },
    ],
  },
  {
    lesson: 14,
    slug: 'lesson-14',
    title: '部署 Next.js 應用與 capstone 檢查清單',
    summary: '準備環境變數、執行正式建置，完成小型端到端上線流程。',
    moduleTitle: '模組 5 · API 與上線交付',
    intro: '最後一課把路由、資料、更新與效能觀念整合為可交付流程。',
    learningPoints: [
      '執行 production build 並做本機驗證。',
      '安全管理部署環境變數。',
      '用 capstone 清單完成交付前檢查。',
    ],
    lessonNotes: [
      '部署前要確認建置成功、路由可走通、API 可回應、失敗情境有處理。',
      '環境變數應由各環境設定注入，不應硬寫在原始碼。',
      'capstone 清單能把零散知識轉成可重複執行的交付流程。',
    ],
    exampleLanguage: 'bash',
    exampleCode: `npm run build
npm run start

# capstone checks
# - route navigation works
# - data pages load and recover from errors
# - form submission + revalidation flow succeeds`,
    practice: [
      '在 production mode 建置並啟動專案。',
      '整理 staging / production 所需環境變數清單。',
      '對一個小型 capstone 專案跑完發佈檢查。',
    ],
    reasons: [
      '能上線交付才是框架能力真正落地。',
      '清單化流程可降低發版風險。',
    ],
    mistakes: [
      '以 dev 成功直接視為可上線。',
      '把敏感設定值寫進版本控制。',
    ],
    takeaways: [
      '部署準備同時包含技術與流程紀律。',
      '小型 capstone 是串起 Next.js 核心能力的最佳練習。',
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
