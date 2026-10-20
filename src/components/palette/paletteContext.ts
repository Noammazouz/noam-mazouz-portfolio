import { createContext } from "react";

export interface PaletteState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const PaletteContext = createContext<PaletteState | null>(null);
