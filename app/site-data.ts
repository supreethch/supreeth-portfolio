const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const sitePath = (path: string) => `${basePath}${path}`;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience/" },
  { label: "Projects", href: "/projects/" },
  { label: "Stack", href: "/stack/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" }
];

export const snapshots = [
  { label: "University of Michigan", value: "Computer Science · Junior" },
  { label: "OneStream Software", value: "AI Product and Engineering Intern" },
  { label: "Ann Arbor, Michigan", value: "Based in" }
];

export const education = [
  { code: "EECS 201", title: "Computer Science Pragmatics" },
  { code: "EECS 203", title: "Discrete Mathematics" },
  { code: "EECS 280", title: "Programming and Introductory Data Structures" },
  { code: "EECS 281", title: "Data Structures and Algorithms" },
  { code: "EECS 370", title: "Introduction to Computer Organization" },
  { code: "EECS 376", title: "Foundations of Computer Science" },
  { code: "EECS 482", title: "Introduction to Operating Systems" },
  { code: "EECS 484", title: "Database Management Systems" },
  { code: "EECS 485", title: "Web Systems" },
  { code: "EECS 491", title: "Introduction to Distributed Systems" },
  { code: "EECS 493", title: "User Interface Development" },
  { code: "EECS 497", title: "Human Centered Software Design and Development" },
  { code: "EECS 498 016", title: "Applied Agentic Software Engineering" },
  { code: "ROB 102", title: "Introduction to AI Programming" },
  { code: "MATH 214", title: "Applied Linear Algebra" },
  { code: "MATH 215", title: "Multivariable and Vector Calculus" }
];

export const experiences = [
  {
    role: "AI Product and Engineering Intern",
    company: "OneStream Software",
    location: "Birmingham, Michigan",
    period: "Summer 2026",
    summary:
      "I worked on the machine learning behind OneStream's Xperiflow forecasting platform, on the AI and Operational Analytics team. Consultants had been hand-picking the input signals for every forecast, days of work per engagement and easy to get wrong. I automated that step to under two hours and built the pipeline that ranks candidate signals per forecast target using per-target lag selection, LassoCV, and Granger tests. Rebuilding how the pipeline scored a signal's contribution took true-driver recall from 2.2 percent to 90.3 percent at full precision, measured against a suite of deterministic ground-truth tests I wrote. The ranked output now runs as a tool the forecasting agent calls directly over MCP.",
    details: ["Screening automated: days to under two hours", "True-driver recall 2.2 to 90.3 percent", "Ranking pipeline exposed to the agent over MCP"]
  },
  {
    role: "Software Engineering Intern",
    company: "HCL Global Systems",
    location: "Farmington Hills, Michigan",
    period: "Summer 2025",
    summary:
      "I built an internal recruiting platform end to end to replace a spreadsheet-based process for matching consultants to open client roles. Its core is a FastAPI ranking engine that blends PostgreSQL keyword search, pgvector semantic retrieval, and rule-based reranking; recruiters rated 86 percent of its top-five results relevant, and 95 percent of searches return in under 240 milliseconds. On top of it sits a role-based React dashboard with PII protection, audit logging, and a Dockerized CI/CD pipeline, now serving more than a thousand searches a week at 99.9 percent uptime. Median time to shortlist a role dropped from 45 minutes to 8.",
    details: ["Time to shortlist: 45 to 8 minutes", "86 percent top-five relevance, sub-240 ms", "1,000+ searches a week at 99.9 percent uptime"]
  },
  {
    role: "Software Engineer Team Lead",
    company: "Michigan Data Science Team",
    location: "Ann Arbor, Michigan",
    period: "2024 to 2025",
    summary:
      "I led a team of seven building a system that forecasts United States air travel demand two years out, across 1,800 origin-destination markets that carry about 90 percent of national passenger volume. My work was the modeling core: a LightGBM panel model over 40-plus leakage-safe indicators with hierarchical reconciliation across the market tree. It cut forecast error from 21 percent to 13 percent against a seasonal baseline and reached 82 percent directional accuracy. Beyond the model, I set the team's technical direction and owned code review across the pipeline.",
    details: ["Led a team of seven", "Forecast error 21 to 13 percent", "1,800 origin-destination markets"]
  },
  {
    role: "Software Engineering Intern",
    company: "First Class Rentals",
    location: "Chicago, Illinois",
    summary:
      "I built the pricing and operations tooling for a 20-unit short-term rental portfolio, turning booking history into demand forecasts and automating the weekly reporting that had been done by hand. Over the internship, revenue rose 15 percent and occupancy went from 90 percent to 95 percent.",
    details: ["20-unit rental portfolio", "Revenue up 15 percent", "Occupancy 90 to 95 percent"]
  }
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  why: string;
  image?: string;
  imageAlt?: string;
  stack: string[];
  live?: string;
  github?: string;
  status?: string;
  published: boolean;
  challenge?: string;
  solution?: string;
  verification?: string;
  evidence: string[];
};

