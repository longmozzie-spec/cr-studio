"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  src: string;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ src, title, isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Close on Escape, lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Autoplay with sound when modal opens
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.muted = false;
      v.volume = 0.85;
      v.play().catch(() => {
        // If browser blocks autoplay with sound, fall back to muted
        v.muted = true;
        v.play().catch(() => {});
      });
    }

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ?? "Video player"}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-sm cursor-pointer"
      style={{ animation: "modalFadeIn 220ms ease-out" }}
    >
      {/* Close button – top right of viewport */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Đóng video"
        className="absolute top-6 right-6 md:top-8 md:right-8 z-20 text-white/80 hover:text-[#D4A853] transition-colors duration-200 cursor-pointer"
      >
        <X size={32} strokeWidth={1.5} />
      </button>

      {/* Video container – clicks here do NOT close */}
      <div
        className="relative z-10 cursor-default flex flex-col items-center"
        style={{
          width: "min(95vw, 1600px)",
          animation: "videoScaleIn 320ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          playsInline
          className="bg-black shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
          style={{
            width: "100%",
            maxHeight: "88vh",
            objectFit: "contain",
          }}
        />

        {title && (
          <p className="font-[family-name:var(--font-heading)] text-white/90 italic text-lg md:text-xl mt-5 text-center">
            {title}
          </p>
        )}
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
