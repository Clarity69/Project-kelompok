import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact({ data }) {
  const { tag, heading, description, email, phone } = data;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#0A1128] py-24 relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            {tag}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
          <p className="text-[#94A3B8] max-w-xl text-base leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-4 bg-[#101935] border border-blue-900/30 rounded-xl p-5 hover:border-blue-500/50 hover:bg-[#162244] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-600/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#94A3B8] text-xs font-semibold tracking-widest mb-0.5">
                    EMAIL
                  </p>
                  <p className="text-white font-semibold">{email}</p>
                </div>
              </a>

              <div className="group flex items-center gap-4 bg-[#101935] border border-blue-900/30 rounded-xl p-5 hover:border-blue-500/50 hover:bg-[#162244] transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-600/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#94A3B8] text-xs font-semibold tracking-widest mb-0.5">
                    PHONE
                  </p>
                  <p className="text-white font-semibold">{phone}</p>
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 px-5 py-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/40" />
              <span className="text-green-400 text-sm font-semibold">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-[#101935] border border-blue-900/30 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[#94A3B8] text-xs font-semibold tracking-widest">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="bg-[#0A1128] border border-blue-900/40 text-white placeholder-[#475569] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#94A3B8] text-xs font-semibold tracking-widest">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="bg-[#0A1128] border border-blue-900/40 text-white placeholder-[#475569] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#94A3B8] text-xs font-semibold tracking-widest">
                MESSAGE
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="bg-[#0A1128] border border-blue-900/40 text-white placeholder-[#475569] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-widest text-sm px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 mt-2"
            >
              {sent ? (
                "MESSAGE SENT! ✓"
              ) : (
                <>
                  SEND MESSAGE
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
