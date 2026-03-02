"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	return (
		<footer className="relative w-full bg-black border-t border-white/5 overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
			{/* Glow Effect */}
			<div
				className="pointer-events-none absolute rounded-full"
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

			<div className="relative mx-auto max-w-6xl px-6 py-10">
				<div className={`flex flex-col gap-8 lg:gap-12 ${isRTL ? "lg:flex-row-reverse" : "lg:flex-row"} justify-between`}>
					{/* Left Side - Logo and Description */}
					<div className="flex flex-col gap-4 max-w-xs">
						{/* Logo */}
						<div className={`flex gap-2 items-center ${isRTL ? "flex-row-reverse" : ""}`}>
							<Image src="/Group 1707480382.png" alt="Logo" width={36} height={36} />
							<h3 className="font-brand text-2xl font-bold text-white tracking-widest">
								SAFIRA
							</h3>
						</div>

						{/* Description */}
					<p className={`text-sm text-gray-400 leading-relaxed max-w-sm ${isRTL ? "text-right" : "text-left"}`}>
						{t("footer.description")}
						</p>
					</div>

					{/* Right Side - Links */}
					<div className={`grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 flex-1 ${isRTL ? "md:gap-16" : ""} md:ml-24`}>
						{/* Useful Links */}
						<div className={isRTL ? "text-right" : "text-left"}>
							<h4 className="text-blue-500 font-semibold text-lg mb-4">
								{t("footer.useful_links_title")}
							</h4>
							<ul className="space-y-2">
								<li>
									<Link href="/about">
										<span className="text-gray-400 text-sm hover:text-white transition-colors">
											{t("footer.about")}
										</span>
									</Link>
								</li>
								<li>
									<Link href="/features">
										<span className="text-gray-400 text-sm hover:text-white transition-colors">
											{t("footer.features")}
										</span>
									</Link>
								</li>
								<li>
									<Link href="/resources">
										<span className="text-gray-400 text-sm hover:text-white transition-colors">
											{t("footer.resources")}
										</span>
									</Link>
								</li>
								<li>
									<Link href="/pricing">
										<span className="text-gray-400 text-sm hover:text-white transition-colors">
											{t("footer.prices")}
										</span>
									</Link>
								</li>
							</ul>
						</div>

						{/* Help */}
						<div className={isRTL ? "text-right" : "text-left"}>
							<h4 className="text-blue-500 font-semibold text-lg mb-4">
								{t("footer.help_title")}
							</h4>
							<ul className="space-y-2">
								<li>
									<Link href="/support">
										<span className="text-gray-400 text-sm hover:text-white transition-colors">
											{t("footer.customer_support")}
										</span>
									</Link>
								</li>
								<li>
									<Link href="/faqs">
										<span className="text-gray-400 text-sm hover:text-white transition-colors">
											{t("footer.faqs")}
										</span>
									</Link>
								</li>
								<li>
									<Link href="/privacy">
										<span className="text-gray-400 text-sm hover:text-white transition-colors">
											{t("footer.privacy_policy")}
										</span>
									</Link>
								</li>
								<li>
									<Link href="/contact">
										<span className="text-gray-400 text-sm hover:text-white transition-colors">
											{t("footer.contact_us")}
										</span>
									</Link>
								</li>
							</ul>
						</div>

						{/* Connect With Us */}
						<div className={isRTL ? "text-right" : "text-left"}>
							<h4 className="text-blue-500 font-semibold text-lg mb-4">
								{t("footer.connect_title")}
							</h4>
							<ul className="space-y-2">
								<li>
									<span className="text-gray-400 text-sm">
										{t("footer.location")}
									</span>
								</li>
								<li>
									<span className="text-gray-400 text-sm">
										{t("footer.phone")}
									</span>
								</li>
								<li>
									<span className="text-gray-400 text-sm">
										{t("footer.email")}
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-8 opacity-50" />

				{/* Bottom */}
				<div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? "md:flex-row-reverse" : ""}`}>
					<p className="text-gray-400 text-xs">
						© 2025 {t("footer.all_rights_reserved")}
					</p>

					{/* Social Icons */}
					<div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
							<div className="w-8 h-8 border border-blue-500/50 rounded-full flex items-center justify-center hover:border-blue-500 transition-colors">
								<span className="text-blue-500 text-sm">f</span>
							</div>
						</a>
						<a href="https://google.com" target="_blank" rel="noopener noreferrer">
							<div className="w-8 h-8 border border-blue-500/50 rounded-full flex items-center justify-center hover:border-blue-500 transition-colors">
								<span className="text-blue-500 text-sm">G</span>
							</div>
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
							<div className="w-8 h-8 border border-blue-500/50 rounded-full flex items-center justify-center hover:border-blue-500 transition-colors">
								<span className="text-blue-500 text-sm">in</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
