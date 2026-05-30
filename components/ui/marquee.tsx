"use client";

interface MarqueeProps {
  items?: string[];
  speed?: number;
}

export function Marquee({
  items = ["Cinematic", "Storytelling", "Map Animation", "Color Grading", "Premium Quality", "Motion Graphics"],
  speed = 40,
}: MarqueeProps) {
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-10 border-y border-[#D4A853]/15"
      role="marquee"
      aria-label="Brand values"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          width: "max-content",
        }}
      >
        {loop.map((text, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span
              className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-white/85"
              style={{ fontStyle: "italic", fontWeight: 500 }}
            >
              {text}
            </span>
            <span className="text-[#D4A853] text-3xl">✦</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
