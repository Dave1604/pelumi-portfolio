"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * "Drafting space" — a quiet 3D environment of floating sheet outlines and
 * ruler beams. The metaphor is a drafting table caught between Figma and
 * the editor: every project starts here. Slow parallax, no spinning gimmicks.
 */

type SheetSpec = {
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number];
  opacity: number;
};

const SHEETS: SheetSpec[] = [
  { position: [-2.8, 0.6, -1.8], rotation: [0.18, 0.5, 0.04], size: [1.3, 1.85], opacity: 0.55 },
  { position: [2.2, -0.4, -2.4], rotation: [-0.12, -0.45, -0.06], size: [1.5, 1.05], opacity: 0.45 },
  { position: [0.1, 1.4, -3.4], rotation: [0.1, 0.0, 0.02], size: [2.1, 1.4], opacity: 0.3 },
  { position: [-1.5, -1.3, -1.0], rotation: [-0.05, 0.35, 0.08], size: [0.9, 1.25], opacity: 0.6 },
  { position: [2.9, 1.3, -1.6], rotation: [0.05, -0.55, -0.04], size: [0.8, 1.1], opacity: 0.5 },
  { position: [-3.2, -0.8, -3.0], rotation: [0.0, 0.6, 0.02], size: [1.0, 1.4], opacity: 0.32 },
];

function Sheet({ position, rotation, size, opacity }: SheetSpec) {
  const positions = useMemo(() => {
    const [w, h] = [size[0], size[1]];
    return new Float32Array([
      -w, -h, 0,  w, -h, 0,
       w, -h, 0,  w,  h, 0,
       w,  h, 0, -w,  h, 0,
      -w,  h, 0, -w, -h, 0,
    ]);
  }, [size]);

  const cornerPositions = useMemo(() => {
    const [w, h] = [size[0], size[1]];
    return new Float32Array([-w, -h, 0, w, -h, 0, w, h, 0, -w, h, 0]);
  }, [size]);

  return (
    <group position={position} rotation={rotation}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#e8e1d2" transparent opacity={opacity} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[cornerPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#e8e1d2"
          size={0.045}
          transparent
          opacity={opacity}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

function Ruler({ y, length = 12, opacity = 0.25 }: { y: number; length?: number; opacity?: number }) {
  const positions = useMemo(
    () => new Float32Array([-length / 2, y, -2, length / 2, y, -2]),
    [y, length]
  );
  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color="#7e7d77" transparent opacity={opacity} />
    </lineSegments>
  );
}

function Drafting() {
  const group = useRef<THREE.Group>(null);
  const target = useRef(new THREE.Vector2(0, 0));
  const current = useRef(new THREE.Vector2(0, 0));

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    target.current.set(state.pointer.x, state.pointer.y);
    current.current.lerp(target.current, Math.min(1, delta * 2.2));

    if (group.current) {
      group.current.rotation.y =
        Math.sin(t * 0.08) * 0.06 + current.current.x * 0.18;
      group.current.rotation.x =
        Math.cos(t * 0.06) * 0.04 + -current.current.y * 0.12;
      group.current.position.y = Math.sin(t * 0.12) * 0.06;
    }
  });

  return (
    <group ref={group}>
      {SHEETS.map((sheet, i) => (
        <Sheet key={i} {...sheet} />
      ))}
      <Ruler y={2.2} opacity={0.2} />
      <Ruler y={-2.2} opacity={0.2} />
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 5.4], fov: 48 }}
      className="absolute inset-0"
    >
      <Drafting />
    </Canvas>
  );
}
