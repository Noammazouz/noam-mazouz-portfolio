import type { Project } from "../../data/types.ts";

interface ProjectVisualProps {
  project: Project;
  index: number;
  className?: string;
}

/** Typographic "architecture card" used instead of screenshots. Purely decorative. */
export default function ProjectVisual({ project, index, className = "" }: ProjectVisualProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden border border-line bg-surface font-mono text-xs ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-signal" />
        <span className="ml-3 truncate text-mute">~/projects/{project.slug}</span>
      </div>
      <div className="relative p-5">
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
