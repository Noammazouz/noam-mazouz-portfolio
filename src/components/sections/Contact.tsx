import { getEmail, profile } from "../../data/profile.ts";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard.ts";
import { contactMarks, type BrandMark } from "../icons/skillIcons.ts";
import SkillMark from "../icons/SkillMark.tsx";
import ExternalLink from "../ui/ExternalLink.tsx";
import SectionHeader from "../ui/SectionHeader.tsx";

const rowClass =
  "group flex items-center justify-between gap-6 py-6 transition-colors hover:text-signal";

function rowBody(mark: BrandMark | undefined, label: string, handle: string) {
  return (
    <>
      <span className="flex items-center gap-3 text-2xl md:text-3xl">
        {mark ? <SkillMark icon={mark} className="size-6" /> : null}
        {label}
      </span>
      <span className="text-right font-mono text-xs break-all text-mute group-hover:text-signal">
        {handle}{" "}
        <span
          aria-hidden="true"
          className="inline-block transition-transform group-hover:translate-x-2"
        >
          →
        </span>
      </span>
    </>
  );
}

export default function Contact() {
  const email = getEmail();
  const { status, copy } = useCopyToClipboard();
  const links = [
    { ...profile.links.linkedin, mark: contactMarks.linkedin },
    { ...profile.links.github, mark: contactMarks.github },
    profile.links.cv,
  ];

  return (
    <section aria-labelledby="contact-title" id="contact" className="container-page py-24 md:py-36">
      <SectionHeader index="06" label="Contact" id="contact-title" title="Let's build something." />

      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
        <p className="label">Reach out</p>
        <div>
          <ul className="divide-y divide-line border-y border-line">
            <li>
              <a href={`mailto:${email}`} className={rowClass}>
                {rowBody(contactMarks.email, "Gmail", email)}
              </a>
            </li>
            {links.map((l) => (
              <li key={l.label}>
                <ExternalLink href={l.href} className={rowClass}>
                  {rowBody("mark" in l ? l.mark : undefined, l.label, l.handle)}
                </ExternalLink>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-4">
            <button
              type="button"
              onClick={() => {
                void copy(email);
              }}
              className="border border-line px-4 py-2 font-mono text-xs transition-colors hover:border-paper"
            >
              Copy email
            </button>
            <p role="status" aria-live="polite" className="font-mono text-xs text-signal">
              {status === "copied" && "Copied to clipboard."}
              {status === "failed" && "Could not copy - use the Gmail link above."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
