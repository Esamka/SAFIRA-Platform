"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Contact() {
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
						className="font-bold capitalize text-white text-2xl sm:text-3xl md:text-[36px]"
						style={{
							fontFamily: "Orbitron",
							lineHeight: "100%",
						}}
						dir={isRTL ? "rtl" : "ltr"}
					>
						{t("contact.page_title")}
					</h1>

					<p
						className="capitalize text-white/80 text-base sm:text-lg md:text-xl mt-4 max-w-[901px]"
						style={{
							fontFamily: "Commissioner",
							lineHeight: "1.6",
							direction: isRTL ? "rtl" : "ltr",
							textAlign: isRTL ? "right" : "left",
						}}
					>
						{t("contact.page_description")}
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

			<section
				className="relative flex flex-col-reverse lg:flex-row gap-8 lg:gap-14 justify-center mx-auto max-w-[1188px] px-4 sm:px-6 md:px-8 lg:px-[124px] py-12 md:py-16 mb-12 md:mb-24"
				dir={isRTL ? "rtl" : "ltr"}
			>
				{/* Video Section */}
				<div
					className="relative flex items-center justify-center rounded-[10px] overflow-hidden w-full lg:w-1/2 aspect-[566/610]"
					style={{
						background: "rgba(0, 10, 19, 1)",
						border: "1px solid",
						borderImage: "linear-gradient(270deg, rgba(0, 72, 139, 0) 5.77%, #007AEB 43.27%, #007AEB 66.35%, rgba(37, 37, 37, 0) 100%) 1",
					}}
				>
					<Image
						src="/VIDEO.png"
						alt="Demo Video"
						width={566}
						height={610}
						className="w-full h-full object-cover"
					/>
					<div className="absolute flex items-center justify-center w-14 h-14 rounded-full bg-white/20 border-2 border-white cursor-pointer hover:bg-white/30 transition">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="white"
							style={{ marginLeft: 4 }}
						>
							<path d="M5 2v16l12-8L5 2z" />
						</svg>
					</div>
				</div>

				{/* Form Section */}
				<div className="flex flex-col w-full lg:w-1/2">
					<form className="flex flex-col gap-6">
						{/* Name Field */}
						<div className="flex flex-col gap-2">
							<label
								className="text-white/80 font-medium text-sm sm:text-base"
								style={{
									fontFamily: "Commissioner",
									letterSpacing: "-0.3px",
								}}
							>
								{t("contact.form_name")}
							</label>
							<Input
								type="text"
								className="w-full h-14 bg-[rgba(0,10,19,1)] border border-[rgba(0,122,235,0.4)] text-white placeholder-transparent rounded-lg px-4"
								style={{
									fontFamily: "Commissioner",
									fontSize: 16,
								}}
							/>
						</div>

						{/* Email Field */}
						<div className="flex flex-col gap-2">
							<label
								className="text-white/80 font-medium text-sm sm:text-base"
								style={{
									fontFamily: "Commissioner",
									letterSpacing: "-0.3px",
								}}
							>
								{t("contact.form_email")}
							</label>
							<Input
								type="email"
								className="w-full h-14 bg-[rgba(0,10,19,1)] border border-[rgba(0,122,235,0.4)] text-white placeholder-transparent rounded-lg px-4"
								style={{
									fontFamily: "Commissioner",
									fontSize: 16,
								}}
							/>
						</div>

						{/* Phone Field */}
						<div className="flex flex-col gap-2">
							<label
								className="text-white/80 font-medium text-sm sm:text-base"
								style={{
									fontFamily: "Commissioner",
									letterSpacing: "-0.3px",
								}}
							>
								{t("contact.form_phone")}
							</label>
							<Input
								type="tel"
								className="w-full h-14 bg-[rgba(0,10,19,1)] border border-[rgba(0,122,235,0.4)] text-white placeholder-transparent rounded-lg px-4"
								style={{
									fontFamily: "Commissioner",
									fontSize: 16,
								}}
							/>
						</div>

						{/* Message Field */}
						<div className="flex flex-col gap-2 mb-6 sm:mb-8">
							<label
								className="text-white/80 font-medium text-sm sm:text-base"
								style={{
									fontFamily: "Commissioner",
									letterSpacing: "-0.3px",
								}}
							>
								{t("contact.form_message")}
							</label>
							<textarea
								className="w-full bg-[rgba(0,10,19,1)] border border-[rgba(0,122,235,0.4)] text-white placeholder-transparent resize-none rounded-lg px-4 py-3"
								style={{
									minHeight: 118,
									fontFamily: "Commissioner",
									fontSize: 16,
								}}
							/>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full h-14 flex items-center justify-center gap-2 text-white font-medium hover:opacity-90 transition rounded-[10px]"
							style={{
								background: "linear-gradient(90.08deg, #007AEB 0.08%, #82DEF5 99.94%)",
								fontFamily: "Commissioner",
								fontSize: 18,
							}}
						>
							<span>Send</span>
							<div className="flex items-center justify-center w-5 h-5 rounded-full bg-white">
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="#007AEB"
								>
									<path d="M2 6h8M6 2l4 4-4 4" stroke="#007AEB" strokeWidth="1.5" />
								</svg>
							</div>
						</button>
					</form>
				</div>
			</section>
		</main>
	);
}
