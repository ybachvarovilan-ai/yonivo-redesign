'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, TorusKnot, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingShape() {
  const knot = useRef<THREE.Mesh>(null);
  const sphere = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (knot.current) {
      knot.current.rotation.x = t * 0.15;
      knot.current.rotation.y = t * 0.2;
    }
    if (sphere.current) {
      sphere.current.rotation.y = -t * 0.1;
    }
  });

  return (
    <group>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <TorusKnot ref={knot} args={[1.1, 0.32, 200, 32]} position={[0, 0.2, 0]}>
          <MeshDistortMaterial
            color="#23d4b6"
            emissive="#18a88f"
            emissiveIntensity={0.35}
            roughness={0.2}
            metalness={0.85}
            distort={0.22}
            speed={1.5}
          />
        </TorusKnot>
      </Float>
      <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.8}>
        <Sphere ref={sphere} args={[0.35, 64, 64]} position={[1.6, -0.9, -0.6]}>
          <meshStandardMaterial color="#2ce8c8" emissive="#23d4b6" emissiveIntensity={0.4} roughness={0.1} metalness={0.9} />
        </Sphere>
      </Float>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1}>
        <Sphere args={[0.2, 48, 48]} position={[-1.7, 1.1, -0.4]}>
          <meshStandardMaterial color="#a8b7c7" roughness={0.3} metalness={0.6} />
        </Sphere>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 5]} intensity={1.1} color="#ffffff" />
        <pointLight position={[-3, -2, -4]} intensity={1.8} color="#23d4b6" />
        <FloatingShape />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}