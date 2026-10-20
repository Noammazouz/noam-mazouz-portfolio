import { getEmail, profile } from "./profile.ts";
import { getProject, projects } from "./projects.ts";
import { timeline } from "./timeline.ts";

describe("content data", () => {
  it("has unique project slugs that resolve", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(getProject(slug)?.slug).toBe(slug);
  });

  it("only links to https URLs", () => {
    const urls = [
      ...Object.values(profile.links).map((l) => l.href),
      ...projects.map((p) => p.repo),
      ...projects.flatMap((p) => (p.video ? [p.video] : [])),
    ];
    for (const url of urls) expect(new URL(url).protocol).toBe("https:");
  });

  it("timeline project references exist", () => {
    for (const entry of timeline) {
      if (entry.projectSlug) expect(getProject(entry.projectSlug)).toBeDefined();
    }
  });

  it("assembles the email at runtime", () => {
    expect(getEmail()).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]+$/);
  });
});
