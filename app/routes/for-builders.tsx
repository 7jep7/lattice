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
