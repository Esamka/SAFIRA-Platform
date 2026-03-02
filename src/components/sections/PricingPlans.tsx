"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

interface PricingPlansProps {
	showTitle?: boolean;
	isRTL?: boolean;
}

export default function PricingPlans({ showTitle = true, isRTL }: PricingPlansProps) {
	const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
	const { t, i18n } = useTranslation();
	const rtl = isRTL !== undefined ? isRTL : i18n.dir() === "rtl";

	return (
		<>
			{showTitle && (
				<div className="text-center mb-12">
					<div className="text-white/70 text-sm font-semibold" style={{ fontFamily: "IBM Plex Sans Arabic" }}>
						{t("plans2.small")}
					</div>

					<h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "IBM Plex Sans Arabic" }}>
						{t("plans2.title")}
					</h2>
				</div>
			)}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" dir={rtl ? "rtl" : "ltr"}>
				{(["basic", "standard", "pro", "enterprise"] as const).map((id) => {
					const plan = i18n.t(`plans2.plans.${id}`, { returnObjects: true }) as {
						label?: string;
						price?: string | number;
						desc?: string;
						features?: string[];
					};
					const feats: string[] = Array.isArray(plan.features) ? plan.features : [];
					const highlight = id === "pro";

					return (
						<div
							key={id}
							className={`
								relative overflow-hidden rounded-2xl p-6 flex flex-col justify-between
								border border-white/10 bg-[#0b1e36]/60
								${highlight ? "ring-2 ring-[#2EA9FF] shadow-lg shadow-[#2EA9FF]/20" : ""}
							`}
						>
							{/* subtle glow */}
							<div
								className="absolute -inset-10 pointer-events-none"
								style={{
									background: "radial-gradient(240px circle at 50% 20%, rgba(46,169,255,0.18), transparent 60%)",
									opacity: highlight ? 1 : 0.75,
								}}
							/>

							{/* Label */}
							<div className={`relative ${rtl ? "text-right" : "text-left"} mb-2`}>
								{plan.label && (
									<div className="inline-block border border-white/30 bg-white/5 rounded-full px-3 py-1.5 text-xs font-medium text-white">
										{highlight && <span className="mr-1">⭐</span>}
										{plan.label}
									</div>
								)}
							</div>

							{/* Price */}
							<div className={`relative ${rtl ? "text-right" : "text-left"} mt-3`}>
								<div className="text-3xl font-bold text-white" style={{ fontFamily: "IBM Plex Sans Arabic" }}>
									{plan.price && /\d/.test(String(plan.price)) ? (
										<>
											{plan.price} <span className="text-sm text-white/70">/ {t("plans2.per_month")}</span>
										</>
									) : (
										plan.price
									)}
								</div>
							</div>

							{/* Description */}
							<div className={`relative ${rtl ? "text-right" : "text-left"} mt-3 mb-4`}>
								{plan.desc && (
									<p className="text-xs leading-relaxed text-white/75" style={{ fontFamily: "IBM Plex Sans Arabic" }}>
										{plan.desc}
									</p>
								)}
							</div>

							{/* Button */}
							<div className="relative mb-4">
							<button
								onMouseEnter={() => setHoveredPlan(id)}
								onMouseLeave={() => setHoveredPlan(null)}
								onClick={() => (window.location.href = "/contact")}
								className="w-full py-2 px-4 rounded-lg text-sm font-medium leading-none text-center cursor-pointer flex items-center justify-center transition-all duration-300"
								style={{
									border: id === "pro" ? "none" : `1px solid rgba(255, 255, 255, ${hoveredPlan === id ? "0.6" : "0.3"})`,
									backgroundColor: id === "pro" 
										? hoveredPlan === id ? "#3bb9ff" : "#2EA9FF"
										: hoveredPlan === id ? "rgba(20, 40, 70, 1)" : "rgba(0, 10, 19, 1)",
									fontFamily: "Commissioner",
									color: id === "pro" ? "#0b2749" : "rgba(255, 255, 255, 1)",
									opacity: hoveredPlan === id ? 0.85 : 1,
									boxShadow: hoveredPlan === id && id === "pro" ? "0 0 12px rgba(46, 169, 255, 0.4)" : "none",
								}}
							>
								Start
							</button>
						</div>

						{/* Features */}
						{feats.length > 0 && (
							<div className={`relative ${rtl ? "text-right" : "text-left"}`}>
									<ul className="space-y-2">
										{feats.map((f, idx) => (
											<li key={idx} className={`flex items-center gap-2 text-white/80 text-xs ${rtl ? "flex-row-reverse" : ""}`}>
												<span className={`${rtl ? "mr-2" : "ml-2"} inline-flex shrink-0 text-[#2EA9FF] flex-none`}>
													<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
														<path
															d="M3 8l3 3 7-7"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
												
												<span className={`flex-1 ${rtl ? "text-right" : "text-left"}`}>{f}</span>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					);
				})}
			</div>

			<div className="mt-12 text-center">
				<p className="font-medium text-lg leading-7 text-white opacity-90" style={{ fontFamily: "IBM Plex Sans Arabic", whiteSpace: "pre-line" }}>
					{t("plans2.closing_text") || "يمثل SAFIRA خطوة عملية نحو التحول الرقمي الذكي، مما يُمكّن المؤسسات من تقديم خدمات أفضل بتكلفة أقل وبكفاءة أكبر."}
				</p>
			</div>
		</>
	);
}
