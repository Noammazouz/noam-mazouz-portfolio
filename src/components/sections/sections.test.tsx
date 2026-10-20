import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { projects } from "../../data/projects.ts";
import { timeline } from "../../data/timeline.ts";
import { renderRoute } from "../../test/renderRoute.tsx";

describe("home sections", () => {
  it("renders every section with its heading", () => {
    renderRoute("/");
    for (const name of [
      /engineer by degree/i,
      /selected work/i,
      /operations desk/i,
      /tools i reach for/i,
      /junior software development position/i,
      /let's build something/i,
    ]) {
      expect(screen.getByRole("heading", { level: 2, name })).toBeInTheDocument();
    }
  });

  it("lists every project linking to its case study", () => {
    renderRoute("/");
    const work = screen.getByRole("region", { name: /selected work/i });
    for (const p of projects) {
      expect(within(work).getByRole("link", { name: new RegExp(p.title, "i") })).toHaveAttribute(
        "href",
        `/projects/${p.slug}`,
      );
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
    const mail = within(contact).getByRole("link", { name: /@gmail\.com/i });
    expect(mail.getAttribute("href")).toMatch(/^mailto:.+@.+/);
    await userEvent.click(within(contact).getByRole("button", { name: /copy email/i }));
    expect(writeText).toHaveBeenCalledWith(mail.textContent.replace(/→$/, "").trim());
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
  });
});
