import { Canvas } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import type { DirectionalLight } from "three";
import { ControlOverlay } from "./components/ControlOverlay";
import { MobileControls } from "./components/MobileControls"; // <-- Nouvel import
import { Environment } from "./components/Environment";
import { ExperienceSign } from "./components/ExperienceSign";
import { FutureBuilding } from "./components/FutureBuilding";
import { Garage } from "./components/Garage";
import { Lights } from "./components/Lights";
import { Office } from "./components/Office";
import { Player } from "./components/Player";
import { SkillsSign } from "./components/SkillsSign";

function App() {
	const shadowLightRef = useRef<DirectionalLight>(null);

	// 1. État pour stocker l'activation des touches (haut, bas, gauche, droite)
	const [directions, setDirections] = useState({
		up: false,
		down: false,
		left: false,
		right: false,
	});

	// 2. État pour savoir si le visiteur utilise un écran mobile / tactile
	const [isMobile, setIsMobile] = useState(false);

	// 3. Détection automatique du type d'appareil (au chargement et au redimensionnement)
	useEffect(() => {
		const checkDevice = () => {
			const standardMobileCheck = /Mobi|Android|iPhone|iPad/i.test(
				navigator.userAgent,
			);
			const smallScreenCheck = window.innerWidth <= 768;

			setIsMobile(standardMobileCheck || smallScreenCheck);
		};

		checkDevice();
		window.addEventListener("resize", checkDevice);

		return () => window.removeEventListener("resize", checkDevice);
	}, []);

	return (
		<div style={{ width: "100vw", height: "100vh", position: "relative" }}>
			<Canvas shadows="soft" camera={{ position: [0, 5, 15], fov: 60 }}>
				<Lights ref={shadowLightRef} />

				<Environment />

				<Garage />
				<Office />
				<FutureBuilding />
				<SkillsSign />
				<ExperienceSign />

				<Player mobileDirections={directions} />
			</Canvas>

			{isMobile ? (
				<MobileControls
					onDirectionChange={setDirections}
					activeDirections={directions}
				/>
			) : (
				<ControlOverlay />
			)}
		</div>
	);
}

export default App;
