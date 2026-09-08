const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const sitePath = (path: string) => `${basePath}${path}`;

export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" }
];

export const experiences = [
  {
    role: "AI Product and Engineering Intern",
    company: "OneStream Software",
    location: "Birmingham, Michigan",
    period: "Summer 2026",
    highlights: [
      "Built a Python pipeline ranking 300+ forecast signals with LassoCV and Granger causality tests.",
      "Cut screening from days to under 2 hours for 230+ consultants; raised true-driver recall from 2.2% to 90.3% at 100% precision."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "HCL Global Systems",
    location: "Farmington Hills, Michigan",
    period: "Summer 2025",
    highlights: [
      "Built a FastAPI, PostgreSQL, and pgvector recruiting platform that cut shortlisting from 45 to 8 minutes.",
      "Served 1,000+ weekly searches at 99.9% uptime, with 86% top-five relevance and 95% under 240 ms."
    ]
  },
  {
    role: "Software Engineer Team Lead",
    company: "Michigan Data Science Team",
    location: "Ann Arbor, Michigan",
    period: "2024–2025",
    highlights: [
      "Led seven engineers forecasting demand across 1,800 U.S. air-travel markets with LightGBM.",
      "Reduced forecast error from 21% to 13% and reached 82% directional accuracy."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "First Class Rentals",
    location: "Chicago, Illinois",
    highlights: [
      "Built demand forecasting and reporting tools for a 20-unit portfolio, lifting revenue 15% and occupancy from 90% to 95%."
    ]
  }
];

export type Project = {
  title: string;
  category: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  stack: string[];
  evidence: string[];
  live?: string;
  github?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "a2transit",
    category: "Transit routing",
    summary: "One route search across Ann Arbor’s city and university bus networks.",
    image: "/projects/a2transit.webp",
    imageAlt: "a2transit planning a route across a live map of Ann Arbor",
    stack: ["Python", "FastAPI", "PostGIS", "Redis", "React", "GTFS"],
    evidence: ["8,308 walking links", "~4 ms warm queries"],
    live: "https://a2transit.vercel.app",
    github: "https://github.com/supreethch/a2transit"
  },
  {
    title: "Undrift",
    category: "Developer tools",
    summary: "Turns GitHub history into evidence-backed skill freshness and momentum scores.",
    image: "/projects/undrift.webp",
    imageAlt: "Undrift dashboard showing skill freshness, depth, momentum, and forecasts",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "GitHub API", "Claude"],
    evidence: ["302-commit evaluation", "$1.70 → $0.09 per run"],
    live: "https://undrift-supreeth-chittaluri.vercel.app",
    github: "https://github.com/supreethch/undrift"
  },
  {
    title: "CommonGround",
    category: "Group recommendation",
    summary: "Builds shared playlists around the least-satisfied listener, not the group average.",
    image: "/projects/commonground.png",
    imageAlt: "CommonGround room with ranking controls and per-member satisfaction",
    stack: ["Python", "scikit-learn", "FastAPI", "PostgreSQL", "WebSockets", "React"],
    evidence: ["3.1× precision vs. popularity", "~16 ms playlists"],
    live: "https://commonground-alpha.vercel.app",
    github: "https://github.com/supreethch/commonground"
  },
  {
    title: "Pulse",
    category: "Market intelligence",
    summary: "Finds stock chatter that is unusual for a ticker’s own history.",
    image: "/projects/pulse.webp",
    imageAlt: "Pulse dashboard showing market sentiment and mention volume",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "React", "Gemini", "SSE"],
    evidence: ["45% filtered before the LLM", "0.05–0.20% false positives"],
    live: "https://pulse-b8zd.onrender.com",
    github: "https://github.com/supreethch/pulse"
  },
  {
    title: "MiniRedis",
    category: "Systems engineering",
    summary: "A Redis-style C++ server with concurrent clients, TTLs, LRU eviction, and persistence.",
    stack: ["C++20", "TCP/IP", "Multithreading", "CMake"],
    evidence: ["52k+ operations per second", "Append-only persistence"],
    status: "Coming soon"
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
  { code: "EECS 498-016", title: "Applied Agentic Software Engineering" },
  { code: "ROB 102", title: "Introduction to AI Programming" },
  { code: "MATH 214", title: "Applied Linear Algebra" },
  { code: "MATH 215", title: "Multivariable and Vector Calculus" }
];

export const aboutStories = [
  { id: "friends", files: ["friends-1.webp", "friends-2.webp"], alts: ["Supreeth at an amusement park with friends", "Supreeth and friends together in the city at night"], caption: "Always love hanging out with my friends" },
  { id: "pizza", files: ["pizza.webp"], alts: ["Pizza at L’Industrie Pizzeria in New York City"], caption: "Always chasing the next great meal, this one’s at L’Industrie Pizzeria in NYC" },
  { id: "basketball", files: ["basketball.webp"], alts: ["An outdoor basketball hoop under the evening sky"], caption: "Play basketball often" },
  { id: "travel", files: ["la-sunset-1.webp", "la-sunset-2.webp"], alts: ["An orange sunset over the Pacific Ocean in Los Angeles", "A sunset over the hills of Los Angeles"], caption: "Love traveling, these are some sunsets from LA, California" },
  { id: "big-house", files: ["big-house.webp"], alts: ["Michigan football from the front row at the Big House"], caption: "Love catching games at the Big House" },
  { id: "concert", files: ["concert.webp"], alts: ["A concert arena filled with orange lights"], caption: "Big fan of live music" }
];
