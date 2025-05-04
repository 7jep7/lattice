// app/components/HeroSection.tsx
export default function HeroSection() {
    return (
      <section className="min-h-screen bg-background text-text dark:bg-background-dark dark:text-text-dark flex flex-col justify-center items-center px-6 text-center">
        <nav className="absolute top-6 left-0 right-0 flex justify-center gap-8 text-sm font-medium text-accent dark:text-accent-dark">
          <a href="#readme" className="hover:text-primary">README</a>
          <a href="#vision" className="hover:text-primary">Vision</a>
          <a href="#how-it-works" className="hover:text-primary">How It Works</a>
          <a href="#for-builders" className="hover:text-primary">For Builders</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
  
        <div className="max-w-4xl mt-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            An open layer for coordination between intelligent machines
            <br className="hidden sm:block" />
            and the people around them.
          </h1>
          <p className="text-lg md:text-xl text-accent dark:text-accent-dark mb-10">
            Lattice is a decentralized protocol for assigning tasks, sharing data,
            and resolving interactions between autonomous agents and humans —
            in the real world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#readme" className="btn">Read the Story</a>
            <a href="#how-it-works" className="btn">See How it Works</a>
            <a href="#contact" className="btn">Partner with Us</a>
          </div>
        </div>
      </section>
    );
  }
  