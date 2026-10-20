import type { TimelineEntry } from "./types.ts";

/** Newest first, like `git log`. Hashes are decorative. */
export const timeline: TimelineEntry[] = [
  {
    hash: "a7f3c21",
    date: "2026",
    message: "release: B.Sc. Computer Science",
    body: "Graduated from Hadassah Academic College. Ready for the first production codebase.",
    tags: ["milestone"],
  },
  {
    hash: "e19b04d",
    date: "Aug 2026",
    message: "feat: IncidentIQ + Layover Explorer",
    body: "AI-assisted incident analysis with FastAPI and React, and a Spring Boot travel platform with four external APIs.",
    tags: ["ai", "full-stack", "java"],
    projectSlug: "incidentiq",
  },
  {
    hash: "5c2d8e0",
    date: "Feb 2026",
    message: "feat: ChatRoom",
    body: "Secure Node.js chat app - sessions, bcrypt, ownership checks, optimized polling.",
    tags: ["web", "security"],
    projectSlug: "chatroom",
  },
  {
    hash: "9d40a6b",
    date: "Dec 2025",
    message: "feat: NBA Data Lake",
    body: "DuckDB + Parquet data lake, analytical SQL and a Streamlit dashboard.",
    tags: ["data"],
    projectSlug: "nba-data-lake",
  },
  {
    hash: "3b8f1aa",
    date: "May 2025",
    message: "feat: No One Left",
    body: "C++ / SFML combat game built around Strategy, State and Factory patterns and three AI types.",
    tags: ["c++", "game", "design-patterns"],
    projectSlug: "no-one-left",
  },
  {
    hash: "71ce5f9",
    date: "Jan 2025",
    message: "refactor: Bomberman -> SFML",
    body: "Rebuilt the terminal game with real-time graphics, levels and power-ups.",
    tags: ["c++", "oop"],
    projectSlug: "bomberman",
  },
  {
    hash: "0e6a2d3",
    date: "Nov 2024",
    message: "feat: Bomberman in the terminal",
    body: "First serious OOP project - a turn-based maze game in C++.",
    tags: ["c++"],
  },
  {
    hash: "c4419b7",
    date: "2023",
    message: "init: B.Sc. Computer Science",
    body: "Started at Hadassah Academic College: algorithms, data structures, OS, databases.",
    tags: ["education"],
  },
  {
    hash: "8a0f6e2",
    date: "2019 - 2022",
    message: "ops: Shift Manager, Israel Police SIGINT",
    body: "Led a 24/7 operations team in the Intelligence and Cyber Division. Decisions under pressure, information security, mentoring.",
    tags: ["leadership"],
  },
];
