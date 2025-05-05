import type { MetaFunction } from "@remix-run/node";
import HeroSection from "~/components/HeroSection";
import ReadmeSection from "~/components/ReadmeSection";
import LatticeBackground from "~/components/LatticeBackground - old";

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
    <main style={{ position: "relative", overflow: "hidden" }}>
      {/* Lattice Background */}
      {/* <LatticeBackground /> */}

      {/* Content Sections */}
      <HeroSection />
      <ReadmeSection />
      {/* Add other sections here */}
    </main>
  );
}
