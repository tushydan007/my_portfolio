const experiences = [
  {
    title: "Team Lead & Full-Stack Developer",
    company: "Proforce Galaxies Limited",
    location: "Lagos, Nigeria",
    period: "August 2025 – Present",
    bullets: [
      "Led 6-member team in full-stack development with React.js, Next.js, TypeScript",
      "Maintained CI/CD with Docker, Kubernetes, AWS (99.9% uptime)",
      "Reduced incident response by 60% with Linux monitoring",
    ],
  },
  // Add others...
];

export default function Experience() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-4 before:h-4 before:bg-primary before:rounded-full before:border-4 before:border-white"
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
              <p className="text-gray-600">
                {exp.company}, {exp.location}
              </p>
              <p className="text-sm text-gray-500">{exp.period}</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {exp.bullets.map((b, j) => (
                  <li key={j}>• {b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
