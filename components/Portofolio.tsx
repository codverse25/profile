"use client";
import { portfolio } from "@/lib/data";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function PortofolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.fromTo(
        itemsRef.current,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative z-10 py-20 px-4"
    >
      <div className="container mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Portfolio Kami
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Beberapa project yang telah kami selesaikan dengan sukses
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="glass-card rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 hover:scale-105 transition-all group"
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-sm text-purple-400 font-semibold">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
