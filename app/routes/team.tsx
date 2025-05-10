import React from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Team | Lattice" },
    {
      name: "description",
      content: "Meet the Lattice team.",
    },
  ];
};

const TeamPage: React.FC = () => {
  return (
    <main className="bg-inherit dark:bg-[#0b0d10] text-gray-900 dark:text-white px-6 py-12 max-w-3xl mx-auto space-y-12">
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet the Team</h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
          A prooven duo – eager to move atom with code.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
        <div className="space-y-2">
          <img className="mx-auto" src="/team/jonas-profile_pic.jpeg" alt="Jonas Petersen" style={{ width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 2px 16px #0002' }} />
          <h2 className="text-xl font-semibold">Jonas Petersen</h2>
          <div className="flex justify-center gap-4">
            <a
              href="https://x.com/7jep7"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#FF6A00] hover:text-[#E65C00]"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/jep7/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#FF6A00] hover:text-[#E65C00]"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <img className="mx-auto" src="/team/gordon_profile_pic.webp" alt="Gordon Koehn" style={{ width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 2px 16px #0002' }} />
          <h2 className="text-xl font-semibold">Gordon Koehn</h2>
          <div className="flex justify-center gap-4">
            <a
              href="https://x.com/gordon_koehn"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#FF6A00] hover:text-[#E65C00]"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/gordonkoehn/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#FF6A00] hover:text-[#E65C00]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://www.linkedin.com/in/jep7/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Message Us on LinkedIn
        </a>
        <a
          href="https://www.linkedin.com/in/jep7/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Get Early Access
        </a>
      </section>
    </main>
  );
};

export default TeamPage;
