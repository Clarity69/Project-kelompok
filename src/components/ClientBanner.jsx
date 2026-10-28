export default function ClientBanner({ clients }) {
  // Duplicate for seamless loop
  const logos = [...clients, ...clients, ...clients];

  return (
    <section className="bg-[#101935] border-y border-blue-900/30 py-8 overflow-hidden relative">
      {/* Edge fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#101935] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#101935] to-transparent z-10 pointer-events-none" />

      <div className="relative flex">
        <div className="flex gap-20 items-center animate-marquee whitespace-nowrap">
          {logos.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 flex items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300 group cursor-default"
            >
              {/* Logo image with fallback text */}
              <div className="flex items-center justify-center h-8">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-7 w-auto object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              {/* Fallback text logo */}
              <span className="text-[#94A3B8] font-extrabold text-sm tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                {client.name.replace(/\s+\d+$/, "")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
