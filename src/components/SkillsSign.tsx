import { Text } from "@react-three/drei";

export function SkillsSign() {
	return (
		<group position={[-7.5, 0, -40]} rotation={[0, 0.26, 0]}>
			<mesh position={[-2.4, 1.75, 0]} castShadow>
				<boxGeometry args={[0.2, 3.5, 0]} />
				<meshStandardMaterial color="#2d3436" roughness={0.9} />
			</mesh>
			<mesh position={[2.4, 1.75, 0]} castShadow>
				<boxGeometry args={[0.2, 3.5, 0]} />
				<meshStandardMaterial color="#2d3436" roughness={0.9} />
			</mesh>

			<mesh position={[0, 3.5, 0]} castShadow>
				<boxGeometry args={[5.4, 3.0, 0.15]} />
				<meshStandardMaterial color="#f39c12" roughness={0.8} />
			</mesh>
			<mesh position={[0, 3.5, 0.09]}>
				<boxGeometry args={[5.0, 2.6, 0.02]} />
				<meshStandardMaterial color="#111111" roughness={0.9} />
			</mesh>

			<Text
				position={[0, 4.4, 0.12]}
				fontSize={0.24}
				color="#2ecc71"
				fontWeight="bold"
				anchorX="center"
				anchorY="middle"
			>
				COMPÉTENCES ACQUISES
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
					"WILD CODE SCHOOL (Développeur Web)\n\n• Architecture Front-End (React / TS)\n• Logique & Algorithmie JavaScript\n• Back-End (Node.js / Express / MySQL)\n• Modélisation de bases de données\n• Versioning Git & Méthode Agile SCRUM"
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
