"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

function OceanWaves() {
  const geomRef = useRef<THREE.PlaneGeometry>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (geomRef.current) {
      const position = geomRef.current.attributes.position;
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        
        // Complex wave math for realistic rolling waves coming towards the camera
        const wave1 = Math.sin(x * 0.15 + time * 0.4) * 0.3;
        const wave2 = Math.sin(y * 0.2 - time * 0.8) * 0.4;
        const wave3 = Math.sin(x * 0.1 + y * 0.1 - time * 0.5) * 0.2;
        
        position.setZ(i, wave1 + wave2 + wave3);
      }
      position.needsUpdate = true;
      geomRef.current.computeVertexNormals();
    }
  });

  return (
    <mesh rotation={[-Math.PI / 2 + 0.05, 0, 0]} position={[0, -1, -5]}>
      <planeGeometry ref={geomRef} args={[100, 40, 256, 64]} />
      <meshStandardMaterial 
        color="#08232B" 
        roughness={0.05} 
        metalness={0.95}
        transparent
        opacity={0.9}
        envMapIntensity={3}
      />
    </mesh>
  );
}

export default function ThreeWaves() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-hard-light">
      <Canvas
        camera={{ position: [0, 3, 12], fov: 45 }}

        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} color="#F7F3EA" />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#F7F3EA" />
        <directionalLight position={[-10, 5, -5]} intensity={0.5} color="#B89A62" />
        
        <OceanWaves />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
