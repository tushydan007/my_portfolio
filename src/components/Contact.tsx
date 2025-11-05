"use client";

import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send, Loader2, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ──────────────────────────────────────────────────────────────
// 1. Form Schema
// ──────────────────────────────────────────────────────────────
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// ──────────────────────────────────────────────────────────────
// 2. Contact Component
// ──────────────────────────────────────────────────────────────
export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  // ── GSAP Scroll Animation ─────────────────────────────────
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const children = Array.from(
        sectionRef.current!.children
      ) as HTMLElement[];

      // Ensure visibility initially
      children.forEach((child) => {
        gsap.set(child, { opacity: 1, y: 0 });
      });

      // Animate on scroll
      gsap.fromTo(
        children,
        {
          y: 60,
          opacity: 0,
        },
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
    });
    return () => ctx.revert();
  }, []);

  // ── Initialize EmailJS ───────────────────────────────────
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  // ── EmailJS Submit Handler ────────────────────────────────
  const onSubmit = async (data: ContactFormValues) => {
    const toastId = toast.loading("Sending your message...");

    try {
      // Replace with your EmailJS credentials
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error(
          "EmailJS credentials missing. Please configure environment variables."
        );
      }

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: data.name,
          from_email: data.email,
          to_email: "cornzeh@gmail.com",
          message: data.message,
          reply_to: data.email,
        },
        publicKey
      );

      toast.success("Message sent successfully! I'll reply soon.", {
        id: toastId,
      });
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      toast.error(`Failed to send message: ${errorMessage}`, { id: toastId });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-6 py-24 bg-linear-to-br from-primary to-secondary text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-linear-to-r from-white to-white/80">
        Let's Build Something Amazing
      </h2>

      <div className="max-w-2xl mx-auto">
        <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <Input
                {...register("name")}
                placeholder="Your Name"
                className="bg-white/20 border-white/30 placeholder:text-white/70 text-white focus:ring-white focus:border-white"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-300">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <Input
                {...register("email")}
                type="email"
                placeholder="your@email.com"
                className="bg-white/20 border-white/30 placeholder:text-white/70 text-white focus:ring-white focus:border-white"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-300">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <Textarea
                {...register("message")}
                placeholder="Tell me about your project..."
                rows={5}
                className="bg-white/20 border-white/30 placeholder:text-white/70 text-white focus:ring-white focus:border-white resize-none"
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-300">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Card>

        {/* Direct Email */}
        <p className="mt-8 text-center text-sm text-white flex flex-col justify-center items-center">
          Or email me directly at:
          <a
            href="mailto:cornzeh@gmail.com"
            className="font-medium text-white flex items-center justify-center gap-1 my-2 text-xl"
          >
            <Mail className="w-5 h-5" />
            cornzeh@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
