import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact | Lattice" },
    {
      name: "description",
      content:
        "Reach out to the Lattice team to partner, collaborate, or get early access to the protocol.",
    },
  ];
};

export default function Contact() {
  return (
    <main className="bg-[#0b0d10] text-white px-6 py-12 max-w-3xl mx-auto space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p>
          We’re inviting early partners, builders, researchers, and aligned funders to help shape the future of Lattice.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
        <div className="space-y-2">
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
}
