import { Sky } from "@react-three/drei";

export function Environment() {
	return (
		<>
			<Sky sunPosition={[10, 20, 10]} />

			<mesh
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, -0.01, 0]}
				receiveShadow
			>
				<planeGeometry args={[100, 200]} />
				<meshStandardMaterial color="#5b8731" roughness={1} />
			</mesh>

			<mesh
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, 0, -65]}
				receiveShadow
			>
				<planeGeometry args={[6, 150]} />
				<meshStandardMaterial color="#7f8c8d" roughness={1} />
			</mesh>

			<mesh position={[-3.25, 0.26, -65]} castShadow receiveShadow>
				<boxGeometry args={[0.5, 0.5, 150]} />
				<meshStandardMaterial color="#bdc3c7" roughness={1} />
			</mesh>

			<mesh position={[3.25, 0.26, -65]} castShadow receiveShadow>
				<boxGeometry args={[0.5, 0.5, 150]} />
				<meshStandardMaterial color="#bdc3c7" roughness={1} />
			</mesh>
		</>
	);
}
