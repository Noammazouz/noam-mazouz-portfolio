import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AppRoutes from "../AppRoutes.tsx";
import PaletteProvider from "../components/palette/PaletteProvider.tsx";

export function renderRoute(path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <PaletteProvider>
        <AppRoutes />
      </PaletteProvider>
    </MemoryRouter>,
  );
}
