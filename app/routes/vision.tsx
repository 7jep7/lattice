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

// Component for highlighting important text
function Highlight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`my-6 p-5 border-l-4 border-primary dark:border-primary-dark bg-primary/5 dark:bg-primary-dark/10 rounded-r-lg ${className}`}>
      {children}
    </div>
  );
}

// Pull quote component for impactful statements
function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 px-6 py-2 text-xl font-serif italic text-center relative">
      <div className="absolute top-0 left-0 text-6xl text-primary/20 dark:text-primary-dark/20">"</div>
      <div className="relative z-10">{children}</div>
      <div className="absolute bottom-0 right-0 text-6xl text-primary/20 dark:text-primary-dark/20">"</div>
    </blockquote>
  );
}

// Section header with decorative element
function SectionHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${className}`}>
      <h2 className="text-2xl font-bold">{children}</h2>
      <div className="h-px bg-gradient-to-r from-primary/50 to-transparent dark:from-primary-dark/50 flex-grow"></div>
    </div>
  );
}

export default function Vision() {
  return (
    <main className="bg-background text-text dark:bg-background-dark dark:text-text-dark px-6 py-12 max-w-4xl mx-auto">
      {/* Hero section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h1>
        
        <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
          Lattice is to real-world robotics what the internet was to information.
        </p>
        
        <Highlight className="text-left max-w-3xl mx-auto">
          <p>
            Coordination today is broken — siloed, closed, hardcoded. There's no shared memory or protocol for human-agent collaboration.
            Lattice builds that missing layer: open, neutral, and programmable.
          </p>
          <p className="mt-3">
            In the future, robotic agents won't just act — they'll learn collectively through real-world interaction and human intervention.
          </p>
        </Highlight>
      </section>

      <section className="my-12">
        <SectionHeader>A Divided Robotic Age</SectionHeader>
        <p className="text-lg leading-relaxed">
          We are steering towards a world of division in the robotic age. Robots of Mega Corporations will be roaming our cities, in apathy to each other. 
          Delivery routes will be flown twice, and data duplicated. In short, resources are wasted.
        </p>

        <ResponsiveImage 
        src="/vision/divided-robotic-age.png" 
        darkModeSrc="/vision/divided-robotic-age.png"
        alt="A visualization of a divided robotic future" 
        />
      </section>

      <section className="my-12">
        <SectionHeader>A Flourishing Robotic Age</SectionHeader>
        <p className="text-lg leading-relaxed">
          We believe in the flourishing age of robotics of collaboration, and efficiency. This requires an infrastructure shared among Mega Corps and individual 
          synthetics and humans. A place where robots, AIs, and humans trade services and data in a free market for efficient resource allocation.
        </p>
        
        <PullQuote>
          Lattice is the coordination and data layer of the age of robotics.
        </PullQuote>
        
        <p className="text-lg leading-relaxed">
          It will be the trusted infrastructure aligning incentives, providing solid yet seamless contractual agreements, 
          and automating with the highest level of cybersecurity.
        </p>
      </section>

      <ResponsiveImage 
        src="/vision/flourishing-robotic-age.jpg" 
        darkModeSrc="/vision/flourishing-robotic-age.jpg"
        alt="A future of collaborative robotics" 
      />

      <section className="my-12">
        <SectionHeader>Why Lattice Matters</SectionHeader>
        <p className="text-lg leading-relaxed">
          Lattice can do what no corporation can. Corporations would always prefer their own robots and hinder collaboration across vendors. 
          Furthermore, increasing automation of robots in our lives will lead to cybersecurity risks going parabolic.
        </p>
        
        <Highlight>
          <p>
            We propose a decentralized platform that weaves trust and reliability into the network itself. If our everyday life relies on robots, 
            we better eliminate any chokepoints to the system by design. Lattice does.
          </p>
        </Highlight>
        
        <p className="text-lg leading-relaxed mt-4">
          Reimagining the architecture or a coordination layer owned by none, and designed by all, will lead to the most seamless interactions. 
          Our architecture will transform data from a proprietary liability into a trustless utility that its owner may monetize on, fully censorship-resistant.
        </p>
        
        <p className="text-lg leading-relaxed mt-4">
          Alleviated from the burden of cybersecurity, compliance overhead, we focus on delivering user-centric contracts.
        </p>
      </section>

      <section className="my-12">
        <SectionHeader>Our Approach</SectionHeader>
        <p className="text-lg leading-relaxed">
          By leveraging third-generation blockchain technology and building on Sui, we ensure the infrastructure is mature enough to handle transactions, 
          data storage, privacy, and deliver a seamless user experience. 
          For more details, see the technical guide: <a href="/how-it-works" className="text-primary dark:text-primary-dark hover:underline transition-all font-medium">How It Works</a>.
        </p>
        
        <div className="mt-8 bg-background-alt dark:bg-background-alt-dark p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Lattice is:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="text-primary dark:text-primary-dark mr-3 mt-1">•</div>
              <span>A coordination and data layer where services and data can be traded between humans, AIs, and robots.</span>
            </li>
            <li className="flex items-start">
              <div className="text-primary dark:text-primary-dark mr-3 mt-1">•</div>
              <span>A platform that connects AIs, Humans, and Robots as equal actors.</span>
            </li>
            <li className="flex items-start">
              <div className="text-primary dark:text-primary-dark mr-3 mt-1">•</div>
              <span>A provider of countless blueprints of interactions and their smart contracts, to ensure seamless interactions of all parties; vetted open-source contracts.</span>
            </li>
          </ul>
        </div>
        
        <PullQuote>
          In the long run, Lattice will naturally transition to a decentralized platform governed by its users.
        </PullQuote>
        
        <p className="text-lg leading-relaxed">
          Contributors will shape its future, aligning incentives with long-term growth.
        </p>
      </section>
    </main>
  );
}
