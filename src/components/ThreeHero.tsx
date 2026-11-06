"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function SculpturalWave() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.2}>
        <torusKnotGeometry args={[1, 0.4, 256, 64, 2, 3]} />
        <MeshDistortMaterial 
          color="#B89A62" 
          roughness={0.2} 
          metalness={0.8}
          distort={0.4}
          speed={1.5}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#F7F3EA" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#08232B" />
        
        <SculpturalWave />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
