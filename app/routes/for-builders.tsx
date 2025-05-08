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
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">For Builders</h1>
        <p>
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

      {/* Use case images section */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-8 text-center">Use Cases</h2>
        <div className="flex flex-col gap-16">
          {/* Delivery Use Case */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 flex-shrink-0">
              <img src="/builders/usecases/delivery.png" alt="Delivery" className="w-full h-full object-contain dark:hidden" />
              <img src="/builders/usecases/delivery_white.png" alt="Delivery" className="w-full h-full object-contain hidden dark:block" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Last-Mile Delivery</h3>
              <p>Coordinate fleets of autonomous delivery robots and human couriers to optimize routes, handle deliveries in challenging environments, and provide seamless fallback options when automation encounters obstacles.</p>
            </div>
          </div>

          {/* Bridge/Infrastructure Use Case */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 flex-shrink-0">
              <img src="/builders/usecases/bridge.png" alt="Infrastructure" className="w-full h-full object-contain dark:hidden" />
              <img src="/builders/usecases/bridge_white.png" alt="Infrastructure" className="w-full h-full object-contain hidden dark:block" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Infrastructure Monitoring</h3>
              <p>Deploy drones and robotic systems to regularly inspect critical infrastructure like bridges and buildings, with human experts providing oversight and specialized assessment when anomalies are detected.</p>
            </div>
          </div>

          {/* Supervised Use Case */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 flex-shrink-0">
              <img src="/builders/usecases/supervised.png" alt="Supervised Operations" className="w-full h-full object-contain dark:hidden" />
              <img src="/builders/usecases/supervised_white.png" alt="Supervised Operations" className="w-full h-full object-contain hidden dark:block" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Supervised Operations</h3>
              <p>Enable efficient human supervision of autonomous systems with intuitive interfaces for monitoring multiple agents, addressing edge cases, and providing expert guidance when AI encounters situations beyond its capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Fleet Operators / Hardware Providers</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Get more tasks and fallback support</li>
          <li>Stay in control of pricing, operations, and data</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Developers</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Build human-facing apps on top of real-world agents</li>
          <li>Trigger robotic actions programmatically</li>
          <li>Monitor tasks and intervene intelligently</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Researchers</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Access data from interventions and task outcomes</li>
          <li>Train better RL and embodied models using real human-agent feedback</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Cities / Coordinators</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Run mixed-fleet environments</li>
          <li>Let people and machines coordinate via a neutral layer</li>
        </ul>
      </section>
    </main>
  );
}
