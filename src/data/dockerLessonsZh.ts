import type { CourseLessonArticle } from './goLessons';

export const dockerLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: 'Docker 是什麼，為什麼容器很重要',
    summary: '理解容器如何封裝應用，以及它們如何提升可攜性。',
    moduleTitle: '模組 1 · Docker 基礎與第一個容器',
    intro:
      '容器把應用程式與執行所需的一切打包在一起，讓它在本機與 production 環境表現一致。',
    learningPoints: [
      '理解容器與虛擬機器的差異。',
      '了解容器如何提升可攜性與一致性。',
      '知道什麼時候適合使用 Docker。',
    ],
    lessonNotes: [
      '在 Docker 出現前，「在我的機器可以跑」是常見問題，因為開發與 production 環境會漂移。',
      '容器共享主機 kernel，但擁有自己的檔案系統、函式庫與相依套件。',
      '容器啟動速度快，資源消耗也比完整虛擬機少，適合本機開發與部署。',
    ],
    exampleLanguage: 'bash',
    exampleCode: 'docker run hello-world\n# 預期輸出會說明 Docker 已拉取並執行一個微小 image。',
    practice: [
      '閱讀 Docker overview 頁面，列出三個容器解決的問題。',
      '比較 VM 與容器的架構圖。',
      '向隊友說明為什麼容器比 VM 更輕量。',
    ],
    reasons: [
      '一致的環境能減少部署時的意外。',
      '輕量容器讓擴充與本機測試成本更低。',
    ],
    mistakes: [
      '把 Docker 只當成打包工具，而不理解執行期模型。',
      '明明一個簡單執行檔或腳本就夠用，卻硬要包成容器。',
    ],
    takeaways: [
      'Docker 使用容器來封裝應用與其相依套件。',
      '容器能改善開發與 production 環境之間的一致性。',
    ],
    references: [
      { label: 'Docker docs · What is Docker?', url: 'https://docs.docker.com/get-started/docker-overview/' },
      { label: 'Docker docs · Dockerfile reference', url: 'https://docs.docker.com/engine/reference/builder/' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: '安裝 Docker 並執行第一個容器',
    summary: '在本機完成 Docker 設定，並從既有 image 執行容器。',
    moduleTitle: '模組 1 · Docker 基礎與第一個容器',
    intro: '一個能正常運作的 Docker 環境是後續每一課的基礎。',
    learningPoints: [
      '在你的平台上安裝 Docker Engine 或 Docker Desktop。',
      '用 docker version 與 docker run 驗證安裝。',
      '理解 Docker daemon 與 CLI 之間的差異。',
    ],
    lessonNotes: [
      'Docker Desktop 是 macOS 與 Windows 上最簡單的起點，因為它包含 engine、CLI 與 Compose。',
      '在 Linux 上可以直接安裝 Docker Engine，並用發行版的套件管理工具維護。',
      'docker CLI 會與 Docker daemon 溝通，由 daemon 負責建置、執行與管理容器。',
    ],
    exampleLanguage: 'bash',
    exampleCode:
      "docker --version\ndocker run --rm -p 8080:80 nginx:alpine\n# 開啟 http://localhost:8080，然後按 Ctrl+C 停止。",
    practice: [
      '安裝 Docker 並成功執行 docker --version。',
      '執行 nginx:alpine 並在瀏覽器查看預設頁面。',
      '乾淨地停止並移除 nginx 容器。',
    ],
    reasons: [
      '驗證過的本機環境能避免後續課程出現令人困惑的錯誤。',
      '知道如何停止與移除容器，才能保持本機整潔。',
    ],
    mistakes: [
      '安裝多個互相衝突的 Docker 版本。',
      '讓未使用的容器與 images 持續佔用磁碟空間。',
    ],
    takeaways: [
      'Docker Desktop 或 Docker Engine 提供你需要的 CLI 與 daemon。',
      'docker run 是驗證 Docker 是否正常運作最快的方式。',
    ],
    references: [
      { label: 'Docker docs · Install Docker Engine', url: 'https://docs.docker.com/engine/install/' },
      { label: 'Docker docs · Docker Desktop', url: 'https://docs.docker.com/desktop/' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: 'Images、containers 與 Docker CLI 工作流程',
    summary: '學習 images、執行中 containers 與常用 CLI 指令之間的關係。',
    moduleTitle: '模組 1 · Docker 基礎與第一個容器',
    intro:
      '這一課釐清 image 與 container 的關係，並介紹你每天都會用到的 CLI 指令。',
    learningPoints: [
      '理解 image 是唯讀模板，container 是執行中的實例。',
      '列出、檢查與移除 images 和 containers。',
      '使用 docker exec 在執行中的 container 內執行指令。',
    ],
    lessonNotes: [
      'Image 包含執行 container 所需的應用程式碼、runtime、函式庫與設定。',
      'Container 是 image 之上的可寫層；container 內的變更不會影響 image。',
      '常用 CLI 指令包含 docker images、docker ps、docker logs、docker stop 與 docker rm。',
    ],
    exampleLanguage: 'bash',
    exampleCode:
      "docker pull alpine:latest\ndocker run -d --name demo alpine:latest sleep 60\ndocker ps\ndocker exec demo echo \"hello from inside\"\ndocker stop demo\ndocker rm demo",
    practice: [
      '拉取 alpine image 並列出本機 images。',
      '執行一個 detached container，檢查它，然後停止並移除。',
      '使用 docker exec 在執行中的 container 內讀取檔案。',
    ],
    reasons: [
      'Image / container 模型是 Docker 一切運作的核心心智模型。',
      '日常除錯需要檢查 container 並在裡面執行指令。',
    ],
    mistakes: [
      '清理空間時混淆 images 與 containers。',
      '重複使用 container 名稱前忘記移除已停止的 container。',
    ],
    takeaways: [
      'Images 是模板；containers 是它們的執行實例。',
      'Docker CLI 讓你完全掌控 container 生命週期。',
    ],
    references: [
      { label: 'Docker docs · Docker overview', url: 'https://docs.docker.com/get-started/docker-overview/' },
      { label: 'Docker docs · CLI reference', url: 'https://docs.docker.com/engine/reference/commandline/cli/' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: '用 Dockerfile 建置 Docker image',
    summary: '撰寫 Dockerfile、建置 image，並從中執行容器。',
    moduleTitle: '模組 2 · Images、layers 與 Dockerfile',
    intro: 'Dockerfile 是定義 image 如何建置的標準方式。',
    learningPoints: [
      '撰寫包含 FROM、COPY、CMD 的 Dockerfile。',
      '用 docker build 建置 image。',
      '從自定義 image 執行 container。',
    ],
    lessonNotes: [
      'Dockerfile 是一個文字檔，Docker 會從上到下讀取其中的指令。',
      'FROM 設定 base image，COPY 加入應用程式檔案，CMD 定義預設指令。',
      '每個指令會產生一層；指令順序會影響 build cache。',
    ],
    exampleLanguage: 'dockerfile',
    exampleCode:
      "FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nCMD [\"node\", \"server.js\"]",
    practice: [
      '為一個小型靜態網站或 Node 腳本撰寫 Dockerfile。',
      '用 docker build -t myapp:latest . 建置。',
      '從 myapp:latest 執行 container 並驗證行為。',
    ],
    reasons: [
      'Dockerfile 讓 image 建置可重複且可版本控制。',
      '將 image 定義為程式碼，便於協作與整合 CI/CD。',
    ],
    mistakes: [
      '把 COPY . . 放在 RUN npm install 之前，導致每次程式碼變更都失效 cache。',
      '明明 slim 或 alpine 變體就夠用，卻使用龐大的 base image。',
    ],
    takeaways: [
      'Dockerfile 能將應用程式碼轉換成可攜 image。',
      'Layer 順序對建置效能與 cache 重用很重要。',
    ],
    references: [
      { label: 'Docker docs · Dockerfile reference', url: 'https://docs.docker.com/engine/reference/builder/' },
      {
        label: 'Docker docs · Build images',
        url: 'https://docs.docker.com/get-started/docker-concepts/building-images/build-tag-and-publish-an-image/',
      },
    ],
  },
  {
    lesson: 5,
    slug: 'lesson-5',
    title: '理解 image layers 與 caching',
    summary: '了解每個指令如何產生一層，以及 layer 順序如何影響建置速度。',
    moduleTitle: '模組 2 · Images、layers 與 Dockerfile',
    intro: '理解 layers 能幫助你寫出更快的建置流程與更小的 images。',
    learningPoints: [
      '了解每個 Dockerfile 指令如何產生一層。',
      '使用 layer caching 加速重新建置。',
      '用 docker history 檢視 image layers。',
    ],
    lessonNotes: [
      'Dockerfile 中的每個指令會在產生的 image 中建立一個新 layer。',
      '重新建置時，Docker 會重用未改變的 layers，這能大幅縮短建置時間。',
      '把較少改變的指令放在 Dockerfile 上方，經常改變的指令放在下方。',
    ],
    exampleLanguage: 'dockerfile',
    exampleCode:
      "FROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY src ./src\nCMD [\"python\", \"src/main.py\"]",
    practice: [
      '建置 image 兩次，觀察哪些 layers 使用了 cache。',
      '修改一個原始碼檔案後重新建置，觀察有多少 layers 重建。',
      '用 docker history myapp:latest 檢視 layer 歷史。',
    ],
    reasons: [
      '更快的建置能提升開發體驗。',
      '理解 caching 能避免不必要的 image 膨脹。',
    ],
    mistakes: [
      '在安裝相依之前就複製整個專案。',
      '因為包含每次建置都會變動的檔案，導致 cache 意外失效。',
    ],
    takeaways: [
      'Layer 順序直接影響建置速度。',
      '穩定的指令應該放在 Dockerfile 前面。',
    ],
    references: [
      {
        label: 'Docker docs · Dockerfile best practices',
        url: 'https://docs.docker.com/develop/dev-best-practices/dockerfile_best-practices/',
      },
      { label: 'Docker docs · Layer caching', url: 'https://docs.docker.com/build/cache/' },
    ],
  },
  {
    lesson: 6,
    slug: 'lesson-6',
    title: '選擇 base image 並管理 image 大小',
    summary: '挑選合適的 base images，並使用 multi-stage builds 縮小 image。',
    moduleTitle: '模組 2 · Images、layers 與 Dockerfile',
    intro: 'Base image 的選擇會影響安全性、大小與建置複雜度。',
    learningPoints: [
      '比較 full、slim 與 distroless base images。',
      '使用 multi-stage builds 區隔建置與執行環境。',
      '讓 runtime images 保持精簡且聚焦。',
    ],
    lessonNotes: [
      'Full images 包含許多工具，開發方便，但會增加攻擊面與大小。',
      'Slim 或 alpine 變體移除了不必要的套件，通常是 production 的好選擇。',
      'Multi-stage builds 讓你在一個 stage 編譯或安裝相依，再把 artifacts 複製到更小的最終 image。',
    ],
    exampleLanguage: 'dockerfile',
    exampleCode:
      "FROM golang:1.22 AS builder\nWORKDIR /app\nCOPY . .\nRUN CGO_ENABLED=0 go build -o app .\n\nFROM gcr.io/distroless/static-debian12\nCOPY --from=builder /app/app /app\nENTRYPOINT [\"/app\"]",
    practice: [
      '比較 node、node:alpine 與 node:slim 的大小。',
      '把一個單 stage Dockerfile 改寫成 multi-stage build。',
      '測量改寫前後的最終 image 大小。',
    ],
    reasons: [
      '更小的 images 部署更快，也能降低儲存成本。',
      '最小化的 base images 能減少需要安全更新的套件數量。',
    ],
    mistakes: [
      '應用程式只需要單一 binary，卻使用完整 OS image。',
      '等到部署變慢或昂貴時才開始注意 image 大小。',
    ],
    takeaways: [
      '選擇符合 runtime 需求的 base image。',
      'Multi-stage builds 是保持 production images 精簡的實務做法。',
    ],
    references: [
      { label: 'Docker docs · Multi-stage builds', url: 'https://docs.docker.com/build/building/multi-stage/' },
      { label: 'Google distroless images', url: 'https://github.com/GoogleContainerTools/distroless' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: 'Container 生命週期與必要指令',
    summary: '用實務指令啟動、停止、檢查、移除與除錯 containers。',
    moduleTitle: '模組 3 · Container 生命週期、資料與 volumes',
    intro: 'Containers 會依可預期的生命週期被建立、啟動、停止與移除。',
    learningPoints: [
      '建立、啟動、停止與移除 containers。',
      '檢查 container 狀態與 logs。',
      '重新啟動 containers 並理解 exit codes。',
    ],
    lessonNotes: [
      'docker run 會一步建立並啟動 container，而 docker create 與 docker start 則可將這兩個階段分開。',
      'docker logs 顯示 stdout 與 stderr，docker inspect 則回傳詳細詮釋資料。',
      'Container 會在其主程序結束時退出；exit code 能告訴你它是否成功。',
    ],
    exampleLanguage: 'bash',
    exampleCode:
      "docker run -d --name web nginx:alpine\ndocker pause web\ndocker unpause web\ndocker restart web\ndocker stop web\ndocker rm web",
    practice: [
      '執行一個 container，暫停它，恢復它，然後停止並移除。',
      '檢查一個 container 並找出它的 IP 位址與狀態。',
      '查看一個持續印出訊息的 container 的 logs。',
    ],
    reasons: [
      '維運任務需要控制 container 生命週期。',
      'Logs 與 inspect 輸出是除錯的重要依據。',
    ],
    mistakes: [
      '預設使用 docker kill 來停止 container。',
      '在腳本或 CI 中執行 container 時忽略 exit codes。',
    ],
    takeaways: [
      '一旦熟悉 CLI 指令，container 生命週期就變得直接明瞭。',
      'Logs 與 inspect 資料是首要除錯工具。',
    ],
    references: [
      {
        label: 'Docker docs · Container lifecycle',
        url: 'https://docs.docker.com/engine/reference/commandline/container/',
      },
      { label: 'Docker docs · docker logs', url: 'https://docs.docker.com/engine/reference/commandline/logs/' },
    ],
  },
  {
    lesson: 8,
    slug: 'lesson-8',
    title: '用 volumes 與 bind mounts 持久化資料',
    summary: '使用 named volumes 與 bind mounts，讓資料在 container 重啟後仍然存在。',
    moduleTitle: '模組 3 · Container 生命週期、資料與 volumes',
    intro: 'Containers 是短暫的，因此重要資料必須放在 container filesystem 之外。',
    learningPoints: [
      '使用 named volumes 保存 container 資料。',
      '使用 bind mounts 與 container 共用主機檔案。',
      '為每種使用情境選擇正確的掛載類型。',
    ],
    lessonNotes: [
      '預設情況下，寫入 container 內的檔案會在 container 被移除時消失。',
      'Named volumes 由 Docker 管理，適合資料庫與需要持久化的應用資料。',
      'Bind mounts 會將主機目錄對應到 container，適合開發時需要即時重新載入程式碼的情境。',
    ],
    exampleLanguage: 'bash',
    exampleCode:
      "docker volume create pgdata\ndocker run -d --name postgres -v pgdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=secret postgres:16\n\n# 本機開發用的 bind mount 範例\ndocker run --rm -v $(pwd):/app -w /app node:20-alpine npm test",
    practice: [
      '建立一個 named volume，並讓資料庫使用它。',
      '停止並移除 container，然後用同一個 volume 啟動新的 container，驗證資料仍然存在。',
      '使用 bind mount，在主機編輯檔案並觀察 container 內的變化。',
    ],
    reasons: [
      '資料庫與上傳檔案都需要持久化儲存。',
      'Bind mounts 能立即反映主機變更，加速開發。',
    ],
    mistakes: [
      '把重要資料存放在 container 的可寫層。',
      '在 production 中把應該由 Docker 管理的資料用 bind mount 處理。',
    ],
    takeaways: [
      'Volumes 能在 container 重啟間保護資料安全。',
      'Bind mounts 適合開發，named volumes 更適合持久化資料。',
    ],
    references: [
      { label: 'Docker docs · Volumes', url: 'https://docs.docker.com/engine/storage/volumes/' },
      { label: 'Docker docs · Bind mounts', url: 'https://docs.docker.com/engine/storage/bind-mounts/' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: '環境變數與 container 設定',
    summary: '透過環境變數與小型設定檔將配置傳入 containers。',
    moduleTitle: '模組 3 · Container 生命週期、資料與 volumes',
    intro: '設定應該在執行期傳入 container，而不是烘焙進 image。',
    learningPoints: [
      '用 docker run -e 設定環境變數。',
      '在 Docker Compose 中使用 .env 檔案。',
      '讓 secrets 遠離 images。',
    ],
    lessonNotes: [
      '環境變數讓你能在開發、staging、production 中重用同一個 image。',
      '直接把 secrets 寫進 Dockerfile 會把它們烘焙進 image layers，之後可能被取出。',
      '在本機開發時，.env 檔案能讓設定井然有序，而不需要修改 image。',
    ],
    exampleLanguage: 'bash',
    exampleCode:
      "docker run -d -e NODE_ENV=production -e PORT=3000 -p 3000:3000 myapp:latest\n\n# 或使用 env 檔案\ndocker run -d --env-file .env -p 3000:3000 myapp:latest",
    practice: [
      '用不同的環境變數執行同一個 image。',
      '建立 .env 檔案並傳給 container。',
      '驗證透過 -e 傳入的 secret 不會出現在 image layers 中。',
    ],
    reasons: [
      '外部化設定讓 images 能跨環境重用。',
      '避免 secrets 進入 images 能降低安全風險。',
    ],
    mistakes: [
      '在 Dockerfile 中硬編碼 API key 或密碼。',
      '把帶有真實 secrets 的 .env 檔案提交到版本控制。',
    ],
    takeaways: [
      '在執行期將設定傳入 containers。',
      '使用環境變數或 secrets 管理機制，讓 secrets 遠離 images。',
    ],
    references: [
      { label: 'Docker docs · Environment variables', url: 'https://docs.docker.com/build/building/variables/' },
      { label: 'Docker docs · Secrets', url: 'https://docs.docker.com/engine/swarm/secrets/' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'Docker networking 基礎',
    summary: '理解 bridge networks、port mapping 與 container 之間的通訊。',
    moduleTitle: '模組 4 · Networking 與多容器 Compose 應用',
    intro: 'Containers 經常需要彼此通訊，也會與外部世界連線。',
    learningPoints: [
      '理解預設 bridge network。',
      '用 -p 暴露 ports。',
      '在自訂 bridge network 上讓 containers 透過名稱通訊。',
    ],
    lessonNotes: [
      '預設情況下，位於預設 bridge network 的 containers 可以透過 IP 位址通訊，但不能透過 container 名稱。',
      '使用者定義的 bridge network 提供 DNS 探索能力，讓 containers 可以透過名稱互相連線。',
      '使用 -p 的 port mapping 會將 container port 發布到主機，讓外部客戶端連線。',
    ],
    exampleLanguage: 'bash',
    exampleCode:
      "docker network create mynet\ndocker run -d --name api --network mynet myapp-api:latest\ndocker run -d --name web --network mynet -p 8080:80 nginx:alpine\n# 在自訂 network 上，web container 可以透過名稱連到 api container。",
    practice: [
      '建立一個自訂 bridge network 並連接兩個 containers。',
      '驗證 containers 可以透過名稱互相 ping。',
      '發布一個 container port，並從主機瀏覽器存取。',
    ],
    reasons: [
      '網路對多容器應用至關重要。',
      '自訂 network 比 IP 位址更簡化服務探索。',
    ],
    mistakes: [
      '依賴 container 重啟後會變動的 IP 位址。',
      '不必要地暴露太多 ports 到主機。',
    ],
    takeaways: [
      '自訂 bridge networks 提供基於 DNS 的 container 通訊。',
      'Port mapping 將 container 服務連接到主機網路。',
    ],
    references: [
      { label: 'Docker docs · Networking overview', url: 'https://docs.docker.com/engine/network/' },
      { label: 'Docker docs · Bridge networks', url: 'https://docs.docker.com/engine/network/drivers/bridge/' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: '用 Docker Compose 協調多容器應用',
    summary: '在 compose 檔案中定義 services、networks 與 volumes，用於本機開發。',
    moduleTitle: '模組 4 · Networking 與多容器 Compose 應用',
    intro: 'Docker Compose 用單一宣告式檔案描述多容器應用。',
    learningPoints: [
      '撰寫包含 services、networks、volumes 的 docker-compose.yml。',
      '使用 docker compose up 與 docker compose down。',
      '為不同環境覆蓋設定。',
    ],
    lessonNotes: [
      'Compose 讓你在一個檔案中定義應用所需的所有 containers、networks 與 volumes。',
      'docker compose up 啟動整個 stack，docker compose down 停止並移除它。',
      '你可以使用多個 Compose 檔案或環境變數，為本機開發與 CI 自訂行為。',
    ],
    exampleLanguage: 'yaml',
    exampleCode:
      "services:\n  web:\n    build: ./web\n    ports:\n      - \"8080:80\"\n    depends_on:\n      - api\n    networks:\n      - backend\n  api:\n    build: ./api\n    environment:\n      - NODE_ENV=production\n    networks:\n      - backend\n  db:\n    image: postgres:16\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n    environment:\n      POSTGRES_PASSWORD: secret\n    networks:\n      - backend\n\nvolumes:\n  pgdata:\n\nnetworks:\n  backend:",
    practice: [
      '為一個具 web 前端與 API 後端的應用撰寫 Compose 檔案。',
      '用 docker compose up -d 啟動 stack 並查看 logs。',
      '用 docker compose down -v 停止並移除所有東西。',
    ],
    reasons: [
      'Compose 讓多容器開發變得可重複。',
      '單一檔案就能記錄整個應用拓撲。',
    ],
    mistakes: [
      '忘記定義 depends_on 或 networks，然後花時間除錯連線問題。',
      '直接把 production secrets 存放在 docker-compose.yml。',
    ],
    takeaways: [
      'Compose 將多容器設定轉換成宣告式設定。',
      '依環境覆蓋設定能讓基礎檔案保持乾淨。',
    ],
    references: [
      { label: 'Docker docs · Compose overview', url: 'https://docs.docker.com/compose/' },
      { label: 'Docker docs · Compose file reference', url: 'https://docs.docker.com/compose/compose-file/' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'Push、pull 與 production-ready 容器習慣',
    summary: '使用 Docker Hub 或 private registry，清楚標籤 images，並遵循 non-root 與最小 image 習慣。',
    moduleTitle: '模組 5 · Registry 流程與 production-ready 習慣',
    intro: '最後一課將本機 images 連接到 registries，並套用更安全的 container 執行習慣。',
    learningPoints: [
      '清楚標籤 images 並推送到 registry。',
      '從 Docker Hub 或 private registry 拉取並執行 images。',
      '套用 non-root 使用者與最小 image 習慣。',
    ],
    lessonNotes: [
      'Registry 儲存 images，讓它們能在開發者之間共享，也能部署到伺服器。',
      '清楚的標籤慣例（如語意化版本或 git hash）讓你知道 production 正在執行什麼。',
      '以 non-root 使用者執行 container，並使用最小 image，能降低安全漏洞的影響。',
    ],
    exampleLanguage: 'bash',
    exampleCode:
      "docker build -t myapp:1.0.0 .\ndocker tag myapp:1.0.0 registry.example.com/myapp:1.0.0\ndocker push registry.example.com/myapp:1.0.0\n\n# 在目標伺服器上\ndocker pull registry.example.com/myapp:1.0.0\ndocker run -d --user 1000:1000 --read-only registry.example.com/myapp:1.0.0",
    practice: [
      '建立 Docker Hub 帳號並推送一個 private image。',
      '在另一台機器或移除本機副本後拉取該 image。',
      '用 --user 執行 container 並檢視執行中的使用者。',
    ],
    reasons: [
      'Registries 讓部署流程變得可靠。',
      'Non-root 與 read-only containers 能降低安全風險。',
    ],
    mistakes: [
      '只使用 latest 標籤，導致 rollback 與稽核困難。',
      '沒有充分理由就用 root 執行 production containers。',
    ],
    takeaways: [
      '清楚的標籤與 registries 是發布 images 的基礎。',
      'Production containers 應以最小權限與最小 image 執行。',
    ],
    references: [
      {
        label: 'Docker docs · Push and pull images',
        url: 'https://docs.docker.com/get-started/docker-concepts/building-images/build-tag-and-publish-an-image/',
      },
      { label: 'Docker docs · Security best practices', url: 'https://docs.docker.com/develop/security-best-practices/' },
    ],
  },
];

export function getDockerLessons() {
  return dockerLessons;
}

export function getDockerLessonBySlug(slug: string) {
  return dockerLessons.find((lesson) => lesson.slug === slug) ?? null;
}
