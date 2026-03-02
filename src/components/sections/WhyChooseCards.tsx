"use client";

import { useTranslation } from "react-i18next";

interface WhyChooseCardsProps {
	/** i18n prefix for translation keys (e.g. "features_page" or "features_page") */
	translationPrefix: string;
	/** Card keys array — defaults to 6 cards */
	cardKeys?: string[];
	/** Optional small title above the heading */
	smallTitle?: string;
	/** Section heading */
	title?: string;
}

export default function WhyChooseCards({
	translationPrefix,
	cardKeys = ["card1_title", "card2_title", "card3_title", "card4_title", "card5_title", "card6_title"],
	smallTitle,
	title,
}: WhyChooseCardsProps) {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	const cardIcons: Record<string, React.ReactNode> = {
		card1_title: (
			// Scalable - growth/expand icon
			<svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#2EA9FF" strokeWidth="1.5" />
				<rect x="3" y="3" width="5" height="5" rx="1.5" stroke="#2EA9FF" strokeWidth="1.5" />
				<circle cx="18" cy="5.5" r="3" stroke="#2EA9FF" strokeWidth="1.5" />
				<path d="M5.5 8v5M11 17h3M15 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" stroke="#2EA9FF" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M18 8.5V12M18 12l-3 2" stroke="#2EA9FF" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		),
		card2_title: (
			// Secure - lock/shield icon
			<svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="5" y="11" width="14" height="10" rx="2" stroke="#2EA9FF" strokeWidth="1.5" />
				<path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#2EA9FF" strokeWidth="1.5" strokeLinecap="round" />
				<circle cx="12" cy="16" r="1.5" stroke="#2EA9FF" strokeWidth="1.5" />
				<line x1="12" y1="17.5" x2="12" y2="19" stroke="#2EA9FF" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		),
		card3_title: (
			// Platform - dashboard/nodes icon
			<svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="12" cy="5" r="2.5" stroke="#2EA9FF" strokeWidth="1.5" />
				<circle cx="5" cy="19" r="2.5" stroke="#2EA9FF" strokeWidth="1.5" />
				<circle cx="19" cy="19" r="2.5" stroke="#2EA9FF" strokeWidth="1.5" />
				<path d="M12 7.5V12M12 12L6.5 17M12 12l5.5 5" stroke="#2EA9FF" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		),
		card4_title: (
			// Fast onboarding - rocket icon
			<svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12 2C12 2 8 6 8 12c0 2.5.5 4.5 1.5 6h5c1-1.5 1.5-3.5 1.5-6 0-6-4-10-4-10z" stroke="#2EA9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M8 12H5l1.5-3M16 12h3l-1.5-3" stroke="#2EA9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<circle cx="12" cy="10" r="1.5" stroke="#2EA9FF" strokeWidth="1.5" />
				<path d="M9.5 18c0 1.5 1 4 2.5 4s2.5-2.5 2.5-4" stroke="#2EA9FF" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		),
		card5_title: (
			// Integrations - connected links icon
			<svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="7" cy="7" r="3" stroke="#2EA9FF" strokeWidth="1.5" />
				<circle cx="17" cy="7" r="3" stroke="#2EA9FF" strokeWidth="1.5" />
				<circle cx="12" cy="17" r="3" stroke="#2EA9FF" strokeWidth="1.5" />
				<path d="M9.5 8.5L11 14.5M14.5 8.5L13 14.5M10 7h4" stroke="#2EA9FF" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		),
		card6_title: (
			// Transparent - eye/visibility icon
			<svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" stroke="#2EA9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<circle cx="12" cy="12" r="3" stroke="#2EA9FF" strokeWidth="1.5" />
				<path d="M12 5v-1M12 20v-1M5 12H4M20 12h-1" stroke="#2EA9FF" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		),
	};

	return (
		<div className="mx-auto flex flex-col items-center" style={{ minHeight: 478, gap: 48 }} dir={isRTL ? "rtl" : "ltr"}>
			{/* Header */}
			{(smallTitle || title) && (
				<div className="text-center">
					{smallTitle && (
						<p
							className="font-normal text-xl capitalize text-white mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "100%",
								textAlign: "center",
							}}
						>
							{smallTitle}
						</p>
					)}
					{title && (
						<h2
							className="font-medium text-2xl sm:text-3xl md:text-4xl capitalize text-white"
							style={{
								fontFamily: "Orbitron",
								lineHeight: "1.4",
								textAlign: "center",
							}}
						>
							{title}
						</h2>
					)}
				</div>
			)}

			{/* Cards grid — responsive */}
			<div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full"
				style={{ maxWidth: 1252 }}
			>
				{cardKeys.map((k) => (
					<div
						key={k}
						className="relative overflow-hidden rounded-[10px] w-full min-h-[210px]"
						style={{
							background: "rgba(0, 10, 19, 1)",
						}}
						dir={isRTL ? "rtl" : "ltr"}
					>
						<div className="flex h-full flex-col pt-4 px-6 pb-6">
							<div className="flex justify-start">
								{cardIcons[k] || cardIcons["card1_title"]}
							</div>

							<div
								className="mt-10 text-start"
								style={{
									fontFamily: "Commissioner",
									fontWeight: 500,
									fontSize: 18,
									lineHeight: "28px",
									color: "rgba(255, 255, 255, 1)",
									textAlign: isRTL ? "right" : "left",
								}}
							>
								{t(`${translationPrefix}.why_choose_cards.${k}`)}
							</div>

							<div
								className="mt-4 text-start"
								style={{
									fontFamily: "Commissioner",
									fontWeight: 400,
									fontSize: 14,
									lineHeight: "22px",
									color: "rgba(255, 255, 255, 0.7)",
									textAlign: isRTL ? "right" : "left",
								}}
							>
								{t(`${translationPrefix}.why_choose_cards.${k.replace("_title", "_desc")}`)}
							</div>
						</div>

						{/* Bottom gradient border */}
						<div
							className="absolute bottom-0 left-0 h-px w-full"
							style={{
								background:
									"linear-gradient(270deg, rgba(0, 72, 139, 0) 5.77%, #007AEB 43.27%, #007AEB 66.35%, rgba(37, 37, 37, 0) 100%)",
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
