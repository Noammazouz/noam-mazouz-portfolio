import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getEmail } from "../../data/profile.ts";
import { projects } from "../../data/projects.ts";
import { timeline } from "../../data/timeline.ts";
import { renderRoute } from "../../test/renderRoute.tsx";

describe("home sections", () => {
  it("renders every section with its heading", () => {
    renderRoute("/");
    for (const name of [
      /engineer by degree/i,
      /^projects$/i,
      /operations desk/i,
      /tools i reach for/i,
      /junior software development position/i,
      /let's build something/i,
    ]) {
      expect(screen.getByRole("heading", { level: 2, name })).toBeInTheDocument();
    }
  });

  it("draws a local icon next to tools that have one", () => {
    renderRoute("/");
    const stack = screen.getByRole("region", { name: /tools i reach for/i });
    const python = within(stack).getByText("Python").querySelector("svg");
    expect(python?.querySelector("path")?.getAttribute("fill")).toMatch(/^rgb\(/);
    expect(within(stack).getByText("Team leadership").querySelector("svg")).toBeNull();
  });

  it("lists every project linking to its case study", () => {
    renderRoute("/");
    const work = screen.getByRole("region", { name: /^projects$/i });
    for (const p of projects) {
      const caseStudy = within(work)
        .getAllByRole("link", { name: new RegExp(p.title, "i") })
        .find((link) => link.getAttribute("href") === `/projects/${p.slug}`);
      expect(caseStudy).toBeDefined();
    }
    for (const p of projects) {
      const repos = within(work).getAllByRole("link", {
        name: new RegExp(`GitHub, ${p.title}`, "i"),
      });
      expect(repos.length).toBeGreaterThan(0);
      for (const link of repos) expect(link).toHaveAttribute("href", p.repo);
    }
  });

  it("renders the full timeline", () => {
    renderRoute("/");
    const journey = screen.getByRole("region", { name: /operations desk/i });
    expect(within(journey).getAllByRole("listitem")).toHaveLength(timeline.length);
  });

  it("offers mailto and copy email", async () => {
    const writeText = vi.fn<(text: string) => Promise<void>>().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true });
    renderRoute("/");
    const contact = screen.getByRole("region", { name: /let's build/i });
    const mail = within(contact).getByRole("link", { name: /gmail/i });
    expect(mail.getAttribute("href")).toMatch(/^mailto:.+@.+/);
    expect(mail.querySelector("svg")).not.toBeNull();
    expect(
      within(contact)
        .getByRole("link", { name: /linkedin/i })
        .querySelector("svg"),
    ).not.toBeNull();
    expect(
      within(contact)
        .getByRole("link", { name: /^github/i })
        .querySelector("svg"),
    ).not.toBeNull();
    await userEvent.click(within(contact).getByRole("button", { name: /copy email/i }));
    expect(writeText).toHaveBeenCalledWith(getEmail());
    expect(await within(contact).findByText(/copied/i)).toBeInTheDocument();
  });
});

describe("case study", () => {
  it("renders details, repo link and next case", async () => {
    renderRoute("/projects/no-one-left");
    expect(
      await screen.findByRole("heading", { level: 1, name: /no one left/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github repo/i })).toHaveAttribute(
      "href",
      "https://github.com/Noammazouz/No-one-left",
    );
    expect(screen.getByRole("link", { name: /watch/i })).toHaveAttribute(
      "href",
      "https://www.youtube.com/watch?v=DokEE1DdMGM",
    );
    expect(screen.getByRole("link", { name: /next case/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^back$/i })).toHaveAttribute("href", "/#projects");
  });
});
