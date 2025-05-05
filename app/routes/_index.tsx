import type { MetaFunction } from "@remix-run/node";
import HeroSection from "~/components/HeroSection";
import ReadmeSection from "~/components/ReadmeSection";
import LatticeBackgroundRenderer from '~/components/BackgroundLattice/LatticeBackgroundRenderer';
import { LatticeShape } from '~/components/BackgroundLattice/LatticeShape';

export const meta: MetaFunction = () => {
  return [
    { title: "Lattice" },
    {
      name: "description",
      content:
        "An open layer for coordination between intelligent machines and the people around them.",
    },
  ];
};

export default function Index() {
  return (
    <>
      {/* 🟡 1. Canvas layer (hex grid + shapes) */}
      <LatticeBackgroundRenderer />

      {/* ⚫ 2. Fullscreen background that respects light/dark mode */}
      <div className="absolute inset-0 bg-background dark:bg-background-dark z-0" />

      {/* ⚪ 3. Foreground content (text, nav, etc.) */}
      <main className="relative z-10">
        <LatticeShape
          type="hexagon"
          at={{ x: 0, y: 0 }}
          showFrom={0}
          hideAfter={2000}
          color="rgba(255, 106, 0, 0.4)"
          size={1}
        />

        <LatticeShape
          type="hexagon"
          at={{ x: -2, y: 0 }}
          showFrom={600}
          hideAfter={1600}
          color="rgba(255, 106, 0, 0.4)"
          size={1}
          filled={false}
        />

        <HeroSection />
        <ReadmeSection />
        {/* Add more content sections as needed */}
      </main>
    </>
  );
}