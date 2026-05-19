import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import type { DirectionalLight } from "three";
import { ControlOverlay } from "./components/ControlOverlay";
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

	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Canvas shadows="soft" camera={{ position: [0, 5, 15], fov: 60 }}>
				<Lights ref={shadowLightRef} />

				<Environment />

				<Garage />
				<Office />
				<FutureBuilding />
				<SkillsSign />
				<ExperienceSign />
				<Player />
			</Canvas>
			<ControlOverlay />
		</div>
	);
}

export default App;
