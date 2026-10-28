import { Layers, Zap, Monitor, Smartphone, Code2, Star, Sparkles } from "lucide-react";

const iconMap = {
  Layers: <Layers className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Monitor: <Monitor className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />,
};

export default function Services({ data }) {
  const { tag, heading, items } = data;

  // Split heading for color highlight: "DESIGN SERVICES" in white, "I AM PROVIDING" in blue
  const headingParts = heading.split(" I AM PROVIDING");

  return (
    <section id="services" className="bg-[#070C1E] py-24 overflow-hidden relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-700/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4 relative">
          {/* Star sparkle decoration — top right like reference image */}
          <div className="absolute -top-4 right-0 text-blue-400/60">
            <Sparkles className="w-8 h-8" />
          </div>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            {tag}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl leading-tight">
            <span className="text-white">{headingParts[0]}</span>
            {headingParts.length > 1 && (
              <span className="text-blue-400"> I AM PROVIDING</span>
            )}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((service, i) => (
            <div
              key={service.id}
              className="group relative bg-[#101935] border border-blue-900/30 rounded-2xl p-7 hover:border-blue-500/40 hover:bg-[#162244] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-900/30 cursor-default overflow-hidden"
            >
              {/* Hover glow accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-600/0 group-hover:bg-blue-600/8 rounded-bl-full transition-all duration-500 blur-2xl" />

              {/* Number watermark */}
              <span className="absolute top-5 right-6 text-5xl font-extrabold text-blue-900/25 group-hover:text-blue-800/35 transition-colors select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-600/25 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-5 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                {iconMap[service.icon]}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base mb-2.5 group-hover:text-blue-100 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
