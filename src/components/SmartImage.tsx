import { useState, type CSSProperties } from "react";
import { ImageOff } from "lucide-react";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  label?: string;
  style?: CSSProperties;
}

/**
 * Image with a graceful, on-brand fallback in case the remote (Unsplash)
 * placeholder fails to load — keeps the layout looking intentional instead
 * of showing a broken-image icon.
 */
export function SmartImage({ src, alt, className, label, style }: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary via-primary-soft to-primary text-accent/70 ${className ?? ""}`}
        style={style}
      >
        <ImageOff size={28} strokeWidth={1.5} />
        {label && <span className="text-xs tracking-wide text-white/50">{label}</span>}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      style={style}
      onError={() => setFailed(true)}
    />
  );
}
