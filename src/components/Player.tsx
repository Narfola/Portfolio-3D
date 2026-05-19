import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useKeyboard } from "../hooks/useKeyboard";

export function Player() {
	const { moveForward, moveBackward, moveLeft, moveRight } = useKeyboard();

	const characterRef = useRef<THREE.Group>(null);
	const leftArmRef = useRef<THREE.Group>(null);
	const rightArmRef = useRef<THREE.Group>(null);
	const leftLegRef = useRef<THREE.Group>(null);
	const rightLegRef = useRef<THREE.Group>(null);

	useFrame((state, delta) => {
		const isMoving = moveForward || moveBackward || moveLeft || moveRight;
		const time = state.clock.getElapsedTime();

		const moveSpeed = 5 * delta;

		if (characterRef.current) {
			if (moveForward) characterRef.current.position.z -= moveSpeed;
			if (moveBackward) characterRef.current.position.z += moveSpeed;
			if (moveLeft) characterRef.current.position.x -= moveSpeed;
			if (moveRight) characterRef.current.position.x += moveSpeed;

			if (moveForward) characterRef.current.rotation.y = Math.PI;
			else if (moveBackward) characterRef.current.rotation.y = 0;
			else if (moveLeft) characterRef.current.rotation.y = -Math.PI / 2;
			else if (moveRight) characterRef.current.rotation.y = Math.PI / 2;

			const cameraOffset = new THREE.Vector3(0, 4, 10);

			const stableTarget = characterRef.current.position.clone();
			stableTarget.y = 0;

			const targetCameraPosition = stableTarget.clone().add(cameraOffset);

			state.camera.position.lerp(targetCameraPosition, 0.1);

			state.camera.lookAt(stableTarget.x, 1.1, stableTarget.z);
		}

		const animSpeed = 12;
		const amplitude = 0.6;

		if (isMoving) {
			if (leftArmRef.current)
				leftArmRef.current.rotation.x = Math.sin(time * animSpeed) * amplitude;
			if (rightArmRef.current)
				rightArmRef.current.rotation.x =
					-Math.sin(time * animSpeed) * amplitude;
			if (leftLegRef.current)
				leftLegRef.current.rotation.x = -Math.sin(time * animSpeed) * amplitude;
			if (rightLegRef.current)
				rightLegRef.current.rotation.x = Math.sin(time * animSpeed) * amplitude;

			if (characterRef.current) {
				characterRef.current.position.y =
					Math.abs(Math.sin(time * animSpeed * 2)) * 0.05;
			}
		} else {
			if (leftArmRef.current) leftArmRef.current.rotation.x = 0;
			if (rightArmRef.current) rightArmRef.current.rotation.x = 0;
			if (leftLegRef.current) leftLegRef.current.rotation.x = 0;
			if (rightLegRef.current) rightLegRef.current.rotation.x = 0;
			if (characterRef.current) characterRef.current.position.y = 0;
		}
	});

	return (
		<group ref={characterRef} position={[0, 0, 0]}>
			<mesh position={[0, 1.7, 0]} castShadow>
				<boxGeometry args={[0.4, 0.4, 0.4]} />
				<meshStandardMaterial color="#ffdbac" roughness={0.7} />
			</mesh>

			<mesh position={[0, 1.85, -0.05]} castShadow>
				<boxGeometry args={[0.44, 0.15, 0.44]} />
				<meshStandardMaterial color="#4a3728" />
			</mesh>

			<mesh position={[0, 1.1, 0]} castShadow>
				<boxGeometry args={[0.6, 0.8, 0.3]} />
				<meshStandardMaterial color="#2980b9" roughness={0.6} />
			</mesh>

			<group ref={leftArmRef} position={[-0.45, 1.4, 0]}>
				<mesh position={[0, -0.3, 0]} castShadow>
					<boxGeometry args={[0.2, 0.6, 0.2]} />
					<meshStandardMaterial color="#ffdbac" />
				</mesh>
			</group>

			<group ref={rightArmRef} position={[0.45, 1.4, 0]}>
				<mesh position={[0, -0.3, 0]} castShadow>
					<boxGeometry args={[0.2, 0.6, 0.2]} />
					<meshStandardMaterial color="#ffdbac" />
				</mesh>
			</group>

			<group ref={leftLegRef} position={[-0.2, 0.7, 0]}>
				<mesh position={[0, -0.35, 0]} castShadow>
					<boxGeometry args={[0.22, 0.7, 0.22]} />
					<meshStandardMaterial color="#1a5276" />
				</mesh>
			</group>

			<group ref={rightLegRef} position={[0.2, 0.7, 0]}>
				<mesh position={[0, -0.35, 0]} castShadow>
					<boxGeometry args={[0.22, 0.7, 0.22]} />
					<meshStandardMaterial color="#1a5276" />
				</mesh>
			</group>
		</group>
	);
}