export const projects: Project[] = [
  {
    slug: "a2transit",
    title: "a2transit",
    category: "Transit routing",
    summary: "One journey planner across Ann Arbor's two bus networks",
    description:
      "a2transit plans a single door-to-door trip across both of Ann Arbor's bus systems, the city's TheRide and the university's MBus. It routes you onto whichever buses are actually running, walks you between stops when a transfer needs it, and folds live vehicle positions and delays into every result.",
    why:
      "TheRide and MBus cover the same city and act like the other one does not exist. Neither trip planner will route across the other, even where their stops share a street corner, so the fastest way from campus to downtown is often a transfer that no app will suggest. I make that trip constantly, and I wanted one search that treated the two networks as the single system riders actually use.",
    image: "/projects/a2transit.webp",
    imageAlt: "a2transit planning a route across a live map of Ann Arbor",
    stack: ["Python", "FastAPI", "PostgreSQL", "PostGIS", "Redis", "React", "MapLibre", "GTFS"],
    live: "https://a2transit.vercel.app",
    github: "https://github.com/supreethch/a2transit",
    published: true,
    challenge:
      "Routing runs on a cached RAPTOR engine over both feeds' timetables, but stitching in walking transfers broke it in two ways that only showed up on real data. One itinerary arrived on time yet left the rider two miles from the actual destination. Another invented a walking path that existed only because of the order rows came out of the database.",
    solution:
      "The fix was to keep ride state, walk state, and settled-parent state strictly separate, and to run every walking relaxation against a frozen snapshot of vehicle arrivals rather than a moving target. A second, slower Dijkstra engine runs the same queries against the same walking graph on every deploy, so any disagreement between the two is caught before it ships.",
    verification:
      "The walking graph carries 8,308 connections, 1,456 of them crossing between the two agencies, which are the transfers that make cross-network trips possible at all. Building a fresh timetable takes about 330 milliseconds; a warm query returns in about 4, roughly 19x faster than the Dijkstra engine it is checked against.",
    evidence: ["RAPTOR and Dijkstra cross-checked on real data", "8,308 walking links across two agencies", "~4 ms warm queries, ~19x over Dijkstra", "378 tests, live GTFS-Realtime feeds"]
  },
  {
    slug: "undrift",
    title: "Undrift",
    category: "Developer tools",
    summary: "Scores which of your skills are still current, from your commit history",
    description:
      "Undrift reads your public commit history, asks Claude which skill each commit exercised, and scores every skill on three axes: how fresh it is, how much evidence backs it, and whether your use of it is rising or fading. Every score links back to the exact commits behind it, and it will tell you the date a skill goes stale if you stop touching it.",
    why:
      "A skills section is a list of claims with no dates and no evidence. \"Python, React, AWS, Docker\" says nothing about whether you have touched any of it this year, and the decay is invisible while it happens: you find out a skill has gone rusty in an interview, not before. Undrift makes that visible from data you are already generating.",
    image: "/projects/undrift.webp",
    imageAlt: "Undrift dashboard showing skill freshness, depth, momentum, and forecasts",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "GitHub API", "GitHub Actions", "Claude"],
    live: "https://undrift-supreeth-chittaluri.vercel.app",
    github: "https://github.com/supreethch/undrift",
    published: true,
    challenge:
      "The hard part is keeping the language model out of the decisions that have to be reproducible. If it could label the same work \"Python\", \"python3\", and \"Py\" on different commits, every decay curve built on top would be noise. If it decided what counted as stale, the scores could be argued out of any answer.",
    solution:
      "So the model does exactly one job: map each commit to one skill from a fixed 32-item vocabulary, enforced by the response schema itself. Everything after that is plain arithmetic: an exponential decay weighted by commit age, summed per skill, squashed onto a 0 to 100 scale. Classification is batched 25 commits per call, which cut a full run from about $1.70 on Opus to about $0.09 on Haiku with identical labels, and any failed call falls back to a deterministic tagger.",
    verification:
      "On a 302-commit test corpus, Haiku reproduced Opus's labels exactly at a twentieth of the cost. The resume auditor, where you paste in a skills line and it checks each claim against your commits, was tested against a job description carrying a prompt-injection payload: the injection was ignored and only the two real skills came back.",
    evidence: ["Model constrained to a 32-skill enum", "Deterministic scoring, same answer every run", "302-commit run: $1.70 down to $0.09", "Prompt-injection tested and held"]
  },
  {
    slug: "commonground",
    title: "CommonGround",
    category: "Group recommendation",
    summary: "One playlist for a group, ranked on whoever it serves least",
    description:
      "CommonGround builds one shared playlist for a group of listeners and ranks it on the person it is serving worst, not on the group average. Every track carries a one-line reason generated from the same math that ranked it, and the room re-ranks live as people vote.",
    why:
      "The usual way to recommend for a group is to average everyone's taste, which reliably produces the playlist nobody chose and hides who it failed. Average a metalhead and a jazz fan and you get neither. CommonGround optimizes the floor instead: it reports how satisfied the least-served member is, names them, and lets the group watch the tradeoff move as they switch ranking modes.",
    image: "/projects/commonground.png",
    imageAlt: "A CommonGround room showing the ranking mode selector and a per-member satisfaction panel with the least-served listener highlighted",
    stack: ["Python", "scikit-learn", "NumPy", "FastAPI", "PostgreSQL", "WebSockets", "React", "TypeScript"],
    live: "https://commonground-alpha.vercel.app",
    github: "https://github.com/supreethch/commonground",
    published: true,
    challenge:
      "A group ranker is easy to build and hard to trust. A hard veto that one unhappy listener can use to block a track has to be a real filter, not a penalty term, because any penalty large enough to stop nine-against-one would distort every other ranking too. And the fairness claims only mean something if they survive a dataset they were not tuned on.",
    solution:
      "The recommender is a hybrid of item-kNN and ALS collaborative filtering wrapped in a group ranker that scores a weighted mix of the group mean and the group minimum, then selects sequentially while weighing redundancy, artist repetition, and whose turn it is. Group metrics run as a paired bootstrap against an average-score baseline on two independent datasets. One early result that looked like a win was withdrawn after the second dataset reversed its sign.",
    verification:
      "Against a popularity baseline, the hybrid recommender hits 3.1x the top-10 precision while surfacing 69x more of the catalog. On group ranking, the fairness and repetition guarantees held on both datasets at no measurable cost to accuracy: veto violations and worst-artist share down, predicted floor up. Playlists build in about 16 milliseconds.",
    evidence: ["3.1x precision, 69x catalog coverage over popularity", "Fairness gains held on two datasets", "Hard veto as a filter, not a penalty", "~16 ms playlists, 264 tests"]
  },
  {
    slug: "pulse",
    title: "Pulse",
    category: "Market intelligence",
    summary: "Flags stock chatter that is unusual for that specific ticker",
    description:
      "Pulse watches Reddit, Hacker News, and financial news RSS for stock mentions, scores the sentiment around each one, and compares every ticker against its own rolling history. It alerts only when the volume and the mood of a ticker both break from that ticker's normal, not from a global threshold.",
    why:
      "r/wallstreetbets mentions NVDA forty times an hour on a slow day. Most sentiment tools threshold on how positive a post reads, which buries the actual signal, a small-cap nobody discussed yesterday showing up forty times today, under the noise from names that are always loud. The question worth answering is not whether the mood is positive but whether it is unusual for this ticker.",
    image: "/projects/pulse.webp",
    imageAlt: "Pulse dashboard showing market sentiment and mention volume",
    stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "React", "Gemini", "Server-Sent Events"],
    live: "https://pulse-b8zd.onrender.com",
    github: "https://github.com/supreethch/pulse",
    published: true,
    challenge:
      "Every design decision was really a spend decision. Sending every post to a language model to check for a ticker would cost a fortune and mostly return nothing. And a signal that only refreshes when a visitor clicks a button quietly goes stale while old posts pile up safely in the queue.",
    solution:
      "A regex plus the SEC's official symbol list proposes ticker candidates before any model call, so nearly half of all ingested posts are resolved for free. Volume and sentiment are scored as separate z-scores, and only a volume surge that also moves the mood earns an alert, since a spike with flat sentiment is usually a scheduled news cycle. Scoring runs every 30 minutes, coordinated with manual runs through a single database lock, and every model call, retries included, reserves budget against one rolling daily ceiling.",
    verification:
      "The prefilter drops about 45 percent of ingested posts before they reach Gemini. The z-score detector runs at a 0.05 to 0.20 percent false-positive rate on 3x volume spikes. Every post stores its source publication time, so a stale item pulled off the queue can never be shown as breaking news, and the whole system runs at no ongoing cost.",
    evidence: ["45 percent of posts resolved before the model", "0.05 to 0.20 percent false-positive rate", "Per-ticker baselines, not global thresholds", "262 tests, four independent spend brakes"]
  },
  {
    slug: "miniredis",
    title: "MiniRedis",
    category: "Systems engineering",
    summary: "A Redis-style server built to learn concurrency by breaking it",
    description:
      "A Redis-style server that handles concurrent TCP clients with key expiration, LRU eviction, append-only persistence, and six of the core Redis commands.",
    why:
      "Reading about reader-writer locks and cache eviction is not the same as designing them, running them under load, and watching where they fail. MiniRedis is the version where I own every line.",
    stack: ["C++20", "TCP/IP", "Multithreading", "CMake"],
    status: "Coming soon",
    published: false,
    evidence: ["Concurrent TCP clients", "Reader-writer locks", "Expiration and LRU eviction", "Append-only persistence"]
  }
];

