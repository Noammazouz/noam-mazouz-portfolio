import { render, screen } from "@testing-library/react";
import App from "./App.tsx";

describe("App", () => {
  it("renders the main heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: /noam mazouz/i })).toBeInTheDocument();
  });
});
