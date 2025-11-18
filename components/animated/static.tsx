"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  icon: React.ReactNode;
  stat: string;
  description: string;
}

interface AnimatedStatsProps {
  features: Feature[];
}

export default function AnimatedStats({ features }: AnimatedStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each card with stagger
      gsap.fromTo(
        cardsRef.current,
        {
          scale: 0.8,
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.4)",
        }
      );

      // Animate numbers if they exist
      cardsRef.current.forEach((card) => {
        if (!card) return;

        const numberElement = card.querySelector(".stat-number");
        if (!numberElement) return;

        const textContent = numberElement.textContent;
        if (!textContent) return;

        // Extract number and suffix properly
        const matches = textContent.match(/^(\d+)(.*)$/);
        if (!matches) return;

        const targetNumber = parseInt(matches[1]);
        const suffix = matches[2]; // This will be "+", "%", "/7", etc.

        if (isNaN(targetNumber)) return;

        gsap.fromTo(
          numberElement,
          {
            textContent: 0,
          },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
            textContent: targetNumber,
            duration: 2,
            ease: "power1.inOut",
            snap: { textContent: 1 },
            onUpdate: function () {
              const current = Math.ceil(this.targets()[0].textContent);
              numberElement.textContent = current + suffix;
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [features]);

  return (
    <div
      ref={containerRef}
      className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
    >
      {features.map((feature, index) => (
        <div
          key={index}
          ref={(el) => {
            cardsRef.current[index] = el;
          }}
          className="glass-card p-4 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
        >
          <div className="text-purple-400 mb-2 flex justify-center icon-wrapper">
            {feature.icon}
          </div>
          <div className="text-3xl font-bold text-white mb-1 stat-number">
            {feature.stat}
          </div>
          <div className="text-sm text-gray-400">{feature.description}</div>
        </div>
      ))}
    </div>
  );
}
