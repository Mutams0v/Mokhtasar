import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

interface PlaceholderImageProps {
  icon: LucideIcon;
  label: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * A self-contained, on-brand visual placeholder — no external network
 * dependency at all (unlike hotlinked stock photos, which can silently
 * fail to load once deployed). Used everywhere a real project photo
 * will eventually go. Swap this for <SmartImage src="/your-photo.jpg" />
 * once real project photography is available.
 */
export function PlaceholderImage({ icon: Icon, label, className, style }: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-primary via-primary-soft to-primary ${className ?? ""}`}
      style={style}
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" preserveAspectRatio="none">
        <pattern id={`grid-${label}`} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0 L0 0 0 28" fill="none" stroke="var(--color-accent)" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#grid-${label})`} />
      </svg>
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
        <Icon size={24} strokeWidth={1.6} />
      </div>
      <span className="relative text-xs font-medium tracking-wide text-white/60">{label}</span>
    </div>
  );
}
