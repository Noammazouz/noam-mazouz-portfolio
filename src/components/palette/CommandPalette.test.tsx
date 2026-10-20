import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderRoute } from "../../test/renderRoute.tsx";

describe("CommandPalette", () => {
  it("opens from the nav button and lists navigation plus actions", async () => {
    const user = userEvent.setup();
    renderRoute("/");
    expect(screen.queryByRole("dialog", { name: /command palette/i })).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /open command palette/i }));
    expect(screen.getByRole("dialog", { name: /command palette/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/jump to a section/i)).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /copy email/i })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: /open cv/i })).toBeInTheDocument();
  });
});
