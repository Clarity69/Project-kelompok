import SectionTitle from './SectionTitle';

export default function Skills({ skills }) {
    return (
        <section id="keahlian" className="bg-[var(--surface)] py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionTitle no="04" label="Keahlian" title="Teknologi yang saya gunakan." />

                <div className="grid gap-6 md:grid-cols-3">
                    {skills.map((group, i) => (
                        <div key={group.category} className="reveal rounded-[1.5rem] border border-[var(--border)] bg-[var(--bg)] p-7">
                            <div className="flex items-baseline justify-between">
                                <h3 className="font-display text-2xl font-semibold">{group.category}</h3>
                                <span className="font-display text-[var(--muted)] italic">0{i + 1}</span>
                            </div>
                            <ul className="mt-6 flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <li key={skill.name} className="rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold">
                                        {skill.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
