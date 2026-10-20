import { profile } from "../../data/profile.ts";
import { iconFor } from "../icons/skillIcons.ts";
import SkillMark from "../icons/SkillMark.tsx";
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
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => {
                const icon = iconFor(item);
                return (
                  <li
                    key={item}
                    className="flex items-center gap-2 border border-line px-3 py-2 text-sm text-paper/90 transition-colors group-hover:text-paper"
                  >
                    {icon ? <SkillMark icon={icon} /> : null}
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-10 font-mono text-lg text-paper md:text-xl">
        <span className="text-mute">Spoken</span>{" "}
        {profile.languages.map((l) => `${l.name} (${l.level})`).join(" / ")}
      </p>
    </section>
  );
}
