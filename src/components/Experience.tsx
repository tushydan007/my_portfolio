const experiences = [
  {
    title: "Full-Stack Developer & Team Lead",
    company: "Proforce Galaxies Limited",
    location: "Lagos, Nigeria",
    period: "August 2025 – Present",
    bullets: [
      "Lead a 6-member software development team in full-stack development using React.js, Next.js, and TypeScript",
      "Architected and maintained CI/CD pipelines with Docker, Kubernetes, and AWS infrastructure achieving 99.9% uptime",
      "Implemented Linux monitoring solutions reducing incident response time by 60%",
      "Mentored junior developers and established coding standards and best practices",
      "Collaborated with cross-functional teams to deliver scalable web applications",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "PWAN Homes Limited",
    location: "Nigeria",
    period: "April 2025 – July 2025",
    bullets: [
      "Developed full-stack web applications using React.js, Next.js, and TypeScript",
      "Implemented responsive user interfaces with Tailwind CSS and modern CSS frameworks",
      "Integrated third-party APIs and services for enhanced functionality",
      "Optimized application performance and ensured cross-browser compatibility",
      "Participated in code reviews and agile development processes",
    ],
  },
  {
    title: "Frontend Developer",
    company: "DLHO Solutions",
    location: "Guzape, FCT, Abuja, Nigeria",
    period: "May 2024 – March 2025",
    bullets: [
      "Built and maintained enterprise-level frontend applications using React.js and Next.js",
      "Developed responsive web interfaces with TypeScript and Tailwind CSS",
      "Implemented CI/CD pipelines using Docker and Kubernetes for automated deployments",
      "Collaborated with backend developers to integrate RESTful APIs",
      "Enhanced application performance through code optimization and best practices",
      "Gained advanced knowledge in DevOps practices and cloud infrastructure (AWS)",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Ingryd Academy",
    location: "Oniru, Lekki, Lagos, Nigeria",
    period: "March 2023 – April 2024",
    bullets: [
      "Developed and maintained frontend applications using React.js and Next.js",
      "Created responsive user interfaces with HTML, CSS, JavaScript, and Tailwind CSS",
      "Implemented server-side rendering (SSR) for improved performance and SEO",
      "Integrated video streaming functionality using AWS S3 and CloudFront",
      "Worked with RESTful APIs and modern frontend development practices",
      "Collaborated with team members in an agile development environment",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Lincoln University College",
    location: "Nyanya, Abuja, Nigeria",
    period: "October 2020 – December 2022",
    bullets: [
      "Developed and maintained frontend applications using React.js and modern JavaScript frameworks",
      "Created responsive web interfaces using HTML, CSS, JavaScript, and Tailwind CSS",
      "Implemented user-friendly interfaces following UI/UX best practices",
      "Collaborated with backend developers to integrate APIs and data services",
      "Ensured cross-browser compatibility and responsive design across devices",
      "Participated in code reviews and maintained code quality standards",
    ],
  },
  {
    title: "Trainee",
    company: "Bincom Software Academy",
    location: "Yaba, Lagos, Nigeria",
    period: "February 2019 – August 2019",
    bullets: [
      "Completed comprehensive training program in frontend web development",
      "Learned HTML, CSS, JavaScript, and modern frontend frameworks",
      "Built portfolio projects demonstrating proficiency in web development",
      "Participated in team projects and collaborative coding exercises",
      "Gained foundational knowledge in software development best practices",
    ],
  },
];

export default function Experience() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {experiences.map((exp, i) => (
          <div key={i} className="h-full">
            <div className="card h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                {exp.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-1">
                {exp.company}, {exp.location}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mb-4">
                {exp.period}
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
