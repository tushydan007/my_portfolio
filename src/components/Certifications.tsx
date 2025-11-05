import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "Complete Linux training course to get your dream IT Job 2025",
    provider: "Udemy",
    year: "2025",
  },
  {
    title: "DevOps beginners to Advance with projects",
    provider: "Udemy",
    year: "2024",
  },
  {
    title: "Docker and Kubernetes: The practical Guide 2025 Edition",
    provider: "Udemy",
    year: "2023",
  },
  {
    title: "Ultimate AWS Certified Developer Associate 2025 DVA-CO2",
    provider: "Udemy",
    year: "2024",
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];

    // Ensure visibility initially
    cards.forEach((card) => {
      gsap.set(card, { opacity: 1, y: 0 });
    });

    // Animate cards on scroll
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-4 sm:px-6 py-16 sm:py-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="p-6 sm:p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">
                  {cert.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base text-gray-600">
                  <span className="font-semibold text-primary">
                    {cert.provider}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span>{cert.year}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
