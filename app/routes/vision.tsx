import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Vision | Lattice" },
  {
    name: "description",
    content:
      "Lattice is to real-world robotics what the internet was to information.",
  },
];

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
          In the future, robotic agents won’t just act — they’ll learn collectively through real-world interaction and human intervention.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Timeline</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>NOW:</strong> Delivery bots & drones</li>
          <li><strong>SOON:</strong> Shared training data & fallback systems</li>
          <li><strong>FUTURE:</strong> Embodied AI collaboration at scale</li>
        </ul>
      </section>
    </main>
  );
}
