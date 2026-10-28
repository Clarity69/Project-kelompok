import Icon from './Icon';
import SectionTitle from './SectionTitle';

export default function About({ profile }) {
    const info = [
        { icon: 'cap', label: 'Kampus', value: 'STITEK Bontang' },
        { icon: 'code', label: 'NIM', value: profile.nim },
        { icon: 'calendar', label: 'Tanggal Lahir', value: profile.birth },
        { icon: 'pin', label: 'Lokasi', value: profile.location },
    ];
    const [lead, ...others] = profile.about;

    return (
        <section id="tentang" className="py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionTitle no="01" label="Tentang" title="Mahasiswa, developer, dan pemimpin usaha." />

                <div className="grid gap-10 md:grid-cols-[200px_1fr]">
                    <div className="hidden md:block" />
                    <div className="reveal">
                        <p className="font-display text-2xl leading-snug sm:text-3xl">{lead}</p>
                        <div className="mt-8 grid gap-6 text-lg leading-relaxed text-[var(--muted)] lg:grid-cols-2">
                            {others.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>

                        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
                            {info.map((item) => (
                                <li key={item.label} className="card flex items-center gap-4 p-5">
                                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                                        <Icon name={item.icon} />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-xs tracking-wide text-[var(--muted)] uppercase">{item.label}</p>
                                        <p className="truncate font-semibold">{item.value}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
