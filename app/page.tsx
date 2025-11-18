import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import PortofolioSection from "@/components/Portofolio";
import ServiceSection from "@/components/Service";
import TestimonialSection from "@/components/Testimonial";
import WhySection from "@/components/Why";
import Image from "next/image";

export default function Pages() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>
      <Header />
      <HeroSection />
      <ServiceSection />
      <WhySection />
      <PortofolioSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
      <a
        href="https://wa.me/6282332732484?text=Halo%20Codverse%2C%20saya%20ingin%20menghubungi%20Anda%20untuk%20diskusi%20lebih%20lanjut."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="button for whatsapp"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-linear-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 hover:scale-110 transition-transform"
      >
        <Image
          width={35}
          height={35}
          src="/assert/whatsapp.svg"
          alt="whatsapp"
          className="w-8 h-8 text-white"
        />
      </a>
    </div>
  );
}
