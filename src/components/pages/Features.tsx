"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import CTASection from "@/components/sections/CTASection";

export default function Features() {
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
					{t("features_page.page_title")}
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
					{t("features_page.page_description")}
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

		<section className="relative mx-auto px-6 py-28" style={{ width: 1193.5859375, maxWidth: "100%", marginTop: -100, [isRTL ? "marginRight" : "marginLeft"]: 60 }}>
			<div className="flex flex-wrap justify-center" style={{ gap: 64 }} dir={isRTL ? "rtl" : "ltr"}>
				{/* Feature 1 */}
				<div className="rounded-lg p-5 flex flex-col gap-5" style={{ width: 529, height: 263 }}>
					<Image
						src="/ic.png"
						alt={t("features_page.item1_title")}
						width={70}
						height={81}
						style={{
							width: 70.01695251464844,
							height: 81,
						}}
					/>
					<div>
						<h3
							className="font-bold text-base text-white mb-2"
							style={{
								fontFamily: "Commissioner",
								textAlign: isRTL ? "right" : "left",
								lineHeight: "100%",
							}}
						>
							{t("features_page.item1_title")}
						</h3>
						<p
							className="font-light text-sm text-white/80 mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								textAlign: isRTL ? "right" : "left",
							}}
						>
							{t("features_page.item1_desc")}
						</p>
						<ul
							className="font-light text-sm text-white/80 mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								[isRTL ? "paddingRight" : "paddingLeft"]: 16,
							}}
						>
							<li>{t("features_page.item1_li1")}</li>
							<li>{t("features_page.item1_li2")}</li>
							<li>{t("features_page.item1_li3")}</li>
						</ul>
						<p
							className="font-light text-sm text-white/80"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								textAlign: isRTL ? "right" : "left",
							}}
						>
							{t("features_page.item1_extra")}
						</p>
					</div>
				</div>

				{/* Feature 2 */}
				<div className="rounded-lg p-5 flex flex-col gap-5" style={{ width: 529, height: 263 }}>
					<Image
						src="/ic.png"
						alt={t("features_page.item2_title")}
						width={70}
						height={81}
						style={{
							width: 70.01695251464844,
							height: 81,
						}}
					/>
					<div>
						<h3
							className="font-bold text-base text-white mb-2"
							style={{
								fontFamily: "Commissioner",
								textAlign: isRTL ? "right" : "left",
								lineHeight: "100%",
							}}
						>
							{t("features_page.item2_title")}
						</h3>
						<p
							className="font-light text-sm text-white/80 mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								textAlign: isRTL ? "right" : "left",
							}}
						>
							{t("features_page.item2_desc")}
						</p>
						<ul
							className="font-light text-sm text-white/80 mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								[isRTL ? "paddingRight" : "paddingLeft"]: 16,
							}}
						>
							<li>{t("features_page.item2_li1")}</li>
							<li>{t("features_page.item2_li2")}</li>
							<li>{t("features_page.item2_li3")}</li>
						</ul>
						<p
							className="font-light text-sm text-white/80"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								textAlign: isRTL ? "right" : "left",
							}}
						>
							{t("features_page.item2_extra")}
						</p>
					</div>
				</div>

				{/* Feature 3 */}
				<div className="rounded-lg p-5 flex flex-col gap-5" style={{ width: 529, height: 263 }}>
					<Image
						src="/ic.png"
						alt={t("features_page.item3_title")}
						width={70}
						height={81}
						style={{
							width: 70.01695251464844,
							height: 81,
						}}
					/>
					<div>
						<h3
							className="font-bold text-base text-white mb-2"
							style={{
								fontFamily: "Commissioner",
								textAlign: isRTL ? "right" : "left",
								lineHeight: "100%",
							}}
						>
							{t("features_page.item3_title")}
						</h3>
						<p
							className="font-light text-sm text-white/80 mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								textAlign: isRTL ? "right" : "left",
							}}
						>
							{t("features_page.item3_desc")}
						</p>
						<ul
							className="font-light text-sm text-white/80 mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								[isRTL ? "paddingRight" : "paddingLeft"]: 16,
							}}
						>
							<li>{t("features_page.item3_li1")}</li>
							<li>{t("features_page.item3_li2")}</li>
							<li>{t("features_page.item3_li3")}</li>
						</ul>
						<p
							className="font-light text-sm text-white/80"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								textAlign: isRTL ? "right" : "left",
							}}
						>
							{t("features_page.item3_extra")}
						</p>
					</div>
				</div>

				{/* Feature 4 */}
				<div className="rounded-lg p-5 flex flex-col gap-5" style={{ width: 529, height: 263 }}>
					<Image
						src="/ic.png"
						alt={t("features_page.item4_title")}
						width={70}
						height={81}
						style={{
							width: 70.01695251464844,
							height: 81,
						}}
					/>
					<div>
						<h3
							className="font-bold text-base text-white mb-2"
							style={{
								fontFamily: "Commissioner",
								textAlign: isRTL ? "right" : "left",
								lineHeight: "100%",
							}}
						>
							{t("features_page.item4_title")}
						</h3>
						<p
							className="font-light text-sm text-white/80 mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								textAlign: isRTL ? "right" : "left",
							}}
						>
							{t("features_page.item4_desc")}
						</p>
						<ul
							className="font-light text-sm text-white/80 mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								[isRTL ? "paddingRight" : "paddingLeft"]: 16,
							}}
						>
							<li>{t("features_page.item4_li1")}</li>
							<li>{t("features_page.item4_li2")}</li>
							<li>{t("features_page.item4_li3")}</li>
						</ul>
						<p
							className="font-light text-sm text-white/80"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								textAlign: isRTL ? "right" : "left",
							}}
						>
							{t("features_page.item4_extra")}
						</p>
					</div>
				</div>

				{/* Feature 5 */}
				<div className="rounded-lg p-5 flex flex-col gap-5" style={{ width: 529, height: 263 }}>
					<Image
						src="/ic.png"
						alt={t("features_page.item5_title")}
						width={70}
						height={81}
						style={{
							width: 70.01695251464844,
							height: 81,
						}}
					/>
					<div>
						<h3
							className="font-bold text-base text-white mb-2"
							style={{
								fontFamily: "Commissioner",
								textAlign: isRTL ? "right" : "left",
								lineHeight: "100%",
							}}
						>
							{t("features_page.item5_title")}
						</h3>
						<p
							className="font-light text-sm text-white/80 mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								textAlign: isRTL ? "right" : "left",
							}}
						>
							{t("features_page.item5_desc")}
						</p>
						<ul
							className="font-light text-sm text-white/80 mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								[isRTL ? "paddingRight" : "paddingLeft"]: 16,
							}}
						>
							<li>{t("features_page.item5_li1")}</li>
							<li>{t("features_page.item5_li2")}</li>
							<li>{t("features_page.item5_li3")}</li>
						</ul>
						<p
							className="font-light text-sm text-white/80"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								textAlign: isRTL ? "right" : "left",
							}}
						>
							{t("features_page.item5_extra")}
						</p>
					</div>
				</div>

				{/* Feature 6 */}
				<div className="rounded-lg p-5 flex flex-col gap-5" style={{ width: 529, height: 263 }}>
					<Image
						src="/ic.png"
						alt={t("features_page.item6_title")}
						width={70}
						height={81}
						style={{
							width: 70.01695251464844,
							height: 81,
						}}
					/>
					<div>
						<h3
							className="font-bold text-base text-white mb-2"
							style={{
								fontFamily: "Commissioner",
								textAlign: isRTL ? "right" : "left",
								lineHeight: "100%",
							}}
						>
							{t("features_page.item6_title")}
						</h3>
						<p
							className="font-light text-sm text-white/80 mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								textAlign: isRTL ? "right" : "left",
							}}
						>
							{t("features_page.item6_desc")}
						</p>
						<ul
							className="font-light text-sm text-white/80 mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								[isRTL ? "paddingRight" : "paddingLeft"]: 16,
							}}
						>
							<li>{t("features_page.item6_li1")}</li>
							<li>{t("features_page.item6_li2")}</li>
							<li>{t("features_page.item6_li3")}</li>
						</ul>
						<p
							className="font-light text-sm text-white/80"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								textAlign: isRTL ? "right" : "left",
							}}
						>
							{t("features_page.item6_extra")}
						</p>
					</div>
				</div>

				{/* Feature 7 */}
				<div className="rounded-lg p-5 flex flex-col gap-5" style={{ width: 529, height: 263 }}>
					<Image
						src="/ic.png"
						alt={t("features_page.item7_title")}
						width={70}
						height={81}
						style={{
							width: 70.01695251464844,
							height: 81,
						}}
					/>
					<div>
						<h3
							className="font-bold text-base text-white mb-2"
							style={{
								fontFamily: "Commissioner",
								textAlign: isRTL ? "right" : "left",
								lineHeight: "100%",
							}}
						>
							{t("features_page.item7_title")}
						</h3>
						<p
							className="font-light text-sm text-white/80 mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								textAlign: isRTL ? "right" : "left",
							}}
						>
							{t("features_page.item7_desc")}
						</p>
						<ul
							className="font-light text-sm text-white/80 mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								[isRTL ? "paddingRight" : "paddingLeft"]: 16,
							}}
						>
							<li>{t("features_page.item7_li1")}</li>
							<li>{t("features_page.item7_li2")}</li>
							<li>{t("features_page.item7_li3")}</li>
						</ul>
						{t("features_page.item7_extra") && (
							<p
								className="font-light text-sm text-white/80"
								style={{
									fontFamily: "Commissioner",
									lineHeight: "24px",
									textAlign: isRTL ? "right" : "left",
								}}
							>
								{t("features_page.item7_extra")}
							</p>
						)}
					</div>
				</div>

				{/* Feature 8 */}
				<div className="rounded-lg p-5 flex flex-col gap-5" style={{ width: 529, height: 263 }}>
					<Image
						src="/ic.png"
						alt={t("features_page.item8_title")}
						width={70}
						height={81}
						style={{
							width: 70.01695251464844,
							height: 81,
						}}
					/>
					<div>
						<h3
							className="font-bold text-base text-white mb-2"
							style={{
								fontFamily: "Commissioner",
								textAlign: isRTL ? "right" : "left",
								lineHeight: "100%",
							}}
						>
							{t("features_page.item8_title")}
						</h3>
						<p
							className="font-light text-sm text-white/80"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "24px",
								textAlign: isRTL ? "right" : "left",
							}}
						>
							{t("features_page.item8_desc")}
						</p>
					</div>
				</div>
				</div>
			</section>

			<section className="relative mx-auto max-w-[1193.59px] px-6 pb-28">
				<div className="mx-auto flex flex-col items-center" style={{ minHeight: 478, gap: 48 }} dir={isRTL ? "rtl" : "ltr"}>
					<div className="text-center" style={{ width: 506.33203125 }}>
						<p
							className="font-normal text-xl capitalize text-white mb-2"
							style={{
								fontFamily: "Commissioner",
								lineHeight: "100%",
								textAlign: "center",
							}}
						>
							{t("features_page.title_small")}
						</p>
						<h2
							className="font-medium text-4xl capitalize text-white"
							style={{
								fontFamily: "Orbitron",
								lineHeight: "56px",
								textAlign: "center",
								width: 506.33203125,
							}}
						>
							{t("features_page.why_choose_title")}
						</h2>
					</div>

					<div className="flex flex-col lg:flex-row justify-center w-full flex-wrap" style={{ gap: 32 }}>
						{(["card1_title", "card2_title", "card3_title", "card4_title", "card5_title", "card6_title"] as const).map((k) => (
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
											textAlign: isRTL ? "right" : "left",
										}}
									>
											{t(`features_page.why_choose_cards.${k}`)}
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
											{t(`features_page.why_choose_cards.${k.replace("_title", "_desc")}`)}
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
					title={t("features_page.cta_title")}
					subtitle={t("features_page.cta_subtitle")}
					buttonText={t("features_page.cta_button")}
					buttonHref="/sign-in"
					secondaryButtonText={t("features_page.cta_secondary_button")}
					secondaryButtonHref="/contact"
					backgroundImage="/Frame 1707480369.png"
					isRTL={isRTL}
				/>
			</section>
		</main>
	);
}
