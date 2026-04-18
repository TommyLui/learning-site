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
    title: 'TypeScript 為 JavaScript 補上了什麼',
    summary: '理解靜態型別帶來的價值，以及編譯期回饋如何降低錯誤。',
    moduleTitle: '模組 1 · TypeScript 基礎與環境設定',
    intro: '第一課先釐清 TypeScript 的定位，建立你對型別系統的實務期待。',
    learningPoints: [
      '分辨執行期錯誤與編譯期檢查差異。',
      '理解型別如何提升編輯器提示與重構信心。',
      '知道 TypeScript 不會改變 JavaScript 執行期本質。',
    ],
    lessonNotes: [
      'TypeScript 在 JavaScript 之上加入靜態型別系統，能在程式執行前發現許多問題。',
      '編譯器與編輯器可提早提示欄位缺漏、型別不符與不安全呼叫。',
      'TypeScript 並不取代執行期驗證，而是把一部分風險前移到開發階段。',
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
      '列出兩個可被靜態型別提早攔下的常見錯誤。',
      '為一個函式補上明確參數型別並觀察編輯器提示。',
      '比較同一段 JS 與 TS 程式在編輯器中的回饋差異。',
    ],
    reasons: [
      '先理解價值，後續學習才不會只剩語法記憶。',
      '提早發現型別問題能降低線上回歸風險。',
    ],
    mistakes: [
      '以為用了 TypeScript 就不需要任何執行期驗證。',
      '把型別錯誤當成純噪音，而非設計回饋。',
    ],
    takeaways: [
      'TypeScript 主要價值是把問題提早到開發時發現。',
      '型別系統是可維護性工具，不只是語法裝飾。',
    ],
    references: [
      { label: 'TypeScript Handbook · Introduction', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' },
      { label: 'TypeScript Docs · TypeScript for JavaScript Programmers', url: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: '環境設定、Playground 與 tsconfig 基礎',
    summary: '完成本機 TypeScript 設定，並理解 tsconfig 核心選項。',
    moduleTitle: '模組 1 · TypeScript 基礎與環境設定',
    intro: '工具鏈和設定先穩定，後面學型別才不會被環境問題打斷。',
    learningPoints: [
      '安裝 TypeScript 並用 CLI 執行編譯檢查。',
      '使用 Playground 快速驗證型別想法。',
      '理解 strict、target 等常見 tsconfig 設定。',
    ],
    lessonNotes: [
      'tsc 會把 TypeScript 轉成 JavaScript，也會輸出型別診斷結果。',
      'Playground 適合快速試驗型別，不必每次都建完整專案。',
      'tsconfig 決定檢查嚴格度與輸出相容性，是團隊一致性的基礎。',
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
      '初始化一個 TS 專案並成功跑一次 type-check。',
      '切換 strict 設定，觀察診斷差異。',
      '在 Playground 測試一段型別推斷並保存連結。',
    ],
    reasons: [
      '許多團隊問題其實來自設定不一致，而非語法本身。',
      '熟悉本機工具流可加快遷移與除錯速度。',
    ],
    mistakes: [
      '直接複製 tsconfig 卻不理解選項含意。',
      '為了安靜編譯器過早關閉嚴格檢查。',
    ],
    takeaways: [
      'TypeScript 設定不複雜，但選項會直接影響開發品質。',
      'Playground + 本機 tsc 是高效率學習組合。',
    ],
    references: [
      { label: 'TypeScript Docs · TSConfig Reference', url: 'https://www.typescriptlang.org/tsconfig' },
      { label: 'TypeScript Playground', url: 'https://www.typescriptlang.org/play' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: '基本型別與型別推斷',
    summary: '掌握基礎型別，並在適當情境使用 TypeScript 推斷能力。',
    moduleTitle: '模組 1 · TypeScript 基礎與環境設定',
    intro: '這一課建立第一批型別習慣：該明確就明確，該推斷就推斷。',
    learningPoints: [
      '使用 string、number、boolean 等基本型別。',
      '理解 TypeScript 何時會自動推斷型別。',
      '在新程式中避免濫用 any。',
    ],
    lessonNotes: [
      '對於賦值明確的區域變數，推斷通常已足夠。',
      '函式參數與公開 API 邊界通常更適合明確註記型別。',
      'any 會跳過安全檢查，應有意識地限縮使用。',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `let title = 'TypeScript Basics'
let lessonCount: number = 14
let published = true

function formatLabel(name: string, count: number) {
  return name + ' (' + count + ')'
}`,
    practice: [
      '替三個函式參數補上明確型別。',
      '移除一個不必要的區域變數型別註記。',
      '把一個 any 改成更安全的具體型別。',
    ],
    reasons: [
      '基礎型別能力是後續所有進階主題前提。',
      '推斷與註記取得平衡，能兼顧可讀性與安全。',
    ],
    mistakes: [
      '所有變數都硬加型別，降低可讀性。',
      '不處理 unknown / any，讓型別保護失效。',
    ],
    takeaways: [
      '邊界清楚處明確註記，簡單區域值可善用推斷。',
      '避免無節制 any 是 TypeScript 基本紀律。',
    ],
    references: [
      { label: 'TypeScript Handbook · Everyday Types', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html' },
      { label: 'TypeScript Handbook · Everyday Types（基本型別）', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: '物件、陣列、tuple 與 literal types',
    summary: '建立常見資料結構型別，並用 literal type 限制有效值。',
    moduleTitle: '模組 2 · 核心型別建模',
    intro: '這一課聚焦日常建模需求，讓前端與 API 資料結構更清楚可控。',
    learningPoints: [
      '為物件型別定義必要與可選欄位。',
      '使用陣列與 tuple 表達序列資料。',
      '用 literal type 約束狀態值範圍。',
    ],
    lessonNotes: [
      '物件與陣列型別是多數應用程式的基本骨架。',
      'tuple 適合位置有語意的資料，例如 [label, value]。',
      'literal 限制可防止無效狀態流入系統。',
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
      '為課程資料定義一個物件型別。',
      '用 tuple 表示一個雙值回傳的工具函式結果。',
      '把自由字串狀態改成 literal union。',
    ],
    reasons: [
      '建模品質會直接影響錯誤率與程式可讀性。',
      '狀態約束能有效降低無效資料流。',
    ],
    mistakes: [
      '只允許少數值卻仍用寬鬆 string。',
      '其實應該用物件卻硬用 tuple 表示。',
    ],
    takeaways: [
      '物件、陣列、tuple、literal 已涵蓋多數初中階建模需求。',
      '限制合法值能讓資料契約更可靠。',
    ],
    references: [
      { label: 'TypeScript Handbook · Object Types', url: 'https://www.typescriptlang.org/docs/handbook/2/objects.html' },
      { label: 'TypeScript Handbook · Literal Types', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types' },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: '函式參數與回傳型別',
    summary: '為函式建立清楚型別契約，提升可讀性與可測試性。',
    moduleTitle: '模組 2 · 核心型別建模',
    intro: '函式型別是程式邊界溝通核心，這一課讓你把契約寫得更清楚。',
    learningPoints: [
      '有意識地註記參數與回傳型別。',
      '安全使用可選與預設參數。',
      '為 callback 建立可重用簽名型別。',
    ],
    lessonNotes: [
      '函式型別同時服務人類閱讀與工具檢查。',
      '在模組邊界明確標示回傳型別，通常能提升維護性。',
      'callback 簽名清楚時，陣列與非同步流程更容易閱讀。',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `function calculateDiscount(total: number, rate = 0.1): number {
  return total * rate
}

type Formatter = (value: number) => string

const formatPrice: Formatter = (value) => '$' + value.toFixed(2)`,
    practice: [
      '為三個 export 函式補上回傳型別。',
      '定義一個共用 callback type alias。',
      '把參數過多函式改成 options 物件。',
    ],
    reasons: [
      '函式簽名是團隊協作時最常閱讀的契約。',
      '清楚型別可降低跨檔案誤用機率。',
    ],
    mistakes: [
      '工具函式保留隱式 any 參數。',
      '過度複雜簽名導致閱讀成本過高。',
    ],
    takeaways: [
      '型別清楚的函式會同時提升正確性與協作效率。',
      '簡潔契約通常比炫技型別更好維護。',
    ],
    references: [
      { label: 'TypeScript Handbook · More on Functions', url: 'https://www.typescriptlang.org/docs/handbook/2/functions.html' },
      { label: 'TypeScript Handbook · Functions', url: 'https://www.typescriptlang.org/docs/handbook/functions.html' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: 'Unions 與 intersections',
    summary: '用組合型別表示多種可能與共用能力，保持彈性與可讀性。',
    moduleTitle: '模組 2 · 核心型別建模',
    intro: '這一課建立組合型別觀念，常見於 API 結果、UI 狀態與領域模型。',
    learningPoints: [
      '使用 union 表示多種可能型別。',
      '使用 intersection 合併多份契約。',
      '透過命名維持組合型別可讀性。',
    ],
    lessonNotes: [
      'union 適合描述「可能是 A 或 B」的資料。',
      'intersection 可把多個型別需求組成單一結構。',
      '一旦組合變複雜，命名品質會直接影響維護難度。',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `type ApiSuccess = { ok: true; data: string[] }
type ApiError = { ok: false; message: string }
type ApiResult = ApiSuccess | ApiError

type Timestamped = { updatedAt: string }
type LessonSummary = { title: string } & Timestamped`,
    practice: [
      '把一個 API 回應建模為成功/失敗 union。',
      '建立一個 intersection 用於共用 metadata 欄位。',
      '把過長 inline 組合型別拆成具名型別。',
    ],
    reasons: [
      'union 在非同步結果與 UI 狀態很常見。',
      'intersection 可降低重複定義成本。',
    ],
    mistakes: [
      '把不相干型別硬塞進巨大 union。',
      '在語意衝突情境仍強行做 intersection。',
    ],
    takeaways: [
      'union 表示替代選項，intersection 表示組合需求。',
      '組合型別需要良好命名才能長期可維護。',
    ],
    references: [
      { label: 'TypeScript Handbook · Union Types', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types' },
      { label: 'TypeScript Handbook · Creating Types from Types', url: 'https://www.typescriptlang.org/docs/handbook/2/types-from-types.html' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: 'Narrowing 與 type guards',
    summary: '透過執行期檢查縮小 union 型別，安全處理分支邏輯。',
    moduleTitle: '模組 3 · Narrowing 與可重用契約',
    intro: 'narrowing 是把彈性型別轉成可安全操作分支的關鍵能力。',
    learningPoints: [
      '使用 typeof、in、相等判斷做 narrowing。',
      '建立可重用 custom type guards。',
      '在 unknown 輸入下避免不安全假設。',
    ],
    lessonNotes: [
      'TypeScript 會追蹤流程控制，根據可靠檢查縮小可用型別範圍。',
      '自訂 type guard 可集中驗證邏輯並提升重用性。',
      'narrowing 對 API 解析與外部輸入處理特別重要。',
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
      '為一個 API payload 寫 custom type guard。',
      '把一個 as any 寫法改成 narrowing 分支。',
      '在 union switch 中做完整分支檢查。',
    ],
    reasons: [
      'narrowing 把靜態型別與執行期不確定性連接起來。',
      '安全解析流程可降低生產環境資料錯誤。',
    ],
    mistakes: [
      '不用檢查直接 type cast。',
      '處理外部資料時忽略 unknown 風險。',
    ],
    takeaways: [
      'type guard 讓 union 處理更清楚且安全。',
      '邊界程式的可靠性高度依賴 narrowing。',
    ],
    references: [
      { label: 'TypeScript Handbook · Narrowing', url: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html' },
      { label: 'TypeScript Handbook · Unknown', url: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: 'Interfaces 與 type aliases 的取捨',
    summary: '在物件契約與組合型別情境下，選擇更清楚的抽象工具。',
    moduleTitle: '模組 3 · Narrowing 與可重用契約',
    intro: '這一課比較兩種常見工具，重點是讀寫清楚而非教條。',
    learningPoints: [
      '用 interface 建立物件型契約。',
      '用 type alias 處理 union 與型別組合。',
      '建立團隊一致且可讀的選用準則。',
    ],
    lessonNotes: [
      'interface 常用於物件型結構，且可擴充。',
      'type alias 在 union、intersection 與型別轉換上更彈性。',
      '兩者都可行，重點是情境合適與團隊一致性。',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `interface Lesson {
  title: string
  duration: number
}

type LessonState = 'draft' | 'published'

type LessonCard = Lesson & { state: LessonState }`,
    practice: [
      '把一段 interface 改寫成 type alias，比較可讀性。',
      '各做一個 interface 契約與 union type alias。',
      '寫下團隊版 interface / type 使用準則。',
    ],
    reasons: [
      '沒有準則時，型別風格會快速分裂。',
      '理解取捨有助於閱讀第三方型別定義。',
    ],
    mistakes: [
      '只爭論語法偏好而忽略實際情境。',
      '不分場景只用單一工具。',
    ],
    takeaways: [
      'interface 與 type alias 是互補工具。',
      '選擇標準應建立在可讀性與表達力。',
    ],
    references: [
      { label: 'TypeScript Handbook · Object Types（Interfaces）', url: 'https://www.typescriptlang.org/docs/handbook/2/objects.html' },
      { label: 'TypeScript Handbook · Type Aliases', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'Optional、readonly 與 indexed access types',
    summary: '用可選欄位、唯讀契約與索引型別提升物件安全性。',
    moduleTitle: '模組 3 · Narrowing 與可重用契約',
    intro: '這一課介紹幾個小而實用的型別工具，能快速提升模型穩定性。',
    learningPoints: [
      '定義 optional 欄位並安全讀取。',
      '用 readonly 保護不可變資料。',
      '用 indexed access 取用既有欄位型別。',
    ],
    lessonNotes: [
      'optional 欄位貼近真實資料不完整情境，但要搭配安全判斷。',
      'readonly 可避免意外改寫，讓資料所有權更清楚。',
      'indexed access 有助於避免重複定義欄位型別。',
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
      '把一個不應被改動的 id 欄位設為 readonly。',
      '對 optional 欄位加入安全存取判斷。',
      '用 indexed access 抽出一個欄位型別。',
    ],
    reasons: [
      '這些小工具能有效降低模型類錯誤。',
      '在中型專案中，細節型別優化會持續放大價值。',
    ],
    mistakes: [
      '把太多欄位都設為 optional 造成語意模糊。',
      '無視 readonly 設計意圖，靠 cast 繞過限制。',
    ],
    takeaways: [
      'optional / readonly 是高實用性的安全工具。',
      'indexed access 可降低重複並維持模型一致。',
    ],
    references: [
      { label: 'TypeScript Handbook · Optional Properties', url: 'https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties' },
      { label: 'TypeScript Handbook · Indexed Access Types', url: 'https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'Generics：可重用函式與元件型別',
    summary: '在不重複程式碼前提下，建立可重用且型別安全的設計。',
    moduleTitle: '模組 4 · Generics、模組與非同步型別',
    intro: 'generic 讓你在保持型別資訊的同時，避免為不同資料重複寫邏輯。',
    learningPoints: [
      '用型別參數定義 generic 函式。',
      '在必要時用 constraint 限制型別條件。',
      '保持 generic 簽名清楚可讀。',
    ],
    lessonNotes: [
      'generic 能消除多型別重複函式。',
      'constraint 可確保 generic 仍可安全使用必要欄位。',
      '型別設計仍應以可讀性優先，避免過度抽象。',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `function firstItem<T>(items: T[]): T | undefined {
  return items[0]
}

function withId<T extends { id: string }>(item: T): string {
  return item.id
}`,
    practice: [
      '做一個泛型分頁資料 helper。',
      '為需要 key 欄位的函式加上 constraint。',
      '把不清楚的泛型參數名稱改成語意化名稱。',
    ],
    reasons: [
      '泛型工具在前後端專案都很常見。',
      '可重用抽象與型別安全可同時兼得。',
    ],
    mistakes: [
      '其實用具體型別更清楚卻硬上泛型。',
      '過深泛型巢狀讓意圖難讀。',
    ],
    takeaways: [
      'generic 應服務重用與安全，不是複雜化。',
      'constraint 是泛型可用性與安全性的關鍵。',
    ],
    references: [
      { label: 'TypeScript Handbook · Generics', url: 'https://www.typescriptlang.org/docs/handbook/2/generics.html' },
      { label: 'TypeScript Handbook · Generic Constraints', url: 'https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: 'Modules、imports 與 exports',
    summary: '用模組邊界整理專案，讓型別與實作依賴更可預期。',
    moduleTitle: '模組 4 · Generics、模組與非同步型別',
    intro: '專案變大後，模組切分與匯入風格會直接影響可讀性與協作效率。',
    learningPoints: [
      '一致使用 named exports / imports。',
      '在適當情況使用 type-only import。',
      '依責任切分檔案邊界。',
    ],
    lessonNotes: [
      'module 是 TypeScript 專案第一層可維護邊界。',
      '清楚 export 表面能讓使用端更容易理解可用 API。',
      'type-only import 在部分建置情境下可降低執行期混淆。',
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
      '把一個大檔拆成兩個責任明確模組。',
      '把某區塊 default export 改成 named export。',
      '對純型別依賴改用 import type。',
    ],
    reasons: [
      '模組衛生會直接影響團隊可讀性與 onboarding 成本。',
      '一致輸出策略可降低重構風險。',
    ],
    mistakes: [
      '不小心形成循環依賴。',
      '過度 barrel export 導致責任來源不清。',
    ],
    takeaways: [
      '模組設計是架構能力，不只是檔案分割。',
      '可預期的 import / export 能讓型別使用更乾淨。',
    ],
    references: [
      { label: 'TypeScript Handbook · Modules', url: 'https://www.typescriptlang.org/docs/handbook/2/modules.html' },
      { label: 'TypeScript Handbook · ECMAScript Modules in TS', url: 'https://www.typescriptlang.org/docs/handbook/modules/introduction.html' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'Async、Promises 與 utility types',
    summary: '為非同步流程補上正確型別，並用 utility types 減少重複。',
    moduleTitle: '模組 4 · Generics、模組與非同步型別',
    intro: '這一課把非同步型別與常用工具型別串在一起，對日常專案非常實用。',
    learningPoints: [
      '明確標示 async 函式與 Promise 回傳。',
      '在實務情境使用 Awaited、ReturnType。',
      '以 Partial、Pick 建立 DTO 變體。',
    ],
    lessonNotes: [
      'async 函式一定回傳 Promise，明確註記能提高可讀性。',
      'utility types 可減少模型變體重複定義。',
      '工具型別應以可讀性為前提，避免層層巢狀。',
    ],
    exampleLanguage: 'typescript',
    exampleCode: `type Lesson = { id: string; title: string; summary: string }
type LessonPatch = Partial<Pick<Lesson, 'title' | 'summary'>>

async function fetchLessons(): Promise<Lesson[]> {
  return [{ id: '1', title: 'Intro', summary: 'start here' }]
}

type LessonsResult = Awaited<ReturnType<typeof fetchLessons>>`,
    practice: [
      '替兩個 async 函式補上明確 Promise 回傳型別。',
      '用 Partial + Pick 取代一個手寫 patch type。',
      '在一個 service helper 套用 Awaited<ReturnType<...>>。',
    ],
    reasons: [
      '非同步與 utility types 在 TS 專案幾乎必用。',
      '這裡的型別品質會直接影響跨層整合穩定度。',
    ],
    mistakes: [
      'API helper 回傳 Promise<any>。',
      'utility types 疊太深導致可讀性下降。',
    ],
    takeaways: [
      '非同步型別與工具型別在可讀前提下能大幅提升維護性。',
      'utility 的目標是簡化契約，而非增加複雜度。',
    ],
    references: [
      { label: 'TypeScript Handbook · Utility Types', url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html' },
      { label: 'TypeScript Handbook · More on Functions (Async)', url: 'https://www.typescriptlang.org/docs/handbook/2/functions.html' },
    ],
  },
  {
    lesson: 13,
    slug: 'lesson-13',
    title: '把 JavaScript 專案遷移到 TypeScript',
    summary: '用低風險、漸進式策略把既有 JavaScript 專案導入 TypeScript。',
    moduleTitle: '模組 5 · 遷移流程與實務交付',
    intro: '這一課專注真實遷移流程：不停工、低風險、可持續。',
    learningPoints: [
      '從 tsconfig 與 checkJS 起步。',
      '優先遷移高風險與共用模型檔案。',
      '有意識管理暫時性 escape hatch。',
    ],
    lessonNotes: [
      '成功遷移多半是分段推進，而不是一次性大改。',
      '共用 API 契約與基礎工具層通常是高回報起點。',
      'any、@ts-ignore 等暫時手段要納入清理計畫。',
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
      '在一個現有 JS 專案啟用 checkJs。',
      '把一個共用模型檔從 .js 改成 .ts。',
      '建立待清理 any / ts-ignore 清單。',
    ],
    reasons: [
      '多數團隊都在既有專案中導入 TypeScript。',
      '漸進遷移能兼顧風險控制與交付節奏。',
    ],
    mistakes: [
      '一次遷移整個 repo 造成難以審查與回滾。',
      '暫時抑制錯誤後沒有後續清理機制。',
    ],
    takeaways: [
      '遷移成敗取決於順序、範圍與團隊紀律。',
      '小步前進也能很快產生價值。',
    ],
    references: [
      { label: 'TypeScript Handbook · Migrating from JavaScript', url: 'https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html' },
      { label: 'TypeScript Docs · Type Checking JavaScript Files', url: 'https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html' },
    ],
  },
  {
    lesson: 14,
    slug: 'lesson-14',
    title: '實務 TypeScript capstone',
    summary: '完成一個小型端到端 typed 功能，串起資料模型、API 與 UI 邊界。',
    moduleTitle: '模組 5 · 遷移流程與實務交付',
    intro: '最後一課把建模、函式、模組、非同步流程整合成可交付的完整練習。',
    learningPoints: [
      '以明確型別邊界設計小型功能。',
      '一致串接 request / response / UI state 型別。',
      '上線前做型別可讀性與安全性收斂。',
    ],
    lessonNotes: [
      'capstone 重點是完整交付，而非炫技型別技巧。',
      '端到端型別穩定來自每層契約清楚與責任分工。',
      '最終檢查要看命名、可空值處理與外部輸入驗證邊界。',
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
      '完成一個含 request / response / UI typed 流程的小功能。',
      '在外部資料邊界加入一個執行期驗證。',
      '最後整理一次型別命名並簡化一段過度複雜簽名。',
    ],
    reasons: [
      'capstone 可把零散語法知識轉成交付能力。',
      '型別品質會長期影響專案演進速度。',
    ],
    mistakes: [
      '過度追求型別技巧而忽略契約清晰度。',
      '因為可編譯就省略外部輸入檢查。',
    ],
    takeaways: [
      '實務 TypeScript 成功關鍵是跨層契約清楚。',
      '可讀型別 + 必要驗證能建立可相信的功能交付。',
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
