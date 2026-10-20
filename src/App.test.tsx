import { screen } from "@testing-library/react";
import { renderRoute } from "./test/renderRoute.tsx";

describe("routing", () => {
  it("renders the home page with landmarks", () => {
    renderRoute("/");
    expect(screen.getByRole("heading", { level: 1, name: /noam mazouz/i })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /primary/i })).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /skip to content/i })).toHaveAttribute("href", "#main");
  });

  it("renders a case study page lazily", async () => {
    renderRoute("/projects/incidentiq");
    expect(
      await screen.findByRole("heading", { level: 1, name: /incidentiq/i }),
    ).toBeInTheDocument();
  });

  it("renders 404 for unknown routes and unknown projects", async () => {
    renderRoute("/nope");
    expect(screen.getByText(/no such file or directory/i)).toBeInTheDocument();
    renderRoute("/projects/nope");
    expect(await screen.findAllByText(/no such file or directory/i)).toHaveLength(2);
  });

  it("external links are hardened", () => {
    renderRoute("/");
    for (const link of screen.getAllByRole("link")) {
      if (link.getAttribute("target") === "_blank") {
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
      }
    }
  });
});
