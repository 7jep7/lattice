import { homepageSections } from "./homepage-sections";
import { useInView } from "react-intersection-observer";

export default function FadingSections() {
  return (
    <div className="flex flex-col gap-48 py-40">
      {homepageSections.map((section, index) => (
        <FadeInSection key={section.id} index={index} {...section} />
      ))}
    </div>
  );
}

function FadeInSection({
  title,
  content,
  index,
}: {
  title: string;
  content: string;
  index: number;
}) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const alignLeft = index % 2 === 0;

  return (
    <section
      ref={ref}
      className={`px-6 md:px-20 transition-opacity duration-1000 ease-in-out ${
        inView ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        willChange: "opacity",
        transitionProperty: "opacity",
        minHeight: "50vh",        // 💡 ensures each section takes roughly half a screen
        maxHeight: "60vh",        // 💡 prevent overflow
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className={`mx-auto flex w-full max-w-screen-xl ${
          alignLeft ? "justify-start" : "justify-end"
        }`}
      >
        <div
          className={`w-full md:w-[40%] ${
            alignLeft ? "text-left" : "text-right"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg whitespace-pre-line">{content}</p>
        </div>
      </div>
    </section>
  );
}
