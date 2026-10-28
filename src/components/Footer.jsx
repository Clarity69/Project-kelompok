export default function Footer({ logo }) {
  return (
    <footer className="bg-[#070C1E] border-t border-blue-900/30 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-white font-extrabold text-lg tracking-widest">
          {logo}
        </span>
        <p className="text-[#94A3B8] text-sm">
          © {new Date().getFullYear()} {logo || "Yovitha"}. Crafted with passion.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#94A3B8] text-sm hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
