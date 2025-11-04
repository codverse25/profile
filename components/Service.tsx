import {
  GraduationCap,
  Code,
  Smartphone,
  PenTool,
  Lightbulb,
  ChartNoAxesCombined,
} from "lucide-react";
export default function ServiceSection() {
  const services = [
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Jasa Tugas",
      description:
        "Bantuan profesional untuk tugas akademik, skripsi, dan penelitian dengan kualitas terjamin.",
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Website Development",
      description:
        "Pembuatan website modern, responsif, dan SEO-friendly dengan teknologi terkini.",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile App Development",
      description:
        "Aplikasi mobile iOS & Android yang user-friendly dengan performa optimal.",
    },
    {
      icon: <ChartNoAxesCombined className="w-10 h-10" />,
      title: "Data Analytics",
      description:
        "Analisis data mendalam untuk pengambilan keputusan bisnis yang lebih baik.",
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "Graphic Design",
      description:
        "Desain grafis profesional untuk branding, marketing, dan media sosial.",
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Consulting & Tech Solutions",
      description:
        "Konsultasi teknologi dan solusi digital untuk mengembangkan bisnis Anda.",
    },
  ];
  return (
    <section id="services" className="relative z-10 py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Solusi digital lengkap untuk semua kebutuhan Anda
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 group"
            >
              <div className="text-purple-400 mb-4 group-hover:text-cyan-400 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
