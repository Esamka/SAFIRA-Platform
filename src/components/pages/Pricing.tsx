"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import PricingPlans from "@/components/sections/PricingPlans";
import PlanComparison from "@/components/sections/PlanComparison";
import GlowEffect from "@/components/shared/GlowEffect";

export default function Pricing() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	return (
		<main className="relative w-full min-h-screen overflow-x-hidden bg-black text-white">
			<section className="relative w-full min-h-[300px] sm:min-h-[380px] md:min-h-[463px]">
				<Image
					src="/bckgrnd%201.png"
					alt="Top Background"
					fill
					className="object-cover z-10"
					priority
				/>

				<div
					className="relative z-20 flex flex-col justify-end px-6 sm:px-10 md:px-[122px] pt-32 sm:pt-40 md:pt-[184px] pb-10"
					style={{ direction: isRTL ? "rtl" : "ltr" }}
				>
					<h1
						className="font-bold text-2xl sm:text-3xl md:text-4xl capitalize"
						style={{ fontFamily: "Orbitron" }}
					>
						{t("pricing.page_title")}
					</h1>

					<p
						className="mt-4 max-w-[900px] text-base sm:text-lg md:text-xl capitalize"
						style={{
							fontFamily: "Commissioner",
							lineHeight: "32px",
							color: "rgba(255, 255, 255, 0.8)",
						}}
					>
						{t("pricing.page_description")}
					</p>
				</div>

				<div
					className="pointer-events-none absolute rounded-full z-5"
					style={{
						width: 900,
						height: 900,
						top: -250,
						left: "60%",
						backgroundColor: "#007AFF4D",
						filter: "blur(650px)",
						mixBlendMode: "plus-lighter",
					}}
				/>
			</section>

			<section className="relative mx-auto max-w-[1193.59px] px-6 pb-8 text-white">
				<h2
					className="text-2xl sm:text-3xl md:text-4xl text-center capitalize mb-10 md:mb-12"
					style={{
						fontFamily: "Orbitron",
						fontWeight: 500,
					}}
				>
					{t("plans2.flexible_title")}
				</h2>
				<PricingPlans showTitle={false} isRTL={isRTL} />
			</section>

			<section className="relative mx-auto max-w-[1252px] px-6 pb-8 text-white overflow-visible">
				<PlanComparison isRTL={isRTL} />
				{/* Glow below notes */}
				<GlowEffect
					size={500}
					top={undefined}
					bottom={-80}
					left="-10%"
					blur={400}
					zIndex={0}
				/>
			</section>

			<section className="relative mx-auto max-w-[1193.59px] px-6 py-8 flex justify-center">
				<CTASection
					title={t("pricing.cta_title")}
					subtitle={t("pricing.cta_subtitle")}
					buttonText={t("pricing.cta_button")}
					buttonHref="/contact"
					secondaryButtonText={t("pricing.cta_secondary_button")}
					secondaryButtonHref="/contact"
					backgroundImage="/Frame 1707480369.png"
					isRTL={isRTL}
				/>
			</section>
		</main>
	);
}
