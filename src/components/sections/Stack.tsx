import { profile } from "../../data/profile.ts";
import SectionHeader from "../ui/SectionHeader.tsx";

export default function Stack() {
  return (
    <section aria-labelledby="stack-title" id="stack" className="container-page py-24 md:py-36">
      <SectionHeader
        index="04"
        label="Stack"
        id="stack-title"
        title="Tools I reach for, and the languages I think in."
      />

      <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {profile.skills.map((group, gi) => (
          <div
            key={group.title}
            className="group bg-ink p-6 transition-colors hover:bg-surface md:p-8"
          >
            <h3 className="flex justify-between label">
              <span>{group.title}</span>
              <span className="text-signal">{String(gi + 1).padStart(2, "0")}</span>
            </h3>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-lg">
              {group.items.map((item) => (
                <li key={item} className="transition-colors group-hover:text-paper">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 font-mono text-xs text-mute">
        Spoken: {profile.languages.map((l) => `${l.name} (${l.level})`).join(" / ")}
      </p>
    </section>
  );
}
