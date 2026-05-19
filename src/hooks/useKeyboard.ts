import { useEffect, useState } from "react";

export function useKeyboard() {
	const [movement, setMovement] = useState({
		moveForward: false,
		moveBackward: false,
		moveLeft: false,
		moveRight: false,
	});

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			// Support de ZQSD et des flèches du clavier
			if (e.key === "z" || e.key === "ArrowUp")
				setMovement((m) => ({ ...m, moveForward: true }));
			if (e.key === "s" || e.key === "ArrowDown")
				setMovement((m) => ({ ...m, moveBackward: true }));
			if (e.key === "q" || e.key === "ArrowLeft")
				setMovement((m) => ({ ...m, moveLeft: true }));
			if (e.key === "d" || e.key === "ArrowRight")
				setMovement((m) => ({ ...m, moveRight: true }));
		};

		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === "z" || e.key === "ArrowUp")
				setMovement((m) => ({ ...m, moveForward: false }));
			if (e.key === "s" || e.key === "ArrowDown")
				setMovement((m) => ({ ...m, moveBackward: false }));
			if (e.key === "q" || e.key === "ArrowLeft")
				setMovement((m) => ({ ...m, moveLeft: false }));
			if (e.key === "d" || e.key === "ArrowRight")
				setMovement((m) => ({ ...m, moveRight: false }));
		};

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);

	return movement;
}
