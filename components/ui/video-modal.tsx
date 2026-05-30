"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  youtubeId: string;
  isShort?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ youtubeId, isShort = false, isOpen, onClose }: VideoModalProps) {
  // Lock body scroll + Esc to close
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !youtubeId) return null;

  // YouTube embed with autoplay + sound on. rel=0 hides related videos, modestbranding=1 minimizes YT logo
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  // Shorts are 9:16 vertical, regular videos are 16:9 horizontal
  const containerStyle = isShort
    ? { width: "min(95vw, calc(88vh * 9 / 16))", aspectRatio: "9 / 16" }
    : { width: "min(95vw, 1600px)", aspectRatio: "16 / 9", maxHeight: "88vh" };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm cursor-pointer"
      style={{ animation: "modalFadeIn 220ms ease-out" }}
    >
      {/* Close button */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Đóng video"
        className="absolute top-6 right-6 md:top-8 md:right-8 z-20 text-white/80 hover:text-[#D4A853] transition-colors duration-200 cursor-pointer"
      >
        <X size={32} strokeWidth={1.5} />
      </button>

      {/* Video container – clicks here do NOT close */}
      <div
        className="relative z-10 cursor-default"
        style={{
          ...containerStyle,
          animation: "videoScaleIn 320ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={embedUrl}
          title="Video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full bg-black shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
          style={{ border: 0 }}
        />
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes videoScaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
