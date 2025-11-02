import { media } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 backdrop-blur-lg bg-slate-900/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Codverse
            </div>
            <p className="text-gray-400">
              Solusi digital terpadu untuk semua kebutuhan teknologi Anda.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              {media.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500 hover:border-purple-500 transition-all"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-5 h-5 bg-linear-to-r from-purple-400 to-cyan-400 rounded-full" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Codverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
