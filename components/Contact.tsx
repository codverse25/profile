import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-12 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-400">
              Siap membantu mewujudkan proyek digital Anda
            </p>
          </div>
          {/* karantika form */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-2" />
              <div className="text-sm text-gray-400">Email</div>
              <div className="font-semibold">info@codverse.site</div>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-2" />
              <div className="text-sm text-gray-400">Phone</div>
              <div className="font-semibold">+000</div>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-2" />
              <div className="text-sm text-gray-400">Location</div>
              <div className="font-semibold">Madura, Indonesia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
