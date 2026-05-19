interface MobileControlsProps {
	onDirectionChange: (direction: {
		up: boolean;
		down: boolean;
		left: boolean;
		right: boolean;
	}) => void;
	activeDirections: {
		up: boolean;
		down: boolean;
		left: boolean;
		right: boolean;
	};
}

export function MobileControls({
	onDirectionChange,
	activeDirections,
}: MobileControlsProps) {
	const handlePressStart = (dir: "up" | "down" | "left" | "right") => {
		onDirectionChange({ ...activeDirections, [dir]: true });
	};

	const handlePressEnd = (dir: "up" | "down" | "left" | "right") => {
		onDirectionChange({ ...activeDirections, [dir]: false });
	};

	return (
		<div
			style={{
				position: "fixed",
				bottom: "30px",
				right: "30px",
				zIndex: 1000,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "8px",
				userSelect: "none",
				WebkitUserSelect: "none",
			}}
		>
			<button
				type="button"
				onTouchStart={() => handlePressStart("up")}
				onTouchEnd={() => handlePressEnd("up")}
				onMouseDown={() => handlePressStart("up")}
				onMouseUp={() => handlePressEnd("up")}
				style={{
					...buttonStyle,
					backgroundColor: activeDirections.up ? "#2ecc71" : "#111",
				}}
			>
				▲
			</button>

			<div style={{ display: "flex", gap: "8px" }}>
				<button
					type="button"
					onTouchStart={() => handlePressStart("left")}
					onTouchEnd={() => handlePressEnd("left")}
					onMouseDown={() => handlePressStart("left")}
					onMouseUp={() => handlePressEnd("left")}
					style={{
						...buttonStyle,
						backgroundColor: activeDirections.left ? "#2ecc71" : "#111",
					}}
				>
					◀
				</button>
				<button
					type="button"
					onTouchStart={() => handlePressStart("down")}
					onTouchEnd={() => handlePressEnd("down")}
					onMouseDown={() => handlePressStart("down")}
					onMouseUp={() => handlePressEnd("down")}
					style={{
						...buttonStyle,
						backgroundColor: activeDirections.down ? "#2ecc71" : "#111",
					}}
				>
					▼
				</button>
				<button
					type="button"
					onTouchStart={() => handlePressStart("right")}
					onTouchEnd={() => handlePressEnd("right")}
					onMouseDown={() => handlePressStart("right")}
					onMouseUp={() => handlePressEnd("right")}
					style={{
						...buttonStyle,
						backgroundColor: activeDirections.right ? "#2ecc71" : "#111",
					}}
				>
					▶
				</button>
			</div>
		</div>
	);
}

const buttonStyle: React.CSSProperties = {
	width: "55px",
	height: "55px",
	color: "#ffffff",
	border: "2px solid #555555",
	borderRadius: "12px",
	fontSize: "20px",
	fontWeight: "bold",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	boxShadow: "0 4px 0 #333",
	cursor: "pointer",
	touchAction: "none",
};
