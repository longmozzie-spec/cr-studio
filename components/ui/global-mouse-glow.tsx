"use client";

import { useEffect, useRef } from "react";

interface GlobalMouseGlowProps {
  size?: number;
  color?: string;
  opacity?: number;
}

/**
 * Fixed gold glow that follows the cursor across the entire viewport.
 * Mount ONCE at root level – uses pointer-events-none so it never blocks clicks.
 */
export function GlobalMouseGlow({
  size = 320,
  color = "212, 168, 83", // gold #D4A853
  opacity = 0.18,
}: GlobalMouseGlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let targetX = -9999;
    let targetY = -9999;
    let currentX = -9999;
    let currentY = -9999;
    let visible = false;

    const show = () => {
      if (!visible && ref.current) {
        ref.current.style.opacity = "1";
        visible = true;
      }
    };
    const hide = () => {
      if (visible && ref.current) {
        ref.current.style.opacity = "0";
        visible = false;
      }
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      show();
      if (rafRef.current === null) animate();
    };

    const onLeaveDoc = () => hide();
    const onEnterDoc = () => show();

    // Slow lerp – luxurious lag
    const animate = () => {
      const lerp = 0.06;
      currentX += (targetX - currentX) * lerp;
      currentY += (targetY - currentY) * lerp;

      if (ref.current) {
        ref.current.style.setProperty("--x", `${currentX}px`);
        ref.current.style.setProperty("--y", `${currentY}px`);
      }

      const dx = Math.abs(targetX - currentX);
      const dy = Math.abs(targetY - currentY);
      if (dx > 0.15 || dy > 0.15) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        rafRef.current = null;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeaveDoc);
    document.addEventListener("mouseenter", onEnterDoc);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeaveDoc);
      document.removeEventListener("mouseenter", onEnterDoc);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 transition-opacity duration-500"
      style={{
        opacity: 0,
        background: `radial-gradient(${size}px circle at var(--x) var(--y), rgba(${color}, ${opacity}), transparent 60%)`,
        mixBlendMode: "screen",
        zIndex: 30,
      }}
    />
  );
}
