import { BrowserRouter } from "react-router";
import AppRoutes from "./AppRoutes.tsx";
import PaletteProvider from "./components/palette/PaletteProvider.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <PaletteProvider>
        <AppRoutes />
      </PaletteProvider>
    </BrowserRouter>
  );
}
