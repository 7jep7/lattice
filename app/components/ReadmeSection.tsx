import { useRef, useEffect, useState } from "react";

export default function ReadmeSection() {
  const sections = [
    {
      title: "Part I: The Past",
      heading: "How we got here",
      content: (
        <>
          <p>Once, machines were fixed in place.<br />
          Bolted to factory floors, guarded by fences, programmed to repeat.</p>
          <p className="mt-4">Then came the age of mobility — drones, delivery bots, autonomous vehicles, warehouse swarms.</p>
          <p className="mt-4">They began to move.<br />To sense.<br />To think.<br />To act.</p>
          <p className="mt-4">But even as we taught them to move through space, we forgot to teach them how to move through society.</p>
          <p className="mt-4">Each system became a silo.<br />Each fleet a walled garden.<br />Each robot a closed loop, cut off from the world around it.</p>
          <p className="mt-4">We optimized for control, not coordination.</p>
          <p className="mt-4">And so we got what we designed:<br />Brilliant machines. Dumb networks.</p>
        </>
      ),
    },
    {
      title: "Part II: The Present",
      heading: "Where we are now",
      content: (
        <>
          <p>The age of autonomy has begun.</p>
          <p className="mt-4">Across cities and campuses, machines quietly move through the world — picking up, dropping off, navigating with surprising grace.<br />The dream has broken through in narrow bands of sunlight.</p>
          <p className="mt-4">But those rays don’t reach far.</p>
          <p className="mt-4">Each breakthrough lives inside a fortress.<br />Each fleet is its own kingdom, with its own rules, roads, and rituals.</p>
          <p className="mt-4">These machines act — but they do not collaborate.<br />They see — but they do not share.<br />They learn — but only in isolation.</p>
          <p className="mt-4">What we’ve built is not an ecosystem. It’s a patchwork of silos.<br />Not an internet — but hundreds of private networks, unaware of each other’s existence.</p>
          <p className="mt-4">The machines are waking up.<br />But they are waking up alone.</p>
        </>
      ),
    },
    {
      title: "Part III: The Future",
      heading: "The quest we are on",
      content: (
        <>
          <p>We built Lattice to change that.</p>
          <p className="mt-4">Lattice is the coordination layer for the robotic age.<br />A neutral fabric that lets autonomous agents work together — across vendors, across cities, across reality itself.</p>
          <p className="mt-4">Today, it helps drones and delivery bots find purpose, routes, and rewards.<br />Tomorrow, it could help every moving machine become part of something greater.</p>
          <p className="mt-4">We do not build the machines.<br />We do not own the fleets.<br />We do not need to.</p>
          <p className="mt-4">We build the protocol they can trust.<br />Open. Neutral. Interoperable.</p>
          <p className="mt-4">And beneath this layer of coordination lies something deeper.</p>
          <p className="mt-4">The world has no memory for machines.<br />No shared past. No internet to learn from.<br />No great corpus of cause and effect.</p>
          <p className="mt-4">Each robot begins again — newborn, blind to the lessons of others.</p>
          <p className="mt-4">The greatest minds in AI remind us:<br />Even the smallest child has seen more of the physical world than our most powerful models.<br />Because the world has no open memory for motion.</p>
          <p className="mt-4">Lattice is the first thread in that memory.</p>
          <p className="mt-4">Every trip. Every stumble. Every edge case shared.<br />A collective history of motion.<br />A training ground not of pixels, but of purpose.<br />A path toward more adaptive agents, better models, and emergent intelligence.</p>
          <p className="mt-4">We are toolmakers.<br />We are network builders.<br />We are laying down the protocols for the next hundred years of motion.</p>
          <p className="mt-4">The future is filled with machines.</p>
          <p className="mt-4 font-semibold">Let’s help them move — and learn — as one.</p>
        </>
      ),
    },
  ];

  // Glow state based on scroll
  const [glow, setGlow] = useState(0.15);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;
      // Glow from 0.15 to 0.7 as you scroll
      setGlow(0.15 + progress * 0.55);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="readme" className="w-full flex min-h-screen">
      {/* Left: Fixed Glowing circle
      <div className="hidden md:block w-1/2 min-h-screen relative">
        <div
          style={{
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(255,200,80,${glow}) 0%, rgba(255,200,80,0.08) 70%, transparent 100%)`,
            boxShadow: `0 0 120px 40px rgba(255,200,80,${glow})`,
            filter: "blur(0.5px)",
            position: "fixed",
            left: "10vw",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      </div> */}
      {/* Right: Story */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 py-16 bg-transparent text-text dark:text-text-dark max-w-2xl ml-auto">
        <p className="uppercase tracking-wide text-text dark:text-text-dark text-sm mb-2 font-semibold w-full text-left">
          README — Lattice
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 w-full text-left">This is not a whitepaper.</h2>
        <div className="text-lg text-text dark:text-text-dark leading-relaxed space-y-4 w-full text-left mb-10">
          <p>This is not a protocol spec, not a tokenomics sheet, and definitely not an ICO.</p>
          <p>This is just a story.</p>
          <p>A story told in three acts.<br />A story about coordination, and what happens when machines start to move on their own.</p>
          <p>This is a story about the robotic age.<br />And like all good stories, it starts with something broken.</p>
          <p>This story is written for someone specific.</p>
          <p className="font-semibold">That person is you.</p>
        </div>
        {sections.map((section, idx) => (
          <div key={section.title} className="mb-16 last:mb-0 w-full">
            <p className="uppercase tracking-wide text-text dark:text-text-dark text-sm mb-2 w-full text-left">
              {section.title}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-2xl w-full text-left">
              {section.heading}
            </h2>
            <div className="text-lg text-text dark:text-text-dark max-w-2xl leading-relaxed space-y-2 w-full text-left">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
