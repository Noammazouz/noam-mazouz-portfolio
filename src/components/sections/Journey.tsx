import { Link } from "react-router";
import { timeline } from "../../data/timeline.ts";
import SectionHeader from "../ui/SectionHeader.tsx";

export default function Journey() {
  return (
    <section aria-labelledby="journey-title" id="journey" className="container-page py-24 md:py-36">
      <SectionHeader
        index="03"
        label="Journey"
        id="journey-title"
        title="git log --oneline my-path"
      />

      <ol className="relative ml-1 border-l border-line md:ml-[calc(25%+0.25rem)]">
        {timeline.map((entry, i) => (
          <li key={entry.hash} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
            <span
              aria-hidden="true"
              className={`absolute top-1.5 -left-[5px] size-[9px] rounded-full border ${
                i === 0 ? "border-signal bg-signal" : "border-paper/60 bg-ink"
              }`}
            />
            <p className="font-mono text-xs text-mute">
              <span className="text-signal">commit {entry.hash}</span>
              {i === 0 && <span className="ml-2 text-paper/70">(HEAD -&gt; main)</span>}
              <span className="mx-2" aria-hidden="true">
                |
              </span>
              <time>{entry.date}</time>
            </p>
            <h3 className="mt-2 text-xl font-medium md:text-2xl">{entry.message}</h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-paper/75">{entry.body}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {entry.tags.map((t) => (
                <span key={t} className="font-mono text-[11px] text-mute">
                  #{t}
                </span>
              ))}
              {entry.projectSlug && (
                <Link
                  to={`/projects/${entry.projectSlug}`}
                  className="ml-2 font-mono text-xs text-signal underline-offset-4 hover:underline"
                >
                  view project -&gt;
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
