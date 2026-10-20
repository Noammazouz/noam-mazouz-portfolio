import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { PaletteContext, type PaletteState } from "./paletteContext.ts";

export default function PaletteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);
  const toggle = useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [toggle]);

  const value = useMemo<PaletteState>(
    () => ({ isOpen, open, close, toggle }),
    [isOpen, open, close, toggle],
  );

  return <PaletteContext value={value}>{children}</PaletteContext>;
}
