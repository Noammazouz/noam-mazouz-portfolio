import type { Project } from "./types.ts";

const GH = "https://github.com/Noammazouz";

export const projects: Project[] = [
  {
    slug: "layover-explorer",
    title: "Layover Explorer",
    tagline: "Turn long layovers into city trips",
    year: "2026",
    context: "Degree project",
    team: "With Ofek Cohen",
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "MySQL / MariaDB",
      "Thymeleaf",
      "Caffeine",
    ],
    summary:
      "A Spring Boot web app that finds two-leg flight routes and then surfaces points of interest near each layover airport - museums, food, nightlife, nature - filtered by interest and layover duration.",
    problem:
      "Travellers with long layovers rarely know what is reachable in the time they have. The answer needs real route data, real places and realistic travel times.",
    highlights: [
      "Flight search over real OpenFlights data: 10,000+ airports and 67,000+ routes.",
      "POI discovery via OpenStreetMap (Overpass) with driving times from OSRM.",
      "Prestige-based POI ranking from Wikidata sitelinks and Wikipedia pageviews, enriched asynchronously.",
      "Two-phase search UI: flights render instantly, POIs stream in per airport.",
      "Strict USER / ADMIN role separation with Spring Security, BCrypt and CSRF protection.",
    ],
    architecture: [
      { layer: "Web", detail: "Spring MVC + Thymeleaf server-side rendering" },
      { layer: "Service", detail: "N-tier: Controller -> Service -> Repository -> Entity" },
      { layer: "Data", detail: "Spring Data JPA on MySQL / MariaDB, Caffeine caches" },
      { layer: "Async", detail: "@Async pools for prestige scoring and cache warming" },
    ],
    takeaways: [
      "Integrating four external APIs without blocking the user.",
      "Layered architecture that keeps business logic out of controllers.",
    ],
    repo: `${GH}/Layover_Explorer`,
    featured: true,
  },
  {
    slug: "no-one-left",
    title: "No One Left",
    tagline: "Top-down combat survival game in C++",
    year: "2025",
    context: "Degree project",
    team: "Team of four",
    stack: ["C++", "SFML", "OOP", "Design patterns"],
    summary:
      "An end-to-end survival game where a soldier must eliminate every enemy in a hostile, destructible environment while managing health, ammunition and bombs.",
    problem:
      "Games grow messy fast. The goal was an architecture where new enemies, weapons and pickups plug in without touching the core loop.",
    highlights: [
      "Modular OOP architecture built on Strategy, State and Factory patterns.",
      "Three enemy AI types: random movement, smart metrics-driven pathfinding and BFS player tracking.",
      "Weapon systems (rifle, machine gun, bazooka), bombs with area damage and destructible obstacles.",
      "Collision detection across player, enemies, projectiles and the environment.",
      "Full UI, sound effects and music.",
    ],
    architecture: [
      { layer: "Core", detail: "GameObject -> UpdateableObject / StaticObject hierarchy" },
      { layer: "Behavior", detail: "Strategy-based AI and weapons, State-driven game flow" },
      { layer: "Creation", detail: "Factory pattern for creating game objects" },
    ],
    takeaways: [
      "Design patterns as a tool for change, not decoration.",
      "Systematic debugging and testing of AI behavior.",
    ],
    repo: `${GH}/No-one-left`,
    video: "https://www.youtube.com/watch?v=DokEE1DdMGM",
    featured: true,
  },
  {
    slug: "nba-data-lake",
    title: "NBA Data Lake",
    tagline: "Big-data pipeline from raw tables to an analytics dashboard",
    year: "2026",
    context: "Big Data Analysis course",
    team: "With Ofek Cohen",
    stack: ["Python", "DuckDB", "DuckLake", "Parquet", "SQLite", "Streamlit", "Neo4j", "SQL"],
    summary:
      "A complete data pipeline over NBA data: a partitioned Parquet data lake, advanced analytical SQL, a graph model, and an interactive Streamlit dashboard served from a SQLite gold layer.",
    problem:
      "Answering real analytical questions - home court advantage, referee upsets, whether draft position predicts career length - requires a pipeline that scales beyond a single database.",
    highlights: [
      "Data lake built with DuckDB + DuckLake on Parquet, partitioned by year and month.",
      "Six complex analytical queries using CTEs, window functions, UNION ALL and CROSS JOIN.",
      "SQLite gold layer for fast dashboard serving.",
      "Streamlit dashboard with 12 visualizations (2 interactive), dark mode and a feedback system.",
      "Graph database modeling of player, team and game relationships.",
    ],
    architecture: [
      { layer: "Bronze", detail: "Raw SQLite source tables" },
      { layer: "Lake", detail: "DuckLake over partitioned Parquet files" },
      { layer: "Gold", detail: "Aggregated SQLite tables for serving" },
      { layer: "Serve", detail: "Streamlit + Matplotlib / Seaborn dashboard" },
    ],
    takeaways: [
      "Lakehouse-style layering and partitioning.",
      "Writing SQL that answers business questions.",
    ],
    repo: `${GH}/Big_Data_Project`,
    featured: true,
  },
  {
    slug: "chatroom",
    title: "ChatRoom",
    tagline: "Secure real-time chat web application",
    year: "2026",
    context: "Degree project",
    team: "With Ofek Cohen",
    stack: ["Node.js", "Express", "MariaDB", "EJS", "bcrypt", "Sessions"],
    summary:
      "A web chat app with a two-step registration flow, session-based authentication, message editing and deletion, live updates and debounced search.",
    problem:
      "Build a multi-user app where security and UX both matter: authentication, ownership checks and smooth updates without a heavy real-time stack.",
    highlights: [
      "bcrypt password hashing, server-side sessions and middleware-protected routes.",
      "Server-side ownership verification for edit and delete, with soft-delete for recovery.",
      "Optimized polling that only fetches changed messages and pauses when the tab is hidden.",
      "Debounced search, cross-tab logout detection and connection status indicator.",
    ],
    architecture: [
      { layer: "Web", detail: "Express + EJS templates" },
      { layer: "Auth", detail: "express-session, bcrypt, route guards" },
      { layer: "Data", detail: "MariaDB via ORM with paranoid (soft) deletes" },
    ],
    takeaways: [
      "Security as a default, not an add-on.",
      "Efficient polling as a pragmatic real-time strategy.",
    ],
    repo: `${GH}/ChatRoom`,
    featured: false,
  },
  {
    slug: "bomberman",
    title: "Bomberman",
    tagline: "From a terminal prototype to a full SFML game",
    year: "2025",
    context: "Degree project",
    team: "With Ofek Cohen",
    stack: ["C++", "SFML", "OOP"],
    summary:
      "A maze game built twice: first as a turn-based terminal version, then as a graphical SFML game with multiple levels, guards, power-ups and a scoring system.",
    problem:
      "Learning object-oriented design by evolving one game from console output to real-time graphics without rewriting everything.",
    highlights: [
      "Multiple levels loaded from files with increasing difficulty.",
      "Guards that chase the player, bombs that destroy rocks and guards.",
      "Power-ups: freeze guards, remove a guard, extra life, extra time.",
      "Resource manager for textures and sounds, menu and help screens.",
    ],
    architecture: [
      { layer: "Control", detail: "GameController owns the loop and all object interaction" },
      { layer: "Objects", detail: "Polymorphic GameObjects hierarchy" },
      { layer: "Assets", detail: "Central resource manager for textures and sounds" },
    ],
    takeaways: ["Encapsulation and single-responsibility in practice."],
    repo: `${GH}/Bomeberman_Project`,
    featured: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
