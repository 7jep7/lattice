import type { MetaFunction } from "@remix-run/node";
import HeroSection from "~/components/HeroSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Lattice" },
    { name: "description", 
      content: "An open layer for coordination between intelligent machines and the people around them." },
  ];
};

export default function Index() {
  return (
    <main>
      <HeroSection />
      {/* You can add other components like <ReadmeSection /> or <VisionSection /> here later */}
    </main>
  );
}
