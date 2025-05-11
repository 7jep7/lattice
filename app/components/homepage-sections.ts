export type HomepageSection = {
    id: string;
    title: string;
    content: string;
  };
  
  export const homepageSections: HomepageSection[] = [
    {
      id: "hero",
      title: "An open coordination layer for robots and the people around them",
      content:
        "Robots operate in silos, repeating tasks and hoarding data. Lattice connects them into a shared layer - enabling coordination, data sharing, and on-chain interaction between machines, humans, and AI agents.\n\nA foundational layer for embodied intelligence.",
    },
    {
      id: "problem",
      title: "Embodied AI is bottlenecked by fragmentation",
      content:
        "Autonomous systems can't scale without a shared infrastructure. Captured data stays siloed. Robots don’t collaborate. Individuals can’t contribute. There’s no global layer for tasks, accountability, or payments between agents.",
    },
    {
      id: "solution",
      title: "Lattice builds the shared layer robots need",
      content:
        "We’re creating the coordination fabric for real-world autonomy - a protocol for:\n- Sharing 3D maps and sensor data\n- Assigning and completing tasks via smart contracts\n- Seamless machine ↔ human ↔ AI interaction\nAll powered by decentralized tech and scalable tokenomics.",
    },
    {
      id: "phases",
      title: "From shared data to real-world collaboration",
      content:
        "We begin by enabling a decentralized training data layer for robotics. Next: connect private silos, empower individuals to contribute, and unlock multi-agent coordination. Step-by-step, we’re shaping the protocol that lets embodied AI scale in the real world.",
    },
    {
      id: "use-cases",
      title: "Early examples of human-machine coordination",
      content:
        "• Delivery: A fleet delivers groceries, paid via smart contract.\n\n• Survey: Hobbyist drones collect 3D infrastructure data for public agencies.\n\n• Supervision: A robot hires a nearby human to help it out of trouble.\n\nLattice powers interactions between robots, humans, and personal AIs — with trust, payment, and traceability built in.",
    },
    {
      id: "join",
      title: "Let’s build the infrastructure for the robotic age",
      content:
        "Lattice is open to those building the next generation of real-world systems - from fleet operators to civic technologists. We’re looking for partners, contributors, and early adopters ready to help shape the future of embodied AI.",
    },
  ];
  