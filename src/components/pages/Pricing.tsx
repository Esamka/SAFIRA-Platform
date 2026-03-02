"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import PricingPlans from "@/components/sections/PricingPlans";
import PlanComparison from "@/components/sections/PlanComparison";

export default function Pricing() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	return (
		<main className="relative w-full min-h-screen overflow-x-hidden bg-black text-white">
			<section className="relative w-full" style={{ height: 463.22 }}>
				<Image
					src="/bckgrnd%201.png"
					alt="Top Background"
					width={1440}
					height={399}
					className="absolute top-0 left-0 w-full z-10 object-cover"
					style={{
						height: 399,
					}}
					priority
				/>

				<div
					className="absolute font-bold z-20"
					style={{
						[isRTL ? "right" : "left"]: "122px",
						top: "184px",
						width: 464,
						height: 45,
						fontFamily: "Orbitron",
						fontWeight: 700,
						fontSize: 36,
						lineHeight: "100%",
						textTransform: "capitalize",
						opacity: 1,
					}}
				>
					{t("pricing.page_title")}
				</div>

				<div
					className="absolute z-20"
					style={{
						[isRTL ? "right" : "left"]: "122px",
						top: "249px",
						width: 901.75,
						height: 64,
						fontFamily: "Commissioner",
						fontWeight: 400,
						fontSize: 20,
						lineHeight: "32px",
						textTransform: "capitalize",
						color: "rgba(255, 255, 255, 0.8)",
						opacity: 1,
						direction: isRTL ? "rtl" : "ltr",
						textAlign: isRTL ? "right" : "left",
					}}
				>
					{t("pricing.page_description")}
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
				<div
					style={{
						fontFamily: "Orbitron",
						fontWeight: 500,
						fontSize: 36,
						lineHeight: "100%",
						textAlign: "center",
						textTransform: "capitalize",
						marginBottom: 48,
					}}
				>
					{t("plans2.flexible_title")}
				</div>
				<PricingPlans showTitle={false} isRTL={isRTL} />
			</section>

			<section className="relative mx-auto max-w-[1252px] px-6 pb-8 text-white">
				<PlanComparison isRTL={isRTL} />
			</section>

			<section className="relative mx-auto max-w-[1193.59px] px-6 py-8 flex justify-center">
				<CTASection
					title={t("pricing.cta_title")}
					subtitle={t("pricing.cta_subtitle")}
					buttonText={t("pricing.cta_button")}
					buttonHref="/sign-in"
					secondaryButtonText={t("pricing.cta_secondary_button")}
					secondaryButtonHref="/contact"
					backgroundImage="/Frame 1707480369.png"
					isRTL={isRTL}
				/>
			</section>
		</main>
	);
}
