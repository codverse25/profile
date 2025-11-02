import { CheckCircle } from "lucide-react";

export default function WhySection() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto">
        <div className="glass-card p-12 rounded-3xl backdrop-blur-lg bg-linear-to-br from-purple-500/10 to-cyan-500/10 border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 p-2 text-center bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Mengapa Memilih Codverse?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Tim Profesional",
                desc: "Developer dan designer berpengalaman",
              },
              {
                title: "Kualitas Terjamin",
                desc: "Hasil kerja berkualitas tinggi",
              },
              {
                title: "Harga Kompetitif",
                desc: "Harga terbaik untuk solusi premium",
              },
              { title: "Support 24/7", desc: "Siap membantu kapan saja" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-r from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/50">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
