import { getEmail, profile } from "../../data/profile.ts";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard.ts";
import ExternalLink from "../ui/ExternalLink.tsx";
import SectionHeader from "../ui/SectionHeader.tsx";

export default function Contact() {
  const email = getEmail();
  const { status, copy } = useCopyToClipboard();

  const links = [profile.links.linkedin, profile.links.github, profile.links.cv];

  return (
    <section aria-labelledby="contact-title" id="contact" className="container-page py-24 md:py-36">
      <SectionHeader index="06" label="Contact" id="contact-title" title="Let's build something." />

      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
        <p className="label">Reach out</p>
        <div>
          <a
            href={`mailto:${email}`}
            className="group block text-3xl font-medium tracking-tight break-all transition-colors hover:text-signal sm:text-5xl lg:text-6xl"
          >
            {email}
            <span
              aria-hidden="true"
              className="ml-3 inline-block transition-transform group-hover:translate-x-2"
            >
              -&gt;
            </span>
          </a>

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
              {status === "failed" && "Could not copy - use the link above."}
            </p>
          </div>

          <ul className="mt-16 divide-y divide-line border-y border-line">
            {links.map((l) => (
              <li key={l.label}>
                <ExternalLink
                  href={l.href}
                  className="group flex items-center justify-between py-6 transition-colors hover:text-signal"
                >
                  <span className="text-2xl md:text-3xl">{l.label}</span>
                  <span className="font-mono text-xs text-mute group-hover:text-signal">
                    {l.handle} <span aria-hidden="true">-&gt;</span>
                  </span>
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
