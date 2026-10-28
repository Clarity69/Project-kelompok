import { ArrowRight } from "lucide-react";

// Concentric circles motif (same visual as Hero)
const ConcentricCircles = ({ className = "" }) => (
  <svg
    viewBox="0 0 500 500"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440].map((r, i) => (
      <circle
        key={r}
        cx="250"
        cy="250"
        r={r}
        stroke={`rgba(59,130,246,${0.12 - i * 0.009})`}
        strokeWidth={i % 3 === 0 ? "1.5" : "0.7"}
      />
    ))}
    {[60, 100, 140, 180, 220, 260, 300, 340, 380].map((r) => (
      <circle
        key={`dash-${r}`}
        cx="250"
        cy="250"
        r={r}
        stroke="rgba(37,99,235,0.06)"
        strokeWidth="0.5"
        strokeDasharray="4 10"
      />
    ))}
  </svg>
);

export default function About({ data }) {
  const { tag, heading, description, aboutImage, stats } = data;

  return (
    <section id="about" className="bg-[#070C1E] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Photo ── */}
          <div className="relative flex items-center justify-center order-2 lg:order-1 h-[460px]">
            {/* Concentric circles background */}
            <ConcentricCircles className="absolute inset-0 w-full h-full opacity-90" />

            {/* Floating sphere accents */}
            <div className="absolute top-8 left-6 w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 opacity-60 blur-sm animate-float-slow shadow-lg shadow-blue-500/40" />
            <div className="absolute bottom-12 right-6 w-7 h-7 rounded-full bg-gradient-to-br from-blue-300 to-blue-600 opacity-50 animate-float shadow-md shadow-blue-400/30" />
            <div className="absolute top-1/2 right-12 w-4 h-4 rounded-full bg-blue-500/60 animate-float-medium" />

            {/* Photo frame */}
            <div className="relative w-72 h-80 md:w-80 md:h-[22rem] z-10">
              {/* Glow */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-900/10 blur-2xl" />
              {/* Corner accent lines */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-blue-500/70 rounded-tl-xl" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-blue-500/70 rounded-br-xl" />
              {/* Image */}
              <img
                src={aboutImage}
                alt="About Yovitha"
                className="w-full h-full object-cover rounded-2xl border border-blue-700/30 shadow-2xl shadow-blue-900/60"
              />
              {/* Experience Badge overlay */}
              <div className="absolute -bottom-5 -right-5 bg-blue-600 text-white rounded-xl px-4 py-3 shadow-xl shadow-blue-700/40 z-20">
                <span className="text-2xl font-extrabold block leading-none">15+</span>
                <p className="text-[10px] font-bold tracking-[0.15em] opacity-90 mt-0.5">
                  YEARS EXP.
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            {/* Tag badge */}
            <span className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              {tag}
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              I AM AVAILABLE FOR{" "}
              <span className="text-blue-400">UI<br />UX DESIGN</span> PROJECT
            </h2>

            {/* Description */}
            <p className="text-[#94A3B8] text-sm leading-relaxed">{description}</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#101935] border border-blue-900/40 rounded-xl p-4 text-center hover:border-blue-500/50 hover:bg-[#162244] transition-all duration-300 group"
                >
                  <div className="text-2xl font-extrabold text-blue-400 group-hover:text-blue-300 transition-colors leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[#94A3B8] text-xs font-semibold tracking-wide mt-1.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 self-start bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-widest text-xs px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 mt-2"
            >
              GET IN TOUCH
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-all">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
