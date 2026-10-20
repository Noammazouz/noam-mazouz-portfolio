import { Link } from "react-router";
import { profile } from "../../data/profile.ts";

export default function LookingFor() {
  const { lookingFor } = profile;
  const columns = [
    { title: "Roles", items: lookingFor.roles },
    { title: "Interested in", items: lookingFor.interests },
    { title: "What I bring", items: lookingFor.offer },
  ];

  return (
    <section
      aria-labelledby="next-title"
      id="next"
      className="relative overflow-hidden bg-signal text-ink"
    >
      <div className="container-page py-24 md:py-36">
        <div className="mb-12 grid gap-6 border-t border-ink/30 pt-6 md:mb-20 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
          <p className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] uppercase">
            <span>05</span>
            <span aria-hidden="true">/</span>
            <span>What&apos;s next</span>
          </p>
          <h2
            id="next-title"
            className="max-w-4xl text-5xl leading-[0.9] font-semibold tracking-tight text-balance md:text-7xl"
          >
            {lookingFor.headline}
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title} className="border-t-2 border-ink pt-5">
              <h3 className="font-mono text-xs tracking-[0.18em] uppercase">{col.title}</h3>
              <ul className="mt-5 space-y-3 text-lg leading-snug font-medium">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ink/30 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-lg">{lookingFor.availability}</p>
          <Link
            to="/#contact"
            className="w-fit lift bg-ink px-6 py-4 font-mono text-sm text-paper transition-colors hover:bg-surface"
          >
            Let&apos;s talk -&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
