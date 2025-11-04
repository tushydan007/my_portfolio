import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is fully rendered
    requestAnimationFrame(() => {
      // Set initial states for animation
      const chars = charsRef.current.filter(Boolean) as HTMLElement[];

      if (chars.length > 0) {
        gsap.set(chars, { y: 100, opacity: 0, rotationX: -90 });

        // Animate characters in the title with staggered effect
        gsap.to(chars, {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "power4.out",
          delay: 0.2,
        });
      } else {
        // Fallback: if chars aren't ready, ensure title is visible
        if (titleRef.current) {
          gsap.set(titleRef.current, { opacity: 1 });
        }
      }

      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { y: 40, opacity: 0 });
        gsap.to(subtitleRef.current, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 1.2,
        });
      }

      if (buttonsRef.current && buttonsRef.current.children.length > 0) {
        gsap.set(buttonsRef.current.children, { y: 30, opacity: 0 });
        gsap.to(buttonsRef.current.children, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          delay: 1.8,
        });
      }

      if (imgRef.current) {
        gsap.set(imgRef.current, { scale: 0.8, opacity: 0, rotation: -10 });
        gsap.to(imgRef.current, {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.5,
          delay: 0.8,
          ease: "elastic.out(1, 0.5)",
        });
      }
    });
  }, []);

  // Split title text into characters for staggered animation
  const titleText = "Hi, I'm Cornelius Ezeh";
  const chars = titleText.split("");

  // Find the indices for name coloring
  const nameStartIndex = titleText.indexOf("Cornelius");
  const nameEndIndex = nameStartIndex + "Cornelius".length;
  const lastNameStartIndex = titleText.indexOf("Ezeh");
  const lastNameEndIndex = lastNameStartIndex + "Ezeh".length;

  return (
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
      <div className="space-y-8">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          {chars.map((char, index) => {
            // Determine if this character should be colored (Cornelius Ezeh)
            const isNameChar =
              (index >= nameStartIndex && index < nameEndIndex) ||
              (index >= lastNameStartIndex && index < lastNameEndIndex);

            return (
              <span
                key={index}
                ref={(el) => {
                  charsRef.current[index] = el;
                }}
                className={`inline-block ${char === " " ? "w-2" : ""} ${
                  isNameChar ? "text-primary" : "text-gray-800"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  display: "inline-block",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </h1>
        <p ref={subtitleRef} className="text-xl text-gray-600 max-w-lg">
          A passionate{" "}
          <strong className="text-primary">
            Frontend & Full-Stack Developer
          </strong>{" "}
          with 5+ years crafting pixel-perfect, performant web experiences using
          React.js, Next.js, and modern DevOps tools.
        </p>
        <div ref={buttonsRef} className="flex space-x-4">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </div>
      </div>
      <div
        ref={imgRef}
        className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]"
      >
        <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-full w-80 h-80 md:w-96 md:h-96 mx-auto shadow-2xl opacity-80"></div>
        <img
          src="/Cornelius.jpg"
          alt="Cornelius Ezeh"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-72 h-72 md:w-80 md:h-80 object-cover border-8 border-white shadow-xl z-10"
          loading="eager"
        />
      </div>
    </div>
  );
}
