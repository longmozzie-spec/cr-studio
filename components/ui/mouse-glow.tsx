"use client";

import { useEffect, useRef } from "react";

interface MouseGlowProps {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

/**
 * Interactive gold glow that follows the cursor.
 * Sits on top of section as a pointer-events-none overlay.
 * Uses CSS variables + mix-blend-mode for luxury feel.
 */
export function MouseGlow({
  size = 500,
  color = "212, 168, 83", // gold #D4A853
  opacity = 0.12,
  className = "",
}: MouseGlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isInside = false;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      isInside = true;
      if (rafRef.current === null) animate();
    };

    const onLeave = () => {
      isInside = false;
      if (ref.current) ref.current.style.opacity = "0";
    };

    const onEnter = () => {
      isInside = true;
      if (ref.current) ref.current.style.opacity = "1";
    };

    // Smooth interpolation – lerp toward target (slower = more luxurious)
    const animate = () => {
      const lerp = 0.05;
      currentX += (targetX - currentX) * lerp;
      currentY += (targetY - currentY) * lerp;

      if (ref.current) {
        ref.current.style.setProperty("--x", `${currentX}px`);
        ref.current.style.setProperty("--y", `${currentY}px`);
      }

      const dx = Math.abs(targetX - currentX);
      const dy = Math.abs(targetY - currentY);
      if (isInside && (dx > 0.15 || dy > 0.15)) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        rafRef.current = null;
      }
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${className}`}
      style={{
        opacity: 0,
        background: `radial-gradient(${size}px circle at var(--x) var(--y), rgba(${color}, ${opacity}), transparent 60%)`,
        mixBlendMode: "screen",
        zIndex: 1,
      }}
    />
  );
}
