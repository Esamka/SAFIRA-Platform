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
			<section className="relative w-full" style={{ height: 631 }}>
				<Image
					src="/bckgrnd%201.png"
					alt="Top Background"
					width={1440}
					height={631}
					className="absolute w-full z-10 object-cover"
					style={{
						height: 631,
						top: 0.5,
						left: -0.33,
						opacity: 1,
					}}
					priority
				/>

				{/* Hero Content - positioned above image */}
				<div className="absolute inset-0 flex items-center justify-center z-20 pt-0">
					<div 
						className="rounded-lg bg-transparent text-center flex flex-col items-center"
						style={{
							width: 1018.23828125,
							height: 324.01300048828125,
							opacity: 1,
							gap: 56,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<h1
							style={{
								width: 1018.23828125,
								height: 122.01300048828125,
								opacity: 1,
								fontFamily: "IBM Plex Sans Arabic",
								fontWeight: 700,
								fontSize: 45,
								lineHeight: "64px",
								letterSpacing: 0,
								textAlign: "center",
								margin: 0,
								display: "block",
								color: "rgba(255, 255, 255, 1)",
							}}
							className="text-center"
						>
							{t("home.title_line1")}
							<br />
							{t("home.title_line2")}
						</h1>
						<p
							style={{
								width: 658.5,
								height: 64,
								opacity: 1,
								fontFamily: "IBM Plex Sans Arabic",
								fontWeight: 400,
								fontSize: 20,
								lineHeight: "32px",
								letterSpacing: 0,
								textAlign: "center",
								textTransform: "capitalize",
								margin: 0,
								marginTop: "-16px",
								display: "block",
								color: "rgba(255, 255, 255, 0.8)",
							}}
							className="text-center"
						>
							{t("home.subtitle")}
						</p>

						{/* CTA Buttons */}
						<div 
							className="flex justify-center items-center flex-wrap"
							style={{
								width: 395,
								height: 50,
								opacity: 1,
								gap: 40,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<CTAButton href="/contact">{t("home.cta_start")}</CTAButton>
							<Link href="/contact">
								<button
									style={{
										width: 151,
										height: 50,
										borderRadius: 10,
										padding: "15px 35px",
										border: "1px solid rgba(252, 252, 252, 0.23)",
										background: "transparent",
										color: "white",
										opacity: 1,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										transition: "all 0.3s ease",
										fontFamily: "IBM Plex Sans Arabic",
										fontWeight: 400,
										fontSize: 16,
										lineHeight: "19.2px",
										letterSpacing: 0,
										cursor: "pointer",
									}}
									className="hover:text-[#82DEF5] hover:border-[#82DEF5]/40 hover:bg-white/[0.04] hover:scale-[1.015] active:scale-[0.97] transition-all duration-300 ease-out"
								>
									<span
										style={{
											width: 81,
											height: 20,
											opacity: 1,
											fontFamily: "IBM Plex Sans Arabic",
											fontWeight: 400,
											fontSize: 16,
											lineHeight: "19.2px",
											letterSpacing: 0,
											verticalAlign: "middle",
											color: "rgba(255, 255, 255, 1)",
										}}
									>
										{t("home.cta_contact")}
									</span>
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

						<div className={`mt-8 flex ${isRTL ? "justify-end" : "justify-start"}`}>
							<CTAButton href="/contact" reverseIcon={isRTL}>
								{t("home.cta_start")}
							</CTAButton>
						</div>
					</div>

					{/* Image Section with glow */}
					<div className="relative shrink-0 mt-10 lg:mt-0" style={{ width: 420, height: 370 }}>
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
			<section className="relative mx-auto max-w-[1193px] px-6 pb-28 text-white overflow-visible">
				<GlowEffect
					size={450}
					top="30%"
					right="-15%"
					blur={350}
					color="#007AFF30"
					zIndex={0}
				/>
				<div className={`flex items-center justify-between rounded-[10px] ${isRTL ? "flex-row-reverse" : ""}`} style={{ height: "363.91px" }}>
					<div className="shrink-0 relative rounded-[10px] overflow-hidden">
						<Image
							src="/chatbot-hologram-social-network-icons-ai-communication 1.png"
							alt="Chatbot Hologram"
							width={536}
							height={364}
							priority
							className="block"
						/>
						<div className="absolute inset-0" style={{ backgroundColor: "#0b274955", mixBlendMode: "plus-lighter" }} />
					</div>
					<div className={`flex-1 ps-8 ${isRTL ? "text-right" : "text-left"}`}>
						<div className="text-white/70">{t("usecases.title_small")}</div>
						<h3 className="mt-3 text-3xl sm:text-4xl font-extrabold">{t("usecases.title")}</h3>
						<div className="mt-6 space-y-5">
							<div className="flex items-start gap-4">
								<Image src="/file.svg" alt="" width={32} height={32} />
								<div>
									<div className="text-xl font-semibold">{t("usecases.items.item1_title")}</div>
									<p className="mt-2 text-white/80">{t("usecases.items.item1_desc")}</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<Image src="/file.svg" alt="" width={32} height={32} />
								<div>
									<div className="text-xl font-semibold">{t("usecases.items.item2_title")}</div>
									<p className="mt-2 text-white/80">{t("usecases.items.item2_desc")}</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<Image src="/file.svg" alt="" width={32} height={32} />
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
							className="relative overflow-hidden rounded-[10px]"
							style={{
								width: 285,
								height: 210,
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
			<section className="relative mx-auto max-w-[1252px] px-6 pb-28 text-white">
				<div className="mx-auto" style={{ maxWidth: 1120 }}>
					<div
						className="rounded-[12px] mx-auto flex flex-col items-center justify-center text-center relative overflow-hidden"
						style={{
							paddingTop: 56,
							paddingBottom: 56,
							paddingLeft: 181,
							paddingRight: 181,
							backgroundImage: 'url("/Frame 1707480369.png")',
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
					>
						{/* dark overlay so text stays readable */}
						<div className="absolute inset-0" style={{ backgroundColor: "rgba(11,30,54,0.55)" }} />

						<div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
							<h3
								style={{
									fontFamily: "IBM Plex Sans Arabic",
									fontWeight: 500,
									fontSize: 48,
									lineHeight: "120%",
									color: "rgba(255,255,255,1)",
									margin: "0 auto",
									maxWidth: 990.609375,
									textAlign: "center",
								}}
							>
								{t("support.title")}
							</h3>

							<p
								style={{
									fontFamily: "IBM Plex Sans Arabic",
									fontWeight: 400,
									fontSize: 20,
									lineHeight: "22.4px",
									color: "rgba(255,255,255,0.9)",
									marginTop: 20,
									maxWidth: 618,
									margin: "20px auto 0",
									textAlign: "center",
								}}
							>
								{t("support.subtitle")}
							</p>

							<div className="mt-8 flex justify-center">
								<CTAButton href="/contact">{t("support.cta")}</CTAButton>
							</div>
						</div>
					</div>
				</div>
			</section>

		</main>
		);
}