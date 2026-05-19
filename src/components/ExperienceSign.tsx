import { Text } from "@react-three/drei";

export function ExperienceSign() {
	return (
		<group position={[7.5, 0, -15]} rotation={[0, -0.26, 0]}>
			<mesh position={[-2.4, 1.75, 0]} castShadow>
				<boxGeometry args={[0.2, 3.5, 0]} />
				<meshStandardMaterial color="#4a2c11" roughness={0.9} />
			</mesh>
			<mesh position={[2.4, 1.75, 0]} castShadow>
				<boxGeometry args={[0.2, 3.5, 0]} />
				<meshStandardMaterial color="#4a2c11" roughness={0.9} />
			</mesh>

			<mesh position={[0, 3.5, 0]} castShadow>
				<boxGeometry args={[5.4, 3.0, 0.15]} />
				<meshStandardMaterial color="#2c3e50" roughness={0.8} />
			</mesh>
			<mesh position={[0, 3.5, 0.09]}>
				<boxGeometry args={[5.0, 2.6, 0.02]} />
				<meshStandardMaterial color="#1c2833" roughness={0.9} />
			</mesh>

			<Text
				position={[0, 4.4, 0.12]}
				fontSize={0.24}
				color="#e74c3c"
				fontWeight="bold"
				anchorX="center"
				anchorY="middle"
			>
				PARCOURS PROFESSIONNEL
			</Text>

			<Text
				position={[-2.3, 4, 0.12]}
				fontSize={0.16}
				color="#ffffff"
				anchorX="left"
				anchorY="top"
				lineHeight={1.5}
				maxWidth={4.6}
			>
				{
					"EXPERT DIAGNOSTIC AUTO (14 ans)\n\n• Recherche de pannes complexes\n• Analyse de schémas électriques\n• Maîtrise des réseaux multiplexés (CAN)\n• Rigueur et logique algorithmique\n• Relation client & gestion d'atelier"
				}
			</Text>

			<mesh position={[-2.4, 0.1, 0]}>
				<boxGeometry args={[0.4, 0.2, 0.4]} />
				<meshStandardMaterial color="#7f8c8d" />
			</mesh>
			<mesh position={[2.4, 0.1, 0]}>
				<boxGeometry args={[0.4, 0.2, 0.4]} />
				<meshStandardMaterial color="#7f8c8d" />
			</mesh>
		</group>
	);
}
