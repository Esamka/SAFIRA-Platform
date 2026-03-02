"use client";

import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundImage: string;
  isRTL?: boolean;
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonHref,
  secondaryButtonText,
  secondaryButtonHref,
  backgroundImage,
  isRTL = false,
}: CTASectionProps) {
  return (
    <div
      className="relative w-full max-w-4xl rounded-lg overflow-hidden flex items-center justify-center"
      style={{
        minHeight: 376,
        background: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        aspectRatio: "1120 / 376",
      }}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="CTA Background"
        fill
        className="absolute inset-0 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Ellipse Effect */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "50%",
          left: isRTL ? "20%" : "80%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#007AFF4D",
          filter: "blur(120px)",
          mixBlendMode: "plus-lighter",
          zIndex: 5,
        }}
      />

      {/* Content Container */}
      <div
        className="relative z-20 flex flex-col items-center justify-center gap-6 px-8 py-12 max-w-4xl text-center"
      >
        {/* Title */}
        <h2
          className="text-white font-semibold"
          style={{
            fontFamily: "Orbitron",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "100%",
            letterSpacing: 0,
            maxWidth: 990,
          }}
        >
          {title}
        </h2>

        {/* Subtitle */}
        <p
          className="text-white opacity-80"
          style={{
            fontFamily: "Commissioner",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "22.4px",
            letterSpacing: 0,
            maxWidth: 618,
          }}
        >
          {subtitle}
        </p>

        {/* Button */}
        <div className="mt-4 flex gap-4 items-center justify-center" style={{ flexDirection: isRTL ? "row-reverse" : "row" }}>
          <CTAButton href={buttonHref}>
            {buttonText}
          </CTAButton>
          
          {secondaryButtonText && secondaryButtonHref && (
            <Link href={secondaryButtonHref}>
              <button
                className="h-12 px-8 rounded-lg border border-white/20 bg-transparent text-white/80 font-normal text-base transition-all duration-300 cursor-pointer flex items-center justify-center"
                style={{
                  direction: isRTL ? "rtl" : "ltr",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(252, 252, 252, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "rgba(252, 252, 252, 0.23)";
                }}
              >
                {secondaryButtonText}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
