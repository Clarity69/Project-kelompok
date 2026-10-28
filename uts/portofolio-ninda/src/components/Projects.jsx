import { useEffect, useState } from 'react';
import Icon from './Icon';
import SectionTitle from './SectionTitle';

function ProjectModal({ project, onClose }) {
    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4 backdrop-blur-sm" onClick={onClose}>
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="card max-h-[90vh] w-full max-w-2xl overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`relative h-36 rounded-t-[1.5rem] bg-gradient-to-br ${project.color}`}>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 grid size-9 place-items-center rounded-full bg-black/25 text-white"
                        aria-label="Tutup"
                    >
                        <Icon name="close" className="size-4" />
                    </button>
                    <span className="absolute bottom-3 left-7 font-display text-6xl text-white/80 italic">{project.title}</span>
                </div>
                <div className="p-7 sm:p-9">
                    <p className="section-label">{project.category} · {project.year}</p>
                    <h3 id="modal-title" className="mt-2 font-display text-3xl font-semibold">{project.title}</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">Peran: {project.role}</p>
                    <p className="mt-5 leading-relaxed text-[var(--muted)]">{project.description}</p>

                    <h4 className="mt-7 font-semibold">Fitur / Hasil</h4>
                    <ul className="mt-3 space-y-2">
                        {project.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm">
                                <Icon name="check" className="mt-0.5 size-4 shrink-0 text-[var(--accent)]" /> {f}
                            </li>
                        ))}
                    </ul>

                    <h4 className="mt-7 font-semibold">Teknologi</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span key={t} className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                                {t}
                            </span>
                        ))}
                    </div>

                    {(project.repo || project.demo) && (
                        <div className="mt-8 flex flex-wrap gap-3">
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                                    Lihat Demo <Icon name="external" className="size-4" />
                                </a>
                            )}
                            {project.repo && (
                                <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-ghost">
                                    <Icon name="github" className="size-4" /> Source Code
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Projects({ projects }) {
    const [selected, setSelected] = useState(null);

    return (
        <section id="proyek" className="py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionTitle no="03" label="Proyek" title="Karya pilihan.">
                    Klik salah satu proyek untuk melihat detailnya.
                </SectionTitle>

                <ol className="border-b border-[var(--border)]">
                    {projects.map((p, i) => (
                        <li key={p.slug} className="reveal border-t border-[var(--border)]">
                            <button
                                onClick={() => setSelected(p)}
                                className="group grid w-full gap-4 py-9 text-left transition md:grid-cols-[200px_1fr_auto] md:items-center"
                            >
                                <span className="font-display text-2xl text-[var(--muted)] italic">{String(i + 1).padStart(2, '0')}</span>
                                <div>
                                    <h3 className="font-display text-3xl font-semibold transition group-hover:text-[var(--accent)] sm:text-4xl">{p.title}</h3>
                                    <p className="mt-2 max-w-2xl text-[var(--muted)]">{p.summary}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {p.tech.slice(0, 4).map((t) => (
                                            <span key={t} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 md:flex-col md:items-end">
                                    <span className="text-sm text-[var(--muted)]">{p.category} · {p.year}</span>
                                    <span className="grid size-12 place-items-center rounded-full border border-[var(--border)] transition group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--on-accent)]">
                                        <Icon name="arrow" className="size-5 -rotate-45 transition group-hover:rotate-0" />
                                    </span>
                                </div>
                            </button>
                        </li>
                    ))}
                </ol>
            </div>

            {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </section>
    );
}