const icon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@2.16.0/icons/${path}`;

export const stackGroups = [
  { name: "Languages", skills: [
    { name: "C++", icon: icon("cplusplus/cplusplus-original.svg") },
    { name: "Python", icon: icon("python/python-original.svg") },
    { name: "TypeScript", icon: icon("typescript/typescript-original.svg") },
    { name: "JavaScript", icon: icon("javascript/javascript-original.svg") },
    { name: "SQL", icon: icon("postgresql/postgresql-original.svg") }
  ] },
  { name: "Frontend", skills: [
    { name: "React", icon: icon("react/react-original.svg") },
    { name: "Next.js", icon: icon("nextjs/nextjs-original.svg") },
    { name: "HTML", icon: icon("html5/html5-original.svg") },
    { name: "CSS", icon: icon("css3/css3-original.svg") }
  ] },
  { name: "Backend and APIs", skills: [
    { name: "FastAPI", icon: icon("fastapi/fastapi-original.svg") },
    { name: "Node.js", icon: icon("nodejs/nodejs-original.svg") },
    { name: "Express", icon: icon("express/express-original.svg") }
  ], extra: "REST APIs · Server Sent Events · WebSockets" },
  { name: "Data and Storage", skills: [
    { name: "PostgreSQL", icon: icon("postgresql/postgresql-original.svg") },
    { name: "Redis", icon: icon("redis/redis-original.svg") },
    { name: "SQLite", icon: icon("sqlite/sqlite-original.svg") },
    { name: "Pandas", icon: icon("pandas/pandas-original.svg") },
    { name: "NumPy", icon: icon("numpy/numpy-original.svg") }
  ], extra: "PostGIS · Supabase · SQLAlchemy" },
  { name: "Machine Learning", skills: [
    { name: "PyTorch", icon: icon("pytorch/pytorch-original.svg") },
    { name: "TensorFlow", icon: icon("tensorflow/tensorflow-original.svg") }
  ], extra: "Gemini · Applied AI · Statistical detection" },
  { name: "Infrastructure and Tools", skills: [
    { name: "Docker", icon: icon("docker/docker-original.svg") },
    { name: "AWS", icon: icon("amazonwebservices/amazonwebservices-original-wordmark.svg") },
    { name: "Google Cloud", icon: icon("googlecloud/googlecloud-original.svg") },
    { name: "Git", icon: icon("git/git-original.svg") },
    { name: "GitHub", icon: icon("github/github-original.svg") },
    { name: "CMake", icon: icon("cmake/cmake-original.svg") },
    { name: "Linux", icon: icon("linux/linux-original.svg") }
  ] }
];

export const aboutStories = [
  { id: "friends", files: ["friends-1.webp", "friends-2.webp"], alts: ["Supreeth at an amusement park with friends", "Supreeth and friends together in the city at night"], caption: "Always love hanging out with my friends" },
  { id: "pizza", files: ["pizza.webp"], alts: ["Pizza at L’Industrie Pizzeria in New York City"], caption: "Always chasing the next great meal, this one’s at L’Industrie Pizzeria in NYC" },
  { id: "basketball", files: ["basketball.webp"], alts: ["An outdoor basketball hoop under the evening sky"], caption: "Play basketball often" },
  { id: "travel", files: ["la-sunset-1.webp", "la-sunset-2.webp"], alts: ["An orange sunset over the Pacific Ocean in Los Angeles", "A sunset over the hills of Los Angeles"], caption: "Love traveling, these are some sunsets from LA, California" },
  { id: "big-house", files: ["big-house.webp"], alts: ["Michigan football from the front row at the Big House"], caption: "Love catching games at the Big House" },
  { id: "concert", files: ["concert.webp"], alts: ["A concert arena filled with orange lights"], caption: "Big fan of live music" }
];
