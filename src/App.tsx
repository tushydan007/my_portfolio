import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Navbar scroll effect
    if (navRef.current) {
      const navLogo = navRef.current.querySelector(".nav-logo");
      const mobileMenuBtn = navRef.current.querySelector(".mobile-menu-btn");

      // Set initial navbar background to white/transparent
      gsap.set(navRef.current, {
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      });

      // Animate navbar background from white to black when scrolling
      gsap.to(navRef.current, {
        backgroundColor: "rgba(0,0,0,0.95)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Set initial colors to black/dark gray (visible on white background)
      const navLinks = navRef.current.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        if (link instanceof HTMLElement) {
          gsap.set(link, { color: "#374151" }); // gray-700
        }
      });

      if (navLogo) {
        gsap.set(navLogo, { color: "" }); // Keep primary color initially
      }

      if (mobileMenuBtn) {
        const menuIcon = mobileMenuBtn.querySelector(".mobile-menu-icon");
        if (menuIcon) {
          gsap.set(menuIcon, { color: "#374151" }); // gray-700
        }
      }

      // Animate text colors from black to white when scrolling
      if (navLinks.length > 0) {
        gsap.to(navLinks, {
          color: "#ffffff",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (navLogo) {
        gsap.to(navLogo, {
          color: "#ffffff",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Change hamburger button icon color when scrolled
      if (mobileMenuBtn) {
        const menuIcon = mobileMenuBtn.querySelector(".mobile-menu-icon");
        if (menuIcon) {
          gsap.to(menuIcon, {
            color: "#ffffff",
            scrollTrigger: {
              trigger: "#hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }
    }

    // Section fade-ins with proper initial visibility
    document.querySelectorAll(".section").forEach((section) => {
      const children = Array.from(section.children) as HTMLElement[];

      // Set initial styles to ensure visibility (fallback if ScrollTrigger doesn't fire)
      children.forEach((child) => {
        gsap.set(child, { opacity: 1, y: 0 });
      });

      // Animate on scroll - use immediate play to prevent flash
      gsap.fromTo(
        children,
        {
          y: 60,
          opacity: 0,
          immediateRender: false, // Don't apply from state immediately
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              // Ensure content is visible when entering viewport
              children.forEach((child) => {
                gsap.set(child, { opacity: 1 });
              });
            },
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#1f2937",
            color: "#fff",
            borderRadius: "12px",
            padding: "16px",
            fontSize: "14px",
          },
          success: { style: { background: "#10b981" } },
          error: { style: { background: "#ef4444" } },
          loading: { style: { background: "#6366f1" } },
        }}
      />
      <div
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md transition-all"
      >
        <Navbar />
      </div>
      <main>
        <section
          id="hero"
          className="section min-h-screen flex items-center bg-linear-to-br from-indigo-50 to-pink-50"
        >
          <Hero />
        </section>
        <section id="about" className="section bg-white">
          <About />
        </section>
        <section id="skills" className="section bg-gray-50">
          <Skills />
        </section>
        <section id="experience" className="section bg-white">
          <Experience />
        </section>
        <section id="projects" className="section bg-gray-50">
          <Projects />
        </section>
        <section id="certifications" className="section bg-white">
          <Certifications />
        </section>
        <section id="contact" className="section bg-primary text-white">
          <Contact />
        </section>
      </main>
    </>
  );
}
