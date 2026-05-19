import { forwardRef } from "react";
import type { DirectionalLight } from "three";

export const Lights = forwardRef<DirectionalLight>((_, ref) => {
	return (
		<>
			<ambientLight intensity={1.5} />

			<directionalLight
				ref={ref}
				position={[15, 25, 0]}
				intensity={1.5}
				castShadow
				shadow-mapSize-width={8192}
				shadow-mapSize-height={8192}
				shadow-camera-far={60}
				shadow-camera-left={-160}
				shadow-camera-right={160}
				shadow-camera-top={40}
				shadow-camera-bottom={-40}
				shadow-bias={0.0000001}
			/>
		</>
	);
});
