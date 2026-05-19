import { Text } from "@react-three/drei";

export function FutureBuilding() {
	return (
		<group position={[-8.5, 0, -70]}>
			<mesh position={[0, 0.05, 0]} receiveShadow>
				<boxGeometry args={[8, 0.1, 8]} />
				<meshStandardMaterial color="#27ae60" roughness={1} />
			</mesh>

			<mesh position={[0, 1.5, 0]} rotation={[0, 0.2, 0.05]} castShadow>
				<boxGeometry args={[4, 3, 4]} />
				<meshStandardMaterial color="#8e44ad" />
			</mesh>

			<mesh position={[0.5, 3.5, -0.5]} rotation={[0, -0.1, -0.05]} castShadow>
				<boxGeometry args={[3, 2, 3]} />
				<meshStandardMaterial color="#9b59b6" />
			</mesh>

			<mesh position={[-1.8, 2, 1.5]} rotation={[0.4, 0.4, 0]} castShadow>
				<boxGeometry args={[1.5, 1.5, 1.5]} />
				<meshStandardMaterial color="#6c5ce7" />
			</mesh>

			<group position={[0, 5.5, 0]}>
				<mesh position={[0, 0, 0]} castShadow>
					<boxGeometry args={[0.6, 0.6, 0.6]} />
					<meshStandardMaterial
						color="#f1c40f"
						emissive="#f1c40f"
						emissiveIntensity={0.5}
					/>
				</mesh>
				<mesh position={[0, 1.2, 0]} castShadow>
					<boxGeometry args={[0.6, 0.8, 0.6]} />
					<meshStandardMaterial color="#f1c40f" />
				</mesh>
				<mesh position={[0.6, 2.2, 0]} castShadow>
					<boxGeometry args={[1.8, 0.6, 0.6]} />
					<meshStandardMaterial color="#f1c40f" />
				</mesh>
				<mesh position={[1.2, 3, 0]} castShadow>
					<boxGeometry args={[0.6, 1.2, 0.6]} />
					<meshStandardMaterial color="#f1c40f" />
				</mesh>
				<mesh position={[0, 3.8, 0]} castShadow>
					<boxGeometry args={[2.4, 0.6, 0.6]} />
					<meshStandardMaterial color="#f1c40f" />
				</mesh>
				<mesh position={[-1.2, 3, 0]} castShadow>
					<boxGeometry args={[0.6, 1.2, 0.6]} />
					<meshStandardMaterial color="#f1c40f" />
				</mesh>
			</group>

			<group position={[3.5, 0, 4]}>
				<mesh position={[0, 0.6, 0]} castShadow>
					<boxGeometry args={[0.1, 1.2, 0.1]} />
					<meshStandardMaterial color="#5d4037" />
				</mesh>
				<mesh position={[0, 1.4, 0]} rotation={[0, -0.4, 0]} castShadow>
					<boxGeometry args={[2.2, 0.8, 0.1]} />
					<meshStandardMaterial color="#d7a15c" />
				</mesh>
				<Text
					position={[0, 1.4, 0.06]}
					rotation={[0, -0.4, 0]}
					fontSize={0.3}
					color="#3e2723"
					fontWeight="bold"
				>
					ALTERNANCE
				</Text>
			</group>

			<mesh position={[0, 2, 0]}>
				<boxGeometry args={[6, 4, 6]} />
				<meshStandardMaterial color="#ffffff" transparent opacity={0.05} />
			</mesh>
		</group>
	);
}
