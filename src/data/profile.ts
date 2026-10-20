import type { Profile } from "./types.ts";

export const profile: Profile = {
  name: "Noam Mazouz",
  firstName: "Noam",
  role: "Software Developer",
  location: "Israel",
  tagline:
    "Computer Science graduate building well-architected software - from game engines to AI tooling.",
  intro:
    "I write clean, object-oriented systems in C++, Python, Java and TypeScript, and I stay calm when things break - a habit I picked up running a 24/7 intelligence operations shift.",
  about: [
    "I just completed my B.Sc. in Computer Science at Hadassah Academic College (2023-2026). Over the degree I built games in C++, a data lake for big-data analytics, full-stack web apps in Node.js and Spring Boot, and an AI-assisted incident response tool.",
    "Before university I served as a Shift Manager at the Operations Center of the Israel Police Intelligence and Cyber (SIGINT) Division. Leading a team in real time, under pressure and with strict information-security standards, shaped how I approach engineering: understand the system, separate facts from assumptions, and make clear decisions.",
    "I enjoy the part of software where architecture meets reality - designing modules that stay clean as features pile up, debugging methodically, and shipping things people can actually use.",
  ],
  facts: [
    { label: "Degree", value: "B.Sc. Computer Science" },
    { label: "Graduated", value: "2026" },
    { label: "Based in", value: "Israel" },
    { label: "Languages", value: "Hebrew, English" },
  ],
  education: {
    degree: "B.Sc. Computer Science",
    school: "Hadassah Academic College",
    period: "2023 - 2026",
    points: [
      "Algorithms, data structures, operating systems, databases (SQL), mathematics and data science.",
      "Hands-on with C++, C, Python, JS/TS and Java on Linux and Windows.",
      "Version control with Git/GitHub and AI-agent assisted workflows with Cursor.",
    ],
  },
  experience: [
    {
      role: "Shift Manager, Operations Center",
      org: "Intelligence and Cyber (SIGINT) Division, Israel Police",
      period: "2019 - 2022",
      points: [
        "Led a 24/7 operational team in a high-pressure intelligence environment, ensuring continuity, accuracy and rapid response during time-critical events.",
        "Coordinated with senior police and intelligence officials, synthesizing inputs from multiple systems to support real-time decisions.",
        "Made independent, high-stakes decisions under pressure, prioritizing tasks and resources.",
        "Trained and mentored new personnel on operational workflows, secure systems and confidentiality protocols.",
      ],
    },
  ],
  lookingFor: {
    headline: "Looking for my first software development role.",
    roles: [
      "Software Developer (student / junior)",
      "Backend or full-stack developer",
      "C++ / systems developer",
    ],
    interests: [
      "Backend and distributed systems",
      "Developer tooling and AI-assisted engineering",
      "Data platforms and analytics",
      "Security-minded products",
    ],
    offer: [
      "Solid CS fundamentals and clean OOP design",
      "Leadership and decision-making under pressure",
      "Fast learner who ships end-to-end",
    ],
    availability: "Available now - open to full-time and student positions in Israel or remote.",
  },
  skills: [
    {
      title: "Languages",
      items: ["C++", "C", "Python", "Java", "TypeScript", "JavaScript", "SQL"],
    },
    {
      title: "Frameworks",
      items: [
        "React",
        "Spring Boot",
        "FastAPI",
        "Node.js / Express",
        "SFML",
        "Streamlit",
        "Tailwind CSS",
      ],
    },
    {
      title: "Data",
      items: ["MySQL / MariaDB", "SQLite", "DuckDB", "Parquet", "Neo4j"],
    },
    {
      title: "Tools",
      items: [
        "Git / GitHub",
        "Docker",
        "CMake",
        "Maven",
        "Postman",
        "Cursor",
        "Visual Studio",
        "VS Code",
      ],
    },
    { title: "Platforms", items: ["Linux", "Windows"] },
    {
      title: "Professional",
      items: ["Team leadership", "Problem-solving", "Working under pressure", "Mentoring"],
    },
  ],
  languages: [
    { name: "Hebrew", level: "Native" },
    { name: "English", level: "Advanced" },
  ],
  emailParts: { user: "mazouznoam", domain: "gmail.com" },
  links: {
    github: { label: "GitHub", href: "https://github.com/Noammazouz", handle: "@Noammazouz" },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/noam-mazouz",
      handle: "in/noam-mazouz",
    },
    cv: {
      label: "CV",
      href: "https://docs.google.com/document/d/10YUCykVMRBXWqW2xW2_ZIIY5O2Ghj7lx/edit?usp=sharing",
      handle: "Google Docs",
    },
  },
};

export function getEmail(): string {
  return `${profile.emailParts.user}@${profile.emailParts.domain}`;
}
