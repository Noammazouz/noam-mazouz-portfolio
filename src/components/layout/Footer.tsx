import { profile } from "../../data/profile.ts";
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
            <ExternalLink href={profile.links.github.href} className="hover:text-paper">
              GitHub
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={profile.links.linkedin.href} className="hover:text-paper">
              LinkedIn
            </ExternalLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
