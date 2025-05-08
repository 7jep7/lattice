import type { MetaFunction } from "@remix-run/node";
import HeroSection from "~/components/HeroSection";
import ReadmeSection from "~/components/ReadmeSection";
import LatticeBackgroundRenderer from "~/components/BackgroundLattice/LatticeBackgroundRenderer";
import { LatticeShape } from "~/components/BackgroundLattice/LatticeShape";
import { useEffect } from 'react';
import { registerTraceEdge } from '~/components/BackgroundLattice/useTraceEdgeRegistry';
import { VertexTracePath } from "~/components/BackgroundLattice/VertexTracePath";

const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1000;

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
  const baseScrollStart = 0.5 * screenHeight;
  const step = 0.3 * screenHeight;

  const ring = [
    { x: -2, y: -1 }, // top
    { x: -1, y: -1 }, // top-right
    { x: -1, y: 0 },  // bottom-right
    { x: -2, y: 1 },  // bottom
    { x: -3, y: 0 },  // bottom-left
    { x: -3, y: -1 },  // top-left
  ];

  //for testing
  useEffect(() => {


    const tracePath = new VertexTracePath({
      id: 'trace-test',
      start_vertex: { hex: { x: -4, y: 0 }, vertex: 0 },
      directions: [2, 3, 4, 5], // a short zig-zag
      mode: 'trace',
      startAnimationIn: window.innerHeight * 0.5,
      startAnimationOut: window.innerHeight * 1.2,
      color: 'rgba(255, 106, 0, 1)',
    });

    const flashPath = new VertexTracePath({
      id: 'trace-test',
      start_vertex: { hex: { x: -2, y: 0 }, vertex: 0 },
      directions: [2, 3, 4, 5], // a short zig-zag
      mode: 'flash',
      startAnimationIn: window.innerHeight * 0.5,
      startAnimationOut: window.innerHeight * 1.2,
      color: 'rgba(255, 106, 0, 1)',
    });

    tracePath.generateTraceEdges().forEach(registerTraceEdge);
    flashPath.generateTraceEdges().forEach(registerTraceEdge);

  }, []);

  return (
    <>
      <LatticeBackgroundRenderer />
      <div className="absolute inset-0 bg-background dark:bg-background-dark z-0" />

      <main className="relative z-10">
        {/* {ring.map((hex, i) => (
          <LatticeShape
            key={`${hex.x},${hex.y}`}
            type="hexagon"
            at={hex}
            showFrom={baseScrollStart + i * step}
            hideAfter={999999} // stays visible
            animationMode="fade"
            color="rgba(255, 106, 0, 0.2)"
            size={1}
            filled={true}
          />
        ))} */}

        <HeroSection />
        <ReadmeSection />
      </main>
    </>
  );
}
