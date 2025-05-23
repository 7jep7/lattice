import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "For Builders | Lattice" },
  {
    name: "description",
    content:
      "Lattice is built for fleet operators, developers, researchers, and cities enabling better coordination between people and machines.",
  },
];

export default function ForBuilders() {
  return (
    <main className="bg-background text-text dark:bg-background-dark dark:text-text-dark px-6 py-12 max-w-4xl mx-auto space-y-16">
      <section className="space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">For Builders</h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
          Lattice is a coordination layer designed for people building real-world systems — from robotics fleets to research tools to civic infrastructure.
        </p>
      </section>

      {/* Builder images section with animations */}
      <section className="py-8">
        <div className="relative flex flex-wrap justify-center items-center gap-12 py-12">
          {/* AI Image without animation */}
          <div className="relative flex flex-col items-center gap-3">
            <div className="w-36 h-36">
              <img src="/builders/AI.png" alt="AI" className="w-full h-full object-contain dark:hidden" />
              <img src="/builders/AI_white.png" alt="AI" className="w-full h-full object-contain hidden dark:block" />
            </div>
            <h3 className="font-semibold text-center">AI Agent</h3>
          </div>
          
          {/* Bot Image with side-to-side animation */}
          <div className="relative flex flex-col items-center gap-3">
            <div className="w-36 h-36 animate-sideFloat" style={{ animationDelay: "0.5s" }}>
              <img src="/builders/bot.png" alt="Bot" className="w-full h-full object-contain dark:hidden" />
              <img src="/builders/bot_white.png" alt="Bot" className="w-full h-full object-contain hidden dark:block" />
            </div>
            <h3 className="font-semibold text-center">Robots</h3>
          </div>
          
          {/* Drone Image with animation */}
          <div className="relative flex flex-col items-center gap-3">
            <div className="w-36 h-36 animate-float" style={{ animationDelay: "1s" }}>
              <img src="/builders/drohne.png" alt="Drone" className="w-full h-full object-contain dark:hidden" />
              <img src="/builders/drohne_white.png" alt="Drone" className="w-full h-full object-contain hidden dark:block" />
            </div>
            <h3 className="font-semibold text-center">Drones</h3>
          </div>
          
          {/* Human Image without animation */}
          <div className="relative flex flex-col items-center gap-3">
            <div className="w-36 h-36">
              <img src="/builders/human.png" alt="Human" className="w-full h-full object-contain dark:hidden" />
              <img src="/builders/human_white.png" alt="Human" className="w-full h-full object-contain hidden dark:block" />
            </div>
            <h3 className="font-semibold text-center">Humans</h3>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">First Users & Interactions</h2>
        <div className="my-6 p-5 border-l-4 border-primary dark:border-primary-dark bg-primary/5 dark:bg-primary-dark/10 rounded-r-lg text-left max-w-3xl mx-auto">
          <p className="text-lg">
            The Lattice Network facilitates seamless trading of data and services, with every interaction guided by curated task templates, also known as smart contracts. These programmable frameworks ensure smooth, reliable exchanges between humans, personal AIs, and autonomous robots.
          </p>
          <p className="text-lg mt-3">
            While the full scope of Lattice’s applications is boundless, here are the two dimensions: <span className="font-semibold">Data</span> and <span className="font-semibold">Services</span>.
          </p>
        </div>
      </section>

      {/* Use case images section */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-8 text-center">Early Use Cases, endless ways to go..</h2>
        <div className="flex flex-col gap-16">
          {/* Delivery Use Case */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 flex-shrink-0">
              <img src="/builders/usecases/delivery.png" alt="Delivery" className="w-full h-full object-contain dark:hidden" />
              <img src="/builders/usecases/delivery_white.png" alt="Delivery" className="w-full h-full object-contain hidden dark:block" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Last-Mile Delivery</h3>
              <p className="mb-1">Apple Intelligence orders food via Lattice, creating a smart contract. A local grocery&apos;s robotic fleet accepts and delivers.</p>
              <p>Lattice ensures trust, processes payments (Silicon Tokens/fiat), and rewards users, driving network growth.</p>
              <p><strong>Outcome: Seamless, decentralized, efficient fleet collaboration.</strong></p>
            </div>
          </div>

          {/* Bridge/Infrastructure Use Case */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 flex-shrink-0">
              <img src="/builders/usecases/bridge.png" alt="Infrastructure" className="w-full h-full object-contain dark:hidden" />
              <img src="/builders/usecases/bridge_white.png" alt="Infrastructure" className="w-full h-full object-contain hidden dark:block" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Data Collection: 3D of Infrastructure Survey</h3>
              <p className="mb-1">Monitoring bridges is expensive, but hobbyist drones can deliver high-resolution data cheaper. Lattice System connects insurers or governments with drone operators.</p>
              <p>Data Buyers set Data Bounties via Smart Contracts, defining access and checks. Drones, autonomous or human-guided, accept Tasks, deliver data, and receive secure, on-chain payments in Silicon Tokens.</p>
              <p><strong>Outcome: Lattice ensures trust, security, and seamless human-robot collaboration.</strong></p>
            </div>
          </div>

          {/* Supervised Use Case */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 flex-shrink-0">
              <img src="/builders/usecases/supervised.png" alt="Supervised Operations" className="w-full h-full object-contain dark:hidden" />
              <img src="/builders/usecases/supervised_white.png" alt="Supervised Operations" className="w-full h-full object-contain hidden dark:block" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Human-Robot Collaboration: Human helps with Guidance and Supervision</h3>
              <p className="mb-1">A ground-based robot, surveying urban infrastructure via the Lattice Network, gets stuck in a muddy alley. Its AI hires a nearby human through a smart contract, offering payment to free it. Using fine-grained motor control and contextual judgment, the human clears debris and guides the robot to stable ground, ensuring compliance with local pedestrian rules. Payment is processed instantly, and the robot updates its path to avoid obstacles.</p>
              <p><strong>Outcome: This highlights Lattice’s ability to integrate human dexterity, judgment, or legally required compliance with robotic efficiency.</strong></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
