import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML / CSS", level: 95 },
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "React.js / Next.js", level: 92 },
  { name: "Python", level: 88 },
  { name: "Django", level: 90 },
  { name: "Django REST Framework", level: 87 },
  { name: "Celery (Background Tasks)", level: 85 },
  { name: "Redis", level: 83 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Git / Docker", level: 85 },
  { name: "Kubernetes / AWS", level: 80 },
  { name: "CI/CD / DevOps", level: 82 },
  { name: "Linux", level: 75 },
];

export default function Skills() {
  useEffect(() => {
    const skillBars = document.querySelectorAll(".skill-fill");

    // Ensure bars are visible initially (width may be 0, but container is visible)
    skillBars.forEach((bar) => {
      const container = bar.parentElement;
      if (container) {
        gsap.set(container, { opacity: 1 });
      }
    });

    // Animate skill bars on scroll
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      if (width) {
        gsap.fromTo(
          bar,
          { width: 0 },
          {
            width,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: { trigger: bar, start: "top 90%" },
          }
        );
      }
    });
  }, []);

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
        Technical Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                data-width={`${skill.level}%`}
                style={{ width: 0 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
