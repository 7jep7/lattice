import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "How It Works | Lattice" },
  {
    name: "description",
    content:
      "Understand how humans, machines, and the Lattice network collaborate to coordinate tasks in the real world.",
  },
];

export default function HowItWorks() {
  return (
    <main className="bg-background text-text dark:bg-background-dark dark:text-text-dark px-6 py-12 max-w-4xl mx-auto space-y-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">How It Works</h1>
        <p>
          Lattice enables real-world coordination across three flows: humans, machines, and the network that binds them.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">For Humans</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Request tasks</li>
          <li>Monitor or intervene</li>
          <li>Approve, rescue, or supervise</li>
          <li>Get paid for supporting machines</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">For Machines</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Register availability</li>
          <li>Accept tasks</li>
          <li>Request human help</li>
          <li>Improve models via shared outcomes</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">For the Network</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Routing, scoring, fallback coordination</li>
          <li>On-chain task settlement</li>
          <li>Shared memory + reward logic</li>
        </ul>
      </section>
    </main>
  );
}
