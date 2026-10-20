import type { SimpleIcon } from "simple-icons";
import {
  siApachemaven,
  siGithub,
  siGmail,
  siApacheparquet,
  siC,
  siCmake,
  siCplusplus,
  siCursor,
  siDocker,
  siDuckdb,
  siExpress,
  siFastapi,
  siGit,
  siJavascript,
  siLinux,
  siMariadb,
  siMysql,
  siNeo4j,
  siNodedotjs,
  siPostman,
  siPython,
  siReact,
  siSfml,
  siSpring,
  siSpringboot,
  siSpringsecurity,
  siSqlite,
  siStreamlit,
  siTailwindcss,
  siThymeleaf,
  siTypescript,
} from "simple-icons";

/**
 * Local brand marks (Simple Icons path data, CC0). Names without a logo
 * are omitted and render as text.
 */
const SKILL_ICONS: Record<string, SimpleIcon> = {
  "C++": siCplusplus,
  C: siC,
  Python: siPython,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  React: siReact,
  "Spring Boot": siSpringboot,
  "Spring Security": siSpringsecurity,
  "Spring Data JPA": siSpring,
  FastAPI: siFastapi,
  "Node.js / Express": siNodedotjs,
  "Node.js": siNodedotjs,
  Express: siExpress,
  SFML: siSfml,
  Streamlit: siStreamlit,
  "Tailwind CSS": siTailwindcss,
  Thymeleaf: siThymeleaf,
  "MySQL / MariaDB": siMysql,
  MariaDB: siMariadb,
  SQLite: siSqlite,
  DuckDB: siDuckdb,
  Parquet: siApacheparquet,
  Neo4j: siNeo4j,
  "Git / GitHub": siGit,
  Docker: siDocker,
  CMake: siCmake,
  Maven: siApachemaven,
  Postman: siPostman,
  Cursor: siCursor,
  Linux: siLinux,
};

export function iconFor(name: string): SimpleIcon | undefined {
  return SKILL_ICONS[name];
}

export interface BrandMark {
  path: string;
  hex: string;
}

/**
 * LinkedIn no longer ships in Simple Icons. This is the mark used to link
 * to the profile, stored locally so the page never requests it.
 */
const linkedin: BrandMark = {
  hex: "0A66C2",
  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

export const contactMarks = {
  email: siGmail,
  github: siGithub,
  linkedin,
} as const;

function channel(value: number): number {
  const amount = value / 255;
  return amount <= 0.04045 ? amount / 12.92 : ((amount + 0.055) / 1.055) ** 2.4;
}

/** Brand color from the icon data. Near-black logos are lifted so they stay visible. */
export function brandFill(hex: string): string {
  let red = Number.parseInt(hex.slice(0, 2), 16);
  let green = Number.parseInt(hex.slice(2, 4), 16);
  let blue = Number.parseInt(hex.slice(4, 6), 16);
  const luminance = 0.2126 * channel(red) + 0.7152 * channel(green) + 0.0722 * channel(blue);
  if (luminance < 0.06) {
    const towardWhite = 0.62;
    red = Math.round(red + (255 - red) * towardWhite);
    green = Math.round(green + (255 - green) * towardWhite);
    blue = Math.round(blue + (255 - blue) * towardWhite);
  }
  return `rgb(${String(red)} ${String(green)} ${String(blue)})`;
}
