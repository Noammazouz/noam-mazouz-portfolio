import { profile } from "../../data/profile.ts";
import SectionHeader from "../ui/SectionHeader.tsx";

export default function About() {
  const [experience] = profile.experience;

  return (
    <section aria-labelledby="about-title" id="about" className="container-page py-24 md:py-36">
      <SectionHeader
        index="01"
        label="About"
        id="about-title"
        title="Engineer by degree. Operator by experience."
      />

      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
        <dl className="grid h-fit grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-1">
          {profile.facts.map((f) => (
            <div key={f.label}>
              <dt className="label">{f.label}</dt>
              <dd className="mt-1 text-lg">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="space-y-6 text-lg leading-relaxed text-paper/85 md:text-xl">
            {profile.about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          {experience && (
            <aside
              aria-label="Experience before university"
              className="h-fit border border-line bg-surface/80 p-6"
            >
              <p className="label">
                <span className="text-signal">exp</span> / {experience.period}
              </p>
              <h3 className="mt-4 text-xl font-medium">{experience.role}</h3>
              <p className="mt-1 text-sm text-mute">{experience.org}</p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-paper/80">
                {experience.points.map((pt) => (
                  <li key={pt.slice(0, 24)} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-signal" />
                    {pt}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
