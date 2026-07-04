import type { CourseLessonArticle } from './goLessons';

export const dockerLessons: CourseLessonArticle[] = [
  {
    lesson: 1,
    slug: 'lesson-1',
    title: 'What Docker is and why containers matter',
    summary: 'Understand how containers package apps and why they improve portability.',
    moduleTitle: 'Module 1 · Docker foundations and first container',
    intro:
      'Containers package an application with everything it needs to run, so it behaves the same on your laptop and in production.',
    learningPoints: [
      'Understand the difference between containers and virtual machines.',
      'See how containers improve portability and consistency.',
      'Know when Docker is a good fit for a project.',
    ],
    lessonNotes: [
      'Before Docker, "it works on my machine" was a common problem because development and production environments drifted.',
      'A container shares the host kernel but packages its own filesystem, libraries, and dependencies.',
      'Containers start quickly and use fewer resources than full virtual machines, making them practical for local development and deployment.',
    ],
    exampleLanguage: 'bash',
    exampleCode: 'docker run hello-world\n# Expected output explains that Docker pulled and ran a tiny image.',
    practice: [
      'Read the Docker overview page and list three problems containers solve.',
      'Compare a VM diagram with a container diagram.',
      'Explain to a teammate why a container is lighter than a VM.',
    ],
    reasons: [
      'Consistent environments reduce deployment surprises.',
      'Lightweight containers make scaling and local testing cheaper.',
    ],
    mistakes: [
      'Treating Docker as just a packaging tool without understanding the runtime model.',
      'Running every service in a container when a simple binary or script is enough.',
    ],
    takeaways: [
      'Docker uses containers to package apps with their dependencies.',
      'Containers improve consistency between development and production.',
    ],
    references: [
      { label: 'Docker docs · What is Docker?', url: 'https://docs.docker.com/get-started/docker-overview/' },
      { label: 'Docker docs · Dockerfile reference', url: 'https://docs.docker.com/engine/reference/builder/' },
    ],
  },
  {
    lesson: 2,
    slug: 'lesson-2',
    title: 'Install Docker and run your first container',
    summary: 'Set up Docker locally and run a container from an existing image.',
    moduleTitle: 'Module 1 · Docker foundations and first container',
    intro: 'A working Docker installation is the foundation for every later lesson.',
    learningPoints: [
      'Install Docker Engine or Docker Desktop for your platform.',
      'Verify the installation with docker version and docker run.',
      'Understand the difference between the Docker daemon and the CLI.',
    ],
    lessonNotes: [
      'Docker Desktop is the easiest starting point on macOS and Windows because it includes the engine, CLI, and Compose.',
      'On Linux you can install Docker Engine directly and manage it with your distribution package manager.',
      'The docker CLI talks to the Docker daemon, which is responsible for building, running, and managing containers.',
    ],
    exampleLanguage: 'bash',
    exampleCode:
      "docker --version\ndocker run --rm -p 8080:80 nginx:alpine\n# Open http://localhost:8080, then press Ctrl+C to stop.",
    practice: [
      'Install Docker and run docker --version successfully.',
      'Run nginx:alpine and view the default page in a browser.',
      'Stop and remove the nginx container cleanly.',
    ],
    reasons: [
      'A verified local environment prevents confusing errors in later lessons.',
      'Knowing how to stop and remove containers keeps your machine tidy.',
    ],
    mistakes: [
      'Installing multiple conflicting Docker versions.',
      'Leaving unused containers and images running, which consume disk space.',
    ],
    takeaways: [
      'Docker Desktop or Docker Engine gives you the CLI and daemon you need.',
      'docker run is the fastest way to verify that Docker is working.',
    ],
    references: [
      { label: 'Docker docs · Install Docker Engine', url: 'https://docs.docker.com/engine/install/' },
      { label: 'Docker docs · Docker Desktop', url: 'https://docs.docker.com/desktop/' },
    ],
  },
  {
    lesson: 3,
    slug: 'lesson-3',
    title: 'Images, containers, and the Docker CLI workflow',
    summary: 'Learn the relationship between images, running containers, and common CLI commands.',
    moduleTitle: 'Module 1 · Docker foundations and first container',
    intro:
      'This lesson clarifies the relationship between images and containers, and introduces the CLI commands you will use daily.',
    learningPoints: [
      'Understand that images are read-only templates and containers are running instances.',
      'List, inspect, and remove images and containers.',
      'Use docker exec to run commands inside a running container.',
    ],
    lessonNotes: [
      'An image contains the application code, runtime, libraries, and configuration needed to run a container.',
      'A container is a writable layer on top of an image; changes in the container do not affect the image.',
      'Common CLI commands include docker images, docker ps, docker logs, docker stop, and docker rm.',
    ],
    exampleLanguage: 'bash',
    exampleCode:
      "docker pull alpine:latest\ndocker run -d --name demo alpine:latest sleep 60\ndocker ps\ndocker exec demo echo \"hello from inside\"\ndocker stop demo\ndocker rm demo",
    practice: [
      'Pull the alpine image and list your local images.',
      'Run a detached container, inspect it, and then stop and remove it.',
      'Use docker exec to read a file inside a running container.',
    ],
    reasons: [
      'The image/container model is the core mental model for everything in Docker.',
      'Daily debugging requires inspecting and running commands inside containers.',
    ],
    mistakes: [
      'Confusing images and containers when cleaning up disk space.',
      'Forgetting to remove stopped containers before reusing a container name.',
    ],
    takeaways: [
      'Images are templates; containers are their running instances.',
      'The Docker CLI gives you full control over the container lifecycle.',
    ],
    references: [
      { label: 'Docker docs · Docker overview', url: 'https://docs.docker.com/get-started/docker-overview/' },
      { label: 'Docker docs · CLI reference', url: 'https://docs.docker.com/engine/reference/commandline/cli/' },
    ],
  },
  {
    lesson: 4,
    slug: 'lesson-4',
    title: 'Build a Docker image with a Dockerfile',
    summary: 'Write a Dockerfile, build an image, and run a container from it.',
    moduleTitle: 'Module 2 · Images, layers, and Dockerfiles',
    intro: 'Dockerfiles are the standard way to define how an image is built.',
    learningPoints: [
      'Write a Dockerfile with FROM, COPY, and CMD instructions.',
      'Build an image with docker build.',
      'Run a container from your custom image.',
    ],
    lessonNotes: [
      'A Dockerfile is a text file with instructions that Docker reads from top to bottom.',
      'FROM sets the base image, COPY adds application files, and CMD defines the default command.',
      'Each instruction creates a layer; the order of instructions affects build caching.',
    ],
    exampleLanguage: 'dockerfile',
    exampleCode:
      "FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nCMD [\"node\", \"server.js\"]",
    practice: [
      'Write a Dockerfile for a small static website or Node script.',
      'Build it with docker build -t myapp:latest .',
      'Run a container from myapp:latest and verify behavior.',
    ],
    reasons: [
      'Dockerfiles make image builds repeatable and version-controlled.',
      'Defining images as code enables collaboration and CI/CD integration.',
    ],
    mistakes: [
      'Putting COPY . . before RUN npm install, which invalidates the cache on every code change.',
      'Using a huge base image when a slim or alpine variant would work.',
    ],
    takeaways: [
      'A Dockerfile turns application code into a portable image.',
      'Layer order matters for build performance and cache reuse.',
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
    title: 'Understand image layers and caching',
    summary: 'See how each instruction creates a layer and how layer order affects build speed.',
    moduleTitle: 'Module 2 · Images, layers, and Dockerfiles',
    intro: 'Understanding layers helps you write faster builds and smaller images.',
    learningPoints: [
      'See how each Dockerfile instruction creates a layer.',
      'Use layer caching to speed up rebuilds.',
      'Inspect image layers with docker history.',
    ],
    lessonNotes: [
      'Each instruction in a Dockerfile creates a new layer in the resulting image.',
      'When you rebuild, Docker reuses layers that have not changed, which can dramatically reduce build time.',
      'Put instructions that change less often near the top of the Dockerfile and instructions that change often near the bottom.',
    ],
    exampleLanguage: 'dockerfile',
    exampleCode:
      "FROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY src ./src\nCMD [\"python\", \"src/main.py\"]",
    practice: [
      'Build an image twice and notice which layers use the cache.',
      'Change one source file and rebuild to see how many layers rebuild.',
      'Inspect layer history with docker history myapp:latest.',
    ],
    reasons: [
      'Faster builds improve the developer experience.',
      'Understanding caching prevents unnecessary image bloat.',
    ],
    mistakes: [
      'Copying the entire project before installing dependencies.',
      'Busting the cache accidentally by including files that change on every build.',
    ],
    takeaways: [
      'Layer order directly affects build speed.',
      'Stable instructions should appear early in a Dockerfile.',
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
    title: 'Choose a base image and manage image size',
    summary: 'Pick appropriate base images and use multi-stage builds to keep images small.',
    moduleTitle: 'Module 2 · Images, layers, and Dockerfiles',
    intro: 'Base image selection affects security, size, and build complexity.',
    learningPoints: [
      'Compare full, slim, and distroless base images.',
      'Use multi-stage builds to separate build and runtime environments.',
      'Keep runtime images small and focused.',
    ],
    lessonNotes: [
      'Full images include many tools and are convenient for development, but they increase attack surface and size.',
      'Slim or alpine variants remove unnecessary packages and are often good choices for production.',
      'Multi-stage builds let you compile or install dependencies in one stage and copy only the artifacts into a smaller final image.',
    ],
    exampleLanguage: 'dockerfile',
    exampleCode:
      "FROM golang:1.22 AS builder\nWORKDIR /app\nCOPY . .\nRUN CGO_ENABLED=0 go build -o app .\n\nFROM gcr.io/distroless/static-debian12\nCOPY --from=builder /app/app /app\nENTRYPOINT [\"/app\"]",
    practice: [
      'Compare the sizes of node, node:alpine, and node:slim.',
      'Convert a single-stage Dockerfile into a multi-stage build.',
      'Measure the final image size before and after the change.',
    ],
    reasons: [
      'Smaller images deploy faster and reduce storage costs.',
      'Minimal base images reduce the number of packages that need security updates.',
    ],
    mistakes: [
      'Using a full OS image when the application only needs a single binary.',
      'Ignoring image size until deployment becomes slow or expensive.',
    ],
    takeaways: [
      'Choose base images that match your runtime needs.',
      'Multi-stage builds are a practical way to keep production images small.',
    ],
    references: [
      { label: 'Docker docs · Multi-stage builds', url: 'https://docs.docker.com/build/building/multi-stage/' },
      { label: 'Google distroless images', url: 'https://github.com/GoogleContainerTools/distroless' },
    ],
  },
  {
    lesson: 7,
    slug: 'lesson-7',
    title: 'Container lifecycle and essential commands',
    summary: 'Start, stop, inspect, remove, and debug containers with practical commands.',
    moduleTitle: 'Module 3 · Container lifecycle, data, and volumes',
    intro: 'Containers are created, started, stopped, and removed in a predictable lifecycle.',
    learningPoints: [
      'Create, start, stop, and remove containers.',
      'Inspect container state and logs.',
      'Restart containers and understand exit codes.',
    ],
    lessonNotes: [
      'docker run creates and starts a container in one step, while docker create and docker start let you separate those phases.',
      'docker logs shows stdout and stderr, and docker inspect returns detailed metadata.',
      'A container exits when its main process exits; the exit code tells you whether it succeeded or failed.',
    ],
    exampleLanguage: 'bash',
    exampleCode:
      "docker run -d --name web nginx:alpine\ndocker pause web\ndocker unpause web\ndocker restart web\ndocker stop web\ndocker rm web",
    practice: [
      'Run a container, pause it, unpause it, and then stop and remove it.',
      'Inspect a container and find its IP address and state.',
      'View logs from a container that prints messages in a loop.',
    ],
    reasons: [
      'Operational tasks require controlling the container lifecycle.',
      'Logs and inspect output are essential for debugging.',
    ],
    mistakes: [
      'Using docker kill as the default way to stop a container.',
      'Ignoring exit codes when running containers in scripts or CI.',
    ],
    takeaways: [
      'The container lifecycle is straightforward once you know the CLI commands.',
      'Logs and inspect data are your first debugging tools.',
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
    title: 'Persist data with volumes and bind mounts',
    summary: 'Use named volumes and bind mounts so data survives container restarts.',
    moduleTitle: 'Module 3 · Container lifecycle, data, and volumes',
    intro: 'Containers are ephemeral, so important data must live outside the container filesystem.',
    learningPoints: [
      'Use named volumes for persistent container data.',
      'Use bind mounts to share host files with a container.',
      'Choose the right mount type for each use case.',
    ],
    lessonNotes: [
      'By default, files written inside a container are lost when the container is removed.',
      'Named volumes are managed by Docker and are ideal for databases and persistent application data.',
      'Bind mounts map a host directory into a container and are useful for development when you want live code reloading.',
    ],
    exampleLanguage: 'bash',
    exampleCode:
      "docker volume create pgdata\ndocker run -d --name postgres -v pgdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=secret postgres:16\n\n# Bind mount example for local development\ndocker run --rm -v $(pwd):/app -w /app node:20-alpine npm test",
    practice: [
      'Create a named volume and run a database that uses it.',
      'Stop and remove the container, then start a new one with the same volume and verify the data persists.',
      'Use a bind mount to edit a file on your host and see the change inside the container.',
    ],
    reasons: [
      'Persistent storage is required for databases and uploaded files.',
      'Bind mounts speed up development by reflecting host changes immediately.',
    ],
    mistakes: [
      'Storing important data in the writable container layer.',
      'Using bind mounts in production for data that should be managed by Docker.',
    ],
    takeaways: [
      'Volumes keep data safe across container restarts.',
      'Bind mounts are great for development, while named volumes are better for persistent data.',
    ],
    references: [
      { label: 'Docker docs · Volumes', url: 'https://docs.docker.com/engine/storage/volumes/' },
      { label: 'Docker docs · Bind mounts', url: 'https://docs.docker.com/engine/storage/bind-mounts/' },
    ],
  },
  {
    lesson: 9,
    slug: 'lesson-9',
    title: 'Environment variables and container configuration',
    summary: 'Pass configuration into containers with env vars and small config files.',
    moduleTitle: 'Module 3 · Container lifecycle, data, and volumes',
    intro: 'Configuration should be passed into containers rather than baked into images.',
    learningPoints: [
      'Set environment variables with docker run -e.',
      'Use .env files with Docker Compose.',
      'Keep secrets out of images.',
    ],
    lessonNotes: [
      'Environment variables let you reuse the same image across development, staging, and production.',
      'Putting secrets directly into a Dockerfile bakes them into image layers, where they can be extracted later.',
      'For local development, an .env file keeps configuration organized without modifying the image.',
    ],
    exampleLanguage: 'bash',
    exampleCode:
      "docker run -d -e NODE_ENV=production -e PORT=3000 -p 3000:3000 myapp:latest\n\n# Or with an env file\ndocker run -d --env-file .env -p 3000:3000 myapp:latest",
    practice: [
      'Run the same image with different environment variables.',
      'Create a .env file and pass it to a container.',
      'Verify that a secret set via -e does not appear in the image layers.',
    ],
    reasons: [
      'Externalized configuration makes images reusable across environments.',
      'Avoiding secrets in images reduces security risk.',
    ],
    mistakes: [
      'Hardcoding API keys or passwords in Dockerfiles.',
      'Committing .env files with real secrets into version control.',
    ],
    takeaways: [
      'Pass configuration into containers at runtime.',
      'Keep secrets out of images by using environment variables or secrets management.',
    ],
    references: [
      { label: 'Docker docs · Environment variables', url: 'https://docs.docker.com/build/building/variables/' },
      { label: 'Docker docs · Secrets', url: 'https://docs.docker.com/engine/swarm/secrets/' },
    ],
  },
  {
    lesson: 10,
    slug: 'lesson-10',
    title: 'Docker networking basics',
    summary: 'Understand bridge networks, port mapping, and container-to-container communication.',
    moduleTitle: 'Module 4 · Networking and multi-container apps with Compose',
    intro: 'Containers often need to communicate with each other and the outside world.',
    learningPoints: [
      'Understand the default bridge network.',
      'Expose ports with -p.',
      'Let containers communicate by name on a custom bridge network.',
    ],
    lessonNotes: [
      'By default, containers on the default bridge network can communicate by IP address, but not by container name.',
      'A user-defined bridge network gives containers DNS-based discovery so they can reach each other by name.',
      'Port mapping with -p publishes a container port to the host so external clients can connect.',
    ],
    exampleLanguage: 'bash',
    exampleCode:
      "docker network create mynet\ndocker run -d --name api --network mynet myapp-api:latest\ndocker run -d --name web --network mynet -p 8080:80 nginx:alpine\n# On the custom network, the web container can reach the api container by name.",
    practice: [
      'Create a custom bridge network and attach two containers.',
      'Verify that containers can ping each other by name.',
      'Publish a container port and access it from your host browser.',
    ],
    reasons: [
      'Networking is essential for multi-container applications.',
      'Custom networks simplify service discovery compared to IP addresses.',
    ],
    mistakes: [
      'Relying on IP addresses that change when containers restart.',
      'Exposing too many ports to the host unnecessarily.',
    ],
    takeaways: [
      'Custom bridge networks provide DNS-based container communication.',
      'Port mapping connects container services to the host network.',
    ],
    references: [
      { label: 'Docker docs · Networking overview', url: 'https://docs.docker.com/engine/network/' },
      { label: 'Docker docs · Bridge networks', url: 'https://docs.docker.com/engine/network/drivers/bridge/' },
    ],
  },
  {
    lesson: 11,
    slug: 'lesson-11',
    title: 'Orchestrate multi-container apps with Docker Compose',
    summary: 'Define services, networks, and volumes in a compose file for local development.',
    moduleTitle: 'Module 4 · Networking and multi-container apps with Compose',
    intro: 'Docker Compose describes multi-container applications in a single declarative file.',
    learningPoints: [
      'Write a docker-compose.yml with services, networks, and volumes.',
      'Use docker compose up and docker compose down.',
      'Override configuration for different environments.',
    ],
    lessonNotes: [
      'Compose lets you define all the containers, networks, and volumes for an application in one file.',
      'docker compose up starts the whole stack, and docker compose down stops and removes it.',
      'You can use multiple Compose files or environment variables to customize behavior for local development versus CI.',
    ],
    exampleLanguage: 'yaml',
    exampleCode:
      "services:\n  web:\n    build: ./web\n    ports:\n      - \"8080:80\"\n    depends_on:\n      - api\n    networks:\n      - backend\n  api:\n    build: ./api\n    environment:\n      - NODE_ENV=production\n    networks:\n      - backend\n  db:\n    image: postgres:16\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n    environment:\n      POSTGRES_PASSWORD: secret\n    networks:\n      - backend\n\nvolumes:\n  pgdata:\n\nnetworks:\n  backend:",
    practice: [
      'Write a Compose file for an app with a web frontend and an API backend.',
      'Start the stack with docker compose up -d and view logs.',
      'Stop and remove everything with docker compose down -v.',
    ],
    reasons: [
      'Compose makes multi-container development repeatable.',
      'A single file documents the entire application topology.',
    ],
    mistakes: [
      'Forgetting to define depends_on or networks and then debugging connection issues.',
      'Storing production secrets directly in docker-compose.yml.',
    ],
    takeaways: [
      'Compose turns multi-container setups into declarative configuration.',
      'Environment-specific overrides keep the base file clean.',
    ],
    references: [
      { label: 'Docker docs · Compose overview', url: 'https://docs.docker.com/compose/' },
      { label: 'Docker docs · Compose file reference', url: 'https://docs.docker.com/compose/compose-file/' },
    ],
  },
  {
    lesson: 12,
    slug: 'lesson-12',
    title: 'Push, pull, and production-ready container habits',
    summary: 'Use Docker Hub or a private registry, tag images clearly, and follow non-root and minimal-image habits.',
    moduleTitle: 'Module 5 · Registry workflow and production-ready habits',
    intro: 'The final lesson connects local images to registries and applies safer habits for running containers.',
    learningPoints: [
      'Tag images clearly and push them to a registry.',
      'Pull and run images from Docker Hub or a private registry.',
      'Apply non-root users and minimal-image habits.',
    ],
    lessonNotes: [
      'A registry stores images so they can be shared between developers and deployed to servers.',
      'Clear tagging conventions, such as semantic versions or git hashes, make it easier to know what is running in production.',
      'Running containers as a non-root user and using minimal images reduce the impact of security vulnerabilities.',
    ],
    exampleLanguage: 'bash',
    exampleCode:
      "docker build -t myapp:1.0.0 .\ndocker tag myapp:1.0.0 registry.example.com/myapp:1.0.0\ndocker push registry.example.com/myapp:1.0.0\n\n# On the target server\ndocker pull registry.example.com/myapp:1.0.0\ndocker run -d --user 1000:1000 --read-only registry.example.com/myapp:1.0.0",
    practice: [
      'Create a Docker Hub account and push a private image.',
      'Pull the image on a different machine or after removing the local copy.',
      'Run a container with --user and inspect the running user.',
    ],
    reasons: [
      'Registries enable reliable deployment workflows.',
      'Non-root and read-only containers reduce security risk.',
    ],
    mistakes: [
      'Using only latest tags, which makes rollbacks and auditing difficult.',
      'Running production containers as root without a good reason.',
    ],
    takeaways: [
      'Clear tags and registries are essential for shipping images.',
      'Production containers should run with least privilege and minimal images.',
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
