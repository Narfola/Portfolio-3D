export function ControlOverlay() {
	return (
		<div
			style={{
				position: "fixed",
				bottom: "20px",
				left: "20px",
				zIndex: 1000,
				display: "flex",
				alignItems: "center",
				gap: "15px",
				backgroundColor: "rgba(44, 62, 80, 0.85)",
				padding: "12px 20px",
				borderRadius: "12px",
				border: "2px solid #34495e",
				color: "#ffffff",
				fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
				boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
				pointerEvents: "none",
				userSelect: "none",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "4px",
				}}
			>
				<div style={keyStyle}>▲</div>

				<div style={{ display: "flex", gap: "4px" }}>
					<div style={keyStyle}>◀</div>
					<div style={keyStyle}>▼</div>
					<div style={keyStyle}>▶</div>
				</div>
			</div>

			<div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
				<span
					style={{ fontSize: "14px", fontWeight: "bold", color: "#2ecc71" }}
				>
					NAVIGATION
				</span>
				<span style={{ fontSize: "12px", color: "#bdc3c7" }}>
					Utilise les flèches du clavier pour te déplacer
				</span>
			</div>
		</div>
	);
}

const keyStyle: React.CSSProperties = {
	width: "24px",
	height: "24px",
	backgroundColor: "#111111",
	border: "1px solid #555555",
	borderRadius: "4px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "10px",
	fontWeight: "bold",
	color: "#ffffff",
	boxShadow: "0 2px 0 #333",
};
