import { act, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Hero from "./Hero.tsx";
import ScrambleText from "./ScrambleText.tsx";

describe("Hero", () => {
  it("exposes the real name as the h1 and has CTAs", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { level: 1, name: /noam\s*mazouz/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /see my projects/i })).toHaveAttribute(
      "href",
      "/#projects",
    );
    expect(screen.getByRole("link", { name: /looking for/i })).toHaveAttribute("href", "/#next");
  });
});

describe("ScrambleText", () => {
  it("resolves to the final text", () => {
    vi.useFakeTimers();
    const { container } = render(<ScrambleText text="Noam" frames={5} />);
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(container.querySelector("[aria-hidden='true']")?.textContent).toBe("Noam");
    vi.useRealTimers();
  });
});
