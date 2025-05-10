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

// Helper components (consider moving to a shared components file if used in more places)
// Component for highlighting important text
function Highlight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`my-6 p-5 border-l-4 border-primary dark:border-primary-dark bg-primary/5 dark:bg-primary-dark/10 rounded-r-lg ${className}`}>
      {children}
    </div>
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

const TeamPage: React.FC = () => {
  return (
    <main className="bg-background text-text dark:bg-background-dark dark:text-text-dark px-6 py-12 max-w-4xl mx-auto">
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet the Team</h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
          A Proven Duo Moving Atoms with Code
        </p>
      </section>

      <section className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Jonas Petersen */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <img
              className="mx-auto md:mx-0"
              src="/team/jonas-profile_pic.jpeg"
              alt="Jonas Petersen"
              style={{ width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 2px 16px #0002' }}
            />
            <h3 className="text-2xl font-semibold mt-6 mb-2">Jonas Petersen</h3>
            <p className="text-lg font-medium text-primary dark:text-primary-dark mb-3">Robotics | Ecosystem</p>
            <p className="text-base leading-relaxed mb-3">
              Jonas Petersen is a founder and operator at the nexus of AI, media infrastructure, and robotics. As UK CEO of Media Press Group, he established the London office and co-led a 12-person commercial team, launching a metadata platform used by Europe’s largest broadcasters. He co-founded K2 AI, a machine learning hub that achieved €500k ARR in its first year. With dual MSc degrees in Mechanical Engineering (Imperial College) and Nanotechnology (Cambridge), Jonas brings technical depth and operational expertise. He recently won second prize for Scalability at Germany’s largest robotics hackathon in Munich.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              <strong>Publications:</strong> <a href="https://www.tandfonline.com/doi/full/10.1080/00102202.2023.2246195" target="_blank" rel="noopener noreferrer" className="hover:underline">Modelling and Optimisation of Extinction Actions for Wildfire Suppression</a> (Combustion Science & Technology, Sep 2023)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              <strong>Experience:</strong> Ex-BCG, RL & Robotics Hacker, BMW Hackathon 2nd Place
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://x.com/7jep7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-primary-dark hover:underline"
              >
                X
              </a>
              <a
                href="https://www.linkedin.com/in/jep7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-primary-dark hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Gordon Koehn */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <img
              className="mx-auto md:mx-0"
              src="/team/gordon_profile_pic.webp"
              alt="Gordon Koehn"
              style={{ width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 2px 16px #0002' }}
            />
            <h3 className="text-2xl font-semibold mt-6 mb-2">Gordon Koehn</h3>
            <p className="text-lg font-medium text-primary dark:text-primary-dark mb-3">Web3 | Data</p>
            <p className="text-base leading-relaxed mb-3">
              Gordon is a software engineer and Web3 innovator with dual MSc degrees in Biotech (ETH Zürich) and Physics (Imperial College). At ETH Zürich’s D-BSSE, he builds data importers for genomic databases to accelerate viral variant discovery in Swiss wastewater. By night, he’s a top 50 global Hummingbot market maker, securing €60k in soft commitments for a 2024 Sui project focused on efficient liquidity pools with on-chain order books. His interdisciplinary expertise in physics, biotech, and decentralized finance fuels Lattice’s data-driven approach.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              <strong>Publications:</strong> <a href="https://iopscience.iop.org/article/10.3847/1538-4357/aca28c" target="_blank" rel="noopener noreferrer" className="hover:underline">Successive Interacting Coronal Mass Ejections: How to Create a Perfect Storm?</a> (Astrophysical Journal, MSc Thesis Feature)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              <strong>Experience:</strong> Software Engineer at Swiss Viral Surveillance, Web3 Market Maker
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://x.com/gordon_koehn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-primary-dark hover:underline"
              >
                X
              </a>
              <a
                href="https://www.linkedin.com/in/gordonkoehn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-primary-dark hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="my-12">
        <SectionHeader>Our Journey Together</SectionHeader>
        <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto text-center md:text-left">
          Jonas and Gordon’s partnership began in high school, forged through a shared drive for innovation and spirited collaboration. Their past projects showcase their ability to turn bold ideas into reality.
        </p>

        <div className="space-y-8">
          <Highlight>
            <h3 className="text-xl font-semibold mb-2">Caelum: Crowdfunded High-Altitude Balloon Photography</h3>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Co-Founders</p>
            <p className="text-base leading-relaxed">
              Jonas and Gordon developed and launched a weather balloon to capture stratospheric photos at 38km above sea level. They co-led design, mission planning, and regulatory affairs, raising €2.5k via Kickstarter—exceeding funding goals. A second Kickstarter campaign achieved 275% of its target.
            </p>
          </Highlight>

          <Highlight>
            <h3 className="text-xl font-semibold mb-2">NyxX Studios: Mobile Gaming Startup</h3>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Co-Founders / Developers</p>
            <p className="text-base leading-relaxed">
              The duo co-pioneered <em>Linearity</em>, an Android casual game published on the Play Store and monetized through ads. They collaborated on product planning, modeling, and programming until new Play Store regulations led to its removal in 2019.
            </p>
          </Highlight>
        </div>
      </section>

      <section className="my-12 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://www.linkedin.com/in/jep7/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Message Us on LinkedIn
        </a>
        <a
          href="/contact"
          className="btn"
        >
          Get Early Access
        </a>
      </section>
    </main>
  );
};

export default TeamPage;
