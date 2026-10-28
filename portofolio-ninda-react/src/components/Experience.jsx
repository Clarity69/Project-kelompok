import Icon from './Icon';
import SectionTitle from './SectionTitle';

export default function Experience({ experiences }) {
    return (
        <section id="pengalaman" className="bg-[var(--surface)] py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionTitle no="02" label="Usaha" title="Memimpin usaha sejak 2024.">
                    Selain kuliah, saya menjabat sebagai direktur di dua usaha di Bontang.
                </SectionTitle>

                <div className="space-y-8">
                    {experiences.map((exp, i) => {
                        const photo = exp.photos?.[0];
                        return (
                            <article
                                key={`${exp.place}-${i}`}
                                className={`reveal grid overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--bg)] ${photo ? 'lg:grid-cols-[1fr_1.2fr]' : ''}`}
                            >
                                {photo && (
                                    <div className="relative min-h-72 bg-[var(--accent-soft)]">
                                        <img src={photo} alt={`Kegiatan ${exp.place}`} className="absolute inset-0 size-full object-cover" />
                                    </div>
                                )}
                                <div className="flex flex-col justify-center p-8 sm:p-10">
                                    <div className="flex flex-wrap items-center gap-3 text-sm">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-3 py-1 font-semibold text-[var(--on-accent)]">
                                            <Icon name="briefcase" className="size-3.5" /> {exp.title}
                                        </span>
                                        <span className="text-[var(--muted)]">{exp.period}</span>
                                    </div>
                                    <h3 className="mt-5 font-display text-3xl font-semibold">{exp.place.replace(', Bontang', '')}</h3>
                                    <p className="mt-1 text-sm text-[var(--muted)]">
                                        <Icon name="pin" className="mr-1 inline size-3.5" />
                                        Bontang, Kalimantan Timur
                                    </p>
                                    <p className="mt-5 leading-relaxed text-[var(--muted)]">{exp.description}</p>
                                    {exp.highlights && (
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {exp.highlights.map((h) => (
                                                <span key={h} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold">
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
