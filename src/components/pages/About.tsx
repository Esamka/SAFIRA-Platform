"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import CTASection from "@/components/sections/CTASection";

export default function About() {
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
					className="absolute text-white font-bold text-[36px] leading-tight whitespace-nowrap z-20"
					style={{
						[isRTL ? "right" : "left"]: "122px",
						top: "184px",
						fontFamily: "Orbitron",
						fontWeight: 700,
					}}
				>
					{t("about.page_title")}
				</div>

				<div
					className="absolute text-white/80 text-xl leading-8 z-20"
					style={{
						[isRTL ? "right" : "left"]: "122px",
						top: "249px",
						width: "min(901.75px, calc(100vw - 244px))",
						fontFamily: "Commissioner",
						fontWeight: 400,
						direction: isRTL ? "rtl" : "ltr",
						textAlign: isRTL ? "right" : "left",
					}}
				>
					{t("about.page_description_line1")} <br /> {t("about.page_description_line2")}
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

			<section className="relative mx-auto max-w-[1193.59px] px-6 pb-28">
				<div className="flex flex-col lg:flex-row items-start gap-[120px]">
					<div className="shrink-0 flex items-start justify-center">
						<div
							className="relative"
							style={{
								width: 311.64471435546875,
								height: 273.3895263671875,
							}}
						>
							<Image src="/Group 1707480382.png" alt="Group" fill className="object-contain" priority />
						</div>
					</div>

					<div className="flex-1 text-start" style={{ maxWidth: 649.41015625 }} dir={isRTL ? "rtl" : "ltr"}>
						<h2
							className="text-[30px]"
							style={{
								fontFamily: "Orbitron",
								fontWeight: 700,
								lineHeight: "100%",
								textTransform: "capitalize",
							}}
						>
							{t("about.who_we_are_title")}
						</h2>

						<div className="mt-4 flex w-full">
							<div
								className="border-s-4 border-[#2EA9FF] ps-4"
								style={{
									fontFamily: "Commissioner",
									fontWeight: 400,
									fontSize: 16,
									lineHeight: "24px",
								}}
							>
								{t("about.who_we_are_body1")}
							</div>
						</div>

						<p
							className="mt-4"
							style={{
								fontFamily: "Commissioner",
								fontWeight: 400,
								fontSize: 16,
								lineHeight: "24px",
							}}
						>
							{t("about.who_we_are_body2")}
						</p>

						<h3
							className="mt-6"
							style={{
								fontFamily: "Orbitron",
								fontWeight: 500,
								fontSize: 18,
								lineHeight: "100%",
								textTransform: "capitalize",
							}}
						>
							{t("about.mission_title")}
						</h3>

						<p
							className="mt-3"
							style={{
								fontFamily: "Commissioner",
								fontWeight: 400,
								fontSize: 14,
								lineHeight: "22px",
							}}
						>
							{t("about.mission_body")}
						</p>

						<div className={`mt-8 flex ${isRTL ? "justify-end" : "justify-start"}`}>
							<CTAButton href="/contact" reverseIcon={isRTL}>
								{t("home.cta_start")}
							</CTAButton>
						</div>
					</div>
				</div>
			</section>

			<section className="relative mx-auto max-w-[1193.59px] px-6 pb-28">
				<div
					className={`flex flex-col lg:flex-row items-center justify-between ${isRTL ? "lg:flex-row-reverse" : ""}`}
					style={{
						minHeight: 288.1206359863281,
					}}
				>
					<div className="flex-1" style={{ maxWidth: 662 }} dir={isRTL ? "rtl" : "ltr"}>
						<h2
							className="text-[30px]"
							style={{
								fontFamily: "Orbitron",
								fontWeight: 700,
								lineHeight: "100%",
								textTransform: "capitalize",
							}}
						>
							{t("about.production_title")}
						</h2>

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
								{t("about.production_body1")}
								<br />
								{t("about.production_body2")}
							</div>
						</div>
					</div>

					<div className="relative shrink-0 mt-10 lg:mt-0" style={{ width: 420, height: 288.1206359863281 }}>
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
						<Image src="/chatbot-avatar.png" alt="Chatbot Avatar" fill className="object-contain z-10" priority />
					</div>
				</div>
			</section>

			<section className="relative mx-auto max-w-[1193.59px] px-6 pb-28">
				<div className="mx-auto flex flex-col items-center" style={{ minHeight: 478, gap: 48 }} dir={isRTL ? "rtl" : "ltr"}>
					<div className="text-center">
						<h2
							style={{
								fontFamily: "Orbitron",
								fontWeight: 500,
								fontSize: 36,
								lineHeight: "56px",
								textTransform: "capitalize",
								color: "rgba(255, 255, 255, 1)",
							}}
						>
							{t("about.why_choose_title")}
						</h2>
						<p
							className="mt-4"
							style={{
								fontFamily: "Commissioner",
								fontWeight: 500,
								fontSize: 18,
								lineHeight: "24px",
								textAlign: "center",
								color: "rgba(255, 255, 255, 1)",
							}}
						>
							{t("about.why_choose_subtitle")}
						</p>
					</div>

					<div className="flex flex-col lg:flex-row justify-between w-full" style={{ gap: 24 }}>
						{(["card1_title", "card2_title", "card3_title", "card4_title"] as const).map((k) => (
							<div
								key={k}
								className="relative overflow-hidden rounded-[10px]"
								style={{
									width: 285,
									height: 246,
									background: "rgba(0, 10, 19, 1)",
								}}
								dir={isRTL ? "rtl" : "ltr"}
							>
								<div className="flex h-full flex-col p-6">
									<div className="flex justify-start">
										<svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M12 2V4"
												stroke="#2EA9FF"
												strokeWidth="1.6"
												strokeLinecap="round"
											/>
											<path
												d="M7 6H17C19.7614 6 22 8.23858 22 11V16C22 18.7614 19.7614 21 17 21H7C4.23858 21 2 18.7614 2 16V11C2 8.23858 4.23858 6 7 6Z"
												stroke="#2EA9FF"
												strokeWidth="1.6"
												strokeLinejoin="round"
											/>
											<path
												d="M2 12H4M20 12H22"
												stroke="#2EA9FF"
												strokeWidth="1.6"
												strokeLinecap="round"
											/>
											<circle cx="9" cy="13" r="1.25" fill="#2EA9FF" />
											<circle cx="15" cy="13" r="1.25" fill="#2EA9FF" />
											<path d="M9 16H15" stroke="#2EA9FF" strokeWidth="1.6" strokeLinecap="round" />
										</svg>
									</div>

									<div
										className="mt-10 text-start"
										style={{
											fontFamily: "Commissioner",
											fontWeight: 500,
											fontSize: 18,
											lineHeight: "28px",
											color: "rgba(255, 255, 255, 1)",
										}}
									>
										{t(`about.why_choose_cards.${k}`)}
									</div>
								</div>

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
			</section>

			<section className="relative mx-auto max-w-[1193.59px] px-6 py-28 flex justify-center">
				<CTASection
					title={t("about.cta_title")}
					subtitle={t("about.cta_subtitle")}
					buttonText={t("about.cta_button")}
					buttonHref="/contact"
					secondaryButtonText={t("about.cta_secondary_button")}
					secondaryButtonHref="/contact"
					backgroundImage="/Frame 1707480369.png"
					isRTL={isRTL}
				/>
			</section>
		</main>
	);
}

