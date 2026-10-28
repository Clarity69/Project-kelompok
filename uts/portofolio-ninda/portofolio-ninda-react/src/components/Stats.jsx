// Baris angka ringkas di bawah hero
export default function Stats({ stats }) {
    return (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="reveal grid grid-cols-2 gap-y-8 md:grid-cols-4">
                {stats.map((s, i) => (
                    <div key={s.label} className={`px-4 text-center ${i > 0 ? 'md:border-l md:border-[var(--border)]' : ''}`}>
                        <p className="font-display text-5xl font-semibold text-[var(--accent)]">{s.value}</p>
                        <p className="mt-2 text-sm font-medium tracking-wide text-[var(--muted)] uppercase">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
