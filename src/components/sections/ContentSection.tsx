"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

interface ContentSectionProps {
  image: string;
  translationKey: string;
  reverseOrder?: boolean;
}

export default function ContentSection({
  image,
  translationKey,
  reverseOrder = false,
}: ContentSectionProps) {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar";

  // Calculate flex direction based on RTL and reverseOrder
  const shouldReverse = (isRTL && !reverseOrder) || (!isRTL && reverseOrder);

  return (
    <div
      style={{
        width: 1194,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: shouldReverse ? "row-reverse" : "row",
        opacity: 1,
        gap: "32px",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "16px",
          opacity: 1,
        }}
      >
        <h2
          style={{
            fontFamily: "Orbitron",
            fontWeight: 700,
            fontSize: "30px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textTransform: "capitalize",
            color: "rgba(255, 255, 255, 1)",
            opacity: 1,
            margin: 0,
          }}
        >
          {t(`${translationKey}.title`)}
        </h2>
        <div
          style={{
            width: "100%",
            height: 0,
            border: "1px solid rgba(255, 255, 255, 1)",
            opacity: 0.2,
          }}
        />
        <div
          className={`${isRTL ? "border-r-4" : "border-l-4"} border-[#2EA9FF] bg-transparent ps-4 pe-2 py-3 text-sm sm:text-base leading-relaxed text-white/90`}
          style={{
            fontFamily: "Commissioner",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 1)",
            opacity: 1,
          }}
          dangerouslySetInnerHTML={{
            __html: t(`${translationKey}.description`),
          }}
        />
      </div>

      <Image
        src={image}
        alt={t(`${translationKey}.title`)}
        width={556}
        height={313.826904296875}
        style={{
          borderRadius: "8px",
          opacity: 1,
          objectFit: "cover",
          flexShrink: 0,
        }}
      />
    </div>
  );
}
