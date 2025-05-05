import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Vision | Lattice" },
  {
    name: "description",
    content:
      "Lattice is to real-world robotics what the internet was to information.",
  },
];

// Image component that handles dark/light mode appropriately
function ResponsiveImage({ 
  src, 
  darkModeSrc = src, // Optional different image for dark mode
  alt, 
  className = "" 
}: { 
  src: string; 
  darkModeSrc?: string; 
  alt: string; 
  className?: string;
}) {
  return (
    <div className={`my-8 rounded-lg overflow-hidden shadow-md dark:shadow-gray-800 ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto object-cover block dark:hidden" 
      />
      <img 
        src={darkModeSrc} 
        alt={alt} 
        className="w-full h-auto object-cover hidden dark:block" 
      />
    </div>
  );
}

export default function Vision() {
  return (
    <main className="bg-background text-text dark:bg-background-dark dark:text-text-dark px-6 py-12 max-w-3xl mx-auto space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Our Vision</h1>
        <p>
          Lattice is to real-world robotics what the internet was to information.
        </p>
        <p>
          Coordination today is broken — siloed, closed, hardcoded. There's no shared memory or protocol for human-agent collaboration.
          Lattice builds that missing layer: open, neutral, and programmable.
        </p>
        <p>
          In the future, robotic agents won't just act — they'll learn collectively through real-world interaction and human intervention.
        </p>
      </section>

      <ResponsiveImage 
        src="/vision/divided-robotic-age.png" 
        darkModeSrc="/vision/divided-robotic-age.png"
        alt="A visualization of a divided robotic future" 
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">A Divided Robotic Age</h2>
        <p>
          We are steering towards a world of division in the robotic age. Robots of Mega Corporations will be roaming our cities, in apathy to each other. 
          Delivery routes will be flown twice, and data duplicated. In short, resources are wasted.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">A Flourishing Robotic Age</h2>
        <p>
          We believe in the flourishing age of robotics of collaboration, and efficiency. This requires an infrastructure shared among Mega Corps and individual 
          synthetics and humans. A place where robots, AIs, and humans trade services and data in a free market for efficient resource allocation.
        </p>
        
        <p>
          Lattice is that. The coordination and data layer of the age of robotics. It will be the trusted infrastructure aligning incentives, 
          providing solid yet seamless contractual agreements, and automating with the highest level of cybersecurity.
        </p>
      </section>

      <ResponsiveImage 
        src="/vision/flourishing-robotic-age.jpg" 
        darkModeSrc="/vision/flourishing-robotic-age-dark.jpg"
        alt="A future of collaborative robotics" 
        className="my-10" 
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Why Lattice Matters</h2>
        <p>
          Lattice can do what no corporation can. Corporations would always prefer their own robots and hinder collaboration across vendors. 
          Furthermore, increasing automation of robots in our lives will lead to cybersecurity risks going parabolic. We propose a decentralized 
          platform that weaves trust and reliability into the network itself. If our everyday life relies on robots, we better eliminate any 
          chokepoints to the system by design. Lattice does.
        </p>
        
        <p>
          Reimagining the architecture or a coordination layer owned by none, and designed by all, will lead to the most seamless interactions. 
          Our architecture will transform data from a proprietary liability into a trustless utility that its owner may monetize on, fully censorship-resistant.
        </p>
        
        <p>
          Alleviated from the burden of cybersecurity, compliance overhead, we focus on delivering user-centric contracts.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Our Approach</h2>
        <p>
          Blockchain Technology has reached the maturity to handle transactions, data storage, privacy, and seamless UX.
        </p>
        
        <h3 className="text-xl font-semibold mt-4">Lattice is:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>A coordination and data layer where services and data can be traded between humans, AIs, and robots.</li>
          <li>A platform that connects AIs, Humans, and Robots as equal actors.</li>
          <li>A provider of countless blueprints of interactions and their smart contracts, to ensure seamless interactions of all parties; vetted open-source contracts.</li>
        </ul>
        
        <p className="mt-4">
          In the long run, Lattice will naturally transition to a decentralized platform governed by its users. 
          Contributors will shape its future, aligning incentives with long-term growth.
        </p>
      </section>
    </main>
  );
}
