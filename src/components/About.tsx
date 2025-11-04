"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Calendar } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const stats = statsRef.current.filter(Boolean) as HTMLElement[];

    // Ensure visibility initially
    stats.forEach((stat) => {
      gsap.set(stat, { opacity: 1, y: 0 });
    });

    // Animate stats on scroll
    gsap.fromTo(
      stats,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "20+" },
    { label: "Team Members Led", value: "6" },
    { label: "Uptime Achieved", value: "99.9%" },
  ];

  return (
    <section ref={sectionRef} className="container mx-auto px-6 py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left: Bio */}
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            I'm a{" "}
            <span className="font-semibold text-foreground">
              results-driven Frontend & Full-Stack Developer
            </span>{" "}
            based in Lagos, Nigeria, with a passion for building scalable,
            user-centric applications.
          </p>
          <p>
            Starting my journey at <strong>Bincom Software Academy</strong>,
            I've grown into a <strong>Team Lead</strong> role, delivering
            production-grade solutions across education, real estate, and
            enterprise platforms.
          </p>
          <p>
            My expertise spans <strong>React.js, Next.js, TypeScript</strong>,
            and <strong>DevOps (Docker, Kubernetes, AWS, CI/CD)</strong>. I love
            clean code, performance optimization, and mentoring the next
            generation of developers.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="outline" size="sm" asChild>
              <a
                href="mailto:cornelius.ezeh@email.com"
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://linkedin.com/in/cornelius-ezeh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/cornelius-ezeh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm pt-6 border-t">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Available for hire</span>
            </div>
          </div>
        </div>

        {/* Right: Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              ref={(el) => {
                statsRef.current[index] = el;
              }}
              className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
