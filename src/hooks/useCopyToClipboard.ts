import { useCallback, useEffect, useRef, useState } from "react";

export type CopyStatus = "idle" | "copied" | "failed";

export function useCopyToClipboard(resetMs = 2000) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(
    () => () => {
      window.clearTimeout(timer.current);
    },
    [],
  );

  const copy = useCallback(
    async (text: string) => {
      let ok = false;
      try {
        if ("clipboard" in navigator) {
          await navigator.clipboard.writeText(text);
          ok = true;
        }
      } catch {
        ok = false;
      }
      setStatus(ok ? "copied" : "failed");
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        setStatus("idle");
      }, resetMs);
      return ok;
    },
    [resetMs],
  );

  return { status, copy };
}
