import { useContext } from "react";
import { PaletteContext, type PaletteState } from "./paletteContext.ts";

export function usePalette(): PaletteState {
  const ctx = useContext(PaletteContext);
  if (!ctx) throw new Error("usePalette must be used inside <PaletteProvider>");
  return ctx;
}
