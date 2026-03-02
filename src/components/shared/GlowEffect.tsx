interface GlowEffectProps {
  /** Circle diameter in px (default: 900) */
  size?: number;
  /** CSS top value (default: -250) */
  top?: number | string;
  /** CSS left value (default: "60%") */
  left?: number | string;
  /** CSS right value */
  right?: number | string;
  /** CSS bottom value */
  bottom?: number | string;
  /** Blur radius in px (default: 650) */
  blur?: number;
  /** Background color (default: "#007AFF4D") */
  color?: string;
  /** CSS transform */
  transform?: string;
  /** z-index (default: 5) */
  zIndex?: number;
  /** Extra className */
  className?: string;
}

const GlowEffect = ({
  size = 900,
  top = -250,
  left = "60%",
  right,
  bottom,
  blur = 650,
  color = "#007AFF4D",
  transform,
  zIndex = 5,
  className = "",
}: GlowEffectProps) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        backgroundColor: color,
        filter: `blur(${blur}px)`,
        mixBlendMode: "plus-lighter",
        zIndex,
        transform,
      }}
    />
  );
};

export default GlowEffect;
