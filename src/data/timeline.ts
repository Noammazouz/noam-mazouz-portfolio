import type { TimelineEntry } from "./types.ts";

/** Newest first. Plain titles — not git commit messages. */
export const timeline: TimelineEntry[] = [
  {
    date: "2026",
    title: "B.Sc. Computer Science",
    body: "Graduated from Hadassah Academic College.",
    tags: ["milestone"],
  },
  {
    date: "Aug 2026",
    title: "Layover Explorer",
    body: "Spring Boot travel platform that finds layover routes and nearby places using four external APIs.",
    tags: ["full-stack", "java"],
    projectSlug: "layover-explorer",
  },
  {
    date: "Feb 2026",
    title: "ChatRoom",
    body: "Secure Node.js chat app with sessions, password hashing, ownership checks, and live updates.",
    tags: ["web", "security"],
    projectSlug: "chatroom",
  },
  {
    date: "Dec 2025",
    title: "NBA Data Lake",
    body: "DuckDB and Parquet data lake, analytical SQL, and a Streamlit dashboard.",
    tags: ["data"],
    projectSlug: "nba-data-lake",
  },
  {
    date: "May 2025",
    title: "No One Left",
    body: "C++ and SFML combat game built around Strategy, State, and Factory patterns, with three enemy AI types.",
    tags: ["c++", "game"],
    projectSlug: "no-one-left",
  },
  {
    date: "Jan 2025",
    title: "Bomberman, with graphics",
    body: "Rebuilt the terminal game with real-time graphics, levels, and power-ups.",
    tags: ["c++"],
    projectSlug: "bomberman",
  },
  {
    date: "2023",
    title: "Started the degree",
    body: "Hadassah Academic College: algorithms, data structures, operating systems, and databases.",
    tags: ["education"],
  },
  {
    date: "2019 – 2022",
    title: "Shift Manager, Israel Police SIGINT",
    body: "Led a 24/7 operations team in the Intelligence and Cyber Division. Decisions under pressure, information security, and mentoring.",
    tags: ["leadership"],
  },
];
