export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  points: string[];
}

export interface Profile {
  name: string;
  firstName: string;
  role: string;
  location: string;
  tagline: string;
  intro: string;
  about: string[];
  facts: { label: string; value: string }[];
  education: { degree: string; school: string; period: string; points: string[] };
  experience: Experience[];
  lookingFor: {
    headline: string;
    roles: string[];
    interests: string[];
    offer: string[];
    availability: string;
  };
  skills: SkillGroup[];
  languages: { name: string; level: string }[];
  /** Email split into parts so the full address never appears verbatim in the bundle. */
  emailParts: { user: string; domain: string };
  links: { github: SocialLink; linkedin: SocialLink; cv: SocialLink };
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  context: string;
  team: string;
  stack: string[];
  summary: string;
  problem: string;
  highlights: string[];
  architecture: { layer: string; detail: string }[];
  takeaways: string[];
  repo: string;
  featured: boolean;
}

export interface TimelineEntry {
  date: string;
  title: string;
  body: string;
  tags: string[];
  projectSlug?: string;
}
