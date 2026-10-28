import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 3;

export default function Projects({ data = {} }) {
  const tag = data?.tag || "MY WORK";
  const heading = data?.heading || "RECENT PROJECT";
  const items = Array.isArray(data?.items)
    ? data.items
    : Array.isArray(data?.projects)
    ? data.projects
    : Array.isArray(data)
    ? data
    : [];

  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE));
  const visibleItems = items.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section id="projects" className="bg-[#0A1128] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header — Left aligned like reference */}
        <div className="flex flex-col items-start mb-12 gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            {tag}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((project, i) => (
            <div
              key={project.id}
              className="group relative bg-[#101935] border border-blue-900/30 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/40"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101935] via-[#101935]/30 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-5 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-bold text-base leading-tight mb-0.5">
                    {project.title}
                  </h3>
                  <p className="text-[#94A3B8] text-xs font-medium">
                    {project.category}
                  </p>
                </div>

                {/* Circular Arrow CTA */}
                <a
                  href={project.link || "#"}
                  aria-label={`View ${project.title}`}
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-110 border border-blue-500/30"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-blue-700/40 text-[#94A3B8] hover:bg-blue-600 hover:border-blue-600 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2 items-center">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`transition-all duration-200 rounded-full ${
                  i === page
                    ? "w-7 h-2.5 bg-blue-500"
                    : "w-2.5 h-2.5 bg-blue-900/60 hover:bg-blue-700"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-blue-700/40 text-[#94A3B8] hover:bg-blue-600 hover:border-blue-600 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
