// Judul tiap bagian, bernomor (01, 02, ...) ala majalah
export default function SectionTitle({ no, label, title, children }) {
    return (
        <div className="reveal mb-14 grid gap-4 md:grid-cols-[200px_1fr]">
            <p className="section-label pt-3">
                {no} — {label}
            </p>
            <div>
                <h2 className="font-display text-4xl leading-tight font-semibold sm:text-5xl">{title}</h2>
                {children && <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">{children}</p>}
            </div>
        </div>
    );
}
