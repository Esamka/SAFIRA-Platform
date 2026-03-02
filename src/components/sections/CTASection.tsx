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
        minHeight: 250,
        background: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
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
        className="relative z-20 flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 sm:px-8 py-8 sm:py-12 max-w-4xl text-center"
      >
        {/* Title */}
        <h2
          className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px]"
          style={{
            fontFamily: "Orbitron",
            fontWeight: 400,
            lineHeight: "120%",
            letterSpacing: 0,
            maxWidth: 990,
          }}
        >
          {title}
        </h2>

        {/* Subtitle */}
        <p
          className="text-white opacity-80 text-sm sm:text-base md:text-lg lg:text-xl"
          style={{
            fontFamily: "Commissioner",
            fontWeight: 400,
            lineHeight: "1.4",
            letterSpacing: 0,
            maxWidth: 618,
          }}
        >
          {subtitle}
        </p>

        {/* Button */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center" style={{ flexDirection: isRTL ? "row-reverse" : undefined }}>
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
