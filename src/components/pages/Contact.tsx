"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Contact() {
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
					className={`absolute z-20 font-bold capitalize text-white ${isRTL ? "right-[122px]" : "left-[122px]"}`}
					style={{
						top: "184px",
						width: 225,
						height: 45,
						fontFamily: "Orbitron",
						fontSize: 36,
						lineHeight: "100%",
					}}
				>
					{t("contact.page_title")}
				</div>

				<div
					className={`absolute z-20 capitalize text-white/80 ${isRTL ? "right-[122px]" : "left-[122px]"}`}
					style={{
						top: "249px",
						width: 901.75,
						height: 64,
						fontFamily: "Commissioner",
						fontSize: 20,
						lineHeight: "32px",
						direction: isRTL ? "rtl" : "ltr",
						textAlign: isRTL ? "right" : "left",
						whiteSpace: "pre-wrap",
					}}
				>
					{t("contact.page_description")}
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
				className="relative flex gap-14 justify-center flex-row-reverse"
				style={{
					marginTop: "50px",
					marginBottom: "200px",
					marginLeft: "124px",
					marginRight: "124px",
					width: 1188,
					height: 613.9921875,
				}}
				dir={isRTL ? "rtl" : "ltr"}
			>
				{/* Video Section */}
				<div
					className="relative flex items-center justify-center rounded-[10px] overflow-hidden"
					style={{
						width: 566,
						height: 610,
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
				<div
					className="flex flex-col"
					style={{
						width: 566,
						height: 613.9921875,
						gap: 562,
					}}
				>
					<form className="flex flex-col gap-6">
						{/* Name Field */}
						<div className="flex flex-col gap-2">
							<label
								className="text-white/80 font-medium"
								style={{
									width: 532,
									height: 20,
									fontFamily: "Commissioner",
									fontSize: 16,
									lineHeight: "100%",
									letterSpacing: "-0.3px",
								}}
							>
								{t("contact.form_name")}
							</label>
							<Input
								type="text"
								className="bg-[rgba(0,10,19,1)] border border-[rgba(0,122,235,0.4)] text-white placeholder-transparent"
								style={{
									width: 532,
									height: 56,
									borderRadius: 8,
									padding: "0 16px",
									fontFamily: "Commissioner",
									fontSize: 16,
								}}
							/>
						</div>

						{/* Email Field */}
						<div className="flex flex-col gap-2">
							<label
								className="text-white/80 font-medium"
								style={{
									width: 532,
									height: 20,
									fontFamily: "Commissioner",
									fontSize: 16,
									lineHeight: "100%",
									letterSpacing: "-0.3px",
								}}
							>
								{t("contact.form_email")}
							</label>
							<Input
								type="email"
								className="bg-[rgba(0,10,19,1)] border border-[rgba(0,122,235,0.4)] text-white placeholder-transparent"
								style={{
									width: 532,
									height: 56,
									borderRadius: 8,
									padding: "0 16px",
									fontFamily: "Commissioner",
									fontSize: 16,
								}}
							/>
						</div>

						{/* Phone Field */}
						<div className="flex flex-col gap-2">
							<label
								className="text-white/80 font-medium"
								style={{
									width: 532,
									height: 20,
									fontFamily: "Commissioner",
									fontSize: 16,
									lineHeight: "100%",
									letterSpacing: "-0.3px",
								}}
							>
								{t("contact.form_phone")}
							</label>
							<Input
								type="tel"
								className="bg-[rgba(0,10,19,1)] border border-[rgba(0,122,235,0.4)] text-white placeholder-transparent"
								style={{
									width: 532,
									height: 56,
									borderRadius: 8,
									padding: "0 16px",
									fontFamily: "Commissioner",
									fontSize: 16,
								}}
							/>
						</div>

						{/* Message Field */}
						<div className="flex flex-col gap-2" style={{ marginBottom: 48 }}>
							<label
								className="text-white/80 font-medium"
								style={{
									width: 532,
									height: 20,
									fontFamily: "Commissioner",
									fontSize: 16,
									lineHeight: "100%",
									letterSpacing: "-0.3px",
								}}
							>
								{t("contact.form_message")}
							</label>
							<textarea
								className="bg-[rgba(0,10,19,1)] border border-[rgba(0,122,235,0.4)] text-white placeholder-transparent resize-none"
								style={{
									width: 532,
									height: 117.9921875,
									borderRadius: 8,
									padding: "0 16px",
									fontFamily: "Commissioner",
									fontSize: 16,
									paddingTop: "12px",
									paddingBottom: "12px",
								}}
							/>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="flex items-center justify-center gap-2 text-white font-medium hover:opacity-90 transition rounded-[10px]"
							style={{
								width: 566,
								height: 56,
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
