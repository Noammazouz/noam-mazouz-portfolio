import { profile } from "../../data/profile.ts";
import { contactMarks } from "../icons/skillIcons.ts";
import SkillMark from "../icons/SkillMark.tsx";
import ExternalLink from "../ui/ExternalLink.tsx";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-4 py-8 font-mono text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Designed and built with React, Vite and
          TypeScript.
        </p>
        <ul className="flex gap-6">
          <li>
            <ExternalLink
              href={profile.links.github.href}
              className="inline-flex items-center gap-2 hover:text-paper"
            >
              <SkillMark icon={contactMarks.github} className="size-3.5" />
              GitHub
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href={profile.links.linkedin.href}
              className="inline-flex items-center gap-2 hover:text-paper"
            >
              <SkillMark icon={contactMarks.linkedin} className="size-3.5" />
              LinkedIn
            </ExternalLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
