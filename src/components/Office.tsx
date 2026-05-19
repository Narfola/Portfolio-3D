import { Text } from "@react-three/drei";

export function Office() {
	return (
		<group position={[7.5, 0, -40]}>
			<mesh position={[0, 0.1, -1]} receiveShadow>
				<boxGeometry args={[8, 0.1, 8]} />
				<meshStandardMaterial color="#ecf0f1" roughness={0.5} />
			</mesh>

			<mesh position={[-3.8, 3, -4.8]} castShadow>
				<boxGeometry args={[0.4, 6, 0.4]} />
				<meshStandardMaterial color="#ffffff" />
			</mesh>
			<mesh position={[3.8, 3, -4.8]} castShadow>
				<boxGeometry args={[0.4, 6, 0.4]} />
				<meshStandardMaterial color="#ffffff" />
			</mesh>
			<mesh position={[-3.8, 3, 2.8]} castShadow>
				<boxGeometry args={[0.4, 6, 0.4]} />
				<meshStandardMaterial color="#ffffff" />
			</mesh>
			<mesh position={[3.8, 3, 2.8]} castShadow>
				<boxGeometry args={[0.4, 6, 0.4]} />
				<meshStandardMaterial color="#ffffff" />
			</mesh>

			<mesh position={[0, 3, -4.8]}>
				<boxGeometry args={[7.4, 5.8, 0.05]} />
				<meshStandardMaterial
					color="#a29bfe"
					transparent
					opacity={0.3}
					roughness={0.1}
					metalness={0.5}
				/>
			</mesh>
			<mesh position={[-3.8, 3, -1]}>
				<boxGeometry args={[0.05, 5.8, 7.6]} />
				<meshStandardMaterial
					color="#a29bfe"
					transparent
					opacity={0.3}
					roughness={0.1}
				/>
			</mesh>
			<mesh position={[3.8, 3, -1]}>
				<boxGeometry args={[0.05, 5.8, 7.6]} />
				<meshStandardMaterial
					color="#a29bfe"
					transparent
					opacity={0.3}
					roughness={0.1}
				/>
			</mesh>

			<mesh position={[0, 6, -1]} castShadow>
				<boxGeometry args={[8.4, 0.2, 8.4]} />
				<meshStandardMaterial color="#ffffff" />
			</mesh>

			<group position={[0, 0.15, -1]}>
				<mesh position={[0, 0.8, 0]} castShadow>
					<boxGeometry args={[6, 0.1, 2.5]} />
					<meshStandardMaterial color="#d7a15c" />
				</mesh>
				<mesh position={[-2.8, 0.4, 1]}>
					<boxGeometry args={[0.1, 0.8, 0.1]} />
					<meshStandardMaterial color="#2d3436" />
				</mesh>
				<mesh position={[2.8, 0.4, 1]}>
					<boxGeometry args={[0.1, 0.8, 0.1]} />
					<meshStandardMaterial color="#2d3436" />
				</mesh>
				<mesh position={[-2.8, 0.4, -1]}>
					<boxGeometry args={[0.1, 0.8, 0.1]} />
					<meshStandardMaterial color="#2d3436" />
				</mesh>
				<mesh position={[2.8, 0.4, -1]}>
					<boxGeometry args={[0.1, 0.8, 0.1]} />
					<meshStandardMaterial color="#2d3436" />
				</mesh>

				<group position={[-1.8, 0.85, 0.2]} rotation={[0, 0.2, 0]}>
					<mesh>
						<boxGeometry args={[0.8, 0.03, 0.6]} />
						<meshStandardMaterial color="#2d3436" />
					</mesh>{" "}
					<mesh position={[0, 0.25, -0.3]} rotation={[0.4, 0, 0]}>
						<boxGeometry args={[0.8, 0.5, 0.03]} />
						<meshStandardMaterial color="#000000" />
					</mesh>{" "}
					<mesh position={[0, 0.25, -0.28]} rotation={[0.4, 0, 0]}>
						<boxGeometry args={[0.7, 0.4, 0.01]} />
						<meshStandardMaterial
							color="#10ac84"
							emissive="#10ac84"
							emissiveIntensity={0.5}
						/>
					</mesh>{" "}
				</group>

				<group position={[0, 0.85, -0.3]} rotation={[0, 3.1, 0]}>
					<mesh>
						<boxGeometry args={[0.8, 0.03, 0.6]} />
						<meshStandardMaterial color="#b2bec3" />
					</mesh>
					<mesh position={[0, 0.25, -0.3]} rotation={[0.5, 0, 0]}>
						<boxGeometry args={[0.8, 0.5, 0.03]} />
						<meshStandardMaterial color="#000000" />
					</mesh>
					<mesh position={[0, 0.25, -0.28]} rotation={[0.5, 0, 0]}>
						<boxGeometry args={[0.7, 0.4, 0.01]} />
						<meshStandardMaterial
							color="#0984e3"
							emissive="#0984e3"
							emissiveIntensity={0.5}
						/>
					</mesh>
				</group>

				<group position={[1.8, 0.85, 0.1]} rotation={[0, -0.1, 0]}>
					<mesh>
						<boxGeometry args={[0.8, 0.03, 0.6]} />
						<meshStandardMaterial color="#2d3436" />
					</mesh>
					<mesh position={[0, 0.25, -0.3]} rotation={[0.3, 0, 0]}>
						<boxGeometry args={[0.8, 0.5, 0.03]} />
						<meshStandardMaterial color="#000000" />
					</mesh>
					<mesh position={[0, 0.25, -0.28]} rotation={[0.3, 0, 0]}>
						<boxGeometry args={[0.7, 0.4, 0.01]} />
						<meshStandardMaterial
							color="#e84393"
							emissive="#e84393"
							emissiveIntensity={0.5}
						/>
					</mesh>
				</group>
			</group>

			<group position={[0, 7.8, 3]}>
				<mesh position={[-2, -1.2, -0.2]} castShadow>
					<boxGeometry args={[0.15, 1.5, 0.15]} />
					<meshStandardMaterial color="#2d3436" />
				</mesh>
				<mesh position={[2, -1.2, -0.2]} castShadow>
					<boxGeometry args={[0.15, 1.5, 0.15]} />
					<meshStandardMaterial color="#2d3436" />
				</mesh>

				<mesh castShadow>
					<boxGeometry args={[6, 2.2, 0.2]} />
					<meshStandardMaterial color="#f3127b" roughness={0.8} />{" "}
				</mesh>

				<Text
					position={[-2.7, 1, 0.11]}
					fontSize={0.3}
					color="white"
					anchorX="left"
					anchorY="top"
					maxWidth={5.4}
				>
					{
						"WILD CODE SCHOOL\n\n* Reconversion Dev Web\n* React / Node.js / TypeScript / MySQL\n* Fullstack Developer"
					}
				</Text>
			</group>

			<group position={[-3, 0, 6]}>
				<mesh position={[0, 0.8, 0]} castShadow>
					<boxGeometry args={[1.8, 0.6, 0.1]} />
					<meshStandardMaterial color="#126e38" />
				</mesh>
				<Text
					position={[0, 0.8, 0.06]}
					fontSize={0.18}
					color="white"
					textAlign="center"
					anchorX="center"
					anchorY="middle"
				>
					{"FORMATION\nEN COURS"}
				</Text>
			</group>
		</group>
	);
}
