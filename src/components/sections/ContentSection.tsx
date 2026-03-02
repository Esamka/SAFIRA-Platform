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
      className={`w-full max-w-[1194px] flex flex-col ${shouldReverse ? "md:flex-row-reverse" : "md:flex-row"} justify-between items-center gap-6 md:gap-8`}
    >
      <div className="flex-1 flex flex-col justify-start gap-4 w-full">
        <h2
          className="text-xl sm:text-2xl md:text-[30px]"
          style={{
            fontFamily: "Orbitron",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "0%",
            textTransform: "capitalize",
            color: "rgba(255, 255, 255, 1)",
            margin: 0,
          }}
        >
          {t(`${translationKey}.title`)}
        </h2>
        <div className="w-full h-0 border border-white/20" />
        <div
          className={`${isRTL ? "border-r-4" : "border-l-4"} border-[#2EA9FF] bg-transparent ps-4 pe-2 py-3 text-sm sm:text-base leading-relaxed text-white/90`}
          style={{
            fontFamily: "Commissioner",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 1)",
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
        height={314}
        className="w-full md:w-[45%] max-w-[556px] rounded-lg object-cover flex-shrink-0"
      />
    </div>
  );
}
