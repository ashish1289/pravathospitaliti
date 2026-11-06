"use client";
import dynamic from 'next/dynamic';

const ThreeWaves = dynamic(() => import('@/components/ThreeWaves'), { ssr: false });

export default function ThreeWavesWrapper() {
  return <ThreeWaves />;
}
