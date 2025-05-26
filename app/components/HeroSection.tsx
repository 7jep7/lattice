import Highlight from './Highlight'; 

// app/components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-transparent text-text dark:text-text-dark flex flex-col justify-center items-center px-6 text-center">
      <div className="max-w-4xl mt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          The Coordination and Data Layer for the Robotic Age.
        </h1>
        {/* Microcopy tagline
        <p className="text-lg md:text-xl text-secondary dark:text-secondary-dark mb-6">
          Towards a shared infrastructure for embodied AI.
        </p> */}
        <p className="text-lg md:text-xl text-text dark:text-text-dark mb-10">
          Lattice breaks the corporate silos that trap autonomous machines - 
          enabling them to share tasks, data, and payments across a decentralized network.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/readme" className="btn">Story Time</a>
          <a href="/how-it-works" className="btn">See How it Works</a>
          <a href="/team" className="btn">Join Early</a>
        </div>
      </div>
      <div className="my-10"></div>
      <Highlight className="text-left max-w-3xl mx-auto">
        <p>
          Long-term, robots will coordinate like humans: collaborating, negotiating, and exchanging value - with each other and with us.
        </p>
      </Highlight>
    </section>
  );
}
