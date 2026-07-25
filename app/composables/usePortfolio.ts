export interface Experience {
  title: string
  company: string
  location: string
  date: string
  startYear: string
  description: string
  technologies: string[]
}

export interface Project {
  title: string
  description: string
  languages: string[]
  github?: string
  link?: string
  status?: string
  showTradingPercent?: boolean
}

export interface SocialLink {
  label: string
  href: string
  handle?: string
}

export interface Hobby {
  name: string
  detail: string
  tag: string
}

export interface Skill {
  name: string
  ext: string
  category: "lang" | "frontend" | "backend" | "data" | "infra"
  size: string
  mtime: string
  note: string
}

export function usePortfolio() {
  const name = "Holden Malinchock"
  const role = "Senior Full Stack Software Engineer"
  const company = "3 Reasons LLC"
  const location = "Charleston, SC"
  const email = "digits_jigs.07@icloud.com"
  const tagline = "I build apps, secure pipelines, and the occasional dev tool."

  const social: SocialLink[] = [
    { label: "GitHub", href: "https://github.com/HoldenMalinchock", handle: "HoldenMalinchock" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/holden-malinchock-0bbbb6140/", handle: "holden-malinchock" },
    { label: "Email", href: `mailto:${email}`, handle: email },
    { label: "Blog", href: "https://holden-blog.hmalinch.deno.net", handle: "holden-blog" },
  ]

  const nowBlurb =
    "Building secure pipelines and automation strategies at 3 Reasons LLC, shipping full-stack TypeScript and refining my auto-trading bot. Outside of work: deploying to the edge, learning more about market microstructure and re-reading the Pragmatic Programmer."

  const nowItems = [
    { label: "Building", detail: "trading applications and utilities" },
    { label: "Working with", detail: "TypeScript, Nuxt 4, Deno Deploy" },
    { label: "Learning", detail: "agent orchestration and MCP servers" },
    { label: "Based in", detail: "Charleston, SC" },
  ]

  const experiences: Experience[] = [
    {
      title: "Senior Full Stack Software Engineer",
      company: "3 Reasons LLC",
      location: "Charleston, SC",
      date: "2026 — Present",
      startYear: "2026",
      description:
        "Designing and building modern full-stack applications, driving technical direction and delivering high-impact features with a focus on performance, DX, and clean architecture.",
      technologies: ["TypeScript", "Python", "DevSecOps", "Elasticsearch"],
    },
    {
      title: "Full Stack Software Engineer",
      company: "Adapt Forward",
      location: "Charleston, SC",
      date: "2024 — 2026",
      startYear: "2024",
      description:
        "Led a small team of developers across Nuxt, TypeScript and Python. Maintained a mid-scale Python application and delivered new greenfield apps from architecture through deployment.",
      technologies: ["TypeScript", "Python", "DevSecOps", "Elasticsearch"],
    },
    {
      title: "Full Stack Software Engineer",
      company: "Praxis Engineering",
      location: "Chantilly, VA",
      date: "2022 — 2024",
      startYear: "2022",
      description:
        "Built the data analytics surface of a large-scale Vue application, including multiple custom components for advanced data visualization at scale.",
      technologies: ["Vue", "TypeScript", "Elasticsearch", "MongoDB"],
    },
    {
      title: "Software Engineer II",
      company: "Verisign",
      location: "Reston, VA",
      date: "2020 — 2022",
      startYear: "2020",
      description:
        "Operations engineering: upgraded and maintained a mid-scale Python application from Python 2 to 3, and designed and built an automated firewall rule system.",
      technologies: ["Python", "Flask", "Jenkins", "Groovy"],
    },
  ]

  const skills: Skill[] = [
    { name: "typescript", ext: "ts", category: "lang", size: "48K", mtime: "Jul 20 09:14", note: "default language" },
    { name: "nuxt", ext: "mjs", category: "frontend", size: "36K", mtime: "Jul 18 16:02", note: "app shell of choice" },
    { name: "vue", ext: "vue", category: "frontend", size: "34K", mtime: "Jul 18 15:41", note: "UI composition" },
    { name: "deno", ext: "ts", category: "backend", size: "28K", mtime: "Jul 12 11:20", note: "edge + scripts" },
    { name: "python", ext: "py", category: "lang", size: "31K", mtime: "Jul  9 08:55", note: "services + ops" },
    { name: "tailwind", ext: "css", category: "frontend", size: "18K", mtime: "Jul  7 19:33", note: "utility styling" },
    { name: "node", ext: "js", category: "backend", size: "24K", mtime: "Jun 28 13:10", note: "tooling + APIs" },
    { name: "postgres", ext: "sql", category: "data", size: "22K", mtime: "Jun 21 10:44", note: "relational core" },
    { name: "elasticsearch", ext: "json", category: "data", size: "27K", mtime: "Jun 14 17:05", note: "search + analytics" },
    { name: "docker", ext: "yml", category: "infra", size: "16K", mtime: "May 30 12:18", note: "containers" },
  ]

  const stack = [
    "TypeScript",
    "Vue",
    "Nuxt",
    "Python",
    "Deno",
    "Node.js",
    "Postgres",
    "Docker",
    "Tailwind",
    "Elasticsearch",
  ]

  const projects: Project[] = [
    {
      title: "Polymarket Insider Screener",
      description:
        "Screens Polymarket for accounts likely trading on inside information. Ranks wallets on a weighted composite of weak signals — sub-topic concentration, alpha, stealth-band sizing, and a net-profitability gate — backed by on-chain funding forensics (multi-hop funder tracing) and Sybil-cluster detection across topics and the leaderboard.",
      languages: ["TypeScript", "Nuxt", "Deno", "Polygon", "Deno Deploy"],
      status: "In progress",
    },
    {
      title: "Trading Dashboard",
      description:
        "Live dashboard for my Auto Trader: portfolio value and all-time return up top, a full holdings table with cost basis and per-position P&L, and a running log of executed trades.",
      languages: ["TypeScript", "Nuxt", "Deno", "Deno Deploy"],
      github: "https://github.com/HoldenMalinchock/trading-dashboard",
      link: "https://trading-dashboard.hmalinch.deno.net",
    },
    {
      title: "Auto Trader & Analyzer",
      description:
        "Connects to the Alpaca API and runs daily to analyze stocks and place trades based on a set of strategy signals. The all-time return shown is from this bot — visualized in the Trading Dashboard.",
      languages: ["TypeScript", "Deno", "Deno Deploy"],
      github: "https://github.com/HoldenMalinchock/trades",
      status: "Live",
      showTradingPercent: true,
    },
    {
      title: "Algorithm Visualizer",
      description:
        "An interactive sandbox for visualizing classic algorithms step-by-step. Great for refreshing fundamentals or teaching them.",
      languages: ["Vue", "Nuxt", "TypeScript"],
      github: "https://github.com/HoldenMalinchock/algo",
      link: "https://algorithms.hmalinch.deno.net",
    },
  ]

  const hobbies: Hobby[] = [
    {
      name: "Pickleball",
      tag: "sport",
      detail: "Regular court time — quick hands, long rallies, and the occasional questionable line call.",
    },
    {
      name: "Markets",
      tag: "systems",
      detail: "Auto-trading bots, microstructure rabbit holes, and dashboards that make the P&L honest.",
    },
    {
      name: "Golf",
      tag: "sport",
      detail: "Slow walks, worse short game than I'd like to admit, still chasing a clean iron shot.",
    },
  ]

  const commands = [
    { name: "/whoami", summary: "bio + role", aliases: ["whoami", "about", "me"] },
    { name: "/now", summary: "what I'm focused on", aliases: ["now", "status"] },
    { name: "/experience", summary: "work history", aliases: ["experience", "work", "jobs", "cv"] },
    { name: "/skills", summary: "tools I reach for", aliases: ["skills", "stack", "tech"] },
    { name: "/projects", summary: "things I've shipped", aliases: ["projects", "work-samples", "builds"] },
    { name: "/blog", summary: "recent writing", aliases: ["blog", "writing", "posts"] },
    { name: "/hobbies", summary: "off-keyboard life", aliases: ["hobbies", "life", "fun"] },
    { name: "/contact", summary: "say hello", aliases: ["contact", "email", "hire"] },
    { name: "/social", summary: "links out", aliases: ["social", "links"] },
    { name: "/help", summary: "list commands", aliases: ["help", "?", "commands"] },
    { name: "/clear", summary: "clear the screen", aliases: ["clear", "cls"] },
    { name: "/ls", summary: "list available tools", aliases: ["ls", "dir"] },
  ] as const

  return {
    name,
    role,
    company,
    location,
    email,
    tagline,
    social,
    nowBlurb,
    nowItems,
    experiences,
    skills,
    stack,
    projects,
    hobbies,
    commands,
  }
}
