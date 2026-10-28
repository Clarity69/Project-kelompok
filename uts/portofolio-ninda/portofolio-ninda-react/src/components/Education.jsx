import Icon from './Icon';
import SectionTitle from './SectionTitle';

export default function Education({ education, certificates }) {
    return (
        <section id="pendidikan" className="py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionTitle no="05" label="Pendidikan" title="Riwayat pendidikan & sertifikasi." />

                <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
                    <ol className="border-t border-[var(--border)]">
                        {education.map((edu) => (
                            <li key={edu.school} className="reveal grid gap-2 border-b border-[var(--border)] py-7 sm:grid-cols-[150px_1fr]">
                                <p className="text-sm font-semibold text-[var(--accent)]">{edu.period}</p>
                                <div>
                                    <h3 className="font-display text-2xl font-semibold">{edu.school}</h3>
                                    <p className="mt-1 font-medium">{edu.major}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{edu.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <div className="reveal space-y-4">
                        {certificates.map((c) => (
                            <div key={c.title} className="relative overflow-hidden rounded-[1.75rem] bg-[var(--accent)] p-8 text-[var(--on-accent)]">
                                <Icon name="award" className="absolute -right-6 -bottom-6 size-40 opacity-15" />
                                <p className="text-xs font-bold tracking-[.18em] uppercase opacity-80">Sertifikasi</p>
                                <h3 className="mt-4 font-display text-4xl font-semibold">{c.title}</h3>
                                <p className="mt-2 opacity-85">
                                    {c.issuer === 'BNSP' ? 'Badan Nasional Sertifikasi Profesi (BNSP)' : c.issuer}
                                    {c.year ? ` · ${c.year}` : ''}
                                </p>
                                {c.url && (
                                    <a href={c.url} target="_blank" rel="noreferrer" className="btn btn-light mt-6">
                                        Lihat Sertifikat <Icon name="external" className="size-4" />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
