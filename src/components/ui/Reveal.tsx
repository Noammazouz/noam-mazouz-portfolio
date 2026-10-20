import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion.ts";

export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.dataset.in = "true";
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
    };
  }, [reduced]);

  return (
    <div ref={ref} data-reveal={reduced ? undefined : ""}>
      {children}
    </div>
  );
}
