"use client";
import dynamic from 'next/dynamic';

const ThreeHero = dynamic(() => import('@/components/ThreeHero'), { ssr: false });

export default function ThreeHeroWrapper() {
  return <ThreeHero />;
}
