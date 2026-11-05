'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, useGLTF, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Magento3DLogo() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Make sure your file in the public folder is named exactly 'magento-3d.glb'
  const { scene } = useGLTF('/magento-3d.glb'); 

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.x = t * 0.15;
      groupRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <group ref={groupRef}>
        <primitive object={scene} scale={0.025} />
      </group>
    </Float>
  );
}

function FloatingSpheres() {
  const sphere1 = useRef<THREE.Mesh>(null);
  const sphere2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sphere1.current) sphere1.current.rotation.y = -t * 0.1;
    if (sphere2.current) sphere2.current.rotation.x = t * 0.1;
  });

  return (
    <group>
      <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.8}>
        <Sphere ref={sphere1} args={[0.35, 64, 64]} position={[1.6, -0.9, -0.6]}>
          <meshStandardMaterial color="#2ce8c8" emissive="#23d4b6" emissiveIntensity={0.4} roughness={0.1} metalness={0.9} />
        </Sphere>
      </Float>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1}>
        <Sphere ref={sphere2} args={[0.2, 48, 48]} position={[-1.7, 1.1, -0.4]}>
          <meshStandardMaterial color="#a8b7c7" roughness={0.3} metalness={0.6} />
        </Sphere>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-3, -2, -4]} intensity={1.8} color="#f26322" />
      
      <Environment preset="city" />

      <Magento3DLogo />
      <FloatingSpheres />
    </Canvas>
  );
}

useGLTF.preload('/magento-3d.glb');