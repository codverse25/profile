"use client";
import { useState } from "react";
import { Loader, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactSection() {
  type FormData = {
    name: string;
    email: string;
    message: string;
  };
  type SubmitStatus = {
    type: "success" | "error";
    message: string;
  } | null;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message: "Semua field harus diisi.",
      });
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Format email tidak valid.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Pesan berhasil dikirim! Kami akan segera menghubungi Anda.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Gagal mengirim pesan. Silakan coba lagi.",
        });
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus({
        type: "error",
        message: "Terjadi kesalahan. Silakan coba lagi nanti.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-12 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent py-2">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-400">
              Siap membantu mewujudkan proyek digital Anda
            </p>
          </div>
          {/* karantika form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Nama Lengkap"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500"
              />
            </div>
            <div>
              <Textarea
                placeholder="Pesan Anda"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={10}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-linear-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white py-6 text-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader className="animate-spin" />
                  Mengirim...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send />
                  Kirim Pesan
                </span>
              )}
            </Button>
            {submitStatus?.type === "success" && (
              <p className="text-green-400 text-center">
                {submitStatus.message}
              </p>
            )}
            {submitStatus?.type === "error" && (
              <p className="text-red-400 text-center">{submitStatus.message}</p>
            )}
          </form>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-2" />
              <div className="text-sm text-gray-400">Email</div>
              <div className="font-semibold">info@codverse.site</div>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-2" />
              <div className="text-sm text-gray-400">Phone</div>
              <div className="font-semibold">+6282332732484</div>
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
