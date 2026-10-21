import type { Project } from "../../data/types.ts";
import ExternalLink from "../ui/ExternalLink.tsx";

interface ProjectVisualProps {
  project: Project;
  index: number;
  className?: string;
  /** List preview has no Source row, so the repository link lives in the title bar. */
  showRepo?: boolean;
}

/** Architecture card. The diagram is decorative. */
export default function ProjectVisual({
  project,
  index,
  className = "",
  showRepo = false,
}: ProjectVisualProps) {
  return (
    <div
      aria-hidden={showRepo ? undefined : true}
      className={`relative overflow-hidden border border-line bg-surface font-mono text-xs ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-line" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-line" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-signal" />
        <span className="ml-3 min-w-0 truncate text-mute">{project.title}</span>
        {showRepo ? (
          <ExternalLink
            href={project.repo}
            className="ml-auto shrink-0 text-paper underline-offset-4 transition-colors hover:text-signal hover:underline"
          >
            GitHub
            <span className="sr-only">, {project.title}</span>
          </ExternalLink>
        ) : null}
      </div>
      <div aria-hidden={showRepo ? true : undefined} className="relative p-5">
        <span className="pointer-events-none absolute -top-6 right-2 text-[9rem] leading-none font-bold text-raised select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        <ol className="relative space-y-2">
          {project.architecture.map((a, i) => (
            <li
              key={a.layer}
              className={`flex items-center gap-3 border border-line bg-ink/80 px-3 py-2 ${["ml-0", "ml-3", "ml-6", "ml-9"][Math.min(i, 3)] ?? "ml-0"}`}
            >
              <span className="text-signal">{a.layer}</span>
              <span className="truncate text-mute">{a.detail}</span>
            </li>
          ))}
        </ol>
        <p className="relative mt-5 truncate text-mute">
          <span className="text-signal">$</span> {project.stack.slice(0, 4).join(" + ")}
        </p>
      </div>
    </div>
  );
}
