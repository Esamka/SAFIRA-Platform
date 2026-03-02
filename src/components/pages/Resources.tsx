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
						{t("resources.page_title")}
					</h1>

					<p
						className="mt-4 max-w-[900px] text-base sm:text-lg md:text-xl capitalize"
						style={{
							fontFamily: "Commissioner",
							lineHeight: "32px",
							color: "rgba(255, 255, 255, 0.8)",
						}}
					>
						{t("resources.page_description")}
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

			<section className="relative mx-auto max-w-[1193.59px] px-6 py-12" dir={isRTL ? "rtl" : "ltr"}>
				<div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center w-full">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className="h-12 px-6 sm:px-8 rounded-[10px] flex items-center justify-center cursor-pointer transition-all duration-300 whitespace-nowrap text-sm sm:text-base capitalize"
							style={{
								border: tab.id === "all" ? "none" : (activeTab === tab.id ? "1px solid rgba(255, 255, 255, 1)" : "1px solid rgba(255, 255, 255, 0.8)"),
								background: tab.id === "all" ? "linear-gradient(180deg, #007AEB 0%, #82DEF5 100%)" : (activeTab === tab.id ? "rgba(46, 169, 255, 0.1)" : "transparent"),
								fontFamily: "Commissioner",
								fontWeight: 500,
								color: tab.id === "all" ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.8)",
							}}
						>
							{tab.label}
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
