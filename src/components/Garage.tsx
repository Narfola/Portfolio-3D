import { Text, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Garage() {
	const [brickTexture, asphaltTexture, metalTexture] = useTexture([
		"/textures/bricks.jpg",
		"/textures/asphalt.jpg",
		"/textures/metal.jpg",
	]);

	brickTexture.wrapS = THREE.RepeatWrapping;
	brickTexture.wrapT = THREE.RepeatWrapping;
	brickTexture.repeat.set(2, 1);

	const frontBrickTexture = brickTexture.clone();
	frontBrickTexture.needsUpdate = true;
	frontBrickTexture.repeat.set(4, 0.5);

	asphaltTexture.wrapS = THREE.RepeatWrapping;
	asphaltTexture.wrapT = THREE.RepeatWrapping;
	asphaltTexture.repeat.set(2, 4);

	return (
		<group position={[-7.5, 0, -15]}>
			<mesh position={[0, 0.05, 4]} castShadow receiveShadow>
				<boxGeometry args={[8, 0.1, 12]} />
				<meshStandardMaterial map={asphaltTexture} roughness={0.9} />
			</mesh>

			<mesh position={[0, 0.1, -1]} receiveShadow>
				<boxGeometry args={[7.4, 0.02, 7.4]} />
				<meshStandardMaterial color="#95a5a6" roughness={0.7} />
			</mesh>

			<mesh position={[0, 3, -4.8]} castShadow receiveShadow>
				<boxGeometry args={[8, 6, 0.4]} />
				<meshStandardMaterial
					map={brickTexture}
					color="#ffffff"
					roughness={0.8}
				/>
			</mesh>

			<mesh position={[-3.8, 3, -1]} castShadow receiveShadow>
				<boxGeometry args={[0.4, 6, 8]} />
				<meshStandardMaterial
					map={brickTexture}
					color="#ffffff"
					roughness={0.8}
				/>
			</mesh>

			<mesh position={[3.8, 3, -1]} castShadow receiveShadow>
				<boxGeometry args={[0.4, 6, 8]} />
				<meshStandardMaterial
					map={brickTexture}
					color="#ffffff"
					roughness={0.8}
				/>
			</mesh>

			<mesh position={[0, 5.2, 3.05]} castShadow receiveShadow>
				<boxGeometry args={[8, 1.4, 0.4]} />
				<meshStandardMaterial
					map={frontBrickTexture}
					color="#ffffff"
					roughness={0.8}
				/>
			</mesh>

			<mesh position={[-3.7, 2.2, 3.05]} castShadow>
				<boxGeometry args={[0.5, 4.4, 0.3]} />
				<meshStandardMaterial color="#bdc3c7" />
			</mesh>

			<mesh position={[0, 2.2, 3.05]} castShadow>
				<boxGeometry args={[0.5, 4.4, 0.3]} />
				<meshStandardMaterial color="#bdc3c7" />
			</mesh>

			<mesh position={[3.7, 2.2, 3.05]} castShadow>
				<boxGeometry args={[0.5, 4.4, 0.3]} />
				<meshStandardMaterial color="#bdc3c7" />
			</mesh>

			<mesh position={[0, 4.2, 3.05]} castShadow>
				<boxGeometry args={[7.9, 0.5, 0.3]} />
				<meshStandardMaterial color="#bdc3c7" />
			</mesh>

			<mesh position={[0, 4.6, 3.4]} rotation={[-0.2, 0, 0]} castShadow>
				<boxGeometry args={[8.2, 0.1, 0.8]} />
				<meshStandardMaterial
					map={metalTexture}
					roughness={0.4}
					metalness={0.6}
				/>
			</mesh>

			<group position={[-1.85, 0.1, 0]}>
				<mesh position={[0, 0.5, -3.5]} castShadow>
					<boxGeometry args={[2.5, 1, 0.8]} />
					<meshStandardMaterial color="#2c3e50" roughness={0.5} />
				</mesh>

				<group position={[-0.8, 0.6, -1.5]}>
					<mesh castShadow>
						<boxGeometry args={[0.6, 1.2, 0.6]} />
						<meshStandardMaterial color="#b71c1c" roughness={0.4} />
					</mesh>
					<mesh position={[0, 0.5, 0.32]}>
						<boxGeometry args={[0.4, 0.04, 0.04]} />
						<meshStandardMaterial color="#111" />
					</mesh>
					<mesh position={[0, 0.2, 0.31]}>
						<boxGeometry args={[0.5, 0.02, 0.01]} />
						<meshStandardMaterial color="#222" />
					</mesh>
					<mesh position={[0, -0.1, 0.31]}>
						<boxGeometry args={[0.5, 0.02, 0.01]} />
						<meshStandardMaterial color="#222" />
					</mesh>
					<mesh position={[0, -0.4, 0.31]}>
						<boxGeometry args={[0.5, 0.02, 0.01]} />
						<meshStandardMaterial color="#222" />
					</mesh>
				</group>

				<group position={[0.6, 0.7, 1.5]} rotation={[0, -0.4, 0]}>
					<mesh castShadow>
						<boxGeometry args={[0.7, 1.4, 0.7]} />
						<meshStandardMaterial color="#7f8c8d" roughness={0.5} />
					</mesh>
					<mesh position={[0, 0.4, 0.36]} rotation={[-0.1, 0, 0]}>
						<boxGeometry args={[0.5, 0.4, 0.05]} />
						<meshStandardMaterial
							color="#10ac84"
							emissive="#10ac84"
							emissiveIntensity={0.5}
						/>
					</mesh>
					<mesh position={[0, 0.05, 0.38]} rotation={[0.4, 0, 0]}>
						<boxGeometry args={[0.5, 0.15, 0.05]} />
						<meshStandardMaterial color="#2c3e50" />
					</mesh>
					<mesh position={[-0.2, -0.4, 0.4]} rotation={[0.2, 0, 0.1]}>
						<boxGeometry args={[0.04, 0.8, 0.04]} />
						<meshStandardMaterial color="#111" />
					</mesh>
					<mesh position={[0.2, -0.5, 0.4]} rotation={[-0.1, 0, -0.2]}>
						<boxGeometry args={[0.04, 0.6, 0.04]} />
						<meshStandardMaterial color="#c0392b" />
					</mesh>
				</group>
			</group>

			<group position={[1.85, 0.1, 0]}>
				<group position={[0, 0, 0]}>
					<mesh position={[-1.6, 2, 0]} castShadow>
						<boxGeometry args={[0.25, 4, 0.4]} />
						<meshStandardMaterial color="#2980b9" roughness={0.5} />
					</mesh>
					<mesh position={[1.6, 2, 0]} castShadow>
						<boxGeometry args={[0.25, 4, 0.4]} />
						<meshStandardMaterial color="#2980b9" roughness={0.5} />
					</mesh>
					<mesh position={[-0.8, 1.6, 0]} castShadow>
						<boxGeometry args={[1.4, 0.12, 0.15]} />
						<meshStandardMaterial color="#f1c40f" />
					</mesh>
					<mesh position={[0.8, 1.6, 0]} castShadow>
						<boxGeometry args={[1.4, 0.12, 0.15]} />
						<meshStandardMaterial color="#f1c40f" />
					</mesh>
				</group>

				<group position={[0, 1.66, 0]}>
					<mesh position={[0, 0.3, 0]} castShadow>
						<boxGeometry args={[1.5, 0.5, 3]} />
						<meshStandardMaterial color="#e67e22" roughness={0.5} />
					</mesh>
					<mesh position={[0, 0.75, -0.3]} castShadow>
						<boxGeometry args={[1.4, 0.4, 1.4]} />
						<meshStandardMaterial color="#e67e22" roughness={0.5} />
					</mesh>
					<mesh position={[0, 0.75, 0.42]}>
						<boxGeometry args={[1.3, 0.3, 0.02]} />
						<meshStandardMaterial color="#2c3e50" />
					</mesh>
					<mesh position={[0, 0.75, -1.02]}>
						<boxGeometry args={[1.3, 0.3, 0.02]} />
						<meshStandardMaterial color="#2c3e50" />
					</mesh>
					<mesh position={[0, 0.75, 1.1]} rotation={[-0.6, 0, 0]} castShadow>
						<boxGeometry args={[1.4, 0.06, 0.8]} />
						<meshStandardMaterial color="#d35400" roughness={0.5} />
					</mesh>
					<mesh position={[0, 0.2, 1.1]}>
						<boxGeometry args={[0.8, 0.3, 0.6]} />
						<meshStandardMaterial color="#7f8c8d" metalness={0.5} />
					</mesh>

					<mesh
						position={[-0.8, 0.1, 0.8]}
						rotation={[0, 0, Math.PI / 2]}
						castShadow
					>
						<cylinderGeometry args={[0.3, 0.3, 0.2]} />
						<meshStandardMaterial color="#111" />
					</mesh>
					<mesh
						position={[0.8, 0.1, 0.8]}
						rotation={[0, 0, Math.PI / 2]}
						castShadow
					>
						<cylinderGeometry args={[0.3, 0.3, 0.2]} />
						<meshStandardMaterial color="#111" />
					</mesh>
					<mesh
						position={[-0.8, 0.1, -0.8]}
						rotation={[0, 0, Math.PI / 2]}
						castShadow
					>
						<cylinderGeometry args={[0.3, 0.3, 0.2]} />
						<meshStandardMaterial color="#111" />
					</mesh>
					<mesh
						position={[0.8, 0.1, -0.8]}
						rotation={[0, 0, Math.PI / 2]}
						castShadow
					>
						<cylinderGeometry args={[0.3, 0.3, 0.2]} />
						<meshStandardMaterial color="#111" />
					</mesh>
				</group>
			</group>

			<mesh position={[0, 6.1, -1]} castShadow>
				<boxGeometry args={[8.4, 0.4, 8.4]} />
				<meshStandardMaterial color="#7f8c8d" roughness={0.6} />
			</mesh>

			<mesh position={[0, 6.4, 3.1]} castShadow>
				<boxGeometry args={[8.4, 0.3, 0.4]} />
				<meshStandardMaterial color="#95a5a6" roughness={0.8} />
			</mesh>

			<group position={[0, 7.8, 3.2]}>
				<mesh position={[-2, -1.2, -0.2]} castShadow>
					<boxGeometry args={[0.15, 1.5, 0.15]} />
					<meshStandardMaterial color="#111" />
				</mesh>
				<mesh position={[2, -1.2, -0.2]} castShadow>
					<boxGeometry args={[0.15, 1.5, 0.15]} />
					<meshStandardMaterial color="#111" />
				</mesh>

				<mesh castShadow>
					<boxGeometry args={[6, 2.2, 0.2]} />
					<meshStandardMaterial color="#2c3e50" roughness={0.9} />
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
						"The Diagnostic Garage\n\n* Analyse de Systemes Complexes\n* Debugging Logique\n* Resolution de Problemes"
					}
				</Text>
			</group>

			<group position={[3, 0, 8.5]}>
				<mesh position={[0, 0.8, 0]} castShadow>
					<boxGeometry args={[2, 0.7, 0.1]} />
					<meshStandardMaterial color="#d7a15c" roughness={0.9} />
				</mesh>

				<Text
					position={[0, 0.8, 0.06]}
					fontSize={0.18}
					color="#3a2312"
					textAlign="center"
					anchorX="center"
					anchorY="middle"
					maxWidth={1.8}
				>
					{"14 ANS - EXPERT\nDIAGNOSTIC AUTO"}
				</Text>
			</group>
		</group>
	);
}
