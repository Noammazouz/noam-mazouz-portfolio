import { Link } from "react-router";
import { profile } from "../../data/profile.ts";
import { usePalette } from "../palette/usePalette.ts";
import ExternalLink from "../ui/ExternalLink.tsx";
import { NAV_SECTIONS } from "./navSections.ts";

export default function Nav() {
  const { open } = usePalette();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between gap-6"
      >
        <Link to="/" className="group flex items-center gap-3 font-mono text-sm">
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center border border-paper/80 text-xs font-semibold transition-colors group-hover:border-signal group-hover:bg-signal group-hover:text-ink"
          >
            NM
          </span>
          <span aria-hidden="true" className="hidden sm:inline">
            noam<span className="text-signal">.</span>mazouz
          </span>
          <span className="sr-only">{profile.name}, home</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_SECTIONS.map((s) => (
            <li key={s.id}>
              <Link
                to={`/#${s.id}`}
                className="font-mono text-xs tracking-widest text-mute uppercase transition-colors hover:text-paper"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={open}
            aria-keyshortcuts="Control+K Meta+K"
            className="flex items-center gap-2 border border-line px-3 py-1.5 font-mono text-xs text-mute transition-colors hover:border-paper hover:text-paper"
          >
            <span className="lg:hidden">Menu</span>
            <span className="hidden lg:inline">Jump to</span>
            <kbd className="hidden rounded-sm bg-raised px-1.5 py-0.5 text-[10px] text-paper sm:inline">
              Ctrl K
            </kbd>
          </button>
          <ExternalLink
            href={profile.links.cv.href}
            className="bg-signal px-3 py-1.5 font-mono text-xs font-semibold text-ink transition-opacity hover:opacity-85"
          >
            CV
          </ExternalLink>
        </div>
      </nav>
    </header>
  );
}
