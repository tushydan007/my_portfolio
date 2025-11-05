"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  github: string;
  live: string;
  img: string;
}

const projects: Project[] = [
  {
    title: "Geospatial and Satellite Imagery Services",
    desc: "React.js with TypeScript, Leaflet Map.",
    github: "https://github.com/tushydan007/proforce_galaxies_show_website",
    live: "https://proforcegalaxies.vercel.app",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&auto=format&q=80",
  },
  {
    title: "Asset monitoring from space using Geospatial Technology",
    desc: "React.js, Tailwind CSS, Leaflet, React Leaflet.",
    github: "https://github.com/tushydan007/real_estate_proforce_demo",
    live: "https://pfg-asset-watch.vercel.app",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80",
  },
  {
    title: "Learning Management System",
    desc: "Next.js, Tailwind css, AWS S3 + Docker.",
    github: "https://github.com/tushydan007/",
    live: "https://ingryd-academy.vercel.app/",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format&q=80",
  },
];

export default function Projects() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    gsap.to(cardRefs.current[index], {
      y: -12,
      scale: 1.02,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(cardRefs.current[index], {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section className="container mx-auto px-6 py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
        Portfolio Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="group cursor-pointer"
          >
            <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={`${project.title} preview`}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {project.desc}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      <Github className="w-4 h-4" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
