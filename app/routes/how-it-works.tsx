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
        {/* Hero section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">How it works</h1>
        
        <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
           Connecting Robots, AIs and humans seamlessly – natively secure, scalable and resilient.
        </p>
      
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Under the Hood</h2>
        <p>
          To power autonomous robotic coordination, scale matters on day one. We believe in the SUI blockchain and technology stack.
        </p>

        <div className="my-8 flex justify-center">
          <img src="/how/walrus_sui.webp" alt="Sui Walrus" className="w-full max-w-md dark:hidden" />
          <img src="/how/walrus_sui.webp" alt="Sui Walrus Dark" className="w-full max-w-md hidden dark:block" />
        </div>

        <p>
          Sui was developed by Mysten Labs, founded in 2021 by former Meta engineers from the Diem blockchain project, aiming to create an innovative, internet-scale programmable blockchain platform from the ground up.
        </p>
        <p>
          Its architecture scales horizontally, has low-latency parallel transaction processing, and cost-effective gas fees, enabling high-throughput, secure, and responsive decentralized applications. All the requirements for Lattice.
        </p>
        <p>
          This will enable Lattice to operate at scale, in sub-second latency, and at ultra-low fees. Further, the Sui Stack provides all the abstractions needed to build truly seamless interactions:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            User-friendly abstractions and frictionless Web2-like experiences using SUI’s SEAL for robust encryption and Onchain access control for sensitive data
          </li>
          <li>
            Large-scale, resilient, and easily manageable data storage on Sui´s Walrus - cost-competitive with the latest commercial cloud services at sub-second speeds
          </li>
          <li>
            At the highest private and encrypted using Tusky’s abstractions
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">The Lattice Ecosystem</h2>
        <p>
          The Lattice Network aims to enable efficient, market-driven resource allocation in the robotic age through a simple, scalable design. It:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Aligns incentives for sustainable, ubiquitous growth</li>
          <li>Communicates a clear, straightforward structure</li>
          <li>Strongly rewards early adopters to kickstart the network</li>
          <li>Empowers users to collaboratively drive network development</li>
          <li>Ensures secure, self-custodial, privacy-preserving, and censorship-resistant data handling</li>
        </ul>
        <p>
          As an ecosystem, Lattice needs its own fuel, its own unit of exchange that users interact with implicitly or directly. The robotic age is going to be powered by <span className="font-semibold">$Silicon</span>. Silicon will be the utility and governance token of the network.
        </p>

        <div className="my-8 flex justify-center">
          <img src="/how/ecosystem.png" alt="Lattice Ecosystem" className="w-full max-w-lg dark:hidden" />
          <img src="/how/ecosystem_dark.png" alt="Lattice Ecosystem Dark" className="w-full max-w-lg hidden dark:block" />
        </div>

      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">At the Core</h2>
        <p>
          At the core of the Lattice System is a flywheel loop designed to drive network growth. It begins with a Buyer posting a Task, injecting capital into the ecosystem. Sellers can accept Tasks based on mutual agreement or predefined criteria, with payments, delivery terms, and optional escrow mediated by the Task itself.
        </p>
        <p>
          Tasks are the heartbeat of the Lattice System. We craft Task Templates—Smart Contracts—that streamline interactions, creating seamless experiences for Humans, AIs, and Robots.
        </p>
        <p>
          To accelerate growth and ensure sustainable funding in the early stages, the Lattic-DAO (Decentralized Autonomous Organization) injects Network Rewards into the flywheel. Holders of Silicon Tokens can vote on protocol development and DAO fund allocation. The Lattic-DAO receives Silicon Tokens from the Network Fund on a programmatic, decades-long schedule, ensuring long-term development.
        </p>
        <p>
          To enhance network dynamics and introduce deflationary pressure, the system programmatically buys back Silicon Tokens with fiat or burns a portion of them. The network is designed so that increased activity drives demand for Silicon Tokens. Users can choose to interact directly with Silicon for exposure to network growth or opt for seamless conversions to fiat or stablecoins (e.g., USD or EUR) for convenience.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Lattice System Tokenomics</h2>
        <p>Total Supply: 1,000,000,000 Silicon Tokens (fixed, no inflation).</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Team: 15% (150,000,000 tokens), vested over 4 years.</li>
          <li>Ecosystem Fund: 20% (200,000,000 tokens), dedicated to development and partnerships.</li>
          <li>Community: 65% (650,000,000 tokens), distributed through Task and Curation Rewards.</li>
        </ul>
        <p>Distribution: No presale. Tokens are allocated solely through Task and Curation Rewards to foster community participation.</p>
        <h3 className="text-xl font-semibold">Roadmap:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Q2 2025 (Now): Finalized tokenomics, audited Sui contracts, Walrus integration.</li>
          <li>Q3 2025: MVP launch, closed beta (agriculture, mapping, human tasks).</li>
          <li>Q4 2025: Public beta, reputation system, zkLogin rollout, marketing.</li>
          <li>Q1 2026: Full launch, advanced reputation, stablecoin conversion.</li>
          <li>Q2 2026: Data marketplace launch, expanded partnerships.</li>
        </ul>
      </section>
    </main>
  );
}
