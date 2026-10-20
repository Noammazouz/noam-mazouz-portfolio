import { Link } from "react-router";
import { profile } from "../../data/profile.ts";
import DotGrid from "./DotGrid.tsx";
import ScrambleText from "./ScrambleText.tsx";

const MARQUEE = profile.skills.flatMap((g) => g.items).slice(0, 18);

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden"
    >
      <DotGrid />

      <div className="relative container-page flex flex-1 flex-col justify-between gap-12 pt-10 pb-12 md:pt-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="label">
            Portfolio <span className="text-signal">/</span> {new Date().getFullYear()}
          </p>
          <p className="flex items-center gap-2 label text-paper">
            <span aria-hidden="true" className="size-2 animate-blink rounded-full bg-signal" />
            Open to work
          </p>
        </div>

        <h1 id="hero-title" className="text-mega font-semibold uppercase">
          <span className="block">
            <ScrambleText text={first ?? profile.name} delay={150} />
          </span>{" "}
          <span className="block pl-[8vw] text-transparent [-webkit-text-stroke:1.5px_var(--color-paper)]">
            <ScrambleText text={last} delay={450} />
            <span aria-hidden="true" className="text-signal [-webkit-text-stroke:0]">
              .
            </span>
          </span>
        </h1>

        <div className="grid gap-10 border-t border-line pt-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-16">
          <p className="font-mono text-sm leading-relaxed text-mute">
            <span className="text-signal">&gt;</span> {profile.role}
            <br />
            <span className="text-signal">&gt;</span> {profile.education.degree},{" "}
            {profile.education.school}
            <br />
            <span className="text-signal">&gt;</span> {profile.location}
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-4 w-2 animate-blink bg-signal align-middle"
            />
          </p>
          <div className="flex flex-col gap-8">
            <p className="text-xl leading-snug text-balance md:text-2xl">{profile.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/#work"
                className="group flex lift items-center gap-3 bg-paper px-5 py-3 font-mono text-sm font-medium text-ink transition-colors hover:bg-signal"
              >
                See my work
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  -&gt;
                </span>
              </Link>
              <Link
                to="/#next"
                className="border border-line px-5 py-3 font-mono text-sm transition-colors hover:border-paper"
              >
                What I&apos;m looking for
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="relative overflow-hidden border-y border-line bg-surface/70 py-3"
      >
        <div className="flex w-max animate-marquee gap-10 font-mono text-xs tracking-widest text-mute uppercase">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={`${item}-${String(i)}`} className="flex items-center gap-10">
              {item}
              <span className="text-signal">+</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
