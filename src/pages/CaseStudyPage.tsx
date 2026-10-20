import type { ReactNode } from "react";
import { Link, useParams } from "react-router";
import Seo from "../components/Seo.tsx";
import ExternalLink from "../components/ui/ExternalLink.tsx";
import ProjectVisual from "../components/work/ProjectVisual.tsx";
import { projects } from "../data/projects.ts";
import NotFoundPage from "./NotFoundPage.tsx";

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-line py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
      <h2 className="label">{label}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function CaseStudyPage() {
  const { slug = "" } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) return <NotFoundPage />;

  const next = projects[(index + 1) % projects.length];

  return (
    <article className="container-page pt-12 pb-24 md:pt-20">
      <Seo title={project.title} description={`${project.tagline}. ${project.summary}`} />

      <Link to="/#work" className="font-mono text-xs text-mute transition-colors hover:text-signal">
        &lt;- cd ../work
      </Link>

      <header className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-end">
        <div>
          <p className="label">
            <span className="text-signal">case {String(index + 1).padStart(2, "0")}</span> /{" "}
            {project.context}
          </p>
          <h1 className="mt-6 text-6xl leading-[0.9] font-semibold tracking-tight md:text-8xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-paper/80 md:text-2xl">{project.tagline}</p>
        </div>
        <ProjectVisual project={project} index={index} />
      </header>

      <dl className="mt-16 grid grid-cols-2 gap-6 border-y border-line py-8 md:grid-cols-4">
        <div>
          <dt className="label">Year</dt>
          <dd className="mt-1">{project.year}</dd>
        </div>
        <div>
          <dt className="label">Context</dt>
          <dd className="mt-1">{project.context}</dd>
        </div>
        <div>
          <dt className="label">Team</dt>
          <dd className="mt-1">{project.team}</dd>
        </div>
        <div>
          <dt className="label">Source</dt>
          <dd className="mt-1">
            <ExternalLink
              href={project.repo}
              className="text-signal underline-offset-4 hover:underline"
            >
              GitHub repo
            </ExternalLink>
          </dd>
        </div>
        {project.video && (
          <div>
            <dt className="label">Video</dt>
            <dd className="mt-1">
              <ExternalLink
                href={project.video}
                className="text-signal underline-offset-4 hover:underline"
              >
                Watch
              </ExternalLink>
            </dd>
          </div>
        )}
      </dl>

      <div className="mt-8">
        <Block label="Overview">
          <p className="max-w-3xl text-xl leading-relaxed md:text-2xl">{project.summary}</p>
        </Block>
        <Block label="The problem">
          <p className="max-w-3xl text-lg leading-relaxed text-paper/80">{project.problem}</p>
        </Block>
        <Block label="What I built">
          <ul className="max-w-3xl space-y-4 text-lg leading-relaxed text-paper/85">
            {project.highlights.map((h) => (
              <li key={h.slice(0, 32)} className="flex gap-4">
                <span aria-hidden="true" className="font-mono text-signal">
                  +
                </span>
                {h}
              </li>
            ))}
          </ul>
        </Block>
        <Block label="Architecture">
          <ol className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {project.architecture.map((a, i) => (
              <li key={a.layer} className="bg-ink p-5">
                <p className="font-mono text-xs text-signal">
                  {String(i + 1).padStart(2, "0")} {a.layer}
                </p>
                <p className="mt-2 text-paper/85">{a.detail}</p>
              </li>
            ))}
          </ol>
        </Block>
        <Block label="Stack">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s} className="border border-line px-3 py-1 font-mono text-xs">
                {s}
              </li>
            ))}
          </ul>
        </Block>
        <Block label="Takeaways">
          <ul className="max-w-3xl space-y-3 text-lg text-paper/85">
            {project.takeaways.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Block>
      </div>

      {next && next.slug !== project.slug && (
        <Link
          to={`/projects/${next.slug}`}
          className="group mt-12 flex flex-col gap-3 border-t border-line pt-10"
        >
          <span className="label">Next case</span>
          <span className="text-4xl font-medium tracking-tight transition-colors group-hover:text-signal md:text-6xl">
            {next.title} <span aria-hidden="true">→</span>
          </span>
        </Link>
      )}
    </article>
  );
}
