import { Outlet } from "react-router";
import CommandPalette from "../palette/CommandPalette.tsx";
import ScrollManager from "../ScrollManager.tsx";
import Footer from "./Footer.tsx";
import Nav from "./Nav.tsx";

export default function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 bg-signal px-4 py-2 font-mono text-sm text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Nav />
      <CommandPalette />
      <main id="main" tabIndex={-1} className="pt-16 outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
