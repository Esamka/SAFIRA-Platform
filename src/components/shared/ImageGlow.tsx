interface ImageGlowProps {
  /** Ellipse width in px (default: 500) */
  width?: number;
  /** Ellipse height in px (default: 200) */
  height?: number;
  /** Blur radius in px (default: 80) */
  blur?: number;
  /** Glow color (default: "rgba(0, 122, 255, 0.35)") */
  color?: string;
  /** Vertical offset from bottom in px (default: -40) — negative pushes it below */
  offsetY?: number;
  /** Extra className */
  className?: string;
}

const ImageGlow = ({
  width = 500,
  height = 200,
  blur = 80,
  color = "rgba(0, 122, 255, 0.35)",
  offsetY = -40,
  className = "",
}: ImageGlowProps) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 ${className}`}
      style={{
        width,
        height,
        bottom: offsetY,
        transform: "translateX(-50%)",
        background: `radial-gradient(ellipse at center, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        zIndex: 0,
      }}
    />
  );
};

export default ImageGlow;
