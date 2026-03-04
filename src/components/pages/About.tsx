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
			<section className="relative w-full h-[350px] sm:h-[400px] md:h-[463px]">
				<Image
					src="/bckgrnd%201.png"
					alt="Top Background"
					width={1440}
					height={399}
					className="absolute top-0 left-0 w-full h-full z-10 object-cover"
					priority
				/>

				<div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-[122px] pt-16 sm:pt-20">
					<h1
						className="text-white font-bold text-2xl sm:text-3xl md:text-[36px] leading-tight"
						style={{
							fontFamily: "Orbitron",
							fontWeight: 700,
						}}
						dir={isRTL ? "rtl" : "ltr"}
					>
						{t("about.page_title")}
					</h1>

					<p
						className="text-white/80 text-base sm:text-lg md:text-xl leading-7 md:leading-8 mt-4 max-w-[901px]"
						style={{
							fontFamily: "Commissioner",
							fontWeight: 400,
							direction: isRTL ? "rtl" : "ltr",
							textAlign: isRTL ? "right" : "left",
						}}
					>
						{t("about.page_description_line1")} <br className="hidden sm:block" /> {t("about.page_description_line2")}
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

			<section className="relative mx-auto max-w-[1193.59px] px-4 sm:px-6 pt-16 md:pt-24 pb-16 md:pb-28">
				<div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-[120px]">
					<div className="shrink-0 flex items-start justify-center">
						<div
							className="relative w-[200px] h-[175px] sm:w-[250px] sm:h-[220px] md:w-[312px] md:h-[273px]"
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

						<div className="mt-8 w-full">
							<CTAButton
								href="/contact"
								reverseIcon={isRTL}
								className={isRTL ? "ml-auto" : "mr-auto"}
							>
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

					<div className="relative shrink-0 mt-10 lg:mt-0 w-full sm:w-[300px] md:w-[350px] lg:w-[420px] aspect-[420/288]">
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

			<section className="relative mx-auto max-w-[1193.59px] px-4 sm:px-6 pb-16 md:pb-28">
				<div className="mx-auto flex flex-col items-center gap-8 md:gap-12" dir={isRTL ? "rtl" : "ltr"}>
					<div className="text-center">
						<h2
							className="text-2xl sm:text-3xl md:text-4xl"
							style={{
								fontFamily: "Orbitron",
								fontWeight: 500,
								lineHeight: "1.4",
								textTransform: "capitalize",
								color: "rgba(255, 255, 255, 1)",
							}}
						>
							{t("about.why_choose_title")}
						</h2>
						<p
							className="mt-4 text-sm sm:text-base md:text-lg"
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

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
						{(["card1_title", "card2_title", "card3_title", "card4_title"] as const).map((k) => (
							<div
								key={k}
								className="relative overflow-hidden rounded-[10px] w-full min-h-[246px]"
								style={{
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

