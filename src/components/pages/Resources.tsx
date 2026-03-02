"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useState } from "react";
import ContentSection from "@/components/sections/ContentSection";
import GlowEffect from "@/components/shared/GlowEffect";

export default function Resources() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";
	const [activeTab, setActiveTab] = useState("all");
	const tabs = t("resources.tabs", { returnObjects: true }) as Array<{ id: string; label: string }>;

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
						width: 367,
						height: 45,
						fontFamily: "Orbitron",
						fontWeight: 700,
						fontSize: 36,
						lineHeight: "100%",
						textTransform: "capitalize",
						color: "rgba(255, 255, 255, 1)",
						opacity: 1,
					}}
				>
					{t("resources.page_title")}
				</div>

				<div
					className="absolute z-20"
					style={{
						[isRTL ? "right" : "left"]: "122px",
						top: "249px",
						width: 901.75,
						height: 32,
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
					{t("resources.page_description")}
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

			<section className="relative mx-auto max-w-[1193.59px] px-6 py-12" dir={isRTL ? "rtl" : "ltr"}>
				<div
					style={{
						display: "flex",
						width: 901,
						height: 48,
						gap: "24px",
						justifyContent: isRTL ? "flex-end" : "flex-start",
						[isRTL ? "marginRight" : "marginLeft"]: "122px",
					}}
				>
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							style={{
								width: tab.id === "all" ? 95 : 183,
								height: 48,
								gap: "8px",
								borderRadius: "10px",
								border: tab.id === "all" ? "none" : (activeTab === tab.id ? "1px solid rgba(255, 255, 255, 1)" : "1px solid rgba(255, 255, 255, 0.8)"),
								paddingTop: "16px",
								paddingRight: "32px",
								paddingBottom: "16px",
								paddingLeft: "32px",
								background: tab.id === "all" ? "linear-gradient(180deg, #007AEB 0%, #82DEF5 100%)" : (activeTab === tab.id ? "rgba(46, 169, 255, 0.1)" : "transparent"),
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: "pointer",
								transition: "all 0.3s ease",
								whiteSpace: "nowrap",
								overflow: "hidden",
								textOverflow: "ellipsis",
							}}
						>
							<span
								style={{
									fontFamily: "Commissioner",
									fontWeight: 500,
									fontSize: 13,
									lineHeight: "100%",
									textAlign: "center",
									textTransform: "capitalize",
									color: tab.id === "all" ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.8)",
									whiteSpace: "nowrap",
									overflow: "hidden",
									textOverflow: "ellipsis",
								}}
							>
								{tab.label}
							</span>
						</button>
					))}
				</div>
			</section>

			<section className="relative mx-auto max-w-[1193.59px] px-6 py-20 flex justify-center">
				{/* Glow — right side, top area */}
				<GlowEffect
					size={500}
					top={-100}
					left={undefined}
					right="-15%"
					blur={350}
					zIndex={0}
				/>
				<ContentSection
					image="/Group 3882.png"
					translationKey="resources.aiSupport"
					reverseOrder={false}
				/>
			</section>

			<section className="relative mx-auto max-w-[1193.59px] px-6 py-20 flex justify-center">
				<ContentSection
					image="/Group 3882.png"
					translationKey="resources.aiSupport"
					reverseOrder={true}
				/>
			</section>

			<section className="relative mx-auto max-w-[1193.59px] px-6 py-20 flex justify-center">
				{/* Glow — left side, middle area */}
				<GlowEffect
					size={450}
					top={-80}
					left="-12%"
					blur={300}
					zIndex={0}
				/>
				<ContentSection
					image="/Group 3882.png"
					translationKey="resources.aiSupport"
					reverseOrder={false}
				/>
			</section>

			<section className="relative mx-auto max-w-[1193.59px] px-6 py-20 flex justify-center">
				<ContentSection
					image="/Group 3882.png"
					translationKey="resources.aiSupport"
					reverseOrder={true}
				/>
			</section>

		</main>
	);
}
