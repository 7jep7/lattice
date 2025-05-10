// app/components/HeroSection.tsx
export default function HeroSection() {
    return (
      <section className="relative overflow-hidden min-h-screenb bg-transparent text-text dark:text-text-dark flex flex-col justify-center items-center px-6 text-center">
        
        {/* 🔹 Add animated background */}
        {/* <LatticeBackground /> */}
  
        {/* 🔹 Main hero content */}
        <div className="max-w-4xl mt-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            An open layer for coordination between intelligent machines&nbsp;
            <br className="hidden sm:block" />
            and the people around them.
            </h1>
          <p className="text-lg md:text-xl text-text dark:text-text-dark mb-10">
            Lattice is a decentralized protocol for assigning tasks, sharing data,
            and resolving interactions between autonomous agents and humans —
            in the real world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#readme" className="btn" onClick={(e) => { e.preventDefault(); document.getElementById('readme')?.scrollIntoView({ behavior: 'smooth' }); }}>Read the Story</a>
            <a href="/how-it-works" className="btn">See How it Works</a>
            <a href="/contact" className="btn">Partner with Us</a>
          </div>
        </div>
      </section>
    );
  }
  