"use client";
import { ArrowRight, CheckCircle, Users, Award, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AnimatedStats from "./animated/static";
export default function HeroSection() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate badge
      tl.from(badgeRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.6,
      })
        // Animate title
        .from(
          titleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        )
        // Animate subtitle
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          buttonRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assured",
      stat: "100%",
      description: "Jaminan kualitas terbaik",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Happy Clients",
      stat: "100+",
      description: "Klien puas dengan layanan kami",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Projects Completed",
      stat: "100+",
      description: "Proyek berhasil diselesaikan",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Delivery",
      stat: "24/7",
      description: "Support dan pengerjaan cepat",
    },
  ];
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      ref={heroRef}
      className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20 pt-24 md:pt-32"
    >
      <div className="container mx-auto text-center">
        <div className="glass-card p-12 md:p-16 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl max-w-4xl mx-auto">
          <div
            ref={badgeRef}
            className="inline-block mb-6 px-6 py-2 rounded-full bg-lenier-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30"
          >
            <span className="text-sm font-semibold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Solutions Provider
            </span>
          </div>
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
          >
            Transform Your Digital Vision Into Reality
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Codverse menyediakan solusi digital terpadu untuk tugas akademik,
            development, desain, dan teknologi yang Anda butuhkan.
          </p>
          <div
            ref={buttonRef}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-linear-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-6 text-lg shadow-lg shadow-purple-500/50 group"
              onClick={() => scrollToSection("services")}
            >
              Lihat Layanan{" "}
              <ArrowRight className="size-6 group-hover:translate-x-1 transition transform duration-150" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass hover:glass-strong transition-all duration-300 text-base px-8 py-6 border-2"
              onClick={() => scrollToSection("contact")}
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
        <AnimatedStats features={features} />
      </div>
    </section>
  );
}
