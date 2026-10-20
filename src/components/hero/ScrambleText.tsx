import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion.ts";

const GLYPHS = "!<>-_/[]{}=+*^?#01";
const FRAME_MS = 40;

interface ScrambleTextProps {
  text: string;
  /** Delay before the scramble starts, in ms. */
  delay?: number;
  /** Total frames until fully resolved. */
  frames?: number;
}

function scramble(text: string, progress: number): string {
  const revealed = Math.floor(text.length * progress);
  let out = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text.charAt(i);
    if (i < revealed || ch === " ") out += ch;
    else out += GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length));
  }
  return out;
}

/** Visual-only scramble; the real text is exposed to assistive tech via an sr-only copy. */
export default function ScrambleText({ text, delay = 0, frames = 22 }: ScrambleTextProps) {
  const reduced = useReducedMotion();
  const [frameText, setFrameText] = useState<string | null>(null);

  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    let interval: number | undefined;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        frame++;
        const progress = frame / frames;
        setFrameText(progress >= 1 ? null : scramble(text, progress));
        if (progress >= 1) window.clearInterval(interval);
      }, FRAME_MS);
    }, delay);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
      setFrameText(null);
    };
  }, [text, delay, frames, reduced]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{reduced || frameText === null ? text : frameText}</span>
    </>
  );
}
