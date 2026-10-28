import Icon from './Icon';

// Bagian kontak: tanpa form, langsung ke email / WhatsApp / sosial media
export default function Contact({ profile, socials }) {
    const wa = profile.phone.replace(/\D/g, '').replace(/^0/, '62');

    return (
        <section id="kontak" className="px-4 py-20 sm:px-6 sm:py-28">
            <div className="reveal mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[var(--deep)] px-6 py-16 text-[var(--on-deep)] sm:px-14 sm:py-20">
                <p className="text-xs font-bold tracking-[.18em] uppercase opacity-70">06 — Kontak</p>
                <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight font-semibold sm:text-6xl">
                    Mari terhubung & <span className="italic opacity-80">bekerja sama.</span>
                </h2>
                <a href={`mailto:${profile.email}`} className="mt-8 inline-block font-display text-2xl break-all underline decoration-1 underline-offset-8 opacity-90 hover:opacity-100 sm:text-3xl">
                    {profile.email}
                </a>

                <div className="mt-10 flex flex-wrap gap-3">
                    <a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" className="btn btn-light">
                        <Icon name="phone" className="size-4" /> WhatsApp
                    </a>
                    <a href={`mailto:${profile.email}`} className="btn btn-outline-light">
                        <Icon name="mail" className="size-4" /> Kirim Email
                    </a>
                </div>

                <div className="mt-14 grid gap-6 border-t border-white/15 pt-8 text-sm sm:grid-cols-3">
                    <div>
                        <p className="opacity-60">Telepon / WhatsApp</p>
                        <p className="mt-1 font-semibold">{profile.phone}</p>
                    </div>
                    <div>
                        <p className="opacity-60">Lokasi</p>
                        <p className="mt-1 font-semibold">{profile.location}</p>
                    </div>
                    <div>
                        <p className="opacity-60">Sosial Media</p>
                        <div className="mt-2 flex gap-3">
                            {socials.map((s) => (
                                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name} className="opacity-80 hover:opacity-100">
                                    <Icon name={s.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
