import { portfolio } from "@/lib/data";
export default function PortofolioSection() {
  return (
    <section id="portfolio" className="relative z-10 py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
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
              className="glass-card rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 hover:scale-105 transition-all group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
