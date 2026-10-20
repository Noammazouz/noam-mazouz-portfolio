import { useState } from "react";
import { Link } from "react-router";
import { projects } from "../../data/projects.ts";
import SectionHeader from "../ui/SectionHeader.tsx";
import ProjectVisual from "./ProjectVisual.tsx";

export default function WorkList() {
  const [active, setActive] = useState(0);
  const preview = projects[active] ?? projects[0];

  return (
    <section aria-labelledby="work-title" id="work" className="container-page py-24 md:py-36">
      <SectionHeader
        index="02"
        label="Work"
        id="work-title"
        title="Selected work from my degree - games, data, web and AI."
      />

      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <ol className="border-b border-line">
          {projects.map((p, i) => {
            const isActive = i === active;
            return (
              <li key={p.slug} className="border-t border-line">
                <Link
                  to={`/projects/${p.slug}`}
                  onPointerEnter={() => {
                    setActive(i);
                  }}
                  onFocus={() => {
                    setActive(i);
                  }}
                  data-active={isActive ? "true" : undefined}
                  className="group grid grid-cols-[3rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-3 py-8 transition-colors md:grid-cols-[4rem_minmax(0,2fr)_minmax(0,2fr)_5rem] md:py-10"
                >
                  <span
                    className={`font-mono text-xs ${isActive ? "text-signal" : "text-mute group-hover:text-signal"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-3xl font-medium tracking-tight transition-transform duration-500 ease-out-expo group-hover:translate-x-3 md:text-5xl ${isActive ? "translate-x-3" : ""}`}
                  >
                    {p.title}
                  </span>
                  <span className="col-start-2 text-mute md:col-start-auto">
                    {p.tagline}
                    <span className="mt-3 flex flex-wrap gap-2">
                      {p.stack.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="border border-line px-2 py-0.5 font-mono text-[11px] text-paper/70"
                        >
                          {s}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="col-start-2 font-mono text-xs text-mute md:col-start-auto md:text-right">
                    {p.year}
                    <span
                      aria-hidden="true"
                      className={`ml-3 inline-block text-signal transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>

        {preview && (
          <aside className="hidden lg:sticky lg:top-24 lg:block" aria-hidden="true">
            <ProjectVisual project={preview} index={active} />
            <p className="mt-5 text-sm leading-relaxed text-mute">{preview.summary}</p>
          </aside>
        )}
      </div>
    </section>
  );
}
