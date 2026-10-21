import { Command } from "cmdk";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { getEmail, profile } from "../../data/profile.ts";
import { projects } from "../../data/projects.ts";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard.ts";
import { NAV_SECTIONS } from "../layout/navSections.ts";
import { usePalette } from "./usePalette.ts";

function openHttps(href: string) {
  if (!href.startsWith("https://")) return;
  window.open(href, "_blank", "noopener,noreferrer");
}

export default function CommandPalette() {
  const { isOpen, close } = usePalette();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();
  const { status, copy } = useCopyToClipboard();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    function onCancel(e: Event) {
      e.preventDefault();
      close();
    }
    function onClick(e: MouseEvent) {
      if (e.target === dialog) close();
    }
    dialog.addEventListener("cancel", onCancel);
    dialog.addEventListener("click", onClick);
    return () => {
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("click", onClick);
    };
  }, [close]);

  function go(to: string) {
    close();
    if (to.startsWith("/#")) {
      void navigate({ pathname: "/", hash: to.slice(1) });
      return;
    }
    void navigate(to);
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="palette-title"
      className="fixed top-[18vh] m-auto w-[min(36rem,calc(100vw-2rem))] border border-line bg-ink p-0 text-paper shadow-2xl backdrop:bg-ink/70"
    >
      <h2 id="palette-title" className="sr-only">
        Command palette
      </h2>
      <Command loop label="Command palette" className="flex flex-col">
        <div className="flex items-center gap-3 border-b border-line px-4">
          <span aria-hidden="true" className="font-mono text-signal">
            &gt;
          </span>
          <Command.Input
            placeholder="Jump to a section, project, or action..."
            className="w-full bg-transparent py-4 font-mono text-sm outline-none placeholder:text-mute"
          />
          <kbd className="hidden font-mono text-[10px] text-mute sm:inline">ESC</kbd>
        </div>
        <Command.List className="max-h-[min(22rem,50vh)] overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 font-mono text-xs text-mute">
            No matching commands.
          </Command.Empty>

          <Command.Group heading="Navigate" className="px-1 py-2 [&_[cmdk-group-heading]]:label">
            {NAV_SECTIONS.map((s) => (
              <Command.Item
                key={s.id}
                value={`${s.label} section ${s.id}`}
                onSelect={() => {
                  go(`/#${s.id}`);
                }}
                className="flex cursor-pointer items-center justify-between px-3 py-2 font-mono text-sm data-[selected=true]:bg-signal data-[selected=true]:text-ink"
              >
                {s.label}
                <span className="text-[10px] tracking-widest uppercase opacity-60">#{s.id}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Projects" className="px-1 py-2 [&_[cmdk-group-heading]]:label">
            {projects.map((p) => (
              <Command.Item
                key={p.slug}
                value={`${p.title} ${p.tagline} ${p.stack.join(" ")}`}
                onSelect={() => {
                  go(`/projects/${p.slug}`);
                }}
                className="flex cursor-pointer items-center justify-between gap-4 px-3 py-2 font-mono text-sm data-[selected=true]:bg-signal data-[selected=true]:text-ink"
              >
                <span>{p.title}</span>
                <span className="text-[10px] tracking-widest uppercase opacity-60">{p.year}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Actions" className="px-1 py-2 [&_[cmdk-group-heading]]:label">
            <Command.Item
              value="copy email contact"
              onSelect={() => {
                void copy(getEmail()).then(() => {
                  close();
                });
              }}
              className="flex cursor-pointer items-center justify-between px-3 py-2 font-mono text-sm data-[selected=true]:bg-signal data-[selected=true]:text-ink"
            >
              Copy email
              <span className="text-[10px] uppercase opacity-60">
                {status === "copied" ? "copied" : "clipboard"}
              </span>
            </Command.Item>
            <Command.Item
              value={`open cv resume ${profile.links.cv.label}`}
              onSelect={() => {
                openHttps(profile.links.cv.href);
                close();
              }}
              className="flex cursor-pointer items-center justify-between px-3 py-2 font-mono text-sm data-[selected=true]:bg-signal data-[selected=true]:text-ink"
            >
              Open CV
              <span className="text-[10px] uppercase opacity-60">external</span>
            </Command.Item>
            <Command.Item
              value={`github ${profile.links.github.handle}`}
              onSelect={() => {
                openHttps(profile.links.github.href);
                close();
              }}
              className="flex cursor-pointer items-center justify-between px-3 py-2 font-mono text-sm data-[selected=true]:bg-signal data-[selected=true]:text-ink"
            >
              GitHub
              <span className="text-[10px] uppercase opacity-60">external</span>
            </Command.Item>
            <Command.Item
              value={`linkedin ${profile.links.linkedin.handle}`}
              onSelect={() => {
                openHttps(profile.links.linkedin.href);
                close();
              }}
              className="flex cursor-pointer items-center justify-between px-3 py-2 font-mono text-sm data-[selected=true]:bg-signal data-[selected=true]:text-ink"
            >
              LinkedIn
              <span className="text-[10px] uppercase opacity-60">external</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </dialog>
  );
}
