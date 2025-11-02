"use client";
import { ArrowRight, CheckCircle, Users, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function HeroSection() {
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
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20 pt-24 md:pt-32">
      <div className="container mx-auto text-center">
        <div className="glass-card p-12 md:p-16 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-lenier-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30">
            <span className="text-sm font-semibold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Solutions Provider
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Transform Your Digital Vision Into Reality
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Codverse menyediakan solusi digital terpadu untuk tugas akademik,
            development, desain, dan teknologi yang Anda butuhkan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-linear-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-6 text-lg shadow-lg shadow-purple-500/50 group"
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
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-4 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
            >
              <div className="text-purple-400 mb-2 flex justify-center">
                {feature.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {feature.stat}
              </div>
              <div className="text-sm text-gray-400">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
