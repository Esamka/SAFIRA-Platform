"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import GlowEffect from "@/components/shared/GlowEffect";
import WhyChooseCards from "@/components/sections/WhyChooseCards";

export default function Features() {
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
						className="font-bold text-2xl sm:text-3xl md:text-[36px] capitalize text-white"
						style={{
							fontFamily: "Orbitron",
							fontWeight: 700,
							lineHeight: "100%",
						}}
						dir={isRTL ? "rtl" : "ltr"}
					>
						{t("features_page.page_title")}
					</h1>

					<p
						className="text-base sm:text-lg md:text-xl text-white/80 mt-4 max-w-[901px] capitalize"
						style={{
							fontFamily: "Commissioner",
							fontWeight: 400,
							lineHeight: "1.6",
							direction: isRTL ? "rtl" : "ltr",
							textAlign: isRTL ? "right" : "left",
						}}
					>
						{t("features_page.page_description")}
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

		<section className="relative mx-auto px-4 sm:px-6 py-16 md:py-28 max-w-[1194px]" style={{ marginTop: -50 }}>
			{/* Glow in the middle of features grid */}
			<GlowEffect
				size={500}
				top="50%"
				left="-10%"
				blur={350}
				transform="translateY(-50%)"
				zIndex={0}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16" dir={isRTL ? "rtl" : "ltr"}>
				{/* Feature 1 */}
				<div className="rounded-lg p-5 flex flex-col gap-5 w-full">
					<Image
						src="/ic.png"
						alt={t("features_page.item1_title")}
						width={70}
						height={81}
						style={{
							
							
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
				<div className="rounded-lg p-5 flex flex-col gap-5 w-full">
					<Image
						src="/ic.png"
						alt={t("features_page.item2_title")}
						width={70}
						height={81}
						style={{
							
							
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
				<div className="rounded-lg p-5 flex flex-col gap-5 w-full">
					<Image
						src="/ic.png"
						alt={t("features_page.item3_title")}
						width={70}
						height={81}
						style={{
							
							
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
				<div className="rounded-lg p-5 flex flex-col gap-5 w-full">
					<Image
						src="/ic.png"
						alt={t("features_page.item4_title")}
						width={70}
						height={81}
						style={{
							
							
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
				<div className="rounded-lg p-5 flex flex-col gap-5 w-full">
					<Image
						src="/ic.png"
						alt={t("features_page.item5_title")}
						width={70}
						height={81}
						style={{
							
							
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
				<div className="rounded-lg p-5 flex flex-col gap-5 w-full">
					<Image
						src="/ic.png"
						alt={t("features_page.item6_title")}
						width={70}
						height={81}
						style={{
							
							
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
				<div className="rounded-lg p-5 flex flex-col gap-5 w-full">
					<Image
						src="/ic.png"
						alt={t("features_page.item7_title")}
						width={70}
						height={81}
						style={{
							
							
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
				<div className="rounded-lg p-5 flex flex-col gap-5 w-full">
					<Image
						src="/ic.png"
						alt={t("features_page.item8_title")}
						width={70}
						height={81}
						style={{
							
							
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
				{/* Glow between sections — left side */}
				<GlowEffect
					size={450}
					top={-100}
					left="-12%"
					blur={300}
					zIndex={0}
				/>
				<WhyChooseCards
					translationPrefix="features_page"
					smallTitle={t("features_page.title_small")}
					title={t("features_page.why_choose_title")}
				/>
			</section>

			<section className="relative mx-auto max-w-[1193.59px] px-6 py-28 flex justify-center">
				<CTASection
					title={t("features_page.cta_title")}
					subtitle={t("features_page.cta_subtitle")}
					buttonText={t("features_page.cta_button")}
					buttonHref="/contact"
					secondaryButtonText={t("features_page.cta_secondary_button")}
					secondaryButtonHref="/contact"
					backgroundImage="/Frame 1707480369.png"
					isRTL={isRTL}
				/>
			</section>
		</main>
	);
}
