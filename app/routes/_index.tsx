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
    <main style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Faint hex lattice and animated shapes */}
      <LatticeBackgroundRenderer />

      {/* Declarative shapes on the grid */}
      <LatticeShape
        type="hexagon"
        at={{ x: 0, y: 0 }}
        showFrom={0}
        hideAfter={99999}
        color="rgba(255, 106, 0, 0.5)"
        size={2}
      />
      <LatticeShape
        type="hexagon"
        at={{ x: -2, y: 1 }}
        showFrom={400}
        hideAfter={99999}
        color="rgba(255, 106, 0, 0.1)"
        size={1}
      />

      {/* Your content */}
      <HeroSection />
      <ReadmeSection />
      {/* Add other sections here */}
    </main>
  );
}