"use client";

import { useTranslation } from "react-i18next";

interface PlanComparisonProps {
	isRTL?: boolean;
}

export default function PlanComparison({ isRTL }: PlanComparisonProps) {
	const { t, i18n } = useTranslation();
	const rtl = isRTL !== undefined ? isRTL : i18n.dir() === "rtl";

	const comparisonData = (i18n.t("plans2.comparison", { returnObjects: true }) as any) || {};
	const rows = comparisonData.rows || [];

	const planColumns = [
		{ key: "basic", label: comparisonData.basic },
		{ key: "standard", label: comparisonData.standard },
		{ key: "pro", label: comparisonData.pro },
		{ key: "enterprise", label: comparisonData.enterprise },
	];

	const columnWidth = 1252 / 5; // Approximately 250.4px per column

	return (
		<div className="w-full py-16">
			{/* Title */}
			<div
				className="text-white text-center mb-6"
				style={{
					fontFamily: "Orbitron",
					fontWeight: 500,
					fontSize: 28,
					lineHeight: "100%",
					textTransform: "capitalize",
				}}
			>
				{t("plans2.comparison_title")}
			</div>

			{/* Table Container with gradient border and shadow */}
			<div
				className="w-full mx-auto rounded-lg overflow-hidden relative"
				style={{
					maxWidth: 1252,
					borderRadius: 10,
					border: "1.5px solid",
					borderImage: "linear-gradient(208.17deg, #004788 -0.77%, rgba(29, 61, 91, 0) 35.16%, rgba(15, 66, 114, 0) 67.26%, #004788 98.88%) 1",
					background: "rgba(0, 10, 19, 1)",
					boxShadow: "0 8px 32px rgba(0, 122, 255, 0.1)",
				}}
			>
				<table
					className="w-full border-collapse"
					style={{
						fontFamily: "Commissioner",
						tableLayout: "fixed",
					}}
					dir={rtl ? "rtl" : "ltr"}
				>
					{/* Table Header */}
					<thead>
						<tr
							className="h-13 bg-[#001A2E] relative"
						>
							<th
								className="font-medium text-lg text-white w-1/4"
								style={{
									fontFamily: "Commissioner",
									fontWeight: 500,
									fontSize: 18,
									lineHeight: "100%",
									padding: rtl ? "16px 48px 16px 16px" : "16px 16px 16px 48px",
									textAlign: rtl ? "right" : "left",
									borderRight: rtl ? "1px solid rgba(255, 255, 255, 0.12)" : "none",
									borderLeft: rtl ? "none" : "1px solid rgba(255, 255, 255, 0.12)",
									position: "relative",
								}}
							>
								{t("plans2.comparison.features")}
								{/* Divider Line */}
								<div
									style={{
										position: "absolute",
										width: "1px",
										height: "572px",
										[rtl ? "left" : "right"]: "0",
										top: "52px",
										background: "rgba(255, 255, 255, 0.12)",
										border: "none",
									}}
								/>
							</th>
							{planColumns.map((plan) => (
								<th
									key={plan.key}
									style={{
										fontFamily: "Commissioner",
										fontWeight: 500,
										fontSize: 18,
										lineHeight: "100%",
										padding: "16px",
										textAlign: "center",
										color: "rgba(255, 255, 255, 1)",
										width: "18.75%",
									}}
								>
									{plan.label}
								</th>
							))}
						</tr>
					</thead>

					{/* Table Body */}
					<tbody>
						{rows.map((row: any, idx: number) => (
							<tr
								key={idx}
								style={{
									height: 44,
									borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
								}}
							>
								{/* Feature Name Column */}
								<td
									style={{
										fontFamily: "Commissioner",
										fontWeight: 600,
										fontSize: 16,
										lineHeight: "100%",
										padding: rtl ? "12px 48px 12px 16px" : "12px 16px 12px 48px",
										textAlign: rtl ? "right" : "left",
										color: "rgba(255, 255, 255, 0.9)",
										background: "transparent",
										width: "25%",
										borderRight: rtl ? "1px solid rgba(255, 255, 255, 0.12)" : "none",
										borderLeft: rtl ? "none" : "1px solid rgba(255, 255, 255, 0.12)",
									}}
								>
									{row.label}
								</td>

								{/* Plan Values */}
								{planColumns.map((plan) => (
									<td
										key={plan.key}
										style={{
											fontFamily: "Commissioner",
											fontWeight: 600,
											fontSize: 16,
											lineHeight: "100%",
											padding: "12px 16px",
											textAlign: "center",
											color: "rgba(255, 255, 255, 0.9)",
											background: "transparent",
											width: "18.75%",
										}}
									>
										{row[plan.key]}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Notes Section */}
			<div
				style={{
					width: "100%",
					maxWidth: 1252,
					margin: "48px auto 0",
					display: "flex",
					flexDirection: "column",
					gap: 10,
				}}
			>
				<div
					style={{
						fontFamily: "Commissioner",
						fontWeight: 700,
						fontSize: 24,
						lineHeight: "100%",
						textTransform: "capitalize",
						color: "rgba(255, 255, 255, 1)",
					}}
				>
					{t("plans2.comparison_notes_title")}
				</div>

				<ul
					style={{
						fontFamily: "Commissioner",
						fontWeight: 400,
						fontSize: 18,
						lineHeight: "32px",
						letterSpacing: "0%",
						color: "rgba(255, 255, 255, 1)",
						margin: 0,
						paddingLeft: 24,
						listStyleType: "disc",
						listStylePosition: "outside",
						display: "flex",
						flexDirection: "column",
						gap: 16,
					}}
				>
					{Array.isArray(t("plans2.comparison_notes", { returnObjects: true })) &&
						(t("plans2.comparison_notes", { returnObjects: true }) as string[]).map(
							(note: string, idx: number) => (
								<li
									key={idx}
									style={{
										marginLeft: rtl ? 0 : 16,
										marginRight: rtl ? 16 : 0,
									}}
								>
									{note}
								</li>
							)
						)}
				</ul>
			</div>
		</div>
	);
}
