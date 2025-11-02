export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  retrun(
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500"
        />
      </div>
      <div>
        <textarea
          placeholder="Pesan Anda"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          rows={5}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-linear-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white py-6 text-lg"
      >
        {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
      </Button>
      {submitStatus === "success" && (
        <p className="text-green-400 text-center">
          Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-400 text-center">
          Terjadi kesalahan. Silakan coba lagi.
        </p>
      )}
    </form>
  );
}
