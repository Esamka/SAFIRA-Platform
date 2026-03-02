"use client";

import { Button } from "@/components/ui/button";
import CTAButton from "@/components/ui/CTAButton";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import PricingPlans from "@/components/sections/PricingPlans";
import WhyChooseCards from "@/components/sections/WhyChooseCards";
import GlowEffect from "@/components/shared/GlowEffect";

export default function Home() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";
	const trackRef = useRef<HTMLDivElement>(null);
	const [current, setCurrent] = useState(0);
	const [visible, setVisible] = useState(3);
	const CARD_W = 360;
	const GAP = 24;
	const testimonials =
		((i18n.t("testimonials.items", { returnObjects: true }) as unknown) as Array<{
			text: string;
			name: string;
			role: string;
		}>) || [];

	useEffect(() => {
		const update = () => {
			const container = trackRef.current?.parentElement;
			if (!container) return;
			const count = Math.max(1, Math.floor((container.clientWidth + GAP) / (CARD_W + GAP)));
			setVisible(count);
			setCurrent((c) => Math.min(c, Math.max(0, testimonials.length - count)));
		};
		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, [i18n.language, testimonials.length]);

	const maxIndex = Math.max(0, testimonials.length - visible);
	const prev = () => setCurrent((c) => Math.max(0, c - 1));
	const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

	return (
		<main className="relative w-full min-h-screen overflow-x-hidden bg-black text-white">
			<section className="relative w-full h-[400px] sm:h-[500px] md:h-[580px] lg:h-[631px]">
				<Image
					src="/bckgrnd%201.png"
					alt="Top Background"
					width={1440}
					height={631}
					className="absolute inset-0 w-full h-full z-10 object-cover"
					priority
				/>

				{/* Hero Content - positioned above image */}
				<div className="absolute inset-0 flex items-center justify-center z-20 px-4 sm:px-6">
					<div 
						className="rounded-lg bg-transparent text-center flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-14 w-full max-w-[1018px]"
					>
						<h1
							className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] text-center font-bold"
							style={{
								fontFamily: "IBM Plex Sans Arabic",
								lineHeight: "1.4",
								color: "rgba(255, 255, 255, 1)",
							}}
						>
							{t("home.title_line1")}
							<br />
							{t("home.title_line2")}
						</h1>
						<p
							className="text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-[658px] -mt-2"
							style={{
								fontFamily: "IBM Plex Sans Arabic",
								fontWeight: 400,
								lineHeight: "1.6",
								textTransform: "capitalize",
								color: "rgba(255, 255, 255, 0.8)",
							}}
						>
							{t("home.subtitle")}
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-10">
							<CTAButton href="/contact">{t("home.cta_start")}</CTAButton>
							<Link href="/contact">
								<button
									className="h-[50px] px-6 sm:px-8 rounded-[10px] border border-white/20 bg-transparent text-white flex items-center justify-center cursor-pointer hover:text-[#82DEF5] hover:border-[#82DEF5]/40 hover:bg-white/[0.04] hover:scale-[1.015] active:scale-[0.97] transition-all duration-300 ease-out"
									style={{
										fontFamily: "IBM Plex Sans Arabic",
										fontWeight: 400,
										fontSize: 16,
									}}
								>
									{t("home.cta_contact")}
								</button>
							</Link>
						</div>
					</div>
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

			{/* Remove duplicate hero section content */}
			<section className="relative mx-auto max-w-6xl px-6 pt-10 pb-20 text-white z-10">
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-0 text-center lg:divide-x-2 lg:divide-[#2EA9FF]">
						<div className="px-6 py-8 bg-transparent">
							<div className="text-3xl font-bold text-white">+ 120k</div>
							<div className="mt-3 text-white/80">{t("stats.processed")}</div>
						</div>
						<div className="px-6 py-8 bg-transparent">
							<div className="text-3xl font-bold text-white">15+</div>
							<div className="mt-3 text-white/80">{t("stats.agents")}</div>
						</div>
						<div className="px-6 py-8 bg-transparent">
							<div className="text-3xl font-bold text-white">99.9%</div>
							<div className="mt-3 text-white/80">{t("stats.uptime")}</div>
						</div>
						<div className="px-6 py-8 bg-transparent">
							<div className="text-3xl font-bold text-white">4.8</div>
							<div className="mt-3 text-white/80">{t("stats.rating")}</div>
						</div>
					</div>
			</section>

			{/* ====== Features Section ====== */}
			<section className="relative mx-auto max-w-[1193.59px] px-6 pb-28 text-white">
				<WhyChooseCards
					translationPrefix="features_page"
					smallTitle={t("features.title_small")}
					title={t("features.title")}
				/>
			</section>

			{/* ====== About Section ====== */}
			<section className="relative mx-auto max-w-[1193.59px] px-6 pb-28 text-white">
				<div
					className={`flex flex-col lg:flex-row items-center justify-between ${isRTL ? "lg:flex-row-reverse" : ""}`}
					style={{ minHeight: 420 }}
				>
					<div className="flex-1" style={{ maxWidth: 662 }} dir={isRTL ? "rtl" : "ltr"}>
						<span
							className="text-[#2EA9FF] text-sm font-semibold tracking-wide uppercase"
							style={{ fontFamily: "Commissioner" }}
						>
							{t("about.small")}
						</span>
						<h3
							className="mt-3 text-[30px]"
							style={{
								fontFamily: "Orbitron",
								fontWeight: 700,
								lineHeight: "100%",
								textTransform: "capitalize",
							}}
						>
							{t("about.title")}
						</h3>

						<div className="mt-5 flex">
							<div
								className="border-s-4 border-[#2EA9FF] ps-4"
								style={{
									maxWidth: 624,
									fontFamily: "Commissioner",
									fontWeight: 400,
									fontSize: 16,
									lineHeight: "24px",
								}}
							>
								{t("about.description")}
							</div>
						</div>

						<p
							className="mt-4"
							style={{
								fontFamily: "Commissioner",
								fontWeight: 400,
								fontSize: 16,
								lineHeight: "24px",
								color: "rgba(255, 255, 255, 0.7)",
							}}
						>
							{t("about.description2")}
						</p>

						<div className="mt-8 flex justify-start">
							<CTAButton href="/contact" reverseIcon={isRTL}>
								{t("home.cta_start")}
							</CTAButton>
						</div>
					</div>

					{/* Image Section with glow */}
					<div className="relative shrink-0 mt-10 lg:mt-0 w-full sm:w-[300px] md:w-[350px] lg:w-[420px] aspect-[420/370]">
						<div
							className="pointer-events-none absolute rounded-full"
							style={{
								width: 320,
								height: 320,
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								backgroundColor: "rgba(0, 122, 255, 0.35)",
								filter: "blur(120px)",
								mixBlendMode: "plus-lighter",
								zIndex: 0,
							}}
						/>
						<Image
							src="/chatbot-avatar.png"
							alt="Chatbot Avatar"
							fill
							className="object-contain z-10"
							priority
						/>
					</div>
				</div>
			</section>

			{/* ====== How It Works Section ====== */}
			<section className="relative mx-auto max-w-6xl px-6 pb-24 text-white overflow-visible">
				{/* Glow left side */}
				<GlowEffect
					size={450}
					top="40%"
					left="-15%"
					blur={350}
					transform="translateY(-50%)"
					zIndex={0}
				/>
				{/* Glow center */}
				<GlowEffect
					size={400}
					top="50%"
					left="45%"
					blur={400}
					color="#007AFF30"
					transform="translate(-50%, -50%)"
					zIndex={0}
				/>
				{/* Glow right side */}
				<GlowEffect
					size={400}
					top="30%"
					right="-12%"
					blur={300}
					color="#007AFF26"
					zIndex={0}
				/>
				<div className="text-center mb-10">
					<div className="text-white/70">{t("how.title_small")}</div>
					<h2 className="mt-3 text-3xl sm:text-4xl font-bold">{t("how.title")}</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
					{/* Step 1 */}
					<Card className="relative p-8 min-h-[320px] overflow-hidden border border-white/10 bg-[#0b1e36]/50">
						<div
							className="absolute inset-0 opacity-25 pointer-events-none"
							style={{
								backgroundImage: "radial-gradient(#2EA9FF55 1px, transparent 1px)",
								backgroundSize: "14px 14px",
							}}
						/>
						<div className="absolute top-5 left-1/2 -translate-x-1/2">
							<span className="inline-flex items-center rounded-full border border-[#2EA9FF]/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
								{t("how.steps.step1")}
							</span>
						</div>
						<div className="relative mt-16 px-8 pb-2 flex flex-col items-center text-center gap-4">
							<svg width="56" height="56" viewBox="0 0 24 24" fill="none">
								<path d="M6 12h8l4-4M10 16l8-8" stroke="#2EA9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<div>
								<div className="text-xl font-semibold">{t("how.items.knowledge_title")}</div>
								<p className="mt-2 text-white/80">{t("how.items.knowledge_desc")}</p>
							</div>
						</div>
					</Card>

					{/* Step 2 */}
					<Card className="relative p-8 min-h-[320px] overflow-hidden border border-white/10 bg-[#0b1e36]/50">
						<div
							className="absolute inset-0 opacity-25 pointer-events-none"
							style={{
								backgroundImage: "radial-gradient(#2EA9FF55 1px, transparent 1px)",
								backgroundSize: "14px 14px",
							}}
						/>
						<div className="absolute top-5 left-1/2 -translate-x-1/2">
							<span className="inline-flex items-center rounded-full border border-[#2EA9FF]/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
								{t("how.steps.step2")}
							</span>
						</div>
						<div className="relative mt-16 px-8 pb-2 flex flex-col items-center text-center gap-4">
							<svg width="56" height="56" viewBox="0 0 24 24" fill="none">
								<path d="M7 10l5-3 5 3-5 3-5-3zM7 14l5 3 5-3" stroke="#2EA9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<div>
								<div className="text-xl font-semibold">{t("how.items.agent_title")}</div>
								<p className="mt-2 text-white/80">{t("how.items.agent_desc")}</p>
							</div>
						</div>
					</Card>

					{/* Step 3 */}
					<Card className="relative p-8 min-h-[320px] overflow-hidden border border-white/10 bg-[#0b1e36]/50">
						<div
							className="absolute inset-0 opacity-25 pointer-events-none"
							style={{
								backgroundImage: "radial-gradient(#2EA9FF55 1px, transparent 1px)",
								backgroundSize: "14px 14px",
							}}
						/>
						<div className="absolute top-5 left-1/2 -translate-x-1/2">
							<span className="inline-flex items-center rounded-full border border-[#2EA9FF]/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
								{t("how.steps.step3")}
							</span>
						</div>
						<div className="relative mt-16 px-8 pb-2 flex flex-col items-center text-center gap-4">
							<svg width="56" height="56" viewBox="0 0 24 24" fill="none">
								<path d="M8 8h8v8H8zM4 12h4v4H4zM16 4h4v4h-4z" stroke="#2EA9FF" strokeWidth="2" />
							</svg>
							<div>
								<div className="text-xl font-semibold">{t("how.items.test_title")}</div>
								<p className="mt-2 text-white/80">{t("how.items.test_desc")}</p>
							</div>
						</div>
					</Card>

					{/* Step 4 */}
					<Card className="relative p-8 min-h-[320px] overflow-hidden border border-white/10 bg-[#0b1e36]/50">
						<div
							className="absolute inset-0 opacity-25 pointer-events-none"
							style={{
								backgroundImage: "radial-gradient(#2EA9FF55 1px, transparent 1px)",
								backgroundSize: "14px 14px",
							}}
						/>
						<div className="absolute top-5 left-1/2 -translate-x-1/2">
							<span className="inline-flex items-center rounded-full border border-[#2EA9FF]/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
								{t("how.steps.step4")}
							</span>
						</div>
						<div className="relative mt-16 px-8 pb-2 flex flex-col items-center text-center gap-4">
							<svg width="56" height="56" viewBox="0 0 24 24" fill="none">
								<path d="M4 6v12M8 4v16M12 7v10M16 5v14M20 8v8" stroke="#2EA9FF" strokeWidth="2" strokeLinecap="round" />
							</svg>
							<div>
								<div className="text-xl font-semibold">{t("how.items.launch_title")}</div>
								<p className="mt-2 text-white/80">{t("how.items.launch_desc")}</p>
							</div>
						</div>
					</Card>
				</div>
			</section>

			{/* ====== Use Cases Section ====== */}
			<section className="relative mx-auto max-w-[1193px] px-4 sm:px-6 pb-16 md:pb-28 text-white overflow-visible">
				<GlowEffect
					size={450}
					top="30%"
					right="-15%"
					blur={350}
					color="#007AFF30"
					zIndex={0}
				/>
				<div className={`flex flex-col lg:flex-row items-center justify-between rounded-[10px] gap-8 lg:gap-0 ${isRTL ? "lg:flex-row-reverse" : ""}`}>
					<div className="shrink-0 relative rounded-[10px] overflow-hidden w-full lg:w-auto">
						<Image
							src="/chatbot-hologram-social-network-icons-ai-communication 1.png"
							alt="Chatbot Hologram"
							width={536}
							height={364}
							priority
							className="block w-full lg:w-[536px] h-auto"
						/>
						<div className="absolute inset-0" style={{ backgroundColor: "#0b274955", mixBlendMode: "plus-lighter" }} />
					</div>
					<div className={`flex-1 ps-0 lg:ps-8 ${isRTL ? "text-right" : "text-left"}`} dir={isRTL ? "rtl" : "ltr"}>
						<div className="text-white/70">{t("usecases.title_small")}</div>
						<h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold">{t("usecases.title")}</h3>
						<div className="mt-6 space-y-5">
							<div className="flex items-start gap-4">
								<div className="shrink-0 w-9 h-9 rounded-lg bg-[#2EA9FF]/15 flex items-center justify-center mt-0.5">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2EA9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
									</svg>
								</div>
								<div>
									<div className="text-xl font-semibold">{t("usecases.items.item1_title")}</div>
									<p className="mt-2 text-white/80 whitespace-pre-line">{t("usecases.items.item1_desc")}</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="shrink-0 w-9 h-9 rounded-lg bg-[#2EA9FF]/15 flex items-center justify-center mt-0.5">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2EA9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
										<path d="M16 3.13a4 4 0 0 1 0 7.75" />
									</svg>
								</div>
								<div>
									<div className="text-xl font-semibold">{t("usecases.items.item2_title")}</div>
									<p className="mt-2 text-white/80">{t("usecases.items.item2_desc")}</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="shrink-0 w-9 h-9 rounded-lg bg-[#2EA9FF]/15 flex items-center justify-center mt-0.5">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2EA9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<circle cx="12" cy="12" r="3" />
										<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
									</svg>
								</div>
								<div>
									<div className="text-xl font-semibold">{t("usecases.items.item3_title")}</div>
									<p className="mt-2 text-white/80">{t("usecases.items.item3_desc")}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ====== Security Section ====== */}
			<section className="relative mx-auto max-w-[1252px] px-6 pb-28 text-white overflow-visible">
				<GlowEffect
					size={450}
					top="40%"
					left="-12%"
					blur={350}
					color="#007AFF30"
					transform="translateY(-50%)"
					zIndex={0}
				/>
				<GlowEffect
					size={400}
					top="30%"
					right="-14%"
					blur={300}
					color="#007AFF26"
					zIndex={0}
				/>
				<div className="text-center mb-8">
					<div className="text-white/70">{t("security.section_small")}</div>
					<h2 className="mt-2 text-3xl sm:text-4xl font-bold">{t("security.title")}</h2>
				</div>
				<div className="flex flex-wrap justify-center gap-5" style={{ direction: "ltr" }}>
					{[
						{
							title: t("security.cards.rbac_title"),
							desc: t("security.cards.rbac_desc"),
							icon: (
								<svg width="44" height="44" viewBox="0 0 24 24" fill="none">
									<path d="M6 6h.01M12 6h.01M18 6h.01M6 12h.01M12 12h.01M18 12h.01M6 18h.01M12 18h.01M18 18h.01" stroke="#2EA9FF" strokeWidth="2" strokeLinecap="round" />
									<path d="M6 6v12M12 6v12M18 6v12" stroke="#2EA9FF33" strokeWidth="1" />
								</svg>
							),
						},
						{
							title: t("security.cards.encrypted_title"),
							desc: t("security.cards.encrypted_desc"),
							icon: (
								<svg width="44" height="44" viewBox="0 0 24 24" fill="none">
									<rect x="5" y="6" width="14" height="12" rx="2" stroke="#2EA9FF" strokeWidth="2" />
									<path d="M9 10h6M9 14h6" stroke="#2EA9FF" strokeWidth="2" strokeLinecap="round" />
									<path d="M16.5 7.5l2 2" stroke="#2EA9FF" strokeWidth="2" strokeLinecap="round" />
								</svg>
							),
						},
						{
							title: t("security.cards.gdpr_title"),
							desc: t("security.cards.gdpr_desc"),
							icon: (
								<svg width="44" height="44" viewBox="0 0 24 24" fill="none">
									<rect x="6" y="3" width="12" height="18" rx="2" stroke="#2EA9FF" strokeWidth="2" />
									<path d="M8 7h8M8 11h8M8 15h6" stroke="#2EA9FF" strokeWidth="2" strokeLinecap="round" />
								</svg>
							),
						},
						{
							title: t("security.cards.audit_title"),
							desc: t("security.cards.audit_desc"),
							icon: (
								<svg width="44" height="44" viewBox="0 0 24 24" fill="none">
									<rect x="4" y="10" width="16" height="8" rx="2" stroke="#2EA9FF" strokeWidth="2" />
									<path d="M8 10V8a4 4 0 118 0v2" stroke="#2EA9FF" strokeWidth="2" strokeLinecap="round" />
								</svg>
							),
						},
					].map((card, i) => (
						<div
							key={i}
							className="relative overflow-hidden rounded-[10px] w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] min-h-[210px]"
							style={{
								background: "rgba(0, 10, 19, 1)",
							}}
							dir={isRTL ? "rtl" : "ltr"}
						>
							<div className="flex h-full flex-col pt-4 px-6 pb-6">
								<div className="flex justify-start">{card.icon}</div>
								<div
									className="mt-6"
									style={{
										fontFamily: "Commissioner",
										fontWeight: 500,
										fontSize: 16,
										lineHeight: "24px",
										color: "rgba(255, 255, 255, 1)",
									}}
								>
									{card.title}
								</div>
								<div
									className="mt-2"
									style={{
										fontFamily: "Commissioner",
										fontWeight: 400,
										fontSize: 13,
										lineHeight: "20px",
										color: "rgba(255, 255, 255, 0.7)",
									}}
								>
									{card.desc}
								</div>
							</div>
							{/* Bottom gradient border */}
							<div
								className="absolute bottom-0 left-0 h-px w-full"
								style={{
									background: "linear-gradient(270deg, rgba(0, 72, 139, 0) 5.77%, #007AEB 43.27%, #007AEB 66.35%, rgba(37, 37, 37, 0) 100%)",
								}}
							/>
						</div>
					))}
				</div>
			</section>

			{/* ====== Testimonials Section ====== */}
			<section className="relative mx-auto max-w-[1252px] px-6 pb-28 text-white">
				<div className="text-center mb-6">
					<div className="text-white/70">{t("testimonials.small")}</div>
					<h2 className="mt-2 text-3xl sm:text-4xl font-bold">{t("testimonials.title")}</h2>
				</div>
				<div className="relative overflow-hidden">
					<div
						ref={trackRef}
						className="flex gap-6 px-1 will-change-transform"
						style={{
							transform: `translateX(${-current * (CARD_W + GAP)}px)`,
							transition: "transform 400ms ease",
							direction: "ltr",
						}}
					>
						{testimonials.map((item, i) => (
							<div key={i} className="shrink-0 w-[360px]">
								<Card className="relative p-6 bg-[#0b1e36]/60 border border-white/10 rounded-2xl overflow-hidden">
									<div
										className="absolute -inset-10"
										style={{
											background:
												"radial-gradient(200px circle at 50% 50%, rgba(46,169,255,0.15), transparent 60%)",
											pointerEvents: "none",
										}}
									/>
									<div className={`${isRTL ? "text-right" : "text-left"} relative space-y-4`}>
										<div className="text-white/85 text-sm leading-relaxed">{item.text}</div>
										<div className="flex items-center gap-3 justify-between">
											<div className={`${isRTL ? "ml-3" : "mr-3"} flex-1`}>
												<div className="font-semibold">{item.name}</div>
												<div className="text-white/60 text-xs">{item.role}</div>
											</div>
											<div className="shrink-0 w-10 h-10 rounded-full overflow-hidden border border-white/20 flex items-center justify-center bg-white/5">
												<Image src="/file.svg" alt="avatar" width={20} height={20} />
											</div>
										</div>
									</div>
								</Card>
							</div>
						))}
					</div>
				</div>
				<div className="mt-6 flex items-center justify-center gap-3">
					<button
						onClick={isRTL ? next : prev}
						aria-label="previous"
						className="w-9 h-9 rounded-full border border-[#2EA9FF] text-[#2EA9FF] hover:bg-[#2EA9FF]/10 flex items-center justify-center"
					>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none">
							<path
								d={isRTL ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"}
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
					<button
						onClick={isRTL ? prev : next}
						aria-label="next"
						className="w-9 h-9 rounded-full border border-[#2EA9FF] text-[#2EA9FF] hover:bg-[#2EA9FF]/10 flex items-center justify-center"
					>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none">
							<path
								d={isRTL ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
			</section>
{/* ====== Plans2 Section (last) ====== */}
<section className="relative mx-auto max-w-[1252px] px-6 pb-28 text-white">
	<PricingPlans isRTL={isRTL} />
</section>

			{/* ====== Support CTA Section (added) ====== */}
			<section className="relative mx-auto max-w-[1252px] px-4 sm:px-6 pb-16 md:pb-28 text-white">
				<div className="mx-auto" style={{ maxWidth: 1120 }}>
					<div
						className="rounded-[12px] mx-auto flex flex-col items-center justify-center text-center relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-[181px] py-10 sm:py-14"
						style={{
							backgroundImage: 'url("/Frame 1707480369.png")',
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
					>
						{/* dark overlay so text stays readable */}
						<div className="absolute inset-0" style={{ backgroundColor: "rgba(11,30,54,0.55)" }} />

						<div className="relative z-10 text-center">
							<h3
								className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px]"
								style={{
									fontFamily: "IBM Plex Sans Arabic",
									fontWeight: 500,
									lineHeight: "120%",
									color: "rgba(255,255,255,1)",
									margin: "0 auto",
									maxWidth: 990,
									textAlign: "center",
								}}
							>
								{t("support.title")}
							</h3>

							<p
								className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-5"
								style={{
									fontFamily: "IBM Plex Sans Arabic",
									fontWeight: 400,
									lineHeight: "1.4",
									color: "rgba(255,255,255,0.9)",
									maxWidth: 618,
									margin: "20px auto 0",
									textAlign: "center",
								}}
							>
								{t("support.subtitle")}
							</p>

							<div className="mt-6 sm:mt-8 flex justify-center">
								<CTAButton href="/contact">{t("support.cta")}</CTAButton>
							</div>
						</div>
					</div>
				</div>
			</section>

		</main>
		);
}