import { useEffect, useState } from 'react';
import Icon from './Icon';

// Efek mengetik untuk daftar peran
function useTyping(words, speed = 90, pause = 1600) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index % words.length];
        let timer;
        if (!deleting && text === word) {
            timer = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && text === '') {
            setDeleting(false);
            setIndex((i) => i + 1);
        } else {
            timer = setTimeout(
                () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
                deleting ? speed / 2 : speed,
            );
        }
        return () => clearTimeout(timer);
    }, [text, deleting, index, words, speed, pause]);

    return text;
}

export default function Hero({ profile, socials }) {
    const typed = useTyping(profile.roles);
    const [first, ...rest] = profile.name.split(' ');
    const last = rest.pop();

    return (
        <section id="beranda" className="relative overflow-hidden pt-28 sm:pt-32">
            <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-8 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
                <div className="reveal">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold tracking-wide">
                        <span className="size-2 rounded-full bg-[var(--accent)]" /> Portofolio · Informatika STITEK Bontang
                    </span>

                    <h1 className="mt-8 font-display text-5xl leading-[1.02] font-semibold sm:text-7xl">
                        {first} {rest.join(' ')}
                        <br />
                        <span className="text-[var(--accent)] italic">{last}</span>
                    </h1>

                    <p className="mt-6 h-8 text-xl font-semibold">
                        <span className="text-[var(--muted)]">Saya seorang </span>
                        <span>{typed}</span>
                        <span className="caret text-[var(--accent)]">|</span>
                    </p>
                    <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--muted)]">{profile.intro}</p>

                    <div className="mt-9 flex flex-wrap gap-3">
                        <a href="#proyek" className="btn btn-primary">
                            Lihat Proyek <Icon name="arrow" className="size-4" />
                        </a>
                        <a href="#kontak" className="btn btn-ghost">Hubungi Saya</a>
                    </div>

                    <div className="mt-9 flex items-center gap-3">
                        {socials.map((s) => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={s.name}
                                className="grid size-11 place-items-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--on-accent)]"
                            >
                                <Icon name={s.icon} className="size-[18px]" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Foto dalam bingkai melengkung */}
                <div className="reveal relative mx-auto w-full max-w-[340px]">
                    <div className="arch absolute inset-0 translate-x-4 translate-y-4 bg-[var(--accent-2)]" />
                    <div className="arch relative overflow-hidden border border-[var(--border)] bg-[var(--accent-soft)]" style={{ aspectRatio: '3 / 4' }}>
                        {profile.photo && <img src={profile.photo} alt={profile.name} className="size-full object-cover object-top" />}
                    </div>
                    <div className="card absolute -bottom-6 -left-6 flex items-center gap-3 px-4 py-3 shadow-xl">
                        <span className="grid size-10 place-items-center rounded-full bg-[var(--accent)] text-[var(--on-accent)]">
                            <Icon name="cap" className="size-[18px]" />
                        </span>
                        <div className="text-sm leading-tight">
                            <p className="font-semibold">Informatika</p>
                            <p className="text-[var(--muted)]">NIM {profile.nim}</p>
                        </div>
                    </div>
                    <div className="card absolute top-10 -right-4 px-4 py-3 text-sm leading-tight shadow-xl sm:-right-10">
                        <p className="font-semibold">Direktur</p>
                        <p className="text-[var(--muted)]">Silvy Clean</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
