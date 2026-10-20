import { useEffect, useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion.ts";

const GAP = 28;
const RADIUS = 160;
const BASE = "rgba(236, 235, 230, 0.16)";
const SIGNAL = [198, 255, 61] as const;

/** Decorative cursor-reactive dot field. Pauses off-screen / in hidden tabs, static under reduced motion. */
export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      pointer.x += (pointer.tx - pointer.x) * 0.18;
      pointer.y += (pointer.ty - pointer.y) * 0.18;
      for (let y = GAP / 2; y < height; y += GAP) {
        for (let x = GAP / 2; x < width; x += GAP) {
          const d = Math.hypot(x - pointer.x, y - pointer.y);
          const t = d < RADIUS ? 1 - d / RADIUS : 0;
          if (t > 0) {
            const push = t * 10;
            const angle = Math.atan2(y - pointer.y, x - pointer.x);
            ctx.fillStyle = `rgba(${SIGNAL.join(",")}, ${(0.25 + t * 0.75).toFixed(3)})`;
            ctx.beginPath();
            ctx.arc(
              x + Math.cos(angle) * push,
              y + Math.sin(angle) * push,
              1 + t * 1.6,
              0,
              Math.PI * 2,
            );
            ctx.fill();
          } else {
            ctx.fillStyle = BASE;
            ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
          }
        }
      }
    }

    function loop() {
      draw();
      raf = requestAnimationFrame(loop);
    }

    function start() {
      if (reduced || raf || !visible || document.hidden) return;
      raf = requestAnimationFrame(loop);
    }

    function stop() {
      cancelAnimationFrame(raf);
      raf = 0;
    }

    function onPointerMove(e: PointerEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      pointer.tx = e.clientX - rect.left;
      pointer.ty = e.clientY - rect.top;
    }

    function onPointerLeave() {
      pointer.tx = -9999;
      pointer.ty = -9999;
    }

    function onVisibility() {
      if (document.hidden) stop();
      else start();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);

    const host = canvas.parentElement ?? window;
    host.addEventListener("pointermove", onPointerMove as EventListener);
    host.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    resize();
    start();

    return () => {
      stop();
      resizeObserver.disconnect();
      io.disconnect();
      host.removeEventListener("pointermove", onPointerMove as EventListener);
      host.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
    />
  );
}
